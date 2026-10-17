export type PartOfSpeech =
  | 'subject'
  | 'verb'
  | 'object'
  | 'adjective'
  | 'adverb';

export interface TrainWordTile {
  id: string;
  word: string;
  type: PartOfSpeech;
  thai: string;
  emoji: string;
}

export interface TrainSentenceChallenge {
  id: string;
  level: number;
  levelTitle: string;
  thaiMeaning: string;
  requiredSlots: PartOfSpeech[];
  correctSentence: string;
  tiles: TrainWordTile[];
  animationEmoji: string;
  explanationTh: string;
}

export interface TimeMachineVerb {
  id: string;
  base: string;
  thai: string;
  emoji: string;
  past: {
    text: string;
    note: string;
    isIrregular: boolean;
    sentence: string;
    sentenceTh: string;
  };
  presentSimple: {
    singular: string;
    plural: string;
    note: string;
    sentence: string;
    sentenceTh: string;
  };
  presentContinuous: {
    text: string;
    note: string;
    sentence: string;
    sentenceTh: string;
  };
  future: {
    text: string;
    note: string;
    sentence: string;
    sentenceTh: string;
  };
}

export interface HungrySChallenge {
  id: string;
  subject: string;
  subjectTh: string;
  subjectEmoji: string;
  verbBase: string;
  verbBaseTh: string;
  correctVerb: string;
  needsS: boolean;
  fullSentence: string;
  fullSentenceTh: string;
  reasonTh: string;
}

export interface DetectiveCase {
  id: string;
  caseTitle: string;
  glitchedSentence: string;
  brokenWord: string;
  options: string[];
  correctWord: string;
  fixedSentence: string;
  fixedSentenceTh: string;
  ruleExplanationTh: string;
  rewardBadge: string;
}

export interface GrammarSuperhero {
  id: string;
  name: string;
  englishRole: string;
  thaiName: string;
  avatar: string;
  themeColor: string;
  superpowerTh: string;
  examples: { word: string; thai: string }[];
  funFactTh: string;
}

