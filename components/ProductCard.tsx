import ScoreBadge from './ScoreBadge';
import type { Product } from '@/lib/products';

interface ProductCardProps { product: Product; rank?: number; }

export default function ProductCard({ product, rank }: ProductCardProps) {
  return (
    <div className="relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
      {rank && rank <= 3 && (
        <div className={`absolute top-3 left-3 z-10 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white ${
          rank === 1 ? 'bg-amber-400' : rank === 2 ? 'bg-gray-400' : 'bg-amber-700'
        }`}>{rank}</div>
      )}
      <div className="bg-gray-50 h-44 flex items-center justify-center">
        <div className="w-32 h-32 bg-gradient-to-br from-green-100 to-emerald-50 rounded-xl flex items-center justify-center text-5xl">🐱</div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div>
            <p className="text-xs text-gray-400 mb-0.5">{product.brand}</p>
            <h3 className="font-bold text-gray-800 text-sm leading-tight">{product.name}</h3>
          </div>
          {product.score && <div className="flex-shrink-0"><ScoreBadge score={product.score} size="sm" showLabel={false} /></div>}
        </div>
        <p className="text-xs text-gray-500 mb-3 line-clamp-2">{product.description}</p>
        <div className="flex flex-wrap gap-1 mb-3">
          {product.tags.map(tag => (
            <span key={tag} className="text-[10px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-100">{tag}</span>
          ))}
        </div>
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-bold text-gray-800">¥{product.price.toLocaleString()}<span className="text-xs font-normal text-gray-400 ml-1">/{product.priceUnit}</span></p>
          {product.score && <p className="text-xs text-gray-500">スコア: <span className="font-bold text-emerald-600">{product.score}</span></p>}
        </div>
        <div className="grid grid-cols-2 gap-2">
          {product.amazonUrl && (
            <a href={product.amazonUrl} target="_blank" rel="noopener noreferrer"
              className="text-center text-xs py-2 bg-amber-400 hover:bg-amber-500 text-white rounded-lg font-bold transition-colors">Amazon</a>
          )}
          {product.rakutenUrl && (
            <a href={product.rakutenUrl} target="_blank" rel="noopener noreferrer"
              className="text-center text-xs py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-bold transition-colors">楽天</a>
          )}
          {!product.rakutenUrl && product.amazonUrl && (
            <a href={`/article/${product.slug}`}
              className="text-center text-xs py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-lg font-bold transition-colors border border-emerald-200">詳しく見る</a>
          )}
        </div>
      </div>
    </div>
  );
}
