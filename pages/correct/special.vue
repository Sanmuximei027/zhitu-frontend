<template>
  <div class="progress-container">
	  
	  
    <div class="progress-card">
      <text class="title">你的学习进度</text>

      <!-- 词句训练 -->
      <div class="progress-item">
        <div class="row">
          <text class="label">词句训练</text>
          <text class="percent">65%</text>
        </div>
        <div class="progress-bar">
          <div class="progress" style="width: 65%"></div>
        </div>
      </div>

      <!-- 句式训练 -->
      <div class="progress-item">
        <div class="row">
          <text class="label">句式训练</text>
          <text class="percent">40%</text>
        </div>
        <div class="progress-bar">
          <div class="progress" style="width: 40%"></div>
        </div>
      </div>

      <!-- 段落训练 -->
      <div class="progress-item">
        <div class="row">
          <text class="label">段落训练</text>
          <text class="percent">25%</text>
        </div>
        <div class="progress-bar">
          <div class="progress" style="width: 25%"></div>
        </div>
      </div>

      <text class="footer-tip">已完成13/40个练习，继续加油！</text>
    </div>
	
	<!-- 词句训练标题 -->
	<div class="training-title">
	  词句训练
	</div>
	<!-- 四个框的容器 -->
<!-- 四个框的容器 -->
<div class="box-container">
  <div class="box-item">
    <div class="blue-circle">
		<Pencil class="box-icon" />
	</div>
    <text class="box-title">汉字描红</text>
	<text class="box-subtitle">练习常用字的正确书写和笔画顺序</text>
	<view class="tag beginner">入门</view>
	<text class="right-text">10分钟/天</text>
  </div>
  <div class="box-item">
    <div class="blue-circle">
		<Link class="box-icon" />
	</div>
    <text class="box-title">词语搭配</text>
	<text class="box-subtitle">学习正确的词语搭配，提高表达准确性</text>
	<view class="tag beginner">基础</view>
	<text class="right-text">8分钟/天</text>
  </div>
  <div class="box-item">
    <div class="blue-circle">
		<List class="box-icon" />
	</div>
    <text class="box-title">近义词辨析</text>
	<text class="box-subtitle">理解意思相近词语的细微差别</text>
	<view class="tag beginner">进阶</view>
	<text class="right-text">12分钟/天</text>
  </div>
  <div class="box-item">
    <div class="blue-circle">
		<HelpCircle class="box-icon" />
	</div>
    <text class="box-title">量词使用</text>
	<text class="box-subtitle">学习正确使用量词，如"一只鸟"、"一本书"</text>
	<view class="tag beginner">基础</view>
	<text class="right-text">5分钟/天</text>
  </div>
</div>

<!-- 新标题 -->
<div class="training-title-second">
  进阶训练
</div>
<!-- 新的四个框容器 -->
<div class="box-container-advanced">
  <div class="box-item-advanced">
    <div class="purple-circle-advanced">
     <RefreshCw class="box-icon-advanced" />
    </div>
    <text class="box-title-advanced">句子排序</text>
    <text class="box-subtitle-advanced">将打乱的句子按逻辑顺序重新排列</text>
    <view class="tag-advanced beginner">基础</view>
    <text class="right-text-advanced">10分钟/天</text>
  </div>
  <div class="box-item-advanced">
    <div class="purple-circle-advanced">
      <Paperclip class="box-icon-advanced" />
    </div>
    <text class="box-title-advanced">仿写句子</text>
    <text class="box-subtitle-advanced">根据例句，学习使用相同结构造句</text>
    <view class="tag-advanced basic">进阶</view>
    <text class="right-text-advanced">15分钟/天</text>
  </div>
  <div class="box-item-advanced">
    <div class="purple-circle-advanced">
      <HelpCircle class="box-icon-advanced" />
    </div>
    <text class="box-title-advanced">病句修改</text>
    <text class="box-subtitle-advanced">识别并修改有语法错误的句子</text>
    <view class="tag-advanced basic">进阶</view>
    <text class="right-text-advanced">12分钟/天</text>
  </div>
  <div class="box-item-advanced">
    <div class="purple-circle-advanced">
      <Minus class="box-icon-advanced" />
    </div>
    <text class="box-title-advanced">标点符号</text>
    <text class="box-subtitle-advanced">学习正确使用逗号、句号、问号等</text>
    <view class="tag-advanced basic">基础</view>
    <text class="right-text-advanced">8分钟/天</text>
  </div>
