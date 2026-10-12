<template>
	<div class="container">
	  <div class="boxes-container">
	    <div class="box" @click="navigateToSpecialTraining">
			  <div class="circle blue-circle">
				  <List class="circle-icon" />
			  </div>
			  <div class="text-container">
			    <span class="main-text">专项训练</span>
			    <span class="sub-text">词句·句式·段落</span>
			  </div>
		  </div>
		  
	    <div class="box">
			  <div class="circle purple-circle">
				  <Calendar class="circle-icon" />
			  </div>
			  <div class="text-container">
			    <span class="main-text">作文练习</span>
			    <span class="sub-text">热点话题·联考真题</span>
			  </div>
		  </div>
	  </div>
	  
	  <div class="section-header">
	      <span class="title-text">继续练习</span>
	  </div>
	  <div class="long-boxes-container">
	    <div class="long-box bottom-layout">
	      <div class="tag-box">
	        <span class="tag-text">错字训练</span>
	      </div>
	      <div class="content-info">
	        <span class="content-title">相似字辨析</span>
	        <span class="content-desc">已完成5/10题·剩余约3分钟</span>
	      </div>
	      <div class="continue-btn">
	      	<div class="triangle"></div>
	      	<span class="continue-text">继续</span>
	      </div>
	    </div>
	  
	    <div class="long-box bottom-layout">
	      <div class="tag-box">
	        <span class="tag-text">句子结构</span>
	      </div>
	      <div class="content-info">
	        <span class="content-title italic-text">病句修改训练</span>
	        <span class="content-desc">已完成2/8题，剩余约5分钟</span>
	      </div>
	      <div class="continue-btn">
	      	<div class="triangle"></div>
	      	<span class="continue-text">继续</span>
	      </div>
	    </div>
	  </div>

	  <div class="recommend-header">
	    <span class="title-text">为你推荐</span>
	  </div> 
	  <div class="horizontal-boxes-container">
	    <div class="flat-box">
	      <div class="flat-tag-box">
	        <span class="flat-tag-text">错字训练</span>
	      </div>
	      <div class="flat-content">
	        <span class="flat-title">形近字辨析</span>
	        <span class="flat-desc">12道题·6分钟</span>
	      </div>
	    </div>
	    <div class="flat-box">
	      <div class="flat-tag-box">
	        <span class="flat-tag-text">句子结构</span>
	      </div>
	      <div class="flat-content">
	        <span class="flat-title">句子仿写</span>
	        <span class="flat-desc">6道题·10分钟</span>
	      </div>
	    </div>
	  </div>
	  
	  <div class="section-header">
	    <span class="title-text">热门作文题</span>
	  </div>
	  <div class="essay-boxes-container">
	    <div class="essay-box">
			<div class="word-count">300字左右</div>
	      <div class="essay-content">
	        <span class="essay-title">我最喜欢的季节</span>
	        <span class="essay-desc">描述你最喜欢的季节，说说你喜欢它的原因，以及在这个季节里你喜欢做什么...</span>
            <div class="essay-stats">
                    <div class="stat-item">
                      <User class="stat-icon" />
                      <span class="stat-text">328人写过</span>
                    </div>
                    <div class="stat-item">
                      <Star class="stat-icon" />
                      <span class="stat-text">4.7分</span>
                    </div>
            </div>			
	      </div>
	    </div>
	    <div class="essay-box">
			<div class="word-count">400字左右</div>
	      <div class="essay-content">
	        <span class="essay-title">一见难忘的事</span>
	        <span class="essay-desc">生活中有很多事情让我们难忘，请写一件你印象最深刻的事，说说发生了什么...</span>
	        <div class="essay-stats">
	                <div class="stat-item">
	                  <User class="stat-icon" />
	                  <span class="stat-text">276人写过</span>
	                </div>
	                <div class="stat-item">
	                  <Star class="stat-icon" />
	                  <span class="stat-text">4.5分</span>
	                </div>
	              </div>
		  </div>
	    </div>
	  </div>
	  
	  <div class="section-header" style="margin-top: -15rpx;">
	    <span class="title-text">最近联考真题</span>
	  </div>
		<div class="big-exam-box">
	  <div class="grade-tag grade-5">五年级</div>
	  
	  <div class="exam-top">
	    <span class="content-title">我的家乡</span>
	    <span class="content-desc">每个人都自己的家乡，请你写一篇介绍家乡的作文，可以介绍家乡的风景、特产或风俗习惯...</span>
	  </div>
	  
	  <div class="divider-horizontal"></div>
	  
	  <div class="grade-tag grade-6">六年级</div>
	  
	  <div class="exam-bottom">
	    <span class="content-title">记一次有趣的实验</span>
	    <span class="content-desc">在科学课上或生活中，你一定做过一些有趣的实验，请选择一次印象最深的写下来...</span>
	  </div>
	</div>
	  
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { List, Calendar, User, Star } from 'lucide-vue-next'

