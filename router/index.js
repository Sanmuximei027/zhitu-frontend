import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Splash',
    component: () => import('@/pages/splash/splash.vue')
  },
  {
    path: '/pages/home/index',
    name: 'Home',
    component: () => import('@/pages/home/index.vue')
  },
  {
    path: '/pages/correct/index',
    name: 'Correct',
    component: () => import('@/pages/correct/index.vue')
  },
  {
    path: '/pages/profile/index',
    name: 'Profile',
    component: () => import('@/pages/profile/index.vue')
  },
  {
    path: '/pages/login/login',
    name: 'Login',
    component: () => import('@/pages/login/login.vue')
  },
  {
    path: '/pages/register/register',
    name: 'Register',
    component: () => import('@/pages/register/register.vue')
  },
  {
    path: '/pages/home/essay',
    name: 'Essay',
    component: () => import('@/pages/home/essay.vue')
  },
  {
    path: '/pages/profile/settings',
    name: 'Settings',
    component: () => import('@/pages/profile/settings.vue')
  },
  {
    path: '/pages/correct/checkone',
    name: 'CheckOne',
    component: () => import('@/pages/correct/checkone.vue')
  },
  {
    path: '/pages/profile/edit',
    name: 'Edit',
    component: () => import('@/pages/profile/edit.vue')
  },
  {
    path: '/pages/correct/idiom_story',
    name: 'IdiomStory',
    component: () => import('@/pages/correct/idiom_story.vue')
  },
  {
    path: '/pages/guidance/guidance',
    name: 'Guidance',
    component: () => import('@/pages/guidance/guidance.vue')
  },
  {
    path: '/pages/correct/correct_result',
    name: 'CorrectResult',
    component: () => import('@/pages/correct/correct_result.vue')
  },
  {
    path: '/pages/correct/special',
    name: 'Special',
    component: () => import('@/pages/correct/special.vue')
  },
  {
    path: '/pages/profile/portrait',
    name: 'Portrait',
    component: () => import('@/pages/profile/portrait.vue')
  },
  {
    path: '/pages/profile/my_essay',
    name: 'MyEssay',
    component: () => import('@/pages/profile/my_essay.vue')
  },
  {
    path: '/pages/profile/favourites',
    name: 'Favourites',
    component: () => import('@/pages/profile/favourites.vue')
  },
  {
    path: '/pages/profile/help',
    name: 'Help',
    component: () => import('@/pages/profile/help.vue')
  },
  {
    path: '/pages/correct/photo',
    name: 'Photo',
    component: () => import('@/pages/correct/photo.vue')
  },
  {
    path: '/pages/profile/variation',
    name: 'Variation',
    component: () => import('@/pages/profile/variation.vue')
  },
  {
    path: '/pages/sign/index',
    name: 'SignIndex',
    component: () => import('@/pages/sign/index.vue')
  },
  {
    path: '/pages/sign/detail',
    name: 'SignDetail',
    component: () => import('@/pages/sign/detail.vue')
  },
  {
    path: '/pages/sign/verify',
    name: 'SignVerify',
    component: () => import('@/pages/sign/verify.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
