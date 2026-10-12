<template>
  <Layout>
    <div class="profile-page">
      <div class="user-header">
        <div class="user-avatar">
          <img class="avatar-img" src="/static/images/111.jpg" />
        </div>
        <div class="user-info">
          <span class="user-name">{{ userProfile.nickname || userProfile.username || '未登录用户' }}</span>
          <span class="user-id">ID: {{ userProfile.user_id || '暂无' }}</span>
          <span class="user-grade">{{ formatGrade(userProfile.grade) }}</span>
        </div>
        <div class="action-buttons">
          <div class="refresh-icon-container" @click="refreshUserProfile">
            <RefreshCw class="refresh-icon" />
          </div>
          <div class="edit-icon-container" @click="handleEditProfile">
            <Edit3 class="edit-icon" />
          </div>
        </div>
      </div>

      <div class="stats-card">
        <div class="stat-item">
          <span class="stat-value">{{ userProfile.avg_score || 0 }}</span>
          <span class="stat-label">平均得分</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-item">
          <span class="stat-value">{{ userProfile.user_model_essay || 0 }}</span>
          <span class="stat-label">优秀范文</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-item">
          <span class="stat-value">{{ userProfile.medals || 0 }}</span>
          <span class="stat-label">写作勋章</span>
        </div>
      </div>

      <div class="menu-section">
        <div class="menu-item-card" @click="handleMenuClick('writing-portrait')">
          <div class="menu-icon-container">
            <PenTool class="menu-icon" />
          </div>
          <div class="menu-content">
            <span class="menu-text">写作画像</span>
            <span class="menu-desc">查看你的写作特点</span>
          </div>
          <ChevronRight class="menu-arrow" />
        </div>
        
        <div class="menu-item-card" @click="handleMenuClick('achievement-tracker')">
          <div class="menu-icon-container">
            <BarChart3 class="menu-icon" />
          </div>
          <div class="menu-content">
            <span class="menu-text">成长轨迹</span>
            <span class="menu-desc">查看你的成长变化</span>
          </div>
          <ChevronRight class="menu-arrow" />
        </div>

        <div class="menu-item-card" @click="handleMenuClick('my-essays')">
          <div class="menu-icon-container">
            <FileText class="menu-icon" />
          </div>
          <div class="menu-content">
            <span class="menu-text">我的作文</span>
            <span class="menu-desc">查看历史作文</span>
          </div>
          <ChevronRight class="menu-arrow" />
        </div>

        <div class="menu-item-card" @click="handleMenuClick('favorites')">
          <div class="menu-icon-container">
            <Star class="menu-icon" />
          </div>
          <div class="menu-content">
            <span class="menu-text">收藏夹</span>
            <span class="menu-desc">我的收藏内容</span>
          </div>
          <ChevronRight class="menu-arrow" />
        </div>
      </div>

      <div class="menu-section system-section">
        <div class="menu-item-card" @click="handleMenuClick('settings')">
          <div class="menu-icon-container">
            <Settings class="menu-icon" />
          </div>
          <div class="menu-content">
            <span class="menu-text">设置</span>
            <span class="menu-desc">账号与系统设置</span>
          </div>
          <ChevronRight class="menu-arrow" />
        </div>

        <div class="menu-item-card" @click="handleMenuClick('help-center')">
          <div class="menu-icon-container">
            <HelpCircle class="menu-icon" />
          </div>
          <div class="menu-content">
            <span class="menu-text">帮助中心</span>
            <span class="menu-desc">使用指南与常见问题</span>
          </div>
          <ChevronRight class="menu-arrow" />
        </div>
      </div>

      <div class="login-modal" v-if="showLoginModal">
        <div class="modal-mask" @click="showLoginModal = false"></div>
        <div class="modal-content">
          <div class="modal-header">
            <span class="modal-title">提示</span>
          </div>
          <div class="modal-body">
            <span class="modal-text">请先登录以查看个人信息</span>
          </div>
          <div class="modal-footer">
            <div class="modal-btn cancel-btn" @click="showLoginModal = false">取消</div>
            <div class="modal-divider"></div>
            <div class="modal-btn confirm-btn" @click="goToLogin">去登录</div>
          </div>
        </div>
      </div>

      <div class="loading-overlay" v-if="isLoading">
        <div class="loading-content">
          <div class="loading-spinner"></div>
          <span class="loading-text">{{ loadingText }}</span>
        </div>
      </div>

      <div class="toast" v-if="showToast">
        <span class="toast-text">{{ toastText }}</span>
      </div>
    </div>
  </Layout>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import { RefreshCw, Edit3, PenTool, BarChart3, FileText, Star, Settings, HelpCircle, ChevronRight } from 'lucide-vue-next'
