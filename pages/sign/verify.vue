<template>
  <div class="page">
    <div class="bg-circle c1"></div>
    <div class="bg-circle c2"></div>
    <div class="bg-circle c3"></div>

    <div class="nav-bar">
      <div class="nav-back" @click="goBack">
        <ArrowLeft class="nav-icon" />
      </div>
      <span class="nav-title">手语测试</span>
      <div class="nav-placeholder"></div>
    </div>

    <div class="target-box">
      <span class="target-label">目标词汇</span>
      <span class="target-word">{{ word }}</span>
    </div>

    <div class="camera-row">
      <div class="side-decor">
        <div class="decor-card">
          <div class="decor-card-head">
            <Hand class="decor-icon" />
            <span>手势要点</span>
          </div>
          <div class="decor-item"><span class="dot"></span><span>手形准确：与视频示范保持一致</span></div>
          <div class="decor-item"><span class="dot"></span><span>位置适中：手势置于画面中央</span></div>
          <div class="decor-item"><span class="dot"></span><span>运动清晰：移动动作请放慢速度</span></div>
          <div class="decor-item"><span class="dot"></span><span>光线充足：避免逆光遮挡手部</span></div>
        </div>
        <div class="decor-quote">多练习几次，识别会更准确哦</div>
      </div>

      <div class="camera-box" :style="cameraBoxStyle">
      <video
        ref="videoRef"
        autoplay
        playsinline
        muted
        class="camera-preview"
        :class="{ mirrored: mirrored }"
        @loadedmetadata="onVideoMeta"
      ></video>
      <div v-if="!cameraReady" class="camera-mask">
        <CameraOff v-if="cameraError" class="mask-icon" />
        <span class="mask-text">{{ cameraError || '正在打开摄像头...' }}</span>
        <button v-if="cameraError" class="mask-retry" @click="openCamera">重试</button>
      </div>
      <div v-if="recording" class="recording-badge">
        <span class="recording-dot"></span>
        录制中 {{ recordSeconds }}s
      </div>
      </div>

      <div class="side-decor">
        <div class="decor-card">
          <div class="decor-card-head">
            <ClipboardList class="decor-icon" />
            <span>测试流程</span>
          </div>
          <div class="decor-step"><span class="step-num">1</span><span>点击「开始录制」按钮</span></div>
          <div class="decor-step"><span class="step-num">2</span><span>正对镜头做出目标手势</span></div>
          <div class="decor-step"><span class="step-num">3</span><span>停止录制，AI 自动识别</span></div>
          <div class="decor-step"><span class="step-num">4</span><span>查看结果，通过后标记已测</span></div>
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

    <p class="camera-tip">请正对摄像头做出「{{ word }}」的手势，建议录制 3~5 秒</p>

    <div class="control-area">
      <button
        v-if="!recording"
        class="start-btn"
        :disabled="!cameraReady || uploading"
        @click="startRecord"
      >
        {{ uploading ? '识别中...' : '开始录制' }}
      </button>
      <button v-else class="stop-btn" @click="stopAndRecognize">停止并识别</button>
    </div>

    <div v-if="uploading" class="uploading-box">
      <div class="loading-spinner"></div>
      <span class="uploading-text">AI 识别中，请稍候（首次约需十几秒）</span>
    </div>

    <div v-if="result" class="result-box">
      <span class="result-label">识别结果</span>
      <span class="result-word">{{ result.word }}</span>
      <span v-if="result.confidence != null" class="result-conf">
        置信度 {{ (result.confidence * 100).toFixed(1) }}%
      </span>
      <div class="result-actions">
        <button class="again-btn" @click="resetRecord">再测一次</button>
        <button class="finish-btn" @click="goBackList">完成</button>
      </div>
    </div>

    <div v-if="recognizeError" class="error-box">
      <AlertCircle class="error-icon" />
      <span class="error-text">{{ recognizeError }}</span>
      <button class="error-retry" @click="resetRecord">重新录制</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { ArrowLeft, CameraOff, AlertCircle, Hand, ClipboardList, Target } from 'lucide-vue-next'
import { requestWithAuth } from '@/utils/tokenManager'
import uni from '@/utils/uni.js'

const router = useRouter()
const route = useRoute()

const word = ref('')
const videoRef = ref(null)
const cameraReady = ref(false)
const cameraError = ref('')
const recording = ref(false)
const recordSeconds = ref(0)
const uploading = ref(false)
const result = ref(null)
const recognizeError = ref('')
// 前置预览镜像显示更符合直觉; 后端识别按非镜像处理, 与拍摄方向无关
const mirrored = ref(true)

