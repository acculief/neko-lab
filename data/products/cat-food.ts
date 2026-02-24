import type { Product } from '@/lib/products';
import { calcScore } from '@/lib/scoring';

const raw: Omit<Product, 'score'>[] = [
  {
    id: 'acana-pacifica', slug: 'acana-pacifica', name: 'アカナ パシフィカ キャット', brand: 'ACANA',
    category: 'cat-food', price: 4980, priceUnit: '1.8kg', image: '/images/acana.jpg',
    amazonUrl: 'https://amazon.co.jp/dp/B00EXAMPLE1', rakutenUrl: 'https://item.rakuten.co.jp/example/1',
    description: '新鮮な魚介類を70%以上使用したグレインフリーフード。タラ・サーモン・ニシンなど豊富な魚介がタンパク質源。',
    specs: { '原材料': '魚介70%以上', 'グレイン': 'フリー', 'タンパク質': '37%以上', '脂質': '16%以上' },
    scoreInput: { ingredients: 96, palatability: 82, nutrition: 94, price_value: 68, reviews: 88 },
    tags: ['グレインフリー', '魚介系', 'プレミアム'],
  },
  {
    id: 'orijen-cat', slug: 'orijen-cat', name: 'オリジン キャット＆キトン', brand: 'ORIJEN',
    category: 'cat-food', price: 5980, priceUnit: '1.8kg', image: '/images/orijen.jpg',
    amazonUrl: 'https://amazon.co.jp/dp/B00EXAMPLE2',
    description: '新鮮・生・乾燥食材を85%使用。肉・魚・卵・レバー・軟骨など自然食材で猫の本能を満たす。',
    specs: { '原材料': '動物性85%', 'グレイン': 'フリー', 'タンパク質': '40%以上', '脂質': '18%以上' },
    scoreInput: { ingredients: 98, palatability: 85, nutrition: 96, price_value: 60, reviews: 90 },
    tags: ['グレインフリー', '最高品質', 'バイオロジカル'],
  },
  {
    id: 'monpetit-gold', slug: 'monpetit-gold', name: 'モンプチ プロニュートリション ゴールド', brand: 'Nestlé',
    category: 'cat-food', price: 2380, priceUnit: '800g', image: '/images/monpetit.jpg',
    amazonUrl: 'https://amazon.co.jp/dp/B00EXAMPLE3', rakutenUrl: 'https://item.rakuten.co.jp/example/3',
    description: '栄養バランスに優れた中価格帯のプレミアムフード。入手しやすく猫の好みにも合わせやすい。',
    specs: { '原材料': '鶏肉・ターキー', 'グレイン': 'あり', 'タンパク質': '33%以上', '脂質': '14%以上' },
    scoreInput: { ingredients: 78, palatability: 88, nutrition: 82, price_value: 85, reviews: 84 },
    tags: ['コスパ重視', '食いつき良好', '入手しやすい'],
  },
  {
    id: 'royal-canin-indoor', slug: 'royal-canin-indoor', name: 'ロイヤルカナン インドアキャット', brand: 'Royal Canin',
    category: 'cat-food', price: 3280, priceUnit: '2kg', image: '/images/royalcanin.jpg',
    amazonUrl: 'https://amazon.co.jp/dp/B00EXAMPLE4',
    description: '室内飼い猫に特化した栄養設計。毛玉ケア・体重管理・消化サポートを同時にケア。',
    specs: { '原材料': '鶏肉・米', 'グレイン': 'あり', 'タンパク質': '30%以上', '脂質': '12%以上' },
    scoreInput: { ingredients: 80, palatability: 80, nutrition: 88, price_value: 78, reviews: 86 },
    tags: ['室内猫向け', '毛玉ケア', '体重管理'],
  },
  {
    id: 'supremo-adult', slug: 'supremo-adult', name: 'シュプレモ 成猫用', brand: 'Purina',
    category: 'cat-food', price: 2980, priceUnit: '1.36kg', image: '/images/supremo.jpg',
    amazonUrl: 'https://amazon.co.jp/dp/B00EXAMPLE5',
    description: 'ピュリナ最上位ライン。自然素材にこだわり、人工着色料・保存料不使用。23種のビタミン・ミネラル配合。',
    specs: { '原材料': 'チキン', 'グレイン': 'あり', 'タンパク質': '33%以上', '脂質': '17%以上' },
    scoreInput: { ingredients: 85, palatability: 86, nutrition: 84, price_value: 72, reviews: 82 },
    tags: ['自然素材', '添加物なし', 'バランス重視'],
  },
];

export const CAT_FOOD_PRODUCTS: Product[] = raw.map(p => ({
  ...p,
  score: calcScore(p.scoreInput, 'cat-food'),
}));
