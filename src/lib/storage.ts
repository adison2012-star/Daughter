import { UserProfile, SRSItem, PetType, SubjectType, PetCompanionData, GradeLevel, CloudUser } from '@/types';
import {
  getLevelFromStarsFed,
  getStageFromLevel,
  feedStarsToPet,
  switchPetType,
  PET_CATALOG,
} from '@/lib/petSystem';
import { syncManager } from '@/lib/syncManager';

export function createInitialPets(): Record<PetType, PetCompanionData> {
  const types: PetType[] = ['dragon', 'panda', 'jellyfish', 'hippo'];
  const res: any = {};
  for (const t of types) {
    res[t] = {
      name: PET_CATALOG[t]?.name || t,
      type: t,
      level: 1,
      totalStarsFed: 0,
      stage: 1,
      happiness: 90,
      experience: 0,
    };
  }
  return res;
}

const defaultLearnerPets = createInitialPets();

export const DEFAULT_LEARNER: UserProfile = {
  id: 'learner-profile-default',
  name: 'ผู้เรียน (Student)',
  nickname: 'นักเรียนคนเก่ง',
  avatar: '🌟',
  color: 'from-amber-400 to-rose-500',
  level: 1,
  stars: 120,
  subjectStars: {
    chinese: 30,
    math: 30,
    english: 30,
    science: 30,
  },
  streak: 1,
  lastActiveDate: new Date().toISOString().split('T')[0],
  masteredWords: ['cat', 'apple', 'hello'],
  unlockedLevels: [1], // Only Level 1 unlocked initially
  parentOverrideUnlockAll: false,
  activePetType: 'dragon',
  pets: defaultLearnerPets,
  pet: defaultLearnerPets.dragon,
  gradeLevel: 'p1_3',
};

export const DEFAULT_PROFILES: UserProfile[] = [DEFAULT_LEARNER];

const STORAGE_KEYS = {
  ACTIVE_PROFILE_ID: 'zhongwen_active_profile_id',
  PROFILES: 'zhongwen_profiles',
  SRS_DATA: 'zhongwen_srs_data',
  CLOUD_USER: 'duo_academy_cloud_user_v1',
};

export function getStoredProfiles(): UserProfile[] {
  if (typeof window === 'undefined') return DEFAULT_PROFILES;
  try {
    const data = localStorage.getItem(STORAGE_KEYS.PROFILES);
    if (!data) {
      localStorage.setItem(STORAGE_KEYS.PROFILES, JSON.stringify(DEFAULT_PROFILES));
      return DEFAULT_PROFILES;
    }
    const parsed: UserProfile[] = JSON.parse(data);
    return parsed.map((p) => {
      // 1. Ensure subjectStars exists
      let subjectStars = p.subjectStars;
      if (!subjectStars) {
        const total = p.stars || 0;
        const q = Math.floor(total / 4);
        subjectStars = {
          chinese: q,
          math: q,
          english: q,
          science: total - q * 3,
        };
      } else {
        subjectStars = {
          chinese: subjectStars.chinese || 0,
          math: subjectStars.math || 0,
          english: subjectStars.english || 0,
          science: subjectStars.science || 0,
        };
      }
      const totalStars = Object.values(subjectStars).reduce((a, b) => a + b, 0);

      // 2. Ensure pets record exists with all 4 pets
      const validTypes: PetType[] = ['dragon', 'panda', 'jellyfish', 'hippo'];
      const rawActive = (p.activePetType || p.pet?.type) as PetType;
      const activePetType: PetType = validTypes.includes(rawActive)
        ? rawActive
        : 'dragon';

      const initialPets = createInitialPets();
      const existingPets = (p.pets || {}) as Record<PetType, PetCompanionData>;
      const mergedPets: Record<PetType, PetCompanionData> = {} as any;

      for (const t of validTypes) {
        let petData = existingPets[t];
        if (!petData && p.pet && p.pet.type === t) {
          petData = p.pet;
        }
        if (!petData) {
          petData = initialPets[t];
        }

        const totalStarsFed = typeof petData.totalStarsFed === 'number'
          ? petData.totalStarsFed
          : (petData.experience || 0);
        const level = getLevelFromStarsFed(totalStarsFed);
        const stage = getStageFromLevel(level, t);
        let petName = petData.name || PET_CATALOG[t]?.name || 'สัตว์เลี้ยงวิเศษ';
        if (t === 'hippo' && (petName.includes('โมโม่') || petName.includes('MoMo') || !petName)) {
          petName = PET_CATALOG.hippo.name;
        }

        mergedPets[t] = {
          name: petName,
          type: t,
          level,
          totalStarsFed,
          stage,
          happiness: typeof petData.happiness === 'number' ? petData.happiness : 90,
          experience: totalStarsFed,
        };
      }

      const activePet = mergedPets[activePetType] || mergedPets.dragon;

      return {
        ...p,
        stars: totalStars,
        subjectStars,
        unlockedLevels: p.unlockedLevels || [1],
        parentOverrideUnlockAll: p.parentOverrideUnlockAll ?? false,
        activePetType,
        pets: mergedPets,
        pet: activePet,
      };
    });
  } catch (e) {
    console.error('Failed to load profiles from localStorage', e);
    return DEFAULT_PROFILES;
  }
}

