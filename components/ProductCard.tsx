import ScoreBadge from './ScoreBadge';
import type { Product } from '@/lib/products';
interface ProductCardProps { product: Product; rank?: number; }
export default function ProductCard({ product, rank }: ProductCardProps) {
  return (
    <div className="relative bg-white rounded-2xl overflow-hidden border border-[#ede9e3] hover:border-[#2d5a3d] hover:shadow-lg transition-all duration-200">
      {rank && rank <= 3 && (
        <div className={`absolute top-3 left-3 z-10 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black text-white ${
          rank === 1 ? 'bg-[#c9953a]' : rank === 2 ? 'bg-[#9ca3af]' : 'bg-[#b45309]'
        }`}>{rank}</div>
      )}
      <div className="bg-[#f5f0eb] h-40 flex items-center justify-center">
        <span className="text-6xl">🐱</span>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div className="min-w-0">
            <p className="text-[10px] text-[#a8a29e] mb-0.5">{product.brand}</p>
            <h3 className="font-bold text-[#1c1917] text-sm leading-tight">{product.name}</h3>
          </div>
          {product.score && <div className="flex-shrink-0"><ScoreBadge score={product.score} size="sm" showLabel={false} /></div>}
        </div>
        <p className="text-xs text-[#78716c] mb-3 line-clamp-2">{product.description}</p>
        <div className="flex flex-wrap gap-1 mb-3">
          {product.tags.map(tag => (
            <span key={tag} className="text-[10px] bg-[#f0fdf4] text-[#2d5a3d] px-2 py-0.5 rounded-full border border-[#bbf7d0]">{tag}</span>
          ))}
        </div>
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-bold text-[#1c1917]">¥{product.price.toLocaleString()}<span className="text-xs font-normal text-[#a8a29e] ml-1">/{product.priceUnit}</span></p>
          {product.score && <p className="text-xs text-[#78716c]">スコア <span className="font-bold text-[#2d5a3d]">{product.score}</span></p>}
        </div>
        <div className="grid grid-cols-2 gap-2">
          {product.amazonUrl && (
            <a href={product.amazonUrl} target="_blank" rel="noopener noreferrer"
              className="text-center text-xs py-2 bg-[#ff9900] hover:bg-[#e8860a] text-white rounded-lg font-bold transition-colors">Amazon</a>
          )}
          {product.rakutenUrl && (
            <a href={product.rakutenUrl} target="_blank" rel="noopener noreferrer"
              className="text-center text-xs py-2 bg-[#bf0000] hover:bg-[#a00000] text-white rounded-lg font-bold transition-colors">楽天</a>
          )}
          {!product.rakutenUrl && product.amazonUrl && (
            <a href={`/article/${product.slug}`}
              className="text-center text-xs py-2 bg-[#f0fdf4] hover:bg-[#dcfce7] text-[#2d5a3d] rounded-lg font-bold border border-[#bbf7d0] transition-colors">詳しく見る</a>
          )}
        </div>
      </div>
    </div>
  );
}
