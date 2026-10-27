import posthog from "posthog-js";

// Same kill switch as YandexMetrica.tsx.
const disabled = process.env.NEXT_PUBLIC_DISABLE_ANALYTICS === "true";
const token = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;

if (!disabled && token) {
  posthog.init(token, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    defaults: "2026-08-30",
  });
}
