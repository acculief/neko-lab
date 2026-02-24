import { MetadataRoute } from 'next';
import { CATEGORIES } from '@/lib/products';
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://neko-lab.vercel.app';
  const now = new Date();
  return [
    { url: base, lastModified: now, changeFrequency: 'daily', priority: 1.0 },
    ...CATEGORIES.map(c => ({ url: `${base}/category/${c.slug}`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9 })),
    { url: `${base}/article/premium-cat-food-ranking`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${base}/score`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.6 },
  ];
}
