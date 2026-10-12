<template>
  <div class="help-center-page">
    <div class="nav-bar">
      <div class="nav-back" @click="goBack">
        <svg class="back-icon" viewBox="0 0 24 24" fill="none" stroke="#333333" stroke-width="2">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
      </div>
      <span class="nav-title">帮助中心</span>
      <div class="nav-placeholder"></div>
    </div>

    <div class="search-section">
      <div class="search-container">
        <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="#999" stroke-width="2">
          <circle cx="11" cy="11" r="8"/>
          <path d="M21 21l-4.35-4.35"/>
        </svg>
        <input 
          class="search-input" 
          placeholder="搜索问题或关键词" 
          v-model="searchKeyword"
        />
        <div class="search-cancel" v-if="searchKeyword" @click="clearSearch">
          <svg viewBox="0 0 24 24" fill="none" stroke="#999" stroke-width="2">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </div>
      </div>
    </div>

    <div class="category-section">
      <div class="category-scroll">
        <div 
          class="category-item" 
          v-for="category in categories" 
          :key="category.id"
          :class="{ active: activeCategory === category.id }"
          @click="selectCategory(category.id)"
        >
          <span>{{ category.name }}</span>
        </div>
      </div>
    </div>

    <div class="faq-list">
      <div class="search-results" v-if="searchKeyword && searchResults.length > 0">
        <div class="section-title">
          <svg class="section-icon" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="M21 21l-4.35-4.35"/>
          </svg>
          <span>搜索结果</span>
          <span class="result-count">共{{ searchResults.length }}条</span>
        </div>
        <div 
          class="faq-item" 
          v-for="(item, index) in searchResults" 
          :key="item.id"
          :class="{ expanded: item.expanded }"
          @click="toggleFaq(item)"
        >
          <div class="faq-header">
            <div class="question-number">{{ index + 1 }}.</div>
            <div class="question-content">
              <span class="question-text">{{ item.question }}</span>
              <div class="question-tags">
                <div class="question-tag">{{ getCategoryName(item.category) }}</div>
              </div>
            </div>
            <svg 
              :class="['expand-icon', { rotated: item.expanded }]"
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="#999" 
              stroke-width="2"
            >
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </div>
          <div class="faq-answer" v-if="item.expanded">
            <div class="answer-header">
              <span class="answer-title">解答</span>
            </div>
            <span class="answer-content">{{ item.answer }}</span>
          </div>
        </div>
      </div>

      <div class="category-faqs" v-else>
        <div class="section-title">
          <svg class="section-icon" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
            <line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
          <span>{{ getCategoryName(activeCategory) }}常见问题</span>
          <span class="faq-count">（{{ filteredFaqs.length }}条）</span>
        </div>
        
        <div 
          class="faq-item" 
          v-for="(item, index) in filteredFaqs" 
          :key="item.id"
          :class="{ expanded: item.expanded }"
          @click="toggleFaq(item)"
        >
          <div class="faq-header">
            <div class="question-number">Q{{ index + 1 }}:</div>
            <div class="question-content">
              <span class="question-text">{{ item.question }}</span>
            </div>
            <svg 
              :class="['expand-icon', { rotated: item.expanded }]"
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="#999" 
              stroke-width="2"
            >
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </div>
          <div class="faq-answer" v-if="item.expanded">
            <div class="answer-header">
              <span class="answer-title">解答</span>
            </div>
            <span class="answer-content">{{ item.answer }}</span>
            <div class="answer-footer" v-if="item.category === 'technical'">
              <span class="answer-tip">💡 如果问题仍未解决，请联系技术支持</span>
            </div>
          </div>
        </div>
      </div>

      <div class="empty-state" v-if="showEmptyState">
        <Search class="empty-icon" />
        <span class="empty-text">未找到相关问题的解答</span>
        <span class="empty-desc">请尝试使用其他关键词搜索，或直接联系客服</span>
        <div class="empty-actions">
          <span class="empty-action" @click="clearSearch">重新搜索</span>
          <span class="empty-divider">|</span>
          <span class="empty-action" @click="contactCustomerService">联系客服</span>
        </div>
      </div>
    </div>

    <div class="contact-section">
      <div class="contact-card">
        <div class="contact-header">
          <svg viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2">
            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/>
            <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
            <line x1="12" y1="19" x2="12" y2="23"/>
            <line x1="8" y1="23" x2="16" y2="23"/>
          </svg>
          <span class="contact-title">需要更多帮助？</span>
        </div>
        <span class="contact-desc">我们的客服团队随时为您服务</span>
        <div class="contact-buttons">
          <button class="contact-btn" @click="contactCustomerService">
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <span>联系客服</span>
          </button>
          <button class="feedback-btn" @click="giveFeedback">
            <svg viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2">
              <path d="M12 19l9 2-9-18-9 18 9-2z"/>
              <path d="M12 16v-8"/>
              <path d="M8 21h8"/>
            </svg>
            <span>意见反馈</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { Search } from 'lucide-vue-next'

const router = useRouter()

const searchKeyword = ref('')
const activeCategory = ref('all')

