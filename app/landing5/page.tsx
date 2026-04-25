"use client";
import { useEffect, useState } from "react";
import SensayWordmark from "@/app/components/SensayWordmark";

const W = 1680;
const H = 11663;

export default function Landing5() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const update = () => setScale(Math.min(1, window.innerWidth / W));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      `}</style>
      <div style={{ width: "100%", height: `${H * scale}px`, overflow: "hidden", background: "#DED8CC" }}>
        <div
          style={{
            width: W,
            height: H,
            position: "relative",
            transformOrigin: "top left",
            transform: `scale(${scale})`,
            fontFamily: "'Inter', system-ui, sans-serif",
            background: "#DED8CC",
          }}
        >

          {/* ═══ HEADER ═══ */}

          <img
            src="/landing5/header-union.svg"
            alt=""
            style={{ position: "absolute", left: 40, top: 40, width: 1590, height: 70 }}
          />
          <img
            src="/landing5/header-logo.svg"
            alt=""
            style={{ position: "absolute", left: 159, top: 54, width: 41, height: 40 }}
          />
          <div
            style={{
              position: "absolute",
              left: 209,
              top: 63,
              fontSize: 18,
              lineHeight: "normal",
              color: "rgba(0,0,0,0.8)",
              whiteSpace: "nowrap",
            }}
          >
            <SensayWordmark />
          </div>
          <div
            style={{
              position: "absolute",
              left: 1441,
              top: 60,
              width: 99,
              height: 30,
              background: "#fff",
              border: "1px solid rgba(0,0,0,0.6)",
              borderRadius: 5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <span style={{ fontSize: 14, fontWeight: 700, color: "#FC482F", textTransform: "uppercase" }}>
              TRY FREE
            </span>
          </div>

          {/* ═══ HERO ═══ */}

          <div
            style={{
              position: "absolute",
              left: 149,
              top: 172,
              fontSize: 20,
              fontWeight: 700,
              color: "#79736D",
              textTransform: "uppercase",
              letterSpacing: "0.01em",
            }}
          >
            Voice dictation · works in any app
          </div>

          <div style={{ position: "absolute", left: 153, top: 219 }}>
            <div style={{ fontSize: 140, lineHeight: "120px", fontWeight: 700, letterSpacing: "-4px", color: "#000", textTransform: "uppercase" }}>JUST</div>
            <div style={{ fontSize: 140, lineHeight: "120px", fontWeight: 700, letterSpacing: "-4px", color: "#000", textTransform: "uppercase" }}>SAY</div>
            <div style={{ fontSize: 140, lineHeight: "120px", fontWeight: 700, letterSpacing: "-4px", color: "#FC482F", textTransform: "uppercase" }}>IT.</div>
          </div>

          <div
            style={{
              position: "absolute",
              left: 650,
              top: 219,
              width: 445,
              fontSize: 16,
              fontWeight: 500,
              lineHeight: "28px",
              color: "#000",
              textTransform: "uppercase",
            }}
          >
            {"Speak. Get clean, ready-to-send text — in your email, Slack, WhatsApp, or anywhere else. "}
            <span style={{ fontWeight: 700 }}>No typing. No switching apps.</span>
          </div>

          <img
            src="/landing5/hero-person.png"
            alt=""
            style={{ position: "absolute", left: 783, top: 406, width: 382, height: 382 }}
          />
          <img
            src="/landing5/hero-bubble.svg"
            alt=""
            style={{ position: "absolute", left: 517, top: 396, width: 384, height: 329 }}
          />
          <img
            src="/landing5/hero-iphone.png"
            alt=""
            style={{ position: "absolute", left: 1199, top: 486, width: 310, height: 302 }}
          />
          {/* Loved by 12,000+ badge */}
          <div style={{ position: "absolute", left: 1229, top: 209, width: 226, height: 186 }}>
            <img src="/landing5/loved-circle.svg" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} />
            <div style={{ position: "absolute", left: "50%", top: 39, transform: "translateX(-50%) rotate(-5deg)" }}>
              <img src="/landing5/loved-avatars.svg" alt="" style={{ width: 59, height: 25, display: "block" }} />
            </div>
            <div style={{
              position: "absolute",
              left: "50%",
              top: 69,
              transform: "translateX(-50%) rotate(-5deg)",
              width: 138,
              textAlign: "center",
              fontSize: 14,
              lineHeight: "28px",
              textTransform: "uppercase",
              color: "#000",
              whiteSpace: "nowrap",
            }}>
              <div>Loved by <span style={{ fontWeight: 700 }}>12,000+</span></div>
              <div style={{ fontWeight: 500 }}>people already</div>
            </div>
          </div>
          {/* First dashed path: from man to phone (left of phone) */}
          <img src="/landing5/hero-dashed-1.svg" alt="" style={{ position: "absolute", left: 983, top: 539, width: 238, height: 123, pointerEvents: "none" }} />
          {/* Sensay wordmark on iPhone screen — real HTML, not PNG */}
          <p
            style={{
              position: "absolute",
              left: 1250,
              top: 567,
              fontSize: 14,
              lineHeight: "normal",
              color: "#fff",
              whiteSpace: "nowrap",
              transform: "rotate(-5deg)",
              transformOrigin: "top left",
              margin: 0,
            }}
          >
            <SensayWordmark />
          </p>
          {/* iPhone screen word bubbles — real HTML chips, not PNG */}
          {[
            { left: 1242, top: 631, text: "HEY," },
            { left: 1300, top: 626, text: "HOW’S" },
            { left: 1375, top: 619, text: "IT" },
            { left: 1244, top: 653, text: "GOING?" },
            { left: 1337, top: 644, text: "WITH" },
            { left: 1246, top: 674, text: "SENSAY," },
            { left: 1335, top: 667, text: "EVERYTHING" },
            { left: 1390, top: 684, text: "—" },
            { left: 1248, top: 696, text: "JUST" },
            { left: 1310, top: 691, text: "WORKS" },
            { left: 1399, top: 705, text: "AND" },
            { left: 1315, top: 713, text: "SIMPLE," },
            { left: 1250, top: 718, text: "FAST," },
            { left: 1252, top: 740, text: "EFFORTLESS." },
          ].map(({ left, top, text }) => (
            <div
              key={text}
              style={{
                position: "absolute",
                left,
                top,
                background: "#fff",
                borderRadius: 30,
                padding: "5px 10px",
                display: "inline-flex",
                alignItems: "center",
                transform: "rotate(-5deg)",
                whiteSpace: "nowrap",
                fontSize: 16,
                fontWeight: 700,
                color: "#FC482F",
                textTransform: "uppercase",
                lineHeight: "20px",
              }}
            >
              {text}
            </div>
          ))}
          {/* Sensay recording button (orange circle) */}
          <img
            src="/landing5/hero-record-btn.png"
            alt=""
            style={{ position: "absolute", left: 1066, top: 609, width: 84, height: 84 }}
          />
          {/* Mic button on photo */}
          <img
            src="/landing5/hero-mic-btn.svg"
            alt=""
            style={{ position: "absolute", left: 783, top: 734, width: 30, height: 30 }}
          />
          {/* White dashed path from phone area curving down through sections */}
          <img src="/landing5/hero-dashed-2.svg" alt="" style={{ position: "absolute", left: 929, top: 629, width: 650, height: 1004, pointerEvents: "none" }} />

          <div
            style={{
              position: "absolute",
              left: 153,
              top: 631,
              width: 280,
              height: 60,
              background: "#FC482F",
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <span style={{ fontSize: 16, fontWeight: 700, color: "#fff", textTransform: "uppercase" }}>
              Start free — no signup
            </span>
          </div>

          <div
            style={{
              position: "absolute",
              left: 153,
              top: 709,
              fontSize: 14,
              fontWeight: 600,
              color: "#000",
              textTransform: "uppercase",
              letterSpacing: "0.04em",
              cursor: "pointer",
            }}
          >
            See how →
          </div>

          <div
            style={{
              position: "absolute",
              left: 153,
              top: 788,
              width: 1376,
              height: 1,
              background: "#fff",
            }}
          />

        </div>
      </div>
    </>
  );
}
