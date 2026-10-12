<template>
  <Layout>
    <div class="container">
    <!-- 加载态 -->
    <div class="loading-overlay" v-if="loading">
      <Loader2 class="loading-icon" />
      <span class="loading-text">正在获取批改结果...</span>
    </div>

    <!-- 错误态 -->
    <div class="error-container" v-if="hasError && !loading">
      <AlertCircle class="error-icon" />
      <span class="error-text">{{ errorMsg }}</span>
      <button class="retry-btn" @click="handleReupload">返回重新上传</button>
    </div>

    <!-- 内容态（请求成功） -->
    <div v-if="!loading && !hasError">
      <!-- 导航栏 - 横向滚动 -->
      <div class="tab-container">
        <div class="tab-scroll">
          <div class="tab-bar">
            <div
              v-for="(item, index) in tabList"
              :key="index"
              :class="['tab-item', { active: currentTab === index }]"
              @click="switchTab(index)"
            >
              {{ item.name }}
            </div>
          </div>
        </div>
      </div>

      <!-- 内容区域 - 统一外层容器 -->
      <div class="content-wrap">
        <!-- 作文全篇 -->
        <div v-show="currentTab === 0" class="essay-section">
          <div class="section-header">
            <div class="header-icon">
              <span class="header-icon-inner">📄</span>
            </div>
            <div class="header-title">作文原文</div>
          </div>
          
          <!-- 作文全篇 -> essay-section 内的题目区域 -->
          <div class="essay-title" v-if="essayTitle">
            {{ essayTitle }}
          </div>
          <!-- 无题目时显示提示 -->
          <div class="essay-title-empty" v-else>
            未获取到作文题目
          </div>
          
          <!-- 作文内容：判断是否有内容，显示原文/空提示 -->
          <div class="essay-card">
            <!-- 有文章内容：显示原文和修改按钮 -->
            <template v-if="hasEssayContent">
              <div class="essay-content" v-html="essayContent"></div>
              <span class="modify-btn" @click="handleManualModify">
                <Edit3 class="btn-icon" />
                识别有误？手动修改
              </span>
            </template>
            <!-- 无文章内容：显示空提示 -->
            <template v-else>
              <div class="essay-empty-tip">
                <FileText class="empty-icon" />
                <span class="empty-text">未获取到文章内容</span>
              </div>
            </template>
          </div>
        </div>

        <!-- 综合评价 -->
        <div v-show="currentTab === 1" class="eval-section">
          <div class="section-header">
            <div class="header-icon">
              <span class="header-icon-inner">⭐</span>
            </div>
            <div class="header-title">作文综合评价</div>
          </div>
          
          <!-- 评价卡片容器 -->
          <!-- 有文章内容：显示评价卡片 -->
          <template v-if="hasEssayContent">
            <div class="eval-card-group">
              <!-- 总评卡片（添加评分和星星） -->
              <div class="eval-card eval-card-full" :style="{'--card-color': '#42b983'}">
                <div class="eval-card-header1">
                  <!-- 总评标题和图标 -->
                  <div class="header-left">
                    <span class="eval-icon">💬</span>
                    <div class="header-text">总评</div>
                  </div>
                  
                  <!-- 评分和星星（右上角） -->
                  <div class="header-rating">
                    <span class="rating-value">{{ totalScore }}分</span>
                    <div class="stars-container">
                      <span 
                        class="star" 
                        :class="{ 'star-filled': index <= totalScore, 'star-empty': index > totalScore }"
                        v-for="index in 5" 
                        :key="index"
                      >★</span>
                    </div>
                  </div>
                </div>
                <div class="eval-card-content">{{ totalEvaluation }}</div>
              </div>

              <!-- 双列卡片 -->
              <div class="eval-card-grid">
                <div class="eval-card" :style="{'--card-color': '#3498db'}">
                  <div class="eval-card-header">
                    <span class="eval-icon">🎯</span>
                    <div class="header-text">主题</div>
                  </div>
                  <div class="eval-card-content">{{ themeAnalysis }}</div>
                </div>

                <div class="eval-card" :style="{'--card-color': '#9b59b6'}">
                  <div class="eval-card-header">
                    <span class="eval-icon">📋</span>
                    <div class="header-text">结构</div>
                  </div>
                  <div class="eval-card-content">{{ structureAnalysis }}</div>
                </div>

                <div class="eval-card" :style="{'--card-color': '#f1c40f'}">
                  <div class="eval-card-header">
                    <span class="eval-icon">📝</span>
                    <div class="header-text">内容</div>
                  </div>
                  <div class="eval-card-content">{{ contentAnalysis }}</div>
                </div>

                <div class="eval-card" :style="{'--card-color': '#e74c3c'}">
                  <div class="eval-card-header">
                    <span class="eval-icon">📊</span>
                    <div class="header-text">表达</div>
                  </div>
                  <div class="eval-card-content">{{ expressionAnalysis }}</div>
                </div>
              </div>
          
              <div class="eval-card eval-card-full" :style="{'--card-color': '#1abc9c'}">
                <div class="eval-card-header">
                  <span class="eval-icon">💡</span>
                  <div class="header-text">学习建议</div>
                </div>
                <div class="eval-card-content">
                  <!-- 总概括 -->
                  <div class="suggestion-summary">{{ learningSummary }}</div>
                  <!-- 分条建议 -->
                  <div class="suggestion-item" v-for="(item, idx) in learningSuggestionsList" :key="idx">
                    <div class="item-num" :style="{'background-color': 'var(--card-color)'}">{{ idx + 1 }}</div>
                    <div class="item-text">{{ item }}</div>
                  </div>
                </div>
              </div>
            </div>
          </template>
          
          <!-- 无文章内容：显示重新上传提示 -->
          <template v-else>
            <div class="eval-empty-tip">
              <AlertCircle class="empty-icon" />
              <span class="empty-text">请重新上传文章以获取评价</span>
              <button class="reupload-btn" @click="handleReupload">返回重新上传</button>
            </div>
          </template>
        </div>

        <!-- 空页面保持不变 -->
        <div v-show="currentTab === 2" class="comment-section">
          <div class="section-header">
            <div class="header-icon">
              <span class="header-icon-inner">💬</span>
            </div>
            <div class="header-title">分句点评</div>
          </div>
          
          <!-- 分句点评矩形框 -->
          <div class="comment-card">
            <div class="comment-item">
              <div class="original-text" style="font-weight: bold; margin-bottom: 15rpx;">"在所有小动物里，我最想养的就是小狗。"</div>
              <div class="comment-section">
                <span class="comment-label" style="color: #10B981; font-weight: bold; margin-right: 10rpx;">点评：</span>
                <span>简单直接地表明了自己最想养的动物是小狗，情感上很直白地传达出对小狗的喜爱与渴望。</span>
              </div>
              <div class="suggestion-section" style="margin-top: 10rpx;">
                <span class="suggestion-label" style="color: #10B981; font-weight: bold; margin-right: 10rpx;">补充：</span>
                <span>可以稍作修饰，比如 "在各种各样的小动物里，我满心期待最想养的就是小狗"，让情感表达更饱满。</span>
              </div>
            </div>
            
            <div class="comment-divider"></div>
            
            <div class="comment-item">
              <div class="original-text" style="font-weight: bold; margin-bottom: 15rpx;">"我喜欢小狗可爱的外形。它有着柔软的皮毛，眼睛像两颗圆溜溜的黑宝石，还有一条摇来摇去的小尾巴，平时看到主人回家它会高兴地又蹦又跳，仿佛在说：'欢迎回家。'"</div>
              <div class="comment-section">
                <span class="comment-label" style="color: #10B981; font-weight: bold; margin-right: 10rpx;">点评：</span>
                <span>"柔软" 形象写出小狗皮毛的触感，"圆溜溜""黑宝石" 生动描绘出小狗眼睛的模样，"摇来摇去""又蹦又跳" 这些词汇把小狗活泼的姿态展现出来，情感上满是对小狗外形与活泼模样的喜爱。</span>
              </div>
              <div class="suggestion-section" style="margin-top: 10rpx;">
                <span class="suggestion-label" style="color: #10B981; font-weight: bold; margin-right: 10rpx;">补充：</span>
                <span>可增加对小狗其他部位的描写，像 "它有着柔软得像棉花糖似的皮毛，眼睛像两颗圆溜溜、在阳光下闪着光的黑宝石，还有一条像小绒绳似的尾巴，摇来摇去的。平时看到主人回家，它会兴奋地又蹦又跳，小爪子在地上欢快地扒拉着，仿佛在热情地说：'欢迎回家呀！'"，让小狗的形象更鲜活。</span>
              </div>
            </div>
            
            <div class="comment-divider"></div>
            
            <div class="comment-item">
              <div class="original-text" style="font-weight: bold; margin-bottom: 15rpx;">"小狗是人类忠诚的朋友，而且它可以看家护院。只要听到一点点的动静，它就会快速地站起来，仔细观察四周。如果发现敌情，它就会发出'汪汪'的叫声，向主人传递信息。"</div>
              <div class="comment-section">
                <span class="comment-label" style="color: #10B981; font-weight: bold; margin-right: 10rpx;">点评：</span>
                <span>"忠诚" 体现出小狗的品性，"快速""仔细""汪汪" 这些词汇，把小狗警惕、负责的看家护院状态很好地呈现，能感受到对小狗这一优点的认可与赞赏。</span>
              </div>
              <div class="suggestion-section" style="margin-top: 10rpx;">
                <span class="suggestion-label" style="color: #10B981; font-weight: bold; margin-right: 10rpx;">补充：</span>
                <span>细化小狗的动作，"小狗是人类十分忠诚的朋友，而且它特别能看家护院。只要听到一丁点儿细微的动静，它就会'噌'地一下快速站起来，耳朵竖得笔直，眼睛紧紧盯着发出动静的方向，仔细观察着四周。要是发现有陌生的情况，它就会猛地发出'汪汪汪'急促的叫声，急切地向主人传递'有情况'的信息"，突出小狗的机敏。</span>
              </div>
            </div>
            
            <div class="comment-divider"></div>
            
            <div class="comment-item">
              <div class="original-text" style="font-weight: bold; margin-bottom: 15rpx;">"如果我能养一只小狗，我会好好照顾它，做一个有爱心负责任的小主人。"</div>
              <div class="comment-section">
                <span class="comment-label" style="color: #10B981; font-weight: bold; margin-right: 10rpx;">点评：</span>
                <span>"好好照顾""有爱心负责任" 直接表达出自己若养小狗会付出的态度，情感真挚，满是对未来照顾小狗的期待与责任感。</span>
              </div>
              <div class="suggestion-section" style="margin-top: 10rpx;">
                <span class="suggestion-label" style="color: #10B981; font-weight: bold; margin-right: 10rpx;">补充：</span>
                <span>具体说说照顾的方式，"如果我能养一只小狗，我会每天给它准备香喷喷的食物，带它去公园的草地上尽情奔跑玩耍，还会在它生病时，小心翼翼地照顾它，做一个充满爱心、十分负责任的小主人"，让想法更具体。</span>
              </div>
            </div>
          </div>
        </div>
        <div v-show="currentTab === 3" class="polish-section">
          <div class="section-header">
            <div class="header-icon">
              <span class="header-icon-inner">✨</span>
            </div>
            <div class="header-title">润色结果</div>
          </div>
          
          <!-- 润色文章矩形框 -->
          <div class="polish-card">
            <div class="polish-title" style="font-weight: bold; font-size: 32rpx; margin-bottom: 20rpx; text-align: center;">我想养一只小狗</div>
            <div class="polish-content">
              <p style="text-indent: 2em;">在所有小动物里，我最想养的就是小狗啦。</p>
              <p style="text-indent: 2em;">我特别喜欢小狗那可爱的外形。它有着像云朵般柔软的皮毛，摸起来舒服极了；眼睛像两颗圆溜溜的黑宝石，亮晶晶的，仿佛藏着星辰大海；还有一条总是摇来摇去的小尾巴，像个快乐的小鞭子。平时只要看到主人回家，它就会高兴地又蹦又跳，小短腿快速交替，小尾巴摇得像个小风扇，仿佛在热情地说："欢迎回家呀！"</p>
              <p style="text-indent: 2em;">小狗可是人类忠诚的好朋友，而且它还能看家护院。只要听到一点点细微的动静，它就会 "噌" 地一下快速站起来，耳朵竖得直直的，仔细观察着四周。要是发现有什么异常，它就会发出 "汪汪" 的叫声，那叫声响亮又急促，像是在向主人传递 "有情况" 的信号。</p>
              <p style="text-indent: 2em;">如果我能养一只小狗，我一定会好好照顾它。每天给它准备美味的食物，带它去草地上奔跑玩耍，还会温柔地给它梳理毛发。我要做一个有爱心、有责任心的小主人，让小狗成为我最亲密的伙伴。</p>
            </div>
          </div>
        </div>
        <div v-show="currentTab === 4" class="exercise-section">
          <div class="section-header">
            <div class="header-icon">
              <span class="header-icon-inner">📝</span>
            </div>
            <div class="header-title">推荐习题</div>
          </div>

          <!-- 薄弱点提示 -->
          <div class="drill-weak-tip" v-if="weaknessTags.length > 0 && !drillLoading && !drillError">
            根据你的批改结果，重点推荐：{{ weaknessTags.join('、') }}
          </div>

          <!-- 加载中 -->
          <div class="drill-loading" v-if="drillLoading">
            <Loader2 class="loading-icon" />
            <span>推荐习题加载中...</span>
          </div>

          <!-- 加载失败 -->
          <div class="drill-error" v-if="drillError && !drillLoading">
            {{ drillError }}
            <span class="drill-retry" @click="fetchDrills">重试</span>
          </div>

          <!-- 推荐习题（按题型分组，点击可查看答案） -->
          <div class="exercise-card" v-if="!drillLoading && !drillError">
            <div class="exercise-item" v-for="(group, gIndex) in drillGroups" :key="group.type">
              <div class="exercise-title">{{ group.order }}、{{ group.type }}</div>
              <div class="exercise-content">
                <div class="sentence-group" v-for="(item, idx) in group.items" :key="item.id">
                  <div class="original-sentence">{{ idx + 1 }}.{{ fullExpandedId === item.id && item.fullDrill ? item.fullDrill : item.drill }}</div>
                  <div class="modified-sentence" v-if="expandedId === item.id && item.answer">{{ item.answer }}</div>
                  <span class="drill-full-toggle" v-if="isTruncated(item)" @click="toggleFull(item)">
                    {{ fullExpandedId === item.id ? '收起全文' : '展开全文' }}
                  </span>
                  <span class="drill-answer-toggle" @click="toggleAnswer(item)">
                    {{ expandedId === item.id ? '收起答案' : '查看答案' }}
                  </span>
                </div>
              </div>
              <div class="exercise-divider" v-if="gIndex < drillGroups.length - 1"></div>
            </div>
            <div class="drill-empty" v-if="drillItems.length === 0">暂无推荐习题</div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </Layout>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'; 
