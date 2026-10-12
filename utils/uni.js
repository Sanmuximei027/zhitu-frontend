const uni = {
  getStorageSync: (key) => {
    try {
      const value = localStorage.getItem(key)
      if (value === null) return null
      try {
        return JSON.parse(value)
      } catch {
        return value
      }
    } catch {
      return null
    }
  },
  
  setStorageSync: (key, value) => {
    try {
      const strValue = typeof value === 'string' ? value : JSON.stringify(value)
      localStorage.setItem(key, strValue)
    } catch (e) {
      console.error('Storage error:', e)
    }
  },
  
  removeStorageSync: (key) => {
    try {
      localStorage.removeItem(key)
    } catch (e) {
      console.error('Storage error:', e)
    }
  },
  
  showToast: (options) => {
    const toast = document.createElement('div')
    toast.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(0, 0, 0, 0.7);
      color: #fff;
      padding: 20px 30px;
      border-radius: 10px;
      font-size: 14px;
      z-index: 99999;
      text-align: center;
      min-width: 120px;
    `
    toast.textContent = options.title || ''
    document.body.appendChild(toast)
    
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast)
      }
    }, options.duration || 2000)
  },
  
  showModal: (options) => {
    return new Promise((resolve) => {
      const overlay = document.createElement('div')
      overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 99999;
      `
      
      const modal = document.createElement('div')
      modal.style.cssText = `
        background: #fff;
        border-radius: 16px;
        width: 90%;
        max-width: 400px;
        overflow: hidden;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
      `
      
      const header = document.createElement('div')
      header.style.cssText = `
        padding: 20px;
        border-bottom: 1px solid #f0f0f0;
        font-weight: 600;
        font-size: 16px;
        text-align: center;
      `
      header.textContent = options.title || '提示'
      
      const content = document.createElement('div')
      content.style.cssText = `
        padding: 30px 20px;
        text-align: center;
        font-size: 14px;
        color: #666;
        line-height: 1.6;
      `
      content.textContent = options.content || ''
      
      const footer = document.createElement('div')
      footer.style.cssText = `
        display: flex;
        border-top: 1px solid #f0f0f0;
      `
      
      const cancelBtn = document.createElement('button')
      cancelBtn.style.cssText = `
        flex: 1;
        padding: 15px;
        border: none;
        background: none;
        font-size: 14px;
        color: #666;
        border-right: 1px solid #f0f0f0;
        cursor: pointer;
      `
      cancelBtn.textContent = options.cancelText || '取消'
      cancelBtn.onclick = () => {
        document.body.removeChild(overlay)
        resolve({ confirm: false, cancel: true })
      }
      
      const confirmBtn = document.createElement('button')
      confirmBtn.style.cssText = `
        flex: 1;
        padding: 15px;
        border: none;
        background: none;
        font-size: 14px;
        color: #10B981;
        font-weight: 500;
        cursor: pointer;
      `
      confirmBtn.textContent = options.confirmText || '确定'
      confirmBtn.onclick = () => {
        document.body.removeChild(overlay)
        resolve({ confirm: true, cancel: false })
      }
      
      footer.appendChild(cancelBtn)
      footer.appendChild(confirmBtn)
      
      if (options.showCancel === false) {
        footer.removeChild(cancelBtn)
        confirmBtn.style.borderRight = 'none'
      }
      
      modal.appendChild(header)
      modal.appendChild(content)
      modal.appendChild(footer)
      overlay.appendChild(modal)
      document.body.appendChild(overlay)
    })
  },
  
  showLoading: (options) => {
    const loading = document.createElement('div')
    loading.id = 'uni-loading'
    loading.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(0, 0, 0, 0.7);
      color: #fff;
      padding: 20px;
      border-radius: 10px;
      font-size: 14px;
      z-index: 99999;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    `
    
    const spinner = document.createElement('div')
    spinner.style.cssText = `
      width: 32px;
      height: 32px;
      border: 3px solid #fff;
      border-top-color: transparent;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    `
    
    const text = document.createElement('span')
    text.textContent = options.title || '加载中...'
    
    loading.appendChild(spinner)
    loading.appendChild(text)
    document.body.appendChild(loading)
    
    const style = document.createElement('style')
    style.textContent = `
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `
    document.head.appendChild(style)
  },
  
  hideLoading: () => {
    const loading = document.getElementById('uni-loading')
    if (loading && loading.parentNode) {
      loading.parentNode.removeChild(loading)
    }
  },
  
  request: (options) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      let url = options.url
      const method = options.method || 'GET'
      
      if (method.toUpperCase() === 'GET' && options.data) {
        const params = new URLSearchParams()
        Object.keys(options.data).forEach(key => {
          params.append(key, options.data[key])
        })
        const queryString = params.toString()
        if (queryString) {
          url += (url.includes('?') ? '&' : '?') + queryString
        }
      }
      
      xhr.open(method, url, true)
      
      const headers = options.header || {}
      Object.keys(headers).forEach(key => {
        xhr.setRequestHeader(key, headers[key])
      })
      
      xhr.onload = () => {
        const response = {
          statusCode: xhr.status,
          data: null
        }
        try {
          response.data = JSON.parse(xhr.responseText)
        } catch {
          response.data = xhr.responseText
        }
        resolve(response)
      }
      
      xhr.onerror = () => {
        reject(new Error('Network error'))
      }
      
      if (method.toUpperCase() !== 'GET' && options.data) {
        const isFormData = options.data instanceof FormData
        if (!isFormData && !headers['Content-Type']) {
          xhr.setRequestHeader('Content-Type', 'application/json')
        }
        xhr.send(isFormData ? options.data : JSON.stringify(options.data))
      } else {
        xhr.send()
      }
    })
  },
  
  navigateTo: (options) => {
    const url = options.url
    const router = window.__vueRouter__
    if (router) {
      router.push(url)
    }
  },
  
  navigateBack: (options) => {
    const router = window.__vueRouter__
    if (router) {
      router.back()
    }
  },
  
  redirectTo: (options) => {
    const url = options.url
    const router = window.__vueRouter__
    if (router) {
      router.replace(url)
    }
  },
  
  switchTab: (options) => {
    const url = options.url
    const router = window.__vueRouter__
    if (router) {
      router.push(url)
    }
  },
  
  getSystemInfoSync: () => {
    return {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      pixelRatio: window.devicePixelRatio
    }
  },
  
  stopPullDownRefresh: () => {
    console.log('stopPullDownRefresh')
  }
}

export default uni
