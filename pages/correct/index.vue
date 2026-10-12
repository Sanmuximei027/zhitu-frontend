<template>
  <div class="container">
    <div class="boxes-container">
      <div class="box" @click="navigateToCamera">
        <div class="circle blue-circle">
          <CloudUpload class="box-icon" />
        </div>
        <div class="text-container">
          <span class="main-text">AI批改</span>
          <span class="sub-text">上传作文自动批改</span>
        </div>
      </div>
      <div class="box" @click="navigateToExercise">
        <div class="circle purple-circle">
          <FileEdit class="box-icon" />
        </div>
        <div class="text-container">
          <span class="main-text">习题练习</span>
          <span class="sub-text">按主题练习写作</span>
        </div>
      </div>
    </div>
    
    <div class="section-header">
      <span class="title-text">每日素材精推</span>
      <div class="settings-icon" @click="showSettings = true">
        <Settings class="settings-icon-svg" />
      </div>
    </div>
    
    <div class="long-boxes-container" v-if="!showSettings">
      <div 
        class="long-box-link"
        @click="navigateTo('/pages/correct/idiom_story')"
      >
        <div class="long-box" v-if="preferences.idiom">
          <div class="tag-box">
            <span class="tag-text">成语故事</span>
          </div>
          <div class="content-info">
            <span class="content-title">守株待兔</span>
            <span class="content-desc">从前有个农夫，一天在田地里干活时，看见一只兔子撞到树桩上死了。从此，他...</span>
          </div>
        </div>
      </div>
      <div class="long-box" v-if="preferences.quote">
        <div class="tag-box">
          <span class="tag-text">名言金句</span>
        </div>
        <div class="content-info">
          <span class="content-title italic-text">{{ quoteContent.title }}</span>
          <span class="content-desc">{{ quoteContent.desc }}</span>
        </div>
      </div>
      <div class="long-box" v-if="preferences.culture">
        <div class="tag-box">
          <span class="tag-text">文化历史</span>
        </div>
        <div class="content-info">
          <span class="content-title">{{ cultureContent.title }}</span>
          <span class="content-desc">{{ cultureContent.desc }}</span>
        </div>
      </div>
      <div class="long-box" v-if="preferences.news">
        <div class="tag-box">
          <span class="tag-text">时事信息</span>
        </div>
        <div class="content-info">
          <span class="content-title">{{ newsContent.title }}</span>
          <span class="content-desc">{{ newsContent.desc }}</span>
        </div>
      </div>
    </div>
    
    <div class="section-title recommend">
      <span class="title-text">推荐范文</span>
    </div>
    
    <div class="filter-buttons" v-if="filterButtons.length > 1">
      <div 
        v-for="(button, index) in filterButtons" 
        :key="index"
        :class="['filter-button', { active: activeFilter === button.value }]"
        @click="changeFilter(button.value)"
      >
        <span class="button-text">{{ button.label }}</span>
      </div>
    </div>
    
    <div v-if="isLoading" class="loading-state">
      <div class="loading-spinner"></div>
      <span class="loading-text">加载中...</span>
    </div>
    
    <div class="long-boxes-container" v-else>
      <template v-if="essayTop3 && essayTop3.length > 0">
        <div
          v-for="essay in essayTop3"
          :key="essay.id || index"
          class="long-box-link"
          @click="navigateTo(`/pages/home/essay?id=${essay.id || index}`)"
        >
          <div class="long-box">
            <div class="tag-box purple-tag">
              <span class="tag-text">{{ essay.tags?.[0] || essay.type || '范文' }}</span>
            </div>
            <div class="content-info">
              <span class="content-title">{{ essay.title || '无标题' }}</span>
              <span class="content-desc">
                {{ essay.text ? essay.text.slice(0, 60) + '...' : '暂无内容' }}
              </span>
              <span class="display-time">{{ essay.displayTime || '刚刚' }}</span>
            </div>
          </div>
        </div>
      </template>
      
      <div v-else class="error-state" @click="fetchRecommendations(activeFilter)">
        <AlertCircle class="error-icon" />
        <span class="error-text">点击加载离线数据</span>
        <div class="retry-info">
          <span>服务器暂时不可用</span>
        </div>
      </div>
    </div>
    
    <div class="modal-mask" v-if="showSettings" @click="showSettings = false"></div>
    
    <div class="settings-modal" v-if="showSettings">
      <div class="modal-header">
        <div class="header-content">
          <span class="modal-title">推送偏好设置</span>
          <span class="modal-subtitle">选择您感兴趣的素材类型，我们会为您推送</span>
        </div>
        <div class="close-icon" @click="showSettings = false">
          <X class="close-icon-svg" />
        </div>
      </div>
      
      <div class="modal-content">
        <div class="setting-item">
          <div class="label-with-icon">
            <List class="item-icon" />
            <span class="setting-label">成语故事</span>
          </div>
          <button 
            :class="['toggle-btn', { active: preferences.idiom }]"
            @click="togglePreference('idiom')"
          >
            <span class="toggle-circle"></span>
          </button>
        </div>
        
        <div class="setting-item">
          <div class="label-with-icon">
            <FileEdit class="item-icon" />
            <span class="setting-label">名言金句</span>
          </div>
          <button 
            :class="['toggle-btn', { active: preferences.quote }]"
            @click="togglePreference('quote')"
          >
            <span class="toggle-circle"></span>
          </button>
        </div>
        
        <div class="setting-item">
          <div class="label-with-icon">
            <Flag class="item-icon" />
            <span class="setting-label">文化历史</span>
          </div>
          <button 
            :class="['toggle-btn', { active: preferences.culture }]"
            @click="togglePreference('culture')"
          >
            <span class="toggle-circle"></span>
          </button>
        </div>
        
        <div class="setting-item">
          <div class="label-with-icon">
            <Info class="item-icon" />
            <span class="setting-label">时事信息</span>
          </div>
          <button 
            :class="['toggle-btn', { active: preferences.news }]"
            @click="togglePreference('news')"
          >
            <span class="toggle-circle"></span>
          </button>
        </div>
      </div>
      
      <div class="modal-footer">
        <div class="save-button" @click="savePreferences">
          <span class="save-text">保存偏好</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { 
  CloudUpload, FileEdit, Settings, X, List, Flag, Info, AlertCircle 
} from 'lucide-vue-next'