import { useRouter, useRoute } from 'vue-router';
import Layout from '@/components/Layout/Layout.vue';
import { Loader2, AlertCircle, Edit3, FileText } from 'lucide-vue-next';

const router = useRouter();
const route = useRoute();

const processMessageContent = (content) => {
  if (!content) return '';
  
  let processedContent = String(content);
  
  if (processedContent.trim().startsWith('{ response：') && processedContent.trim().endsWith('}')) {
    processedContent = processedContent.trim().replace(/^\{\s*response：["']?/, '').replace(/["']?\s*\}$/, '');
  }
  
  processedContent = processedContent.replace(/\/n/g, '<br>');
  processedContent = processedContent.replace(/【[^】]*】/g, '');
  processedContent = processedContent.replace(/([^<]|^)([^>\n])\s*([0-9]+\.)/, '$1$2<br>$3');
  processedContent = processedContent.replace(/([^<>])\n([^<>])/g, '$1<br>$2');
  
  return processedContent;
};

const tabList = ref([
  { name: '作文全篇' },
  { name: '综合评价' },
  { name: '分句点评' },
  { name: '润色结果' },
  { name: '推荐习题' },
]);

const currentTab = ref(0);

const essayTitle = ref('');
const essayContent = ref('');
const totalEvaluation = ref('');
const themeAnalysis = ref('');
const structureAnalysis = ref('');
const contentAnalysis = ref('');
const expressionAnalysis = ref('');
const learningSummary = ref('');
const learningSuggestionsList = ref([]);
const totalScore = ref(0);

const loading = ref(false);
const hasError = ref(false);
const errorMsg = ref('');

const handleReupload = () => {
  router.push('/pages/correct/photo');
  uni.showToast({ title: '请重新上传文章', icon: 'none' });
};

const hasEssayContent = computed(() => {
  const hasValidText = !!essayContent.value && essayContent.value.trim() !== '';
  const hasValidEvaluation = [
    totalEvaluation.value,
    themeAnalysis.value,
    structureAnalysis.value,
    contentAnalysis.value,
    expressionAnalysis.value
  ].some(item => !!item && item.trim() !== '');
  
  console.log('hasEssayContent computed:', { hasValidText, hasValidEvaluation, totalScore: totalScore.value });
  
  return hasValidText || hasValidEvaluation || totalScore.value > 0;
});

const submitId = ref('');

const switchTab = (index) => {
  currentTab.value = index;
};

const fetchCorrectionResult = async () => {
  console.log('发起查询，submitId:', submitId.value);
  
  loading.value = true;
  hasError.value = false;
  errorMsg.value = '';

  try {
    if (!submitId.value) {
      throw new Error('缺少提交ID');
    }

    const accessToken = uni.getStorageSync('accessToken');
    
    const response = await fetch('/api/ai_use/haoweilai_ai', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': accessToken ? `Bearer ${accessToken}` : ''
      },
      body: JSON.stringify({
        submit_id: submitId.value
      })
    });

    console.log('HTTP响应状态:', response.status);
    
    if (!response.ok) {
      throw new Error(`请求失败，状态码: ${response.status}`);
    }

    const res = await response.json();
    console.log('接口响应数据:', res);
    
    if (res.status === 'error' || res.code === 'error') {
      throw new Error(res.message || '获取结果失败');
    }
  
    const data = res.data || res;
    console.log('后端返回的业务数据:', data);
    
    if (data.correction_result) {
      let correctionResult = data.correction_result;
      if (typeof correctionResult === 'string') {
        try {
          correctionResult = JSON.parse(correctionResult);
        } catch (e) {
          console.log('correction_result解析失败:', e);
        }
      }
      
      if (correctionResult.code === 300036018) {
        hasError.value = true;
        errorMsg.value = '未识别到作文内容，请重新上传';
        loading.value = false;
        console.log('OCR识别失败，code: 300036018');
        return;
      }
    }
    
    essayTitle.value = data.essay_title || data.title || '';
    
    const rawContent = data.essay_text || data.content || '';
    const paragraphs = rawContent.split(/\r\n|\r|\n/).filter(paragraph => paragraph.trim() !== '');
    const formattedContent = paragraphs.map(paragraph => {
      return `<p style="text-indent: 2em;">${paragraph}</p>`;
    }).join('');
    essayContent.value = formattedContent || '<p style="text-indent: 2em;">未获取到文章内容</p>';
    
    totalEvaluation.value = data.total_comment || data.comment || '';
    themeAnalysis.value = data.theme_comment || data.theme || '';
    structureAnalysis.value = data.organization_comment || data.structure || '';
    contentAnalysis.value = data.content_comment || data.content_analysis || '';
    expressionAnalysis.value = data.expression_comment || data.expression || '';
    
    const totalSuggestionStr = data.total_suggestion || data.suggestion || '';
    const summaryEndIndex = totalSuggestionStr.indexOf('：');
    const summary = summaryEndIndex !== -1 
      ? totalSuggestionStr.slice(0, summaryEndIndex + 1)
      : totalSuggestionStr;
      
    const suggestionsPart = summaryEndIndex !== -1 
      ? totalSuggestionStr.slice(summaryEndIndex + 1)
      : totalSuggestionStr;
    const suggestionsArray = suggestionsPart
      .split(/；|。/)
      .map(item => item.trim().replace(/^\d+\./, ''))
      .filter(item => item);
      
    learningSummary.value = summary;
    learningSuggestionsList.value = suggestionsArray;
    
    totalScore.value = Number(data.total_score) || Number(data.score) || 0;
    
    console.log('数据解析完成:', { 
      essayTitle: essayTitle.value, 
      hasContent: !!essayContent.value, 
      totalScore: totalScore.value 
    });
    
  } catch (error) {
    hasError.value = true;
    errorMsg.value = error.message;
    console.log('接口请求出错:', error);
  } finally {
    loading.value = false;
    console.log('请求结束，loading:', loading.value, 'hasError:', hasError.value);
  }
};

onMounted(() => {
  // history 模式下参数在 route.query / location.search 中；保留 hash 解析以兼容旧链接
  const newSubmitId = route.query.submitId
    || new URLSearchParams(window.location.search).get('submitId')
    || (() => {
      const hash = window.location.hash;
      const queryIndex = hash.indexOf('?');
      const queryString = queryIndex !== -1 ? hash.substring(queryIndex) : '';
      return new URLSearchParams(queryString).get('submitId');
    })();

  submitId.value = newSubmitId || '';
  console.log('获取到的submitId:', submitId.value, 'search:', window.location.search);

  if (submitId.value) {
    fetchCorrectionResult();
  } else {
    hasError.value = true;
    errorMsg.value = '未找到提交记录';
  }

  // 推荐习题：带submitId时按本次批改薄弱点加权，否则按用户最近一次批改
  fetchDrills();
});

const handleManualModify = () => {
  console.log('触发手动修改逻辑');
};

// ============ 推荐习题 ============
const drillItems = ref([]);
const weaknessTags = ref([]);
const drillLoading = ref(false);
const drillError = ref('');
const expandedId = ref(null);
const fullExpandedId = ref(null);
const DRILL_TYPE_ORDER = ['近似字辨析', '病句修改', '词语搭配', '仿写句子', '阅读理解'];

// 按题型分组（组序号与展示顺序一致）
const drillGroups = computed(() => {
  const map = {};
  for (const item of drillItems.value) {
    const t = (item.tags || []).find(tag => DRILL_TYPE_ORDER.includes(tag)) || '其他';
    if (!map[t]) map[t] = [];
    map[t].push(item);
  }
  return DRILL_TYPE_ORDER
    .filter(t => map[t])
    .map((t, i) => ({ type: t, order: i + 1, items: map[t] }));
});

const fetchDrills = async () => {
  drillLoading.value = true;
  drillError.value = '';
  expandedId.value = null;
  fullExpandedId.value = null;
  try {
    const accessToken = uni.getStorageSync('accessToken');
    const params = new URLSearchParams();
    if (submitId.value) params.append('submit_id', submitId.value);
    params.append('limit', '8');
    const response = await fetch(`/api/content/drill/recommend/?${params.toString()}`, {
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
    drillItems.value = res.data.drills || [];
    weaknessTags.value = res.data.weakness_tags || [];
  } catch (e) {
    drillError.value = e.message || '获取推荐习题失败';
  } finally {
    drillLoading.value = false;
  }
};

// 题干是否被后端预览截断（预览上限120字符，达到即可能有更多内容）
const isTruncated = (item) => (item.drill || '').length >= 120;

// 展开/收起全文（首次展开时调详情接口加载完整题干，容器随内容自适应延伸）
const toggleFull = async (item) => {
  if (fullExpandedId.value === item.id) {
    fullExpandedId.value = null;
    return;
  }
  fullExpandedId.value = item.id;
  if (item.fullDrill) return;
  try {
    const accessToken = uni.getStorageSync('accessToken');
    const response = await fetch(`/api/content/drill/detail/${item.id}/`, {
      headers: {
        'Authorization': accessToken ? `Bearer ${accessToken}` : ''
      }
    });
    const res = await response.json();
    item.fullDrill = (res.status === 'success') ? res.data.drill : item.drill;
  } catch (e) {
    item.fullDrill = item.drill;
  }
};

// 展开/收起答案（首次展开时调详情接口加载答案）
const toggleAnswer = async (item) => {
  if (expandedId.value === item.id) {
    expandedId.value = null;
    return;
  }
  expandedId.value = item.id;
  if (item.answer) return;
  try {
    const accessToken = uni.getStorageSync('accessToken');
    const response = await fetch(`/api/content/drill/detail/${item.id}/`, {
      headers: {
        'Authorization': accessToken ? `Bearer ${accessToken}` : ''
      }
    });
    const res = await response.json();
    item.answer = (res.status === 'success') ? res.data.answer : '暂无答案';
  } catch (e) {
    item.answer = '答案加载失败';
  }
};
</script>

<style>
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 24rpx;
  background-color: #f8f9fa;
  min-height: 100vh;
  box-sizing: border-box;
}

.tab-container {
  width: 100%;
  margin-bottom: 32rpx;
  background-color: #fff;
  border-radius: 16rpx;
  padding: 8rpx 16rpx;
  box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.05);
}

.tab-scroll {
  white-space: nowrap;
  width: 100%;
  overflow-x: auto;
  scrollbar-width: none;
}

.tab-scroll::-webkit-scrollbar {
  display: none;
}

.tab-bar {
  display: inline-flex;
  padding: 8rpx 0;
}

.tab-item {
  padding: 16rpx 24rpx;
  font-size: 32rpx;
  margin: 0 8rpx;
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 12rpx;
  color: #666;
}

.tab-item.active {
  color: #10B981;
  font-weight: 600;
  background-color: #d1fae5;
  transform: translateY(0);
}

.content-wrap {
  width: 100%;
  background-color: #fff;
  border-radius: 20rpx;
  padding: 32rpx;
  box-shadow: 0 4rpx 16rpx rgba(0, 0, 0, 0.06);
  box-sizing: border-box;
  overflow: hidden;
}

.section-header {
  display: flex;
  align-items: center;
  margin-bottom: 32rpx;
  padding-bottom: 16rpx;
  border-bottom: 2rpx solid #f0f0f0;
}

.header-icon {
  width: 48rpx;
  height: 48rpx;
  border-radius: 12rpx;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16rpx;
}

.header-icon-inner {
  font-size: 28rpx;
  color: #333;
}

.header-title {
  font-size: 36rpx;
  font-weight: 600;
  color: #333;
}

.essay-section {
  width: 100%;
}

.essay-card {
  width: 100%;
  background-color: #fafafa;
  border-radius: 16rpx;
  padding: 36rpx;
  box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.04);
  position: relative;
  box-sizing: border-box;
}

