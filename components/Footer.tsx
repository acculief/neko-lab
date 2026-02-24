import Link from 'next/link';
import { CATEGORIES } from '@/lib/products';
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 mt-16">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3"><span className="text-2xl">🐱</span><span className="font-black text-white">猫暮らしラボ</span></div>
            <p className="text-xs text-gray-400">猫のいる暮らしをもっと豊かに。<br />猫暮らしスコアで最適な商品を見つけよう。</p>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm mb-3">カテゴリ</h4>
            <ul className="space-y-1.5">
              {CATEGORIES.map(cat => (
                <li key={cat.id}><Link href={`/category/${cat.slug}`} className="text-xs text-gray-400 hover:text-emerald-400">{cat.icon} {cat.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm mb-3">サイトについて</h4>
            <ul className="space-y-1.5">
              <li><Link href="/score" className="text-xs text-gray-400 hover:text-emerald-400">猫暮らしスコアとは</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-xs text-gray-500">※当サイトはAmazonアソシエイト・楽天アフィリエイトプログラムに参加しています。<br />© 2024 猫暮らしラボ</p>
        </div>
      </div>
    </footer>
  );
}
