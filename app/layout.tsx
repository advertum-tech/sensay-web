import type { Metadata } from "next";
import "./globals.css";
import YandexMetrica from "./components/YandexMetrica";

export const metadata: Metadata = {
  title: "Sensay",
  description: "Voice dictation AI",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <YandexMetrica />
      </body>
    </html>
  );
}
