export interface DialogueTurn {
  id: string;
  npcText: string;
  npcPinyin: string;
  npcThai: string;
  userPrompt: string;
  userTargetHanzi: string;
  userPinyin: string;
  userThai: string;
  userPinyinTokens: string[];
  acceptedAlternatives?: string[];
  hintTip: string;
}

export interface SituationalScenario {
  id: string;
  title: string;
  icon: string;
  badge: string;
  location: string;
  npcName: string;
  npcAvatar: string;
  npcRole: string;
  bgGradient: string;
  turns: DialogueTurn[];
  rewardStars: number;
}

export const SITUATIONAL_SCENARIOS: SituationalScenario[] = [
  // =========================================================================
  // สถานการณ์ 1: สั่งชานมไข่มุกในไต้หวัน
  // =========================================================================
  {
    id: 'boba_tea',
    title: 'สั่งชานมไข่มุกในไต้หวัน',
    icon: '🧋',
    badge: 'เครื่องดื่ม & คาเฟ่',
    location: 'ร้านชานมไข่มุกไทเป',
    npcName: 'หมีโบโบ้',
    npcAvatar: '🐻',
    npcRole: 'เจ้าของร้านชานม',
    bgGradient: 'from-amber-400 via-orange-400 to-rose-400',
    rewardStars: 20,
    turns: [
      {
        id: 'boba_turn_1',
        npcText: '你好！欢迎光临，请问你想喝什么？',
        npcPinyin: 'Nǐ hǎo! Huānyíng guānglín, qǐngwèn nǐ xiǎng hē shénme?',
        npcThai: 'สวัสดีครับ! ยินดีต้อนรับ อยากดื่มอะไรดีครับ?',
        userPrompt: 'บอกว่า "ฉันต้องการชานมไข่มุกหนึ่งแก้ว"',
        userTargetHanzi: '我要一杯珍珠奶茶。',
        userPinyin: 'Wǒ yào yībēi zhēnzhū nǎichá.',
        userThai: 'ฉันต้องการชานมไข่มุกหนึ่งแก้วค่ะ/ครับ',
        userPinyinTokens: ['wǒ', 'yào', 'yī', 'bēi', 'zhēn', 'zhū', 'nǎi', 'chá'],
        acceptedAlternatives: ['我要一杯珍珠奶茶', '我要珍珠奶茶', '一杯珍珠奶茶'],
        hintTip: 'คำว่า "zhēnzhū" (ไข่มุก) และ "nǎichá" (ชานม) ออกเสียง zh ให้ม้วนลิ้นนะจ๊ะ',
      },
      {
        id: 'boba_turn_2',
        npcText: '好的！请问你要几分甜，要冰的还是热的？',
        npcPinyin: 'Hǎo de! Qǐngwèn nǐ yào jǐ fēn tián, yào bīng de háishì rè de?',
        npcThai: 'ได้เลยครับ! หวานกี่เปอร์เซ็นต์ดีครับ แล้วรับแบบเย็นหรือร้อนดี?',
        userPrompt: 'บอกว่า "หวานครึ่งหนึ่ง น้ำแข็งน้อย ขอบคุณค่ะ"',
        userTargetHanzi: '半糖，少冰，谢谢。',
        userPinyin: 'Bàntáng, shǎobīng, xièxie.',
        userThai: 'หวาน 50% น้ำแข็งน้อย ขอบคุณค่ะ/ครับ',
        userPinyinTokens: ['bàn', 'táng', 'shǎo', 'bīng', 'xiè', 'xie'],
        acceptedAlternatives: ['半糖少冰谢谢', '半糖少冰', '少冰半糖'],
        hintTip: '"bàntáng" คือหวาน 50% "shǎobīng" คือน้ำแข็งน้อย คนไต้หวันชอบสั่งแบบนี้มาก!',
      },
      {
        id: 'boba_turn_3',
        npcText: '一共二十块钱，稍等两分钟马上做好！',
        npcPinyin: 'Yīgòng èrshí kuài qián, shāoděng liǎng fēnzhōng mǎshàng zuò hǎo!',
        npcThai: 'รวมทั้งหมด 20 หยวน รอสัก 2 นาที เดี๋ยวทำให้ทันทีครับ!',
        userPrompt: 'บอกว่า "ตกลงค่ะ นี่เงินค่ะ"',
        userTargetHanzi: '好的，给你钱。',
        userPinyin: 'Hǎo de, gěi nǐ qián.',
        userThai: 'ตกลงค่ะ นี่เงินค่ะ/ครับ',
        userPinyinTokens: ['hǎo', 'de', 'gěi', 'nǐ', 'qián'],
        acceptedAlternatives: ['好的给你钱', '给你钱', '好给你钱'],
        hintTip: '"gěi nǐ qián" แปลว่า ยื่นเงินให้คุณ',
      },
    ],
  },

  // =========================================================================
  // สถานการณ์ 2: ซื้อผลไม้สดในตลาด
  // =========================================================================
  {
    id: 'fruit_market',
    title: 'ซื้อผลไม้สดในตลาด',
    icon: '🍎',
    badge: 'จับจ่ายใช้สอย',
    location: 'ตลาดสดเฉิงตู',
    npcName: 'ป้าหวัง',
    npcAvatar: '👩🏻‍🌾',
    npcRole: 'แม่ค้าผลไม้ใจดี',
    bgGradient: 'from-rose-500 via-pink-500 to-amber-400',
    rewardStars: 20,
    turns: [
      {
        id: 'fruit_turn_1',
        npcText: '小朋友，今天的新鲜苹果特别甜！你想买什么水果？',
        npcPinyin: 'Xiǎopéngyǒu, jīntiān de xīnxiān píngguǒ tèbié tián! Nǐ xiǎng mǎi shénme shuǐguǒ?',
        npcThai: 'หนูน้อยจ๊ะ แอปเปิ้ลสดวันนี้หวานเจี๊ยบเลย! อยากซื้อผลไม้อะไรดีจ๊ะ?',
        userPrompt: 'ถามว่า "ขอถามหน่อยค่ะ แอปเปิ้ลสีแดงราคาเท่าไหร่คะ?"',
        userTargetHanzi: '请问，红苹果多少钱一斤？',
        userPinyin: 'Qǐngwèn, hóng píngguǒ duōshao qián yì jīn?',
        userThai: 'ขอถามหน่อยค่ะ แอปเปิ้ลสีแดงครึ่งกิโลกรัมละเท่าไหร่คะ?',
        userPinyinTokens: ['qǐng', 'wèn', 'hóng', 'píng', 'guǒ', 'duō', 'shao', 'qián', 'yì', 'jīn'],
        acceptedAlternatives: ['请问红苹果多少钱一斤', '苹果多少钱一斤', '红苹果多少钱'],
        hintTip: 'ในจีน หน่วย "jīn" (斤) เท่ากับครึ่งกิโลกรัม (500 กรัม)',
      },
      {
        id: 'fruit_turn_2',
        npcText: '红苹果五块钱一斤，很便宜！你要买几斤呀？',
        npcPinyin: 'Hóng píngguǒ wǔ kuài qián yì jīn, hěn piányi! Nǐ yào mǎi jǐ jīn ya?',
        npcThai: 'แอปเปิ้ลแดง 5 หยวนต่อครึ่งกิโล ถูกมากๆ เลย! หนูจะซื้อกี่ชั่งจ๊ะ?',
        userPrompt: 'บอกว่า "ฉันต้องการซื้อ 2 จินค่ะ (1 กิโลกรัม)"',
        userTargetHanzi: '我要买两斤。',
        userPinyin: 'Wǒ yào mǎi liǎng jīn.',
        userThai: 'หนูขอซื้อ 2 ชั่งค่ะ (1 กิโลกรัม)',
        userPinyinTokens: ['wǒ', 'yào', 'mǎi', 'liǎng', 'jīn'],
        acceptedAlternatives: ['我要买两斤', '买两斤', '两斤'],
        hintTip: 'จำนวน 2 ในการบอกปริมาณจะใช้ "liǎng" (两) ไม่ใช้ "èr"',
      },
    ],
  },

  // =========================================================================
  // สถานการณ์ 3: ท่องเที่ยวสวนสัตว์ปักกิ่ง
  // =========================================================================
  {
    id: 'beijing_zoo',
    title: 'เที่ยวชมสวนสัตว์ปักกิ่ง',
    icon: '🐼',
    badge: 'ท่องเที่ยว',
    location: 'สวนสัตว์ปักกิ่ง',
    npcName: 'พี่ไกด์หลี่',
    npcAvatar: '🧢',
    npcRole: 'ไกด์นำเที่ยวประจำสวนสัตว์',
    bgGradient: 'from-emerald-500 via-teal-500 to-cyan-500',
    rewardStars: 20,
    turns: [
      {
        id: 'zoo_turn_1',
        npcText: '欢迎来到北京动物园！这里有很多可爱的动物，你想先看哪一个？',
        npcPinyin: 'Huānyíng láidào Běijīng dòngwùyuán! Zhèlǐ yǒu hěn duō kě\'ài de dòngwù, nǐ xiǎng xiān kàn nǎ yí ge?',
        npcThai: 'ยินดีต้อนรับสู่สวนสัตว์ปักกิ่งครับ! ที่นี่มีสัตว์น่ารักมากมาย อยากไปดูตัวไหนก่อนดีครับ?',
        userPrompt: 'ถามว่า "ขอถามหน่อยค่ะ แพนด้าตัวใหญ่อยู่ที่ไหนคะ?"',
        userTargetHanzi: '请问，大熊猫馆在哪里？',
        userPinyin: 'Qǐngwèn, dàxióngmāo guǎn zài nǎlǐ?',
        userThai: 'ขอถามหน่อยค่ะ อาคารหมีแพนด้าอยู่ที่ไหนคะ?',
        userPinyinTokens: ['qǐng', 'wèn', 'dà', 'xióng', 'māo', 'guǎn', 'zài', 'nǎ', 'lǐ'],
        acceptedAlternatives: ['请问大熊猫馆在哪里', '大熊猫在哪里', '熊猫馆在哪里'],
        hintTip: '"dàxióngmāo" แปลว่า หมีแพนด้าตัวใหญ่',
      },
      {
        id: 'zoo_turn_2',
        npcText: '一直往前走两百米，左转就是大熊猫馆了！它正在吃新鲜的竹子呢。',
        npcPinyin: 'Yìzhí wǎng qián zǒu liǎngbǎi mǐ, zuǒzhuǎn jiù shì dàxióngmāo guǎn le! Tā zhèngzài chī xīnxiān de zhúzi ne.',
        npcThai: 'เดินตรงไปข้างหน้า 200 เมตร แล้วเลี้ยวซ้ายก็ถึงอาคารแพนด้าเลยครับ! มันกำลังกินไผ่สดอยู่เลย',
        userPrompt: 'กล่าวขอบคุณว่า "ขอบคุณมากค่ะพี่ไกด์!"',
        userTargetHanzi: '太棒了，非常感谢你！',
        userPinyin: 'Tài bàng le, fēicháng gǎnxiè nǐ!',
        userThai: 'สุดยอดเลย ขอบคุณมากๆ เลยค่ะ/ครับ!',
        userPinyinTokens: ['tài', 'bàng', 'le', 'fēi', 'cháng', 'gǎn', 'xiè', 'nǐ'],
        acceptedAlternatives: ['太棒了非常感谢你', '非常感谢你', '谢谢你'],
        hintTip: '"fēicháng gǎnxiè" มีความสุภาพและซาบซึ้งกว่าคำว่า xièxie ทั่วไป',
      },
    ],
  },

  // =========================================================================
  // สถานการณ์ 4: สั่งติ่มซำในภัตตาคารกวางตุ้ง
  // =========================================================================
  {
    id: 'dim_sum_restaurant',
    title: 'สั่งติ่มซำภัตตาคารกวางตุ้ง',
    icon: '🥟',
    badge: 'ร้านอาหาร & ภัตตาคาร',
    location: 'ภัตตาคารกวางโจว',
    npcName: 'ผู้จัดการเฉิน',
    npcAvatar: '👨🏻‍🍳',
    npcRole: 'ผู้จัดการร้านอาหาร',
    bgGradient: 'from-orange-500 via-amber-500 to-yellow-500',
    rewardStars: 20,
    turns: [
      {
        id: 'dimsum_turn_1',
        npcText: '三位贵宾里面请！请问先喝什么茶？有普洱、铁观音和菊花茶。',
        npcPinyin: 'Sān wèi guìbīn lǐmiàn qǐng! Qǐngwèn xiān hē shénme chá? Yǒu pǔ\'ěr, tiěguānyīn hé júhuāchá.',
        npcThai: 'เชิญแขกผู้มีเกียรติ 3 ท่านด้านในครับ! รับชาอะไรดื่มก่อนดีครับ? มีชาผูเอ่อร์ ทิกวนอิม และชาเก๊กฮวยครับ',
        userPrompt: 'บอกว่า "ขอชาเก๊กฮวยหนึ่งกาครับ/ค่ะ"',
        userTargetHanzi: '请来一壶菊花茶。',
        userPinyin: 'Qǐng lái yì hú júhuāchá.',
        userThai: 'ขอชาเก๊กฮวยหนึ่งกาครับ/ค่ะ',
        userPinyinTokens: ['qǐng', 'lái', 'yì', 'hú', 'jú', 'huā', 'chá'],
        acceptedAlternatives: ['请来一壶菊花茶', '来一壶菊花茶', '一壶菊花茶'],
        hintTip: '"yì hú" คือลักษณะนามของกาชา',
      },
      {
        id: 'dimsum_turn_2',
        npcText: '好的，菊花茶马上来！点心需要先来几样招牌菜吗？',
        npcPinyin: 'Hǎo de, júhuāchá mǎshàng lái! Diǎnxīn xūyào xiān lái jǐ yàng zhāopái cài ma?',
        npcThai: 'ได้เลยครับ ชาเก๊กฮวยมาทันทีครับ! ติ่มซำรับเมนูแนะนำกี่อย่างก่อนดีครับ?',
        userPrompt: 'บอกว่า "ขอฮะเก๋ากุ้งและซาลาเปาหมูแดงอย่างละหนึ่งเข่งครับ"',
        userTargetHanzi: '我要一份虾饺和一份叉烧包。',
        userPinyin: 'Wǒ yào yí fèn xiājiǎo hé yí fèn chāshāobāo.',
        userThai: 'ขอฮะเก๋ากุ้งหนึ่งที่ และซาลาเปาหมูแดงหนึ่งที่ครับ',
        userPinyinTokens: ['wǒ', 'yào', 'yí', 'fèn', 'xiā', 'jiǎo', 'hé', 'yí', 'fèn', 'chā', 'shāo', 'bāo'],
        acceptedAlternatives: ['我要一份虾饺和一份叉烧包', '一份虾饺一份叉烧包', '我要虾饺和叉烧包'],
        hintTip: '"xiājiǎo" (ฮะเก๋ากุ้ง) และ "chāshāobāo" (ซาลาเปาหมูแดง) ติ่มซำยอดฮิต',
      },
    ],
  },

  // =========================================================================
  // สถานการณ์ 5: ปรึกษาอาการที่คลินิกคุณหมอใจดี
  // =========================================================================
  {
    id: 'friendly_clinic',
    title: 'ปรึกษาอาการกับคุณหมอใจดี',
    icon: '🏥',
    badge: 'สุขภาพ & คลินิก',
    location: 'คลินิกชุมชนเซี่ยงไฮ้',
    npcName: 'คุณหมอจาง',
    npcAvatar: '👩🏻‍⚕️',
    npcRole: 'คุณหมอใจดี',
    bgGradient: 'from-cyan-500 via-blue-500 to-indigo-500',
    rewardStars: 20,
    turns: [
      {
        id: 'clinic_turn_1',
        npcText: '小朋友，别害怕！哪里觉得不舒服呀？',
        npcPinyin: 'Xiǎopéngyǒu, bié hàipà! Nǎlǐ juéde bù shūfu ya?',
        npcThai: 'หนูน้อยจ๊ะ ไม่ต้องกลัวนะจ๊ะ! รู้สึกไม่สบายตรงไหนเอ่ย?',
        userPrompt: 'บอกคุณหมอว่า "ฉันปวดหัว และมีไข้นิดหน่อยค่ะ"',
        userTargetHanzi: '医生，我头疼，有点发烧。',
        userPinyin: 'Yīshēng, wǒ tóuténg, yǒudiǎn fāshāo.',
        userThai: 'คุณหมอคะ หนูรู้สึกปวดหัว และมีไข้นิดหน่อยค่ะ',
        userPinyinTokens: ['yī', 'shēng', 'wǒ', 'tóu', 'téng', 'yǒu', 'diǎn', 'fā', 'shāo'],
        acceptedAlternatives: ['医生我头疼有点发烧', '我头疼有点发烧', '我头疼发烧'],
        hintTip: '"tóuténg" (ปวดหัว) และ "fāshāo" (เป็นไข้ตัวร้อน)',
      },
      {
        id: 'clinic_turn_2',
        npcText: '不用担心，只是轻微感冒！按时吃药，多喝温水，很快就会好起来的。',
        npcPinyin: 'Búyòng dānxīn, zhǐ shì qīngwēi gǎnmào! Ànshí chī yào, duō hē wēnshuǐ, hěn kuài jiù huì hǎo qǐlai de.',
        npcThai: 'ไม่ต้องกังวลนะจ๊ะ แค่หวัดเล็กน้อย ทานยาตรงเวลา ดื่มน้ำอุ่นเยอะๆ เดี๋ยวก็หายเป็นปกติจ้า',
        userPrompt: 'บอกคุณหมอว่า "ขอบคุณค่ะคุณหมอ หนูจะดื่มน้ำอุ่นเยอะๆ ค่ะ"',
        userTargetHanzi: '谢谢医生，我会多喝温水。',
        userPinyin: 'Xièxie yīshēng, wǒ huì duō hē wēnshuǐ.',
        userThai: 'ขอบคุณค่ะคุณหมอ หนูจะดื่มน้ำอุ่นเยอะๆ ค่ะ',
        userPinyinTokens: ['xiè', 'xie', 'yī', 'shēng', 'wǒ', 'huì', 'duō', 'hē', 'wēn', 'shuǐ'],
        acceptedAlternatives: ['谢谢医生我会多喝温水', '谢谢医生', '我会多喝温水'],
        hintTip: '"wēnshuǐ" (น้ำอุ่น) คนจีนเชื่อมั่นในการดื่มน้ำอุ่นเพื่อสุขภาพเสมอ',
      },
    ],
  },

  // =========================================================================
  // สถานการณ์ 6: ทำความรู้จักเพื่อนใหม่ในโรงเรียน
  // =========================================================================
  {
    id: 'school_friends',
    title: 'ทำความรู้จักเพื่อนใหม่',
    icon: '🎒',
    badge: 'โรงเรียน & มิตรภาพ',
    location: 'ห้องเรียนประถมปักกิ่ง',
    npcName: 'เสี่ยวเหมย',
    npcAvatar: '👧🏻',
    npcRole: 'เพื่อนร่วมชั้นคนใหม่',
    bgGradient: 'from-pink-500 via-rose-500 to-amber-400',
    rewardStars: 20,
    turns: [
      {
        id: 'school_turn_1',
        npcText: '你好！我是你的新同学，我叫小美。很高兴认识你！',
        npcPinyin: 'Nǐ hǎo! Wǒ shì nǐ de xīn tóngxué, wǒ jiào Xiǎoměi. Hěn gāoxìng rènshí nǐ!',
        npcThai: 'สวัสดีจ้ะ! ฉันเป็นเพื่อนร่วมชั้นคนใหม่ของเธอ ฉันชื่อเสี่ยวเหมย ยินดีที่ได้รู้จักนะ!',
        userPrompt: 'ทักทายกลับว่า "สวัสดีเสี่ยวเหมย! ฉันก็ยินดีที่ได้รู้จักเธอเช่นกัน"',
        userTargetHanzi: '你好小美！我也很高兴认识你。',
        userPinyin: 'Nǐ hǎo Xiǎoměi! Wǒ yě hěn gāoxìng rènshí nǐ.',
        userThai: 'สวัสดีเสี่ยวเหมย! ฉันก็ยินดีที่ได้รู้จักเธอเช่นกัน',
        userPinyinTokens: ['nǐ', 'hǎo', 'xiǎo', 'měi', 'wǒ', 'yě', 'hěn', 'gāo', 'xìng', 'rèn', 'shí', 'nǐ'],
        acceptedAlternatives: ['你好小美我也很高兴认识你', '你好小美很高兴认识你', '你好小美'],
        hintTip: '"wǒ yě" (ฉันก็เหมือนกัน) และ "hěn gāoxìng rènshí nǐ" (ยินดีที่ได้รู้จัก)',
      },
      {
        id: 'school_turn_2',
        npcText: '放学后我们一起去图书馆看故事书，好不好？',
        npcPinyin: 'Fàngxué hòu wǒmen yìqǐ qù túshūguǎn kàn gùshì shū, hǎo bù hǎo?',
        npcThai: 'หลังเลิกเรียนพวกเราไปอ่านหนังสือนิทานที่ห้องสมุดด้วยกัน ดีไหมจ๊ะ?',
        userPrompt: 'ตอบตกลงว่า "ดีเลย! พวกเราไปด้วยกันเถอะ"',
        userTargetHanzi: '太好了！我们一起去吧。',
        userPinyin: 'Tài hǎo le! Wǒmen yìqǐ qù ba.',
        userThai: 'ดีเลย! พวกเราไปด้วยกันเถอะนะ',
        userPinyinTokens: ['tài', 'hǎo', 'le', 'wǒ', 'men', 'yì', 'qǐ', 'qù', 'ba'],
        acceptedAlternatives: ['太好了我们一起去吧', '太好了我们一起去', '好的我们一起去吧'],
        hintTip: '"tài hǎo le" แปลว่า ดีสุดยอดเลย และ "yìqǐ qù ba" แปลว่า ไปด้วยกันเถอะ',
      },
    ],
  },

  // =========================================================================
  // สถานการณ์ 7: นั่งรถแท็กซี่ / เรียกรถดีดี้ (Didi Taxi)
  // =========================================================================
  {
    id: 'didi_taxi',
    title: 'นั่งรถแท็กซี่ / เรียกรถดีดี้',
    icon: '🚕',
    badge: 'เดินทาง & เรียกรถ',
    location: 'ถนนฉางอาน กรุงปักกิ่ง',
    npcName: 'คุณคนขับหลิว',
    npcAvatar: '👨🏻‍✈️',
    npcRole: 'คนขับรถ Didi มืออาชีพ',
    bgGradient: 'from-amber-500 via-orange-500 to-red-500',
    rewardStars: 25,
    turns: [
      {
        id: 'didi_turn_1',
        npcText: '你好！请问手机尾号是 5882 吗？你要去哪里？',
        npcPinyin: 'Nǐ hǎo! Qǐngwèn shǒujī wěihào shì wǔ bā bā èr ma? Nǐ yào qù nǎlǐ?',
        npcThai: 'สวัสดีครับ! ขอถามหน่อยว่าเบอร์มือถือ 4 ตัวท้ายคือ 5882 ใช่ไหมครับ? จะไปที่ไหนครับ?',
        userPrompt: 'บอกว่า "ใช่ครับ ผมจะไปสถานีรถไฟปักกิ่งใต้ ขอบคุณครับ"',
        userTargetHanzi: '是的，我要去北京南站，谢谢！',
        userPinyin: 'Shì de, wǒ yào qù Běijīng Nánzhàn, xièxie!',
        userThai: 'ใช่ครับ ผมจะไปสถานีรถไฟปักกิ่งใต้ ขอบคุณครับ',
        userPinyinTokens: ['shì', 'de', 'wǒ', 'yào', 'qù', 'běi', 'jīng', 'nán', 'zhàn', 'xiè', 'xie'],
        acceptedAlternatives: ['是的我要去北京南站谢谢', '是的我去北京南站', '我要去北京南站'],
        hintTip: 'ขึ้นรถ Didi ทุกครั้ง คนขับจะถาม "wěihào" (เบอร์โทร 4 ตัวท้าย) เพื่อยืนยันตัวตน',
      },
      {
        id: 'didi_turn_2',
        npcText: '好的！车里空调温度可以吗？要是太冷就跟我说一声。',
        npcPinyin: 'Hǎo de! Chē lǐ kōngtiáo wēndù kěyǐ ma? Yàoshi tài lěng jiù gēn wǒ shuō yì shēng.',
        npcThai: 'ได้เลยครับ! แอร์ในรถเย็นพอดีไหมครับ? ถ้าหนาวไปบอกผมได้เลยนะครับ',
        userPrompt: 'บอกว่า "ค่อนข้างเย็นครับ ช่วยหรี่แอร์ลงนิดนึงได้ไหมครับ"',
        userTargetHanzi: '有点冷，请把空调调小一点。',
        userPinyin: 'Yǒudiǎn lěng, qǐng bǎ kōngtiáo tiáoxiǎo yìdiǎn.',
        userThai: 'ค่อนข้างเย็นครับ ช่วยหรี่แอร์ลงนิดนึงได้ไหมครับ',
        userPinyinTokens: ['yǒu', 'diǎn', 'lěng', 'qǐng', 'bǎ', 'kōng', 'tiáo', 'tiáo', 'xiǎo', 'yì', 'diǎn'],
        acceptedAlternatives: ['有点冷请把空调调小一点', '有点冷把空调调小一点', '空调调小一点'],
        hintTip: '"tiáoxiǎo yìdiǎn" แปลว่า หรี่/เบาลงหน่อย',
      },
      {
        id: 'didi_turn_3',
        npcText: '前面进站口到了，车很多，你在哪边下？',
        npcPinyin: 'Qiánmiàn jìnzhànkǒu dào le, chē hěn duō, nǐ zài nǎ biān xià?',
        npcThai: 'ข้างหน้าถึงทางเข้าสถานีแล้ว รถเยอะมาก จะลงฝั่งไหนดีครับ?',
        userPrompt: 'บอกว่า "จอดริมทางตรงนี้ได้เลยครับ ลำบากพี่แย่เลย ขอบคุณครับ!"',
        userTargetHanzi: '在路边停一下就可以了，辛苦了！',
        userPinyin: 'Zài lùbiān tíng yíxià jiù kěyǐ le, xīnkǔ le!',
        userThai: 'จอดริมทางตรงนี้ได้เลยครับ ลำบากพี่แย่เลย ขอบคุณครับ!',
        userPinyinTokens: ['zài', 'lù', 'biān', 'tíng', 'yí', 'xià', 'jiù', 'kě', 'yǐ', 'le', 'xīn', 'kǔ', 'le'],
        acceptedAlternatives: ['在路边停一下就可以了辛苦了', '路边停一下就可以了', '路边停一下辛苦了'],
        hintTip: '"xīnkǔ le" ประโยคสุภาพที่คนจีนใช้ขอบคุณคนขับรถเสมอ',
      },
    ],
  },

  // =========================================================================
  // สถานการณ์ 8: ขึ้นรถไฟความเร็วสูง (GaoTie) ไปเซี่ยงไฮ้
  // =========================================================================
  {
    id: 'high_speed_rail',
    title: 'ขึ้นรถไฟความเร็วสูง (GaoTie)',
    icon: '🚄',
    badge: 'คมนาคม & รถไฟ',
    location: 'สถานีรถไฟความเร็วสูงปักกิ่งใต้',
    npcName: 'เจ้าหน้าที่เสี่ยวเฉิน',
    npcAvatar: '👩🏻‍💼',
    npcRole: 'พนักงานต้อนรับรถไฟความเร็วสูง',
    bgGradient: 'from-blue-600 via-indigo-600 to-purple-600',
    rewardStars: 25,
    turns: [
      {
        id: 'gaotie_turn_1',
        npcText: '你好！请出示你的护照或者乘车二维码核验。',
        npcPinyin: 'Nǐ hǎo! Qǐng chūshì nǐ de hùzhào huòzhě chéngchē èrwéimǎ héyàn.',
        npcThai: 'สวัสดีค่ะ! กรุณาแสดงพาสปอร์ตหรือคิวอาร์โค้ดขึ้นรถไฟเพื่อตรวจสอบค่ะ',
        userPrompt: 'บอกว่า "นี่คือพาสปอร์ตของฉัน ตรวจตั๋วที่ช่องเบอร์ไหนครับ?"',
        userTargetHanzi: '这是我的护照，请问在几号检票口？',
        userPinyin: 'Zhè shì wǒ de hùzhào, qǐngwèn zài jǐ hào jiǎnpiàokǒu?',
        userThai: 'นี่คือพาสปอร์ตของฉัน ขอถามว่าตรวจตั๋วที่ช่องเบอร์ไหนครับ?',
        userPinyinTokens: ['zhè', 'shì', 'wǒ', 'de', 'hù', 'zhào', 'qǐng', 'wèn', 'zài', 'jǐ', 'hào', 'jiǎn', 'piào', 'kǒu'],
        acceptedAlternatives: ['这是我的护照请问在几号检票口', '在几号检票口', '请问在几号检票口'],
        hintTip: '"jiǎnpiàokǒu" แปลว่า ประตูตรวจตั๋ว',
      },
      {
        id: 'gaotie_turn_2',
        npcText: '在八号检票口，二等座五号车厢。你的行李箱需要放行李架吗？',
        npcPinyin: 'Zài bā hào jiǎnpiàokǒu, èrděngzuò wǔ hào chēxiāng. Nǐ de xínglixiāng xūyào fàng xínglijià ma?',
        npcThai: 'ที่ประตูหมายเลข 8 โบกี้ที่ 5 ที่นั่งชั้นสองค่ะ กระเป๋าเดินทางต้องวางบนชั้นวางสัมภาระไหมคะ?',
        userPrompt: 'ถามว่า "กระเป๋าเดินทางใบใหญ่ของฉัน วางไว้ตรงไหนได้บ้างครับ?"',
        userTargetHanzi: '请问我的大行李箱可以放在哪里？',
        userPinyin: 'Qǐngwèn wǒ de dà xínglixiāng kěyǐ fàng zài nǎlǐ?',
        userThai: 'ขอถามหน่อยครับ กระเป๋าเดินทางใบใหญ่ของฉันวางไว้ตรงไหนได้บ้างครับ?',
        userPinyinTokens: ['qǐng', 'wèn', 'wǒ', 'de', 'dà', 'xíng', 'li', 'xiāng', 'kě', 'yǐ', 'fàng', 'zài', 'nǎ', 'lǐ'],
        acceptedAlternatives: ['请问我的大行李箱可以放在哪里', '大行李箱放在哪里', '行李箱放在哪里'],
        hintTip: '"xínglixiāng" คือกระเป๋าเดินทางล้อลาก',
      },
    ],
  },

  // =========================================================================
  // สถานการณ์ 9: เช็คอินโรงแรมในเซี่ยงไฮ้
  // =========================================================================
  {
    id: 'hotel_checkin',
    title: 'เช็คอินโรงแรมในเซี่ยงไฮ้',
    icon: '🏨',
    badge: 'ที่พัก & โรงแรม',
    location: 'โรงแรมริมหาดไว่ทาน เซี่ยงไฮ้',
    npcName: 'ผู้จัดการหลิน',
    npcAvatar: '🧑🏻‍💼',
    npcRole: 'ผู้จัดการแผนกต้อนรับ',
    bgGradient: 'from-sky-500 via-indigo-500 to-rose-400',
    rewardStars: 25,
    turns: [
      {
        id: 'hotel_turn_1',
        npcText: '您好，欢迎光临！请问您有预订吗？',
        npcPinyin: 'Nín hǎo, huānyíng guānglín! Qǐngwèn nín yǒu yùdìng ma?',
        npcThai: 'สวัสดีครับ ยินดีต้อนรับครับ! ไม่ทราบว่าท่านได้จองห้องพักไว้ไหมครับ?',
        userPrompt: 'บอกว่า "สวัสดีครับ ผมจองห้องเตียงเดี่ยวไว้ทางอินเทอร์เน็ตครับ"',
        userTargetHanzi: '你好，我在网上预订了一间大床房。',
        userPinyin: 'Nǐ hǎo, wǒ zài wǎngshang yùdìng le yì jiān dàchuángfáng.',
        userThai: 'สวัสดีครับ ผมจองห้องเตียงเดี่ยวขนาดใหญ่ไว้ทางอินเทอร์เน็ตครับ',
        userPinyinTokens: ['nǐ', 'hǎo', 'wǒ', 'zài', 'wǎng', 'shang', 'yù', 'dìng', 'le', 'yì', 'jiān', 'dà', 'chuáng', 'fáng'],
        acceptedAlternatives: ['你好我在网上预订了一间大床房', '我预订了大床房', '我在网上预订了房间'],
        hintTip: '"dàchuángfáng" คือห้องเตียงใหญ่ (King/Queen size) ส่วน "shuāngchuángfáng" คือห้องเตียงคู่',
      },
      {
        id: 'hotel_turn_2',
        npcText: '查到了！请出示护照登记，我们给您安排在十六楼观景房。',
        npcPinyin: 'Chádào le! Qǐng chūshì hùzhào dēngjì, wǒmen gěi nín ānpái zài shíliù lóu guānjǐng fáng.',
        npcThai: 'พบข้อมูลแล้วครับ! กรุณายื่นพาสปอร์ตเพื่อลงทะเบียน จัดห้องวิวสวยชั้น 16 ให้ท่านเรียบร้อยครับ',
        userPrompt: 'ถามว่า "ขอบคุณมากครับ ไม่ทราบว่ารหัส Wi-Fi ในห้องคืออะไรครับ?"',
        userTargetHanzi: '太好了，请问房间无线网密码是多少？',
        userPinyin: 'Tài hǎo le, qǐngwèn fángjiān wúxiànwǎng mìmǎ shì duōshao?',
        userThai: 'ยอดเยี่ยมเลยครับ ไม่ทราบว่ารหัสผ่าน Wi-Fi ในห้องคืออะไรครับ?',
        userPinyinTokens: ['tài', 'hǎo', 'le', 'qǐng', 'wèn', 'fáng', 'jiān', 'wú', 'xiàn', 'wǎng', 'mì', 'mǎ', 'shì', 'duō', 'shao'],
        acceptedAlternatives: ['太好了请问房间无线网密码是多少', '请问无线网密码是多少', '无线网密码是多少'],
        hintTip: '"wúxiànwǎng mìmǎ" คือรหัสผ่านไวไฟ',
      },
    ],
  },

  // =========================================================================
  // สถานการณ์ 10: สั่งอาหารเดลิเวอรี่ (外卖) & คุยกับพี่ไรเดอร์
  // =========================================================================
  {
    id: 'waimai_delivery',
    title: 'รับอาหารเดลิเวอรี่ (Waimai)',
    icon: '🛵',
    badge: 'เดลิเวอรี่ & สั่งอาหาร',
    location: 'หน้าคอนโดในเมืองเซินเจิ้น',
    npcName: 'พี่ไรเดอร์เสี่ยวเกอ',
    npcAvatar: '🛵',
    npcRole: 'พนักงานส่งอาหารเดลิเวอรี่',
    bgGradient: 'from-yellow-400 via-amber-500 to-orange-500',
    rewardStars: 25,
    turns: [
      {
        id: 'waimai_turn_1',
        npcText: '喂，你好！你的外卖到了，我现在在小区大门口。',
        npcPinyin: 'Wèi, nǐ hǎo! Nǐ de wàimài dào le, wǒ xiànzài zài xiǎoqū dàmén kǒu.',
        npcThai: 'ฮัลโหล สวัสดีครับ! อาหารเดลิเวอรี่ของคุณมาถึงแล้ว ตอนนี้ผมอยู่ที่หน้าประตูหมู่บ้านครับ',
        userPrompt: 'บอกว่า "สวัสดีครับ ช่วยนำมาวางไว้ที่โต๊ะหน้าประตูทางเข้าคอนโดให้หน่อยครับ"',
        userTargetHanzi: '你好，请帮我放在门口桌子上。',
        userPinyin: 'Nǐ hǎo, qǐng bāng wǒ fàng zài ménkǒu zhuōzi shang.',
        userThai: 'สวัสดีครับ ช่วยวางไว้บนโต๊ะหน้าประตูให้หน่อยครับ',
        userPinyinTokens: ['nǐ', 'hǎo', 'qǐng', 'bāng', 'wǒ', 'fàng', 'zài', 'mén', 'kǒu', 'zhuō', 'zi', 'shang'],
        acceptedAlternatives: ['你好请帮我放在门口桌子上', '放在门口桌子上', '请放在门口桌子上'],
        hintTip: 'ในจีน คอนโดส่วนใหญ่จะมีโต๊ะรับส่งของ "wàimài zhuōzi" ที่ล็อบบี้',
      },
      {
        id: 'waimai_turn_2',
        npcText: '好的，已经放好了！餐盒包装很完整，趁热吃吧！',
        npcPinyin: 'Hǎo de, yǐjīng fàng hǎo le! Cānhé bāozhuāng hěn wánzhěng, chèn rè chī ba!',
        npcThai: 'ได้เลยครับ วางเรียบร้อยแล้ว! ห่ออาหารเรียบร้อยดี รีบทานตอนร้อนๆ นะครับ!',
        userPrompt: 'บอกว่า "รับทราบแล้วครับ ขอบคุณมาก ลำบากพี่แย่เลยครับ!"',
        userTargetHanzi: '收到了，非常感谢，辛苦你了！',
        userPinyin: 'Shōudào le, fēicháng gǎnxiè, xīnkǔ nǐ le!',
        userThai: 'รับทราบแล้วครับ ขอบคุณมากๆ ลำบากพี่แย่เลยครับ!',
        userPinyinTokens: ['shōu', 'dào', 'le', 'fēi', 'cháng', 'gǎn', 'xiè', 'xīn', 'kǔ', 'nǐ', 'le'],
        acceptedAlternatives: ['收到了非常感谢辛苦你了', '收到了辛苦你了', '谢谢辛苦了'],
        hintTip: '"shōudào le" แปลว่า ได้รับของแล้ว และ "xīnkǔ nǐ le" ให้กำลังใจไรเดอร์',
      },
    ],
  },

  // =========================================================================
  // สถานการณ์ 11: ซื้อของในร้านสะดวกซื้อ & สแกนจ่ายเงิน
  // =========================================================================
  {
    id: 'convenience_store',
    title: 'ร้านสะดวกซื้อ & สแกนจ่ายเงิน',
    icon: '🏪',
    badge: 'สะดวกซื้อ & ชำระเงิน',
    location: 'ร้านสะดวกซื้อในกว่างโจว',
    npcName: 'แคชเชียร์เสี่ยวโจว',
    npcAvatar: '🏪',
    npcRole: 'พนักงานร้านสะดวกซื้อ',
    bgGradient: 'from-emerald-500 via-teal-500 to-blue-500',
    rewardStars: 25,
    turns: [
      {
        id: 'store_turn_1',
        npcText: '你好！便当需要加热吗？塑料袋需要买一个吗？',
        npcPinyin: 'Nǐ hǎo! Biàndāng xūyào jiārè ma? Sùliàodài xūyào mǎi yí ge ma?',
        npcThai: 'สวัสดีครับ! ข้าวกล่องต้องอุ่นร้อนไหมครับ? รับถุงพลาสติกหนึ่งใบไหมครับ?',
        userPrompt: 'บอกว่า "ช่วยอุ่นให้ด้วยครับ แล้วก็ขอถุงพลาสติกหนึ่งใบครับ"',
        userTargetHanzi: '需要加热，还要一个塑料袋。',
        userPinyin: 'Xūyào jiārè, hái yào yí ge sùliàodài.',
        userThai: 'ต้องการอุ่นร้อนครับ และขอถุงพลาสติกหนึ่งใบด้วยครับ',
        userPinyinTokens: ['xū', 'yào', 'jiā', 'rè', 'hái', 'yào', 'yí', 'ge', 'sù', 'liào', 'dài'],
        acceptedAlternatives: ['需要加热还要一个塑料袋', '需要加热要一个塑料袋', '加热要塑料袋'],
        hintTip: 'ในจีน ถุงพลาสติก "sùliàodài" ต้องซื้อแยกตามนโยบายรักษ์สิ่งแวดล้อม',
      },
      {
        id: 'store_turn_2',
        npcText: '好的，一共二十八块五。你扫我还是我扫你？',
        npcPinyin: 'Hǎo de, yígòng èrshíbā kuài wǔ. Nǐ sǎo wǒ háishì wǒ sǎo nǐ?',
        npcThai: 'ได้ครับ ทั้งหมด 28.5 หยวน คุณสแกนผมหรือให้ผมสแกนคุณครับ?',
        userPrompt: 'บอกว่า "ผมสแกนคุณครับ ผมจ่ายด้วย Alipay (หรือ WeChat)"',
        userTargetHanzi: '我扫你，我用支付宝。',
        userPinyin: 'Wǒ sǎo nǐ, wǒ yòng zhīfùbǎo.',
        userThai: 'ฉันสแกนคุณค่ะ ฉันใช้ Alipay ค่ะ',
        userPinyinTokens: ['wǒ', 'sǎo', 'nǐ', 'wǒ', 'yòng', 'zhī', 'fù', 'bǎo'],
        acceptedAlternatives: ['我扫你我用支付宝', '我扫你', '我用支付宝'],
        hintTip: '"wǒ sǎo nǐ" คือเราเปิดกล้องสแกนคิวอาร์โค้ดของทางร้าน',
      },
    ],
  },

  // =========================================================================
  // สถานการณ์ 12: เลือกซื้อเสื้อผ้า & ต่อรองราคาในตลาด
  // =========================================================================
  {
    id: 'clothing_haggling',
    title: 'ซื้อเสื้อผ้า & ต่อรองราคา',
    icon: '👗',
    badge: 'ช้อปปิ้ง & ตลาดแฟชั่น',
    location: 'ตลาดแฟชั่นซีตาน ปักกิ่ง',
    npcName: 'เจ๊หลี่ร้านเสื้อผ้า',
    npcAvatar: '👩🏻',
    npcRole: 'เจ้าของร้านแฟชั่นสุดมั่น',
    bgGradient: 'from-purple-500 via-pink-500 to-rose-500',
    rewardStars: 25,
    turns: [
      {
        id: 'cloth_turn_1',
        npcText: '美女/帅哥，看看这件白色外套！款式特别潮，质量非常好！',
        npcPinyin: 'Měinǚ/shuàigē, kànkan zhè jiàn báisè wàitào! Kuǎnshì tèbié cháo, zhìliàng fēicháng hǎo!',
        npcThai: 'คนสวย/รูปหล่อ มาดูเสื้อคลุมสีขาวตัวนี้สิ! สไตล์อินเทรนด์มาก เนื้อผ้าดีเยี่ยมเลยนะ!',
        userPrompt: 'ถามว่า "เสื้อตัวนี้สวยดีค่ะ ขอลองสวมดูหน่อยได้ไหมคะ?"',
        userTargetHanzi: '这件衣服很好看，我可以试穿吗？',
        userPinyin: 'Zhè jiàn yīfu hěn hǎokàn, wǒ kěyǐ shìchuān ma?',
        userThai: 'เสื้อตัวนี้สวยมากเลย ฉันขอลองสวมดูหน่อยได้ไหมคะ?',
        userPinyinTokens: ['zhè', 'jiàn', 'yī', 'fu', 'hěn', 'hǎo', 'kàn', 'wǒ', 'kě', 'yǐ', 'shì', 'chuān', 'ma'],
        acceptedAlternatives: ['这件衣服很好看我可以试穿吗', '我可以试穿吗', '这件可以试穿吗'],
        hintTip: '"shìchuān" แปลว่า ลองสวมเสื้อผ้า',
      },
      {
        id: 'cloth_turn_2',
        npcText: '可以试穿！试衣间在里面。原价两百八，喜欢的话算你两百二！',
        npcPinyin: 'Kěyǐ shìchuān! Shìyījiān zài lǐmiàn. Yuánjià liǎngbǎi bā, xǐhuan de huà suàn nǐ liǎngbǎi èr!',
        npcThai: 'ลองได้เลยจ้า! ห้องลองอยู่ข้างใน ราคาเดิม 280 ถ้าชอบคิดให้ 220 ละกัน!',
        userPrompt: 'ต่อราคาว่า "180 หยวนขายได้ไหมคะ? ถ้าได้ฉันเอาเลยค่ะ"',
        userTargetHanzi: '一百八卖不卖？一百八我就买！',
        userPinyin: 'Yìbǎi bā mài bu mài? Yìbǎi bā wǒ jiù mǎi!',
        userThai: '180 หยวนขายได้ไหมคะ? ถ้า 180 ฉันซื้อเลยค่ะ!',
        userPinyinTokens: ['yì', 'bǎi', 'bā', 'mài', 'bu', 'mài', 'yì', 'bǎi', 'bā', 'wǒ', 'jiù', 'mǎi'],
        acceptedAlternatives: ['一百八卖不卖一百八我就买', '一百八卖不卖', '一百八行不行'],
        hintTip: '"mài bu mài" แปลว่า ขายหรือไม่ขาย เป็นลีลาการต่อราคาแบบคนจีนท้องถิ่น',
      },
    ],
  },
];
