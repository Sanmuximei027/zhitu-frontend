// 运行时自动构建 API 基础地址
// 本地开发（localhost / 127.0.0.1）沿用 .env 中的 VITE_API_URL；
// 部署到服务器后按当前访问的 hostname 自动拼接后端 8000 端口，换服务器无需重新打包
const DEV_HOSTS = ['localhost', '127.0.0.1']

export const getApiBaseUrl = () => {
  try {
    const { protocol, hostname } = window.location
    if (DEV_HOSTS.includes(hostname)) {
      return import.meta.env.VITE_API_URL || 'http://localhost:8000'
    }
    return `${protocol}//${hostname}:8000`
  } catch (e) {
    return import.meta.env.VITE_API_URL || 'http://localhost:8000'
  }
}

export default getApiBaseUrl