</div>

<div class="training-title-third">
  段落训练
</div>
<div class="box-container-third">
  <div class="box-item-third">
    <div class="green-circle-third">
     <Pencil class="box-icon-third" />
    </div>
    <text class="box-title-third">写一句话</text>
    <text class="box-subtitle-third">学习用完整的一句话描述事物</text>
    <view class="tag-third beginner">入门</view>
    <text class="right-text-third">5分钟/天</text>
  </div>
  <div class="box-item-third">
    <div class="green-circle-third">
     <ImageIcon class="box-icon-third" />
    </div>
    <text class="box-title-third">看图写段</text>
    <text class="box-subtitle-third">根据图片内容写一小段描述性文字</text>
    <view class="tag-third beginner">基础</view>
    <text class="right-text-third">15分钟/天</text>
  </div>
  <div class="box-item-third">
    <div class="green-circle-third">
     <List class="box-icon-third" />
    </div>
    <text class="box-title-third">段落结构</text>
    <text class="box-subtitle-third">学习如何组织段落，使内容有条理</text>
    <view class="tag-third beginner">进阶</view>
    <text class="right-text-third">20分钟/天</text>
  </div>
  <div class="box-item-third">
    <div class="green-circle-third">
     <Paperclip class="box-icon-third" />
    </div>
    <text class="box-title-third">开头结尾</text>
    <text class="box-subtitle-third">学习写好段落的开头和结尾句子</text>
    <view class="tag-third beginner">进阶</view>
    <text class="right-text-third">15分钟/天</text>
  </div>
</div>

<!-- 为你推荐的习题 -->
<div class="drill-recommend-section">
  <div class="drill-recommend-header">
    <text class="drill-recommend-title">为你推荐</text>
    <text class="drill-recommend-refresh" @click="fetchRecommend">换一批</text>
  </div>
  <div class="drill-recommend-tip" v-if="weaknessTags.length > 0">
    根据你的批改结果，重点推荐：{{ weaknessTags.join('、') }}
  </div>

  <!-- 加载中 -->
  <div class="drill-loading" v-if="drillLoading">推荐习题加载中...</div>
  <!-- 加载失败 -->
  <div class="drill-error" v-if="drillError && !drillLoading">
    {{ drillError }}
    <span class="drill-retry" @click="fetchRecommend">重试</span>
  </div>

  <!-- 推荐习题列表 -->
  <div class="drill-list" v-if="!drillLoading && !drillError">
    <div
      class="drill-card"
      v-for="item in drillList"
      :key="item.id"
      @click="openDrill(item.id)"
    >
      <div class="drill-card-header">
        <span class="drill-type-tag">{{ getTypeTag(item.tags) }}</span>
        <span class="drill-arrow">查看 ›</span>
      </div>
      <div class="drill-card-body">{{ item.drill }}</div>
    </div>
    <div class="drill-empty" v-if="drillList.length === 0">暂无推荐习题</div>
  </div>
</div>

<!-- 习题详情弹窗 -->
<div class="drill-modal-mask" v-if="showModal" @click.self="closeModal">
  <div class="drill-modal">
    <div class="drill-modal-header">
      <span class="drill-modal-title">{{ currentDrill ? getTypeTag(currentDrill.tags) : '习题详情' }}</span>
      <span class="drill-modal-close" @click="closeModal">✕</span>
    </div>
    <div class="drill-modal-body">
      <div class="drill-modal-question" v-if="currentDrill">{{ currentDrill.drill }}</div>
      <div class="drill-modal-loading" v-if="detailLoading">答案加载中...</div>
      <template v-if="currentDrill && currentDrill.answer && !detailLoading">
        <div class="drill-answer-toggle" @click="showAnswer = !showAnswer">
          {{ showAnswer ? '隐藏答案' : '查看答案' }}
        </div>
        <div class="drill-modal-answer" v-if="showAnswer">{{ currentDrill.answer }}</div>
      </template>
    </div>
  </div>
