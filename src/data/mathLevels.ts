export interface MathSubCategory {
  id: string;
  name: string;
  icon: string;
  desc: string;
}

export const LEVEL1_SUBCATEGORIES: MathSubCategory[] = [
  { id: 'all', name: 'รวมคูณ-หารประถมต้น', icon: '🎯', desc: 'คละโจทย์ฝึกการคูณและการหารพื้นฐาน' },
  { id: 'times_tables', name: 'สูตรคูณคล่อง (แม่ 2–12)', icon: '✖️', desc: 'ท่องจำและคำนวณสูตรคูณแม่ 2 ถึงแม่ 12 อย่างรวดเร็ว' },
  { id: 'division_facts', name: 'การหารลงตัว & คิดย้อนกลับ', icon: '➗', desc: 'หารลงตัวโดยใช้ความสัมพันธ์จากสูตรคูณ' },
  { id: 'missing_numbers', name: 'ช่องว่างตัวเลขหายไป', icon: '🧩', desc: 'เติมตัวเลขในช่องว่าง ? × a = b หรือ a ÷ ? = c' },
  { id: 'remainder', name: 'การหารมีเศษเบื้องต้น', icon: '🧺', desc: 'ฝึกคิดหารมีเศษ เช่น 14 ÷ 3 = 4 เศษ 2' },
  { id: 'two_digit_times', name: 'คูณเลข 2 หลักกับ 1 หลัก', icon: '🔢', desc: 'คูณกระจายหลักหน่วยและหลักสิบ เช่น 14 × 3' },
  { id: 'story_problems', name: 'โจทย์ปัญหาชีวิตประจำวัน', icon: '📖', desc: 'เรื่องราวสนุกๆ แบ่งขนม ซื้อของ จัดกลุ่มสองพี่น้อง' },
];

export const LEVEL2_SUBCATEGORIES: MathSubCategory[] = [
  { id: 'all', name: 'รวมทุกหมวด (สุ่มข้อสอบ)', icon: '🎯', desc: 'คละโจทย์ทุกทักษะระดับประถมปลาย' },
  { id: 'fractions', name: 'เศษส่วน & จำนวนคละ', icon: '🍰', desc: 'บวกลบคูณหารเศษส่วนและทำเป็นเศษส่วนอย่างต่ำ' },
  { id: 'decimals', name: 'ทศนิยม & การแปลง', icon: '🔢', desc: 'บวกลบคูณหารทศนิยมและการแปลงเศษส่วนเป็นทศนิยม' },
  { id: 'percentage', name: 'ร้อยละ กำไร-ลดราคา', icon: '🏷️', desc: 'คิดคำนวณเปอร์เซ็นต์ กำไร ขาดทุน และส่วนลด' },
  { id: 'gcd_lcm', name: 'ห.ร.ม. & ค.ร.น.', icon: '🧮', desc: 'หาตัวหารร่วมมากและคูณร่วมน้อย พร้อมโจทย์ประยุกต์' },
  { id: 'geometry', name: 'พื้นที่ ปริมาตร & วงกลม', icon: '📐', desc: 'คำนวณพื้นที่รูปเหลี่ยม วงกลม และปริมาตรทรงสี่เหลี่ยม' },
  { id: 'ratios', name: 'บัญญัติไตรยางศ์ & อัตราส่วน', icon: '⚖️', desc: 'แก้โจทย์เทียบบัญญัติไตรยางศ์และแบ่งสัดส่วน' },
  { id: 'bodmas', name: 'ลำดับคำนวณ & ค่าเฉลี่ย', icon: '⚡', desc: 'BODMAS ในวงเล็บ คูณหารก่อนบวกลบ และค่าเฉลี่ย' },
];

export interface MathLevel {
  level: number;
  gradeEn: string;
  gradeTh: string;
  title: string;
  mascotRank: string;
  badge: string;
  color: string;
  cardBg: string;
  description: string;
  topics: string[];
  formulas: { name: string; formula: string; explanation: string }[];
}

