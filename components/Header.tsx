"use client";
import Link from 'next/link';
import { useState } from 'react';
import { CATEGORIES } from '@/lib/products';
import CategoryIcon from './CategoryIcon';

export default function Header() {
  const [logoError, setLogoError] = useState(false);

  return (
    <header className="bg-white border-b border-[#E8E3DC] sticky top-0 z-50 shadow-sm">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center flex-shrink-0">
              {!logoError ? (
                <img
                  src="/icons/logo.svg"
                  alt="猫暮らしラボ"
                  width={32}
                  height={32}
                  className="object-contain w-full h-full"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1A2D4A] to-[#2C4A6E] flex items-center justify-center">
                  <span className="text-[#C4892A] text-sm">🐾</span>
                </div>
              )}
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-black text-[#1A2D4A] text-base tracking-tight">猫暮らしラボ</span>
              <span className="text-[10px] text-[#C4892A] font-bold tracking-widest uppercase">Neko Lab</span>
            </div>
          </Link>
          <nav className="hidden md:flex gap-5">
            {CATEGORIES.map(cat => (
              <Link
                key={cat.id}
                href={`/category/${cat.slug}`}
                className="text-sm text-[#4A5568] hover:text-[#1A2D4A] font-medium transition-colors flex items-center gap-1.5"
              >
                <CategoryIcon icon={cat.icon} iconImg={cat.iconImg} size={18} />
                <span>{cat.name.length > 8 ? cat.name.slice(0, 8) : cat.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