export function saveProfiles(profiles: UserProfile[]) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEYS.PROFILES, JSON.stringify(profiles));
    try {
      syncManager?.markDirty();
    } catch {}
  } catch (e) {
    console.error('Failed to save profiles to localStorage', e);
  }
}

export function getActiveProfileId(): string {
  if (typeof window === 'undefined') return DEFAULT_PROFILES[0].id;
  try {
    const id = localStorage.getItem(STORAGE_KEYS.ACTIVE_PROFILE_ID);
    return id || DEFAULT_PROFILES[0].id;
  } catch (e) {
    return DEFAULT_PROFILES[0].id;
  }
}

export function setActiveProfileId(id: string) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEYS.ACTIVE_PROFILE_ID, id);
    try {
      syncManager?.markDirty();
    } catch {}
  } catch (e) {
    console.error('Failed to set active profile id', e);
  }
}

export function updateActiveProfile(updater: (prev: UserProfile) => UserProfile): UserProfile {
  const profiles = getStoredProfiles();
  const activeId = getActiveProfileId();
  const index = profiles.findIndex((p) => p.id === activeId);

  if (index === -1) return profiles[0];

  const updated = updater(profiles[index]);
  profiles[index] = updated;
  saveProfiles(profiles);
  return updated;
}

export function unlockLevelForActive(levelToUnlock: number): UserProfile {
  return updateActiveProfile((prev) => {
    const current = prev.unlockedLevels || [1];
    if (current.includes(levelToUnlock)) return prev;
    return {
      ...prev,
      unlockedLevels: [...current, levelToUnlock].sort((a, b) => a - b),
    };
  });
}

export function toggleParentOverrideAll(enable?: boolean): UserProfile[] {
  const profiles = getStoredProfiles();
  const updated = profiles.map((p) => ({
    ...p,
    parentOverrideUnlockAll: enable !== undefined ? enable : !p.parentOverrideUnlockAll,
  }));
  saveProfiles(updated);
  return updated;
}

export function addStarsToActive(amount: number, subject: SubjectType = 'chinese'): UserProfile {
  return updateActiveProfile((prev) => {
    const currentSubjectStars = prev.subjectStars || {
      chinese: 0,
      math: 0,
      english: 0,
      science: 0,
    };
    const newForSubject = (currentSubjectStars[subject] || 0) + amount;
    const newSubjectStars = {
      ...currentSubjectStars,
      [subject]: newForSubject,
    };
    const newTotalStars = Object.values(newSubjectStars).reduce((a, b) => a + b, 0);
    const newLevel = Math.floor(newTotalStars / 100) + 1;

    return {
      ...prev,
      subjectStars: newSubjectStars,
      stars: newTotalStars,
      level: newLevel,
    };
  });
}

export function feedActivePet(
  starsToFeed: number,
  fromSubject?: SubjectType
): {
  updatedProfile: UserProfile;
  actualFed: number;
  leveledUp: boolean;
  oldLevel: number;
  newLevel: number;
} {
  let result: any = null;
  const updated = updateActiveProfile((prev) => {
    const res = feedStarsToPet(prev, starsToFeed, fromSubject);
    result = res;
    return res.updatedProfile;
  });

  return (
    result || {
      updatedProfile: updated,
      actualFed: 0,
      leveledUp: false,
      oldLevel: updated.pet.level,
      newLevel: updated.pet.level,
    }
  );
}

export function switchActivePetType(type: PetType): UserProfile {
  return updateActiveProfile((prev) => switchPetType(prev, type));
}

/**
 * Helper to get stars for a specific subject, or total stars across all subjects if subject is 'portal' or omitted.
 */
export function getSubjectStars(
  profile: UserProfile,
  subject?: 'portal' | 'chinese' | 'math' | 'english' | 'science'
): number {
  if (!subject || subject === 'portal') {
    return profile.stars ?? 0;
  }
  return profile.subjectStars?.[subject] ?? 0;
}

/**
 * Create and add a brand new child/student profile.
 */