</div>

<div class="training-title-second">
  为你推荐的学习路径
</div>
<!-- 低年级基础提升计划卡片 -->
<div class="plan-card">
  <div class="plan-header">
    <text class="plan-title">低年级基础提升计划</text>
    <text class="plan-subtitle">适合1-3年级，共8周课程</text>
  </div>

  <!-- 进度条 -->
  <div class="plan-progress">
    <text class="progress-text">当前进度：第3周 38%</text>
    <div class="progress-bar">
      <div class="progress-fill" style="width:38%"></div>
    </div>
  </div>

  <!-- 本周重点 -->
  <div class="plan-focus">
    <text class="focus-title">本周学习重点：</text>
    <text class="focus-item">• 掌握"的、地、得"的正确用法</text>
    <text class="focus-item">• 学习简单的比喻句写作</text>
    <text class="focus-item">• 练习写50字左右的段落</text>
  </div>

  <!-- 继续按钮 -->
  <button class="plan-btn">继续学习</button>
</div>
	
		
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import {
  Pencil,
  Link,
  List,
  HelpCircle,
  RefreshCw,
  Paperclip,
  Minus,
  Image as ImageIcon
} from 'lucide-vue-next';

// ============ 习题推荐 ============
const drillList = ref([]);          // 推荐习题列表
const weaknessTags = ref([]);       // 薄弱点题型标签
const drillLoading = ref(false);
const drillError = ref('');

// 弹窗相关
const showModal = ref(false);
const currentDrill = ref(null);
const detailLoading = ref(false);
const showAnswer = ref(false);

const DRILL_TYPE_TAGS = ['近似字辨析', '病句修改', '词语搭配', '仿写句子', '阅读理解'];

// 从tags中取出题型标签（用于展示）
const getTypeTag = (tags) => {
  if (!tags || tags.length === 0) return '综合练习';
  return tags.find(t => DRILL_TYPE_TAGS.includes(t)) || tags[0];
};

// 获取推荐习题（后端按最近一次批改结果薄弱点动态加权，无记录时随机）
const fetchRecommend = async () => {
  drillLoading.value = true;
  drillError.value = '';
  try {
    const accessToken = uni.getStorageSync('accessToken');
    const response = await fetch('/api/content/drill/recommend/?limit=6', {
      headers: {
        'Authorization': accessToken ? `Bearer ${accessToken}` : ''
      }
    });
    if (!response.ok) {
      throw new Error(`请求失败，状态码: ${response.status}`);
    }
    const res = await response.json();
    if (res.status === 'error') {
      throw new Error(res.message || '获取推荐习题失败');
    }
    drillList.value = res.data.drills || [];
    weaknessTags.value = res.data.weakness_tags || [];
  } catch (e) {
    drillError.value = e.message || '获取推荐习题失败';
  } finally {
    drillLoading.value = false;
  }
};

// 打开弹窗并加载习题详情（含答案）
const openDrill = async (id) => {
  showModal.value = true;
  showAnswer.value = false;
  detailLoading.value = true;
  currentDrill.value = drillList.value.find(item => item.id === id) || null;
  try {
    const accessToken = uni.getStorageSync('accessToken');
    const response = await fetch(`/api/content/drill/detail/${id}/`, {
      headers: {
        'Authorization': accessToken ? `Bearer ${accessToken}` : ''
      }
    });
    const res = await response.json();
    if (res.status === 'success') {
      currentDrill.value = res.data;
    } else {
      throw new Error(res.message || '获取习题详情失败');
    }
  } catch (e) {
    console.error('获取习题详情失败:', e);
    // 详情获取失败时仍展示列表里的题干预览
  } finally {
    detailLoading.value = false;
  }
};

const closeModal = () => {
  showModal.value = false;
  currentDrill.value = null;
  showAnswer.value = false;
};

onMounted(() => {
  fetchRecommend();
});
</script>

