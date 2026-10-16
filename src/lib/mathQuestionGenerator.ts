export interface MathQuestion {
  id: string;
  level: number;
  topic: string;
  question: string;
  questionHtml?: string;
  choices: string[];
  correctAnswer: string;
  stepByStep: string[];
  hint: string;
  points: number;
}

export function generateMathQuestion(level: number, category?: string): MathQuestion {
  const qId = Math.random().toString(36).substring(2, 9);

  switch (level) {
    case 1:
      return generateLevel1Question(qId, category);
    case 2:
      return generateLevel2Question(qId, category);
    case 3:
      return generateLevel3Question(qId);
    case 4:
      return generateLevel4Question(qId);
    case 5:
      return generateLevel5Question(qId);
    case 6:
      return generateLevel6Question(qId);
    default:
      return generateLevel1Question(qId, category);
  }
}

// -------------------------------------------------------------
// LEVEL 1: ประถมศึกษาตอนต้น (เน้นคูณ-หารคล่องแคล่วและเก่ง ✖️➗)
// -------------------------------------------------------------
function generateLevel1Question(id: string, category?: string): MathQuestion {
  const cat = category && category !== 'all' ? category : null;

  if (cat === 'times_tables') return generateLevel1TimesTableQuestion(id);
  if (cat === 'division_facts') return generateLevel1DivisionQuestion(id);
  if (cat === 'missing_numbers') return generateLevel1MissingNumberQuestion(id);
  if (cat === 'remainder') return generateLevel1RemainderQuestion(id);
  if (cat === 'two_digit_times') return generateLevel1TwoDigitTimesQuestion(id);
  if (cat === 'story_problems') return generateLevel1StoryProblemQuestion(id);

  // If 'all' or undefined, randomly choose among the multiplication & division skills
  const pick = Math.floor(Math.random() * 6);
  switch (pick) {
    case 0: return generateLevel1TimesTableQuestion(id);
    case 1: return generateLevel1DivisionQuestion(id);
    case 2: return generateLevel1MissingNumberQuestion(id);
    case 3: return generateLevel1RemainderQuestion(id);
    case 4: return generateLevel1TwoDigitTimesQuestion(id);
    default: return generateLevel1StoryProblemQuestion(id);
  }
}

// 1. สูตรคูณคล่องแคล่ว (แม่ 2 ถึง แม่ 12)
function generateLevel1TimesTableQuestion(id: string): MathQuestion {
  // Select table from 2 to 12
  const a = Math.floor(Math.random() * 11) + 2; // 2 to 12
  const b = Math.floor(Math.random() * 11) + 2; // 2 to 12
  const ans = a * b;

  const choices = shuffleChoices([
    ans.toString(),
    (ans + a).toString(),
    (ans - (ans > a ? a : 2)).toString(),
    (ans + 2).toString(),
  ]);

  return {
    id,
    level: 1,
    topic: `สูตรคูณ: แม่ ${a} × ${b}`,
    question: `จงหาผลคูณของ ${a} × ${b} = ?`,
    choices,
    correctAnswer: ans.toString(),
    stepByStep: [
      `ความหมายของการคูณ: ${a} × ${b} หมายถึง มี ${b} บวกกัน ${a} ครั้ง`,
      `ท่องสูตรคูณแม่ ${a}: ${Array.from({ length: Math.min(b, 5) }, (_, i) => `${a}×${i + 1}=${a * (i + 1)}`).join(', ')}${b > 5 ? ' ...' : ''}`,
      `เมื่อท่องถึง ${a} × ${b} จะได้ผลลัพธ์เท่ากับ ${ans}`,
      `สมบัติสลับที่: ${b} × ${a} ก็ได้ผลลัพธ์เท่ากับ ${ans} เช่นกัน!`,
    ],
    hint: `ลองท่องสูตรคูณแม่ ${a} หรือแม่ ${b} ดูนะจ๊ะ`,
    points: 6,
  };
}

// 2. การหารลงตัว & คิดย้อนกลับ (Division Facts)
function generateLevel1DivisionQuestion(id: string): MathQuestion {
  const divisor = Math.floor(Math.random() * 8) + 2; // 2 to 9
  const quotient = Math.floor(Math.random() * 9) + 2; // 2 to 10
  const dividend = divisor * quotient;

  const choices = shuffleChoices([
    quotient.toString(),
    (quotient + 1).toString(),
    (quotient - 1).toString(),
    (quotient + 2).toString(),
  ]);

  return {
    id,
    level: 1,
    topic: 'การหาร: การหารลงตัวคิดย้อนกลับ',
    question: `จงหาผลหารของ ${dividend} ÷ ${divisor} = ?`,
    choices,
    correctAnswer: quotient.toString(),
    stepByStep: [
      `การหารคือการคิดย้อนกลับของสูตรคูณ!`,
      `ถามตัวเองว่า: "${divisor} คูณกับจำนวนใดแล้วได้ ${dividend}?"`,
      `จากสูตรคูณแม่ ${divisor}: ${divisor} × ${quotient} = ${dividend}`,
      `ดังนั้น ${dividend} ÷ ${divisor} = ${quotient}`,
    ],
    hint: `คิดว่าแม่ ${divisor} คูณอะไรได้ ${dividend} นะ`,
    points: 6,
  };
}

// 3. ช่องว่างตัวเลขหายไป (? × a = b หรือ a ÷ ? = c)
function generateLevel1MissingNumberQuestion(id: string): MathQuestion {
  const isMul = Math.random() > 0.5;
  const a = Math.floor(Math.random() * 8) + 2; // 2 to 9
  const b = Math.floor(Math.random() * 8) + 2; // 2 to 9
  const prod = a * b;

  if (isMul) {
    const askFirst = Math.random() > 0.5;
    const qText = askFirst ? `[ ? ] × ${b} = ${prod}` : `${a} × [ ? ] = ${prod}`;
    const ansVal = askFirst ? a : b;
    const choices = shuffleChoices([
      ansVal.toString(),
      (ansVal + 1).toString(),
      (ansVal - 1).toString(),
      (ansVal + 2).toString(),
    ]);

    return {
      id,
      level: 1,
      topic: 'สมการช่องว่าง: ตัวเลขคูณที่หายไป',
      question: `เติมตัวเลขลงในช่องว่าง: ${qText}`,
      choices,
      correctAnswer: ansVal.toString(),
      stepByStep: [
        `โจทย์ถามว่า: จำนวนใดที่คูณกับ ${askFirst ? b : a} แล้วได้ ${prod}?`,
        `ใช้วิธีคิดย้อนกลับด้วยการหาร: ${prod} ÷ ${askFirst ? b : a} = ${ansVal}`,
        `ตรวจคำตอบ: ${a} × ${b} = ${prod} (ถูกต้อง!)`,
      ],
      hint: 'นำผลลัพธ์มาหารด้วยตัวเลขที่มีอยู่ได้เลยจ้า',
      points: 7,
    };
  } else {
    // prod ÷ [ ? ] = a
    const choices = shuffleChoices([
      b.toString(),
      (b + 1).toString(),
      (b - 1).toString(),
      (b + 2).toString(),
    ]);

    return {
      id,
      level: 1,
      topic: 'สมการช่องว่าง: ตัวหารที่หายไป',
      question: `เติมตัวเลขลงในช่องว่าง: ${prod} ÷ [ ? ] = ${a}`,
      choices,
      correctAnswer: b.toString(),
      stepByStep: [
        `โจทย์ถามว่า: ${prod} หารด้วยจำนวนใดแล้วได้ ${a}?`,
        `คิดจากสูตรคูณ: ${a} คูณกับอะไรได้ ${prod}?`,
        `เนื่องจาก ${a} × ${b} = ${prod}`,
        `ดังนั้น ตัวเลขในช่องว่างคือ ${b}`,
      ],
      hint: 'คิดว่าตัวเลขด้านหลังคูณกับอะไรแล้วได้ตัวตั้งจ้า',
      points: 7,
    };
  }
}

// 4. การหารมีเศษเบื้องต้น (Division with Remainder)
function generateLevel1RemainderQuestion(id: string): MathQuestion {
  const divisor = Math.floor(Math.random() * 5) + 3; // 3, 4, 5, 6, 7
  const quotient = Math.floor(Math.random() * 5) + 2; // 2, 3, 4, 5, 6
  const remainder = Math.floor(Math.random() * (divisor - 1)) + 1; // 1 to divisor-1
  const dividend = divisor * quotient + remainder;

  const ans = `${quotient} เศษ ${remainder}`;
  const fake1 = `${quotient + 1} เศษ ${remainder}`;
  const fake2 = `${quotient} เศษ ${remainder + 1}`;
  const fake3 = `${quotient - 1} เศษ ${remainder}`;

  const choices = shuffleChoices([ans, fake1, fake2, fake3]);

  return {
    id,
    level: 1,
    topic: 'การหาร: การหารมีเศษเบื้องต้น',
    question: `จงหาผลหารของ ${dividend} ÷ ${divisor} = ?`,
    choices,
    correctAnswer: ans,
    stepByStep: [
      `ขั้นตอนที่ 1: ท่องสูตรคูณแม่ ${divisor} ให้ได้ค่าใกล้เคียง ${dividend} แต่ไม่เกิน`,
      `${divisor} × ${quotient} = ${divisor * quotient}`,
      `ขั้นตอนที่ 2: หาเศษที่เหลือ โดยนำตัวตั้งลบด้วยผลคูณ: ${dividend} - ${divisor * quotient} = ${remainder}`,
      `ตรวจคำตอบ: (${divisor} × ${quotient}) + ${remainder} = ${divisor * quotient} + ${remainder} = ${dividend}`,
      `ดังนั้น ได้คำตอบคือ: ${ans}`,
    ],
    hint: `ท่องแม่ ${divisor} ให้ใกล้เคียง ${dividend} ที่สุดแต่ห้ามเกินนะ`,
    points: 8,
  };
}

