import CursorGlow from "./CursorGlow";

const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

// 纯黑空间背景：黑底 + 点阵 + 暗角 + 鼠标聚光 + 颗粒（首页同款，跨页面复用）。
export default function SpatialBg() {
  return (
    <>
      <div
        aria-hidden
        className="fixed inset-0 z-0"
        style={{ background: "#040406" }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            opacity: 0.5,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 100% 100% at 50% 40%, transparent 60%, #000000 100%)",
            opacity: 0.95,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.55) 1px, transparent 1px)",
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
    </>
  );
}
