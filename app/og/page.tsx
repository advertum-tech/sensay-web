const WHITE  = "#ffffff";
const OFF    = "#faf8f6";
const TEXT   = "#111111";
const CORAL  = "#ff4422";
const SANS   = "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif";

export default function SensayOG() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #c8c8c8; display: flex; align-items: center; justify-content: center; min-height: 100vh; }
      `}</style>

      {/* 1200×630 — screenshot this exact box */}
      <div style={{
        width: 1200, height: 630, flexShrink: 0,
        background: OFF,
        position: "relative",
        overflow: "hidden",
        fontFamily: SANS,
        outline: "1px solid rgba(0,0,0,.15)",
      }}>

        {/* ── coral right panel ── */}
        <div style={{
          position: "absolute", top: 0, right: 0,
          width: 600, height: "100%",
          background: CORAL,
        }} />

        {/* ── man photo (right half, bleeds to edge) ── */}
        <div style={{
          position: "absolute", right: 0, bottom: 0,
          width: 600, height: 630,
          background: OFF,
        }}>
          <img
            src="/sensay/hero-cutout.png"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
          />
          {/* fade photo into coral on the left edge */}
          <div style={{
            position: "absolute", inset: 0,
            background: `linear-gradient(to left, ${CORAL} 0%, transparent 32%)`,
          }} />
        </div>

        {/* ── waveform bars ── */}
        <svg
          width="200" height="56"
          viewBox="0 0 200 56"
          style={{ position: "absolute", top: 40, right: 40, opacity: 0.22 }}
        >
          {[8, 18, 30, 44, 56, 44, 34, 22, 40, 56, 44, 30, 18, 10, 24].map((h, i) => (
            <rect
              key={i}
              x={i * 13}
              y={(56 - h) / 2}
              width={7}
              height={h}
              rx={3.5}
              fill={WHITE}
            />
          ))}
        </svg>

        {/* ── LEFT CONTENT ── */}
        <div style={{
          position: "absolute", top: 0, left: 0,
          width: 720, height: "100%",
          padding: "36px 56px 56px",
          display: "flex", flexDirection: "column",
        }}>

          {/* wordmark */}
          <div style={{
            fontFamily: SANS, fontSize: "2rem", fontWeight: 800,
            color: TEXT, letterSpacing: "-.02em",
          }}>
            Sen<span style={{ color: CORAL }}>say</span>
          </div>

          {/* headline */}
          <h1 style={{
            fontFamily: SANS, fontWeight: 800,
            fontSize: "8rem", lineHeight: 1,
            letterSpacing: "-.02em",
            color: TEXT,
            margin: "auto 0",
          }}>
            <span style={{ display: "block", marginBottom: "-0.08em" }}>Just</span>
            <span style={{ display: "block", marginBottom: "0.08em" }}>say</span>
            <span style={{ color: CORAL }}>it.</span>
          </h1>

          {/* tagline */}
          <p style={{
            fontFamily: SANS, fontSize: "1.9rem", fontWeight: 500,
            color: TEXT, opacity: 0.72, letterSpacing: "-.02em",
          }}>
            Voice dictation&nbsp;·&nbsp;Works in any app.
          </p>

        </div>

        {/* ── mic badge ── */}
        <div style={{
          position: "absolute", bottom: 48, right: 48,
          width: 64, height: 64, borderRadius: "50%",
          background: WHITE,
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 8px 32px rgba(0,0,0,.20)",
        }}>
          <svg width="22" height="28" viewBox="0 0 18 24" fill="none">
            <rect x="4" y="0" width="10" height="15" rx="5" fill={CORAL} opacity=".9"/>
            <path d="M1 12c0 4.42 3.58 8 8 8s8-3.58 8-8" stroke={CORAL} strokeWidth="2" strokeLinecap="round" opacity=".9"/>
            <line x1="9" y1="20" x2="9" y2="24" stroke={CORAL} strokeWidth="2" strokeLinecap="round" opacity=".9"/>
          </svg>
        </div>

      </div>
    </>
  );
}
