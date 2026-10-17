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
// 1. TRAIN SENTENCE BUILDER CHALLENGES (ขบวนรถไฟต่อประโยค)
// =========================================================================
export const TRAIN_CHALLENGES: TrainSentenceChallenge[] = [
  {
    id: 'train_1',
    level: 1,
    levelTitle: 'เลเวล 1: หัวรถจักร + ตู้เครื่องยนต์ (Subject + Verb)',
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
    levelTitle: 'เลเวล 1: หัวรถจักร + ตู้เครื่องยนต์ (Subject + Verb)',
    thaiMeaning: 'นกตัวน้อยบินบนท้องฟ้า',
    requiredSlots: ['subject', 'verb'],
    correctSentence: 'Birds fly.',
    animationEmoji: '🕊️🌤️',
    explanationTh: 'นกหลายตัว (Birds) กริยาไม่ต้องเติม S บินฉิวไปเลย!',
    tiles: [
      { id: 't2_sub', word: 'Birds', type: 'subject', thai: 'เหล่านก', emoji: '🐦' },
      { id: 't2_verb', word: 'fly', type: 'verb', thai: 'บิน', emoji: '🪽' },
      { id: 't2_dist1', word: 'sweet', type: 'adjective', thai: 'หวาน', emoji: '🍭' },
      { id: 't2_dist2', word: 'water', type: 'object', thai: 'น้ำ', emoji: '💧' },
    ],
  },
  {
    id: 'train_3',
    level: 2,
    levelTitle: 'เลเวล 2: ขบวน 3 ตู้ (Subject + Verb + Object)',
    thaiMeaning: 'เจ้าเหมียวกินปลาตัวโต',
    requiredSlots: ['subject', 'verb', 'object'],
    correctSentence: 'The cat eats fish.',
    animationEmoji: '🐱🐟',
    explanationTh: 'เจ้าเหมียว (ใคร) + กิน (เครื่องยนต์) + ปลา (ตู้บรรทุกสินค้าที่โดนกิน)!',
    tiles: [
      { id: 't3_sub', word: 'The cat', type: 'subject', thai: 'แมวเหมียว', emoji: '🐱' },
      { id: 't3_verb', word: 'eats', type: 'verb', thai: 'กิน', emoji: '🍽️' },
      { id: 't3_obj', word: 'fish', type: 'object', thai: 'ปลา', emoji: '🐟' },
      { id: 't3_dist1', word: 'loudly', type: 'adverb', thai: 'เสียงดัง', emoji: '📢' },
    ],
  },
  {
    id: 'train_4',
    level: 2,
    levelTitle: 'เลเวล 2: ขบวน 3 ตู้ (Subject + Verb + Object)',
    thaiMeaning: 'เด็กผู้หญิงอ่านหนังสือนิทาน',
    requiredSlots: ['subject', 'verb', 'object'],
    correctSentence: 'The girl reads a book.',
    animationEmoji: '👧📖',
    explanationTh: 'The girl (คนอ่าน) + reads (กริยา) + a book (หนังสือที่โดนอ่าน)',
    tiles: [
      { id: 't4_sub', word: 'The girl', type: 'subject', thai: 'เด็กหญิง', emoji: '👧' },
      { id: 't4_verb', word: 'reads', type: 'verb', thai: 'อ่าน', emoji: '👀' },
      { id: 't4_obj', word: 'a book', type: 'object', thai: 'หนังสือหนึ่งเล่ม', emoji: '📚' },
      { id: 't4_dist1', word: 'sleeps', type: 'verb', thai: 'นอนหลับ', emoji: '😴' },
    ],
  },
  {
    id: 'train_5',
    level: 3,
    levelTitle: 'เลเวล 3: ขบวนติดจรวดเทอร์โบ (+ Adverb)',
    thaiMeaning: 'เด็กผู้ชายเตะฟุตบอลอย่างมีความสุข',
    requiredSlots: ['subject', 'verb', 'object', 'adverb'],
    correctSentence: 'The boy plays football happily.',
    animationEmoji: '👦⚽✨',
    explanationTh: 'ต่อท่อไอเสียติดเทอร์โบ Adverb "happily" ไว้ท้ายประโยคเพื่อบอกว่าทำด้วยความรู้สึกอย่างไร!',
    tiles: [
      { id: 't5_sub', word: 'The boy', type: 'subject', thai: 'เด็กชาย', emoji: '👦' },
      { id: 't5_verb', word: 'plays', type: 'verb', thai: 'เล่น', emoji: '🏃' },
      { id: 't5_obj', word: 'football', type: 'object', thai: 'ฟุตบอล', emoji: '⚽' },
      { id: 't5_adv', word: 'happily', type: 'adverb', thai: 'อย่างมีความสุข', emoji: '🥳' },
      { id: 't5_dist1', word: 'yesterday', type: 'adverb', thai: 'เมื่อวาน', emoji: '📅' },
    ],
  },
  {
    id: 'train_6',
    level: 4,
    levelTitle: 'เลเวล 4: ขบวนพิกซาร์ระดับโปร (+ Adjective แต้มสีสัน)',
    thaiMeaning: 'มังกรตัวโตสีแดงบินอย่างรวดเร็ว',
    requiredSlots: ['adjective', 'subject', 'verb', 'adverb'],
    correctSentence: 'The red dragon flies quickly.',
    animationEmoji: '🐲🔥💨',
    explanationTh: 'คำคุณศัพท์ Adjective "The red" มานำหน้านามเพื่อแต้มสีสันให้มังกรดูเท่!',
    tiles: [
      { id: 't6_adj', word: 'The red', type: 'adjective', thai: 'สีแดงตัวโต', emoji: '🔴' },
      { id: 't6_sub', word: 'dragon', type: 'subject', thai: 'มังกร', emoji: '🐉' },
      { id: 't6_verb', word: 'flies', type: 'verb', thai: 'บิน', emoji: '🚀' },
      { id: 't6_adv', word: 'quickly', type: 'adverb', thai: 'อย่างรวดเร็ว', emoji: '⚡' },
      { id: 't6_dist1', word: 'pizza', type: 'object', thai: 'พิซซ่า', emoji: '🍕' },
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
// 4. GRAMMAR DETECTIVE CASES (นักสืบจับผิดประโยค Bug Hunter)
// =========================================================================
export const DETECTIVE_CASES: DetectiveCase[] = [
  {
    id: 'det_1',
    caseTitle: 'คดีปริศนา: ไดโนเสาร์เมื่อวานนี้',
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
    caseTitle: 'คดีขโมยผลไม้: แอปเปิ้ลหลายผล',
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
    id: 'det_3',
    caseTitle: 'คดีรองเท้าเด้งดึ๋ง: กำลังเล่นฟุตบอล',
    glitchedSentence: 'Look! The kids is play football right now.',
    brokenWord: 'play',
    options: ['playing', 'played', 'plays'],
    correctWord: 'playing',
    fixedSentence: 'Look! The kids are playing football right now.',
    fixedSentenceTh: 'ดูสิ! เด็กๆ กำลังเล่นฟุตบอลอยู่ตอนนี้เลย',
    ruleExplanationTh: 'มีคำว่า "right now" กำลังทำอยู่ กริยาต้องสวมรองเท้าเด้งดึ๋ง "-ing" เป็น "playing"!',
    rewardBadge: '👟 ตรานักสืบเด้งดึ๋ง',
  },
  {
    id: 'det_4',
    caseTitle: 'คดีปฏิเสธ: เขาไม่ชอบกินผัก',
    glitchedSentence: 'He do not like eating green broccoli.',
    brokenWord: 'do not',
    options: ['does not', 'did not', 'is not'],
    correctWord: 'does not',
    fixedSentence: 'He does not like eating green broccoli.',
    fixedSentenceTh: 'เขาไม่ชอบกินบรอกโคลีสีเขียว',
    ruleExplanationTh: 'ประธานคนเดียวคือ "He" เมื่อสร้างประโยคปฏิเสธ ต้องใช้ "does not" (doesn\'t)!',
    rewardBadge: '🥦 ตรานักสืบมอนสเตอร์ตัว S',
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
