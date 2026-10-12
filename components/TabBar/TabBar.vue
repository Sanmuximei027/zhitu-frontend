<template>
  <div class="tab-bar">
    <div 
      v-for="item in tabList" 
      :key="item.path"
      :class="['tab-item', { active: currentPath === item.path }]"
      @click="navigateTo(item.path)"
    >
      <img :src="currentPath === item.path ? item.selectedIcon : item.icon" class="tab-icon" />
      <span class="tab-text">{{ item.text }}</span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const currentPath = computed(() => route.path)

const tabList = [
  {
    path: '/pages/home/index',
    icon: '/static/images/index-out.png',
    selectedIcon: '/static/images/index-in.png',
    text: '首页'
  },
  {
    path: '/pages/correct/index',
    icon: '/static/images/correct-out.png',
    selectedIcon: '/static/images/correct-in.png',
    text: '批改'
  },
  {
    path: '/pages/profile/index',
    icon: '/static/images/user-out.png',
    selectedIcon: '/static/images/user.png',
    text: '我的'
  }
]

const navigateTo = (path) => {
  if (currentPath.value !== path) {
    router.push(path)
  }
}
</script>

<style scoped>
.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100rpx;
  background-color: #ffffff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #e8e8e8;
  z-index: 999;
}

.tab-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 100%;
  transition: all 0.3s ease;
}

.tab-icon {
  width: 48rpx;
  height: 48rpx;
  margin-bottom: 8rpx;
}

.tab-text {
  font-size: 22rpx;
  color: #999999;
}

.tab-item.active .tab-text {
  color: #10B981;
}
</style>
