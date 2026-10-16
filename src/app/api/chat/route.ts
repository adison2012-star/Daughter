import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

const SYSTEM_PROMPT = `
คุณคือ "เป่าเปา" (小熊猫宝宝 - Xiǎoxióngmāo Bǎobao) ลูกหมีแพนด้าติวเตอร์ภาษาจีน AI ตัวกลมแสนน่ารัก ขี้เล่น อบอุ่น และใจดีมาก
หน้าที่ของคุณคือเป็นเพื่อนคุยและฝึกพูดภาษาจีนกับลูกสาวสองคน (เด็กหญิงไทย) ที่กำลังหัดเรียนภาษาจีน

กติกาสำคัญ:
1. ตอบสั้นกระชับ เป็นกันเอง สดใส และให้กำลังใจเสมอ (มีอีโมจิน่ารักๆ เช่น 🐼✨🎋)
2. เมื่อตอบภาษาจีน ให้ใส่รูปแบบเสมอ:
   - อักษรจีน (Hanzi)
   - พินอินพร้อมวรรณยุกต์ (Pinyin)
   - คำแปลภาษาไทยและคำอ่านเข้าใจง่าย
3. หากเด็กพิมพ์หรือพูดผิด ไม่ต้องดุ แต่ให้ช่วยแก้คำพูดอย่างอ่อนโยน เช่น "เก่งมากจ้ะ! แต่ถ้าพูดว่า ... จะเหมือนคนจีนแท้ๆ เลยนะ"
4. ชวนคุยต่อด้วยคำถามสั้นๆ หรือเล่นเกมทายคำศัพท์
`;

// Friendly fallback responses if GEMINI_API_KEY is not configured yet
const FALLBACK_RESPONSES = [
  {
    hanzi: '你好！我是小熊猫宝宝，很高兴认识你！今天你想和我聊什么呢？🐼🎋',
    pinyin: 'Nǐ hǎo! Wǒ shì xiǎoxióngmāo bǎobao, hěn gāoxìng rènshi nǐ! Jīntiān nǐ xiǎng hé wǒ liáo shénme ne?',
    thai: 'สวัสดีจ้า! ฉันคือแพนด้าน้อยเป่าเปา ยินดีที่ได้รู้จักนะ วันนี้อยากคุยเรื่องอะไรกับเป่าเปาดีเอ่ย?',
  },
  {
    hanzi: '太棒了！你的发音真标准，就像真正的中国小朋友一样！🌟👏',
    pinyin: 'Tài bàng le! Nǐ de fāyīn zhēn biāozhǔn, jiù xiàng zhēnzhèng de zhōngguó xiǎopéngyou yīyàng!',
    thai: 'ยอดเยี่ยมมากเลย! การออกเสียงของหนูชัดเป๊ะ เหมือนเด็กจีนจริงๆ เลยจ้า เก่งที่สุด!',
  },
  {
    hanzi: '你喜欢小猫还是小狗呢？小猫叫“māo”，小狗叫“gǒu”哦！🐱🐶',
    pinyin: 'Nǐ xǐhuan xiǎomāo háishì xiǎogǒu ne? Xiǎomāo jiào "māo", xiǎogǒu jiào "gǒu" ó!',
    thai: 'หนูชอบลูกแมวหรือลูกหมามากกว่ากันจ๊ะ? แมวภาษาจีนเรียกว่า "māo" ส่วนหมาเรียกว่า "gǒu" นะ!',
  },
  {
    hanzi: '记得每天多喝温水哦！水在中文里叫“shuǐ”，是第三声！💧',
    pinyin: 'Jìde měitiān duō hē wēnshuǐ ó! Shuǐ zài zhōngwén lǐ jiào "shuǐ", shì dì-sān shēng!',
    thai: 'อย่าลืมดื่มน้ำอุ่นเยอะๆ ทุกวันนะ คำว่าน้ำภาษาจีนเรียกว่า "shuǐ" เป็นเสียงที่ 3 จ้า!',
  },
];

export async function POST(req: NextRequest) {
  try {
    const { message, profileName } = await req.json();

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      // Return charming intelligent fallback
      const randomFallback = FALLBACK_RESPONSES[Math.floor(Math.random() * FALLBACK_RESPONSES.length)];
      return NextResponse.json({
        success: true,
        text: randomFallback.hanzi,
        pinyin: randomFallback.pinyin,
        thai: randomFallback.thai,
        isFallback: true,
      });
    }

    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        {
          role: 'user',
          parts: [
            {
              text: `${SYSTEM_PROMPT}\n\nผู้เรียนชื่อ: ${profileName || 'น้องสาว'}\nข้อความที่เด็กพูด: "${message}"\n\nจงตอบกลับอย่างอบอุ่น โดยให้มีทั้งตัวอักษรจีน (Hanzi), พินอิน (Pinyin), และคำแปลภาษาไทย ให้คำตอบอยู่ในรูปแบบ JSON: {"hanzi": "...", "pinyin": "...", "thai": "..."}`,
            },
          ],
        },
      ],
    });

    const responseText = response.text || '';
    
    // Try to extract JSON from response
    try {
      const jsonMatch = responseText.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        const parsed = JSON.parse(jsonMatch[0]);
        return NextResponse.json({
          success: true,
          text: parsed.hanzi || responseText,
          pinyin: parsed.pinyin || '',
          thai: parsed.thai || '',
        });
      }
    } catch {
      // If parsing fails, return raw text
    }

    return NextResponse.json({
      success: true,
      text: responseText,
      pinyin: '',
      thai: '',
    });
  } catch (error) {
    console.error('Gemini chat error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to generate response',
        text: 'เป่าเปากำลังคิดคำตอบอยู่น้า ลองถามใหม่อีกทีนะจ๊ะ 🐼',
      },
      { status: 500 }
    );
  }
}
