'use client';

import { saveUserDataToFirestore, loadUserDataFromFirestore, UserCloudSyncPayload } from '@/lib/firebase';
import { getCloudUser, getStoredProfiles, getActiveProfileId } from '@/lib/storage';

export type SyncStatus = 'synced' | 'pending' | 'syncing' | 'error' | 'offline';

export interface SyncState {
  status: SyncStatus;
  lastSyncedAt: Date | null;
  hasPendingChanges: boolean;
  errorMessage?: string;
}

type SyncListener = (state: SyncState) => void;

class CloudSyncManager {
  private state: SyncState = {
    status: 'synced',
    lastSyncedAt: null,
    hasPendingChanges: false,
  };

  private listeners: Set<SyncListener> = new Set();
  private timer: NodeJS.Timeout | null = null;
  private readonly INTERVAL_MS = 5 * 60 * 1000; // 5 minutes

  constructor() {
    if (typeof window !== 'undefined') {
      this.init();
    }
  }

  private init() {
    // 1. Auto-sync interval every 5 minutes
    this.timer = setInterval(() => {
      if (this.state.hasPendingChanges) {
        this.syncNow();
      }
    }, this.INTERVAL_MS);

    // 2. Sync on visibility change (switching tabs or minimizing iPad Safari)
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden' && this.state.hasPendingChanges) {
        this.syncNow();
      }
    });

    // 3. Sync on page close / refresh
    window.addEventListener('beforeunload', () => {
      if (this.state.hasPendingChanges) {
        this.syncNow();
      }
    });
  }

  public getState(): SyncState {
    return { ...this.state };
  }

  public subscribe(listener: SyncListener): () => void {
    this.listeners.add(listener);
    listener(this.getState());
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notify() {
    const currentState = this.getState();
    this.listeners.forEach((listener) => {
      try {
        listener(currentState);
      } catch (e) {
        console.warn('Sync listener error:', e);
      }
    });
  }

  /**
   * Mark local data as changed (dirty).
   * Will be automatically pushed to Firestore within 5 minutes or on app minimize.
   */
  public markDirty() {
    this.state.hasPendingChanges = true;
    if (this.state.status !== 'syncing') {
      this.state.status = 'pending';
    }
    this.notify();
  }

  /**
   * Immediately sync local cache to Cloud Firestore.
   */
  public async syncNow(): Promise<boolean> {
    const cloudUser = getCloudUser();
    if (!cloudUser || !cloudUser.uid) {
      this.state.status = 'synced';
      this.state.hasPendingChanges = false;
      this.notify();
      return false;
    }

    if (this.state.status === 'syncing') return false;

    this.state.status = 'syncing';
    this.notify();

    try {
      const profiles = getStoredProfiles();
      const activeProfileId = getActiveProfileId();

      let redemptions = [];
      let customRewards = [];
      let chemistrySolvedIds: string[] = [];
      let mathSolvedIds: string[] = [];

      try {
        const rawRed = localStorage.getItem('duo_academy_redemptions');
        if (rawRed) redemptions = JSON.parse(rawRed);

        const rawRew = localStorage.getItem('duo_academy_custom_rewards_v2');
        if (rawRew) customRewards = JSON.parse(rawRew);

        const rawChem = localStorage.getItem('duo_academy_chemistry_quizzes_answered_v1');
        if (rawChem) chemistrySolvedIds = JSON.parse(rawChem);

        const rawMath = localStorage.getItem('duo_academy_math_exam_answered_v1');
        if (rawMath) mathSolvedIds = JSON.parse(rawMath);
      } catch (e) {
        // ignore parse error
      }

      const payload: UserCloudSyncPayload = {
        profiles,
        activeProfileId,
        redemptions,
        customRewards,
        chemistrySolvedIds,
        mathSolvedIds,
        updatedAt: new Date().toISOString(),
      };

      const success = await saveUserDataToFirestore(cloudUser.uid, payload);

      if (success) {
        this.state.status = 'synced';
        this.state.lastSyncedAt = new Date();
        this.state.hasPendingChanges = false;
        this.state.errorMessage = undefined;
        this.notify();
        return true;
      } else {
        this.state.status = 'error';
        this.state.errorMessage = 'บันทึกคลาวด์ไม่สำเร็จ';
        this.notify();
        return false;
      }
    } catch (err: any) {
      console.warn('Sync error:', err);
      this.state.status = 'error';
      this.state.errorMessage = err?.message || 'เกิดข้อผิดพลาดในการซิงก์';
      this.notify();
      return false;
    }
  }

  /**
   * Restore remote data from Cloud Firestore into local device cache.
   */
  public async restoreFromCloud(uid: string): Promise<boolean> {
    try {
      this.state.status = 'syncing';
      this.notify();

      const cloudData = await loadUserDataFromFirestore(uid);
      if (!cloudData) {
        this.state.status = 'synced';
        this.notify();
        return false;
      }

      if (cloudData.profiles && cloudData.profiles.length > 0) {
        localStorage.setItem('zhongwen_profiles', JSON.stringify(cloudData.profiles));
      }
      if (cloudData.activeProfileId) {
        localStorage.setItem('zhongwen_active_profile_id', cloudData.activeProfileId);
      }
      if (cloudData.redemptions) {
        localStorage.setItem('duo_academy_redemptions', JSON.stringify(cloudData.redemptions));
      }
      if (cloudData.customRewards) {
        localStorage.setItem('duo_academy_custom_rewards_v2', JSON.stringify(cloudData.customRewards));
      }
      if (cloudData.chemistrySolvedIds) {
        localStorage.setItem('duo_academy_chemistry_quizzes_answered_v1', JSON.stringify(cloudData.chemistrySolvedIds));
      }
      if (cloudData.mathSolvedIds) {
        localStorage.setItem('duo_academy_math_exam_answered_v1', JSON.stringify(cloudData.mathSolvedIds));
      }

      this.state.status = 'synced';
      this.state.lastSyncedAt = new Date();
      this.state.hasPendingChanges = false;
      this.notify();
      return true;
    } catch (err) {
      console.warn('Restore error:', err);
      this.state.status = 'error';
      this.notify();
      return false;
    }
  }
}

export const syncManager = new CloudSyncManager();
