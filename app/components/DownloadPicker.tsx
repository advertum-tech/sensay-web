"use client";

import { useEffect, type ReactNode } from "react";
import { SiApple } from "react-icons/si";
import { FaWindows, FaLinux, FaAppStoreIos, FaAndroid } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import type { Platform } from "@/app/hooks/usePlatform";
import { reachGoal } from "@/app/utils/reachGoal";
import { locale } from "@/app/locales";
import { downloadUrls, linuxDownloads, buildVersions } from "@/app/utils/downloads";
import AnimatedSensayLogoHover from "@/app/landing/components/AnimatedSensayLogoHover";

const SANS = "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif";

const t = locale.downloadPicker;

interface Chip {
  label: string;
  url: string | null;
  platform: Platform;
  param: Record<string, boolean>;
  format: string;
}

interface Row {
  label: string;
  ext: string;
  chips: Chip[];
}

interface OsCard {
  id: string;
  name: string;
  version: string;
  help: string;
  icon: ReactNode;
  platforms: Platform[];
  rows: Row[];
}

// One card per OS; a chip is one downloadable file (format × architecture).
const cards: OsCard[] = [
  {
    id: "mac",
    name: t.mac.name,
    version: buildVersions.mac,
    help: t.mac.help,
    icon: <SiApple size={18} />,
    platforms: ["mac-arm", "mac-x64"],
    rows: [
      {
        label: t.mac.diskImage,
        ext: ".dmg",
        chips: [
          { label: t.mac.appleSilicon, url: downloadUrls["mac-arm"], platform: "mac-arm", param: { mac_arm: true }, format: "dmg" },
          { label: t.mac.intel, url: downloadUrls["mac-x64"], platform: "mac-x64", param: { mac_x64: true }, format: "dmg" },
        ],
      },
    ],
  },
  {
    id: "windows",
    name: t.windows.name,
    version: buildVersions.windows,
    help: t.windows.help,
    icon: <FaWindows size={18} />,
    platforms: ["windows"],
    rows: [
      {
        label: t.windows.app,
        ext: ".exe",
        chips: [
          { label: t.windows.x64, url: downloadUrls.windows, platform: "windows", param: { windows: true }, format: "exe" },
        ],
      },
    ],
  },
  {
    id: "linux",
    name: t.linux.name,
    version: buildVersions.linux,
    help: t.linux.help,
    icon: <FaLinux size={18} />,
    platforms: ["linux-x64", "linux-arm64"],
    rows: (
      [
        ["deb", t.linux.deb, ".deb"],
        ["rpm", t.linux.rpm, ".rpm"],
        ["appimage", t.linux.appimage, "AppImage"],
      ] as const
    ).map(([format, label, ext]): Row => ({
      label,
      ext,
      chips: [
        { label: "x86_64", url: linuxDownloads[format].x86_64, platform: "linux-x64", param: { linux_x64: true }, format },
        { label: "arm64", url: linuxDownloads[format].arm64, platform: "linux-arm64", param: { linux_arm64: true }, format },
      ],
    })),
  },
];

const soonPlatforms: { key: string; icon: ReactNode; label: string }[] = [
  { key: "ios", icon: <FaAppStoreIos size={18} />, label: t.ios },
  { key: "android", icon: <FaAndroid size={18} />, label: t.android },
];

interface DownloadPickerProps {
  visible: boolean;
  onClose: () => void;
  platform: Platform;
}

