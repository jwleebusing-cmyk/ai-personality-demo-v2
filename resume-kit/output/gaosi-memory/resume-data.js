window.resumeData = {
  basics: {
    name: "李佳蔚",
    intent: "求职意向：AI Native产品体验实习生",
    location: "广州",
    undergraduate: "湖南科技大学 教育学院 应用心理学",
    graduate: "北京师范大学 心理学部 临床与咨询心理",
    graduationYear: "2026",
    email: "jiawei_li2024@163.com",
    phone: "15196794651",
    avatar: "",
    links: [
      { label: "作品集", url: "https://jwleebusing-cmyk.github.io/ai-personality-demo-v2/%E4%BD%9C%E5%93%81%E9%9B%86.html" },
      { label: "Demo", url: "https://jwleebusing-cmyk.github.io/ai-personality-demo-v2/" }
    ]
  },

  sectionTitles: {
    education:    { zh: "教育背景", en: "Education" },
    internships:  { zh: "相关经历", en: "Relevant Experience" },
    projects:     { zh: "AI Native项目", en: "AI Native Projects" },
    skills:       { zh: "技能", en: "Skills" }
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
          label: "用户观察与需求理解",
          text:  "累计60+小时一对一深度对话，训练了从用户碎片化表达中识别真实需求的能力——观察对话如何卡住、哪里让对方不舒服、什么表达方式能让人愿意继续说下去。这种观察用户自然行为、发现问题、提出改进方案的工作模式，和'观察真实用户使用logs→发现哪里卡住→提出优化'的AI Native产品迭代方式结构一致。"
        }
      ]
    }
  ],

  projects: [
    {
      title:  "Mochi · macOS原生应用 — AI Native开发",
      role:   "独立开发与产品设计",
      period: "2026.05-2026.06",
      achievements: [
        {
          label: "需求梳理",
          text: "先把想法全倒出来——要做的东西太多，肯定装不下。列完杀掉一批，剩 11 个模块（日历/日程/随笔/待办/目标/印记/书影音/总览/分析/搜索/塔罗）。决定先做日历和随笔，其他一个一个加。需求没理清不碰代码。"
        },
        {
          label: "AI协作",
          text: "全程 Claude Code。每个功能先把逻辑想清楚再让 AI 写。收到第一版几乎都有问题——说清楚哪儿不对，让它重跑。115 次 commit、62 个 Swift 文件，没有一行是自己写的。但每个设计决策——删哪些功能、用什么交互、什么时候重构——都是自己判断的。"
        },
        {
          label: "设计决策",
          text: "WeekView 从 7 列网格改成垂直卡片流，滚动舒服很多。书影音接豆瓣 API 发现不好用，切到 OpenLibrary+TMDB。塔罗从随机抽牌改成根据当天心情推荐牌面。主题换了五版才定下来。顺手删了几百行废代码和两个没人用的 Service。"
        },
        {
          label: "产出",
          text: "两周，6 个开发日，从零到能跑的原生 macOS 应用。全本地存储，关了网也能用。11 个模块都通了。"
        }
      ]
    },
    {
      title:  "AI人格对话Demo v3 · 从原型到用户验证的完整闭环",
      role:   "独立完成",
      period: "2026.05-2026.06",
      achievements: [
        {
          label: "项目背景",
          text: "想把'AI的说话方式需要被设计'这个想法变成一个面试官和用户可以亲手摸到的原型——观察他们怎么用、哪里觉得舒服、哪里觉得别扭，然后基于真实反馈迭代。不等PRD，自己拆问题、自己做。"
        },
        {
          label: "关键产出",
          text: "（1）设计三套AI对话人格的System Prompt（陪伴型/启发型/协创型），从设计文档裁切为可执行指令——去说明性文字+加字数限制+加行为禁令+加反例对比；（2）做成单文件HTML A/B对比网页，GitHub Pages部署。用户选人格→每轮同时看到标准AI和设计AI回复→必须选一个才能继续聊——把'感觉'变成了可观察的选择行为；（3）4人×21轮用户测试，100%轮次选了人格化AI。当天收集反馈、分析问题、改Prompt、重新上线测试——两轮6次迭代全部在几个小时内完成。整个流程就是'观察用户发现问题→不等别人给方案→自己动手改→立刻验证'的AI Native工作方式。"
        }
      ]
    },
    {
      title:  "AI对话行为评估 · 五维框架",
      role:   "独立完成",
      period: "2026.05",
      achievements: [
        {
          label: "项目背景",
          text: "优化AI对话体验的前提是知道什么算'好'。需要一套能从用户视角系统评估AI回复质量的工具，而不是凭感觉说'这个回复还行'。"
        },
        {
          label: "关键产出",
          text: "（1）收集19条真实用户对AI对话的抱怨→开放性编码→6个聚类主题→三层归因；（2）构建五维评分体系（情绪跟随/意图对齐/表达真实度/对话节奏/人格稳定性），每维1-5分量表+行为锚定——把'对话体验好不好'这个模糊判断变成了五个可独立评分的维度。这套评估框架正是优化AI对话体验（system prompt、surface prompt、默认回复风格）的量化基础。"
        }
      ]
    }
  ],

  skills: [
    {
      label: "AI Native开发",
      text:  "熟练使用Claude Code进行从0到1的产品开发：拆解复杂需求→向AI精准描述任务→验证输出→迭代。一个月内交付macOS原生应用（11模块），Web原型10天上线。能独立完成从想法到可交互原型的全流程。不完全依赖PRD——能自己拆问题、查资料、试方案。"
    },
    {
      label: "AI对话体验设计",
      text:  "具备System Prompt和对话体验优化全流程能力：三套人格Prompt从设计→裁切→测试→上线，含surface prompt风格定义和默认回复行为约束。建立五维评估框架用于量化对话体验质量。"
    },
    {
      label: "用户观察与产品迭代",
      text:  "有真实用户测试经验（4人×21轮A/B测试）和用户反馈质性分析经验（19条编码→归因）。能从用户行为和反馈中发现'哪里卡住、哪里不顺、哪里需要改'。测试当天完成6次迭代的快速闭环能力。"
    },
    {
      label: "前端基础",
      text:  "能独立完成单文件HTML/CSS/JS网页原型的开发与部署（GitHub Pages）。用AI辅助写前端代码，不需要资深工程师也能交付可用产品。理解产品交互和视觉表达。"
    }
  ]
};
