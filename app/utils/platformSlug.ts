// Canonical OS+arch slug for the 4th fingerprint signal sent to
// register-identity / identify-session. Shapes the browser value into the
// same space Electron uses (`${process.platform}-${process.arch}`), so the
// server canonicalizer produces identical tokens on both sides.
//
// Output alphabet:
//   mac-arm | mac-x64 | win-arm | win-x64 | linux-arm | linux-x64
//   (falls back to navigator.platform when arch can't be detected — e.g.
//   Safari without WebGL renderer info; server treats such values as legacy.)

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

function detectMacArchViaWebGL(): "arm" | "x64" | null {
  try {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl") as WebGLRenderingContext | null;
    const ext = gl?.getExtension("WEBGL_debug_renderer_info");
    if (!ext) return null;
    const renderer = String(gl?.getParameter(ext.UNMASKED_RENDERER_WEBGL) ?? "").toLowerCase();
    if (/apple|m[1-4]/.test(renderer)) return "arm";
    if (renderer) return "x64";
    return null;
  } catch {
    return null;
  }
}

export async function detectPlatformSlug(): Promise<string> {
  if (typeof navigator === "undefined") return "unknown";

  const nav = navigator as NavigatorWithUA;

  if (nav.userAgentData) {
    try {
      const data = await nav.userAgentData.getHighEntropyValues(["architecture", "platform"]);
      const arch =
        data.architecture === "arm" ? "arm" :
        data.architecture === "x86" || data.architecture === "x86_64" ? "x64" :
        null;
      if (arch) {
        if (data.platform === "macOS") return `mac-${arch}`;
        if (data.platform === "Windows") return `win-${arch}`;
        if (data.platform === "Linux") return `linux-${arch}`;
      }
    } catch {
      // fall through to UA sniffing
    }
  }

  const ua = navigator.userAgent.toLowerCase();

  if (ua.includes("windows")) {
    // ARM Windows is rare and UA rarely advertises it explicitly; default to x64.
    return ua.includes("arm64") ? "win-arm" : "win-x64";
  }

  if (ua.includes("mac os x") || ua.includes("macos")) {
    const arch = detectMacArchViaWebGL();
    if (arch) return `mac-${arch}`;
    // WebGL unavailable (headless, some privacy modes) — emit legacy value
    // so the server treats it as "arch unknown" instead of guessing wrong.
    return navigator.platform;
  }

  if (ua.includes("linux")) {
    return ua.includes("aarch64") || ua.includes("arm64") ? "linux-arm" : "linux-x64";
  }

  return navigator.platform || "unknown";
}
