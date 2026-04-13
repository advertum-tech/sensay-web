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

function detectMacArchViaWebGL(): "mac-arm" | "mac-x64" {
  try {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl");
    const ext = gl?.getExtension("WEBGL_debug_renderer_info");
    if (!ext) return "mac-arm"; // can't tell — default to ARM (most modern Macs)
    const renderer = (gl?.getParameter(ext.UNMASKED_RENDERER_WEBGL) ?? "").toLowerCase();
    // Apple Silicon GPUs report "apple" in the renderer string
    if (
      renderer.includes("apple") ||
      renderer.includes("m1") ||
      renderer.includes("m2") ||
      renderer.includes("m3") ||
      renderer.includes("m4")
    ) {
      return "mac-arm";
    }
    return "mac-x64";
  } catch {
    return "mac-arm";
  }
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
            if (data.architecture === "x86" || data.architecture === "x86_64") {
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
        // Try WebGL renderer to distinguish ARM vs Intel (reliable in Safari)
        setPlatform(detectMacArchViaWebGL());
      }

      setIsLoading(false);
    }

    detect();
  }, []);

  return { platform, isLoading };
}