.essay-title {
  font-size: 32rpx;
  font-weight: 600;
  color: #333;
  text-align: center;
  margin-bottom: 32rpx;
}

.essay-title-empty {
  font-size: 32rpx;
  color: #999;
  text-align: center;
  margin-bottom: 32rpx;
  font-style: italic;
}

.essay-content {
  font-size: 30rpx;
  line-height: 2;
  color: #333;
  margin-bottom: 48rpx;
}

.essay-content p {
  margin: 0 0 20rpx 0;
  line-height: 1.8;
}

.suggestion-summary {
  font-size: 28rpx;
  color: #333;
  margin-bottom: 16rpx;
  line-height: 1.6;
}

.suggestion-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 12rpx;
}

.item-num {
  width: 40rpx;
  height: 40rpx;
  border-radius: 50%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12rpx;
  font-size: 24rpx;
}

.item-text {
  flex: 1;
  font-size: 26rpx;
  color: #666;
  line-height: 1.5;
}

.modify-btn {
  background: transparent;
  border: none;
  box-shadow: none;
  padding: 0;
  margin: 0;
  color: #10B981;
  font-size: 26rpx;
  position: absolute;
  bottom: 24rpx;
  right: 36rpx;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.modify-btn:active {
  color: #059669;
}

.btn-icon {
  width: 22rpx;
  height: 22rpx;
  margin-right: 8rpx;
}

.eval-section {
  width: 100%;
}

.eval-card-group {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24rpx;
  padding: 8rpx 0;
}

.eval-card-full {
  width: 100%;
  box-sizing: border-box;
}

.eval-card-header1 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20rpx;
}