// =========================================================================
// 1. TRAIN SENTENCE BUILDER CHALLENGES (25 ขบวนรถไฟต่อประโยค)
// =========================================================================
export const TRAIN_CHALLENGES: TrainSentenceChallenge[] = [
  // --- LEVEL 1: Subject + Verb (หัวรถจักร + ตู้เครื่องยนต์) ---
  {
    id: 'train_1',
    level: 1,
    levelTitle: 'Lv.1: หัวรถจักร + ตู้เครื่องยนต์ (Subject + Verb)',
    thaiMeaning: 'กระต่ายน้อยกระโดด',
    requiredSlots: ['subject', 'verb'],
    correctSentence: 'The rabbit jumps.',
    animationEmoji: '🐰💨',
    explanationTh: 'ประโยคภาษาอังกฤษอย่างง่ายที่สุดต้องมี "ใคร (หัวรถจักร)" + "ทำอะไร (เครื่องยนต์)" เสมอ!',
    tiles: [
      { id: 't1_sub', word: 'The rabbit', type: 'subject', thai: 'กระต่ายน้อย', emoji: '🐰' },
      { id: 't1_verb', word: 'jumps', type: 'verb', thai: 'กระโดด', emoji: '🦘' },
      { id: 't1_dist1', word: 'a carrot', type: 'object', thai: 'แครอท', emoji: '🥕' },
      { id: 't1_dist2', word: 'quickly', type: 'adverb', thai: 'อย่างรวดเร็ว', emoji: '⚡' },
    ],
  },
  {
    id: 'train_2',
    level: 1,
    levelTitle: 'Lv.1: หัวรถจักร + ตู้เครื่องยนต์ (Subject + Verb)',
    thaiMeaning: 'เหล่านกบินบนท้องฟ้า',
    requiredSlots: ['subject', 'verb'],
    correctSentence: 'Birds fly.',
    animationEmoji: '🕊️🌤️',
    explanationTh: 'นกหลายตัว (Birds) ประธานเป็นพหูพจน์ กริยาไม่ต้องเติม S บินฉิวไปเลย!',
    tiles: [
      { id: 't2_sub', word: 'Birds', type: 'subject', thai: 'เหล่านก', emoji: '🐦' },
      { id: 't2_verb', word: 'fly', type: 'verb', thai: 'บิน', emoji: '🪽' },
      { id: 't2_dist1', word: 'sweet', type: 'adjective', thai: 'หวาน', emoji: '🍭' },
      { id: 't2_dist2', word: 'water', type: 'object', thai: 'น้ำ', emoji: '💧' },
    ],
  },
  {
    id: 'train_3',
    level: 1,
    levelTitle: 'Lv.1: หัวรถจักร + ตู้เครื่องยนต์ (Subject + Verb)',
    thaiMeaning: 'ปลาว่ายน้ำในลำธาร',
    requiredSlots: ['subject', 'verb'],
    correctSentence: 'Fish swim.',
    animationEmoji: '🐟🌊',
    explanationTh: 'ปลาว่ายน้ำเป็นธรรมชาติ Fish + swim สองตู้ขบวนก็เป็นประโยคที่สมบูรณ์ได้!',
    tiles: [
      { id: 't3_sub', word: 'Fish', type: 'subject', thai: 'ปลา', emoji: '🐟' },
      { id: 't3_verb', word: 'swim', type: 'verb', thai: 'ว่ายน้ำ', emoji: '🏊' },
      { id: 't3_dist1', word: 'delicious', type: 'adjective', thai: 'อร่อย', emoji: '😋' },
    ],
  },
  {
    id: 'train_4',
    level: 1,
    levelTitle: 'Lv.1: หัวรถจักร + ตู้เครื่องยนต์ (Subject + Verb)',
    thaiMeaning: 'ดวงอาทิตย์ส่องแสงเจิดจ้า',
    requiredSlots: ['subject', 'verb'],
    correctSentence: 'The sun shines.',
    animationEmoji: '☀️✨',
    explanationTh: 'ดวงอาทิตย์มีดวงเดียว (The sun) กริยา shines ต้องเติม S เสมอ!',
    tiles: [
      { id: 't4_sub', word: 'The sun', type: 'subject', thai: 'ดวงอาทิตย์', emoji: '☀️' },
      { id: 't4_verb', word: 'shines', type: 'verb', thai: 'ส่องแสง', emoji: '✨' },
      { id: 't4_dist1', word: 'sky', type: 'object', thai: 'ท้องฟ้า', emoji: '🌌' },
    ],
  },

  // --- LEVEL 2: Subject + Verb + Object (ขบวน 3 ตู้ SVO) ---
  {
    id: 'train_5',
    level: 2,
    levelTitle: 'Lv.2: ขบวน 3 ตู้ (Subject + Verb + Object)',
    thaiMeaning: 'เจ้าเหมียวกินปลาตัวโต',
    requiredSlots: ['subject', 'verb', 'object'],
    correctSentence: 'The cat eats fish.',
    animationEmoji: '🐱🐟',
    explanationTh: 'เจ้าเหมียว (ใคร) + กิน (เครื่องยนต์) + ปลา (ตู้บรรทุกสินค้าที่โดนกิน)!',
    tiles: [
      { id: 't5_sub', word: 'The cat', type: 'subject', thai: 'แมวเหมียว', emoji: '🐱' },
      { id: 't5_verb', word: 'eats', type: 'verb', thai: 'กิน', emoji: '🍽️' },
      { id: 't5_obj', word: 'fish', type: 'object', thai: 'ปลา', emoji: '🐟' },
      { id: 't5_dist1', word: 'loudly', type: 'adverb', thai: 'เสียงดัง', emoji: '📢' },
    ],
  },
  {
    id: 'train_6',
    level: 2,
    levelTitle: 'Lv.2: ขบวน 3 ตู้ (Subject + Verb + Object)',
    thaiMeaning: 'เด็กผู้หญิงอ่านหนังสือนิทาน',
    requiredSlots: ['subject', 'verb', 'object'],
    correctSentence: 'The girl reads a book.',
    animationEmoji: '👧📖',
    explanationTh: 'The girl (คนอ่าน) + reads (กริยา) + a book (หนังสือที่โดนอ่าน)',
    tiles: [
      { id: 't6_sub', word: 'The girl', type: 'subject', thai: 'เด็กหญิง', emoji: '👧' },
      { id: 't6_verb', word: 'reads', type: 'verb', thai: 'อ่าน', emoji: '👀' },
      { id: 't6_obj', word: 'a book', type: 'object', thai: 'หนังสือหนึ่งเล่ม', emoji: '📚' },
      { id: 't6_dist1', word: 'sleeps', type: 'verb', thai: 'นอนหลับ', emoji: '😴' },
    ],
  },
  {
    id: 'train_7',
    level: 2,
    levelTitle: 'Lv.2: ขบวน 3 ตู้ (Subject + Verb + Object)',
    thaiMeaning: 'เจ้าตูบวิ่งคาบลูกบอล',
    requiredSlots: ['subject', 'verb', 'object'],
    correctSentence: 'The dog catches a ball.',
    animationEmoji: '🐶🎾',
    explanationTh: 'The dog + catches + a ball! ตู้สินค้าคือลูกบอลที่โดนคาบ',
    tiles: [
      { id: 't7_sub', word: 'The dog', type: 'subject', thai: 'สุนัข', emoji: '🐶' },
      { id: 't7_verb', word: 'catches', type: 'verb', thai: 'คว้า/คาบ', emoji: '🎾' },
      { id: 't7_obj', word: 'a ball', type: 'object', thai: 'ลูกบอล', emoji: '⚽' },
      { id: 't7_dist1', word: 'sleepy', type: 'adjective', thai: 'ง่วงนอน', emoji: '🥱' },
    ],
  },
  {
    id: 'train_8',
    level: 2,
    levelTitle: 'Lv.2: ขบวน 3 ตู้ (Subject + Verb + Object)',
    thaiMeaning: 'เด็กๆ ดื่มนมสดแก้วใหญ่',
    requiredSlots: ['subject', 'verb', 'object'],
    correctSentence: 'Children drink milk.',
    animationEmoji: '🧒🥛',
    explanationTh: 'Children (เด็กหลายคน) กริยา drink ไม่ต้องเติม S!',
    tiles: [
      { id: 't8_sub', word: 'Children', type: 'subject', thai: 'เด็กๆ', emoji: '🧒' },
      { id: 't8_verb', word: 'drink', type: 'verb', thai: 'ดื่ม', emoji: '🥛' },
      { id: 't8_obj', word: 'milk', type: 'object', thai: 'นมสด', emoji: '🍶' },
      { id: 't8_dist1', word: 'slowly', type: 'adverb', thai: 'อย่างช้าๆ', emoji: '🐢' },
    ],
  },
  {
    id: 'train_9',
    level: 2,
    levelTitle: 'Lv.2: ขบวน 3 ตู้ (Subject + Verb + Object)',
    thaiMeaning: 'เขาปั่นจักรยานสีแดง',
    requiredSlots: ['subject', 'verb', 'object'],
    correctSentence: 'He rides a bicycle.',
    animationEmoji: '👦🚲',
    explanationTh: 'He (คนเดียว) + rides (เติม S) + a bicycle (กรรมที่โดนปั่น)',
    tiles: [
      { id: 't9_sub', word: 'He', type: 'subject', thai: 'เขา', emoji: '👦' },
      { id: 't9_verb', word: 'rides', type: 'verb', thai: 'ขี่/ปั่น', emoji: '🚴' },
      { id: 't9_obj', word: 'a bicycle', type: 'object', thai: 'จักรยาน', emoji: '🚲' },
      { id: 't9_dist1', word: 'tree', type: 'object', thai: 'ต้นไม้', emoji: '🌳' },
    ],
  },

  // --- LEVEL 3: Adjective แต้มสีสัน (Adjective + Subject + Verb + Object) ---
  {
    id: 'train_10',
    level: 3,
    levelTitle: 'Lv.3: ตู้แต้มสีสัน (+ Adjective คุณศัพท์)',
    thaiMeaning: 'มังกรสีแดงบินอย่างรวดเร็ว',
    requiredSlots: ['adjective', 'subject', 'verb', 'adverb'],
    correctSentence: 'The red dragon flies quickly.',
    animationEmoji: '🐲🔥💨',
    explanationTh: 'Adjective "The red" มานำหน้านาม เพื่อบอกลักษณะของมังกรว่าสีอะไร!',
    tiles: [
      { id: 't10_adj', word: 'The red', type: 'adjective', thai: 'สีแดง', emoji: '🔴' },
      { id: 't10_sub', word: 'dragon', type: 'subject', thai: 'มังกร', emoji: '🐉' },
      { id: 't10_verb', word: 'flies', type: 'verb', thai: 'บิน', emoji: '🚀' },
      { id: 't10_adv', word: 'quickly', type: 'adverb', thai: 'อย่างรวดเร็ว', emoji: '⚡' },
      { id: 't10_dist1', word: 'pizza', type: 'object', thai: 'พิซซ่า', emoji: '🍕' },
    ],
  },
  {
    id: 'train_11',
    level: 3,
    levelTitle: 'Lv.3: ตู้แต้มสีสัน (+ Adjective คุณศัพท์)',
    thaiMeaning: 'แพนด้าผู้หิวโหยชอบกินต้นไผ่',
    requiredSlots: ['adjective', 'subject', 'verb', 'object'],
    correctSentence: 'The hungry panda eats bamboo.',
    animationEmoji: '🐼🎋😋',
    explanationTh: '"The hungry" ขยายแพนด้าว่ากำลังหิวโซ ตามด้วยกริยา eats และกรรม bamboo',
    tiles: [
      { id: 't11_adj', word: 'The hungry', type: 'adjective', thai: 'ผู้หิวโหย', emoji: '🤤' },
      { id: 't11_sub', word: 'panda', type: 'subject', thai: 'แพนด้า', emoji: '🐼' },
      { id: 't11_verb', word: 'eats', type: 'verb', thai: 'กิน', emoji: '🎋' },
      { id: 't11_obj', word: 'bamboo', type: 'object', thai: 'ต้นไผ่', emoji: '🎍' },
      { id: 't11_dist1', word: 'blue', type: 'adjective', thai: 'สีฟ้า', emoji: '🔷' },
    ],
  },
  {
    id: 'train_12',
    level: 3,
    levelTitle: 'Lv.3: ตู้แต้มสีสัน (+ Adjective คุณศัพท์)',
    thaiMeaning: 'อัศวินผู้กล้าหาญถือดาบเล่มใหญ่',
    requiredSlots: ['adjective', 'subject', 'verb', 'object'],
    correctSentence: 'The brave knight holds a sword.',
    animationEmoji: '🛡️⚔️👑',
    explanationTh: '"The brave" บอกนิสัยอัศวินว่ากล้าหาญ ถือดาบ a sword!',
    tiles: [
      { id: 't12_adj', word: 'The brave', type: 'adjective', thai: 'ผู้กล้าหาญ', emoji: '🦁' },
      { id: 't12_sub', word: 'knight', type: 'subject', thai: 'อัศวิน', emoji: '🤺' },
      { id: 't12_verb', word: 'holds', type: 'verb', thai: 'ถือ', emoji: '✊' },
      { id: 't12_obj', word: 'a sword', type: 'object', thai: 'ดาบคมกริบ', emoji: '⚔️' },
      { id: 't12_dist1', word: 'runs', type: 'verb', thai: 'วิ่ง', emoji: '🏃' },
    ],
  },
  {
    id: 'train_13',
    level: 3,
    levelTitle: 'Lv.3: ตู้แต้มสีสัน (+ Adjective คุณศัพท์)',
    thaiMeaning: 'ลิงน้อยน่ารักปีนต้นไม้สูงใหญ่',
    requiredSlots: ['adjective', 'subject', 'verb', 'object'],
    correctSentence: 'Cute monkeys climb tall trees.',
    animationEmoji: '🐒🌴',
    explanationTh: 'Cute (น่ารัก) ขยาย monkeys และ tall (สูง) ขยาย trees!',
    tiles: [
      { id: 't13_adj', word: 'Cute', type: 'adjective', thai: 'น่ารัก', emoji: '🥰' },
      { id: 't13_sub', word: 'monkeys', type: 'subject', thai: 'ลิงหลายตัว', emoji: '🐒' },
      { id: 't13_verb', word: 'climb', type: 'verb', thai: 'ปีนป่าย', emoji: '🧗' },
      { id: 't13_obj', word: 'tall trees', type: 'object', thai: 'ต้นไม้สูง', emoji: '🌴' },
      { id: 't13_dist1', word: 'sleep', type: 'verb', thai: 'นอน', emoji: '😴' },
    ],
  },

  // --- LEVEL 4: SVO + Adverb (ขบวนติดจรวดเทอร์โบ) ---
  {
    id: 'train_14',
    level: 4,
    levelTitle: 'Lv.4: ขบวนติดจรวดเทอร์โบ (+ Adverb)',
    thaiMeaning: 'เด็กผู้ชายเตะฟุตบอลอย่างมีความสุข',
    requiredSlots: ['subject', 'verb', 'object', 'adverb'],
    correctSentence: 'The boy plays football happily.',
    animationEmoji: '👦⚽✨',
    explanationTh: 'ต่อท่อไอเสียติดเทอร์โบ Adverb "happily" ไว้ท้ายประโยคเพื่อบอกว่าเล่นด้วยอารมณ์ไหน!',
    tiles: [
      { id: 't14_sub', word: 'The boy', type: 'subject', thai: 'เด็กชาย', emoji: '👦' },
      { id: 't14_verb', word: 'plays', type: 'verb', thai: 'เล่น', emoji: '🏃' },
      { id: 't14_obj', word: 'football', type: 'object', thai: 'ฟุตบอล', emoji: '⚽' },
      { id: 't14_adv', word: 'happily', type: 'adverb', thai: 'อย่างมีความสุข', emoji: '🥳' },
      { id: 't14_dist1', word: 'yesterday', type: 'adverb', thai: 'เมื่อวาน', emoji: '📅' },
    ],
  },
  {
    id: 'train_15',
    level: 4,
    levelTitle: 'Lv.4: ขบวนติดจรวดเทอร์โบ (+ Adverb)',
    thaiMeaning: 'เต่าน้อยเดินอย่างช้าๆ แต่มั่นคง',
    requiredSlots: ['subject', 'verb', 'adverb'],
    correctSentence: 'The turtle walks slowly.',
    animationEmoji: '🐢🍃',
    explanationTh: 'คำว่า "slowly" เป็น Adverb ที่คอยบอกว่าเดินด้วยความเร็วแบบไหน!',
    tiles: [
      { id: 't15_sub', word: 'The turtle', type: 'subject', thai: 'เต่าน้อย', emoji: '🐢' },
      { id: 't15_verb', word: 'walks', type: 'verb', thai: 'เดิน', emoji: '🚶' },
      { id: 't15_adv', word: 'slowly', type: 'adverb', thai: 'อย่างช้าๆ', emoji: '⏳' },
      { id: 't15_dist1', word: 'flies', type: 'verb', thai: 'บิน', emoji: '🪽' },
    ],
  },
  {
    id: 'train_16',
    level: 4,
    levelTitle: 'Lv.4: ขบวนติดจรวดเทอร์โบ (+ Adverb)',
    thaiMeaning: 'นักร้องร้องเพลงเสียงดังกังวาน',
    requiredSlots: ['subject', 'verb', 'object', 'adverb'],
    correctSentence: 'The singer sings songs loudly.',
    animationEmoji: '🎤🎶📢',
    explanationTh: 'The singer + sings + songs + loudly! ท้ายประโยคบอกระดับเสียงชัดเจน',
    tiles: [
      { id: 't16_sub', word: 'The singer', type: 'subject', thai: 'นักร้อง', emoji: '🧑‍🎤' },
      { id: 't16_verb', word: 'sings', type: 'verb', thai: 'ร้องเพลง', emoji: '🎵' },
      { id: 't16_obj', word: 'songs', type: 'object', thai: 'บทเพลง', emoji: '🎼' },
      { id: 't16_adv', word: 'loudly', type: 'adverb', thai: 'เสียงดัง', emoji: '📢' },
      { id: 't16_dist1', word: 'soft', type: 'adjective', thai: 'นุ่มนวล', emoji: '☁️' },
    ],
  },
  {
    id: 'train_17',
    level: 4,
    levelTitle: 'Lv.4: ขบวนติดจรวดเทอร์โบ (+ Adverb)',
    thaiMeaning: 'เสือชีตาห์วิ่งเร็วมากในทุ่งหญ้า',
    requiredSlots: ['subject', 'verb', 'adverb'],
    correctSentence: 'Cheetahs run very fast.',
    animationEmoji: '🐆💨⚡',
    explanationTh: '"very fast" เป็นกลุ่ม Adverb บอกความเร็วระดับสายฟ้าแลบ!',
    tiles: [
      { id: 't17_sub', word: 'Cheetahs', type: 'subject', thai: 'เสือชีตาห์', emoji: '🐆' },
      { id: 't17_verb', word: 'run', type: 'verb', thai: 'วิ่ง', emoji: '🏃' },
      { id: 't17_adv', word: 'very fast', type: 'adverb', thai: 'เร็วมากๆ', emoji: '⚡' },
      { id: 't17_dist1', word: 'slow', type: 'adjective', thai: 'ช้า', emoji: '🐌' },
    ],
  },

  // --- LEVEL 5: Preposition & Places (ขบวนบอกพิกัดสถานที่และเวลา) ---
  {
    id: 'train_18',
    level: 5,
    levelTitle: 'Lv.5: ขบวนบอกพิกัดสถานที่และเวลา (+ Preposition)',
    thaiMeaning: 'นกตัวน้อยส่งเสียงร้องในยามเช้า',
    requiredSlots: ['subject', 'verb', 'adverb'],
    correctSentence: 'The bird sings in the morning.',
    animationEmoji: '🐦🌅',
    explanationTh: '"in the morning" เป็นคำบอกเวลาว่านกส่งเสียงร้องตอนไหน',
    tiles: [
      { id: 't18_sub', word: 'The bird', type: 'subject', thai: 'นกน้อย', emoji: '🐦' },
      { id: 't18_verb', word: 'sings', type: 'verb', thai: 'ร้องเพลง', emoji: '🎶' },
      { id: 't18_adv', word: 'in the morning', type: 'adverb', thai: 'ในตอนเช้า', emoji: '🌅' },
      { id: 't18_dist1', word: 'eats', type: 'verb', thai: 'กิน', emoji: '🍽️' },
    ],
  },
  {
    id: 'train_19',
    level: 5,
    levelTitle: 'Lv.5: ขบวนบอกพิกัดสถานที่และเวลา (+ Preposition)',
    thaiMeaning: 'กบตัวเขียวนั่งอยู่บนใบบัว',
    requiredSlots: ['subject', 'verb', 'object'],
    correctSentence: 'The frog sits on the leaf.',
    animationEmoji: '🐸🍃💧',
    explanationTh: '"on the leaf" (บนใบบัว) บอกพิกัดว่ากบนั่งอยู่ที่ไหนอย่างชัดเจน',
    tiles: [
      { id: 't19_sub', word: 'The frog', type: 'subject', thai: 'กบตัวเขียว', emoji: '🐸' },
      { id: 't19_verb', word: 'sits', type: 'verb', thai: 'นั่ง', emoji: '🧘' },
      { id: 't19_obj', word: 'on the leaf', type: 'object', thai: 'บนใบบัว', emoji: '🍃' },
      { id: 't19_dist1', word: 'fly', type: 'verb', thai: 'บิน', emoji: '🪽' },
    ],
  },
  {
    id: 'train_20',
    level: 5,
    levelTitle: 'Lv.5: ขบวนบอกพิกัดสถานที่และเวลา (+ Preposition)',
    thaiMeaning: 'ทารกน้อยนอนหลับในเตียงแสนอบอุ่น',
    requiredSlots: ['subject', 'verb', 'object'],
    correctSentence: 'The baby sleeps in the bed.',
    animationEmoji: '👶🛏️🌙',
    explanationTh: 'The baby + sleeps + in the bed บอกตำแหน่งที่นอนหลับอย่างน่ารัก',
    tiles: [
      { id: 't20_sub', word: 'The baby', type: 'subject', thai: 'ทารกน้อย', emoji: '👶' },
      { id: 't20_verb', word: 'sleeps', type: 'verb', thai: 'นอนหลับ', emoji: '💤' },
      { id: 't20_obj', word: 'in the bed', type: 'object', thai: 'ในเตียงนอน', emoji: '🛏️' },
      { id: 't20_dist1', word: 'dances', type: 'verb', thai: 'เต้นระบำ', emoji: '💃' },
    ],
  },
  {
    id: 'train_21',
    level: 5,
    levelTitle: 'Lv.5: ขบวนบอกพิกัดสถานที่และเวลา (+ Preposition)',
    thaiMeaning: 'นักเรียนตั้งใจเรียนภาษาอังกฤษที่โรงเรียน',
    requiredSlots: ['subject', 'verb', 'object', 'adverb'],
    correctSentence: 'Students study English at school.',
    animationEmoji: '🏫👩‍🎓📚',
    explanationTh: 'Students + study + English + at school ขบวน 4 ตู้ครบสูตรชีวิตประจำวัน!',
    tiles: [
      { id: 't21_sub', word: 'Students', type: 'subject', thai: 'นักเรียน', emoji: '🎒' },
      { id: 't21_verb', word: 'study', type: 'verb', thai: 'เรียน', emoji: '📖' },
      { id: 't21_obj', word: 'English', type: 'object', thai: 'วิชาภาษาอังกฤษ', emoji: '🇬🇧' },
      { id: 't21_adv', word: 'at school', type: 'adverb', thai: 'ที่โรงเรียน', emoji: '🏫' },
      { id: 't21_dist1', word: 'cat', type: 'object', thai: 'แมว', emoji: '🐱' },
    ],
  },

  // --- LEVEL 6: Pro Story Sentences (ขบวนเล่าเรื่องระดับโปร) ---
  {
    id: 'train_22',
    level: 6,
    levelTitle: 'Lv.6: ขบวนเล่าเรื่องระดับโปร (Pro Storyteller)',
    thaiMeaning: 'เสี่ยวหลงวาดภาพที่มีสีสันสวยงามสดใส',
    requiredSlots: ['subject', 'verb', 'adjective', 'object'],
    correctSentence: 'Xiao Long paints a colorful picture.',
    animationEmoji: '🐲🎨🖼️',
    explanationTh: 'Xiao Long + paints + a colorful (สีสันสดใส) + picture (รูปภาพ)',
    tiles: [
      { id: 't22_sub', word: 'Xiao Long', type: 'subject', thai: 'เสี่ยวหลง', emoji: '🐲' },
      { id: 't22_verb', word: 'paints', type: 'verb', thai: 'วาดภาพระบายสี', emoji: '🎨' },
      { id: 't22_adj', word: 'a colorful', type: 'adjective', thai: 'ที่มีสีสันสดใส', emoji: '🌈' },
      { id: 't22_obj', word: 'picture', type: 'object', thai: 'รูปภาพ', emoji: '🖼️' },
      { id: 't22_dist1', word: 'eats', type: 'verb', thai: 'กิน', emoji: '🍽️' },
    ],
  },
  {
    id: 'train_23',
    level: 6,
    levelTitle: 'Lv.6: ขบวนเล่าเรื่องระดับโปร (Pro Storyteller)',
    thaiMeaning: 'เชฟมือทองอบพิซซ่าแสนอร่อยในคืนนี้',
    requiredSlots: ['subject', 'verb', 'adjective', 'object'],
    correctSentence: 'The chef bakes delicious pizza.',
    animationEmoji: '👨‍🍳🍕🔥',
    explanationTh: 'The chef + bakes (อบขนม) + delicious (อร่อย) + pizza (พิซซ่า)',
    tiles: [
      { id: 't23_sub', word: 'The chef', type: 'subject', thai: 'พ่อครัว', emoji: '👨‍🍳' },
      { id: 't23_verb', word: 'bakes', type: 'verb', thai: 'อบ', emoji: '🔥' },
      { id: 't23_adj', word: 'delicious', type: 'adjective', thai: 'แสนอร่อย', emoji: '😋' },
      { id: 't23_obj', word: 'pizza', type: 'object', thai: 'พิซซ่า', emoji: '🍕' },
      { id: 't23_dist1', word: 'swims', type: 'verb', thai: 'ว่ายน้ำ', emoji: '🏊' },
    ],
  },
  {
    id: 'train_24',
    level: 6,
    levelTitle: 'Lv.6: ขบวนเล่าเรื่องระดับโปร (Pro Storyteller)',
    thaiMeaning: 'ยอดนักสืบผู้ชาญฉลาดไขคดีปริศนา',
    requiredSlots: ['adjective', 'subject', 'verb', 'object'],
    correctSentence: 'The smart detective solves the case.',
    animationEmoji: '🕵️‍♂️🔍💼',
    explanationTh: 'The smart (ชาญฉลาด) + detective + solves (แก้ไข) + the case (คดีปริศนา)',
    tiles: [
      { id: 't24_adj', word: 'The smart', type: 'adjective', thai: 'ผู้ชาญฉลาด', emoji: '🧠' },
      { id: 't24_sub', word: 'detective', type: 'subject', thai: 'ยอดนักสืบ', emoji: '🕵️' },
      { id: 't24_verb', word: 'solves', type: 'verb', thai: 'ไขปริศนา', emoji: '💡' },
      { id: 't24_obj', word: 'the case', type: 'object', thai: 'คดีปริศนา', emoji: '📁' },
      { id: 't24_dist1', word: 'sleepy', type: 'adjective', thai: 'ง่วง', emoji: '🥱' },
    ],
  },
  {
    id: 'train_25',
    level: 6,
    levelTitle: 'Lv.6: ขบวนเล่าเรื่องระดับโปร (Pro Storyteller)',
    thaiMeaning: 'นักบินอวกาศสำรวจกาแล็กซีอันลึกลับ',
    requiredSlots: ['subject', 'verb', 'adjective', 'object'],
    correctSentence: 'Astronauts explore the mysterious galaxy.',
    animationEmoji: '👨‍🚀🚀🪐',
    explanationTh: 'ประโยคระดับแอดวานซ์! Astronauts + explore (สำรวจ) + mysterious (ลึกลับ) + galaxy',
    tiles: [
      { id: 't25_sub', word: 'Astronauts', type: 'subject', thai: 'นักบินอวกาศ', emoji: '👨‍🚀' },
      { id: 't25_verb', word: 'explore', type: 'verb', thai: 'สำรวจ', emoji: '🔭' },
      { id: 't25_adj', word: 'the mysterious', type: 'adjective', thai: 'อันลึกลับ', emoji: '✨' },
      { id: 't25_obj', word: 'galaxy', type: 'object', thai: 'กาแล็กซี', emoji: '🌌' },
      { id: 't25_dist1', word: 'cook', type: 'verb', thai: 'ทำอาหาร', emoji: '🍳' },
    ],
  },
];

