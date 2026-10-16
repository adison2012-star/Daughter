export type BondType = 'covalent' | 'ionic' | 'metallic';

export interface ChemicalCompound {
  id: string;
  nameTh: string;
  nameEn: string;
  formula: string;
  equation: string;
  requiredElements: string[]; // Element symbols, e.g. ['H', 'O']
  bondType: BondType;
  bondTypeTh: string;
  state: 'solid' | 'liquid' | 'gas';
  stateTh: string;
  emoji: string;
  color: string; // Tailwind gradient for card
  description: string;
  dailyLifeUse: string;
  examTip: string;
  starsReward: number;
}

export interface HazardousReaction {
  id: string;
  title: string;
  hazardLevel: 'extreme' | 'high' | 'warning';
  hazardLevelTh: string;
  triggerElements: string[]; // Elements that trigger this hazard
  reason: string;
  safetyLesson: string;
  emoji: string;
}

// ==========================================
// 1. COMPOUND RECIPES (สารประกอบเคมีสำคัญ)
// ==========================================
export const CHEMISTRY_COMPOUNDS: ChemicalCompound[] = [
  {
    id: 'water',
    nameTh: 'น้ำบริสุทธิ์',
    nameEn: 'Water',
    formula: 'H₂O',
    equation: '2H₂ + O₂ → 2H₂O',
    requiredElements: ['H', 'O'],
    bondType: 'covalent',
    bondTypeTh: 'พันธะโคเวเลนต์ (ใช้อิเล็กตรอนร่วมกันระหว่างอโลหะ)',
    state: 'liquid',
    stateTh: 'ของเหลว',
    emoji: '💧',
    color: 'from-sky-400 to-blue-600',
    description: 'สารประกอบที่มีมากที่สุดในสิ่งมีชีวิตและเป็นตัวทำละลายสากลที่ยอดเยี่ยมที่สุด',
    dailyLifeUse: 'ดื่มดับกระหาย หล่อเลี้ยงเซลล์ทั่วร่างกาย และจำเป็นต่อการสังเคราะห์แสงของพืช',
    examTip: 'โมเลกุลน้ำมีขั้ว (Polar molecule) มีรูปร่างแบบมุมงอ (Bent) ทำมุม 104.5° สร้างพันธะไฮโดรเจนได้ดี',
    starsReward: 20,
  },
  {
    id: 'salt',
    nameTh: 'เกลือแกง (โซเดียมคลอไรด์)',
    nameEn: 'Table Salt (Sodium Chloride)',
    formula: 'NaCl',
    equation: '2Na + Cl₂ → 2NaCl',
    requiredElements: ['Na', 'Cl'],
    bondType: 'ionic',
    bondTypeTh: 'พันธะไอออนิก (แรงดึงดูดระหว่าง Na⁺ และ Cl⁻)',
    state: 'solid',
    stateTh: 'ของแข็ง (ผลึก)',
    emoji: '🧂',
    color: 'from-amber-200 to-slate-400',
    description: 'มหัศจรรย์แห่งเคมี: โซเดียมไวไฟระเบิดน้ำ + คลอรีนก๊าซพิษ รวมกันกลายเป็นเกลือแกงที่กินได้ปลอดภัย!',
    dailyLifeUse: 'ปรุงรสเค็ม ถนอมอาหาร รักษาสมดุลอิเล็กโทรไลต์และแรงดันออสโมติกในร่างกาย',
    examTip: 'ข้อสอบชอบออก: สารประกอบไอออนิกในสถานะของแข็งไม่นำไฟฟ้า แต่เมื่อหลอมเหลวหรือละลายน้ำจะนำไฟฟ้าได้ดี!',
    starsReward: 25,
  },
  {
    id: 'carbon_dioxide',
    nameTh: 'ก๊าซคาร์บอนไดออกไซด์',
    nameEn: 'Carbon Dioxide',
    formula: 'CO₂',
    equation: 'C + O₂ → CO₂',
    requiredElements: ['C', 'O'],
    bondType: 'covalent',
    bondTypeTh: 'พันธะโคเวเลนต์ (พันธะคู่ 2 พันธะ ระหว่าง C และ O)',
    state: 'gas',
    stateTh: 'ก๊าซ',
    emoji: '🫧',
    color: 'from-slate-400 to-zinc-600',
    description: 'ก๊าซไม่มีสี ไม่มีกลิ่น เกิดจากการเผาไหม้สมบูรณ์และการหายใจของสิ่งมีชีวิต',
    dailyLifeUse: 'พืชใช้สังเคราะห์ด้วยแสง อัดใส่ในน้ำอัดลมให้ซ่า และน้ำแข็งแห้ง (Dry Ice) ใช้แช่ไอศกรีม',
    examTip: 'โมเลกุลมีรูปร่างเป็นเส้นตรง (Linear) ไม่มีขั้ว (Non-polar) เพราะโมเมนต์คู่ขั้วหักล้างกันหมด',
    starsReward: 20,
  },
  {
    id: 'rust',
    nameTh: 'สนิมเหล็ก (ไอรอนออกไซด์)',
    nameEn: 'Rust (Iron(III) Oxide)',
    formula: 'Fe₂O₃',
    equation: '4Fe + 3O₂ → 2Fe₂O₃',
    requiredElements: ['Fe', 'O'],
    bondType: 'ionic',
    bondTypeTh: 'พันธะไอออนิก (ระหว่าง Fe³⁺ และ O²⁻)',
    state: 'solid',
    stateTh: 'ของแข็ง',
    emoji: '🟫',
    color: 'from-amber-700 to-orange-950',
    description: 'สารประกอบสีน้ำตาลแดง เกิดขึ้นเมื่อเนื้อเหล็กทำปฏิกิริยากับก๊าซออกซิเจนและความชื้นในอากาศ',
    dailyLifeUse: 'ใช้เป็นสารแต่งสีน้ำตาลแดงในเซรามิก เม็ดสีในเครื่องสำอาง และทำผงขัดโลหะ',
    examTip: 'การป้องกันสนิม: ทาสี, เคลือบน้ำมัน, หรือการชุบสังกะสี (Galvanizing) เพื่อกันไม่ให้เหล็กสัมผัส O₂ และ H₂O',
    starsReward: 20,
  },
  {
    id: 'hydrochloric_acid',
    nameTh: 'กรดไฮโดรคลอริก (กรดเกลือ)',
    nameEn: 'Hydrochloric Acid',
    formula: 'HCl',
    equation: 'H₂ + Cl₂ → 2HCl',
    requiredElements: ['H', 'Cl'],
    bondType: 'covalent',
    bondTypeTh: 'พันธะโคเวเลนต์มีขั้ว (แตกตัวให้ H⁺ 100% ในน้ำ)',
    state: 'liquid',
    stateTh: 'ของเหลว (สารละลาย)',
    emoji: '🧪',
    color: 'from-lime-400 to-emerald-600',
    description: 'กรดแก่อานุภาพสูง มีกลิ่นฉุนฉุน ละลายน้ำได้ดีเยี่ยมและมีฤทธิ์กัดกร่อนสูง',
    dailyLifeUse: 'อยู่ในน้ำย่อยกระเพาะอาหารของมนุษย์ (pH ~ 1.5-2.0) ช่วยย่อยโปรตีน และใช้ล้างคราบห้องน้ำ',
    examTip: 'HCl เป็นกรดแก่ (Strong Acid) แตกตัวสมบูรณ์ 100% เปลี่ยนสีกระดาษลิตมัสจากน้ำเงินเป็นแดง',
    starsReward: 25,
  },
  {
    id: 'glucose',
    nameTh: 'น้ำตาลกลูโคส',
    nameEn: 'Glucose',
    formula: 'C₆H₁₂O₆',
    equation: '6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂',
    requiredElements: ['C', 'H', 'O'],
    bondType: 'covalent',
    bondTypeTh: 'พันธะโคเวเลนต์แบบโครงสร้างวงแหวน',
    state: 'solid',
    stateTh: 'ของแข็ง (ผลึกขาว)',
    emoji: '🍬',
    color: 'from-amber-300 to-rose-400',
    description: 'โมโนแซ็กคาไรด์หรือน้ำตาลโมเลกุลเดี่ยว ผลผลิตทองคำจากกระบวนการสังเคราะห์แสงของพืช',
    dailyLifeUse: 'แหล่งพลังงานหลักทันทีของเซลล์ร่างกายมนุษย์และสมอง น้ำเกลือแร่ทางการแพทย์',
    examTip: 'เป็นน้ำตาลรีดิวซ์ (Reducing Sugar) ทำปฏิกิริยากับสารละลายเบเนดิกต์ได้ตะกอนสีแดงอิฐ Cu₂O!',
    starsReward: 30,
  },
  {
    id: 'ammonia',
    nameTh: 'ก๊าซแอมโมเนีย',
    nameEn: 'Ammonia',
    formula: 'NH₃',
    equation: 'N₂ + 3H₂ → 2NH₃',
    requiredElements: ['N', 'H'],
    bondType: 'covalent',
    bondTypeTh: 'พันธะโคเวเลนต์รูปพีระมิดฐานสามเหลี่ยม',
    state: 'gas',
    stateTh: 'ก๊าซ',
    emoji: '👃',
    color: 'from-cyan-400 to-teal-600',
    description: 'ก๊าซไร้สีที่มีกลิ่นฉุนเฉพาะตัว ผลิตด้วยกระบวนการฮาเบอร์-บอช (Haber-Bosch)',
    dailyLifeUse: 'ใช้ผลิตปุ๋ยไนโตรเจน (ยูเรีย) สำหรับพืชเกษตรกรรมทั่วโลก และใช้ในน้ำยาแอมโมเนียหอมดมแก้เป็นลม',
    examTip: 'เมื่อละลายน้ำจะได้สารละลายเบสอ่อน (NH₄⁺ + OH⁻) มีค่า pH > 7 เปลี่ยนลิตมัสแดงเป็นน้ำเงิน',
    starsReward: 25,
  },
  {
    id: 'methane',
    nameTh: 'ก๊าซมีเทน (ก๊าซธรรมชาติ)',
    nameEn: 'Methane',
    formula: 'CH₄',
    equation: 'C + 2H₂ → CH₄',
    requiredElements: ['C', 'H'],
    bondType: 'covalent',
    bondTypeTh: 'พันธะโคเวเลนต์รูปทรงสี่หน้า (Tetrahedral 109.5°)',
    state: 'gas',
    stateTh: 'ก๊าซ',
    emoji: '🔥',
    color: 'from-orange-400 to-red-600',
    description: 'ไฮโดรคาร์บอนที่โครงสร้างเรียบง่ายที่สุด เป็นองค์ประกอบหลักของก๊าซธรรมชาติ NGV/CNG',
    dailyLifeUse: 'เชื้อเพลิงก๊าซหุงต้ม ผลิตกระแสไฟฟ้า และก๊าซชีวภาพจากมูลสัตว์',
    examTip: 'เผาไหม้สมบูรณ์ได้ CO₂ และ H₂O โดยไม่เกิดเขม่าดำควันไฟ เป็นเชื้อเพลิงสะอาด',
    starsReward: 20,
  },
  {
    id: 'calcium_carbonate',
    nameTh: 'หินปูน (แคลเซียมคาร์บอเนต)',
    nameEn: 'Calcium Carbonate',
    formula: 'CaCO₃',
    equation: 'Ca + C + O₂ → CaCO₃',
    requiredElements: ['Ca', 'C', 'O'],
    bondType: 'ionic',
    bondTypeTh: 'พันธะไอออนิก (Ca²⁺ กับ CO₃²⁻)',
    state: 'solid',
    stateTh: 'ของแข็ง',
    emoji: '🪨',
    color: 'from-stone-300 to-stone-500',
    description: 'แร่ธาตุธรรมชาติที่พบในหินปูน เปลือกหอย เปลือกไข่ และหินงอกหินย้อยในถ้ำ',
    dailyLifeUse: 'ทำปูนซีเมนต์ก่อสร้าง ชอล์กเขียนกระดาน ยาลดกรดในกระเพาะ และอาหารเสริมแคลเซียม',
    examTip: 'เมื่อทำปฏิกิริยากับกรด จะเกิดฟองก๊าซ CO₂ เสมอ: CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂ (ข้อสอบยอดฮิต!)',
    starsReward: 25,
  },
  {
    id: 'sodium_hydroxide',
    nameTh: 'โซดาไฟ (โซเดียมไฮดรอกไซด์)',
    nameEn: 'Sodium Hydroxide (Caustic Soda)',
    formula: 'NaOH',
    equation: '2Na + 2H₂O → 2NaOH + H₂',
    requiredElements: ['Na', 'O', 'H'],
    bondType: 'ionic',
    bondTypeTh: 'พันธะไอออนิก (Na⁺ กับ OH⁻)',
    state: 'solid',
    stateTh: 'ของแข็ง (เกล็ดขาว ละลายน้ำ)',
    emoji: '🧼',
    color: 'from-violet-400 to-purple-600',
    description: 'เบสแก่ทรงพลัง มีฤทธิ์กัดกร่อนสูง ละลายน้ำจะคายความร้อนมาก สัมผัสแล้วลื่นมือคล้ายสบู่',
    dailyLifeUse: 'สลายไขมันแก้ท่อระบายน้ำตัน อุตสาหกรรมทำสบู่ และฟอกเยื่อกระดาษ',
    examTip: 'เป็นเบสแก่ (Strong Base) มี pH สูงถึง 14 เปลี่ยนสีกระดาษลิตมัสจากแดงเป็นน้ำเงินทันที',
    starsReward: 25,
  },
  {
    id: 'silicon_dioxide',
    nameTh: 'ซิลิกา / ควอตซ์ (ทรายบริสุทธิ์)',
    nameEn: 'Silicon Dioxide (Silica / Quartz)',
    formula: 'SiO₂',
    equation: 'Si + O₂ → SiO₂',
    requiredElements: ['Si', 'O'],
    bondType: 'covalent',
    bondTypeTh: 'พันธะโคเวเลนต์แบบโครงผลึกร่างตาข่าย (Network Covalent)',
    state: 'solid',
    stateTh: 'ของแข็ง (แข็งแกร่งมาก)',
    emoji: '🏖️',
    color: 'from-yellow-200 to-amber-500',
    description: 'สารประกอบโครงร่างตาข่ายที่แข็งแรง จุดหลอมเหลวสูงกว่า 1,700°C พบมากในเม็ดทรายและคริสตัลควอตซ์',
    dailyLifeUse: 'หลอมทำแก้วและกระจกใส เป็นสารตั้งต้นผลิตชิปไมโครโพรเซสเซอร์และแผงโซลาร์เซลล์',
    examTip: 'เนื่องจากเป็นโครงผลึกร่างตาข่าย จึงไม่ละลายน้ำ แข็งมาก และจุดเดือดจุดหลอมเหลวสูงลิ่ว',
    starsReward: 25,
  },
  {
    id: 'magnesium_oxide',
    nameTh: 'แมกนีเซียมออกไซด์',
    nameEn: 'Magnesium Oxide',
    formula: 'MgO',
    equation: '2Mg + O₂ → 2MgO',
    requiredElements: ['Mg', 'O'],
    bondType: 'ionic',
    bondTypeTh: 'พันธะไอออนิก (Mg²⁺ กับ O²⁻)',
    state: 'solid',
    stateTh: 'ของแข็ง (ผงขาว)',
    emoji: '⚡',
    color: 'from-emerald-300 to-teal-500',
    description: 'เกิดจากการเผาลวดแมกนีเซียมในอากาศ จะลุกไหม้ให้เปลวไฟสีขาวสว่างจ้าแสบตา!',
    dailyLifeUse: 'ทำฉนวนทนความร้อนสูงในเตาหลอม ทำผงชอล์กกันลื่นของนักยิมนาสติก/ปีนผา และยาลดกรด',
    examTip: 'Mg เป็นโลหะหมู่ 2A ให้อิเล็กตรอน 2 ตัว รวมกับ O ที่รับ 2 ตัว พันธะไอออนิกแข็งแรงมาก',
    starsReward: 20,
  },
  {
    id: 'ozone',
    nameTh: 'ก๊าซโอโซน',
    nameEn: 'Ozone',
    formula: 'O₃',
    equation: '3O₂ → 2O₃ (แสงแดด / ไฟฟ้าสถิต)',
    requiredElements: ['O'], // Pure element allotrope
    bondType: 'covalent',
    bondTypeTh: 'พันธะโคเวเลนต์แบบเรโซแนนซ์ (Resonance)',
    state: 'gas',
    stateTh: 'ก๊าซ',
    emoji: '🛡️',
    color: 'from-sky-300 to-indigo-500',
    description: 'อัญรูปหนึ่งของออกซิเจน มี 3 อะตอม รวมตัวเป็นเกราะคุ้มกันโลกจากรังสีอัลตราไวโอเลต (UV)',
    dailyLifeUse: 'อยู่ในชั้นบรรยากาศสตราโตสเฟียร์ (Stratosphere) และใช้ฆ่าเชื้อโรคในระบบน้ำดื่ม',
    examTip: 'โอโซนในชั้นบรรยากาศสูงเป็นเกราะป้องกันชีวิต แต่โอโซนใกล้พื้นดินจัดเป็นมลพิษทางอากาศที่ระคายเคืองปอด',
    starsReward: 20,
  },
  {
    id: 'calcium_chloride',
    nameTh: 'แคลเซียมคลอไรด์',
    nameEn: 'Calcium Chloride',
    formula: 'CaCl₂',
    equation: 'Ca + Cl₂ → CaCl₂',
    requiredElements: ['Ca', 'Cl'],
    bondType: 'ionic',
    bondTypeTh: 'พันธะไอออนิก (Ca²⁺ กับ 2Cl⁻)',
    state: 'solid',
    stateTh: 'ของแข็ง',
    emoji: '❄️',
    color: 'from-blue-200 to-indigo-400',
    description: 'สารประกอบไอออนิกที่ดูดความชื้นในอากาศได้ดีเป็นเลิศ และละลายน้ำคายความร้อนสูง',
    dailyLifeUse: 'เม็ดกันชื้นในซองขนมและตู้เสื้อผ้า ใช้โรยละลายน้ำแข็งบนถนนเมืองหนาว',
    examTip: 'ละลายน้ำแล้วแตกตัวได้ 3 ไอออน (Ca²⁺ + 2Cl⁻) ทำให้จุดเยือกแข็งของน้ำลดต่ำลงมาก (Freezing Point Depression)',
    starsReward: 20,
  },
  {
    id: 'brass_alloy',
    nameTh: 'ทองเหลือง (โลหะผสม)',
    nameEn: 'Brass (Copper-Zinc Alloy)',
    formula: 'Cu-Zn',
    equation: 'Cu + Zn → Cu-Zn Alloy',
    requiredElements: ['Cu', 'Zn'],
    bondType: 'metallic',
    bondTypeTh: 'พันธะโลหะ (ทะเลอิเล็กตรอน เชื่อมระหว่างอะตอมโลหะ)',
    state: 'solid',
    stateTh: 'ของแข็ง (เนื้อเงางาม)',
    emoji: '🎺',
    color: 'from-yellow-400 to-amber-600',
    description: 'โลหะผสมระหว่างทองแดง (Cu) และสังกะสี (Zn) สีทองอร่าม เหนียว ทนการกัดกร่อน และเสียงกังวาน',
    dailyLifeUse: 'ทำเครื่องดนตรีเป่าทองเหลือง (ทรัมเป็ต ทรอมโบน) ลูกบิดประตู และเหรียญกษาปณ์',
    examTip: 'พันธะโลหะมี "ทะเลอิเล็กตรอน (Sea of Electrons)" เคลื่อนที่อิสระ จึงนำไฟฟ้าและความร้อนได้ดีเยี่ยม และตีเป็นแผ่นได้โดยไม่แตกหัก',
    starsReward: 25,
  },
];