// 5. คูณเลข 2 หลักกับ 1 หลัก (เช่น 15 × 3, 24 × 2)
function generateLevel1TwoDigitTimesQuestion(id: string): MathQuestion {
  const tens = (Math.floor(Math.random() * 4) + 1) * 10; // 10, 20, 30, 40
  const units = Math.floor(Math.random() * 5) + 1; // 1, 2, 3, 4, 5
  const twoDigit = tens + units; // 11 to 45
  const single = Math.floor(Math.random() * 4) + 2; // 2, 3, 4, 5
  const ans = twoDigit * single;

  const choices = shuffleChoices([
    ans.toString(),
    (ans + 10).toString(),
    (ans - single).toString(),
    (ans + single).toString(),
  ]);

  return {
    id,
    level: 1,
    topic: 'การคูณ: คูณเลขสองหลักกับหนึ่งหลัก',
    question: `จงหาผลคูณของ ${twoDigit} × ${single} = ?`,
    choices,
    correctAnswer: ans.toString(),
    stepByStep: [
      `ใช้วิธีกระจายคิดตามหลัก: แยก ${twoDigit} เป็น ${tens} + ${units}`,
      `ขั้นตอนที่ 1 (คูณหลักสิบ): ${tens} × ${single} = ${tens * single}`,
      `ขั้นตอนที่ 2 (คูณหลักหน่วย): ${units} × ${single} = ${units * single}`,
      `ขั้นตอนที่ 3: นำผลลัพธ์มารวมกัน: ${tens * single} + ${units * single} = ${ans}`,
    ],
    hint: 'แยกคูณทีละหลัก: เอาหลักสิบคูณก่อน แล้วบวกด้วยหลักหน่วยคูณนะ',
    points: 7,
  };
}

// 6. โจทย์ปัญหาคูณ-หารในชีวิตจริง
function generateLevel1StoryProblemQuestion(id: string): MathQuestion {
  const isMul = Math.random() > 0.5;

  if (isMul) {
    const stories = [
      {
        person: 'พี่สาวอัยย่า',
        item: 'กล่องดินสอสี',
        boxes: 4,
        perBox: 6,
        unit: 'แท่ง',
      },
      {
        person: 'น้องสาวไอร่า',
        item: 'จานขนมคุกกี้',
        boxes: 5,
        perBox: 4,
        unit: 'ชิ้น',
      },
      {
        person: 'คุณพ่อ',
        item: 'แพ็คสมุดวาดภาพ',
        boxes: 3,
        perBox: 8,
        unit: 'เล่ม',
      },
      {
        person: 'คุณแม่',
        item: 'ตะกร้าส้มหวาน',
        boxes: 6,
        perBox: 5,
        unit: 'ผล',
      },
    ];
    const s = stories[Math.floor(Math.random() * stories.length)];
    const total = s.boxes * s.perBox;

    const choices = shuffleChoices([
      `${total} ${s.unit}`,
      `${total + s.perBox} ${s.unit}`,
      `${s.boxes + s.perBox} ${s.unit}`,
      `${total - s.boxes} ${s.unit}`,
    ]);

    return {
      id,
      level: 1,
      topic: 'โจทย์ปัญหา: การคูณจัดกลุ่มสิ่งของ',
      question: `${s.person}มี${s.item}จำนวน ${s.boxes} ใบ แต่ละใบมี${s.unit}อยู่ ${s.perBox} ${s.unit} ถามว่ามีทั้งหมดกี่${s.unit}?`,
      choices,
      correctAnswer: `${total} ${s.unit}`,
      stepByStep: [
        `โจทย์กำหนด: มีทั้งหมด ${s.boxes} กลุ่ม แต่ละกลุ่มมี ${s.perBox} ${s.unit}`,
        `การรวมสิ่งของที่มีจำนวนเท่าๆ กัน ใช้การคูณ`,
        `ประโยคสัญลักษณ์: ${s.boxes} × ${s.perBox} = ?`,
        `คำนวณ: ${s.boxes} × ${s.perBox} = ${total} ${s.unit}`,
      ],
      hint: 'นำจำนวนกลุ่มมาคูณกับจำนวนของในแต่ละกลุ่มจ้า',
      points: 7,
    };
  } else {
    const stories = [
      {
        person: 'พี่สาวอัยย่า',
        item: 'ลูกอมรสสตรอว์เบอร์รี',
        total: 24,
        friends: 4,
        unit: 'เม็ด',
      },
      {
        person: 'น้องสาวไอร่า',
        item: 'สติกเกอร์เจ้าหญิง',
        total: 30,
        friends: 5,
        unit: 'แผ่น',
      },
      {
        person: 'คุณพ่อ',
        item: 'เหรียญดาวรางวัล',
        total: 36,
        friends: 6,
        unit: 'ดวง',
      },
      {
        person: 'คุณครู',
        item: 'ดินสอสีไม้',
        total: 28,
        friends: 4,
        unit: 'แท่ง',
      },
    ];
    const s = stories[Math.floor(Math.random() * stories.length)];
    const perFriend = s.total / s.friends;

    const choices = shuffleChoices([
      `${perFriend} ${s.unit}`,
      `${perFriend + 1} ${s.unit}`,
      `${perFriend - 1} ${s.unit}`,
      `${s.friends} ${s.unit}`,
    ]);

    return {
      id,
      level: 1,
      topic: 'โจทย์ปัญหา: การหารแบ่งสิ่งของเท่าๆ กัน',
      question: `${s.person}มี${s.item}ทั้งหมด ${s.total} ${s.unit} ต้องการแบ่งให้เพื่อน ${s.friends} คน คนละเท่าๆ กัน เพื่อนแต่ละคนจะได้${s.unit}คนละกี่${s.unit}?`,
      choices,
      correctAnswer: `${perFriend} ${s.unit}`,
      stepByStep: [
        `โจทย์กำหนด: ของทั้งหมด ${s.total} ${s.unit} แบ่งเท่าๆ กัน ${s.friends} คน`,
        `การแบ่งจำนวนเท่าๆ กัน คือการหาร`,
        `ประโยคสัญลักษณ์: ${s.total} ÷ ${s.friends} = ?`,
        `คิดจากสูตรคูณ: ${s.friends} × อะไรได้ ${s.total}? (เนื่องจาก ${s.friends} × ${perFriend} = ${s.total})`,
        `ดังนั้น แต่ละคนจะได้ ${perFriend} ${s.unit}`,
      ],
      hint: 'นำของทั้งหมดมาหารด้วยจำนวนคนได้เลยจ้า',
      points: 7,
    };
  }
}

// -------------------------------------------------------------
// LEVEL 2: ประถมศึกษาตอนปลาย (Grades 4–6 / ป.4–ป.6 เน้นพิเศษ 🌟)
// -------------------------------------------------------------
function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

function lcm(a: number, b: number): number {
  return (a * b) / gcd(a, b);
}

function generateLevel2Question(id: string, category?: string): MathQuestion {
  const cat = category && category !== 'all' ? category : null;

  if (cat === 'fractions') return generateLevel2FractionsQuestion(id);
  if (cat === 'decimals') return generateLevel2DecimalsQuestion(id);
  if (cat === 'percentage') return generateLevel2PercentageQuestion(id);
  if (cat === 'gcd_lcm') return generateLevel2GcdLcmQuestion(id);
  if (cat === 'geometry') return generateLevel2GeometryQuestion(id);
  if (cat === 'ratios') return generateLevel2RatiosQuestion(id);
  if (cat === 'bodmas') return generateLevel2BodmasQuestion(id);

  // If 'all' or undefined, randomly select among 7 specialized topics
  const pick = Math.floor(Math.random() * 7);
  switch (pick) {
    case 0: return generateLevel2FractionsQuestion(id);
    case 1: return generateLevel2DecimalsQuestion(id);
    case 2: return generateLevel2PercentageQuestion(id);
    case 3: return generateLevel2GcdLcmQuestion(id);
    case 4: return generateLevel2GeometryQuestion(id);
    case 5: return generateLevel2RatiosQuestion(id);
    default: return generateLevel2BodmasQuestion(id);
  }
}

