﻿﻿﻿﻿﻿﻿<template>
  <div class="variation-page">
    <div class="page-header">
      <div class="back-button" @click="navigateBack">
        <ArrowLeft class="back-icon" />
      </div>
      <span class="page-title">成长轨迹</span>
      <div class="header-right"></div>
    </div>

    <div class="user-card">
      <div class="user-avatar">
        <img class="avatar-img" src="/static/images/111.jpg" />
      </div>
      <div class="user-info">
        <span class="user-name">金哲</span>
        <span class="user-grade">三年级</span>
      </div>
      <div class="study-days">
        <span class="days-value">56</span>
        <span class="days-label">学习天数</span>
      </div>
    </div>

    <div class="content-section">
      <div class="section">
        <div class="section-header">
          <span class="section-title">字词句能力变化</span>
          <span class="section-subtitle">查看你的语言能力提升</span>
        </div>
        
        <div class="chart-container">
          <div class="static-chart">
              <span class="chart-title">字词句能力变化趋势</span>
              <span class="chart-description">展示过去8周的词汇量、句式复杂度和语法正确率变化</span>
              <div class="chart-axes">
                <div class="y-axis">
                  <span class="y-axis-label">100</span>
                  <span class="y-axis-label">80</span>
                  <span class="y-axis-label">60</span>
                  <span class="y-axis-label">40</span>
                  <span class="y-axis-label">20</span>
                  <span class="y-axis-label">0</span>
                </div>
                <div class="chart-content">
                  <div class="y-axis-line axis-with-arrow"></div>
                <div class="chart-lines">
                  <div class="line-container" style="padding-right: 10rpx;">
                    <svg class="trend-svg" width="100%" height="100%" viewBox="5 0 95 100">
                      <path d="M15,100 L27,80 L39,65 L51,52 L63,40 L75,28 L87,15 L95,10" 
                            fill="none" stroke="#10B981" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
                      <circle cx="15" cy="100" r="3" fill="white" stroke="#10B981" stroke-width="1.5"/>
                      <circle cx="27" cy="80" r="3" fill="white" stroke="#10B981" stroke-width="1.5"/>
                      <circle cx="39" cy="65" r="3" fill="white" stroke="#10B981" stroke-width="1.5"/>
                      <circle cx="51" cy="52" r="3" fill="white" stroke="#10B981" stroke-width="1.5"/>
                      <circle cx="63" cy="40" r="3" fill="white" stroke="#10B981" stroke-width="1.5"/>
                      <circle cx="75" cy="28" r="3" fill="white" stroke="#10B981" stroke-width="1.5"/>
                      <circle cx="87" cy="15" r="3" fill="white" stroke="#10B981" stroke-width="1.5"/>
                      <circle cx="95" cy="10" r="3" fill="white" stroke="#10B981" stroke-width="1.5"/>
                       
                      <path d="M15,100 L27,90 L39,80 L51,70 L63,60 L75,50 L87,40 L95,30" 
                            fill="none" stroke="#10B981" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
                      <circle cx="15" cy="100" r="3" fill="white" stroke="#10B981" stroke-width="1.5"/>
                      <circle cx="27" cy="90" r="3" fill="white" stroke="#10B981" stroke-width="1.5"/>
                      <circle cx="39" cy="80" r="3" fill="white" stroke="#10B981" stroke-width="1.5"/>
                      <circle cx="51" cy="70" r="3" fill="white" stroke="#10B981" stroke-width="1.5"/>
                      <circle cx="63" cy="60" r="3" fill="white" stroke="#10B981" stroke-width="1.5"/>
                      <circle cx="75" cy="50" r="3" fill="white" stroke="#10B981" stroke-width="1.5"/>
                      <circle cx="87" cy="40" r="3" fill="white" stroke="#10B981" stroke-width="1.5"/>
                      <circle cx="95" cy="30" r="3" fill="white" stroke="#10B981" stroke-width="1.5"/>
                       
                      <path d="M15,100 L27,95 L39,88 L51,75 L63,60 L75,42 L87,22 L95,10" 
                            fill="none" stroke="#F59E0B" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
                      <circle cx="15" cy="100" r="3" fill="white" stroke="#F59E0B" stroke-width="1.5"/>
                      <circle cx="27" cy="95" r="3" fill="white" stroke="#F59E0B" stroke-width="1.5"/>
                      <circle cx="39" cy="88" r="3" fill="white" stroke="#F59E0B" stroke-width="1.5"/>
                      <circle cx="51" cy="75" r="3" fill="white" stroke="#F59E0B" stroke-width="1.5"/>
                      <circle cx="63" cy="60" r="3" fill="white" stroke="#F59E0B" stroke-width="1.5"/>
                      <circle cx="75" cy="42" r="3" fill="white" stroke="#F59E0B" stroke-width="1.5"/>
                      <circle cx="87" cy="22" r="3" fill="white" stroke="#F59E0B" stroke-width="1.5"/>
                      <circle cx="95" cy="10" r="3" fill="white" stroke="#F59E0B" stroke-width="1.5"/>
                    </svg>
                  </div>
                </div>
                
                  <div class="chart-axis">
                    <div class="x-axis-line axis-with-arrow"></div>
                    <div class="x-axis">
                    <span class="axis-label1" style="left: 10%;">第1周</span>
                    <span class="axis-label1" style="left: 22%;">第2周</span>
                    <span class="axis-label1" style="left: 35%;">第3周</span>
                    <span class="axis-label1" style="left: 47%;">第4周</span>
                    <span class="axis-label1" style="left: 59%;">第5周</span>
                    <span class="axis-label1" style="left: 71%;">第6周</span>
                    <span class="axis-label1" style="left: 82%;">第7周</span>
                    <span class="axis-label1" style="left: 93%;">第8周</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="chart-legend">
          <div class="legend-item">
            <div class="legend-color" style="background: #10B981;"></div>
            <span class="legend-text">词汇量</span>
          </div>
          <div class="legend-item">
            <div class="legend-color" style="background: #10B981;"></div>
            <span class="legend-text">句式复杂度</span>
          </div>
          <div class="legend-item">
            <div class="legend-color" style="background: #F59E0B;"></div>
            <span class="legend-text">语法正确率</span>
          </div>
        </div>
        
        <div class="metrics-cards">
          <div class="metric-card">
            <span class="metric-value">520</span>
            <span class="metric-label">词汇量</span>
            <span class="metric-change positive">+15%</span>
          </div>
          <div class="metric-card">
            <span class="metric-value">6.8</span>
            <span class="metric-label">句式复杂度</span>
            <span class="metric-change positive">+8%</span>
          </div>
          <div class="metric-card">
            <span class="metric-value">85</span>
            <span class="metric-label">语法正确率</span>
            <span class="metric-change positive">+12%</span>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="section-header">
          <span class="section-title">学习内容变化</span>
          <span class="section-subtitle">探索不同类型的学习内容</span>
        </div>
        
        <div class="content-type-chart">
          <div class="content-type-item">
            <div class="type-circle" style="background-color: #10B981;">
              <span class="type-ratio">45%</span>
            </div>
            <span class="type-name">作文</span>
          </div>
          <div class="content-type-item">
            <div class="type-circle" style="background-color: #10B981;">
              <span class="type-ratio">25%</span>
            </div>
            <span class="type-name">语法</span>
          </div>
          <div class="content-type-item">
            <div class="type-circle" style="background-color: #F59E0B;">
              <span class="type-ratio">20%</span>
            </div>
            <span class="type-name">词汇</span>
          </div>
          <div class="content-type-item">
            <div class="type-circle" style="background-color: #EC4899;">
              <span class="type-ratio">10%</span>
            </div>
            <span class="type-name">阅读</span>
          </div>
        </div>
        
        <div class="recent-topics">
          <div class="topic-item">
            <div class="topic-index">1</div>
            <div class="topic-info">
              <span class="topic-name">记叙文写作技巧</span>
              <span class="topic-date">2025-09-28</span>
            </div>
            <span class="topic-progress">90%</span>
          </div>
          <div class="topic-item">
            <div class="topic-index">2</div>
            <div class="topic-info">
              <span class="topic-name">修辞手法应用</span>
              <span class="topic-date">2025-09-25</span>
            </div>
            <span class="topic-progress">75%</span>
          </div>
          <div class="topic-item">
            <div class="topic-index">3</div>
            <div class="topic-info">
              <span class="topic-name">句子结构优化</span>
              <span class="topic-date">2025-09-20</span>
            </div>
            <span class="topic-progress">85%</span>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="section-header">
          <span class="section-title">题目练习变化</span>
          <span class="section-subtitle">你的答题能力提升</span>
        </div>
        
        <div class="chart-container">
          <div class="static-chart">
            <span class="chart-title">题目练习变化趋势</span>
              <div class="chart-axes">
                <div class="y-axis">
                  <span class="y-axis-label">100</span>
                  <span class="y-axis-label">80</span>
                  <span class="y-axis-label">60</span>
                  <span class="y-axis-label">40</span>
                  <span class="y-axis-label">20</span>
                  <span class="y-axis-label">0</span>
                </div>
                <div class="chart-content">
                  <div class="y-axis-line axis-with-arrow"></div>
                  <div class="bar-chart">
                      <div class="bar-group">
                        <span class="bar-label" style="top: calc(100% - 10%);">18</span>
                        <div class="bar" style="background: #10B981; height: 18%;"></div>
                      </div>
                      <div class="bar-group">
						<span class="bar-label" style="top: calc(100% - 21%);">29</span>
                        <div class="bar" style="background: #10B981; height: 29%;"></div>
                      </div>
                      <div class="bar-group">
						<span class="bar-label" style="top: calc(100% - 25%);">33</span>
                        <div class="bar" style="background: #10B981; height: 33%;"></div>
                      </div>
                      <div class="bar-group">
						<span class="bar-label" style="top: calc(100% - 39%);">47</span>
                        <div class="bar" style="background: #10B981; height: 47%;"></div>
                      </div>
                      <div class="bar-group">
						<span class="bar-label" style="top: calc(100% - 43%);">51</span>
                        <div class="bar" style="background: #10B981; height: 51%;"></div>
                      </div>
                      <div class="bar-group">
						<span class="bar-label" style="top: calc(100% - 55%);">63</span>
                        <div class="bar" style="background: #10B981; height: 63%;"></div>
                      </div>
                      <div class="bar-group">
						<span class="bar-label" style="top: calc(100% - 70%);">78</span>
                        <div class="bar" style="background: #10B981; height: 78%;"></div>
                      </div>
                      <div class="bar-group">
						<span class="bar-label" style="top: calc(100% - 85%);">93</span>
                        <div class="bar" style="background: #10B981; height: 93%;"></div>
                      </div>
                    </div>
                    
                    <div class="chart-axis">
                      <div class="x-axis-line axis-with-arrow"></div>
                      <div class="x-axis">
                        <span class="axis-label2" style="left: 6%;">第1周</span>
                        <span class="axis-label2" style="left: 19%;">第2周</span>
                        <span class="axis-label2" style="left: 31%;">第3周</span>
                        <span class="axis-label2" style="left: 44%;">第4周</span>
                        <span class="axis-label2" style="left: 57%;">第5周</span>
                        <span class="axis-label2" style="left: 69%;">第6周</span>
                        <span class="axis-label2" style="left: 81%;">第7周</span>
                        <span class="axis-label2" style="left: 94%;">第8周</span>
                      </div>
                    </div>
                  </div>
                </div>
          </div>
        </div>
        
        <div class="practice-stats">
          <div class="stat-item">
            <span class="stat-label">总练习次数</span>
            <span class="stat-value">412</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-label">正确率</span>
            <span class="stat-value">78%</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-label">最高分</span>
            <span class="stat-value">96</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { ArrowLeft } from 'lucide-vue-next'