const router = useRouter()

onUnmounted(() => {})

const essayTop3 = ref([
  {
    id: 1,
    title: '我的好朋友小明',
    text: '我的好朋友小明是一个活泼开朗的男孩，他有一双明亮的大眼睛，总是带着微笑。我们经常一起上学、放学，一起做游戏。小明学习很好，尤其是数学，经常帮助我解决难题。',
    author: '三年级学生',
    type: 'character',
    tags: ['写人', '朋友'],
    displayTime: '2天前'
  },
  {
    id: 2,
    title: '难忘的一次旅行',
    text: '去年夏天，我们全家去了海边旅行，那是我最难忘的一次经历。我第一次看到了无边无际的大海，浪花一个接一个地涌来，美丽极了。我们还在沙滩上捡贝壳、堆沙堡，玩得很开心。',
    author: '四年级学生',
    type: 'narrative',
    tags: ['写事', '旅行'],
    displayTime: '1周前'
  }
])
const hotTags = ref(['写人', '写事', '写景', '想象'])
const activeFilter = ref('all')

const quoteContent = ref({title: '学而不思则罔，思而不学则殆',
  desc: '只学习而不思考，就会迷惑不解；只思考而不学习，就会在学业上陷入困境。'})
const cultureContent = ref({title: '丝绸之路的历史意义',
  desc: '丝绸之路不仅是古代东西方贸易的通道，更是文化交流的桥梁，促进了世界文明的发展。'})
const newsContent = ref({ title: '人工智能助力教育创新',
  desc: '近年来，AI技术在教育领域的应用日益广泛，为个性化学习提供了新的可能性。'})

const filterButtons = ref([
  { label: '全部', value: 'all' }
])

