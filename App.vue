<template>
  <div class="app-container">
    <router-view v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </router-view>
    <TabBar v-if="showTabBar" />
    <AiFloatButton />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import AiFloatButton from '@/components/AiFloatButton/AiFloatButton.vue'
import TabBar from '@/components/TabBar/TabBar.vue'

const route = useRoute()

const showTabBar = computed(() => {
  const tabBarRoutes = ['/pages/home/index', '/pages/correct/index', '/pages/profile/index']
  return tabBarRoutes.includes(route.path)
})
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  width: 100%;
  min-height: 100vh;
}

.app-container {
  width: 100%;
  min-height: 100vh;
  background-color: #f5f7fa;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
