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
  description: "獣医師監修の猫フード・自動トイレ・猫砂・ペット保険・猫おもちゃ・キャリーを独自スコアで徹底比較。2025年最新おすすめランキング掲載。愛猫のために本当に良いものだけを厳選紹介。",
  icons: {
    icon: [
      { url: "/icons/logo.svg", sizes: "any" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    apple: "/icons/logo.svg",
  },
  openGraph: {
    siteName: "猫暮らしラボ（ねこラボ）",
    locale: "ja_JP",
    type: "website",
    url: "https://neko-lab.vercel.app",
    title: "猫用品おすすめランキング2025年版 | ねこラボ",
    description: "獣医師監修の猫フード・自動トイレ・猫砂・ペット保険・猫おもちゃ・キャリーを独自スコアで徹底比較。2025年最新おすすめランキング掲載。愛猫のために本当に良いものだけを厳選紹介。",
  },
  twitter: {
    card: "summary_large_image",
    site: "@nekolab_jp",
    title: "猫用品おすすめランキング2025年版 | ねこラボ",
    description: "獣医師監修の猫フード・自動トイレ・猫砂・ペット保険・猫おもちゃ・キャリーを独自スコアで徹底比較。2025年最新ランキング。",
  },
  keywords: [
    "猫用品", "キャットフード", "猫フード おすすめ", "猫砂", "猫砂 おすすめ",
    "猫トイレ", "自動トイレ 猫", "全自動猫トイレ", "ペット保険 猫",
    "猫おもちゃ", "猫おもちゃ おすすめ", "キャリー 猫", "猫キャリーバッグ",
    "グレインフリー キャットフード", "ロイヤルカナン", "ヒルズ サイエンスダイエット",
    "プロプラン 猫", "猫用品 比較", "猫用品 ランキング", "2025年 猫",
    "猫暮らし", "猫グッズ", "ねこじゃらし", "猫用ベッド", "猫 自動給水器",
    "腎臓ケア 猫フード", "療法食 猫", "猫 キャットタワー", "猫パンチ おもちゃ",
    "いなばちゅーる", "黒缶 猫", "猫砂 鉱物系", "猫砂 紙製",
  ],
  alternates: {
    canonical: "https://neko-lab.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "猫暮らしラボ（ねこラボ）",
  "alternateName": "ねこラボ",
  "url": "https://neko-lab.vercel.app",
  "description": "獣医師監修の猫フード・自動トイレ・猫砂・ペット保険・猫おもちゃ・キャリーを独自スコアで徹底比較する猫用品情報サイト。",
  "inLanguage": "ja-JP",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://neko-lab.vercel.app/category/{search_term_string}"
    },
    "query-input": "required name=search_term_string"
  },
  "publisher": {
    "@type": "Organization",
    "name": "猫暮らしラボ",
    "url": "https://neko-lab.vercel.app",
    "logo": {
      "@type": "ImageObject",
      "url": "https://neko-lab.vercel.app/icons/logo.svg"
    }
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