// 1. เศษส่วน & จำนวนคละ (Fractions & Mixed Numbers)
function generateLevel2FractionsQuestion(id: string): MathQuestion {
  const subType = Math.floor(Math.random() * 4);

  if (subType === 0) {
    // บวก/ลบ เศษส่วนที่ตัวส่วนไม่เท่ากัน
    const d1 = [2, 3, 4, 5, 6][Math.floor(Math.random() * 5)];
    let d2 = [3, 4, 5, 6, 8][Math.floor(Math.random() * 5)];
    while (d1 === d2) d2 = d2 + 1;

    const n1 = Math.floor(Math.random() * (d1 - 1)) + 1;
    const n2 = Math.floor(Math.random() * (d2 - 1)) + 1;
    const isAdd = Math.random() > 0.4;

    const commonDenom = lcm(d1, d2);
    const m1 = commonDenom / d1;
    const m2 = commonDenom / d2;
    const adjN1 = n1 * m1;
    const adjN2 = n2 * m2;

    let resNum = isAdd ? adjN1 + adjN2 : adjN1 - adjN2;
    let op = '+';
    let qN1 = n1, qD1 = d1, qN2 = n2, qD2 = d2;

    // ensure positive result if minus
    if (!isAdd) {
      op = '-';
      if (adjN1 <= adjN2) {
        // swap
        qN1 = n2; qD1 = d2; qN2 = n1; qD2 = d1;
        resNum = adjN2 - adjN1;
      }
    }

    const g = gcd(resNum, commonDenom);
    const simpNum = resNum / g;
    const simpDenom = commonDenom / g;
    const ans = simpDenom === 1 ? `${simpNum}` : `${simpNum}/${simpDenom}`;
    const unsimp = `${resNum}/${commonDenom}`;

    const choices = shuffleChoices([
      ans,
      `${simpNum + 1}/${simpDenom}`,
      `${resNum}/${d1 + d2}`,
      `${Math.abs(qN1 - qN2)}/${commonDenom}`,
    ]);

    return {
      id,
      level: 2,
      topic: `เศษส่วน: การ${isAdd ? 'บวก' : 'ลบ'}เศษส่วนที่ตัวส่วนไม่เท่ากัน`,
      question: `จงหาผลลัพธ์ของ ${qN1}/${qD1} ${op} ${qN2}/${qD2} = ? (ตอบเป็นรูปอย่างต่ำ)`,
      choices,
      correctAnswer: ans,
      stepByStep: [
        `โจทย์: ${qN1}/${qD1} ${op} ${qN2}/${qD2}`,
        `ขั้นตอนที่ 1: หา ค.ร.น. ของตัวส่วน (${qD1} และ ${qD2}) ได้เท่ากับ ${commonDenom}`,
        `ขั้นตอนที่ 2: แปลงตัวส่วนให้เท่ากับ ${commonDenom}`,
        `• ${qN1}/${qD1} = (${qN1} × ${m1}) / (${qD1} × ${m1}) = ${adjN1}/${commonDenom}`,
        `• ${qN2}/${qD2} = (${qN2} × ${m2}) / (${qD2} × ${m2}) = ${adjN2}/${commonDenom}`,
        `ขั้นตอนที่ 3: นำตัวเศษมา${isAdd ? 'บวก' : 'ลบ'}กัน: ${adjN1} ${op} ${adjN2} = ${resNum}`,
        `ได้เศษส่วน: ${unsimp}${g > 1 ? ` ตัดทอนด้วยแม่ ${g} เป็นเศษส่วนอย่างต่ำได้: ${ans}` : ''}`,
      ],
      hint: 'ต้องทำตัวส่วนให้เท่ากันด้วยการหา ค.ร.น. ก่อนเสมอ!',
      points: 8,
    };
  } else if (subType === 1) {
    // คูณเศษส่วน
    const d1 = [2, 3, 4, 5][Math.floor(Math.random() * 4)];
    const n1 = Math.floor(Math.random() * (d1 - 1)) + 1;
    const d2 = [3, 4, 5, 7][Math.floor(Math.random() * 4)];
    const n2 = Math.floor(Math.random() * (d2 - 1)) + 1;

    const rawNum = n1 * n2;
    const rawDenom = d1 * d2;
    const g = gcd(rawNum, rawDenom);
    const simpNum = rawNum / g;
    const simpDenom = rawDenom / g;
    const ans = `${simpNum}/${simpDenom}`;

    const choices = shuffleChoices([
      ans,
      `${n1 + n2}/${d1 + d2}`,
      `${rawNum + 1}/${rawDenom}`,
      `${simpNum}/${simpDenom + 2}`,
    ]);

    return {
      id,
      level: 2,
      topic: 'เศษส่วน: การคูณเศษส่วน',
      question: `จงหาผลลัพธ์ของ ${n1}/${d1} × ${n2}/${d2} = ?`,
      choices,
      correctAnswer: ans,
      stepByStep: [
        `หลักการคูณเศษส่วน: "เศษคูณเศษ ส่วนคูณส่วน"`,
        `ตัวเศษ: ${n1} × ${n2} = ${rawNum}`,
        `ตัวส่วน: ${d1} × ${d2} = ${rawDenom}`,
        `ได้เศษส่วน: ${rawNum}/${rawDenom}`,
        g > 1 ? `ตัดทอนด้วยแม่ ${g} เป็นเศษส่วนอย่างต่ำได้: ${ans}` : `เป็นเศษส่วนอย่างต่ำแล้ว: ${ans}`,
      ],
      hint: 'นำเศษคูณเศษ และส่วนคูณส่วนได้เลย แล้วค่อยตัดทอนจ้า',
      points: 8,
    };
  } else if (subType === 2) {
    // หารเศษส่วน (กลับเศษเป็นส่วน)
    const n1 = Math.floor(Math.random() * 3) + 2;
    const d1 = Math.floor(Math.random() * 2) + 4;
    const n2 = 1;
    const d2 = Math.floor(Math.random() * 3) + 2;

    const rawNum = n1 * d2;
    const rawDenom = d1 * n2;
    const g = gcd(rawNum, rawDenom);
    const simpNum = rawNum / g;
    const simpDenom = rawDenom / g;
    const ans = simpDenom === 1 ? `${simpNum}` : `${simpNum}/${simpDenom}`;

    const choices = shuffleChoices([
      ans,
      `${n1}/${d1 * d2}`,
      `${n1 * n2}/${d1 * d2}`,
      `${simpNum + 1}/${simpDenom}`,
    ]);

    return {
      id,
      level: 2,
      topic: 'เศษส่วน: การหารเศษส่วน',
      question: `จงหาผลลัพธ์ของ ${n1}/${d1} ÷ ${n2}/${d2} = ?`,
      choices,
      correctAnswer: ans,
      stepByStep: [
        `หลักการหารเศษส่วน: "เปลี่ยนหารเป็นคูณ แล้วกลับเศษเป็นส่วนของตัวหาร"`,
        `${n1}/${d1} ÷ ${n2}/${d2} = ${n1}/${d1} × ${d2}/${n2}`,
        `เศษคูณเศษ: ${n1} × ${d2} = ${rawNum}`,
        `ส่วนคูณส่วน: ${d1} × ${n2} = ${rawDenom}`,
        `คำตอบคือ: ${ans}`,
      ],
      hint: 'อย่าลืมกลับเศษเป็นส่วนของตัวหลังนะจ๊ะ',
      points: 8,
    };
  } else {
    // จำนวนคละ
    const whole = Math.floor(Math.random() * 2) + 1;
    const n = Math.floor(Math.random() * 2) + 1;
    const d = [3, 4, 5][Math.floor(Math.random() * 3)];
    // convert improper to mixed or calculate:
    const improper = whole * d + n;
    const choices = shuffleChoices([
      `${improper}/${d}`,
      `${improper + 1}/${d}`,
      `${whole * n}/${d}`,
      `${improper - 1}/${d}`,
    ]);

    return {
      id,
      level: 2,
      topic: 'เศษส่วน: การแปลงจำนวนคละเป็นเศษเกิน',
      question: `เขียนจำนวนคละ ${whole} ${n}/${d} ให้อยู่ในรูปเศษเกินได้อย่างไร?`,
      choices,
      correctAnswer: `${improper}/${d}`,
      stepByStep: [
        `สูตรแปลงจำนวนคละเป็นเศษเกิน: (จำนวนเต็ม × ตัวส่วน) + ตัวเศษ`,
        `คำนวณ: (${whole} × ${d}) + ${n} = ${whole * d} + ${n} = ${improper}`,
        `ตัวส่วนคงเดิมคือ ${d}`,
        `ได้เศษเกินเป็น: ${improper}/${d}`,
      ],
      hint: 'นำตัวหน้าคูณตัวล่าง แล้วบวกตัวบนจ้า',
      points: 7,
    };
  }
}

// 2. ทศนิยม & การแปลง (Decimals & Conversions)
function generateLevel2DecimalsQuestion(id: string): MathQuestion {
  const subType = Math.floor(Math.random() * 3);

  if (subType === 0) {
    // คูณทศนิยม (นับตำแหน่งจุด)
    const a = [0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8][Math.floor(Math.random() * 7)];
    const b = [0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9][Math.floor(Math.random() * 7)];
    const prod = Number((a * b).toFixed(2));
    const choices = shuffleChoices([
      prod.toFixed(2),
      (prod * 10).toFixed(1),
      (prod + 0.1).toFixed(2),
      (prod / 10).toFixed(3),
    ]);

    return {
      id,
      level: 2,
      topic: 'ทศนิยม: การคูณทศนิยม',
      question: `จงหาผลลัพธ์ของ ${a} × ${b} = ?`,
      choices,
      correctAnswer: prod.toFixed(2),
      stepByStep: [
        `ขั้นตอนที่ 1: คูณตัวเลขเสมือนเป็นจำนวนเต็ม: ${Math.round(a * 10)} × ${Math.round(b * 10)} = ${Math.round(a * 10 * b * 10)}`,
        `ขั้นตอนที่ 2: นับตำแหน่งทศนิยมรวม: ${a} (1 ตำแหน่ง) + ${b} (1 ตำแหน่ง) = 2 ตำแหน่ง`,
        `ขั้นตอนที่ 3: เลื่อนจุดทศนิยมไปข้างหน้า 2 ตำแหน่ง ได้ผลลัพธ์: ${prod.toFixed(2)}`,
      ],
      hint: 'คูณตัวเลขปกติก่อน แล้วนับรวมตำแหน่งจุดทศนิยมนะ',
      points: 8,
    };
  } else if (subType === 1) {
    // หารทศนิยม
    const divisors = [0.2, 0.3, 0.4, 0.5, 0.6];
    const div = divisors[Math.floor(Math.random() * divisors.length)];
    const quotient = Math.floor(Math.random() * 8) + 3; // e.g. 3 to 10
    const dividend = Number((div * quotient).toFixed(1));
    const choices = shuffleChoices([
      quotient.toString(),
      (quotient * 10).toString(),
      (quotient / 10).toString(),
      (quotient + 2).toString(),
    ]);

    return {
      id,
      level: 2,
      topic: 'ทศนิยม: การหารทศนิยมด้วยทศนิยม',
      question: `จงหาผลลัพธ์ของ ${dividend} ÷ ${div} = ?`,
      choices,
      correctAnswer: quotient.toString(),
      stepByStep: [
        `ขั้นตอนที่ 1: ทำตัวหาร (${div}) ให้เป็นจำนวนเต็ม โดยคูณ 10 ทั้งตัวตั้งและตัวหาร`,
        `• ตัวตั้ง: ${dividend} × 10 = ${Math.round(dividend * 10)}`,
        `• ตัวหาร: ${div} × 10 = ${Math.round(div * 10)}`,
        `ขั้นตอนที่ 2: ทำการหารจำนวนเต็ม: ${Math.round(dividend * 10)} ÷ ${Math.round(div * 10)} = ${quotient}`,
      ],
      hint: 'เลื่อนจุดของตัวหารให้เป็นจำนวนเต็มก่อน แล้วเลื่อนจุดตัวตั้งตาม',
      points: 8,
    };
  } else {
    // แปลงเศษส่วนเป็นทศนิยม
    const list = [
      { f: '1/2', d: '0.5' },
      { f: '1/4', d: '0.25' },
      { f: '3/4', d: '0.75' },
      { f: '1/5', d: '0.2' },
      { f: '2/5', d: '0.4' },
      { f: '3/5', d: '0.6' },
      { f: '4/5', d: '0.8' },
      { f: '1/8', d: '0.125' },
      { f: '3/8', d: '0.375' },
    ];
    const picked = list[Math.floor(Math.random() * list.length)];
    const choices = shuffleChoices([
      picked.d,
      (Number(picked.d) + 0.1).toFixed(Number(picked.d) < 0.3 ? 2 : 1),
      (Number(picked.d) * 10).toFixed(1),
      '0.0' + picked.d.split('.')[1],
    ]);

    return {
      id,
      level: 2,
      topic: 'ทศนิยม: การแปลงเศษส่วนเป็นทศนิยม',
      question: `เศษส่วน ${picked.f} เขียนเป็นทศนิยมได้เท่ากับเท่าใด?`,
      choices,
      correctAnswer: picked.d,
      stepByStep: [
        `การแปลงเศษส่วนเป็นทศนิยม ทำได้โดยนำตัวเศษตั้งแล้วหารด้วยตัวส่วน`,
        `หรือทำให้ตัวส่วนเป็น 10, 100, หรือ 1,000`,
        `ดังนั้น ${picked.f} = ${picked.d}`,
      ],
      hint: 'ลองทำให้ตัวส่วนเป็น 10, 100 หรือ 1000 ดูนะจ๊ะ',
      points: 7,
    };
  }
}

