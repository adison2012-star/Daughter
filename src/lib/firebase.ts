import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  User,
  Auth,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  Firestore,
} from 'firebase/firestore';
import { CloudUser, UserProfile, RedemptionRecord, RewardItem } from '@/types';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

let app: FirebaseApp | null = null;
let auth: Auth | null = null;
let db: Firestore | null = null;

export function isFirebaseConfigured(): boolean {
  return (
    typeof window !== 'undefined' &&
    Boolean(
      process.env.NEXT_PUBLIC_FIREBASE_API_KEY &&
        process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
    )
  );
}

function getFirebaseApp(): FirebaseApp | null {
  if (typeof window === 'undefined') return null;
  if (!isFirebaseConfigured()) return null;

  if (!getApps().length) {
    app = initializeApp(firebaseConfig);
  } else {
    app = getApp();
  }
  return app;
}

export function getFirebaseAuth(): Auth | null {
  const currentApp = getFirebaseApp();
  if (!currentApp) return null;
  if (!auth) {
    auth = getAuth(currentApp);
  }
  return auth;
}

export function getFirebaseDb(): Firestore | null {
  const currentApp = getFirebaseApp();
  if (!currentApp) return null;
  if (!db) {
    db = getFirestore(currentApp);
  }
  return db;
}

/**
 * Sign in with Google using Firebase Authentication Popup.
 */
export async function signInWithGoogleLive(): Promise<CloudUser | null> {
  const currentAuth = getFirebaseAuth();
  if (!currentAuth) {
    throw new Error('Firebase credentials are not configured yet in .env.local');
  }

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  const result = await signInWithPopup(currentAuth, provider);
  const user = result.user;

  return {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
    photoURL: user.photoURL,
    provider: 'google',
    lastSyncedAt: new Date().toISOString(),
  };
}

/**
 * Sign out from Firebase Authentication.
 */
export async function signOutLive(): Promise<void> {
  const currentAuth = getFirebaseAuth();
  if (currentAuth) {
    await signOut(currentAuth);
  }
}

/**
 * Listen to live Firebase Auth state changes.
 */
export function onAuthChange(callback: (user: CloudUser | null) => void): () => void {
  const currentAuth = getFirebaseAuth();
  if (!currentAuth) {
    return () => {};
  }

  return onAuthStateChanged(currentAuth, (user: User | null) => {
    if (user) {
      callback({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        provider: 'google',
        lastSyncedAt: new Date().toISOString(),
      });
    } else {
      callback(null);
    }
  });
}

/**
 * Save user profiles, stars, pet levels, and redemptions to Cloud Firestore.
 */
export async function saveUserDataToFirestore(
  uid: string,
  data: {
    profiles: UserProfile[];
    activeProfileId: string;
    redemptions?: RedemptionRecord[];
    customRewards?: RewardItem[];
  }
): Promise<boolean> {
  const currentDb = getFirebaseDb();
  if (!currentDb || !uid) return false;

  try {
    const userDocRef = doc(currentDb, 'users', uid);
    await setDoc(
      userDocRef,
      {
        ...data,
        updatedAt: new Date().toISOString(),
      },
      { merge: true }
    );
    return true;
  } catch (err) {
    console.warn('Failed to save to Firestore:', err);
    return false;
  }
}

/**
 * Load user profiles and progress from Cloud Firestore.
 */
export async function loadUserDataFromFirestore(
  uid: string
): Promise<{
  profiles?: UserProfile[];
  activeProfileId?: string;
  redemptions?: RedemptionRecord[];
  customRewards?: RewardItem[];
} | null> {
  const currentDb = getFirebaseDb();
  if (!currentDb || !uid) return null;

  try {
    const userDocRef = doc(currentDb, 'users', uid);
    const snap = await getDoc(userDocRef);
    if (snap.exists()) {
      return snap.data() as any;
    }
    return null;
  } catch (err) {
    console.warn('Failed to load from Firestore:', err);
    return null;
  }
}
