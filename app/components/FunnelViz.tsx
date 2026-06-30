"use client";

import { motion } from "motion/react";

const STAGES = [
  {
    n: "01",
    label: "Acquire",
    note: "agencies · KOLs · social · community",
    w: 100,
  },
  {
    n: "02",
    label: "Convert",
    note: "funnel mapping · paywall · ROI model",
    w: 72,
  },
  { n: "03", label: "Retain", note: "onboarding · email · community", w: 48 },
];

export default function FunnelViz() {
  return (
    <div className="relative mx-auto max-w-2xl py-2">
      {/* 回流箭头：Retain → 回到 Acquire（产品运营闭环） */}
      <svg
        className="pointer-events-none absolute -left-3 top-7 hidden h-[calc(100%-7rem)] w-14 md:block"
        viewBox="0 0 56 200"
        fill="none"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="funnelg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#d8ff63" />
            <stop offset="100%" stopColor="#2fae6f" />
          </linearGradient>
        </defs>
        <motion.path
          d="M48 6 C 6 6, 6 194, 48 194"
          stroke="url(#funnelg)"
          strokeWidth="2"
          strokeDasharray="3 6"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
        />
      </svg>

      <div className="space-y-3">
        {STAGES.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, scaleX: 0.7, y: 10 }}
            whileInView={{ opacity: 1, scaleX: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.55,
              delay: i * 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ width: `${s.w}%` }}
            className="glass mx-auto flex items-center justify-between gap-4 rounded-2xl px-6 py-4"
          >
            <div className="flex items-center gap-3">
              <span className="text-xs font-light text-faint">{s.n}</span>
              <span className="text-xl font-bold tracking-[-0.01em]">
                {s.label}
              </span>
            </div>
            <span className="hidden text-right text-xs text-faint sm:block">
              {s.note}
            </span>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.65, duration: 0.5 }}
        className="mx-auto mt-8 max-w-lg text-center text-sm font-light leading-relaxed text-muted"
      >
        <span className="hero-shimmer font-bold">↺ Product ops</span> closes the
        loop — I feed what users say at the paywall back into the product, and
        more of them stay.
      </motion.p>
    </div>
  );
}
