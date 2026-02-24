import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://neko-lab.vercel.app'),
  title: { default: '猫暮らしラボ', template: '%s | 猫暮らしラボ' },
  description: '猫のいる暮らしをもっと豊かに。キャットフード・猫砂・自動トイレ・ペット保険を猫暮らしスコアで徹底比較。',
  keywords: ['キャットフード', '猫砂', '全自動猫トイレ', 'ペット保険', 'プレミアムキャットフード'],
  openGraph: { siteName: '猫暮らしラボ', locale: 'ja_JP', type: 'website' },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-gray-50 text-gray-900">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