// ==========================================
// 2. HAZARDOUS & EXPLOSIVE REACTIONS (ปฏิกิริยาอันตราย & ระเบิดตูม!)
// ==========================================
export const HAZARDOUS_REACTIONS: HazardousReaction[] = [
  {
    id: 'alkali_water_explosion',
    title: 'ระเบิดเปลวเพลิงโลหะแอลคาไลกับน้ำ! 💥🔥',
    hazardLevel: 'extreme',
    hazardLevelTh: 'อันตรายสูงสุด (Extreme Explosion)',
    triggerElements: ['Na', 'K'], // combined with H + O (water)
    reason: 'โลหะหมู่ 1A (โซเดียม Na, โพแทสเซียม K) ไวต่อปฏิกิริยาสูงมาก เมื่อสัมผัสน้ำจะเกิดปฏิกิริยาคายความร้อนมหาศาล ปลดปล่อยก๊าซไฮโดรเจนติดไฟอย่างรวดเร็วจนเกิดการระเบิดสนั่นห้องแล็บ!',
    safetyLesson: 'กฎความปลอดภัย: โลหะโซเดียมและโพแทสเซียมต้องแช่เก็บไว้ในน้ำมันพาราฟินเสมอ ห้ามสัมผัสน้ำหรือความชื้นเด็ดขาด!',
    emoji: '💥',
  },
  {
    id: 'hydrogen_oxygen_boom',
    title: 'ระเบิดการสันดาปออกซีไฮโดรเจน! 💥🚀',
    hazardLevel: 'high',
    hazardLevelTh: 'ไวไฟระเบิดรุนแรง (Oxy-Hydrogen Bang)',
    triggerElements: ['H', 'O'], // when triggered in explosive mode or excessive sparks
    reason: 'ก๊าซไฮโดรเจน (H₂) ไวไฟสูงมาก เมื่อผสมกับออกซิเจน (O₂) ในอัตราส่วน 2:1 แล้วโดนประกายไฟ จะเกิดการรวมตัวอย่างฉับพลัน เกิดคลื่นกระแทกและเสียงระเบิดดังตูม!',
    safetyLesson: 'กฎความปลอดภัย: ถังก๊าซไฮโดรเจนต้องอยู่ห่างจากเปลวไฟและประกายไฟทุกชนิดอย่างเด็ดขาด!',
    emoji: '💣',
  },
  {
    id: 'cyanide_toxic_fume',
    title: 'ก๊าซพิษไฮโดรเจนไซยาไนด์ ควันตลบอบอวล! ☠️💨',
    hazardLevel: 'extreme',
    hazardLevelTh: 'สารพิษอันตรายถึงชีวิต (Lethal Toxic Fume)',
    triggerElements: ['H', 'C', 'N'],
    reason: 'การรวมตัวของไฮโดรเจน คาร์บอน และไนโตรเจน ในสภาวะกรดทำให้เกิดก๊าซพิษไซยาไนด์ ซึ่งยับยั้งการหายใจของเซลล์และมีกลิ่นคล้ายอัลมอนด์ไหม้!',
    safetyLesson: 'กฎความปลอดภัย: การทดลองที่มีสารกลุ่มไซยาไนด์ต้องทำในตู้ดูดควัน (Fume Hood) และสวมหน้ากากป้องกันสารเคมีเสมอ!',
    emoji: '☠️',
  },
  {
    id: 'violent_acid_base_splatter',
    title: 'ความร้อนปะทุ กรด-ด่างเดือดกระเด็น! 💥🧪',
    hazardLevel: 'high',
    hazardLevelTh: 'ความร้อนคายตัวฉับพลัน (Violent Exothermic Splatter)',
    triggerElements: ['H', 'Cl', 'Na', 'O'],
    reason: 'การเทกรดแก่ (HCl) ผสมกับเบสแก่ (NaOH) อย่างรวดเร็วโดยไม่เจือจาง จะเกิดปฏิกิริยาสะเทินที่คายความร้อนสูงจัด จนของเหลวเดือดปุดพุ่งทะลักออกจากบีกเกอร์!',
    safetyLesson: 'กฎความปลอดภัย: "เทกรดลงน้ำช้าๆ ห้ามเทน้ำลงกรดเด็ดขาด" และต้องสวมแว่นตานิรภัย (Goggles) เสมอ!',
    emoji: '🔥',
  },
];