// 3. ร้อยละ กำไร-ลดราคา (Percentages & Commerce)
function generateLevel2PercentageQuestion(id: string): MathQuestion {
  const subType = Math.floor(Math.random() * 3);

  if (subType === 0) {
    // โจทย์ลดราคาสินค้า (Discount)
    const price = (Math.floor(Math.random() * 8) + 2) * 100; // 200, 300, ... 900
    const pct = [10, 20, 25, 30, 50][Math.floor(Math.random() * 5)];
    const discount = (pct / 100) * price;
    const payPrice = price - discount;

    const choices = shuffleChoices([
      `${payPrice} บาท`,
      `${discount} บาท`,
      `${payPrice + 50} บาท`,
      `${price - 50} บาท`,
    ]);

    return {
      id,
      level: 2,
      topic: 'ร้อยละ: การคำนวณส่วนลดสินค้า',
      question: `กระเป๋าราคาป้าย ${price} บาท ร้านค้าติดป้ายลดราคา ${pct}% ผู้ซื้อจะต้องจ่ายเงินจริงกี่บาท?`,
      choices,
      correctAnswer: `${payPrice} บาท`,
      stepByStep: [
        `ขั้นตอนที่ 1: หามูลค่าส่วนลดที่ได้รับ = (${pct}/100) × ${price} = ${discount} บาท`,
        `ขั้นตอนที่ 2: นำราคาป้ายลบด้วยส่วนลด: ${price} - ${discount} = ${payPrice} บาท`,
        `หรือคิดลัด: ลด ${pct}% แปลว่าต้องจ่าย (100 - ${pct})% = ${100 - pct}%`,
        `ราคาจริง = (${100 - pct}/100) × ${price} = ${payPrice} บาท`,
      ],
      hint: 'หาเงินที่ลดลงมาก่อน แล้วเอาไปลบออกจากราคาป้ายจ้า',
      points: 9,
    };
  } else if (subType === 1) {
    // โจทย์คิดกำไร (Profit)
    const cost = (Math.floor(Math.random() * 6) + 3) * 100; // 300 to 800
    const pct = [10, 15, 20, 25][Math.floor(Math.random() * 4)];
    const profit = (pct / 100) * cost;
    const sellPrice = cost + profit;

    const choices = shuffleChoices([
      `${sellPrice} บาท`,
      `${profit} บาท`,
      `${sellPrice - 20} บาท`,
      `${cost + 50} บาท`,
    ]);

    return {
      id,
      level: 2,
      topic: 'ร้อยละ: การหากำไรและราคาขาย',
      question: `คุณพ่อซื้อของเล่นมาในราคาทุน ${cost} บาท นำไปขายต่อได้กำไร ${pct}% คุณพ่อขายของเล่นชิ้นนี้ไปในราคากี่บาท?`,
      choices,
      correctAnswer: `${sellPrice} บาท`,
      stepByStep: [
        `ขั้นตอนที่ 1: คำนวณเงินกำไร = (${pct}/100) × ${cost} = ${profit} บาท`,
        `ขั้นตอนที่ 2: ราคาขาย = ราคาทุน + กำไร`,
        `ราคาขาย = ${cost} + ${profit} = ${sellPrice} บาท`,
      ],
      hint: 'คำว่า "ได้กำไร" หมายความว่าต้องขายได้เงินมากกว่าทุนนะ',
      points: 9,
    };
  } else {
    // ร้อยละของจำนวนคน/สิ่งของ
    const total = [40, 50, 60, 80, 100][Math.floor(Math.random() * 5)];
    const pct = [25, 40, 60, 75, 80][Math.floor(Math.random() * 5)];
    const amount = (pct / 100) * total;

    const choices = shuffleChoices([
      `${amount} คน`,
      `${amount + 4} คน`,
      `${total - amount} คน`,
      `${amount - 2} คน`,
    ]);

    return {
      id,
      level: 2,
      topic: 'ร้อยละ: สัดส่วนเปอร์เซ็นต์ในชีวิตจริง',
      question: `โรงเรียนมีนักเรียนชั้น ป.5 ทั้งหมด ${total} คน ชอบเรียนคณิตศาสตร์ ${pct}% ถามว่ามีนักเรียนที่ชอบคณิตศาสตร์กี่คน?`,
      choices,
      correctAnswer: `${amount} คน`,
      stepByStep: [
        `คำว่า "${pct}%" หมายถึง ${pct}/100`,
        `คำว่า "ของ" ในวิชาคณิตศาสตร์คือการคูณ`,
        `คำนวณ: (${pct}/100) × ${total} = ${amount} คน`,
      ],
      hint: 'เปลี่ยน % เป็นส่วน 100 แล้วนำไปคูณจำนวนคนทั้งหมด',
      points: 8,
    };
  }
}

