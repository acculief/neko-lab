import { Metadata } from 'next';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: '室内猫の運動不足解消法｜おもちゃ・キャットタワー・遊び方のコツ | ねこラボ',
  description: '室内猫の運動不足を解消する方法を徹底解説。運動不足のサイン・1日の理想的な遊び時間・おすすめおもちゃの選び方・キャットタワーの活用法まで。',
  alternates: { canonical: 'https://neko-lab.vercel.app/article/indoor-cat-exercise' },
  openGraph: {
    title: '室内猫の運動不足解消法｜おもちゃ・キャットタワー・遊び方のコツ',
    description: '室内猫の運動不足解消法を解説。遊び時間・おもちゃ選び・キャットタワー活用まで。',
    url: 'https://neko-lab.vercel.app/article/indoor-cat-exercise',
    type: 'article',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '室内猫の運動不足解消法｜おもちゃ・キャットタワー・遊び方のコツ',
    description: '室内猫の運動不足解消法を解説。遊び時間・おもちゃ選び・キャットタワー活用まで。',
  },
};

export default function IndoorCatExercisePage() {
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '室内猫の運動不足解消法｜おもちゃ・キャットタワー・遊び方のコツ',
    description: '室内猫の運動不足を解消する方法を徹底解説。運動不足のサイン・1日の理想的な遊び時間・おすすめおもちゃ・キャットタワーの活用法。',
    author: { '@type': 'Organization', name: 'ねこラボ編集部', url: 'https://neko-lab.vercel.app' },
    publisher: {
      '@type': 'Organization',
      name: 'ねこラボ',
      url: 'https://neko-lab.vercel.app',
      logo: { '@type': 'ImageObject', url: 'https://neko-lab.vercel.app/og-image.png' },
    },
    datePublished: '2025-02-01',
    dateModified: '2025-02-28',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://neko-lab.vercel.app/article/indoor-cat-exercise' },
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://neko-lab.vercel.app' },
      { '@type': 'ListItem', position: 2, name: '室内猫の運動不足解消法', item: 'https://neko-lab.vercel.app/article/indoor-cat-exercise' },
    ],
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '室内猫はどのくらい運動させればいいですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '成猫で1日15〜30分の積極的な運動（飼い主との遊び）が理想的です。細かく分けて1回5〜10分を2〜3回行うと猫も疲れにくくて効果的です。',
        },
      },
      {
        '@type': 'Question',
        name: '猫が運動不足になるとどうなりますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '肥満・糖尿病・心臓病・関節疾患のリスクが高まります。またストレス発散ができず、破壊行動・過剰グルーミング・攻撃性の増加につながることもあります。',
        },
      },
      {
        '@type': 'Question',
        name: '高齢猫の運動はどうすればいいですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '無理な激しい運動は関節に負担をかけます。短時間（5〜10分）の穏やかな遊びを1日2回程度行い、猫の体調を見ながら調整しましょう。',
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
        <span className="text-[#44403c]">室内猫の運動不足解消法</span>
      </nav>

      {/* H1 */}
      <h1 className="text-2xl md:text-3xl font-black text-[#1c1917] leading-tight mb-4">
        室内猫の運動不足解消法｜おもちゃ・キャットタワー・遊び方のコツ
      </h1>

      <div className="flex flex-wrap items-center gap-3 mb-6 text-xs text-[#a8a29e]">
        <span className="flex items-center gap-1">🐱 ねこラボ編集部</span>
        <span>更新: 2025-02-28</span>
        <span className="bg-[#f0fdf4] text-[#2d5a3d] border border-[#bbf7d0] px-2 py-0.5 rounded-full font-bold">獣医師監修</span>
      </div>

      {/* リード */}
      <div className="bg-[#f5f0eb] border-l-4 border-[#2d5a3d] p-5 mb-8 rounded-r-xl">
        <p className="text-sm text-[#44403c] leading-relaxed">
          室内飼いの猫は運動量が不足しがちです。<strong>適切な遊びと環境整備</strong>で、猫の心身の健康を守りましょう。
          本記事では運動不足のサイン・1日の理想的な遊び時間・おすすめおもちゃ・キャットタワーの選び方を解説します。
        </p>
      </div>

      {/* セクション1: 運動不足サイン */}
      <h2 className="text-xl font-black text-[#1c1917] mb-4 mt-10">⚠️ 室内猫の運動不足サインとは</h2>
      <p className="text-sm text-[#57534e] leading-relaxed mb-4">
        以下のサインが見られたら、運動不足の可能性があります。早めに対策を取りましょう。
      </p>
      <div className="grid md:grid-cols-2 gap-3 mb-8">
        {[
          { icon: '🍔', sign: '体重増加・肥満', desc: '体を触っても肋骨が感じにくい場合は肥満の可能性' },
          { icon: '😴', sign: '過度な眠り・無気力', desc: '1日の睡眠が16時間を超えてぐったりしている' },
          { icon: '🪮', sign: '過剰グルーミング', desc: 'ストレス発散として毛並みが薄くなるほど舐める' },
          { icon: '😾', sign: '破壊行動・攻撃性', desc: '家具をひどく引っかく、突然噛むなど問題行動が増える' },
          { icon: '📣', sign: '夜鳴き・要求鳴き', desc: 'エネルギーが余っており夜中に大きな声で鳴く' },
          { icon: '🏃', sign: '突発的な全力ダッシュ', desc: '「夜の運動会」が毎日続く場合は昼間の運動不足のサイン' },
        ].map((item) => (
          <div key={item.sign} className="bg-white border border-[#ede9e3] rounded-xl p-4 flex gap-3">
            <span className="text-2xl flex-shrink-0">{item.icon}</span>
            <div>
              <p className="font-bold text-[#1c1917] text-sm mb-1">{item.sign}</p>
              <p className="text-xs text-[#57534e]">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* セクション2: 1日の遊び時間 */}
      <h2 className="text-xl font-black text-[#1c1917] mb-4 mt-12">⏰ 1日の理想的な遊び時間（年齢別）</h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#f5f0eb]">
              <th className="text-left p-3 font-black text-[#1c1917] border border-[#ede9e3]">年齢</th>
              <th className="text-center p-3 font-black text-[#1c1917] border border-[#ede9e3]">推奨遊び時間</th>
              <th className="text-left p-3 font-black text-[#1c1917] border border-[#ede9e3]">ポイント</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['子猫（〜12ヶ月）', '30〜60分/日', '短時間×多回数が◎。疲れやすいので5〜10分ずつ'],
              ['成猫（1〜7歳）', '15〜30分/日', '狩りを模したインタラクティブな遊びが最適'],
              ['シニア猫（7歳〜）', '10〜20分/日', '無理せず穏やかに。関節に優しい低負荷な遊びを'],
            ].map(([age, time, point]) => (
              <tr key={age} className="hover:bg-[#faf8f5]">
                <td className="p-3 font-bold text-[#44403c] border border-[#ede9e3]">{age}</td>
                <td className="p-3 text-center font-black text-[#2d5a3d] border border-[#ede9e3]">{time}</td>
                <td className="p-3 text-xs text-[#57534e] border border-[#ede9e3]">{point}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* セクション3: おもちゃの選び方 */}
      <h2 className="text-xl font-black text-[#1c1917] mb-4 mt-12">🎯 おすすめおもちゃの選び方（種類別）</h2>
      <div className="space-y-4 mb-8">
        {[
          {
            type: '猫じゃらし（羽根・紐タイプ）',
            best: '飼い主との遊びに最適',
            desc: '猫の狩猟本能を最も刺激するおもちゃ。飼い主が動かし方に変化をつけることで猫の集中力が高まります。使用後は必ず片付け、誤飲を防ぎましょう。',
            icon: '🪶',
          },
          {
            type: '電動おもちゃ（自動レーザー・電動魚）',
            best: '一人遊びに便利',
            desc: '飼い主が不在でも猫を楽しませられます。ただし長時間の一人遊びは危険なため、監視できる時間帯のみ使用しましょう。',
            icon: '⚡',
          },
          {
            type: 'キャットトンネル',
            best: '隠れる・走る遊びに最適',
            desc: '猫の隠れる本能を満たします。複数つなげて迷路のようにするとさらに楽しめます。折りたたみ式は収納も便利。',
            icon: '🕳️',
          },
          {
            type: 'パズルフィーダー（知育おもちゃ）',
            best: '食事と遊びを組み合わせ',
            desc: 'フードを隠したパズルを解いて食べるため、頭と体を同時に使えます。肥満防止にも効果的。食事の早食い防止にもなります。',
            icon: '🧩',
          },
        ].map((toy) => (
          <div key={toy.type} className="bg-white border border-[#ede9e3] rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">{toy.icon}</span>
              <div>
                <h3 className="font-black text-[#1c1917] text-sm">{toy.type}</h3>
                <span className="text-xs bg-[#f0fdf4] text-[#2d5a3d] border border-[#bbf7d0] px-2 py-0.5 rounded-full">{toy.best}</span>
              </div>
            </div>
            <p className="text-sm text-[#57534e] leading-relaxed">{toy.desc}</p>
          </div>
        ))}
      </div>

      {/* セクション4: キャットタワー */}
      <h2 className="text-xl font-black text-[#1c1917] mb-4 mt-12">🏗️ キャットタワー・キャットウォークの活用法</h2>
      <p className="text-sm text-[#57534e] leading-relaxed mb-4">
        猫は本来、高い場所を好む動物です。垂直空間を活用することで、<strong>運動量を増やしつつ精神的な満足感</strong>も与えられます。
      </p>
      <div className="space-y-3 mb-8">
        {[
          { title: 'キャットタワーの高さ', desc: '天井近くまで届く高いものほど猫の満足度が高まります。最低でも150cm以上を目安に選びましょう。' },
          { title: '設置場所は窓際がベスト', desc: '外を眺めながら運動できる窓際に設置すると、知的刺激も同時に与えられます。' },
          { title: 'キャットウォークで壁面を活用', desc: '壁に棚を設置して動線を作るキャットウォークは、省スペースで大きな運動効果が得られます。' },
          { title: '爪とぎを組み合わせる', desc: '麻や段ボールの爪とぎポールをタワーに組み合わせることで、爪の健康維持と運動を一石二鳥で叶えられます。' },
        ].map((item) => (
          <div key={item.title} className="bg-white border border-[#ede9e3] rounded-xl p-4">
            <p className="font-bold text-[#2d5a3d] text-sm mb-1">▶ {item.title}</p>
            <p className="text-sm text-[#57534e]">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <h2 className="text-xl font-black text-[#1c1917] mb-5 mt-12">よくある質問</h2>
      <div className="space-y-4 mb-10">
        {[
          { q: '室内猫はどのくらい運動させればいいですか？', a: '成猫で1日15〜30分の積極的な運動（飼い主との遊び）が理想的です。細かく分けて1回5〜10分を2〜3回行うと猫も疲れにくくて効果的です。' },
          { q: '猫が運動不足になるとどうなりますか？', a: '肥満・糖尿病・心臓病・関節疾患のリスクが高まります。またストレス発散ができず、破壊行動・過剰グルーミング・攻撃性の増加につながることもあります。' },
          { q: '高齢猫の運動はどうすればいいですか？', a: '無理な激しい運動は関節に負担をかけます。短時間（5〜10分）の穏やかな遊びを1日2回程度行い、猫の体調を見ながら調整しましょう。' },
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
            <span>運動不足サイン（肥満・夜鳴き・過剰グルーミング）を早期発見する</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#2d5a3d] font-black flex-shrink-0">✓</span>
            <span>成猫は<strong>1日15〜30分</strong>のインタラクティブな遊びを目標にする</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#2d5a3d] font-black flex-shrink-0">✓</span>
            <span><strong>猫じゃらし・電動おもちゃ・パズルフィーダー</strong>を組み合わせる</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#2d5a3d] font-black flex-shrink-0">✓</span>
            <span><strong>キャットタワー</strong>で垂直空間を活用し、自発的な運動を促す</span>
          </li>
        </ul>
        <div className="mt-5 pt-5 border-t border-[#ede9e3]">
          <a href="/category/cat-toy" className="text-sm font-bold text-[#2d5a3d] hover:underline">
            → 猫おもちゃおすすめランキングを見る
          </a>
        </div>
      </div>
    </article>
  );
}
