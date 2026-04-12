"use client";

import { useEffect } from "react";
import { useLang, type Lang } from "@/app/context/LanguageContext";
import { SiApple } from "react-icons/si";
import { FaWindows } from "react-icons/fa";
import type { Platform } from "@/app/hooks/usePlatform";
import { registerIdentity } from "@/app/utils/registerIdentity";
import { reachGoal } from "@/app/utils/reachGoal";

const TEXT = "#111111";
const CORAL = "#ff4422";
const WHITE = "#ffffff";
const MUTED = "#888888";
const BORDER = "#e8e8e4";
const SANS = "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif";

const titles: Record<Lang, string> = {
  en: "Thanks for downloading!",
  ru: "Спасибо за скачивание!",
};

const bodies: Record<Lang, string> = {
  en: "We're in early testing — your feedback matters.",
  ru: "Мы в режиме тестирования — ваш отзыв важен.",
};

const btnLabels: Record<Lang, string> = {
  en: "Got it",
  ru: "Понятно",
};

const otherTitle: Record<Lang, string> = {
  en: "Download for your platform",
  ru: "Скачайте для вашей платформы",
};

interface PlatformOption {
  key: Platform;
  goal: string;
  icon: React.ReactNode;
  labelEn: string;
  labelRu: string;
}

const platformOptions: PlatformOption[] = [
  {
    key: "mac-arm",
    goal: "download_mac_arm",
    icon: <SiApple size={18} />,
    labelEn: "Mac (Apple Silicon)",
    labelRu: "Mac (Apple Silicon)",
  },
  {
    key: "mac-x64",
    goal: "download_mac_x64",
    icon: <SiApple size={18} />,
    labelEn: "Mac (Intel)",
    labelRu: "Mac (Intel)",
  },
  {
    key: "windows",
    goal: "download_windows",
    icon: <FaWindows size={18} />,
    labelEn: "Windows",
    labelRu: "Windows",
  },
];

interface DownloadAlertProps {
  visible: boolean;
  onClose: () => void;
  showAllPlatforms: boolean;
}

export default function DownloadAlert({ visible, onClose, showAllPlatforms }: DownloadAlertProps) {
  const lang = useLang();

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
          {titles[lang]}
        </h3>
        <p
          style={{
            color: MUTED,
            fontFamily: SANS,
            fontSize: "0.9rem",
            lineHeight: 1.7,
            margin: showAllPlatforms ? "0 0 1.5rem" : "0 0 1.5rem",
          }}
        >
          {bodies[lang]}
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
              {otherTitle[lang]}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {platformOptions.map((opt) => (
                <button
                  key={opt.key}
                  onClick={() => {
                    reachGoal(opt.goal);
                    registerIdentity();
                  }}
                  style={{
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
                    cursor: "pointer",
                    transition: "border-color .15s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = CORAL;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = BORDER;
                  }}
                >
                  <span style={{ display: "flex", alignItems: "center", color: MUTED }}>{opt.icon}</span>
                  {lang === "ru" ? opt.labelRu : opt.labelEn}
                </button>
              ))}
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
          {btnLabels[lang]}
        </button>
      </div>
    </div>
  );
}