const router = useRouter()

const navigateToSpecialTraining = () => {
  try {
    router.push('/pages/correct/special')
    console.log('跳转到专项训练页面成功')
  } catch (err) {
    console.error('跳转失败:', err)
    uni.showToast({
      title: '跳转失败',
      icon: 'none'
    })
  }
}
</script>

<style>
	.container {
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;
  background-color: #ffffff;
  padding: 20rpx;
  box-sizing: border-box;
}
	
	.boxes-container {
		  display: flex;
		  justify-content: space-between;
		  align-items: flex-start;
		  gap: 40rpx;
		  width: 100%;
		  padding-top: 40rpx;
		}
		
		.box {
		  flex: 1;
		  min-width: 200rpx;
		  height: 260rpx;
	  border: 2rpx solid #e8e8e8;
	  border-radius: 12rpx;
	  background-color: #ffffff;
	  box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.08), 
	              0 0 0 1rpx rgba(0, 0, 0, 0.02) inset;
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  justify-content: flex-start;
	  padding-top: 30rpx;
	  transition: all 0.2s ease;
	    cursor: pointer;
	}
	.box:active {
	  transform: scale(0.98);
	  opacity: 0.9;
	  box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.12);
	}
	
	.circle {
	  width: 100rpx;
	  height: 100rpx;
	  border-radius: 50%;
	  opacity: 0.5;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	}
	
	.circle-icon {
	  width: 38rpx;
	  height: 38rpx;
	}
	
	.blue-circle {
  background-color: rgba(147, 245, 205, 0.5); 
}
	.blue-circle .circle-icon {
	  color: #10B981;
	}
	
	.purple-circle {
	  background-color: rgba(217, 184, 255, 0.5); 
	}
	.purple-circle .circle-icon {
	  color: #8A2BE2;
	}
	
	.text-container {
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  margin-top: 15rpx;
	}
	
.main-text {
  font-size: 28rpx;
  font-weight: 700;
  color: #666666;
  text-align: center;
}

.sub-text {
  font-size: 21rpx;
  font-weight: normal;
  color: #999999;
  text-align: center;
  margin-top: 5rpx;
}
.section-header {
  width: 100%;
  padding: 45rpx 30rpx 20rpx 50rpx;
  box-sizing: border-box;
  text-align: left;
}

.title-text {
  font-size: 38rpx;
  font-weight: bold;
  color: #333333;
  margin-left: 0rpx;
}
.long-boxes-container {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 35rpx;
  width: 100%;
  padding: 20rpx;
  box-sizing: border-box;
}

.long-box {
  width: 100%;
  min-height: 170rpx;
  border: 2rpx solid #e8e8e8;
  border-radius: 12rpx;
  background-color: #ffffff;
  box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.08), 
              0 0 0 1rpx rgba(0, 0, 0, 0.02) inset;
  position: relative;
  padding: 24rpx;
  box-sizing: border-box;
  display: flex;
  gap: 24rpx;
}

.long-box.bottom-layout {
  display: flex;
  flex-direction: row;
  align-items: center;
}
	.continue-btn {
	  position: absolute;
	  top: 25rpx;
	  right: 25rpx;
	  background-color: rgba(217, 184, 255, 0.3);
	  padding: 6rpx 28rpx 6rpx 25rpx;
	  border-radius: 20rpx;
	  display: flex;
	  align-items: center;
	  gap: 6rpx;
	  z-index: 10;
	}
	
	.continue-text {
	  font-size: 22rpx;
	  color: rgba(138, 43, 226, 0.7);
	  font-weight: 500;
	}
	
.triangle {
  width: 0;
  height: 0;
  border-top: 6rpx solid transparent;
  border-bottom: 6rpx solid transparent;
  border-left: 10rpx solid rgba(138, 43, 226, 0.7);
}

.tag-box {
  background-color: rgba(160, 210, 255, 0.3); 
  padding: 14rpx 22rpx;
  border-radius: 5rpx;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.tag-text {
  font-size: 22rpx;
  font-weight: 400;
  color: rgba(24, 144, 255, 0.7);
  line-height: 1;
}

.content-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 80rpx;
}