.eval-card-grid {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24rpx;
  box-sizing: border-box;
}

.eval-card {
  background-color: #fafafa;
  border-radius: 16rpx;
  padding: 28rpx;
  box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.04);
  transition: transform 0.2s ease;
  box-sizing: border-box;
  position: relative;
}

.eval-card:hover {
  transform: translateY(-4rpx);
  box-shadow: 0 6rpx 12rpx rgba(0, 0, 0, 0.06);
}

.eval-card-header {
  display: flex;
  align-items: center;
  margin-bottom: 16rpx;
}

.header-text {
  font-size: 32rpx;
  font-weight: 600;
  color: var(--card-color);
}

.header-left {
  display: flex;
  align-items: center;
}

.eval-icon {
  font-size: 28rpx;
  margin-right: 10rpx;
  color: var(--card-color);
}

.header-rating {
  display: flex;
  align-items: center;
  gap: 8rpx;
}

.rating-value {
  font-size: 28rpx;
  font-weight: 600;
  color: var(--card-color);
  min-width: 40rpx;
  text-align: right;
}

.stars-container {
  display: flex;
  gap: 2rpx;
}

.star {
  font-size: 24rpx;
  transition: color 0.3s ease;
}

.star-filled {
  color: #FFD700;
  text-shadow: 0 0 2rpx rgba(0, 0, 0, 0.2);
}

