"use client";

import { useState } from "react";
import PricingAlert from "./PricingAlert";
import { reachGoal } from "@/app/utils/reachGoal";
import { locale } from "@/app/locales";

const WHITE = "#ffffff";
const TEXT = "#111111";
const CORAL = "#ff4422";
const MUTED = "#888888";
const BORDER = "#e8e8e4";
const SANS = "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif";

const t = locale.pricing;

export default function PricingCards() {
  const [alertTier, setAlertTier] = useState<"free" | "pro" | null>(null);

  return (
    <>
      <section
        id="pricing"
        style={{
          background: "#faf8f6",
          padding: "96px 0",
          borderTop: `1px solid ${BORDER}`,
        }}
      >
        <div style={{ margin: "0 auto", width: "90%", maxWidth: 1200 }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2
              style={{
                color: TEXT,
                fontFamily: SANS,
                fontSize: "clamp(1.8rem,3.5vw,2.4rem)",
                fontWeight: 700,
                letterSpacing: "-.02em",
                margin: "0 0 .75rem",
              }}
            >
              {t.title}
            </h2>
            <p
              style={{
                color: MUTED,
                fontFamily: SANS,
                fontSize: "1rem",
                margin: 0,
              }}
            >
              {t.subtitle}
            </p>
          </div>
          <div
            className="s-three-col"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: 16,
              maxWidth: 880,
              margin: "0 auto",
            }}
          >
            <div className="s-card" style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  color: MUTED,
                  fontFamily: SANS,
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                }}
              >
                {t.free.name}
              </div>
              <div
                style={{
                  color: TEXT,
                  fontFamily: SANS,
                  fontSize: "2.4rem",
                  fontWeight: 700,
                  marginBottom: ".2rem",
                  letterSpacing: "-.02em",
                }}
              >
                {t.free.price}
              </div>
              <div
                style={{
                  color: MUTED,
                  fontFamily: SANS,
                  fontSize: "0.82rem",
                  marginBottom: "1.5rem",
                }}
              >
                {t.free.period}
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 auto", flex: 1 }}>
                {t.free.features.map((item) => (
                  <li
                    key={item}
                    style={{
                      color: TEXT,
                      fontFamily: SANS,
                      fontSize: "0.85rem",
                      lineHeight: "2.2",
                      paddingLeft: "1.4rem",
                      position: "relative",
                    }}
                  >
                    <span style={{ position: "absolute", left: 0, color: "#22c55e", fontWeight: 700 }}>
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => {
                  reachGoal("click_pricing_free");
                  setAlertTier("free");
                }}
                style={{
                  marginTop: "2rem",
                  display: "block",
                  width: "100%",
                  textAlign: "center",
                  border: `1.5px solid ${BORDER}`,
                  color: TEXT,
                  fontFamily: SANS,
                  fontSize: "0.88rem",
                  fontWeight: 600,
                  padding: "12px",
                  borderRadius: 8,
                  background: WHITE,
                  cursor: "pointer",
                }}
              >
                {t.free.cta}
              </button>
            </div>

            <div
              style={{
                background: TEXT,
                border: "none",
                borderRadius: 12,
                padding: "1.75rem",
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: -12,
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: CORAL,
                  color: "#fff",
                  fontFamily: SANS,
                  fontSize: "0.62rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  padding: "4px 14px",
                  borderRadius: 20,
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                }}
              >
                {t.pro.badge}
              </div>
              <div
                style={{
                  color: CORAL,
                  fontFamily: SANS,
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                }}
              >
                {t.pro.name}
              </div>
              <div
                style={{
                  color: WHITE,
                  fontFamily: SANS,
                  fontSize: "2.4rem",
                  fontWeight: 700,
                  marginBottom: ".2rem",
                  letterSpacing: "-.02em",
                }}
              >
                {t.pro.price}
              </div>
              <div
                style={{
                  color: "#888",
                  fontFamily: SANS,
                  fontSize: "0.82rem",
                  marginBottom: "1.5rem",
                }}
              >
                {t.pro.period}
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 auto", flex: 1 }}>
                {t.pro.features.map((item) => (
                  <li
                    key={item}
                    style={{
                      color: "#ddd",
                      fontFamily: SANS,
                      fontSize: "0.85rem",
                      lineHeight: "2.2",
                      paddingLeft: "1.4rem",
                      position: "relative",
                    }}
                  >
                    <span style={{ position: "absolute", left: 0, color: CORAL, fontWeight: 700 }}>
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => {
                  reachGoal("click_pricing_pro");
                  setAlertTier("pro");
                }}
                className="s-cta"
                style={{
                  marginTop: "2rem",
                  display: "block",
                  width: "100%",
                  textAlign: "center",
                  fontSize: "0.88rem",
                  padding: "12px",
                  borderRadius: 8,
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {t.pro.cta}
              </button>
            </div>

            <div className="s-card" style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  color: MUTED,
                  fontFamily: SANS,
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                }}
              >
                {t.team.name}
              </div>
              <div
                style={{
                  color: TEXT,
                  fontFamily: SANS,
                  fontSize: "2.4rem",
                  fontWeight: 700,
                  marginBottom: ".2rem",
                  letterSpacing: "-.02em",
                }}
              >
                {t.team.price}
              </div>
              <div
                style={{
                  color: MUTED,
                  fontFamily: SANS,
                  fontSize: "0.82rem",
                  marginBottom: "1.5rem",
                }}
              >
                {t.team.period}
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 auto", flex: 1 }}>
                {t.team.features.map((item) => (
                  <li
                    key={item}
                    style={{
                      color: TEXT,
                      fontFamily: SANS,
                      fontSize: "0.85rem",
                      lineHeight: "2.2",
                      paddingLeft: "1.4rem",
                      position: "relative",
                    }}
                  >
                    <span style={{ position: "absolute", left: 0, color: "#22c55e", fontWeight: 700 }}>
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="mailto:hi@sensay.app"
                style={{
                  marginTop: "2rem",
                  display: "block",
                  textAlign: "center",
                  border: `1.5px solid ${BORDER}`,
                  color: TEXT,
                  fontFamily: SANS,
                  fontSize: "0.88rem",
                  fontWeight: 600,
                  padding: "12px",
                  borderRadius: 8,
                }}
              >
                {t.team.cta}
              </a>
            </div>
          </div>
        </div>
      </section>

      {alertTier && (
        <PricingAlert
          tier={alertTier}
          visible={true}
          onClose={() => setAlertTier(null)}
        />
      )}
    </>
  );
}
