﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿<template>
  <div class="login-page">
    <span class="help-link" @click="openHelp">帮助</span>

    <img class="app-logo" src="/static/images/logo.png" />
    <span class="app-title">知途</span>
    <span class="app-subtitle">你的学习好帮手</span>

    <div class="input-group">
      <User class="input-icon" />
      <input 
        class="input-field" 
        type="text" 
        v-model="username" 
        placeholder="请输入用户名" 
        @input="clearError('username')"
      />
    </div>
    <span class="error-tip" v-if="errors.username">{{ errors.username }}</span>

    <div class="input-group">
      <Lock class="input-icon" />
      <input 
        class="input-field" 
        type="password" 
        v-model="password" 
        placeholder="请输入密码" 
        @input="clearError('password')"
      />
    </div>
    <span class="error-tip" v-if="errors.password">{{ errors.password }}</span>

    <span class="error-tip global-error" v-if="errors.global">{{ errors.global }}</span>

    <div class="agree-row">
      <input type="checkbox" class="agree-check" :checked="isAgree" @change="toggleAgree" />
      <span class="agree-text">
        我已经阅读并同意
        <span class="agree-link" @click="openAgreement('user')">《用户协议》</span>
        及
        <span class="agree-link" @click="openAgreement('privacy')">《隐私协议》</span>
      </span>
    </div>

    <button class="login-btn" @click="handleLogin" :disabled="isLoading">
      <span v-if="isLoading">登录中...</span>
      <span v-else>登录</span>
    </button>

    <div class="link-row">
      <span class="link-text" @click="navigateToRegister">新用户注册</span>
      <span class="divider">|</span>
      <span class="link-text">忘记密码？</span>
      <span class="divider">|</span>
      <span class="link-text" @click="handleGuestAccess">游客访问</span>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { User, Lock } from 'lucide-vue-next'
import { isTokenExpired, refreshAccessToken, clearAllTokens } from '@/utils/tokenManager'
import uni from '@/utils/uni.js'

const router = useRouter()

const username = ref('')
const password = ref('')
const isAgree = ref(false)
const isLoading = ref(false)
const errors = reactive({
  username: '',
  password: '',
  global: ''
})

const navigateToHome = () => {
  router.push('/pages/home/index')
}

const checkLoginStatus = () => {
  const accessToken = uni.getStorageSync('accessToken')
  
  if (accessToken && !isTokenExpired(accessToken)) {
    navigateToHome()
  } else if (accessToken) {
    refreshAccessToken()
      .then(() => {
        navigateToHome()
      })
      .catch((error) => {
        console.log('令牌刷新失败，需要重新登录:', error.message)
        if (error.message.includes('无刷新令牌') || error.message.includes('登录已过期')) {
          clearAllTokens()
        }
      })
  }
}

onMounted(() => {
  checkLoginStatus()
  prefillDemoAccount()
})

// 审核演示账号预填：清空 .env 中的 VITE_DEMO_USER 即可关闭
const prefillDemoAccount = () => {
  const demoUser = import.meta.env.VITE_DEMO_USER
  const demoPass = import.meta.env.VITE_DEMO_PASS
  if (demoUser && demoPass && !username.value) {
    username.value = demoUser
    password.value = demoPass
    isAgree.value = true
  }
}

const clearError = (field) => {
  errors[field] = ''
  errors.global = ''
}

const toggleAgree = () => {
  isAgree.value = !isAgree.value
}

const validateForm = () => {
  let valid = true

  if (!username.value.trim()) {
    errors.username = '请输入用户名'
    valid = false
  }

  if (!password.value) {
    errors.password = '请输入密码'
    valid = false
  } else if (password.value.length < 6) {
    errors.password = '密码长度不能少于6位'
    valid = false
  }

  if (!isAgree.value) {
    uni.showToast({
      title: '请同意用户协议',
      icon: 'none',
      duration: 2000
    })
    valid = false
  }

  return valid
}

const handleGuestAccess = () => {
  uni.showModal({
    title: '游客访问',
    content: '以游客身份访问，部分功能可能受限',
    confirmText: '确定',
    cancelText: '取消',
    success: (res) => {
      if (res.confirm) {
        uni.setStorageSync('isGuest', true)
        uni.showToast({
          title: '欢迎游客访问',
          icon: 'success'
        })
        setTimeout(() => {
          navigateToHome()
        }, 1000)
      }
    }
  })
}