let mediaStream = null
let mediaRecorder = null
let chunks = []
let timer = null

// 摄像头画面宽高比: 容器按此比例自适应宽度, 避免左右黑边
const videoRatio = ref(4 / 3)
const cameraBoxStyle = computed(() => ({ aspectRatio: String(videoRatio.value) }))

const onVideoMeta = () => {
  const v = videoRef.value
  if (v && v.videoWidth && v.videoHeight) {
    videoRatio.value = v.videoWidth / v.videoHeight
  }
}

const openCamera = async () => {
  cameraError.value = ''
  cameraReady.value = false
  try {
    mediaStream = await navigator.mediaDevices.getUserMedia({
      video: { width: { ideal: 1280 }, height: { ideal: 720 }, facingMode: 'user' },
      audio: false
    })
    if (videoRef.value) {
      videoRef.value.srcObject = mediaStream
    }
    cameraReady.value = true
  } catch (err) {
    if (err.name === 'NotAllowedError') {
      cameraError.value = '摄像头权限被拒绝，请在浏览器设置中允许访问'
    } else if (err.name === 'NotFoundError') {
      cameraError.value = '未检测到可用摄像头'
    } else {
      cameraError.value = '摄像头打开失败: ' + (err.message || err.name)
    }
    console.error('打开摄像头失败:', err)
  }
}

const pickMimeType = () => {
  const candidates = [
    'video/webm;codecs=vp9',
    'video/webm;codecs=vp8',
    'video/webm',
    'video/mp4'
  ]
  for (const type of candidates) {
    if (window.MediaRecorder && MediaRecorder.isTypeSupported(type)) {
      return type
    }
  }
  return ''
}

const startRecord = () => {
  if (!cameraReady.value || uploading.value) return
  result.value = null
  recognizeError.value = ''
  chunks = []

  const mimeType = pickMimeType()
  try {
    mediaRecorder = mimeType ? new MediaRecorder(mediaStream, { mimeType }) : new MediaRecorder(mediaStream)
  } catch (err) {
    recognizeError.value = '录制功能初始化失败: ' + err.message
    return
  }

  mediaRecorder.ondataavailable = (e) => {
    if (e.data && e.data.size > 0) {
      chunks.push(e.data)
    }
  }
  mediaRecorder.onstop = uploadVideo

  mediaRecorder.start()
  recording.value = true
  recordSeconds.value = 0
  timer = setInterval(() => {
    recordSeconds.value += 1
    // 最长录制10秒自动停止, 防止文件过大
    if (recordSeconds.value >= 10) {
      stopAndRecognize()
    }
  }, 1000)
}

const stopAndRecognize = () => {
  if (!recording.value) return
  recording.value = false
  clearInterval(timer)
  timer = null
  if (mediaRecorder && mediaRecorder.state !== 'inactive') {
    mediaRecorder.stop()
  }
}

