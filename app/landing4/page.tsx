"use client";
import { useEffect, useState } from "react";

const W = 1680;
const H = 11663;

export default function Landing4() {
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
      <div style={{ width: "100%", height: `${H * scale}px`, overflow: "hidden" }}>
        <div
          style={{
            width: W,
            height: H,
            position: "relative",
            transformOrigin: "top left",
            transform: `scale(${scale})`,
            fontFamily: "'Inter', system-ui, sans-serif",
            background: "#E3DAD0",
          }}
        >

          {/* ═══ HEADER ═══ */}

          <img
            src="https://www.figma.com/api/mcp/asset/06f3c079-d14e-4ea5-96b1-bcdc8cdb1bbe"
            alt=""
            style={{ position: "absolute", left: 40, top: 40, width: 1590, height: 70 }}
          />
          <img
            src="https://www.figma.com/api/mcp/asset/88d9acc8-8910-4d84-8546-2b868fefb9d9"
            alt=""
            style={{ position: "absolute", left: 159, top: 54, width: 41, height: 41 }}
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
            <span style={{ fontWeight: 400 }}>Sen</span>
            <span style={{ fontWeight: 800 }}>Say</span>
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
            <span style={{ fontSize: 14, fontWeight: 700, color: "#FF4122", textTransform: "uppercase", letterSpacing: "0.02em" }}>
              TRY FREE
            </span>
          </div>

          {/* ═══ HERO ═══ */}

          {/* Badge */}
          <div
            style={{
              position: "absolute",
              left: 149,
              top: 172,
              height: 28,
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontSize: 11,
                fontWeight: 500,
                color: "#000",
                border: "1px solid #817E73",
                borderRadius: 100,
                padding: "4px 14px",
                whiteSpace: "nowrap",
                textTransform: "uppercase",
                letterSpacing: "0.04em",
              }}
            >
              Voice dictation · works in any app
            </span>
          </div>

          {/* Headline */}
          <div style={{ position: "absolute", left: 153, top: 219 }}>
            <div style={{ fontSize: 140, lineHeight: "120px", fontWeight: 700, letterSpacing: "-4px", color: "#000", textTransform: "uppercase" }}>JUST</div>
            <div style={{ fontSize: 140, lineHeight: "120px", fontWeight: 700, letterSpacing: "-4px", color: "#000", textTransform: "uppercase" }}>SAY</div>
            <div style={{ fontSize: 140, lineHeight: "120px", fontWeight: 700, letterSpacing: "-4px", color: "#FF4122", textTransform: "uppercase" }}>IT.</div>
          </div>

          {/* Subtitle */}
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

          {/* Brain bubble — behind photo */}
          <img
            src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/657ae9e1-6704-4a1e-82de-4de7cb581208"
            alt=""
            style={{ position: "absolute", left: 517, top: 396, width: 384, height: 329 }}
          />

          {/* Hero photo */}
          <img
            src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7f1012f9-63a4-4b91-b99a-d98c20c84a80"
            alt=""
            style={{ position: "absolute", left: 783, top: 406, width: 382, height: 382 }}
          />

          {/* iPhone mockup */}
          <img
            src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/56c359a8-1902-424a-bc43-428b69bb453f"
            alt=""
            style={{ position: "absolute", left: 1199, top: 486, width: 310, height: 302 }}
          />

          {/* Loved by */}
          <img
            src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5cc7572d-f6c0-4225-83ee-20beea0af299"
            alt="Loved by 12,000+ people already"
            style={{ position: "absolute", left: 1229, top: 209, width: 226, height: 186 }}
          />

          {/* CTA button */}
          <div
            style={{
              position: "absolute",
              left: 153,
              top: 631,
              width: 280,
              height: 60,
              background: "#FF4122",
              borderRadius: 5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <span style={{ fontSize: 16, fontWeight: 700, color: "#fff", textTransform: "uppercase", letterSpacing: "0.01em" }}>
              Start free — no signup
            </span>
          </div>

          {/* See how → */}
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

          {/* Divider */}
          <div
            style={{
              position: "absolute",
              left: 153,
              top: 789,
              width: 1376,
              height: 1,
              background: "#817E73",
            }}
          />

        </div>
      </div>
    </>
  );
}
