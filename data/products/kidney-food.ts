import type { Product } from '@/lib/products';
import { calcScore } from '@/lib/scoring';

const raw: Omit<Product, 'score'>[] = [
  {
    id: 'royal-canin-renal', slug: 'royal-canin-renal', name: 'ロイヤルカナン 腎臓サポート', brand: 'Royal Canin',
    category: 'kidney-food', price: 4200, priceUnit: '2kg', image: '/images/rc-renal.jpg',
    amazonUrl: 'https://www.amazon.co.jp/dp/B001EAUIIU',
    description: '世界で最も信頼される猫の腎臓療法食。低リン・低タンパク設計で腎臓への負担を最小化。嗜好性を高める特別な香りで食欲不振の猫にも対応。',
    specs: { 'リン': '0.31%以下', 'タンパク質': '25.0%以上', 'ナトリウム': '0.4%以下', 'カロリー': '410kcal/100g' },
    scoreInput: { ingredients: 85, nutrition: 94, palatability: 80, price_value: 65, reviews: 90 },
    tags: ['低リン', '低タンパク', '獣医師推奨', '療法食'],
  },
  {
    id: 'hills-kd-feline', slug: 'hills-kd', name: 'ヒルズ プリスクリプション ダイエット k/d', brand: "Hill's",
    category: 'kidney-food', price: 5500, priceUnit: '2kg', image: '/images/hills-kd.jpg',
    amazonUrl: 'https://www.amazon.co.jp/dp/B0002AR2NI',
    description: '40年以上の研究に基づく腎臓ケア最高峰フード。オメガ3脂肪酸配合で炎症を抑制。臨床試験で腎臓への効果が実証されている療法食の定番。',
    specs: { 'リン': '0.29%以下', 'タンパク質': '24.5%以上', 'EPA+DHA': '0.44%以上', 'カロリー': '425kcal/100g' },
    scoreInput: { ingredients: 88, nutrition: 96, palatability: 75, price_value: 58, reviews: 88 },
    tags: ['低リン', 'オメガ3', '臨床実証', '療法食'],
  },
  {
    id: 'purina-nf-feline', slug: 'purina-nf', name: 'ピュリナ プロプラン 腎臓ケア NF', brand: 'Purina',
    category: 'kidney-food', price: 3800, priceUnit: '1.5kg', image: '/images/purina-nf.jpg',
    amazonUrl: 'https://www.amazon.co.jp/s?k=purina+nf+kidney',
    description: '腎臓機能のサポートに特化したピュリナの療法食。低リン・低ナトリウム・制限タンパクで腎臓の負担を軽減。食いつきの良さが評価されている。',
    specs: { 'リン': '0.30%以下', 'タンパク質': '24.0%以上', 'ナトリウム': '0.38%以下', 'カロリー': '395kcal/100g' },
    scoreInput: { ingredients: 80, nutrition: 90, palatability: 85, price_value: 70, reviews: 82 },
    tags: ['低リン', '嗜好性高め', '療法食', 'コスパ良好'],
  },
  {
    id: 'science-diet-urinary', slug: 'science-diet-kidney', name: 'ヒルズ サイエンス・ダイエット シニアプラス 腎臓・心臓健康維持用', brand: "Hill's",
    category: 'kidney-food', price: 3500, priceUnit: '1.8kg', image: '/images/hills-senior.jpg',
    amazonUrl: 'https://www.amazon.co.jp/dp/B07DJ1FPKC',
    description: '療法食に移行前のシニア猫に適した腎臓・心臓サポートフード。低リン・低ナトリウム設計で市販品ながら腎臓ケアに配慮。',
    specs: { 'リン': '0.45%以下', 'タンパク質': '28.0%以上', 'ナトリウム': '0.35%以下', 'カロリー': '385kcal/100g' },
    scoreInput: { ingredients: 78, nutrition: 82, palatability: 82, price_value: 78, reviews: 80 },
    tags: ['シニア猫向け', '市販品', '腎臓・心臓ケア'],
  },
  {
    id: 'aixia-miaw-renal', slug: 'aixia-miaw-renal', name: 'アイシア MiawMiaw 腎臓の健康維持（ウェット）', brand: 'アイシア',
    category: 'kidney-food', price: 1800, priceUnit: '60g×12', image: '/images/miaw-renal.jpg',
    amazonUrl: 'https://www.amazon.co.jp/s?k=%E3%82%A2%E3%82%A4%E3%82%B7%E3%82%A2+miaw+%E8%85%8E%E8%87%93',
    description: '食欲不振の腎臓病猫にも食べやすいウェットタイプ。水分補給をサポートし腎臓への負担を軽減。低リン設計で市販品の中でもケアに配慮した選択肢。',
    specs: { 'リン': '0.20%以下（ウェット）', 'タンパク質': '10.0%以上', '水分': '78%以上', 'カロリー': '85kcal/袋' },
    scoreInput: { ingredients: 72, nutrition: 78, palatability: 90, price_value: 82, reviews: 78 },
    tags: ['ウェット', '水分補給', '食欲不振対応', '市販品'],
  },
];

export const KIDNEY_FOOD_PRODUCTS: Product[] = raw.map(p => ({
  ...p,
  score: calcScore(p.scoreInput, 'kidney-food'),
}));
