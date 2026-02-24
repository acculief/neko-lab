import { getScoreTier, getScoreLabel } from '@/lib/scoring';
interface ScoreBadgeProps { score: number; size?: 'sm' | 'md' | 'lg'; showLabel?: boolean; }
const TIER = {
  gold:  'bg-[#c9953a] text-white',
  green: 'bg-[#2d5a3d] text-white',
  gray:  'bg-[#78716c] text-white',
};
const SIZE = {
  sm: { wrap: 'w-11 h-11', num: 'text-sm font-black', lbl: 'text-[8px]' },
  md: { wrap: 'w-16 h-16', num: 'text-xl font-black', lbl: 'text-[10px]' },
  lg: { wrap: 'w-20 h-20', num: 'text-2xl font-black', lbl: 'text-xs' },
};
export default function ScoreBadge({ score, size = 'md', showLabel = true }: ScoreBadgeProps) {
  const tier = getScoreTier(score);
  return (
    <div className={`flex flex-col items-center justify-center rounded-full shadow ${TIER[tier]} ${SIZE[size].wrap}`}>
      <span className={SIZE[size].num}>{score}</span>
      {showLabel && <span className={`${SIZE[size].lbl} opacity-90`}>{getScoreLabel(score)}</span>}
    </div>
  );
}
