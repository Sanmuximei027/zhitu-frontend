<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import request from '@/common/request'
import { 
  ArrowLeft, 
  ArrowUp, 
  FileText, 
  Info, 
  Star, 
  CheckCircle, 
  Circle 
} from 'lucide-vue-next'

const router = useRouter()

const userInfo = ref({
  nickname: '',
  avatar: '',
  grade: null
})

const profileData = reactive({
  overallScore: 0,
  writingStyle: '',
  recentImprovement: [],
  weaknesses: [],
  improvementCount: 0,
  weaknessCount: 0,
  detailedScores: {
    theme_average: 0,
    organization_average: 0,
    content_average: 0,
    expression_average: 0
  }
})

const isLoading = ref(true)
const errorMessage = ref('')

const gradeOptions = [
  { value: 3, label: '三年级' },
  { value: 4, label: '四年级' },
  { value: 5, label: '五年级' },
  { value: 6, label: '六年级' }
]

const formatGrade = (gradeValue) => {
  if (!gradeValue) return '未设置年级'
  const grade = gradeOptions.find(item => item.value === gradeValue)
  return grade ? grade.label : ''
}

const goBack = () => {
  router.back()
}

const getStorageSync = (key) => {
  try {
    const value = localStorage.getItem(key)
    if (value === null) return null
    try {
      return JSON.parse(value)
    } catch {
      return value
    }
  } catch {
    return null
  }
}

const setStorageSync = (key, value) => {
  try {
    const strValue = typeof value === 'string' ? value : JSON.stringify(value)
    localStorage.setItem(key, strValue)
  } catch (e) {
    console.error('Storage error:', e)
  }
}

const removeStorageSync = (key) => {
  localStorage.removeItem(key)
}

const checkLoginStatus = () => {
  const accessToken = getStorageSync('accessToken')
  return !!accessToken
}

// 统一使用 common/request.js：自动携带 token、过期自动刷新，401 由其统一处理
const getUserProfile = async () => {
  const data = await request({
    url: '/api/users/profile/',
    method: 'GET'
  })

  if (data && data.status === 'success') {
    return data.data
  }
  throw (data && data.message) || '获取个人信息失败'
}

const fetchUserInfo = async () => {
  try {
    if (!checkLoginStatus()) {
      userInfo.value = {
        nickname: '未登录用户',
        avatar: '/static/images/111.jpg',
        grade: null
      }
      return
    }

    try {
      const cachedUserInfo = getStorageSync('cachedUserInfo')
      const cacheTime = getStorageSync('userInfoCacheTime')
      const now = Date.now()
      const cacheValidity = 30 * 60 * 1000

      if (cachedUserInfo && typeof cachedUserInfo === 'object' && cacheTime && !isNaN(cacheTime) && (now - cacheTime) < cacheValidity) {
        console.log('使用缓存的用户信息')
        userInfo.value = cachedUserInfo
        return
      }
    } catch (cacheError) {
      console.error('用户信息缓存检查失败:', cacheError)
    }

    const profile = await getUserProfile()
    
    userInfo.value = {
      nickname: profile.nickname || profile.username || '未设置昵称',
      avatar: profile.avatar || '/static/images/111.jpg',
      grade: profile.grade || null
    }

    try {
      setStorageSync('cachedUserInfo', userInfo.value)
      setStorageSync('userInfoCacheTime', now)
    } catch (cacheError) {
      console.error('用户信息缓存失败:', cacheError)
    }

  } catch (error) {
    console.error('获取用户信息失败:', error)
    try {
      const cachedUserInfo = getStorageSync('cachedUserInfo')
      if (cachedUserInfo && typeof cachedUserInfo === 'object') {
        userInfo.value = cachedUserInfo
      } else {
        userInfo.value = {
          nickname: '获取失败',
          avatar: '/static/images/111.jpg',
          grade: null
        }
      }
    } catch (cacheError) {
      userInfo.value = {
        nickname: '获取失败',
        avatar: '/static/images/111.jpg',
        grade: null
      }
    }
  }
}

