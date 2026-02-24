import type { Product } from '@/lib/products';
import { calcScore } from '@/lib/scoring';

const raw: Omit<Product, 'score'>[] = [
  {
    id: 'lavviebot-s', slug: 'lavviebot-s', name: 'Lavviebot S 自動猫トイレ', brand: 'PetKit',
    category: 'auto-toilet', price: 49800, priceUnit: '1台', image: '/images/lavviebot.jpg',
    amazonUrl: 'https://www.amazon.co.jp/dp/B09G67F9QX',
    description: 'スマートセンサーで猫を検知し自動クリーニング。アプリで排泄記録・健康モニタリングが可能。超静音モーターでおびえる猫も安心。OAK型多頭対応モデル。',
    specs: { '対応体重': '1.5〜8kg', '容量': '8L', '対応猫砂': '鉱物系（固まるタイプ）', '騒音': '40dB以下', 'アプリ': 'iOS/Android' },
    scoreInput: { ease_of_use: 90, odor_control: 88, price_value: 65, reviews: 88, ingredients: 85 },
    tags: ['アプリ連携', '健康モニタリング', '超静音', '多頭対応'],
  },
  {
    id: 'catlink-scooper', slug: 'catlink-scooper', name: 'CATLINK LUXURY PRO X', brand: 'CATLINK',
    category: 'auto-toilet', price: 58000, priceUnit: '1台', image: '/images/catlink.jpg',
    amazonUrl: 'https://www.amazon.co.jp/dp/B09PXNTM4Q',
    description: '業界最大級の内部空間で大型猫にも対応。デュアルセンサーで安全性抜群。WiFi接続でスマホから使用状況をリアルタイム確認。消臭ファン搭載で臭い対策も万全。',
    specs: { '対応体重': '2〜10kg', '容量': '12L', '対応猫砂': '鉱物系', '騒音': '45dB以下', 'WiFi': '対応' },
    scoreInput: { ease_of_use: 88, odor_control: 92, price_value: 55, reviews: 85, ingredients: 88 },
    tags: ['大型猫対応', 'WiFi', '大容量', '消臭ファン'],
  },
  {
    id: 'pura-max', slug: 'pura-max', name: 'Pura MAX 2 自動猫トイレ', brand: 'Pura',
    category: 'auto-toilet', price: 42800, priceUnit: '1台', image: '/images/pura-max.jpg',
    amazonUrl: 'https://www.amazon.co.jp/s?k=pura+max+%E8%87%AA%E5%8B%95%E7%8C%AB%E3%83%88%E3%82%A4%E3%83%AC',
    description: '多頭飼い（3〜5匹）対応の大容量モデル。AIで個体識別し各猫の健康データを管理。汚物処分ボックスの交換が簡単で清潔を保ちやすい。',
    specs: { '対応体重': '2〜9kg', '容量': '15L', '対応猫砂': '鉱物系', 'AI識別': '5匹まで', 'ボックス交換': '月1〜2回' },
    scoreInput: { ease_of_use: 92, odor_control: 85, price_value: 70, reviews: 90, ingredients: 80 },
    tags: ['多頭飼い向け', 'AI個体識別', '大容量', '操作簡単'],
  },
  {
    id: 'petree-arc', slug: 'petree-arc', name: 'Petree Lite 3.0 自動猫トイレ', brand: 'Petree',
    category: 'auto-toilet', price: 28000, priceUnit: '1台', image: '/images/petree.jpg',
    amazonUrl: 'https://www.amazon.co.jp/s?k=petree+%E8%87%AA%E5%8B%95+%E7%8C%AB%E3%83%88%E3%82%A4%E3%83%AC',
    description: '全自動トイレのエントリーモデルとして最もコスパが高い選択肢。本体価格を抑えながらも基本機能は充実。汎用猫砂対応でランニングコストが低い。',
    specs: { '対応体重': '2〜8kg', '容量': '7L', '対応猫砂': '汎用鉱物系', '騒音': '45dB以下', 'センサー': '赤外線' },
    scoreInput: { ease_of_use: 80, odor_control: 78, price_value: 88, reviews: 82, ingredients: 72 },
    tags: ['コスパ最高', '汎用猫砂対応', 'エントリーモデル', '低ランニングコスト'],
  },
  {
    id: 'little-robot-4', slug: 'litter-robot-4', name: 'Litter-Robot 4', brand: 'Whisker',
    category: 'auto-toilet', price: 89800, priceUnit: '1台', image: '/images/litter-robot.jpg',
    amazonUrl: 'https://www.amazon.co.jp/s?k=litter+robot+4',
    description: '全自動猫トイレの最高峰。グローブ型でどんな姿勢でも使いやすく、AIでウェイトセンサーによる健康追跡が可能。米国で最も売れた自動猫トイレ。保証2年。',
    specs: { '対応体重': '2.3〜11kg', '容量': '13L', '対応猫砂': 'ほぼ全種', '騒音': '40dB以下', '保証': '2年間' },
    scoreInput: { ease_of_use: 95, odor_control: 95, price_value: 45, reviews: 92, ingredients: 95 },
    tags: ['最高峰', 'グローブ型', '全砂対応', '2年保証', '米国No.1'],
  },
];

export const AUTO_TOILET_PRODUCTS: Product[] = raw.map(p => ({
  ...p,
  score: calcScore(p.scoreInput, 'auto-toilet'),
}));