export const MATH_LEVELS: MathLevel[] = [
  {
    level: 1,
    gradeEn: 'Grades 1–3 / Key Stage 1 (ป.1–ป.3)',
    gradeTh: 'ประถมศึกษาตอนต้น (เน้นคูณ-หารคล่องแคล่ว ✖️➗)',
    title: 'พื้นฐานการคูณและการหารคล่องแคล่ว (Multiplication & Division Mastery)',
    mascotRank: 'พ่อมดฝึกหัดตัวจิ๋ว 🧙‍♂️🌱',
    badge: 'Level 1: ประถมต้น (เน้นคูณ-หาร)',
    color: 'from-amber-400 via-emerald-500 to-teal-600',
    cardBg: 'border-emerald-200 bg-emerald-50/40',
    description: 'ฝึกฝนการคูณและการหารอย่างเป็นระบบ: ท่องสูตรคูณแม่ 2–12 คล่องแคล่ว, การหารลงตัวคิดย้อนกลับ, การหารมีเศษ, การคูณเลข 2 หลัก และโจทย์ปัญหาแบ่งสิ่งของในชีวิตจริง',
    topics: [
      'ความหมายของการคูณ (การบวกซ้ำๆ และการจัดแถว)',
      'สูตรคูณแม่ 2 ถึงแม่ 12 (คล่องแคล่ว แม่นยำ ว่องไว)',
      'ความสัมพันธ์ระหว่างการคูณและการหาร (คิดย้อนกลับ)',
      'การหาตัวเลขที่หายไปในช่องว่าง (? × a = b)',
      'การหารลงตัว และการหารมีเศษเบื้องต้น',
      'การคูณเลข 2 หลักกับเลข 1 หลัก (เช่น 15 × 3, 24 × 2)',
      'โจทย์ปัญหาการคูณและการหารแบ่งสิ่งของในชีวิตประจำวัน',
    ],
    formulas: [
      { name: 'ความหมายของการคูณ', formula: 'a × b = b + b + ... (บวกกัน a ตัว)', explanation: 'เช่น 3 × 4 = 4 + 4 + 4 = 12' },
      { name: 'สมบัติการสลับที่การคูณ', formula: 'a × b = b × a', explanation: 'สลับหน้าหลัง ผลลัพธ์เท่ากันเสมอ เช่น 6 × 7 = 7 × 6 = 42' },
      { name: 'ความสัมพันธ์การคูณกับการหาร', formula: 'ถ้า a × b = c แล้ว c ÷ a = b', explanation: 'การหารคือการคิดย้อนกลับจากสูตรคูณ เช่น 4 × 8 = 32 ดังนั้น 32 ÷ 4 = 8' },
      { name: 'การตรวจคำตอบการหารมีเศษ', formula: 'ตัวตั้ง = (ตัวหาร × ผลหาร) + เศษ', explanation: 'เช่น 14 ÷ 3 = 4 เศษ 2 ตรวจคำตอบ (3 × 4) + 2 = 12 + 2 = 14' },
      { name: 'การคูณด้วยศูนย์และหนึ่ง', formula: 'a × 0 = 0 และ a × 1 = a', explanation: 'จำนวนใดคูณ 0 ได้ 0 เสมอ และคูณ 1 ได้ตัวเดิม' },
    ],
  },
  {
    level: 2,
    gradeEn: 'Grades 3–6 / Key Stage 2 (ป.4–ป.6)',
    gradeTh: 'ประถมศึกษาตอนปลาย (ป.3–6 โหมดเน้นพิเศษ 🌟)',
    title: 'คณิตคิดคำนวณขั้นสูงและโจทย์ประยุกต์ (Upper Elementary Mastery)',
    mascotRank: 'พ่อมดพลังเวทตัวเลข 🧙‍♂️⚡',
    badge: 'Level 2: ประถมปลาย (เน้นพิเศษ)',
    color: 'from-blue-600 via-indigo-600 to-purple-700',
    cardBg: 'border-blue-300 bg-blue-50/40',
    description: 'หลักสูตรเข้มข้นสำหรับนักเรียน ป.4–ป.6: เศษส่วน ทศนิยม ร้อยละ กำไรขาดทุน ห.ร.ม./ค.ร.น. พื้นที่เรขาคณิต และบัญญัติไตรยางศ์ ฝึกจนคล่องแคล่วสู่การสอบเข้า ม.1 และความเป็นเลิศ',
    topics: [
      'เศษส่วน (การบวก ลบ คูณ หาร และจำนวนคละ)',
      'ทศนิยม (การคูณ หาร และการแปลงเป็นเศษส่วน)',
      'ร้อยละ เปอร์เซ็นต์ ส่วนลด กำไร และขาดทุน',
      'ห.ร.ม. และ ค.ร.น. พร้อมโจทย์ปัญหานาฬิกาปลุก/แบ่งสิ่งของ',
      'พื้นที่ เส้นรอบรูป และปริมาตร (สี่เหลี่ยม สามเหลี่ยม วงกลม πr²)',
      'บัญญัติไตรยางศ์ และอัตราส่วน (Ratios & Proportions)',
      'ลำดับการคำนวณ (BODMAS) และค่าเฉลี่ยเลขคณิต (Mean)',
    ],
    formulas: [
      { name: 'การบวกเศษส่วนส่วนไม่เท่ากัน', formula: 'a/b + c/d = (a·d + b·c) / (b·d)', explanation: 'ต้องหา ค.ร.น. ของตัวส่วนก่อนจึงจะบวกหรือลบกันได้' },
      { name: 'การคูณและหารเศษส่วน', formula: '(a/b) ÷ (c/d) = (a/b) × (d/c)', explanation: 'เปลี่ยนเครื่องหมายหารเป็นคูณ แล้วกลับเศษเป็นส่วนของตัวหาร' },
      { name: 'ร้อยละกำไร (Profit %)', formula: 'กำไร = (ราคาขาย - ราคาทุน) ⟹ กำไร% = (กำไร / ทุน) × 100', explanation: 'คิดเทียบกับราคาทุนเสมอ' },
      { name: 'ส่วนลดราคาสินค้า', formula: 'ราคาจ่ายจริง = ราคาป้าย × (100 - %ลด) / 100', explanation: 'เช่น ป้าย 500 บาท ลด 20% จ่ายจริง 500 × 80% = 400 บาท' },
      { name: 'พื้นที่และเส้นรอบวงกลม', formula: 'Area = πr², Circumference = 2πr', explanation: 'เมื่อ r คือรัศมี และ π ≈ 22/7 หรือ 3.14' },
      { name: 'ปริมาตรทรงสี่เหลี่ยมมุมฉาก', formula: 'Volume = กว้าง × ยาว × สูง', explanation: 'หน่วยเป็นลูกบาศก์เซนติเมตร หรือลูกบาศก์เมตร' },
      { name: 'บัญญัติไตรยางศ์ (Rule of Three)', formula: 'ราคา N ชิ้น = (ราคา 1 ชิ้น) × N', explanation: 'หาค่าของ 1 หน่วยก่อน แล้วนำไปคูณจำนวนที่ต้องการ' },
      { name: 'ลำดับคำนวณ (BODMAS)', formula: '1. วงเล็บ () ➡️ 2. คูณ/หาร ➡️ 3. บวก/ลบ', explanation: 'คำนวณจากซ้ายไปขวาตามลำดับความสำคัญ' },
    ],
  },
  {
    level: 3,
    gradeEn: 'Grades 7–9 / Key Stage 3 / Middle School',
    gradeTh: 'มัธยมศึกษาตอนต้น (ม.1–3)',
    title: 'พีชคณิตและเรขาคณิต (Pre-Algebra & Euclidean Geometry)',
    mascotRank: 'จอมเวทผู้ควบคุมสมการ 🧙‍♂️🔮',
    badge: 'Level 3: มัธยมต้น',
    color: 'from-purple-500 to-pink-600',
    cardBg: 'border-purple-200 bg-purple-50/30',
    description: 'ระบบจำนวนเต็มบวกและลบ สมการเชิงเส้นตัวแปรเดียว เลขยกกำลัง ทฤษฎีบทพีทาโกรัส และสถิติเบื้องต้น',
    topics: [
      'การดำเนินการของจำนวนเต็มบวกและลบ',
      'การแก้สมการเชิงเส้นตัวแปรเดียว (ax + b = c)',
      'สมบัติของเลขยกกำลัง (Laws of Exponents)',
      'ทฤษฎีบทพีทาโกรัส (Pythagorean Theorem: a² + b² = c²)',
      'สถิติเบื้องต้น: ค่าเฉลี่ยเลขคณิต มัธยฐาน ฐานนิยม',
      'การแยกตัวประกอบพหุนามเบื้องต้น',
    ],
    formulas: [
      { name: 'ทฤษฎีบทพีทาโกรัส', formula: 'a² + b² = c²', explanation: 'ในสามเหลี่ยมมุมฉาก ด้านตรงข้ามมุมฉากกำลังสองเท่ากับผลบวกกำลังสองของด้านประกอบ' },
      { name: 'สมบัติเลขยกกำลัง (การคูณ)', formula: 'aᵐ × aⁿ = aᵐ⁺ⁿ', explanation: 'ฐานเหมือนกันคูณกัน นำเลขชี้กำลังมาบวกกัน' },
      { name: 'การแก้สมการเชิงเส้น', formula: 'ax + b = c ⟹ x = (c - b) / a', explanation: 'ย้ายข้างเพื่อหาค่าตัวแปร x' },
      { name: 'ค่าเฉลี่ยเลขคณิต (Mean)', formula: 'x̄ = (Σx) / N', explanation: 'ผลรวมของข้อมูลทั้งหมด หารด้วยจำนวนข้อมูล' },
    ],
  },
  {
    level: 4,
    gradeEn: 'Grades 10–12 / High School / Pre-Calculus',
    gradeTh: 'มัธยมศึกษาตอนปลาย (ม.4–6)',
    title: 'พีชคณิตขั้นสูงและตรีโกณมิติ (Advanced Algebra & Trigonometry)',
    mascotRank: 'มหาจอมเวทแห่งมิติ 🧙‍♂️🌌',
    badge: 'Level 4: มัธยมปลาย',
    color: 'from-rose-500 to-orange-500',
    cardBg: 'border-rose-200 bg-rose-50/30',
    description: 'สมการกำลังสอง ฟังก์ชันและกราฟ ตรีโกณมิติ ลอการิทึมและฟังก์ชันเอกซ์โพเนนเชียล ลำดับและอนุกรม',
    topics: [
      'สมการกำลังสองและสูตร Quadratic Formula',
      'ตรีโกณมิติวงกลมหนึ่งหน่วย (sin, cos, tan, sec, csc, cot)',
      'ฟังก์ชันเอกซ์โพเนนเชียลและลอการิทึม (Logarithms)',
      'ลำดับและอนุกรมเลขคณิตและเรขาคณิต (Sequences & Series)',
      'เมทริกซ์และดีเทอร์มิแนนต์เบื้องต้น',
      'หลักการนับเบื้องต้นและความน่าจะเป็น (Permutations & Probability)',
    ],
    formulas: [
      { name: 'สูตรสมการกำลังสอง (Quadratic)', formula: 'x = (-b ± √(b² - 4ac)) / (2a)', explanation: 'หาค่าคำตอบของสมการ ax² + bx + c = 0' },
      { name: 'เอกลักษณ์ตรีโกณมิติหลัก', formula: 'sin²(θ) + cos²(θ) = 1', explanation: 'เอกลักษณ์พีทาโกรัสบนวงกลมหนึ่งหน่วย' },
      { name: 'สมบัติของลอการิทึม', formula: 'log_b(xy) = log_b(x) + log_b(y)', explanation: 'ลอการิทึมของผลคูณ เท่ากับผลบวกของลอการิทึม' },
      { name: 'พจน์ทั่วไปของลำดับเลขคณิต', formula: 'aₙ = a₁ + (n - 1)d', explanation: 'หาพจน์ที่ n เมื่อ a₁ คือพจน์แรก และ d คือผลต่างร่วม' },
    ],
  },
  {
    level: 5,
    gradeEn: 'Undergraduate Year 1 / AP Calculus / STEM Foundations',
    gradeTh: 'มหาวิทยาลัยปี 1 / เตรียมอุดมศึกษา',
    title: 'แคลคูลัสและพีชคณิตเชิงเส้นพื้นฐาน (Calculus I & Linear Algebra)',
    mascotRank: 'ปรมาจารย์แคลคูลัส 🧙‍♂️📐',
    badge: 'Level 5: มหาวิทยาลัยปี 1',
    color: 'from-teal-500 to-cyan-600',
    cardBg: 'border-teal-200 bg-teal-50/30',
    description: 'ลิมิตและความต่อเนื่อง อนุพันธ์และกฎลูกโซ่ ปริพันธ์ (อินทิกรัล) พีชคณิตเวกเตอร์ และดีเทอร์มิแนนต์เมทริกซ์',
    topics: [
      'ลิมิตและความต่อเนื่องของฟังก์ชัน (Limits & Continuity)',
      'อนุพันธ์ (Derivatives) และกฎกำลัง: d/dx(xⁿ) = n·xⁿ⁻¹',
      'กฎลูกโซ่ (Chain Rule), กฎผลคูณ (Product Rule), กฎผลหาร (Quotient Rule)',
      'ปริพันธ์ไม่จำกัดเขตและจำกัดเขต (Indefinite & Definite Integrals)',
      'การประยุกต์อนุพันธ์: จุดวิกฤต จุดสูงสุดต่ำสุด (Optimization)',
      'พีชคณิตเชิงเส้น: เวกเตอร์, ผลคูณสเกลาร์ (Dot Product), ดีเทอร์มิแนนต์ 2×2',
    ],
    formulas: [
      { name: 'กฎลูกโซ่ (Chain Rule)', formula: 'd/dx [f(g(x))] = f\'(g(x)) · g\'(x)', explanation: 'อนุพันธ์ของฟังก์ชันประกอบ' },
      { name: 'ทฤษฎีบทหลักมูลของแคลคูลัส', formula: '∫ₐᵇ f(x) dx = F(b) - F(a)', explanation: 'เชื่อมโยงอนุพันธ์กับการหาพื้นที่ใต้กราฟ' },
      { name: 'ดีเทอร์มิแนนต์เมทริกซ์ 2×2', formula: 'det [a b; c d] = ad - bc', explanation: 'คำนวณพื้นที่และภาวะมีตัวผกผันของเมทริกซ์' },
      { name: 'อนุพันธ์ของฟังก์ชันตรีโกณมิติ', formula: 'd/dx [sin(x)] = cos(x), d/dx [cos(x)] = -sin(x)', explanation: 'อัตราการเปลี่ยนแปลงของฟังก์ชันคลื่น' },
    ],
  },
  {
    level: 6,
    gradeEn: 'University Higher STEM / Multivariable & Advanced Math',
    gradeTh: 'มหาวิทยาลัยขั้นสูง (University Advanced STEM)',
    title: 'แคลคูลัสหลายตัวแปรและสมการเชิงอนุพันธ์ (Multivariable & Differential Equations)',
    mascotRank: 'มหาศาสตราจารย์แห่งจักรวาลคณิตศาสตร์ 🧙‍♂️🏛️',
    badge: 'Level 6: มหาวิทยาลัยขั้นสูง',
    color: 'from-violet-600 to-fuchsia-600',
    cardBg: 'border-violet-200 bg-violet-50/30',
    description: 'อนุพันธ์ย่อย (Partial Derivatives) เวกเตอร์แคลคูลัส (Gradient/Divergence/Curl) ปริพันธ์สองชั้นและสามชั้น ไอเกนแวลูและไอเกนเวกเตอร์ สมการเชิงอนุพันธ์อันดับหนึ่งและสอง',
    topics: [
      'อนุพันธ์ย่อย (Partial Derivatives: ∂f/∂x, ∂f/∂y)',
      'เกรเดียนต์และเวกเตอร์แคลคูลัส (Gradient ∇f, Directional Derivatives)',
      'ปริพันธ์สองชั้น (Double Integrals over 2D Regions)',
      'ไอเกนแวลูและไอเกนเวกเตอร์ (Eigenvalues & Eigenvectors: Av = λv)',
      'สมการเชิงอนุพันธ์อันดับหนึ่ง (First-Order ODEs: Separable & Linear)',
      'อนุกรมเทย์เลอร์และแมคลอริน (Taylor & Maclaurin Series)',
    ],
    formulas: [
      { name: 'เวกเตอร์เกรเดียนต์ (Gradient)', formula: '∇f(x,y) = (∂f/∂x) î + (∂f/∂y) ĵ', explanation: 'เวกเตอร์ชี้ไปยังทิศทางที่ฟังก์ชันเพิ่มขึ้นเร็วที่สุด' },
      { name: 'สมการลักษณะเฉพาะ (Eigenvalue Equation)', formula: 'det(A - λI) = 0', explanation: 'หาค่าไอเกนแวลู λ ของการแปลงเชิงเส้น' },
      { name: 'อนุกรมเทย์เลอร์รอบจุด x=a', formula: 'f(x) = Σ [f⁽ⁿ⁾(a)/n!] (x - a)ⁿ', explanation: 'ประมาณค่าฟังก์ชันไม่เป็นเชิงเส้นด้วยพหุนาม' },
      { name: 'สมการอนุพันธ์เชิงเส้นอันดับหนึ่ง', formula: 'dy/dx + P(x)y = Q(x)', explanation: 'แก้โดยใช้ตัวประกอบปริพันธ์ I(x) = e^(∫P dx)' },
    ],
  },
];
