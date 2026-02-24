import Link from 'next/link';
import { CATEGORIES } from '@/lib/products';
export default function Header() {
  return (
    <header className="bg-white border-b border-[#ede9e3] sticky top-0 z-50 shadow-sm">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🐱</span>
            <span className="font-black text-[#2d5a3d] text-lg tracking-tight">猫暮らしラボ</span>
          </Link>
          <nav className="hidden md:flex gap-5">
            {CATEGORIES.map(cat => (
              <Link key={cat.id} href={`/category/${cat.slug}`} className="text-sm text-[#57534e] hover:text-[#2d5a3d] font-medium transition-colors">
                {cat.icon} {cat.name.length > 8 ? cat.name.slice(0,8) : cat.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
