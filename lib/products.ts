import type { CategoryType, ScoreInput } from './scoring';

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: CategoryType;
  price: number;
  priceUnit: string;
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
}

export const CATEGORIES: Category[] = [
  {
    id: 'cat-food',
    name: 'プレミアムキャットフード',
    slug: 'premium-cat-food',
    description: '厳選素材を使ったプレミアムキャットフードを猫暮らしスコアで比較。',
    icon: '🍖',
  },
  {
    id: 'kidney-food',
    name: '腎臓ケアフード',
    slug: 'kidney-care-food',
    description: '腎臓病の猫に最適な療法食を獣医師監修の評価基準で徹底比較。',
    icon: '💊',
  },
  {
    id: 'auto-toilet',
    name: '全自動猫トイレ',
    slug: 'auto-litter-box',
    description: '自動掃除で手間いらずの全自動猫トイレ。臭い・清潔さ・使いやすさを比較。',
    icon: '🚽',
  },
  {
    id: 'cat-litter',
    name: '高級猫砂',
    slug: 'premium-cat-litter',
    description: '消臭力・固まり方で選ぶ高級猫砂ランキング。',
    icon: '✨',
  },
  {
    id: 'insurance',
    name: 'ペット保険比較',
    slug: 'pet-insurance',
    description: '猫のペット保険を補償内容・保険料・口コミで徹底比較。',
    icon: '🛡️',
  },
];
