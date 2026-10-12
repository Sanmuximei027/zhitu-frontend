<template>
  <div class="essay-detail">
    <div class="nav-bar">
      <span class="nav-back" @click="onBack">←</span>
      <span class="nav-title">范文详情</span>
      <div class="nav-actions">
        <Home class="nav-icon" />
      </div>
    </div>

    <div class="content-scroll">
      <div class="header">
        <div class="title-container">
          <span class="title">{{ essayDetail.title || '文章标题' }}</span>
          <div class="tag">{{ getTagText(essayDetail.tags) }}</div>
        </div>
      </div>

      <div class="author-info">
        <div class="author-left">
          <img class="author-avatar" src="/static/images/student1.jpg">
          <span class="author-name">{{ essayDetail.author || '用户' }}</span>
          <span class="author-grade">| {{ essayDetail.grade_display || '三年级' }}</span>
        </div>
        <div class="author-right">
          <span class="publish-time">{{ essayDetail.date_time || '3天前' }}</span>
          <div class="view-count-container">
            <Eye class="view-icon" />
            <span class="view-count">1,258</span>
          </div>
          <div class="rating">
            <span class="stars">★★★★☆</span>
            <span class="rating-score">4.5</span>
          </div>
        </div>
      </div>

      <div class="content">
        <span 
          v-for="(paragraph, index) in essayParagraphs" 
          :key="index" 
          class="content-text"
        >{{ paragraph }}</span>
      </div>

      <div class="ai-correction">
        <span class="ai-text">查看智能批改</span>
        <ArrowRight class="arrow-icon" />
      </div>

      <div class="highlights">
        <div class="section-title-container">
          <Star class="section-icon" />
          <span class="section-title">写作亮点</span>
        </div>
        <div class="highlight-item">
          <div class="highlight-icon">✓</div>
          <span class="highlight-text">选材独特，通过爸爸用"火酒"治膝盖这一特殊技能，展现爸爸的厉害之处</span>
        </div>
        <div class="highlight-item">
          <div class="highlight-icon">✓</div>
          <span class="highlight-text">细节描写生动，"蓝蓝的火苗"、"飞快地伸手"等动作描写让画面感很强</span>
        </div>
        <div class="highlight-item">
          <div class="highlight-icon">✓</div>
          <span class="highlight-text">情感真挚，从害怕到好奇再到佩服，情感变化自然真实</span>
        </div>
        <div class="highlight-item">
          <div class="highlight-icon">✓</div>
          <span class="highlight-text">首尾呼应，开头点题"爸爸真厉害"，结尾再次强调并升华感情</span>
        </div>
      </div>

      <div class="teacher-comment">
        <div class="teacher-header">
          <img class="teacher-avatar" src="/static/images/teacher.webp">
          <div class="teacher-info">
            <span class="teacher-name">王老师</span>
            <span class="teacher-title">小学语文高级教师 | 10年教龄</span>
          </div>
        </div>
        <div class="comment-content">
          <span class="comment-text">这篇写爸爸的作文选材非常新颖！小作者没有写爸爸辅导作业、做饭等常见内容，而是选择了爸爸用传统方法治膝盖这一独特角度，让人眼前一亮。</span>
          <span class="comment-text">对"火酒"治疗过程的描写特别精彩，从消毒盘子、倒酒点火，到快速沾酒拍膝盖，动作连贯，画面感十足。特别是"蓝蓝的火苗"、"带着热气的火酒"这些细节，让读者仿佛亲眼看到了整个过程。</span>
          <span class="comment-text">情感表达也很自然，从开始的害怕到后来的佩服，最后升华到对爸爸的爱，层层递进。如果能在文中加入一些爸爸的外貌或神态描写，人物形象会更加丰满。</span>
        </div>
        <div class="comment-level">（等级：优秀）</div>
      </div>

      <div class="writing-tips">
        <div class="section-title-container">
          <Lightbulb class="section-icon" />
          <span class="section-title">写人作文小技巧</span>
        </div>
        <div class="tip-item">
          <span class="tip-title">找"独特技能"</span>
          <span class="tip-desc">每个人都有特别的本领，像爸爸的"火酒疗法"，选这样的材料作文就成功了一半</span>
        </div>
        <div class="tip-item">
          <span class="tip-title">写"过程细节"</span>
          <span class="tip-desc">把人物做事的步骤写清楚，比如爸爸怎么准备、怎么操作，读者就能看懂学不会的"绝活"</span>
        </div>
        <div class="tip-item">
          <span class="tip-title">加"心理变化"</span>
          <span class="tip-desc">写出你看到时的感受，从害怕到佩服，让读者和你一起经历情感变化</span>
        </div>
        <div class="tip-item">
          <span class="tip-title">用"对比手法"</span>
          <span class="tip-desc">像"我碰盘子觉得很烫"和"爸爸不怕烫"的对比，突出爸爸的厉害</span>
        </div>
      </div>

      <div class="recommendations">
        <div class="recommend-header">
          <span class="section-title">同类范文推荐</span>
          <span class="see-more">更多</span>
        </div>
        <div class="recommend-item" v-for="(item, index) in recommendList" :key="index">
          <div class="recommend-title-container">
            <span class="recommend-title">{{ item.title }}</span>
            <div class="recommend-tag">{{ item.tag }}</div>
          </div>
          <span class="recommend-content">{{ item.content }}</span>
        </div>
      </div>

      <div class="classmate-comments">
        <span class="section-title">同学互评</span>
        
        <div class="comment-input-container">
          <img class="user-avatar" src="/static/images/111.jpg">
          <div class="input-wrapper">
            <input class="comment-input" placeholder="分享你的看法..." />
            <Send class="send-icon" />
          </div>
        </div>
        
        <div class="comment-item" v-for="(comment, index) in comments" :key="index">
          <img class="comment-avatar" :src="comment.avatar">
          
          <div class="comment-content">
            <div class="comment-header">
              <span class="comment-author">{{ comment.author }}</span>
              <span class="comment-time">{{ comment.time }}</span>
            </div>
            <span class="comment-text">{{ comment.content }}</span>
            <div class="comment-footer">
              <ThumbsUp :class="{ active: comment.liked }" class="like-icon" />
              <span class="reply-count">{{ comment.replyCount }}</span>
              <span class="reply">回复</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bar">
      <div class="footer-action" @click="toggleLike">
        <ThumbsUp :class="{ active: isLiked }" class="footer-icon" />
        <span class="action-text" :class="{ active: isLiked }">点赞</span>
      </div>
      <div class="footer-action" @click="toggleCollect">
        <Star :class="{ active: isCollected }" class="footer-icon" />
        <span class="action-text" :class="{ active: isCollected }">收藏</span>
      </div>
      <div class="footer-action">
        <Share2 class="footer-icon" />
        <span class="action-text">分享</span>
      </div>
      <div class="imitate-btn">
        <span>仿写这篇作文</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { Home, Eye, ArrowRight, Star, Lightbulb, Send, ThumbsUp, Share2 } from 'lucide-vue-next'
