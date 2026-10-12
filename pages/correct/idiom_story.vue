<template>
  <div class="page-container">
    <div class="nav-bar">
      <div class="back-btn" @click="onBack">
        <span class="back-icon">←</span>
      </div>
      <span class="nav-title">成语故事详情</span>
      <div class="nav-actions">
        <span class="icon collect-icon">☆</span>
        <span class="icon share-icon">⇱</span>
      </div>
    </div>

    <div class="idiom-header">
      <div class="idiom-name-container">
        <span class="idiom-name">守株待兔</span>
      </div>
      <div class="idiom-pinyin-container">
        <span class="idiom-pinyin">shǒu zhū dài tù</span>
      </div>
      <div class="tag-group">
        <div class="tag-item">寓言故事</div>
        <div class="tag-item">成语</div>
        <div class="tag-item">写事作文可用</div>
      </div>
    </div>

    <div class="section">
      <div class="section-title">
        <div class="title-content">
          <span class="title-icon">📖</span>
          <span class="title-text">成语解释</span>
        </div>
      </div>
      <span class="section-content">
        株：露出地面的树根。比喻不主动努力，而存万一的侥幸心理，希望得到意外的收获。也比喻死守狭隘的经验，不知变通。
      </span>
    </div>

    <div class="section">
      <div class="section-title">
        <div class="title-content">
          <span class="title-icon">📜</span>
          <span class="title-text">成语故事</span>
        </div>
      </div>
      <span class="section-content">
        从前，宋国有个农夫。一天，他在田里干活，突然看见一只兔子飞快地跑过来，一下子撞在田边的树桩上，折断了脖子死了。
      </span>
      <span class="section-content">
        农夫很高兴，他没花一点力气就捡到了一只兔子。他想："要是每天都能捡到一只兔子，那该多好啊！"
      </span>
      <span class="section-content">
        从那以后，农夫再也不肯下田干活了。他天天守在树桩旁边，等着再有兔子撞过来。可是，日子一天一天过去了，再也没有兔子撞在树桩上。
      </span>
      <span class="section-content">
        而他的田地因为没人耕种，也渐渐荒芜了。人们都嘲笑他太傻了。
      </span>
    </div>

    <div class="section">
      <div class="section-title">
        <div class="title-content">
          <span class="title-icon">🔖</span>
          <span class="title-text">成语出处</span>
        </div>
      </div>
      <div class="quote-box">
        <span class="quote-content">
          "宋人有耕田者。田中有株，兔走触株，折颈而死。因释其耒而守株，冀复得兔。兔不可复得，而身为宋国笑。"
        </span>
        <span class="quote-source">——《韩非子·五蠹》</span>
      </div>
    </div>

    <div class="section">
      <div class="section-title">
        <div class="title-content">
          <span class="title-icon">✏️</span>
          <span class="title-text">作文中使用示例</span>
        </div>
      </div>
      <div class="example-item">
        <span class="example-title">例1：写事作文《一次失败的考试》</span>
        <span class="example-content">
          上次考试我侥幸考了满分，就以为不用努力也能保持好成绩，整天玩耍不学习。这次考试成绩一出来，我才明白，学习不能守株待兔，只有付出持续的努力，才能取得好成绩。
        </span>
      </div>
      <div class="example-item">
        <span class="example-title">例2：议论文《成功靠什么》</span>
        <span class="example-content">
          成功从来不是偶然的，它需要我们脚踏实地，一步一个脚印地去奋斗。那些想通过守株待兔获得成功的人，最终只会一事无成。
        </span>
      </div>
    </div>

    <div class="section">
      <div class="section-title">
        <div class="title-content">
          <span class="title-icon">💡</span>
          <span class="title-text">写作技巧提示</span>
        </div>
      </div>
      <div class="tip-box">
        <span class="tip-title">如何在作文中运用成语故事？</span>
        <span class="tip-content">1. 引用成语时，要先理解成语的意思和用法，避免用错</span>
        <span class="tip-content">2. 可以在议论文中用成语故事作为论据，增强说服力</span>
        <span class="tip-content">3. 在记叙文结尾，可以用成语总结道理，点明主题</span>
        <span class="tip-content">4. 使用成语后，可以简单解释一下，让读者更清楚你的想法</span>
      </div>
    </div>

    <div class="section">
      <div class="section-title">
        <div class="title-content">
          <span class="title-icon">🔍</span>
          <span class="title-text">近义词拓展</span>
        </div>
      </div>
      <div class="synonym-group">
        <div class="synonym-item">刻舟求剑</div>
        <div class="synonym-item">坐享其成</div>
        <div class="synonym-item">不劳而获</div>
        <div class="synonym-item">墨守成规</div>
      </div>
    </div>

    <div class="section">
      <div class="section-title">
        <div class="title-content">
          <span class="title-icon">📝</span>
          <span class="title-text">相关写作练习</span>
        </div>
      </div>
      <div class="exercise-item">
        <span class="exercise-title">《由“守株待兔”想到的》</span>
        <span class="exercise-desc">写一篇300字左右的议论文，谈谈你从这个成语故事中学到的道理</span>
        <span class="exercise-btn" @click="goToExercise">开始练习</span>
      </div>
      <div class="exercise-item">
        <span class="exercise-title">改写《守株待兔》</span>
        <span class="exercise-desc">发挥想象，给守株待兔的故事增加新的情节，写成一篇400字左右的记叙文</span>
        <span class="exercise-btn" @click="goToExercise">开始练习</span>
      </div>
    </div>

    <div class="section">
      <div class="section-title">
        <div class="title-content">
          <span class="title-icon">👥</span>
          <span class="title-text">同学优秀作品</span>
        </div>
        <span class="more-icon" @click="goToMoreWorks">></span>
      </div>
      <div class="work-item">
        <span class="work-title">《不要做守株待兔的人》</span>
        <span class="work-content">读了《守株待兔》这个故事，我明白了一个道理：做任何事情都不能心存侥幸，只有通过自己的努力，才能获得成功...</span>
        <div class="work-author">
          <img 
            class="author-avatar" 
            src="/static/images/知途logoo.png" 
          />
          <span class="author-info">张强 | 五年级</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const onBack = () => {
  router.back()
}

