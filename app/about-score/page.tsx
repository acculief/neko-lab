import { Metadata } from 'next';
import Link from 'next/link';
import { CATEGORIES } from '@/lib/products';
import CategoryIcon from '@/components/CategoryIcon';

export const metadata: Metadata = {
  title: '猫暮らしスコアの評価方法 | 猫暮らしラボ',
  description: '猫暮らしラボの独自スコアリング方法を詳しく解説。原材料品質・栄養バランス・嗜好性・コスパ・口コミの5軸で100点満点評価。獣医師監修の透明性ある評価基準。',
};

const SCORE_AXES = [
  {
    icon: '🥩',
    name: '原材料品質',
    weight: 30,
    desc: '第一原料が明確な動物性タンパク質（チキン・サーモン等）かどうか。副産物・ミートミール・グレインフリー設計・添加物の有無・産地の透明性を評価。肉・魚の割合が高いほど高得点。',
    good: ['第一原料が生肉・鮮魚', '動物性原料60%以上', 'グレインフリー', '人工添加物なし', '産地明記'],
    bad: ['ミートミール・副産物が主原料', '穀物が上位3位以内', '合成酸化防止剤（BHA/BHT）使用', '産地不明'],
  },
  {
    icon: '⚖️',
    name: '栄養バランス',
    weight: 25,
    desc: 'AAFCO/FEDIAFの総合栄養食基準適合を前提に、タンパク質・脂質・炭水化物・ビタミン・ミネラルのバランスを評価。療法食の場合は対象疾患への効果（低リン・低ナトリウム等）を重視。',
    good: ['タンパク質35%以上', '総合栄養食認定', '必須アミノ酸・オメガ3配合', '療法食では低リン設計'],
    bad: ['炭水化物40%超', '必須栄養素の不足', 'AAFCO/FEDIAF基準未適合'],
  },
  {
    icon: '😸',
    name: '嗜好性',
    weight: 20,
    desc: '猫が実際に好んで食べるかどうかの指標。食いつきに関するレビュー分析・定期購入継続率・食欲不振の猫への対応実績を評価。特に療法食や離乳食は嗜好性が課題になりやすいため重要。',
    good: ['定期購入継続率85%以上', '食いつき口コミ多数', '食欲不振猫でも食べた事例'],
    bad: ['食べない・残すレビューが多い', '香りが弱い', '粒が硬すぎる'],
  },
  {
    icon: '💰',
    name: 'コストパフォーマンス',
    weight: 15,
    desc: '100gあたりの価格を基準に、品質に見合う価格かどうかを評価。高品質でも価格が適正なら高評価。入手しやすさ（Amazon・楽天・ペットショップ）も加味。',
    good: ['100g 200円以下（鉱物砂等）', 'Amazon定期便対応', '近隣ペットショップでも購入可'],
    bad: ['高品質だが100g 500円超', '公式サイト定期購入のみ', '在庫切れが多い'],
  },
  {
    icon: '⭐',
    name: '口コミ・実績',
    weight: 10,
    desc: 'Amazon・楽天・価格.comのレビュー平均（件数50件以上を対象）と、獣医師・ペット専門家からの推奨実績を評価。Amazonレビュー4.0以上で高評価。継続購入率も参考にする。',
    good: ['Amazonレビュー4.2以上（50件超）', '獣医師推奨実績あり', 'ペット専門誌掲載'],
    bad: ['レビュー件数が少ない（30件未満）', '低評価レビューの割合が高い'],
  },
];

