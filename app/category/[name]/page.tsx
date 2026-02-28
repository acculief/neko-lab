import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { CATEGORIES } from '@/lib/products';
import { CAT_FOOD_PRODUCTS } from '@/data/products/cat-food';
import { KIDNEY_FOOD_PRODUCTS } from '@/data/products/kidney-food';
import { AUTO_TOILET_PRODUCTS } from '@/data/products/auto-toilet';
import { CAT_LITTER_PRODUCTS } from '@/data/products/cat-litter';
import { INSURANCE_PRODUCTS } from '@/data/products/insurance';
import { CAT_TOY_PRODUCTS } from '@/data/products/cat-toy';
import { CAT_CARRIER_PRODUCTS } from '@/data/products/cat-carrier';
import ProductCard from '@/components/ProductCard';
import ComparisonTable from '@/components/ComparisonTable';
import type { Product } from '@/lib/products';
import type { CategoryType } from '@/lib/scoring';

export const revalidate = 3600;

export async function generateStaticParams() {
  return CATEGORIES.map(c => ({ name: c.slug }));
}

function getProducts(slug: string): Product[] {
  if (slug === 'premium-cat-food') return CAT_FOOD_PRODUCTS;
  if (slug === 'kidney-care-food') return KIDNEY_FOOD_PRODUCTS;
  if (slug === 'auto-litter-box') return AUTO_TOILET_PRODUCTS;
  if (slug === 'premium-cat-litter') return CAT_LITTER_PRODUCTS;
  if (slug === 'pet-insurance') return INSURANCE_PRODUCTS;
  if (slug === 'cat-toy') return CAT_TOY_PRODUCTS;
  if (slug === 'cat-carrier') return CAT_CARRIER_PRODUCTS;
  return [];
}

