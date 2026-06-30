"use client";

import { useRef } from "react";

// 光标跟随聚光 + 3D 倾斜卡：鼠标在卡面移动时辉光跟随，整卡朝光标方向立体翻转。
export default function SpotlightCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    el.style.setProperty("--sx", `${x}px`);
    el.style.setProperty("--sy", `${y}px`);
    const rx = (y / r.height - 0.5) * -11;
    const ry = (x / r.width - 0.5) * 11;
    el.style.transform = `perspective(820px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px) scale(1.04)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform =
      "perspective(820px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={className}
      style={{
        transformStyle: "preserve-3d",
        transition:
          "transform 0.16s ease-out, box-shadow 0.3s ease, border-color 0.3s ease",
      }}
    >
      {/* 跟随光标的辉光 */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(220px circle at var(--sx, 50%) var(--sy, 50%), rgba(52,184,115,0.22), transparent 72%)",
        }}
      />
      {children}
    </div>
  );
}
