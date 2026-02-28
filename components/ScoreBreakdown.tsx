"use client";
import type { ScoreInput, CategoryType } from '@/lib/scoring';

interface ScoreBreakdownProps {
  scoreInput: ScoreInput;
  category: CategoryType;
}

const LABELS: Record<CategoryType, { key: keyof ScoreInput; label: string }[]> = {
  'cat-food': [
    { key: 'ingredients', label: '原材料品質' },
    { key: 'nutrition', label: '栄養バランス' },
    { key: 'palatability', label: '嗜好性' },
    { key: 'price_value', label: 'コスパ' },
    { key: 'reviews', label: '口コミ' },
  ],
  'kidney-food': [
    { key: 'ingredients', label: '原材料品質' },
    { key: 'nutrition', label: '腎臓ケア効果' },
    { key: 'palatability', label: '嗜好性' },
    { key: 'price_value', label: 'コスパ' },
    { key: 'reviews', label: '口コミ' },
  ],
  'auto-toilet': [
    { key: 'ease_of_use', label: '使いやすさ' },
    { key: 'odor_control', label: '消臭力' },
    { key: 'price_value', label: 'コスパ' },
    { key: 'reviews', label: '口コミ' },
    { key: 'ingredients', label: '機能性' },
  ],
  'cat-litter': [
    { key: 'odor_control', label: '消臭力' },
    { key: 'ease_of_use', label: '使いやすさ' },
    { key: 'price_value', label: 'コスパ' },
    { key: 'reviews', label: '口コミ' },
  ],
  'cat-toy': [
    { key: 'fun_factor', label: '楽しさ' },
    { key: 'durability', label: '耐久性' },
    { key: 'price_value', label: 'コスパ' },
    { key: 'reviews', label: '口コミ' },
  ],
  'cat-carrier': [
    { key: 'portability', label: '携帯性' },
    { key: 'safety', label: '安全性' },
    { key: 'ease_of_use', label: '使いやすさ' },
    { key: 'price_value', label: 'コスパ' },
  ],
  'insurance': [
    { key: 'coverage', label: '補償範囲' },
    { key: 'premium', label: '保険料' },
    { key: 'deductible', label: '免責・利便性' },
    { key: 'reviews', label: '口コミ' },
  ],
};

function getBarColor(value: number): string {
  if (value >= 90) return '#C4892A';
  if (value >= 75) return '#2d5a3d';
  return '#8A8078';
}

export default function ScoreBreakdown({ scoreInput, category }: ScoreBreakdownProps) {
  const labels = LABELS[category] ?? [];
  return (
    <div className="space-y-1.5">
      {labels.map(({ key, label }) => {
        const value = scoreInput[key];
        if (value === undefined) return null;
        const color = getBarColor(value);
        return (
          <div key={key} className="flex items-center gap-2">
            <span className="text-[10px] text-[#6B6560] w-20 flex-shrink-0 text-right leading-tight">{label}</span>
            <div className="flex-1 bg-[#F0EAE0] rounded-full h-2 overflow-hidden">
              <div className="h-full rounded-full" style={{ width: `${value}%`, backgroundColor: color }} />
            </div>
            <span className="text-[10px] font-bold w-6 flex-shrink-0" style={{ color }}>{value}</span>
          </div>
        );
      })}
    </div>
  );
}
