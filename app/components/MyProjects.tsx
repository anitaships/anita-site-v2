"use client";

import Link from "next/link";
import Reveal from "./Reveal";
import SpotlightCard from "./SpotlightCard";
import { useLang } from "../lib/i18n";

function CardLink({
  href,
  className,
  children,
}: {
  href?: string;
  className: string;
  children: React.ReactNode;
}) {
  if (!href) return <div className={className}>{children}</div>;
  if (href.startsWith("/"))
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}

export default function MyProjects() {
  const { t, lang } = useLang();
  const items = t.projects.items as ReadonlyArray<{
    name: string;
    tag: string;
    status: string;
    body: string;
    href?: string;
  }>;
  const [featured, ...rest] = items;
  const more = lang === "zh" ? "了解详情" : "Learn more";

  return (
    <section className="mx-auto max-w-5xl px-6 py-28">
      <Reveal>
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-faint">
          {t.projects.eyebrow}
        </p>
        <h2 className="mb-5 text-3xl font-extrabold leading-[1.05] tracking-[-0.03em] md:text-5xl">
          {t.projects.h2}
        </h2>
        <p className="mb-14 max-w-2xl text-base font-light leading-relaxed text-muted">
          {t.projects.sub}
        </p>
      </Reveal>

      {/* 主推大卡：出海增长服务 */}
      {featured && (
        <Reveal y={40}>
          <CardLink href={featured.href} className="mb-4 block">
            <SpotlightCard className="glass group relative block overflow-hidden rounded-2xl p-8 hover:border-emerald/50 hover:shadow-[0_44px_90px_-28px_rgba(47,174,111,0.55)] md:p-10">
              <div className="relative md:flex md:items-center md:justify-between md:gap-10">
                <div className="md:max-w-2xl">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="h-1 w-6 rounded-full bg-gradient-to-r from-lemon to-emerald" />
                    <span className="rounded-full border border-line px-2.5 py-1 text-[10px] uppercase tracking-[0.15em] text-faint">
                      {featured.status}
                    </span>
                  </div>
                  <h3 className="hero-shimmer inline-block text-2xl font-extrabold tracking-[-0.02em] md:text-4xl">
                    {featured.name}
                  </h3>
                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-faint">
                    {featured.tag}
                  </p>
                  <p className="mt-4 text-sm font-light leading-relaxed text-muted md:text-base">
                    {featured.body}
                  </p>
                </div>
                <span className="mt-6 inline-flex shrink-0 items-center gap-2 text-sm font-bold text-ink transition-transform duration-300 group-hover:translate-x-1 md:mt-0">
                  {more} →
                </span>
              </div>
            </SpotlightCard>
          </CardLink>
        </Reveal>
      )}

      {/* 其余产品 */}
      <div className="grid gap-4 md:grid-cols-3">
        {rest.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.1} y={40}>
            <CardLink href={p.href} className="block h-full">
              <SpotlightCard className="glass group relative flex h-full flex-col overflow-hidden rounded-2xl p-7 hover:border-emerald/50 hover:shadow-[0_44px_90px_-28px_rgba(47,174,111,0.55)]">
                <div className="relative flex h-full flex-col">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="h-1 w-6 rounded-full bg-gradient-to-r from-lemon to-emerald" />
                    <span className="rounded-full border border-line px-2.5 py-1 text-[10px] uppercase tracking-[0.15em] text-faint">
                      {p.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold leading-snug tracking-[-0.01em] text-ink">
                    {p.name}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-faint">
                    {p.tag}
                  </p>
                  <p className="mt-4 text-sm font-light leading-relaxed text-muted">
                    {p.body}
                  </p>
                  {p.href && (
                    <span className="mt-5 text-sm font-bold text-ink opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {more} →
                    </span>
                  )}
                </div>
              </SpotlightCard>
            </CardLink>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
