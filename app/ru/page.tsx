import type { Metadata } from "next";
import SensayLanding from "../landing";

// just say
export const metadata: Metadata = {
  title: "Sensay — Просто скажи",
  description: "Говорите. Получайте чистый текст — в email, Slack, WhatsApp или где угодно ещё. Без набора. Без переключения приложений.",
  openGraph: {
    title: "Sensay — Просто скажи",
    description: "Говорите. Получайте чистый текст — в email, Slack, WhatsApp или где угодно ещё. Без набора. Без переключения приложений.",
    url: "https://sensay.app/ru",
    siteName: "Sensay",
    images: [{ url: "https://sensay.app/sensay/og.png", width: 1200, height: 630 }],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sensay — Просто скажи",
    description: "Говорите. Получайте чистый текст — в email, Slack, WhatsApp или где угодно ещё. Без набора. Без переключения приложений.",
    images: ["https://sensay.app/sensay/og.png"],
  },
};

export default SensayLanding;
