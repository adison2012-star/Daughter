import { PetType, PetCompanionData, UserProfile, SubjectType } from '@/types';

export const MAX_PET_LEVEL = 100;
export const MAX_STARS_FED = 1_000_000;
export const MIN_STARS_LEVEL_2 = 10;

// Exponent for Level 1 to 100 curve: 10 * (99)^k = 1,000,000 => k ≈ 2.505470125
const EXPONENT_K = Math.log(100000) / Math.log(99);

// Precomputed table of cumulative stars required for each level from 1 to 100
export const LEVEL_STARS_TABLE: number[] = (() => {
  const table: number[] = [0]; // 0-indexed dummy, index 1 is Level 1
  for (let lvl = 1; lvl <= MAX_PET_LEVEL; lvl++) {
    if (lvl === 1) table.push(0);
    else if (lvl === MAX_PET_LEVEL) table.push(MAX_STARS_FED);
    else table.push(Math.round(MIN_STARS_LEVEL_2 * Math.pow(lvl - 1, EXPONENT_K)));
  }
  return table;
})();

export interface PetStageDef {
  stage: number;
  minLevel: number;
  maxLevel: number;
  title: string;
  badge: string;
  icon: string;
  auraClass: string;
  image?: string;
  description?: string;
}

export interface PetDefinition {
  id: PetType;
  name: string;
  species: string;
  emoji: string;
  element: string;
  description: string;
  themeGradient: string;
  cardBorder: string;
  btnGradient: string;
  foodName: string;
  foodEmoji: string;
  voiceQuotes: string[];
  stages: PetStageDef[];
}