// 4. ห.ร.ม. & ค.ร.น. พร้อมโจทย์ปัญหา (GCD & LCM & Word Problems)
function generateLevel2GcdLcmQuestion(id: string): MathQuestion {
  const subType = Math.floor(Math.random() * 4);

  if (subType === 0) {
    // หา ห.ร.ม. ตรงๆ
    const pairs = [
      { a: 24, b: 36, ans: 12 },
      { a: 18, b: 30, ans: 6 },
      { a: 32, b: 48, ans: 16 },
      { a: 20, b: 50, ans: 10 },
      { a: 42, b: 56, ans: 14 },
    ];
    const picked = pairs[Math.floor(Math.random() * pairs.length)];
    const choices = shuffleChoices([
      picked.ans.toString(),
      (picked.ans / 2).toString(),
      (picked.ans * 2).toString(),
      (picked.ans - 2).toString(),
    ]);

    return {
      id,
      level: 2,
      topic: 'ห.ร.ม.: การหาตัวหารร่วมมาก',
      question: `จงหา ห.ร.ม. (ตัวหารร่วมมาก) ของ ${picked.a} และ ${picked.b}`,
      choices,
      correctAnswer: picked.ans.toString(),
      stepByStep: [
        `ใช้วิธีหารสั้น หาจำนวนที่หารทั้ง ${picked.a} และ ${picked.b} ลงตัว`,
        `ตัวหารร่วมที่มากที่สุดที่นำไปหารทั้งสองจำนวนได้พร้อมกันคือ: ${picked.ans}`,
        `ตรวจคำตอบ: ${picked.a} ÷ ${picked.ans} = ${picked.a / picked.ans} และ ${picked.b} ÷ ${picked.ans} = ${picked.b / picked.ans} (ไม่มีตัวหารร่วมแล้ว)`,
      ],
      hint: 'หาจำนวนที่มากที่สุดที่หารทั้งสองจำนวนลงตัวพร้อมกัน',
      points: 8,
    };
  } else if (subType === 1) {
    // หา ค.ร.น. ตรงๆ
    const pairs = [
      { a: 12, b: 16, ans: 48 },
      { a: 15, b: 20, ans: 60 },
      { a: 8, b: 12, ans: 24 },
      { a: 18, b: 24, ans: 72 },
      { a: 6, b: 9, ans: 18 },
    ];
    const picked = pairs[Math.floor(Math.random() * pairs.length)];
    const choices = shuffleChoices([
      picked.ans.toString(),
      (picked.ans / 2).toString(),
      (picked.ans * 2).toString(),
      (picked.a * picked.b).toString(),
    ]);

    return {
      id,
      level: 2,
      topic: 'ค.ร.น.: การหาคูณร่วมน้อย',
      question: `จงหา ค.ร.น. (คูณร่วมน้อย) ของ ${picked.a} และ ${picked.b}`,
      choices,
      correctAnswer: picked.ans.toString(),
      stepByStep: [
        `พหุคูณของ ${picked.a}: ${picked.a}, ${picked.a * 2}, ${picked.a * 3}, ${picked.ans}...`,
        `พหุคูณของ ${picked.b}: ${picked.b}, ${picked.b * 2}, ${picked.ans}...`,
        `จำนวนที่น้อยที่สุดที่ทั้ง ${picked.a} และ ${picked.b} หารลงตัวคือ: ${picked.ans}`,
      ],
      hint: 'หาจำนวนที่น้อยที่สุดที่ตัวเลขทั้งสองตัวไปหารลงตัว',
      points: 8,
    };
  } else if (subType === 2) {
    // โจทย์ปัญหา ค.ร.น. (นาฬิกาปลุก / ไฟกระพริบ)
    const t1 = [12, 15, 20][Math.floor(Math.random() * 3)];
    const t2 = t1 === 12 ? 18 : t1 === 15 ? 20 : 30;
    const ansMin = lcm(t1, t2);

    const choices = shuffleChoices([
      `${ansMin} นาที`,
      `${ansMin * 2} นาที`,
      `${t1 + t2} นาที`,
      `${ansMin - 10} นาที`,
    ]);

    return {
      id,
      level: 2,
      topic: 'โจทย์ปัญหา ค.ร.น.: นาฬิกาปลุกดังพร้อมกัน',
      question: `นาฬิกาปลุกสองเรือน เรือนแรกจะดังเตือนทุกๆ ${t1} นาที เรือนที่สองจะดังเตือนทุกๆ ${t2} นาที ถ้านาฬิกาทั้งสองเรือนเริ่มดังพร้อมกันในเวลา 08:00 น. จะดังพร้อมกันอีกครั้งในอีกกี่นาที?`,
      choices,
      correctAnswer: `${ansMin} นาที`,
      stepByStep: [
        `การหาเวลาที่เหตุการณ์จะ "เกิดขึ้นพร้อมกันอีกครั้ง" เป็นการประยุกต์ใช้เรื่อง ค.ร.น.`,
        `หา ค.ร.น. ของ ${t1} และ ${t2}`,
        `พหุคูณร่วมที่น้อยที่สุดคือ ${ansMin}`,
        `ดังนั้น นาฬิกาจะดังพร้อมกันอีกครั้งในอีก ${ansMin} นาที`,
      ],
      hint: 'โจทย์ประเภท "วนมาพบกันใหม่พร้อมกัน" คือเรื่อง ค.ร.น. เสมอ!',
      points: 10,
    };
  } else {
    // โจทย์ปัญหา ห.ร.ม. (แบ่งของใส่ถุงมากที่สุดไม่ปนกัน)
    const o = 24;
    const m = 36;
    const ansGcd = gcd(o, m); // 12
    const choices = shuffleChoices([
      `${ansGcd} ผล`,
      `6 ผล`,
      `8 ผล`,
      `24 ผล`,
    ]);

    return {
      id,
      level: 2,
      topic: 'โจทย์ปัญหา ห.ร.ม.: การแบ่งสิ่งของมากที่สุดโดยไม่ปนกัน',
      question: `มีส้ม ${o} ผล และมังคุด ${m} ผล ต้องการจัดใส่ถุง ถุงละเท่าๆ กัน โดยแยกชนิดไม่ปนกันและไม่เหลือเศษ จะสามารถจัดได้มากที่สุดถุงละกี่ผล?`,
      choices,
      correctAnswer: `${ansGcd} ผล`,
      stepByStep: [
        `โจทย์ถามหาจำนวนที่ "มากที่สุด" ที่แบ่งสิ่งของได้เท่าๆ กันโดยไม่เหลือเศษ คือการหา ห.ร.ม.`,
        `หา ห.ร.ม. ของ ${o} และ ${m}`,
        `ตัวประกอบร่วมที่มากที่สุดคือ ${ansGcd}`,
        `ดังนั้น จัดได้มากที่สุดถุงละ ${ansGcd} ผล (จะได้ส้ม ${o / ansGcd} ถุง และมังคุด ${m / ansGcd} ถุง)`,
      ],
      hint: 'คำว่า "แบ่งเท่าๆ กันให้ได้มากที่สุด" คือการหา ห.ร.ม. จ้า',
      points: 10,
    };
  }
}

// 5. พื้นที่ ปริมาตร & วงกลม (Geometry & Volume)
function generateLevel2GeometryQuestion(id: string): MathQuestion {
  const subType = Math.floor(Math.random() * 4);

  if (subType === 0) {
    // เส้นรอบวงกลม (2 * pi * r) with r = 7 or 14
    const r = [7, 14, 21][Math.floor(Math.random() * 3)];
    const c = Math.round(2 * (22 / 7) * r);
    const choices = shuffleChoices([
      `${c} ซม.`,
      `${c + 14} ซม.`,
      `${Math.round((22 / 7) * r * r)} ซม.`,
      `${c - 10} ซม.`,
    ]);

    return {
      id,
      level: 2,
      topic: 'เรขาคณิต: ความยาวรอบรูปวงกลม',
      question: `วงกลมที่มีรัศมี r = ${r} เซนติเมตร มีความยาวรอบรูปกี่เซนติเมตร? (กำหนดให้ π ≈ 22/7)`,
      choices,
      correctAnswer: `${c} ซม.`,
      stepByStep: [
        `ใช้สูตรความยาวรอบรูปวงกลม = 2 × π × r`,
        `แทนค่า: 2 × (22/7) × ${r}`,
        `นำ 7 ไปตัดกับ ${r} จะได้ ${r / 7}`,
        `คำนวณ: 2 × 22 × ${r / 7} = ${c} เซนติเมตร`,
      ],
      hint: 'สูตรเส้นรอบวงกลมคือ 2 × π × r จ้า',
      points: 9,
    };
  } else if (subType === 1) {
    // พื้นที่วงกลม (pi * r^2)
    const r = [7, 14][Math.floor(Math.random() * 2)];
    const area = Math.round((22 / 7) * r * r);
    const choices = shuffleChoices([
      `${area} ตร.ซม.`,
      `${area + 22} ตร.ซม.`,
      `${Math.round(2 * (22 / 7) * r)} ตร.ซม.`,
      `${area - 44} ตร.ซม.`,
    ]);

    return {
      id,
      level: 2,
      topic: 'เรขาคณิต: พื้นที่ของรูปวงกลม',
      question: `วงกลมที่มีรัศมี r = ${r} เซนติเมตร มีพื้นที่กี่ตารางเซนติเมตร? (กำหนดให้ π ≈ 22/7)`,
      choices,
      correctAnswer: `${area} ตร.ซม.`,
      stepByStep: [
        `ใช้สูตรพื้นที่รูปวงกลม = π × r² = π × r × r`,
        `แทนค่า: (22/7) × ${r} × ${r}`,
        `นำ 7 ไปตัดกับ ${r} หนึ่งตัว จะได้ ${r / 7}`,
        `คำนวณ: 22 × ${r / 7} × ${r} = ${area} ตารางเซนติเมตร`,
      ],
      hint: 'สูตรพื้นที่วงกลมคือ π × r × r (อย่าลืมยกกำลังสองนะ)',
      points: 9,
    };
  } else if (subType === 2) {
    // พื้นที่สี่เหลี่ยมคางหมู 1/2 * (a + b) * h
    const a = 6;
    const b = 10;
    const h = 5;
    const area = 0.5 * (a + b) * h; // 40
    const choices = shuffleChoices([
      `${area} ตร.ซม.`,
      `${(a + b) * h} ตร.ซม.`,
      `${area + 10} ตร.ซม.`,
      `${a * b} ตร.ซม.`,
    ]);

    return {
      id,
      level: 2,
      topic: 'เรขาคณิต: พื้นที่รูปสี่เหลี่ยมคางหมู',
      question: `รูปสี่เหลี่ยมคางหมูมีด้านคู่ขนานยาว ${a} ซม. และ ${b} ซม. และมีความสูง ${h} ซม. มีพื้นที่กี่ตารางเซนติเมตร?`,
      choices,
      correctAnswer: `${area} ตร.ซม.`,
      stepByStep: [
        `สูตรพื้นที่สี่เหลี่ยมคางหมู = 1/2 × ผลบวกของความยาวด้านคู่ขนาน × ความสูง`,
        `ผลบวกด้านคู่ขนาน = ${a} + ${b} = ${a + b} ซม.`,
        `แทนค่า: 1/2 × ${a + b} × ${h} = ${0.5 * (a + b)} × ${h} = ${area} ตารางเซนติเมตร`,
      ],
      hint: 'นำด้านคู่ขนานมาบวกกันก่อน แล้วคูณความสูง และคูณ 1/2',
      points: 9,
    };
  } else {
    // ปริมาตรทรงสี่เหลี่ยมมุมฉาก (Volume)
    const w = Math.floor(Math.random() * 4) + 4; // 4, 5, 6, 7
    const l = Math.floor(Math.random() * 4) + 6; // 6, 7, 8, 9
    const h = Math.floor(Math.random() * 3) + 3; // 3, 4, 5
    const vol = w * l * h;

    const choices = shuffleChoices([
      `${vol} ลบ.ซม.`,
      `${w * l} ลบ.ซม.`,
      `${vol + 20} ลบ.ซม.`,
      `${2 * (w * l + l * h + w * h)} ลบ.ซม.`,
    ]);

    return {
      id,
      level: 2,
      topic: 'เรขาคณิต: ปริมาตรทรงสี่เหลี่ยมมุมฉาก',
      question: `กล่องของขวัญทรงสี่เหลี่ยมมุมฉาก กว้าง ${w} ซม. ยาว ${l} ซม. และสูง ${h} ซม. มีปริมาตรกี่ลูกบาศก์เซนติเมตร?`,
      choices,
      correctAnswer: `${vol} ลบ.ซม.`,
      stepByStep: [
        `สูตรปริมาตรทรงสี่เหลี่ยมมุมฉาก = กว้าง × ยาว × สูง`,
        `แทนค่า: ${w} × ${l} × ${h}`,
        `${w} × ${l} = ${w * l}`,
        `${w * l} × ${h} = ${vol} ลูกบาศก์เซนติเมตร (ลบ.ซม.)`,
      ],
      hint: 'ปริมาตรทรงสี่เหลี่ยมมุมฉากหากว้างคูณยาวคูณสูงจ้า',
      points: 8,
    };
  }
}

