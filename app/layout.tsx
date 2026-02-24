import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://neko-lab.vercel.app'),
  title: {
    default: '猫暮らしラボ｜猫グッズ比較・ランキング【猫暮らしスコア】',
    template: '%s | 猫暮らしラボ',
  },
  description: '猫のいる暮らしをもっと豊かに。プレミアムキャットフード・腎臓ケアフード・全自動トイレ・高級猫砂・ペット保険を獣医師監修の猫暮らしスコアで徹底比較。2024年最新ランキング。',
  keywords: ['キャットフード おすすめ', 'プレミアムキャットフード', '猫砂 おすすめ', '全自動猫トイレ', 'ペット保険 猫', '猫 腎臓ケアフード', '猫暮らしスコア'],
  openGraph: {
    siteName: '猫暮らしラボ',
    locale: 'ja_JP',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: '猫暮らしラボ - 猫グッズ比較メディア' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
  alternates: { canonical: 'https://neko-lab.vercel.app' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: '猫暮らしラボ',
  url: 'https://neko-lab.vercel.app',
  description: '猫グッズを猫暮らしスコアで徹底比較するプレミアム猫メディア',
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: 'https://neko-lab.vercel.app/search?q={search_term_string}' },
    'query-input': 'required name=search_term_string',
  },
  publisher: {
    '@type': 'Organization',
    name: '猫暮らしラボ',
    url: 'https://neko-lab.vercel.app',
    logo: { '@type': 'ImageObject', url: 'https://neko-lab.vercel.app/og-image.png' },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="bg-[#faf8f5] text-[#1c1917]">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
