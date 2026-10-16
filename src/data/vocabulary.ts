import { Word } from '@/types';
import allHskJson from './hsk/all_words.json';

export const CATEGORIES: Array<{ id: string; label: string; icon: string }> = [
  { id: 'all', label: 'ทั้งหมด (全部)', icon: '🌟' },
  { id: 'animals', label: 'สัตว์น่ารัก (动物)', icon: '🐼' },
  { id: 'food', label: 'อาหารและผลไม้ (食物水果)', icon: '🍎' },
  { id: 'family', label: 'ครอบครัว (家人)', icon: '👨‍👩‍👧' },
  { id: 'school', label: 'การเรียนและโรงเรียน (学校)', icon: '🎒' },
  { id: 'nature', label: 'ธรรมชาติและอากาศ (自然)', icon: '🌈' },
  { id: 'emotions', label: 'ความรู้สึกและนิสัย (情感)', icon: '💖' },
  { id: 'idioms', label: 'สำนวนจีนสู่เจ้าของภาษา (成语)', icon: '👑' },
  { id: 'numbers', label: 'ตัวเลขและสี (数字颜色)', icon: '🎨' },
  { id: 'daily', label: 'ชีวิตประจำวัน (日常)', icon: '☀️' },
];

// Complete 5,400 words from New HSK 1-6 Vocab List (3.0) 2026
export const VOCABULARY_LIST: Word[] = allHskJson as Word[];