const goToExercise = () => {
}

const goToMoreWorks = () => {
}
</script>

<style scoped>
.page-container {
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
  padding: 20rpx;
  overflow-y: auto;
  max-height: 100vh;
  box-sizing: border-box;
}

.nav-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 88rpx;
  border-bottom: 1rpx solid #f5f5f5;
  padding: 0 24rpx;
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 100;
}
.back-btn {
  width: 60rpx;
  height: 60rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  transition: background-color 0.2s;
}
.back-btn:hover {
  background-color: #f5f5f5;
}
.back-icon {
  font-size: 36rpx;
  color: #333;
}
.nav-title {
  font-size: 32rpx;
  font-weight: bold;
  color: #333;
}
.nav-actions {
  display: flex;
  align-items: center;
}
.icon {
  font-size: 32rpx;
  color: #333;
  margin-left: 32rpx;
  cursor: pointer;
  transition: color 0.2s;
}
.icon:hover {
  color: #10b981;
}

.idiom-header {
  text-align: center;
  margin: 30rpx 0;
  padding: 20rpx 0;
  animation: fadeIn 0.5s ease;
}
.idiom-name-container {
  width: 100%;
  text-align: center;
  margin-bottom: 16rpx;
}
.idiom-name {
  font-size: 56rpx;
  font-weight: bold;
  color: #333;
}
.idiom-pinyin-container {
  width: 100%;
  text-align: center;
  margin-bottom: 24rpx;
}
.idiom-pinyin {
  font-size: 28rpx;
  color: #666;
}
.tag-group {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16rpx;
}
.tag-item {
  padding: 8rpx 20rpx;
  background-color: #e6f3ff;
  color: #10b981;
  font-size: 22rpx;
  border-radius: 20rpx;
  transition: all 0.2s;
}
.tag-item:hover {
  background-color: #10b981;
  color: white;
}

.section {
  background-color: #f9f9f9;
  border-radius: 20rpx;
  padding: 24rpx;
  margin-bottom: 24rpx;
  transition: transform 0.2s, box-shadow 0.2s;
  animation: slideIn 0.3s ease forwards;
  opacity: 0;
}
.section:hover {
  transform: translateY(-2rpx);
  box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.05);
}
.section-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16rpx;
}
.title-content {
  display: flex;
  align-items: center;
}
.title-icon {
  font-size: 32rpx;
  color: #10b981;
  margin-right: 12rpx;
}
.title-text {
  font-size: 28rpx;
  font-weight: bold;
  color: #333;
}
.more-icon {
  font-size: 32rpx;
  color: #10b981;
  cursor: pointer;
  transition: transform 0.2s;
}
.more-icon:hover {
  transform: translateX(2rpx);
}
.section-content {
  font-size: 26rpx;
  color: #666;
  line-height: 44rpx;
  text-indent: 2em;
  margin-bottom: 16rpx;
  display: block;
}

