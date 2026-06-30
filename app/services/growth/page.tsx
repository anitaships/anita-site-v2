"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "../../components/Header";
import SpatialBg from "../../components/SpatialBg";
import Reveal from "../../components/Reveal";
import SpotlightCard from "../../components/SpotlightCard";
import { useLang } from "../../lib/i18n";

const COPY = {
  en: {
    eyebrow: "Overseas growth service",
    h1a: "A bilingual bridge",
    h1b: "for going global.",
    sub: "I help Chinese brands build their overseas social, creator, and growth systems — from zero. Bilingual, channel-rich, AI-native.",
    forWho: "Who it's for",
    audiences: [
      {
        t: "Cross-border e-commerce brands & sellers",
        d: "TikTok Shop, DTC, independent sites — anyone selling to overseas customers.",
      },
      {
        t: "Education brands going overseas",
        d: "Course and training brands taking their offer to a global audience.",
      },
    ],
    howTitle: "How it works",
    steps: [
      {
        tag: "Start here",
        t: "Diagnosis",
        d: "A focused audit of your overseas growth — channels, content, funnel — ending in a concrete action plan you can run with or without me.",
      },
      {
        tag: "The build",
        t: "Project setup",
        d: "I build the system from zero: channels, a creator / KOL pipeline, community, a content engine, and the automation that keeps it running.",
      },
      {
        tag: "For the right fit",
        t: "Optional gain-share",
        d: "When we both believe in the upside, I'll tie part of my fee to the results we actually hit — skin in the game.",
      },
    ],
    whyTitle: "Why me",
    why: "I've already done this inside a cross-border AI company — and I'm a creator myself. I speak both markets, I bring the channels, and I write my own tools to move fast.",
    proof: [
      { n: "$30K", l: "ARR from a $1.5K start (~20×)" },
      { n: "7M+", l: "reach from one creator collab" },
      { n: "0 → 335", l: "community, runs itself" },
      { n: "43", l: "self-built AI tools" },
    ],
    ctaEyebrow: "Let's talk",
    ctaH2: "Going overseas? Let's build it from zero.",
    ctaSub: "Tell me where you're stuck — I'll tell you the first three moves.",
    wechat: "Add me on WeChat",
    call: "Book a call",
    email: "Email me",
    back: "Back home",
  },
  zh: {
    eyebrow: "出海增长服务",
    h1a: "出海，需要一座",
    h1b: "中英双语的桥。",
    sub: "帮中国品牌把海外社媒、达人、增长系统，从 0 搭通。双语、有渠道、AI 原生。",
    forWho: "适合谁",
    audiences: [
      {
        t: "出海电商品牌 & 卖家",
        d: "TikTok Shop、DTC、独立站——做海外生意的你。",
      },
      {
        t: "出海的教培品牌",
        d: "想把课程 / 培训做到海外用户面前的团队。",
      },
    ],
    howTitle: "怎么合作",
    steps: [
      {
        tag: "从这开始",
        t: "诊断钩子",
        d: "一次聚焦的出海增长体检——渠道、内容、漏斗——最后给你一份能直接落地的行动方案，用不用我都值。",
      },
      {
        tag: "主菜",
        t: "项目制搭建",
        d: "把系统从 0 搭起来：渠道、达人 / KOL 管线、社群、内容引擎，以及让它自动跑起来的自动化。",
      },
      {
        tag: "信得过再加",
        t: "可选对赌",
        d: "当我们都看好结果时，可以把一部分费用绑定到实际跑出来的成绩上——一起担风险。",
      },
    ],
    whyTitle: "为什么是我",
    why: "这件事我已经在一家出海 AI 公司里跑通过——我自己也是内容创作者。我懂两边市场、自带渠道，还会写工具替自己提速。",
    proof: [
      { n: "$30K", l: "从 $1.5K 做到的 ARR（约 20×）" },
      { n: "7M+", l: "单条达人合作曝光" },
      { n: "0 → 335", l: "社群，自运转" },
      { n: "43", l: "自建 AI 工具" },
    ],
    ctaEyebrow: "聊聊",
    ctaH2: "要出海？我们从 0 把它搭起来。",
    ctaSub: "告诉我你卡在哪——我直接告诉你前三步怎么走。",
    wechat: "加我微信",
    call: "预约通话",
    email: "邮件联系",
    back: "返回首页",
  },
} as const;

const WECHAT_ID = "17818310194";
const CALENDLY_URL = "https://calendly.com/anitaliu0818/30min";
const EMAIL = "anitaliu0818@gmail.com";

