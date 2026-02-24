import Link from 'next/link';
import { CATEGORIES } from '@/lib/products';
export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🐱</span>
            <span className="font-black text-emerald-700 text-lg tracking-tight">猫暮らしラボ</span>
          </Link>
          <nav className="hidden md:flex gap-5">
            {CATEGORIES.map(cat => (
              <Link key={cat.id} href={`/category/${cat.slug}`} className="text-sm text-gray-600 hover:text-emerald-700 font-medium transition-colors">
                {cat.icon} {cat.name.slice(0, 6)}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
