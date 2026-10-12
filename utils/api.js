// utils/api.js
// 基础URL配置
export const BASE_URL = '/api/users/'; // 基于代理的相对路径
export const AI_BASE_URL = '/api/ai/'; // AI相关接口基础路径

// 请求选项配置
export const requestOptions = {
  header: { 'Content-Type': 'application/json' },
  withCredentials: true // 登录相关接口必须携带Cookie
};

// 用户相关API
export const userApi = {
  register: BASE_URL + 'register',
  login: BASE_URL + 'login',
  // 其他用户相关接口...
};

// AI助手相关API
export const aiApi = {
  // 发送AI消息
  sendMessage: AI_BASE_URL + 'chat',
  // 获取AI聊天历史
  getHistory: AI_BASE_URL + 'history',
  // 获取AI功能列表
  getFeatures: AI_BASE_URL + 'features',
  // 验证AI助手密码
  verifyPassword: AI_BASE_URL + 'verify-password',
  // 上传文件给AI分析
  uploadFile: AI_BASE_URL + 'upload',
  // 获取AI建议内容
  getSuggestions: AI_BASE_URL + 'suggestions'
};

// 通用请求方法
export const request = (url, options = {}) => {
  return new Promise((resolve, reject) => {
    uni.request({
      url,
      ...requestOptions,
      ...options,
      success: (res) => {
        if (res.statusCode === 200) {
          resolve(res.data);
        } else {
          reject(new Error(`请求失败: ${res.statusCode}`));
        }
      },
      fail: (err) => {
        reject(err);
      }
    });
  });
};

// AI相关请求方法
export const aiRequest = (apiPath, data = {}, method = 'POST') => {
  return request(apiPath, {
    method,
    data
  });
};