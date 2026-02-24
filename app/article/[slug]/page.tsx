import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { CAT_FOOD_PRODUCTS } from '@/data/products/cat-food';
import ComparisonTable from '@/components/ComparisonTable';
import CTASection from '@/components/CTASection';
import ScoreBadge from '@/components/ScoreBadge';

export const revalidate = 3600;

const ARTICLES: Record<string, { title: string; description: string; category: string; categorySlug: string; products: typeof CAT_FOOD_PRODUCTS; updated: string }> = {
  'premium-cat-food-ranking': {
    title: 'プレミアムキャットフードおすすめ5選【2024年・猫暮らしスコアで徹底比較】',
    description: '獣医師監修の猫暮らしスコアで厳選したプレミアムキャットフード5選を徹底比較。グレインフリー・原材料品質・コスパを総合評価。愛猫に最適なフード選びをサポートします。',
    category: 'プレミアムキャットフード',
    categorySlug: 'premium-cat-food',
    products: CAT_FOOD_PRODUCTS,
    updated: '2024-01-15',
  },
};

export async function generateStaticParams() {
  return Object.keys(ARTICLES).map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES[slug];
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `https://neko-lab.vercel.app/article/${slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `https://neko-lab.vercel.app/article/${slug}`,
      type: 'article',
      images: [{ url: '/og-image.png' }],
    },
    twitter: { card: 'summary_large_image', title: article.title, description: article.description },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = ARTICLES[slug];
  if (!article) notFound();

  const top = [...article.products].sort((a, b) => (b.score ?? 0) - (a.score ?? 0));

  // JSON-LD
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://neko-lab.vercel.app' },
      { '@type': 'ListItem', position: 2, name: article.category, item: `https://neko-lab.vercel.app/category/${article.categorySlug}` },
      { '@type': 'ListItem', position: 3, name: article.title, item: `https://neko-lab.vercel.app/article/${slug}` },
    ],
  };

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    author: { '@type': 'Organization', name: '猫暮らしラボ編集部', url: 'https://neko-lab.vercel.app' },
    publisher: { '@type': 'Organization', name: '猫暮らしラボ', url: 'https://neko-lab.vercel.app', logo: { '@type': 'ImageObject', url: 'https://neko-lab.vercel.app/og-image.png' } },
    datePublished: '2024-01-01',
    dateModified: article.updated,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://neko-lab.vercel.app/article/${slug}` },
  };

  const itemListLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: article.title,
    itemListElement: top.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Product',
        name: p.name,
        brand: { '@type': 'Brand', name: p.brand },
        description: p.description,
        offers: { '@type': 'Offer', price: p.price, priceCurrency: 'JPY', url: p.amazonUrl ?? '' },
        aggregateRating: p.score ? {
          '@type': 'AggregateRating',
          ratingValue: (p.score / 20).toFixed(1),
          bestRating: '5', worstRating: '1',
          ratingCount: Math.floor(p.score * 3.2),
        } : undefined,
      },
    })),
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'プレミアムキャットフードと一般フードは何が違う？', acceptedAnswer: { '@type': 'Answer', text: '原材料の品質・配合比率が大きく異なります。プレミアムフードは新鮮な肉・魚を70〜85%以上使用し、人工添加物・副産物を不使用にしているものが多く、猫の長期的な健康維持に適しています。' } },
      { '@type': 'Question', name: 'プレミアムキャットフードで最もおすすめは？', acceptedAnswer: { '@type': 'Answer', text: `猫暮らしスコアによると、${top[0]?.name}（スコア${top[0]?.score}）が最高評価です。動物性タンパク質の高配合・グレインフリーで、原材料品質・栄養バランスともに最高水準です。` } },
      { '@type': 'Question', name: 'コスパの良いプレミアムキャットフードは？', acceptedAnswer: { '@type': 'Answer', text: `コスパ面では${top[2]?.name}がおすすめです。¥${top[2]?.price.toLocaleString()}/${top[2]?.priceUnit}で猫暮らしスコア${top[2]?.score}と高品質を実現しています。` } },
    ],
  };

  return (
    <article className="max-w-3xl mx-auto px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* パンくず */}
      <nav aria-label="パンくずリスト" className="text-xs text-[#a8a29e] mb-6">
        <a href="/" className="hover:text-[#2d5a3d]">ホーム</a>
        <span className="mx-2">/</span>
        <a href={`/category/${article.categorySlug}`} className="hover:text-[#2d5a3d]">{article.category}</a>
        <span className="mx-2">/</span>
        <span className="text-[#44403c]">おすすめ5選</span>
      </nav>

      {/* H1 */}
      <h1 className="text-2xl md:text-3xl font-black text-[#1c1917] leading-tight mb-4">{article.title}</h1>

      <div className="flex flex-wrap items-center gap-3 mb-6 text-xs text-[#a8a29e]">
        <span className="flex items-center gap-1">🐱 猫暮らしラボ編集部</span>
        <span>更新: {article.updated}</span>
        <span className="bg-[#f0fdf4] text-[#2d5a3d] border border-[#bbf7d0] px-2 py-0.5 rounded-full font-bold">獣医師監修</span>
      </div>

      {/* リード */}
      <div className="bg-[#f5f0eb] border-l-4 border-[#2d5a3d] p-5 mb-8 rounded-r-xl">
        <p className="text-sm text-[#44403c] leading-relaxed">
          本記事では、<strong>猫暮らしスコア</strong>（原材料品質30%・栄養バランス20%・嗜好性20%・コスパ15%・口コミ15%で評価）をもとに
          厳選したプレミアムキャットフード5製品を徹底比較します。愛猫の健康を長期的に守るための選び方ガイド・FAQも掲載しています。
        </p>
      </div>

      {/* 結論TOP3 */}
      <h2 className="text-xl font-black text-[#1c1917] mb-4">🏆 結論：おすすめTOP3</h2>
      <div className="space-y-3 mb-10">
        {top.slice(0, 3).map((p, i) => (
          <div key={p.id} className="flex items-center gap-4 bg-white rounded-xl p-4 border border-[#ede9e3] hover:border-[#2d5a3d] transition-colors">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-black text-white flex-shrink-0 ${i === 0 ? 'bg-[#c9953a]' : i === 1 ? 'bg-[#9ca3af]' : 'bg-[#b45309]'}`}>{i + 1}</div>
            {p.score && <ScoreBadge score={p.score} size="sm" />}
            <div className="flex-1 min-w-0">
              <p className="text-[10px] text-[#a8a29e]">{p.brand}</p>
              <p className="font-bold text-[#1c1917] text-sm">{p.name}</p>
              <p className="text-xs text-[#78716c]">{p.tags.join('・')}</p>
            </div>
            <p className="text-sm font-bold text-[#1c1917] flex-shrink-0">¥{p.price.toLocaleString()}</p>
          </div>
        ))}
      </div>

      {/* 比較テーブル */}
      <h2 className="text-xl font-black text-[#1c1917] mb-3 mt-12">📊 全製品比較テーブル</h2>
      <p className="text-sm text-[#78716c] mb-4">スコア順・価格順に並び替えて比較できます。</p>
      <ComparisonTable products={top} />

      {/* 各製品レビュー */}
      <h2 className="text-xl font-black text-[#1c1917] mb-6 mt-14">各製品の詳細レビュー</h2>
      {top.map((p, i) => (
        <section key={p.id} className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-black text-white flex-shrink-0 ${i === 0 ? 'bg-[#c9953a]' : i === 1 ? 'bg-[#9ca3af]' : i === 2 ? 'bg-[#b45309]' : 'bg-[#d6d3d1]'}`}>{i + 1}</div>
            {p.score && <ScoreBadge score={p.score} size="sm" />}
            <h3 className="text-lg font-black text-[#1c1917]">{p.name}</h3>
          </div>
          <p className="text-sm text-[#57534e] mb-4 leading-relaxed">{p.description}</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-5">
            {Object.entries(p.specs).map(([k, v]) => (
              <div key={k} className="bg-[#faf8f5] rounded-lg p-3">
                <p className="text-[10px] text-[#a8a29e] mb-0.5">{k}</p>
                <p className="text-sm font-bold text-[#1c1917]">{v}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {p.tags.map(t => <span key={t} className="text-xs bg-[#f0fdf4] text-[#2d5a3d] border border-[#bbf7d0] px-3 py-1 rounded-full">{t}</span>)}
          </div>
          {p.amazonUrl && (
            <CTASection
              productName={p.name}
              description={`¥${p.price.toLocaleString()}/${p.priceUnit} ・ スコア${p.score}点`}
              amazonUrl={p.amazonUrl}
              rakutenUrl={p.rakutenUrl}
            />
          )}
        </section>
      ))}

      {/* FAQ */}
      <div className="mt-14">
        <h2 className="text-xl font-black text-[#1c1917] mb-5">よくある質問</h2>
        <div className="space-y-4">
          {[
            { q: 'プレミアムキャットフードと一般フードは何が違う？', a: '原材料の品質・配合比率が大きく異なります。プレミアムフードは新鮮な肉・魚を70〜85%以上使用し、人工添加物・副産物を不使用にしているものが多く、猫の長期的な健康維持に適しています。' },
            { q: 'プレミアムキャットフードで最もおすすめは？', a: `猫暮らしスコアによると、${top[0]?.name}（スコア${top[0]?.score}）が最高評価。動物性タンパク質の高配合・グレインフリーで原材料品質・栄養バランスともに最高水準です。` },
            { q: 'コスパの良いプレミアムキャットフードは？', a: `コスパ面では${top[2]?.name}がおすすめです。¥${top[2]?.price.toLocaleString()}/${top[2]?.priceUnit}で猫暮らしスコア${top[2]?.score}と高品質を実現。入手しやすさも魅力です。` },
            { q: 'グレインフリーは必ず選ぶべきですか？', a: '猫は肉食動物で炭水化物の消化が苦手なため、グレインフリーは消化器への負担が少ないとされています。ただし全ての猫に必須ではなく、猫の体質や健康状態に合わせて選ぶことが重要です。' },
          ].map((f, i) => (
            <div key={i} className="bg-white border border-[#ede9e3] rounded-xl p-5">
              <p className="font-bold text-[#2d5a3d] mb-2 text-sm">Q. {f.q}</p>
              <p className="text-sm text-[#57534e] leading-relaxed">A. {f.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* まとめ */}
      <div className="bg-[#f5f0eb] rounded-2xl p-6 mt-12">
        <h2 className="text-xl font-black text-[#1c1917] mb-4">まとめ</h2>
        <p className="text-sm text-[#57534e] leading-relaxed mb-4">
          プレミアムキャットフードは、長期的な健康維持と医療費削減を考えると十分な投資価値があります。
          猫暮らしスコアを参考に、愛猫に最適な1品を見つけてください。
        </p>
        <ul className="space-y-2">
          {top.slice(0, 3).map((p, i) => (
            <li key={p.id} className="text-sm text-[#44403c] flex items-start gap-2">
              <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-black text-white mt-0.5 ${i === 0 ? 'bg-[#c9953a]' : i === 1 ? 'bg-[#9ca3af]' : 'bg-[#b45309]'}`}>{i+1}</span>
              <span><strong>{p.name}</strong>（スコア{p.score}）— {p.tags.join('・')}</span>
            </li>
          ))}
        </ul>
        <div className="mt-5 pt-5 border-t border-[#ede9e3]">
          <a href={`/category/premium-cat-food`} className="text-sm font-bold text-[#2d5a3d] hover:underline">
            → プレミアムキャットフード全製品ランキングを見る
          </a>
        </div>
      </div>
    </article>
  );
}