const CATEGORY_WEIGHTS: Record<string, { axes: string[]; note: string }> = {
  'キャットフード': {
    axes: ['原材料品質×30%', '栄養バランス×25%', '嗜好性×20%', 'コスパ×15%', '口コミ×10%'],
    note: '原材料と栄養を重視。猫は肉食動物なので動物性タンパク質の質が最重要。',
  },
  '腎臓ケアフード': {
    axes: ['腎臓ケア効果×35%', '原材料品質×25%', '嗜好性×20%', 'コスパ×10%', '口コミ×10%'],
    note: '低リン・低ナトリウム設計と腎臓への実証効果を最優先。嗜好性も重要（療法食は食べ続けてもらうことが命）。',
  },
  '全自動トイレ': {
    axes: ['使いやすさ×30%', '消臭力×25%', '機能性×20%', 'コスパ×15%', '口コミ×10%'],
    note: 'センサー精度・静音性・砂対応の広さ・清掃のしやすさを中心に評価。',
  },
  '猫砂': {
    axes: ['消臭力×35%', '使いやすさ×25%', '安全性×20%', 'コスパ×20%'],
    note: '消臭性能を最重視。誤飲リスク・舞い散り・トイレへの流せる対応も加味。',
  },
  'ペット保険': {
    axes: ['補償範囲×35%', '保険料コスパ×30%', '利便性×25%', '口コミ×10%'],
    note: '補償割合・年間上限・免責金額・窓口精算対応病院数を重点評価。',
  },
};

const TIERS = [
  { label: 'GOLD', range: '90〜100点', emoji: '🥇', color: '#C4892A', bg: '#FFF8ED', border: '#E8C87A', desc: '最高品質。カテゴリ内トップクラス。迷ったらこれで間違いなし。' },
  { label: 'GREEN', range: '75〜89点', emoji: '🟢', color: '#2A6040', bg: '#F0F8F4', border: '#A8D4B8', desc: '高品質でバランス良好。コスパを重視する方にもおすすめ。' },
  { label: 'STANDARD', range: '〜74点', emoji: '⬜', color: '#4A4A4A', bg: '#F8F8F8', border: '#D0D0D0', desc: '標準品質。特定の用途・予算では選択肢になりえる。' },
];

