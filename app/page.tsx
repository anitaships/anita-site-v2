"use client";

import Header from "./components/Header";
import Reveal from "./components/Reveal";
import AskBox from "./components/AskBox";
import CursorGlow from "./components/CursorGlow";
import CountUp from "./components/CountUp";
import MyProjects from "./components/MyProjects";
import { useLang } from "./lib/i18n";

const RESOURCES = [
  { value: 5000, suffix: "+", label: "Creator network" },
  { value: 40, suffix: "+", label: "Partner relationships" },
  { value: 43, suffix: "", label: "Self-built AI tools" },
];

const CHANNELS = [
  {
    ch: "Agencies",
    pre: "",
    num: 300,
    suf: "+",
    unit: "users",
    note: "$30K+ subscription from a $1.5K start — ~20× ROI.",
  },
  {
    ch: "KOLs",
    pre: "",
    num: 7,
    suf: "M+",
    unit: "reach",
    note: "1,000+ visits from a single creator collab.",
  },
  {
    ch: "Community",
    pre: "0 → ",
    num: 335,
    suf: "",
    unit: "members",
    note: "11 months · 4 automation SOPs. Runs itself.",
  },
  {
    ch: "Email",
    pre: "30–",
    num: 50,
    suf: "%",
    unit: "open rate",
    note: "2× industry, across the full user base.",
  },
];

const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

