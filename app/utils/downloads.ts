import type { Platform } from "@/app/hooks/usePlatform";

// Per-platform DMG/installer URLs. `null` means the build isn't ready yet —
// UI shows a "Soon" placeholder instead of a download link.
export const downloadUrls: Record<Platform, string | null> = {
  "mac-arm":
    "https://api.sensay.app/storage/v1/object/public/builds/macos/arm64/latest/sensay.dmg",
  "mac-x64":
    "https://api.sensay.app/storage/v1/object/public/builds/macos/x64/latest/sensay.dmg",
  windows:
    "https://api.sensay.app/storage/v1/object/public/builds/windows/x64/latest/sensay.exe",
  unknown: null,
};

export function getDownloadUrl(platform: Platform): string | null {
  return downloadUrls[platform];
}
