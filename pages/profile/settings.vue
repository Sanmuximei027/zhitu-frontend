<template>
  <div class="settings-page">
    <div class="nav-header">
      <div class="nav-back" @click="goBack">
        <ArrowLeft class="back-icon" />
      </div>
      <span class="nav-title">设置</span>
    </div>

    <div class="settings-menu">
      <div class="menu-item" @click="navigateTo('account-security')">
        <span class="menu-text">账号与安全</span>
        <ChevronRight class="menu-arrow" />
      </div>

      <div class="menu-item" @click="navigateTo('privacy-collection')">
        <span class="menu-text">个人信息收集清单</span>
        <ChevronRight class="menu-arrow" />
      </div>

      <div class="menu-item" @click="navigateTo('third-party-sharing')">
        <span class="menu-text">第三方信息共享清单</span>
        <ChevronRight class="menu-arrow" />
      </div>

      <div class="menu-item logout-item" @click="showLogoutConfirm = true">
        <span class="logout-text">退出登录</span>
      </div>
    </div>

    <div class="logout-modal" v-if="showLogoutConfirm">
      <div class="modal-mask" @click="showLogoutConfirm = false"></div>
      <div class="modal-content">
        <div class="modal-header">
          <span class="modal-title">退出登录</span>
        </div>
        <div class="modal-body">
          <span class="modal-text">确定要退出登录吗？</span>
        </div>
        <div class="modal-footer">
          <div class="modal-btn cancel-btn" @click="showLogoutConfirm = false">取消</div>
          <div class="modal-divider"></div>
          <div class="modal-btn confirm-btn" @click="handleLogout">确定</div>
        </div>
      </div>
    </div>

    <div class="toast" v-if="showToast">
      <span class="toast-text">{{ toastText }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ArrowLeft, ChevronRight } from 'lucide-vue-next'
import uni from '@/utils/uni.js'
import request from '@/common/request.js'

const router = useRouter()

const showLogoutConfirm = ref(false)
const showToast = ref(false)
const toastText = ref('')

const showToastMessage = (text) => {
  toastText.value = text
  showToast.value = true
  setTimeout(() => {
    showToast.value = false
  }, 1500)
}

const goBack = () => {
  router.back()
}

const navigateTo = (page) => {
  const routes = {
    'account-security': '/pages/profile/account-security',
    'privacy-collection': '/pages/profile/privacy-collection',
    'third-party-sharing': '/pages/profile/third-party-sharing'
  }
  
  if (routes[page]) {
    router.push(routes[page])
  }
}

const logoutApi = () => {
  return new Promise((resolve, reject) => {
    const refreshToken = uni.getStorageSync('refreshToken')
    
    if (!refreshToken) {
      reject('未找到刷新令牌')
      return
    }
    
    request({
      url: '/api/users/logout/',
      method: 'POST',
      data: {
        refresh: refreshToken
      },
      header: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (res.statusCode === 200 && res.data.status === 'success') {
        resolve(true)
      } else {
        reject(res.data.message || '登出失败')
      }
    })
    .catch(err => {
      reject('网络请求失败')
    })
  })
}

const handleLogout = async () => {
  showLogoutConfirm.value = false
  
  try {
    await logoutApi()
  } catch (error) {
    console.error('退出登录失败:', error)
  }
  
  uni.setStorageSync('accessToken', '')
  uni.setStorageSync('refreshToken', '')
  uni.setStorageSync('userInfo', '')
  
  showToastMessage('已退出登录')
  
  setTimeout(() => {
    router.push('/pages/login/login')
  }, 1500)
}
</script>

<style scoped>
.settings-page {
  max-width: 1400px;
  margin: 0 auto;
  background-color: #f5f7fa;
  min-height: 100vh;
}

.nav-header {
  display: flex;
  align-items: center;
  padding: 20px 15px 15px;
  background-color: #ffffff;
  border-bottom: 1px solid #e0e6ed;
}

.nav-back {
  width: 20px;
  height: 20px;
  margin-right: 10px;
  cursor: pointer;
}

.back-icon {
  width: 24px;
  height: 24px;
  color: #333333;
}

.nav-title {
  font-size: 18px;
  font-weight: bold;
  color: #333F48;
}

.settings-menu {
  margin: 10px;
}

.menu-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  padding: 16px 12px;
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;
}

.menu-item:first-child {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.menu-item:last-child {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom: none;
}

.menu-text {
  font-size: 15px;
  color: #333333;
  font-weight: 500;
}

.menu-arrow {
  width: 16px;
  height: 16px;
  color: #999999;
}

.logout-item {
  margin-top: 20px;
  justify-content: center;
  background: #ffffff;
  border-radius: 8px;
}

.logout-text {
  font-size: 15px;
  color: #FF4D4F;
  font-weight: 500;
}

.logout-modal {
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
  color: #FF4D4F;
  font-weight: 600;
}

.modal-divider {
  width: 1px;
  background-color: #e0e0e0;
  height: 100%;
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
