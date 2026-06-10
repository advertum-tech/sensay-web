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
  unknown: null,
};

export function getDownloadUrl(platform: Platform): string | null {
  return downloadUrls[platform];
}
