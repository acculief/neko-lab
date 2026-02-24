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
            className={`px-4 py-1.5 rounded-full text-sm font-bold transition-colors ${sortBy === s ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
            {s === 'score' ? 'スコア順' : '価格順'}
          </button>
        ))}
      </div>
      <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
        <table className="min-w-full text-sm">
          <thead className="bg-emerald-50 border-b border-emerald-100">
            <tr>
              <th className="px-4 py-3 text-left font-bold text-emerald-800 min-w-[180px]">商品名</th>
              <th className="px-4 py-3 text-center font-bold text-emerald-800 w-24">スコア</th>
              <th className="px-4 py-3 text-center font-bold text-emerald-800 w-28">価格</th>
              {specKeys.map(k => <th key={k} className="px-4 py-3 text-center font-bold text-emerald-800 min-w-[100px]">{k}</th>)}
              <th className="px-4 py-3 text-center font-bold text-emerald-800 w-32">購入</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {sorted.map((p, i) => (
              <tr key={p.id} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-4 py-3">
                  <p className="text-xs text-gray-400">{p.brand}</p>
                  <p className="font-bold text-gray-800">{p.name}</p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {p.tags.slice(0, 2).map(tag => <span key={tag} className="text-[10px] bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded-full">{tag}</span>)}
                  </div>
                </td>
                <td className="px-4 py-3 text-center">
                  {p.score && <div className="flex justify-center"><ScoreBadge score={p.score} size="sm" /></div>}
                </td>
                <td className="px-4 py-3 text-center">
                  <p className="font-bold text-gray-800">¥{p.price.toLocaleString()}</p>
                  <p className="text-xs text-gray-400">/{p.priceUnit}</p>
                </td>
                {specKeys.map(k => <td key={k} className="px-4 py-3 text-center text-gray-600 text-xs">{p.specs[k] ?? '—'}</td>)}
                <td className="px-4 py-3">
                  <div className="flex flex-col gap-1.5">
                    {p.amazonUrl && <a href={p.amazonUrl} target="_blank" rel="noopener noreferrer" className="text-center text-xs py-1.5 bg-amber-400 hover:bg-amber-500 text-white rounded-lg font-bold">Amazon</a>}
                    {p.rakutenUrl && <a href={p.rakutenUrl} target="_blank" rel="noopener noreferrer" className="text-center text-xs py-1.5 bg-red-500 hover:bg-red-600 text-white rounded-lg font-bold">楽天</a>}
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
