import { VoiceDemo, StickyCta } from "./client";
import HeroDownload from "./components/HeroDownload";
import PlatformDebug from "./components/PlatformDebug";
import PricingCards from "./components/PricingCards";
import { locale } from "@/app/locales";

const WHITE  = "#ffffff";
const OFF    = "#faf8f6";
const TEXT   = "#111111";
const CORAL  = "#ff4422";
const CORAL2 = "#ff6644";
const MUTED  = "#888888";
const BORDER = "#e8e8e4";
const SANS   = "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif";

const t = locale;

const stepIcons = [
  (
    <svg key="1" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="16" fill={CORAL + "15"} />
      <rect x="11" y="7" width="10" height="14" rx="5" fill={CORAL} opacity=".85"/>
      <path d="M7 17c0 4.97 4.03 9 9 9s9-4.03 9-9" stroke={CORAL} strokeWidth="2" strokeLinecap="round" opacity=".85"/>
      <line x1="16" y1="26" x2="16" y2="30" stroke={CORAL} strokeWidth="2" strokeLinecap="round" opacity=".85"/>
    </svg>
  ),
  (
    <svg key="2" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="16" fill={CORAL + "15"} />
      <path d="M8 18 L12 22 L24 10" stroke={CORAL} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity=".85"/>
    </svg>
  ),
  (
    <svg key="3" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="16" fill={CORAL + "15"} />
      <path d="M8 10h16M8 16h12M8 22h8" stroke={CORAL} strokeWidth="2" strokeLinecap="round" opacity=".85"/>
    </svg>
  ),
];

const testimonialColors = ["#ff9985", "#ff7055", "#ff4422"];