const uploadVideo = async () => {
  if (chunks.length === 0) {
    recognizeError.value = '未录制到有效内容，请重试'
    return
  }
  const blob = new Blob(chunks, { type: chunks[0].type || 'video/webm' })
  const ext = blob.type.includes('mp4') ? 'mp4' : 'webm'

  uploading.value = true
  recognizeError.value = ''
  try {
    const accessToken = uni.getStorageSync('accessToken')
    const formData = new FormData()
    formData.append('video', blob, `sign_${Date.now()}.${ext}`)

    const response = await fetch('/api/sign/recognize/', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${accessToken}` },
      body: formData
    })
    const data = await response.json().catch(() => ({}))

    if (response.status === 401) {
      uni.showToast({ title: '登录已过期，请重新登录' })
      router.push('/pages/login/login')
      return
    }
    if (!response.ok || data.status !== 'success') {
      throw new Error(data.message || `识别失败(${response.status})`)
    }

    result.value = data.data
    await saveTestedProgress()
  } catch (err) {
    recognizeError.value = err.message || '识别请求失败，请检查网络'
    console.error('手语识别失败:', err)
  } finally {
    uploading.value = false
  }
}

const saveTestedProgress = async () => {
  try {
    await requestWithAuth({
      url: '/api/sign/progress/',
      method: 'POST',
      data: { word: word.value, learned: true, tested: true }
    })
  } catch (err) {
    // 进度保存失败不阻断结果展示
    console.error('保存测试进度失败:', err)
  }
}

const resetRecord = () => {
  result.value = null
  recognizeError.value = ''
  recordSeconds.value = 0
}

const goBack = () => {
  stopCamera()
  router.back()
}

const goBackList = () => {
  stopCamera()
  router.replace('/pages/sign/index')
}

const stopCamera = () => {
  clearInterval(timer)
  timer = null
  if (mediaRecorder && mediaRecorder.state !== 'inactive') {
    try { mediaRecorder.stop() } catch (e) { /* 忽略 */ }
  }
  if (mediaStream) {
    mediaStream.getTracks().forEach(track => track.stop())
    mediaStream = null
  }
}

onMounted(() => {
  word.value = decodeURIComponent(route.query.word || '')
  if (!word.value) {
    uni.showToast({ title: '参数缺失' })
    router.replace('/pages/sign/index')
    return
  }
  openCamera()
})

onUnmounted(() => {
  stopCamera()
})
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

.camera-row {
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

.target-label {
  font-size: 26rpx;
  color: #666;
}

.target-word {
  font-size: 40rpx;
  font-weight: bold;
  color: #10B981;
}

.camera-box {
  position: relative;
  margin: 0;
  height: 62vh;
  min-height: 420rpx;
  max-width: 100%;
  border-radius: 20rpx;
  overflow: hidden;
  background: #1a1a2e;
}

.camera-preview {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;

  &.mirrored {
    transform: scaleX(-1);
  }
}

.camera-mask {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16rpx;
  background: #1a1a2e;
}

.mask-icon {
  width: 64rpx;
  height: 64rpx;
  color: #8899aa;
}

.mask-text {
  font-size: 26rpx;
  color: #ccd;
  padding: 0 40rpx;
  text-align: center;
}

.mask-retry {
  margin-top: 10rpx;
  padding: 12rpx 48rpx;
  background: #10B981;
  color: #fff;
  border: none;
  border-radius: 32rpx;
  font-size: 26rpx;
  cursor: pointer;
}

.recording-badge {
  position: absolute;
  top: 20rpx;
  left: 20rpx;
  display: flex;
  align-items: center;
  gap: 10rpx;
  padding: 8rpx 20rpx;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 24rpx;
  font-size: 24rpx;
  color: #fff;
}

.recording-dot {
  width: 16rpx;
  height: 16rpx;
  border-radius: 50%;
  background: #ff4d4f;
  animation: blink 1s ease infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

.camera-tip {
  margin: 20rpx 40rpx 0;
  font-size: 24rpx;
  color: #888;
  text-align: center;
}

.control-area {
  display: flex;
  justify-content: center;
  margin: 30rpx 30rpx 0;
  position: relative;
  z-index: 1;
}

button {
  width: 400rpx;
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

.start-btn {
  background: #10B981;
  color: #fff;
}

.stop-btn {
  background: #ff4d4f;
  color: #fff;
  animation: pulse 1.2s ease infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.03); }
}

.uploading-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16rpx;
  margin: 40rpx 30rpx 0;
  padding: 30rpx;
  position: relative;
  z-index: 1;
}

.loading-spinner {
  width: 44rpx;
  height: 44rpx;
  border: 4rpx solid #f3f3f3;
  border-top: 4rpx solid #10B981;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.uploading-text {
  font-size: 26rpx;
  color: #888;
}

.result-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12rpx;
  margin: 40rpx 30rpx 0;
  padding: 36rpx;
  background: #fff;
  border-radius: 20rpx;
  position: relative;
  z-index: 1;
  box-shadow: 0 4rpx 16rpx rgba(16, 185, 129, 0.1);
}

.result-label {
  font-size: 26rpx;
  color: #999;
}

.result-word {
  font-size: 64rpx;
  font-weight: bold;
  color: #10B981;
}

.result-conf {
  font-size: 24rpx;
  color: #aaa;
}

.result-actions {
  display: flex;
  gap: 20rpx;
  margin-top: 20rpx;
  width: 100%;

  button {
    width: auto;
    flex: 1;
    height: 76rpx;
    border-radius: 38rpx;
    font-size: 28rpx;
  }
}

.again-btn {
  background: #d9f7eb;
  color: #10B981;
}

.finish-btn {
  background: #10B981;
  color: #fff;
}

.error-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16rpx;
  margin: 40rpx 30rpx 0;
  padding: 36rpx;
  background: #fff2f2;
  border-radius: 20rpx;
  position: relative;
  z-index: 1;
}

.error-icon {
  width: 48rpx;
  height: 48rpx;
  color: #f56c6c;
}

.error-text {
  font-size: 26rpx;
  color: #c56;
  text-align: center;
  padding: 0 30rpx;
}

.error-retry {
  margin-top: 10rpx;
  padding: 14rpx 56rpx;
  background: #f56c6c;
  color: #fff;
  border: none;
  border-radius: 32rpx;
  font-size: 26rpx;
  cursor: pointer;
}
</style>
