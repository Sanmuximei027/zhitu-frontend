<template>
  <div class="container">
    <div class="swiper-wrapper">
      <div 
        class="slide" 
        v-for="(slide, index) in slides" 
        :key="index"
        :class="{ active: current === index }"
      >
        <img 
          :class="`slide-image${index + 1}`" 
          :src="slide.image" 
          :alt="slide.alt"
        >
        
        <div class="text-container">
          <span class="title">{{ slide.title }}</span>
          <span class="subtitle">{{ slide.subtitle }}</span>
        </div>
        
        <button 
          v-if="index === slides.length - 1"
          class="experience-btn" 
          @click="onExperience"
        >
          立即体验
        </button>
      </div>
    </div>

    <div class="indicator-dots">
      <span 
        v-for="(_, index) in slides" 
        :key="index"
        :class="['dot', { active: current === index }]"
      ></span>
    </div>

    <div 
      class="skip-btn" 
      @click="onSkip"
      v-if="current < slides.length - 1"
    >
      跳过
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const current = ref(0)
let autoPlayTimer = null

const slides = [
  {
    image: '/static/images/guide1.png',
    title: '智能批改',
    subtitle: '智能识别，全面批改',
    alt: '智能批改功能展示'
  },
  {
    image: '/static/images/guide2.png',
    title: '精准推送',
    subtitle: '每日素材，有效推新',
    alt: '精准推送功能展示'
  },
  {
    image: '/static/images/guide3.png',
    title: '习题专攻',
    subtitle: '精准捕捉，专攻弱势',
    alt: '习题专攻功能展示'
  },
  {
    image: '/static/images/guide4.png',
    title: '写作画像',
    subtitle: '伴读教育，熟知风格',
    alt: '写作画像功能展示'
  }
]

const nextSlide = () => {
  current.value = (current.value + 1) % slides.length
}

onMounted(() => {
  autoPlayTimer = setInterval(nextSlide, 3000)
})

onUnmounted(() => {
  if (autoPlayTimer) {
    clearInterval(autoPlayTimer)
  }
})

const onSkip = () => {
  router.push('/pages/home/index')
}

const onExperience = () => {
  router.push('/pages/home/index')
}
</script>

<style scoped>
.container {
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
  position: relative;
  overflow: hidden;
}

.swiper-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
}

.slide {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex-shrink: 0;
  transition: transform 0.5s ease;
}

.slide-image1 {
  width: 195px;
  height: auto;
  margin-top: 235px;
}

.slide-image2 {
  width: 185px;
  height: auto;
  margin-top: 235px;
}

.slide-image3 {
  width: 190px;
  height: auto;
  margin-top: 165px;
}

.slide-image4 {
  width: 190px;
  height: auto;
  margin-top: 240px;
}

.text-container {
  position: absolute;
  top: 66.67%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  font-size: 23px;
  color: #333333;
  font-weight: bold;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 13px;
  color: #666666;
}

.skip-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 14px;
  color: #999999;
  z-index: 10;
  cursor: pointer;
}

.experience-btn {
  position: absolute;
  bottom: 50px;
  width: 250px;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
  color: #ffffff;
  background-color: #10B981;
  border-radius: 20px;
  text-align: center;
  border: none;
  cursor: pointer;
}

.indicator-dots {
  position: absolute;
  bottom: 120px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #CCCCCC;
  transition: background-color 0.3s ease;
}

.dot.active {
  background-color: #10B981;
}
</style>