const fetchDoubaoAnalysis = async () => {
  isLoading.value = true
  errorMessage.value = ''
  
  const token = getStorageSync('accessToken')
  if (!token) {
    errorMessage.value = '请先登录'
    isLoading.value = false
    alert('请先登录')
    router.push('/pages/login/login')
    return
  }

  try {
    const cachedAnalysisData = getStorageSync('cachedAnalysisData')
    const cacheTime = getStorageSync('analysisCacheTime')
    const now = Date.now()
    const cacheValidity = 30 * 60 * 1000

    if (cachedAnalysisData && typeof cachedAnalysisData === 'object' && cacheTime && !isNaN(cacheTime) && (now - cacheTime) < cacheValidity) {
      profileData.overallScore = cachedAnalysisData.overallScore || 0
      profileData.writingStyle = cachedAnalysisData.writingStyle || '未知型'
      profileData.recentImprovement = cachedAnalysisData.recentImprovement || []
      profileData.improvementCount = cachedAnalysisData.improvementCount || 0
      profileData.weaknesses = cachedAnalysisData.weaknesses || []
      profileData.weaknessCount = cachedAnalysisData.weaknessCount || 0
      
      isLoading.value = false
      return
    }
  } catch (cacheError) {
    console.error('AI分析数据缓存检查失败:', cacheError)
  }

  try {
    const data = await request({
      url: '/api/ai_use/doubao_ai',
      method: 'GET'
    })

    if (data.status === 'success') {
      const analysisData = data.data
      
      profileData.overallScore = analysisData.average_score || 0
      profileData.writingStyle = analysisData.response_style?.choices?.[0]?.message?.content || '未知型'
      
      const improveContent = analysisData.response_improve?.choices?.[0]?.message?.content || ''
      profileData.recentImprovement = improveContent.split('\n').filter(item => item.trim())
      profileData.improvementCount = profileData.recentImprovement.length
      
      const suggestionContent = analysisData.response_suggestion?.choices?.[0]?.message?.content || ''
      profileData.weaknesses = suggestionContent.split('\n').filter(item => item.trim())
      profileData.weaknessCount = profileData.weaknesses.length
      
      try {
        const dataToCache = {
          overallScore: profileData.overallScore,
          writingStyle: profileData.writingStyle,
          recentImprovement: profileData.recentImprovement,
          improvementCount: profileData.improvementCount,
          weaknesses: profileData.weaknesses,
          weaknessCount: profileData.weaknessCount
        }
        setStorageSync('cachedAnalysisData', dataToCache)
        setStorageSync('analysisCacheTime', now)
      } catch (cacheError) {
        console.error('AI分析数据缓存失败:', cacheError)
      }
      
    } else {
      errorMessage.value = data.message || '获取分析数据失败'
    }
  } catch (error) {
    console.error('获取分析数据异常:', error)
    // request.js 已统一处理 401（刷新 token / 清理登录态并跳登录页），这里只做页面提示与缓存兜底
    const message = (error && error.data && error.data.message) || ''
    if (message.includes('暂无作文提交记录')) {
      errorMessage.value = '暂无作文记录，请先提交作文'
    } else {
      errorMessage.value = message || 'AI分析服务暂时不可用'
    }
    
    try {
      const cachedAnalysisData = getStorageSync('cachedAnalysisData')
      if (cachedAnalysisData && typeof cachedAnalysisData === 'object') {
        profileData.overallScore = cachedAnalysisData.overallScore || 0
        profileData.writingStyle = cachedAnalysisData.writingStyle || '未知型'
        profileData.recentImprovement = cachedAnalysisData.recentImprovement || []
        profileData.improvementCount = cachedAnalysisData.improvementCount || 0
        profileData.weaknesses = cachedAnalysisData.weaknesses || []
        profileData.weaknessCount = cachedAnalysisData.weaknessCount || 0
        errorMessage.value = ''
      }
    } catch (cacheError) {
      console.error('AI分析数据缓存读取失败:', cacheError)
    }
  } finally {
    isLoading.value = false
  }
}

const reloadData = () => {
  removeStorageSync('cachedUserInfo')
  removeStorageSync('userInfoCacheTime')
  removeStorageSync('cachedAnalysisData')
  removeStorageSync('analysisCacheTime')
  
  fetchUserInfo()
  fetchDoubaoAnalysis()
}

onMounted(() => {
  fetchUserInfo()
  fetchDoubaoAnalysis()
})
</script>

