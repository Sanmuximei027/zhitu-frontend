<template>
  <div 
    class="ai-float-button"
    :style="{
      left: `${aiButtonPosition.x}px`,
      top: `${aiButtonPosition.y}px`
    }"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
    @mousedown="handleMouseDown"
    @click="handleAIClick"
  >
    <MessageCircle class="chat-icon" />
  </div>

  <div v-if="showAIFloatWindow" :class="['ai-window', { 'ai-window-fullscreen': isFullscreen }]">
    <div class="ai-window-header">
      <span class="ai-window-title">AI作文辅导助手</span>
      <div class="ai-window-actions">
        <div class="window-action-btn" @click="toggleFullscreen">
          <span class="action-text">{{ isFullscreen ? '还原' : '全屏' }}</span>
        </div>
        <div class="window-action-btn" @click="closeAIFloatWindow">
          <span class="action-text">关闭</span>
        </div>
      </div>
    </div>
    <div class="ai-chat-container" ref="chatContainer">
      <div 
        v-for="message in aiMessages" 
        :key="message.id"
        :class="['message-item', message.type]"
      >
        <div class="message-content" v-html="processMessageContent(message.content)">
        </div>
      </div>
      <div v-if="isLoading" class="loading-indicator">
        <div class="loading-spinner"></div>
        <span class="loading-text">AI正在思考...</span>
      </div>
    </div>
    <div class="ai-input-container">
      <input 
        v-model="aiInputText"
        type="text"
        placeholder="请输入您的问题..."
        class="ai-input"
        @keyup.enter="sendAIMessage"
        :disabled="isLoading"
      />
      <button class="send-btn" @click="sendAIMessage" :disabled="isLoading">发送</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, inject, nextTick } from 'vue'
import { MessageCircle } from 'lucide-vue-next'
import { requestStream } from '@/common/request.js'
import uni from '@/utils/uni.js'

const aiButtonPosition = inject('aiButtonPosition', { x: 300, y: 400 })
const saveAiButtonPosition = inject('saveAiButtonPosition', (pos) => {})
const hasShownWelcome = inject('hasShownWelcome', ref(false))
const setHasShownWelcome = inject('setHasShownWelcome', (value) => {})
const aiMessages = inject('aiMessages', ref([]))
const addAiMessage = inject('addAiMessage', (message) => {})
const clearAiMessages = inject('clearAiMessages', () => {})
const showAIFloatWindow = inject('showAIFloatWindow', ref(false))
const setShowAIFloatWindow = inject('setShowAIFloatWindow', (value) => {})

const isFullscreen = ref(false)
const aiInputText = ref('')
const isDragging = ref(false)
const isLoading = ref(false)
const chatContainer = ref(null)

onMounted(() => {
  console.log('AiFloatButton mounted')
  console.log('aiButtonPosition:', aiButtonPosition)
  console.log('showAIFloatWindow:', showAIFloatWindow.value)
  
  if (aiButtonPosition.x > window.innerWidth - 70) {
    aiButtonPosition.x = window.innerWidth - 70
  }
  if (aiButtonPosition.y > window.innerHeight - 70) {
    aiButtonPosition.y = window.innerHeight - 70
  }
})

let startX = 0
let startY = 0
let startBtnX = 0
let startBtnY = 0

