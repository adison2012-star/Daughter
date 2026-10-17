'use client';

import React, { useState, useEffect } from 'react';
import { CloudUser, UserProfile, PetType } from '@/types';
import {
  signInWithGoogleLive,
  signInWithEmailLive,
  signUpWithEmailLive,
  signInAnonymouslyLive,
  signOutLive,
  saveUserDataToFirestore,
  testFirestoreConnection,
} from '@/lib/firebase';
import { syncManager, SyncState } from '@/lib/syncManager';
import {
  getCloudUser,
  setCloudUser,
  exportUserDataJSON,
  importUserDataJSON,
  getStoredProfiles,
  getActiveProfileId,
  saveProfiles,
  setActiveProfileId,
  createInitialPets,
} from '@/lib/storage';
import { PET_CATALOG } from '@/lib/petSystem';
import { sfx } from '@/lib/speech';
import confetti from 'canvas-confetti';
import {
  Cloud,
  X,
  CheckCircle2,
  Download,
  Upload,
  LogOut,
  Sparkles,
  ShieldCheck,
  Smartphone,
  Laptop,
  HelpCircle,
  FileJson,
  RefreshCw,
  Mail,
  Lock,
  User,
  AlertCircle,
  ChevronRight,
} from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDataRestored?: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  onDataRestored,
}) => {
  const [currentUser, setCurrentUser] = useState<CloudUser | null>(null);
  const [authTab, setAuthTab] = useState<'signin' | 'signup'>('signin');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Form Fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [childName, setChildName] = useState('');
  const [selectedPet, setSelectedPet] = useState<PetType>('dragon');

  // Sync Manager state
  const [syncState, setSyncState] = useState<SyncState>(syncManager.getState());

  useEffect(() => {
    if (isOpen) {
      setCurrentUser(getCloudUser());
      setErrorMessage(null);
      setSuccessMessage(null);
    }
  }, [isOpen]);

  useEffect(() => {
    const unsub = syncManager.subscribe((state) => {
      setSyncState(state);
    });
    return () => unsub();
  }, []);

  if (!isOpen) return null;

  // 1. Handle Google Sign-In
  const handleGoogleSignIn = async () => {
    sfx.playClick();
    setIsLoading(true);
    setErrorMessage(null);
    try {
      const user = await signInWithGoogleLive();
      if (user) {
        setCloudUser(user);
        setCurrentUser(user);

        // Restore cloud data if exists, otherwise upload local data
        const restored = await syncManager.restoreFromCloud(user.uid);
        if (!restored) {
          // Fresh account -> save current local state to cloud
          await syncManager.syncNow();
        }

        sfx.playCorrect();
        confetti({ particleCount: 70, spread: 70, origin: { y: 0.6 } });
        setSuccessMessage('เข้าสู่ระบบด้วย Google สำเร็จแล้ว! ข้อมูลคะแนนจะซิงก์ทุก 5 นาทีอัตโนมัติ');
        onDataRestored?.();
      }
    } catch (err: any) {
      console.error('Google Sign-In Error:', err);
      const code = err?.code || '';
      const msg = err?.message || '';
      if (code.includes('unauthorized-domain') || msg.includes('unauthorized-domain')) {
        const currentDomain = typeof window !== 'undefined' ? window.location.hostname : '';
        setErrorMessage(
          `⚠️ โดเมน "${currentDomain}" ยังไม่ได้เพิ่มใน Firebase Console: เข้าไปที่ Firebase Console > Authentication > Settings > Authorized domains แล้วกด Add domain ใส่ "${currentDomain}" หรือใช้อีเมล/รหัสผ่านด้านล่างแทนได้ทันที`
        );
      } else if (code.includes('popup-closed-by-user')) {
        setErrorMessage('หน้าต่างเข้าสู่ระบบด้วย Google ถูกปิดก่อนทำรายการเสร็จ');
      } else if (code.includes('cancelled-popup-request')) {
        setErrorMessage('คำขอยกเลิกเนื่องจากมีหน้าต่างเปิดซ้ำ');
      } else {
        setErrorMessage(msg || 'ไม่สามารถเข้าสู่ระบบด้วย Google ได้');
      }
    } finally {
      setIsLoading(false);
    }
  };

  // 2. Handle Email Sign-In
  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password) {
      setErrorMessage('กรุณากรอกอีเมลและรหัสผ่าน');
      return;
    }

    sfx.playClick();
    setIsLoading(true);
    setErrorMessage(null);
    try {
      const user = await signInWithEmailLive(email.trim(), password);
      if (user) {
        setCloudUser(user);
        setCurrentUser(user);

        const restored = await syncManager.restoreFromCloud(user.uid);
        if (!restored) {
          await syncManager.syncNow();
        }

        sfx.playCorrect();
        confetti({ particleCount: 70, spread: 70, origin: { y: 0.6 } });
        setSuccessMessage('เข้าสู่ระบบสำเร็จ! ข้อมูลถูกเชื่อมต่อกับคลาวด์แล้ว');
        onDataRestored?.();
      }
    } catch (err: any) {
      console.error('Email Sign-In Error:', err);
      let msg = err?.message || 'เข้าสู่ระบบไม่สำเร็จ';
      if (msg.includes('user-not-found') || msg.includes('invalid-credential')) {
        msg = 'ไม่พบบัญชีนี้ หรือรหัสผ่านไม่ถูกต้อง';
      } else if (msg.includes('wrong-password')) {
        msg = 'รหัสผ่านไม่ถูกต้อง';
      }
      setErrorMessage(msg);
    } finally {
      setIsLoading(false);
    }
  };

  // 3. Handle Email Sign-Up (New Child Account)
  const handleEmailSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password) {
      setErrorMessage('กรุณากรอกอีเมลและรหัสผ่าน');
      return;
    }
    if (password.length < 6) {
      setErrorMessage('รหัสผ่านต้องมีความยาวอย่างน้อย 6 ตัวอักษร');
      return;
    }
    if (!childName.trim()) {
      setErrorMessage('กรุณาใส่ชื่อเล่นของน้องผู้เรียน');
      return;
    }

    sfx.playClick();
    setIsLoading(true);
    setErrorMessage(null);
    try {
      const user = await signUpWithEmailLive(email.trim(), password, childName.trim());
      if (user) {
        setCloudUser(user);
        setCurrentUser(user);

        // Setup dedicated single profile for this child
        const allPets = createInitialPets();
        const newProfile: UserProfile = {
          id: `child-${Date.now()}`,
          name: childName.trim(),
          nickname: childName.trim(),
          avatar: selectedPet === 'dragon' ? '🐲' : selectedPet === 'panda' ? '🐼' : selectedPet === 'jellyfish' ? '🪼' : '🦛',
          color: 'from-pink-400 to-rose-500',
          level: 1,
          stars: 100, // Starter bonus stars!
          subjectStars: { chinese: 25, math: 25, english: 25, science: 25 },
          streak: 1,
          lastActiveDate: new Date().toISOString().split('T')[0],
          masteredWords: [],
          unlockedLevels: [1],
          parentOverrideUnlockAll: false,
          activePetType: selectedPet,
          pets: allPets,
          pet: allPets[selectedPet],
        };

        saveProfiles([newProfile]);
        setActiveProfileId(newProfile.id);

        // Immediately push fresh state to Firestore
        await syncManager.syncNow();

        sfx.playCorrect();
        confetti({ particleCount: 80, spread: 80, origin: { y: 0.6 } });
        setSuccessMessage(`สร้างบัญชีของ ${childName.trim()} สำเร็จ! ยินดีต้อนรับสู่โลกการเรียนรู้`);
        onDataRestored?.();
      }
    } catch (err: any) {
      console.error('Email Sign-Up Error:', err);
      let msg = err?.message || 'สมัครสมาชิกไม่สำเร็จ';
      if (msg.includes('email-already-in-use')) {
        msg = 'อีเมลนี้ถูกใช้งานไปแล้ว กรุณาเข้าสู่ระบบแทน';
      }
      setErrorMessage(msg);
    } finally {
      setIsLoading(false);
    }
  };

  // 3.5 Handle Anonymous Quick Connect (No Email/Password)
  const handleAnonymousSignIn = async () => {
    sfx.playClick();
    setIsLoading(true);
    setErrorMessage(null);
    setSuccessMessage(null);
    try {
      const user = await signInAnonymouslyLive();
      if (user) {
        setCloudUser(user);
        setCurrentUser(user);

        const restored = await syncManager.restoreFromCloud(user.uid);
        if (!restored) {
          await syncManager.syncNow();
        }

        sfx.playCorrect();
        confetti({ particleCount: 60, spread: 60, origin: { y: 0.6 } });
        setSuccessMessage('เชื่อมต่อคลาวด์แบบด่วนสำเร็จ! ข้อมูลคะแนนจะซิงก์ขึ้น Firebase อัตโนมัติ');
        onDataRestored?.();
      }
    } catch (err: any) {
      console.error('Anonymous Sign-In Error:', err);
      setErrorMessage(err?.message || 'ไม่สามารถเชื่อมต่อคลาวด์ด่วนได้');
    } finally {
      setIsLoading(false);
    }
  };

  // Diagnostic Test for Firestore
  const [diagnosticResult, setDiagnosticResult] = useState<string | null>(null);
  const handleDiagnosticTest = async () => {
    sfx.playClick();
    setIsLoading(true);
    setDiagnosticResult('กำลังทดสอบส่งข้อมูลไปยัง Firebase Cloud Firestore...');
    try {
      const res = await testFirestoreConnection(currentUser?.uid);
      if (res.success) {
        sfx.playCorrect();
        setDiagnosticResult(`✅ ${res.message}`);
      } else {
        sfx.playSoftTryAgain();
        if (res.code?.includes('permission-denied') || res.message?.includes('permission-denied')) {
          setDiagnosticResult(
            `⚠️ ติดสิทธิ์ Firestore Rules: กรุณาไปที่ Firebase Console > Build > Firestore Database > Rules แล้วปรับเป็น "allow read, write: if true;" หรืออัปเดตตาม firestore.rules`
          );
        } else {
          setDiagnosticResult(`❌ ล้มเหลว (${res.code}): ${res.message}`);
        }
      }
    } catch (e: any) {
      setDiagnosticResult(`❌ ข้อผิดพลาด: ${e?.message || 'ไม่ทราบสาเหตุ'}`);
    } finally {
      setIsLoading(false);
    }
  };

  // 4. Manual Sync Now
  const handleManualSync = async () => {
    sfx.playClick();
    setIsLoading(true);
    const ok = await syncManager.syncNow();
    setIsLoading(false);
    if (ok) {
      sfx.playCorrect();
      setSuccessMessage('ซิงก์ข้อมูลขึ้นคลาวด์เรียบร้อยแล้ว!');
    } else {
      setErrorMessage('ซิงก์ข้อมูลไม่สำเร็จ กรุณาตรวจสอบอินเทอร์เน็ต');
    }
  };

  // 5. Restore from Cloud
  const handleRestoreCloud = async () => {
    if (!currentUser) return;
    if (!confirm('ต้องการดึงข้อมูลล่าสุดจากคลาวด์มาทับในเครื่องนี้ใช่หรือไม่?')) return;
    sfx.playClick();
    setIsLoading(true);
    const ok = await syncManager.restoreFromCloud(currentUser.uid);
    setIsLoading(false);
    if (ok) {
      sfx.playCorrect();
      confetti({ particleCount: 60, spread: 60 });
      setSuccessMessage('กู้คืนคะแนนและสัตว์เลี้ยงจากคลาวด์สำเร็จ!');
      onDataRestored?.();
    } else {
      setErrorMessage('ไม่พบข้อมูลบนคลาวด์');
    }
  };

  // 6. Sign Out
  const handleSignOut = async () => {
    if (!confirm('ต้องการออกจากระบบบนเครื่องนี้ใช่หรือไม่? (ข้อมูลในเครื่องยังคงอยู่)')) return;
    sfx.playClick();
    await signOutLive();
    setCloudUser(null);
    setCurrentUser(null);
    setSuccessMessage('ออกจากระบบเรียบร้อยแล้ว');
  };

  // 7. Backup JSON
  const handleExportJSON = () => {
    sfx.playClick();
    const jsonStr = exportUserDataJSON();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    const dateStr = new Date().toISOString().split('T')[0];
    link.href = url;
    link.download = `duo-academy-backup-${dateStr}.json`;
    link.click();
    URL.revokeObjectURL(url);
    sfx.playCorrect();
    setSuccessMessage('ดาวน์โหลดไฟล์สำรองข้อมูล JSON เรียบร้อยแล้ว!');
  };

  const handleImportJSON = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      if (content) {
        const ok = importUserDataJSON(content);
        if (ok) {
          sfx.playCorrect();
          confetti({ particleCount: 70, spread: 70 });
          setSuccessMessage('นำเข้าข้อมูลสำเร็จ!');
          onDataRestored?.();
          syncManager.markDirty();
        } else {
          setErrorMessage('ไฟล์สำรองไม่ถูกต้อง');
        }
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border-2 border-indigo-100 max-h-[92vh] overflow-y-auto relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition-all"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-sky-400 to-indigo-600 flex items-center justify-center text-white shadow-md">
            <Cloud className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-black text-slate-800">
              {currentUser ? 'บัญชีผู้เรียน & คลาวด์ซิงก์' : 'เข้าสู่ระบบบัญชีผู้เรียน'}
            </h2>
            <p className="text-xs text-slate-500 font-bold">
              {currentUser
                ? 'คะแนนและสัตว์เลี้ยงจะถูกบันทึกขึ้นคลาวด์ทุก 5 นาที'
                : 'ล็อกอินเพื่อบันทึกคะแนนและเล่นต่อได้บน iPad / มือถือทุกเครื่อง'}
            </p>
          </div>
        </div>

        {/* Messages */}
        {errorMessage && (
          <div className="mb-4 p-3 bg-rose-50 border border-rose-200 rounded-2xl flex items-center gap-2 text-rose-700 text-xs font-bold animate-fade-in">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {successMessage && (
          <div className="mb-4 p-3 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center gap-2 text-emerald-800 text-xs font-bold animate-fade-in">
            <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-emerald-600" />
            <span>{successMessage}</span>
          </div>
        )}

        {/* LOGGED IN VIEW */}
        {currentUser ? (
          <div className="space-y-5">
            {/* User Card */}
            <div className="p-4 bg-gradient-to-r from-indigo-50 via-purple-50 to-amber-50 rounded-2xl border border-indigo-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center text-xl font-black shadow-sm">
                  {currentUser.displayName ? currentUser.displayName.charAt(0) : '👧'}
                </div>
                <div>
                  <h3 className="text-base font-black text-slate-900">
                    {currentUser.displayName || 'น้องผู้เรียน'}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    {currentUser.email || 'บัญชีเชื่อมต่อแล้ว'}
                  </p>
                  <span className="inline-block mt-1 text-[10px] font-black px-2 py-0.5 rounded-full bg-white/90 text-indigo-700 border border-indigo-200 shadow-2xs">
                    {currentUser.provider === 'google' ? '🔴 Google Account' : '✉️ Email Account'}
                  </span>
                </div>
              </div>

              <button
                onClick={handleSignOut}
                className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all"
                title="ออกจากระบบ"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>

            {/* Sync Status Box */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-slate-700 flex items-center gap-1.5">
                  <Cloud className="w-4 h-4 text-sky-500" />
                  <span>สถานะการบันทึกคลาวด์ (Auto-Sync ทุก 5 นาที):</span>
                </span>
                <span
                  className={`text-[11px] font-black px-2 py-0.5 rounded-full ${
                    syncState.status === 'syncing'
                      ? 'bg-amber-100 text-amber-800 animate-pulse'
                      : syncState.hasPendingChanges
                      ? 'bg-orange-100 text-orange-800'
                      : 'bg-emerald-100 text-emerald-800'
                  }`}
                >
                  {syncState.status === 'syncing'
                    ? '🔄 กำลังบันทึก...'
                    : syncState.hasPendingChanges
                    ? '🟡 มีข้อมูลรอบันทึก (ใน 5 นาที)'
                    : '✅ บันทึกล่าสุดเรียบร้อย'}
                </span>
              </div>

              <div className="text-[11px] text-slate-500 font-medium flex items-center justify-between">
                <span>บันทึกล่าสุดเมื่อ:</span>
                <span className="font-bold text-slate-700">
                  {syncState.lastSyncedAt
                    ? syncState.lastSyncedAt.toLocaleTimeString('th-TH')
                    : 'เพิ่งเชื่อมต่อ'}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  onClick={handleManualSync}
                  disabled={isLoading}
                  className="px-3 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 shadow-sm disabled:opacity-50"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
                  <span>บันทึกเดี๋ยวนี้</span>
                </button>

                <button
                  onClick={handleRestoreCloud}
                  disabled={isLoading}
                  className="px-3 py-2 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>ดึงคะแนนจากคลาวด์</span>
                </button>

                <button
                  onClick={handleDiagnosticTest}
                  disabled={isLoading}
                  className="col-span-2 px-3 py-2 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 shadow-2xs"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                  <span>🔍 ทดสอบการเชื่อมต่อ Firebase Firestore</span>
                </button>
              </div>

              {diagnosticResult && (
                <div className="p-2.5 rounded-xl bg-white border border-amber-200 text-[11px] font-bold text-slate-700 animate-fade-in break-words">
                  {diagnosticResult}
                </div>
              )}
            </div>

            {/* Offline JSON Backup */}
            <div className="pt-2 border-t border-slate-100">
              <span className="text-[11px] font-bold text-slate-400 block mb-2">
                สำรองข้อมูลไฟล์ JSON (ไม่จำเป็นต้องใช้เน็ต):
              </span>
              <div className="flex gap-2">
                <button
                  onClick={handleExportJSON}
                  className="flex-1 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-[11px] font-bold transition-all flex items-center justify-center gap-1"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>ดาวน์โหลด JSON</span>
                </button>
                <label className="flex-1 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-[11px] font-bold transition-all flex items-center justify-center gap-1 cursor-pointer">
                  <Upload className="w-3.5 h-3.5" />
                  <span>นำเข้าไฟล์ JSON</span>
                  <input type="file" accept=".json" onChange={handleImportJSON} className="hidden" />
                </label>
              </div>
            </div>
          </div>
        ) : (
          /* NOT LOGGED IN: TABS FOR SIGN IN / SIGN UP */
          <div className="space-y-5">
            {/* Tabs */}
            <div className="flex rounded-2xl bg-slate-100 p-1">
              <button
                onClick={() => {
                  setAuthTab('signin');
                  setErrorMessage(null);
                }}
                className={`flex-1 py-2 text-xs font-black rounded-xl transition-all ${
                  authTab === 'signin'
                    ? 'bg-white text-indigo-700 shadow-xs'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                เข้าสู่ระบบ (Sign In)
              </button>
              <button
                onClick={() => {
                  setAuthTab('signup');
                  setErrorMessage(null);
                }}
                className={`flex-1 py-2 text-xs font-black rounded-xl transition-all ${
                  authTab === 'signup'
                    ? 'bg-white text-indigo-700 shadow-xs'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                สมัครบัญชีใหม่ (Sign Up)
              </button>
            </div>

            {/* Quick 1-Click Anonymous Cloud Connect */}
            <button
              onClick={handleAnonymousSignIn}
              disabled={isLoading}
              className="w-full py-3 bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white rounded-2xl font-black text-xs sm:text-sm flex items-center justify-center gap-2.5 shadow-md transition-all active:scale-98"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>⚡ เชื่อมต่อคลาวด์ด่วน (1 คลิก ไม่ต้องกรอกอีเมล)</span>
            </button>

            {/* Google Quick Sign-In */}
            <button
              onClick={handleGoogleSignIn}
              disabled={isLoading}
              className="w-full py-3 bg-white hover:bg-slate-50 border-2 border-slate-200 text-slate-800 rounded-2xl font-black text-xs sm:text-sm flex items-center justify-center gap-2.5 shadow-xs transition-all active:scale-98"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>เข้าสู่ระบบด้วย Google (แตะปุ่มเดียว)</span>
            </button>

            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-slate-200" />
              <span className="text-[11px] font-bold text-slate-400">หรือใช้อีเมล / ทดสอบระบบ</span>
              <div className="flex-1 h-px bg-slate-200" />
            </div>

            {/* TAB: SIGN IN */}
            {authTab === 'signin' && (
              <form onSubmit={handleEmailSignIn} className="space-y-3">
                <div>
                  <label className="text-[11px] font-bold text-slate-600 block mb-1">
                    อีเมล (Email):
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="เช่น paopao@example.com"
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-bold text-slate-600 block mb-1">
                    รหัสผ่าน (Password):
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:bg-white"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-black text-xs sm:text-sm shadow-md transition-all active:scale-98 disabled:opacity-50"
                >
                  {isLoading ? 'กำลังเข้าสู่ระบบ...' : 'เข้าสู่ระบบ (Sign In)'}
                </button>
              </form>
            )}

            {/* TAB: SIGN UP */}
            {authTab === 'signup' && (
              <form onSubmit={handleEmailSignUp} className="space-y-3">
                <div>
                  <label className="text-[11px] font-bold text-slate-600 block mb-1">
                    ชื่อเล่นของน้อง (Child Nickname):
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      value={childName}
                      onChange={(e) => setChildName(e.target.value)}
                      placeholder="เช่น น้องเป่าเปา หรือ น้องชูก้า"
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-bold text-slate-600 block mb-1">
                    อีเมล (Email):
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="เช่น paopao@duo.com"
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-bold text-slate-600 block mb-1">
                    ตั้งรหัสผ่าน (อย่างน้อย 6 ตัวอักษร):
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="password"
                      required
                      minLength={6}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:bg-white"
                    />
                  </div>
                </div>

                {/* Choose Starter Pet */}
                <div>
                  <label className="text-[11px] font-bold text-slate-600 block mb-1.5">
                    เลือกสัตว์เลี้ยงคู่หูเริ่มต้น:
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {(['dragon', 'panda', 'jellyfish', 'hippo'] as PetType[]).map((pType) => (
                      <button
                        type="button"
                        key={pType}
                        onClick={() => setSelectedPet(pType)}
                        className={`p-2 rounded-xl border-2 text-center transition-all ${
                          selectedPet === pType
                            ? 'border-indigo-600 bg-indigo-50 shadow-xs scale-105'
                            : 'border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        <span className="text-2xl block">{PET_CATALOG[pType]?.emoji}</span>
                        <span className="text-[10px] font-black text-slate-700 block mt-0.5 truncate">
                          {PET_CATALOG[pType]?.name}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-2xl font-black text-xs sm:text-sm shadow-md transition-all active:scale-98 disabled:opacity-50"
                >
                  {isLoading ? 'กำลังสร้างบัญชี...' : 'สร้างบัญชีผู้เรียนใหม่ 🚀'}
                </button>
              </form>
            )}

            {/* Diagnostic check button for guest view */}
            <div className="pt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={handleDiagnosticTest}
                disabled={isLoading}
                className="w-full py-2 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 shadow-2xs"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                <span>🔍 ทดสอบการเชื่อมต่อ Firebase Firestore</span>
              </button>

              {diagnosticResult && (
                <div className="mt-2 p-2.5 rounded-xl bg-white border border-amber-200 text-[11px] font-bold text-slate-700 animate-fade-in break-words text-left">
                  {diagnosticResult}
                </div>
              )}
            </div>

            {/* Guest note */}
            <div className="pt-2 text-center">
              <button
                onClick={onClose}
                className="text-xs text-slate-400 hover:text-slate-600 font-bold underline"
              >
                เล่นแบบทดลองไปก่อน (ยังไม่ล็อกอินตอนนี้)
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
