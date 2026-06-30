"use client";

import { useEffect, useRef } from "react";

/**
 * CosmicBackground —— 深空背景层（纯叠加，零侵入）
 *
 * 用法：在 layout.tsx 的 <body> 里加一行 <CosmicBackground />（放在内容之前）。
 * - position:fixed; z-index:-1 → 永远在所有内容下面，无需改任何现有组件的 z-index
 * - 不引入新依赖，不碰任何配置；删掉这个文件 + 那一行即可完全回滚
 * - data-theme="light" 时自动隐藏，尊重 prefers-reduced-motion
 *
 * 空间感来源：4 层视差星空 + 空气透视（远暗近亮）+ 黑洞渐变 + 暗角 + 缓慢呼吸漂移。
 */
export default function CosmicBackground() {
  const deepRef = useRef<HTMLDivElement>(null);
  const farRef = useRef<HTMLDivElement>(null);
  const midRef = useRef<HTMLDivElement>(null);
  const nearRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // —— 生成星点（box-shadow 打点，单节点画上百颗星）——
    const makeShadow = (n: number, alpha: number) => {
      const s: string[] = [];
      for (let i = 0; i < n; i++) {
        const x = Math.round(Math.random() * 4000 - 2000);
        const y = Math.round(Math.random() * 4000 - 2000);
        s.push(`${x}px ${y}px rgba(255,255,255,${alpha})`);
      }
      return s.join(",");
    };
    const paint = (
      el: HTMLDivElement | null,
      n: number,
      size: number,
      alpha: number
    ) => {
      if (!el) return;
      const dot = document.createElement("div");
      dot.style.cssText = `position:absolute;left:50%;top:50%;width:${size}px;height:${size}px;border-radius:50%;background:#fff;box-shadow:${makeShadow(
        n,
        alpha
      )};`;
      el.appendChild(dot);
    };

    paint(deepRef.current, 200, 0.8, 0.32); // 最深：稀疏暗点
    paint(farRef.current, 260, 1, 0.55); // 远
    paint(midRef.current, 120, 1.6, 0.8); // 中
    paint(nearRef.current, 50, 2.4, 1); // 近：大、亮、锐

    // —— 鼠标 + 滚动 + 呼吸 视差 ——
    let mx = 0,
      my = 0,
      cx = 0,
      cy = 0,
      sy = 0,
      t = 0,
      raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX / window.innerWidth - 0.5;
      my = e.clientY / window.innerHeight - 0.5;
    };
    const onScroll = () => {
      sy = window.scrollY;
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("scroll", onScroll, { passive: true });

    const loop = () => {
      t++;
      cx += (mx - cx) * 0.06;
      cy += (my - cy) * 0.06;
      const b = Math.sin(t * 0.0015); // 极缓呼吸（约 70s 一周期）
      const zoom = 1 + Math.sin(t * 0.0011) * 0.012; // 轻微推拉，像缓缓穿行
      if (deepRef.current)
        deepRef.current.style.transform = `translate(${cx * -7}px, ${
          cy * -7 - sy * 0.03 + b * 5
        }px) scale(${zoom})`;
      if (farRef.current)
        farRef.current.style.transform = `translate(${cx * -18}px, ${
          cy * -18 - sy * 0.06 + b * 9
        }px)`;
      if (midRef.current)
        midRef.current.style.transform = `translate(${cx * -40}px, ${
          cy * -40 - sy * 0.12 + b * 15
        }px)`;
      if (nearRef.current)
        nearRef.current.style.transform = `translate(${cx * -75}px, ${
          cy * -75 - sy * 0.22 + b * 24
        }px)`;
      raf = requestAnimationFrame(loop);
    };
    if (!reduce) raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div aria-hidden className="cosmic-bg">
      <style>{`
        .cosmic-bg{ position:fixed; inset:0; z-index:-1; pointer-events:none; overflow:hidden; }
        [data-theme="light"] .cosmic-bg{ display:none; }
        .cosmic-bg .void{ position:absolute; inset:-20%;
          background:radial-gradient(ellipse 75% 60% at 50% 38%, #0c0d0f 0%, #070708 36%, #030304 66%, #000 100%); }
        .cosmic-bg .stars{ position:absolute; inset:-60%; border-radius:50%; will-change:transform; }
        .cosmic-bg #c-deep{ animation:cbtw0 9s ease-in-out infinite; }
        .cosmic-bg #c-far { animation:cbtw1 7s ease-in-out infinite; }
        .cosmic-bg #c-mid { animation:cbtw2 5.5s ease-in-out infinite; }
        .cosmic-bg #c-near{ animation:cbtw3 6.5s ease-in-out infinite; }
        @keyframes cbtw0{0%,100%{opacity:.30}50%{opacity:.55}}
        @keyframes cbtw1{0%,100%{opacity:.55}50%{opacity:.8}}
        @keyframes cbtw2{0%,100%{opacity:.78}50%{opacity:1}}
        @keyframes cbtw3{0%,100%{opacity:.85}50%{opacity:1}}
        .cosmic-bg .vignette{ position:absolute; inset:0;
          background:radial-gradient(ellipse 80% 70% at 50% 45%, transparent 45%, rgba(0,0,0,.7) 100%); }
        @media (prefers-reduced-motion: reduce){
          .cosmic-bg .stars{ animation:none !important; }
        }
      `}</style>
      <div className="void" />
      <div className="stars" id="c-deep" ref={deepRef} />
      <div className="stars" id="c-far" ref={farRef} />
      <div className="stars" id="c-mid" ref={midRef} />
      <div className="stars" id="c-near" ref={nearRef} />
      <div className="vignette" />
    </div>
  );
}
