<template>
  <div class="edit-profile-page">
    <div class="nav-header">
      <div class="nav-back" @click="goBack">
        <svg class="back-icon" viewBox="0 0 24 24" fill="none" stroke="#333333" stroke-width="2">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
      </div>
      <span class="nav-title">个人信息</span>
      <div class="nav-save" @click="saveProfile">
        <span class="save-text">保存</span>
      </div>
    </div>

    <div class="profile-form">
      <div class="form-item avatar-item">
        <span class="item-label">头像</span>
        <div class="avatar-container" @click="changeAvatar">
          <img class="avatar-img" :src="formData.avatar_url || '/static/images/111.jpg'" />
          <div class="avatar-edit">
            <svg class="camera-icon" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
              <circle cx="12" cy="13" r="4"/>
            </svg>
          </div>
        </div>
      </div>

      <div class="divider"></div>

      <div class="form-item">
        <span class="item-label">昵称</span>
        <input 
          class="item-input" 
          v-model="formData.nickname" 
          placeholder="未填写"
          maxlength="100"
        />
        <svg class="arrow-right" viewBox="0 0 24 24" fill="none" stroke="#CCCCCC" stroke-width="2">
          <path d="M9 18l6-6-6-6"/>
        </svg>
      </div>

      <div class="divider"></div>

      <div class="form-item" @click="showGradePicker = true">
        <span class="item-label">年级</span>
        <span class="item-value">{{ formatGrade(formData.grade) || '请选择年级' }}</span>
        <svg class="arrow-right" viewBox="0 0 24 24" fill="none" stroke="#CCCCCC" stroke-width="2">
          <path d="M9 18l6-6-6-6"/>
        </svg>
      </div>

      <div class="divider"></div>

      <div class="form-item">
        <span class="item-label">手机号</span>
        <input 
          class="item-input" 
          v-model="formData.mobile" 
          type="number"
          placeholder="请输入手机号"
          maxlength="11"
        />
      </div>

      <div class="divider"></div>

      <div class="form-item">
        <span class="item-label">年龄</span>
        <input 
          class="item-input" 
          v-model="formData.age" 
          type="number"
          placeholder="请输入年龄"
          maxlength="3"
        />
      </div>

      <div class="divider"></div>

      <div class="form-item gender-item">
        <span class="item-label">性别</span>
        <div class="gender-options">
          <div 
            class="gender-option" 
            :class="{ active: formData.sex === 'male' }"
            @click="formData.sex = 'male'"
          >
            <span>男</span>
          </div>
          <div 
            class="gender-option" 
            :class="{ active: formData.sex === 'female' }"
            @click="formData.sex = 'female'"
          >
            <span>女</span>
          </div>
        </div>
      </div>
    </div>

    <div class="grade-picker-overlay" v-if="showGradePicker" @click="closeGradePicker">
      <div class="picker-container" @click.stop>
        <div class="picker-header">
          <span class="picker-cancel" @click="closeGradePicker">取消</span>
          <span class="picker-title">选择年级</span>
          <span class="picker-confirm" @click="confirmGrade">确定</span>
        </div>
        <div class="picker-view">
          <div 
            v-for="(item, index) in gradeOptions" 
            :key="index"
            :class="['picker-item', { active: gradeIndex === index }]"
            @click="gradeIndex = index"
          >
            {{ item.label }}
          </div>
        </div>
      </div>
    </div>

    <div class="toast" v-if="showToast">
      <span class="toast-text">{{ toastText }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, watch, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import uni from '@/utils/uni.js'
import request from '@/common/request.js'

const router = useRouter()

const formData = reactive({
  nickname: '',
  grade: null,
  mobile: '',
  sex: '',
  age: null,
  avatar_url: ''
})

const gradeOptions = [
  { value: 3, label: '三年级' },
  { value: 4, label: '四年级' },
  { value: 5, label: '五年级' },
  { value: 6, label: '六年级' }
]

const gradeIndex = ref(0)
const showGradePicker = ref(false)
const showToast = ref(false)
const toastText = ref('')

const showToastMessage = (text) => {
  toastText.value = text
  showToast.value = true
  setTimeout(() => {
    showToast.value = false
  }, 1500)
}

const formatGrade = (gradeValue) => {
  const grade = gradeOptions.find(item => item.value === gradeValue)
  return grade ? grade.label : ''
}

const closeGradePicker = () => {
  showGradePicker.value = false
}

const confirmGrade = () => {
  formData.grade = gradeOptions[gradeIndex.value].value
  showGradePicker.value = false
}

const goBack = () => {
  router.back()
}

const changeAvatar = () => {
  showToastMessage('头像上传功能开发中')
}

const getProfileApi = () => {
  return new Promise((resolve, reject) => {
    const accessToken = uni.getStorageSync('accessToken')
    
    request({
      url: '/api/users/profile/',
      method: 'GET'
    })
    .then(res => {
      if (res.statusCode === 200 && res.data.status === 'success') {
        resolve(res.data.data)
      } else {
        reject(res.data.message || '获取个人信息失败')
      }
    })
    .catch(err => {
      reject('网络请求失败')
    })
  })
}

const updateProfileApi = (profileData) => {
  return new Promise((resolve, reject) => {
    const accessToken = uni.getStorageSync('accessToken')
    
    request({
      url: '/api/users/profile/',
      method: 'POST',
      data: profileData,
      header: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (res.statusCode === 200) {
        if (res.data.status === 'success') {
          resolve(true)
        } else {
          if (res.data.errors) {
            reject(res.data.errors)
          } else {
            reject(res.data.message || '更新失败')
          }
        }
      } else if (res.statusCode === 401) {
        reject('请先登录或Token无效')
      } else {
        reject(`服务器错误: ${res.statusCode}`)
      }
    })
    .catch(err => {
      reject('网络请求失败')
    })
  })
}

const loadUserProfile = async () => {
  try {
    const profileData = await getProfileApi()
    Object.assign(formData, {
      nickname: profileData.nickname || '',
      grade: profileData.grade ? parseInt(profileData.grade) : null,
      mobile: profileData.mobile || '',
      sex: profileData.sex || '',
      age: profileData.age ? parseInt(profileData.age) : null,
      avatar_url: profileData.avatar_url || ''
    })
    
    if (formData.grade) {
      const gradeIndexFound = gradeOptions.findIndex(item => item.value === formData.grade)
      if (gradeIndexFound !== -1) {
        gradeIndex.value = gradeIndexFound
      }
    }
  } catch (error) {
    console.error('加载用户资料失败:', error)
    showToastMessage('加载失败')
  }
}

const saveProfile = async () => {
  if (formData.nickname && formData.nickname.length > 100) {
    showToastMessage('昵称长度不能超过100个字符')
    return
  }

  if (formData.mobile && !/^1[3-9]\d{9}$/.test(formData.mobile)) {
    showToastMessage('请输入正确的手机号')
    return
  }

  if (formData.age !== null && formData.age !== '') {
    const ageNum = parseInt(formData.age)
    if (isNaN(ageNum) || ageNum < 0 || ageNum > 120) {
      showToastMessage('请输入有效的年龄(0-120)')
      return
    }
  }

  if (formData.sex && !['male', 'female'].includes(formData.sex)) {
    showToastMessage('请选择有效的性别')
    return
  }

  if (formData.grade && ![3, 4, 5, 6].includes(formData.grade)) {
    showToastMessage('请选择有效的年级')
    return
  }

  try {
    const submitData = {
      nickname: formData.nickname || '',
      mobile: formData.mobile || '',
      sex: formData.sex || '',
      grade: formData.grade ? parseInt(formData.grade) : null,
      age: formData.age !== null && formData.age !== '' ? parseInt(formData.age) : null
    }

    Object.keys(submitData).forEach(key => {
      if (submitData[key] === null || submitData[key] === '') {
        delete submitData[key]
      }
    })

    await updateProfileApi(submitData)

    showToastMessage('保存成功')
    
    setTimeout(() => {
      router.back()
    }, 1500)
  } catch (error) {
    console.error('保存个人信息失败:', error)
    if (typeof error === 'object') {
      const firstError = Object.values(error)[0]?.[0]
      if (firstError) {
        showToastMessage(firstError)
      }
    } else {
      showToastMessage(error || '保存失败')
    }
  }
}

onMounted(() => {
  loadUserProfile()
})
</script>

<style scoped>
.edit-profile-page {
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
  cursor: pointer;
}

.back-icon {
  width: 20px;
  height: 20px;
}

.nav-title {
  font-size: 18px;
  font-weight: bold;
  color: #333F48;
}

.nav-save {
  padding: 4px 8px;
}

.save-text {
  font-size: 15px;
  color: #10B981;
  font-weight: 500;
}

.profile-form {
  background: #ffffff;
  margin: 10px;
  border-radius: 8px;
  overflow: hidden;
}

.form-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 12px;
  min-height: 50px;
  box-sizing: border-box;
}