<template>
  <div class="user-profile-page">
    <div class="nav-header">
      <div class="nav-back" @click="goBack">
        <ArrowLeft class="nav-icon" />
      </div>
      <text class="nav-title">我的学习画像</text>
      <div class="nav-placeholder"></div>
    </div>

    <div class="profile-content" @refresherrefresh="reloadData">
      <div v-if="isLoading" class="painter-loader-container">
        <div class="painter-scene">
          <div class="canvas-container">
            <div class="canvas">
              <div class="portrait-outline">
                <div class="face-outline"></div>
                <div class="body-outline"></div>
              </div>
              
              <div class="drawing-line"></div>
              
              <div class="completed-parts">
                <div class="completed-part part-1"></div>
                <div class="completed-part part-2"></div>
                <div class="completed-part part-3"></div>
              </div>
            </div>
          </div>
          
          <div class="paint-brush">
            <div class="brush-handle"></div>
            <div class="brush-tip"></div>
            <div class="brush-stroke"></div>
          </div>
          
          <div class="painter-text">
            <text class="painter-title">AI画笔正在绘制您的学习画像</text>
            <text class="painter-subtitle">分析作文特征中...</text>
          </div>
          
          <div class="palette">
            <div class="palette-color color-1"></div>
            <div class="palette-color color-2"></div>
            <div class="palette-color color-3"></div>
            <div class="palette-color color-4"></div>
          </div>
        </div>
      </div>

      <div v-else-if="errorMessage" class="error-container">
        <Info class="error-icon" />
        <text class="error-text">{{ errorMessage }}</text>
        <button class="retry-button" @click="reloadData">重新加载</button>
      </div>

      <div v-else>
        <div class="user-basic-info">
          <img class="user-avatar" :src="userInfo.avatar || '/static/images/111.jpg'" />
          <text class="user-name">{{ userInfo.nickname || '未设置昵称' }}</text>
          <text class="user-grade">{{ formatGrade(userInfo.grade) }}</text>
        </div>

        <div class="portrait-section">
          <div class="section-title">
            <text>个性化学习分析</text>
          </div>
          <div class="portrait-container">
            <div class="portrait-background">
              <img 
                class="bg-image" 
                src="/static/images/learning-portrait-bg.png" 
              />
              
              <div class="data-tags-container">
                <div class="data-tag improvement-tag" :style="{ top: '20%', left: '10%' }">
                  <div class="tag-icon">
                    <ArrowUp class="tag-icon-inner" />
                  </div>
                  <div class="tag-content">
                    <text class="tag-value">{{ profileData.improvementCount }}</text>
                    <text class="tag-label">近期提升</text>
                  </div>
                </div>

                <div class="data-tag style-tag" :style="{ top: '20%', right: '10%' }">
                  <div class="tag-icon">
                    <FileText class="tag-icon-inner" />
                  </div>
                  <div class="tag-content">
                    <text class="tag-value">{{ profileData.writingStyle }}</text>
                    <text class="tag-label">文本风格</text>
                  </div>
                </div>

                <div class="data-tag weak-tag" :style="{ bottom: '20%', left: '10%' }">
                  <div class="tag-icon">
                    <Info class="tag-icon-inner" />
                  </div>
                  <div class="tag-content">
                    <text class="tag-value">{{ profileData.weaknessCount }}</text>
                    <text class="tag-label">待改要点</text>
                  </div>
                </div>

                <div class="data-tag score-tag" :style="{ bottom: '20%', right: '10%' }">
                  <div class="tag-icon">
                    <Star class="tag-icon-inner" />
                  </div>
                  <div class="tag-content">
                    <text class="tag-value">{{ profileData.overallScore }}</text>
                    <text class="tag-label">综合评分</text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="data-cards">
          <div class="data-card improvement-card" v-if="profileData.recentImprovement.length > 0">
            <div class="card-header">
              <div class="card-icon-bg improvement-bg">
                <ArrowUp class="card-icon" />
              </div>
              <text class="card-title">近期提升 ({{ profileData.improvementCount }}项)</text>
            </div>
            <div class="card-content">
              <div class="improvement-list">
                <div class="improvement-item" v-for="(item, index) in profileData.recentImprovement" :key="index">
                  <div class="improvement-icon">
                    <CheckCircle class="improvement-icon-inner" />
                  </div>
                  <text class="improvement-text">{{ item }}</text>
                </div>
              </div>
            </div>
          </div>

          <div class="data-card" v-if="profileData.writingStyle">
            <div class="card-header">
              <div class="card-icon-bg style-bg">
                <FileText class="card-icon" />
              </div>
              <text class="card-title">文本风格</text>
            </div>
            <div class="card-content">
              <div class="style-tags">
                <div class="style-tag">
                  <text>{{ profileData.writingStyle }}</text>
                </div>
              </div>
              <text class="style-desc">基于您近近期批改作文的分析结果</text>
            </div>
          </div>

          <div class="data-card" v-if="profileData.weaknesses.length > 0">
            <div class="card-header">
              <div class="card-icon-bg weak-bg">
                <Info class="card-icon" />
              </div>
              <text class="card-title">待改要点 ({{ profileData.weaknessCount }}点)</text>
            </div>
            <div class="card-content">
              <div class="weakness-list">
                <div class="weakness-item" v-for="(item, index) in profileData.weaknesses" :key="index">
                  <div class="weakness-icon">
                    <Circle class="weakness-icon-inner" />
                  </div>
                  <text class="weakness-text">{{ item }}</text>
                </div>
              </div>
            </div>
          </div>

          <div class="data-card" v-if="profileData.overallScore > 0">
            <div class="card-header">
              <div class="card-icon-bg score-bg">
                <Star class="card-icon" />
              </div>
              <text class="card-title">能力维度分析</text>
            </div>
            <div class="card-content">
              <div class="score-detail">
                <div class="score-item">
                  <text class="score-label">主题核心</text>
                  <div class="score-progress">
                    <div class="progress-bar">
                      <div class="progress-fill" :style="{ width: profileData.detailedScores.theme_average + '%' }"></div>
                    </div>
                    <text class="score-value">{{ Math.round(profileData.detailedScores.theme_average) }}/100</text>
                  </div>
                </div>
                <div class="score-item">
                  <text class="score-label">结构逻辑</text>
                  <div class="score-progress">
                    <div class="progress-bar">
                      <div class="progress-fill" :style="{ width: profileData.detailedScores.organization_average + '%' }"></div>
                    </div>
                    <text class="score-value">{{ Math.round(profileData.detailedScores.organization_average) }}/100</text>
                  </div>
                </div>
                <div class="score-item">
                  <text class="score-label">内容要点</text>
                  <div class="score-progress">
                    <div class="progress-bar">
                      <div class="progress-fill" :style="{ width: profileData.detailedScores.content_average + '%' }"></div>
                    </div>
                    <text class="score-value">{{ Math.round(profileData.detailedScores.content_average) }}/100</text>
                  </div>
                </div>
                <div class="score-item">
                  <text class="score-label">表达风格</text>
                  <div class="score-progress">
                    <div class="progress-bar">
                      <div class="progress-fill" :style="{ width: profileData.detailedScores.expression_average + '%' }"></div>
                    </div>
                    <text class="score-value">{{ Math.round(profileData.detailedScores.expression_average) }}/100</text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.user-profile-page {
  max-width: 1400px;
  margin: 0 auto;
  background-color: #f5f7fa;
  min-height: 100vh;
}

