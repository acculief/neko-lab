import { getScoreTier, getScoreLabel } from '@/lib/scoring';
interface ScoreBadgeProps { score: number; size?: 'sm' | 'md' | 'lg'; showLabel?: boolean; }
const TIER_STYLES = {
  gold: 'bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-amber-200',
  green: 'bg-gradient-to-br from-emerald-400 to-green-600 text-white shadow-emerald-200',
  gray: 'bg-gradient-to-br from-gray-400 to-gray-500 text-white shadow-gray-200',
};
const SIZE_STYLES = {
  sm: { wrapper: 'w-12 h-12', score: 'text-base font-bold', label: 'text-[9px]' },
  md: { wrapper: 'w-16 h-16', score: 'text-xl font-bold', label: 'text-[10px]' },
  lg: { wrapper: 'w-20 h-20', score: 'text-2xl font-bold', label: 'text-xs' },
};
export default function ScoreBadge({ score, size = 'md', showLabel = true }: ScoreBadgeProps) {
  const tier = getScoreTier(score);
  const label = getScoreLabel(score);
  return (
    <div className={`relative flex flex-col items-center justify-center rounded-full shadow-lg ${TIER_STYLES[tier]} ${SIZE_STYLES[size].wrapper}`}>
      <span className={SIZE_STYLES[size].score}>{score}</span>
      {showLabel && <span className={`${SIZE_STYLES[size].label} opacity-90 leading-tight text-center`}>{label}</span>}
    </div>
  );
}
