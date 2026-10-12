<template>
  <div class="page">
    <div class="bg-circle c1"></div>
    <div class="bg-circle c2"></div>
    <div class="bg-circle c3"></div>

    <div class="nav-bar">
      <div class="nav-back" @click="router.back()">
        <ArrowLeft class="nav-icon" />
      </div>
      <span class="nav-title">词汇学习</span>
      <div class="nav-placeholder"></div>
    </div>

    <div class="target-box">
      <span class="target-label">目标词汇</span>
      <span class="target-word">{{ word }}</span>
      <span :class="['state-badge', { tested: tested, learned: learned && !tested }]">
        {{ tested ? '已通过测试' : (learned ? '已学习' : '未学习') }}
      </span>
    </div>

    <div class="video-row">
      <div class="side-decor">
        <div class="decor-card">
          <div class="decor-card-head">
            <PlayCircle class="decor-icon" />
            <span>学习建议</span>
          </div>
          <div class="decor-item"><span class="dot"></span><span>反复观看：可拖动进度条重复学习</span></div>
          <div class="decor-item"><span class="dot"></span><span>跟随练习：边看边模仿手势动作</span></div>
          <div class="decor-item"><span class="dot"></span><span>观察要点：注意手形、位置与运动</span></div>
          <div class="decor-item"><span class="dot"></span><span>自动记录：视频看完标记为已学</span></div>
        </div>
        <div class="decor-quote">多看多练，手势自然就熟练了</div>
      </div>

      <div class="video-box" :style="videoBoxStyle">
        <video
          v-if="hasVideo && videoUrl"
          ref="videoRef"
          :src="videoUrl"
          controls
          playsinline
          class="learn-video"
          @loadedmetadata="onVideoMeta"
          @ended="onVideoEnded"
        ></video>
        <div v-else class="video-placeholder">
          <VideoOff class="placeholder-icon" />
          <span class="placeholder-text">学习视频上传中</span>
          <span class="placeholder-tip">视频稍后补充，你也可以先标记完成学习</span>
        </div>
      </div>

      <div class="side-decor">
        <div class="decor-card">
          <div class="decor-card-head">
            <ClipboardList class="decor-icon" />
            <span>学习流程</span>
          </div>
          <div class="decor-step"><span class="step-num">1</span><span>观看手势示范视频</span></div>
          <div class="decor-step"><span class="step-num">2</span><span>跟随视频反复练习</span></div>
          <div class="decor-step"><span class="step-num">3</span><span>看完自动标记已学</span></div>
          <div class="decor-step"><span class="step-num">4</span><span>开始测试检验成果</span></div>
        </div>
        <div class="decor-card mini">
          <div class="decor-card-head">
            <Target class="decor-icon" />
            <span>当前目标</span>
          </div>
          <div class="mini-word">{{ word }}</div>
        </div>
      </div>
    </div>

    <p class="video-tip">观看「{{ word }}」的手势示范，学会后点击下方按钮开始测试</p>

    <div class="action-area">
      <button
        class="mark-btn"
        :disabled="learned"
        @click="markLearned"
      >
        {{ learned ? '已完成学习 ✓' : '标记为已学习' }}
      </button>
      <button
        class="test-btn"
        :disabled="!learned"
        @click="goTest"
      >
        {{ learned ? '开始测试' : '学习后解锁测试' }}
      </button>
    </div>

    <div class="learn-tip">
      <span class="tip-title">学习建议</span>
      <span class="tip-content">观看视频注意手势的形状、位置和运动方向，可以跟随视频反复练习，熟练后进入测试检验学习成果。</span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { ArrowLeft, VideoOff, PlayCircle, ClipboardList, Target } from 'lucide-vue-next'
import { requestWithAuth } from '@/utils/tokenManager'
import { getApiBaseUrl } from '@/utils/apiBase'
import uni from '@/utils/uni.js'

const router = useRouter()
const route = useRoute()

const word = ref('')
const hasVideo = ref(false)
const videoUrl = ref('')
const learned = ref(false)
const tested = ref(false)
const saving = ref(false)
const videoRef = ref(null)

// 视频宽高比: 容器按此比例自适应宽度, 完整显示画面不截断
const videoRatio = ref(16 / 9)
const videoBoxStyle = computed(() => ({ aspectRatio: String(videoRatio.value) }))

const onVideoMeta = () => {
  const v = videoRef.value
  if (v && v.videoWidth && v.videoHeight) {
    videoRatio.value = v.videoWidth / v.videoHeight
  }
}

const markLearned = async () => {
  if (saving.value) return
  saving.value = true
  try {
    const response = await requestWithAuth({
      url: '/api/sign/progress/',
      method: 'POST',
      data: { word: word.value, learned: true, tested: tested.value }
    })
    if (response.statusCode === 200 && response.data?.status === 'success') {
      learned.value = true
      uni.showToast({ title: '已标记为已学习' })
    } else {
      throw new Error(response.data?.message || '保存进度失败')
    }
  } catch (err) {
    uni.showToast({ title: err.message || '保存进度失败' })
    console.error('保存学习进度失败:', err)
  } finally {
    saving.value = false
  }
}

const onVideoEnded = () => {
  if (!learned.value) {
    markLearned()
  }
}

const goTest = () => {
  if (!learned.value) return
  router.push(`/pages/sign/verify?word=${encodeURIComponent(word.value)}`)
}