// カテゴリ別SEOテキスト（500字以上）
const SEO_TEXT: Record<string, { faq: { q: string; a: string }[]; intro: string; guide: string }> = {
  'premium-cat-food': {
    intro: 'プレミアムキャットフードは、一般的なキャットフードと比較して原材料の品質が格段に高く、愛猫の長期的な健康維持に大きく貢献します。グレインフリー・動物性タンパク質高配合・人工添加物不使用といった特徴を持つ製品が多く、腎臓病・尿路疾患・肥満といった生活習慣病の予防にも効果的です。',
    guide: 'プレミアムキャットフードを選ぶ際の最重要ポイントは「原材料の順番」です。成分表の最初に記載されているものが最も多く含まれる食材です。「チキン」「サーモン」など具体的な肉・魚が1位に来ているものを選びましょう。「副産物」「ミートミール」が上位に来るものは品質が劣る可能性があります。また、穀物（グレイン）フリーかどうかも重要な判断基準です。猫は本来肉食動物であり、炭水化物の消化が苦手なため、グレインフリーフードは消化器への負担が少ないとされています。価格と品質のバランスも考慮し、猫暮らしスコア75点以上を目安に選ぶことをおすすめします。',
    faq: [
      { q: 'プレミアムキャットフードと一般フードの違いは何ですか？', a: '最大の違いは原材料の品質と配合比率です。プレミアムフードは新鮮な肉・魚を70〜85%以上使用し、人工着色料・保存料・副産物を使用しないケースが多いです。一般フードは製造コストを抑えるため穀物や副産物を多く使用します。' },
      { q: 'プレミアムキャットフードは何歳から与えられますか？', a: '子猫（キトン）用・成猫用・シニア用に分かれているものがほとんどです。キトン期（〜12ヶ月）はタンパク質・カルシウムが豊富なキトン対応品を選びましょう。成猫期は維持管理向け、7歳以上はシニア向けに切り替えることをおすすめします。' },
      { q: 'グレインフリーのキャットフードは本当に良いですか？', a: '猫は肉食動物で炭水化物の消化酵素が少ないため、グレインフリーは消化器への負担が少ないとされています。ただし、全ての猫にグレインフリーが必須というわけではなく、猫の体質や健康状態に合わせて選ぶことが重要です。' },
      { q: 'キャットフードの切り替えはどうすればいいですか？', a: '急な切り替えは消化器トラブルの原因になります。1〜2週間かけて新しいフードを少しずつ混ぜながら移行しましょう。最初は新:旧=1:9から始め、徐々に新フードの割合を増やしていきます。' },
    ],
  },
  'kidney-care-food': {
    intro: '猫の腎臓病は10歳以上の猫の約30〜40%が罹患すると言われる、最も一般的な慢性疾患です。腎臓ケアフードは、リン・タンパク質・ナトリウムを制限しながら必要なカロリーを確保する特別な栄養設計が施されています。獣医師の指示のもと、適切な療法食を選ぶことが猫の寿命と生活の質を大きく左右します。',
    guide: '腎臓ケアフードを選ぶ際の最重要ポイントは「リン含有量」です。腎臓病の猫はリンの排泄が困難になるため、低リンフードが必須です。次にタンパク質の質と量。量は制限しつつ、質の高い動物性タンパク質を使用しているものを選びましょう。また、猫が嫌がって食べないケースも多いため、嗜好性（食いつき）も重要な選定基準です。複数のフードを試し、愛猫が好む味を見つけることが長期的なケアの成功につながります。',
    faq: [
      { q: '腎臓病の猫には市販フードと療法食どちらが良いですか？', a: '慢性腎臓病（CKD）のステージによって異なります。初期（ステージ1〜2）では市販の低リン・低塩分フードでも対応できますが、中期以降（ステージ3〜4）は獣医師処方の療法食が推奨されます。必ず定期的な血液検査で腎臓の状態を確認しながら選択してください。' },
      { q: '腎臓ケアフードを嫌がる場合はどうすればいいですか？', a: '複数のブランドを試す、ウェットフードと混ぜる、少量を頻繁に与えるなどの方法が有効です。食欲不振は腎臓病の症状でもあるため、長期間食べない場合は獣医師に相談してください。' },
      { q: '腎臓ケアフードはどのくらいの期間続けるべきですか？', a: '腎臓病は完治しない慢性疾患のため、一般的には診断後は継続して腎臓ケアフードを与え続けることが推奨されます。定期的な血液検査（3〜6ヶ月ごと）で状態を確認しながら継続してください。' },
    ],
  },
  'auto-litter-box': {
    intro: '全自動猫トイレは、排泄後に自動でケーキング（固まった砂）を除去してくれる革新的なペット用品です。多頭飼いや長時間外出が多いオーナーにとって、衛生管理の手間を大幅に削減できます。近年はアプリ連携・健康モニタリング機能を搭載したスマートモデルも登場し、愛猫の健康管理ツールとしても注目されています。',
    guide: '全自動猫トイレを選ぶ際のポイントは「サイズ」「対応猫砂の種類」「清掃の手間」の3つです。猫の体重・体格に合ったサイズのものを選ばないと使用を拒否する場合があります。対応猫砂は製品によって鉱物系・シリカゲル系・木系など異なり、専用砂が必要なモデルはランニングコストに注意が必要です。また、廃棄ボックスの容量・清掃頻度・モーター音の大きさも実際の使用感に直結します。',
    faq: [
      { q: '全自動猫トイレは猫が怖がって使わないことはありますか？', a: 'モーター音や動く部品を怖がる猫はいます。導入初期は電源を切った状態で慣れさせ、徐々に自動モードに移行するのが成功のコツです。特に臆病な猫や高齢猫は慣れるまで時間がかかることがあります。' },
      { q: '全自動猫トイレのランニングコストはどのくらいですか？', a: '専用猫砂が必要なモデルは月3,000〜8,000円程度かかることがあります。汎用猫砂対応モデルは月1,500〜3,000円程度に抑えられます。本体価格だけでなく、消耗品のコストも含めて総合的に判断しましょう。' },
      { q: '多頭飼いでも全自動猫トイレは使えますか？', a: '多頭飼い対応を明記したモデルを選ぶ必要があります。一般的に猫の数+1個のトイレが推奨されますが、全自動トイレは清掃頻度が高いため、2〜3匹程度なら1台で対応できるモデルもあります。' },
    ],
  },
  'premium-cat-litter': {
    intro: '高級猫砂は、消臭力・固まり性能・舞い散りにくさ・安全性において一般猫砂を大きく上回る製品群です。素材別に鉱物系（ベントナイト）・木質系（おから・木チップ）・シリカゲル系・紙系などがあり、それぞれ特性が異なります。愛猫の好みと飼い主のライフスタイルに合わせた選択が、長期的な使用継続のカギです。',
    guide: '高級猫砂を選ぶ際のポイントは「消臭力」「固まり方」「飛び散りにくさ」の3要素です。鉱物系は固まりが硬く処理しやすいですが重量があります。木質系は軽量で環境に優しいですが消臭力に差があります。シリカゲル系は消臭力が高く少量で長持ちします。猫によって砂の感触の好みがあり、突然の変更は排泄を拒否するリスクがあります。新しい砂を試す際は既存の砂と混ぜながら徐々に移行しましょう。',
    faq: [
      { q: '猫砂はどのくらいの頻度で全交換すればいいですか？', a: '鉱物系・木質系は2〜4週間に1回の全交換が目安です。シリカゲル系は1〜2ヶ月に1回程度。日々の固まりは毎日除去し、臭いが気になり始めたら全交換のサインです。頭数が多いほど交換頻度を上げる必要があります。' },
      { q: '猫砂の誤飲は大丈夫ですか？', a: 'グルーミング時に少量を摂取することがありますが、大量摂取は危険です。子猫や好奇心旺盛な猫には天然素材（おから・木質系）の猫砂を選ぶと安心です。シリカゲル系は誤飲した場合は要注意です。' },
      { q: '猫砂の飛び散りを防ぐ方法はありますか？', a: 'ふち付きのトイレや専用マットを組み合わせると効果的です。砂自体を粒が大きめのものに変えることも飛び散り防止に有効です。高壁トイレや上から入るタイプのトイレも飛び散りを最小限に抑えられます。' },
    ],
  },
  'pet-insurance': {
    intro: '猫のペット保険は、予期せぬ病気や怪我の治療費を補償する重要なリスク管理手段です。猫の平均寿命が伸び（室内飼い平均15〜16年）、医療技術の高度化により治療費も上昇傾向にある現在、ペット保険の必要性は年々高まっています。特に慢性腎臓病・糖尿病・心臓病といった生活習慣病は、長期にわたる通院・投薬が必要となり、年間数十万円の出費になるケースも少なくありません。',
    guide: '猫のペット保険を選ぶ際の比較ポイントは「補償範囲」「補償割合」「保険料」「免責事項」の4点です。通院・入院・手術の全てをカバーするフルカバー型か、入院・手術のみの入院特化型かを確認しましょう。補償割合は50%・70%・90%のプランが一般的で、補償が高いほど保険料も高くなります。また、加入年齢制限・更新制限（終身更新可能かどうか）・既往症の扱いも重要な確認事項です。',
    faq: [
      { q: 'ペット保険はいつ加入するのがベストですか？', a: '若く健康な時期（1〜3歳）に加入するのがベストです。病気になってからでは加入できない（または既往症として除外される）ケースが多く、保険料も若いほど安くなります。特に慢性疾患になりやすいシニア期（7歳〜）前に加入することをおすすめします。' },
      { q: 'ペット保険の保険料の相場はいくらですか？', a: '猫の場合、0〜5歳で月1,500〜3,000円、6〜10歳で月2,500〜5,000円、11歳以上で月4,000〜8,000円程度が目安です。補償割合・プランによって大きく変わります。' },
      { q: 'ペット保険は本当に必要ですか？', a: '猫の一生涯にかかる医療費は平均100〜200万円以上と言われています。特に慢性疾患や癌の治療では数十万円規模の出費になることも。貯蓄で対応できる方は不要ですが、急な高額医療費に備えたい場合はペット保険が有効です。' },
    ],
  },
  'cat-toy': {
    intro: '猫のおもちゃは、室内飼いの猫にとって運動不足解消・ストレス発散・狩猟本能の充足に欠かせないアイテムです。猫じゃらし・電動おもちゃ・トンネル・爪とぎなど多様な種類があり、猫の年齢・性格・体力に合わせて選ぶことで、心身ともに健康な生活をサポートできます。',
    guide: '猫のおもちゃを選ぶ際のポイントは「安全性」「楽しさ」「耐久性」の3点です。素材は天然素材や安全な樹脂製を選び、飲み込めそうな小部品がないかを確認しましょう。電動おもちゃはほったらかし遊びができて便利ですが、監視なしでの長時間使用は避けましょう。猫によって好みが異なるため、複数種類を試して最もエンゲージするタイプを見つけることが大切です。',
    faq: [
      { q: '猫のおもちゃはどのくらいの頻度で交換すべきですか？', a: '破損・劣化が見られたら即交換が原則です。特にひも状・羽根タイプは定期的に交換し、誤飲リスクを防ぎましょう。猫の興味が薄れたら新しいおもちゃを導入するローテーション管理も有効です。' },
      { q: '猫が一人で遊べるおもちゃはありますか？', a: '自動レーザーポインター・電動魚おもちゃ・キャットトンネルは一人遊びに適しています。ただし、飼い主との共同遊びも重要です。1日10〜15分は猫じゃらしなどで一緒に遊ぶ時間を作りましょう。' },
      { q: '猫が遊んでくれない場合はどうすれば良いですか？', a: '猫には個性があり、好みのおもちゃタイプが異なります。食事前の空腹時に試したり、マタタビを少量付けると興味を引くことがあります。' },
    ],
  },
  'cat-carrier': {
    intro: '猫用キャリーは、通院・引っ越し・緊急避難など様々な場面で愛猫の安全な移動を確保する必須アイテムです。ハードタイプ・ソフトタイプ・バックパックタイプなど多様な形状があり、使用シーン・猫のサイズ・飼い主のライフスタイルに合わせた選択が重要です。',
    guide: '猫用キャリーを選ぶ際の重要ポイントは「猫のサイズへの適合」「出し入れのしやすさ」「安全性」「持ち運びやすさ」の4点です。猫が立ち上がれる高さと、向きを変えられる広さが必要です。通院時は上部開口タイプが診察しやすく獣医師にも好まれます。普段からキャリーを部屋に置いて慣れさせることで、移動時のストレスを大幅に軽減できます。',
    faq: [
      { q: '猫がキャリーを嫌がる場合の対処法は？', a: '普段からキャリーを部屋に開いた状態で設置し、中でくつろげる環境を作りましょう。フェリウェイをスプレーしたり、お気に入りのブランケットを入れると安心感が増します。2〜4週間かけて慣れさせることが成功のカギです。' },
      { q: 'キャリーはハードとソフトどちらが良いですか？', a: 'ハードタイプは安全性・耐久性が高く衝撃から守れます。ソフトタイプは軽量・コンパクトで持ち運びやすいです。通院・車移動にはハード、電車・徒歩移動にはソフトが向いています。' },
      { q: '飛行機への持ち込みはできますか？', a: '機内持ち込みは航空会社によって規定が異なります。Sherpaなど機内持ち込み対応を明記したキャリーを使用し、事前に航空会社に確認しましょう。' },
    ],
  },
};


