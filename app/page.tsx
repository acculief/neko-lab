import { Metadata } from 'next';
import Link from 'next/link';
import { CATEGORIES } from '@/lib/products';
import type { Product } from '@/lib/products';
import { CAT_FOOD_PRODUCTS } from '@/data/products/cat-food';
import { AUTO_TOILET_PRODUCTS } from '@/data/products/auto-toilet';
import { CAT_LITTER_PRODUCTS } from '@/data/products/cat-litter';
import { INSURANCE_PRODUCTS } from '@/data/products/insurance';
import { KIDNEY_FOOD_PRODUCTS } from '@/data/products/kidney-food';
import ProductCard from '@/components/ProductCard';
import CategoryIcon from '@/components/CategoryIcon';
import CategoryTopCard from '@/components/CategoryTopCard';
import TrophyIcon from '@/components/TrophyIcon';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: '猫暮らしラボ｜猫グッズを猫暮らしスコアで徹底比較',
  description: 'キャットフード・猫砂・全自動トイレ・ペット保険を専門スコアで比較。愛猫に最高の選択を届ける猫特化メディア。',
  openGraph: {
    title: '猫暮らしラボ｜猫グッズを猫暮らしスコアで徹底比較',
    description: 'キャットフード・猫砂・全自動トイレ・ペット保険を専門スコアで比較。愛猫に最高の選択を。',
    images: [{ url: '/og-image.png' }],
  },
};

function getTop1(products: Product[]): Product {
  return [...products].sort((a, b) => (b.score ?? 0) - (a.score ?? 0))[0];
}

