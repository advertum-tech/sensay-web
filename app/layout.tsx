import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sensay",
  description: "Voice dictation AI",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
