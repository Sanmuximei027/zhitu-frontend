<template>
  <div class="splash-page">
    <img class="splash-logo" src="/static/images/logo.png" />
    <span class="splash-title">知途</span>
    <span class="splash-subtitle">你的学习好帮手</span>
    <div class="splash-loading">
      <div class="loading-dot"></div>
      <div class="loading-dot"></div>
      <div class="loading-dot"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { isTokenExpired, refreshAccessToken } from '@/utils/tokenManager'
import uni from '@/utils/uni.js'

const router = useRouter()

onMounted(() => {
  setTimeout(() => {
    checkLoginStatus()
  }, 2000)
})

const checkLoginStatus = () => {
  const accessToken = uni.getStorageSync('accessToken')
  
  if (accessToken && !isTokenExpired(accessToken)) {
    router.replace('/pages/home/index')
  } else if (accessToken) {
    refreshAccessToken()
      .then(() => {
        router.replace('/pages/home/index')
      })
      .catch(() => {
        router.replace('/pages/login/login')
      })
  } else {
    router.replace('/pages/login/login')
  }
}
</script>

<style scoped>
.splash-page {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0;
  background: linear-gradient(180deg, #10b981 0%, #42c8a1 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.splash-logo {
  width: 200rpx;
  height: 200rpx;
  margin-bottom: 30rpx;
}

.splash-title {
  font-size: 56rpx;
  font-weight: bold;
  color: #fff;
  margin-bottom: 15rpx;
}

.splash-subtitle {
  font-size: 28rpx;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 80rpx;
}

.splash-loading {
  display: flex;
  gap: 15rpx;
}

.loading-dot {
  width: 15rpx;
  height: 15rpx;
  border-radius: 50%;
  background: #fff;
  animation: loading 1.4s infinite ease-in-out both;
}

.loading-dot:nth-child(1) {
  animation-delay: -0.32s;
}

.loading-dot:nth-child(2) {
  animation-delay: -0.16s;
}

.loading-dot:nth-child(3) {
  animation-delay: 0s;
}

@keyframes loading {
  0%, 80%, 100% {
    transform: scale(0);
    opacity: 0.5;
  }
  40% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>