.avatar-item {
  padding: 20px 12px;
}

.item-label {
  font-size: 15px;
  color: #333333;
  font-weight: 500;
  min-width: 60px;
}

.item-input {
  flex: 1;
  text-align: right;
  font-size: 15px;
  color: #333333;
  padding: 0 10px;
  border: none;
  outline: none;
}

.item-value {
  flex: 1;
  text-align: right;
  font-size: 15px;
  color: #333333;
  padding-right: 10px;
}

.item-value:empty::before {
  content: '请选择';
  color: #999999;
}

.avatar-container {
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar-edit {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 20px;
  height: 20px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.camera-icon {
  width: 8px;
  height: 8px;
}

.divider {
  height: 1px;
  background-color: #f0f0f0;
  margin: 0 12px;
}

.gender-options {
  display: flex;
  gap: 20px;
}

.gender-option {
  padding: 8px 20px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-size: 14px;
  color: #666666;
  cursor: pointer;
}

.gender-option.active {
  border-color: #10B981;
  background: rgba(16, 185, 129, 0.1);
  color: #10B981;
}

.arrow-right {
  width: 9px;
  height: 9px;
}

.grade-picker-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: flex-end;
  z-index: 1000;
}

.picker-container {
  background: #ffffff;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  width: 100%;
}

.picker-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 16px;
  border-bottom: 1px solid #f0f0f0;
}

.picker-cancel,
.picker-confirm {
  font-size: 15px;
  color: #10B981;
  cursor: pointer;
}

.picker-title {
  font-size: 16px;
  font-weight: bold;
  color: #333333;
}

.picker-view {
  max-height: 200px;
  overflow-y: auto;
  padding: 10px 0;
}

.picker-item {
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 15px;
  color: #333333;
  cursor: pointer;
}

.picker-item.active {
  color: #10B981;
  font-weight: bold;
}

.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.7);
  border-radius: 4px;
  padding: 10px 20px;
  z-index: 3000;
}

.toast-text {
  font-size: 14px;
  color: #ffffff;
}
</style>
