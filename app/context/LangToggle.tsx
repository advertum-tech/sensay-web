"use client";

import { useRouter, usePathname } from "next/navigation";
import { useLang } from "@/app/context/LanguageContext";

export default function LangToggle({ className }: { className?: string }) {
  const lang = useLang();
  const pathname = usePathname();
  const router = useRouter();

  const active: React.CSSProperties = {
    backgroundColor: "#111827",
    color: "#ffffff",
    border: "none",
    cursor: "pointer",
  };

  const inactive: React.CSSProperties = {
    backgroundColor: "#f3f4f6",
    color: "#6b7280",
    border: "none",
    cursor: "pointer",
  };

  function switchTo(targetLang: "en" | "ru") {
    if (targetLang === lang) return;
    document.cookie = `lang=${targetLang}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
    if (targetLang === "ru") {
      router.push(`/ru${pathname === "/" ? "" : pathname}`);
    } else {
      router.push(pathname.replace(/^\/ru/, "") || "/");
    }
  }

  return (
    <div className={`flex gap-1 text-xs ${className ?? ""}`}>
      <button
        onClick={() => switchTo("en")}
        style={lang === "en" ? active : inactive}
        className="rounded-l-full px-4 py-1.5 transition-colors"
      >
        EN
      </button>
      <button
        onClick={() => switchTo("ru")}
        style={lang === "ru" ? active : inactive}
        className="rounded-r-full px-4 py-1.5 transition-colors"
      >
        RU
      </button>
    </div>
  );
}