export default function Home() {
  const { t } = useLang();
  return (
    <>
      <Header />
      {/* 空间背景：冷调暗底 + 大面积冷白光（掺蓝抗灰）+ 点阵；"活"靠光标交互 */}
      <div aria-hidden className="fixed inset-0 z-0" style={{ background: "var(--bg-base)" }}>
        {/* 底层点阵：极淡铺满 */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, var(--dot) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            opacity: 0.5,
          }}
        />
        {/* 暗角：压四周边（暗色=纯黑 / 白天=浅灰），衬出中心 */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 100% 100% at 50% 40%, transparent 60%, var(--vignette) 100%)",
            opacity: 0.95,
          }}
        />
        {/* 光标聚光 · 点阵：鼠标附近的点变亮（跟随 --mx/--my） */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, var(--dot-spot) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            maskImage:
              "radial-gradient(240px circle at var(--mx, -999px) var(--my, -999px), #000 0%, transparent 72%)",
            WebkitMaskImage:
              "radial-gradient(240px circle at var(--mx, -999px) var(--my, -999px), #000 0%, transparent 72%)",
          }}
        />
      </div>
      <CursorGlow />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[1] opacity-[0.02] mix-blend-overlay"
        style={{ backgroundImage: GRAIN }}
      />
      <main className="relative z-[2] text-ink">
        {/* ───── HERO ───── */}
        <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
          <div className="relative z-10 mx-auto max-w-4xl">
            <Reveal>
              <p className="mb-10 text-base font-medium uppercase tracking-[0.6em] text-muted md:text-lg">
                {t.hero.name}
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="text-6xl font-extrabold leading-[0.98] tracking-[-0.03em] md:text-8xl">
                {t.hero.line1}
                <br />
                <span className="hero-shimmer">{t.hero.line2}</span>
              </h1>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mx-auto mt-9 max-w-2xl text-xl font-normal text-ink md:text-2xl">
                {t.hero.sub}
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="mx-auto mt-4 max-w-2xl text-sm font-light tracking-wide text-faint">
                {t.hero.tagline}
              </p>
            </Reveal>
            <Reveal delay={0.32}>
              <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="/work"
                  className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3 text-sm font-bold text-bg transition-transform duration-300 hover:-translate-y-0.5"
                >
                  {t.hero.cta1}
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
                <a
                  href="/services"
                  className="rounded-full border border-line px-7 py-3 text-sm font-medium text-ink transition-colors duration-300 hover:border-ink"
                >
                  {t.hero.cta2}
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="mt-10">
                <AskBox />
              </div>
            </Reveal>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs tracking-[0.3em] text-faint">
            <span className="inline-block animate-bounce">↓</span>
          </div>
        </section>

        {/* ───── 内容层：磨砂表面 + 上下边界，明显浮在点阵背景之上 ───── */}
        <div className="relative border-y border-[var(--surface-line)] bg-[var(--surface)] backdrop-blur-[3px]">
        {/* ───── MY PROJECTS（替换原 Proof 位置 · 产品突出）───── */}
        <MyProjects />

        {/* ───── WHAT I BRING (自带资源 · 滚动数字) ───── */}
        <section className="mx-auto max-w-5xl px-6 pb-6 pt-24">
          <Reveal>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-faint">
              {t.bring.eyebrow}
            </p>
            <h2 className="mb-8 text-3xl font-extrabold leading-[1.05] tracking-[-0.03em] md:text-5xl">
              {t.bring.h2}
            </h2>
          </Reveal>
          <div className="glass grid grid-cols-3 divide-x divide-[var(--surface-line)] rounded-3xl py-12">
            {RESOURCES.map((r, i) => (
              <Reveal key={r.label} delay={i * 0.08} className="px-4 text-center">
                <CountUp
                  value={r.value}
                  suffix={r.suffix}
                  duration={1.8}
                  className="hero-shimmer block whitespace-nowrap text-4xl font-extrabold tracking-[-0.02em] md:text-5xl"
                />
                <div className="mt-2 text-xs font-light tracking-wide text-muted md:text-sm">
                  {t.bring.resources[i]}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ───── AI-NATIVE (work image: GitHub / 自建工具) ───── */}
        <section className="mx-auto max-w-5xl px-6 pb-32 pt-10">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <Reveal>
              <div>
                <p className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-faint">
                  {t.ai.eyebrow}
                </p>
                <h2 className="text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] md:text-5xl">
                  {t.ai.h2a}
                  <br />
                  {t.ai.h2b}
                </h2>
                <p className="mt-6 text-lg font-light leading-relaxed text-muted">
                  {t.ai.body}
                </p>
                <a
                  href="https://github.com/anitaships"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-bold text-bg transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" />
                  </svg>
                  {t.ai.cta}
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="beam-card overflow-hidden rounded-2xl border border-line bg-[var(--terminal-bg)] shadow-[0_24px_70px_-30px_rgba(0,0,0,0.9)]">
                <div className="flex items-center gap-2 border-b border-line px-4 py-3">
                  <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                  <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                  <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                  <span className="ml-3 font-mono text-xs text-faint">
                    agency-of-one — zsh
                  </span>
                </div>
                <div className="p-5 font-mono text-[13px] leading-relaxed">
                  <p className="text-muted">
                    <span className="text-lemon">❯</span> tree ~/agency-of-one
                  </p>
                  <pre className="mt-3 whitespace-pre-wrap text-muted">
{`├─ strategy/      best-minds · expert-board
├─ content/       scriptwriting · prompt-expert
├─ production/    long-video · subtitle · voice
├─ design/        auto-poster
├─ research/      internet-learning · book-breakdown
├─ intelligence/  tech-dashboard
└─ operations/    daily-report`}
                  </pre>
                  <p className="mt-4 text-faint">
                    <span className="text-ink">16 skills</span> · 7 departments ·
                    one person
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
        </div>
        {/* ───── /内容层 ───── */}

        {/* ───── ABOUT ME (near bottom, Dan Koe style) ───── */}
        <section className="border-t border-line bg-bg-soft">
          <div className="mx-auto max-w-5xl px-6 py-32">
            <Reveal>
              <div className="mb-16 text-center">
                <p className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-faint">
                  {t.about.eyebrow}
                </p>
                <h2 className="text-4xl font-extrabold tracking-[-0.03em] md:text-6xl">
                  {t.about.h2}
                </h2>
                <p className="mt-4 text-lg font-light text-muted">
                  {t.about.sub}
                </p>
              </div>
            </Reveal>
            <div className="grid items-center gap-12 md:grid-cols-[320px_1fr] md:gap-16">
              <Reveal className="flex flex-col items-center">
                <div className="overflow-hidden rounded-full border border-[var(--surface-line)] p-1.5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/anita.jpg"
                    alt="Anita Liu"
                    className="h-64 w-64 rounded-full object-cover md:h-72 md:w-72"
                  />
                </div>
                <div className="mt-7 flex items-center gap-3">
                  <a
                    href="https://www.linkedin.com/in/anita-liu-9a6417362"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-ink hover:text-ink"
                  >
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/anitaships"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-ink hover:text-ink"
                  >
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" />
                    </svg>
                  </a>
                  <a
                    href="mailto:anitaliu0818@gmail.com"
                    aria-label="Email"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-ink hover:text-ink"
                  >
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
                      <path d="m3 6 9 6 9-6" />
                    </svg>
                  </a>
                  <span className="flex h-10 items-center rounded-full border border-line px-4 text-xs font-light text-muted">
                    小红书 · 抖音
                  </span>
                </div>
              </Reveal>
              <Reveal delay={0.12}>
                <div>
                  <h3 className="text-3xl font-extrabold tracking-[-0.02em]">
                    {t.about.h3}
                  </h3>
                  <div className="mt-6 space-y-5 text-lg font-light leading-relaxed text-muted">
                    <p>{t.about.p1}</p>
                    <p>{t.about.p2}</p>
                    <p className="font-normal text-ink">{t.about.p3}</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ───── CTA ───── */}
        <section className="mx-auto max-w-3xl px-6 pb-36 pt-32 text-center">
          <Reveal>
            <h2 className="text-5xl font-extrabold tracking-[-0.03em] md:text-7xl">
              {t.cta.h2}
            </h2>
            <p className="mx-auto mt-7 max-w-md text-lg font-light text-muted">
              {t.cta.sub}
            </p>
            <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:anitaliu0818@gmail.com"
                className="rounded-full bg-ink px-7 py-3 text-sm font-bold text-bg transition-transform duration-300 hover:-translate-y-0.5"
              >
                {t.cta.email}
              </a>
              <a
                href="https://www.linkedin.com/in/anita-liu-9a6417362"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-line px-7 py-3 text-sm font-medium text-ink transition-colors duration-300 hover:border-ink"
              >
                LinkedIn
              </a>
            </div>
          </Reveal>
        </section>

        {/* ───── FOOTER ───── */}
        <footer className="border-t border-line bg-bg-soft">
          <div className="mx-auto max-w-5xl px-6 py-16">
            <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
              <div className="max-w-sm">
                <p className="text-2xl font-bold tracking-[-0.01em]">
                  Anita阿清<span className="text-lemon">.</span>
                </p>
                <p className="mt-4 text-sm font-light leading-relaxed text-muted">
                  {t.footer.tagline}
                </p>
              </div>
              <div className="flex flex-col gap-3 text-sm font-light text-muted">
                <a className="hover:text-ink" href="/">
                  {t.footer.home}
                </a>
                <a className="hover:text-ink" href="/work">
                  {t.footer.work}
                </a>
                <a className="hover:text-ink" href="/services">
                  {t.footer.services}
                </a>
                <a className="hover:text-ink" href="/about">
                  {t.footer.about}
                </a>
              </div>
              <div className="flex flex-col gap-3 text-sm font-light text-muted">
                <a className="hover:text-ink" href="mailto:anitaliu0818@gmail.com">
                  {t.footer.email}
                </a>
                <a
                  className="hover:text-ink"
                  href="https://www.linkedin.com/in/anita-liu-9a6417362"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  className="hover:text-ink"
                  href="https://github.com/anitaships"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <span className="text-faint">小红书 · 抖音 · 公众号</span>
              </div>
            </div>
            <div className="mt-14 border-t border-line pt-6 text-xs font-light text-faint">
              © 2026 Anita Liu · 阿清
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