<style scoped>
.progress-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 20rpx;
  background-color: #ffffff;
  min-height: 100vh;
  box-sizing: border-box;
}
.progress-card {
  
  margin-top: 30rpx;
  padding: 30rpx 30rpx 24rpx;
  border-radius: 20rpx;
  background: linear-gradient(135deg, #42c8a1, #10b981);
  box-shadow: 0 4rpx 12rpx rgba(37, 99, 235, 0.2);
}

.title {
  font-size: 36rpx;
  font-weight: bold;
  color: #fff;
  margin-bottom: 20rpx;
  display: block;
}

.progress-item {
  margin-bottom: 18rpx;
}

.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8rpx;
}

.label {
  font-size: 30rpx;
  color: #fff;
}

.percent {
  font-size: 30rpx;
  color: #fff;
}

.progress-bar {
  height: 16rpx;
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 8rpx;
  overflow: hidden;
}

.progress {
  height: 100%;
  background-color: #fff;
  border-radius: 8rpx;
}

.footer-tip {
  margin-top: 20rpx;
  font-size: 26rpx;
  color: #fff;
  text-align: center;
  display: block;
}
.training-title {
  font-size: 38rpx;
  font-weight: bold;
  color: #000;
  margin-top: 40rpx;
  width: 100%;
  text-align: left;
  padding-left: 30rpx;
  box-sizing: border-box;
}
.box-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 40rpx 30rpx;
  box-sizing: border-box;
}
.box-item {
  width: calc(50% - 20rpx);
  height: 235rpx;
  background-color: #fff;
  border: 2rpx solid #e0e0e0;
  border-radius: 12rpx;
  box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.08);
  margin-bottom: 40rpx;
  position: relative;
  padding: 25rpx;
  box-sizing: border-box;
}

.blue-circle {
  width: 80rpx;
  height: 80rpx;
  background-color: #d1fae5;
  border-radius: 50%;
  position: absolute;
  top: 25rpx;
  left: 30rpx;
  display: flex;
  justify-content: center;
  align-items: center;
}

.box-icon {
  width: 28px;
  height: 28px;
  color: #007aff;
}

.box-title {
  position: absolute;
  top: 50rpx;
  right: 40rpx;
  font-size: 28rpx;
  font-weight: bold;
  color: #333333;

}
.box-item:nth-child(3) .box-title {
  font-size: 26rpx;
  right: 36rpx;
}

.box-subtitle {
  position: absolute;
  top: 115rpx;
  left: 30rpx;
  right: 30rpx;
  font-size: 22rpx;
  color: #888;
  text-align: left;
  line-height: 1.2;
  padding-left: 0;
}
.tag {
  position: absolute;
  bottom: 15rpx;
  left: 25rpx;
  padding: 4rpx 16rpx;
  background-color: #d9f7eb;
  border-radius: 16rpx;
  font-size: 20rpx;
  color: rgba(24, 144, 255, 0.6);
  font-weight: bold;
}
.right-text {
  position: absolute;
  bottom: 20rpx;
  right: 33rpx;
  font-size: 20rpx;
  color: #999;
}
.training-title-second {
  font-size: 38rpx;
  font-weight: bold;
  color: #000;
  margin-top: -20rpx;
  width: 100%;
  text-align: left;
  padding-left: 30rpx;
  box-sizing: border-box;
}
/* 新容器样式 */
.box-container-advanced {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 40rpx 30rpx;
  box-sizing: border-box;
}

/* 新框样式 */
.box-item-advanced {
  width: calc(50% - 20rpx);
  height: 235rpx;
  background-color: #fff;
  border: 2rpx solid #e0e0e0;
  border-radius: 12rpx;
  box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.08);
  margin-bottom: 40rpx;
  position: relative;
  padding: 25rpx;
  box-sizing: border-box;
}

/* 新圆圈样式 */
.purple-circle-advanced {
  width: 80rpx;
  height: 80rpx;
  background-color: #d9f7eb;
  border-radius: 50%;
  position: absolute;
  top: 25rpx;
  left: 30rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  }

/* 新图标样式 */
.box-icon-advanced {
  width: 28px;
  height: 28px;
  color: #8A2BE2;
}

/* 新标题样式 */
.box-title-advanced {
  position: absolute;
  top: 50rpx;
  right: 40rpx;
  font-size: 28rpx;
  font-weight: bold;
  color: #333333;
}