const router = useRouter()

const navigateBack = () => {
  console.log('点击了返回按钮，尝试导航到个人中心')
  router.push('/pages/profile/index')
}

onMounted(() => {
  console.log('成长轨迹页面已挂载')
})
</script>

<style scoped>
/* 确保所有元素使用正确的盒模型 */
* {
  box-sizing: border-box;
}

/* 确保页面不会产生额外的滚动空间 */
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.variation-page {
  max-width: 1400px;
  margin: 0 auto;
  background-color: #f5f7fa;
  min-height: 100vh;
  max-height: 100vh;
  overflow-y: auto;
}

/* 内容区域 */
.content-section {
  padding: 0 20rpx 40rpx;
  max-height: calc(100vh - 200rpx);
  overflow-y: visible;
  box-sizing: border-box;
  margin: 0;
}

/* 页面头部 */
.page-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100rpx;
  padding: 0 30rpx;
  background-color: #ffffff;
  box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  margin: 0;
}

.back-button {
  width: 60rpx;
  height: 60rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}

.back-icon {
  width: 20px;
  height: 20px;
  color: #333;
}

.page-title {
  font-size: 36rpx;
  font-weight: bold;
  color: #333333;
}

.header-right {
  width: 60rpx;
}

/* 用户卡片 */
.user-card {
  display: flex;
  align-items: center;
  background: linear-gradient(to right, #10B981, #34D399);
  padding: 30rpx;
  margin-bottom: 20rpx;
  color: #ffffff;
}

.user-avatar {
  width: 100rpx;
  height: 100rpx;
  border-radius: 50%;
  background-color: #ffffff;
  overflow: hidden;
  margin-right: 24rpx;
}

.avatar-img {
  width: 100%;
  height: 100%;
}

.user-info {
  flex: 1;
}

.user-name {
  font-size: 34rpx;
  font-weight: bold;
  display: block;
  margin-bottom: 8rpx;
}

.user-grade {
  font-size: 26rpx;
  opacity: 0.9;
}

.study-days {
  text-align: center;
}

.days-value {
  font-size: 48rpx;
  font-weight: bold;
  display: block;
}

.days-label {
  font-size: 22rpx;
  opacity: 0.9;
}

/* 内容区域 */
.section {
  background-color: #ffffff;
  border-radius: 20rpx;
  padding: 30rpx;
  margin-bottom: 24rpx;
  box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.05);
  max-height: 100%;
  overflow: hidden;
}

