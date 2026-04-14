"use client";

import { useState } from "react";
import { useLang } from "@/app/context/LanguageContext";
import { usePlatform, type Platform } from "@/app/hooks/usePlatform";
import { SiApple } from "react-icons/si";
import { FaWindows } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import DownloadAlert from "./DownloadAlert";
import { reachGoal } from "@/app/utils/reachGoal";

const CORAL = "#ff4422";
const CORAL2 = "#ff6644";
const MUTED = "#888888";
const SANS = "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif";

const platformParamMap: Record<Platform, Record<string, boolean>> = {
  "mac-arm": { mac_arm: true },
  "mac-x64": { mac_x64: true },
  windows:   { windows: true },
  unknown:   { other: true },
};

const buttonConfig: Record<Platform, { icon: React.ReactNode; labelEn: string; labelRu: string }> = {
  "mac-arm": {
    icon: <SiApple size={20} />,
    labelEn: "Download for Mac (Apple Silicon)",
    labelRu: "Скачать для Mac (Apple Silicon)",
  },
  "mac-x64": {
    icon: <SiApple size={20} />,
    labelEn: "Download for Mac (Intel)",
    labelRu: "Скачать для Mac (Intel)",
  },
  windows: {
    icon: <FaWindows size={20} />,
    labelEn: "Download for Windows",
    labelRu: "Скачать для Windows",
  },
  unknown: {
    icon: <HiOutlineDownload size={20} />,
    labelEn: "Download",
    labelRu: "Скачать",
  },
};

export default function HeroDownload() {
  const lang = useLang();
  const { platform } = usePlatform();
  const [alertVisible, setAlertVisible] = useState(false);
  const [showAllPlatforms, setShowAllPlatforms] = useState(false);

  const config = buttonConfig[platform];

  function handleDownload() {
    reachGoal("click_download_button", { platform: platformParamMap[platform] });
    setShowAllPlatforms(false);
    setAlertVisible(true);
  }

  function handleOtherPlatforms() {
    setShowAllPlatforms(true);
    setAlertVisible(true);
  }

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <button
          onClick={handleDownload}
          className="s-cta"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            border: "none",
            cursor: "pointer",
          }}
        >
          <span style={{ display: "flex", alignItems: "center" }}>{config.icon}</span>
          {lang === "ru" ? config.labelRu : config.labelEn}
        </button>
        <button
          onClick={handleOtherPlatforms}
          style={{
            background: "none",
            border: "none",
            color: MUTED,
            fontFamily: SANS,
            fontSize: "0.8rem",
            fontWeight: 500,
            cursor: "pointer",
            padding: 0,
            transition: "color .15s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.color = CORAL;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.color = MUTED;
          }}
        >
          {lang === "ru" ? "Другие платформы" : "Other platforms"}
        </button>
      </div>

      <DownloadAlert
        visible={alertVisible}
        onClose={() => setAlertVisible(false)}
        showAllPlatforms={showAllPlatforms}
      />
    </>
  );
}