export default function GrowthServicePage() {
  const { lang } = useLang();
  const c = COPY[lang];
  const [copied, setCopied] = useState(false);

  const copyWechat = () => {
    navigator.clipboard?.writeText(WECHAT_ID).then(
      () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      },
      () => {},
    );
  };

  return (
    <>
      <Header />
      <SpatialBg />
      <main className="relative z-[2] text-ink">
        {/* ───── HERO ───── */}
        <section className="px-6 pb-16 pt-40 md:pt-48">
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-faint">
                {c.eyebrow}
              </p>
              <h1 className="text-4xl font-extrabold leading-[1.02] tracking-[-0.03em] md:text-6xl">
                {c.h1a}
                <br />
                <span className="hero-shimmer">{c.h1b}</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg font-light leading-relaxed text-muted">
                {c.sub}
              </p>
            </Reveal>
          </div>
        </section>

        {/* ───── 内容层 ───── */}
        <div className="relative border-y border-[var(--surface-line)] bg-[var(--surface)] backdrop-blur-[3px]">
          <div className="mx-auto max-w-5xl space-y-24 px-6 py-24">
            {/* 适合谁 */}
            <div>
              <Reveal>
                <p className="mb-8 text-xs font-medium uppercase tracking-[0.3em] text-faint">
                  {c.forWho}
                </p>
              </Reveal>
              <div className="grid gap-4 md:grid-cols-2">
                {c.audiences.map((a, i) => (
                  <Reveal key={a.t} delay={i * 0.1} y={40}>
                    <SpotlightCard className="glass group relative h-full overflow-hidden rounded-2xl p-7 hover:border-emerald/50 hover:shadow-[0_44px_90px_-28px_rgba(47,174,111,0.5)]">
                      <div className="relative">
                        <span className="mb-5 block h-1 w-6 rounded-full bg-gradient-to-r from-lemon to-emerald" />
                        <h3 className="text-xl font-bold leading-snug tracking-[-0.01em] text-ink">
                          {a.t}
                        </h3>
                        <p className="mt-3 text-sm font-light leading-relaxed text-muted">
                          {a.d}
                        </p>
                      </div>
                    </SpotlightCard>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* 怎么合作 · 三步 */}
            <div>
              <Reveal>
                <p className="mb-8 text-xs font-medium uppercase tracking-[0.3em] text-faint">
                  {c.howTitle}
                </p>
              </Reveal>
              <div className="grid gap-4 md:grid-cols-3">
                {c.steps.map((s, i) => (
                  <Reveal key={s.t} delay={i * 0.1} y={40}>
                    <SpotlightCard className="glass group relative flex h-full flex-col overflow-hidden rounded-2xl p-7 hover:border-emerald/50 hover:shadow-[0_44px_90px_-28px_rgba(47,174,111,0.5)]">
                      <div className="relative flex h-full flex-col">
                        <div className="mb-5 flex items-center justify-between">
                          <span className="hero-shimmer text-3xl font-extrabold">
                            0{i + 1}
                          </span>
                          <span className="rounded-full border border-line px-2.5 py-1 text-[10px] uppercase tracking-[0.15em] text-faint">
                            {s.tag}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold tracking-[-0.01em] text-ink">
                          {s.t}
                        </h3>
                        <p className="mt-3 text-sm font-light leading-relaxed text-muted">
                          {s.d}
                        </p>
                      </div>
                    </SpotlightCard>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* 为什么是我 */}
            <div>
              <Reveal>
                <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-faint">
                  {c.whyTitle}
                </p>
                <p className="mb-10 max-w-2xl text-lg font-light leading-relaxed text-muted">
                  {c.why}
                </p>
              </Reveal>
              <div className="glass grid grid-cols-2 gap-y-10 rounded-3xl py-12 md:grid-cols-4">
                {c.proof.map((p, i) => (
                  <Reveal
                    key={p.l}
                    delay={i * 0.08}
                    className="px-5 text-center"
                  >
                    <div className="hero-shimmer text-3xl font-extrabold tracking-[-0.02em] md:text-4xl">
                      {p.n}
                    </div>
                    <div className="mx-auto mt-2 max-w-[10rem] text-xs font-light leading-snug text-muted">
                      {p.l}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ───── 联系 CTA ───── */}
        <section className="px-6 py-28">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-faint">
                {c.ctaEyebrow}
              </p>
              <h2 className="text-3xl font-extrabold tracking-[-0.03em] md:text-5xl">
                {c.ctaH2}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base font-light text-muted">
                {c.ctaSub}
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <button
                  onClick={copyWechat}
                  className="rounded-full bg-ink px-7 py-3 text-sm font-bold text-bg transition-transform duration-300 hover:-translate-y-0.5"
                  title={WECHAT_ID}
                >
                  {copied
                    ? lang === "zh"
                      ? `已复制 ${WECHAT_ID}`
                      : `Copied ${WECHAT_ID}`
                    : `${c.wechat} · ${WECHAT_ID}`}
                </button>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-line px-7 py-3 text-sm font-medium text-ink transition-colors duration-300 hover:border-ink"
                >
                  {c.call}
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="rounded-full border border-line px-7 py-3 text-sm font-medium text-ink transition-colors duration-300 hover:border-ink"
                >
                  {c.email}
                </a>
              </div>
              <div className="mt-10">
                <Link
                  href="/"
                  className="text-sm text-faint transition-colors hover:text-ink"
                >
                  ← {c.back}
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}