const categories = ref([
  { id: 'all', name: '全部' },
  { id: 'usage', name: '使用指南' },
  { id: 'correction', name: '批改功能' },
  { id: 'account', name: '账号问题' },
  { id: 'payment', name: '会员服务' },
  { id: 'technical', name: '技术问题' }
])

const faqs = ref([
  {
    id: 1,
    category: 'usage',
    question: '如何上传作文进行批改？',
    answer: '1. 点击首页的"AI批改"按钮\n2. 选择图片上传\n3. 系统会自动识别并开始批改\n4. 批改完成后查看详细报告',
    expanded: false
  },
  {
    id: 2,
    category: 'usage',
    question: '支持哪些格式的作文上传？',
    answer: '目前支持：\n• 图片上传：从电脑选择作文照片\n• 文本输入：手动输入作文内容\n建议使用清晰的照片以获得最佳识别效果',
    expanded: false
  },
  {
    id: 3,
    category: 'correction',
    question: '批改评分标准是什么？',
    answer: '我们的评分系统基于：\n• 语言表达（40%）：词汇丰富度、语句通顺度\n• 内容结构（30%）：段落衔接、逻辑性\n• 创意思想（20%）：观点新颖性、深度\n• 规范格式（10%）：标点、字数等',
    expanded: false
  },
  {
    id: 4,
    category: 'correction',
    question: '批改结果包含哪些内容？',
    answer: '批改报告包含：\n✓ 总体评分（5分制）\n✓ 详细点评\n✓ 写作亮点\n✓ 待改进点\n✓ 老师建议\n✓ 同类范文推荐',
    expanded: false
  },
  {
    id: 5,
    category: 'account',
    question: '如何注册和登录？',
    answer: '注册方式：\n• 手机号注册\n• 微信一键登录\n• 游客体验（功能受限）\n\n登录后可以同步数据、收藏内容等',
    expanded: false
  },
  {
    id: 6,
    category: 'payment',
    question: '会员有哪些特权？',
    answer: '会员享受：\n✨ 无限次批改\n✨ 高级批改报告\n✨ 专属范文库\n✨ 优先客服\n✨ 定期写作课程',
    expanded: false
  },
  {
    id: 7,
    category: 'technical',
    question: '图片识别不准确怎么办？',
    answer: '建议：\n1. 确保光线充足\n2. 保持纸张平整\n3. 对焦清晰\n4. 避免反光和阴影\n5. 如仍不准确，可手动调整识别区域',
    expanded: false
  },
  {
    id: 8,
    category: 'technical',
    question: '如何联系技术支持？',
    answer: '联系方式：\n• 在线客服：9:00-21:00\n• 邮箱：support@zhitu.com\n• 电话：400-123-4567',
    expanded: false
  }
])

const filteredFaqs = computed(() => {
  if (activeCategory.value === 'all') {
    return faqs.value
  }
  return faqs.value.filter(faq => faq.category === activeCategory.value)
})

const searchResults = computed(() => {
  if (!searchKeyword.value) return []
  
  const keyword = searchKeyword.value.toLowerCase()
  return faqs.value.filter(faq => 
    faq.question.toLowerCase().includes(keyword) || 
    faq.answer.toLowerCase().includes(keyword)
  )
})

const showEmptyState = computed(() => {
  return searchKeyword.value && searchResults.value.length === 0
})

const getCategoryName = (categoryId) => {
  const category = categories.value.find(cat => cat.id === categoryId)
  return category ? category.name : '全部'
}

const selectCategory = (categoryId) => {
  activeCategory.value = categoryId
  searchKeyword.value = ''
}

const toggleFaq = (item) => {
  item.expanded = !item.expanded
}

const clearSearch = () => {
  searchKeyword.value = ''
}

const contactCustomerService = () => {
  window.location.href = 'tel:4001234567'
}

const giveFeedback = () => {
  router.push('/pages/profile/feedback')
}

const goBack = () => {
  router.back()
}

const loadHelpData = async () => {
}

onMounted(() => {
  loadHelpData()
})
</script>

<style scoped>
.help-center-page {
  max-width: 1400px;
  margin: 0 auto;
  background-color: #f8f8f8;
  min-height: 100vh;
  padding-bottom: 100px;
}