const handleLogin = async () => {
  if (!validateForm()) return

  try {
    isLoading.value = true
    
    const response = await fetch('/api/users/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username.value.trim(),
        password: password.value
      })
    })
    
    const res = await response.json()

    if (res.status === 'success') {
      uni.showToast({ title: res.message || '登录成功', icon: 'success' })
      
      uni.setStorageSync('accessToken', res.data.access)
      uni.setStorageSync('refreshToken', res.data.refresh)
      uni.setStorageSync('userInfo', {
        username: res.data.username,
        email: res.data.email
      })
      uni.removeStorageSync('isGuest')
      
      console.log('accessToken:', uni.getStorageSync('accessToken'))
      console.log('refreshToken:', uni.getStorageSync('refreshToken'))
      setTimeout(() => {
        navigateToHome()
      }, 1500)
    } else {
      errors.global = res.message || '登录失败'
      uni.showToast({ title: res.message || '登录失败', icon: 'none' })
    }
  } catch (e) {
    console.error('登录请求异常:', e)
    if (e.message && e.message.includes('timeout')) {
      errors.global = '请求超时，请检查网络连接'
      uni.showToast({ title: '请求超时，请检查网络连接', icon: 'none' })
    } else if (e.message && e.message.includes('network')) {
      errors.global = '网络异常，请检查网络连接'
      uni.showToast({ title: '网络异常，请检查网络连接', icon: 'none' })
    } else {
      errors.global = '登录请求失败，请稍后重试'
      uni.showToast({ title: '登录请求失败，请稍后重试', icon: 'none' })
    }
  } finally {
    isLoading.value = false
  }
}

const openAgreement = (type) => {
  const title = type === 'user' ? '用户协议' : '隐私协议'
  const content = type === 'user' 
    ? '【用户协议】\n1. 您同意按照本平台规则使用服务...\n2. 不得利用本平台从事违法活动...'
    : '【隐私协议】\n1. 我们将严格保护您的个人信息...\n2. 未经允许不会向第三方披露您的信息...'

  uni.showModal({
    title: title,
    content: content,
    showCancel: false,
    confirmText: '我知道了',
    confirmColor: '#10b981'
  })
}

const openHelp = () => {
  uni.showModal({
    title: '帮助中心',
    content: '如有疑问，请联系客服：400-xxxx-xxxx',
    showCancel: false
  })
}

const navigateToRegister = () => {
  router.push('/pages/register/register')
}
</script>

<style scoped>
.login-page {
  max-width: 1400px;
  margin: 0 auto;
  padding: 60rpx 40rpx;
  background-color: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.help-link {
  align-self: flex-end;
  font-size: 24rpx;
  color: #999;
  margin-bottom: 40rpx;
}

.app-logo {
  width: 140rpx;
  height: 140rpx;
  margin-bottom: 20rpx;
}

.app-title {
  font-size: 36rpx;
  font-weight: bold;
  color: #000;
  margin-bottom: 10rpx;
}

.app-subtitle {
  font-size: 24rpx;
  color: #666;
  margin-bottom: 60rpx;
}

.input-group {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 500rpx;
  height: 88rpx;
  border: 2rpx solid #eee;
  border-radius: 44rpx;
  padding: 0 30rpx;
  margin-bottom: 20rpx;
  transition: border-color 0.3s ease;
}

.input-group:focus-within {
  border-color: #10b981;
}

.input-icon {
  width: 20px;
  height: 20px;
  margin-right: 10px;
  color: #999;
}

.input-field {
  flex: 1;
  font-size: 28rpx;
  color: #333;
  background: transparent;
  border: none;
  outline: none;
}

.input-field:focus {
  outline: none;
}

.error-tip {
  font-size: 24rpx;
  color: #f56c6c;
  margin-bottom: 10rpx;
  align-self: flex-start;
  padding-left: 30rpx;
}

.global-error {
  text-align: center;
  padding-left: 0;
}

.agree-row {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 500rpx;
  margin: 20rpx 0 30rpx;
}

.agree-check {
  transform: scale(0.8);
  margin-right: 15rpx;
}

.agree-text {
  font-size: 24rpx;
  color: #666;
  line-height: 1.5;
}

.agree-link {
  color: #10b981;
  text-decoration: underline;
  padding: 0 4rpx;
  margin: 0 2rpx;
}

.login-btn {
  width: 100%;
  max-width: 500rpx;
  height: 88rpx;
  line-height: 88rpx;
  background: linear-gradient(90deg, #10b981, #42c8a1);
  color: #fff;
  font-size: 32rpx;
  border-radius: 44rpx;
  margin-bottom: 30rpx;
  border: none;
  cursor: pointer;
}

.login-btn:disabled {
  opacity: 0.7;
}

.link-row {
  display: flex;
  font-size: 24rpx;
  color: #666;
}

.link-text {
  color: #10b981;
  margin: 0 15rpx;
  text-decoration: none;
  cursor: pointer;
}

.divider {
  color: #ccc;
}
</style>