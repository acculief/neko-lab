'use client';
import { useState } from 'react';
import ScoreBadge from './ScoreBadge';
import type { Product } from '@/lib/products';
interface ComparisonTableProps { products: Product[]; }
export default function ComparisonTable({ products }: ComparisonTableProps) {
  const [sortBy, setSortBy] = useState<'score' | 'price'>('score');
  const sorted = [...products].sort((a, b) => sortBy === 'score' ? (b.score ?? 0) - (a.score ?? 0) : a.price - b.price);
  const specKeys = Array.from(new Set(products.flatMap(p => Object.keys(p.specs))));
  return (
    <div className="w-full">
      <div className="flex gap-2 mb-4">
        {(['score', 'price'] as const).map(s => (
          <button key={s} onClick={() => setSortBy(s)}
            className={`px-4 py-1.5 rounded-full text-sm font-bold transition-colors border ${sortBy === s ? 'bg-[#2d5a3d] text-white border-[#2d5a3d]' : 'bg-white text-[#57534e] border-[#ede9e3] hover:border-[#2d5a3d]'}`}>
            {s === 'score' ? 'スコア順' : '価格順'}
          </button>
        ))}
      </div>
      <div className="overflow-x-auto rounded-xl border border-[#ede9e3]">
        <table className="min-w-full text-sm">
          <thead className="bg-[#f5f0eb] border-b border-[#ede9e3]">
            <tr>
              <th className="px-4 py-3 text-left font-bold text-[#1c1917] min-w-[180px]">商品名</th>
              <th className="px-4 py-3 text-center font-bold text-[#1c1917] w-24">スコア</th>
              <th className="px-4 py-3 text-center font-bold text-[#1c1917] w-28">価格</th>
              {specKeys.map(k => <th key={k} className="px-4 py-3 text-center font-bold text-[#1c1917] min-w-[100px]">{k}</th>)}
              <th className="px-4 py-3 text-center font-bold text-[#1c1917] w-32">購入</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#f5f0eb]">
            {sorted.map((p, i) => (
              <tr key={p.id} className={i % 2 === 0 ? 'bg-white' : 'bg-[#faf8f5]'}>
                <td className="px-4 py-3">
                  <p className="text-[10px] text-[#a8a29e]">{p.brand}</p>
                  <p className="font-bold text-[#1c1917]">{p.name}</p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {p.tags.slice(0, 2).map(tag => <span key={tag} className="text-[10px] bg-[#f0fdf4] text-[#2d5a3d] px-1.5 py-0.5 rounded-full">{tag}</span>)}
                  </div>
                </td>
                <td className="px-4 py-3 text-center">{p.score && <div className="flex justify-center"><ScoreBadge score={p.score} size="sm" /></div>}</td>
                <td className="px-4 py-3 text-center"><p className="font-bold text-[#1c1917]">¥{p.price.toLocaleString()}</p><p className="text-xs text-[#a8a29e]">/{p.priceUnit}</p></td>
                {specKeys.map(k => <td key={k} className="px-4 py-3 text-center text-[#78716c] text-xs">{p.specs[k] ?? '—'}</td>)}
                <td className="px-4 py-3">
                  <div className="flex flex-col gap-1.5">
                    {p.amazonUrl && <a href={p.amazonUrl} target="_blank" rel="noopener noreferrer" className="text-center text-xs py-1.5 bg-[#ff9900] hover:bg-[#e8860a] text-white rounded-lg font-bold">Amazon</a>}
                    {p.rakutenUrl && <a href={p.rakutenUrl} target="_blank" rel="noopener noreferrer" className="text-center text-xs py-1.5 bg-[#bf0000] hover:bg-[#a00000] text-white rounded-lg font-bold">楽天</a>}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