export async function generateMetadata({ params }: { params: Promise<{ name: string }> }): Promise<Metadata> {
  const { name } = await params;
  const cat = CATEGORIES.find(c => c.slug === name);
  if (!cat) return {};
  return {
    title: `${cat.name}おすすめランキング2024【猫暮らしスコアで徹底比較】`,
    description: `${cat.description}2024年最新版・獣医師監修の猫暮らしスコアで${cat.name}を比較。選び方ガイド・よくある質問も掲載。`,
    alternates: { canonical: `https://neko-lab.vercel.app/category/${cat.slug}` },
    openGraph: {
      title: `${cat.name}おすすめランキング2024`,
      description: cat.description,
      url: `https://neko-lab.vercel.app/category/${cat.slug}`,
      images: [{ url: '/og-image.png' }],
    },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;
  const cat = CATEGORIES.find(c => c.slug === name);
  if (!cat) notFound();

  const products = getProducts(cat.slug);
  const sorted = [...products].sort((a, b) => (b.score ?? 0) - (a.score ?? 0));
  const seo = SEO_TEXT[cat.slug];

  // JSON-LD
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://neko-lab.vercel.app' },
      { '@type': 'ListItem', position: 2, name: cat.name, item: `https://neko-lab.vercel.app/category/${cat.slug}` },
    ],
  };

  const itemListLd = sorted.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${cat.name}おすすめランキング`,
    description: cat.description,
    url: `https://neko-lab.vercel.app/category/${cat.slug}`,
    itemListElement: sorted.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Product',
        name: p.name,
        brand: { '@type': 'Brand', name: p.brand },
        description: p.description,
        offers: { '@type': 'Offer', price: p.price, priceCurrency: 'JPY', availability: 'https://schema.org/InStock', url: p.amazonUrl ?? '' },
        aggregateRating: p.score ? { '@type': 'AggregateRating', ratingValue: (p.score / 20).toFixed(1), bestRating: '5', worstRating: '1', ratingCount: Math.floor(p.score * 3.5) } : undefined,
      },
    })),
  } : null;

  const faqLd = seo?.faq ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: seo.faq.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  } : null;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      {itemListLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />}
      {faqLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />}

      {/* パンくず */}
      <nav aria-label="パンくずリスト" className="text-xs text-[#a8a29e] mb-6">
        <a href="/" className="hover:text-[#2d5a3d]">ホーム</a>
        <span className="mx-2">/</span>
        <span className="text-[#44403c]">{cat.name}</span>
      </nav>

      {/* H1 */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-4xl">{cat.icon}</span>
          <h1 className="text-2xl md:text-3xl font-black text-[#1c1917]">
            {cat.name}おすすめランキング2024
          </h1>
        </div>
        {seo && <p className="text-[#57534e] leading-relaxed text-sm">{seo.intro}</p>}
      </div>

      {/* 商品ランキング */}
      {sorted.length > 0 ? (
        <>
          <h2 className="text-xl font-black text-[#1c1917] mb-5">🏆 猫暮らしスコア ランキング</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {sorted.map((p, i) => <ProductCard key={p.id} product={p} rank={i + 1} />)}
          </div>

          {/* 比較テーブル */}
          <h2 className="text-xl font-black text-[#1c1917] mb-4">📊 詳細比較テーブル</h2>
          <p className="text-sm text-[#78716c] mb-4">スコア順・価格順で並び替えて比較できます。</p>
          <ComparisonTable products={sorted} />
        </>
      ) : (
        <div className="text-center py-20 text-[#a8a29e]">
          <p className="text-4xl mb-4">🐱</p>
          <p className="font-bold">このカテゴリのデータは準備中です。</p>
          <p className="text-sm mt-2">もうしばらくお待ちください。</p>
        </div>
      )}

      {/* 選び方ガイド */}
      {seo && (
        <div className="mt-14">
          <h2 className="text-xl font-black text-[#1c1917] mb-4">{cat.name}の選び方</h2>
          <div className="bg-[#f5f0eb] rounded-2xl p-6 text-sm text-[#44403c] leading-relaxed">
            {seo.guide}
          </div>
        </div>
      )}

      {/* FAQ */}
      {seo?.faq && (
        <div className="mt-14">
          <h2 className="text-xl font-black text-[#1c1917] mb-5">よくある質問</h2>
          <div className="space-y-4">
            {seo.faq.map((f, i) => (
              <div key={i} className="bg-white border border-[#ede9e3] rounded-xl p-5">
                <p className="font-bold text-[#2d5a3d] mb-2 text-sm">Q. {f.q}</p>
                <p className="text-sm text-[#57534e] leading-relaxed">A. {f.a}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 関連カテゴリ */}
      <div className="mt-14">
        <h2 className="text-xl font-black text-[#1c1917] mb-5">他のカテゴリも見る</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {CATEGORIES.filter(c => c.slug !== cat.slug).map(c => (
            <a key={c.id} href={`/category/${c.slug}`}
              className="bg-white border border-[#ede9e3] hover:border-[#2d5a3d] rounded-xl p-4 text-center transition-all group">
              <div className="text-3xl mb-2">{c.icon}</div>
              <p className="text-xs font-bold text-[#44403c] group-hover:text-[#2d5a3d]">{c.name}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
