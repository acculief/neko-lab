"use client";
import { useState } from 'react';
import ScoreBadge from './ScoreBadge';
import type { Product } from '@/lib/products';

interface ProductCardProps { product: Product; rank?: number; }

export default function ProductCard({ product, rank }: ProductCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative bg-white rounded-2xl overflow-hidden border border-[#E8E3DC] hover:border-[#C4892A] hover:shadow-lg transition-all duration-200">
      {rank && rank <= 3 && (
        <div className={`absolute top-3 left-3 z-10 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black text-white shadow-md ${
          rank === 1 ? 'bg-[#C4892A]' : rank === 2 ? 'bg-[#8A9BB5]' : 'bg-[#9E7E5E]'
        }`}>{rank}</div>
      )}

      {/* 商品画像エリア */}
      <div className="bg-[#F5F0E8] h-44 flex items-center justify-center overflow-hidden">
        {product.imageUrl && !imgError ? (
          <img
            src={product.imageUrl}
            alt={product.name}
            referrerPolicy="no-referrer"
            loading="lazy"
            onError={() => setImgError(true)}
            className="w-full h-full object-contain p-3"
          />
        ) : (
          <div className="flex flex-col items-center justify-center gap-1 text-[#A89880]">
            <svg className="w-12 h-12 opacity-30" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
            </svg>
            <span className="text-xs font-bold opacity-40">{product.brand}</span>
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div className="min-w-0">
            <p className="text-[10px] text-[#8A8078] mb-0.5 font-medium">{product.brand}</p>
            <h3 className="font-bold text-[#1A2D4A] text-sm leading-tight">{product.name}</h3>
          </div>
          {product.score && (
            <div className="flex-shrink-0">
              <ScoreBadge score={product.score} size="sm" showLabel={false} />
            </div>
          )}
        </div>

        <p className="text-xs text-[#6B6560] mb-3 line-clamp-2">{product.description}</p>

        <div className="flex flex-wrap gap-1 mb-3">
          {product.tags.map(tag => (
            <span key={tag} className="text-[10px] bg-[#FFF3DC] text-[#9E6E1E] px-2 py-0.5 rounded-full border border-[#E8C87A] font-medium">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-bold text-[#1A2D4A]">
            ¥{product.price.toLocaleString()}
            <span className="text-xs font-normal text-[#8A8078] ml-1">/{product.priceUnit}</span>
          </p>
          {product.score && (
            <p className="text-xs text-[#6B6560]">
              スコア <span className="font-bold text-[#C4892A]">{product.score}</span>
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-2">
          {product.amazonUrl && (
            <a href={product.amazonUrl} target="_blank" rel="noopener noreferrer"
              className="text-center text-xs py-2 bg-[#FF9900] hover:bg-[#E88800] text-white rounded-lg font-bold transition-colors">
              Amazon
            </a>
          )}
          {product.rakutenUrl && (
            <a href={product.rakutenUrl} target="_blank" rel="noopener noreferrer"
              className="text-center text-xs py-2 bg-[#BF0000] hover:bg-[#9E0000] text-white rounded-lg font-bold transition-colors">
              楽天
            </a>
          )}
          {!product.rakutenUrl && product.amazonUrl && (
            <a href={`/article/${product.slug}`}
              className="text-center text-xs py-2 bg-[#FFF3DC] hover:bg-[#FFE9C0] text-[#9E6E1E] rounded-lg font-bold border border-[#E8C87A] transition-colors">
              詳しく見る
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
