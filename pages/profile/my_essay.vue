<template>
  <div class="my-essays-page">
    <div class="nav-bar">
      <div class="nav-back" @click="goBack">
        <ArrowLeft class="nav-icon" />
      </div>
      <span class="nav-title">我的作文</span>
      <div class="nav-placeholder"></div>
    </div>

    <div class="filter-section">
      <div class="filter-tabs">
        <div 
          class="filter-tab" 
          :class="{ active: currentFilter === 'all' }"
          @click="currentFilter = 'all'"
        >
          <span>全部</span>
        </div>
        <div 
          class="filter-tab" 
          :class="{ active: currentFilter === 'recent' }"
          @click="currentFilter = 'recent'"
        >
          <span>最近</span>
        </div>
        <div 
          class="filter-tab" 
          :class="{ active: currentFilter === 'high-score' }"
          @click="currentFilter = 'high-score'"
        >
          <span>高分</span>
        </div>
      </div>
      
      <div class="sort-button" @click="showSortOptions = !showSortOptions">
        <span>最新优先</span>
        <ChevronDown class="sort-icon" />
      </div>
    </div>

    <div class="loading-container" v-if="loading">
      <div class="loading-spinner"></div>
      <span class="loading-text">加载中...</span>
    </div>

    <div class="error-container" v-else-if="error">
      <AlertCircle class="error-icon" />
      <span class="error-text">{{ error }}</span>
      <button class="retry-btn" @click="loadUserEssays">重试</button>
    </div>

    <div class="essay-list" v-else>
      <div class="empty-state" v-if="essays.length === 0">
        <FileText class="empty-icon" />
        <span class="empty-text">暂无作文记录</span>
        <span class="empty-desc">拍照批改，记录你的成长历程</span>
        <button class="write-button" @click="goToWrite">去批改</button>
      </div>

      <div 
        class="essay-card" 
        v-for="(essay, index) in filteredEssays" 
        :key="essay.id"
        @click="viewEssayDetail(essay)"
      >
        <div class="card-header">
          <span class="essay-title">{{ essay.title }}</span>
          <div class="essay-tag">{{ essay.tag }}</div>
        </div>
        
        <div class="essay-content-preview">
          <span>{{ essay.contentPreview }}</span>
        </div>
        
        <div class="card-footer">
          <div class="footer-left">
            <span class="create-time">{{ formatTime(essay.createTime) }}</span>
            <span class="word-count">{{ essay.word_count }}字</span>
          </div>
          
          <div class="footer-right">
            <div class="score-badge" :class="getScoreClass(essay.score)">
              <span>{{ essay.score || 0 }}分</span>
            </div>
            <ArrowRight class="arrow-icon" />
          </div>
        </div>
      </div>
    </div>

    <div class="floating-write-btn" @click="goToWrite">
      <Camera class="btn-icon" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { ArrowLeft, ChevronDown, AlertCircle, ArrowRight, Camera, FileText } from 'lucide-vue-next'
import { requestWithAuth } from '@/utils/tokenManager'

const router = useRouter()

const currentFilter = ref('all')
const showSortOptions = ref(false)
const loading = ref(false)
const error = ref('')
const essays = ref([])

const filteredEssays = computed(() => {
  let filtered = [...essays.value]
  
  switch (currentFilter.value) {
    case 'recent':
      const threeDaysAgo = new Date()
      threeDaysAgo.setDate(threeDaysAgo.getDate() - 3)
      filtered = filtered.filter(essay => new Date(essay.createTime) > threeDaysAgo)
      break
    case 'high-score':
      filtered = filtered.filter(essay => (essay.score || 0) >= 4.0)
      break
  }
  
  return filtered.sort((a, b) => new Date(b.createTime) - new Date(a.createTime))
})

