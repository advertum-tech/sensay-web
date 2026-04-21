// Canonical platform enum sent to register-identity / identify-session and
// stored verbatim in public.users.platform. Same alphabet in Electron
// (src/helpers/supabaseService.js) — clients resolve, server persists.
//
// Alphabet: mac_intel | mac_arm | win32 | linux
//   - Intel vs ARM is tracked only for macOS (Apple Silicon migration is
//     ongoing and the split is analytically meaningful).
//   - Windows and Linux collapse all archs into a single value; ARM share
//     there is negligible for this app.
//
// Returns null when detection fails (exotic UA, headless env). register-identity
// accepts a missing platform; identify-session does not — but that path runs
// only in Electron, where detection is deterministic from process.platform.

export type PlatformSlug = "mac_intel" | "mac_arm" | "win32" | "linux";

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

function detectMacArchViaWebGL(): "arm" | "intel" | null {
  try {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl") as WebGLRenderingContext | null;
    const ext = gl?.getExtension("WEBGL_debug_renderer_info");
    if (!ext) return null;
    const renderer = String(gl?.getParameter(ext.UNMASKED_RENDERER_WEBGL) ?? "").toLowerCase();
    if (/apple|m[1-4]/.test(renderer)) return "arm";
    if (renderer) return "intel";
    return null;
  } catch {
    return null;
  }
}

export async function detectPlatformSlug(): Promise<PlatformSlug | null> {
  if (typeof navigator === "undefined") return null;

  const nav = navigator as NavigatorWithUA;

  if (nav.userAgentData) {
    try {
      const data = await nav.userAgentData.getHighEntropyValues(["architecture", "platform"]);
      if (data.platform === "Windows") return "win32";
      if (data.platform === "Linux") return "linux";
      if (data.platform === "macOS") {
        if (data.architecture === "arm") return "mac_arm";
        if (data.architecture === "x86" || data.architecture === "x86_64") return "mac_intel";
        // Arch absent — fall through to WebGL.
      }
    } catch {
      // fall through to UA sniffing
    }
  }

  const ua = navigator.userAgent.toLowerCase();

  if (ua.includes("windows")) return "win32";
  if (ua.includes("linux")) return "linux";

  if (ua.includes("mac os x") || ua.includes("macos")) {
    const arch = detectMacArchViaWebGL();
    if (arch === "arm") return "mac_arm";
    if (arch === "intel") return "mac_intel";
    // WebGL unavailable (headless, some privacy modes). Modern Macs are
    // overwhelmingly ARM — default there so the analytics split stays honest.
    return "mac_arm";
  }

  return null;
}
