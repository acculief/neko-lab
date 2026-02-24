import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://neko-lab.vercel.app"),
  title: {
    default: "猫暮らしラボ｜猫グッズを猫暮らしスコアで徹底比較",
    template: "%s | 猫暮らしラボ",
  },
  description: "キャットフード・猫砂・全自動トイレ・ペット保険を猫暮らしスコアで徹底比較。愛猫に最高の選択を。",
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
  keywords: ["キャットフード", "猫砂", "猫トイレ", "ペット保険", "猫グッズ", "比較", "ランキング", "猫暮らし"],
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