import Layout from '@/components/Layout/Layout.vue'
import uni from '@/utils/uni.js'
import request from '@/common/request.js'

const router = useRouter()

const userProfile = ref({
  username: '',
  user_id: '',
  nickname: '',
  grade: null,
  user_model_essay: '',
  avg_score: 0,
  medals: 0
})

const showLoginModal = ref(false)
const isLoading = ref(false)
const loadingText = ref('加载中...')
const showToast = ref(false)
const toastText = ref('')

const gradeMap = {
  3: '三年级',
  4: '四年级', 
  5: '五年级',
  6: '六年级'
}

const formatGrade = (gradeValue) => {
  return gradeMap[gradeValue] || '未设置年级'
}

const checkLoginStatus = () => {
  const token = uni.getStorageSync('accessToken')
  const userInfo = uni.getStorageSync('userInfo')
  const isLoggedIn = !!token || (userInfo && (userInfo.user_id || userInfo.id))
  return isLoggedIn
}

const showToastMessage = (text, duration = 1500) => {
  toastText.value = text
  showToast.value = true
  setTimeout(() => {
    showToast.value = false
  }, duration)
}

const showLoadingMessage = (text) => {
  loadingText.value = text
  isLoading.value = true
}

const hideLoadingMessage = () => {
  isLoading.value = false
}

const handleMenuClick = (page) => {
  if (!checkLoginStatus()) {
    showLoginModal.value = true
    return
  }
  navigateTo(page)
}

const handleEditProfile = () => {
  if (!checkLoginStatus()) {
    showLoginModal.value = true
    return
  }
  navigateTo('edit-profile')
}

const refreshUserProfile = async () => {
  showLoadingMessage('刷新中...')
  try {
    await loadUserProfile()
  } catch (error) {
    console.error('刷新失败:', error)
  } finally {
    hideLoadingMessage()
  }
}

const getProfileApi = () => {
  return new Promise(async (resolve, reject) => {
    const accessToken = uni.getStorageSync('accessToken')
    
    if (!accessToken) {
      reject('请先登录')
      return
    }
    
    try {
      const res = await request({
        url: '/api/users/profile/',
        method: 'GET'
      })
      
      const data = res?.data || res || {}
      resolve(data)
    } catch (error) {
      console.error('获取个人信息请求失败:', error)
      if (!error) {
        reject('网络请求异常')
        return
      }
      
      const errorMessage = error.message || ''
      if (errorMessage.includes('登录已过期')) {
        reject('请先登录')
      } else if (errorMessage.includes('ECONNREFUSED')) {
        reject('服务器连接失败，使用本地数据')
      } else if (error.statusCode === 401) {
        reject('登录已过期，请重新登录')
      } else if (error.statusCode === 404) {
        reject('用户信息未找到')
      } else {
        reject(errorMessage || '获取个人信息失败')
      }
    }
  })
}

