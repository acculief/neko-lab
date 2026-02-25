"use client";
import { useState } from 'react';
import Link from 'next/link';
import CategoryIcon from './CategoryIcon';
import type { Product, Category } from '@/lib/products';

interface CategoryTopCardProps {
  cat: Category;
  product: Product;
}

export default function CategoryTopCard({ cat, product }: CategoryTopCardProps) {
  const [imgError, setImgError] = useState(false);
  return (
    <Link
      href={`/category/${cat.slug}`}
      className="group bg-white rounded-2xl border border-[#E8E3DC] hover:border-[#C4892A] hover:shadow-lg transition-all overflow-hidden"
    >
      <div className="bg-gradient-to-r from-[#1A2D4A] to-[#243B5E] px-3 py-2 flex items-center gap-1.5">
        <CategoryIcon icon={cat.icon} iconImg={cat.iconImg} size={14} />
        <span className="text-[10px] font-bold text-white truncate">{cat.name}</span>
      </div>
      <div className="bg-[#F8F3EB] h-28 flex items-center justify-center overflow-hidden">
        {product.imageUrl && !imgError ? (
          <img
            src={product.imageUrl}
            alt={product.name}
            referrerPolicy="no-referrer"
            loading="lazy"
            onError={() => setImgError(true)}
            className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <span className="text-3xl">🐱</span>
        )}
      </div>
      <div className="p-3">
        <p className="text-[10px] text-[#8A8078] mb-0.5">{product.brand}</p>
        <p className="text-xs font-bold text-[#1A2D4A] leading-tight line-clamp-2 mb-2 group-hover:text-[#C4892A] transition-colors">{product.name}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="text-xs font-black text-[#C4892A]">{product.score}</span>
            <span className="text-[10px] text-[#8A8078]">点</span>
          </div>
          <span className="text-[10px] text-[#C4892A] font-bold group-hover:underline">詳しく →</span>
        </div>
      </div>
    </Link>
  );
}
