"use client";

import { useState, type CSSProperties } from "react";

// Figma asset URLs — valid 7 days from 2026-04-24
const A_HEADER_LINE   = "https://www.figma.com/api/mcp/asset/9815e0b2-de06-4223-b8bf-c316ccf17ec1";
const A_HEADER_LOGO   = "https://www.figma.com/api/mcp/asset/18b7ea69-52d8-4f5c-91ff-e48e4e232b8b";
const A_LOVED_AVATARS = "https://www.figma.com/api/mcp/asset/1b7df36a-c7e0-4168-9c86-2e8285ac3609";
const A_LOVED_CIRCLE  = "https://www.figma.com/api/mcp/asset/b2377f7e-5285-4af0-8003-f020040e244c";
const A_GMAIL         = "https://www.figma.com/api/mcp/asset/52aa29a2-6ae8-42a4-8973-6ae2025d6e3d";
const A_BOX1_ICON     = "https://www.figma.com/api/mcp/asset/a0cf4f28-fb88-4801-a503-f02e35021b04";
const A_MARCUS        = "https://www.figma.com/api/mcp/asset/5dc9f727-873a-41a5-ade6-9d787ace2396";
const A_DARIA         = "https://www.figma.com/api/mcp/asset/7debd6b8-366b-4fb4-bf05-c66d73f7f965";
const A_JAMES         = "https://www.figma.com/api/mcp/asset/81953146-8239-40e1-af64-bdeceec83cab";
const A_FOOTER_IMG    = "https://www.figma.com/api/mcp/asset/16aebf68-220d-4261-b021-ae9c5de101da";
const A_SENSAY_WAVE   = "https://www.figma.com/api/mcp/asset/0ea872f3-b608-4c02-8b3b-6e0d7eee0b8c";

// Design tokens
const BG       = "#E3DAD0";
const DARK     = "#2F2F2F";
const ORANGE   = "#FF4122";
const CARD_BG  = "#F0ECE3";
const FREE_BG  = "#FCFBFA";
const TEAM_BG  = "#BFB9AC";
const BORDER   = "#817E73";
const CREAM    = "#E3DAD0";
const SUBDARK  = "#DED8CC";
const INTER    = "'Inter', system-ui, sans-serif";
const BR       = "20px 20px 20px 0";

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
  *, *::before, *::after { box-sizing: border-box; }
  .l3 a { text-decoration: none; color: inherit; }
  .l3-hero-h  { font-size: clamp(70px, 8.3vw, 140px); line-height: 0.86; }
  .l3-sec-h   { font-size: clamp(50px, 6vw, 100px);   line-height: 0.82; }
  .l3-sec-h-sm{ font-size: clamp(40px, 4.5vw, 80px);  line-height: 0.85; }
  @media (max-width: 1023px) {
    .l3-hero-grid  { grid-template-columns: 1fr !important; }
    .l3-3col       { grid-template-columns: 1fr !important; }
    .l3-4col       { grid-template-columns: 1fr 1fr !important; }
    .l3-2col       { grid-template-columns: 1fr !important; }
    .l3-logo-grid  { grid-template-columns: repeat(4, 1fr) !important; }
    .l3-price-grid { grid-template-columns: 1fr !important; align-items: center; }
    .l3-foot-grid  { grid-template-columns: 1fr 1fr !important; }
    .l3-test-grid  { grid-template-columns: 1fr !important; }
  }
  @media (max-width: 767px) {
    .l3-hero-left  { align-items: center !important; text-align: center; }
    .l3-loved      { margin: 0 auto; }
    .l3-4col       { grid-template-columns: 1fr !important; }
    .l3-logo-grid  { grid-template-columns: repeat(4, 1fr) !important; }
    .l3-foot-grid  { grid-template-columns: 1fr !important; }
    .l3-inner      { padding-left: 20px !important; padding-right: 20px !important; }
    .l3-dark-box   { padding: 50px 24px !important; border-radius: 20px 20px 20px 0 !important; }
    .l3-orange-box { padding: 60px 24px !important; }
  }