.section-header {
  margin-bottom: 30rpx;
}

.section-title {
  font-size: 32rpx;
  font-weight: bold;
  color: #333333;
  display: block;
  margin-bottom: 8rpx;
}

.section-subtitle {
  font-size: 24rpx;
  color: #666666;
}

/* 图表容器 */
.chart-container {
  margin: 20rpx 0 30rpx;
  position: relative;
  height: 450px;
  width: 100%;
  background-color: #ffffff;
  border-radius: 16rpx;
  padding: 20rpx;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  overflow: visible;
  padding: 0 20rpx 20rpx 10rpx;
  transition: box-shadow 0.3s ease;
}

.chart-container:hover {
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
}

/* 静态图表样式 */
.static-chart {
  height: 100%;
  padding: 20rpx;
  display: flex;
  flex-direction: column;
}

.chart-title {
  font-size: 28rpx;
  font-weight: 600;
  color: #333333;
  margin-bottom: 8rpx;
  text-align: center;
}

.chart-description {
  font-size: 20rpx;
  color: #999999;
  margin-bottom: 20rpx;
  text-align: center;
}

/* 图表坐标轴容器 */
.chart-axes {
  flex: 1;
  display: flex;
  position: relative;
  margin-bottom: 20rpx;
  height: calc(100% - 40rpx);
}