// =========================================================================
// 2. TIME MACHINE TENSES (ไทม์แมชชีนกาลเวลา 3 มิติ)
// =========================================================================
export const TIME_MACHINE_VERBS: TimeMachineVerb[] = [
  {
    id: 'tm_eat',
    base: 'eat',
    thai: 'กิน / รับประทาน',
    emoji: '🍎',
    past: {
      text: 'ate',
      note: '⚡ กริยาแปลงร่างมหัศจรรย์ (Irregular): eat กลายร่างเป็น ate',
      isIrregular: true,
      sentence: 'Yesterday, Xiao Long ate a sweet red apple.',
      sentenceTh: 'เมื่อวานนี้ เสี่ยวหลงกินแอปเปิ้ลสีแดงหวานเจี๊ยบไปแล้ว',
    },
    presentSimple: {
      singular: 'eats',
      plural: 'eat',
      note: 'ถ้าประธานคนเดียว (He/She/It) สัตว์ประหลาดตัว S จะขอกิน S: eats!',
      sentence: 'He eats breakfast every morning.',
      sentenceTh: 'เขากินอาหารเช้าทุกๆ วันเป็นประจำ',
    },
    presentContinuous: {
      text: 'is/are eating',
      note: 'สวมรองเท้าเด้งดึ๋ง -ing คู่กับ Verb to Be (is/am/are) แปลว่า "กำลังกินอยู่ตอนนี้"',
      sentence: 'Look! The baby dragon is eating noodles right now.',
      sentenceTh: 'ดูสิ! ลูกมังกรน้อยกำลังกินบะหมี่อยู่ตอนนี้เลย',
    },
    future: {
      text: 'will eat',
      note: 'สวมโล่อนาคต will นำหน้า กริยากลับสู่ร่างเดิมไม่ต้องแปลงอะไรเลย!',
      sentence: 'Tomorrow, we will eat delicious ice cream together.',
      sentenceTh: 'พรุ่งนี้ พวกเราจะไปกินไอศกรีมแสนอร่อยด้วยกัน',
    },
  },
  {
    id: 'tm_play',
    base: 'play',
    thai: 'เล่น (เกม / ดนตรี / กีฬา)',
    emoji: '🎮',
    past: {
      text: 'played',
      note: '🦕 สวมหมวกฟอสซิลอดีต -ed ท้ายคำได้อย่างง่ายดาย: played',
      isIrregular: false,
      sentence: 'Yesterday, the kids played in the sunny park.',
      sentenceTh: 'เมื่อวานนี้ เด็กๆ วิ่งเล่นกันในสวนสาธารณะที่มีแดดอบอุ่น',
    },
    presentSimple: {
      singular: 'plays',
      plural: 'play',
      note: 'ประธานคนเดียวเติม S เช่น She plays, แต่ถ้าพวกเรา We play ไม่ต้องเติม S',
      sentence: 'She plays the lovely violin every weekend.',
      sentenceTh: 'เธอซ้อมเล่นไวโอลินเป็นประจำทุกสุดสัปดาห์',
    },
    presentContinuous: {
      text: 'is/are playing',
      note: 'กำลังเล่นอยู่ในวินาทีนี้ ใช้ is/are playing',
      sentence: 'Listen! They are playing cheerful music right now.',
      sentenceTh: 'ฟังดูสิ! พวกเขากำลังเล่นเพลงที่สนุกสนานอยู่ตอนนี้เลย',
    },
    future: {
      text: 'will play',
      note: 'อนาคตข้างหน้า แค่เติม will นำหน้า play',
      sentence: 'Next Saturday, we will play exciting video games.',
      sentenceTh: 'วันเสาร์หน้า พวกเราจะได้เล่นเกมที่ตื่นเต้นด้วยกัน',
    },
  },
  {
    id: 'tm_go',
    base: 'go',
    thai: 'ไป (เดินทาง)',
    emoji: '🚀',
    past: {
      text: 'went',
      note: '⚡ กริยาแปลงร่างยอดฮิต: go ข้ามมิติอดีตกลายเป็น went ทันที!',
      isIrregular: true,
      sentence: 'Last Sunday, Xiao Long went to the science museum.',
      sentenceTh: 'วันอาทิตย์ที่แล้ว เสี่ยวหลงไปพิพิธภัณฑ์วิทยาศาสตร์มาแล้ว',
    },
    presentSimple: {
      singular: 'goes',
      plural: 'go',
      note: 'ลงท้ายด้วย O เมื่อเจอสัตว์ประหลาดตัว S ต้องเติม -es: goes',
      sentence: 'Every Monday, he goes to school happily.',
      sentenceTh: 'ทุกๆ วันจันทร์ เขาไปโรงเรียนอย่างมีความสุข',
    },
    presentContinuous: {
      text: 'is/are going',
      note: 'กำลังมุ่งหน้าไปในตอนนี้: is going',
      sentence: 'Hurry! The high-speed train is going to Shanghai right now.',
      sentenceTh: 'เร็วเข้า! รถไฟความเร็วสูงกำลังมุ่งหน้าไปเซี่ยงไฮ้ตอนนี้เลย',
    },
    future: {
      text: 'will go',
      note: 'จะไปในอนาคต: will go',
      sentence: 'Next summer, our family will go to Beijing.',
      sentenceTh: 'ช่วงฤดูร้อนหน้า ครอบครัวของเราจะเดินทางไปปักกิ่ง',
    },
  },
  {
    id: 'tm_see',
    base: 'see',
    thai: 'มองเห็น / พบเจอ',
    emoji: '👀',
    past: {
      text: 'saw',
      note: '⚡ กริยาแปลงร่าง: see แปลงเป็น saw (ออกเสียงว่า ซอ)',
      isIrregular: true,
      sentence: 'Yesterday, I saw a beautiful rainbow in the sky.',
      sentenceTh: 'เมื่อวานนี้ ฉันมองเห็นสายรุ้งแสนสวยบนท้องฟ้า',
    },
    presentSimple: {
      singular: 'sees',
      plural: 'see',
      note: 'มองเห็นเป็นปกติ: He sees birds in the garden.',
      sentence: 'From my window, she sees the green mountain.',
      sentenceTh: 'จากหน้าต่างห้อง เธอสามารถมองเห็นภูเขาสีเขียวขจี',
    },
    presentContinuous: {
      text: 'is/are looking at',
      note: 'คำว่า see นิยมใช้ look at ในรูป -ing: is looking at',
      sentence: 'The curious dragon is looking at the bright stars.',
      sentenceTh: 'มังกรน้อยช่างสงสัยกำลังจ้องมองดวงดาวที่ส่องประกาย',
    },
    future: {
      text: 'will see',
      note: 'จะได้พบกันในอนาคต: See you tomorrow! / will see',
      sentence: 'I will see you tomorrow at school!',
      sentenceTh: 'ฉันจะได้เจอเธอพรุ่งนี้ที่โรงเรียนนะ!',
    },
  },
];

