import type { Platform } from "@/app/hooks/usePlatform";

// Per-platform DMG/installer URLs. `null` means the build isn't ready yet —
// UI shows a "Soon" placeholder instead of a download link.
// export const downloadUrls: Record<Platform, string | null> = {
//   "mac-arm":
//     "https://api.sensay.app/storage/v1/object/public/builds/macos/arm64/latest/sensay.dmg",
//   "mac-x64":
//     "https://api.sensay.app/storage/v1/object/public/builds/macos/x64/latest/sensay.dmg",
//   windows:
//     "https://api.sensay.app/storage/v1/object/public/builds/windows/x64/latest/sensay.exe",
//   unknown: null,
// };
export const downloadUrls: Record<Platform, string | null> = {
  "mac-arm":
    "https://sensay-app.s3.eu-west-1.amazonaws.com/macos/arm64/sensay-0.0.2-arm64.dmg",
  "mac-x64":
    "https://sensay-app.s3.eu-west-1.amazonaws.com/macos/x64/sensay-0.0.2-x64.dmg",
  windows:
    "https://sensay-app.s3.eu-west-1.amazonaws.com/windows/x64/sensay-0.0.2-x64.exe",
  // Linux has no single direct download — the wide button opens the picker.
  "linux-x64": null,
  "linux-arm64": null,
  unknown: null,
};

export type LinuxFormat = "deb" | "rpm" | "appimage";
export type LinuxArch = "x86_64" | "arm64";

const S3 = "https://sensay-app.s3.eu-west-1.amazonaws.com";
const LINUX_VERSION = "0.1.0";

// Shown in the download picker next to each OS card.
export const buildVersions = { mac: "0.0.2", windows: "0.0.2", linux: LINUX_VERSION };

// Per-format, per-arch Linux packages. Paths follow the planned S3 layout
// (linux/x86_64, linux/aarch64); files are uploaded per release.
export const linuxDownloads: Record<LinuxFormat, Record<LinuxArch, string>> = {
  deb: {
    x86_64: `${S3}/linux/x86_64/sensay_${LINUX_VERSION}_amd64.deb`,
    arm64: `${S3}/linux/aarch64/sensay_${LINUX_VERSION}_arm64.deb`,
  },
  rpm: {
    x86_64: `${S3}/linux/x86_64/sensay-${LINUX_VERSION}-1.x86_64.rpm`,
    arm64: `${S3}/linux/aarch64/sensay-${LINUX_VERSION}-1.aarch64.rpm`,
  },
  appimage: {
    x86_64: `${S3}/linux/x86_64/Sensay-${LINUX_VERSION}-x86_64.AppImage`,
    arm64: `${S3}/linux/aarch64/Sensay-${LINUX_VERSION}-aarch64.AppImage`,
  },
};

export function linuxArchOf(platform: Platform): LinuxArch | null {
  if (platform === "linux-x64") return "x86_64";
  if (platform === "linux-arm64") return "arm64";
  return null;
}

export function getDownloadUrl(platform: Platform): string | null {
  return downloadUrls[platform];
}