/* Y轴样式 */
.y-axis {
  width: 50rpx;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-right: 10rpx;
  height: 100%;
  position: relative;
}

.y-axis-label {
  font-size: 18rpx;
  color: #999999;
  text-align: right;
  flex-shrink: 0;
}

/* 图表内容区域 */
.chart-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
}

/* Y轴线样式 */
.y-axis-line {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 21rpx;
  width: 1rpx;
  background-color: #e0e0e0;
  z-index: 1;
}

/* X轴线样式 */
.x-axis-line {
  position: absolute;
  left: 0;
  bottom: 52rpx;
  width: 100%;
  height: 1rpx;
  background-color: #e0e0e0;
  z-index: 1;
}

/* 坐标轴箭头样式 */
.axis-with-arrow::after {
  content: '';
  position: absolute;
  width: 8rpx;
  height: 8rpx;
  border: solid #e0e0e0;
  border-width: 2rpx 2rpx 0 0;
  transform-origin: 0 0;
}

/* Y轴箭头 */
.y-axis-line.axis-with-arrow::after {
  top: 3rpx;
  right: -3rpx;
  transform: rotate(-45deg);
}

/* X轴箭头 */
.x-axis-line.axis-with-arrow::after {
  right: -5rpx;
  bottom: -3rpx;
  transform: rotate(45deg);
}

/* 折线图样式 */
.chart-lines {
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 20rpx;
  padding-top: 0rpx;
  margin-top: -40rpx;
  /* 移除了水平网格线 */
}

.line-container {
  position: relative;
  height: 100%;
  margin-left: -5rpx; /* 整体左移 */
  display: flex;
  align-items: center;
}

/* SVG趋势线样式 */
.trend-svg {
  width: 100%;
  height: 100%;
}

/* 优化数据点显示 */
.trend-svg circle {
  transition: all 0.3s ease;
  cursor: pointer;
  filter: drop-shadow(0 0 0px rgba(0,0,0,0));
}

.trend-svg circle:hover {
  r: 6;
  fill: currentColor;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.15));
}

/* 优化折线平滑度和视觉效果 */
.trend-svg path {
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: stroke-width 0.2s ease;
}

.trend-svg:hover path {
  stroke-width: 4;
}

/* 柱状图样式 */
.bar-chart {
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 20rpx;
  padding-bottom: 20rpx;
  position: relative;
  padding-top: 20rpx;
}

.bar-group {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  margin: 0 6rpx;
  position: relative;
}