onMounted(() => {
  word.value = decodeURIComponent(route.query.word || '')
  hasVideo.value = route.query.has_video === 'true'
  // 后端返回的是 /media/... 相对路径，需拼上后端地址（部署后与前端不同端口）
  const rawVideoUrl = decodeURIComponent(route.query.video_url || '')
  videoUrl.value = rawVideoUrl ? getApiBaseUrl() + rawVideoUrl : ''
  learned.value = route.query.learned === 'true'
  tested.value = route.query.tested === 'true'
  if (!word.value) {
    uni.showToast({ title: '参数缺失' })
    router.replace('/pages/sign/index')
  }
})

onUnmounted(() => {})
</script>

<style lang="scss" scoped>
.page {
  min-height: 100vh;
  background: #f7f9fb;
  padding-bottom: 60rpx;
  position: relative;
  overflow-x: hidden;
}

.bg-circle {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(5, 150, 105, 0.04));
  z-index: 0;
  pointer-events: none;

  &.c1 {
    width: 340px;
    height: 340px;
    top: 6%;
    left: -100px;
  }

  &.c2 {
    width: 260px;
    height: 260px;
    bottom: 8%;
    right: -80px;
  }

  &.c3 {
    width: 110px;
    height: 110px;
    top: 42%;
    left: 3%;
  }
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

.target-box {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16rpx;
  margin: 24rpx 30rpx;
  padding: 20rpx;
  background: linear-gradient(135deg, #d9f7eb, #c4eeda);
  border-radius: 16rpx;
  position: relative;
  z-index: 1;
}

.target-label {
  font-size: 26rpx;
  color: #666;
}

.target-word {
  font-size: 34rpx;
  font-weight: bold;
  color: #10B981;
}

.state-badge {
  font-size: 22rpx;
  padding: 6rpx 18rpx;
  border-radius: 20rpx;
  background: #fff;
  color: #999;

  &.learned {
    color: #10B981;
    background: rgba(16, 185, 129, 0.12);
  }

  &.tested {
    color: #d99a00;
    background: rgba(217, 154, 0, 0.12);
  }
}

.video-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 28rpx;
  padding: 0 30rpx;
  position: relative;
  z-index: 1;
}

.side-decor {
  display: none;
  flex-direction: column;
  gap: 24rpx;
  width: 300px;
  flex-shrink: 0;

  @media (min-width: 1280px) {
    display: flex;
  }
}

.decor-card {
  display: flex;
  flex-direction: column;
  gap: 20rpx;
  padding: 30rpx;
  background: #ffffff;
  border-radius: 20rpx;
  box-shadow: 0 6rpx 20rpx rgba(16, 185, 129, 0.1);

  &.mini {
    align-items: center;
    gap: 10rpx;
  }
}

.decor-card-head {
  display: flex;
  align-items: center;
  gap: 12rpx;
  font-size: 28rpx;
  font-weight: bold;
  color: #333;

  & + .mini-word {
    margin-top: 6rpx;
  }
}

.decor-icon {
  width: 32rpx;
  height: 32rpx;
  color: #10B981;
}

.decor-item {
  display: flex;
  align-items: flex-start;
  gap: 14rpx;
  font-size: 24rpx;
  color: #6b7a8d;
  line-height: 1.6;
}

.dot {
  width: 10rpx;
  height: 10rpx;
  margin-top: 13rpx;
  border-radius: 50%;
  background: #10B981;
  flex-shrink: 0;
}

.decor-step {
  display: flex;
  align-items: center;
  gap: 16rpx;
  font-size: 24rpx;
  color: #6b7a8d;
}

.step-num {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38rpx;
  height: 38rpx;
  border-radius: 50%;
  background: #d9f7eb;
  color: #10B981;
  font-size: 20rpx;
  font-weight: bold;
  flex-shrink: 0;
}

.decor-quote {
  font-size: 24rpx;
  color: #10B981;
  text-align: center;
  font-style: italic;
  opacity: 0.8;
}

.mini-word {
  font-size: 44rpx;
  font-weight: bold;
  color: #10B981;
  letter-spacing: 4rpx;
}

.video-box {
  position: relative;
  margin: 0;
  height: 62vh;
  min-height: 420rpx;
  max-width: 100%;
  border-radius: 20rpx;
  overflow: hidden;
  background: #1a1a2e;
}

.learn-video {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.video-placeholder {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16rpx;
  background: #eef3f8;
}

.placeholder-icon {
  width: 72rpx;
  height: 72rpx;
  color: #b0c4d8;
}

.placeholder-text {
  font-size: 30rpx;
  color: #667;
  font-weight: 500;
}

.placeholder-tip {
  font-size: 24rpx;
  color: #9ab;
}

.video-tip {
  margin: 20rpx 40rpx 0;
  font-size: 24rpx;
  color: #888;
  text-align: center;
  position: relative;
  z-index: 1;
}

.action-area {
  display: flex;
  justify-content: center;
  gap: 24rpx;
  margin: 30rpx 30rpx 0;
  position: relative;
  z-index: 1;
}

button {
  width: 300rpx;
  height: 88rpx;
  border: none;
  border-radius: 44rpx;
  font-size: 30rpx;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}

.mark-btn {
  background: #d9f7eb;
  color: #10B981;
}

.test-btn {
  background: #10B981;
  color: #fff;
}

.learn-tip {
  display: flex;
  flex-direction: column;
  gap: 12rpx;
  margin: 30rpx 30rpx 0;
  padding: 24rpx;
  background: #fff;
  border-radius: 20rpx;
  position: relative;
  z-index: 1;

  @media (min-width: 1280px) {
    display: none;
  }
}

.tip-title {
  font-size: 28rpx;
  font-weight: bold;
  color: #333;
}

.tip-content {
  font-size: 24rpx;
  color: #888;
  line-height: 1.7;
}
</style>
