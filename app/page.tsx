import type { Metadata } from "next";
import SensayLanding from "./landing";

export const metadata: Metadata = {
  title: "Sensay — Just Say It",
  description: "Speak. Get clean, ready-to-send text in your email, Slack, WhatsApp, or anywhere else. No typing. No switching apps.",
  openGraph: {
    title: "Sensay — Just Say It",
    description: "Speak. Get clean, ready-to-send text in your email, Slack, WhatsApp, or anywhere else. No typing. No switching apps.",
    url: "https://sensay.app",
    siteName: "Sensay",
    images: [{ url: "https://sensay.app/sensay/og.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sensay — Just Say It",
    description: "Speak. Get clean, ready-to-send text in your email, Slack, WhatsApp, or anywhere else. No typing. No switching apps.",
    images: ["https://sensay.app/sensay/og.png"],
  },
};

export default SensayLanding;
