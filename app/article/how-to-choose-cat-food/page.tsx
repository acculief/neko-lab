import { Metadata } from 'next';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: '猫フードの選び方｜原材料・グレインフリー・年齢別に解説【2025年版】 | ねこラボ',
  description: '猫フードの選び方を原材料・グレインフリー・年齢別（子猫・成猫・シニア）にわかりやすく解説。ウェットとドライの違いも比較。2025年最新版。',
  alternates: { canonical: 'https://neko-lab.vercel.app/article/how-to-choose-cat-food' },
  openGraph: {
    title: '猫フードの選び方｜原材料・グレインフリー・年齢別に解説【2025年版】',
    description: '猫フードの選び方を原材料・グレインフリー・年齢別にわかりやすく解説。2025年最新版。',
    url: 'https://neko-lab.vercel.app/article/how-to-choose-cat-food',
    type: 'article',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '猫フードの選び方｜原材料・グレインフリー・年齢別に解説【2025年版】',
    description: '猫フードの選び方を原材料・グレインフリー・年齢別にわかりやすく解説。2025年最新版。',
  },
};

export default function HowToChooseCatFoodPage() {
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '猫フードの選び方｜原材料・グレインフリー・年齢別に解説【2025年版】',
    description: '猫フードの選び方を原材料・グレインフリー・年齢別（子猫・成猫・シニア）にわかりやすく解説。',
    author: { '@type': 'Organization', name: 'ねこラボ編集部', url: 'https://neko-lab.vercel.app' },
    publisher: {
      '@type': 'Organization',
      name: 'ねこラボ',
      url: 'https://neko-lab.vercel.app',
      logo: { '@type': 'ImageObject', url: 'https://neko-lab.vercel.app/og-image.png' },
    },
    datePublished: '2025-01-01',
    dateModified: '2025-02-28',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://neko-lab.vercel.app/article/how-to-choose-cat-food' },
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://neko-lab.vercel.app' },
      { '@type': 'ListItem', position: 2, name: '猫フードの選び方ガイド', item: 'https://neko-lab.vercel.app/article/how-to-choose-cat-food' },
    ],
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'グレインフリーの猫フードは必ず選ぶべきですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '必須ではありませんが、猫は肉食動物で穀物の消化が苦手なため、グレインフリーは消化器への負担が少ないとされています。猫の体質に合わせて選びましょう。',
        },
      },
      {
        '@type': 'Question',
        name: '子猫と成猫でフードを変える必要はありますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '必要です。子猫（生後12ヶ月未満）は成長に必要なカロリーやタンパク質が多く必要なため、子猫用（キトン）フードを選びましょう。成猫になったら成猫用に切り替えてください。',
        },
      },
      {
        '@type': 'Question',
        name: 'ウェットとドライどちらが良いですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'どちらにもメリットがあります。ドライは歯の健康維持・保存性が高く、ウェットは水分補給ができ泌尿器疾患の予防に効果的です。組み合わせて与えるのが理想的です。',
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
        <span className="text-[#44403c]">猫フードの選び方</span>
      </nav>

      {/* H1 */}
      <h1 className="text-2xl md:text-3xl font-black text-[#1c1917] leading-tight mb-4">
        猫フードの選び方｜原材料・グレインフリー・年齢別に解説【2025年版】
      </h1>

      <div className="flex flex-wrap items-center gap-3 mb-6 text-xs text-[#a8a29e]">
        <span className="flex items-center gap-1">🐱 ねこラボ編集部</span>
        <span>更新: 2025-02-28</span>
        <span className="bg-[#f0fdf4] text-[#2d5a3d] border border-[#bbf7d0] px-2 py-0.5 rounded-full font-bold">獣医師監修</span>
      </div>

      {/* リード */}
      <div className="bg-[#f5f0eb] border-l-4 border-[#2d5a3d] p-5 mb-8 rounded-r-xl">
        <p className="text-sm text-[#44403c] leading-relaxed">
          愛猫に最適なフードを選ぶには、<strong>原材料の質・栄養バランス・猫の年齢と体質</strong>の3つを理解することが重要です。
          本記事では、グレインフリーの意味・年齢別の選び方・ウェット/ドライの違いをわかりやすく解説します。
        </p>
      </div>

      {/* セクション1: 3つのポイント */}
      <h2 className="text-xl font-black text-[#1c1917] mb-4 mt-10">🔍 猫フード選びの3つのポイント</h2>
      <p className="text-sm text-[#57534e] leading-relaxed mb-4">
        猫フードを選ぶ上で最も重要な3つのポイントを押さえておきましょう。
      </p>

      <div className="space-y-4 mb-8">
        <div className="bg-white border border-[#ede9e3] rounded-xl p-5">
          <h3 className="font-black text-[#2d5a3d] mb-2 text-sm">① 原材料の質</h3>
          <p className="text-sm text-[#57534e] leading-relaxed">
            成分表の先頭に記載されている食材が最も多く含まれます。<strong>「チキン」「サーモン」など具体的な肉・魚が1位</strong>に来ているものを選びましょう。
            「副産物」「ミートミール」が上位に来るものは品質が劣る可能性があります。
          </p>
        </div>
        <div className="bg-white border border-[#ede9e3] rounded-xl p-5">
          <h3 className="font-black text-[#2d5a3d] mb-2 text-sm">② 栄養バランス</h3>
          <p className="text-sm text-[#57534e] leading-relaxed">
            猫に必要な必須アミノ酸（タウリン・アルギニンなど）が含まれているか確認しましょう。
            「総合栄養食」と表示されたものは、水と一緒に与えるだけで必要な栄養が摂れます。
          </p>
        </div>
        <div className="bg-white border border-[#ede9e3] rounded-xl p-5">
          <h3 className="font-black text-[#2d5a3d] mb-2 text-sm">③ 猫の年齢・体質</h3>
          <p className="text-sm text-[#57534e] leading-relaxed">
            子猫・成猫・シニアでは必要な栄養素が異なります。また、腎臓病・肥満・アレルギーなど体質に合わせたフード選びも重要です。
          </p>
        </div>
      </div>

      {/* セクション2: グレインフリー */}
      <h2 className="text-xl font-black text-[#1c1917] mb-4 mt-12">🌾 グレインフリーとは？メリット・デメリット</h2>
      <p className="text-sm text-[#57534e] leading-relaxed mb-4">
        グレインフリーとは、<strong>小麦・トウモロコシなどの穀物（グレイン）を使用していないフード</strong>のことです。
      </p>
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-xl p-5">
          <h3 className="font-black text-[#2d5a3d] mb-3 text-sm">✅ メリット</h3>
          <ul className="text-sm text-[#44403c] space-y-2">
            <li>• 猫の消化器への負担が少ない</li>
            <li>• タンパク質比率が高い傾向</li>
            <li>• アレルギー反応リスクが低い</li>
            <li>• 肥満・糖尿病リスクの軽減</li>
          </ul>
        </div>
        <div className="bg-[#fff7ed] border border-[#fed7aa] rounded-xl p-5">
          <h3 className="font-black text-[#c2410c] mb-3 text-sm">⚠️ デメリット・注意点</h3>
          <ul className="text-sm text-[#44403c] space-y-2">
            <li>• 価格が高い傾向にある</li>
            <li>• 全ての猫に必須ではない</li>
            <li>• 代替炭水化物（芋類）が多い製品も</li>
            <li>• 急な切り替えは消化不良を起こすことも</li>
          </ul>
        </div>
      </div>

      {/* セクション3: 年齢別 */}
      <h2 className="text-xl font-black text-[#1c1917] mb-4 mt-12">📅 年齢別おすすめフード</h2>
      <div className="space-y-4 mb-8">
        <div className="bg-white border border-[#ede9e3] rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-[#fef3c7] text-[#b45309] text-xs font-black px-3 py-1 rounded-full">子猫（〜12ヶ月）</span>
          </div>
          <p className="text-sm text-[#57534e] leading-relaxed">
            成長期はカロリーとタンパク質が多く必要です。<strong>キトン用フード</strong>を選び、1日3〜4回に分けて与えましょう。
            DHA・カルシウム・リンが豊富なものが理想的です。
          </p>
        </div>
        <div className="bg-white border border-[#ede9e3] rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-[#f0fdf4] text-[#2d5a3d] text-xs font-black px-3 py-1 rounded-full">成猫（1〜7歳）</span>
          </div>
          <p className="text-sm text-[#57534e] leading-relaxed">
            維持管理のための<strong>成猫用（メンテナンス）フード</strong>を選びましょう。適切なカロリー管理で肥満を防ぐことが重要です。
            活動量に合わせてカロリーを調整してください。
          </p>
        </div>
        <div className="bg-white border border-[#ede9e3] rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-[#f5f3ff] text-[#6d28d9] text-xs font-black px-3 py-1 rounded-full">シニア猫（7歳〜）</span>
          </div>
          <p className="text-sm text-[#57534e] leading-relaxed">
            消化機能・腎臓機能が低下し始める時期。<strong>低リン・高品質タンパク質</strong>のシニア用フードに切り替えましょう。
            水分補給のためウェットフードの割合を増やすのもおすすめです。
          </p>
        </div>
      </div>

      {/* セクション4: ウェット vs ドライ */}
      <h2 className="text-xl font-black text-[#1c1917] mb-4 mt-12">💧 ウェットフードとドライフードの違い</h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#f5f0eb]">
              <th className="text-left p-3 font-black text-[#1c1917] border border-[#ede9e3]">比較項目</th>
              <th className="text-center p-3 font-black text-[#2d5a3d] border border-[#ede9e3]">ドライフード</th>
              <th className="text-center p-3 font-black text-[#b45309] border border-[#ede9e3]">ウェットフード</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['水分含有量', '約10%', '約75〜85%'],
              ['保存性', '◎ 長期保存可', '△ 開封後は即消費'],
              ['歯の健康', '○ 歯石がつきにくい', '△ 歯石がつきやすい'],
              ['水分補給', '△ 別途水が必要', '◎ 水分補給できる'],
              ['泌尿器ケア', '△', '◎ 尿路疾患予防に◎'],
              ['コスト', '◎ 経済的', '△ やや高め'],
            ].map(([item, dry, wet]) => (
              <tr key={item} className="hover:bg-[#faf8f5]">
                <td className="p-3 font-bold text-[#44403c] border border-[#ede9e3]">{item}</td>
                <td className="p-3 text-center text-[#57534e] border border-[#ede9e3]">{dry}</td>
                <td className="p-3 text-center text-[#57534e] border border-[#ede9e3]">{wet}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* FAQ */}
      <h2 className="text-xl font-black text-[#1c1917] mb-5 mt-12">よくある質問</h2>
      <div className="space-y-4 mb-10">
        {[
          { q: 'グレインフリーの猫フードは必ず選ぶべきですか？', a: '必須ではありませんが、猫は肉食動物で穀物の消化が苦手なため、グレインフリーは消化器への負担が少ないとされています。猫の体質に合わせて選びましょう。' },
          { q: '子猫と成猫でフードを変える必要はありますか？', a: '必要です。子猫（生後12ヶ月未満）は成長に必要なカロリーやタンパク質が多く必要なため、子猫用（キトン）フードを選びましょう。成猫になったら成猫用に切り替えてください。' },
          { q: 'ウェットとドライどちらが良いですか？', a: 'どちらにもメリットがあります。ドライは歯の健康維持・保存性が高く、ウェットは水分補給ができ泌尿器疾患の予防に効果的です。組み合わせて与えるのが理想的です。' },
        ].map((f, i) => (
          <div key={i} className="bg-white border border-[#ede9e3] rounded-xl p-5">
            <p className="font-bold text-[#2d5a3d] mb-2 text-sm">Q. {f.q}</p>
            <p className="text-sm text-[#57534e] leading-relaxed">A. {f.a}</p>
          </div>
        ))}
      </div>

      {/* まとめ */}
      <div className="bg-[#f5f0eb] rounded-2xl p-6 mt-12">
        <h2 className="text-xl font-black text-[#1c1917] mb-4">📝 まとめ：まず原材料表示の先頭3つをチェック</h2>
        <ul className="space-y-3 text-sm text-[#44403c]">
          <li className="flex items-start gap-2">
            <span className="text-[#2d5a3d] font-black flex-shrink-0">1.</span>
            <span><strong>原材料の先頭3つ</strong>に具体的な肉・魚が来ているか確認する</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#2d5a3d] font-black flex-shrink-0">2.</span>
            <span><strong>年齢に合った</strong>フード（子猫・成猫・シニア）を選ぶ</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#2d5a3d] font-black flex-shrink-0">3.</span>
            <span><strong>グレインフリー</strong>は猫の体質に合わせて検討する</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#2d5a3d] font-black flex-shrink-0">4.</span>
            <span><strong>ウェット+ドライの組み合わせ</strong>で水分補給と栄養バランスを確保する</span>
          </li>
        </ul>
        <div className="mt-5 pt-5 border-t border-[#ede9e3]">
          <a href="/category/premium-cat-food" className="text-sm font-bold text-[#2d5a3d] hover:underline">
            → プレミアムキャットフードおすすめランキングを見る
          </a>
        </div>
      </div>
    </article>
  );
}
