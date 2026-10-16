import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
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

// Web App's Firebase configuration from user's tannxproject
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || 'AIzaSyClhptiqZN_djXgYW8P9V4S3pMO-HQSmfY',
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || 'tannxproject.firebaseapp.com',
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'tannxproject',
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || 'tannxproject.firebasestorage.app',
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '563204141018',
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || '1:563204141018:web:290a424c83ff1eb76e9ae3',
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || 'G-4V1ZCBWCHP',
};

let app: FirebaseApp | null = null;
let auth: Auth | null = null;
let db: Firestore | null = null;

export function isFirebaseConfigured(): boolean {
  return typeof window !== 'undefined';
}

function getFirebaseApp(): FirebaseApp | null {
  if (typeof window === 'undefined') return null;

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
    throw new Error('Firebase Auth is not initialized');
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
 * Sign in with Email and Password.
 */
export async function signInWithEmailLive(
  email: string,
  pass: string
): Promise<CloudUser | null> {
  const currentAuth = getFirebaseAuth();
  if (!currentAuth) {
    throw new Error('Firebase Auth is not initialized');
  }

  const result = await signInWithEmailAndPassword(currentAuth, email, pass);
  const user = result.user;

  return {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName || email.split('@')[0],
    photoURL: user.photoURL,
    provider: 'email',
    lastSyncedAt: new Date().toISOString(),
  };
}

/**
 * Register a new user with Email, Password and Child's Nickname.
 */
export async function signUpWithEmailLive(
  email: string,
  pass: string,
  displayName: string
): Promise<CloudUser | null> {
  const currentAuth = getFirebaseAuth();
  if (!currentAuth) {
    throw new Error('Firebase Auth is not initialized');
  }

  const result = await createUserWithEmailAndPassword(currentAuth, email, pass);
  const user = result.user;

  if (displayName && user) {
    try {
      await updateProfile(user, { displayName });
    } catch (e) {
      // ignore
    }
  }

  return {
    uid: user.uid,
    email: user.email,
    displayName: displayName || user.displayName || email.split('@')[0],
    photoURL: user.photoURL,
    provider: 'email',
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
export function onAuthChange(
  callback: (user: CloudUser | null) => void
): () => void {
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
        provider: user.providerData[0]?.providerId === 'google.com' ? 'google' : 'email',
        lastSyncedAt: new Date().toISOString(),
      });
    } else {
      callback(null);
    }
  });
}

export interface UserCloudSyncPayload {
  profiles: UserProfile[];
  activeProfileId: string;
  redemptions?: RedemptionRecord[];
  customRewards?: RewardItem[];
  chemistrySolvedIds?: string[];
  mathSolvedIds?: string[];
  updatedAt?: string;
}

/**
 * Save user progress to Cloud Firestore.
 */
export async function saveUserDataToFirestore(
  uid: string,
  data: UserCloudSyncPayload
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
 * Load user progress from Cloud Firestore.
 */
export async function loadUserDataFromFirestore(
  uid: string
): Promise<UserCloudSyncPayload | null> {
  const currentDb = getFirebaseDb();
  if (!currentDb || !uid) return null;

  try {
    const userDocRef = doc(currentDb, 'users', uid);
    const snap = await getDoc(userDocRef);
    if (snap.exists()) {
      return snap.data() as UserCloudSyncPayload;
    }
    return null;
  } catch (err) {
    console.warn('Failed to load from Firestore:', err);
    return null;
  }
}