const mockData = {
  tags: ['写人', '写事', '写景', '想象'],
  result: [
    {
      id: 1,
      title: '我的好朋友小明',
      text: '我的好朋友小明是一个活泼开朗的男孩，他有一双明亮的大眼睛，总是带着微笑。我们经常一起上学、放学，一起做游戏。小明学习很好，尤其是数学，经常帮助我解决难题。',
      author: '三年级学生',
      type: 'character',
      tags: ['写人', '朋友'],
      displayTime: '2天前'
    },
    {
      id: 2,
      title: '难忘的一次旅行',
      text: '去年夏天，我们全家去了海边旅行，那是我最难忘的一次经历。我第一次看到了无边无际的大海，浪花一个接一个地涌来，美丽极了。我们还在沙滩上捡贝壳、堆沙堡，玩得很开心。',
      author: '四年级学生',
      type: 'narrative',
      tags: ['写事', '旅行'],
      displayTime: '1周前'
    },
    {
      id: 3,
      title: '美丽的校园',
      text: '我们的校园很美，春天鲜花盛开，夏天绿树成荫，秋天落叶纷飞，冬天银装素裹。走进校门，首先看到的是一个宽阔的操场，操场周围种满了高大的树木。教室宽敞明亮，是我们学习的好地方。',
      author: '五年级学生',
      type: 'descriptive',
      tags: ['写景', '校园'],
      displayTime: '3天前'
    },
    {
      id: 4,
      title: '未来的世界',
      text: '未来的世界会是什么样子呢？我想象着，那时候的汽车可以飞，可以在水面上行驶。机器人会帮我们做家务，照顾老人和孩子。人们可以乘坐宇宙飞船去其他星球旅行，探索宇宙的奥秘。',
      author: '六年级学生',
      type: 'imaginative',
      tags: ['想象', '未来'],
      displayTime: '5天前'
    }
  ]
}

const isOffline = ref(true)
const isLoading = ref(false)

async function fetchRecommendations(tag = 'all') {
  isLoading.value = true
  
  try {
    console.log('使用离线模拟数据')
    useMockData(tag)
    isOffline.value = true
  } catch (error) {
    console.error('获取推荐失败:', error)
    if (!essayTop3.value || essayTop3.value.length === 0) {
      essayTop3.value = [
        { id: 1, title: '备用范文1', text: '这是一篇备用范文...', tags: ['备用'], displayTime: '刚刚' },
        { id: 2, title: '备用范文2', text: '这是另一篇备用范文...', tags: ['备用'], displayTime: '5分钟前' }
      ]
    }
  } finally {
    isLoading.value = false
  }
}

function useMockData(tag) {
  hotTags.value = mockData.tags
  
  if (tag && tag !== 'all') {
    const filtered = mockData.result.filter(item => {
      return item.type === tag || 
             (item.tags && Array.isArray(item.tags) && item.tags.includes(tag))
    })
    essayTop3.value = filtered.length > 0 ? filtered : mockData.result
  } else {
    essayTop3.value = mockData.result
  }
  
  const newFilterButtons = [
    { label: '全部', value: 'all' }
  ]
  
  mockData.tags.slice(0, 4).forEach(tag => {
    newFilterButtons.push({ label: tag, value: tag })
  })
  
  filterButtons.value = newFilterButtons
  
  console.log('模拟数据已加载，共', essayTop3.value.length, '篇范文')
}

const changeFilter = async (value) => {
  if (activeFilter.value === value || isLoading.value) return
  
  activeFilter.value = value
  console.log('切换到', value, '标签')
  
  try {
    await fetchRecommendations(value)
  } catch (error) {
    console.error('切换标签失败:', error)
    if (!essayTop3.value || essayTop3.value.length === 0) {
      useMockData('all')
    }
  }
}

onMounted(() => {
  try {
    console.log('页面加载，立即获取推荐数据')
    fetchRecommendations(activeFilter.value)
  } catch (error) {
    console.error('页面加载失败:', error)
    if (!essayTop3.value || essayTop3.value.length === 0) {
      essayTop3.value = [
        { id: 1, title: '默认范文', text: '这是系统默认推荐的范文内容...', tags: ['默认'], displayTime: '刚刚' }
      ]
    }
  }
})

const navigateToExercise = () => {
  router.push('/pages/correct/checkone')
}

const navigateToCamera = () => {
  router.push('/pages/correct/photo')
}

const navigateTo = (url) => {
  router.push(url)
}