export default function TopPage() {
  const topCatFood = [...CAT_FOOD_PRODUCTS].sort((a, b) => (b.score ?? 0) - (a.score ?? 0)).slice(0, 3);

  const categoryTops = [
    { cat: CATEGORIES[0], product: getTop1(CAT_FOOD_PRODUCTS) },
    { cat: CATEGORIES[1], product: getTop1(KIDNEY_FOOD_PRODUCTS) },
    { cat: CATEGORIES[2], product: getTop1(AUTO_TOILET_PRODUCTS) },
    { cat: CATEGORIES[3], product: getTop1(CAT_LITTER_PRODUCTS) },
    { cat: CATEGORIES[4], product: getTop1(INSURANCE_PRODUCTS) },
  ];

  const totalProducts = CAT_FOOD_PRODUCTS.length + KIDNEY_FOOD_PRODUCTS.length + AUTO_TOILET_PRODUCTS.length + CAT_LITTER_PRODUCTS.length + INSURANCE_PRODUCTS.length;
  const allCounts = [CAT_FOOD_PRODUCTS, KIDNEY_FOOD_PRODUCTS, AUTO_TOILET_PRODUCTS, CAT_LITTER_PRODUCTS, INSURANCE_PRODUCTS];

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
          <p className="text-[#A8B8C8] text-base md:text-lg mb-6 leading-relaxed">
            キャットフード・腎臓ケア・全自動トイレ・猫砂・ペット保険を<br className="hidden md:block" />
            専門家監修の独自スコアで徹底比較。
          </p>
          <div className="flex justify-center gap-8 mb-8">
            {[
              { val: `${totalProducts}+`, label: '比較商品数' },
              { val: '5', label: '専門カテゴリ' },
              { val: '100点', label: '独自スコア採点' },
            ].map(({ val, label }) => (
              <div key={label} className="text-center">
                <p className="text-2xl font-black text-[#C4892A]">{val}</p>
                <p className="text-[10px] text-[#A8B8C8]">{label}</p>
              </div>
            ))}
          </div>
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

      {/* 猫暮らしスコアとは */}
      <section className="bg-[#FFF8ED] border-y border-[#E8C87A] py-6 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center overflow-hidden shadow-md"
              style={{ background: 'linear-gradient(135deg, #C4892A, #D4A030)' }}>
              <TrophyIcon />
            </div>
            <div className="flex-1">
              <h2 className="text-base font-black text-[#7A5420] mb-2">猫暮らしスコアとは？</h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-center mb-2">
                {[
                  { label: '原材料品質', icon: '🥩' },
                  { label: '栄養バランス', icon: '⚖️' },
                  { label: '嗜好性', icon: '😸' },
                  { label: 'コスパ', icon: '💰' },
                  { label: '口コミ', icon: '⭐' },
                ].map(item => (
                  <div key={item.label} className="bg-white rounded-xl p-2 border border-[#E8C87A]">
                    <div className="text-lg mb-1">{item.icon}</div>
                    <p className="text-[10px] font-bold text-[#7A5420]">{item.label}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[#8A6840]">これら5項目を獣医師監修の重みづけで合算し100点満点で評価。90点以上が最高評価のゴールド。</p>
            </div>
          </div>
        </div>
      </section>

      {/* カテゴリ別 No.1 */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <p className="text-[#C4892A] text-xs font-bold tracking-widest uppercase mb-2">BEST OF EACH CATEGORY</p>
          <h2 className="text-2xl font-black text-[#1A2D4A]">🏆 カテゴリ別 No.1 おすすめ</h2>
          <p className="text-sm text-[#6B6560] mt-1">各カテゴリで猫暮らしスコアが最も高い商品</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {categoryTops.map(({ cat, product }) => (
            <CategoryTopCard key={cat.id} cat={cat} product={product} />
          ))}
        </div>
      </section>

      {/* カテゴリ一覧 */}
      <section className="bg-[#F8F3EB] py-12 px-4 border-y border-[#E8E3DC]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-[#1A2D4A] mb-8 text-center">カテゴリから探す</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {CATEGORIES.map((cat, i) => (
              <Link
                key={cat.id}
                href={`/category/${cat.slug}`}
                className="group bg-white rounded-2xl p-5 text-center shadow-sm hover:shadow-md transition-all border border-[#E8E3DC] hover:border-[#C4892A]"
              >
                <div className="flex justify-center mb-3">
                  <CategoryIcon icon={cat.icon} iconImg={cat.iconImg} size={48} />
                </div>
                <p className="text-sm font-bold text-[#1A2D4A] group-hover:text-[#C4892A] transition-colors leading-tight mb-1">
                  {cat.name}
                </p>
                <p className="text-[10px] text-[#8A8078]">{allCounts[i].length}商品を比較</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TOP3フード */}
      <section className="bg-white py-12 px-4">
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
      <section className="bg-[#F8F3EB] border-y border-[#E8E3DC] py-12 px-4">
        <div className="max-w-5xl mx-auto">
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
        </div>
      </section>

      {/* このサイトについて */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-gradient-to-br from-[#1A2D4A] to-[#243B5E] rounded-3xl p-8 text-white text-center">
          <p className="text-[#C4892A] text-xs font-bold tracking-widest uppercase mb-3">ABOUT NEKO-LAB</p>
          <h2 className="text-xl font-black mb-4">猫暮らしラボについて</h2>
          <p className="text-[#A8B8C8] text-sm leading-relaxed mb-6 max-w-2xl mx-auto">
            猫暮らしラボは、愛猫家が本当に迷う商品選びを科学的にサポートするメディアです。
            獣医師監修の独自スコアリングモデルで{totalProducts}以上の商品を客観評価。
            広告収入に依存しない独立した比較情報を提供します。
          </p>
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
            {[
              { icon: '🏥', label: '獣医師監修', desc: 'スコアモデル設計' },
              { icon: '🔬', label: '客観評価', desc: '5軸独自スコア' },
              { icon: '🐱', label: '猫目線', desc: '愛猫家が制作' },
            ].map(item => (
              <div key={item.label} className="bg-white/10 rounded-xl p-3">
                <div className="text-2xl mb-1">{item.icon}</div>
                <p className="text-xs font-bold text-white">{item.label}</p>
                <p className="text-[10px] text-[#A8B8C8]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
