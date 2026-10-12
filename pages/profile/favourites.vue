<template>
  <div class="favorites-page">
    <div class="nav-bar">
      <div class="nav-back" @click="goBack">
        <ArrowLeft class="nav-icon" />
      </div>
      <span class="nav-title">收藏夹</span>
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
          :class="{ active: currentFilter === 'essays' }"
          @click="currentFilter = 'essays'"
        >
          <span>范文</span>
        </div>
        <div 
          class="filter-tab" 
          :class="{ active: currentFilter === 'tips' }"
          @click="currentFilter = 'tips'"
        >
          <span>技巧</span>
        </div>
      </div>
      
      <div class="sort-button" @click="toggleSortOrder">
        <span>{{ sortOrder === 'desc' ? '最新优先' : '最旧优先' }}</span>
        <ArrowDown v-if="sortOrder === 'desc'" class="sort-icon" />
        <ArrowUp v-else class="sort-icon" />
      </div>
    </div>

    <div class="loading-container" v-if="loading">
      <div class="loading-spinner"></div>
      <span class="loading-text">加载中...</span>
    </div>

    <div class="error-container" v-else-if="error">
      <AlertCircle class="error-icon" />
      <span class="error-text">{{ error }}</span>
      <button class="retry-btn" @click="loadFavorites">重试</button>
    </div>

    <div class="favorites-list" v-else>
      <div class="empty-state" v-if="favorites.length === 0">
        <Star class="empty-icon" />
        <span class="empty-text">暂无收藏内容</span>
        <span class="empty-desc">发现精彩内容，随时收藏学习</span>
        <button class="explore-button" @click="goToExplore">去发现</button>
      </div>

      <div 
        class="favorite-card" 
        v-for="(item, index) in filteredFavorites" 
        :key="item.id"
        @click="viewFavoriteDetail(item)"
      >
        <div class="card-header">
          <div class="item-type" :class="getTypeClass(item.type)">
            <span>{{ getTypeText(item.type) }}</span>
          </div>
          <span class="item-title">{{ item.title }}</span>
        </div>
        
        <div class="item-content-preview">
          <span>{{ item.contentPreview }}</span>
        </div>
        
        <div class="card-footer">
          <div class="footer-left">
            <span class="author" v-if="item.author">by {{ item.author }}</span>
            <span class="collect-time">{{ formatTime(item.collect_time) }}</span>
          </div>
          
          <div class="footer-right">
            <div class="action-buttons">
              <div class="action-btn" @click.stop="cancelFavorite(item)">
                <Trash2 class="action-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { ArrowLeft, ArrowDown, ArrowUp, AlertCircle, Trash2, Star } from 'lucide-vue-next'
import { requestWithAuth } from '@/utils/tokenManager'
import uni from '@/utils/uni.js'

const router = useRouter()

const currentFilter = ref('all')
const sortOrder = ref('desc')
const loading = ref(false)
const error = ref('')
const favorites = ref([])

const filteredFavorites = computed(() => {
  let filtered = [...favorites.value]
  
  switch (currentFilter.value) {
    case 'essays':
      filtered = filtered.filter(item => item.type === 'essay')
      break
    case 'tips':
      filtered = filtered.filter(item => item.type === 'tip')
      break
  }
  
  return filtered.sort((a, b) => {
    const timeA = new Date(a.collect_time)
    const timeB = new Date(b.collect_time)
    return sortOrder.value === 'desc' ? timeB - timeA : timeA - timeB
  })
})

const getTypeClass = (type) => {
  const typeMap = {
    'essay': 'type-essay',
    'tip': 'type-tip',
    'template': 'type-template'
  }
  return typeMap[type] || 'type-default'
}

const getTypeText = (type) => {
  const typeMap = {
    'essay': '范文',
    'tip': '技巧',
    'template': '模板'
  }
  return typeMap[type] || '收藏'
}