const showSettings = ref(false)
const preferences = ref({
  idiom: true,
  quote: true, 
  culture: true,
  news: false
})

const togglePreference = (key) => {
  preferences.value[key] = !preferences.value[key]
}

const savePreferences = () => {
  console.log('保存偏好设置:', preferences.value)
  showSettings.value = false
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 1400px;
  margin: 0 auto;
  min-height: 100vh;
  background-color: #ffffff;
  padding: 20rpx;
  padding-bottom: 120rpx;
  box-sizing: border-box;
}

.boxes-container {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: 30rpx;
  width: 100%;
  padding-top: 40rpx;
}

.box {
  flex: 1;
  min-width: 200rpx;
  height: 260rpx;
  border: 2rpx solid #e8e8e8;
  border-radius: 12rpx;
  background-color: #ffffff;
  box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.08), 
              0 0 0 1rpx rgba(0, 0, 0, 0.02) inset;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 30rpx;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
}

.box:hover {
  transform: scale(1.02);
  box-shadow: 0 6rpx 20rpx rgba(0, 0, 0, 0.12);
}

.circle {
  width: 100rpx;
  height: 100rpx;
  border-radius: 50%;
  opacity: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
}

.blue-circle {
  background-color: rgba(147, 245, 205, 0.5); 
}

.purple-circle {
  background-color: rgba(217, 184, 255, 0.5); 
}

.box-icon {
  width: 40rpx;
  height: 40rpx;
}

.blue-circle .box-icon {
  color: #10B981;
}

.purple-circle .box-icon {
  color: #8A2BE2;
}

.text-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15rpx;
}

.main-text {
  font-size: 28rpx;
  font-weight: 700;
  color: #666666;
  text-align: center;
}

.sub-text {
  font-size: 21rpx;
  font-weight: normal;
  color: #999999;
  text-align: center;
  margin-top: 5rpx;
}

.section-title {
  width: 100%;
  padding: 45rpx 30rpx 20rpx 50rpx;
  box-sizing: border-box;
  text-align: left;
}

.title-text {
  font-size: 38rpx;
  font-weight: bold;
  color: #333333;
}

.long-boxes-container {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 35rpx;
  width: 100%;
  padding: 20rpx;
  box-sizing: border-box;
}

.long-box {
  width: 100%;
  min-height: 170rpx;
  border: 2rpx solid #e8e8e8;
  border-radius: 12rpx;
  background-color: #ffffff;
  box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.08), 
              0 0 0 1rpx rgba(0, 0, 0, 0.02) inset;
  padding: 24rpx;
  box-sizing: border-box;
  display: flex;
  gap: 24rpx;
  position: relative;
}

.tag-box {
  background-color: rgba(160, 210, 255, 0.3); 
  padding: 14rpx 22rpx;
  border-radius: 5rpx;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center; 
  flex-shrink: 0;
}

.tag-text {
  font-size: 14px;
  font-weight: 400;
  color: rgba(24, 144, 255, 0.7);
  line-height: 1;
}

.content-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 80rpx;
}

.content-title {
  font-size: 16px;
  font-weight: 400;
  color: #444444;
}

.italic-text {
  font-style: italic;
}

.content-desc {
  font-size: 13px;
  font-weight: normal;
  color: #999999;
  line-height: 1.4;
}

.content-info .display-time {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.3);
  position: absolute;
  bottom: 24rpx;
  right: 24rpx;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 45rpx 50rpx 20rpx 50rpx;
  box-sizing: border-box;
}

.settings-icon {
  padding: 8rpx;
  width: 60rpx;
  height: 60rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.settings-icon-svg {
  width: 38rpx;
  height: 38rpx;
  color: #666;
}

.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

.settings-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600rpx;
  height: 850rpx;
  background-color: #ffffff;
  border-radius: 20rpx;
  z-index: 1000;
  box-shadow: 0 20rpx 80rpx rgba(0, 0, 0, 0.15);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 30rpx 30rpx 25rpx 40rpx; 
  border-bottom: 2rpx solid #f0f0f0;
  min-height: 120rpx;
  position: relative;
}

.header-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  margin-right: 30rpx;
}