.nav-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 15px 15px;
  background-color: #ffffff;
  border-bottom: 1px solid #e0e6ed;
}

.nav-back {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-icon {
  width: 24px;
  height: 24px;
  color: #333333;
}

.nav-title {
  font-size: 18px;
  font-weight: bold;
  color: #333F48;
}

.nav-placeholder {
  width: 20px;
}

.profile-content {
  min-height: calc(100vh - 60px);
}

.user-basic-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  background: linear-gradient(to bottom, #eff6ff, #eef2ff);
  border-bottom: 1px solid #e0e6ed;
}

.user-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid rgba(59, 130, 246, 0.2);
  margin-bottom: 10px;
  background: #ffffff;
  object-fit: cover;
}

.user-name {
  font-size: 18px;
  font-weight: bold;
  color: #1e40af;
  margin-bottom: 5px;
}

.user-grade {
  font-size: 14px;
  color: #4b5563;
}

.portrait-section {
  background: #ffffff;
  margin: 10px;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.05);
}

.section-title {
  font-size: 16px;
  font-weight: bold;
  color: #1e40af;
  margin-bottom: 15px;
  text-align: center;
}

.portrait-container {
  position: relative;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.portrait-background {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bg-image {
  width: 150px;
  height: 150px;
  opacity: 0.8;
  object-fit: contain;
}

.data-tags-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.data-tag {
  position: absolute;
  background: #ffffff;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 80px;
  border: 1px solid transparent;
  z-index: 10;
}

.tag-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.05);
}

.tag-icon-inner {
  width: 16px;
  height: 16px;
}

.tag-content {
  display: flex;
  flex-direction: column;
}

.tag-value {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 2px;
  line-height: 1.2;
}

.tag-label {
  font-size: 12px;
  color: #666666;
  line-height: 1.2;
}