// =========================================================================
// 3. HUNGRY "S" MONSTER CHALLENGES (มินิเกมมอนสเตอร์เขมือบตัว S)
// =========================================================================
export const HUNGRY_S_CHALLENGES: HungrySChallenge[] = [
  {
    id: 'hs_1',
    subject: 'He',
    subjectTh: 'เขาผู้ชาย (คนเดียว)',
    subjectEmoji: '👦',
    verbBase: 'run',
    verbBaseTh: 'วิ่ง',
    correctVerb: 'runs',
    needsS: true,
    fullSentence: 'He runs fast in the morning.',
    fullSentenceTh: 'เขาวิ่งเร็วมากในตอนเช้า',
    reasonTh: 'ประธานคนเดียว (He) มอนสเตอร์ตัว S หิวโซ ต้องป้อนขนมตัว S ให้กริยา: runs 🍪',
  },
  {
    id: 'hs_2',
    subject: 'They',
    subjectTh: 'พวกเขา (หลายคน)',
    subjectEmoji: '👨‍👧‍👦',
    verbBase: 'eat',
    verbBaseTh: 'กิน',
    correctVerb: 'eat',
    needsS: false,
    fullSentence: 'They eat dinner together.',
    fullSentenceTh: 'พวกเขากินอาหารเย็นด้วยกัน',
    reasonTh: 'ประธานมาเป็นแก๊งหลายคน (They) มอนสเตอร์ตัว S อิ่มแล้ว หนีไป! ใช้ eat ธรรมดา 🛡️',
  },
  {
    id: 'hs_3',
    subject: 'She',
    subjectTh: 'เธอผู้หญิง (คนเดียว)',
    subjectEmoji: '👧',
    verbBase: 'read',
    verbBaseTh: 'อ่าน',
    correctVerb: 'reads',
    needsS: true,
    fullSentence: 'She reads a fun storybook.',
    fullSentenceTh: 'เธออ่านหนังสือนิทานสนุกๆ',
    reasonTh: 'ประธานคนเดียว (She) มอนสเตอร์รีบมาแย่งกินตัว S: reads 🍪',
  },
  {
    id: 'hs_4',
    subject: 'I',
    subjectTh: 'ฉัน (ตัวฉันเอง)',
    subjectEmoji: '🙋',
    verbBase: 'like',
    verbBaseTh: 'ชอบ',
    correctVerb: 'like',
    needsS: false,
    fullSentence: 'I like chocolate cookies.',
    fullSentenceTh: 'ฉันชอบกินคุกกี้ช็อกโกแลต',
    reasonTh: 'คำว่า "I" มีพลังเกราะป้องกันพิเศษ มอนสเตอร์ตัว S ไม่กล้าแตะต้อง! ใช้ like ธรรมดา 🛡️',
  },
  {
    id: 'hs_5',
    subject: 'The baby dragon',
    subjectTh: 'ลูกมังกรน้อย (ตัวเดียว)',
    subjectEmoji: '🐲',
    verbBase: 'sleep',
    verbBaseTh: 'นอนหลับ',
    correctVerb: 'sleeps',
    needsS: true,
    fullSentence: 'The baby dragon sleeps in a warm bed.',
    fullSentenceTh: 'ลูกมังกรน้อยนอนหลับในเตียงอุ่นๆ',
    reasonTh: 'สัตว์ตัวเดียว (The baby dragon) มอนสเตอร์ตัว S ออกมาทำงาน: sleeps 🍪',
  },
  {
    id: 'hs_6',
    subject: 'We',
    subjectTh: 'พวกเรา (หลายคน)',
    subjectEmoji: '🧑‍🤝‍🧑',
    verbBase: 'sing',
    verbBaseTh: 'ร้องเพลง',
    correctVerb: 'sing',
    needsS: false,
    fullSentence: 'We sing English songs together.',
    fullSentenceTh: 'พวกเราร้องเพลงภาษาอังกฤษด้วยกัน',
    reasonTh: 'พวกเรา (We) มีเพื่อนเยอะ มอนสเตอร์ตัว S กลัว รีบวิ่งหนีไป! ใช้ sing ธรรมดา 🛡️',
  },
];

