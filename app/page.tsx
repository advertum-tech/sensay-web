import type { Metadata } from "next";
import LandingPage from "./landing/LandingPage";
import { locale } from "./locales";

const m = locale.metadata;

export const metadata: Metadata = {
  title: m.title,
  description: m.description,
  openGraph: {
    title: m.title,
    description: m.description,
    url: m.url,
    siteName: m.siteName,
    images: [{ url: m.ogImage, width: 1200, height: 630 }],
    locale: m.ogLocale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: m.title,
    description: m.description,
    images: [m.ogImage],
  },
};

export default function Page() {
  return <LandingPage videoSrc="/video/last.webm" />;
}
