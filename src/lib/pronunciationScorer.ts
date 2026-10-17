'use client';

export interface CharEvaluation {
  char: string;
  pinyin?: string;
  status: 'correct' | 'close' | 'missed';
}

export interface PronunciationScoreResult {
  score: number; // 0 - 100
  grade: 'excellent' | 'good' | 'try_again';
  gradeBadge: string;
  praiseText: string;
  tipText: string;
  recognizedText: string;
  charDetails: CharEvaluation[];
}

/**
 * Clean Chinese text by removing punctuation, spaces, and symbols.
 */
export function cleanChineseText(text: string): string {
  return text.replace(/[^\u4e00-\u9fa5a-zA-Z0-9]/g, '').trim();
}

/**
 * Levenshtein distance between two strings
 */
function levenshteinDistance(s1: string, s2: string): number {
  const m = s1.length;
  const n = s2.length;
  const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      }
    }
  }

  return dp[m][n];
}

/**
 * Phonetic tips for common Chinese sounds
 */
const PHONETIC_TIPS: Record<string, string> = {
  zh: 'เสียง "zh" อย่าลืมม้วนปลายลิ้นขึ้นแตะเพดานปาก ออกเสียงคล้าย "จ" แบบหนา',
  ch: 'เสียง "ch" ม้วนลิ้นแตะเพดานปากและ "พ่นลม" ออกมาแรงๆ คล้าย "ช"',
  sh: 'เสียง "sh" ม้วนลิ้นแตะเพดานปาก ปล่อยลมเสียดแทรก คล้าย "ฌ"',
  r: 'เสียง "r" ม้วนลิ้นแตะเพดานปาก ลากเสียงกังวานในลำคอ คล้าย "ย/ร"',
  z: 'เสียง "z" เอาฟันหน้าบนล่างสบกัน ลิ้นแตะโคนฟัน ออกเสียง "จ" แบนราบ',
  c: 'เสียง "c" ฟันสบกัน ลิ้นแตะโคนฟันแล้ว "พ่นลม" ออกมา คล้าย "ซ/ช"',
  s: 'เสียง "s" ฟันสบกัน ปล่อยลมผ่านช่องฟัน คล้าย "ส/ซ"',
  ü: 'เสียง "ü" ทำปากจู๋กลมคงที่แล้วออกเสียง "อี" อย่าขยับริมฝีปาก',
};

/**
 * Evaluates the user's spoken transcript against the target Chinese phrase.
 */
export function evaluatePronunciation(
  targetText: string,
  recognizedText: string,
  targetPinyins?: string[]
): PronunciationScoreResult {
  const cleanTarget = cleanChineseText(targetText);
  const cleanRec = cleanChineseText(recognizedText);

  // Exact Match
  if (cleanTarget === cleanRec && cleanTarget.length > 0) {
    const chars = cleanTarget.split('').map((char, idx) => ({
      char,
      pinyin: targetPinyins?.[idx] || '',
      status: 'correct' as const,
    }));

    return {
      score: 100,
      grade: 'excellent',
      gradeBadge: '🏆 ยอดเยี่ยมระดับเจ้าของภาษา (100 คะแนน)',
      praiseText: 'สำเนียงเป๊ะมาก! ชัดเจน ไพเราะ และจังหวะถูกต้องสมบูรณ์แบบ 🎉',
      tipText: 'หนูพูดได้คล่องแคล่วและชัดเจนมาก ลองฝึกประโยคที่ยาวขึ้นดูนะ!',
      recognizedText,
      charDetails: chars,
    };
  }

  // If recognition was empty
  if (!cleanRec) {
    const chars = cleanTarget.split('').map((char, idx) => ({
      char,
      pinyin: targetPinyins?.[idx] || '',
      status: 'missed' as const,
    }));

    return {
      score: 0,
      grade: 'try_again',
      gradeBadge: '🎤 ยังไม่ได้ยินเสียง (0 คะแนน)',
      praiseText: 'ยังจับเสียงพูดไม่ได้จ้า ลองกดไมค์แล้วพูดให้ใกล้ขึ้นอีกนิดนะ',
      tipText: 'ตรวจดูว่าไมโครโฟนได้รับอนุญาตบนเบราว์เซอร์แล้วหรือยังนะจ๊ะ 🐲',
      recognizedText: '(ไม่มีเสียงตรวจจับ)',
      charDetails: chars,
    };
  }

  // Calculate similarity ratio
  const maxLen = Math.max(cleanTarget.length, cleanRec.length);
  const dist = levenshteinDistance(cleanTarget, cleanRec);
  const rawSimilarity = Math.max(0, 1 - dist / maxLen);

  // Scale to 0-100 with friendly boosting for young learners
  let score = Math.round(rawSimilarity * 100);

  // If recognized contains all target chars in order, give high score
  if (cleanRec.includes(cleanTarget)) {
    score = Math.max(score, 92);
  } else if (cleanTarget.includes(cleanRec) && cleanRec.length >= cleanTarget.length * 0.7) {
    score = Math.max(score, 80);
  }

  // Clamp score
  score = Math.min(98, Math.max(15, score));

  // Determine per-character match
  const charDetails: CharEvaluation[] = cleanTarget.split('').map((char, idx) => {
    const pinyin = targetPinyins?.[idx] || '';
    if (cleanRec.includes(char)) {
      return { char, pinyin, status: 'correct' };
    }
    // Partial check: if char is within similar window
    if (idx < cleanRec.length && cleanRec[idx]) {
      return { char, pinyin, status: 'close' };
    }
    return { char, pinyin, status: 'missed' };
  });

  // Pick helpful phonetic tip
  let tipText = 'ฝึกออกเสียงช้าๆ ชัดถ้อยชัดคำ แล้วลากเสียงวรรณยุกต์ให้เต็มเสียงนะ!';
  if (targetPinyins && targetPinyins.length > 0) {
    for (const p of targetPinyins) {
      for (const [key, tip] of Object.entries(PHONETIC_TIPS)) {
        if (p.toLowerCase().startsWith(key)) {
          tipText = tip;
          break;
        }
      }
    }
  }

  if (score >= 85) {
    return {
      score,
      grade: 'excellent',
      gradeBadge: `🌟 ยอดเยี่ยมมาก (${score} คะแนน)`,
      praiseText: 'ออกเสียงได้ชัดเจนมาก คนจีนฟังเข้าใจแน่นอน เก่งจังเลย! 👏',
      tipText,
      recognizedText,
      charDetails,
    };
  } else if (score >= 65) {
    return {
      score,
      grade: 'good',
      gradeBadge: `👍 ดีมาก พัฒนาได้อีก (${score} คะแนน)`,
      praiseText: `ได้ยินเป็น "${recognizedText}" ใกล้เคียงมากแล้ว ลองฟังต้นฉบับอีกรอบนะ 💡`,
      tipText,
      recognizedText,
      charDetails,
    };
  } else {
    return {
      score,
      grade: 'try_again',
      gradeBadge: `💪 สู้ๆ ลองอีกครั้งนะ (${score} คะแนน)`,
      praiseText: `ระบบได้ยินเป็น "${recognizedText}" ยังไม่ตรงกับคำเป้าหมาย ไม่เป็นไรนะจ๊ะ!`,
      tipText,
      recognizedText,
      charDetails,
    };
  }
}