`;

const sectionPad: CSSProperties = { padding: "80px 100px" };
const inner: CSSProperties = { maxWidth: "1580px", margin: "0 auto" };
const darkBox: CSSProperties = {
  background: DARK,
  borderRadius: BR,
  padding: "80px",
};

function PriceCard({ bg, textColor, badge, badgeBg, badgeText, price, priceColor, tags, features, checkColor, btnLabel, btnStyle }: {
  bg: string; textColor: string; badge: string; badgeBg: string; badgeText: string;
  price: string; priceColor: string; tags: string[]; features: string[];
  checkColor: string; btnLabel: string; btnStyle: CSSProperties;
}) {
  return (
    <div style={{ background: bg, border: `1px solid ${BORDER}`, borderRadius: BR, padding: "30px", width: "100%", maxWidth: "380px" }}>
      <div style={{ background: badgeBg, borderRadius: "20px", display: "inline-block", padding: "8px 20px", marginBottom: "30px" }}>
        <span style={{ fontFamily: INTER, fontSize: "16px", fontWeight: 600, color: badgeText, textTransform: "uppercase" }}>{badge}</span>
      </div>
      <p style={{ fontFamily: INTER, fontSize: "55px", fontWeight: 600, lineHeight: "50px", color: priceColor, marginBottom: "16px" }}>{price}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px" }}>
        {tags.map(t => (
          <span key={t} style={{ background: BG, borderRadius: "30px", padding: "2px 14px", fontFamily: INTER, fontSize: "14px", color: "#000" }}>{t}</span>
        ))}
      </div>
      <div style={{ marginBottom: "30px", display: "flex", flexDirection: "column", gap: "2px" }}>
        {features.map(f => (
          <p key={f} style={{ fontFamily: INTER, fontSize: "14px", lineHeight: "28px", color: textColor, textTransform: "uppercase" }}>
            <span style={{ color: checkColor }}>✓</span>{"  "}{f}
          </p>
        ))}
      </div>
      <a href="#" style={{ display: "block", textAlign: "center", borderRadius: "7px", padding: "16px", fontFamily: INTER, fontSize: "16px", fontWeight: 700, textTransform: "uppercase", textDecoration: "none", ...btnStyle }}>
        {btnLabel}
      </a>
    </div>
  );
}

function FaqItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div style={{ borderBottom: `1px solid ${BORDER}` }}>
      <button onClick={onToggle} style={{ width: "100%", textAlign: "left", padding: "28px 0", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "20px" }}>
        <span style={{ fontFamily: INTER, fontSize: "18px", fontWeight: 500, color: CREAM, textTransform: "uppercase" }}>{q}</span>
        <span style={{ fontFamily: INTER, fontSize: "28px", color: CREAM, flexShrink: 0, display: "inline-block", transform: open ? "rotate(45deg)" : "none", transition: "transform 0.2s", lineHeight: 1 }}>+</span>
      </button>
      {open && (
        <p style={{ fontFamily: INTER, fontSize: "16px", lineHeight: "28px", color: "rgba(227,218,208,0.75)", paddingBottom: "28px" }}>{a}</p>
      )}
    </div>
  );
}

const faqItems = [
  { q: "What is Sensay?", a: "Sensay is a voice dictation app that turns your speech into clean, ready-to-send text in any app on your device. No copy-paste, no editing — just speak and it appears." },
  { q: "Which apps does it work with?", a: "Sensay works in Gmail, Slack, WhatsApp, Notion, Outlook, Google Docs, Microsoft Teams, and any browser input field. If you can type there, Sensay can dictate there." },
  { q: "Is my data private?", a: "Yes. Your voice is processed in real time and is not stored on our servers. We do not use your data to train any models." },
  { q: "Do I need internet to use it?", a: "Yes, Sensay requires an internet connection to process speech. Transcription happens on our servers for maximum accuracy and language support." },
  { q: "What languages are supported?", a: "The Free plan includes English and major world languages. The Pro plan unlocks all supported languages with improved accuracy." },
  { q: "How do I cancel my subscription?", a: "You can cancel anytime from your account settings. Your Pro access continues until the end of the current billing period. No questions asked." },
];

const useCases = [
  { title: "In the car",  text: "Dictate messages, notes, reminders — hands-free, eyes on the road." },
  { title: "On the couch", text: "Reply to emails and texts without lifting a finger." },
  { title: "On a walk",  text: "Get thoughts out instantly. No stopping. No phone keyboard." },
  { title: "Hands full", text: "Kids, groceries, cooking — Sensay works when your hands can't." },
];

const appLogos = [
  { label: "Gmail",       icon: A_GMAIL },
  { label: "Slack" },
  { label: "WhatsApp" },
  { label: "Notion" },
  { label: "Outlook" },
  { label: "Google Docs" },
  { label: "Teams" },
  { label: "Any browser" },
];

const spoken = ["Can", "you", "summerize", "this", "article", "in", "3", "bullet points,", "focusing", "on the", "practical", "implications", "for a", "non-technical", "audience", "?", "Keep", "it", "under", "100", "words"];

export default function Landing3() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="l3" style={{ fontFamily: INTER, background: BG, overflowX: "hidden" }}>
      <style>{CSS}</style>

      {/* ── HEADER ── */}
      <header style={{ background: "#fff", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: "1680px", margin: "0 auto", position: "relative", height: "110px" }}>
          <img src={A_HEADER_LINE} alt="" style={{ position: "absolute", top: 0, left: "40px", width: "calc(100% - 80px)", height: "70px" }} />
          <div style={{ position: "absolute", left: "158px", top: "62px", display: "flex", alignItems: "center", gap: "6px" }}>
            <img src={A_HEADER_LOGO} alt="Sensay" style={{ width: "30px", height: "30px", objectFit: "contain" }} />
            <span style={{ fontFamily: INTER, fontSize: "18px", color: "rgba(0,0,0,0.8)" }}>
              <span style={{ fontWeight: 400 }}>Sen</span><span style={{ fontWeight: 800 }}>Say</span>
            </span>
          </div>
          <a href="#" style={{
            position: "absolute", right: "50px", top: "60px",
            fontFamily: INTER, fontSize: "14px", fontWeight: 700, color: ORANGE,
            textTransform: "uppercase", border: "1px solid rgba(0,0,0,0.6)",
            borderRadius: "5px", padding: "6px 20px", background: "#fff",
          }}>
            TRY FREE
          </a>
        </div>
      </header>

      {/* ── HERO ── */}
      <section style={{ maxWidth: "1680px", margin: "0 auto", padding: "80px 100px 100px" }}>
        <div className="l3-hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
          <div className="l3-hero-left" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "32px" }}>
            <p style={{ fontFamily: INTER, fontSize: "20px", fontWeight: 700, color: "#79736D", textTransform: "uppercase" }}>
              Voice dictation · works in any app
            </p>
            <h1 className="l3-hero-h" style={{ fontFamily: INTER, fontWeight: 700, textTransform: "uppercase", margin: 0 }}>
              <span style={{ color: "#000" }}>Just<br />say </span>
              <span style={{ color: ORANGE }}>it.</span>
            </h1>
            <a href="#" style={{
              background: ORANGE, color: "#fff", fontFamily: INTER,
              fontSize: "16px", fontWeight: 700, textTransform: "uppercase",
              padding: "18px 50px", borderRadius: "10px", display: "inline-block",
            }}>
              Start free — no signup
            </a>
            <a href="#" style={{ fontFamily: INTER, fontSize: "16px", color: "#000", opacity: 0.6 }}>
              See how →
            </a>
          </div>
          <div className="l3-loved" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ position: "relative", width: "230px", height: "230px" }}>
              <img src={A_LOVED_CIRCLE} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} />
              <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%) rotate(-5deg)", textAlign: "center", width: "160px" }}>
                <img src={A_LOVED_AVATARS} alt="" style={{ width: "60px", marginBottom: "6px" }} />
                <p style={{ fontFamily: INTER, fontSize: "13px", fontWeight: 500, textTransform: "uppercase", lineHeight: "1.6" }}>
                  Loved by <strong>12,000+</strong><br />people already
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THREE SECONDS ── */}
      <section style={{ maxWidth: "1680px", margin: "0 auto", ...sectionPad }}>
        <h2 className="l3-sec-h" style={{ fontFamily: INTER, fontWeight: 700, textTransform: "uppercase", marginBottom: "24px" }}>
          <span style={{ fontWeight: 400 }}>Three seconds, </span>
          <span style={{ fontWeight: 700 }}>start to finish.</span>
        </h2>
        <p style={{ fontFamily: INTER, fontSize: "18px", lineHeight: "36px", color: "rgba(0,0,0,0.7)", maxWidth: "580px", marginBottom: "50px" }}>
          No learning curve. No setup. You already know how to use it.
        </p>
        <div className="l3-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
          {[
            { icon: <img src={A_BOX1_ICON} alt="" style={{ width: "55px", height: "55px" }} />, title: "Tap and talk", text: "Open Sensay, tap the mic. Speak the way you'd say it to someone in the room." },
            { icon: <div style={{ width: "55px", height: "55px", borderRadius: "50%", background: ORANGE, display: "flex", alignItems: "center", justifyContent: "center" }}><div style={{ width: "26px", height: "26px", borderRadius: "50%", border: "2px solid #fff" }} /></div>, title: "Sensay cleans it", text: 'Filler words, pauses, and "um"s — gone. Grammar fixed. Register matched to where it\'s going.' },
            { icon: <div style={{ width: "55px", height: "55px", borderRadius: "50%", background: ORANGE, display: "flex", alignItems: "center", justifyContent: "center" }}><div style={{ width: "22px", height: "18px", borderRadius: "4px", background: "rgba(255,255,255,0.9)" }} /></div>, title: "Text appears", text: "In your email, Slack, WhatsApp, Notion — wherever your cursor is. Paste nothing. Done." },
          ].map((card, i) => (
            <div key={i} style={{ background: TEAM_BG, border: `1px solid ${BORDER}`, borderRadius: BR, padding: "30px", minHeight: "280px" }}>
              <div style={{ marginBottom: "24px" }}>{card.icon}</div>
              <p style={{ fontFamily: INTER, fontSize: "16px", fontWeight: 700, color: CARD_BG, textTransform: "uppercase", marginBottom: "10px" }}>{card.title}</p>
              <p style={{ fontFamily: INTER, fontSize: "16px", lineHeight: "28px", color: DARK }}>{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WORKS IN ── */}
      <section style={{ maxWidth: "1680px", margin: "0 auto", ...sectionPad }}>
        <h2 className="l3-sec-h" style={{ fontFamily: INTER, fontWeight: 700, textTransform: "uppercase", marginBottom: "50px" }}>
          <span style={{ fontWeight: 400 }}>WORKS </span>
          <span style={{ fontWeight: 700 }}>IN</span>
        </h2>
        <div className="l3-logo-grid" style={{ display: "grid", gridTemplateColumns: "repeat(8, 1fr)", gap: "12px" }}>
          {appLogos.map((app) => (
            <div key={app.label} style={{ background: "#fff", border: `1px solid ${BORDER}`, borderRadius: BR, aspectRatio: "1", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
              {app.icon
                ? <img src={app.icon} alt={app.label} style={{ width: "60%", height: "60%", objectFit: "contain" }} />
                : <span style={{ fontFamily: INTER, fontSize: "11px", fontWeight: 500, color: DARK, textAlign: "center", lineHeight: "1.3" }}>{app.label}</span>
              }
            </div>
          ))}
        </div>
      </section>

      {/* ── SPEED ── */}
      <section style={{ maxWidth: "1680px", margin: "0 auto", ...sectionPad }}>
        <h2 className="l3-sec-h" style={{ fontFamily: INTER, fontWeight: 700, textTransform: "uppercase", marginBottom: "24px" }}>
          <span style={{ fontWeight: 400 }}>You type 40 words a minute.</span><br />
          <span style={{ fontWeight: 700 }}>You speak 130.</span>
        </h2>
        <p style={{ fontFamily: INTER, fontSize: "18px", lineHeight: "36px", color: "rgba(0,0,0,0.7)", maxWidth: "580px", marginBottom: "50px" }}>
          Your thoughts don't slow down for your fingers. Neither should your messages.
        </p>
        <div className="l3-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
          <div style={{ background: TEAM_BG, border: `1px solid ${BORDER}`, borderRadius: BR, padding: "30px 40px", minHeight: "180px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div style={{ width: "14px", height: "14px", borderRadius: "50%", background: "#79736D" }} />
              <span style={{ fontFamily: INTER, fontSize: "16px", fontWeight: 700, color: "#fff", textTransform: "uppercase" }}>TYPING</span>
            </div>
            <p style={{ fontFamily: INTER, fontSize: "16px", lineHeight: "28px", color: "#000" }}>
              Hunt for the right words. Fix the typo. Re-read. Edit again. Send something shorter than what you actually meant.
            </p>
          </div>
          <div style={{ background: ORANGE, border: `1px solid ${BORDER}`, borderRadius: BR, padding: "30px 40px", minHeight: "180px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div style={{ width: "14px", height: "14px", borderRadius: "50%", background: "rgba(255,255,255,0.5)" }} />
              <span style={{ fontFamily: INTER, fontSize: "16px", fontWeight: 700, color: "#fff", textTransform: "uppercase" }}>Speaking with Sensay</span>
            </div>
            <p style={{ fontFamily: INTER, fontSize: "16px", lineHeight: "28px", color: "#fff" }}>
              Say exactly what you mean. Sensay cleans it up. Done in the time it took to unlock your phone.
            </p>
          </div>
        </div>
      </section>

      {/* ── USE CASES (dark) ── */}
      <section style={{ maxWidth: "1680px", margin: "0 auto", padding: "0 50px 80px" }}>
        <div className="l3-dark-box" style={darkBox}>
          <h2 className="l3-sec-h" style={{ fontFamily: INTER, fontWeight: 700, textTransform: "uppercase", color: CREAM, marginBottom: "50px" }}>
            <span style={{ fontWeight: 400 }}>Whenever typing feels </span>
            <span style={{ fontWeight: 700 }}>like too much.</span>
          </h2>
          <div className="l3-4col" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
            {useCases.map((c) => (
              <div key={c.title} style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: BR, padding: "28px" }}>
                <p style={{ fontFamily: INTER, fontSize: "16px", fontWeight: 700, textTransform: "uppercase", color: "#000", marginBottom: "10px" }}>{c.title}</p>
                <p style={{ fontFamily: INTER, fontSize: "16px", lineHeight: "28px", color: "#000" }}>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI PROMPTS ── */}
      <section style={{ maxWidth: "1680px", margin: "0 auto", ...sectionPad }}>
        <h2 className="l3-sec-h" style={{ fontFamily: INTER, fontWeight: 700, textTransform: "uppercase", marginBottom: "50px" }}>
          <span style={{ fontWeight: 400 }}>Your AI gets smarter </span>
          <span style={{ fontWeight: 700 }}>when you<br />stop typing to it.</span>
        </h2>
        <div className="l3-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", alignItems: "start" }}>
          <div style={{ background: TEAM_BG, border: `1px solid ${BORDER}`, borderRadius: BR, padding: "30px 40px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div style={{ width: "14px", height: "14px", borderRadius: "50%", background: "#79736D" }} />
              <span style={{ fontFamily: INTER, fontSize: "16px", fontWeight: 700, color: "#fff", textTransform: "uppercase" }}>TYPING</span>
            </div>
            <p style={{ fontFamily: INTER, fontSize: "16px", lineHeight: "28px", color: "#000" }}>summerize this article</p>
          </div>
          <div style={{ background: ORANGE, border: `1px solid ${BORDER}`, borderRadius: BR, padding: "24px 30px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "14px", height: "14px", borderRadius: "50%", background: "rgba(255,255,255,0.5)" }} />
                <span style={{ fontFamily: INTER, fontSize: "16px", fontWeight: 700, color: "#fff", textTransform: "uppercase" }}>Spoken → cleaned by Sensay</span>
              </div>
              <img src={A_SENSAY_WAVE} alt="" style={{ width: "50px", height: "40px", objectFit: "contain" }} />
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {spoken.map((w, i) => (
                <span key={i} style={{ background: "#fff", borderRadius: "30px", padding: "2px 12px", fontFamily: INTER, fontSize: "14px", lineHeight: "28px", color: "#000", whiteSpace: "nowrap" }}>{w}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ maxWidth: "1680px", margin: "0 auto", ...sectionPad }}>
        <h2 className="l3-sec-h" style={{ fontFamily: INTER, fontWeight: 700, textTransform: "uppercase", marginBottom: "50px" }}>
          <span style={{ fontWeight: 400 }}>Real people. </span>
          <span style={{ fontWeight: 700 }}>Real messages</span>
        </h2>
        <div className="l3-test-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
          {[
            { quote: '"I replied to like 12 WhatsApps during my commute. Without Sensay I would\'ve just stared at them until evening".', name: "Marcus T.", role: "Project manager", avatar: A_MARCUS },
            { quote: '"My ChatGPT answers got noticeably better. Turns out I was just being lazy with my prompts because typing them out felt like work".', name: "Daria S.", role: "Designer", avatar: A_DARIA },
            { quote: '"I drafted a full client update email while walking to the coffee machine. Hit send before I even sat back down".', name: "James R.", role: "Consultant", avatar: A_JAMES },
          ].map((t) => (
            <div key={t.name} style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: BR, padding: "40px 35px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <p style={{ fontFamily: INTER, fontSize: "18px", lineHeight: "36px", color: "rgba(0,0,0,0.8)", marginBottom: "30px" }}>{t.quote}</p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <img src={t.avatar} alt={t.name} style={{ width: "50px", height: "50px", borderRadius: "50%", objectFit: "cover" }} />
                <div>
                  <p style={{ fontFamily: INTER, fontSize: "16px", fontWeight: 700, textTransform: "uppercase" }}>{t.name}</p>
                  <p style={{ fontFamily: INTER, fontSize: "16px", fontWeight: 400 }}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ (dark) ── */}
      <section style={{ maxWidth: "1680px", margin: "0 auto", padding: "0 50px 80px" }}>
        <div className="l3-dark-box" style={darkBox}>
          <h2 className="l3-sec-h" style={{ fontFamily: INTER, textTransform: "uppercase", color: CREAM, marginBottom: "50px" }}>
            <span style={{ fontWeight: 700 }}>Simple</span>
            <span style={{ fontWeight: 400 }}> answers.</span>
          </h2>
          {faqItems.map((item, i) => (
            <FaqItem key={i} q={item.q} a={item.a} open={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} />
          ))}
        </div>
      </section>

      {/* ── PRICING (dark) ── */}
      <section style={{ maxWidth: "1680px", margin: "0 auto", padding: "0 50px 80px" }}>
        <div className="l3-dark-box" style={darkBox}>
          <h2 className="l3-sec-h" style={{ fontFamily: INTER, textTransform: "uppercase", color: CREAM, marginBottom: "50px" }}>
            <span style={{ fontWeight: 400 }}>Simple </span>
            <span style={{ fontWeight: 700 }}>pricing.</span>
          </h2>
          <div className="l3-price-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 380px)", gap: "24px", justifyContent: "center" }}>
            <PriceCard
              bg={FREE_BG} textColor="#000" badge="FREE" badgeBg={ORANGE} badgeText="#fff"
              price="$0" priceColor="#000" tags={["Always", "Free"]}
              features={["30 minutes / day", "English + major languages", "Browser + key apps"]}
              checkColor={BORDER} btnLabel="GET STARTED"
              btnStyle={{ border: "1px solid rgba(0,0,0,0.7)", color: "#000", background: "transparent" }}
            />
            <PriceCard
              bg={DARK} textColor={SUBDARK} badge="PRO" badgeBg="#C3BEAC" badgeText={ORANGE}
              price="$9" priceColor="#fff" tags={["Per month", "Cancel anytime"]}
              features={["Unlimited dictation", "All languages", "Every app & input field", "Smart context register", "Priority processing"]}
              checkColor={ORANGE} btnLabel="14 DAYS FREE"
              btnStyle={{ background: ORANGE, color: "#000", border: "none" }}
            />
            <PriceCard
              bg={TEAM_BG} textColor="#000" badge="TEAM" badgeBg="#79736D" badgeText={CREAM}
              price="Custom" priceColor="#000" tags={["For teams of", "5+"]}
              features={["Everything in Pro", "Team admin + SSO", "Audit logs", "Priority support"]}
              checkColor="#fff" btnLabel="GET IN TOUCH"
              btnStyle={{ border: "1px solid #fff", color: "#fff", background: "transparent" }}
            />
          </div>
        </div>
      </section>

      {/* ── CTA (orange) ── */}
      <section style={{ maxWidth: "1680px", margin: "0 auto", padding: "0 50px 0" }}>
        <div className="l3-orange-box" style={{ background: ORANGE, borderRadius: BR, padding: "100px 80px", textAlign: "center" }}>
          <h2 className="l3-sec-h" style={{ fontFamily: INTER, textTransform: "uppercase", color: "#fff", marginBottom: "16px" }}>
            <span style={{ fontWeight: 700 }}>You know </span>
            <span style={{ fontWeight: 400 }}>what you want to say.</span>
          </h2>
          <p style={{ fontFamily: INTER, fontSize: "18px", fontWeight: 500, color: "rgba(255,255,255,0.8)", textTransform: "uppercase", marginBottom: "50px" }}>
            So say <strong>it</strong>
          </p>
          <a href="#" style={{ display: "inline-block", background: "#fff", borderRadius: "10px", padding: "18px 60px", fontFamily: INTER, fontSize: "16px", fontWeight: 700, textTransform: "uppercase", color: ORANGE }}>
            TRY SENSAY FREE
          </a>
        </div>
      </section>

      {/* ── FOOTER (dark) ── */}
      <footer style={{ background: DARK, padding: "80px 100px 60px" }}>
        <div style={{ maxWidth: "1680px", margin: "0 auto" }}>
          <div className="l3-foot-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "40px" }}>
            <div>
              <p style={{ fontFamily: INTER, fontSize: "16px", lineHeight: "45px", color: CREAM }}>Advertum Agency</p>
              <p style={{ fontFamily: INTER, fontSize: "16px", lineHeight: "45px", color: CREAM }}>since 2009</p>
              <a href="mailto:hello@advertum.com" style={{ fontFamily: INTER, fontSize: "16px", lineHeight: "45px", color: CREAM, display: "block", textDecoration: "underline" }}>hello@advertum.com</a>
              <p style={{ fontFamily: INTER, fontSize: "16px", lineHeight: "45px", color: CREAM }}>+372 5551 1283</p>
            </div>
            <div>
              <p style={{ fontFamily: INTER, fontSize: "16px", lineHeight: "45px", color: CREAM }}>Narva mnt 5, 10117</p>
              <p style={{ fontFamily: INTER, fontSize: "16px", lineHeight: "45px", color: CREAM }}>Tallinn, Harjumaa,</p>
              <p style={{ fontFamily: INTER, fontSize: "16px", lineHeight: "45px", color: CREAM }}>Estonia</p>
              <a href="https://www.google.com/maps?daddr=Narva+mnt+5,+10117+Tallinn" target="_blank" style={{ fontFamily: INTER, fontSize: "16px", lineHeight: "45px", color: CREAM, display: "block", textDecoration: "underline" }}>Get directions</a>
            </div>
            <div>
              <p style={{ fontFamily: INTER, fontSize: "16px", lineHeight: "45px", color: CREAM }}>Follow</p>
              <a href="#" style={{ fontFamily: INTER, fontSize: "16px", fontWeight: 500, lineHeight: "45px", color: CREAM, display: "block", textDecoration: "underline" }}>@advertumofficial</a>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "flex-start" }}>
              <img src={A_FOOTER_IMG} alt="Advertum" style={{ height: "30px", objectFit: "contain" }} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