// =========================================================================
// 4. GRAMMAR DETECTIVE CASES (25 คดีนักสืบจับผิดไวยากรณ์)
// =========================================================================
export const DETECTIVE_CASES: DetectiveCase[] = [
  // --- หมวดที่ 1: Tenses & Time Travel (อดีตเมื่อวานนี้) ---
  {
    id: 'det_1',
    caseTitle: 'คดีปริศนาที่ 1: ไดโนเสาร์เมื่อวานนี้',
    glitchedSentence: 'Yesterday, Tom go to the science lab.',
    brokenWord: 'go',
    options: ['went', 'goes', 'going'],
    correctWord: 'went',
    fixedSentence: 'Yesterday, Tom went to the science lab.',
    fixedSentenceTh: 'เมื่อวานนี้ ทอมไปที่ห้องทดลองวิทยาศาสตร์มาแล้ว',
    ruleExplanationTh: 'มีคำว่า "Yesterday" (เมื่อวาน) เป็นอดีต กริยา go ต้องแปลงร่างเป็น "went" เสมอ!',
    rewardBadge: '🔍 ตรานักสืบกาลเวลา',
  },
  {
    id: 'det_2',
    caseTitle: 'คดีปริศนาที่ 2: เค้กช็อกโกแลตหายไป',
    glitchedSentence: 'Last night, she eat delicious chocolate cake.',
    brokenWord: 'eat',
    options: ['ate', 'eats', 'eating'],
    correctWord: 'ate',
    fixedSentence: 'Last night, she ate delicious chocolate cake.',
    fixedSentenceTh: 'เมื่อคืนนี้ เธอกินเค้กช็อกโกแลตแสนอร่อยไปแล้ว',
    ruleExplanationTh: 'มีคำว่า "Last night" (เมื่อคืนนี้) เป็นอดีต กริยา eat ต้องแปลงร่างเป็น "ate"!',
    rewardBadge: '🍰 ตรานักสืบเค้กช็อกโกแลต',
  },
  {
    id: 'det_3',
    caseTitle: 'คดีปริศนาที่ 3: สายรุ้งยักษ์บนฟ้า',
    glitchedSentence: 'Two days ago, we see a giant rainbow.',
    brokenWord: 'see',
    options: ['saw', 'sees', 'seeing'],
    correctWord: 'saw',
    fixedSentence: 'Two days ago, we saw a giant rainbow.',
    fixedSentenceTh: 'เมื่อสองวันที่แล้ว พวกเรามองเห็นสายรุ้งยักษ์',
    ruleExplanationTh: 'มีคำว่า "ago" (ที่ผ่านมาแล้ว) กริยา see ต้องแปลงร่างเป็น "saw" (ซอ)!',
    rewardBadge: '🌈 ตรานักสืบสายรุ้ง',
  },
  {
    id: 'det_4',
    caseTitle: 'คดีปริศนาที่ 4: รถยนต์คันใหม่ของคุณพ่อ',
    glitchedSentence: 'My father buy a new red car yesterday.',
    brokenWord: 'buy',
    options: ['bought', 'buys', 'buying'],
    correctWord: 'bought',
    fixedSentence: 'My father bought a new red car yesterday.',
    fixedSentenceTh: 'คุณพ่อของฉันซื้อรถคันสีแดงใหม่มาเมื่อวานนี้',
    ruleExplanationTh: 'กริยา buy เมื่อเป็นอดีต yesterday จะแปลงร่างเป็น "bought" (บอท)!',
    rewardBadge: '🚗 ตรานักสืบยานยนต์',
  },
  {
    id: 'det_5',
    caseTitle: 'คดีปริศนาที่ 5: มังกรเหินเวหาหน้าร้อน',
    glitchedSentence: 'Xiao Long fly across the blue sky last summer.',
    brokenWord: 'fly',
    options: ['flew', 'flies', 'flying'],
    correctWord: 'flew',
    fixedSentence: 'Xiao Long flew across the blue sky last summer.',
    fixedSentenceTh: 'เสี่ยวหลงบินข้ามท้องฟ้าสีครามเมื่อฤดูร้อนที่แล้ว',
    ruleExplanationTh: 'กริยา fly เมื่อผ่านไปแล้วในอดีต (last summer) จะแปลงร่างเป็น "flew" (ฟลู)!',
    rewardBadge: '🐲 ตรานักสืบมังกรเหิน',
  },
  {
    id: 'det_6',
    caseTitle: 'คดีปริศนาที่ 6: เด็กๆ วิ่งเล่นในสวน',
    glitchedSentence: 'The children play in the garden yesterday.',
    brokenWord: 'play',
    options: ['played', 'plays', 'playing'],
    correctWord: 'played',
    fixedSentence: 'The children played in the garden yesterday.',
    fixedSentenceTh: 'เด็กๆ วิ่งเล่นในสวนเมื่อวานนี้',
    ruleExplanationTh: 'กริยาปกติเมื่อเป็นอดีต yesterday ให้สวมหมวกฟอสซิลเติม -ed กลายเป็น "played"!',
    rewardBadge: '🌳 ตรานักสืบสนามหญ้า',
  },

  // --- หมวดที่ 2: Subject-Verb Agreement (มอนสเตอร์ตัว S) ---
  {
    id: 'det_7',
    caseTitle: 'คดีปริศนาที่ 7: วิ่งเช้าวันใหม่',
    glitchedSentence: 'He run to school every single morning.',
    brokenWord: 'run',
    options: ['runs', 'ran', 'running'],
    correctWord: 'runs',
    fixedSentence: 'He runs to school every single morning.',
    fixedSentenceTh: 'เขาวิ่งไปโรงเรียนทุกๆ เช้า',
    ruleExplanationTh: 'ประธานคนเดียวคือ "He" ทำเป็นประจำทุกเช้า กริยาต้องป้อนขนมตัว S: "runs"!',
    rewardBadge: '🏃 ตรานักสืบนักวิ่ง',
  },
  {
    id: 'det_8',
    caseTitle: 'คดีปริศนาที่ 8: การ์ตูนสุดหรรษา',
    glitchedSentence: 'My sister watch funny cartoons on television.',
    brokenWord: 'watch',
    options: ['watches', 'watched', 'watching'],
    correctWord: 'watches',
    fixedSentence: 'My sister watches funny cartoons on television.',
    fixedSentenceTh: 'น้องสาวของฉันดูการ์ตูนตลกทางโทรทัศน์',
    ruleExplanationTh: 'น้องสาวคนเดียว My sister ลงท้ายด้วย ch เมื่อเติม S ต้องใส่ -es เป็น "watches"!',
    rewardBadge: '📺 ตรานักสืบการ์ตูน',
  },
  {
    id: 'det_9',
    caseTitle: 'คดีปริศนาที่ 9: กระต่ายกระโดดข้ามรั้ว',
    glitchedSentence: 'A white rabbit jump over the brown fence.',
    brokenWord: 'jump',
    options: ['jumps', 'jumped', 'jumping'],
    correctWord: 'jumps',
    fixedSentence: 'A white rabbit jumps over the brown fence.',
    fixedSentenceTh: 'กระต่ายสีขาวตัวหนึ่งกระโดดข้ามรั้วสีน้ำตาล',
    ruleExplanationTh: 'กระต่ายตัวเดียว A white rabbit มอนสเตอร์ตัว S หิวโซ ต้องเติม S เป็น "jumps"!',
    rewardBadge: '🐰 ตรานักสืบรั้วบ้าน',
  },
  {
    id: 'det_10',
    caseTitle: 'คดีปริศนาที่ 10: นักเรียนขยันอ่านหนังสือ',
    glitchedSentence: 'The smart students studies hard for exams.',
    brokenWord: 'studies',
    options: ['study', 'studying', 'studied'],
    correctWord: 'study',
    fixedSentence: 'The smart students study hard for exams.',
    fixedSentenceTh: 'เหล่านักเรียนคนเก่งตั้งใจอ่านหนังสือสอบ',
    ruleExplanationTh: 'นักเรียนหลายคน The students (มี s ที่นาม) มอนสเตอร์ตัว S อิ่มแล้ว กริยาใช้ "study" ธรรมดา!',
    rewardBadge: '🎓 ตรานักสืบคนเก่ง',
  },
  {
    id: 'det_11',
    caseTitle: 'คดีปริศนาที่ 11: เสียงสุนัขเห่าคนแปลกหน้า',
    glitchedSentence: 'The friendly dog bark loudly at strange visitors.',
    brokenWord: 'bark',
    options: ['barks', 'barked', 'barking'],
    correctWord: 'barks',
    fixedSentence: 'The friendly dog barks loudly at strange visitors.',
    fixedSentenceTh: 'สุนัขแสนเป็นมิตรเห่าเสียงดังใส่คนแปลกหน้า',
    ruleExplanationTh: 'สุนัขตัวเดียว The dog กริยาต้องเติมตัว S: "barks"!',
    rewardBadge: '🐶 ตรานักสืบเพื่อนซี้สี่ขา',
  },

  // --- หมวดที่ 3: Present Continuous (-ing & Verb to Be) ---
  {
    id: 'det_12',
    caseTitle: 'คดีปริศนาที่ 12: รองเท้าเด้งดึ๋งเล่นฟุตบอล',
    glitchedSentence: 'Look! The kids are play football right now.',
    brokenWord: 'play',
    options: ['playing', 'played', 'plays'],
    correctWord: 'playing',
    fixedSentence: 'Look! The kids are playing football right now.',
    fixedSentenceTh: 'ดูสิ! เด็กๆ กำลังเล่นฟุตบอลอยู่ตอนนี้เลย',
    ruleExplanationTh: 'มีคำว่า "right now" กำลังทำอยู่ กริยาต้องสวมรองเท้าเด้งดึ๋ง "-ing" เป็น "playing"!',
    rewardBadge: '👟 ตรานักสืบเด้งดึ๋ง',
  },
  {
    id: 'det_13',
    caseTitle: 'คดีปริศนาที่ 13: เสียงเพลงของนกขมิ้น',
    glitchedSentence: 'Listen! The yellow canary is sing a sweet song.',
    brokenWord: 'sing',
    options: ['singing', 'sang', 'sings'],
    correctWord: 'singing',
    fixedSentence: 'Listen! The yellow canary is singing a sweet song.',
    fixedSentenceTh: 'ฟังดูสิ! นกขมิ้นสีเหลืองกำลังร้องเพลงอันไพเราะ',
    ruleExplanationTh: 'มีคำสั่ง "Listen!" (ฟังดูสิ) กำลังเกิดขึ้น ใช้ is + กริยาเติม -ing: "singing"!',
    rewardBadge: '🎶 ตรานักสืบเสียงเพลง',
  },
  {
    id: 'det_14',
    caseTitle: 'คดีปริศนาที่ 14: คุณแม่ทำบะหมี่ในครัว',
    glitchedSentence: 'My mom is cook noodles in the kitchen now.',
    brokenWord: 'cook',
    options: ['cooking', 'cooked', 'cooks'],
    correctWord: 'cooking',
    fixedSentence: 'My mom is cooking noodles in the kitchen now.',
    fixedSentenceTh: 'คุณแม่ของฉันกำลังต้มบะหมี่อยู่ในครัวตอนนี้',
    ruleExplanationTh: 'อยู่หลัง Verb to be (is) และมีคำว่า now ต้องใช้รูป "-ing": "cooking"!',
    rewardBadge: '🍜 ตรานักสืบห้องครัว',
  },
  {
    id: 'det_15',
    caseTitle: 'คดีปริศนาที่ 15: สระว่ายน้ำสีฟ้าสดใส',
    glitchedSentence: 'They is swimming in the cool blue pool.',
    brokenWord: 'is',
    options: ['are', 'am', 'was'],
    correctWord: 'are',
    fixedSentence: 'They are swimming in the cool blue pool.',
    fixedSentenceTh: 'พวกเขากำลังว่ายน้ำในสระสีฟ้าเย็นฉ่ำ',
    ruleExplanationTh: 'ประธานคือ "They" (พวกเขาหลายคน) ต้องจับคู่กับ Verb to be คือ "are" เท่านั้น!',
    rewardBadge: '🏊 ตรานักสืบสายน้ำ',
  },

  // --- หมวดที่ 4: Plurals & Countable/Uncountable Nouns ---
  {
    id: 'det_16',
    caseTitle: 'คดีปริศนาที่ 16: แอปเปิ้ลสามผลในกระเป๋า',
    glitchedSentence: 'I have three sweet red apple in my bag.',
    brokenWord: 'apple',
    options: ['apples', 'an apple', 'applees'],
    correctWord: 'apples',
    fixedSentence: 'I have three sweet red apples in my bag.',
    fixedSentenceTh: 'ฉันมีแอปเปิ้ลสีแดงหวานเจี๊ยบ 3 ผลในกระเป๋า',
    ruleExplanationTh: 'มีจำนวน 3 ผล (three) เป็นพหูพจน์ คำนาม apple ต้องเติม -s กลายเป็น "apples"!',
    rewardBadge: '🍎 ตรานักสืบพหูพจน์',
  },
  {
    id: 'det_17',
    caseTitle: 'คดีปริศนาที่ 17: กล่องพัสดุในห้องเก็บของ',
    glitchedSentence: 'There are four big box in the storage room.',
    brokenWord: 'box',
    options: ['boxes', 'boxs', 'boxing'],
    correctWord: 'boxes',
    fixedSentence: 'There are four big boxes in the storage room.',
    fixedSentenceTh: 'มีกล่องใบใหญ่ 4 ใบในห้องเก็บของ',
    ruleExplanationTh: 'คำที่ลงท้ายด้วย x (box) เมื่อเป็นพหูพจน์ ต้องเติม -es เป็น "boxes"!',
    rewardBadge: '📦 ตรานักสืบกล่องพัสดุ',
  },
  {
    id: 'det_18',
    caseTitle: 'คดีปริศนาที่ 18: แมวเหมียวนอนกลางวัน',
    glitchedSentence: 'The two cat are sleeping peacefully.',
    brokenWord: 'cat',
    options: ['cats', 'cates', 'catting'],
    correctWord: 'cats',
    fixedSentence: 'The two cats are sleeping peacefully.',
    fixedSentenceTh: 'แมว 2 ตัวกำลังนอนหลับอย่างสงบสุข',
    ruleExplanationTh: 'มี 2 ตัว (two) ต้องเติม s ที่คำนามแมว กลายเป็น "cats"!',
    rewardBadge: '🐈 ตรานักสืบแมวเหมียว',
  },
  {
    id: 'det_19',
    caseTitle: 'คดีปริศนาที่ 19: เจ้าหนูแปลงร่าง',
    glitchedSentence: 'Look at those little mouse running around.',
    brokenWord: 'mouse',
    options: ['mice', 'mouses', 'mices'],
    correctWord: 'mice',
    fixedSentence: 'Look at those little mice running around.',
    fixedSentenceTh: 'ดูเหล่าหนูตัวน้อยที่วิ่งไปมาพวกนั้นสิ',
    ruleExplanationTh: 'หนูหลายตัว (those) คำนามจะเปลี่ยนรูปพิเศษจาก mouse กลายเป็น "mice"!',
    rewardBadge: '🐭 ตรานักสืบหนูน้อย',
  },
  {
    id: 'det_20',
    caseTitle: 'คดีปริศนาที่ 20: ฟันขาวสะอาดสดใส',
    glitchedSentence: 'Brush your tooth every morning and evening.',
    brokenWord: 'tooth',
    options: ['teeth', 'tooths', 'teethes'],
    correctWord: 'teeth',
    fixedSentence: 'Brush your teeth every morning and evening.',
    fixedSentenceTh: 'แปรงฟันทุกซี่ของเธอทุกเช้าและเย็นนะ',
    ruleExplanationTh: 'ฟันทั้งปากหลายซี่ เป็นคำนามเปลี่ยนรูปจาก tooth ➔ "teeth"!',
    rewardBadge: '🪥 ตรานักสืบฟันสวย',
  },

  // --- หมวดที่ 5: Articles (a / an / the) ---
  {
    id: 'det_21',
    caseTitle: 'คดีปริศนาที่ 21: ผลส้มวิตามินซี',
    glitchedSentence: 'She eats a orange every single afternoon.',
    brokenWord: 'a',
    options: ['an', 'the', 'some'],
    correctWord: 'an',
    fixedSentence: 'She eats an orange every single afternoon.',
    fixedSentenceTh: 'เธอกินส้มหนึ่งผลทุกๆ บ่าย',
    ruleExplanationTh: 'คำว่า "orange" ขึ้นต้นด้วยเสียงสระ (O) ต้องใช้คำนำหน้าว่า "an" ไม่ใช่ "a"!',
    rewardBadge: '🍊 ตรานักสืบสระภาษาอังกฤษ',
  },
  {
    id: 'det_22',
    caseTitle: 'คดีปริศนาที่ 22: หนึ่งชั่วโมงที่รอคอย',
    glitchedSentence: 'We waited for a hour at the bus station.',
    brokenWord: 'a',
    options: ['an', 'the', 'one'],
    correctWord: 'an',
    fixedSentence: 'We waited for an hour at the bus station.',
    fixedSentenceTh: 'พวกเรารอเป็นเวลาหนึ่งชั่วโมงที่สถานีรถเมล์',
    ruleExplanationTh: 'คำว่า "hour" ตัว H ไม่ออกเสียง ออกเสียงเป็น อาวเออะ (เสียงสระ) จึงต้องใช้ "an hour"!',
    rewardBadge: '⏱️ ตรานักสืบเข็มนาฬิกา',
  },
  {
    id: 'det_23',
    caseTitle: 'คดีปริศนาที่ 23: ดวงจันทร์หนึ่งเดียวในจักรวาล',
    glitchedSentence: 'Look up! An moon is shining brightly tonight.',
    brokenWord: 'An',
    options: ['The', 'A', 'Some'],
    correctWord: 'The',
    fixedSentence: 'Look up! The moon is shining brightly tonight.',
    fixedSentenceTh: 'มองขึ้นไปสิ! ดวงจันทร์กำลังส่องแสงสว่างไสวคืนนี้',
    ruleExplanationTh: 'สิ่งที่มีเพียงหนึ่งเดียวในโลกหรือจักรวาล (ดวงจันทร์ พระอาทิตย์) ต้องใช้ "The" เสมอ!',
    rewardBadge: '🌕 ตรานักสืบดวงจันทร์',
  },

  // --- หมวดที่ 6: Negatives & Auxiliaries (การปฏิเสธและกริยาช่วย) ---
  {
    id: 'det_24',
    caseTitle: 'คดีปริศนาที่ 24: เขาไม่ชอบกินบรอกโคลี',
    glitchedSentence: 'He do not like eating green broccoli.',
    brokenWord: 'do not',
    options: ['does not', 'did not', 'is not'],
    correctWord: 'does not',
    fixedSentence: 'He does not like eating green broccoli.',
    fixedSentenceTh: 'เขาไม่ชอบกินบรอกโคลีสีเขียว',
    ruleExplanationTh: 'ประธานคนเดียวคือ "He" เมื่อสร้างประโยคปฏิเสธ ต้องใช้ "does not" (doesn\'t)!',
    rewardBadge: '🥦 ตรานักสืบมอนสเตอร์ตัว S',
  },
  {
    id: 'det_25',
    caseTitle: 'คดีปริศนาที่ 25: คลาสเรียนเต้นเมื่อวานนี้',
    glitchedSentence: 'Yesterday, she does not go to the dance class.',
    brokenWord: 'does not',
    options: ['did not', 'do not', 'was not'],
    correctWord: 'did not',
    fixedSentence: 'Yesterday, she did not go to the dance class.',
    fixedSentenceTh: 'เมื่อวานนี้ เธอไม่ได้ไปคลาสเรียนเต้นระบำ',
    ruleExplanationTh: 'มีคำว่า "Yesterday" เป็นอดีต การปฏิเสธในอดีตต้องใช้ "did not" (didn\'t) เสมอ!',
    rewardBadge: '💃 ตรานักสืบโรงเรียนเต้น',
  },
];

