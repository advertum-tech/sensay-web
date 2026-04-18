"use client";

import { useEffect } from "react";

const TEXT = "#111111";
const CORAL = "#ff4422";
const WHITE = "#ffffff";
const SANS = "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif";

const messages: Record<"free" | "pro", { title: string; body: string; btn: string }> = {
  free: {
    title: "You're in!",
    body: "Sensay Free is ready for you. We'll send a quick start guide to your email.",
    btn: "Got it",
  },
  pro: {
    title: "Welcome to Pro!",
    body: "Your 14-day free trial starts now. No credit card needed — we'll remind you before it ends.",
    btn: "Sounds good",
  },
};

interface PricingAlertProps {
  tier: "free" | "pro";
  visible: boolean;
  onClose: () => void;
}

export default function PricingAlert({ tier, visible, onClose }: PricingAlertProps) {
  useEffect(() => {
    if (!visible) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [visible, onClose]);

  if (!visible) return null;

  const m = messages[tier];

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,.45)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: WHITE,
          borderRadius: 16,
          padding: "2.5rem",
          maxWidth: 420,
          width: "90%",
          boxShadow: "0 16px 48px rgba(0,0,0,.18)",
          textAlign: "center",
          fontFamily: SANS,
        }}
      >
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            background: tier === "pro" ? CORAL : "#22c55e15",
            color: tier === "pro" ? WHITE : "#22c55e",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 1.5rem",
            fontSize: "1.5rem",
            fontWeight: 700,
          }}
        >
          ✓
        </div>
        <h3
          style={{
            color: TEXT,
            fontFamily: SANS,
            fontSize: "1.3rem",
            fontWeight: 700,
            margin: "0 0 .75rem",
            letterSpacing: "-.01em",
          }}
        >
          {m.title}
        </h3>
        <p
          style={{
            color: "#888888",
            fontFamily: SANS,
            fontSize: "0.9rem",
            lineHeight: 1.7,
            margin: "0 0 1.5rem",
          }}
        >
          {m.body}
        </p>
        <button
          onClick={onClose}
          style={{
            background: CORAL,
            color: WHITE,
            fontFamily: SANS,
            fontSize: "0.9rem",
            fontWeight: 600,
            padding: "12px 36px",
            border: "none",
            borderRadius: 8,
            cursor: "pointer",
          }}
        >
          {m.btn}
        </button>
      </div>
    </div>
  );
}
