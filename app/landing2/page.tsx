import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sensay — Just Say It",
  description:
    "Speak. Get clean, ready-to-send text in your email, Slack, WhatsApp, or anywhere else. No typing. No switching apps.",
};

// ── Design tokens (from Figma) ──────────────────────────────────────────────
const BG      = "#E3DAD0";   // cream background
const DARK    = "#2F2F2F";   // dark sections
const ORANGE  = "#FF4122";   // brand orange
const TEXT    = "#000000";   // text on light
const MUTED   = "#817E73";   // border + muted text
const CREAM   = "#E3DAD0";   // text on dark
const CARD    = "#F0ECE3";   // testimonial card bg
const FREE_BG = "#FCFBFA";   // free pricing card bg
const TEAM_BG = "#BFB9AC";   // team pricing card bg
const SANS    = "'Inter', system-ui, -apple-system, sans-serif";

// Asymmetric border-radius from Figma (tl tr br bl)
const BR = "20px 20px 20px 0";

// Footer wave bars (heights in px, from Figma puffy button metadata, l→r)
const WAVE_BARS = [67, 90, 110, 130, 120, 100, 110, 120, 130, 110, 90, 60];

const STEPS = [
  { n: "01", title: "Tap and talk",     body: "Open Sensay, tap the mic. Speak the way you'd say it to someone in the room." },
  { n: "02", title: "Sensay cleans it", body: `Filler words, pauses, and “um”s — gone. Grammar fixed. Register matched to where it’s going.` },
  { n: "03", title: "Text appears",     body: "In your email, Slack, WhatsApp, Notion — wherever your cursor is. Paste nothing. Done." },
];

const APPS = ["Gmail", "Slack", "WhatsApp", "Notion", "Outlook", "Google Docs", "Teams", "Any app"];

const CASES = [
  { icon: "🚗", title: "In the car",    body: "Reply to messages, jot down ideas. Hands on the wheel, words in the app." },
  { icon: "🛋️", title: "On the couch", body: "Long reply, short energy. Say it instead of slowly hunting keys." },
  { icon: "🚶", title: "On a walk",     body: "The idea that arrived while moving. Say it before it's gone." },
  { icon: "🍳", title: "Hands full",    body: "Cooking, coffee, whatever. Your voice is free even when your hands aren't." },
];

const REVIEWS = [
  { quote: "I replied to like 12 WhatsApps during my commute. Without Sensay I would've just stared at them until evening.", name: "Marcus T.", role: "Project manager" },
  { quote: "My ChatGPT answers got noticeably better. Turns out I was just being lazy with my prompts because typing them out felt like work.", name: "Daria S.", role: "Designer" },
  { quote: "I drafted a full client update email while walking to the coffee machine. Hit send before I even sat back down.", name: "James R.", role: "Consultant" },
];

const FAQS = [
  { q: "How accurate is it?",             a: "Very. It handles natural speech well — including filler words, mid-sentence corrections, and most accents. It won't be perfect 100% of the time, but it's faster to fix one word than to type the whole thing." },
  { q: "What languages does it support?",  a: "50+ languages including English, Spanish, French, German, Portuguese, Russian, Arabic, Japanese, and more. The free tier covers all major languages." },
  { q: "Is my voice recorded or stored?",  a: "No. Audio is processed in real time and not stored on our servers. What you say stays with you." },
  { q: "Does it work offline?",            a: "Not yet — processing happens in the cloud for best accuracy. You need a connection, but it's fast enough that you won't notice." },
  { q: "Which apps does it work with?",    a: "Any app where you can type — Gmail, Slack, WhatsApp, Notion, ChatGPT, Outlook, Google Docs, Teams, any browser input field. If there's a text cursor, Sensay works." },
  { q: "What happens when my free trial ends?", a: "Nothing scary. You drop to the free tier — 30 minutes a day, forever. Upgrade only if you want more." },
];

