import { createApp, reactive, ref, provide } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import uni from './utils/uni.js'
import { checkLoginStatus, refreshAccessToken } from './utils/tokenManager.js'
import './styles/global.css'

window.uni = uni

const app = createApp(App)

app.use(router)

window.__vueRouter__ = router

const savedPos = uni.getStorageSync('aiButtonPosition')
const aiButtonPosition = reactive(savedPos || { x: 300, y: 200 })
const hasShownWelcome = ref(false)
const aiMessages = ref([])
const showAIFloatWindow = ref(false)
const showPasswordModal = ref(false)

const saveAiButtonPosition = (pos) => {
  aiButtonPosition.x = pos.x
  aiButtonPosition.y = pos.y
  uni.setStorageSync('aiButtonPosition', { x: pos.x, y: pos.y })
}

const setHasShownWelcome = (value) => {
  hasShownWelcome.value = value
}

const addAiMessage = (message) => {
  aiMessages.value.push(message)
}

const clearAiMessages = () => {
  aiMessages.value = []
}

const setShowAIFloatWindow = (value) => {
  showAIFloatWindow.value = value
}

const setShowPasswordModal = (value) => {
  showPasswordModal.value = value
}

app.provide('router', router)
app.provide('aiButtonPosition', aiButtonPosition)
app.provide('saveAiButtonPosition', saveAiButtonPosition)
app.provide('hasShownWelcome', hasShownWelcome)
app.provide('setHasShownWelcome', setHasShownWelcome)
app.provide('aiMessages', aiMessages)
app.provide('addAiMessage', addAiMessage)
app.provide('clearAiMessages', clearAiMessages)
app.provide('showAIFloatWindow', showAIFloatWindow)
app.provide('setShowAIFloatWindow', setShowAIFloatWindow)
app.provide('showPasswordModal', showPasswordModal)
app.provide('setShowPasswordModal', setShowPasswordModal)

router.beforeEach((to, from, next) => {
  next()
})

app.mount('#app')

const status = checkLoginStatus()
if (status === 'needs_refresh') {
  refreshAccessToken()
    .then(() => {
      console.log('静默刷新token成功')
    })
    .catch((error) => {
      console.log('静默刷新token失败:', error ? error.message : '未知错误')
    })
}
