"use client";
import { useState } from 'react';
import ScoreBadge from './ScoreBadge';
import ScoreBreakdown from './ScoreBreakdown';
import type { Product } from '@/lib/products';

interface ProductCardProps { product: Product; rank?: number; }

const RANK_EMOJI = ['', '🥇', '🥈', '🥉'];

export default function ProductCard({ product, rank }: ProductCardProps) {
  const [imgError, setImgError] = useState(false);
  const [showBreakdown, setShowBreakdown] = useState(false);

  return (
    <div className="relative bg-white rounded-2xl overflow-hidden border border-[#E8E3DC] hover:border-[#C4892A] hover:shadow-lg transition-all duration-200 flex flex-col">
      {rank && rank <= 3 && (
        <div className="absolute top-2 left-2 z-10 text-xl leading-none drop-shadow-md">{RANK_EMOJI[rank]}</div>
      )}
      {rank && rank > 3 && (
        <div className="absolute top-3 left-3 z-10 w-6 h-6 rounded-full bg-[#8A8078] flex items-center justify-center text-[10px] font-black text-white shadow">{rank}</div>
      )}

      <div className="bg-gradient-to-br from-[#F8F3EB] to-[#F0EAE0] h-40 flex items-center justify-center overflow-hidden relative">
        {product.imageUrl && !imgError ? (
          <img
            src={product.imageUrl}
            alt={product.name}
            referrerPolicy="no-referrer"
            loading="lazy"
            onError={() => setImgError(true)}
            className="w-full h-full object-contain p-3 hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="flex flex-col items-center justify-center gap-2 text-[#A89880]">
            <div className="w-14 h-14 rounded-full bg-[#E8E3DC] flex items-center justify-center">
              <span className="text-2xl">🐱</span>
            </div>
            <span className="text-xs font-bold opacity-60">{product.brand}</span>
          </div>
        )}
        {product.score && (
          <div className="absolute top-2 right-2">
            <ScoreBadge score={product.score} size="sm" showLabel={false} />
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col flex-1">
        <div className="mb-2">
          <p className="text-[10px] text-[#8A8078] mb-0.5 font-medium">{product.brand}</p>
          <h3 className="font-bold text-[#1A2D4A] text-sm leading-tight line-clamp-2">{product.name}</h3>
        </div>

        <p className="text-xs text-[#6B6560] mb-3 line-clamp-2 flex-1">{product.description}</p>

        <div className="flex flex-wrap gap-1 mb-3">
          {product.tags.slice(0, 3).map(tag => (
            <span key={tag} className="text-[10px] bg-[#FFF3DC] text-[#9E6E1E] px-2 py-0.5 rounded-full border border-[#E8C87A] font-medium">{tag}</span>
          ))}
        </div>

        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-bold text-[#1A2D4A]">
            ¥{product.price.toLocaleString()}
            <span className="text-xs font-normal text-[#8A8078] ml-1">/{product.priceUnit}</span>
          </p>
          {product.score && (
            <button
              onClick={() => setShowBreakdown(!showBreakdown)}
              className="text-[10px] text-[#C4892A] hover:text-[#9E6E1E] font-bold flex items-center gap-0.5 transition-colors"
            >
              スコア詳細 {showBreakdown ? '▲' : '▼'}
            </button>
          )}
        </div>

        {showBreakdown && (
          <div className="bg-[#FFF8ED] rounded-xl p-3 mb-3 border border-[#F0E0B0]">
            <ScoreBreakdown scoreInput={product.scoreInput} category={product.category} />
          </div>
        )}

        <div className="grid grid-cols-2 gap-2 mt-auto">
          {product.amazonUrl && (
            <a href={product.amazonUrl} target="_blank" rel="noopener noreferrer"
              className="text-center text-xs py-2 bg-[#FF9900] hover:bg-[#E88800] text-white rounded-lg font-bold transition-colors shadow-sm">
              Amazon
            </a>
          )}
          {product.rakutenUrl ? (
            <a href={product.rakutenUrl} target="_blank" rel="noopener noreferrer"
              className="text-center text-xs py-2 bg-[#BF0000] hover:bg-[#9E0000] text-white rounded-lg font-bold transition-colors shadow-sm">
              楽天
            </a>
          ) : product.amazonUrl ? (
            <a href={`/category/${product.category === 'cat-food' ? 'premium-cat-food' : product.category === 'kidney-food' ? 'kidney-care-food' : product.category === 'auto-toilet' ? 'auto-litter-box' : product.category === 'cat-litter' ? 'premium-cat-litter' : 'pet-insurance'}`}
              className="text-center text-xs py-2 bg-[#FFF3DC] hover:bg-[#FFE9C0] text-[#9E6E1E] rounded-lg font-bold border border-[#E8C87A] transition-colors">
              比較する
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
