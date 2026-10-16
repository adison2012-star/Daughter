import { RewardItem, RedemptionRecord, RedemptionStatus, UserProfile, SubjectType } from '@/types';

export const REWARD_CATEGORIES: { id: RewardItem['category']; label: string; icon: string; color: string }[] = [
  { id: 'treat', label: 'ขนม & ของอร่อย', icon: '🍦', color: 'from-amber-400 to-rose-400' },
  { id: 'screen_time', label: 'เวลาเล่นเกม/การ์ตูน', icon: '🎮', color: 'from-indigo-400 to-purple-500' },
  { id: 'toy', label: 'ของเล่น & หนังสือ', icon: '🧸', color: 'from-pink-400 to-rose-500' },
  { id: 'activity', label: 'กิจกรรม & เที่ยวสนุก', icon: '🎡', color: 'from-emerald-400 to-teal-500' },
  { id: 'special', label: 'ของขวัญพิเศษสุดว้าว', icon: '🎁', color: 'from-amber-400 to-yellow-500' },
];

export const DEFAULT_REWARDS: RewardItem[] = [
  {
    id: 'reward-icecream',
    title: 'ไอศกรีม 1 ถ้วย หรือ ชานมไข่มุก',
    description: 'เลือกไอศกรีมรสโปรด หรือชานมไข่มุกหวานชื่นใจ 1 แก้ว',
    starsCost: 1000,
    category: 'treat',
    emoji: '🍦',
  },
  {
    id: 'reward-screentime',
    title: 'เล่นเกม หรือ ดูการ์ตูนเพิ่ม 30 นาที',
    description: 'โบนัสเวลาเล่นแท็บเล็ต ดู YouTube Kids หรือการ์ตูนเรื่องโปรด',
    starsCost: 1500,
    category: 'screen_time',
    emoji: '🎮',
  },
  {
    id: 'reward-fav-meal',
    title: 'อาหารมื้อโปรดตามใจ 1 มื้อ',
    description: 'เลือกทานพิซซ่า เบอร์เกอร์ ไก่ทอด หรือสุกี้ที่คุณพ่อคุณแม่พาไปทาน',
    starsCost: 2500,
    category: 'treat',
    emoji: '🍕',
  },
  {
    id: 'reward-book',
    title: 'หนังสือนิทาน หรือ การ์ตูนใหม่ 1 เล่ม',
    description: 'เลือกซื้อหนังสือเล่มใหม่ที่ร้านหนังสือเพื่อเปิดโลกจินตนาการ',
    starsCost: 3000,
    category: 'toy',
    emoji: '📚',
  },
  {
    id: 'reward-art-supplies',
    title: 'ชุดเครื่องเขียน หรือ อุปกรณ์ศิลปะ',
    description: 'สีไม้ พู่กัน สมุดวาดรูป หรือสติกเกอร์น่ารักสุดสร้างสรรค์',
    starsCost: 4500,
    category: 'toy',
    emoji: '🎨',
  },
  {
    id: 'reward-weekend-trip',
    title: 'ทริปสวนสนุก สวนสัตว์ หรือพิพิธภัณฑ์',
    description: 'ทริปครอบครัววันหยุดสุดหรรษา ไปเล่นเครื่องเล่นหรือดูสัตว์แสนรู้',
    starsCost: 8000,
    category: 'activity',
    emoji: '🎡',
  },
  {
    id: 'reward-art-toy',
    title: 'กล่องสุ่ม Art Toy หรือ ตุ๊กตาน่ารัก',
    description: 'ลุ้นกล่องสุ่มตัวการ์ตูน หรือตุ๊กตานุ่มฟู Disney Pixar 1 ตัว',
    starsCost: 15000,
    category: 'toy',
    emoji: '🧸',
  },
  {
    id: 'reward-grand-gift',
    title: 'ของขวัญพิเศษตามใจ 1 ชิ้นจากคุณพ่อคุณแม่',
    description: 'รางวัลใหญ่สุดอลังการสำหรับเด็กเก่งที่ขยันเรียนสะสมดาว!',
    starsCost: 30000,
    category: 'special',
    emoji: '🎁',
  },
];

export const PARENT_PIN = '9999';

export interface RewardEmojiOption {
  emoji: string;
  label: string;
}