const loadUserProfile = async () => {
  const storedUserInfo = uni.getStorageSync('userInfo')
  
  if (!checkLoginStatus()) {
    userProfile.value = {
      username: '',
      user_id: '',
      nickname: '',
      grade: null,
      user_model_essay: '',
      avg_score: 0,
      medals: 0
    }
    return
  }

  try {
    const profileData = await getProfileApi()
    
    if (!profileData || typeof profileData !== 'object') {
      throw new Error('无效的响应数据')
    }
    
    uni.setStorageSync('lastProfileResponse', JSON.stringify(profileData))
    
    const userData = (profileData && (profileData.user || profileData.user_info || profileData)) || {}
    
    userProfile.value = {
      username: userData?.username || userData?.name || '',
      user_id: userData?.user_id || userData?.id || storedUserInfo?.user_id || storedUserInfo?.id || '暂无',
      nickname: userData?.nickname || userData?.username || userData?.name || storedUserInfo?.nickname || '未登录用户',
      grade: userData?.grade ?? storedUserInfo?.grade ?? null,
      user_model_essay: userData?.user_model_essay || userData?.excellent_essays || '0',
      avg_score: userData?.avg_score || userData?.average_score || 0,
      medals: userData?.medals || 0
    }
    
    showToastMessage('个人信息已更新')
    
  } catch (error) {
    console.error('加载用户资料失败:', error)
    
    const safeStoredInfo = storedUserInfo || {}
    userProfile.value = {
      username: safeStoredInfo?.username || '',
      user_id: safeStoredInfo?.user_id || safeStoredInfo?.id || '暂无',
      nickname: safeStoredInfo?.nickname || safeStoredInfo?.username || '未知用户',
      grade: safeStoredInfo?.grade ?? null,
      user_model_essay: safeStoredInfo?.user_model_essay || '0',
      avg_score: safeStoredInfo?.avg_score || 0,
      medals: safeStoredInfo?.medals || 0
    }
    
    const errorString = error?.toString() || ''
    if (errorString === '请先登录' || errorString.includes('401') || errorString.includes('登录已过期')) {
      uni.setStorageSync('accessToken', '')
      uni.setStorageSync('refreshToken', '')
      showLoginModal.value = true
    } else {
      showToastMessage('网络获取失败，显示缓存数据')
    }
  }
}

const goToLogin = () => {
  showLoginModal.value = false
  router.push('/pages/login/login')
}

const navigateTo = (page) => {
  const routes = {
    'writing-portrait': '/pages/profile/portrait',
    'achievement-tracker': '/pages/profile/variation',
    'my-essays': '/pages/profile/my_essay',
    'favorites': '/pages/profile/favourites',
    'settings': '/pages/profile/settings',
    'help-center': '/pages/profile/help',
    'edit-profile': '/pages/profile/edit'
  }
  
  if (routes[page]) {
    router.push(routes[page])
  }
}

const lastCheckToken = ref(uni.getStorageSync('accessToken'))

onMounted(() => {
  loadUserProfile()
  
  try {
    const checkInterval = setInterval(() => {
      const currentToken = uni.getStorageSync('accessToken')
      if (currentToken && currentToken !== lastCheckToken.value) {
        lastCheckToken.value = currentToken
        loadUserProfile()
      }
    }, 30000)
    
    onBeforeUnmount(() => {
      clearInterval(checkInterval)
    })
  } catch (error) {
    console.log('设置登录状态监听失败:', error)
  }
})
</script>

<style scoped>
.profile-page {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0;
  background: linear-gradient(to bottom, #ecfdf5, #d1fae5);
  min-height: 100vh;
  padding-bottom: 60px;
}

.login-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-mask {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background: #ffffff;
  border-radius: 12px;
  width: 300px;
  overflow: hidden;
  z-index: 1001;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
}

.modal-header {
  padding: 20px 16px 10px;
  text-align: center;
}

.modal-title {
  font-size: 16px;
  font-weight: bold;
  color: #333333;
}

.modal-body {
  padding: 0 16px 20px;
  text-align: center;
}

.modal-text {
  font-size: 14px;
  color: #666666;
  line-height: 1.5;
}

.modal-footer {
  display: flex;
  border-top: 1px solid #e0e0e0;
  height: 50px;
}

.modal-btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  height: 100%;
  cursor: pointer;
}

