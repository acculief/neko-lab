import { Metadata } from 'next';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: '猫のトイレのしつけ方｜失敗しない場所選びとトイレ掃除のコツ | ねこラボ',
  description: '猫のトイレしつけを成功させるコツを徹底解説。場所選び・猫砂の種類（鉱物系・紙系・木系・シリカゲル）・自動トイレのメリット・デメリットまで網羅。',
  alternates: { canonical: 'https://neko-lab.vercel.app/article/cat-toilet-training' },
  openGraph: {
    title: '猫のトイレのしつけ方｜失敗しない場所選びとトイレ掃除のコツ',
    description: '猫のトイレしつけを成功させるコツを徹底解説。場所選び・猫砂の種類・自動トイレまで網羅。',
    url: 'https://neko-lab.vercel.app/article/cat-toilet-training',
    type: 'article',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '猫のトイレのしつけ方｜失敗しない場所選びとトイレ掃除のコツ',
    description: '猫のトイレしつけを成功させるコツを徹底解説。場所選び・猫砂・自動トイレまで網羅。',
  },
};

export default function CatToiletTrainingPage() {
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '猫のトイレのしつけ方｜失敗しない場所選びとトイレ掃除のコツ',
    description: '猫のトイレしつけを成功させるコツを徹底解説。場所選び・猫砂の種類・自動トイレのメリット・デメリットまで網羅。',
    author: { '@type': 'Organization', name: 'ねこラボ編集部', url: 'https://neko-lab.vercel.app' },
    publisher: {
      '@type': 'Organization',
      name: 'ねこラボ',
      url: 'https://neko-lab.vercel.app',
      logo: { '@type': 'ImageObject', url: 'https://neko-lab.vercel.app/og-image.png' },
    },
    datePublished: '2025-01-15',
    dateModified: '2025-02-28',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://neko-lab.vercel.app/article/cat-toilet-training' },
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://neko-lab.vercel.app' },
      { '@type': 'ListItem', position: 2, name: '猫のトイレしつけ方ガイド', item: 'https://neko-lab.vercel.app/article/cat-toilet-training' },
    ],
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '猫のトイレしつけはいつから始めるべきですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '猫を家に迎えたその日から始めましょう。猫は本能的に砂の上で排泄する習性があるため、トイレの場所を教えるだけで自然に覚えます。',
        },
      },
      {
        '@type': 'Question',
        name: '猫がトイレを失敗する原因は何ですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'トイレが汚い、場所が気に入らない、砂の感触が嫌い、ストレス、病気などが主な原因です。まずトイレの清潔さと設置場所を見直しましょう。',
        },
      },
      {
        '@type': 'Question',
        name: '自動トイレはしつけ済みの猫でも使えますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '使えますが、導入初期は電源オフ状態で慣れさせてから自動モードに切り替えることをおすすめします。特に臆病な猫は時間をかけて慣れさせましょう。',
        },
      },
    ],
  };

  return (
    <article className="max-w-3xl mx-auto px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* パンくず */}
      <nav aria-label="パンくずリスト" className="text-xs text-[#a8a29e] mb-6">
        <a href="/" className="hover:text-[#2d5a3d]">ホーム</a>
        <span className="mx-2">/</span>
        <a href="/article" className="hover:text-[#2d5a3d]">ガイド記事</a>
        <span className="mx-2">/</span>
        <span className="text-[#44403c]">猫のトイレしつけ方</span>
      </nav>

      {/* H1 */}
      <h1 className="text-2xl md:text-3xl font-black text-[#1c1917] leading-tight mb-4">
        猫のトイレのしつけ方｜失敗しない場所選びとトイレ掃除のコツ
      </h1>

      <div className="flex flex-wrap items-center gap-3 mb-6 text-xs text-[#a8a29e]">
        <span className="flex items-center gap-1">🐱 ねこラボ編集部</span>
        <span>更新: 2025-02-28</span>
        <span className="bg-[#f0fdf4] text-[#2d5a3d] border border-[#bbf7d0] px-2 py-0.5 rounded-full font-bold">獣医師監修</span>
      </div>

      {/* リード */}
      <div className="bg-[#f5f0eb] border-l-4 border-[#2d5a3d] p-5 mb-8 rounded-r-xl">
        <p className="text-sm text-[#44403c] leading-relaxed">
          猫のトイレしつけは、<strong>猫の本能を理解し、適切な環境を整えること</strong>が成功の鍵です。
          本記事では、トイレの場所選び・猫砂の種類・自動トイレのメリットデメリットを詳しく解説します。
        </p>
      </div>

      {/* セクション1: 基本 */}
      <h2 className="text-xl font-black text-[#1c1917] mb-4 mt-10">🐾 猫のトイレしつけの基本（本能を活かす）</h2>
      <p className="text-sm text-[#57534e] leading-relaxed mb-4">
        猫は本来、砂の上で排泄し、排泄物を砂で隠す本能を持っています。この本能を活かせば、<strong>特別な訓練なしにトイレを覚えられます</strong>。
      </p>
      <div className="bg-white border border-[#ede9e3] rounded-xl p-5 mb-6">
        <h3 className="font-black text-[#2d5a3d] mb-3 text-sm">トイレしつけの基本ステップ</h3>
        <ol className="text-sm text-[#57534e] space-y-2 list-decimal list-inside">
          <li>猫を迎えたらすぐにトイレの場所を見せる</li>
          <li>食後・起床後・遊んだ後にトイレに誘導する</li>
          <li>トイレで排泄したら静かに褒める（大げさすぎない程度に）</li>
          <li>失敗しても叱らない（恐怖でトイレ嫌いになる）</li>
          <li>排泄物はすぐに片付け、常に清潔を保つ</li>
        </ol>
      </div>

      {/* セクション2: 場所選び */}
      <h2 className="text-xl font-black text-[#1c1917] mb-4 mt-12">📍 トイレの置き場所で失敗しないポイント</h2>
      <p className="text-sm text-[#57534e] leading-relaxed mb-4">
        トイレの置き場所は、猫がトイレを使うかどうかを大きく左右します。
      </p>
      <div className="space-y-3 mb-8">
        {[
          { icon: '✅', title: '静かで落ち着ける場所', desc: '人の往来が多いリビング中央や廊下の通り道は避けましょう。猫は排泄中に無防備になるため、安心できる静かな場所を好みます。' },
          { icon: '✅', title: '食事場所から離す', desc: '猫は食事場所の近くでの排泄を嫌います。フードボウルとトイレは別の部屋か、最低でも3m以上離して設置しましょう。' },
          { icon: '✅', title: '複数箇所に設置する', desc: '「猫の数+1個」がトイレの理想的な数。多頭飼いでは特に重要で、縄張り争いによるトイレ独占を防げます。' },
          { icon: '⚠️', title: '洗濯機・乾燥機の近くは避ける', desc: '大きな音や振動が出る家電の近くは猫が怖がります。静音の場所を選びましょう。' },
        ].map((item) => (
          <div key={item.title} className="bg-white border border-[#ede9e3] rounded-xl p-4 flex gap-3">
            <span className="text-lg flex-shrink-0">{item.icon}</span>
            <div>
              <p className="font-bold text-[#1c1917] text-sm mb-1">{item.title}</p>
              <p className="text-sm text-[#57534e]">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* セクション3: 猫砂の種類 */}
      <h2 className="text-xl font-black text-[#1c1917] mb-4 mt-12">🪨 猫砂の種類と選び方</h2>
      <div className="space-y-4 mb-8">
        {[
          { name: '鉱物系（ベントナイト）', pros: '固まりが硬い・処理しやすい・猫の好みが高い', cons: '重い・粉塵が出やすい・廃棄量が多い', best: '初めて猫を飼う方・固まりやすさ重視の方' },
          { name: '紙（パルプ）系', pros: '軽量・燃えるゴミとして廃棄可・低アレルギー', cons: '消臭力がやや弱い・固まりが柔らかい', best: '環境に配慮したい方・アレルギー心配な方' },
          { name: '木（ヒノキ・松）系', pros: '天然消臭効果・軽量・エコ', cons: '固まらない製品が多い・猫が好まないことも', best: '消臭重視・自然素材好みの方' },
          { name: 'シリカゲル系', pros: '超高消臭力・少量で長持ち・軽量', cons: 'やや高価・固まらないタイプが多い', best: '消臭力最優先・掃除の手間を減らしたい方' },
        ].map((sand) => (
          <div key={sand.name} className="bg-white border border-[#ede9e3] rounded-xl p-5">
            <h3 className="font-black text-[#1c1917] mb-3 text-sm">{sand.name}</h3>
            <div className="grid md:grid-cols-3 gap-3 text-xs">
              <div>
                <p className="text-[#2d5a3d] font-bold mb-1">👍 メリット</p>
                <p className="text-[#57534e]">{sand.pros}</p>
              </div>
              <div>
                <p className="text-[#c2410c] font-bold mb-1">⚠️ デメリット</p>
                <p className="text-[#57534e]">{sand.cons}</p>
              </div>
              <div>
                <p className="text-[#7c3aed] font-bold mb-1">🎯 向いている方</p>
                <p className="text-[#57534e]">{sand.best}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* セクション4: 自動トイレ */}
      <h2 className="text-xl font-black text-[#1c1917] mb-4 mt-12">🤖 自動トイレのメリット・デメリット</h2>
      <p className="text-sm text-[#57534e] leading-relaxed mb-4">
        全自動猫トイレは排泄後に自動でケーキングを除去し、常に清潔な状態を保ちます。
      </p>
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-xl p-5">
          <h3 className="font-black text-[#2d5a3d] mb-3 text-sm">✅ メリット</h3>
          <ul className="text-sm text-[#44403c] space-y-2">
            <li>• 毎日の砂かき不要で手間が激減</li>
            <li>• 常に清潔でトイレ拒否リスクが低い</li>
            <li>• 排泄回数・量の健康モニタリング機能搭載モデルも</li>
            <li>• 長時間外出が多い飼い主に最適</li>
          </ul>
        </div>
        <div className="bg-[#fff7ed] border border-[#fed7aa] rounded-xl p-5">
          <h3 className="font-black text-[#c2410c] mb-3 text-sm">⚠️ デメリット</h3>
          <ul className="text-sm text-[#44403c] space-y-2">
            <li>• 本体価格が高い（3〜10万円）</li>
            <li>• モーター音を怖がる猫もいる</li>
            <li>• 専用砂が必要なモデルはランニングコスト高</li>
            <li>• 故障リスク・メンテナンスが必要</li>
          </ul>
        </div>
      </div>

      {/* FAQ */}
      <h2 className="text-xl font-black text-[#1c1917] mb-5 mt-12">よくある質問</h2>
      <div className="space-y-4 mb-10">
        {[
          { q: '猫のトイレしつけはいつから始めるべきですか？', a: '猫を家に迎えたその日から始めましょう。猫は本能的に砂の上で排泄する習性があるため、トイレの場所を教えるだけで自然に覚えます。' },
          { q: '猫がトイレを失敗する原因は何ですか？', a: 'トイレが汚い、場所が気に入らない、砂の感触が嫌い、ストレス、病気などが主な原因です。まずトイレの清潔さと設置場所を見直しましょう。' },
          { q: '自動トイレはしつけ済みの猫でも使えますか？', a: '使えますが、導入初期は電源オフ状態で慣れさせてから自動モードに切り替えることをおすすめします。特に臆病な猫は時間をかけて慣れさせましょう。' },
        ].map((f, i) => (
          <div key={i} className="bg-white border border-[#ede9e3] rounded-xl p-5">
            <p className="font-bold text-[#2d5a3d] mb-2 text-sm">Q. {f.q}</p>
            <p className="text-sm text-[#57534e] leading-relaxed">A. {f.a}</p>
          </div>
        ))}
      </div>

      {/* まとめ */}
      <div className="bg-[#f5f0eb] rounded-2xl p-6 mt-12">
        <h2 className="text-xl font-black text-[#1c1917] mb-4">📝 まとめ</h2>
        <ul className="space-y-3 text-sm text-[#44403c]">
          <li className="flex items-start gap-2">
            <span className="text-[#2d5a3d] font-black flex-shrink-0">✓</span>
            <span>猫の<strong>本能（砂で排泄・隠す）</strong>を活かしたしつけが基本</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#2d5a3d] font-black flex-shrink-0">✓</span>
            <span><strong>静かで落ち着ける場所</strong>にトイレを設置する</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#2d5a3d] font-black flex-shrink-0">✓</span>
            <span>猫砂は<strong>猫の好みに合ったもの</strong>を選ぶ（急な変更は避ける）</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#2d5a3d] font-black flex-shrink-0">✓</span>
            <span>自動トイレは便利だが<strong>慣れさせる期間</strong>が必要</span>
          </li>
        </ul>
        <div className="mt-5 pt-5 border-t border-[#ede9e3] flex flex-col gap-2">
          <a href="/category/auto-litter-box" className="text-sm font-bold text-[#2d5a3d] hover:underline">
            → 全自動猫トイレおすすめランキングを見る
          </a>
          <a href="/category/premium-cat-litter" className="text-sm font-bold text-[#2d5a3d] hover:underline">
            → 高級猫砂おすすめランキングを見る
          </a>
        </div>
      </div>
    </article>
  );
}
