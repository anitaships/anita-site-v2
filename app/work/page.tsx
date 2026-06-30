import Link from "next/link";
import Header from "../components/Header";
import SpatialBg from "../components/SpatialBg";
import Reveal from "../components/Reveal";
import SpotlightCard from "../components/SpotlightCard";

export const metadata = {
  title: "Work — Anita Liu",
  description:
    "Selected growth and product-operations work: real projects, real numbers.",
};

type Project = {
  metric: string;
  title: string;
  body: string;
};

const ERAS: { tag: string; period: string; role: string; projects: Project[] }[] =
  [
    {
      tag: "Now",
      period: "2025 — Present",
      role: "AI-native cross-border e-commerce SaaS · Growth × Product Ops",
      projects: [
        {
          metric: "$30K ARR",
          title: "Built an agency channel from zero",
          body: "Sourced and landed an education partner channel solo: 300+ signups, ~80% paid conversion, ~$30K ARR from a ~$1.5K start (~20× ROI). Designed the $4-per-signup / $100-per-paid ROI model plus a performance-based deal.",
        },
        {
          metric: "7M+",
          title: "Creator collabs that convert",
          body: "Built a reachable network of thousands of overseas creators. One collaboration drove 7M+ impressions and 1,000+ tracked visits — run with a real conversion funnel, not vanity reach.",
        },
        {
          metric: "0 → 335",
          title: "A Discord that runs itself",
          body: "Grew a community from zero to 335 in 11 months, wired with 4 automation SOPs — welcome flow, intake form, daily-activity push, and a stats bot.",
        },
        {
          metric: "Funnel → product",
          title: "Turned drop-offs into shipped fixes",
          body: "Mapped the full funnel (anonymous → signup → first value → paywall → paid), emailed the paywall drop-offs to learn why, found onboarding gaps and cut features users still wanted — then pushed the fixes to ship, driving upgrades and payments.",
        },
        {
          metric: "43 tools",
          title: "An agency of one",
          body: "Built 43 internal AI tools with Claude Code (git contribution #2 on the team), a Python KOL CRM that replaced a ~$140/mo SaaS stack, and ran a 5-person overseas content team shipping ~150 pieces a month.",
        },
        {
          metric: "30–50%",
          title: "Email that gets opened",
          body: "Resend EDM running at a 30–50% open rate — about 2× industry — across the full user base.",
        },
      ],
    },
    {
      tag: "Before",
      period: "2023 — 2025",
      role: "Manufacturing · Brand, Events & Content",
      projects: [
        {
          metric: "1,800",
          title: "An 1,800-person annual gala, end to end",
          body: "Owned budget, run-of-show, and on-site execution for the company's flagship event of the year.",
        },
        {
          metric: "0 → 1",
          title: "Two channels from scratch",
          body: "Stood up the company's WeChat Official Account and Douyin from zero, and handled brand collateral from design through delivery.",
        },
      ],
    },
    {
      tag: "Always-on",
      period: "Ongoing",
      role: "Building in public",
      projects: [
        {
          metric: "This site",
          title: "Designed & coded with AI",
          body: "This portfolio — built end-to-end with Claude Code: a dark spatial UI and an embedded AI agent that answers recruiters' questions about my work.",
        },
        {
          metric: "4K+",
          title: "Audiences I grew myself",
          body: "Xiaohongshu 1,383 · Douyin 1,219 · WeChat OA 1,400 — content I write, shoot, and ship on my own. I don't just run growth; I'm a creator too.",
        },
      ],
    },
  ];

export default function WorkPage() {
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
                Work
              </p>
              <h1 className="text-5xl font-extrabold leading-[1.0] tracking-[-0.03em] md:text-7xl">
                Selected work.
              </h1>
              <p className="mt-7 max-w-2xl text-lg font-light leading-relaxed text-muted">
                Real projects, real numbers — growth and product operations
                across cross-border AI SaaS, brand &amp; events, and building in
                public. Reverse-chronological, most recent first.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ───── 内容层：时代倒叙时间轴 ───── */}
        <div className="relative border-y border-white/[0.08] bg-white/[0.015] backdrop-blur-[3px]">
          <div className="mx-auto max-w-5xl px-6 py-20">
            {ERAS.map((era) => (
              <div key={era.period} className="mb-24 last:mb-0">
                <Reveal>
                  <div className="mb-10 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <span className="inline-flex items-center gap-2.5">
                      <span className="h-1 w-6 rounded-full bg-gradient-to-r from-lemon to-emerald" />
                      <span className="text-xs font-bold uppercase tracking-[0.25em] text-ink">
                        {era.tag}
                      </span>
                    </span>
                    <span className="text-xs uppercase tracking-[0.2em] text-faint">
                      {era.period}
                    </span>
                    <span className="text-sm font-light text-muted">
                      {era.role}
                    </span>
                  </div>
                </Reveal>
                <div className="grid gap-4 md:grid-cols-2">
                  {era.projects.map((p, i) => (
                    <Reveal key={p.title} delay={i * 0.08} y={40}>
                      <SpotlightCard className="glass group relative h-full overflow-hidden rounded-2xl p-7 hover:border-emerald/50 hover:shadow-[0_44px_90px_-28px_rgba(47,174,111,0.55)]">
                        <div className="relative">
                          <div className="hero-shimmer inline-block text-3xl font-extrabold tracking-[-0.02em] md:text-4xl">
                            {p.metric}
                          </div>
                          <h3 className="mt-3 text-xl font-bold tracking-[-0.01em]">
                            {p.title}
                          </h3>
                          <p className="mt-3 text-sm font-light leading-relaxed text-muted">
                            {p.body}
                          </p>
                        </div>
                      </SpotlightCard>
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ───── CTA ───── */}
        <section className="px-6 py-28">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <h2 className="text-3xl font-extrabold tracking-[-0.03em] md:text-5xl">
                Want this kind of work on your team?
              </h2>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/services"
                  className="rounded-full bg-ink px-7 py-3 text-sm font-bold text-bg transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Work with me
                </Link>
                <Link
                  href="/"
                  className="rounded-full border border-line px-7 py-3 text-sm font-medium text-ink transition-colors duration-300 hover:border-ink"
                >
                  Back home
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}
