<template>
	<!-- 单根包裹：避免根级 v-if 在 Transition(out-in) 中卸载导致过渡卡死、新页面不挂载 -->
	<div class="photo-page">
	<div v-if="showCameraLayer" class="camera-layer">
		<div class="preview-wrapper">
			<div class="preview-grid" v-if="selectedImagePaths.length">
				<img 
					v-for="(path, idx) in selectedImagePaths" 
					:key="idx"
					:src="path" 
					class="preview-img"
					@click="removeImage(idx)"
				/>
			</div>
			<div class="empty-tip" v-else>
				<div class="upload-icon">
					<CloudUpload class="upload-icon-svg" />
				</div>
				<span class="empty-text">点击下方按钮选择图片（最多9张）</span>
				<span class="empty-sub">上传作文图片进行AI批改</span>
			</div>
		</div>

		<div class="control-bar">
			<div class="btn upload-btn" @click="triggerFileInput">
				<ImageIcon class="btn-icon" />
				<span class="btn-text">选择图片</span>
			</div>
			<div 
				class="btn submit-btn" 
				@click="doUploadToCorrection" 
				:class="{ disabled: !selectedImagePaths.length || uploading }"
			>
				<CheckCircle class="btn-icon" />
				<span class="btn-text">开始批改</span>
			</div>
		</div>

		<div class="close-x" @click="closeCameraLayer">
			<X class="close-icon" />
		</div>
	</div>

	<input
		type="file"
		multiple
		accept="image/*"
		class="file-input"
		id="essayFileInput"
		@change="handleFileChange"
	/>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { CloudUpload, X, Image as ImageIcon, CheckCircle } from 'lucide-vue-next'

const router = useRouter()

const showCameraLayer = ref(false)
const selectedImagePaths = ref([])
const uploading = ref(false)
const selectedFiles = ref([])

onMounted(() => {
  openCameraLayer()
})

function openCameraLayer() {
  showCameraLayer.value = true
  selectedImagePaths.value = []
}

function closeCameraLayer() {
  showCameraLayer.value = false
  selectedImagePaths.value = []
  uploading.value = false
}

function triggerFileInput() {
  const remaining = 9 - selectedImagePaths.value.length
  if (remaining <= 0) {
    uni.showToast({ title: '最多只能选择9张图片', icon: 'none' })
    return
  }
  const fileInput = document.getElementById('essayFileInput')
  if (fileInput) {
    fileInput.click()
  }
}

function handleFileChange(event) {
  const files = event.target.files
  if (!files || files.length === 0) return

  const remaining = 9 - selectedImagePaths.value.length
  const actualCount = Math.min(files.length, remaining)

  for (let i = 0; i < actualCount; i++) {
    const file = files[i]
    const reader = new FileReader()
    reader.onload = (e) => {
      selectedImagePaths.value.push(e.target.result)
      selectedFiles.value.push(file)
    }
    reader.readAsDataURL(file)
  }

  if (actualCount < files.length) {
    uni.showToast({ title: `最多只能选择9张图片，已忽略${files.length - actualCount}张`, icon: 'none' })
  }

  event.target.value = ''
}

function removeImage(idx) {
  uni.showModal({
    title: '提示',
    content: '确定要删除这张图片吗？',
    success: (res) => {
      if (res.confirm) {
        selectedImagePaths.value.splice(idx, 1)
        selectedFiles.value.splice(idx, 1)
      }
    }
  })
}

