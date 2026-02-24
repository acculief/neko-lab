interface CTASectionProps { title?: string; description?: string; amazonUrl: string; rakutenUrl?: string; productName: string; }
export default function CTASection({ title, description, amazonUrl, rakutenUrl, productName }: CTASectionProps) {
  return (
    <div className="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-2xl p-6 my-6">
      <p className="text-xs text-emerald-600 font-bold mb-1 uppercase tracking-wide">おすすめ</p>
      <h3 className="text-lg font-bold text-gray-800 mb-1">{title ?? productName}</h3>
      {description && <p className="text-sm text-gray-600 mb-4">{description}</p>}
      <div className="flex flex-col sm:flex-row gap-3">
        <a href={amazonUrl} target="_blank" rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-amber-400 hover:bg-amber-500 text-white rounded-xl font-bold transition-colors">
          🛒 Amazonで見る
        </a>
        {rakutenUrl && (
          <a href={rakutenUrl} target="_blank" rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl font-bold transition-colors">
            🛒 楽天で見る
          </a>
        )}
      </div>
      <p className="text-xs text-gray-400 mt-3 text-center">※当サイトのリンクはアフィリエイトを含みます。</p>
    </div>
  );
}
