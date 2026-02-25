import { Metadata } from 'next';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: '獣医師監修｜キャットフードの正しい選び方【2025年版】',
  description: '猫を飼い始めた初心者向けに、キャットフードの正しい選び方をわかりやすく解説。原材料・栄養バランス・嗜好性・コスパ・口コミの5軸で徹底ガイド。愛猫に合ったフード選びをサポートします。',
  alternates: { canonical: 'https://neko-lab.vercel.app/article/catfood-guide' },
  openGraph: {
    title: '獣医師監修｜キャットフードの正しい選び方【2025年版】',
    description: '猫を飼い始めた初心者向けに、キャットフードの正しい選び方をわかりやすく解説。原材料・栄養バランス・嗜好性・コスパ・口コミの5軸で徹底ガイド。',
    url: 'https://neko-lab.vercel.app/article/catfood-guide',
    type: 'article',
    images: [{ url: '/og-image.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '獣医師監修｜キャットフードの正しい選び方【2025年版】',
    description: '猫を飼い始めた初心者向けに、キャットフードの正しい選び方をわかりやすく解説。',
  },
};

export default function CatfoodGuidePage() {
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '獣医師監修｜キャットフードの正しい選び方【2025年版】',
    description: '猫を飼い始めた初心者向けに、キャットフードの正しい選び方をわかりやすく解説。原材料・栄養バランス・嗜好性・コスパ・口コミの5軸で徹底ガイド。',
    author: { '@type': 'Organization', name: '猫暮らしラボ編集部', url: 'https://neko-lab.vercel.app' },
    publisher: {
      '@type': 'Organization',
      name: '猫暮らしラボ',
      url: 'https://neko-lab.vercel.app',
      logo: { '@type': 'ImageObject', url: 'https://neko-lab.vercel.app/og-image.png' },
    },
    datePublished: '2025-01-01',
    dateModified: '2025-02-25',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://neko-lab.vercel.app/article/catfood-guide' },
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://neko-lab.vercel.app' },
      { '@type': 'ListItem', position: 2, name: 'キャットフード選び方ガイド', item: 'https://neko-lab.vercel.app/article/catfood-guide' },
    ],
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'キャットフードはドライとウェットどちらが良いですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'どちらにもメリットがあります。ドライは歯の健康維持・保存性の高さが魅力で、ウェットは水分補給ができるため泌尿器疾患の予防に効果的です。組み合わせて与えるのが理想的です。',
        },
      },
      {
        '@type': 'Question',
        name: '子猫と成猫でフードを変える必要はありますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '必要です。子猫（生後12ヶ月未満）は成長に必要なカロリーやタンパク質が多く必要なため、子猫用（キトン）フードを選びましょう。成猫になったら総合栄養食の成猫用へ切り替えてください。',
        },
      },
      {
        '@type': 'Question',
        name: 'グレインフリーとは何ですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'グレインフリーとは穀物（小麦・トウモロコシなど）不使用のフードのことです。猫は肉食動物で穀物の消化が苦手なため、消化器への負担が少ないとされています。ただし必須ではなく、猫の体質に合わせて選びましょう。',
        },
      },
    ],
  };

  return (
    <article className="max-w-3xl mx-auto px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* パンくず */}
      <nav aria-label="パンくずリスト" className="text-xs text-[#a8a29e] mb-6">
        <a href="/" className="hover:text-[#2d5a3d]">ホーム</a>
        <span className="mx-2">/</span>
        <span className="text-[#44403c]">キャットフードの選び方ガイド</span>
      </nav>

      {/* H1 */}
      <h1 className="text-2xl md:text-3xl font-black text-[#1c1917] leading-tight mb-4">
        獣医師監修｜キャットフードの正しい選び方【2025年版】
      </h1>

      <div className="flex flex-wrap items-center gap-3 mb-6 text-xs text-[#a8a29e]">
        <span className="flex items-center gap-1">🐱 猫暮らしラボ編集部</span>
        <span>更新: 2025-02-25</span>
        <span className="bg-[#f0fdf4] text-[#2d5a3d] border border-[#bbf7d0] px-2 py-0.5 rounded-full font-bold">獣医師監修</span>
        <span className="bg-[#fff7ed] text-[#c2410c] border border-[#fed7aa] px-2 py-0.5 rounded-full font-bold">初心者向け</span>
      </div>

      {/* リード */}
      <div className="bg-[#f5f0eb] border-l-4 border-[#2d5a3d] p-5 mb-8 rounded-r-xl">
        <p className="text-sm text-[#44403c] leading-relaxed">
          「どのキャットフードを選べばいいの？」と悩む猫オーナーは多いはず。
          ペットショップやネットには何百種類ものフードが並んでいて、初心者にはとても選べません。
          本記事では、<strong>猫暮らしスコア</strong>（原材料・栄養・嗜好性・コスパ・口コミの5軸評価）をベースに、
          キャットフード選びの基本を獣医師監修のもとわかりやすく解説します。
        </p>
      </div>

      {/* 目次 */}
      <div className="bg-white border border-[#ede9e3] rounded-2xl p-5 mb-10">
        <p className="text-xs font-bold text-[#a8a29e] mb-3 uppercase tracking-wider">目次</p>
        <ol className="space-y-2 text-sm text-[#2d5a3d]">
          <li><a href="#what-is-catfood" className="hover:underline">1. キャットフードの種類を知ろう</a></li>
          <li><a href="#ingredients" className="hover:underline">2. 原材料と栄養バランスの見方</a></li>
          <li><a href="#how-to-choose" className="hover:underline">3. 愛猫に合ったフードの選び方</a></li>
          <li><a href="#score-guide" className="hover:underline">4. 猫暮らしスコア5軸で選ぶ</a></li>
          <li><a href="#faq" className="hover:underline">5. よくある質問</a></li>
        </ol>
      </div>

      {/* Section 1 */}
      <section id="what-is-catfood" className="mb-12">
        <h2 className="text-xl font-black text-[#1c1917] mb-4 pb-2 border-b-2 border-[#e7e5e4]">
          🥣 キャットフードの種類を知ろう
        </h2>
        <p className="text-sm text-[#57534e] leading-relaxed mb-4">
          キャットフードは大きく分けて<strong>ドライフード（カリカリ）</strong>と<strong>ウェットフード（缶詰・パウチ）</strong>の2種類があります。
          それぞれ特性が異なるため、まず違いを理解しておきましょう。
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-white border border-[#ede9e3] rounded-xl p-4">
            <p className="font-bold text-[#1c1917] mb-2 text-sm">🌾 ドライフード（総合栄養食）</p>
            <ul className="text-xs text-[#57534e] space-y-1">
              <li>✓ 水分含有量が低く（約10%）保存しやすい</li>
              <li>✓ 歯垢除去効果を期待できる</li>
              <li>✓ コスパが良い</li>
              <li>✗ 水分摂取量が少なくなりがち</li>
            </ul>
          </div>
          <div className="bg-white border border-[#ede9e3] rounded-xl p-4">
            <p className="font-bold text-[#1c1917] mb-2 text-sm">💧 ウェットフード</p>
            <ul className="text-xs text-[#57534e] space-y-1">
              <li>✓ 水分含有量が高い（75〜85%）</li>
              <li>✓ 泌尿器疾患の予防に効果的</li>
              <li>✓ 嗜好性（食いつき）が高い</li>
              <li>✗ 開封後の保存が難しい</li>
            </ul>
          </div>
        </div>
        <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-xl p-4 text-sm text-[#166534]">
          <strong>💡 ポイント：</strong>ドライとウェットを組み合わせる「混合給与」が理想的。
          ドライをメインにしつつ、週に数回ウェットを取り入れると水分補給もできて◎
        </div>
      </section>

      {/* Section 2 */}
      <section id="ingredients" className="mb-12">
        <h2 className="text-xl font-black text-[#1c1917] mb-4 pb-2 border-b-2 border-[#e7e5e4]">
          🔍 原材料と栄養バランスの見方
        </h2>
        <p className="text-sm text-[#57534e] leading-relaxed mb-4">
          パッケージ裏面の<strong>原材料表示</strong>は、配合量の多い順に記載されています。
          猫は<strong>完全肉食動物</strong>（植物性食品を消化する酵素が少ない動物）なので、
          先頭に「チキン」「サーモン」などの動物性タンパク源が来ているかが重要です。
        </p>

        <div className="space-y-3 mb-6">
          <div className="flex gap-3 bg-white border border-[#ede9e3] rounded-xl p-4">
            <span className="text-green-600 font-black text-lg flex-shrink-0">✓</span>
            <div>
              <p className="font-bold text-sm text-[#1c1917] mb-1">良い原材料の例</p>
              <p className="text-xs text-[#57534e]">チキン（生）、サーモン、ターキー、タラなど具体的な肉・魚が筆頭に来ているもの</p>
            </div>
          </div>
          <div className="flex gap-3 bg-white border border-[#ede9e3] rounded-xl p-4">
            <span className="text-red-500 font-black text-lg flex-shrink-0">✗</span>
            <div>
              <p className="font-bold text-sm text-[#1c1917] mb-1">注意が必要な原材料</p>
              <p className="text-xs text-[#57534e]">
                「肉副産物」（骨・内臓・爪などの残渣）、「チキンミール」（乾燥させた副産物粉）、
                人工着色料・保存料（BHA・BHT・エトキシキン）が上位にある場合は要注意
              </p>
            </div>
          </div>
        </div>

        <p className="text-sm text-[#57534e] leading-relaxed mb-3">
          栄養面では、<strong>粗タンパク質30%以上・粗脂肪15%以上</strong>が一つの目安。
          また「<strong>総合栄養食</strong>」と表示されているフードは、それだけで必要な栄養素が摂れる主食として設計されています
          （「一般食」や「おやつ」は主食にできないので注意）。
        </p>

        <div className="bg-[#fff7ed] border border-[#fed7aa] rounded-xl p-4 text-sm text-[#9a3412]">
          <strong>⚠️ グレインフリーについて：</strong>「グレインフリー」とは穀物（小麦・トウモロコシ・大麦など）を含まないフードのこと。
          猫は穀物の消化が苦手なため消化器への負担が少ないとされますが、全ての猫に必須ではありません。
          愛猫の体質や健康状態に合わせて選びましょう。
        </div>
      </section>

      {/* Section 3 */}
      <section id="how-to-choose" className="mb-12">
        <h2 className="text-xl font-black text-[#1c1917] mb-4 pb-2 border-b-2 border-[#e7e5e4]">
          🐾 愛猫に合ったフードの選び方
        </h2>
        <p className="text-sm text-[#57534e] leading-relaxed mb-5">
          キャットフード選びは「猫の年齢・体重・体質」に合わせることが基本です。
          以下のポイントを確認してから選びましょう。
        </p>

        <div className="space-y-4">
          {[
            {
              icon: '🐣',
              title: '年齢ステージ別に選ぶ',
              body: '子猫（生後12ヶ月未満）は成長に多くのカロリーとタンパク質が必要なため「キトン用」を、成猫（1〜7歳）は「アダルト用」を、シニア猫（7歳以上）は「シニア用」を選びましょう。ライフステージに合わないフードは栄養不足や過剰になる恐れがあります。',
            },
            {
              icon: '⚖️',
              title: '体重・体型に合わせる',
              body: '肥満気味の猫には低カロリーの「ライト」タイプ、やせ気味には高カロリーなフードを。去勢・避妊手術後は太りやすくなるため、「避妊去勢後用」フードも有効です。',
            },
            {
              icon: '🏥',
              title: '健康状態・体質を考慮する',
              body: '泌尿器が弱い猫にはマグネシウム・リン・カルシウムを適切に管理した「泌尿器ケア」フードが有効です。食物アレルギーがある場合は、アレルゲン（鶏・穀物など）を特定して除去フードを選びましょう。持病がある場合は必ず獣医師に相談してください。',
            },
          ].map((item, i) => (
            <div key={i} className="bg-white border border-[#ede9e3] rounded-xl p-5">
              <p className="font-bold text-[#1c1917] mb-2 text-sm">{item.icon} {item.title}</p>
              <p className="text-xs text-[#57534e] leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4 */}
      <section id="score-guide" className="mb-12">
        <h2 className="text-xl font-black text-[#1c1917] mb-4 pb-2 border-b-2 border-[#e7e5e4]">
          📊 猫暮らしスコア5軸で選ぶ
        </h2>
        <p className="text-sm text-[#57534e] leading-relaxed mb-5">
          猫暮らしラボでは、すべてのフードを独自の<strong>猫暮らしスコア</strong>で評価しています。
          この5つの軸を理解することで、自分の優先事項に合ったフードを見つけやすくなります。
        </p>

        <div className="space-y-3 mb-6">
          {[
            {
              label: '原材料',
              weight: '30%',
              color: 'bg-[#2d5a3d]',
              desc: 'フードの品質の根幹。動物性タンパク源が主原料か、副産物や人工添加物が少ないかを評価。筆頭原料が具体的な肉・魚名であるほど高評価。',
            },
            {
              label: '栄養バランス',
              weight: '20%',
              color: 'bg-[#1d6b96]',
              desc: 'タンパク質・脂質・ビタミン・ミネラルなどの栄養素バランスを評価。総合栄養食の基準をクリアしているかも確認ポイント。',
            },
            {
              label: '嗜好性',
              weight: '20%',
              color: 'bg-[#c2410c]',
              desc: '猫が実際によく食べるかどうか。いくら栄養が良くても食べなければ意味がない。実際のユーザー報告・食いつきの良さを評価。',
            },
            {
              label: 'コスパ',
              weight: '15%',
              color: 'bg-[#7c3aed]',
              desc: '1日あたりの給餌コストで評価。品質が良くても継続できなければ意味がないため、コストパフォーマンスは重要な軸。',
            },
            {
              label: '口コミ',
              weight: '15%',
              color: 'bg-[#b45309]',
              desc: '実際に使っているオーナーの評価。毛並みの改善・消化の良さ・長期使用でのコンディション変化など、リアルな声を集計。',
            },
          ].map((axis, i) => (
            <div key={i} className="flex gap-4 bg-white border border-[#ede9e3] rounded-xl p-4">
              <div className="flex-shrink-0 flex flex-col items-center gap-1">
                <div className={`w-10 h-10 ${axis.color} rounded-full flex items-center justify-center text-white font-black text-xs`}>{axis.weight}</div>
                <p className="text-[10px] font-bold text-[#a8a29e]">{axis.label}</p>
              </div>
              <p className="text-xs text-[#57534e] leading-relaxed my-auto">{axis.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#f5f0eb] border-l-4 border-[#2d5a3d] p-5 rounded-r-xl text-sm text-[#44403c]">
          <strong>活用法：</strong>価格を重視するなら「コスパ」スコアが高いフードを、
          食いつきに悩んでいるなら「嗜好性」スコアを、健康面を最優先にするなら
          「原材料」＋「栄養バランス」の合計点で選ぶとフードが絞りやすくなります。
          <a href="/category/cat-food" className="ml-2 text-[#2d5a3d] font-bold hover:underline">→ スコアランキングを見る</a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-12">
        <h2 className="text-xl font-black text-[#1c1917] mb-5">よくある質問</h2>
        <div className="space-y-4">
          {[
            {
              q: 'キャットフードはドライとウェットどちらが良いですか？',
              a: 'どちらにもメリットがあります。ドライは歯の健康維持・保存性の高さが魅力で、ウェットは水分補給ができるため泌尿器疾患の予防に効果的です。両方を組み合わせる「混合給与」が理想的です。',
            },
            {
              q: '子猫と成猫でフードを変える必要はありますか？',
              a: '必要です。子猫（生後12ヶ月未満）は成長に必要なカロリーやタンパク質が多く必要なため、子猫用（キトン）フードを選びましょう。成猫になったら総合栄養食の成猫用へ切り替えてください。',
            },
            {
              q: 'グレインフリーとは何ですか？選ぶべきですか？',
              a: 'グレインフリーとは穀物（小麦・トウモロコシなど）不使用のフードのことです。猫は肉食動物で穀物の消化が苦手なため、消化器への負担が少ないとされています。ただし全ての猫に必須ではなく、猫の体質に合わせて選びましょう。',
            },
            {
              q: 'フードを切り替えるときの注意点は？',
              a: '急な切り替えは消化不良や食欲不振の原因になります。7〜10日間かけて新旧フードを少しずつ混ぜながら割合を変えていく「切り替え期間」を設けましょう。最終的に新フード100%にしてから様子を見てください。',
            },
          ].map((f, i) => (
            <div key={i} className="bg-white border border-[#ede9e3] rounded-xl p-5">
              <p className="font-bold text-[#2d5a3d] mb-2 text-sm">Q. {f.q}</p>
              <p className="text-sm text-[#57534e] leading-relaxed">A. {f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* まとめ */}
      <div className="bg-[#f5f0eb] rounded-2xl p-6 mt-4">
        <h2 className="text-xl font-black text-[#1c1917] mb-4">まとめ</h2>
        <p className="text-sm text-[#57534e] leading-relaxed mb-4">
          キャットフード選びで大切なのは「猫に合ったものを継続して与えること」。
          まずは年齢・体質に合ったフードを選び、原材料の品質を確認してから購入しましょう。
          迷ったときは猫暮らしスコアの5軸を参考に、優先したい項目から絞り込むのが近道です。
        </p>
        <ul className="space-y-2 mb-5 text-sm text-[#44403c]">
          <li className="flex items-start gap-2"><span className="text-[#2d5a3d] font-black mt-0.5">✓</span><span>フードの種類（ドライ・ウェット）を理解して使い分ける</span></li>
          <li className="flex items-start gap-2"><span className="text-[#2d5a3d] font-black mt-0.5">✓</span><span>原材料の筆頭が具体的な肉・魚名かを確認する</span></li>
          <li className="flex items-start gap-2"><span className="text-[#2d5a3d] font-black mt-0.5">✓</span><span>ライフステージ（年齢・体重・健康状態）に合ったフードを選ぶ</span></li>
          <li className="flex items-start gap-2"><span className="text-[#2d5a3d] font-black mt-0.5">✓</span><span>猫暮らしスコア（原材料/栄養/嗜好性/コスパ/口コミ）を活用する</span></li>
        </ul>
        <div className="pt-5 border-t border-[#ede9e3] flex flex-col sm:flex-row gap-3">
          <a
            href="/category/cat-food"
            className="text-sm font-bold text-[#2d5a3d] hover:underline"
          >
            → キャットフードスコアランキングを見る
          </a>
          <a
            href="/article/premium-cat-food-ranking"
            className="text-sm font-bold text-[#2d5a3d] hover:underline"
          >
            → プレミアムキャットフードおすすめ5選を見る
          </a>
        </div>
      </div>
    </article>
  );
}
