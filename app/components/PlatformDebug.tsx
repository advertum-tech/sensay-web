"use client";

import { useEffect, useState } from "react";
import { usePlatform } from "@/app/hooks/usePlatform";

interface DebugInfo {
  ua: string;
  uadPlatform: string;
  uadArchitecture: string;
  uadBitness: string;
  webglRenderer: string;
}

export default function PlatformDebug() {
  const { platform, isLoading } = usePlatform();
  const [info, setInfo] = useState<DebugInfo | null>(null);

  useEffect(() => {
    async function gather() {
      const nav = navigator as Navigator & {
        userAgentData?: {
          getHighEntropyValues: (keys: string[]) => Promise<{
            architecture?: string;
            platform?: string;
            bitness?: string;
          }>;
        };
      };

      let uadPlatform = "—";
      let uadArchitecture = "—";
      let uadBitness = "—";

      if (nav.userAgentData) {
        try {
          const data = await nav.userAgentData.getHighEntropyValues(["architecture", "platform", "bitness"]);
          uadPlatform = data.platform ?? "—";
          uadArchitecture = data.architecture ?? "—";
          uadBitness = data.bitness ?? "—";
        } catch {
          uadPlatform = "error";
        }
      } else {
        uadPlatform = "not supported";
      }

      let webglRenderer = "—";
      try {
        const canvas = document.createElement("canvas");
        const gl = canvas.getContext("webgl");
        const ext = gl?.getExtension("WEBGL_debug_renderer_info");
        if (ext) {
          webglRenderer = gl?.getParameter(ext.UNMASKED_RENDERER_WEBGL) ?? "—";
        } else {
          webglRenderer = "ext unavailable";
        }
      } catch {
        webglRenderer = "error";
      }

      setInfo({
        ua: navigator.userAgent,
        uadPlatform,
        uadArchitecture,
        uadBitness,
        webglRenderer,
      });
    }

    gather();
  }, []);

  if (!info) return null;

  const rows: [string, string][] = [
    ["platform (result)", isLoading ? "loading…" : platform],
    ["userAgent", info.ua],
    ["uad.platform", info.uadPlatform],
    ["uad.architecture", info.uadArchitecture],
    ["uad.bitness", info.uadBitness],
    ["webgl renderer", info.webglRenderer],
  ];

  return (
    <div
      style={{
        marginTop: 16,
        padding: "8px 0 0",
        borderTop: "1px dashed #ddd",
        fontFamily: "monospace",
        fontSize: "0.68rem",
        color: "#aaa",
        lineHeight: 1.7,
      }}
    >
      {rows.map(([key, val]) => (
        <div key={key}>
          <span style={{ color: "#ccc" }}>{key}:</span> {val}
        </div>
      ))}
    </div>
  );
}