// 6. บัญญัติไตรยางศ์ & อัตราส่วน (Rule of Three & Ratios)
function generateLevel2RatiosQuestion(id: string): MathQuestion {
  const subType = Math.floor(Math.random() * 3);

  if (subType === 0) {
    // บัญญัติไตรยางศ์ง่ายๆ
    const unitPrice = Math.floor(Math.random() * 5) + 6; // 6 to 10
    const countA = Math.floor(Math.random() * 3) + 3; // 3 to 5
    const priceA = unitPrice * countA;
    const countB = countA + Math.floor(Math.random() * 4) + 2; // more items
    const priceB = unitPrice * countB;

    const choices = shuffleChoices([
      `${priceB} บาท`,
      `${priceB + unitPrice} บาท`,
      `${priceB - unitPrice} บาท`,
      `${priceA * 2} บาท`,
    ]);

    return {
      id,
      level: 2,
      topic: 'บัญญัติไตรยางศ์: การเทียบบัญญัติไตรยางศ์หาผลลัพธ์',
      question: `สมุด ${countA} เล่ม ราคา ${priceA} บาท ถ้าต้องการซื้อสมุดชนิดเดียวกันนี้จำนวน ${countB} เล่ม จะต้องจ่ายเงินกี่บาท?`,
      choices,
      correctAnswer: `${priceB} บาท`,
      stepByStep: [
        `ขั้นตอนที่ 1: หาว่าสมุด 1 เล่ม ราคากี่บาท โดยนำราคาหารด้วยจำนวนเล่ม`,
        `ราคา 1 เล่ม = ${priceA} ÷ ${countA} = ${unitPrice} บาท`,
        `ขั้นตอนที่ 2: ถ้าซื้อ ${countB} เล่ม จะต้องจ่ายเงิน = ${countB} × ${unitPrice} = ${priceB} บาท`,
      ],
      hint: 'หาค่าของ 1 ชิ้นให้ได้ก่อน แล้วนำไปคูณจำนวนชิ้นที่ต้องการซื้อ',
      points: 8,
    };
  } else if (subType === 1) {
    // แบ่งเงินตามอัตราส่วนสองพี่น้อง
    const ratioA = 3;
    const ratioB = 2;
    const totalParts = ratioA + ratioB; // 5
    const totalMoney = (Math.floor(Math.random() * 6) + 4) * 50; // 200 to 450
    const moneyA = (ratioA / totalParts) * totalMoney;
    const moneyB = (ratioB / totalParts) * totalMoney;

    const choices = shuffleChoices([
      `${moneyA} บาท`,
      `${moneyB} บาท`,
      `${moneyA + 20} บาท`,
      `${totalMoney / 2} บาท`,
    ]);

    return {
      id,
      level: 2,
      topic: 'อัตราส่วน: การแบ่งสัดส่วนเงินของสองพี่น้อง',
      question: `คุณพ่อแบ่งเงินรางวัลจำนวน ${totalMoney} บาท ให้อัยย่าและไอร่าในอัตราส่วน ${ratioA} : ${ratioB} ถามว่าอัยย่าจะได้รับเงินกี่บาท?`,
      choices,
      correctAnswer: `${moneyA} บาท`,
      stepByStep: [
        `ขั้นตอนที่ 1: หาผลรวมของอัตราส่วนทั้งหมด = ${ratioA} + ${ratioB} = ${totalParts} ส่วน`,
        `ขั้นตอนที่ 2: หาว่า 1 ส่วนมีค่ากี่บาท = ${totalMoney} ÷ ${totalParts} = ${totalMoney / totalParts} บาท`,
        `ขั้นตอนที่ 3: อัยย่าได้ ${ratioA} ส่วน = ${ratioA} × ${totalMoney / totalParts} = ${moneyA} บาท`,
        `(ส่วนไอร่าได้ ${ratioB} ส่วน = ${ratioB} × ${totalMoney / totalParts} = ${moneyB} บาท)`,
      ],
      hint: 'นำอัตราส่วนมาบวกกันเพื่อหาจำนวนส่วนทั้งหมดก่อนนะ',
      points: 9,
    };
  } else {
    // อัตราเร็ว ระยะทาง และเวลา (s = v * t)
    const speed = [60, 70, 80, 90][Math.floor(Math.random() * 4)];
    const hours = 2;
    const halfHour = true; // 2.5 hours
    const dist = speed * 2.5;

    const choices = shuffleChoices([
      `${dist} กิโลเมตร`,
      `${speed * 2} กิโลเมตร`,
      `${dist + 20} กิโลเมตร`,
      `${speed * 3} กิโลเมตร`,
    ]);

    return {
      id,
      level: 2,
      topic: 'อัตราส่วนและมาตราวัด: อัตราเร็วและระยะทาง',
      question: `รถไฟขบวนหนึ่งวิ่งด้วยความเร็วสม่ำเสมอ ${speed} กิโลเมตรต่อชั่วโมง ในเวลา 2 ชั่วโมง 30 นาที รถไฟขบวนนี้จะวิ่งได้ระยะทางกี่กิโลเมตร?`,
      choices,
      correctAnswer: `${dist} กิโลเมตร`,
      stepByStep: [
        `แปลงเวลาให้เป็นหน่วยชั่วโมง: 2 ชั่วโมง 30 นาที = 2.5 ชั่วโมง`,
        `ใช้สูตร: ระยะทาง = ความเร็ว × เวลา`,
        `แทนค่า: ${speed} × 2.5 = ${dist} กิโลเมตร`,
      ],
      hint: 'แปลง 30 นาทีเป็น 0.5 ชั่วโมงก่อน แล้วนำไปคูณความเร็วจ้า',
      points: 9,
    };
  }
}

// 7. ลำดับคำนวณ & ค่าเฉลี่ย (BODMAS & Average)
function generateLevel2BodmasQuestion(id: string): MathQuestion {
  const subType = Math.floor(Math.random() * 2);

  if (subType === 0) {
    // BODMAS: วงเล็บ + คูณ/หาร ก่อนบวกลบ
    const a = Math.floor(Math.random() * 15) + 10; // 10-25
    const b = Math.floor(Math.random() * 4) + 2; // 2-5
    const c = Math.floor(Math.random() * 4) + 2; // 2-5
    const d = Math.floor(Math.random() * 3) + 2; // 2-4
    const divNum = d * (Math.floor(Math.random() * 4) + 2); // multiple of d

    // a + b * c - divNum / d
    const ans = a + (b * c) - (divNum / d);
    const wrong1 = (a + b) * c - (divNum / d); // forgot precedence
    const wrong2 = ans + 4;
    const wrong3 = ans - 2;

    const choices = shuffleChoices([
      ans.toString(),
      wrong1.toString(),
      wrong2.toString(),
      wrong3.toString(),
    ]);

    return {
      id,
      level: 2,
      topic: 'ลำดับการคำนวณ: กฎความสำคัญทางคณิตศาสตร์ (BODMAS)',
      question: `จงหาค่าของ: ${a} + ${b} × ${c} - ${divNum} ÷ ${d} = ?`,
      choices,
      correctAnswer: ans.toString(),
      stepByStep: [
        `ตามหลักเกณฑ์ทางคณิตศาสตร์ (BODMAS) ต้องทำ "คูณและหาร" ก่อน "บวกและลบ" เสมอ`,
        `ขั้นตอนที่ 1 (การคูณ): ${b} × ${c} = ${b * c}`,
        `ขั้นตอนที่ 2 (การหาร): ${divNum} ÷ ${d} = ${divNum / d}`,
        `ขั้นตอนที่ 3 (บวกและลบจากซ้ายไปขวา): ${a} + ${b * c} - ${divNum / d} = ${a + b * c} - ${divNum / d} = ${ans}`,
      ],
      hint: 'อย่าคำนวณจากซ้ายไปขวาตรงๆ นะ ต้องทำคูณและหารให้เสร็จก่อน!',
      points: 8,
    };
  } else {
    // ค่าเฉลี่ยเลขคณิต (Mean)
    const avg = Math.floor(Math.random() * 10) + 15; // 15 to 25
    const count = 4;
    const targetSum = avg * count;
    const d1 = avg - 3;
    const d2 = avg + 2;
    const d3 = avg - 1;
    const d4 = targetSum - (d1 + d2 + d3);

    const choices = shuffleChoices([
      avg.toString(),
      (avg + 2).toString(),
      (avg - 2).toString(),
      (targetSum).toString(),
    ]);

    return {
      id,
      level: 2,
      topic: 'สถิติ: ค่าเฉลี่ยเลขคณิต (Mean)',
      question: `คะแนนเก็บ 4 ครั้งของลูกสาวได้แก่: ${d1}, ${d2}, ${d3}, ${d4} คะแนน จงหาคะแนนเฉลี่ย?`,
      choices,
      correctAnswer: avg.toString(),
      stepByStep: [
        `สูตรค่าเฉลี่ยเลขคณิต = ผลรวมของคะแนนทั้งหมด ÷ จำนวนครั้ง`,
        `ผลรวม = ${d1} + ${d2} + ${d3} + ${d4} = ${targetSum}`,
        `จำนวนครั้ง = 4`,
        `คำนวณ: ${targetSum} ÷ 4 = ${avg} คะแนน`,
      ],
      hint: 'นำตัวเลขทั้งหมดมาบวกกัน แล้วหารด้วยจำนวนตัวเลข',
      points: 8,
    };
  }
}