export default function DownloadPicker({ visible, onClose, platform }: DownloadPickerProps) {
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
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/45 p-4"
    >
      <div
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        className="w-[min(520px,100%)] max-h-[calc(100vh-32px)] overflow-auto rounded-2xl bg-white p-6 md:p-8 text-left text-[#111111]"
        style={{ fontFamily: SANS }}
      >
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#ff4422]">
          <AnimatedSensayLogoHover width={33} height={32} />
        </div>
        <h3 className="mb-1.5 text-center text-[1.3rem] font-bold tracking-[-.01em]">{t.title}</h3>
        <p className="mb-6 text-center text-[.88rem] text-[#888888]">{t.body}</p>

        <div className="grid grid-cols-1 gap-3">
          {cards.map((card) => {
            const mine = card.platforms.includes(platform);
            return (
              <section
                key={card.id}
                style={{ order: mine ? 0 : 1 }}
                className={`min-w-0 rounded-xl border-[1.5px] bg-white px-4 pb-2 pt-3.5 ${mine ? "border-[#ff4422]" : "border-[#e8e8e4]"}`}
              >
                <div className="mb-1 flex items-center gap-2.5">
                  <span className="flex text-[#888888]">{card.icon}</span>
                  <span className="text-[.95rem] font-semibold">{card.name}</span>
                  {mine && (
                    <span className="whitespace-nowrap rounded-[10px] bg-[#ff4422]/10 px-2 py-0.5 text-[.62rem] font-bold uppercase tracking-[.1em] text-[#ff4422]">
                      {t.yourDevice}
                    </span>
                  )}
                  <span className="ml-auto font-mono text-[.72rem] tabular-nums text-[#888888]">v{card.version}</span>
                </div>
                <p className="mb-1.5 text-[.78rem] text-[#888888]">{card.help}</p>

                {card.rows.map((row, i) => (
                  <div
                    key={row.label}
                    // First separator (header → options) runs edge to edge of the card.
                    className={`flex flex-wrap items-center justify-between gap-x-2.5 gap-y-1.5 pb-2 ${i === 0 ? "-mx-4 border-t-2 border-dotted border-black/15 px-4 pt-4" : "border-t border-[#e8e8e4] pt-2"}`}
                  >
                    <div className="flex flex-col whitespace-nowrap text-[.84rem] font-medium leading-[1.2]">
                      {row.label}
                      <small className="font-mono text-[.72rem] font-normal text-[#888888]">{row.ext}</small>
                    </div>
                    <div className="ml-auto flex flex-wrap justify-end gap-1.5">
                      {row.chips.map((chip) =>
                        chip.url ? (
                          <a
                            key={chip.label}
                            href={chip.url}
                            onClick={() => {
                              reachGoal("click_download_button", { platform: chip.param, format: chip.format });
                            }}
                            className={`group/chip inline-flex items-center rounded-md border-[1.5px] px-2.5 py-1.5 text-[.74rem] font-semibold leading-tight tabular-nums transition-colors ${
                              chip.platform === platform
                                ? "border-[#ff4422] bg-[#ff4422] text-white hover:border-[#ff6644] hover:bg-[#ff6644]"
                                : "border-[#e8e8e4] hover:border-[#ff4422] hover:text-[#ff4422]"
                            }`}
                          >
                            {/* Icon slot grows from 0 on hover; no hover on touch screens, so it stays hidden there. */}
                            <span className="inline-flex w-0 shrink-0 overflow-hidden opacity-0 transition-[width,opacity,margin-right] duration-200 ease-out group-hover/chip:mr-1 group-hover/chip:w-[13px] group-hover/chip:opacity-100">
                              <HiOutlineDownload size={13} className="shrink-0" />
                            </span>
                            {chip.label}
                          </a>
                        ) : (
                          <span
                            key={chip.label}
                            className="inline-block cursor-not-allowed rounded-md border-[1.5px] border-[#e8e8e4] px-2.5 py-1.5 text-[.66rem] font-semibold uppercase tracking-[.08em] opacity-[.55]"
                          >
                            {t.soon}
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                ))}
              </section>
            );
          })}
        </div>

        <div className="mt-3 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-2">
          {soonPlatforms.map((p) => (
            <div
              key={p.key}
              className="flex cursor-not-allowed items-center justify-between gap-2.5 rounded-lg border-[1.5px] border-[#e8e8e4] px-4 py-2.5 text-[.88rem] font-medium opacity-[.55]"
            >
              <span className="inline-flex items-center gap-2.5">
                <span className="flex text-[#888888]">{p.icon}</span>
                {p.label}
              </span>
              <span className="text-[.72rem] font-semibold uppercase tracking-[.08em] text-[#888888]">{t.soon}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer rounded-lg bg-[#ff4422] px-9 py-3 text-[.9rem] font-semibold text-white transition-colors hover:bg-[#ff6644]"
          >
            {t.btn}
          </button>
        </div>
      </div>
    </div>
  );
}