export default function AboutScorePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">

      {/* ヘッダー */}
      <div className="text-center mb-10">
        <p className="text-[#C4892A] text-xs font-bold tracking-widest uppercase mb-3">SCORING METHODOLOGY</p>
        <h1 className="text-3xl font-black text-[#1A2D4A] mb-3">猫暮らしスコアの評価方法</h1>
        <p className="text-[#6B6560] text-sm leading-relaxed">
          猫暮らしラボのすべてのスコアは、以下の評価基準に基づいて算出されています。<br />
          透明性ある評価で、愛猫に本当に合う商品を見つけてください。
        </p>
      </div>

      {/* 基本原則 */}
      <section className="bg-gradient-to-br from-[#1A2D4A] to-[#243B5E] rounded-2xl p-6 mb-8 text-white">
        <h2 className="text-lg font-black mb-4 flex items-center gap-2">
          <span>🔬</span> 評価の基本原則
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          {[
            { icon: '⚖️', title: '独立した評価', body: '広告収入やメーカーからの提供品に依存しない独自基準。アフィリエイトリンクはあるが、スコア算出には一切影響しない。' },
            { icon: '📊', title: '数値化・可視化', body: '曖昧な「おすすめ」ではなく0〜100の連続スコアで表現。5軸の内訳も全公開。' },
            { icon: '🔄', title: '定期的な更新', body: '商品のリニューアル・価格変更・新規口コミにより、スコアは随時更新する。' },
          ].map(item => (
            <div key={item.title} className="bg-white/10 rounded-xl p-4">
              <p className="font-bold mb-1 flex items-center gap-1">{item.icon} {item.title}</p>
              <p className="text-[#A8B8C8] text-xs leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5つの評価軸 */}
      <section className="mb-8">
        <h2 className="text-xl font-black text-[#1A2D4A] mb-5">評価5軸の詳細</h2>
        <div className="space-y-4">
          {SCORE_AXES.map((axis, i) => (
            <div key={axis.name} className="bg-white rounded-2xl border border-[#E8E3DC] overflow-hidden">
              <div className="bg-gradient-to-r from-[#F8F3EB] to-[#FFF8ED] px-5 py-4 flex items-start gap-4">
                <div className="text-2xl flex-shrink-0">{axis.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-black text-[#1A2D4A]">{axis.name}</h3>
                    <span className="text-xs font-bold text-[#C4892A] bg-[#FFF3DC] px-2 py-0.5 rounded-full border border-[#E8C87A]">
                      標準ウェイト {axis.weight}%
                    </span>
                  </div>
                  <p className="text-xs text-[#6B6560] leading-relaxed">{axis.desc}</p>
                </div>
              </div>
              <div className="px-5 py-4 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[10px] font-bold text-[#2A6040] mb-2 flex items-center gap-1">✅ 高評価になる要素</p>
                  <ul className="space-y-1">
                    {axis.good.map(g => (
                      <li key={g} className="text-xs text-[#3A5A40] flex items-start gap-1.5">
                        <span className="text-[#2A6040] flex-shrink-0 mt-0.5">•</span>{g}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#8B2020] mb-2 flex items-center gap-1">❌ 低評価になる要素</p>
                  <ul className="space-y-1">
                    {axis.bad.map(b => (
                      <li key={b} className="text-xs text-[#6B3030] flex items-start gap-1.5">
                        <span className="text-[#8B2020] flex-shrink-0 mt-0.5">•</span>{b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* カテゴリ別ウェイト */}
      <section className="mb-8">
        <h2 className="text-xl font-black text-[#1A2D4A] mb-2">カテゴリ別ウェイト調整</h2>
        <p className="text-sm text-[#6B6560] mb-5">商品カテゴリによって評価軸のウェイトを変えています。</p>
        <div className="space-y-3">
          {CATEGORIES.map((cat, i) => {
            const catName = Object.keys(CATEGORY_WEIGHTS)[i];
            const data = Object.values(CATEGORY_WEIGHTS)[i];
            return (
              <div key={cat.id} className="bg-white rounded-xl border border-[#E8E3DC] p-4">
                <div className="flex items-center gap-2 mb-3">
                  <CategoryIcon icon={cat.icon} iconImg={cat.iconImg} size={20} />
                  <span className="font-bold text-[#1A2D4A] text-sm">{cat.name}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {data.axes.map(ax => (
                    <span key={ax} className="text-[10px] bg-[#F0F4F8] text-[#4A6080] px-2 py-1 rounded-full font-medium">{ax}</span>
                  ))}
                </div>
                <p className="text-[11px] text-[#8A8078] italic">{data.note}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* スコアティア */}
      <section className="mb-8">
        <h2 className="text-xl font-black text-[#1A2D4A] mb-5">スコアティアの定義</h2>
        <div className="space-y-3">
          {TIERS.map(tier => (
            <div key={tier.label} className="rounded-2xl p-5 border flex items-start gap-4"
              style={{ background: tier.bg, borderColor: tier.border }}>
              <span className="text-3xl flex-shrink-0">{tier.emoji}</span>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <span className="font-black text-sm" style={{ color: tier.color }}>{tier.label}</span>
                  <span className="text-xs font-bold text-[#6B6560]">{tier.range}</span>
                </div>
                <p className="text-sm text-[#6B6560]">{tier.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 免責事項 */}
      <section className="bg-[#F8F3EB] rounded-2xl border border-[#E8E3DC] p-5 mb-8 text-xs text-[#8A8078] leading-relaxed">
        <p className="font-bold text-[#6B6560] mb-2">📋 免責・開示事項</p>
        <ul className="space-y-1.5 list-disc list-inside">
          <li>当サイトはAmazonアソシエイト・楽天アフィリエイト等のプログラムに参加しています。</li>
          <li>ただしアフィリエイト収入はスコア算出・ランキング順位に一切影響しません。</li>
          <li>療法食のスコアは一般的な傾向に基づくものであり、個々の猫の病状・獣医師の指示を優先してください。</li>
          <li>価格は掲載時点のものです。最新価格はAmazon・楽天等でご確認ください。</li>
          <li>スコアは随時見直し・更新を行います。</li>
        </ul>
      </section>

      {/* CTA */}
      <div className="text-center">
        <p className="text-sm text-[#6B6560] mb-4">このスコアで比較したカテゴリを見る</p>
        <div className="flex flex-wrap justify-center gap-3">
          {CATEGORIES.map(cat => (
            <Link
              key={cat.id}
              href={`/category/${cat.slug}`}
              className="bg-[#1A2D4A] hover:bg-[#243B5E] text-white px-4 py-2 rounded-full text-xs font-bold transition-colors flex items-center gap-1.5"
            >
              <CategoryIcon icon={cat.icon} iconImg={cat.iconImg} size={14} />
              {cat.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
