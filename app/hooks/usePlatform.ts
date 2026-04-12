"use client";

import { useEffect, useState } from "react";

export type Platform = "mac-arm" | "mac-x64" | "windows" | "unknown";

interface NavigatorWithUA extends Navigator {
  userAgentData?: {
    platform?: string;
    getHighEntropyValues: (keys: string[]) => Promise<{
      architecture?: string;
      platform?: string;
      bitness?: string;
    }>;
  };
}

export function usePlatform(): { platform: Platform; isLoading: boolean } {
  const [platform, setPlatform] = useState<Platform>("unknown");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function detect() {
      // 1. Try Client Hints (Chrome/Edge)
      const nav = navigator as NavigatorWithUA;
      if (nav.userAgentData) {
        try {
          const data = await nav.userAgentData.getHighEntropyValues(["architecture", "platform", "bitness"]);

          if (data.platform === "macOS") {
            if (data.architecture === "x86_64") {
              setPlatform("mac-x64");
            } else {
              setPlatform("mac-arm");
            }
            setIsLoading(false);
            return;
          }

          if (data.platform === "Windows") {
            setPlatform("windows");
            setIsLoading(false);
            return;
          }
        } catch {
          // fall through
        }
      }

      // 2. Fallback: User Agent (Safari, Firefox, etc.)
      const ua = navigator.userAgent.toLowerCase();

      if (ua.includes("win") || ua.includes("windows")) {
        setPlatform("windows");
      } else if (ua.includes("mac os x") || ua.includes("macos")) {
        setPlatform("mac-arm");
      }

      setIsLoading(false);
    }

    detect();
  }, []);

  return { platform, isLoading };
}