export function addNewProfile(input: {
  name: string;
  nickname?: string;
  avatar: string;
  color?: string;
  gradeLevel?: GradeLevel;
  initialPet?: PetType;
}): UserProfile {
  const allPets = createInitialPets();
  const initialPetType = input.initialPet || 'dragon';
  const newId = `child-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`;

  const newProfile: UserProfile = {
    id: newId,
    name: input.name.trim(),
    nickname: input.nickname?.trim() || input.name.trim(),
    avatar: input.avatar || '👧🏻',
    color: input.color || 'from-indigo-400 to-purple-500',
    level: 1,
    gradeLevel: input.gradeLevel || 'p1_3',
    stars: 0,
    subjectStars: {
      chinese: 0,
      math: 0,
      english: 0,
      science: 0,
    },
    streak: 1,
    lastActiveDate: new Date().toISOString().split('T')[0],
    masteredWords: [],
    unlockedLevels: [1],
    parentOverrideUnlockAll: false,
    activePetType: initialPetType,
    pets: allPets,
    pet: allPets[initialPetType],
    createdAt: new Date().toISOString(),
  };

  const current = getStoredProfiles();
  const updated = [...current, newProfile];

  saveProfiles(updated);
  setActiveProfileId(newProfile.id);

  return newProfile;
}

/**
 * Edit an existing profile's metadata (name, avatar, color, grade).
 */
export function updateProfile(
  profileId: string,
  updates: Partial<Pick<UserProfile, 'name' | 'nickname' | 'avatar' | 'color' | 'gradeLevel'>>
): UserProfile | null {
  const current = getStoredProfiles();
  const idx = current.findIndex((p) => p.id === profileId);
  if (idx === -1) return null;

  current[idx] = {
    ...current[idx],
    ...updates,
  };

  saveProfiles(current);
  return current[idx];
}

/**
 * Delete a profile (ensuring at least 1 profile remains).
 */
export function deleteProfile(profileId: string): {
  success: boolean;
  remainingProfiles: UserProfile[];
  activeId: string;
} {
  const current = getStoredProfiles();
  if (current.length <= 1) {
    return { success: false, remainingProfiles: current, activeId: current[0].id };
  }

  const filtered = current.filter((p) => p.id !== profileId);
  let activeId = getActiveProfileId();
  if (activeId === profileId) {
    activeId = filtered[0].id;
    setActiveProfileId(activeId);
  }

  saveProfiles(filtered);

  return { success: true, remainingProfiles: filtered, activeId };
}

/**
 * Get the currently logged-in Cloud/Google user from storage.
 */
export function getCloudUser(): CloudUser | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.CLOUD_USER);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

/**
 * Save or clear the logged-in Cloud/Google user in storage.
 */
export function setCloudUser(user: CloudUser | null): void {
  if (typeof window === 'undefined') return;
  try {
    if (user) {
      localStorage.setItem(STORAGE_KEYS.CLOUD_USER, JSON.stringify(user));
    } else {
      localStorage.removeItem(STORAGE_KEYS.CLOUD_USER);
    }
  } catch (e) {
    console.error('Failed to update cloud user storage:', e);
  }
}

/**
 * Export full user profiles, pet progress, and redemptions into a JSON string backup.
 */
export function exportUserDataJSON(): string {
  const profiles = getStoredProfiles();
  const activeId = getActiveProfileId();
  const cloudUser = getCloudUser();

  let redemptions: any[] = [];
  let customRewards: any[] = [];
  if (typeof window !== 'undefined') {
    try {
      redemptions = JSON.parse(localStorage.getItem('duo_academy_redemptions_v1') || '[]');
      customRewards = JSON.parse(localStorage.getItem('duo_academy_custom_rewards_v1') || '[]');
    } catch {}
  }

  const exportObj = {
    version: '1.0',
    appName: 'Duo Wonder Academy',
    exportedAt: new Date().toISOString(),
    cloudUser,
    activeProfileId: activeId,
    profiles,
    redemptions,
    customRewards,
  };

  return JSON.stringify(exportObj, null, 2);
}

/**
 * Import and restore user data from an exported JSON backup string.
 */
export function importUserDataJSON(jsonStr: string): {
  success: boolean;
  error?: string;
  count?: number;
} {
  try {
    const data = JSON.parse(jsonStr);
    if (!data.profiles || !Array.isArray(data.profiles) || data.profiles.length === 0) {
      return { success: false, error: 'รูปแบบไฟล์ไม่ถูกต้อง: ไม่พบข้อมูลผู้เรียน' };
    }

    if (typeof window !== 'undefined') {
      saveProfiles(data.profiles);
      if (data.activeProfileId) {
        setActiveProfileId(data.activeProfileId);
      }
      if (data.redemptions) {
        localStorage.setItem('duo_academy_redemptions_v1', JSON.stringify(data.redemptions));
      }
      if (data.customRewards) {
        localStorage.setItem('duo_academy_custom_rewards_v1', JSON.stringify(data.customRewards));
      }
      if (data.cloudUser) {
        localStorage.setItem(STORAGE_KEYS.CLOUD_USER, JSON.stringify(data.cloudUser));
      }
    }

    return { success: true, count: data.profiles.length };
  } catch (e: any) {
    return { success: false, error: e?.message || 'ไฟล์สำรองข้อมูลชำรุดหรือไม่ถูกต้อง' };
  }
}