import request from '@/common/request.js'
import { requestWithAuth } from '@/utils/tokenManager'

const router = useRouter()
const route = useRoute()

const isLiked = ref(false)
const isCollected = ref(false)
const essayDetail = ref({})

const essayParagraphs = computed(() => {
  const text = essayDetail.value.text || ''
  return text.split('\n').filter(p => p.trim())
})

const getTagText = (tags) => {
  if (!tags || !Array.isArray(tags)) return '写事'
  if (tags.includes('写景')) return '写景'
  if (tags.includes('写人')) return '写人'
  return tags[0] || '写事'
}

const fetchEssayDetail = async () => {
  const essayId = route.query.id
  if (!essayId) return

  try {
    const data = await request({
      url: `/api/content/detail/${essayId}/`,
      method: 'GET'
    })
    
    if (data && data.success && data.data) {
      essayDetail.value = data.data
    }
  } catch (error) {
    console.error('获取文章详情失败:', error)
  }
}

const checkFavoriteStatus = async () => {
  const essayId = route.query.id
  if (!essayId) return

  try {
    const data = await requestWithAuth({
      url: `/api/users/check_favorite/?source_id=${essayId}&source_type=essay`,
      method: 'GET'
    })
    
    if (data && data.status === 'success' && data.data) {
      isCollected.value = data.data.is_favorited
    }
  } catch (error) {
    console.error('检查收藏状态失败:', error)
  }
}

onMounted(() => {
  fetchEssayDetail()
  checkFavoriteStatus()
})

