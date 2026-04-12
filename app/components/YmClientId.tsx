"use client";

import { useEffect, useState } from "react";

const YM_ID = Number(process.env.NEXT_PUBLIC_YM_COUNTER_ID);

export default function YmClientId() {
  const [clientId, setClientId] = useState<string | null>(null);

  useEffect(() => {
    const tryGet = () => {
      if (typeof window === "undefined") return;
      const w = window as unknown as { ym?: (id: number, method: string, cb: (cid: string) => void) => void };
      if (typeof w.ym === "function") {
        w.ym(YM_ID, "getClientID", (cid: string) => {
          if (cid) setClientId(cid);
        });
        return true;
      }
      return false;
    };

    if (!tryGet()) {
      const interval = setInterval(() => {
        if (tryGet()) clearInterval(interval);
      }, 500);
      const timeout = setTimeout(() => clearInterval(interval), 10000);
      return () => { clearInterval(interval); clearTimeout(timeout); };
    }
  }, []);

  if (!clientId) return null;

  return (
    <span
      style={{
        fontFamily: "monospace",
        fontSize: "0.68rem",
        color: "#c0c0c0",
        cursor: "pointer",
        userSelect: "all",
        letterSpacing: "0.01em",
        whiteSpace: "nowrap",
      }}
      title="Yandex Metrika client ID (click to select)"
      onClick={() => {
        if (navigator.clipboard) navigator.clipboard.writeText(clientId);
      }}
    >
      ym:{clientId}
    </span>
  );
}