export default function LandingV2() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300..900&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .l2 { font-family: ${SANS}; background: ${BG}; color: ${TEXT}; overflow-x: hidden; }
        .l2 a { color: inherit; text-decoration: none; }

        .l2-wrap { margin: 0 auto; width: 92%; max-width: 1340px; }

        /* ── Typography ── */
        .l2-display {
          font-weight: 900;
          line-height: 0.86;
          letter-spacing: -0.02em;
          text-transform: uppercase;
          font-size: clamp(4.375rem, 12vw, 8.75rem);
        }
        .l2-h {
          font-weight: 900;
          line-height: 0.9;
          letter-spacing: -0.02em;
          text-transform: uppercase;
          font-size: clamp(3rem, 8.5vw, 6.25rem);
        }
        .l2-label {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        /* ── Buttons ── */
        .l2-btn {
          display: inline-block;
          background: ${ORANGE};
          color: #fff;
          font-family: ${SANS};
          font-size: 1rem;
          font-weight: 700;
          padding: 14px 36px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          transition: background .15s, transform .15s, box-shadow .15s;
          letter-spacing: .02em;
          text-transform: uppercase;
        }
        .l2-btn:hover { background: #d93515; transform: translateY(-1px); box-shadow: 0 8px 24px rgba(255,65,34,.3); }
        .l2-btn-outline {
          background: transparent;
          color: ${TEXT};
          border: 1px solid rgba(0,0,0,.7);
        }
        .l2-btn-outline:hover { background: transparent; border-color: ${TEXT}; box-shadow: none; transform: none; }
        .l2-btn-white {
          background: #fff;
          color: ${ORANGE};
        }
        .l2-btn-white:hover { background: #f5f0eb; box-shadow: 0 8px 24px rgba(0,0,0,.15); transform: translateY(-1px); }

        /* ── App pills ── */
        .l2-pill {
          display: inline-flex;
          align-items: center;
          padding: 6px 16px;
          border: 1px solid ${MUTED};
          border-radius: 100px;
          font-size: 0.8rem;
          font-weight: 500;
          color: ${TEXT};
          white-space: nowrap;
          background: transparent;
        }

        /* ── Cards ── */
        .l2-card { background: #fff; border: 1px solid ${MUTED}; border-radius: ${BR}; padding: 1.75rem; }
        .l2-card-dark { border: 1px solid #444; border-radius: ${BR}; padding: 1.75rem; }

        /* ── Pricing ── */
        .l2-price {
          display: flex;
          flex-direction: column;
          border: 1px solid ${MUTED};
          border-radius: ${BR};
          padding: 2rem;
        }
        .l2-price-free  { background: ${FREE_BG}; }
        .l2-price-pro   { background: ${DARK}; color: ${CREAM}; }
        .l2-price-team  { background: ${TEAM_BG}; }
        .l2-price-amount {
          font-size: clamp(2.5rem, 4vw, 3.4375rem);
          font-weight: 600;
          line-height: 1;
          letter-spacing: -0.04em;
          text-transform: uppercase;
        }
        .l2-price-tag {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 6px 14px;
          border-radius: 30px;
          background: ${CREAM};
          color: ${TEXT};
          font-size: 0.875rem;
          font-weight: 400;
          white-space: nowrap;
        }

        /* ── FAQ ── */
        .l2-faq summary {
          list-style: none;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.25rem 0;
          font-size: 1rem;
          font-weight: 600;
          color: ${CREAM};
          border-bottom: 1px solid #3a3a3a;
          transition: color .15s;
        }
        .l2-faq summary::-webkit-details-marker { display: none; }
        .l2-faq summary::after { content: '+'; font-size: 1.5rem; font-weight: 300; flex-shrink: 0; margin-left: 1rem; color: rgba(227,218,208,.4); }
        .l2-faq[open] summary { color: ${ORANGE}; border-color: transparent; }
        .l2-faq[open] summary::after { content: '−'; color: ${ORANGE}; }
        .l2-faq-body { padding: .75rem 0 1.5rem; font-size: .9rem; line-height: 1.85; color: rgba(227,218,208,.55); }

        /* ── Layout grids ── */
        .l2-hero-row { display: flex; gap: 3rem; align-items: flex-start; justify-content: space-between; }
        .l2-steps-row { display: grid; grid-template-columns: auto 1fr; gap: 5rem; align-items: start; }
        .l2-2col  { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: start; }
        .l2-3col  { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.5rem; }
        .l2-4col  { display: grid; grid-template-columns: repeat(4,1fr); gap: 1.25rem; }
        .l2-pgrid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.5rem; }

        /* ── Responsive ── */
        @media (max-width: 1023px) {
          .l2-hero-row  { flex-direction: column; }
          .l2-hero-img  { width: 100% !important; max-width: 420px !important; margin: 0 auto; }
          .l2-steps-row { grid-template-columns: 1fr; gap: 2.5rem; }
          .l2-pgrid     { grid-template-columns: 1fr; max-width: 380px; }
        }
        @media (max-width: 767px) {
          .l2-display   { text-align: center; }
          .l2-2col      { grid-template-columns: 1fr; gap: 2rem; }
          .l2-3col      { grid-template-columns: 1fr; }
          .l2-4col      { grid-template-columns: 1fr 1fr; }
          .l2-hero-badge, .l2-hero-sub, .l2-hero-loved { text-align: center; }
          .l2-hero-cta  { justify-content: center !important; }
        }
        @media (max-width: 479px) {
          .l2-4col { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="l2">

        {/* ══════════════════════════════════════════════
            HEADER
        ══════════════════════════════════════════════ */}
        <header style={{
          position: "sticky", top: 0, zIndex: 100,
          background: "#fff",
          borderBottom: `1px solid rgba(0,0,0,.12)`,
          height: 70,
          display: "flex", alignItems: "center",
        }}>
          <div className="l2-wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>

            {/* Logo */}
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              {/* Sound wave icon */}
              <svg width="38" height="30" viewBox="0 0 38 30" fill="none">
                {[4,8,12,16,20,24,28].map((x, i) => {
                  const h = [10,18,28,22,28,18,10][i];
                  return <rect key={x} x={x} y={(30-h)/2} width="3.5" height={h} rx="2" fill={ORANGE} />;
                })}
              </svg>
              <span style={{ fontFamily: SANS, fontSize: "1.1rem", color: "rgba(0,0,0,.8)" }}>
                <span style={{ fontWeight: 400 }}>Sen</span><span style={{ fontWeight: 800 }}>Say</span>
              </span>
            </div>

            {/* CTA */}
            <a href="#pricing" style={{
              fontFamily: SANS, fontWeight: 700, fontSize: "0.875rem",
              color: ORANGE, border: `1px solid rgba(0,0,0,.6)`,
              padding: "6px 20px", borderRadius: 5, textTransform: "uppercase",
              letterSpacing: "0.02em",
            }}>
              TRY FREE
            </a>
          </div>
        </header>


        {/* ══════════════════════════════════════════════
            HERO
        ══════════════════════════════════════════════ */}
        <section style={{ background: BG, paddingTop: 72, paddingBottom: 64 }}>
          <div className="l2-wrap">

            {/* Headline + photo */}
            <div className="l2-hero-row">
              <div style={{ flex: "1 1 0", minWidth: 0 }}>
                <p className="l2-label l2-hero-badge" style={{ color: MUTED, marginBottom: "1.5rem" }}>
                  Voice dictation · works in any app
                </p>
                <h1 className="l2-display">
                  JUST<br />SAY<br /><span style={{ color: ORANGE }}>IT.</span>
                </h1>
              </div>
              <div className="l2-hero-img" style={{ width: 380, flexShrink: 0 }}>
                <div style={{ borderRadius: BR, overflow: "hidden", aspectRatio: "3/4", position: "relative" }}>
                  <img
                    src="/sensay/hero.jpg"
                    alt=""
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
                  />
                  <div style={{
                    position: "absolute", bottom: 16, right: 16,
                    width: 48, height: 48, borderRadius: "50%",
                    background: ORANGE,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    boxShadow: `0 4px 16px ${ORANGE}60`,
                  }}>
                    <svg width="18" height="24" viewBox="0 0 18 24" fill="none">
                      <rect x="4" y="0" width="10" height="15" rx="5" fill="white" opacity=".9"/>
                      <path d="M1 12c0 4.42 3.58 8 8 8s8-3.58 8-8" stroke="white" strokeWidth="2" strokeLinecap="round" opacity=".9"/>
                      <line x1="9" y1="20" x2="9" y2="24" stroke="white" strokeWidth="2" strokeLinecap="round" opacity=".9"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider + steps */}
            <div style={{ borderTop: `1px solid ${MUTED}`, marginTop: "4rem", paddingTop: "3rem" }}>
              <div className="l2-steps-row">

                {/* Left: subheadline + CTA */}
                <div>
                  <p className="l2-h l2-hero-sub" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)", marginBottom: "1.5rem" }}>
                    THREE<br />SECONDS,<br />START TO<br />FINISH.
                  </p>
                  <p style={{ fontFamily: SANS, fontSize: "0.9rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.75rem", maxWidth: 280 }}>
                    No learning curve. No setup. You already know how to use it.
                  </p>
                  <div className="l2-hero-cta" style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center", marginBottom: "1.75rem" }}>
                    <a href="#pricing" className="l2-btn" style={{ padding: "13px 28px", fontSize: "0.875rem" }}>
                      Start free — no signup
                    </a>
                  </div>
                  <div className="l2-hero-loved" style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ display: "flex" }}>
                      {["#ffb3a3", "#ff7055", ORANGE].map((c, i) => (
                        <div key={i} style={{
                          width: 26, height: 26, borderRadius: "50%",
                          background: c, border: `2px solid ${BG}`,
                          marginLeft: i ? -8 : 0,
                        }} />
                      ))}
                    </div>
                    <span style={{ fontFamily: SANS, fontSize: "0.8rem", color: MUTED }}>
                      Loved by <strong style={{ color: TEXT }}>12,000+</strong> people already
                    </span>
                  </div>
                </div>

                {/* Right: 3 steps */}
                <div className="l2-3col">
                  {STEPS.map(s => (
                    <div key={s.n} style={{ borderLeft: `2px solid ${MUTED}`, paddingLeft: "1.25rem" }}>
                      <div className="l2-label" style={{ color: ORANGE, marginBottom: "0.75rem" }}>{s.n}</div>
                      <div style={{ fontFamily: SANS, fontSize: "0.95rem", fontWeight: 700, marginBottom: "0.5rem" }}>{s.title}</div>
                      <div style={{ fontFamily: SANS, fontSize: "0.82rem", color: MUTED, lineHeight: 1.8 }}>{s.body}</div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </section>


        {/* ══════════════════════════════════════════════
            WORKS IN
        ══════════════════════════════════════════════ */}
        <section style={{ background: BG, borderTop: `1px solid ${MUTED}`, borderBottom: `1px solid ${MUTED}`, padding: "20px 0" }}>
          <div className="l2-wrap">
            <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
              <span className="l2-h" style={{ fontSize: "clamp(1.2rem, 2.5vw, 2.5rem)", whiteSpace: "nowrap", lineHeight: 1 }}>
                WORKS IN.
              </span>
              {APPS.map(app => (
                <span key={app} className="l2-pill">{app}</span>
              ))}
            </div>
          </div>
        </section>


        {/* ══════════════════════════════════════════════
            SPEED — YOU TYPE 40 / YOU SPEAK 130
        ══════════════════════════════════════════════ */}
        <section style={{ background: BG, padding: "80px 0" }}>
          <div className="l2-wrap">
            <div className="l2-2col">

              {/* Left: headline */}
              <h2 className="l2-h">
                <span style={{ fontWeight: 400 }}>You type 40 words a minute.</span>
                <br />
                <strong>You speak 130.</strong>
              </h2>

              {/* Right: comparison + body */}
              <div>
                <p style={{ fontFamily: SANS, fontSize: "1rem", color: MUTED, lineHeight: 1.85, marginBottom: "2rem" }}>
                  Your thoughts don&apos;t slow down for your fingers. Neither should your messages.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div style={{ background: "#fff", border: `1px solid ${MUTED}`, borderRadius: BR, padding: "1.25rem 1.5rem" }}>
                    <div className="l2-label" style={{ color: MUTED, marginBottom: "0.75rem" }}>Typing</div>
                    <p style={{ fontFamily: SANS, fontSize: "0.9rem", color: MUTED, lineHeight: 1.85, margin: 0 }}>
                      Hunt for the right words. Fix the typo. Re-read. Edit again. Send something shorter than what you actually meant.
                    </p>
                  </div>
                  <div style={{ background: `${ORANGE}10`, border: `1px solid ${ORANGE}40`, borderRadius: BR, padding: "1.25rem 1.5rem" }}>
                    <div className="l2-label" style={{ color: ORANGE, marginBottom: "0.75rem" }}>Speaking with Sensay</div>
                    <p style={{ fontFamily: SANS, fontSize: "0.9rem", color: TEXT, lineHeight: 1.85, margin: 0 }}>
                      Say exactly what you mean. Sensay cleans it up. Done in the time it took to unlock your phone.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* ══════════════════════════════════════════════
            USE CASES — dark
        ══════════════════════════════════════════════ */}
        <section style={{ background: DARK, padding: "80px 0" }}>
          <div className="l2-wrap">
            <div style={{ marginBottom: "3.5rem" }}>
              <h2 className="l2-h" style={{ color: CREAM }}>
                <span style={{ fontWeight: 400 }}>Whenever typing feels </span>
                <strong>like too much.</strong>
              </h2>
              <p style={{ fontFamily: SANS, fontSize: "0.95rem", color: `${CREAM}80`, marginTop: "1rem" }}>
                Which is, honestly, most of the time.
              </p>
            </div>
            <div className="l2-4col">
              {CASES.map(c => (
                <div key={c.title} className="l2-card-dark">
                  <div style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>{c.icon}</div>
                  <div style={{ fontFamily: SANS, fontSize: "0.95rem", fontWeight: 700, color: CREAM, marginBottom: "0.5rem" }}>{c.title}</div>
                  <div style={{ fontFamily: SANS, fontSize: "0.82rem", color: `${CREAM}70`, lineHeight: 1.8 }}>{c.body}</div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ══════════════════════════════════════════════
            AI PROMPTS — cream
        ══════════════════════════════════════════════ */}
        <section style={{ background: BG, padding: "80px 0" }}>
          <div className="l2-wrap">
            <div className="l2-2col">

              <h2 className="l2-h">
                <span style={{ fontWeight: 400 }}>Your AI gets smarter </span>
                <strong>when you stop typing to it.</strong>
              </h2>

              <div>
                <p style={{ fontFamily: SANS, fontSize: "1rem", color: MUTED, lineHeight: 1.85, marginBottom: "2rem" }}>
                  When you type a prompt, you cut corners. When you speak, you explain. Better input, better output — every time.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div>
                    <div className="l2-label" style={{ color: MUTED, marginBottom: "0.6rem" }}>Typed prompt</div>
                    <div style={{
                      background: DARK, border: `1px solid #444`,
                      borderRadius: BR, padding: "1rem 1.25rem",
                      fontFamily: "'Courier New', monospace", fontSize: "0.875rem",
                      color: `${CREAM}60`, lineHeight: 1.7,
                    }}>
                      summerize this article
                    </div>
                  </div>
                  <div>
                    <div className="l2-label" style={{ color: ORANGE, marginBottom: "0.6rem" }}>Spoken → cleaned by Sensay</div>
                    <div style={{
                      background: DARK, border: `1px solid ${ORANGE}50`,
                      borderRadius: BR, padding: "1rem 1.25rem",
                      fontFamily: "'Courier New', monospace", fontSize: "0.875rem",
                      color: CREAM, lineHeight: 1.7,
                    }}>
                      Can you summarize this article in 3 bullet points, focusing on the practical implications for a non-technical audience? Keep it under 100 words.
                    </div>
                  </div>
                </div>
                <p style={{ fontFamily: SANS, fontSize: "0.8rem", color: MUTED, marginTop: "1rem", lineHeight: 1.7 }}>
                  Same thought. One took 3 seconds to type. The other took 4 seconds to say — and got a much better answer.
                </p>
              </div>

            </div>
          </div>
        </section>


        {/* ══════════════════════════════════════════════
            TESTIMONIALS — cream
        ══════════════════════════════════════════════ */}
        <section style={{ background: BG, padding: "80px 0", borderTop: `1px solid ${MUTED}` }}>
          <div className="l2-wrap">
            <h2 className="l2-h" style={{ marginBottom: "3rem" }}>
              <span style={{ fontWeight: 400 }}>Real people. </span>
              <strong>Real messages.</strong>
            </h2>
            <div className="l2-3col">
              {REVIEWS.map((r, i) => (
                <div key={r.name} style={{
                  background: CARD, border: `1px solid ${MUTED}`,
                  borderRadius: BR, padding: "2rem",
                  display: "flex", flexDirection: "column",
                }}>
                  <p style={{ fontFamily: SANS, fontSize: "1.125rem", lineHeight: 2, color: "rgba(0,0,0,.8)", flex: 1, margin: "0 0 2rem" }}>
                    {r.quote}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", paddingTop: "1.25rem", borderTop: `1px solid ${MUTED}` }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: "50%",
                      background: ["#ffb3a3", "#ff7055", ORANGE][i],
                      flexShrink: 0,
                    }} />
                    <div>
                      <div style={{ fontFamily: SANS, fontSize: "1rem", fontWeight: 700, textTransform: "uppercase" }}>{r.name}</div>
                      <div style={{ fontFamily: SANS, fontSize: "0.875rem", fontWeight: 400, color: MUTED }}>{r.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ══════════════════════════════════════════════
            FAQ — dark
        ══════════════════════════════════════════════ */}
        <section style={{ background: DARK, padding: "80px 0" }}>
          <div className="l2-wrap">
            <div className="l2-2col" style={{ alignItems: "start" }}>
              <h2 className="l2-h" style={{ color: CREAM }}>
                <strong>Simple</strong>
                <span style={{ fontWeight: 400 }}> answers.</span>
              </h2>
              <div>
                {FAQS.map(item => (
                  <details key={item.q} className="l2-faq">
                    <summary>{item.q}</summary>
                    <div className="l2-faq-body">{item.a}</div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* ══════════════════════════════════════════════
            PRICING — dark rounded container
        ══════════════════════════════════════════════ */}
        <section id="pricing" style={{ background: BG, padding: "80px 0" }}>
          <div className="l2-wrap">
            <h2 className="l2-h" style={{ marginBottom: "0.75rem" }}>Simple pricing.</h2>
            <p style={{ fontFamily: SANS, fontSize: "1rem", color: MUTED, marginBottom: "3rem" }}>
              Start free. Upgrade when you&apos;re hooked.
            </p>

            {/* Dark container */}
            <div style={{ background: DARK, borderRadius: BR, padding: "3rem 2rem" }}>
              <div className="l2-pgrid">

                {/* FREE */}
                <div className="l2-price l2-price-free">
                  {/* Badge */}
                  <div style={{ marginBottom: "1.5rem" }}>
                    <span style={{ background: ORANGE, color: "#fff", fontSize: "1rem", fontWeight: 600, padding: "6px 20px", borderRadius: 20, textTransform: "uppercase" }}>
                      FREE
                    </span>
                  </div>
                  <div className="l2-price-amount" style={{ marginBottom: "0.5rem" }}>$0</div>
                  <div style={{ display: "flex", gap: 8, marginBottom: "2rem", flexWrap: "wrap" }}>
                    <span className="l2-price-tag">Always</span>
                    <span className="l2-price-tag">Free</span>
                  </div>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "2rem", flex: 1 }}>
                    {["30 minutes / day", "English + major languages", "Browser + key apps"].map(f => (
                      <li key={f} style={{ fontFamily: SANS, fontSize: "0.875rem", color: TEXT, display: "flex", gap: "0.5rem", textTransform: "uppercase" }}>
                        <span style={{ color: MUTED, flexShrink: 0 }}>✓</span>{f}
                      </li>
                    ))}
                  </ul>
                  <a href="#" className="l2-btn l2-btn-outline" style={{ textAlign: "center", display: "block", fontSize: "1rem" }}>
                    GET STARTED
                  </a>
                </div>

                {/* PRO */}
                <div className="l2-price l2-price-pro">
                  {/* Badge */}
                  <div style={{ marginBottom: "1.5rem" }}>
                    <span style={{ background: "#C3BEAC", color: ORANGE, fontSize: "1rem", fontWeight: 600, padding: "6px 20px", borderRadius: 20, textTransform: "uppercase" }}>
                      PRO
                    </span>
                  </div>
                  <div className="l2-price-amount" style={{ color: "#fff", marginBottom: "0.5rem" }}>$9</div>
                  <div style={{ display: "flex", gap: 8, marginBottom: "2rem", flexWrap: "wrap" }}>
                    <span className="l2-price-tag">Per month</span>
                    <span className="l2-price-tag">Cancel anytime</span>
                  </div>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "2rem", flex: 1 }}>
                    {["Unlimited dictation", "All languages", "Every app & input field", "Smart context register", "Priority processing"].map(f => (
                      <li key={f} style={{ fontFamily: SANS, fontSize: "0.875rem", color: "#DED8CC", display: "flex", gap: "0.5rem", textTransform: "uppercase" }}>
                        <span style={{ color: ORANGE, flexShrink: 0 }}>✓</span>{f}
                      </li>
                    ))}
                  </ul>
                  <a href="#" className="l2-btn" style={{ textAlign: "center", display: "block", fontSize: "1rem" }}>
                    14 DAYS FREE
                  </a>
                </div>

                {/* TEAM */}
                <div className="l2-price l2-price-team">
                  {/* Badge */}
                  <div style={{ marginBottom: "1.5rem" }}>
                    <span style={{ background: "#79736D", color: CREAM, fontSize: "1rem", fontWeight: 600, padding: "6px 20px", borderRadius: 20, textTransform: "uppercase" }}>
                      TEAM
                    </span>
                  </div>
                  <div className="l2-price-amount" style={{ marginBottom: "0.5rem" }}>Custom</div>
                  <div style={{ display: "flex", gap: 8, marginBottom: "2rem", flexWrap: "wrap" }}>
                    <span className="l2-price-tag">For teams of</span>
                    <span className="l2-price-tag">5+</span>
                  </div>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "2rem", flex: 1 }}>
                    {["Everything in Pro", "Team admin + SSO", "Audit logs", "Priority support"].map(f => (
                      <li key={f} style={{ fontFamily: SANS, fontSize: "0.875rem", color: TEXT, display: "flex", gap: "0.5rem", textTransform: "uppercase" }}>
                        <span style={{ color: "#fff", flexShrink: 0 }}>✓</span>{f}
                      </li>
                    ))}
                  </ul>
                  <a href="mailto:hello@advertum.com" style={{
                    textAlign: "center", display: "block",
                    fontFamily: SANS, fontWeight: 700, fontSize: "1rem",
                    color: "#fff", border: "1px solid #fff",
                    padding: "14px 36px", borderRadius: 8,
                    textTransform: "uppercase", letterSpacing: "0.02em",
                  }}>
                    GET IN TOUCH
                  </a>
                </div>

              </div>
            </div>
          </div>
        </section>


        {/* ══════════════════════════════════════════════
            CTA — orange
        ══════════════════════════════════════════════ */}
        <section style={{ background: ORANGE, padding: "96px 0 80px" }}>
          <div className="l2-wrap" style={{ textAlign: "center" }}>
            <h2 className="l2-h" style={{ color: "#fff", marginBottom: "0.5rem" }}>
              <span style={{ fontWeight: 400 }}>You know what </span>
              <strong>you want to say.</strong>
            </h2>
            <p style={{ fontFamily: SANS, fontSize: "clamp(1.5rem, 3vw, 3rem)", fontWeight: 900, color: "#fff", textTransform: "uppercase", letterSpacing: "-0.02em", marginBottom: "2.5rem", lineHeight: 0.9 }}>
              So say it.
            </p>
            <a href="#pricing" className="l2-btn l2-btn-white" style={{ fontSize: "1rem", padding: "16px 48px" }}>
              TRY SENSAY FREE
            </a>
          </div>
        </section>


        {/* ══════════════════════════════════════════════
            FOOTER — dark with wave bars
        ══════════════════════════════════════════════ */}
        <footer style={{ background: DARK, paddingTop: 56, position: "relative", overflow: "hidden" }}>

          <div className="l2-wrap" style={{ position: "relative", zIndex: 1, paddingBottom: 180 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "2.5rem", marginBottom: "2.5rem" }}>

              {/* Brand */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "0.5rem" }}>
                  <svg width="30" height="24" viewBox="0 0 38 30" fill="none">
                    {[4,8,12,16,20,24,28].map((x, i) => {
                      const h = [10,18,28,22,28,18,10][i];
                      return <rect key={x} x={x} y={(30-h)/2} width="3.5" height={h} rx="2" fill={ORANGE} />;
                    })}
                  </svg>
                  <span style={{ fontFamily: SANS, fontSize: "1.1rem", color: CREAM }}>
                    <span style={{ fontWeight: 400 }}>Sen</span><span style={{ fontWeight: 800 }}>Say</span>
                  </span>
                </div>
                <div style={{ fontFamily: SANS, fontSize: "0.8rem", color: `${CREAM}50` }}>voice dictation AI</div>
              </div>

              {/* Contact */}
              <div style={{ fontFamily: SANS, fontSize: "0.875rem", color: `${CREAM}60`, lineHeight: 2.5 }}>
                <div>Advertum Agency · since 2009</div>
                <a href="mailto:hello@advertum.com" style={{ color: `${CREAM}60`, textDecoration: "underline" }}>hello@advertum.com</a>
                <div>+372 5551 1283</div>
                <div>Narva mnt 5, Tallinn, Estonia</div>
              </div>

              {/* Links */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {["Privacy", "Terms"].map(l => (
                  <a key={l} href="#" style={{ fontFamily: SANS, fontSize: "0.875rem", color: `${CREAM}50` }}>{l}</a>
                ))}
                <a href="https://twitter.com/advertumofficial" style={{ fontFamily: SANS, fontSize: "0.875rem", color: `${CREAM}50` }}>
                  @advertumofficial
                </a>
              </div>
            </div>

            <div style={{ borderTop: `1px solid #3a3a3a`, paddingTop: "1.5rem" }}>
              <span style={{ fontFamily: SANS, fontSize: "0.75rem", color: `${CREAM}30` }}>
                © 2025 Sensay. Made by{" "}
                <a href="https://advertum.com" style={{ color: `${CREAM}50`, textDecoration: "underline" }}>Advertum</a>.
              </span>
            </div>
          </div>

          {/* Wave bars decoration (from Figma puffy button) */}
          <div style={{
            position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)",
            display: "flex", alignItems: "flex-end", gap: 6,
            pointerEvents: "none",
          }}>
            {WAVE_BARS.map((h, i) => (
              <div key={i} style={{
                width: 42,
                height: h,
                borderRadius: "12px 12px 0 0",
                background: i === 3 || i === 8 ? ORANGE : "#444",
                flexShrink: 0,
              }} />
            ))}
          </div>

        </footer>

      </div>
    </>
  );
}