const formatTime = (timeString) => {
  if (!timeString) return '未知时间'
  
  const time = new Date(timeString)
  const now = new Date()
  const diff = now - time
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  
  if (days === 0) {
    return '今天'
  } else if (days === 1) {
    return '昨天'
  } else if (days < 7) {
    return `${days}天前`
  } else {
    return time.toLocaleDateString().replace(/\//g, '-')
  }
}

const getScoreClass = (score) => {
  const finalScore = score || 0
  if (finalScore >= 4.5) return 'score-excellent'
  if (finalScore >= 4.0) return 'score-good'
  if (finalScore >= 3.5) return 'score-average'
  return 'score-poor'
}

const viewEssayDetail = (essay) => {
  router.push(`/pages/home/essay?id=${essay.id}`)
}

const goToWrite = () => {
  router.push('/pages/correct/photo')
}

const goBack = () => {
  router.back()
}

const getEssaysApi = async () => {
  try {
    const response = await requestWithAuth({
      url: '/api/essays/my-essays/',
      method: 'GET'
    })

    if (response.statusCode === 200) {
      return response.data
    } else if (response.statusCode === 404) {
      return []
    } else {
      throw new Error(response.data?.message || '获取作文列表失败')
    }
  } catch (err) {
    if (err.errMsg && err.errMsg.includes('timeout')) {
      throw new Error('请求超时，请检查网络')
    } else if (err.errMsg && err.errMsg.includes('network')) {
      throw new Error('网络异常，请检查网络连接')
    } else {
      throw err
    }
  }
}

const loadUserEssays = async () => {
  loading.value = true
  error.value = ''
  
  try {
    const essaysData = await getEssaysApi()
    essays.value = essaysData.map(essay => ({
      id: essay.id,
      title: essay.title || '无标题',
      tag: essay.tag || '未分类',
      contentPreview: essay.content ? essay.content.substring(0, 50) + '...' : '暂无内容预览',
      createTime: essay.createTime,
      word_count: essay.word_count || 0,
      score: essay.score
    }))
  } catch (err) {
    console.error('加载作文列表失败:', err)
    error.value = err.message || '加载失败，请重试'
    
    if (err.message.includes('登录') || err.message.includes('token')) {
      essays.value = []
      error.value = ''
    }
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  loadUserEssays()
})
</script>

<style scoped>
.my-essays-page {
  max-width: 1400px;
  margin: 0 auto;
  background-color: #f8f8f8;
  min-height: 100vh;
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

.filter-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20rpx 30rpx;
  background: #fff;
  border-bottom: 1rpx solid #f0f0f0;
  position: sticky;
  top: 88rpx;
  z-index: 90;
}

.filter-tabs {
  display: flex;
  align-items: center;
  gap: 20rpx;
}

.filter-tab {
  padding: 12rpx 24rpx;
  border-radius: 20rpx;
  background: #f5f5f5;
  font-size: 26rpx;
  color: #666;
  cursor: pointer;
}

.filter-tab.active {
  background: #d9f7eb;
  color: #10B981;
  font-weight: 500;
}

.sort-button {
  display: flex;
  align-items: center;
  gap: 8rpx;
  padding: 12rpx 20rpx;
  background: #f5f5f5;
  border-radius: 20rpx;
  font-size: 26rpx;
  color: #666;
  cursor: pointer;
}

.sort-icon {
  width: 16rpx;
  height: 16rpx;
  color: #666;
}

.loading-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300rpx;
}

.loading-spinner {
  width: 40rpx;
  height: 40rpx;
  border: 4rpx solid #f3f3f3;
  border-top: 4rpx solid #999;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loading-text {
  margin-top: 16rpx;
  font-size: 28rpx;
  color: #999;
}

.error-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100rpx 0;
  text-align: center;
  min-height: 60vh;
}

.empty-icon {
  width: 60px;
  height: 60px;
  margin-bottom: 15px;
  opacity: 0.5;
  color: #999;
}

.empty-text {
  display: block;
  font-size: 32rpx;
  color: #999;
  margin-bottom: 20rpx;
  width: 100%;
  text-align: center;
}

.empty-desc {
  display: block;
  font-size: 26rpx;
  color: #ccc;
  margin-bottom: 40rpx;
  width: 100%;
  text-align: center;
}

.write-button {
  background: #10B981;
  color: #fff;
  border: none;
  border-radius: 20rpx;
  padding: 12rpx 30rpx;
  font-size: 26rpx;
  cursor: pointer;
}

.essay-card {
  background: #fff;
  border-radius: 16rpx;
  padding: 30rpx;
  margin-bottom: 20rpx;
  box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.05);
  border: 1rpx solid #eee;
  cursor: pointer;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20rpx;
}

.essay-title {
  font-size: 32rpx;
  font-weight: bold;
  color: #333;
  flex: 1;
  margin-right: 20rpx;
}

.essay-tag {
  padding: 6rpx 16rpx;
  background: #d9f7eb;
  border-radius: 12rpx;
  font-size: 22rpx;
  color: #10B981;
  white-space: nowrap;
}

.essay-content-preview {
  font-size: 28rpx;
  color: #666;
  line-height: 1.6;
  margin-bottom: 25rpx;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-left {
  display: flex;
  align-items: center;
  gap: 20rpx;
}

.create-time {
  font-size: 24rpx;
  color: #999;
}

.word-count {
  font-size: 24rpx;
  color: #999;
}

.footer-right {
  display: flex;
  align-items: center;
  gap: 15rpx;
}

.score-badge {
  padding: 6rpx 16rpx;
  border-radius: 12rpx;
  font-size: 24rpx;
  font-weight: 500;
}

.score-excellent {
  background: #f6ffed;
  color: #52c41a;
  border: 1rpx solid #b7eb8f;
}

.score-good {
  background: #f0f9ff;
  color: #1890ff;
  border: 1rpx solid #91d5ff;
}

.score-average {
  background: #fff7e6;
  color: #fa8c16;
  border: 1rpx solid #ffd591;
}

.score-poor {
  background: #fff2f0;
  color: #ff4d4f;
  border: 1rpx solid #ffccc7;
}

.arrow-icon {
  width: 16rpx;
  height: 16rpx;
  color: #999;
}

.floating-write-btn {
  position: fixed;
  right: 40rpx;
  bottom: 100rpx;
  width: 120rpx;
  height: 120rpx;
  background: linear-gradient(135deg, #10B981, #42c8a1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8rpx 20rpx rgba(64, 158, 255, 0.3);
  z-index: 99;
  cursor: pointer;
}

.btn-icon {
  width: 32rpx;
  height: 32rpx;
  color: #fff;
}
</style>