.cancel-btn {
  color: #666666;
}

.confirm-btn {
  color: #10B981;
  font-weight: 600;
}

.modal-divider {
  width: 1px;
  background-color: #e0e0e0;
  height: 100%;
}

.user-header {
  display: flex;
  align-items: center;
  background: linear-gradient(to right, #ecfdf5, #d1fae5);
  padding: 20px 15px;
  height: 100px;
  position: relative;
}

.user-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ffffff;
  margin-right: 12px;
  overflow: hidden;
  border: 3px solid #ffffff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.user-info {
  flex: 1;
}

.user-name {
  font-size: 18px;
  font-weight: bold;
  display: block;
  margin-bottom: 4px;
  color: #333F48;
}

.user-id, .user-grade {
  font-size: 12px;
  color: #666666;
  display: block;
  margin-bottom: 2px;
}

.edit-icon-container {
  width: 30px;
  height: 30px;
  background-color: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
  cursor: pointer;
}

.action-buttons {
  display: flex;
  gap: 8px;
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
}

.refresh-icon-container {
  width: 30px;
  height: 30px;
  background-color: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
  cursor: pointer;
}

.refresh-icon {
  width: 14px;
  height: 14px;
  color: #666;
}

.edit-icon {
  width: 14px;
  height: 14px;
  color: #666;
}

.stats-card {
  display: flex;
  background: #ffffff;
  border-radius: 8px;
  padding: 15px 0;
  margin: -20px 15px 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(16, 185, 129, 0.15);
  position: relative;
  z-index: 2;
}

.stat-item {
  flex: 1;
  text-align: center;
}

.stat-value {
  font-size: 22px;
  font-weight: bold;
  color: #10B981;
  display: block;
  margin-bottom: 3px;
}

.stat-label {
  font-size: 11px;
  color: #7F8C8D;
}

.stat-divider {
  width: 1px;
  background-color: rgba(16, 185, 129, 0.15);
  margin: 0 8px;
  height: 20px;
  align-self: center;
}

.menu-section {
  margin: 0 15px 12px;
}

.system-section {
  margin-top: 16px;
}

.menu-item-card {
  display: flex;
  align-items: center;
  background: #ffffff;
  border-radius: 8px;
  padding: 14px 12px;
  margin-bottom: 8px;
  box-shadow: 0 2px 6px rgba(16, 185, 129, 0.08);
  border: 1px solid rgba(16, 185, 129, 0.1);
  transition: all 0.2s ease;
  cursor: pointer;
  position: relative;
}

.menu-item-card:active {
  background: #f8f9fa;
  transform: translateY(1px);
}

.menu-icon-container {
  width: 35px;
  height: 35px;
  background-color: rgba(16, 185, 129, 0.08);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
}

.menu-icon {
  width: 16px;
  height: 16px;
  color: #10B981;
}

.menu-content {
  flex: 1;
  margin-right: auto;
}

.menu-text {
  font-size: 15px;
  color: #333333;
  font-weight: 500;
  display: block;
  margin-bottom: 2px;
}

.menu-desc {
  font-size: 11px;
  color: #7F8C8D;
  display: block;
}

.menu-arrow {
  width: 14px;
  height: 14px;
  position: absolute;
  right: 12px;
  color: #999;
}

.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
}

.loading-content {
  background: #ffffff;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.loading-spinner {
  width: 30px;
  height: 30px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #10B981;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loading-text {
  margin-top: 10px;
  font-size: 14px;
  color: #666666;
}

.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.7);
  border-radius: 4px;
  padding: 10px 20px;
  z-index: 3000;
}

.toast-text {
  font-size: 14px;
  color: #ffffff;
}
</style>
