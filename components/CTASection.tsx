interface CTASectionProps { title?: string; description?: string; amazonUrl: string; rakutenUrl?: string; productName: string; }
export default function CTASection({ title, description, amazonUrl, rakutenUrl, productName }: CTASectionProps) {
  return (
    <div className="bg-[#fdf8f0] border border-[#e8d5b0] rounded-2xl p-6 my-6">
      <p className="text-[10px] text-[#c9953a] font-bold mb-1 uppercase tracking-widest">おすすめ商品</p>
      <h3 className="text-base font-bold text-[#1c1917] mb-1">{title ?? productName}</h3>
      {description && <p className="text-sm text-[#78716c] mb-4">{description}</p>}
      <div className="flex flex-col sm:flex-row gap-3">
        <a href={amazonUrl} target="_blank" rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#ff9900] hover:bg-[#e8860a] text-white rounded-xl font-bold transition-colors">
          🛒 Amazonで見る
        </a>
        {rakutenUrl && (
          <a href={rakutenUrl} target="_blank" rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#bf0000] hover:bg-[#a00000] text-white rounded-xl font-bold transition-colors">
            🛒 楽天で見る
          </a>
        )}
      </div>
      <p className="text-[10px] text-[#a8a29e] mt-3 text-center">※当サイトのリンクはアフィリエイトを含みます。</p>
    </div>
  );
}