// Helper: Match elements in beaker to compound
export function findMatchingCompound(elementsInBeaker: string[]): ChemicalCompound | null {
  const uniqueElements = Array.from(new Set(elementsInBeaker)).sort();

  for (const compound of CHEMISTRY_COMPOUNDS) {
    const requiredSorted = [...compound.requiredElements].sort();
    if (
      uniqueElements.length === requiredSorted.length &&
      uniqueElements.every((el, idx) => el === requiredSorted[idx])
    ) {
      return compound;
    }
  }

  return null;
}

// Helper: Check if beaker contents trigger a hazardous explosion
export function checkHazardousReaction(
  elementsInBeaker: string[],
  forceExplosion?: boolean
): HazardousReaction | null {
  const set = new Set(elementsInBeaker);

  // 1. Alkali + Water components (Na or K + H + O)
  if ((set.has('Na') || set.has('K')) && set.has('H') && set.has('O')) {
    return HAZARDOUS_REACTIONS[0];
  }

  // 2. Cyanide Hazard (H + C + N)
  if (set.has('H') && set.has('C') && set.has('N')) {
    return HAZARDOUS_REACTIONS[2];
  }

  // 3. Violent Acid-Base Splatter (H + Cl + Na + O)
  if (set.has('H') && set.has('Cl') && set.has('Na') && set.has('O')) {
    return HAZARDOUS_REACTIONS[3];
  }

  // 4. Forced explosion or unstable over-mixture (4+ arbitrary elements with reactive metals)
  if (forceExplosion) {
    return HAZARDOUS_REACTIONS[1];
  }

  return null;
}