const processMessageContent = (content) => {
  if (!content) return ''
  let processedContent = String(content)
  
  if (processedContent.trim().startsWith('{ response：') && processedContent.trim().endsWith('}')) {
    processedContent = processedContent.trim().replace(/^\{\s*response：["']?/, '').replace(/["']?\s*\}$/, '')
  }
  
  processedContent = processedContent.replace(/\/n/g, '<br>')
  processedContent = processedContent.replace(/【[^】]*】/g, '')
  processedContent = processedContent.replace(/([^<]|^)([^>\n])\s*([0-9]+\.)/, '$1$2<br>$3')
  processedContent = processedContent.replace(/([^<>])\n([^<>])/g, '$1<br>$2')
  
  return processedContent
}

const addWelcomeMessage = () => {
  if (!hasShownWelcome.value) {
    addAiMessage({
      id: Date.now(),
      type: 'ai',
      content: '您好，我是AI作文辅导助手，请问有什么可以帮助您的吗？'
    })
    setHasShownWelcome(true)
  }
}

const handleTouchStart = (e) => {
  isDragging.value = true
  startX = e.touches[0].clientX
  startY = e.touches[0].clientY
  startBtnX = aiButtonPosition.x
  startBtnY = aiButtonPosition.y
}

const handleTouchMove = (e) => {
  if (!isDragging.value) return
  
  const deltaX = e.touches[0].clientX - startX
  const deltaY = e.touches[0].clientY - startY
  
  aiButtonPosition.x = startBtnX + deltaX
  aiButtonPosition.y = startBtnY + deltaY
  
  const screenWidth = window.innerWidth
  const screenHeight = window.innerHeight
  const buttonSize = 60
  
  aiButtonPosition.x = Math.max(0, 
    Math.min(screenWidth - buttonSize, aiButtonPosition.x))
  aiButtonPosition.y = Math.max(0, 
    Math.min(screenHeight - buttonSize, aiButtonPosition.y))
}

const handleTouchEnd = () => {
  isDragging.value = false
  saveAiButtonPosition({ x: aiButtonPosition.x, y: aiButtonPosition.y })
}

const handleMouseDown = (e) => {
  isDragging.value = true
  startX = e.clientX
  startY = e.clientY
  startBtnX = aiButtonPosition.x
  startBtnY = aiButtonPosition.y
  
  const handleMouseMove = (event) => {
    if (!isDragging.value) return
    
    const deltaX = event.clientX - startX
    const deltaY = event.clientY - startY
    
    aiButtonPosition.x = startBtnX + deltaX
    aiButtonPosition.y = startBtnY + deltaY
    
    const screenWidth = window.innerWidth
    const screenHeight = window.innerHeight
    const buttonSize = 60
    
    aiButtonPosition.x = Math.max(0, 
      Math.min(screenWidth - buttonSize, aiButtonPosition.x))
    aiButtonPosition.y = Math.max(0, 
      Math.min(screenHeight - buttonSize, aiButtonPosition.y))
  }
  
  const handleMouseUp = () => {
    isDragging.value = false
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseup', handleMouseUp)
    saveAiButtonPosition({ x: aiButtonPosition.x, y: aiButtonPosition.y })
  }
  
  document.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mouseup', handleMouseUp)
}

const sendAIMessage = async () => {
  const userInput = aiInputText.value.trim()
  if (!userInput) return
  
  addAiMessage({
    id: Date.now(),
    type: 'user',
    content: userInput
  })
  
  aiInputText.value = ''
  isLoading.value = true

  // 先插入空AI消息占位，由打字机按0.1秒/字的节奏播放
  const aiMsgId = Date.now() + 1
  addAiMessage({
    id: aiMsgId,
    type: 'ai',
    content: ''
  })
  startTypewriter(aiMsgId)

  try {
    await requestStream({
      url: '/api/ai_use/doubao_talk',
      method: 'POST',
      data: {
        action: 'talk',
        basic_text_segment: '请基于小学作文水平，提供合适的辅导建议：',
        user_talk: userInput
      }
    }, {
      onDelta: (delta, full) => {
        // 增量进入目标缓冲，由打字机定时器逐字显示
        typeTarget = full
      },
      onDone: (full) => {
        typeTarget = full
        // 全文清理过#*符号，若与已显示部分错位则重新对齐
        if (!typeTarget.startsWith(typeShown)) {
          typeShown = typeTarget.slice(0, typeShown.length)
        }
        typeDone = true
      }
    })
    // 兜底：若未收到done事件也标记接收完成，保证播放器会结束
    typeDone = true
  } catch (error) {
    console.error('发送消息异常:', error)
    stopTypewriter()
    typeMsgId = null
    updateAiMessage(aiMsgId, error.message || 'AI回复失败，请重试')
    isLoading.value = false
  }
}

// ---------- 打字机播放器：每字间隔0.1秒 ----------
const TYPE_INTERVAL = 100
let typewriterTimer = null
let typeMsgId = null      // 正在播放的消息ID
let typeTarget = ''       // 目标全文（流式增量累计/清理后全文）
let typeShown = ''        // 已显示文本
let typeDone = false      // 目标文本是否已接收完毕

const updateAiMessage = (msgId, content) => {
  const msg = aiMessages.value.find(m => m.id === msgId)
  if (msg) {
    msg.content = content
  }
  nextTick(scrollToBottom)
}

const stopTypewriter = () => {
  if (typewriterTimer) {
    clearInterval(typewriterTimer)
    typewriterTimer = null
  }
}

// 立即完成播放（发送新消息前/异常时调用）
const finishTypewriter = () => {
  stopTypewriter()
  if (typeMsgId !== null && typeTarget) {
    updateAiMessage(typeMsgId, typeTarget)
  }
  typeMsgId = null
  typeTarget = ''
  typeShown = ''
  typeDone = false
}

const startTypewriter = (msgId) => {
  finishTypewriter()
  typeMsgId = msgId
  typeTarget = ''
  typeShown = ''
  typeDone = false
  typewriterTimer = setInterval(() => {
    if (typeShown.length < typeTarget.length) {
      // 每0.1秒追加一个字符
      typeShown = typeTarget.slice(0, typeShown.length + 1)
      updateAiMessage(typeMsgId, typeShown)
    } else if (typeDone) {
      // 播放完成
      stopTypewriter()
      typeMsgId = null
      isLoading.value = false
    }
  }, TYPE_INTERVAL)
}

const scrollToBottom = () => {
  if (chatContainer.value) {
    chatContainer.value.scrollTop = chatContainer.value.scrollHeight
  }
}

const closeAIFloatWindow = () => {
  setShowAIFloatWindow(false)
  isFullscreen.value = false
}

const toggleFullscreen = () => {
  isFullscreen.value = !isFullscreen.value
}

const handleAIClick = () => {
  setShowAIFloatWindow(true)
  addWelcomeMessage()
}
</script>

<style scoped>
.ai-float-button {
  position: fixed;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #10B981, #34D399);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  z-index: 9999999;
  touch-action: none;
  cursor: move;
  transition: transform 0.1s ease;
  pointer-events: auto;
  top: auto;
  bottom: auto;
  left: auto;
  right: auto;
  visibility: visible;
  opacity: 1;
}

.ai-float-button:active {
  transform: scale(1.1);
}

.chat-icon {
  width: 28px;
  height: 28px;
  color: #fff;
}

.ai-window {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 500px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  overflow: hidden;
}

.ai-window-fullscreen {
  top: 0;
  left: 0;
  transform: none;
  width: 100%;
  height: 100%;
  border-radius: 0;
}

.ai-window-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  border-bottom: 1px solid #f0f0f0;
}

.ai-window-actions {
  display: flex;
  gap: 16px;
}

.window-action-btn {
  padding: 6px 12px;
  border-radius: 6px;
  background: #f5f5f5;
  transition: background 0.2s;
  cursor: pointer;
}

.window-action-btn:hover {
  background: #e8e8e8;
}

.action-text {
  font-size: 13px;
  color: #666;
}

.ai-window-title {
  font-size: 18px;
  font-weight: 600;
  color: #333;
}

.ai-chat-container {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  background: #f8f8f8;
}

.message-item {
  margin-bottom: 20px;
  display: flex;
}

.message-item.user {
  justify-content: flex-end;
}

.message-item.ai {
  justify-content: flex-start;
}

.message-content {
  max-width: 70%;
  padding: 14px 18px;
  border-radius: 16px;
  font-size: 14px;
  line-height: 1.6;
  word-break: break-word;
}

.message-item.user .message-content {
  background: #10B981;
  color: #fff;
  border-bottom-right-radius: 6px;
}

.message-item.ai .message-content {
  background: #fff;
  color: #333;
  border-bottom-left-radius: 6px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.ai-input-container {
  display: flex;
  padding: 16px 20px;
  border-top: 1px solid #f0f0f0;
  background: #fff;
  gap: 12px;
}

.ai-input {
  flex: 1;
  height: 40px;
  border: 1px solid #ddd;
  border-radius: 20px;
  padding: 0 16px;
  font-size: 14px;
  box-sizing: border-box;
}

.send-btn {
  height: 40px;
  padding: 0 20px;
  background: #10B981;
  color: #fff;
  border: none;
  border-radius: 20px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.send-btn:hover {
  background: #059669;
}

.send-btn[disabled] {
  background: #ccc;
  cursor: not-allowed;
}

.loading-indicator {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 0;
}

.loading-spinner {
  width: 24px;
  height: 24px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #10B981;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-right: 10px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loading-text {
  font-size: 13px;
  color: #999;
}
</style>