.star-empty {
  color: #ddd;
}

.eval-card-content {
  font-size: 28rpx;
  line-height: 1.8;
  color: #555;
  text-align: justify;
  padding: 0 4rpx;
  word-break: break-word;
}

.suggestion-item .item-num {
  width: 32rpx;
  height: 32rpx;
  font-size: 20rpx;
  margin-right: 16rpx;
  margin-top: 8rpx;
  flex-shrink: 0;
}

.suggestion-item .item-text {
  flex: 1;
  font-size: 28rpx;
  line-height: 1.8;
  color: #555;
  word-break: break-word;
}

.empty-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 400rpx;
  color: #999;
}

.empty-section .empty-text {
  margin-top: 24rpx;
  font-size: 28rpx;
}	

.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24rpx;
}

.loading-icon {
  width: 60rpx;
  height: 60rpx;
  color: #10B981;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.loading-text {
  font-size: 28rpx;
  color: #666;
}

.error-container {
  width: 100%;
  min-height: 400rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24rpx;
  padding: 32rpx;
  box-sizing: border-box;
}

.error-icon {
  width: 50rpx;
  height: 50rpx;
  color: #FF5722;
}

.error-text {
  font-size: 28rpx;
  color: #FF5722;
  text-align: center;
  max-width: 80%;
}