export const REWARD_EMOJI_GROUPS: { category: string; icon: string; emojis: RewardEmojiOption[] }[] = [
  {
    category: 'ขนม อาหาร & เครื่องดื่ม',
    icon: '🍦',
    emojis: [
      { emoji: '🍦', label: 'ไอศกรีม' },
      { emoji: '🧋', label: 'ชานมไข่มุก' },
      { emoji: '🍧', label: 'น้ำแข็งไส' },
      { emoji: '🍨', label: 'ซันเดย์' },
      { emoji: '🍩', label: 'โดนัท' },
      { emoji: '🍰', label: 'เค้ก' },
      { emoji: '🧁', label: 'คัพเค้ก' },
      { emoji: '🍪', label: 'คุกกี้' },
      { emoji: '🍫', label: 'ช็อกโกแลต' },
      { emoji: '🍬', label: 'ลูกอม' },
      { emoji: '🍭', label: 'อมยิ้ม' },
      { emoji: '🥞', label: 'แพนเค้ก' },
      { emoji: '🍓', label: 'สตรอว์เบอร์รี' },
      { emoji: '🍉', label: 'แตงโม' },
      { emoji: '🍕', label: 'พิซซ่า' },
      { emoji: '🍔', label: 'เบอร์เกอร์' },
      { emoji: '🍟', label: 'เฟรนช์ฟรายส์' },
      { emoji: '🍗', label: 'ไก่ทอด' },
      { emoji: '🍣', label: 'ซูชิ' },
      { emoji: '🍜', label: 'ราเมง' },
      { emoji: '🧃', label: 'น้ำผลไม้' },
    ],
  },
  {
    category: 'เกม เวลาหน้าจอ & ดิจิทัล',
    icon: '🎮',
    emojis: [
      { emoji: '🎮', label: 'เล่นเกม' },
      { emoji: '🕹️', label: 'จอยเกม' },
      { emoji: '📱', label: 'แท็บเล็ต/มือถือ' },
      { emoji: '💻', label: 'คอมพิวเตอร์' },
      { emoji: '📺', label: 'การ์ตูนทีวี' },
      { emoji: '🎧', label: 'หูฟัง/ฟังเพลง' },
      { emoji: '🎬', label: 'ดูหนัง' },
      { emoji: '🍿', label: 'ป๊อปคอร์น' },
      { emoji: '👾', label: 'เกมอาร์เคด' },
      { emoji: '🎯', label: 'ปาเป้า' },
      { emoji: '🧩', label: 'จิ๊กซอว์' },
      { emoji: '🎲', label: 'บอร์ดเกม' },
      { emoji: '🏎️', label: 'เกมรถแข่ง' },
      { emoji: '🤖', label: 'หุ่นยนต์' },
    ],
  },
  {
    category: 'ของเล่น ศิลปะ & กีฬา',
    icon: '🧸',
    emojis: [
      { emoji: '🧸', label: 'ตุ๊กตา' },
      { emoji: '🎨', label: 'จานสีศิลปะ' },
      { emoji: '🖍️', label: 'สีเทียน' },
      { emoji: '🖌️', label: 'พู่กัน' },
      { emoji: '📚', label: 'หนังสือนิทาน' },
      { emoji: '📖', label: 'หนังสือการ์ตูน' },
      { emoji: '⚽', label: 'ฟุตบอล' },
      { emoji: '🏀', label: 'บาสเกตบอล' },
      { emoji: '🏸', label: 'แบดมินตัน' },
      { emoji: '🚲', label: 'จักรยาน' },
      { emoji: '🛴', label: 'สกู๊ตเตอร์' },
      { emoji: '🛹', label: 'สเกตบอร์ด' },
      { emoji: '🏊', label: 'ว่ายน้ำ' },
      { emoji: '🎸', label: 'กีตาร์' },
      { emoji: '🎹', label: 'เปียโน' },
      { emoji: '🎤', label: 'ร้องเพลง' },
      { emoji: '🪀', label: 'โยโย่' },
      { emoji: '🪁', label: 'เล่นว่าว' },
    ],
  },
  {
    category: 'เที่ยว กิจกรรม & ทริปครอบครัว',
    icon: '🎡',
    emojis: [
      { emoji: '🎡', label: 'ชิงช้าสวรรค์' },
      { emoji: '🎢', label: 'รถไฟเหาะ' },
      { emoji: '🎪', label: 'ละครสัตว์' },
      { emoji: '🏰', label: 'สวนสนุกดิสนีย์' },
      { emoji: '⛺', label: 'แคมปิ้ง' },
      { emoji: '🏖️', label: 'เที่ยวทะเล' },
      { emoji: '✈️', label: 'นั่งเครื่องบิน' },
      { emoji: '🚗', label: 'ทริปขับรถเที่ยว' },
      { emoji: '🦁', label: 'สวนสัตว์' },
      { emoji: '🐬', label: 'ดูปลาโลมา' },
      { emoji: '🎟️', label: 'ตั๋วพิเศษ' },
    ],
  },
  {
    category: 'ของขวัญพิเศษ & สิทธิพิเศษ',
    icon: '🎁',
    emojis: [
      { emoji: '🎁', label: 'กล่องของขวัญ' },
      { emoji: '👑', label: 'มงกุฎเจ้าหญิง' },
      { emoji: '🏆', label: 'ถ้วยรางวัล' },
      { emoji: '🌟', label: 'ดาววิเศษ' },
      { emoji: '💎', label: 'เพชรล้ำค่า' },
      { emoji: '🎈', label: 'ลูกโป่งปาร์ตี้' },
      { emoji: '🛍️', label: 'ช้อปปิ้งของที่ชอบ' },
      { emoji: '🛌', label: 'นอนดึกเพิ่ม 30 นาที' },
      { emoji: '⏰', label: 'ตื่นสายได้วันหยุด' },
      { emoji: '🥳', label: 'ปาร์ตี้วันพิเศษ' },
      { emoji: '💖', label: 'กอดฟัดความรัก' },
    ],
  },
];