const toggleLike = () => {
  isLiked.value = !isLiked.value
}

const toggleCollect = async () => {
  const essayId = route.query.id
  if (!essayId) return

  try {
    const data = await requestWithAuth({
      url: '/api/users/toggle_favorite/',
      method: 'POST',
      data: {
        source_type: 'essay',
        source_id: essayId
      }
    })

    if (data && data.status === 'success') {
      isCollected.value = data.action === 'collect'
      alert(data.message)
    } else {
      alert(data?.message || '操作失败')
    }
  } catch (error) {
    console.error('收藏操作失败:', error)
    alert('收藏操作失败')
  }
}

const comments = ref([
  {
    avatar: '/static/images/student2.jpg',
    author: '王小红',
    time: '2天前',
    content: '这个"火酒疗法"好神奇！我爸爸也会用类似的方法，不过是用生姜擦，下次我也要仔细观察写下来',
    replyCount: '12',
    liked: false
  },
  {
    avatar: '/static/images/student3.jpg', 
    author: '张伟',
    time: '1天前',
    content: '写得真生动！特别是爸爸动作那一段，我好像看到了蓝火苗和爸爸飞快的手',
    replyCount: '8',
    liked: true
  }
])

const recommendList = ref([
  {
    title: '爸爸的拿手菜',
    tag: '写人',
    content: '爸爸最拿手的是红烧肉，每次他系着围裙在厨房忙碌时，整个家里都飘着香味...'
  },
  {
    title: '修车高手爸爸',
    tag: '写人',
    content: '爸爸什么车都会修，自行车、电动车坏了，他敲敲打打就能修好，像变魔术一样...'
  },
  {
    title: '爱讲故事的爸爸',
    tag: '写人',
    content: '爸爸肚子里有讲不完的故事，每天晚上睡前都会给我讲他小时候的趣事...'
  }
])

const onBack = () => {
  router.back()
}
</script>

