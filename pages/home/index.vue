<template>
  <div class="homeLayout">
    <div class="search-row">
      <div class="search-box" @click="focusSearch">
        <Search class="search-icon" />
        <input
          v-model="searchText"
          placeholder="搜索作文/素材"
          :focus="searchFocus"
          @blur="searchFocus = false"
        />
      </div>

      <div class="grade-picker" @click="showGradePicker = !showGradePicker">
        <span class="picker-text">{{ currentGrade }}</span>
        <ChevronDown class="picker-arrow" />
      </div>
      <div v-if="showGradePicker" class="grade-dropdown">
        <div 
          v-for="(grade, index) in grades" 
          :key="index"
          :class="['grade-item', { active: selectedGradeIndex === index }]"
          @click="selectGrade(index)"
        >
          {{ grade }}
        </div>
      </div>
    </div>

    <div class="banner">
      <div class="swiper-container">
        <div 
          class="swiper-slide"
          v-for="(slide, index) in slides"
          :key="index"
          :class="['swiper-page', slide.class]"
        >
          <span class="line1">{{ slide.line1 }}</span>
          <span class="line2">{{ slide.line2 }}</span>
          <span class="line3">{{ slide.line3 }}</span>
        </div>
      </div>

      <div class="circle-grid">
        <div 
          class="circle-container" 
          v-for="(item, index) in functionItems" 
          :key="index"
          @click="handleFunctionClick(item)"
        >
          <div 
            class="circle" 
            :style="{ backgroundColor: index === 4 ? 'rgba(200, 200, 200, 0.4)' : 'rgba(173, 216, 230, 0.4)' }"
          >
            <component :is="item.icon" class="icon-svg" />
          </div>
          <span class="circle-desc">{{ item.name }}</span>
        </div>
      </div>

      <div class="section-title">
        <span class="title-text">优秀范文</span>
      </div>
    </div>

    <div class="article-container">
      <div
        v-if="essayList[0]"
        class="article-box"
        @click="navigateTo(`/pages/home/essay?id=${essayList[0].id}`)"
      >
        <div class="tag" :class="'tag-' + essayList[0].type">
          {{ getTypeText(essayList[0].type) }}
        </div>
        <div class="article-header">
          <span class="article-title">{{ essayList[0].title }}</span>
          <span class="publish-time">{{ essayList[0].displayTime || '刚刚' }}</span>
        </div>
        <span class="article-preview">
          {{ (essayList[0].text || '').slice(0, 60) }}{{ ((essayList[0].text || '').length > 60) ? '...' : '' }}
        </span>
        <div class="article-footer">
          <div class="user-info">
            <div class="user-avatar"></div>
            <span class="user-name">{{ essayList[0].author || '用户' }} | {{ essayList[0].grade || '三年级' }}</span>
          </div>
          <span class="read-more">查看全文</span>
        </div>
      </div>

      <div
        class="article-box"
        v-for="(essay, index) in essayList.slice(1)"
        :key="index"
        @click="navigateTo(`/pages/home/essay?id=${essay.id}`)"
      >
        <div class="tag" :class="'tag-' + essay.type">
          {{ getTypeText(essay.type) }}
        </div>
        <div class="article-header">
          <span class="article-title">{{ essay.title }}</span>
          <span class="publish-time">{{ essay.displayTime || '刚刚' }}</span>
        </div>
        <span class="article-preview">
          {{ (essay.text || '').slice(0, 60) }}{{ ((essay.text || '').length > 60) ? '...' : '' }}
        </span>
        <div class="article-footer">
          <div class="user-info">
            <div class="user-avatar"></div>
            <span class="user-name">{{ essay.author || '用户' }} | {{ essay.grade || '三年级' }}</span>
          </div>
          <span class="read-more">查看全文</span>
        </div>
      </div>
    </div>

    <div class="section-title">
      <span class="title-text">每日金句</span>
    </div>

    <div class="sentence-container">
      <div 
        class="sentence-box" 
        v-for="(sentence, index) in dailyEpigrams" 
        :key="sentence.id || index"
      >
        <span class="sentence-text">"{{ sentence.text }}" — {{ sentence.author }}</span>
        <div class="sentence-footer">
          <span class="suit-tag">适合写景作文</span>
          <div 
            class="collect-tag" 
            :class="{ collected: sentence.isCollected }"
            @click="toggleEpigramCollect(sentence)"
          >
            <Star class="collect-icon" />
            <span>{{ sentence.isCollected ? '已收藏' : '收藏' }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { Search, ChevronDown, FileText, Star, Menu, HelpCircle, Hand } from 'lucide-vue-next'
import request from '@/common/request.js'
import { requestWithAuth } from '@/utils/tokenManager'
import uni from '@/utils/uni.js'

const router = useRouter()

onUnmounted(() => {})

const getTypeText = (type) => {
  const map = {
    descriptive: '写景',
    character: '写人',
    narrative: '写事'
  }
  return map[type] || '写事'
}

const searchFocus = ref(false)
const searchText = ref('')
const showGradePicker = ref(false)

const functionItems = ref([
  { name: '智能批改', icon: FileText, path: '/pages/correct/index' },
  { name: 'AI写作', icon: FileText, path: '/pages/correct/checkone' },
  { name: '素材库', icon: Star, path: '/pages/correct/index' },
  { name: '学习论坛', icon: Menu, path: '/pages/correct/index' },
  { name: '手语学习', icon: Hand, path: '/pages/sign/index' }
])

const slides = ref([
  {
    class: 'page-blue',
    line1: '智能作文批改',
    line2: '手写识别 词句分析 智能润色',
    line3: '文档导出 打印 专项练习'
  },
  {
    class: 'page-green',
    line1: '个性化习题训练',
    line2: '错题纠正 病句练习 相似字对比',
    line3: '专项突破 真题训练'
  },
  {
    class: 'page-orange',
    line1: '素材库与学习论坛',
    line2: '每日金句 成语故事 实时信息',
    line3: '佳作分享 写作思路交流'
  }
])

const dailyEpigrams = ref([])
const essayList = ref([])
const currentGrade = ref('请选择年级')
const selectedGradeIndex = ref(-1)
const grades = ['三年级', '四年级', '五年级', '六年级']

const processEssays = essays => {
  if (!Array.isArray(essays)) {
    console.warn('processEssays: essays参数不是数组，返回空数组')
    return []
  }
  return essays.map(e => ({
    ...e,
    type: e.tags?.includes('写景') || e.category === '写景' ? 'descriptive'
        : e.tags?.includes('写人') || e.category === '写人' ? 'character'
        : 'narrative',
    displayTime: e.createTime || '三天前'
  }))
}

let retryCount = 0
const MAX_RETRY = 5

async function refreshEssays () {
  if (retryCount >= MAX_RETRY) return

  try {
    const token = uni.getStorageSync('accessToken')
    const url = token
      ? '/api/content/recommend/personalized/'
      : '/api/content/recommend/popular/'

    console.log('开始请求优秀范文:', url)
    const data = await request({
      url: url,
      method: 'GET',
      data: { limit: 2 }
    })
    console.log('优秀范文响应数据:', JSON.stringify(data, null, 2))

    let list = []
    if (data) {
      if (Array.isArray(data.data?.essays)) {
        list = data.data.essays
      } else if (Array.isArray(data.essays)) {
        list = data.essays
      } else if (Array.isArray(data.data)) {
        list = data.data
      } else if (Array.isArray(data)) {
        list = data
      } else if (data.data && Array.isArray(data.data.data)) {
        list = data.data.data
      } else if (data.success && Array.isArray(data.data)) {
        list = data.data
      }
    }
    console.log('解析后的优秀范文列表:', JSON.stringify(list, null, 2))
    essayList.value = processEssays(list)
    console.log('处理后的优秀范文:', JSON.stringify(essayList.value, null, 2))
    retryCount = 0
  } catch (e) {
    console.error('refreshEssays 异常', e)
    if (e.message && e.message.includes('登录已过期')) {
      retryCount = MAX_RETRY
    } else {
      retryCount += 1
    }
  }
}

const selectGrade = async index => {
  showGradePicker.value = false
  const token = uni.getStorageSync('accessToken')
  if (!token) {
    uni.showToast({ title: '请先登录', icon: 'none' })
    return
  }

  const gradeNum = index + 3
  selectedGradeIndex.value = index
  currentGrade.value = grades[index]

  try {
    console.log('开始更新年级:', gradeNum)
    const response = await request({
      url: '/api/users/grade_update/', 
      method: 'POST', 
      data: { grade: gradeNum } 
    })
    
    const toastMessage = response.message || '年级更新成功'
    uni.showToast({
      title: toastMessage, 
      icon: 'none' 
    })
    
    await refreshEssays()
  } catch (error) {
    console.error('年级更新失败:', error)
    const errorMessage = error.message || error.data?.message || '年级更新失败'
    uni.showToast({
      title: errorMessage, 
      icon: 'none' 
    })
  }
}

async function loadUserGradeOnce() {
  const token = uni.getStorageSync('accessToken')
  if (!token) return

  try {
    const data = await request({
      url: '/api/users/profile/',
      method: 'GET'
    })
    
    const grade = data?.data?.grade ?? data?.grade ?? 3
    const idx = Math.max(0, Math.min(grade - 3, grades.length - 1))
    selectedGradeIndex.value = idx
    currentGrade.value = grades[idx]
  } catch (e) {
    console.log('拉年级失败', e)
  }
}

async function loadDailyEpigrams() {
  try {
    console.log('开始请求每日金句')
    const data = await request({ 
      url: '/api/content/epigram/daily/',
      method: 'GET'
    })
    console.log('每日金句响应数据:', JSON.stringify(data, null, 2))
    
    if (Array.isArray(data)) {
      dailyEpigrams.value = data
    } else if (data && Array.isArray(data.epigrams)) {
      dailyEpigrams.value = data.epigrams
    } else if (data && Array.isArray(data.data)) {
      dailyEpigrams.value = data.data
    } else if (data && data.success && Array.isArray(data.data)) {
      dailyEpigrams.value = data.data
    } else {
      dailyEpigrams.value = []
    }
    console.log('处理后的每日金句:', JSON.stringify(dailyEpigrams.value, null, 2))
  } catch (error) {
      console.error('加载金句失败:', error)
    }
  }

  const toggleEpigramCollect = async (sentence) => {
    try {
      const data = await requestWithAuth({
        url: '/api/users/toggle_favorite/',
        method: 'POST',
        data: {
          source_type: 'essay',
          source_id: sentence.id
        }
      })

      if (data && data.status === 'success') {
        sentence.isCollected = data.action === 'collect'
        alert(data.message)
      } else {
        alert(data?.message || '操作失败')
      }
    } catch (error) {
      console.error('金句收藏操作失败:', error)
      alert('收藏操作失败，请先登录')
    }
  }

  onMounted(async () => {
  console.log('=======================================')
  console.log('=== 首页 onMounted 开始 ===')
  console.log('当前路由:', window.location.pathname)
  console.log('当前URL:', window.location.href)
  console.log('typeof request:', typeof request)
  console.log('typeof uni:', typeof uni)
  console.log('uni.request:', typeof uni.request)
  console.log('=======================================')
  
  try {
    await loadUserGradeOnce()
    console.log('loadUserGradeOnce 完成')
  } catch (e) {
    console.error('loadUserGradeOnce 失败:', e)
  }
  
  try {
    await loadDailyEpigrams()
    console.log('loadDailyEpigrams 完成')
  } catch (e) {
    console.error('loadDailyEpigrams 失败:', e)
  }
  
  try {
    await refreshEssays()
    console.log('refreshEssays 完成')
  } catch (e) {
    console.error('refreshEssays 失败:', e)
  }
  
  console.log('=== 首页 onMounted 结束 ===')
})

const navigateTo = (url) => {
  router.push(url)
}

const handleFunctionClick = (item) => {
  console.log('点击了功能按钮:', item.name)
  if (item.name === '手语学习') {
    router.push(item.path)
  }
}

const focusSearch = () => {
  searchFocus.value = true
}
</script>

<style lang="scss" scoped>
.homeLayout{
  max-width: 1400px;
  margin: 0 auto;
  padding-bottom: 120rpx;

  .banner{
    width:100%;
    padding:30rpx 0;
  }
}

.swiper-container {
  width: 100%;
  height: 400rpx;
  position: relative;
  overflow: hidden;
}

.swiper-slide {
  width: 100%;
  height: 100%;
  padding: 0 30rpx;
  box-sizing: border-box;
  display: none;
}

.swiper-slide:first-child {
  display: flex;
}

.swiper-page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-radius: 24rpx;
  padding: 0 40rpx;
  box-sizing: border-box;
}

