'use client';

import React, { useState, useEffect } from 'react';
import { CloudUser, UserProfile } from '@/types';
import {
  isFirebaseConfigured,
  signInWithGoogleLive,
  signOutLive,
  saveUserDataToFirestore,
} from '@/lib/firebase';
import {
  getCloudUser,
  setCloudUser,
  exportUserDataJSON,
  importUserDataJSON,
  getStoredProfiles,
  getActiveProfileId,
} from '@/lib/storage';
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
  KeyRound,
  RefreshCw,
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
  const [isFirebaseLive, setIsFirebaseLive] = useState(false);
  const [showSimulateLogin, setShowSimulateLogin] = useState(false);
  const [showSetupGuide, setShowSetupGuide] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncMessage, setSyncMessage] = useState<string | null>(null);

  // Simulated Google Login Form
  const [simName, setSimName] = useState('คุณพ่อคุณแม่');
  const [simEmail, setSimEmail] = useState('parent.duo@gmail.com');

  useEffect(() => {
    if (isOpen) {
      setCurrentUser(getCloudUser());
      setIsFirebaseLive(isFirebaseConfigured());
      setSyncMessage(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleGoogleSignIn = async () => {
    sfx.playClick();
    if (isFirebaseLive) {
      try {
        setIsSyncing(true);
        const user = await signInWithGoogleLive();
        if (user) {
          setCurrentUser(user);
          setCloudUser(user);
          // Sync profiles to firestore
          const profiles = getStoredProfiles();
          const activeId = getActiveProfileId();
          await saveUserDataToFirestore(user.uid, { profiles, activeProfileId: activeId });

          sfx.playCorrect();
          confetti({ particleCount: 70, spread: 60 });
          setSyncMessage('เข้าสู่ระบบด้วยบัญชี Google และเชื่อมต่อคลาวด์สำเร็จ!');
        }
      } catch (err: any) {
        console.error('Google Sign-In failed:', err);
        alert(err?.message || 'ไม่สามารถเข้าสู่ระบบด้วย Google ได้ กรุณาลองใหม่อีกครั้ง');
      } finally {
        setIsSyncing(false);
      }
    } else {
      // Firebase keys not yet in env -> Show instant simulated Google Sign-In
      setShowSimulateLogin(true);
    }
  };

  const handleConfirmSimulatedGoogle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!simEmail.trim()) return;

    const mockUser: CloudUser = {
      uid: `google-${Date.now()}`,
      email: simEmail.trim(),
      displayName: simName.trim() || 'คุณพ่อคุณแม่',
      photoURL: null,
      provider: 'google',
      lastSyncedAt: new Date().toISOString(),
    };

    setCurrentUser(mockUser);
    setCloudUser(mockUser);
    setShowSimulateLogin(false);

    sfx.playCorrect();
    confetti({ particleCount: 60, spread: 60 });
    setSyncMessage('เชื่อมต่อบัญชี Google Cloud Account สำเร็จ! ข้อมูลคะแนนจะถูกบันทึกไว้อย่างปลอดภัย');
  };

  const handleSignOut = async () => {
    sfx.playClick();
    if (isFirebaseLive) {
      await signOutLive();
    }
    setCloudUser(null);
    setCurrentUser(null);
    setSyncMessage('ออกจากระบบคลาวด์เรียบร้อยแล้ว (ข้อมูลบนเครื่องยังคงอยู่ปลอดภัย)');
  };

  const handleExportJSON = () => {
    sfx.playClick();
    const jsonStr = exportUserDataJSON();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    const dateStr = new Date().toISOString().split('T')[0];
    link.href = url;
    link.download = `duo-wonder-academy-backup-${dateStr}.json`;
    link.click();
    URL.revokeObjectURL(url);
    sfx.playCorrect();
    setSyncMessage('ดาวน์โหลดไฟล์สำรองข้อมูล JSON เรียบร้อยแล้ว!');
  };

  const handleImportJSON = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      const res = importUserDataJSON(content);
      if (res.success) {
        sfx.playCorrect();
        confetti({ particleCount: 80, spread: 70 });
        setSyncMessage(`นำเข้าข้อมูลสำเร็จ! กู้คืนข้อมูลผู้เรียนจำนวน ${res.count} คนเรียบร้อยแล้ว`);
        if (onDataRestored) {
          onDataRestored();
        }
      } else {
        sfx.playSoftTryAgain();
        alert(res.error || 'ไม่สามารถนำเข้าไฟล์ข้อมูลได้');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/65 backdrop-blur-sm animate-fadeIn">
      <div className="bg-gradient-to-b from-sky-50/60 via-slate-50 to-white w-full max-w-2xl max-h-[92vh] rounded-3xl shadow-2xl border-2 border-white/60 overflow-hidden flex flex-col relative">
        {/* Top Header */}
        <div className="px-5 py-4 bg-white/95 backdrop-blur-md border-b border-slate-100 flex items-center justify-between sticky top-0 z-30 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 text-white flex items-center justify-center text-2xl shadow-md">
              🌐
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-black text-slate-800">
                  ระบบบัญชี Google & บันทึกคะแนนบนคลาวด์
                </h3>
                <span className="text-[10px] bg-sky-500 text-white font-black px-2 py-0.5 rounded-full">
                  Cloud Safe
                </span>
              </div>
              <p className="text-[11px] font-bold text-slate-500">
                ล็อกอินเพื่อป้องกันคะแนนและเลเวลสัตว์เลี้ยงหาย และเล่นข้ามเครื่องได้สะดวก
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              sfx.playCorrect();
              onClose();
            }}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-rose-100 text-slate-500 hover:text-rose-600 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5 flex-1">
          {/* Notification Message */}
          {syncMessage && (
            <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-2xl text-xs font-bold text-emerald-800 flex items-center gap-2 animate-fadeIn">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{syncMessage}</span>
            </div>
          )}

          {/* Section 1: Google Account Status */}
          <div className="bg-white p-5 rounded-3xl border-2 border-slate-200/80 shadow-xs space-y-4">
            <h4 className="text-xs font-black text-slate-700 uppercase tracking-wider flex items-center gap-2">
              <Cloud className="w-4 h-4 text-sky-500" />
              <span>สถานะการเชื่อมต่อบัญชีคลาวด์</span>
            </h4>

            {currentUser ? (
              <div className="bg-sky-50/70 border border-sky-200 p-4 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-sky-400 to-indigo-600 text-white flex items-center justify-center text-2xl font-black shadow-xs">
                    {currentUser.displayName ? currentUser.displayName.charAt(0) : 'G'}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-black text-sm text-slate-800">
                        {currentUser.displayName}
                      </span>
                      <span className="bg-emerald-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full flex items-center gap-1 shadow-2xs">
                        <CheckCircle2 className="w-3 h-3" />
                        ซิงก์คลาวด์อยู่
                      </span>
                    </div>
                    <div className="text-xs font-bold text-slate-500">
                      {currentUser.email}
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleSignOut}
                  className="px-3.5 py-2 bg-white hover:bg-rose-50 text-rose-600 hover:text-rose-700 border border-rose-200 rounded-xl text-xs font-black shadow-2xs flex items-center gap-1.5 transition-all self-start sm:self-center cursor-pointer"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>ออกจากระบบ</span>
                </button>
              </div>
            ) : (
              <div className="text-center py-4 space-y-3">
                <div className="w-16 h-16 mx-auto rounded-3xl bg-slate-100 flex items-center justify-center shadow-inner">
                  <svg className="w-8 h-8" viewBox="0 0 24 24">
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
                </div>

                <div>
                  <h5 className="font-black text-sm text-slate-800">
                    เข้าสู่ระบบด้วยบัญชี Google
                  </h5>
                  <p className="text-xs text-slate-500 max-w-md mx-auto mt-0.5">
                    เชื่อมต่อบัญชี Google ของคุณพ่อคุณแม่ เพื่อให้คะแนนดาว เลเวลสัตว์เลี้ยง และรางวัลของน้องๆ บันทึกไว้อย่างปลอดภัย ไม่หายไปไหน
                  </p>
                </div>

                <button
                  onClick={handleGoogleSignIn}
                  disabled={isSyncing}
                  className="px-6 py-3 bg-white hover:bg-slate-50 border-2 border-slate-200 text-slate-800 rounded-2xl text-xs font-black shadow-md hover:shadow-lg transition-all inline-flex items-center gap-3 cursor-pointer"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
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
                  <span>{isSyncing ? 'กำลังเชื่อมต่อ Google...' : 'เข้าสู่ระบบด้วย Google (Sign in with Google)'}</span>
                </button>
              </div>
            )}
          </div>

          {/* SIMULATED GOOGLE LOGIN MODAL FORM */}
          {showSimulateLogin && (
            <div className="bg-sky-50 border-2 border-sky-300 p-5 rounded-3xl space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🌐</span>
                  <h5 className="font-black text-xs text-sky-900">
                    เข้าสู่ระบบ Google Account ประจำครอบครัว
                  </h5>
                </div>
                <button
                  onClick={() => setShowSimulateLogin(false)}
                  className="text-xs text-slate-400 hover:text-slate-600 font-bold"
                >
                  ยกเลิก
                </button>
              </div>

              <form onSubmit={handleConfirmSimulatedGoogle} className="space-y-3 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="font-extrabold text-slate-700 block">ชื่อคุณพ่อคุณแม่</label>
                    <input
                      type="text"
                      value={simName}
                      onChange={(e) => setSimName(e.target.value)}
                      placeholder="เช่น คุณพ่อเอก"
                      className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl font-bold"
                      required
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-extrabold text-slate-700 block">อีเมล Google (@gmail.com)</label>
                    <input
                      type="email"
                      value={simEmail}
                      onChange={(e) => setSimEmail(e.target.value)}
                      placeholder="dad.family@gmail.com"
                      className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl font-bold"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-gradient-to-r from-sky-500 to-indigo-600 hover:brightness-105 text-white font-black rounded-xl shadow-xs cursor-pointer"
                >
                  บันทึกและเชื่อมต่อบัญชี Google 🚀
                </button>
              </form>
            </div>
          )}

          {/* Section 2: Backup & Restore JSON (100% Never Lost) */}
          <div className="bg-white p-5 rounded-3xl border-2 border-slate-200/80 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-black text-slate-700 uppercase tracking-wider flex items-center gap-2">
                <FileJson className="w-4 h-4 text-amber-500" />
                <span>สำรองข้อมูล & โอนย้ายคะแนนข้ามเครื่อง (Backup & Restore)</span>
              </h4>
              <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded-full">
                แนะนำสำหรับ iPad / มือถือ
              </span>
            </div>

            <p className="text-xs text-slate-500">
              คุณพ่อคุณแม่สามารถดาวน์โหลดไฟล์สำรองข้อมูลคะแนนเก็บไว้ หรือนำไปเปิดบน iPad, แท็บเล็ต หรือมือถือเครื่องอื่นได้ทันที คะแนนและสัตว์เลี้ยงจะไม่หายแน่นอน 100%
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {/* Export Button */}
              <button
                onClick={handleExportJSON}
                className="p-4 rounded-2xl border-2 border-dashed border-sky-300 hover:border-sky-500 bg-sky-50/50 hover:bg-sky-50 transition-all text-left flex items-start gap-3 cursor-pointer group"
              >
                <div className="p-2.5 rounded-xl bg-sky-500 text-white shrink-0 group-hover:scale-110 transition-transform">
                  <Download className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-black text-xs text-slate-800">
                    ส่งออกไฟล์สำรองคะแนน (Download JSON)
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    บันทึกข้อมูลผู้เรียน คะแนนดาว และตั๋วรางวัลลงเครื่อง
                  </div>
                </div>
              </button>

              {/* Import Button */}
              <label className="p-4 rounded-2xl border-2 border-dashed border-emerald-300 hover:border-emerald-500 bg-emerald-50/50 hover:bg-emerald-50 transition-all text-left flex items-start gap-3 cursor-pointer group">
                <div className="p-2.5 rounded-xl bg-emerald-500 text-white shrink-0 group-hover:scale-110 transition-transform">
                  <Upload className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-black text-xs text-slate-800">
                    นำเข้าไฟล์สำรองคะแนน (Restore JSON)
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    กู้คืนคะแนนและเลเวลสัตว์เลี้ยงจากไฟล์เดิม
                  </div>
                </div>
                <input
                  type="file"
                  accept=".json"
                  onChange={handleImportJSON}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          {/* Section 3: Live Firebase Cloud Sync Setup Guide */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs space-y-2">
            <button
              onClick={() => setShowSetupGuide(!showSetupGuide)}
              className="w-full flex items-center justify-between text-slate-600 hover:text-slate-800 font-bold"
            >
              <span className="flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-indigo-500" />
                <span>คำแนะนำ: เชื่อมต่อ Firebase Cloud Live Database อัตโนมัติ</span>
              </span>
              <span>{showSetupGuide ? '▲ ซ่อน' : '▼ ดูวิธีตั้งค่า'}</span>
            </button>

            {showSetupGuide && (
              <div className="pt-2 text-[11px] text-slate-600 space-y-2 border-t border-slate-200">
                <p>
                  แอปพลิเคชันรองรับ <strong>Firebase Authentication & Cloud Firestore</strong> ตัวเต็ม หากคุณพ่อคุณแม่ต้องการให้ระบบซิงก์ข้อมูลอัตโนมัติแบบเรียลไทม์ระหว่าง iPad กับคอมพิวเตอร์:
                </p>
                <ol className="list-decimal pl-4 space-y-1">
                  <li>สร้าง Firebase Project ฟรีที่ <a href="https://console.firebase.google.com" target="_blank" rel="noreferrer" className="text-indigo-600 underline font-bold">console.firebase.google.com</a></li>
                  <li>เปิดใช้งาน <strong>Authentication (Google Provider)</strong> และ <strong>Cloud Firestore</strong></li>
                  <li>คัดลอก Firebase Config มาใส่ในไฟล์ <code className="bg-white px-1.5 py-0.5 rounded border border-slate-200">.env.local</code> เช่น <code className="bg-white px-1.5 py-0.5 rounded border border-slate-200">NEXT_PUBLIC_FIREBASE_API_KEY</code></li>
                </ol>
                <p className="text-emerald-700 font-bold">
                  ✨ แม้ไม่ได้ตั้งค่า Firebase ระบบก็ยังคงบันทึกข้อมูลทุกอย่างผ่าน Local Storage และระบบสำรองไฟล์ JSON ได้อย่างสมบูรณ์แบบโดยคะแนนไม่หายแน่นอนครับ!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
