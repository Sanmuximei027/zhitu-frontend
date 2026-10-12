import uni from './uni.js'
import { getApiBaseUrl } from './apiBase'

const baseUrl = getApiBaseUrl()

let isRefreshing = false
let refreshQueue = []

export const isTokenExpired = (token) => {
  if (!token) return true
  // 复用 parseJwt（正确处理 base64url 编码），避免纯 atob 解析失败导致令牌被误判为过期
  const payload = parseJwt(token)
  if (!payload || !payload.exp) return true
  const currentTime = Math.floor(Date.now() / 1000)
  return payload.exp < currentTime
}

export const isRefreshTokenValid = () => {
  const refreshToken = uni.getStorageSync('refreshToken')
  return !isTokenExpired(refreshToken)
}

export const checkLoginStatus = () => {
  const accessToken = uni.getStorageSync('accessToken')
  const refreshToken = uni.getStorageSync('refreshToken')
  
  if (!accessToken && !refreshToken) {
    return 'not_logged_in'
  }
  
  if (accessToken && !isTokenExpired(accessToken)) {
    return 'logged_in'
  }
  
  if (refreshToken && !isTokenExpired(refreshToken)) {
    return 'needs_refresh'
  }
  
  return 'expired'
}

export const refreshAccessToken = async () => {
  if (isRefreshing) {
    console.log('刷新令牌正在进行中，加入等待队列...')
    return new Promise((resolve, reject) => {
      refreshQueue.push({ resolve, reject })
    })
  }

  isRefreshing = true
  console.log('开始刷新访问令牌...')

  try {
    const refreshToken = uni.getStorageSync('refreshToken')
    
    if (!refreshToken) {
      throw new Error('无刷新令牌')
    }
    
    if (isTokenExpired(refreshToken)) {
      clearAllTokens()
      throw new Error('刷新令牌已过期，请重新登录')
    }

    const response = await uni.request({
      url: `${baseUrl}/api/users/token_refresh/`,
      method: 'POST',
      data: { refresh: refreshToken },
      header: {
        'Content-Type': 'application/json'
      }
    })

    console.log('刷新令牌响应状态:', response.statusCode)
    console.log('刷新令牌响应数据:', JSON.stringify(response.data))

    if (response.statusCode === 200) {
      let newAccessToken
      
      if (response.data.access) {
        newAccessToken = response.data.access
      } else if (response.data.token) {
        newAccessToken = response.data.token
      } else if (response.data.data && response.data.data.access) {
        newAccessToken = response.data.data.access
      } else if (typeof response.data === 'string') {
        newAccessToken = response.data
      } else {
        console.error('无效的响应格式，无法找到access token:', response.data)
        throw new Error('刷新令牌失败: 无效的响应格式')
      }
      
      if (!newAccessToken) {
        throw new Error('刷新令牌失败: 未返回访问令牌')
      }
      
      uni.setStorageSync('accessToken', newAccessToken)
      // 后端开启 ROTATE_REFRESH_TOKENS，刷新时会返回新 refreshToken，需同步保存
      if (response.data.refresh) {
        uni.setStorageSync('refreshToken', response.data.refresh)
      }
      console.log('令牌刷新成功，新令牌长度:', newAccessToken.length)
      
      refreshQueue.forEach(({ resolve }) => resolve(newAccessToken))
      refreshQueue = []
      
      return newAccessToken
    } else {
      const errorMsg = response.data.detail || response.data.message || response.data.error || JSON.stringify(response.data) || '未知错误'
      console.error('刷新令牌失败，状态码:', response.statusCode, '错误信息:', errorMsg)
      throw new Error(`刷新令牌失败: ${errorMsg}`)
    }
  } catch (error) {
    console.error('刷新令牌请求失败:', error)
    
    refreshQueue.forEach(({ reject }) => reject(error))
    refreshQueue = []
    
    if (error.message.includes('过期') || error.message.includes('无刷新令牌')) {
      clearAllTokens()
      throw new Error('登录已过期，请重新登录')
    }
    
    throw error
  } finally {
    isRefreshing = false
  }
}

export const clearAllTokens = () => {
  uni.removeStorageSync('accessToken')
  uni.removeStorageSync('refreshToken')
  uni.removeStorageSync('userInfo')
  uni.removeStorageSync('isGuest')
  console.log('所有令牌已清除')
}

export const requestWithAuth = async (options) => {
  try {
    let accessToken = uni.getStorageSync('accessToken')
    
    const loginStatus = checkLoginStatus()
    console.log('当前登录状态:', loginStatus)
    
    if (loginStatus === 'not_logged_in') {
      console.log('用户未登录，跳转到登录页')
      const router = window.__vueRouter__
      if (router) {
        router.push('/pages/login/login')
      }
      throw new Error('请先登录')
    }
    
    if (loginStatus === 'needs_refresh') {
      console.log('访问令牌过期，尝试刷新...')
      try {
        accessToken = await refreshAccessToken()
        console.log('刷新成功，使用新令牌:', accessToken.substring(0, 20) + '...')
      } catch (refreshError) {
        console.error('令牌刷新失败:', refreshError)
        clearAllTokens()
        const router = window.__vueRouter__
        if (router) {
          router.push('/pages/login/login')
        }
        throw new Error('登录已过期，请重新登录')
      }
    }
    
    if (loginStatus === 'expired') {
      console.log('令牌已完全过期')
      clearAllTokens()
      const router = window.__vueRouter__
      if (router) {
        router.push('/pages/login/login')
      }
      throw new Error('登录已过期，请重新登录')
    }

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`,
      ...options.headers
    }

    console.log('发起认证请求:', options.url)
    const response = await uni.request({
      ...options,
      header: headers
    })

    if (response.statusCode === 401) {
      console.log('请求返回401，尝试刷新令牌并重试...')
      try {
        const newAccessToken = await refreshAccessToken()
        headers.Authorization = `Bearer ${newAccessToken}`

        console.log('使用新令牌重试请求...')
        const retryResponse = await uni.request({
          ...options,
          header: headers
        })
        return retryResponse
      } catch (retryError) {
        console.error('重试请求失败:', retryError)
        clearAllTokens()
        const router = window.__vueRouter__
        if (router) {
          router.push('/pages/login/login')
        }
        throw new Error('登录已过期，请重新登录')
      }
    }
    
    return response
    
  } catch (error) {
    console.error('认证请求失败:', error)
    throw error
  }
}

export const getCurrentUser = () => {
  return uni.getStorageSync('userInfo') || null
}

export const isGuestMode = () => {
  return uni.getStorageSync('isGuest') || false
}

export const parseJwt = (token) => {
  try {
    if (!token) return null
    const base64Url = token.split('.')[1]
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    }).join(''))
    return JSON.parse(jsonPayload)
  } catch (error) {
    console.error('解析JWT失败:', error)
    return null
  }
}

export const getTokenRemainingTime = (token) => {
  const payload = parseJwt(token)
  if (!payload || !payload.exp) return 0
  const currentTime = Math.floor(Date.now() / 1000)
  return Math.max(0, payload.exp - currentTime)
}