/* 新副标题样式 */
.box-subtitle-advanced {
  position: absolute;
  top: 115rpx;
  left: 30rpx;
  right: 30rpx;
  font-size: 22rpx;
  color: #888;
  text-align: left;
  line-height: 1.2;
  padding-left: 0;
}

/* 新标签样式 */
.tag-advanced {
  position: absolute;
  bottom: 15rpx;
  left: 25rpx;
  padding: 4rpx 16rpx;
  background-color: rgba(217, 184, 255, 0.5);
  border-radius: 16rpx;
  font-size: 20rpx;
  color: rgba(138, 43, 226, 0.7);
  font-weight: bold;
}

/* 新右边文字样式 */
.right-text-advanced {
  position: absolute;
  bottom: 20rpx;
  right: 33rpx;
  font-size: 20rpx;
  color: #999;
}
.purple-circle-advanced {
  background-color: rgba(217, 184, 255, 0.5);
}

.training-title-third {
  font-size: 38rpx;
  font-weight: bold;
  color: #000;
  margin-top: -20rpx;
  width: 100%;
  text-align: left;
  padding-left: 30rpx;
  box-sizing: border-box;
}
/* 新容器样式 */
.box-container-third {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 40rpx 30rpx;
  box-sizing: border-box;
}

/* 新框样式 */
.box-item-third {
  width: calc(50% - 20rpx);
  height: 235rpx;
  background-color: #fff;
  border: 2rpx solid #e0e0e0;
  border-radius: 12rpx;
  box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.08);
  margin-bottom: 40rpx;
  position: relative;
  padding: 25rpx;
  box-sizing: border-box;
}

/* 新圆圈样式 */
.green-circle-third {
  width: 80rpx;
  height: 80rpx;
  background-color: #d9f7eb;
  border-radius: 50%;
  position: absolute;
  top: 25rpx;
  left: 30rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  }

/* 新图标样式 */
.box-icon-third {
  width: 28px;
  height: 28px;
  color: #2e8b57;
}

/* 新标题样式 */
.box-title-third {
  position: absolute;
  top: 50rpx;
  right: 40rpx;
  font-size: 28rpx;
  font-weight: bold;
  color: #333333;
}

/* 新副标题样式 */
.box-subtitle-third {
  position: absolute;
  top: 115rpx;
  left: 30rpx;
  right: 30rpx;
  font-size: 22rpx;
  color: #888;
  text-align: left;
  line-height: 1.2;
  padding-left: 0;
}

/* 新标签样式 */
.tag-third {
  position: absolute;
  bottom: 15rpx;
  left: 25rpx;
  padding: 4rpx 16rpx;
  background-color: rgba(144, 238, 144, 0.3);
  border-radius: 16rpx;
  font-size: 20rpx;
  color: #2e8b57;
  font-weight: bold;
}

/* 新右边文字样式 */
.right-text-third {
  position: absolute;
  bottom: 20rpx;
  right: 33rpx;
  font-size: 20rpx;
  color: #999;
}
.green-circle-third {
  background-color: rgba(144, 238, 144, 0.3);
}

