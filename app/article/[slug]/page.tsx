import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { CAT_FOOD_PRODUCTS } from '@/data/products/cat-food';
import ComparisonTable from '@/components/ComparisonTable';
import CTASection from '@/components/CTASection';
import ScoreBadge from '@/components/ScoreBadge';

export const revalidate = 3600;

const ARTICLES: Record<string, { title: string; description: string; products: typeof CAT_FOOD_PRODUCTS }> = {
  'premium-cat-food-ranking': {
    title: 'プレミアムキャットフードおすすめ5選【猫暮らしスコアで徹底比較2024】',
    description: '獣医師監修の猫暮らしスコアで厳選したプレミアムキャットフード5選を徹底比較。原材料・栄養バランス・コスパで最強フードを解説。',
    products: CAT_FOOD_PRODUCTS,
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
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = ARTICLES[slug];
  if (!article) notFound();

  const top = [...article.products].sort((a, b) => (b.score ?? 0) - (a.score ?? 0));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    author: { '@type': 'Organization', name: '猫暮らしラボ編集部' },
    publisher: { '@type': 'Organization', name: '猫暮らしラボ' },
    dateModified: new Date().toISOString().split('T')[0],
  };

  return (
    <article className="max-w-3xl mx-auto px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="text-xs text-gray-400 mb-6">
        <a href="/" className="hover:text-emerald-600">ホーム</a>
        <span className="mx-2">/</span>
        <a href="/category/premium-cat-food" className="hover:text-emerald-600">プレミアムキャットフード</a>
        <span className="mx-2">/</span>
        <span className="text-gray-700">おすすめ5選</span>
      </nav>
      <h1 className="text-2xl md:text-3xl font-black text-gray-800 leading-tight mb-4">{article.title}</h1>
      <div className="flex items-center gap-4 mb-6 text-sm text-gray-400">
        <span>🐱 猫暮らしラボ編集部</span>
        <span>2024年1月更新</span>
      </div>
      <div className="bg-emerald-50 border-l-4 border-emerald-500 p-5 mb-8 rounded-r-xl">
        <p className="text-sm text-emerald-800 leading-relaxed">
          この記事では、<strong>猫暮らしスコア</strong>をもとに厳選した5製品を徹底比較します。
        </p>
      </div>
      <h2 className="text-xl font-black text-gray-800 mb-4 mt-8">スコアTOP3</h2>
      <div className="space-y-3 mb-8">
        {top.slice(0, 3).map((p, i) => (
          <div key={p.id} className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0 ${
              i === 0 ? 'bg-amber-400' : i === 1 ? 'bg-gray-400' : 'bg-amber-700'
            }`}>{i + 1}</div>
            {p.score && <ScoreBadge score={p.score} size="sm" />}
            <div className="flex-1 min-w-0">
              <p className="text-xs text-gray-400">{p.brand}</p>
              <p className="font-bold text-gray-800 text-sm">{p.name}</p>
            </div>
            <p className="text-sm font-bold text-gray-700 flex-shrink-0">¥{p.price.toLocaleString()}</p>
          </div>
        ))}
      </div>
      <h2 className="text-xl font-black text-gray-800 mb-4 mt-10">詳細比較テーブル</h2>
      <ComparisonTable products={top} />
      <h2 className="text-xl font-black text-gray-800 mb-6 mt-12">各製品レビュー</h2>
      {top.map((p, i) => (
        <div key={p.id} className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0 ${
              i === 0 ? 'bg-amber-400' : i === 1 ? 'bg-gray-400' : i === 2 ? 'bg-amber-700' : 'bg-gray-200 text-gray-600'
            }`}>{i + 1}</div>
            {p.score && <ScoreBadge score={p.score} size="sm" />}
            <h3 className="text-lg font-black text-gray-800">{p.name}</h3>
          </div>
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">{p.description}</p>
          <div className="grid grid-cols-2 gap-2 mb-4">
            {Object.entries(p.specs).map(([k, v]) => (
              <div key={k} className="bg-gray-50 rounded-lg p-2">
                <p className="text-xs text-gray-400">{k}</p>
                <p className="text-sm font-bold text-gray-700">{v}</p>
              </div>
            ))}
          </div>
          {p.amazonUrl && (
            <CTASection
              productName={p.name}
              description={`¥${p.price.toLocaleString()}/${p.priceUnit}`}
              amazonUrl={p.amazonUrl}
              rakutenUrl={p.rakutenUrl}
            />
          )}
        </div>
      ))}
      <div className="bg-gray-50 rounded-2xl p-6 mt-10">
        <h2 className="text-xl font-black text-gray-800 mb-4">まとめ</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          プレミアムキャットフードは長期的な健康維持・医療費削減を考えると十分な投資価値があります。
        </p>
        <ul className="space-y-2">
          {top.slice(0, 3).map((p, i) => (
            <li key={p.id} className="text-sm text-gray-700">
              <span className="font-bold text-emerald-700">第{i + 1}位</span>: {p.name}（スコア{p.score}）
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