.quote-box {
  background-color: #eef5ff;
  border-left: 6rpx solid #10b981;
  border-radius: 12rpx;
  padding: 16rpx;
  margin-top: 12rpx;
}
.quote-content {
  font-size: 26rpx;
  color: #666;
  line-height: 40rpx;
  font-style: italic;
}
.quote-source {
  font-size: 24rpx;
  color: #999;
  text-align: right;
  display: block;
  margin-top: 8rpx;
}

.example-item {
  background-color: #eef5ff;
  border-radius: 12rpx;
  padding: 16rpx;
  margin-top: 12rpx;
}
.example-title {
  font-size: 26rpx;
  font-weight: bold;
  color: #333;
  margin-bottom: 8rpx;
  display: block;
}
.example-content {
  font-size: 24rpx;
  color: #666;
  line-height: 40rpx;
  display: block;
}

.tip-box {
  background-color: #f9f9ff;
  border-radius: 12rpx;
  padding: 16rpx;
  margin-top: 12rpx;
}
.tip-title {
  font-size: 26rpx;
  font-weight: bold;
  color: #666;
  margin-bottom: 12rpx;
  display: block;
}
.tip-content {
  font-size: 24rpx;
  color: #666;
  line-height: 40rpx;
  margin-bottom: 8rpx;
  display: block;
}

.synonym-group {
  display: flex;
  flex-wrap: wrap;
  gap: 12rpx;
  margin-top: 12rpx;
}
.synonym-item {
  padding: 6rpx 18rpx;
  background-color: #e6f3ff;
  color: #10b981;
  font-size: 24rpx;
  border-radius: 20rpx;
  cursor: pointer;
  transition: all 0.2s;
}
.synonym-item:hover {
  background-color: #10b981;
  color: white;
  transform: translateY(-2rpx);
}

.exercise-item {
  background-color: #eef5ff;
  border-radius: 12rpx;
  padding: 16rpx;
  margin-top: 12rpx;
  transition: all 0.2s;
}
.exercise-item:hover {
  background-color: #dceeff;
}
.exercise-title {
  font-size: 26rpx;
  font-weight: bold;
  color: #333;
  margin-bottom: 8rpx;
  display: block;
}
.exercise-desc {
  font-size: 24rpx;
  color: #666;
  line-height: 40rpx;
  margin-bottom: 12rpx;
  display: block;
}
.exercise-btn {
  font-size: 24rpx;
  color: #10b981;
  text-decoration: underline;
  cursor: pointer;
  display: inline-block;
  transition: color 0.2s;
}
.exercise-btn:hover {
  color: #1d88ff;
}

.work-item {
  background-color: #eef5ff;
  border-radius: 12rpx;
  padding: 20rpx;
  margin-top: 12rpx;
}
.work-title {
  font-size: 26rpx;
  font-weight: bold;
  color: #333;
  margin-bottom: 12rpx;
  display: block;
}
.work-content {
  font-size: 24rpx;
  color: #666;
  line-height: 36rpx;
  margin-bottom: 16rpx;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.work-author {
  display: flex;
  align-items: center;
}
.author-avatar {
  width: 40rpx;
  height: 40rpx;
  border-radius: 50%;
  background-color: #eee;
  margin-right: 12rpx;
  object-fit: cover;
}
.author-info {
  font-size: 22rpx;
  color: #999;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10rpx); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes slideIn {
  from { transform: translateY(20rpx); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
.section:nth-child(1) { animation-delay: 0.1s; }
.section:nth-child(2) { animation-delay: 0.2s; }
.section:nth-child(3) { animation-delay: 0.3s; }
.section:nth-child(4) { animation-delay: 0.4s; }
.section:nth-child(5) { animation-delay: 0.5s; }
.section:nth-child(6) { animation-delay: 0.6s; }
.section:nth-child(7) { animation-delay: 0.7s; }
.section:nth-child(8) { animation-delay: 0.8s; }
</style>