export const PET_CATALOG: Record<PetType, PetDefinition> = {
  dragon: {
    id: 'dragon',
    name: 'เสี่ยวหลง (小龙)',
    species: 'มังกรจีนสวรรค์ (Chinese Sky Dragon)',
    emoji: '🐲',
    element: 'เพลิงสวรรค์ & สายฟ้าศักดิ์สิทธิ์',
    description: 'มังกรจีนโบราณนำพาโชคลาภ ฉลาดปราดเปรียว รักการเรียนรู้ และเติบโตตามคะแนนดาว 10 ระดับ',
    themeGradient: 'from-amber-400 via-rose-500 to-amber-600',
    cardBorder: 'border-amber-300 hover:border-amber-400',
    btnGradient: 'from-emerald-700 to-teal-600',
    foodName: 'ลูกแก้วเพลิงดวงดาว',
    foodEmoji: '☄️',
    voiceQuotes: [
      'โฮก! ขอบคุณสำหรับดวงดาวนะ หม่ำแล้วมีพลังท่องศัพท์จีนสุดๆ!',
      'เสี่ยวหลงตัวโตขึ้นแล้ว! วันนี้เรามาฝึกวิชาให้เก่งกว่าใครเลย!',
      'ไฟแห่งปัญญาในตัวข้าลุกโชน! ข้าจะอยู่เคียงข้างเจ้าเสมอนะ!',
      'มังกรระดับ 100 รอพวกเราอยู่ สู้ไปด้วยกันนะเด็กดี!',
      'ชุดเกราะของข้าจะวิวัฒนาการทุกๆ 10 เลเวล มาป้อนดาวให้ข้าโตกันเถอะ!',
    ],
    stages: [
      {
        stage: 1,
        minLevel: 1,
        maxLevel: 10,
        title: 'มังกรน้อยหมวกเวทมนตร์',
        badge: 'Baby Mage Drake',
        icon: '🧙‍♂️',
        image: '/images/xiaolong/growth/stage_1.png',
        auraClass: 'shadow-emerald-200',
        description: 'มังกรน้อยวัยแรกเกิดใส่หมวกพ่อมดยังแบเบาะ ตาโตขี้อ้อน รักการอ่านหนังสือ',
      },
      {
        stage: 2,
        minLevel: 11,
        maxLevel: 20,
        title: 'มังกรเป้ส้มเหินนภา',
        badge: 'Flying Explorer',
        icon: '🎒',
        image: '/images/xiaolong/growth/stage_2.png',
        auraClass: 'shadow-amber-200',
        description: 'เริ่มบินเหินฟ้าได้แล้ว สะพายเป้ส้มเตรียมพร้อมออกสำรวจโลกกว้าง',
      },
      {
        stage: 3,
        minLevel: 21,
        maxLevel: 30,
        title: 'มังกรน้อยดาบไม้จอมพลัง',
        badge: 'Wood Swordsman',
        icon: '🗡️',
        image: '/images/xiaolong/growth/stage_3.png',
        auraClass: 'shadow-orange-300',
        description: 'ถือดาบไม้ฝึกเพลงดาบหมื่นลี้ ร่างกายเริ่มแข็งแกร่งและว่องไว',
      },
      {
        stage: 4,
        minLevel: 31,
        maxLevel: 40,
        title: 'มังกรพรานใบไม้พฤกษา',
        badge: 'Forest Scout',
        icon: '🍃',
        image: '/images/xiaolong/growth/stage_4.png',
        auraClass: 'shadow-emerald-300',
        description: 'สวมชุดพรานป่าสีเขียวถักทอ กลมกลืนกับธรรมชาติและมีสมาธิแน่วแน่',
      },
      {
        stage: 5,
        minLevel: 41,
        maxLevel: 50,
        title: 'มังกรกองหน้าเกราะหนัง',
        badge: 'Leather Vanguard',
        icon: '🛡️',
        image: '/images/xiaolong/growth/stage_5.png',
        auraClass: 'shadow-amber-400',
        description: 'สวมชุดเกราะหนังและเข็มขัดนักสู้ เริ่มพ่นไฟเวทมนตร์เพื่อปกป้องพี่น้อง',
      },
      {
        stage: 6,
        minLevel: 51,
        maxLevel: 60,
        title: 'มังกรนักรบปลอกแขนเหล็ก',
        badge: 'Iron Armguard',
        icon: '⚡',
        image: '/images/xiaolong/growth/stage_6.png',
        auraClass: 'shadow-slate-400',
        description: 'สวมปลอกแขนเหล็กกล้าและสายรัดอก พลังสายฟ้าสถิตอยู่ทั่วร่าง',
      },
      {
        stage: 7,
        minLevel: 61,
        maxLevel: 70,
        title: 'อัศวินมังกรผ้าคลุมแดง',
        badge: 'Crimson Knight',
        icon: '⚔️',
        image: '/images/xiaolong/growth/stage_7.png',
        auraClass: 'shadow-rose-400',
        description: 'สวมชุดเกราะเหล็กแกร่งพร้อมผ้าคลุมสีแดงสง่างาม มีพลังผู้นำเต็มเปี่ยม',
      },
      {
        stage: 8,
        minLevel: 71,
        maxLevel: 80,
        title: 'จอมทัพมังกรเกราะเงิน',
        badge: 'Silver Champion',
        icon: '🛡️',
        image: '/images/xiaolong/growth/stage_8.png',
        auraClass: 'shadow-blue-300',
        description: 'สวมเกราะเงินศักดิ์สิทธิ์ ปีกกว้างเปล่งประกาย แววตามุ่งมั่นสู่ความเป็นเลิศ',
      },
      {
        stage: 9,
        minLevel: 81,
        maxLevel: 90,
        title: 'มังกรขุนศึกเพลิงอเวจี',
        badge: 'Infernal Warlord',
        icon: '🔥',
        image: '/images/xiaolong/growth/stage_9.png',
        auraClass: 'shadow-red-500',
        description: 'เกราะเพลิงหนามอัคคีแผ่ความร้อนสูง พลังปัญญาสูงส่งจนข้าศึกเกรงขาม',
      },
      {
        stage: 10,
        minLevel: 91,
        maxLevel: 99,
        title: 'พญามังกรจักรพรรดิเกราะทอง',
        badge: 'Imperial Sovereign',
        icon: '👑',
        image: '/images/xiaolong/growth/stage_10.png',
        auraClass: 'shadow-yellow-400 ring-2 ring-yellow-300',
        description: 'มงกุฎและเกราะจักรพรรดิทองคำบริสุทธิ์ สง่างามดั่งเทพเจ้าแห่งสวรรค์',
      },
      {
        stage: 11,
        minLevel: 100,
        maxLevel: 100,
        title: 'มหาเทพมังกรฟ้าคอสมิกแห่งสวรรค์',
        badge: 'Celestial Divine Dragon',
        icon: '🌌',
        image: '/images/xiaolong/growth/stage_100.png',
        auraClass: 'shadow-purple-500 ring-4 ring-amber-400 animate-pulse',
        description: 'มังกรฟ้าจีนโบราณร่างเทพสูงสุด เหาะเหนือหมู่เมฆาสวรรค์ด้วยพลัง 1,000,000 ดาว!',
      },
    ],
  },
  panda: {
    id: 'panda',
    name: 'เป่าเปา (宝宝)',
    species: 'หมีแพนด้าจอมยุทธ์ (Kung Fu Panda)',
    emoji: '🐼',
    element: 'ลมปราณไผ่เขียว & หยินหยาง',
    description: 'จอมยุทธ์ขนปุยแสนน่ารัก รักสงบ กินเก่ง แต่เวลาต่อสู้หมัดกังฟูว่องไวดั่งสายลม',
    themeGradient: 'from-emerald-500 via-teal-500 to-emerald-700',
    cardBorder: 'border-emerald-300 hover:border-emerald-400',
    btnGradient: 'from-emerald-600 to-teal-500',
    foodName: 'หน่อไม้ดวงดาวกรุบกรอบ',
    foodEmoji: '🎋',
    voiceQuotes: [
      'งั่มๆ! หน่อไม้ดาวหวานฉ่ำจังเลย วันนี้หนูเก่งมากเลยนะ!',
      'ฮึ้บ! เป่าเปาฝึกกังฟูท่าใหม่ได้แล้ว หมัดสองพี่น้องพิทักษ์ดาว!',
      'ความพยายามคือพลังที่ยิ่งใหญ่ที่สุดในยุทธภพ สู้ๆ นะ!',
      'เป่าเปาจะกินดาวให้ครบ 1,000,000 ดาว เพื่อเป็นมหาเทพกังฟู!',
      'วิทยายุทธ์และชุดเกราะมังกรทองของเป่าเปาจะอัปเกรดทุกๆ 10 เลเวล มาฝึกฝนด้วยกันนะ!',
    ],
    stages: [
      {
        stage: 1,
        minLevel: 1,
        maxLevel: 10,
        title: 'ลูกแพนด้าขนปุยโบกมือทักทาย',
        badge: 'Waving Baby Cub',
        icon: '🐼',
        image: '/images/panda/growth/stage_1.png',
        auraClass: 'shadow-emerald-200',
        description: 'ลูกหมีแพนด้าน้อยแก้มกลม ขนปุย นั่งโบกมือทักทายอย่างเป็นมิตร น่ารักน่าเอ็นดู',
      },
      {
        stage: 2,
        minLevel: 11,
        maxLevel: 20,
        title: 'แพนด้าวัยเตาะแตะคลานซน',
        badge: 'Playful Crawler',
        icon: '🐾',
        image: '/images/panda/growth/stage_2.png',
        auraClass: 'shadow-emerald-300',
        description: 'คลานสำรวจโลกกว้างอย่างร่าเริง อยากรู้อยากเห็นทุกวิชา พร้อมเรียนรู้สิ่งใหม่ๆ',
      },
      {
        stage: 3,
        minLevel: 21,
        maxLevel: 30,
        title: 'ศิษย์กังฟูเตะขาเดียว',
        badge: 'One-Leg Kick Adept',
        icon: '🥋',
        image: '/images/panda/growth/stage_3.png',
        auraClass: 'shadow-teal-300',
        description: 'ฝึกยืนขาเดียวเตะลมปราณกังฟู ทรงตัวได้อย่างมั่นคง ความว่องไวเริ่มฉายแวว',
      },
      {
        stage: 4,
        minLevel: 31,
        maxLevel: 40,
        title: 'จอมยุทธ์น้อยสองอุ้งมือทรงพลัง',
        badge: 'Dual-Paw Martialist',
        icon: '🥊',
        image: '/images/panda/growth/stage_4.png',
        auraClass: 'shadow-teal-400',
        description: 'ยกสองอุ้งมือตั้งการ์ดวิชากำปั้นแพนด้า มั่นใจและพร้อมเผชิญหน้ากับทุกแบบทดสอบ',
      },
      {
        stage: 5,
        minLevel: 41,
        maxLevel: 50,
        title: 'ศิษย์เอกสำนักเส้าหลินชุดแดง',
        badge: 'Shaolin Disciple',
        icon: '🎋',
        image: '/images/panda/growth/stage_5.png',
        auraClass: 'shadow-emerald-400',
        description: 'สวมชุดฝึกยุทธเส้าหลินสีแดงคาดเขียว สำรวมจิตใจ เปี่ยมด้วยระเบียบวินัยและปัญญา',
      },
      {
        stage: 6,
        minLevel: 51,
        maxLevel: 60,
        title: 'จอมยุทธ์พเนจรเกราะแขนไผ่',
        badge: 'Bamboo Wanderer',
        icon: '⚔️',
        image: '/images/panda/growth/stage_6.png',
        auraClass: 'shadow-amber-300',
        description: 'สวมชุดนักสู้สีน้ำตาลคาดเกราะแขน ท่าร่างสงบนิ่งดั่งขุนเขา ว่องไวดั่งลมพัดผ่านกอไผ่',
      },
      {
        stage: 7,
        minLevel: 61,
        maxLevel: 70,
        title: 'นักเดินทางผู้กล้าผ้าคลุมน้ำตาล',
        badge: 'Cloaked Adventurer',
        icon: '🎒',
        image: '/images/panda/growth/stage_7.png',
        auraClass: 'shadow-amber-400',
        description: 'สวมผ้าคลุมและกระเป๋าย่ามเดินทาง ออกท่องยุทธภพสะสมดาวและความรู้จากทั่วสารทิศ',
      },
      {
        stage: 8,
        minLevel: 71,
        maxLevel: 80,
        title: 'อัศวินแพนด้าเกราะเหล็กแกร่ง',
        badge: 'Ironclad Vanguard',
        icon: '🛡️',
        image: '/images/panda/growth/stage_8.png',
        auraClass: 'shadow-slate-400',
        description: 'สวมเกราะเหล็กกล้าและสายสะพายผ้าคลุม แข็งแกร่งทรหด ป้องกันทุกอุปสรรคในการเรียน',
      },
      {
        stage: 9,
        minLevel: 81,
        maxLevel: 90,
        title: 'ขุนพลแพนด้ามังกรชาด',
        badge: 'Crimson Dragon General',
        icon: '🔥',
        image: '/images/panda/growth/stage_9.png',
        auraClass: 'shadow-red-500',
        description: 'สวมชุดเกราะมังกรสีชาดขลิบทองลวดลายโบราณ นำทัพฝ่าฟันโจทย์ยากได้อย่างสง่างาม',
      },
      {
        stage: 10,
        minLevel: 91,
        maxLevel: 99,
        title: 'จอมทัพแพนด้าคำรามเกราะทองผ้าคลุมแดง',
        badge: 'Roaring Imperial Warlord',
        icon: '👑',
        image: '/images/panda/growth/stage_10.png',
        auraClass: 'shadow-red-500 ring-2 ring-yellow-300',
        description: 'เกราะทองคำสลักเศียรสิงห์และผ้าคลุมแดงสง่างาม คำรามกึกก้องด้วยพลังดาวแห่งความรู้',
      },
      {
        stage: 11,
        minLevel: 100,
        maxLevel: 100,
        title: 'มหาเทพปรมาจารย์แพนด้าสวรรค์คอสมิก',
        badge: 'Celestial Grandmaster Panda',
        icon: '🌌',
        image: '/images/panda/growth/stage_100.png',
        auraClass: 'shadow-emerald-500 ring-4 ring-amber-400 animate-pulse',
        description: 'ลอยเหนือหมู่เมฆาสวรรค์ด้วยรัศมีวงแหวนทองคำ มงกุฎหยกทิพย์ และเกราะเทพคอสมิก กินดาวครบ 1,000,000 ดวง!',
      },
    ],
  },
  jellyfish: {
    id: 'jellyfish',
    name: 'เจลลี่ (Jelly)',
    species: 'แมงกะพรุนแก้วเรืองแสง (Crystal Jellyfish)',
    emoji: '🪼',
    element: 'วารีบริสุทธิ์ & พลังงานดวงดาวใต้ทะเล',
    description: 'สิ่งมีชีวิตลึกลับแห่งทะเลลึก เปล่งแสงระยิบระยับตามเสียงดนตรีและปัญญา',
    themeGradient: 'from-sky-400 via-cyan-500 to-indigo-600',
    cardBorder: 'border-cyan-300 hover:border-cyan-400',
    btnGradient: 'from-sky-500 to-indigo-600',
    foodName: 'ฟองสบู่ดาวเรืองแสง',
    foodEmoji: '🫧',
    voiceQuotes: [
      'ดุ๊กดิ๊กๆ~ ฟองสบู่ดาวสว่างวาบไปทั่วหัวใจเลย สบายตัวจัง!',
      'เจลลี่เรืองแสงได้ 7 สีตามอารมณ์เลยนะ พลังความรู้กำลังไหลเวียน!',
      'ใต้ทะเลลึกมีความลับมากมาย เหมือนบทเรียนที่รอให้เราค้นหา!',
      'ว่ายน้ำตามหาดาวให้ครบ 1,000,000 ดวง สู่มหาเทวีแห่งมหาสมุทร!',
      'ชุดเกราะแก้วและมงกุฎใต้สมุทรของเจลลี่จะเติบโตทุกๆ 10 เลเวล มาช่วยกันสะสมดาวนะ!',
    ],
    stages: [
      {
        stage: 1,
        minLevel: 1,
        maxLevel: 10,
        title: 'ละอองน้ำวารีจิ๋วแก้มใส',
        badge: 'Tiny Water Polyp',
        icon: '🫧',
        image: '/images/jelly/growth/stage_1.png',
        auraClass: 'shadow-sky-200',
        description: 'แมงกะพรุนทารกแก้มใสลอยดุ๊กดิ๊ก ตาโตแป๋วแหวว น่ารักน่าเอ็นดู',
      },
      {
        stage: 2,
        minLevel: 11,
        maxLevel: 20,
        title: 'ลูกแมงกะพรุนหัดว่ายน้ำ',
        badge: 'Little Swimmer',
        icon: '🪼',
        image: '/images/jelly/growth/stage_2.png',
        auraClass: 'shadow-cyan-200',
        description: 'เริ่มมีหนวดยาวพริ้วไหว ว่ายน้ำเล่นสำรวจปะการังใต้ทะเล',
      },
      {
        stage: 3,
        minLevel: 21,
        maxLevel: 30,
        title: 'แมงกะพรุนน้อยนักสำรวจสมุทร',
        badge: 'Ocean Explorer',
        icon: '🌊',
        image: '/images/jelly/growth/stage_3.png',
        auraClass: 'shadow-sky-300',
        description: 'หนวดระยิบระยับเปล่งแสงสีฟ้าอ่อน ว่ายน้ำคล่องแคล่วและอยากรู้อยากเห็น',
      },
      {
        stage: 4,
        minLevel: 31,
        maxLevel: 40,
        title: 'แมงกะพรุนริ้วคลื่นวารี',
        badge: 'Wave Dancer',
        icon: '🎐',
        image: '/images/jelly/growth/stage_4.png',
        auraClass: 'shadow-cyan-300',
        description: 'หมวกแมงกะพรุนมีลวดลายริ้วคลื่น หนวดพริ้วระย้าดั่งม่านริ้วแพรไหม',
      },
      {
        stage: 5,
        minLevel: 41,
        maxLevel: 50,
        title: 'แมงกะพรุนพรานสมุทรเกราะหนัง',
        badge: 'Tide Scout',
        icon: '🛡️',
        image: '/images/jelly/growth/stage_5.png',
        auraClass: 'shadow-blue-300',
        description: 'เริ่มยืนบนหนวดได้ สวมเกราะหนังสะพายสายรัดอกพร้อมออกผจญภัย',
      },
      {
        stage: 6,
        minLevel: 51,
        maxLevel: 60,
        title: 'อัศวินแมงกะพรุนผ้าคลุมแดง',
        badge: 'Crimson Tide Knight',
        icon: '⚔️',
        image: '/images/jelly/growth/stage_6.png',
        auraClass: 'shadow-indigo-300',
        description: 'สวมมงกุฎเงินประดับทับทิม เกราะเหล็กและผ้าคลุมแดงสง่างาม',
      },
      {
        stage: 7,
        minLevel: 61,
        maxLevel: 70,
        title: 'แม่ทัพแมงกะพรุนเกราะเพชรคราม',
        badge: 'Diamond Tide Commander',
        icon: '💎',
        image: '/images/jelly/growth/stage_7.png',
        auraClass: 'shadow-cyan-400',
        description: 'สวมชุดเกราะทองคำประดับอัญมณีสีคราม พลังสายฟ้าเวทมนตร์ไหลเวียนทั่วร่าง',
      },
      {
        stage: 8,
        minLevel: 71,
        maxLevel: 80,
        title: 'ผู้พิทักษ์หมวกศิลาใต้สมุทร',
        badge: 'Guardian of the Abyss',
        icon: '🛡️',
        image: '/images/jelly/growth/stage_8.png',
        auraClass: 'shadow-sky-400',
        description: 'สวมหมวกเกราะโบราณลวดลายทอง หนวดยาวเปล่งแสงนีออนสว่างวาบ',
      },
      {
        stage: 9,
        minLevel: 81,
        maxLevel: 90,
        title: 'ขุนศึกแมงกะพรุนเกราะหนามอเวจี',
        badge: 'Spiked Abyssal Warlord',
        icon: '⚡',
        image: '/images/jelly/growth/stage_9.png',
        auraClass: 'shadow-indigo-500',
        description: 'เกราะหนามศิลาทมิฬแห่งร่องลึกบาดาล นัยน์ตาสีฟ้าเรืองแสงพลังมหาศาล',
      },
      {
        stage: 10,
        minLevel: 91,
        maxLevel: 99,
        title: 'พญาแมงกะพรุนลวดลายทองบรรพกาล',
        badge: 'Ancient Golden Leviathan',
        icon: '✨',
        image: '/images/jelly/growth/stage_10.png',
        auraClass: 'shadow-yellow-300 ring-2 ring-cyan-300',
        description: 'ลวดลายทองคำสลักเสลาโบราณ นัยน์ตาเปล่งแสงทิพย์ พลังแห่งท้องทะเลอันไร้ขอบเขต',
      },
      {
        stage: 11,
        minLevel: 100,
        maxLevel: 100,
        title: 'มหาเทวีแมงกะพรุนคอสมิกแห่งมหาสมุทร',
        badge: 'Cosmic Ocean Empress',
        icon: '🌌',
        image: '/images/jelly/growth/stage_100.png',
        auraClass: 'shadow-purple-500 ring-4 ring-cyan-300 animate-pulse',
        description: 'สวมมงกุฎทองคำประดับเพชร หนวดคอสมิกสีทองและเปลวเพลิงดาราจักร กินดาวครบ 1,000,000 ดวง!',
      },
    ],
  },
  hippo: {
    id: 'hippo',
    name: 'ซูก้า (Sugar)',
    species: 'ชูก้าไรเดอร์บินเวหา (Flying Sugar Glider)',
    emoji: '🐿️',
    element: 'วายุสวรรค์ & พลังดวงดาวเวหา',
    description: 'ชูก้าไรเดอร์ขนปุยแสนน่ารัก บินร่อนผจญภัยสู่ท้องฟ้า กางปีกเวหาพิทักษ์ความรู้',
    themeGradient: 'from-amber-400 via-orange-400 to-rose-500',
    cardBorder: 'border-amber-300 hover:border-amber-400',
    btnGradient: 'from-amber-500 to-rose-500',
    foodName: 'น้ำหวานเกสรดาวระยิบระยับ',
    foodEmoji: '🍯',
    voiceQuotes: [
      'ฟิ้ววว! ซูก้ากางปีกร่อนเวหา อิ่มน้ำหวานเกสรดาวแล้ว สดชื่นสุดๆ!',
      'สะพายเป้ บินสำรวจความรู้รอบโลก ซูก้าจะบินคู่ไปกับน้องๆ เองนะ!',
      'ยิ่งเก่งขึ้น ปีกมังกรและพลังเวหาของซูก้าก็ยิ่งเปล่งประกายเจิดจ้า!',
      'บินทะยานสู่เลเวล 100 แล้วไปเป็นมหาเทพเวหาเซราฟิมดวงดาวกันเลย!',
    ],
    stages: [
      {
        stage: 1,
        minLevel: 1,
        maxLevel: 10,
        title: 'ชูก้าน้อยแก้มกลมนั่งยิ้มแฉ่ง',
        badge: 'Baby Glider',
        icon: '🐿️',
        image: '/images/sugar/growth/stage_1.png',
        auraClass: 'shadow-amber-200',
        description: 'ลูกชูก้าไรเดอร์ตัวจิ๋วขนปุยนุ่มนิ่ม ตาโตแป๋วแหววน่ารัก ส่งรอยยิ้มมอบพลังใจสดใส',
      },
      {
        stage: 2,
        minLevel: 11,
        maxLevel: 20,
        title: 'ชูก้านักสำรวจคลานเตาะแตะ',
        badge: 'Curious Crawler',
        icon: '🐾',
        image: '/images/sugar/growth/stage_2.png',
        auraClass: 'shadow-orange-200',
        description: 'เริ่มฝึกคลานสำรวจโลกกว้าง ก้าวเดินอย่างมุ่งมั่นอยากรู้อยากเห็นทุกสิ่งรอบตัว',
      },
      {
        stage: 3,
        minLevel: 21,
        maxLevel: 30,
        title: 'ชูก้ากางปีกร่อนเวหาเหินฟ้า',
        badge: 'Sky Glider',
        icon: '🪁',
        image: '/images/sugar/growth/stage_3.png',
        auraClass: 'shadow-sky-300',
        description: 'กางพังผืดปีกน้อยบินร่อนพริ้วไหวกลางอากาศ ลอยละล่องไปตามสายลมแห่งการเรียนรู้',
      },
      {
        stage: 4,
        minLevel: 31,
        maxLevel: 40,
        title: 'ชูก้านักผจญภัยเกราะหนังสะพายย่าม',
        badge: 'Pocket Adventurer',
        icon: '🎒',
        image: '/images/sugar/growth/stage_4.png',
        auraClass: 'shadow-amber-300',
        description: 'สวมเกราะหนังนักผจญภัยและกระเป๋าย่ามเก็บเมล็ดพันธุ์ปัญญา พร้อมท่องไปทุกดินแดน',
      },
      {
        stage: 5,
        minLevel: 41,
        maxLevel: 50,
        title: 'อัศวินชูก้าดาบเหล็กผ้าคลุมแดง',
        badge: 'Crimson Knight',
        icon: '🗡️',
        image: '/images/sugar/growth/stage_5.png',
        auraClass: 'shadow-rose-300',
        description: 'สวมเกราะเหล็กสะพายดาบกล้าหาญพร้อมผ้าคลุมสีแดงเพลิง ปกป้องน้องๆ ให้เก่งกาจรอบด้าน',
      },
      {
        stage: 6,
        minLevel: 51,
        maxLevel: 60,
        title: 'ผู้พิทักษ์ชูก้าโล่เงินเกราะน้ำเงินทอง',
        badge: 'Aegis Guardian',
        icon: '🛡️',
        image: '/images/sugar/growth/stage_6.png',
        auraClass: 'shadow-blue-300',
        description: 'สวมเกราะสีน้ำเงินขลิบทองและถือโล่พิทักษ์คุณธรรม สมาธิมั่นคงดั่งกำแพงเหล็ก',
      },
      {
        stage: 7,
        minLevel: 61,
        maxLevel: 70,
        title: 'นักรบชูก้าปีกมังกรม่วงทะยานฟ้า',
        badge: 'Dragonwing Raider',
        icon: '🪽',
        image: '/images/sugar/growth/stage_7.png',
        auraClass: 'shadow-purple-400',
        description: 'ปลุกปีกมังกรสีม่วงทองทะยานฟ้า แผ่สยายปีกเวหาเหินลมด้วยความเร็วเหนือชั้น',
      },
      {
        stage: 8,
        minLevel: 71,
        maxLevel: 80,
        title: 'มังกรเวหาชูก้าเขาแก้วปีกเพลิง',
        badge: 'Scarlet Drake',
        icon: '🔥',
        image: '/images/sugar/growth/stage_8.png',
        auraClass: 'shadow-rose-400',
        description: 'เขามังกรเวหางอกงาม ปีกกว้างสีแดงชาดสะกดสายตา บินผาดโผนโฉบทะลุเมฆา',
      },
      {
        stage: 9,
        minLevel: 81,
        maxLevel: 90,
        title: 'จอมทัพมังกรทองชูก้าเกราะเทวะ',
        badge: 'Golden Warlord',
        icon: '⚔️',
        image: '/images/sugar/growth/stage_9.png',
        auraClass: 'shadow-amber-500 ring-2 ring-amber-300',
        description: 'สวมเกราะทองคำเทวะ เขาคู่สง่างามและปีกเพลิงเกรียงไกร บัญชาการสายลมแห่งปัญญา',
      },
      {
        stage: 10,
        minLevel: 91,
        maxLevel: 99,
        title: 'เทวะเซราฟิมชูก้าปีกแสงดาราเหินเวหา',
        badge: 'Seraphim Aviator',
        icon: '✨',
        image: '/images/sugar/growth/stage_10.png',
        auraClass: 'shadow-amber-400 ring-2 ring-yellow-300 animate-pulse',
        description: 'วิวัฒนาการสู่ร่างกึ่งเทพเซราฟิม ปีกขนนกศักดิ์สิทธิ์ส่องประกายดาราระยิบระยับกลางท้องนภา',
      },
      {
        stage: 11,
        minLevel: 100,
        maxLevel: 100,
        title: 'มหาเทพดวงดาวเซราฟิมมังกรทองคำนิรันดร์',
        badge: 'Cosmic Seraphim Sovereign',
        icon: '👑',
        image: '/images/sugar/growth/stage_100.png',
        auraClass: 'shadow-yellow-500 ring-4 ring-amber-400 animate-pulse shadow-2xl',
        description: 'ร่างจุติสูงสุดมหาเทพเวหานิรันดร์ มงกุฎดวงดาว หางมังกรขนนกทองคำ และปีกเซราฟิมเต็มสวรรค์',
      },
    ],
  },
};

