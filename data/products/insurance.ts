import type { Product } from '@/lib/products';
import { calcScore } from '@/lib/scoring';

const raw: Omit<Product, 'score'>[] = [
  {
    id: 'anicom-f', slug: 'anicom-f', name: 'アニコム 損保 どうぶつ健保ふぁみりぃ', brand: 'アニコム損保',
    category: 'insurance', price: 2390, priceUnit: '月額（0〜4歳・猫）', image: '/images/anicom.jpg',
    amazonUrl: 'https://www.anicom-sompo.co.jp/',
    description: '日本最大規模のペット保険。診察費・手術費・入院費を70%補償。年間補償限度額なし（1回あたり上限あり）。全国の動物病院9,000院以上で窓口精算可能。',
    specs: { '補償割合': '50% or 70%', '年間補償': '上限なし（回/日あたり制限あり）', '免責': '0円', '待機期間': '30日（傷病）' },
    scoreInput: { coverage: 88, premium: 78, deductible: 95, reviews: 90 },
    tags: ['窓口精算', '業界最大手', '免責0円', '全国9000院'],
  },
  {
    id: 'petfirst-gold', slug: 'pet-medical', name: 'ペット＆ファミリー 超保険 ゴールド', brand: 'ペット＆ファミリー',
    category: 'insurance', price: 1980, priceUnit: '月額（1歳・猫）', image: '/images/petfamily.jpg',
    amazonUrl: 'https://www.petfamily.co.jp/',
    description: '補償割合70%で月額保険料が業界最安水準。年間補償金額180万円まで対応。腫瘍・がん治療にも対応し、高額治療にも安心の保険設計。',
    specs: { '補償割合': '70%', '年間上限': '180万円', '免責': '5,000円/事故', '待機期間': '60日（腫瘍）' },
    scoreInput: { coverage: 85, premium: 90, deductible: 72, reviews: 82 },
    tags: ['低保険料', '高補償', 'がん対応', 'コスパ重視'],
  },
  {
    id: 'ipet-platinum', slug: 'ipet-platinum', name: 'アイペット損保 うちの子 プラチナ', brand: 'アイペット損保',
    category: 'insurance', price: 3200, priceUnit: '月額（0〜4歳・猫）', image: '/images/ipet.jpg',
    amazonUrl: 'https://www.ipet-ins.com/',
    description: '補償割合90%の業界最高水準。年間補償上限120万円。全国の提携動物病院で窓口精算対応。通院・入院・手術すべて補償する安心フルカバープラン。',
    specs: { '補償割合': '90%', '年間上限': '120万円', '免責': '0円', '待機期間': '30日（傷病）' },
    scoreInput: { coverage: 96, premium: 60, deductible: 95, reviews: 88 },
    tags: ['90%補償', 'フルカバー', '窓口精算', '最高補償割合'],
  },
  {
    id: 'docter-pet', slug: 'docomo-pet', name: 'ドコモ ドクターペット保険', brand: 'ドコモ',
    category: 'insurance', price: 1540, priceUnit: '月額（0〜6歳・猫）', image: '/images/docomo-pet.jpg',
    amazonUrl: 'https://www.d-card.jp/service/docomo_pet/',
    description: 'dポイントが貯まるドコモのペット保険。シンプルな70%補償プランで申し込みが簡単。ドコモユーザーにお得な割引あり。通院・入院・手術すべてカバー。',
    specs: { '補償割合': '70%', '年間上限': '70万円', '免責': '0円', '特典': 'dポイント積算' },
    scoreInput: { coverage: 80, premium: 88, deductible: 90, reviews: 78 },
    tags: ['dポイント', '低保険料', 'シンプル', 'ドコモユーザーお得'],
  },
  {
    id: 'rakuten-pet', slug: 'rakuten-pet', name: '楽天ペット保険 スーパーペット保険', brand: '楽天インシュアランス',
    category: 'insurance', price: 2100, priceUnit: '月額（0〜5歳・猫）', image: '/images/rakuten-pet.jpg',
    amazonUrl: 'https://pet.rakuten-insurance.co.jp/',
    description: '楽天ポイントが貯まるペット保険。補償割合70%、年間100万円まで対応。楽天市場でのペット用品購入と組み合わせると実質コストを大幅に削減可能。',
    specs: { '補償割合': '50% or 70%', '年間上限': '100万円', '免責': '0円', '特典': '楽天ポイント' },
    scoreInput: { coverage: 82, premium: 82, deductible: 90, reviews: 80 },
    tags: ['楽天ポイント', '楽天ユーザー向け', 'バランス型', 'ECと連携'],
  },
];

export const INSURANCE_PRODUCTS: Product[] = raw.map(p => ({
  ...p,
  score: calcScore(p.scoreInput, 'insurance'),
}));