// =========================================================================
// 5. THE 8 GRAMMAR SUPERHEROES (แก๊ง 8 ฮีโร่ Parts of Speech)
// =========================================================================
export const GRAMMAR_SUPERHEROES: GrammarSuperhero[] = [
  {
    id: 'hero_noun',
    name: 'Nicky the Noun',
    englishRole: 'Noun (คำนาม)',
    thaiName: 'นิกกี้ ช่างปั้นสิ่งของ',
    avatar: '🎩',
    themeColor: 'from-amber-400 to-orange-500',
    superpowerTh: 'เสกชื่อ คน สัตว์ สิ่งของ และสถานที่ขึ้นมาบนโลก!',
    examples: [
      { word: 'Dragon', thai: 'มังกร' },
      { word: 'School', thai: 'โรงเรียน' },
      { word: 'Pizza', thai: 'พิซซ่า' },
      { word: 'Teacher', thai: 'คุณครู' },
    ],
    funFactTh: 'ถ้าโลกนี้ไม่มี Nicky Noun เราจะไม่มีทางเรียกชื่อสิ่งใดๆ ได้เลย!',
  },
  {
    id: 'hero_verb',
    name: 'Vicky the Verb',
    englishRole: 'Verb (คำกริยา)',
    thaiName: 'วิกกี้ มนุษย์พลังขับเคลื่อน',
    avatar: '⚡',
    themeColor: 'from-rose-500 to-red-600',
    superpowerTh: 'เสกพลังงานให้สิ่งของขยับ วิ่ง บิน และออกแอ็กชัน!',
    examples: [
      { word: 'Jump', thai: 'กระโดด' },
      { word: 'Fly', thai: 'บิน' },
      { word: 'Eat', thai: 'กิน' },
      { word: 'Sleep', thai: 'นอนหลับ' },
    ],
    funFactTh: 'ประโยคภาษาอังกฤษจะขาด Vicky Verb ไม่ได้เด็ดขาด ไม่งั้นประโยคจะแข็งเป็นหิน!',
  },
  {
    id: 'hero_adjective',
    name: 'Addy the Adjective',
    englishRole: 'Adjective (คำคุณศัพท์)',
    thaiName: 'แอดดี้ จิตรกรแต้มสีสัน',
    avatar: '🎨',
    themeColor: 'from-pink-400 to-purple-500',
    superpowerTh: 'แต่งแต้มให้คำนามดู สวย น่ารัก ยักษ์ใหญ่ หรืออร่อย!',
    examples: [
      { word: 'Fluffy', thai: 'นุ่มฟู' },
      { word: 'Delicious', thai: 'อร่อย' },
      { word: 'Giant', thai: 'ใหญ่ยักษ์' },
      { word: 'Brave', thai: 'กล้าหาญ' },
    ],
    funFactTh: 'Addy จะคอยเดินนำหน้า Nicky Noun เสมอ เช่น "fluffy cat" ไม่ใช่ "cat fluffy"!',
  },
  {
    id: 'hero_adverb',
    name: 'Speedy the Adverb',
    englishRole: 'Adverb (คำกริยาวิเศษณ์)',
    thaiName: 'สปีดดี้ เดอะแฟลชติดจรวด',
    avatar: '💨',
    themeColor: 'from-cyan-400 to-blue-500',
    superpowerTh: 'บอกความเร็ว ความรู้สึก และสถานที่ว่าทำอย่างไร!',
    examples: [
      { word: 'Quickly', thai: 'อย่างรวดเร็ว' },
      { word: 'Happily', thai: 'อย่างมีความสุข' },
      { word: 'Loudly', thai: 'เสียงดัง' },
      { word: 'Everywhere', thai: 'ทุกหนทุกแห่ง' },
    ],
    funFactTh: 'ส่วนใหญ่ Speedy Adverb ชอบสวมรองเท้าติดไฟท้ายลงท้ายด้วย "-ly"!',
  },
  {
    id: 'hero_pronoun',
    name: 'Penny the Pronoun',
    englishRole: 'Pronoun (คำสรรพนาม)',
    thaiName: 'เพนนี นินจาสลับตัว',
    avatar: '🎭',
    themeColor: 'from-indigo-400 to-violet-600',
    superpowerTh: 'กระโดดมาสลับร่างแทนชื่อยาวๆ จะได้ไม่ต้องพูดชื่อซ้ำ!',
    examples: [
      { word: 'He', thai: 'เขา (แทนผู้ชาย)' },
      { word: 'She', thai: 'เธอ (แทนผู้หญิง)' },
      { word: 'It', thai: 'มัน (แทนสัตว์/สิ่งของ)' },
      { word: 'They', thai: 'พวกเขา' },
    ],
    funFactTh: 'ช่วยให้ประโยคฟังดูลื่นไหล ไม่ต้องพูดว่า "ทอมไปโรงเรียน ทอมกินข้าว ทอมนอน"!',
  },
  {
    id: 'hero_preposition',
    name: 'Perry the Preposition',
    englishRole: 'Preposition (คำบุพบท)',
    thaiName: 'เพอร์รี่ นักสำรวจพิกัด',
    avatar: '📍',
    themeColor: 'from-emerald-400 to-teal-600',
    superpowerTh: 'บอกพิกัดแผนที่ว่าสิ่งของ ซ่อนอยู่ตรงไหน!',
    examples: [
      { word: 'In', thai: 'ข้างใน' },
      { word: 'On', thai: 'บน' },
      { word: 'Under', thai: 'ใต้' },
      { word: 'Behind', thai: 'ข้างหลัง' },
    ],
    funFactTh: 'เล่นเกมซ่อนแอบเมื่อไหร่ ต้องพึ่งพลังของ Perry เสมอ!',
  },
];
