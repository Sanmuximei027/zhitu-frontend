<template>
  <div class="register-page">
    <img class="app-logo" src="/static/images/logo.png" />
    <span class="app-title">新用户注册</span>

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
      <Mail class="input-icon" />
      <input 
        class="input-field" 
        type="email" 
        v-model="email" 
        placeholder="请输入邮箱" 
        @input="clearError('email')"
      />
    </div>
    <span class="error-tip" v-if="errors.email">{{ errors.email }}</span>

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

    <div class="input-group">
      <Lock class="input-icon" />
      <input 
        class="input-field" 
        type="password" 
        v-model="confirmPassword" 
        placeholder="请确认密码" 
        @input="clearError('confirmPassword')"
      />
    </div>
    <span class="error-tip" v-if="errors.confirmPassword">{{ errors.confirmPassword }}</span>

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

    <button class="register-btn" @click="handleRegister" :disabled="isLoading">
      <span v-if="isLoading">注册中...</span>
      <span v-else>注册</span>
    </button>

    <div class="link-row">
      <span class="link-text" @click="navigateToLogin">已有账号，去登录</span>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { User, Mail, Lock } from 'lucide-vue-next'

const router = useRouter()

const username = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const isAgree = ref(false)
const isLoading = ref(false)
const errors = reactive({
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  global: ''
})

const validateForm = () => {
  let valid = true

  if (!username.value.trim()) {
    errors.username = '请输入用户名'
    valid = false
  }

  if (!email.value.trim()) {
    errors.email = '请输入邮箱'
    valid = false
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email.value)) {
      errors.email = '请输入有效的邮箱地址'
      valid = false
    }
  }

  if (!password.value) {
    errors.password = '请输入密码'
    valid = false
  } else if (password.value.length < 6) {
    errors.password = '密码长度不能少于6位'
    valid = false
  }

  if (!confirmPassword.value) {
    errors.confirmPassword = '请确认密码'
    valid = false
  } else if (confirmPassword.value !== password.value) {
    errors.confirmPassword = '两次输入的密码不一致'
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

const clearError = (field) => {
  errors[field] = ''
  errors.global = ''
}

const toggleAgree = () => {
  isAgree.value = !isAgree.value
}

const handleRegister = async () => {
  if (!validateForm()) return

  try {
    isLoading.value = true

    const response = await fetch('/api/users/register/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username.value.trim(),
        email: email.value.trim(),
        password: password.value
      })
    })

    const res = await response.json()

    if (res.status === 'success') {
      uni.showToast({ title: res.message || '注册成功', icon: 'success' })
      setTimeout(() => {
        router.push('/pages/login/login')
      }, 1500)
    } else {
      errors.global = res.message || '注册失败'
      if (res.errors) {
        Object.keys(res.errors).forEach(key => {
          const fieldMap = {
            'username': 'username',
            'email': 'email',
            'password': 'password'
          }
          if (fieldMap[key]) {
            errors[fieldMap[key]] = res.errors[key][0]
          }
        })
      }
      uni.showToast({ title: res.message || '注册失败', icon: 'none' })
    }
  } catch (e) {
    console.error('注册请求异常:', e)
    errors.global = '注册请求失败，请稍后重试'
    uni.showToast({ title: '注册请求失败，请稍后重试', icon: 'none' })
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
    confirmText: '我知道了'
  })
}

const navigateToLogin = () => {
  router.push('/pages/login/login')
}
</script>

<style scoped>
.register-page {
  max-width: 1400px;
  margin: 0 auto;
  padding: 60rpx 40rpx;
  background-color: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  margin-bottom: 40rpx;
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

.register-btn {
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

.register-btn:disabled {
  opacity: 0.7;
}

.link-row {
  font-size: 24rpx;
}

.link-text {
  color: #10b981;
  text-decoration: none;
  cursor: pointer;
}
</style>