.modal-title {
  font-size: 36rpx;
  font-weight: bold;
  color: #333;
  margin-bottom: 25rpx;
}

.modal-subtitle {
  font-size: 24rpx;
  color: #999;
  font-weight: normal;
  line-height: 1.4;
}

.close-icon {
  position: absolute;
  top: 35rpx;
  right: 30rpx;
  padding: 8rpx;
  width: 44rpx;
  height: 44rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.close-icon-svg {
  width: 36rpx;
  height: 36rpx;
  color: #999;
}

.modal-content {
  padding: 30rpx 40rpx 40rpx 40rpx;
  display: flex;
  flex-direction: column;
  gap: 60rpx;
}

.setting-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  border-bottom: none;
}

.setting-label {
  font-size: 32rpx;
  color: #333;
  font-weight: normal;
}

.label-with-icon {
  display: flex;
  align-items: center;
  gap: 20rpx;
}

.item-icon {
  width: 32rpx;
  height: 32rpx;
  margin-right: 10rpx;
}

.modal-footer {
  padding: 30rpx 40rpx 50rpx 40rpx;
  margin-top: 2rpx;
}

.save-button {
  background-color: #5b9bd4;
  border-radius: 38rpx;
  padding: 28rpx 0;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.2s;
}

.save-button:hover {
  background-color: #0c6cd9;
}

.save-text {
  font-size: 32rpx;
  color: #ffffff;
  font-weight: 500;
}

.toggle-btn {
  width: 80rpx;
  height: 44rpx;
  border-radius: 22rpx;
  background-color: #ccc;
  border: none;
  cursor: pointer;
  position: relative;
  transition: background-color 0.3s;
}

.toggle-btn.active {
  background-color: #5b9bd4;
}

.toggle-circle {
  position: absolute;
  top: 4rpx;
  left: 4rpx;
  width: 36rpx;
  height: 36rpx;
  border-radius: 50%;
  background-color: #fff;
  transition: transform 0.3s;
}

.toggle-btn.active .toggle-circle {
  transform: translateX(36rpx);
}

.section-title.recommend {
  padding-top: 20rpx;
  margin-top: 5rpx;
}

.filter-buttons {
  display: flex;
  justify-content: center;
  gap: 18rpx;
  padding: 15rpx 20rpx;
  flex-wrap: wrap;
  margin: -10rpx 0 0 -20rpx;
}

.filter-button {
  background-color: rgba(160, 210, 255, 0.3);
  border-radius: 30rpx;
  padding: 8rpx 15rpx;
  min-width: 80rpx;
  height: 50rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
  cursor: pointer;
}

.filter-button.active {
  background-color: #5b9bd4;
}

.button-text {
  font-size: 22rpx;
  color: #333;
  font-weight: normal;
  line-height: 1;
}

.filter-button.active .button-text {
  color: #fff;
}

.purple-tag {
  background-color: rgba(217, 184, 255, 0.3) !important;
  padding: 10rpx 18rpx !important;
  min-width: 55rpx !important;
}

.purple-tag .tag-text {
  color: rgba(138, 43, 226, 0.7) !important;
  font-size: 22rpx !important;
}

.loading-state, .empty-state {
  padding: 40rpx;
  text-align: center;
  color: #999;
  font-size: 28rpx;
}

.error-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100rpx 0;
  color: #FF6B6B;
  text-align: center;
  cursor: pointer;
  min-height: 400rpx;
  width: 100%;
}

.error-icon {
  width: 64rpx;
  height: 64rpx;
}

.error-text {
  font-size: 32rpx;
  margin-top: 20rpx;
  padding: 0 40rpx;
  line-height: 44rpx;
}

.retry-info {
  margin-top: 15rpx;
  font-size: 26rpx;
  color: #999;
}

.loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100rpx 0;
  color: #666;
}

.loading-spinner {
  width: 48rpx;
  height: 48rpx;
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
  margin-top: 20rpx;
  font-size: 28rpx;
}

.long-box-link {
  display: block;
  text-decoration: none;
  cursor: pointer;
}

.long-box-link:hover .long-box {
  box-shadow: 0 6rpx 20rpx rgba(0, 0, 0, 0.12);
}
</style>
