<template>
  <div class="page">
    <div class="nav-bar">
      <div class="nav-back" @click="router.back()">
        <ArrowLeft class="nav-icon" />
      </div>
      <span class="nav-title">手语学习</span>
      <div class="nav-placeholder"></div>
    </div>

    <div class="stats-bar">
      <div class="stat-item">
        <span class="stat-num">{{ learnedCount }}</span>
        <span class="stat-label">已学习</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-item">
        <span class="stat-num">{{ testedCount }}</span>
        <span class="stat-label">已测试</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-item">
        <span class="stat-num">{{ wordList.length }}</span>
        <span class="stat-label">总词汇</span>
      </div>
    </div>

    <div v-if="loading" class="loading-container">
      <div class="loading-spinner"></div>
      <span class="loading-text">加载词汇中...</span>
    </div>

    <div v-else-if="error" class="error-container">
      <AlertCircle class="error-icon" />
      <span class="error-text">{{ error }}</span>
      <button class="retry-btn" @click="loadWords">重新加载</button>
    </div>

    <div v-else class="word-grid">
      <div
        v-for="item in wordList"
        :key="item.id"
        class="word-card"
        @click="goDetail(item)"
      >
        <span class="word-text">{{ item.word }}</span>
        <div class="word-bottom">
          <span
            :class="['status-badge', item.tested ? 'tested' : (item.learned ? 'learned' : 'unlearned')]"
          >
            {{ item.tested ? '已测✓' : (item.learned ? '已学' : '未学') }}
          </span>
          <ChevronRight class="word-arrow" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { ArrowLeft, ChevronRight, AlertCircle } from 'lucide-vue-next'
import { requestWithAuth } from '@/utils/tokenManager'
import uni from '@/utils/uni.js'

const router = useRouter()

const loading = ref(false)
const error = ref('')
const wordList = ref([])

const learnedCount = computed(() => wordList.value.filter(w => w.learned).length)
const testedCount = computed(() => wordList.value.filter(w => w.tested).length)

const loadWords = async () => {
  loading.value = true
  error.value = ''
  try {
    const response = await requestWithAuth({
      url: '/api/sign/words/',
      method: 'GET'
    })
    if (response.statusCode === 200 && response.data?.status === 'success') {
      wordList.value = response.data.data || []
    } else {
      throw new Error(response.data?.message || '获取词汇列表失败')
    }
  } catch (err) {
    error.value = err.message || '获取词汇列表失败'
    console.error('获取词汇列表失败:', err)
  } finally {
    loading.value = false
  }
}

const goDetail = (item) => {
  router.push(`/pages/sign/detail?word=${encodeURIComponent(item.word)}&has_video=${item.has_video}&video_url=${encodeURIComponent(item.video_url)}&learned=${item.learned}&tested=${item.tested}`)
}

onMounted(() => {
  loadWords()
})
</script>

<style lang="scss" scoped>
.page {
  min-height: 100vh;
  background: #f7f9fb;
  padding-bottom: 40rpx;
}

.nav-bar {
  display: flex;
  align-items: center;
  height: 88rpx;
  padding: 0 30rpx;
  background: #fff;
  border-bottom: 1rpx solid #eee;
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-back {
  width: 40rpx;
  height: 40rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.nav-icon {
  width: 24rpx;
  height: 24rpx;
  color: #333;
}

.nav-title {
  flex: 1;
  text-align: center;
  font-size: 36rpx;
  font-weight: bold;
  color: #333;
}

.nav-placeholder {
  width: 40rpx;
}

.stats-bar {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 24rpx 30rpx;
  padding: 28rpx 0;
  background: linear-gradient(135deg, #d9f7eb, #c4eeda);
  border-radius: 20rpx;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8rpx;
}

.stat-num {
  font-size: 40rpx;
  font-weight: bold;
  color: #10B981;
}

.stat-label {
  font-size: 24rpx;
  color: #666;
}

.stat-divider {
  width: 1rpx;
  height: 60rpx;
  background: rgba(16, 185, 129, 0.25);
}

.word-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20rpx;
  padding: 0 30rpx;
}

.word-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 140rpx;
  padding: 20rpx;
  background: #fff;
  border-radius: 16rpx;
  box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.04);
  cursor: pointer;
  transition: transform 0.15s ease;

  &:active {
    transform: scale(0.96);
  }
}

.word-text {
  font-size: 30rpx;
  font-weight: 500;
  color: #333;
  word-break: break-all;
}

.word-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16rpx;
}

.status-badge {
  font-size: 20rpx;
  padding: 4rpx 12rpx;
  border-radius: 8rpx;

  &.unlearned {
    background: #f0f0f0;
    color: #999;
  }

  &.learned {
    background: #d9f7eb;
    color: #10B981;
  }

  &.tested {
    background: #fff7e0;
    color: #d99a00;
  }
}

.word-arrow {
  width: 24rpx;
  height: 24rpx;
  color: #ccc;
}

.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 120rpx 0;
}

.loading-spinner {
  width: 48rpx;
  height: 48rpx;
  border: 4rpx solid #f3f3f3;
  border-top: 4rpx solid #10B981;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loading-text {
  margin-top: 20rpx;
  font-size: 26rpx;
  color: #999;
}

.error-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 120rpx 60rpx;
  gap: 20rpx;
}

.error-icon {
  width: 64rpx;
  height: 64rpx;
  color: #f56c6c;
}

.error-text {
  font-size: 26rpx;
  color: #666;
  text-align: center;
}

.retry-btn {
  margin-top: 10rpx;
  padding: 16rpx 60rpx;
  background: #10B981;
  color: #fff;
  border: none;
  border-radius: 36rpx;
  font-size: 28rpx;
  cursor: pointer;
}
</style>
