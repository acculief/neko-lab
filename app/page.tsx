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
      <section className="bg-gradient-to-br from-emerald-700 via-green-600 to-emerald-500 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-emerald-200 text-sm font-bold mb-3 tracking-widest uppercase">猫のいる暮らしをもっと豊かに</p>
          <h1 className="text-3xl md:text-5xl font-black mb-4 leading-tight">
            愛猫に最高の選択を<br /><span className="text-yellow-300">猫暮らしスコア</span>で比較
          </h1>
          <p className="text-emerald-100 text-base mb-8">プレミアムキャットフード・腎臓ケア・全自動トイレ・猫砂・ペット保険を専門家監修の独自スコアで徹底比較。</p>
          <div className="flex flex-wrap justify-center gap-3">
            {CATEGORIES.map(cat => (
              <Link key={cat.id} href={`/category/${cat.slug}`}
                className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full text-sm font-bold transition-all border border-white/30">
                {cat.icon} {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-amber-50 border-y border-amber-100 py-8 px-4">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-6">
          <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center text-3xl shadow-lg">🏆</div>
          <div>
            <h2 className="text-lg font-black text-amber-800 mb-1">猫暮らしスコアとは？</h2>
            <p className="text-sm text-amber-700">獣医師・猫専門家の知見をもとに設計した独自評価モデル。原材料品質・栄養・嗜好性・コスパ・口コミを重みづけして100点満点で算出。90点以上が最高評価。</p>
          </div>
          <Link href="/score" className="flex-shrink-0 text-sm font-bold text-amber-700 border border-amber-300 px-4 py-2 rounded-full hover:bg-amber-100 transition-colors">詳しく →</Link>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-black text-gray-800 mb-8 text-center">カテゴリから探す</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {CATEGORIES.map(cat => (
            <Link key={cat.id} href={`/category/${cat.slug}`}
              className="group bg-white rounded-2xl p-4 text-center shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-emerald-200">
              <div className="text-4xl mb-2">{cat.icon}</div>
              <p className="text-sm font-bold text-gray-700 group-hover:text-emerald-700 leading-tight">{cat.name}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white border-y border-gray-100 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-black text-gray-800">🍖 プレミアムキャットフード スコアTOP3</h2>
            <Link href="/category/premium-cat-food" className="text-sm text-emerald-600 font-bold hover:underline">全て見る →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {topCatFood.map((p, i) => <ProductCard key={p.id} product={p} rank={i + 1} />)}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-black text-gray-800 mb-6 text-center">スコアの評価基準</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { tier: '🥇 ゴールド（90点以上）', color: 'from-yellow-50 to-amber-50 border-amber-200', desc: '最高品質。素材・栄養・嗜好性すべて高水準。' },
            { tier: '🟢 グリーン（75〜89点）', color: 'from-emerald-50 to-green-50 border-emerald-200', desc: '高品質でバランス良し。コスパ重視の方にも。' },
            { tier: '⬜ スタンダード（〜74点）', color: 'from-gray-50 to-slate-50 border-gray-200', desc: '標準的な品質。用途・予算によっては選択肢に。' },
          ].map(item => (
            <div key={item.tier} className={`bg-gradient-to-br ${item.color} border rounded-2xl p-5`}>
              <p className="font-black text-gray-800 mb-2">{item.tier}</p>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
