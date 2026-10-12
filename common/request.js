import uni from '@/utils/uni.js'
import { getApiBaseUrl } from '@/utils/apiBase'

const baseUrl = getApiBaseUrl();

let isRefreshing = false;
let refreshQueue = [];

const isTokenExpired = (token) => {
  if (!token) return true;
  try {
    // JWT 是 base64url 编码，需先转换为标准 base64 再解析
    const base64 = token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64).split('').map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join('')
    );
    const payload = JSON.parse(jsonPayload);
    const currentTime = Math.floor(Date.now() / 1000);
    return payload.exp < currentTime;
  } catch (error) {
    return true;
  }
};

const refreshAccessToken = async () => {
  if (isRefreshing) {
    return new Promise((resolve, reject) => {
      refreshQueue.push({ resolve, reject });
    });
  }

  isRefreshing = true;

  try {
    const refreshToken = uni.getStorageSync('refreshToken');
    if (!refreshToken) {
      throw new Error('无刷新令牌');
    }

    const response = await uni.request({
      url: `${baseUrl}/api/users/token_refresh/`,
      method: 'POST',
      data: { refresh: refreshToken }
    });

    if (response.data && response.data.access) {
      const newAccessToken = response.data.access;
      uni.setStorageSync('accessToken', newAccessToken);
      // 后端开启 ROTATE_REFRESH_TOKENS，刷新时会返回新 refreshToken，需同步保存
      if (response.data.refresh) {
        uni.setStorageSync('refreshToken', response.data.refresh);
      }
      
      refreshQueue.forEach(({ resolve }) => resolve(newAccessToken));
      refreshQueue = [];
      
      return newAccessToken;
    } else {
      throw new Error('刷新令牌失败');
    }
  } catch (error) {
    refreshQueue.forEach(({ reject }) => reject(error));
    refreshQueue = [];
    
    if (error.message.includes('刷新令牌失败') || error.message.includes('无刷新令牌')) {
      uni.removeStorageSync('accessToken');
      uni.removeStorageSync('refreshToken');
      uni.removeStorageSync('userInfo');
      throw new Error('登录已过期，请重新登录');
    }
    
    throw error;
  } finally {
    isRefreshing = false;
  }
};

export default function request(options) {
  return new Promise(async (resolve, reject) => {
    try {
      let accessToken = uni.getStorageSync('accessToken');
      
      if (accessToken && isTokenExpired(accessToken)) {
        try {
          accessToken = await refreshAccessToken();
        } catch (refreshError) {
          if (refreshError.message.includes('登录已过期')) {
            uni.showToast({ title: '登录已过期，请重新登录', icon: 'none' });
            const router = window.__vueRouter__;
            if (router) {
              router.push('/pages/login/login');
            }
          }
          reject(refreshError);
          return;
        }
      }

      const headers = {
        'Content-Type': 'application/json',
        ...options.headers
      };

      if (accessToken) {
        headers['Authorization'] = `Bearer ${accessToken}`;
      }

      const res = await uni.request({
        url: baseUrl + options.url,
        method: options.method || 'GET',
        header: headers,
        data: options.data || {}
      });

      if (res.statusCode === 200) {
        console.log('Request success:', res.data);
        resolve(res.data);
      } else if (res.statusCode === 401) {
        uni.removeStorageSync('accessToken');
        uni.removeStorageSync('refreshToken');
        uni.showToast({ title: '登录已过期，请重新登录', icon: 'none' });
        const router = window.__vueRouter__;
        if (router) {
          router.push('/pages/login/login');
        }
        reject(res);
      } else {
        console.log('Request failed:', res);
        uni.showToast({
          title: res.data?.message || '请求失败',
          icon: 'none'
        });
        reject(res);
      }
    } catch (error) {
      console.log('Request error:', error);
      uni.showToast({ title: '网络错误', icon: 'none' });
      reject(error);
    }
  });
}

// 流式SSE请求：复用token刷新逻辑，用fetch + ReadableStream逐块接收后端SSE
export async function requestStream(options, callbacks = {}) {
  const { onDelta, onDone } = callbacks;

  let accessToken = uni.getStorageSync('accessToken');

  if (accessToken && isTokenExpired(accessToken)) {
    accessToken = await refreshAccessToken();
  }

  const headers = {
    'Content-Type': 'application/json',
    ...options.headers
  };

  if (accessToken) {
    headers['Authorization'] = `Bearer ${accessToken}`;
  }

  const resp = await fetch(baseUrl + options.url, {
    method: options.method || 'POST',
    headers,
    body: options.data ? JSON.stringify(options.data) : undefined
  });

  if (resp.status === 401) {
    uni.removeStorageSync('accessToken');
    uni.removeStorageSync('refreshToken');
    uni.showToast({ title: '登录已过期，请重新登录', icon: 'none' });
    const router = window.__vueRouter__;
    if (router) {
      router.push('/pages/login/login');
    }
    throw new Error('登录已过期');
  }

  if (!resp.ok) {
    let message = `请求失败: ${resp.status}`;
    try {
      const errData = await resp.json();
      if (errData && errData.message) {
        message = errData.message;
      }
    } catch (e) {
      // 响应体非JSON时使用默认错误信息
    }
    uni.showToast({ title: message, icon: 'none' });
    throw new Error(message);
  }

  const reader = resp.body.getReader();
  const decoder = new TextDecoder('utf-8');
  let buffer = '';
  let full = '';

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });

    // SSE事件以空行(\n\n)分隔
    const parts = buffer.split('\n\n');
    buffer = parts.pop();

    for (const part of parts) {
      const dataLine = part.split('\n').find(l => l.startsWith('data:'));
      if (!dataLine) continue;
      const payload = dataLine.slice(5).trim();
      if (!payload) continue;
      let obj;
      try {
        obj = JSON.parse(payload);
      } catch (e) {
        continue;
      }
      if (obj.error) {
        throw new Error(obj.error);
      }
      if (obj.delta) {
        full += obj.delta;
        if (onDelta) onDelta(obj.delta, full);
      }
      if (obj.done) {
        const finalText = obj.response || full;
        if (onDone) onDone(finalText);
        return finalText;
      }
    }
  }

  return full;
}
