export type CategoryType = 'cat-food' | 'kidney-food' | 'auto-toilet' | 'cat-litter' | 'insurance';

export interface ScoreInput {
  ingredients?: number;
  palatability?: number;
  nutrition?: number;
  price_value?: number;
  reviews?: number;
  coverage?: number;
  premium?: number;
  deductible?: number;
  ease_of_use?: number;
  odor_control?: number;
}

type WeightMap = Partial<Record<keyof ScoreInput, number>>;

const WEIGHTS: Record<CategoryType, WeightMap> = {
  'cat-food': { ingredients: 0.30, palatability: 0.20, nutrition: 0.20, price_value: 0.15, reviews: 0.15 },
  'kidney-food': { ingredients: 0.35, nutrition: 0.30, palatability: 0.15, price_value: 0.10, reviews: 0.10 },
  'auto-toilet': { ease_of_use: 0.30, odor_control: 0.25, price_value: 0.20, reviews: 0.15, ingredients: 0.10 },
  'cat-litter': { odor_control: 0.35, ease_of_use: 0.25, price_value: 0.20, reviews: 0.20 },
  'insurance': { coverage: 0.35, premium: 0.25, deductible: 0.20, reviews: 0.20 },
};

export function calcScore(input: ScoreInput, category: CategoryType): number {
  const weights = WEIGHTS[category];
  let total = 0, weightSum = 0;
  for (const [key, weight] of Object.entries(weights)) {
    const val = input[key as keyof ScoreInput];
    if (val !== undefined && weight) { total += val * weight; weightSum += weight; }
  }
  if (weightSum === 0) return 0;
  return Math.round((total / weightSum) * 10) / 10;
}

export type ScoreTier = 'gold' | 'green' | 'gray';

export function getScoreTier(score: number): ScoreTier {
  if (score >= 90) return 'gold';
  if (score >= 75) return 'green';
  return 'gray';
}

export function getScoreLabel(score: number): string {
  if (score >= 90) return '最高評価';
  if (score >= 80) return '高評価';
  if (score >= 75) return '良評価';
  if (score >= 60) return '標準';
  return '要検討';
}
