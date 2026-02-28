import type { CategoryType, ScoreInput } from './scoring';
import { CAT_FOOD_PRODUCTS } from '@/data/products/cat-food';
import { KIDNEY_FOOD_PRODUCTS } from '@/data/products/kidney-food';
import { AUTO_TOILET_PRODUCTS } from '@/data/products/auto-toilet';
import { CAT_LITTER_PRODUCTS } from '@/data/products/cat-litter';
import { INSURANCE_PRODUCTS } from '@/data/products/insurance';
import { CAT_TOY_PRODUCTS } from '@/data/products/cat-toy';
import { CAT_CARRIER_PRODUCTS } from '@/data/products/cat-carrier';

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: CategoryType;
  price: number;        // 円
  priceUnit: string;    // 'g' | '袋' | '個' | '月'
  image: string;
  imageUrl?: string;
  amazonUrl?: string;
  rakutenUrl?: string;
  description: string;
  specs: Record<string, string>;
  scoreInput: ScoreInput;
  score?: number;
  tags: string[];
}

export interface Category {
  id: CategoryType;
  name: string;
  slug: string;
  description: string;
  icon: string;
  iconImg?: string;
  keywords: string[];
}

export const CATEGORIES: Category[] = [
  {
    id: 'cat-food',
    name: 'プレミアムキャットフード',
    slug: 'premium-cat-food',
    description: '厳選素材を使ったプレミアムキャットフードを猫暮らしスコアで比較。愛猫の健康を考えた選び方も解説。',
    icon: '🍖',
    keywords: ['プレミアムキャットフード', 'グレインフリー', '高品質猫フード'],
  },
  {
    id: 'kidney-food',
    name: '腎臓ケアフード',
    slug: 'kidney-care-food',
    description: '腎臓病の猫に最適な療法食・腎臓ケアフードを獣医師監修の評価基準で徹底比較。',
    icon: '💊',
    keywords: ['腎臓ケア キャットフード', '猫 腎臓病 フード', '療法食 猫'],
  },
  {
    id: 'auto-toilet',
    name: '全自動猫トイレ',
    slug: 'auto-litter-box',
    description: '自動掃除で手間いらずの全自動猫トイレ。臭い対策・清潔さ・使いやすさを比較。',
    icon: '🚽',
    keywords: ['全自動猫トイレ', '自動猫トイレ おすすめ', 'セルフクリーニング 猫トイレ'],
  },
  {
    id: 'cat-litter',
    name: '高級猫砂',
    slug: 'premium-cat-litter',
    description: '消臭力・固まり方・舞い散りにくさで選ぶ高級猫砂ランキング。猫にも人にも優しい素材を厳選。',
    icon: '✨',
    keywords: ['猫砂 おすすめ 高級', '消臭 猫砂', '猫砂 固まる 最強'],
  },
  {
    id: 'insurance',
    name: 'ペット保険比較',
    slug: 'pet-insurance',
    description: '猫のペット保険を補償内容・保険料・口コミで徹底比較。加入前に知っておくべきポイントも解説。',
    icon: '🛡️',
    keywords: ['猫 ペット保険 比較', 'ペット保険 おすすめ 猫', '猫 医療保険'],
  },
  {
    id: 'cat-toy',
    name: 'おもちゃ',
    slug: 'cat-toy',
    description: '猫のおもちゃ・爪とぎ。運動不足解消・ストレス発散に最適なアイテムを比較',
    icon: '🎾',
    iconImg: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=200&h=200&auto=format&fit=crop',
    keywords: ['猫 おもちゃ おすすめ', 'ねこじゃらし', '猫 爪とぎ'],
  },
  {
    id: 'cat-carrier',
    name: 'キャリー',
    slug: 'cat-carrier',
    description: '猫用キャリーバッグ・バックパック。通院・旅行・避難に必須のキャリーを比較',
    icon: '🎒',
    iconImg: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=200&h=200&auto=format&fit=crop',
    keywords: ['猫 キャリー おすすめ', '猫 キャリーバッグ', 'ペットキャリー 比較'],
  },
];

export function getAllProducts(): Product[] {
  return [
    ...CAT_FOOD_PRODUCTS,
    ...KIDNEY_FOOD_PRODUCTS,
    ...AUTO_TOILET_PRODUCTS,
    ...CAT_LITTER_PRODUCTS,
    ...INSURANCE_PRODUCTS,
    ...CAT_TOY_PRODUCTS,
    ...CAT_CARRIER_PRODUCTS,
  ];
}

export { CAT_FOOD_PRODUCTS, KIDNEY_FOOD_PRODUCTS, AUTO_TOILET_PRODUCTS, CAT_LITTER_PRODUCTS, INSURANCE_PRODUCTS, CAT_TOY_PRODUCTS, CAT_CARRIER_PRODUCTS };
