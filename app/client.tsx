"use client";
import { useState, useEffect } from "react";
import { locale } from "@/app/locales";

const WHITE  = "#ffffff";
const CORAL  = "#ff4422";
const MUTED  = "#888888";
const BORDER = "#e8e8e4";
const TEXT   = "#111111";
const SANS   = "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif";

export function MicButton() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setActive(a => !a), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{ position: "relative", display: "inline-flex", alignItems: "center", justifyContent: "center", width: 120, height: 120 }}>
      {[1, 2, 3].map(i => (
        <div key={i} style={{
          position: "absolute",
          width: 120, height: 120,
          borderRadius: "50%",
          border: `2px solid ${CORAL}`,
          opacity: active ? 0 : 0.25 / i,
          transform: active ? `scale(${1 + i * 0.55})` : "scale(1)",
          transition: `all ${0.6 + i * 0.2}s ease`,
          transitionDelay: `${i * 0.08}s`,
        }} />
      ))}
      <div style={{
        width: 80, height: 80,
        borderRadius: "50%",
        background: active ? CORAL : WHITE,
        border: `2.5px solid ${active ? CORAL : BORDER}`,
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "all .4s ease",
        cursor: "pointer",
        boxShadow: active ? `0 8px 32px ${CORAL}40` : "0 2px 16px rgba(0,0,0,.06)",
        position: "relative", zIndex: 2,
      }}>
        <svg width="28" height="36" viewBox="0 0 28 36" fill="none">
          <rect x="7" y="0" width="14" height="22" rx="7"
            fill={active ? WHITE : CORAL}
            style={{ transition: "fill .4s" }}
          />
          <path d="M2 18c0 6.63 5.37 12 12 12s12-5.37 12-12"
            stroke={active ? WHITE : CORAL}
            strokeWidth="2.5"
            strokeLinecap="round"
            style={{ transition: "stroke .4s" }}
          />
          <line x1="14" y1="30" x2="14" y2="36"
            stroke={active ? WHITE : CORAL}
            strokeWidth="2.5"
            strokeLinecap="round"
            style={{ transition: "stroke .4s" }}
          />
        </svg>
      </div>
    </div>
  );
}

export function VoiceDemo() {
  const t = locale.voiceDemo;
  const pairs = t.pairs;

  const [idx, setIdx]     = useState(0);
  const [show, setShow]   = useState(true);
  const [phase, setPhase] = useState<"voice" | "text">("voice");

  useEffect(() => {
    const seq = [
      () => { setPhase("voice"); setShow(true); },
      () => { setShow(false); setTimeout(() => { setPhase("text"); setShow(true); }, 500); },
      () => { setShow(false); setTimeout(() => { setIdx(i => (i + 1) % pairs.length); setPhase("voice"); setShow(true); }, 500); },
    ];
    let step = 0;
    const t = setInterval(() => {
      step = (step + 1) % seq.length;
      seq[step]();
    }, 2800);
    return () => clearInterval(t);
  }, [pairs.length]);

  return (
    <div style={{
      background: WHITE,
      border: `1.5px solid ${BORDER}`,
      borderRadius: 16,
      padding: "2rem 2.5rem",
      maxWidth: 500,
      boxShadow: "0 2px 24px rgba(0,0,0,.06)",
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{
            width: 8, height: 8, borderRadius: "50%",
            background: phase === "voice" ? CORAL : "#22c55e",
            boxShadow: phase === "voice" ? `0 0 0 3px ${CORAL}20` : "0 0 0 3px #22c55e20",
            transition: "all .4s",
          }} />
          <span style={{ color: MUTED, fontFamily: SANS, fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.04em" }}>
            {phase === "voice" ? t.listening : t.done}
          </span>
        </div>
        <span style={{ color: BORDER, fontFamily: SANS, fontSize: "0.68rem" }}>Sensay</span>
      </div>

      <div style={{
        minHeight: 72,
        transition: "opacity .5s ease, transform .5s ease",
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0)" : "translateY(6px)",
      }}>
        {phase === "voice" ? (
          <p style={{ color: "#aaaaaa", fontFamily: SANS, fontSize: "0.95rem", lineHeight: 1.75, margin: 0, fontStyle: "italic" }}>
            &ldquo;{pairs[idx].voice}&rdquo;
          </p>
        ) : (
          <p style={{ color: TEXT, fontFamily: SANS, fontSize: "0.95rem", lineHeight: 1.75, margin: 0, fontWeight: 400 }}>
            &ldquo;{pairs[idx].text}&rdquo;
          </p>
        )}
      </div>

      <div style={{ marginTop: "1.5rem", paddingTop: "1.2rem", borderTop: `1px solid ${BORDER}`, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ color: phase === "voice" ? CORAL : "#22c55e", fontFamily: SANS, fontSize: "0.72rem", fontWeight: 600, transition: "color .4s" }}>
          {phase === "voice" ? t.capturing : t.ready}
        </span>
        <div style={{ display: "flex", gap: 6 }}>
          {[12, 18, 26, 20, 28, 22, 16, 24, 18].map((h, i) => (
            <div key={i} style={{
              width: 3, height: h,
              borderRadius: 2,
              background: phase === "voice" ? CORAL : BORDER,
              opacity: phase === "voice" ? 0.6 : 0.3,
              transition: "all .4s",
              animationName: phase === "voice" ? "s-wave" : "none",
              animationDuration: `${0.6 + i * 0.1}s`,
              animationIterationCount: "infinite",
              animationDirection: "alternate",
              animationTimingFunction: "ease-in-out",
              animationDelay: `${i * 0.05}s`,
            }} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function StickyCta() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const fn = () => setSticky(window.scrollY > window.innerHeight * 0.8);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  if (!sticky) return null;

  return (
    <div style={{ position: "fixed", bottom: 24, right: 24, zIndex: 1000 }}>
      <a href="#pricing" style={{
        background: CORAL, color: "#fff",
        fontFamily: SANS, fontSize: "0.85rem", fontWeight: 600,
        padding: "12px 24px", borderRadius: 8,
        display: "inline-block",
        boxShadow: `0 4px 20px ${CORAL}50`,
      }}>
        {locale.stickyCta}
      </a>
    </div>
  );
}
