"use client";

import { useEffect } from "react";
import { SiApple } from "react-icons/si";
import { FaWindows } from "react-icons/fa";
import type { Platform } from "@/app/hooks/usePlatform";
import { reachGoal } from "@/app/utils/reachGoal";
import { locale } from "@/app/locales";
import { getDownloadUrl } from "@/app/utils/downloads";

const TEXT = "#111111";
const CORAL = "#ff4422";
const WHITE = "#ffffff";
const MUTED = "#888888";
const BORDER = "#e8e8e4";
const SANS = "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif";

const t = locale.downloadAlert;

interface PlatformOption {
  key: Platform;
  platform: Record<string, boolean>;
  icon: React.ReactNode;
  label: string;
}

const platformOptions: PlatformOption[] = [
  {
    key: "mac-arm",
    platform: { mac_arm: true },
    icon: <SiApple size={18} />,
    label: "Mac (Apple Silicon)",
  },
  {
    key: "mac-x64",
    platform: { mac_x64: true },
    icon: <SiApple size={18} />,
    label: "Mac (Intel)",
  },
  {
    key: "windows",
    platform: { windows: true },
    icon: <FaWindows size={18} />,
    label: "Windows",
  },
];

interface DownloadAlertProps {
  visible: boolean;
  onClose: () => void;
  showAllPlatforms: boolean;
}

export default function DownloadAlert({ visible, onClose, showAllPlatforms }: DownloadAlertProps) {
  useEffect(() => {
    if (!visible) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [visible, onClose]);

  if (!visible) return null;

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
          maxWidth: 460,
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
            background: "#22c55e15",
            color: "#22c55e",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 1.5rem",
            fontSize: "1.5rem",
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
          {t.title}
        </h3>
        <p
          style={{
            color: MUTED,
            fontFamily: SANS,
            fontSize: "0.9rem",
            lineHeight: 1.7,
            margin: "0 0 1.5rem",
          }}
        >
          {t.body}
        </p>

        {showAllPlatforms && (
          <div style={{ marginBottom: "1.5rem", textAlign: "left" }}>
            <div
              style={{
                color: TEXT,
                fontFamily: SANS,
                fontSize: "0.78rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              {t.otherTitle}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {platformOptions.map((opt) => {
                const url = getDownloadUrl(opt.key);
                const commonRowStyle: React.CSSProperties = {
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  width: "100%",
                  padding: "10px 16px",
                  borderRadius: 8,
                  border: `1.5px solid ${BORDER}`,
                  background: WHITE,
                  color: TEXT,
                  fontFamily: SANS,
                  fontSize: "0.88rem",
                  fontWeight: 500,
                  textAlign: "left",
                };

                if (url) {
                  return (
                    <a
                      key={opt.key}
                      href={url}
                      onClick={() => {
                        reachGoal("click_download_button", { platform: opt.platform });
                      }}
                      style={{
                        ...commonRowStyle,
                        cursor: "pointer",
                        textDecoration: "none",
                        transition: "border-color .15s",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = CORAL;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = BORDER;
                      }}
                    >
                      <span style={{ display: "flex", alignItems: "center", color: MUTED }}>
                        {opt.icon}
                      </span>
                      {opt.label}
                    </a>
                  );
                }

                return (
                  <div
                    key={opt.key}
                    style={{
                      ...commonRowStyle,
                      cursor: "not-allowed",
                      opacity: 0.55,
                      justifyContent: "space-between",
                    }}
                  >
                    <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ display: "flex", alignItems: "center", color: MUTED }}>
                        {opt.icon}
                      </span>
                      {opt.label}
                    </span>
                    <span
                      style={{
                        color: MUTED,
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                      }}
                    >
                      {t.soonLabel}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

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
          {t.btn}
        </button>
      </div>
    </div>
  );
}
