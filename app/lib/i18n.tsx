"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export const dict = {
  en: {
    nav: { work: "Work", services: "Services", about: "About", contact: "Contact" },
    hero: {
      name: "Anita Liu",
      line1: "I build order",
      line2: "out of chaos.",
      sub: "Cross-border user growth × product operations.",
      tagline:
        "A liberal-arts major who writes her own AI tools — bilingual, AI-native.",
      cta1: "See my work",
      cta2: "Work with me",
    },
    ask: {
      label: "Ask my work",
      placeholder: "Ask me anything about Anita…",
      clear: "Clear ✕",
      error:
        "Sorry, something went wrong. You can reach Anita directly at anitaliu0818@gmail.com.",
      suggestions: [
        "What does Anita do?",
        "Her strongest project?",
        "Good fit for growth ops?",
      ],
    },
    projects: {
      eyebrow: "My projects",
      h2: "I run growth. I also ship products.",
      sub: "Building is how I stay sharp — and a few of these are things you can actually use.",
      items: [
        {
          name: "Life OS",
          tag: "Personal operating system",
          status: "In use daily",
          body: "OKRs, weekly & monthly reviews, and a linked second brain — the system that keeps my life and work actually shipping.",
        },
        {
          name: "This portfolio — as a template",
          tag: "Next.js · dark spatial UI",
          status: "Coming soon",
          body: "The site you're on: built end-to-end with AI, with an embedded agent that answers questions about you. Make it your own in a day.",
        },
        {
          name: "Resume kit + editing",
          tag: "Template + 1:1 service",
          status: "Available",
          body: "The template and story-packaging system I used on my own resume — plus hands-on edits that turn your work into results recruiters read.",
        },
      ],
    },
    bring: {
      eyebrow: "What I bring",
      h2: "I don't show up alone.",
      resources: ["Creator network", "Partner relationships", "Self-built AI tools"],
    },
    ai: {
      eyebrow: "AI-native",
      h2a: "I don't just use AI.",
      h2b: "I build with it.",
      body: "43 internal tools, a KOL CRM in Python, automations that run themselves — one person operating like a whole org. It's open-source on my GitHub.",
      cta: "View my GitHub",
    },
    about: {
      eyebrow: "About me",
      h2: "Who is Anita?",
      sub: "A liberal-arts mind that ships.",
      h3: "Hey, I'm Anita.",
      p1: "I drive cross-border growth — full-funnel: finding the channels, running conversion, keeping users around. I'm at my best in markets with no proven playbook: I get growth working from zero, then turn it into a system that repeats. I don't hand over a strategy deck — I ship the result.",
      p2: "The results are concrete: a cold channel taken from $1.5K to $30K (~20×), a community built from zero that runs itself, email open rates at 2× the industry. When it helps, I'll write my own tools to move faster — but growth is what I deliver.",
      p3: "Need to take something from zero to its first real paying users? Let's talk.",
    },
    cta: {
      h2: "Let's build something.",
      sub: "Hire me, partner up, or just say hi — it starts here.",
      email: "Email me",
      linkedin: "LinkedIn",
    },
    footer: {
      tagline: "Liberal arts + AI. I turn chaos into things that ship.",
      home: "Home",
      work: "Work",
      services: "Services",
      about: "About",
      email: "Email",
    },
  },
  zh: {
    nav: { work: "作品", services: "服务", about: "关于", contact: "联系" },
    hero: {
      name: "Anita Liu",
      line1: "于混沌之中",
      line2: "建立秩序",
      sub: "出海用户增长 × 产品运营",
      tagline: "会自己写 AI 工具的文科生 — 双语 · AI 原生",
      cta1: "看我的作品",
      cta2: "与我合作",
    },
    ask: {
      label: "问问我的经历",
      placeholder: "关于 Anita 随便问…",
      clear: "清空 ✕",
      error:
        "抱歉 出了点问题 可以直接邮件联系 anitaliu0818@gmail.com",
      suggestions: ["Anita 是做什么的", "她最强的项目", "适合做增长运营吗"],
    },
    projects: {
      eyebrow: "我的项目",
      h2: "我做增长 也做产品",
      sub: "做东西让我保持手感 其中几个你现在就能用",
      items: [
        {
          name: "Life OS",
          tag: "个人操作系统",
          status: "每日在用",
          body: "OKR 周复盘月复盘 加一个双链第二大脑 这套系统让我的生活和工作真正落地推进",
        },
        {
          name: "这个作品集 做成模板",
          tag: "Next.js · 深色空间 UI",
          status: "即将上线",
          body: "你正在看的这个站 全程用 AI 搭建 内嵌一个能回答关于你的问题的 agent 一天就能改成你自己的",
        },
        {
          name: "简历套件 + 精修",
          tag: "模板 + 1对1 服务",
          status: "可预约",
          body: "我自己简历用的模板和故事包装方法 加上手把手精修 把你的经历变成 HR 愿意读的结果",
        },
      ],
    },
    bring: {
      eyebrow: "我带来什么",
      h2: "我不是一个人来的",
      resources: ["达人网络", "合作关系", "自建 AI 工具"],
    },
    ai: {
      eyebrow: "AI 原生",
      h2a: "我不止会用 AI",
      h2b: "我用它造东西",
      body: "43 个内部工具 一套 Python 的 KOL CRM 自动跑的流水线 一个人活成一个组织 全部开源在我的 GitHub",
      cta: "看我的 GitHub",
    },
    about: {
      eyebrow: "关于我",
      h2: "Anita 是谁",
      sub: "一个能落地的文科脑",
      h3: "嗨 我是 Anita",
      p1: "我做出海增长 全漏斗 找渠道 跑转化 把用户留下来 擅长在还没有成熟打法的市场里 把增长从 0 跑通 再沉淀成可复制的系统 不交策略 PPT 直接跑出结果",
      p2: "结果实打实 一个冷渠道从 $1.5K 做到 $30K 约 20 倍 从零搭建社群并让它稳定自运转 邮件打开率做到行业两倍 需要时我也会自己写工具替自己提效 但增长才是我交付的核心",
      p3: "需要把一项业务从 0 带到第一批真实付费用户 欢迎找我",
    },
    cta: {
      h2: "一起做点东西吧",
      sub: "招我 合作 或者只是打个招呼 从这里开始",
      email: "邮件联系",
      linkedin: "LinkedIn",
    },
    footer: {
      tagline: "文科 + AI 我把混乱变成能落地的东西",
      home: "首页",
      work: "作品",
      services: "服务",
      about: "关于",
      email: "邮箱",
    },
  },
} as const;

export type Lang = keyof typeof dict;
type Dict = (typeof dict)["en"];

const LangContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
}>({ lang: "en", setLang: () => {}, t: dict.en });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang");
      if (saved === "zh" || saved === "en") setLangState(saved);
    } catch {}
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("lang", l);
    } catch {}
    document.documentElement.lang = l === "zh" ? "zh-CN" : "en";
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t: dict[lang] as Dict }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
