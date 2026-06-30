import Header from "./components/Header";
import Reveal from "./components/Reveal";

const CAPABILITIES = [
  {
    n: "01",
    t: "Growth",
    sub: "Acquire → Convert → Retain",
    body: "Turn a cold channel into a positive-ROI business, from zero.",
  },
  {
    n: "02",
    t: "Product Ops",
    sub: "Carry the user's voice back to the product",
    body: "Turn real usage feedback into the product's next move.",
  },
];

const RESOURCES = [
  {
    pre: "Overseas ",
    hi: "KOL network",
    post: "",
    d: "Thousands of creators, reachable directly.",
  },
  {
    pre: "Cross-border ",
    hi: "partnerships",
    post: "",
    d: "Agencies, channels, co-branded courses — all proven.",
  },
  {
    pre: "Self-built ",
    hi: "AI automation",
    post: "",
    d: "Machines handle the repetitive work; I make the calls.",
  },
  {
    pre: "",
    hi: "Social & community",
    post: ", from zero",
    d: "Stood up from scratch, still running.",
  },
];

const CHANNELS = [
  {
    ch: "Agencies",
    big: "300+",
    unit: "users",
    note: "$30K+ subscription from a $1.5K start — ~20× ROI.",
  },
  {
    ch: "KOLs",
    big: "7M+",
    unit: "reach",
    note: "1,000+ visits from a single creator collab.",
  },
  {
    ch: "Community",
    big: "0 → 335",
    unit: "members",
    note: "11 months · 4 automation SOPs. Runs itself.",
  },
  {
    ch: "Email",
    big: "30–50%",
    unit: "open rate",
    note: "2× industry, across the full user base.",
  },
];

const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