/* —— 计划卡片 —— */
.plan-card{
  margin: 40rpx auto 0;
  width: 640rpx;
  padding: 30rpx;
  border-radius: 16rpx;
  background: linear-gradient(135deg,#ffffff 0%,#f7fffa 100%);
  border: 2rpx solid #e8f5e9;
  box-shadow: 0 4rpx 12rpx rgba(0,0,0,.05);
}
.plan-header{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.plan-title{
  font-size: 34rpx;
  font-weight: bold;
  color: #2e7d32;
}
.plan-subtitle{
  margin-top: 4rpx;
  font-size: 24rpx;
  color: #558b2f;
}

/* 进度条 */
.plan-progress{
  margin-top: 20rpx;
}
.progress-text{
  font-size: 26rpx;
  color: #43a047;
}
.progress-bar{
  margin-top: 10rpx;
  height: 12rpx;
  width: 100%;
  background: #e8f5e9;
  border-radius: 6rpx;
  overflow: hidden;
}
.progress-fill{
  height: 100%;
  background: #66bb6a;
  border-radius: 6rpx;
}

/* 本周重点 */
.plan-focus{
  margin-top: 24rpx;
}
.focus-title{
  font-size: 28rpx;
  font-weight: 600;
  color: #333;
}
.focus-item{
  display: block;
  margin-top: 8rpx;
  font-size: 26rpx;
  line-height: 1.5;
  color: #555;
}

/* 按钮 */
.plan-btn{
  margin-top: 30rpx;
  width: 100%;
  height: 70rpx;
  line-height: 70rpx;
  background: #4caf50;
  color: #fff;
  font-size: 30rpx;
  border-radius: 35rpx;
  border: none;
}

/* —— 为你推荐（习题） —— */
.drill-recommend-section {
  margin-top: 40rpx;
  padding: 0 10rpx;
}
.drill-recommend-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20rpx;
}
.drill-recommend-title {
  font-size: 38rpx;
  font-weight: bold;
  color: #000;
}
.drill-recommend-refresh {
  font-size: 26rpx;
  color: #10b981;
  padding: 6rpx 20rpx;
  border: 2rpx solid #10b981;
  border-radius: 24rpx;
}
.drill-recommend-tip {
  margin-top: 16rpx;
  padding: 12rpx 20rpx;
  background: #fff7e6;
  border-radius: 12rpx;
  font-size: 24rpx;
  color: #d48806;
}
.drill-loading {
  margin-top: 24rpx;
  text-align: center;
  font-size: 26rpx;
  color: #999;
}
.drill-error {
  margin-top: 24rpx;
  text-align: center;
  font-size: 26rpx;
  color: #e74c3c;
}
.drill-retry {
  margin-left: 16rpx;
  color: #10b981;
  text-decoration: underline;
}
.drill-list {
  margin-top: 24rpx;
}
.drill-card {
  background: #fff;
  border: 2rpx solid #e0e0e0;
  border-radius: 16rpx;
  box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.06);
  padding: 24rpx;
  margin-bottom: 24rpx;
}
.drill-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14rpx;
}
.drill-type-tag {
  padding: 4rpx 18rpx;
  background: #d9f7eb;
  border-radius: 16rpx;
  font-size: 22rpx;
  color: #10b981;
  font-weight: bold;
}
.drill-arrow {
  font-size: 24rpx;
  color: #999;
}
.drill-card-body {
  font-size: 26rpx;
  color: #333;
  line-height: 1.6;
  white-space: pre-line;
  overflow: hidden;
  text-overflow: ellipsis;
}
.drill-empty {
  text-align: center;
  font-size: 26rpx;
  color: #999;
  padding: 40rpx 0;
}

/* —— 习题详情弹窗 —— */
.drill-modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99999;
  display: flex;
  justify-content: center;
  align-items: center;
}
.drill-modal {
  width: 86%;
  max-width: 640px;
  max-height: 76vh;
  background: #fff;
  border-radius: 20rpx;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.drill-modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24rpx 30rpx;
  background: linear-gradient(135deg, #42c8a1, #10b981);
}
.drill-modal-title {
  font-size: 30rpx;
  font-weight: bold;
  color: #fff;
}
.drill-modal-close {
  font-size: 32rpx;
  color: #fff;
  padding: 0 10rpx;
}
.drill-modal-body {
  padding: 30rpx;
  overflow-y: auto;
}
.drill-modal-question {
  font-size: 28rpx;
  color: #333;
  line-height: 1.8;
  white-space: pre-line;
}
.drill-modal-loading {
  margin-top: 24rpx;
  text-align: center;
  font-size: 26rpx;
  color: #999;
}
.drill-answer-toggle {
  margin-top: 28rpx;
  text-align: center;
  padding: 14rpx 0;
  background: #d9f7eb;
  border-radius: 12rpx;
  font-size: 26rpx;
  color: #10b981;
  font-weight: bold;
}
.drill-modal-answer {
  margin-top: 20rpx;
  padding: 24rpx;
  background: #f6ffed;
  border: 2rpx solid #b7eb8f;
  border-radius: 12rpx;
  font-size: 26rpx;
  color: #333;
  line-height: 1.8;
  white-space: pre-line;
}
</style>