export default function SensayLanding() {
  const [heroL1, heroL2, heroL3] = t.hero.h1Lines;
  const [whyL1, whyL2] = t.whyVoice.titleLines;
  const [aiL1, aiL2] = t.aiPrompts.titleLines;
  const lovedBy = t.hero.lovedByTemplate.split("{{count}}");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');

        @keyframes s-wave { from{transform:scaleY(.4)} to{transform:scaleY(1)} }
        @keyframes s-fade  { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }

        .s a { color: inherit; text-decoration: none; }
        .s-cta {
          background: ${CORAL};
          color: #fff;
          font-family: ${SANS};
          font-size: .9rem;
          font-weight: 600;
          padding: 14px 32px;
          border-radius: 8px;
          display: inline-block;
          transition: all .15s;
          letter-spacing: .01em;
        }
        .s-cta:hover { background: ${CORAL2}; transform: translateY(-1px); box-shadow: 0 6px 24px ${CORAL}40; }
        .s-ghost {
          color: ${MUTED};
          font-family: ${SANS};
          font-size: .9rem;
          font-weight: 500;
          padding: 14px 0;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: color .15s;
        }
        .s-ghost:hover { color: ${TEXT}; }
        .s-card {
          background: ${WHITE};
          border: 1.5px solid ${BORDER};
          border-radius: 12px;
          padding: 1.75rem;
          transition: box-shadow .2s;
        }
        .s-card:hover { box-shadow: 0 4px 24px rgba(0,0,0,.08); }

        @media (max-width: 900px) {
          .s-hero-grid  { flex-direction: column !important; gap: 3rem !important; }
          .s-three-col  { grid-template-columns: 1fr !important; }
          .s-four-col   { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 540px) {
          .s-four-col { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 700px) {
          .s-two-col { grid-template-columns: 1fr !important; }
        }
        .s-faq-item summary {
          list-style: none; cursor: pointer;
          font-family: ${SANS}; font-size: .95rem; font-weight: 600; color: ${TEXT};
          display: flex; justify-content: space-between; align-items: center;
          transition: color .15s;
        }
        .s-faq-item summary::-webkit-details-marker { display: none; }
        .s-faq-item summary::after { content: '+'; color: ${MUTED}; font-size: 1.3rem; font-weight: 300; line-height: 1; }
        .s-faq-item[open] > summary { color: ${CORAL}; }
        .s-faq-item[open] > summary::after { content: '−'; color: ${CORAL}; }
      `}</style>

      <div className="s" style={{ background: WHITE, minHeight: "100vh" }}>

        {/* ── Header ── */}
        <header style={{
          position: "fixed", top: 0, left: 0, width: "100%",
          background: "rgba(255,255,255,.94)", backdropFilter: "blur(10px)",
          borderBottom: `1px solid ${BORDER}`,
          zIndex: 999, height: 60,
          display: "flex", alignItems: "center",
        }}>
          <div style={{ margin: "0 auto", width: "90%", maxWidth: 1200, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ color: TEXT, fontFamily: SANS, fontSize: "1.1rem", fontWeight: 700, letterSpacing: "-.01em" }}>
              Sen<span style={{ color: CORAL }}>say</span>
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <a href="#pricing" className="s-cta" style={{ padding: "8px 20px", fontSize: "0.8rem", borderRadius: 6 }}>
                {t.header.tryCta}
              </a>
            </div>
          </div>
        </header>

        {/* ── HERO ── */}
        <section style={{ background: OFF, minHeight: "100vh", paddingTop: 60, display: "flex", alignItems: "center" }}>
          <div style={{ margin: "0 auto", width: "90%", maxWidth: 1200, padding: "80px 0" }}>
            <div className="s-hero-grid" style={{ display: "flex", alignItems: "center", gap: "5rem" }}>

              <div style={{ flex: "1 1 0", minWidth: 0 }}>
                <div style={{
                  display: "inline-block",
                  background: CORAL + "12",
                  color: CORAL,
                  fontFamily: SANS, fontSize: "0.72rem", fontWeight: 600,
                  letterSpacing: "0.12em", textTransform: "uppercase",
                  padding: "5px 14px", borderRadius: 20,
                  marginBottom: "2rem",
                }}>
                  {t.hero.badge}
                </div>
                <h1 style={{
                  color: TEXT, fontFamily: SANS,
                  fontSize: "clamp(2.8rem, 6vw, 5rem)",
                  fontWeight: 700, lineHeight: 1.1,
                  margin: "0 0 1.5rem",
                  letterSpacing: "-.03em",
                }}>
                  {heroL1}<br />{heroL2}<br /><span style={{ color: CORAL }}>{heroL3}</span>
                </h1>
                <p style={{ color: MUTED, fontFamily: SANS, fontSize: "clamp(.9rem,1.8vw,1.1rem)", lineHeight: 1.85, maxWidth: 440, margin: "0 0 2.5rem", fontWeight: 400 }}>
                  {t.hero.paragraph}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 14, alignItems: "flex-start" }}>
                  <HeroDownload />
                  <a href="#how" className="s-ghost">
                    {t.hero.seeHow}
                  </a>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: "2rem" }}>
                  <div style={{ display: "flex" }}>
                    {["#ff9985","#ff7055","#ff4422"].map((c, i) => (
                      <div key={i} style={{ width: 28, height: 28, borderRadius: "50%", background: c, border: `2px solid ${OFF}`, marginLeft: i ? -8 : 0 }} />
                    ))}
                  </div>
                  <span style={{ color: MUTED, fontFamily: SANS, fontSize: "0.8rem", fontWeight: 400 }}>
                    {lovedBy[0]}<strong style={{ color: TEXT }}>{t.hero.lovedCount}</strong>{lovedBy[1]}
                  </span>
                </div>
              </div>

              <div style={{ flex: "0 0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem" }}>
                <div style={{ position: "relative", width: 280, height: 320, borderRadius: 20, overflow: "hidden", boxShadow: "0 16px 48px rgba(0,0,0,.10)" }}>
                  <img
                    src="/sensay/hero.jpg"
                    alt={t.hero.imageAlt}
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
                  />
                  <div style={{
                    position: "absolute", bottom: 16, right: 16,
                    width: 48, height: 48, borderRadius: "50%",
                    background: CORAL, display: "flex", alignItems: "center", justifyContent: "center",
                    boxShadow: `0 4px 16px ${CORAL}60`,
                  }}>
                    <svg width="18" height="24" viewBox="0 0 18 24" fill="none">
                      <rect x="4" y="0" width="10" height="15" rx="5" fill="white" opacity=".9"/>
                      <path d="M1 12c0 4.42 3.58 8 8 8s8-3.58 8-8" stroke="white" strokeWidth="2" strokeLinecap="round" opacity=".9"/>
                      <line x1="9" y1="20" x2="9" y2="24" stroke="white" strokeWidth="2" strokeLinecap="round" opacity=".9"/>
                    </svg>
                  </div>
                </div>
                <VoiceDemo />
              </div>

            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section id="how" style={{ background: WHITE, padding: "96px 0", borderTop: `1px solid ${BORDER}` }}>
          <div style={{ margin: "0 auto", width: "90%", maxWidth: 1200 }}>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <h2 style={{ color: TEXT, fontFamily: SANS, fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 700, letterSpacing: "-.02em", margin: "0 0 .75rem" }}>
                {t.howItWorks.title}
              </h2>
              <p style={{ color: MUTED, fontFamily: SANS, fontSize: "1rem", lineHeight: 1.8, margin: 0, fontWeight: 400 }}>
                {t.howItWorks.subtitle}
              </p>
            </div>
            <div className="s-three-col" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5rem" }}>
              {t.howItWorks.steps.map((step, i) => (
                <div key={i} className="s-card">
                  <div style={{ marginBottom: "1.2rem" }}>{stepIcons[i]}</div>
                  <h3 style={{ color: TEXT, fontFamily: SANS, fontSize: "1.1rem", fontWeight: 600, margin: "0 0 .6rem", letterSpacing: "-.01em" }}>{step.title}</h3>
                  <p style={{ color: MUTED, fontFamily: SANS, fontSize: "0.85rem", lineHeight: 1.85, margin: 0 }}>{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INTEGRATION STRIP ── */}
        <section style={{ background: OFF, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, padding: "40px 0" }}>
          <div style={{ margin: "0 auto", width: "90%", maxWidth: 1200 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
              <span style={{ color: MUTED, fontFamily: SANS, fontSize: "0.78rem", fontWeight: 500, whiteSpace: "nowrap" }}>
                {t.integrations.label}
              </span>
              {t.integrations.apps.map(app => (
                <div key={app} style={{
                  background: WHITE, border: `1px solid ${BORDER}`, borderRadius: 6,
                  padding: "5px 14px",
                  color: TEXT, fontFamily: SANS, fontSize: "0.78rem", fontWeight: 500,
                  whiteSpace: "nowrap",
                }}>
                  {app}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY VOICE WINS ── */}
        <section style={{ background: WHITE, padding: "96px 0", borderTop: `1px solid ${BORDER}` }}>
          <div style={{ margin: "0 auto", width: "90%", maxWidth: 1200 }}>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <h2 style={{ color: TEXT, fontFamily: SANS, fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 700, letterSpacing: "-.02em", margin: "0 0 .75rem" }}>
                {whyL1}<br />{whyL2}
              </h2>
              <p style={{ color: MUTED, fontFamily: SANS, fontSize: "1rem", lineHeight: 1.8, margin: "0 auto", maxWidth: 480 }}>
                {t.whyVoice.subtitle}
              </p>
            </div>
            <div className="s-two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", maxWidth: 820, margin: "0 auto" }}>
              <div style={{ background: OFF, border: `1.5px solid ${BORDER}`, borderRadius: 12, padding: "2rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: "1.2rem" }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: MUTED, flexShrink: 0 }} />
                  <span style={{ color: MUTED, fontFamily: SANS, fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                    {t.whyVoice.typing.label}
                  </span>
                </div>
                <p style={{ color: MUTED, fontFamily: SANS, fontSize: "0.95rem", lineHeight: 1.9, margin: 0 }}>
                  {t.whyVoice.typing.body}
                </p>
              </div>
              <div style={{ background: CORAL + "08", border: `1.5px solid ${CORAL}30`, borderRadius: 12, padding: "2rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: "1.2rem" }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: CORAL, flexShrink: 0 }} />
                  <span style={{ color: CORAL, fontFamily: SANS, fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                    {t.whyVoice.speaking.label}
                  </span>
                </div>
                <p style={{ color: TEXT, fontFamily: SANS, fontSize: "0.95rem", lineHeight: 1.9, margin: 0 }}>
                  {t.whyVoice.speaking.body}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHEN TO USE ── */}
        <section style={{ background: WHITE, padding: "96px 0" }}>
          <div style={{ margin: "0 auto", width: "90%", maxWidth: 1200 }}>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <h2 style={{ color: TEXT, fontFamily: SANS, fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 700, letterSpacing: "-.02em", margin: "0 0 .75rem" }}>
                {t.useCases.title}
              </h2>
              <p style={{ color: MUTED, fontFamily: SANS, fontSize: "1rem", margin: 0 }}>
                {t.useCases.subtitle}
              </p>
            </div>
            <div className="s-four-col" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1.5rem" }}>
              {t.useCases.items.map(({ emoji, title, body }) => (
                <div key={title} className="s-card" style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{emoji}</div>
                  <h4 style={{ color: TEXT, fontFamily: SANS, fontSize: "1rem", fontWeight: 600, margin: "0 0 .6rem" }}>{title}</h4>
                  <p style={{ color: MUTED, fontFamily: SANS, fontSize: "0.82rem", lineHeight: 1.85, margin: 0 }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── AI PROMPTS ── */}
        <section style={{ background: OFF, padding: "96px 0", borderTop: `1px solid ${BORDER}` }}>
          <div style={{ margin: "0 auto", width: "90%", maxWidth: 1200 }}>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <div style={{
                display: "inline-block", background: CORAL + "12", color: CORAL,
                fontFamily: SANS, fontSize: "0.72rem", fontWeight: 600,
                letterSpacing: "0.12em", textTransform: "uppercase",
                padding: "5px 14px", borderRadius: 20, marginBottom: "1.5rem",
              }}>
                {t.aiPrompts.badge}
              </div>
              <h2 style={{ color: TEXT, fontFamily: SANS, fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 700, letterSpacing: "-.02em", margin: "0 0 .75rem" }}>
                {aiL1}<br />{aiL2}
              </h2>
              <p style={{ color: MUTED, fontFamily: SANS, fontSize: "1rem", lineHeight: 1.8, margin: "0 auto", maxWidth: 520 }}>
                {t.aiPrompts.subtitle}
              </p>
            </div>
            <div className="s-two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", maxWidth: 860, margin: "0 auto 2rem" }}>
              <div>
                <div style={{ color: MUTED, fontFamily: SANS, fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                  {t.aiPrompts.typedLabel}
                </div>
                <div style={{ background: WHITE, border: `1.5px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", fontFamily: "'Courier New', monospace", fontSize: "0.88rem", color: MUTED, lineHeight: 1.7, minHeight: 100, display: "flex", alignItems: "center" }}>
                  {t.aiPrompts.typedExample}
                </div>
              </div>
              <div>
                <div style={{ color: CORAL, fontFamily: SANS, fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                  {t.aiPrompts.spokenLabel}
                </div>
                <div style={{ background: WHITE, border: `1.5px solid ${CORAL}30`, borderRadius: 10, padding: "1.25rem 1.5rem", fontFamily: "'Courier New', monospace", fontSize: "0.88rem", color: TEXT, lineHeight: 1.7 }}>
                  {t.aiPrompts.spokenExample}
                </div>
              </div>
            </div>
            <p style={{ textAlign: "center", color: MUTED, fontFamily: SANS, fontSize: "0.85rem", margin: 0 }}>
              {t.aiPrompts.footer}
            </p>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section style={{ background: WHITE, padding: "96px 0", borderTop: `1px solid ${BORDER}` }}>
          <div style={{ margin: "0 auto", width: "90%", maxWidth: 1200 }}>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <h2 style={{ color: TEXT, fontFamily: SANS, fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 700, letterSpacing: "-.02em", margin: 0 }}>
                {t.testimonials.title}
              </h2>
            </div>
            <div className="s-three-col" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5rem" }}>
              {t.testimonials.items.map(({ quote, name, role }, i) => (
                <div key={name} className="s-card" style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ color: CORAL, fontSize: "3rem", lineHeight: 1, marginBottom: ".75rem", opacity: 0.2, fontFamily: "Georgia, serif" }}>&ldquo;</div>
                  <p style={{ color: TEXT, fontFamily: SANS, fontSize: "0.92rem", lineHeight: 1.85, margin: "0 0 auto", flex: 1 }}>{quote}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: "1.5rem", paddingTop: "1.25rem", borderTop: `1px solid ${BORDER}` }}>
                    <div style={{ width: 36, height: 36, borderRadius: "50%", background: testimonialColors[i] ?? CORAL, flexShrink: 0 }} />
                    <div>
                      <div style={{ color: TEXT, fontFamily: SANS, fontSize: "0.85rem", fontWeight: 600 }}>{name}</div>
                      <div style={{ color: MUTED, fontFamily: SANS, fontSize: "0.75rem" }}>{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section style={{ background: WHITE, padding: "96px 0", borderTop: `1px solid ${BORDER}` }}>
          <div style={{ margin: "0 auto", width: "90%", maxWidth: 720 }}>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <h2 style={{ color: TEXT, fontFamily: SANS, fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 700, letterSpacing: "-.02em", margin: 0 }}>
                {t.faq.title}
              </h2>
            </div>
            <div style={{ border: `1.5px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              {t.faq.items.map(({ q, a }, i, arr) => (
                <details key={q} className="s-faq-item" style={{ background: WHITE, borderBottom: i < arr.length - 1 ? `1px solid ${BORDER}` : "none" }}>
                  <summary style={{ padding: "1.3rem 1.75rem" }}>{q}</summary>
                  <p style={{ padding: "0 1.75rem 1.3rem", color: MUTED, fontFamily: SANS, fontSize: "0.88rem", lineHeight: 1.85, margin: 0 }}>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRICING ── */}
        <PricingCards />

        {/* ── FINAL CTA ── */}
        <section style={{ background: CORAL, padding: "96px 0" }}>
          <div style={{ margin: "0 auto", width: "90%", maxWidth: 700, textAlign: "center" }}>
            <h2 style={{ color: WHITE, fontFamily: SANS, fontSize: "clamp(2rem,4.5vw,3.4rem)", fontWeight: 700, lineHeight: 1.15, margin: "0 0 1.2rem", letterSpacing: "-.02em" }}>
              {t.finalCta.title}
            </h2>
            <p style={{ color: "rgba(255,255,255,.75)", fontFamily: SANS, fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2.5rem", fontWeight: 400 }}>
              {t.finalCta.subtitle}
            </p>
            <a href="#pricing" style={{
              background: WHITE, color: CORAL,
              fontFamily: SANS, fontSize: "1rem", fontWeight: 700,
              padding: "16px 48px", borderRadius: 10,
              display: "inline-block",
              transition: "all .15s",
              boxShadow: "0 4px 20px rgba(0,0,0,.15)",
            }}>
              {t.finalCta.cta}
            </a>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer style={{ background: WHITE, borderTop: `1px solid ${BORDER}`, padding: "28px 0" }}>
          <div style={{ margin: "0 auto", width: "90%", maxWidth: 1200, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <span style={{ color: MUTED, fontFamily: SANS, fontSize: "0.78rem", fontWeight: 500 }}>
              Sen<span style={{ color: CORAL }}>say</span> — {t.footer.tagline}
            </span>
            <span style={{ color: MUTED, fontFamily: SANS, fontSize: "0.78rem" }}>
              {t.footer.madeByPrefix}<a href="https://advertum.com" style={{ color: TEXT, fontWeight: 500 }}>Advertum</a>
            </span>
          </div>
          <div style={{ margin: "0 auto", width: "90%", maxWidth: 1200 }}>
            <PlatformDebug />
          </div>
        </footer>

      </div>

      <StickyCta />
    </>
  );
}
