export type WordCategory =
  | 'animals'
  | 'food'
  | 'family'
  | 'numbers'
  | 'daily'
  | 'school'
  | 'nature'
  | 'emotions'
  | 'travel'
  | 'idioms'
  | 'advanced';

export interface Word {
  id: string;
  hanzi: string;
  pinyin: string;
  tones: number[]; // e.g. [1, 2] for māo
  thai: string;
  thaiPhonetic: string;
  category: WordCategory;
  hskLevel: number; // 1 to 6
  sampleSentence: {
    hanzi: string;
    pinyin: string;
    thai: string;
  };
  radicals?: string[];
  mnemonic?: string;
  imageUrl?: string;
  english?: string;
  partOfSpeech?: string;
  no?: number;
}

export interface MasteryLevel {
  level: number;
  hskEquivalent: string;
  title: string;
  badge: string;
  color: string;
  targetWords: number; // Target total vocabulary count to achieve native fluency
  description: string;
  learningOutcomes: string[];
}

export type SubjectType = 'chinese' | 'math' | 'english' | 'science';

export interface SubjectStars {
  chinese: number;
  math: number;
  english: number;
  science: number;
}

export type PetType = 'dragon' | 'panda' | 'jellyfish' | 'hippo';

export interface PetCompanionData {
  name: string;
  type: PetType;
  level: number; // 1 to 100
  totalStarsFed: number; // Total cumulative stars fed (0 to 1,000,000)
  stage: number; // 1 to 6 (Evolution stage)
  happiness: number; // 0 - 100
  experience?: number; // for backwards compatibility
}

export type PetRecord = Record<PetType, PetCompanionData>;

export type GradeLevel = 'p1_3' | 'p4_6' | 'm1_3' | 'm4_6' | 'general';

export interface UserProfile {
  id: string;
  name: string;
  nickname: string;
  avatar: string;
  color: string;
  level: number;
  gradeLevel?: GradeLevel;
  stars: number; // total stars across all subjects
  subjectStars: SubjectStars; // separated stars per subject
  streak: number;
  lastActiveDate: string;
  masteredWords: string[]; // word IDs
  unlockedLevels: number[]; // e.g. [1] or [1, 2]
  parentOverrideUnlockAll?: boolean; // Dad mode to unlock all for testing
  activePetType: PetType; // Currently active pet
  pets: PetRecord; // All 4 pets with their own independent levels and stars fed!
  pet: PetCompanionData; // Active pet reference for backwards compatibility
  createdAt?: string;
}

export type RewardCategory = 'treat' | 'screen_time' | 'toy' | 'activity' | 'special';

export interface RewardItem {
  id: string;
  title: string;
  description: string;
  starsCost: number;
  category: RewardCategory;
  emoji: string;
  isCustom?: boolean;
  createdAt?: string;
}

export type RedemptionStatus = 'pending' | 'approved' | 'completed' | 'cancelled';

export interface RedemptionRecord {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  rewardId: string;
  rewardTitle: string;
  rewardEmoji: string;
  starsPaid: number;
  fromSubjectWallet: SubjectType | 'all';
  redeemedAt: string;
  status: RedemptionStatus;
  approvedAt?: string;
  notes?: string;
}

export interface CloudUser {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  isAnonymous?: boolean;
  provider: 'google' | 'guest';
  lastSyncedAt?: string;
}

export interface SRSItem {
  wordId: string;
  interval: number; // in days
  repetition: number;
  easeFactor: number;
  nextReviewDate: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  pinyin?: string;
  thai?: string;
  audioUrl?: string;
  timestamp: number;
}