<style lang="scss" scoped>
.essay-detail {
  max-width: 1400px;
  margin: 0 auto;
  min-height: 100vh;
  background: #f8f8f8;
  padding-bottom: 120rpx;

  .nav-bar {
    display: flex;
    align-items: center;
    height: 88rpx;
    padding: 0 30rpx;
    background: #fff;
    border-bottom: 1rpx solid #eee;
    position: sticky;
    top: 0;
    z-index: 100;

    .nav-back {
      font-size: 40rpx;
      color: #333;
      cursor: pointer;
    }
    
    .nav-title {
      flex: 1;
      text-align: center;
      font-size: 36rpx;
      font-weight: bold;
      color: #333;
    }
    
    .nav-actions {
      display: flex;
      align-items: center;
    }
    
    .nav-icon {
      width: 24rpx;
      height: 24rpx;
      color: #666;
      margin-left: 20rpx;
    }
  }

  .content-scroll {
    height: calc(100vh - 208rpx);
    overflow-y: auto;
  }

  .header {
    padding: 40rpx 30rpx 20rpx;
    background: #fff;
    
    .title-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .title {
      font-size: 44rpx;
      font-weight: bold;
      color: #333;
      line-height: 1.4;
      text-align: center;
      flex: 1;
    }
    
    .tag {
      display: inline-block;
      padding: 8rpx 20rpx;
      background: #d9f7eb;
      border-radius: 20rpx;
      font-size: 24rpx;
      color: #10B981;
    }
  }

  .author-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20rpx 30rpx;
    background: #fff;
    border-bottom: 1rpx solid #f0f0f0;
    
    .author-left {
      display: flex;
      align-items: center;
      
      .author-avatar {
        width: 60rpx;
        height: 60rpx;
        border-radius: 50%;
        background: #ddd;
        margin-right: 15rpx;
      }
      
      .author-name {
        font-size: 28rpx;
        color: #333;
        font-weight: 500;
      }
      
      .author-grade {
        font-size: 24rpx;
        color: #999;
        margin-left: 10rpx;
      }
    }
    
    .author-right {
      display: flex;
      align-items: center;
      gap: 20rpx;
      
      .publish-time {
        font-size: 24rpx;
        color: #999;
      }
      
      .view-count-container {
        display: flex;
        align-items: center;
        
        .view-icon {
          width: 14rpx;
          height: 14rpx;
          color: #999;
        }
        
        .view-count {
          font-size: 24rpx;
          color: #999;
          margin-left: 6rpx;
        }
      }
      
      .rating {
        display: flex;
        align-items: center;
        
        .stars {
          font-size: 24rpx;
          color: #FFD700;
          margin-right: 8rpx;
        }
        
        .rating-score {
          font-size: 24rpx;
          color: #FF9500;
        }
      }
    }
  }

  .content {
    padding: 30rpx;
    background: #fff;
    line-height: 1.8;
    
    .content-text {
      font-size: 30rpx;
      color: #333;
      line-height: 1.6;
      display: block;
      margin-bottom: 20rpx;
      text-indent: 2em;
    }
  }

  .ai-correction {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30rpx;
    background: #fff;
    border-top: 1rpx solid #f0f0f0;
    
    .ai-text {
      font-size: 28rpx;
      color: #10B981;
      margin-right: 10rpx;
    }
    
    .arrow-icon {
      width: 16rpx;
      height: 16rpx;
      color: #10B981;
    }
  }

  .highlights {
    padding: 30rpx;
    background: #fff;
    margin-top: 20rpx;
    
    .section-title-container {
      display: flex;
      align-items: center;
      margin-bottom: 20rpx;
      
      .section-icon {
        width: 20rpx;
        height: 20rpx;
        color: #FFD700;
        margin-right: 10rpx;
      }
      
      .section-title {
        font-size: 32rpx;
        font-weight: bold;
        color: #333;
      }
    }
    
    .highlight-item {
      display: flex;
      align-items: flex-start;
      margin-bottom: 15rpx;
      
      .highlight-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36rpx;
        height: 36rpx;
        background: #52c41a;
        border-radius: 50%;
        color: #fff;
        font-size: 20rpx;
        margin-right: 15rpx;
        flex-shrink: 0;
        margin-top: 4rpx;
      }
      
      .highlight-text {
        font-size: 28rpx;
        color: #666;
        line-height: 1.8;
        flex: 1;
      }
    }
  }

  .teacher-comment {
    padding: 30rpx;
    background: #fff;
    margin-top: 20rpx;
    
    .teacher-header {
      display: flex;
      align-items: center;
      margin-bottom: 20rpx;
      
      .teacher-avatar {
        width: 80rpx;
        height: 80rpx;
        border-radius: 50%;
        background: #ddd;
        margin-right: 20rpx;
      }
      
      .teacher-info {
        display: flex;
        flex-direction: column;
        
        .teacher-name {
          font-size: 28rpx;
          font-weight: bold;
          color: #333;
          margin-bottom: 5rpx;
        }
        
        .teacher-title {
          font-size: 24rpx;
          color: #999;
        }
      }
    }
    
    .comment-content {
      background-color: #d9f7eb;
      padding: 20rpx;
      border-radius: 12rpx;
      margin-bottom: 15rpx;
    }
    
    .comment-text {
      font-size: 28rpx;
      color: #333;
      line-height: 1.6;
      display: block;
      margin-bottom: 15rpx;
      text-indent: 2em;
    }
    
    .comment-level {
      font-size: 26rpx;
      color: #10B981;
      font-weight: 500;
      margin-top: 15rpx;
    }
  }

  .writing-tips {
    padding: 30rpx;
    background: #fff;
    margin-top: 20rpx;
    
    .section-title-container {
      display: flex;
      align-items: center;
      margin-bottom: 20rpx;
      
      .section-icon {
        width: 20rpx;
        height: 20rpx;
        color: #FFD700;
        margin-right: 10rpx;
      }
      
      .section-title {
        font-size: 32rpx;
        font-weight: bold;
        color: #333;
      }
    }
    
    .tip-item {
      background: #FFF9E6;
      border-radius: 12rpx;
      padding: 25rpx;
      margin-bottom: 20rpx;
      
      .tip-title {
        font-size: 28rpx;
        font-weight: bold;
        color: #333;
        display: block;
        margin-bottom: 10rpx;
      }
      
      .tip-desc {
        font-size: 26rpx;
        color: #666;
        line-height: 1.6;
        display: block;
      }
    }
  }

  .recommendations {
    padding: 30rpx;
    background: #fff;
    margin-top: 20rpx;
    
    .recommend-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20rpx;
      
      .section-title {
        font-size: 32rpx;
        font-weight: bold;
        color: #333;
      }
      
      .see-more {
        font-size: 26rpx;
        color: #10B981;
      }
    }
    
    .recommend-item {
      border: 1rpx solid #eee;
      border-radius: 12rpx;
      padding: 25rpx;
      margin-bottom: 20rpx;
      
      .recommend-title-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10rpx;
        
        .recommend-title {
          font-size: 28rpx;
          font-weight: bold;
          color: #333;
        }
        
        .recommend-tag {
          display: inline-block;
          padding: 4rpx 12rpx;
          background: #d9f7eb;
          border-radius: 12rpx;
          font-size: 22rpx;
          color: #10B981;
        }
      }
      
      .recommend-content {
        font-size: 26rpx;
        color: #666;
        line-height: 1.6;
        display: block;
      }
    }
  }

  .classmate-comments {
    padding: 30rpx;
    background: #fff;
    margin-top: 20rpx;
    margin-bottom: 20rpx;
    
    .section-title {
      font-size: 32rpx;
      font-weight: bold;
      color: #333;
      margin-bottom: 20rpx;
      display: block;
    }
    
    .comment-input-container {
      display: flex;
      align-items: center;
      margin-bottom: 30rpx;
      
      .user-avatar {
        width: 70rpx;
        height: 70rpx;
        border-radius: 50%;
        background: #ddd;
        margin-right: 20rpx;
        flex-shrink: 0;
      }
      
      .input-wrapper {
        flex: 1;
        position: relative;
        display: flex;
        align-items: center;
        
        .comment-input {
          flex: 1;
          height: 70rpx;
          background: #d9f7eb;
          border-radius: 35rpx;
          padding: 0 80rpx 0 30rpx;
          font-size: 26rpx;
          color: #333;
          border: none;
          outline: none;
          
          &::placeholder {
            color: #999;
          }
        }
        
        .send-icon {
          width: 20rpx;
          height: 20rpx;
          position: absolute;
          right: 20rpx;
          background: #10B981;
          padding: 8rpx;
          border-radius: 50%;
          color: #fff;
        }
      }
    }
    
    .comment-item {
      display: flex;
      align-items: flex-start;
      border-bottom: 1rpx solid #f0f0f0;
      padding: 25rpx 0;
      
      &:last-child {
        border-bottom: none;
      }
      
      .comment-avatar {
        width: 80rpx;
        height: 80rpx;
        border-radius: 50%;
        background: #ddd;
        margin-right: 20rpx;
        flex-shrink: 0;
      }
      
      .comment-content {
        flex: 1;
        
        .comment-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10rpx;
          
          .comment-author {
            font-size: 28rpx;
            font-weight: bold;
            color: #333;
          }
          
          .comment-time {
            font-size: 24rpx;
            color: #999;
          }
        }
        
        .comment-text {
          font-size: 26rpx;
          color: #333;
          line-height: 1.6;
          display: block;
          margin-bottom: 10rpx;
        }
        
        .comment-footer {
          display: flex;
          align-items: center;
          gap: 15rpx;
          
          .like-icon {
            width: 18rpx;
            height: 18rpx;
            color: #666;
            cursor: pointer;
            
            &.active {
              color: #10B981;
            }
          }
          
          .reply-count {
            font-size: 24rpx;
            color: #999;
          }
          
          .reply {
            font-size: 24rpx;
            color: #10B981;
          }
        }
      }
    }
  }

  .footer-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100rpx;
    background: #fff;
    border-top: 1rpx solid #eee;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 20rpx;
    
    .footer-action {
      display: flex;
      flex-direction: column;
      align-items: center;
      
      .footer-icon {
        width: 24rpx;
        height: 24rpx;
        color: #666;
        
        &.active {
          color: #10B981;
        }
      }
      
      .action-text {
        font-size: 22rpx;
        color: #666;
        margin-top: 5rpx;
        
        &.active {
          color: #10B981;
        }
      }
    }
    
    .imitate-btn {
      background: #10B981;
      color: #fff;
      padding: 20rpx 40rpx;
      border-radius: 50rpx;
      font-size: 28rpx;
      font-weight: 500;
      cursor: pointer;
    }
  }
}
</style>