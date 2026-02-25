import Link from 'next/link';
import { CATEGORIES } from '@/lib/products';

export default function Footer() {
  return (
    <footer style={{ background: '#0F1C30' }} className="text-[#8A9BB5] mt-16">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-md bg-gradient-to-br from-[#1A2D4A] to-[#2C4A6E] flex items-center justify-center">
                <span className="text-[#C4892A] text-sm">🐾</span>
              </div>
              <span className="font-black text-white text-sm">猫暮らしラボ</span>
            </div>
            <p className="text-xs text-[#5A6A7A] leading-relaxed">
              猫のいる暮らしをもっと豊かに。<br />猫暮らしスコアで最適な商品を。
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm mb-3">カテゴリ</h4>
            <ul className="space-y-2">
              {CATEGORIES.map(cat => (
                <li key={cat.id}>
                  <Link href={`/category/${cat.slug}`}
                    className="text-xs text-[#5A6A7A] hover:text-[#C4892A] transition-colors">
                    {cat.icon} {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm mb-3">サイトについて</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about-score" className="text-xs text-[#5A6A7A] hover:text-[#C4892A] transition-colors">
                  🔬 スコアの評価方法
                </Link>
              </li>
              <li>
                <Link href="/article/premium-cat-food-ranking" className="text-xs text-[#5A6A7A] hover:text-[#C4892A] transition-colors">
                  📖 キャットフードの選び方
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#1A2D4A] pt-6 text-center">
          <p className="text-xs text-[#3A4A5A]">
            ※当サイトはAmazonアソシエイト・楽天アフィリエイトプログラムに参加しています。スコアの算出・ランキングへの影響はありません。<br />
            © 2025 猫暮らしラボ ·
            <Link href="/about-score" className="ml-1 hover:text-[#C4892A] transition-colors">評価方法</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