.retry-btn {
  background-color: #10B981;
  color: #fff;
  border-radius: 16rpx;
  padding: 12rpx 32rpx;
  font-size: 26rpx;
  margin-top: 16rpx;
  border: none;
  cursor: pointer;
}

.essay-empty-tip {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300rpx;
  color: #999;
  gap: 20rpx;
}

.empty-icon {
  width: 60rpx;
  height: 60rpx;
}

.essay-empty-tip .empty-text {
  font-size: 28rpx;
}

.eval-empty-tip {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 400rpx;
  color: #666;
  gap: 24rpx;
  padding: 32rpx;
  text-align: center;
}

.eval-empty-tip .empty-text {
  font-size: 28rpx;
  color: #FF5722;
}

.reupload-btn {
  background-color: #FF5722;
  color: #fff;
  border-radius: 16rpx;
  padding: 12rpx 40rpx;
  font-size: 26rpx;
  margin-top: 16rpx;
  border: none;
  cursor: pointer;
}

.comment-section {
  padding: 30rpx;
}

.comment-card {
  background-color: #fff;
  border-radius: 20rpx;
  box-shadow: 0 4rpx 20rpx rgba(0, 0, 0, 0.05);
  padding: 30rpx;
  margin-top: 20rpx;
  border: 2rpx solid #f0f0f0;
}

