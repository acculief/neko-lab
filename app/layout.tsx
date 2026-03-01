import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://neko-lab.vercel.app"),
  title: {
    default: "猫用品おすすめランキング2025年版 | ねこラボ",
    template: "%s | 猫暮らしラボ",
  },
  description: "獣医師監修の猫フード・自動トイレ・猫砂・ペット保険をスコアで比較。2025年最新のおすすめランキング。キャットフード・猫おもちゃ・キャリーも網羅。",
  icons: {
    icon: [
      { url: "/icons/logo.svg", sizes: "any" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    apple: "/icons/logo.svg",
  },
  openGraph: {
    siteName: "猫暮らしラボ",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary",
    site: "@nekolab_jp",
  },
  keywords: ["猫用品", "キャットフード", "猫砂", "猫トイレ", "自動トイレ", "ペット保険", "猫グッズ", "比較", "ランキング", "2025年", "おすすめ", "猫暮らし", "グレインフリー"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
