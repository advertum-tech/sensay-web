import type { Metadata } from "next";
import "./globals.css";
import YandexMetrica from "./components/YandexMetrica";
import { locale } from "./locales";

export const metadata: Metadata = {
  title: locale.metadata.siteName,
  description: locale.footer.tagline,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={locale.lang} className="bg-[#DED8CC]">
      <body>
        {children}
        <YandexMetrica />
      </body>
    </html>
  );
}
