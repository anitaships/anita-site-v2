"use client";

import Reveal from "./Reveal";
import SpotlightCard from "./SpotlightCard";
import { useLang } from "../lib/i18n";

export default function MyProjects() {
  const { t } = useLang();
  const PROJECTS = t.projects.items;
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
      <div className="grid gap-4 md:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.1} y={40}>
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
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