const formatTime = (timeString) => {
  if (!timeString) return '未知时间'
  
  const time = new Date(timeString)
  const now = new Date()
  const diff = now - time
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  
  if (days === 0) {
    return '今天收藏'
  } else if (days === 1) {
    return '昨天收藏'
  } else if (days < 7) {
    return `${days}天前收藏`
  } else {
    return time.toLocaleDateString().replace(/\//g, '-') + '收藏'
  }
}

const toggleSortOrder = () => {
  sortOrder.value = sortOrder.value === 'desc' ? 'asc' : 'desc'
}

const viewFavoriteDetail = (item) => {
  const routes = {
    'essay': `/pages/home/essay?id=${item.source_id}`,
    'tip': `/pages/home/essay?id=${item.source_id}`,
    'template': `/pages/home/essay?id=${item.source_id}`
  }
  
  if (routes[item.type]) {
    router.push(routes[item.type])
  }
}

const cancelFavorite = async (item) => {
  const confirm = await uni.showModal({
    title: '提示',
    content: '确定要取消收藏吗？'
  })
  
  if (confirm.confirm) {
    try {
      await requestWithAuth({
        url: `/api/favorites/${item.id}/`,
        method: 'DELETE'
      })
      
      favorites.value = favorites.value.filter(fav => fav.id !== item.id)
      
      uni.showToast({
        title: '已取消收藏',
        icon: 'success'
      })
    } catch (err) {
      console.error('取消收藏失败:', err)
      uni.showToast({
        title: '操作失败',
        icon: 'none'
      })
    }
  }
}

const goToExplore = () => {
  router.push('/pages/home/index')
}

const goBack = () => {
  router.back()
}

const getFavoritesApi = async () => {
  try {
    const response = await requestWithAuth({
      url: '/api/favorites/',
      method: 'GET'
    })

    if (response.statusCode === 200) {
      return response.data
    } else if (response.statusCode === 404) {
      return []
    } else {
      throw new Error(response.data?.message || '获取收藏列表失败')
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

const loadFavorites = async () => {
  loading.value = true
  error.value = ''
  
  try {
    const favoritesData = await getFavoritesApi()
    favorites.value = favoritesData.map(item => ({
      id: item.id,
      type: item.type || 'essay',
      title: item.title || '无标题',
      contentPreview: item.content ? item.content.substring(0, 60) + '...' : '暂无内容预览',
      author: item.author,
      collect_time: item.collect_time,
      source_id: item.source_id
    }))
  } catch (err) {
    console.error('加载收藏列表失败:', err)
    error.value = err.message || '加载失败，请重试'
    
    if (err.message.includes('登录') || err.message.includes('token')) {
      favorites.value = []
      error.value = ''
    }
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  loadFavorites()
})
</script>

<style scoped>
.favorites-page {
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
  padding: 100rpx 40rpx;
  text-align: center;
}

.error-icon {
  width: 48rpx;
  height: 48rpx;
  color: #dc2626;
}

.error-text {
  font-size: 28rpx;
  color: #666;
  margin: 20rpx 0;
  line-height: 1.6;
}

.retry-btn {
  margin-top: 30rpx;
  background: #42c8a1;
  color: white;
  border: none;
  border-radius: 10rpx;
  padding: 16rpx 32rpx;
  font-size: 28rpx;
  cursor: pointer;
}

.favorites-list {
  padding: 20rpx 30rpx;
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100rpx 0;
  text-align: center;
}

.empty-icon {
  width: 60px;
  height: 60px;
  margin-bottom: 15px;
  opacity: 0.5;
  color: #999;
}

.empty-text {
  font-size: 32rpx;
  color: #999;
  margin-bottom: 16rpx;
}

.empty-desc {
  font-size: 26rpx;
  color: #ccc;
  margin-bottom: 40rpx;
}

.explore-button {
  background: #10B981;
  color: #fff;
  border: none;
  border-radius: 25rpx;
  padding: 20rpx 40rpx;
  font-size: 28rpx;
  cursor: pointer;
}

.favorite-card {
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
  align-items: center;
  margin-bottom: 20rpx;
  gap: 16rpx;
}

.item-type {
  padding: 6rpx 16rpx;
  border-radius: 12rpx;
  font-size: 22rpx;
  font-weight: 500;
  white-space: nowrap;
  flex-shrink: 0;
}

.type-essay {
  background: #d9f7eb;
  color: #10B981;
}

.type-tip {
  background: #fff7e6;
  color: #fa8c16;
}

.type-template {
  background: #f6ffed;
  color: #52c41a;
}

.type-default {
  background: #f5f5f5;
  color: #666;
}

.item-title {
  font-size: 32rpx;
  font-weight: bold;
  color: #333;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.item-content-preview {
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

.author {
  font-size: 24rpx;
  color: #999;
}

.collect-time {
  font-size: 24rpx;
  color: #999;
}

.footer-right {
  display: flex;
  align-items: center;
}

.action-buttons {
  display: flex;
  align-items: center;
  gap: 20rpx;
}

.action-btn {
  padding: 8rpx;
  border-radius: 8rpx;
  background: #f5f5f5;
  cursor: pointer;
}

.action-btn:active {
  background: #e0e0e0;
}

.action-icon {
  width: 18rpx;
  height: 18rpx;
  color: #999;
}
</style>