.content-title {
  font-size: 27rpx;
  font-weight: 400;
  color: #444444;
}

.content-desc {
  font-size: 20rpx;
  font-weight: normal;
  color: #999999;
  line-height: 1.2;
}
.recommend-header {
  width: 100%;
  padding: 20rpx 30rpx 10rpx 50rpx;
  box-sizing: border-box;
  text-align: left;
  margin-top: 0;
}
.horizontal-boxes-container {
  display: flex;
  justify-content: stretch;
  gap: 30rpx;
  width: 100%;
  padding: 0 20rpx;
  box-sizing: border-box;
  margin-top: 20rpx;
}

.flat-box {
  flex: 1;
  min-height: 200rpx;
  border: 2rpx solid #e8e8e8;
  border-radius: 12rpx;
  background-color: #ffffff;
  box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.08), 
              0 0 0 1rpx rgba(0, 0, 0, 0.02) inset;
  position: relative;
  padding: 25rpx;
  box-sizing: border-box;
}

.flat-tag-box {
  background-color: rgba(160, 210, 255, 0.3); 
  padding:0 15rpx;
  border-radius: 3rpx;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rpx;
  margin-top: 2rpx;
  height: 45rpx;
  line-height: 28rpx;
}

.flat-tag-text {
  font-size: 22rpx;
  font-weight: 400;
  color: rgba(24, 144, 255, 0.7);
}
.flat-content {
  display: flex;
  flex-direction: column;
  gap: 8rpx;
  margin-top: 12rpx;
}

.flat-title {
  font-size: 26rpx;
  font-weight: 450;
  color: #444444;
}

.flat-desc {
  font-size: 22rpx;
  color: #999999;
  line-height: 1.3;
}
.essay-boxes-container {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 25rpx;
  width: 100%;
  padding: 18rpx;
  box-sizing: border-box;
  margin-top: 4rpx;
}

.essay-box {
  width: 100%;
  min-height: 170rpx;
  border: 2rpx solid #e8e8e8;
  border-radius: 12rpx;
  background-color: #ffffff;
  box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.08), 
              0 0 0 1rpx rgba(0, 0, 0, 0.02) inset;
  padding: 25rpx;
  box-sizing: border-box;
  position: relative;
}

.word-count {
  position: absolute;
  top: 25rpx;
  right: 35rpx;
  font-size: 20rpx;
  color: rgba(153, 153, 153, 0.8);
  font-weight: normal;
}
.essay-content {
  display: flex;
  flex-direction: column;
  gap: 5rpx;
}

.essay-title {
  font-size: 27rpx;
  font-weight: 400;
  color: #444444;
}

.essay-desc {
  font-size: 22rpx;
  font-weight: normal;
  color: #999999;
  line-height: 1.2;
}
.essay-stats {
  display: flex;
  gap: 25rpx;
  margin-top: -1rpx;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 4rpx;
}

.stat-icon {
  width: 14rpx;
  height: 14rpx;
  color: rgba(153, 153, 153, 0.8);
}

.stat-text {
  font-size: 18rpx;
  color: rgba(153, 153, 153, 0.8);
}
.big-exam-box {
  width: 100%;
  min-height: 320rpx;
  border: 2rpx solid #e8e8e8;
  border-radius: 16rpx;
  background-color: #ffffff;
  box-shadow: 0 4rpx 16rpx rgba(0, 0, 0, 0.08);
  margin: 20rpx 0;
  padding: 0 20rpx;
  display: flex;
  flex-direction: column;
  position: relative;
  box-sizing: border-box;
}

.exam-top,
.exam-bottom {
  flex: 1;
  display: flex;
  flex-direction: column;
  
  align-items: flex-start;
  padding: 25rpx 20rpx;
}

.divider-horizontal {
  position: relative;
  width: calc(100% - 40rpx);
  height: 2rpx;
  background-color: #e8e8e8;
  align-self: center;
}
.content-title {
  font-size: 26rpx;
  font-weight: 400;
  color: #444444;
  margin-bottom: 8rpx;
}

.content-desc {
  font-size: 22rpx;
  font-weight: normal;
  color: #999999;
  line-height: 1.2;
}
.grade-tag {
  position: absolute;
  background-color: rgba(217, 184, 255, 0.3);
  padding: 6rpx 16rpx;
  border-radius: 4rpx;
  font-size: 20rpx;
  color: rgba(138, 43, 226, 0.7);
  font-weight: 500;
}

.grade-5 {
  top: 20rpx;
  right: 25rpx;
}

.grade-6 {
  top: 180rpx;
  right: 25rpx;
}
</style>