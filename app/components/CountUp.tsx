"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

export default function CountUp({
  value,
  prefix = "",
  suffix = "",
  duration = 1.5,
  className,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let rafId = 0;
    let start = 0;
    const tick = (t: number) => {
      if (!start) start = t;
      const p = Math.min(1, (t - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - p, 3);
      setN(value * eased);
      if (p < 1) rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {Math.round(n)}
      {suffix}
    </span>
  );
}