const REWARDS_STORAGE_KEY_V2 = 'duo_academy_all_rewards_v2';
const LEGACY_CUSTOM_KEY = 'duo_academy_custom_rewards_v1';
const REDEMPTIONS_STORAGE_KEY = 'duo_academy_redemptions_v1';

/**
 * Get all available rewards (supports adding, editing, and deleting BOTH default and custom rewards).
 */
export function getStoredRewards(): RewardItem[] {
  if (typeof window === 'undefined') return DEFAULT_REWARDS;
  try {
    const raw = localStorage.getItem(REWARDS_STORAGE_KEY_V2);
    if (raw) {
      const parsed: RewardItem[] = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }

    // Check legacy custom rewards
    const legacyRaw = localStorage.getItem(LEGACY_CUSTOM_KEY);
    if (legacyRaw) {
      const custom: RewardItem[] = JSON.parse(legacyRaw);
      const merged = [...DEFAULT_REWARDS, ...custom];
      localStorage.setItem(REWARDS_STORAGE_KEY_V2, JSON.stringify(merged));
      return merged;
    }

    // Initialize with DEFAULT_REWARDS
    localStorage.setItem(REWARDS_STORAGE_KEY_V2, JSON.stringify(DEFAULT_REWARDS));
    return DEFAULT_REWARDS;
  } catch {
    return DEFAULT_REWARDS;
  }
}

/**
 * Save all rewards array to localStorage.
 */
export function saveAllRewards(rewards: RewardItem[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(REWARDS_STORAGE_KEY_V2, JSON.stringify(rewards));
  } catch (e) {
    console.error('Failed to save rewards:', e);
  }
}

/**
 * Add a new reward item.
 */
