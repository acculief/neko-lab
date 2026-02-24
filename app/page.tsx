import { Metadata } from 'next';
import Link from 'next/link';
import { CATEGORIES } from '@/lib/products';
import { CAT_FOOD_PRODUCTS } from '@/data/products/cat-food';
import ProductCard from '@/components/ProductCard';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: '猫暮らしラボ｜猫グッズを猫暮らしスコアで徹底比較',
  description: 'キャットフード・猫砂・全自動トイレ・ペット保険を専門スコアで比較。愛猫に最高の選択を届ける猫特化メディア。',
};

export default function TopPage() {
  const topCatFood = [...CAT_FOOD_PRODUCTS].sort((a, b) => (b.score ?? 0) - (a.score ?? 0)).slice(0, 3);
  return (
    <div>
      {/* Hero — ダークグリーン × クリーム */}
      <section className="bg-[#1e3a2a] text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#a8c5b0] text-xs font-semibold mb-4 tracking-[0.2em] uppercase">Premium Cat Life Media</p>
          <h1 className="text-4xl md:text-5xl font-black mb-5 leading-tight tracking-tight">
            愛猫に最高の選択を<br />
            <span className="text-[#e8c96a]">猫暮らしスコア</span>で比較
          </h1>
          <p className="text-[#c5d9cc] text-base mb-10 leading-relaxed">
            プレミアムキャットフード・腎臓ケア・全自動トイレ・猫砂・ペット保険を<br className="hidden md:block" />
            専門家監修の独自スコアで徹底比較。
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {CATEGORIES.map(cat => (
              <Link key={cat.id} href={`/category/${cat.slug}`}
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-5 py-2 rounded-full text-sm font-medium transition-all">
                {cat.icon} {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* スコア説明帯 */}
      <section className="bg-[#fdf3e3] border-y border-[#ede0c8] py-7 px-4">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-5">
          <div className="flex-shrink-0 w-14 h-14 bg-[#c9953a] rounded-full flex items-center justify-center text-2xl shadow">🏆</div>
          <div>
            <h2 className="text-base font-black text-[#92400e] mb-1">猫暮らしスコアとは？</h2>
            <p className="text-sm text-[#78350f] leading-relaxed">
              獣医師監修の独自評価モデル。原材料品質・栄養・嗜好性・コスパ・口コミを重みづけして100点満点で算出。<span className="font-bold">90点以上が最高評価のゴールド。</span>
            </p>
          </div>
          <Link href="/score" className="flex-shrink-0 text-sm font-bold text-[#92400e] border border-[#d97706] px-4 py-2 rounded-full hover:bg-[#fef3c7] transition-colors whitespace-nowrap">
            詳しく →
          </Link>
        </div>
      </section>

      {/* カテゴリ */}
      <section className="max-w-5xl mx-auto px-4 py-14">
        <h2 className="text-2xl font-black text-[#1c1917] mb-8 text-center">カテゴリから探す</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {CATEGORIES.map(cat => (
            <Link key={cat.id} href={`/category/${cat.slug}`}
              className="group bg-white rounded-2xl p-5 text-center shadow-sm hover:shadow-md transition-all border border-[#ede9e3] hover:border-[#2d5a3d]">
              <div className="text-4xl mb-3">{cat.icon}</div>
              <p className="text-sm font-bold text-[#44403c] group-hover:text-[#2d5a3d] leading-tight">{cat.name}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* TOP3 */}
      <section className="bg-white border-y border-[#ede9e3] py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-7">
            <h2 className="text-xl font-black text-[#1c1917]">🍖 プレミアムキャットフード スコアTOP3</h2>
            <Link href="/category/premium-cat-food" className="text-sm text-[#2d5a3d] font-bold hover:underline">全て見る →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {topCatFood.map((p, i) => <ProductCard key={p.id} product={p} rank={i + 1} />)}
          </div>
        </div>
      </section>

      {/* スコア基準 */}
      <section className="max-w-5xl mx-auto px-4 py-14">
        <h2 className="text-2xl font-black text-[#1c1917] mb-7 text-center">スコアの評価基準</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: '🥇 ゴールド（90点以上）', bg: 'bg-[#fefce8] border-[#fde68a]', text: 'text-[#78350f]', desc: '最高品質。素材・栄養・嗜好性すべて高水準。迷ったらこれ。' },
            { label: '🟢 グリーン（75〜89点）', bg: 'bg-[#f0fdf4] border-[#bbf7d0]', text: 'text-[#14532d]', desc: '高品質でバランス良し。コスパ重視の方にもおすすめ。' },
            { label: '⬜ スタンダード（〜74点）', bg: 'bg-[#fafaf9] border-[#e7e5e4]', text: 'text-[#44403c]', desc: '標準的な品質。用途・予算によっては十分な選択肢。' },
          ].map(item => (
            <div key={item.label} className={`${item.bg} border rounded-2xl p-5`}>
              <p className={`font-black mb-2 ${item.text}`}>{item.label}</p>
              <p className="text-sm text-[#57534e]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
