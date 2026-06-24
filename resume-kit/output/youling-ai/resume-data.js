window.resumeData = {
  basics: {
    name: "李佳蔚",
    intent: "求职意向：AI产品经理实习生（内容策略方向）",
    location: "广州·深圳·北京",
    undergraduate: "湖南科技大学 教育学院 应用心理学",
    graduate: "北京师范大学 心理学部 临床与咨询心理",
    graduationYear: "2026",
    email: "jiawei_li2024@163.com",
    phone: "15196794651",
    avatar: "",
    links: [
      { label: "作品集", url: "https://jwleebusing-cmyk.github.io/ai-personality-demo-v2/%E4%BD%9C%E5%93%81%E9%9B%86.html" },
      { label: "产品案例", url: "https://jwleebusing-cmyk.github.io/ai-personality-demo-v2/AI%E5%AF%B9%E8%AF%9D%E4%BA%BA%E6%A0%BC%E8%AE%BE%E8%AE%A1-%E4%BA%A7%E5%93%81%E6%A1%88%E4%BE%8B.html" },
      { label: "Demo", url: "https://jwleebusing-cmyk.github.io/ai-personality-demo-v2/" }
    ]
  },

  sectionTitles: {
    education:    { zh: "教育背景", en: "Education" },
    internships:  { zh: "实践经历", en: "Experience" },
    projects:     { zh: "AI产品项目", en: "AI Product Projects" },
    skills:       { zh: "专业技能", en: "Skills" }
  },

  education: [
    {
      degree:  "硕士",
      school:  "北京师范大学（985）",
      college: "心理学部",
      major:   "临床与咨询心理",
      period:  "2024.09-2026.06"
    },
    {
      degree:  "本科",
      school:  "湖南科技大学（一本）",
      college: "教育学院",
      major:   "应用心理学",
      period:  "2019.09-2023.06"
    }
  ],

  internships: [
    {
      company: "北师大珠海校区心理健康服务中心",
      role:    "实习心理咨询师",
      period:  "2025.09-至今",
      achievements: [
        {
          label: "深度对话与需求识别",
          text:  "独立承接公益来访者全程咨询，完成初始访谈、个案概念化及干预，累计60+小时深度一对一对话。在实践中建立对'人如何感受一段对话'的系统理解——包括情绪承接方式、需求识别的时机、对话节奏的控制。这些经验直接迁移至后续AI对话行为评估框架中的用户意图三级分类（情感寄托/认知协作/外在校对）。"
        },
        {
          label: "用户评估与风险筛查",
          text:  "担任心理评估员，完成62人次电话初始评估，在15-20分钟内判断来访者困扰严重程度、紧急风险等级及适配咨询师方向，评估准确率达团队平均水平以上。"
        }
      ]
    }
  ],

  projects: [
    {
      title:  "AI人格对话Demo v3 · 可交互A/B原型",
      role:   "独立完成",
      period: "2026.05-2026.06",
      achievements: [
        {
          label: "项目背景",
          text: "为验证'AI的对话姿态可以通过Prompt设计显著改善'这一假设，需要将设计原则转化为面试官和用户可直接体验的原型。目标：让用户在A/B对比中自然暴露偏好，而非通过问卷评价。"
        },
        {
          label: "关键产出",
          text: "（1）设计三套AI对话人格System Prompt（陪伴型/启发型/协创型），每套含风格定义、行为约束、风险处理和输出格式，从设计文档裁剪为可执行指令（去说明性文字+加字数硬限制+加行为禁令+加反例对比）；（2）做成单文件HTML A/B对比网页（GitHub Pages部署）：用户选人格→每轮同时看到标准AI和设计AI回复→必须选一个才能继续聊；（3）4人×21轮用户测试，100%轮次选择了人格化AI。基于反馈在测试当天完成两轮6次迭代。"
        }
      ]
    },
    {
      title:  "AI对话行为评估 · 五维框架与LLM-as-a-Judge",
      role:   "独立完成",
      period: "2026.05",
      achievements: [
        {
          label: "项目背景",
          text: "当前大模型对话评估缺乏系统性的、从用户视角出发的评分体系。需要一套能从'用户感受'角度量化AI回复质量的评估工具。"
        },
        {
          label: "关键产出",
          text: "（1）收集19条公开用户对AI对话的抱怨→开放性编码→轴向编码→6个聚类主题→三层归因（意图错判/根因失效/体验症状）；（2）构建五维评分体系（情绪跟随/意图对齐/表达真实度/对话节奏/人格稳定性），每维1-5分量表+行为锚定；（3）编写可运行LLM-as-a-Judge自动评分Prompt，独立于用户投票做交叉验证。"
        }
      ]
    },
    {
      title:  "Mochi · macOS原生应用 — AI Native开发",
      role:   "独立开发与产品设计",
      period: "2026.05-2026.06",
      achievements: [
        { label: "需求梳理", text: "先把想法全倒出来，列完杀掉一批。剩 11 个模块（日历/日程/随笔/待办/目标/印记/书影音/总览/分析/搜索/塔罗）。决定先做日历和随笔，其他一个一个加。需求没理清不碰代码。" },
        { label: "AI协作", text: "全程 Claude Code。115 次 commit、62 个 Swift 文件，没有一行是自己写的——但每个设计决策是自己的。收到第一版几乎都有问题，标出不对的地方，让它重跑。以日历为例：拖拽手感和时间轴滚动方式来回改了七八版才调对。" },
        { label: "设计决策", text: "WeekView 从网格改成垂直卡片流。书影音从豆瓣切 OpenLibrary+TMDB。主题换了五版。塔罗从随机抽牌改成根据心情推荐牌面。删了几百行废代码。" },
        { label: "产出", text: "两周，6 个开发日，从零到能跑的原生 macOS 应用。全本地存储，11 个模块都通了。" }
      ]
    },
    {
      title:  "AI情感陪伴 · 策略备忘录",
      role:   "独立完成",
      period: "2026.05",
      achievements: [
        {
          label: "项目背景",
          text: "AI正在改变内容生产的底层逻辑。需要从'内容如何被生产、消费和传播'的视角，系统分析AI在内容赛道的机会和边界。"
        },
        {
          label: "关键产出",
          text: "（1）从人口结构、消费趋势、技术演化三个维度，构建AI情感陪伴赛道的结构性分析框架，梳理19条数据源并标注信度分级（国家统计局/券商研报/财报/媒体报道），输出策略备忘录；（2）提炼产品方向判断：在场感＞多角色人格系统＞从准确率到情绪调节效果。该分析框架可迁移至'内容×AI'场景：通过数据拆解→用户洞察→产品方向判断的链路，将模糊的行业判断转化为可讨论的产品假设。"
        }
      ]
    }
  ],

  skills: [
    {
      label: "AI对话设计",
      text:  "具备从用户反馈编码→评估框架→System Prompt设计→原型A/B测试→迭代的完整AI对话行为设计能力。实际完成三套可执行人格Prompt + 4人21轮用户验证 + 两轮产品迭代。"
    },
    {
      label: "用户研究",
      text:  "掌握开放性编码、轴向编码、聚类分析等质性研究方法；有真实用户访谈（咨询60h+评估62人次）和用户反馈编码经验；能从原始反馈中结构化提炼产品优化方向。"
    },
    {
      label: "AI工具与Prompt工程",
      text:  "熟练使用DeepSeek/Claude/GPT等大模型；具备上下文工程和提示词工程实战经验（三套可执行System Prompt从设计→裁切→测试→上线）；掌握Claude Code进行AI Native开发——Web原型10天上线，macOS原生应用（11模块）一个月内从零到可运行。能独立完成从原型到可用产品的全流程。"
    },
    {
      label: "内容结构化与文档",
      text:  "具备从碎片化信息中提炼结构化框架的能力（用户反馈→编码聚类→评估维度→产品原则）；具备PRD和策略备忘录撰写经验；熟悉飞书、Notion等协作工具；能独立完成竞品调研并输出有判断的分析结论。"
    }
  ]
};