.comment-item {
  margin-bottom: 25rpx;
}

.comment-item:last-child {
  margin-bottom: 0;
}

.comment-divider {
  height: 2rpx;
  background-color: #f0f0f0;
  margin: 25rpx 0;
}

.comment-section,
.suggestion-section {
  font-size: 28rpx;
  line-height: 1.6;
  color: #333;
}

.original-text {
  font-size: 28rpx;
  word-break: break-word;
}

.polish-section {
  padding: 30rpx;
}

.polish-card {
  background-color: #fff;
  border-radius: 20rpx;
  box-shadow: 0 4rpx 20rpx rgba(0, 0, 0, 0.05);
  padding: 30rpx;
  margin-top: 20rpx;
  border: 2rpx solid #f0f0f0;
}

.polish-content {
  font-size: 28rpx;
  line-height: 1.8;
  color: #333;
}

.polish-content p {
  margin-bottom: 20rpx;
  word-break: break-word;
}

.polish-content p:last-child {
  margin-bottom: 0;
}

.exercise-section {
  padding: 30rpx;
}

.exercise-card {
  background-color: #fff;
  border-radius: 20rpx;
  box-shadow: 0 4rpx 20rpx rgba(0, 0, 0, 0.05);
  padding: 30rpx;
  margin-top: 20rpx;
  border: 2rpx solid #f0f0f0;
}