.improvement-tag {
  border-color: #16a34a;
  background: rgba(22, 163, 74, 0.1);
}
.improvement-tag .tag-value { color: #16a34a; }

.style-tag {
  border-color: #2563eb;
  background: rgba(37, 99, 235, 0.1);
}
.style-tag .tag-value { color: #2563eb; }

.weak-tag {
  border-color: #dc2626;
  background: rgba(220, 38, 38, 0.1);
}
.weak-tag .tag-value { color: #dc2626; }

.score-tag {
  border-color: #ea580c;
  background: rgba(234, 88, 12, 0.1);
}
.score-tag .tag-value { color: #ea580c; }

.data-cards {
  padding: 0 10px 20px;
}

.data-card {
  background: #ffffff;
  border-radius: 8px;
  margin-bottom: 10px;
  padding: 15px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
}

.card-header {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}

.card-icon-bg {
  width: 22px;
  height: 22px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
}

.card-icon {
  width: 16px;
  height: 16px;
  color: #ffffff;
}

.improvement-bg {
  background: linear-gradient(135deg, #16a34a, #22c55e);
}

.style-bg {
  background: linear-gradient(135deg, #2563eb, #3b82f6);
}

.weak-bg {
  background: linear-gradient(135deg, #dc2626, #ef4444);
}

.score-bg {
  background: linear-gradient(135deg, #ea580c, #f97316);
}

.card-title {
  font-size: 15px;
  font-weight: bold;
  color: #1f2937;
}

.improvement-card {
  background: linear-gradient(135deg, #f0fdf4, #dcfce7);
  border: 1px solid #bbf7d0;
}

.improvement-card .card-title {
  color: #166534;
}

.improvement-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.improvement-item {
  display: flex;
  align-items: flex-start;
  gap: 8px;
}

.improvement-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  background: rgba(22, 163, 74, 0.1);
  border-radius: 50%;
  flex-shrink: 0;
  margin-top: 2px;
}

.improvement-icon-inner {
  width: 12px;
  height: 12px;
  color: #16a34a;
}

.improvement-text {
  font-size: 14px;
  color: #166534;
  line-height: 1.4;
  flex: 1;
  font-weight: 500;
}

.style-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 10px;
}

.style-tag {
  background: rgba(37, 99, 235, 0.1);
  padding: 6px 10px;
  border-radius: 10px;
  font-size: 13px;
  color: #2563eb;
  font-weight: 500;
}

.style-desc {
  font-size: 14px;
  color: #4b5563;
  line-height: 1.6;
}

.weakness-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.weakness-item {
  display: flex;
  align-items: flex-start;
  gap: 8px;
}

.weakness-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  background: rgba(220, 38, 38, 0.1);
  border-radius: 50%;
  flex-shrink: 0;
  margin-top: 3px;
}

.weakness-icon-inner {
  width: 10px;
  height: 10px;
  color: #dc2626;
}

.weakness-text {
  font-size: 14px;
  color: #991b1b;
  line-height: 1.4;
  flex: 1;
  font-weight: 500;
}

.score-item {
  margin-bottom: 10px;
}

.score-item:last-child {
  margin-bottom: 0;
}

.score-label {
  font-size: 14px;
  color: #4b5563;
  margin-bottom: 6px;
  display: block;
  font-weight: 500;
}

.score-progress {
  display: flex;
  align-items: center;
  gap: 10px;
}

.progress-bar {
  flex: 1;
  height: 6px;
  background: #f3f4f6;
  border-radius: 3px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #10b981, #42c8a1);
  border-radius: 3px;
  transition: width 0.3s ease;
}

.score-value {
  font-size: 13px;
  color: #6b7280;
  min-width: 50px;
  text-align: right;
  font-weight: 500;
}

.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
}

.loading-spinner {
  animation: spin 1s linear infinite;
  margin-bottom: 10px;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.loading-text {
  font-size: 14px;
  color: #6b7280;
}

.error-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
  text-align: center;
}

.error-icon {
  width: 48px;
  height: 48px;
  color: #dc2626;
}

.error-text {
  font-size: 14px;
  color: #dc2626;
  margin: 10px 0;
  padding: 0 20px;
}

.retry-button {
  background: #10b981;
  color: white;
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 14px;
  margin-top: 10px;
  border: none;
  cursor: pointer;
}

.painter-loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  padding: 20px;
}

.painter-scene {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.canvas-container {
  position: relative;
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
  perspective: 500px;
}

.canvas {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;
}

.portrait-outline {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.3;
}

.face-outline {
  width: 30px;
  height: 30px;
  border: 1px dashed #10B981;
  border-radius: 50%;
  margin-bottom: 5px;
}

.body-outline {
  width: 20px;
  height: 15px;
  border: 1px dashed #10B981;
  border-radius: 4px;
  margin: 0 auto;
}

.drawing-line {
  position: absolute;
  top: 30%;
  left: 30%;
  width: 20px;
  height: 1px;
  background: #8B5CF6;
  transform-origin: left center;
  animation: drawLine 2s ease-in-out infinite;
}

.completed-parts {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.completed-part {
  position: absolute;
  background: currentColor;
  border-radius: 1px;
  opacity: 0.8;
}

.part-1 {
  top: 35%;
  left: 35%;
  width: 10px;
  height: 1.5px;
  color: #10B981;
  animation: fadeInOut 1.5s ease-in-out infinite;
}

.part-2 {
  top: 45%;
  left: 40%;
  width: 7.5px;
  height: 1.5px;
  color: #10B981;
  animation: fadeInOut 1.8s ease-in-out infinite 0.3s;
}

.part-3 {
  top: 55%;
  left: 45%;
  width: 12.5px;
  height: 1.5px;
  color: #8B5CF6;
  animation: fadeInOut 2s ease-in-out infinite 0.6s;
}

.paint-brush {
  position: absolute;
  top: 50%;
  right: 20%;
  transform: translateY(-50%) rotate(-15deg);
  z-index: 10;
  animation: paintStroke 2s ease-in-out infinite;
}

.brush-handle {
  width: 20px;
  height: 3px;
  background: linear-gradient(135deg, #78350f 0%, #f59e0b 100%);
  border-radius: 1.5px;
}

.brush-tip {
  width: 10px;
  height: 4px;
  background: linear-gradient(135deg, #10B981 0%, #34D399 100%);
  border-radius: 0 2px 2px 0;
  margin-left: -1px;
  transform-origin: left center;
  animation: brushDab 2s ease-in-out infinite;
}

.brush-stroke {
  position: absolute;
  top: 50%;
  left: 100%;
  width: 10px;
  height: 1px;
  background: #10B981;
  opacity: 0.6;
  animation: brushStroke 2s ease-in-out infinite;
}

.painter-text {
  text-align: center;
  margin-bottom: 15px;
}

.painter-title {
  font-size: 16px;
  font-weight: 600;
  color: #1f2937;
  display: block;
  margin-bottom: 4px;
}

.painter-subtitle {
  font-size: 12px;
  color: #6B7280;
  display: block;
}

.palette {
  display: flex;
  gap: 6px;
  margin-top: 10px;
}

.palette-color {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  animation: colorBounce 2s ease-in-out infinite;
}

.color-1 {
  background: #10B981;
  animation-delay: 0s;
}

.color-2 {
  background: #10B981;
  animation-delay: 0.2s;
}

.color-3 {
  background: #8B5CF6;
  animation-delay: 0.4s;
}

.color-4 {
  background: #f59e0b;
  animation-delay: 0.6s;
}

@keyframes drawLine {
  0%, 100% {
    transform: scaleX(0) rotate(0deg);
    opacity: 0;
  }
  50% {
    transform: scaleX(1) rotate(45deg);
    opacity: 1;
  }
}

@keyframes paintStroke {
  0%, 100% {
    transform: translateY(-50%) rotate(-15deg) translateX(0);
  }
  50% {
    transform: translateY(-50%) rotate(-10deg) translateX(-10px);
  }
}

@keyframes brushDab {
  0%, 100% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(0.7);
  }
}

@keyframes brushStroke {
  0%, 100% {
    transform: translateX(0) scaleX(0);
    opacity: 0;
  }
  50% {
    transform: translateX(5px) scaleX(1);
    opacity: 0.6;
  }
}

@keyframes fadeInOut {
  0%, 100% {
    opacity: 0.2;
  }
  50% {
    opacity: 0.8;
  }
}

@keyframes colorBounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
}

@media (max-width: 768px) {
  .canvas-container {
    width: 80px;
    height: 80px;
  }
  
  .paint-brush {
    right: 15%;
    transform: translateY(-50%) rotate(-15deg) scale(0.8);
  }
  
  .painter-title {
    font-size: 14px;
  }
  
  .painter-subtitle {
    font-size: 11px;
  }
}
</style>