/**
 * Get cumulative stars needed to reach a given level (1 to 100).
 */
export function getTotalStarsForLevel(level: number): number {
  if (level <= 1) return 0;
  if (level >= MAX_PET_LEVEL) return MAX_STARS_FED;
  return LEVEL_STARS_TABLE[level] || 0;
}

/**
 * Get current level (1 to 100) based on cumulative total stars fed.
 */
export function getLevelFromStarsFed(starsFed: number): number {
  if (starsFed < MIN_STARS_LEVEL_2) return 1;
  if (starsFed >= MAX_STARS_FED) return MAX_PET_LEVEL;

  // Binary search in LEVEL_STARS_TABLE (1..100)
  let low = 1;
  let high = MAX_PET_LEVEL;
  let ans = 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (LEVEL_STARS_TABLE[mid] <= starsFed) {
      ans = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return ans;
}

/**
 * Get evolution stage based on level and pet type.
 * Dragon, Jellyfish, Panda, and Sugar Glider (hippo slot) have 11 stages (1-10, 11-20, 21-30, ..., 91-99, 100).
 */
export function getStageFromLevel(level: number, type: PetType = 'dragon'): number {
  if (type === 'dragon' || type === 'jellyfish' || type === 'panda' || type === 'hippo') {
    if (level >= 100) return 11;
    if (level <= 1) return 1;
    return Math.min(10, Math.floor((level - 1) / 10) + 1);
  }
  if (level >= 100) return 6;
  if (level >= 80) return 5;
  if (level >= 60) return 4;
  if (level >= 40) return 3;
  if (level >= 20) return 2;
  return 1;
}

/**
 * Get stage metadata for a pet at a given level.
 */
export function getPetStageDef(type: PetType, level: number): PetStageDef {
  const def = PET_CATALOG[type] || PET_CATALOG.dragon;
  const clamped = Math.max(1, Math.min(MAX_PET_LEVEL, level));
  const found = def.stages.find((s) => clamped >= s.minLevel && clamped <= s.maxLevel);
  return found || def.stages[0];
}

/**
 * Get growth artwork image for a pet at a given level.
 * Returns high-res transparent artwork for Xiao Long (dragon), Jelly (jellyfish), Bao Bao (panda), and Sugar (sugar glider).
 */
export function getPetGrowthImage(type: PetType, level: number): string | null {
  if (type === 'dragon') {
    const stage = getPetStageDef('dragon', level);
    return stage?.image || '/images/xiaolong/growth/stage_1.png';
  }
  if (type === 'jellyfish') {
    const stage = getPetStageDef('jellyfish', level);
    return stage?.image || '/images/jelly/growth/stage_1.png';
  }
  if (type === 'panda') {
    const stage = getPetStageDef('panda', level);
    return stage?.image || '/images/panda/growth/stage_1.png';
  }
  if (type === 'hippo') {
    const stage = getPetStageDef('hippo', level);
    return stage?.image || '/images/sugar/growth/stage_1.png';
  }
  return null;
}

export interface PetProgress {
  currentLevel: number;
  nextLevel: number;
  isMaxLevel: boolean;
  currentLevelStars: number;
  nextLevelStars: number;
  starsNeededForNextLevel: number;
  starsInCurrentLevel: number;
  levelPercent: number; // 0 to 100% towards next level
  overallPercent: number; // 0 to 100% towards Level 100 (1,000,000 stars)
  totalStarsFed: number;
  stageDef: PetStageDef;
}

/**
 * Calculate comprehensive progress metrics for a pet.
 */
export function calculatePetProgress(type: PetType, totalStarsFed: number): PetProgress {
  const currentLevel = getLevelFromStarsFed(totalStarsFed);
  const isMaxLevel = currentLevel >= MAX_PET_LEVEL;
  const nextLevel = isMaxLevel ? MAX_PET_LEVEL : currentLevel + 1;

  const currentLevelStars = getTotalStarsForLevel(currentLevel);
  const nextLevelStars = isMaxLevel ? MAX_STARS_FED : getTotalStarsForLevel(nextLevel);

  const span = nextLevelStars - currentLevelStars;
  const starsInCurrentLevel = Math.max(0, totalStarsFed - currentLevelStars);
  const starsNeededForNextLevel = isMaxLevel ? 0 : Math.max(0, nextLevelStars - totalStarsFed);

  const levelPercent = isMaxLevel
    ? 100
    : span > 0
    ? Math.min(100, Math.max(0, (starsInCurrentLevel / span) * 100))
    : 100;

  const overallPercent = Math.min(100, Math.max(0, (totalStarsFed / MAX_STARS_FED) * 100));
  const stageDef = getPetStageDef(type, currentLevel);

  return {
    currentLevel,
    nextLevel,
    isMaxLevel,
    currentLevelStars,
    nextLevelStars,
    starsNeededForNextLevel,
    starsInCurrentLevel,
    levelPercent,
    overallPercent,
    totalStarsFed,
    stageDef,
  };
}

/**
 * Feed stars to the active pet.
 * Deducts from profile.stars, adds to pet.totalStarsFed, recalculates level, and updates happiness.
 */
/**
 * Feed stars to the active pet.
 * Deducts from the chosen subject's stars (or available stars), adds to the active pet's totalStarsFed,
 * recalculates that pet's individual level, and leaves all other pets untouched!
 */
export function feedStarsToPet(
  profile: UserProfile,
  requestedStars: number,
  fromSubject?: SubjectType
): {
  updatedProfile: UserProfile;
  actualFed: number;
  leveledUp: boolean;
  oldLevel: number;
  newLevel: number;
} {
  const activeType = profile.activePetType || profile.pet?.type || 'dragon';
  const currentPet = profile.pets?.[activeType] || profile.pet || {
    name: PET_CATALOG[activeType]?.name || 'สัตว์เลี้ยงวิเศษ',
    type: activeType,
    level: 1,
    totalStarsFed: 0,
    stage: 1,
    happiness: 90,
    experience: 0,
  };

  const currentTotalFed = currentPet.totalStarsFed || 0;
  const remainingToMax = Math.max(0, MAX_STARS_FED - currentTotalFed);

  const subjectStars = profile.subjectStars || {
    chinese: 0,
    math: 0,
    english: 0,
    science: 0,
  };

  let availableStars = 0;
  if (fromSubject) {
    availableStars = subjectStars[fromSubject] || 0;
  } else {
    availableStars = Object.values(subjectStars).reduce((a, b) => a + b, 0);
    if (availableStars === 0 && (profile.stars || 0) > 0) {
      availableStars = profile.stars;
    }
  }

  const actualFed = Math.min(requestedStars, availableStars, remainingToMax);

  if (actualFed <= 0) {
    return {
      updatedProfile: profile,
      actualFed: 0,
      leveledUp: false,
      oldLevel: currentPet.level,
      newLevel: currentPet.level,
    };
  }

  // Deduct stars from chosen subject or in order
  const newSubjectStars = { ...subjectStars };
  if (fromSubject) {
    newSubjectStars[fromSubject] = Math.max(0, (newSubjectStars[fromSubject] || 0) - actualFed);
  } else {
    let toDeduct = actualFed;
    const subjects: SubjectType[] = ['chinese', 'math', 'english', 'science'];
    for (const sub of subjects) {
      if (toDeduct <= 0) break;
      const cur = newSubjectStars[sub] || 0;
      const take = Math.min(cur, toDeduct);
      newSubjectStars[sub] = cur - take;
      toDeduct -= take;
    }
  }

  const newTotalStars = Object.values(newSubjectStars).reduce((a, b) => a + b, 0);

  const oldLevel = currentPet.level || 1;
  const newTotalFed = currentTotalFed + actualFed;
  const newLevel = getLevelFromStarsFed(newTotalFed);
  const newStage = getStageFromLevel(newLevel, activeType);
  const leveledUp = newLevel > oldLevel;

  const updatedPet: PetCompanionData = {
    ...currentPet,
    totalStarsFed: newTotalFed,
    level: newLevel,
    stage: newStage,
    happiness: Math.min(100, (currentPet.happiness || 80) + Math.min(20, Math.ceil(actualFed / 5))),
    experience: newTotalFed,
  };

  // Only update this pet in the pets dictionary! The other 3 pets retain their own separate levels!
  const updatedPets = {
    ...(profile.pets || {}),
    [activeType]: updatedPet,
  };

  const updatedProfile: UserProfile = {
    ...profile,
    stars: newTotalStars,
    subjectStars: newSubjectStars,
    activePetType: activeType,
    pets: updatedPets as any,
    pet: updatedPet,
  };

  return {
    updatedProfile,
    actualFed,
    leveledUp,
    oldLevel,
    newLevel,
  };
}

/**
 * Switch the active pet type for the profile.
 * Loads that pet's OWN independent level and stars fed from profile.pets,
 * so switching pets preserves each pet's separate level!
 */
export function switchPetType(profile: UserProfile, newType: PetType): UserProfile {
  const def = PET_CATALOG[newType] || PET_CATALOG.dragon;
  const targetPet = profile.pets?.[newType] || {
    name: def.name,
    type: newType,
    level: 1,
    totalStarsFed: 0,
    stage: 1,
    happiness: 90,
    experience: 0,
  };

  const updatedPets = {
    ...(profile.pets || {}),
    [newType]: targetPet,
  };

  return {
    ...profile,
    activePetType: newType,
    pets: updatedPets as any,
    pet: targetPet,
  };
}
