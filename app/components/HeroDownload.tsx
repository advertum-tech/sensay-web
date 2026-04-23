"use client";

import { useState } from "react";
import { usePlatform, type Platform } from "@/app/hooks/usePlatform";
import { SiApple } from "react-icons/si";
import { FaWindows } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import DownloadAlert from "./DownloadAlert";
import { reachGoal } from "@/app/utils/reachGoal";
import { locale } from "@/app/locales";
import { getDownloadUrl } from "@/app/utils/downloads";

const CORAL = "#ff4422";
const MUTED = "#888888";
const SANS = "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif";

const platformParamMap: Record<Platform, Record<string, boolean>> = {
  "mac-arm": { mac_arm: true },
  "mac-x64": { mac_x64: true },
  windows:   { windows: true },
  unknown:   { other: true },
};

const t = locale.heroDownload;

const buttonConfig: Record<Platform, { icon: React.ReactNode; label: string }> = {
  "mac-arm": { icon: <SiApple size={20} />, label: t.macArm },
  "mac-x64": { icon: <SiApple size={20} />, label: t.macIntel },
  windows:   { icon: <FaWindows size={20} />, label: t.windows },
  unknown:   { icon: <HiOutlineDownload size={20} />, label: t.generic },
};

const primaryCtaStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 10,
  border: "none",
  cursor: "pointer",
  color: "#ffffff",
};

export default function HeroDownload() {
  const { platform } = usePlatform();
  const [alertVisible, setAlertVisible] = useState(false);
  const [showAllPlatforms, setShowAllPlatforms] = useState(false);

  const config = buttonConfig[platform];
  const downloadUrl = getDownloadUrl(platform);

  function handleDownloadClick() {
    reachGoal("click_download_button", { platform: platformParamMap[platform] });
    setShowAllPlatforms(false);
    setAlertVisible(true);
  }

  function handleOtherPlatforms() {
    setShowAllPlatforms(true);
    setAlertVisible(true);
  }

  const primaryButton = downloadUrl ? (
    <a
      href={downloadUrl}
      onClick={handleDownloadClick}
      className="s-cta"
      style={primaryCtaStyle}
    >
      <span style={{ display: "flex", alignItems: "center" }}>{config.icon}</span>
      {config.label}
    </a>
  ) : (
    <button
      type="button"
      onClick={handleDownloadClick}
      className="s-cta"
      style={primaryCtaStyle}
    >
      <span style={{ display: "flex", alignItems: "center" }}>{config.icon}</span>
      {config.label}
    </button>
  );

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {primaryButton}
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
          {t.otherPlatforms}
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
