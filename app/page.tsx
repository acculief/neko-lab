import { Metadata } from 'next';
import Link from 'next/link';
import { CATEGORIES } from '@/lib/products';
import { CAT_FOOD_PRODUCTS } from '@/data/products/cat-food';
import ProductCard from '@/components/ProductCard';
import CategoryIcon from '@/components/CategoryIcon';
import TrophyIcon from '@/components/TrophyIcon';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: '猫暮らしラボ｜猫グッズを猫暮らしスコアで徹底比較',
  description: 'キャットフード・猫砂・全自動トイレ・ペット保険を専門スコアで比較。愛猫に最高の選択を届ける猫特化メディア。',
};

export default function TopPage() {
  const topCatFood = [...CAT_FOOD_PRODUCTS]
    .sort((a, b) => (b.score ?? 0) - (a.score ?? 0))
    .slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0F1C30 0%, #1A2D4A 50%, #243B5E 100%)' }} className="text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#C4892A] text-xs font-bold mb-3 tracking-[0.3em] uppercase">PREMIUM CAT LIFE MEDIA</p>
          <h1 className="text-3xl md:text-5xl font-black mb-4 leading-tight text-white">
            愛猫に最高の選択を<br />
            <span className="text-[#C4892A]">猫暮らしスコア</span>で比較
          </h1>
          <p className="text-[#A8B8C8] text-base md:text-lg mb-8 leading-relaxed">
            プレミアムキャットフード・腎臓ケア・全自動トイレ・猫砂・ペット保険を<br className="hidden md:block" />
            専門家監修の独自スコアで徹底比較。
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {CATEGORIES.map(cat => (
              <Link
                key={cat.id}
                href={`/category/${cat.slug}`}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold transition-all border border-white/20 hover:border-[#C4892A]/50 flex items-center gap-2"
              >
                <CategoryIcon icon={cat.icon} iconImg={cat.iconImg} size={16} />
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* スコアバー */}
      <section className="bg-[#FFF8ED] border-y border-[#E8C87A] py-6 px-4">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-6">
          <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center overflow-hidden shadow-md"
            style={{ background: 'linear-gradient(135deg, #C4892A, #D4A030)' }}>
            <TrophyIcon />
          </div>
          <div className="flex-1">
            <h2 className="text-base font-black text-[#7A5420] mb-1">猫暮らしスコアとは？</h2>
            <p className="text-sm text-[#8A6840] leading-relaxed">
              獣医師監修の独自評価モデル。原材料品質・栄養・嗜好性・コスパ・口コミを重みづけして<br className="hidden md:block" />
              100点満点で算出。90点以上が最高評価のゴールド。
            </p>
          </div>
          <Link href="/score"
            className="flex-shrink-0 text-sm font-bold text-[#7A5420] border border-[#C4892A] px-4 py-2 rounded-full hover:bg-[#FFF3DC] transition-colors">
            詳しく →
          </Link>
        </div>
      </section>

      {/* カテゴリ */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-black text-[#1A2D4A] mb-8 text-center">カテゴリから探す</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {CATEGORIES.map(cat => (
            <Link
              key={cat.id}
              href={`/category/${cat.slug}`}
              className="group bg-white rounded-2xl p-5 text-center shadow-sm hover:shadow-md transition-all border border-[#E8E3DC] hover:border-[#C4892A]"
            >
              <div className="flex justify-center mb-3">
                <CategoryIcon icon={cat.icon} iconImg={cat.iconImg} size={48} />
              </div>
              <p className="text-sm font-bold text-[#1A2D4A] group-hover:text-[#C4892A] transition-colors leading-tight">
                {cat.name}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* TOP3 */}
      <section className="bg-white border-y border-[#E8E3DC] py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-black text-[#1A2D4A] flex items-center gap-2">
              <CategoryIcon icon="🍖" iconImg="/icons/catfood.svg" size={24} />
              プレミアムキャットフード スコアTOP3
            </h2>
            <Link href="/category/premium-cat-food" className="text-sm text-[#C4892A] font-bold hover:underline">全て見る →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {topCatFood.map((p, i) => (
              <ProductCard key={p.id} product={p} rank={i + 1} />
            ))}
          </div>
        </div>
      </section>

      {/* スコア基準 */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-black text-[#1A2D4A] mb-6 text-center">スコアの評価基準</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { tier: 'ゴールド（90点以上）', emoji: '🥇', bg: 'linear-gradient(135deg, #FFF8ED, #FFF3DC)', border: '#E8C87A', textColor: '#7A5420', desc: '最高品質。迷ったらこれ。素材・栄養・嗜好性すべてが高水準。' },
            { tier: 'グリーン（75〜89点）', emoji: '🟢', bg: 'linear-gradient(135deg, #F0F8F4, #E8F4EC)', border: '#A8D4B8', textColor: '#2A6040', desc: '高品質でバランス良し。コスパを重視する方にもおすすめ。' },
            { tier: 'スタンダード（〜74点）', emoji: '⬜', bg: 'linear-gradient(135deg, #F8F8F8, #F0F0F0)', border: '#D0D0D0', textColor: '#4A4A4A', desc: '標準的な品質。用途・予算によっては選択肢になりえる。' },
          ].map(item => (
            <div key={item.tier} className="rounded-2xl p-5 border" style={{ background: item.bg, borderColor: item.border }}>
              <p className="font-black mb-2 flex items-center gap-2" style={{ color: item.textColor }}>
                <span>{item.emoji}</span>{item.tier}
              </p>
              <p className="text-sm text-[#6B6560]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