// -------------------------------------------------------------
// LEVEL 3: มัธยมศึกษาตอนต้น (Lower Secondary: Grades 7–9)
// -------------------------------------------------------------
function generateLevel3Question(id: string): MathQuestion {
  const type = Math.floor(Math.random() * 3);

  if (type === 0) {
    // Linear Equation: ax + b = c
    const a = Math.floor(Math.random() * 4) + 2; // 2, 3, 4, 5
    const x = Math.floor(Math.random() * 8) + 2; // answer
    const b = Math.floor(Math.random() * 12) + 1;
    const c = a * x + b;
    const choices = shuffleChoices([
      `x = ${x}`,
      `x = ${x + 2}`,
      `x = ${x - 1}`,
      `x = ${Math.floor(c / a)}`,
    ]);

    return {
      id,
      level: 3,
      topic: 'การแก้สมการเชิงเส้นตัวแปรเดียว',
      question: `จงแก้สมการหาค่าของ x จาก: ${a}x + ${b} = ${c}`,
      choices,
      correctAnswer: `x = ${x}`,
      stepByStep: [
        `สมการตั้งต้น: ${a}x + ${b} = ${c}`,
        `ขั้นตอนที่ 1: ย้าย ${b} ไปลบทั้งสองข้างของสมการ`,
        `${a}x = ${c} - ${b} = ${c - b}`,
        `ขั้นตอนที่ 2: นำ ${a} ไปหารทั้งสองข้าง`,
        `x = ${c - b} / ${a} = ${x}`,
      ],
      hint: 'ย้ายค่าคงที่ไปอยู่อีกฝั่งหนึ่งก่อน แล้วค่อยย้ายสัมประสิทธิ์ไปหาร',
      points: 10,
    };
  } else if (type === 1) {
    // Pythagorean Theorem: 3-4-5, 5-12-13, 6-8-10, 8-15-17
    const triples = [
      { a: 3, b: 4, c: 5 },
      { a: 6, b: 8, c: 10 },
      { a: 5, b: 12, c: 13 },
      { a: 8, b: 15, c: 17 },
    ];
    const picked = triples[Math.floor(Math.random() * triples.length)];
    const choices = shuffleChoices([
      `c = ${picked.c}`,
      `c = ${picked.c + 2}`,
      `c = ${picked.a + picked.b}`,
      `c = ${picked.c - 1}`,
    ]);

    return {
      id,
      level: 3,
      topic: 'ทฤษฎีบทพีทาโกรัส (Pythagorean Theorem)',
      question: `สามเหลี่ยมมุมฉากมีด้านประกอบมุมฉากยาว a = ${picked.a} และ b = ${picked.b} จงหาความยาวด้านตรงข้ามมุมฉาก c`,
      choices,
      correctAnswer: `c = ${picked.c}`,
      stepByStep: [
        `จากทฤษฎีบทพีทาโกรัส: a² + b² = c²`,
        `แทนค่า: (${picked.a})² + (${picked.b})² = c²`,
        `${picked.a * picked.a} + ${picked.b * picked.b} = ${picked.c * picked.c}`,
        `c = √(${picked.c * picked.c}) = ${picked.c}`,
      ],
      hint: 'จำสูตร c² = a² + b² แล้วถอดรากที่สองจ้า',
      points: 10,
    };
  } else {
    // Exponent Laws: (2^a * 2^b) / 2^c
    const m = Math.floor(Math.random() * 4) + 3;
    const n = Math.floor(Math.random() * 3) + 2;
    const p = Math.floor(Math.random() * 3) + 1;
    const ansExp = m + n - p;
    const choices = shuffleChoices([
      `2^${ansExp}`,
      `2^${m + n + p}`,
      `2^${m * n - p}`,
      `4^${ansExp}`,
    ]);

    return {
      id,
      level: 3,
      topic: 'สมบัติของเลขยกกำลัง',
      question: `จงทำให้อยู่ในรูปอย่างง่าย: (2^${m} × 2^${n}) ÷ 2^${p} = ?`,
      choices,
      correctAnswer: `2^${ansExp}`,
      stepByStep: [
        `กฎข้อที่ 1 (การคูณฐานเดียวกัน): aᵐ × aⁿ = aᵐ⁺ⁿ`,
        `ดังนั้น 2^${m} × 2^${n} = 2^(${m} + ${n}) = 2^${m + n}`,
        `กฎข้อที่ 2 (การหารฐานเดียวกัน): aᵐ ÷ aᵖ = aᵐ⁻ᵖ`,
        `ดังนั้น 2^${m + n} ÷ 2^${p} = 2^(${m + n} - ${p}) = 2^${ansExp}`,
      ],
      hint: 'ฐานเหมือนกัน คูณกันนำเลขชี้กำลังมาบวก หารกันนำมาลบ',
      points: 10,
    };
  }
}

// -------------------------------------------------------------
// LEVEL 4: มัธยมศึกษาตอนปลาย (Upper Secondary: Grades 10–12)
// -------------------------------------------------------------
function generateLevel4Question(id: string): MathQuestion {
  const type = Math.floor(Math.random() * 3);

  if (type === 0) {
    // Quadratic Equations: (x - r1)(x - r2) = x^2 - (r1+r2)x + r1*r2 = 0
    const r1 = Math.floor(Math.random() * 4) + 1;
    const r2 = r1 + Math.floor(Math.random() * 3) + 1;
    const b = -(r1 + r2);
    const c = r1 * r2;
    const choices = shuffleChoices([
      `x = ${r1}, ${r2}`,
      `x = ${-r1}, ${-r2}`,
      `x = ${r1}, ${-r2}`,
      `x = ${r1 + 1}, ${r2 + 1}`,
    ]);

    return {
      id,
      level: 4,
      topic: 'สมการกำลังสอง (Quadratic Equations)',
      question: `จงหาเซตคำตอบของสมการ: x² ${b < 0 ? `- ${Math.abs(b)}` : `+ ${b}`}x + ${c} = 0`,
      choices,
      correctAnswer: `x = ${r1}, ${r2}`,
      stepByStep: [
        `สมการ: x² ${b < 0 ? `- ${Math.abs(b)}` : `+ ${b}`}x + ${c} = 0`,
        `แยกตัวประกอบหาเลขสองจำนวนที่คูณกันได้ ${c} และบวกกันได้ ${b}`,
        `เลขคู่นั้นคือ -${r1} และ -${r2}`,
        `จะได้ (x - ${r1})(x - ${r2}) = 0`,
        `ดังนั้น x = ${r1} หรือ x = ${r2}`,
      ],
      hint: 'แยกตัวประกอบเป็นสองวงเล็บ (x - r1)(x - r2) = 0',
      points: 12,
    };
  } else if (type === 1) {
    // Trigonometry standard angles
    const trigTable = [
      { q: 'sin(30°)', ans: '1/2', step: 'มุม 30° บนวงกลมหนึ่งหน่วย มีค่าพิกัดแกน y = 1/2' },
      { q: 'cos(60°)', ans: '1/2', step: 'cos(60°) = sin(30°) = 1/2' },
      { q: 'tan(45°)', ans: '1', step: 'tan(45°) = sin(45°)/cos(45°) = (√2/2)/(√2/2) = 1' },
      { q: 'cos(0°)', ans: '1', step: 'ที่มุม 0 เรเดียน จุดบนวงกลมหนึ่งหน่วยคือ (1, 0) ค่า cos คือแกน x = 1' },
      { q: 'sin(90°)', ans: '1', step: 'ที่มุม 90° จุดบนวงกลมหนึ่งหน่วยคือ (0, 1) ค่า sin คือแกน y = 1' },
    ];
    const picked = trigTable[Math.floor(Math.random() * trigTable.length)];
    const choices = shuffleChoices([picked.ans, '√3/2', '√2/2', '0']);

    return {
      id,
      level: 4,
      topic: 'ตรีโกณมิติมุมมาตรฐาน',
      question: `จงหาค่าของ ${picked.q} = ?`,
      choices,
      correctAnswer: picked.ans,
      stepByStep: [
        `โจทย์ถามค่า: ${picked.q}`,
        `พิจารณาสามเหลี่ยมมุมฉากมาตรฐานหรือวงกลมหนึ่งหน่วย (Unit Circle):`,
        `${picked.step}`,
        `ดังนั้น คำตอบคือ ${picked.ans}`,
      ],
      hint: 'ทบทวนตารางอัตราส่วนตรีโกณมิติมุม 30°, 45°, 60°',
      points: 12,
    };
  } else {
    // Logarithms: log_b(b^k) = k
    const bases = [2, 3, 5, 10];
    const base = bases[Math.floor(Math.random() * bases.length)];
    const exp = Math.floor(Math.random() * 3) + 2; // 2, 3, 4
    const val = Math.pow(base, exp);
    const choices = shuffleChoices([
      exp.toString(),
      (exp + 1).toString(),
      (exp - 1).toString(),
      val.toString(),
    ]);

    return {
      id,
      level: 4,
      topic: 'ลอการิทึม (Logarithms)',
      question: `จงหาค่าของ log_${base}(${val}) = ?`,
      choices,
      correctAnswer: exp.toString(),
      stepByStep: [
        `นิยามของลอการิทึม: log_b(N) = x หมายถึง b^x = N`,
        `ในที่นี้ ${base}^x = ${val}`,
        `เนื่องจาก ${base}^${exp} = ${val}`,
        `ดังนั้น x = ${exp}`,
      ],
      hint: 'ถามว่าฐานต้องยกกำลังอะไรถึงจะได้ตัวเลขในวงเล็บ',
      points: 12,
    };
  }
}