function doUploadToCorrection() {
  if (uploading.value) return
  uploading.value = true

  const accessToken = uni.getStorageSync('accessToken')
  if (!accessToken) {
    uni.showToast({ title: '请先登录', icon: 'none' })
    uploading.value = false
    router.push('/pages/login/login')
    return
  }

  if (selectedFiles.value.length === 0) {
    uni.showToast({ title: '请先选择图片', icon: 'none' })
    uploading.value = false
    return
  }

  uni.showLoading({ title: '提交中，正在批改...' })

  const formData = new FormData()
  selectedFiles.value.forEach((file, idx) => {
    const ext = file.name.split('.').pop()
    const fileName = `essay_${Date.now()}_${idx}.${ext}`
    formData.append('essay_images', file, fileName)
  })

  fetch('/api/ai_use/haoweilai_ai', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`
    },
    body: formData
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    return response.json()
  })
  .then(responseData => {
    uni.hideLoading()
    uploading.value = false
    
    handleCorrectionResponse({ data: responseData })
  })
  .catch(e => {
    uni.hideLoading()
    uploading.value = false
    const errorMsg = `提交失败：${e.message}`
    
    uni.showModal({
      title: '操作失败',
      content: errorMsg,
      confirmText: '重试',
      cancelText: '联系客服',
      success: (modalRes) => {
        if (modalRes.confirm) {
          doUploadToCorrection()
        } else {
          router.push('/pages/profile/help')
        }
      }
    })
    console.error('响应处理错误:', e)
  })
}

function handleCorrectionResponse(res) {
  try {
    const parsedData = typeof res.data === 'string' 
        ? JSON.parse(res.data) 
        : res.data;

    console.log('批改接口响应:', parsedData);

    if (parsedData.status === 'error' && parsedData.message?.includes('Token')) {
      uni.showToast({
        title: '登录已失效，请重新登录',
        icon: 'none'
      });
      uni.removeStorageSync('accessToken');
      uni.removeStorageSync('refreshToken');
      router.push('/pages/login/login');
      return;
    }

    if (parsedData.status === 'success' || parsedData.status === 200) {
      uni.showToast({
        title: '提交成功，正在展示批改结果',
        icon: 'success',
        duration: 2000
      });
      
      const resultData = parsedData.data || parsedData;
      navigateToCorrectionResult(resultData);
      closeCameraLayer();
      return;
    }

    if (parsedData.status === 'error' && parsedData.errors) {
      const errorMsg = Object.values(parsedData.errors).join('；');
      uni.showModal({
        title: '提交失败',
        content: errorMsg,
        showCancel: false,
        confirmText: '我知道了'
      });
      return;
    }

    uni.showToast({
      title: parsedData.message || '批改失败，请重试',
      icon: 'none'
    });

  } catch (error) {
    uni.showToast({
      title: '系统异常，无法解析批改结果',
      icon: 'none'
    });
    console.error('响应解析异常:', error, '原始响应:', res.data);
  }
}

const navigateToCorrectionResult = (resultData) => {
  console.log('准备跳转，resultData:', resultData);
    
  if (!resultData || !resultData.submit_id) {
    uni.showToast({
      title: '获取提交ID失败，无法查看结果',
      icon: 'none',
      duration: 3000
    });
    return;
  }

  const submitIdStr = String(resultData.submit_id);
    console.log('准备跳转，submitId:', submitIdStr);

    closeCameraLayer();

    // 整页跳转：绕开 SPA Transition(out-in) 间歇性卡死导致的空白页（结果页整页加载已验证稳定）
    // 用 location.replace 保持 router.replace 的历史记录语义（返回键不会回到提交页）
    setTimeout(() => {
      window.location.replace(`/pages/correct/correct_result?submitId=${submitIdStr}&t=${Date.now()}`);
    }, 200);
};
</script>

<style>
.camera-layer {
	position: fixed;
	inset: 0;
	background: #000;
	z-index: 999;
	display: flex;
	flex-direction: column;
}

.preview-grid {
  width: 100%;
  display: flex;
  gap: 15rpx;
  padding: 10rpx 0;
  overflow-x: auto;
  justify-content: flex-start;
  scrollbar-width: none;
  margin-top: 300rpx;
}

.preview-grid::-webkit-scrollbar {
  display: none;
}

.preview-img {
  width: 750rpx; 
  height: 850rpx; 
  flex-shrink: 0;
  object-fit: contain;
  border-radius: 16rpx;
}

.preview-wrapper {
  flex: 1;
  display: flex;
  align-items: flex-start;
  padding: 0 5rpx;
  box-sizing: border-box;
}

.empty-tip {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  padding: 0 40rpx;
  box-sizing: border-box;
}

.upload-icon {
  width: 160rpx;
  height: 160rpx;
  border-radius: 50%;
  background: rgba(16, 185, 129, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30rpx;
}

.upload-icon-svg {
  width: 80rpx;
  height: 80rpx;
  color: #10B981;
}

.empty-text {
  color: #fff;
  font-size: 32rpx;
  font-weight: 500;
  margin-bottom: 15rpx;
}

.empty-sub {
  color: rgba(255, 255, 255, 0.6);
  font-size: 26rpx;
}

.control-bar {
	height: 160rpx;
	background: rgba(0, 0, 0, 0.8);
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 60rpx;
	padding: 0 40rpx;
	box-sizing: border-box;
}

.btn {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 12rpx;
	border-radius: 50rpx;
	height: 88rpx;
	padding: 0 48rpx;
}

.btn-icon {
  width: 32rpx;
  height: 32rpx;
  color: #fff;
}

.upload-btn {
	background: rgba(255, 255, 255, 0.2);
}

.submit-btn {
	background: #10B981;
}

.submit-btn.disabled {
	background: rgba(16, 185, 129, 0.5);
	pointer-events: none;
}

.btn-text {
	color: #fff;
	font-size: 28rpx;
	font-weight: 500;
}

.close-x {
	position: absolute;
	top: 40rpx;
	right: 40rpx;
}

.close-icon {
  width: 32rpx;
  height: 32rpx;
  color: #fff;
}

.file-input {
	display: none;
}
</style>