.bar {
  width: 80%;
  background: #10B981;
  margin-bottom: -78rpx;
  border-radius: 8rpx 8rpx 0 0;
  transition: height 0.3s ease;
}

/* 词汇量曲线点颜色 */
.line-container:nth-child(1) .point {
  border: 4rpx solid #10B981;
}

/* 句式复杂度曲线点颜色 */
.line-container:nth-child(2) .point {
  border: 4rpx solid #10B981;
}

/* 语法正确率曲线点颜色 */
.line-container:nth-child(3) .point {
  border: 4rpx solid #F59E0B;
}



.bar-label {
  font-size: 20rpx;
  color: #666666;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

/* 坐标轴样式 */
.chart-axis {
  min-height: 80rpx;
  position: relative;
  margin-top: 10rpx;
  height: 80rpx;
}

.x-axis {
  position: relative;
  width: 100%;
  height: 80rpx;
}

.axis-label1 {
  position: absolute;
  font-size: 20rpx;
  color: #666666;
  text-align: center;
  transform: translateX(-50%);
  min-width: 60rpx;
  top: 50rpx;
  white-space: nowrap;
}

.axis-label2 {
  position: absolute;
  font-size: 20rpx;
  color: #666666;
  text-align: center;
  transform: translateX(-50%);
  min-width: 60rpx;
  top: 45rpx;
  white-space: nowrap;
}

/* 柱状图部分的坐标轴特殊处理 */
.bar-chart + .chart-axis .x-axis .axis-label {
  top: 35rpx;
}

/* 图例样式 */
.chart-legend {
  display: flex;
  justify-content: center;
  margin-top: 20rpx;
  padding: 10rpx 0;
}

.legend-item {
  display: flex;
  align-items: center;
  margin: 0 20rpx;
}

.legend-color {
  width: 20rpx;
  height: 3rpx;
  margin-right: 10rpx;
}

.legend-text {
  font-size: 22rpx;
  color: #666666;
}

/* 数据指标卡片 */
.metrics-cards {
  display: flex;
  justify-content: space-between;
  margin-top: 30rpx;
}

.metric-card {
  flex: 1;
  background-color: #f9fafb;
  border-radius: 16rpx;
  padding: 28rpx 20rpx;
  text-align: center;
  margin: 0 10rpx;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.metric-card:hover {
  transform: translateY(-4rpx);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.metric-value {
  font-size: 40rpx;
  font-weight: bold;
  color: #10B981;
  display: block;
  margin-bottom: 4rpx;
}

.metric-label {
  font-size: 24rpx;
  color: #666666;
  display: block;
  margin-bottom: 4rpx;
}

.metric-change {
  font-size: 22rpx;
  font-weight: 500;
}

.metric-change.positive {
  color: #10B981;
}

.metric-change.negative {
  color: #EF4444;
}

/* 内容类型图表 */
.content-type-chart {
  display: flex;
  justify-content: space-around;
  margin: 20rpx 0 40rpx;
}

.content-type-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.type-circle {
  width: 160rpx;
  height: 160rpx;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12rpx;
  color: #ffffff;
}

.type-ratio {
  font-size: 40rpx;
  font-weight: bold;
}

.type-name {
  font-size: 26rpx;
  color: #333333;
}

/* 最近学习主题 */
.recent-topics {
  margin-top: 20rpx;
}

.topic-item {
  display: flex;
  align-items: center;
  padding: 20rpx 0;
  border-bottom: 1rpx solid #f0f0f0;
}

.topic-item:last-child {
  border-bottom: none;
}

.topic-index {
  width: 50rpx;
  height: 50rpx;
  background-color: #10B981;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 26rpx;
  font-weight: bold;
  margin-right: 20rpx;
}

.topic-info {
  flex: 1;
}

.topic-name {
  font-size: 28rpx;
  color: #333333;
  display: block;
  margin-bottom: 4rpx;
}

.topic-date {
  font-size: 22rpx;
  color: #999999;
}

.topic-progress {
  font-size: 28rpx;
  font-weight: bold;
  color: #10B981;
}

/* 练习统计 */
.practice-stats {
  display: flex;
  margin-top: 20rpx;
}

.stat-item {
  flex: 1;
  text-align: center;
}

.stat-label {
  font-size: 24rpx;
  color: #666666;
  display: block;
  margin-bottom: 8rpx;
}

.stat-value {
  font-size: 36rpx;
  font-weight: bold;
  color: #333333;
}

.stat-divider {
  width: 1rpx;
  background-color: #e0e0e0;
  margin: 0 10rpx;
}
</style>