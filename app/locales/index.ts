import { en } from "./en";
import { ru } from "./ru";

export type LocaleCode = "en" | "ru";

// NEXT_PUBLIC_* is inlined at build time on both client and server, so each
// deployment (sensay.app vs sensayapp.ru) picks its own locale from env and
// bakes the strings into its bundle. No runtime detection.
const raw = (process.env.NEXT_PUBLIC_SENSAY_LOCALE || "en").toLowerCase();
export const LOCALE_CODE: LocaleCode = raw === "ru" ? "ru" : "en";

// Cast keeps ru.ts aligned with en.ts at compile time (both share the same
// shape — en.ts is source of truth).
export const locale = (LOCALE_CODE === "ru" ? ru : en) as typeof en;