export default function Home() {
  return (
    <>
      <Header />
      {/* 空间背景：近黑 + 顶部白光 + 点阵 + 暗角（黑白光雾分层；绿色只做强调） */}
      <div aria-hidden className="fixed inset-0 z-0" style={{ background: "#0a0a0c" }}>
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 8%, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.06) 35%, transparent 62%), radial-gradient(circle 40% at 85% 12%, rgba(255,255,255,0.07), transparent 50%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.1) 0.8px, transparent 0.8px)",
            backgroundSize: "23px 23px",
            maskImage:
              "radial-gradient(ellipse 120% 85% at 50% 14%, #000 28%, transparent 82%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 120% 85% at 50% 14%, #000 28%, transparent 82%)",
          }}
        />
      </div>
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
                Anita Liu
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="text-6xl font-extrabold leading-[0.98] tracking-[-0.03em] md:text-8xl">
                I build order
                <br />
                out of chaos.
              </h1>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mx-auto mt-9 max-w-2xl text-xl font-normal text-ink md:text-2xl">
                Cross-border user growth × product operations.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="mx-auto mt-4 max-w-2xl text-sm font-light tracking-wide text-faint">
                A liberal-arts major who writes her own AI tools — bilingual,
                AI-native.
              </p>
            </Reveal>
            <Reveal delay={0.32}>
              <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="/work"
                  className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3 text-sm font-bold text-bg transition-transform duration-300 hover:-translate-y-0.5"
                >
                  See my work
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
                <a
                  href="/services"
                  className="rounded-full border border-line px-7 py-3 text-sm font-medium text-ink transition-colors duration-300 hover:border-ink"
                >
                  Work with me
                </a>
              </div>
            </Reveal>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs tracking-[0.3em] text-faint">
            <span className="inline-block animate-bounce">↓</span>
          </div>
        </section>

        {/* ───── PROOF / RESULTS ───── */}
        <section id="proof" className="border-y border-line">
          <div className="mx-auto max-w-5xl px-6 py-24">
            <Reveal>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-faint">
                Proof
              </p>
              <h2 className="mb-14 text-4xl font-extrabold tracking-[-0.03em] md:text-5xl">
                Real channels. Real numbers.
              </h2>
            </Reveal>
            {/* 增长 · 分渠道 */}
            <p className="mb-5 text-sm font-light text-muted">
              <span className="font-normal text-ink">Growth, by channel</span> —
              I pull users in from everywhere, then keep them.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {CHANNELS.map((c, i) => (
                <Reveal key={c.ch} delay={i * 0.07}>
                  <div className="glass h-full rounded-2xl p-6">
                    <p className="text-xs uppercase tracking-[0.2em] text-faint">
                      {c.ch}
                    </p>
                    <div className="mt-4 whitespace-nowrap text-3xl font-extrabold tracking-[-0.02em] md:text-4xl">
                      {c.big}
                    </div>
                    <p className="mt-1 text-[11px] font-light uppercase tracking-[0.15em] text-faint">
                      {c.unit}
                    </p>
                    <p className="mt-4 text-sm font-light leading-relaxed text-muted">
                      {c.note}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* 分析 → 产品 的闭环 */}
            <p className="mb-5 mt-16 text-sm font-light text-muted">
              <span className="font-normal text-ink">
                Then I close the loop
              </span>{" "}
              — analyze the funnel, fix the product.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <Reveal>
                <div className="glass h-full rounded-2xl p-8">
                  <p className="text-xs font-medium uppercase tracking-[0.25em] text-faint">
                    Analyze
                  </p>
                  <p className="mt-5 text-lg font-light leading-relaxed text-muted">
                    Mapped the full funnel — anonymous → signup → first value →
                    repeat → paywall → paid. Then emailed the paywall drop-offs to
                    ask <span className="text-ink">why</span>.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="glass h-full rounded-2xl p-8">
                  <p className="text-xs font-medium uppercase tracking-[0.25em] text-faint">
                    Ship
                  </p>
                  <p className="mt-5 text-lg font-light leading-relaxed text-muted">
                    Their answers became product —{" "}
                    <span className="text-ink">
                      fixed onboarding, re-added cut features
                    </span>{" "}
                    users needed — while driving upgrades, payments &amp; credit
                    top-ups.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ───── WHAT I DO ───── */}
        <section className="mx-auto max-w-5xl px-6 py-32">
          <Reveal>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-faint">
              What I do
            </p>
            <h2 className="mb-16 text-4xl font-extrabold leading-[1.02] tracking-[-0.03em] md:text-6xl">
              Bring people in.
              <br />
              Make the product keep them.
            </h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {CAPABILITIES.map((c, i) => (
              <Reveal key={c.t} delay={i * 0.1}>
                <div className="group glass h-full rounded-2xl p-9">
                  <span className="text-sm font-light text-faint">{c.n}</span>
                  <h3 className="mt-3 text-3xl font-bold tracking-[-0.01em]">
                    {c.t}
                  </h3>
                  <p className="mt-2 text-sm font-light text-faint">{c.sub}</p>
                  <p className="mt-6 text-lg font-light leading-relaxed text-muted">
                    {c.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <p className="mt-10 text-center text-sm font-light text-faint">
              Two ends of one loop —{" "}
              <span className="font-normal text-ink">
                growth brings them in, product makes them stay.
              </span>
            </p>
          </Reveal>
        </section>

        {/* ───── WHAT I BRING ───── */}
        <section className="border-y border-line">
          <div className="mx-auto max-w-5xl px-6 py-32">
            <Reveal>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-faint">
                What I bring
              </p>
              <h2 className="mb-16 text-4xl font-extrabold leading-[1.02] tracking-[-0.03em] md:text-6xl">
                I don&apos;t show up alone.
                <br />A network shows up with me.
              </h2>
            </Reveal>
            <div className="grid gap-5 md:grid-cols-2">
              {RESOURCES.map((r, i) => (
                <Reveal key={r.hi} delay={i * 0.08}>
                  <div className="glass h-full rounded-2xl p-9">
                    <h3 className="text-2xl font-bold tracking-[-0.01em]">
                      {r.pre}
                      <span className="accent-breathe">{r.hi}</span>
                      {r.post}
                    </h3>
                    <p className="mt-3 text-sm font-light text-muted">{r.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ───── AI-NATIVE (work image: GitHub / 自建工具) ───── */}
        <section className="mx-auto max-w-5xl px-6 py-32">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <Reveal>
              <div>
                <p className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-faint">
                  AI-native
                </p>
                <h2 className="text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] md:text-5xl">
                  I don&apos;t just use AI.
                  <br />I build with it.
                </h2>
                <p className="mt-6 text-lg font-light leading-relaxed text-muted">
                  43 internal tools, a KOL CRM in Python, automations that run
                  themselves — one person operating like a whole org. It&apos;s
                  open-source on my GitHub.
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
                  View my GitHub
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="overflow-hidden rounded-2xl border border-line bg-[#0a0a0a] shadow-[0_24px_70px_-30px_rgba(0,0,0,0.9)]">
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

        {/* ───── ABOUT ME (near bottom, Dan Koe style) ───── */}
        <section className="border-t border-line bg-bg-soft">
          <div className="mx-auto max-w-5xl px-6 py-32">
            <Reveal>
              <div className="mb-16 text-center">
                <p className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-faint">
                  About me
                </p>
                <h2 className="text-4xl font-extrabold tracking-[-0.03em] md:text-6xl">
                  Who is Anita?
                </h2>
                <p className="mt-4 text-lg font-light text-muted">
                  A liberal-arts mind that ships.
                </p>
              </div>
            </Reveal>
            <div className="grid items-center gap-12 md:grid-cols-[320px_1fr] md:gap-16">
              <Reveal className="flex flex-col items-center">
                <div className="overflow-hidden rounded-full border border-white/15 p-1.5">
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
                    Hey, I&apos;m Anita.
                  </h3>
                  <div className="mt-6 space-y-5 text-lg font-light leading-relaxed text-muted">
                    <p>
                      I run full-funnel user growth &amp; product operations at a
                      cross-border AI e-commerce startup — finding the channels,
                      running the funnel, and keeping users around.
                    </p>
                    <p>
                      A liberal-arts major who codes her own tools: 43 internal
                      AI tools, a KOL CRM I built in Python, and the{" "}
                      <span className="text-ink">#2 git contributor</span> on the
                      team. I turn messy, no-playbook situations into systems
                      that ship.
                    </p>
                    <p className="font-normal text-ink">
                      Off the clock, I sing, dance, write, and draw. I&apos;m the
                      person you bring in when there&apos;s no process yet — and
                      I&apos;ll build one.
                    </p>
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
              Let&apos;s build something.
            </h2>
            <p className="mx-auto mt-7 max-w-md text-lg font-light text-muted">
              Hire me, partner up, or just say hi — it starts here.
            </p>
            <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:anitaliu0818@gmail.com"
                className="rounded-full bg-ink px-7 py-3 text-sm font-bold text-bg transition-transform duration-300 hover:-translate-y-0.5"
              >
                Email me
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
                  Liberal arts + AI. I turn chaos into things that ship.
                </p>
              </div>
              <div className="flex flex-col gap-3 text-sm font-light text-muted">
                <a className="hover:text-ink" href="/">
                  Home
                </a>
                <a className="hover:text-ink" href="/work">
                  Work
                </a>
                <a className="hover:text-ink" href="/services">
                  Services
                </a>
                <a className="hover:text-ink" href="/about">
                  About
                </a>
              </div>
              <div className="flex flex-col gap-3 text-sm font-light text-muted">
                <a className="hover:text-ink" href="mailto:anitaliu0818@gmail.com">
                  Email
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