.nav-bar {
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 15px;
  background: #fff;
  border-bottom: 1px solid #eee;
  position: sticky;
  top: 0;
  z-index: 100;
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
  flex: 1;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.nav-placeholder {
  width: 20px;
}

.search-section {
  padding: 10px 15px;
  background: #fff;
  border-bottom: 1px solid #f0f0f0;
}

.search-container {
  display: flex;
  align-items: center;
  background: #f5f5f5;
  border-radius: 12px;
  padding: 8px 10px;
}

.search-icon {
  width: 10px;
  height: 10px;
  margin-right: 6px;
  flex-shrink: 0;
}

.search-input {
  flex: 1;
  font-size: 14px;
  color: #333;
  height: 20px;
  border: none;
  outline: none;
  background: transparent;
}

.search-cancel {
  padding: 4px;
  margin-left: 6px;
  flex-shrink: 0;
  width: 9px;
  height: 9px;
  cursor: pointer;
}

.category-section {
  padding: 10px 15px;
  background: #fff;
  border-bottom: 1px solid #f0f0f0;
}

.category-scroll {
  display: flex;
  gap: 10px;
  overflow-x: auto;
  white-space: nowrap;
}

.category-item {
  display: inline-block;
  padding: 8px 16px;
  background: #f5f5f5;
  border-radius: 12px;
  font-size: 13px;
  color: #666;
  cursor: pointer;
}

.category-item.active {
  background: rgba(16, 185, 129, 0.1);
  color: #10B981;
  font-weight: 500;
}

.faq-list {
  padding: 10px 0 75px;
}

.section-title {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  font-size: 16px;
  font-weight: bold;
  color: #333;
  gap: 6px;
  padding: 0 15px;
}

.section-icon {
  width: 10px;
  height: 10px;
}

.result-count, .faq-count {
  font-size: 13px;
  color: #999;
  font-weight: normal;
  margin-left: auto;
}

.faq-item {
  background: #fff;
  border-radius: 8px;
  padding: 15px;
  margin: 0 10px 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(16, 185, 129, 0.1);
  transition: all 0.3s ease;
}

.faq-item.expanded {
  border-color: #10B981;
}

.faq-header {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  cursor: pointer;
}

.question-number {
  font-size: 14px;
  font-weight: bold;
  color: #10B981;
  min-width: 20px;
  padding-top: 2px;
}

.question-content {
  flex: 1;
}

.question-text {
  font-size: 15px;
  font-weight: 500;
  color: #333;
  line-height: 1.5;
  display: block;
  margin-bottom: 6px;
}

.question-tags {
  display: flex;
  gap: 5px;
}

.question-tag {
  padding: 2px 6px;
  background: rgba(16, 185, 129, 0.1);
  border-radius: 6px;
  font-size: 11px;
  color: #10B981;
}

.expand-icon {
  padding-top: 2px;
  flex-shrink: 0;
  transition: transform 0.3s ease;
  width: 9px;
  height: 9px;
}

.expand-icon.rotated {
  transform: rotate(180deg);
}

.faq-answer {
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid #f0f7ff;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-5px); }
  to { opacity: 1; transform: translateY(0); }
}

.answer-header {
  margin-bottom: 10px;
}

.answer-title {
  font-size: 13px;
  font-weight: bold;
  color: #10B981;
  padding: 3px 8px;
  background: rgba(16, 185, 129, 0.1);
  border-radius: 6px;
  display: inline-block;
}

.answer-content {
  font-size: 14px;
  color: #666;
  line-height: 1.8;
  white-space: pre-line;
  display: block;
}

.answer-footer {
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px dashed #e0e6ed;
}

.answer-tip {
  font-size: 12px;
  color: #ff9500;
  font-style: italic;
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
  text-align: center;
  margin: 0 auto;
  max-width: 250px;
}

.empty-icon {
  width: 70px;
  height: 70px;
  margin-bottom: 15px;
  opacity: 0.6;
  color: #999;
}

.empty-text {
  font-size: 16px;
  color: #666;
  margin-bottom: 8px;
  font-weight: 500;
}

.empty-desc {
  font-size: 13px;
  color: #999;
  margin-bottom: 20px;
  line-height: 1.6;
}

.empty-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.empty-action {
  font-size: 14px;
  color: #10B981;
  font-weight: 500;
  cursor: pointer;
}

.empty-divider {
  color: #ddd;
}

.search-results .faq-item {
  border-left: 4px solid #ff9500;
}

.search-results .question-number {
  color: #ff9500;
}

.search-results .question-tag {
  background: #fff7e6;
  color: #ff9500;
}

.contact-section {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px 15px;
  background: #fff;
  border-top: 1px solid #eee;
}

.contact-card {
  background: #f8fafc;
  border-radius: 8px;
  padding: 15px;
  text-align: center;
}

.contact-header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 7px;
  gap: 6px;
}

.contact-header svg {
  width: 12px;
  height: 12px;
}

.contact-title {
  font-size: 16px;
  font-weight: bold;
  color: #333;
}

.contact-desc {
  font-size: 13px;
  color: #666;
  margin-bottom: 15px;
  display: block;
}

.contact-buttons {
  display: flex;
  gap: 10px;
  justify-content: center;
}

.contact-btn {
  background: #10B981;
  color: #fff;
  border: none;
  border-radius: 12px;
  padding: 10px 15px;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 4px;
  flex: 1;
  cursor: pointer;
}

.contact-btn svg {
  width: 9px;
  height: 9px;
}

.feedback-btn {
  background: #fff;
  color: #10B981;
  border: 1px solid #10B981;
  border-radius: 12px;
  padding: 10px 15px;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 4px;
  flex: 1;
  cursor: pointer;
}

.feedback-btn svg {
  width: 9px;
  height: 9px;
}

@media (max-width: 375px) {
  .faq-item {
    padding: 12px;
  }
  
  .question-text {
    font-size: 14px;
  }
  
  .answer-content {
    font-size: 13px;
  }
}

.faq-item:active {
  background: #f8faff;
}
</style>