.line1 {
  font-size: 40rpx;
  font-weight: bold;
  color: #FFFFFF;
  margin-bottom: 10rpx;
  text-align: left;
  width: 100%;
}

.line2 {
  font-size: 28rpx;
  font-weight: normal;
  color: #FFFFFF;
  margin-bottom: 6rpx;
  opacity: 0.95;
  text-align: left;
  width: 100%;
}

.line3 {
  font-size: 28rpx;
  font-weight: normal;
  color: #FFFFFF;
  opacity: 0.95;
  text-align: left;
  width: 100%;
}

.page-blue {
  background: linear-gradient(135deg, #10B981, #059669);
}

.page-green {
  background: linear-gradient(135deg, #42C8A1, #2FB389);
}

.page-orange {
  background: linear-gradient(135deg, #FF9E56, #FF8533);
}

.circle-grid {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 40rpx 30rpx;
  box-sizing: border-box;
}

.circle-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.circle {
  width: 95rpx;
  height: 95rpx;
  border-radius: 50%;
  margin-bottom: 16rpx;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon-svg {
  width: 40rpx;
  height: 40rpx;
}

.circle-desc {
  font-size: 24rpx;
  color: #000000;
  text-align: center;
}

.section-title {
  width: 100%;
  padding: 30rpx 30rpx 20rpx 45rpx;
  box-sizing: border-box;
  text-align: left;
}

.title-text {
  font-size: 40rpx;
  font-weight: bold;
  color: #000000;
}

.article-container {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 60rpx;
  padding: 25rpx;
}

.article-box {
  width: 100%;
  min-height: 200rpx;
  background-color: #FFFFFF;
  border: 2rpx solid #DDDDDD;
  border-radius: 12rpx;
  padding: 24rpx;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 12rpx;
  cursor: pointer;
  transition: box-shadow 0.2s ease;
}

.article-box:hover {
  box-shadow: 0 4rpx 20rpx rgba(0, 0, 0, 0.1);
}

.tag {
  align-self: flex-start;
  padding: 8rpx 20rpx;
  border-radius: 30rpx;
  font-size: 14px;
  font-weight: bold;
}

.tag-narrative {
  background-color: rgba(94, 143, 255, 0.15);
  color: rgba(94, 143, 255, 0.8);
}

.tag-character {
  background-color: rgba(255, 152, 0, 0.15);
  color: rgba(255, 152, 0, 0.8);
}

.tag-descriptive {
  background-color: rgba(156, 39, 176, 0.15);
  color: rgba(156, 39, 176, 0.8);
}

.article-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.article-title {
  font-size: 18px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.7);
  line-height: 1.4;
  flex: 1;
  margin-right: 16rpx;
}

.publish-time {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.3);
  white-space: nowrap;
}

.article-preview {
  font-size: 14px;
  font-weight: normal;
  color: rgba(0, 0, 0, 0.4);
  line-height: 1.6;
  text-align: left;
}

.article-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 12rpx;
}

.user-avatar {
  width: 36rpx;
  height: 36rpx;
  border-radius: 50%;
  background-color: #DDDDDD;
}

.user-name {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
}

.read-more {
  font-size: 14px;
  color: #10B981;
  font-weight: 500;
}

.sentence-container {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 40rpx;
  padding: 25rpx;
}

.sentence-box {
  width: 100%;
  min-height: 120rpx;
  background: #fff;
  border: 2rpx solid #ddd;
  border-radius: 12rpx;
  padding: 24rpx;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 16rpx;
}

.sentence-text {
  font-size: 16px;
  font-style: italic;
  color: rgba(0, 0, 0, 0.7);
  text-align: left;
  line-height: 1.6;
  width: 100%;
}

.sentence-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.suit-tag {
  font-size: 13px;
  color: rgba(0, 0, 0, 0.5);
}

.collect-tag {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  color: #10B981;
  font-weight: 500;
  cursor: pointer;
  padding: 4px 10px;
  border-radius: 12px;
  transition: all 0.2s;

  &:hover {
    background: rgba(16, 185, 129, 0.1);
  }

  &.collected {
    color: #F59E0B;

    .collect-icon {
      fill: #F59E0B;
    }
  }
}

.collect-icon {
  width: 14px;
  height: 14px;
}

.search-row {
  display: flex;
  align-items: center;
  padding: 20rpx 30rpx;
  gap: 20rpx;
  position: relative;
}

.search-box {
  flex: 1;
  height: 75rpx;
  background: #f5f5f5;
  border-radius: 30rpx;
  display: flex;
  align-items: center;
  padding: 0 20rpx;
  font-size: 26rpx;
}

.search-icon {
  width: 36rpx;
  height: 36rpx;
  color: #999;
}

input {
  flex: 1;
  font-size: 28rpx;
  color: #333;
  background: transparent;
  border: none;
  outline: none;
}

.grade-picker {
  min-width: 150rpx;
  height: 70rpx;
  background: rgba(217, 184, 255, 0.3);
  border-radius: 30rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24rpx;
  color: rgba(138, 43, 226, 0.7);
  padding: 0 10rpx;
  cursor: pointer;
  gap: 8rpx;
}

.picker-arrow {
  width: 24rpx;
  height: 24rpx;
}

.grade-dropdown {
  position: absolute;
  top: 100%;
  right: 30rpx;
  background: #fff;
  border-radius: 12rpx;
  box-shadow: 0 4rpx 20rpx rgba(0, 0, 0, 0.1);
  z-index: 100;
  overflow: hidden;
}

.grade-item {
  padding: 20rpx 30rpx;
  font-size: 28rpx;
  color: #333;
  cursor: pointer;
}

.grade-item:hover {
  background: #f5f5f5;
}

.grade-item.active {
  color: #10B981;
  font-weight: 500;
}
</style>