// -------------------------------------------------------------
// LEVEL 5: มหาวิทยาลัยปี 1 (Calculus I & Linear Algebra)
// -------------------------------------------------------------
function generateLevel5Question(id: string): MathQuestion {
  const type = Math.floor(Math.random() * 3);

  if (type === 0) {
    // Differentiation: d/dx (a x^n + b x)
    const a = Math.floor(Math.random() * 4) + 2;
    const n = Math.floor(Math.random() * 3) + 2; // 2, 3, 4
    const b = Math.floor(Math.random() * 6) + 2;
    // d/dx = (a*n) x^(n-1) + b
    const coeff = a * n;
    const newExp = n - 1;
    const expStr = newExp === 1 ? 'x' : `x^${newExp}`;
    const ans = `${coeff}${expStr} + ${b}`;
    const fake1 = `${a}${expStr} + ${b}`;
    const fake2 = `${coeff}x^${n} + ${b}`;
    const fake3 = `${coeff}${expStr}`;
    const choices = shuffleChoices([ans, fake1, fake2, fake3]);

    return {
      id,
      level: 5,
      topic: 'อนุพันธ์ของฟังก์ชันพหุนาม (Derivatives - Power Rule)',
      question: `จงหาอนุพันธ์ d/dx [ ${a}x^${n} + ${b}x ] = ?`,
      choices,
      correctAnswer: ans,
      stepByStep: [
        `ใช้กฎกำลังของอนุพันธ์ (Power Rule): d/dx [xⁿ] = n·xⁿ⁻¹`,
        `พจน์แรก: d/dx [${a}x^${n}] = ${a} × ${n} × x^(${n}-1) = ${coeff}${expStr}`,
        `พจน์ที่สอง: d/dx [${b}x] = ${b} × 1 = ${b}`,
        `นำมารวมกัน: ${ans}`,
      ],
      hint: 'ดึงเลขชี้กำลังลงมาคูณข้างหน้า แล้วลดเลขชี้กำลังลง 1',
      points: 15,
    };
  } else if (type === 1) {
    // Indefinite Integral: ∫ (a x + b) dx = (a/2) x^2 + bx + C
    const a = (Math.floor(Math.random() * 4) + 1) * 2; // 2, 4, 6, 8 (even for clean fraction)
    const b = Math.floor(Math.random() * 8) + 2;
    const halfA = a / 2;
    const ans = `${halfA === 1 ? '' : halfA}x² + ${b}x + C`;
    const fake1 = `${a}x² + ${b}x + C`;
    const fake2 = `${halfA}x + ${b} + C`;
    const fake3 = `${halfA}x² + C`;
    const choices = shuffleChoices([ans, fake1, fake2, fake3]);

    return {
      id,
      level: 5,
      topic: 'ปริพันธ์ไม่จำกัดเขต (Indefinite Integrals)',
      question: `จงหาค่าของปริพันธ์: ∫ (${a}x + ${b}) dx = ?`,
      choices,
      correctAnswer: ans,
      stepByStep: [
        `ใช้กฎการหาปริพันธ์ของพจน์ยกกำลัง: ∫ xⁿ dx = xⁿ⁺¹ / (n + 1) + C`,
        `พจน์แรก: ∫ ${a}x¹ dx = ${a} × (x² / 2) = ${halfA}x²`,
        `พจน์ที่สอง: ∫ ${b} dx = ${b}x`,
        `อย่าลืมบวกค่าคงที่ของการอินทิเกรต (+ C)`,
        `ผลลัพธ์สุทธิ: ${ans}`,
      ],
      hint: 'เพิ่มเลขชี้กำลังขึ้น 1 แล้วหารด้วยเลขชี้กำลังใหม่ อย่าลืม + C',
      points: 15,
    };
  } else {
    // 2x2 Matrix Determinant: det [a b; c d] = ad - bc
    const a = Math.floor(Math.random() * 4) + 2;
    const b = Math.floor(Math.random() * 3) + 1;
    const c = Math.floor(Math.random() * 3) + 1;
    const d = Math.floor(Math.random() * 4) + 2;
    const det = a * d - b * c;
    const choices = shuffleChoices([
      det.toString(),
      (det + 2).toString(),
      (a * d + b * c).toString(),
      (det - 3).toString(),
    ]);

    return {
      id,
      level: 5,
      topic: 'ดีเทอร์มิแนนต์ของเมทริกซ์ 2×2 (Matrix Determinant)',
      question: `จงหาค่า det(A) ของเมทริกซ์ A = [ [${a}, ${b}], [${c}, ${d}] ]`,
      choices,
      correctAnswer: det.toString(),
      stepByStep: [
        `สูตรดีเทอร์มิแนนต์เมทริกซ์ 2×2: det [a b; c d] = ad - bc`,
        `คูณลง (ทแยงลง): a × d = ${a} × ${d} = ${a * d}`,
        `คูณขึ้น (ทแยงขึ้น): b × c = ${b} × ${c} = ${b * c}`,
        `คำนวณผลลัพธ์: (${a * d}) - (${b * c}) = ${det}`,
      ],
      hint: 'ผลคูณแนวทแยงลง ลบด้วย ผลคูณแนวทแยงขึ้น (ad - bc)',
      points: 15,
    };
  }
}

// -------------------------------------------------------------
// LEVEL 6: มหาวิทยาลัยขั้นสูง (Advanced University STEM)
// -------------------------------------------------------------
function generateLevel6Question(id: string): MathQuestion {
  const type = Math.floor(Math.random() * 3);

  if (type === 0) {
    // Partial Derivative: ∂/∂x (x^a * y^b)
    const a = Math.floor(Math.random() * 3) + 2; // 2, 3, 4
    const b = Math.floor(Math.random() * 3) + 2; // 2, 3, 4
    // ∂/∂x = a * x^(a-1) * y^b
    const newA = a - 1;
    const xPart = newA === 1 ? 'x' : `x^${newA}`;
    const ans = `${a}${xPart}y^${b}`;
    const fake1 = `${b}x^${a}y^${b - 1}`;
    const fake2 = `${a * b}x^${newA}y^${b - 1}`;
    const fake3 = `0`;
    const choices = shuffleChoices([ans, fake1, fake2, fake3]);

    return {
      id,
      level: 6,
      topic: 'อนุพันธ์ย่อย (Partial Derivatives)',
      question: `กำหนดให้ f(x, y) = x^${a} · y^${b} จงหาอนุพันธ์ย่อย ∂f/∂x = ?`,
      choices,
      correctAnswer: ans,
      stepByStep: [
        `การหาอนุพันธ์ย่อยเทียบกับ x (∂/∂x) ให้มองตัวแปรอื่น (y) เสมือนเป็น "ค่าคงที่"`,
        `ดึง y^${b} ออกมาเป็นค่าคงที่คูณอยู่ด้านหน้า: y^${b} · d/dx[x^${a}]`,
        `ดิฟ x^${a} เทียบกับ x จะได้ ${a}x^(${a}-1) = ${a}${xPart}`,
        `นำมารวมกันจะได้: ${ans}`,
      ],
      hint: 'เมื่อดิฟเทียบกับ x ให้ถือว่า y เป็นค่าคงที่',
      points: 20,
    };
  } else if (type === 1) {
    // Eigenvalues of 2x2 Diagonal or Upper Triangular Matrix
    const lambda1 = Math.floor(Math.random() * 5) + 2;
    const lambda2 = lambda1 + Math.floor(Math.random() * 4) + 1;
    const b = Math.floor(Math.random() * 6) + 1;
    // Matrix [lambda1 b; 0 lambda2]
    const choices = shuffleChoices([
      `λ = ${lambda1}, ${lambda2}`,
      `λ = ${lambda1 + 1}, ${lambda2 - 1}`,
      `λ = 0, ${lambda1 * lambda2}`,
      `λ = ${lambda1 + lambda2}, 0`,
    ]);

    return {
      id,
      level: 6,
      topic: 'ไอเกนแวลู (Eigenvalues of Triangular Matrix)',
      question: `จงหาค่าไอเกนแวลู (Eigenvalues) ทั้งหมดของเมทริกซ์ A = [ [${lambda1}, ${b}], [0, ${lambda2}] ]`,
      choices,
      correctAnswer: `λ = ${lambda1}, ${lambda2}`,
      stepByStep: [
        `ตั้งสมการลักษณะเฉพาะ (Characteristic Equation): det(A - λI) = 0`,
        `det [ (${lambda1} - λ) ${b} ; 0 (${lambda2} - λ) ] = 0`,
        `คำนวณดีเทอร์มิแนนต์: (${lambda1} - λ)(${lambda2} - λ) - (0 × ${b}) = 0`,
        `ได้ (${lambda1} - λ)(${lambda2} - λ) = 0`,
        `ดังนั้น ค่าไอเกนคือค่าบนเส้นทแยงมุมหลัก: λ = ${lambda1}, ${lambda2}`,
      ],
      hint: 'สำหรับเมทริกซ์สามเหลี่ยม ไอเกนแวลูคือตัวเลขบนเส้นทแยงมุมหลักเสมอ!',
      points: 20,
    };
  } else {
    // First-order ODE: dy/dx = k * y ⟹ y(x) = C * e^(kx)
    const k = Math.floor(Math.random() * 4) + 2;
    const ans = `y(x) = C · e^(${k}x)`;
    const fake1 = `y(x) = ${k}x + C`;
    const fake2 = `y(x) = C · e^(-${k}x)`;
    const fake3 = `y(x) = C · ln(${k}x)`;
    const choices = shuffleChoices([ans, fake1, fake2, fake3]);

    return {
      id,
      level: 6,
      topic: 'สมการเชิงอนุพันธ์อันดับหนึ่ง (Separable ODEs)',
      question: `จงหาผลเฉลยทั่วไปของสมการเชิงอนุพันธ์: dy/dx = ${k}y`,
      choices,
      correctAnswer: ans,
      stepByStep: [
        `ใช้วิธีแยกตัวแปร (Separation of Variables):`,
        `ย้าย y ไปฝั่งซ้าย และย้าย dx ไปฝั่งขวา: (1/y) dy = ${k} dx`,
        `ทำการอินทิเกรตทั้งสองข้าง: ∫ (1/y) dy = ∫ ${k} dx`,
        `ln|y| = ${k}x + C₁`,
        `เทกเอกซ์โพเนนเชียล: |y| = e^(${k}x + C₁) = e^C₁ · e^(${k}x)`,
        `ให้ C = ±e^C₁ ได้ผลเฉลยทั่วไป: ${ans}`,
      ],
      hint: 'ย้าย dy ให้อยู่กับ y และ dx ให้อยู่กับ x แล้วอินทิเกรตทั้งสองข้าง',
      points: 20,
    };
  }
}

function shuffleChoices(array: string[]): string[] {
  const unique = Array.from(new Set(array));
  return unique.sort(() => Math.random() - 0.5);
}