.exercise-item {
  margin-bottom: 20rpx;
}

.exercise-item:last-child {
  margin-bottom: 0;
}

.exercise-divider {
  height: 2rpx;
  background-color: #f0f0f0;
  margin: 25rpx 0;
}

.exercise-title {
  font-size: 32rpx;
  font-weight: bold;
  color: #333;
  margin-bottom: 20rpx;
}

.exercise-content {
  font-size: 28rpx;
  line-height: 1.6;
  color: #333;
}

.exercise-subtitle {
  font-weight: 600;
  color: #555;
  margin-bottom: 15rpx;
}

.exercise-sentence {
  margin-bottom: 25rpx;
  padding: 15rpx;
  background-color: #f9f9f9;
  border-radius: 10rpx;
  border-left: 4rpx solid #10B981;
}

.sentence-group {
  margin-bottom: 20rpx;
}

.sentence-group:last-child {
  margin-bottom: 0;
}

.original-sentence {
  font-weight: bold;
  margin-bottom: 10rpx;
  color: #333;
}

.modified-sentence {
  margin-left: 30rpx;
  color: #666;
  font-size: 26rpx;
}

.options-group {
  margin-bottom: 25rpx;
}

.options-group:last-child {
  margin-bottom: 0;
}

.question-text {
  font-weight: 600;
  margin-bottom: 15rpx;
  color: #333;
}

.options {
  display: flex;
  flex-direction: column;
  gap: 15rpx;
  margin-left: 30rpx;
}

.option-item {
  padding: 15rpx 20rpx;
  background-color: #f5f5f5;
  border-radius: 10rpx;
  color: #333;
  transition: all 0.3s ease;
}

.option-item:hover {
  background-color: #e6f0ff;
}

.reading-passage {
  margin-bottom: 20rpx;
}

.passage-title {
  font-weight: bold;
  font-size: 28rpx;
  color: #333;
  margin-bottom: 20rpx;
}

.passage-text {
  font-size: 26rpx;
  line-height: 1.6;
  color: #555;
  margin-bottom: 20rpx;
  text-indent: 2em;
}

.question-section {
  margin-top: 20rpx;
}

.question-item {
  margin-bottom: 20rpx;
}

.question-number {
  display: inline-block;
  font-weight: bold;
  margin-right: 10rpx;
  color: #333;
}

.question-section .options {
  margin-top: 10rpx;
  margin-left: 40rpx;
  display: flex;
  flex-direction: column;
  gap: 15rpx;
}

.question-section .option-item {
  padding: 15rpx 20rpx;
  background-color: #f5f5f5;
  border-radius: 10rpx;
  color: #333;
  transition: all 0.3s ease;
}

.model-sentence {
  font-weight: 600;
  margin-bottom: 20rpx;
  color: #333;
  padding: 15rpx;
  background-color: #f9f9f9;
  border-radius: 10rpx;
}

.blank-sentence {
  padding: 15rpx;
  background-color: #fff;
  border: 2rpx dashed #ccc;
  border-radius: 10rpx;
  color: #333;
}

.judge-group {
  display: flex;
  flex-direction: column;
  gap: 20rpx;
  margin-left: 10rpx;
}

.judge-item {
  padding: 15rpx;
  color: #333;
}

/* —— 推荐习题（动态） —— */
.drill-weak-tip {
  margin: 20rpx auto 0;
  width: 670rpx;
  padding: 16rpx 24rpx;
  background: #fff7e6;
  border-radius: 12rpx;
  font-size: 24rpx;
  color: #d48806;
}

.drill-loading {
  margin: 40rpx auto;
  width: 670rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16rpx;
  color: #999;
  font-size: 26rpx;
}

.drill-loading .loading-icon {
  width: 40rpx;
  height: 40rpx;
  animation: drill-spin 1s linear infinite;
}

@keyframes drill-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.drill-error {
  margin: 40rpx auto;
  width: 670rpx;
  text-align: center;
  color: #e74c3c;
  font-size: 26rpx;
}

.drill-retry {
  margin-left: 16rpx;
  color: #10b981;
  text-decoration: underline;
}

.drill-full-toggle {
  display: inline-block;
  margin-top: 12rpx;
  margin-right: 16rpx;
  padding: 6rpx 24rpx;
  background: #ecfdf5;
  border-radius: 20rpx;
  font-size: 22rpx;
  color: #059669;
  font-weight: bold;
}

.drill-answer-toggle {
  display: inline-block;
  margin-top: 12rpx;
  padding: 6rpx 24rpx;
  background: #d9f7eb;
  border-radius: 20rpx;
  font-size: 22rpx;
  color: #10b981;
  font-weight: bold;
}

.drill-empty {
  text-align: center;
  color: #999;
  font-size: 26rpx;
  padding: 40rpx 0;
}
</style>