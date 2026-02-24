import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { CATEGORIES } from '@/lib/products';
import { CAT_FOOD_PRODUCTS } from '@/data/products/cat-food';
import ProductCard from '@/components/ProductCard';
import ComparisonTable from '@/components/ComparisonTable';
import type { Product } from '@/lib/products';

export const revalidate = 3600;

export async function generateStaticParams() {
  return CATEGORIES.map(c => ({ name: c.slug }));
}

function getProducts(slug: string): Product[] {
  if (slug === 'premium-cat-food') return CAT_FOOD_PRODUCTS;
  return [];
}

export async function generateMetadata({ params }: { params: Promise<{ name: string }> }): Promise<Metadata> {
  const { name } = await params;
  const cat = CATEGORIES.find(c => c.slug === name);
  if (!cat) return {};
  return {
    title: `${cat.name}おすすめランキング | 猫暮らしラボ`,
    description: cat.description,
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;
  const cat = CATEGORIES.find(c => c.slug === name);
  if (!cat) notFound();

  const products = getProducts(cat.slug);
  const sorted = [...products].sort((a, b) => (b.score ?? 0) - (a.score ?? 0));

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <nav className="text-xs text-gray-400 mb-6">
        <a href="/" className="hover:text-emerald-600">ホーム</a>
        <span className="mx-2">/</span>
        <span className="text-gray-700">{cat.name}</span>
      </nav>
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-4xl">{cat.icon}</span>
          <h1 className="text-2xl md:text-3xl font-black text-gray-800">{cat.name}おすすめランキング</h1>
        </div>
        <p className="text-gray-600 leading-relaxed">{cat.description}</p>
      </div>
      {sorted.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {sorted.map((p, i) => <ProductCard key={p.id} product={p} rank={i + 1} />)}
          </div>
          <h2 className="text-xl font-black text-gray-800 mb-4">詳細比較テーブル</h2>
          <ComparisonTable products={sorted} />
        </>
      ) : (
        <div className="text-center py-20 text-gray-400">
          <p className="text-4xl mb-4">🐱</p>
          <p>このカテゴリのデータは準備中です。</p>
        </div>
      )}
    </div>
  );
}
