"use client";

import { usePathname } from "next/navigation";

export type Lang = "en" | "ru";

// Derive language from URL: /ru/... → "ru", everything else → "en"
export function useLang(): Lang {
  const pathname = usePathname();
  return pathname.startsWith("/ru") ? "ru" : "en";
}