export function addRewardItem(reward: Omit<RewardItem, 'id' | 'createdAt'>): RewardItem {
  const newItem: RewardItem = {
    ...reward,
    id: `reward-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    isCustom: true,
    createdAt: new Date().toISOString(),
  };

  const list = getStoredRewards();
  list.unshift(newItem);
  saveAllRewards(list);
  return newItem;
}

/**
 * Update an existing reward item (title, starsCost, description, category, emoji).
 * Works on BOTH default and custom items!
 */
export function updateRewardItem(
  rewardId: string,
  updates: Partial<Omit<RewardItem, 'id'>>
): RewardItem | null {
  const list = getStoredRewards();
  const idx = list.findIndex((r) => r.id === rewardId);
  if (idx === -1) return null;

  const updated: RewardItem = {
    ...list[idx],
    ...updates,
  };
  list[idx] = updated;
  saveAllRewards(list);
  return updated;
}

/**
 * Delete a reward item (works on BOTH default and custom items!).
 */
export function deleteRewardItem(rewardId: string): boolean {
  const list = getStoredRewards();
  const filtered = list.filter((r) => r.id !== rewardId);
  if (filtered.length === list.length) return false;
  saveAllRewards(filtered);
  return true;
}

/**
 * Reset all rewards back to DEFAULT_REWARDS.
 */
export function resetToDefaultRewards(): RewardItem[] {
  if (typeof window !== 'undefined') {
    localStorage.setItem(REWARDS_STORAGE_KEY_V2, JSON.stringify(DEFAULT_REWARDS));
  }
  return DEFAULT_REWARDS;
}

// Aliases for backwards compatibility
export const addCustomReward = addRewardItem;
export const deleteCustomReward = deleteRewardItem;

/**
 * Get all redemption records.
 */
export function getRedemptions(): RedemptionRecord[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(REDEMPTIONS_STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

/**
 * Deduct stars and record a new prize redemption ticket.
 */
export function redeemReward(
  profile: UserProfile,
  reward: RewardItem,
  fromWallet: SubjectType | 'all' = 'all',
  notes?: string
): { success: boolean; error?: string; updatedProfile?: UserProfile; redemption?: RedemptionRecord } {
  const cost = reward.starsCost;

  // Check balance
  let availableStars = 0;
  if (fromWallet === 'all') {
    availableStars = profile.stars || 0;
  } else {
    availableStars = profile.subjectStars?.[fromWallet] || 0;
  }

  if (availableStars < cost) {
    return {
      success: false,
      error: `คะแนนดาวไม่เพียงพอ (ต้องการ ${cost.toLocaleString()} ⭐ แต่มี ${availableStars.toLocaleString()} ⭐)`,
    };
  }

  // Deduct stars
  const newSubjectStars = {
    chinese: profile.subjectStars?.chinese || 0,
    math: profile.subjectStars?.math || 0,
    english: profile.subjectStars?.english || 0,
    science: profile.subjectStars?.science || 0,
  };

  if (fromWallet !== 'all') {
    newSubjectStars[fromWallet] = Math.max(0, newSubjectStars[fromWallet] - cost);
  } else {
    let toDeduct = cost;
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

  const updatedProfile: UserProfile = {
    ...profile,
    stars: newTotalStars,
    subjectStars: newSubjectStars,
  };

  // Create Redemption Record
  const redemption: RedemptionRecord = {
    id: `rdm-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
    userId: profile.id,
    userName: profile.name,
    userAvatar: profile.avatar,
    rewardId: reward.id,
    rewardTitle: reward.title,
    rewardEmoji: reward.emoji,
    starsPaid: cost,
    fromSubjectWallet: fromWallet,
    redeemedAt: new Date().toISOString(),
    status: 'pending',
    notes,
  };

  if (typeof window !== 'undefined') {
    try {
      const records = getRedemptions();
      records.unshift(redemption);
      localStorage.setItem(REDEMPTIONS_STORAGE_KEY, JSON.stringify(records));
    } catch (e) {
      console.error('Failed to save redemption:', e);
    }
  }

  return {
    success: true,
    updatedProfile,
    redemption,
  };
}

/**
 * Update the status of a redemption ticket (e.g. Approved or Completed).
 */
export function updateRedemptionStatus(
  redemptionId: string,
  newStatus: RedemptionStatus
): RedemptionRecord | null {
  if (typeof window === 'undefined') return null;
  try {
    const records = getRedemptions();
    const idx = records.findIndex((r) => r.id === redemptionId);
    if (idx === -1) return null;

    records[idx].status = newStatus;
    if (newStatus === 'approved') {
      records[idx].approvedAt = new Date().toISOString();
    }

    localStorage.setItem(REDEMPTIONS_STORAGE_KEY, JSON.stringify(records));
    return records[idx];
  } catch {
    return null;
  }
}

/**
 * Delete a redemption record from history.
 */
export function deleteRedemption(redemptionId: string): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const records = getRedemptions();
    const filtered = records.filter((r) => r.id !== redemptionId);
    localStorage.setItem(REDEMPTIONS_STORAGE_KEY, JSON.stringify(filtered));
    return true;
  } catch {
    return false;
  }
}
