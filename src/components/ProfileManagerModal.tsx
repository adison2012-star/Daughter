'use client';

import React, { useState, useEffect } from 'react';
import { UserProfile, GradeLevel, PetType, CloudUser } from '@/types';
import { updateProfile, getCloudUser, setCloudUser } from '@/lib/storage';
import { syncManager, SyncState } from '@/lib/syncManager';
import { signOutLive } from '@/lib/firebase';
import { PET_CATALOG } from '@/lib/petSystem';
import { sfx } from '@/lib/speech';
import confetti from 'canvas-confetti';
import {
  X,
  Sparkles,
  Check,
  Edit3,
  GraduationCap,
  Star,
  CheckCircle2,
  Cloud,
  Flame,
  Award,
  BarChart3,
  User,
  LogOut,
  RefreshCw,
  Layers,
  Palette,
  ShieldCheck,
  TrendingUp,
  BookOpen,
} from 'lucide-react';

interface ProfileManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeProfile: UserProfile;
  profiles: UserProfile[];
  onProfilesChanged: (newProfiles: UserProfile[], newActiveId: string) => void;
  cloudUser?: CloudUser | null;
  onOpenAuthModal?: () => void;
}

type TabType = 'analytics' | 'edit' | 'account';

// 24+ Pixar & Character Avatars categorized
const AVATAR_CATEGORIES = [
  {
    category: '🧒🏻 นักเรียนคนเก่ง (Learners)',
    avatars: ['👧🏻', '🧒🏻', '👦🏻', '👧🏼', '👦🏼', '👩🏻', '🧑🏻', '👨🏻', '🎓'],
  },
  {
    category: '🐲 มาสคอตมหัศจรรย์ (Pixar Mascots)',
    avatars: ['🐲', '🐼', '🪼', '🦛', '🦄', '🦁', '🦊', '🦉', '🐱', '🐶'],
  },
  {
    category: '🌟 สัญลักษณ์ผู้พิชิต (Achiever Badges)',
    avatars: ['👑', '🌟', '🚀', '🏆', '⚡', '💎', '🎨', '🔬'],
  },
];

const GRADE_LABELS: Record<GradeLevel, string> = {
  p1_3: 'ประถมศึกษาตอนต้น (ป.1 - ป.3)',
  p4_6: 'ประถมศึกษาตอนปลาย (ป.4 - ป.6)',
  m1_3: 'มัธยมศึกษาตอนต้น (ม.1 - ม.3)',
  m4_6: 'มัธยมศึกษาตอนปลาย (ม.4 - ม.6)',
  general: 'บุคคลทั่วไป / เตรียมสอบ',
};

const COLOR_PRESETS = [
  { label: 'ชมพู-กุหลาบ', value: 'from-pink-400 to-rose-500' },
  { label: 'ส้ม-ทองคำ', value: 'from-amber-400 to-orange-500' },
  { label: 'ม่วง-คราม', value: 'from-indigo-500 to-purple-600' },
  { label: 'เขียว-มิ้นต์', value: 'from-emerald-400 to-teal-500' },
  { label: 'ฟ้า-ท้องฟ้า', value: 'from-sky-400 to-blue-600' },
];

export const ProfileManagerModal: React.FC<ProfileManagerModalProps> = ({
  isOpen,
  onClose,
  activeProfile,
  profiles,
  onProfilesChanged,
  cloudUser: propCloudUser,
  onOpenAuthModal,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('analytics');

  // Form State for Editing
  const [name, setName] = useState(activeProfile.name);
  const [nickname, setNickname] = useState(activeProfile.nickname || activeProfile.name);
  const [avatar, setAvatar] = useState(activeProfile.avatar);
  const [gradeLevel, setGradeLevel] = useState<GradeLevel>(activeProfile.gradeLevel || 'p1_3');
  const [color, setColor] = useState(activeProfile.color || 'from-amber-400 to-rose-500');
  const [isSaved, setIsSaved] = useState(false);

  // Sync state
  const [syncState, setSyncState] = useState<SyncState>(() => syncManager.getState());
  const [cloudUser, setLocalCloudUser] = useState<CloudUser | null>(propCloudUser || null);

  useEffect(() => {
    if (isOpen) {
      setName(activeProfile.name);
      setNickname(activeProfile.nickname || activeProfile.name);
      setAvatar(activeProfile.avatar);
      setGradeLevel(activeProfile.gradeLevel || 'p1_3');
      setColor(activeProfile.color || 'from-amber-400 to-rose-500');
      setIsSaved(false);
      const user = getCloudUser();
      setLocalCloudUser(user);
    }
  }, [isOpen, activeProfile]);

  useEffect(() => {
    return syncManager.subscribe(setSyncState);
  }, []);

  if (!isOpen) return null;

  // -------------------------------------------------------------------
  // Subject Stars & Analytics Calculations
  // -------------------------------------------------------------------
  const chineseStars = activeProfile.subjectStars?.chinese || 0;
  const mathStars = activeProfile.subjectStars?.math || 0;
  const englishStars = activeProfile.subjectStars?.english || 0;
  const scienceStars = activeProfile.subjectStars?.science || 0;
  const totalStars = activeProfile.stars || (chineseStars + mathStars + englishStars + scienceStars);

  // Normalized scores for Radar Chart (0 to 100 max scale, min baseline 15 for aesthetics)
  const maxBenchmark = Math.max(100, chineseStars, mathStars, englishStars, scienceStars);
  const normC = Math.max(15, Math.min(100, Math.round((chineseStars / maxBenchmark) * 100)));
  const normM = Math.max(15, Math.min(100, Math.round((mathStars / maxBenchmark) * 100)));
  const normE = Math.max(15, Math.min(100, Math.round((englishStars / maxBenchmark) * 100)));
  const normS = Math.max(15, Math.min(100, Math.round((scienceStars / maxBenchmark) * 100)));

  // Radar Polygon coordinates: Center at (120, 120), Max Radius = 75
  // Top: Chinese (0 deg, -Y)
  // Right: Math (90 deg, +X)
  // Bottom: English (180 deg, +Y)
  // Left: Science (270 deg, -X)
  const cx = 120;
  const cy = 120;
  const maxR = 75;

  const ptChinese = { x: cx, y: cy - (normC / 100) * maxR };
  const ptMath = { x: cx + (normM / 100) * maxR, y: cy };
  const ptEnglish = { x: cx, y: cy + (normE / 100) * maxR };
  const ptScience = { x: cx - (normS / 100) * maxR, y: cy };

  const radarPolygonPoints = `${ptChinese.x},${ptChinese.y} ${ptMath.x},${ptMath.y} ${ptEnglish.x},${ptEnglish.y} ${ptScience.x},${ptScience.y}`;

  // -------------------------------------------------------------------
  // Handlers
  // -------------------------------------------------------------------
  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const updated = updateProfile(activeProfile.id, {
      name: name.trim(),
      nickname: nickname.trim() || name.trim(),
      avatar,
      gradeLevel,
      color,
    });

    if (updated) {
      sfx.playCorrect();
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
      setIsSaved(true);
      setTimeout(() => setIsSaved(false), 2500);

      const allProfiles = profiles.map((p) => (p.id === updated.id ? updated : p));
      onProfilesChanged(allProfiles, updated.id);

      // Push to Firestore immediately if logged in
      syncManager.syncNow();
    }
  };

  const handleSignOut = async () => {
    sfx.playClick();
    if (confirm('คุณต้องการออกจากระบบเพื่อสลับบัญชีผู้เรียนใช่หรือไม่?')) {
      await signOutLive();
      setCloudUser(null);
      setLocalCloudUser(null);
      sfx.playSoftTryAgain();
      onClose();
      window.location.reload();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="bg-white rounded-3xl w-full max-w-2xl shadow-2xl border-2 border-amber-200 overflow-hidden flex flex-col max-h-[92vh] animate-scale-in my-auto">
        {/* ========================================================
            MODAL HEADER & STUDENT PROFILE HERO
           ======================================================== */}
        <div className={`p-5 sm:p-6 bg-gradient-to-r ${color} text-white relative flex-shrink-0 select-none shadow-md`}>
          <button
            onClick={() => {
              sfx.playClick();
              onClose();
            }}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95"
            title="ปิดหน้าต่าง"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-4">
            {/* Big Avatar */}
            <div className="relative group cursor-pointer" onClick={() => setActiveTab('edit')}>
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-white/30 backdrop-blur-md border-2 border-white/60 flex items-center justify-center text-4xl sm:text-5xl shadow-lg group-hover:scale-105 transition-transform">
                {avatar}
              </div>
              <button
                className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-white text-slate-800 flex items-center justify-center shadow-md text-xs group-hover:bg-amber-100"
                title="เปลี่ยนรูปภาพ"
              >
                <Edit3 className="w-3.5 h-3.5 text-amber-600" />
              </button>
            </div>

            {/* Profile Info */}
            <div className="space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-xl sm:text-2xl font-black tracking-tight leading-tight">
                  {nickname || name}
                </h3>
                <span className="text-xs bg-white/20 backdrop-blur-sm px-2.5 py-0.5 rounded-full font-bold">
                  {GRADE_LABELS[gradeLevel]?.split(' ')[0] || 'ป.1 - ป.3'}
                </span>
              </div>
              <p className="text-xs text-white/80 font-medium">
                {name !== nickname ? `ชื่อจริง: ${name}` : 'ผู้เรียน Duo Wonder Academy'}
              </p>

              {/* Stats badges */}
              <div className="flex items-center gap-3 pt-1 text-xs font-black">
                <span className="flex items-center gap-1 bg-black/20 px-2.5 py-1 rounded-xl">
                  <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                  <span>{totalStars.toLocaleString()} ดาวรวม</span>
                </span>
                <span className="flex items-center gap-1 bg-black/20 px-2.5 py-1 rounded-xl">
                  <Flame className="w-3.5 h-3.5 text-orange-300 fill-orange-300" />
                  <span>{activeProfile.streak} วันต่อเนื่อง</span>
                </span>
                <span className="hidden sm:flex items-center gap-1 bg-black/20 px-2.5 py-1 rounded-xl">
                  <span>🐾</span>
                  <span>{PET_CATALOG[activeProfile.activePetType || 'dragon']?.name || 'เสี่ยวหลง'}</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            SEGMENTED TABS (Pixar 3D)
           ======================================================== */}
        <div className="bg-[#FAF7F2] p-2 border-b border-[#EDE7DE] flex items-center justify-between gap-1 flex-shrink-0 select-none">
          <button
            onClick={() => {
              sfx.playClick();
              setActiveTab('analytics');
            }}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-2xl text-xs sm:text-sm font-black transition-all ${
              activeTab === 'analytics'
                ? 'bg-white text-indigo-700 shadow-sm border border-indigo-100 scale-101'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <BarChart3 className="w-4 h-4 text-indigo-500" />
            <span>สถิติ & กราฟวิเคราะห์</span>
          </button>

          <button
            onClick={() => {
              sfx.playClick();
              setActiveTab('edit');
            }}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-2xl text-xs sm:text-sm font-black transition-all ${
              activeTab === 'edit'
                ? 'bg-white text-rose-600 shadow-sm border border-rose-100 scale-101'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <User className="w-4 h-4 text-rose-500" />
            <span>แก้ไขรูป & ข้อมูล</span>
          </button>

          <button
            onClick={() => {
              sfx.playClick();
              setActiveTab('account');
            }}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-2xl text-xs sm:text-sm font-black transition-all ${
              activeTab === 'account'
                ? 'bg-white text-sky-600 shadow-sm border border-sky-100 scale-101'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <Cloud className="w-4 h-4 text-sky-500" />
            <span>บัญชี & คลาวด์</span>
          </button>
        </div>

        {/* ========================================================
            MODAL BODY CONTENT
           ======================================================== */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
          {/* ========================================================
              TAB 1: LEARNING ANALYTICS & PROGRESS GRAPHS
             ======================================================== */}
          {activeTab === 'analytics' && (
            <div className="space-y-6 animate-fade-in">
              {/* 4 Subjects Star Breakdown Cards */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-black text-slate-700 px-1">
                  <span className="flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-amber-500" />
                    <span>คะแนนและดาวที่ได้รับจากการเรียนในแต่ละวิชา</span>
                  </span>
                  <span className="text-[11px] text-slate-400 font-bold">
                    รวม {totalStars.toLocaleString()} ⭐
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {/* Chinese */}
                  <div className="p-3.5 rounded-2xl bg-gradient-to-br from-rose-50 to-pink-50 border-2 border-rose-200/90 shadow-2xs space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xl">🇨🇳</span>
                      <span className="text-[10px] font-black bg-rose-200/80 text-rose-800 px-1.5 py-0.2 rounded-md">
                        ภาษาจีน
                      </span>
                    </div>
                    <span className="text-xl font-black text-rose-700 block">
                      {chineseStars.toLocaleString()} ⭐
                    </span>
                    <span className="text-[10px] text-slate-500 font-bold block">
                      คลังศัพท์ HSK 5,400 คำ
                    </span>
                  </div>

                  {/* Math */}
                  <div className="p-3.5 rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 border-2 border-indigo-200/90 shadow-2xs space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xl">🔢</span>
                      <span className="text-[10px] font-black bg-indigo-200/80 text-indigo-800 px-1.5 py-0.2 rounded-md">
                        คณิตศาสตร์
                      </span>
                    </div>
                    <span className="text-xl font-black text-indigo-700 block">
                      {mathStars.toLocaleString()} ⭐
                    </span>
                    <span className="text-[10px] text-slate-500 font-bold block">
                      สพฐ. • สอวน. • A-Level
                    </span>
                  </div>

                  {/* English */}
                  <div className="p-3.5 rounded-2xl bg-gradient-to-br from-sky-50 to-cyan-50 border-2 border-sky-200/90 shadow-2xs space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xl">🇬🇧</span>
                      <span className="text-[10px] font-black bg-sky-200/80 text-sky-800 px-1.5 py-0.2 rounded-md">
                        ภาษาอังกฤษ
                      </span>
                    </div>
                    <span className="text-xl font-black text-sky-700 block">
                      {englishStars.toLocaleString()} ⭐
                    </span>
                    <span className="text-[10px] text-slate-500 font-bold block">
                      Oxford 5,000 (B2-C1)
                    </span>
                  </div>

                  {/* Science */}
                  <div className="p-3.5 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200/90 shadow-2xs space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xl">🔬</span>
                      <span className="text-[10px] font-black bg-emerald-200/80 text-emerald-800 px-1.5 py-0.2 rounded-md">
                        วิทยาศาสตร์
                      </span>
                    </div>
                    <span className="text-xl font-black text-emerald-700 block">
                      {scienceStars.toLocaleString()} ⭐
                    </span>
                    <span className="text-[10px] text-slate-500 font-bold block">
                      ตารางธาตุ • ดาราศาสตร์ 3D
                    </span>
                  </div>
                </div>
              </div>

              {/* Progress Graphs Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* 1. Radar Chart (ใยแมงมุม 4 มิติ) */}
                <div className="bg-white rounded-3xl p-4 sm:p-5 border-2 border-indigo-100 shadow-sm flex flex-col items-center justify-between">
                  <div className="w-full flex items-center justify-between border-b border-slate-100 pb-2 mb-2">
                    <div className="flex items-center gap-1.5">
                      <TrendingUp className="w-4 h-4 text-indigo-600" />
                      <h4 className="font-black text-xs sm:text-sm text-slate-800">
                        กราฟวิเคราะห์ความสมดุล 4 วิชา
                      </h4>
                    </div>
                    <span className="text-[10px] font-bold text-slate-400">
                      แผนภูมิเรดาร์ 4 แกน
                    </span>
                  </div>

                  {/* SVG 4-Axis Radar Chart */}
                  <div className="relative py-2">
                    <svg width="240" height="240" className="overflow-visible">
                      <defs>
                        <radialGradient id="radarGlow" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#818cf8" stopOpacity="0.45" />
                          <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.15" />
                        </radialGradient>
                      </defs>

                      {/* Concentric grid circles (25%, 50%, 75%, 100%) */}
                      <circle cx={cx} cy={cy} r={maxR * 0.25} fill="none" stroke="#e2e8f0" strokeDasharray="3 3" />
                      <circle cx={cx} cy={cy} r={maxR * 0.5} fill="none" stroke="#cbd5e1" strokeDasharray="3 3" />
                      <circle cx={cx} cy={cy} r={maxR * 0.75} fill="none" stroke="#cbd5e1" strokeDasharray="3 3" />
                      <circle cx={cx} cy={cy} r={maxR} fill="none" stroke="#94a3b8" strokeWidth="1.5" />

                      {/* 4 Axis Cross Lines */}
                      <line x1={cx} y1={cy - maxR} x2={cx} y2={cy + maxR} stroke="#cbd5e1" strokeWidth="1" />
                      <line x1={cx - maxR} y1={cy} x2={cx + maxR} y2={cy} stroke="#cbd5e1" strokeWidth="1" />

                      {/* Filled Polygon */}
                      <polygon
                        points={radarPolygonPoints}
                        fill="url(#radarGlow)"
                        stroke="#6366f1"
                        strokeWidth="2.5"
                        strokeLinejoin="round"
                        className="transition-all duration-700 animate-scale-in"
                      />

                      {/* Polygon Vertex Points */}
                      <circle cx={ptChinese.x} cy={ptChinese.y} r="4.5" fill="#f43f5e" stroke="#fff" strokeWidth="1.5" />
                      <circle cx={ptMath.x} cy={ptMath.y} r="4.5" fill="#6366f1" stroke="#fff" strokeWidth="1.5" />
                      <circle cx={ptEnglish.x} cy={ptEnglish.y} r="4.5" fill="#0284c7" stroke="#fff" strokeWidth="1.5" />
                      <circle cx={ptScience.x} cy={ptScience.y} r="4.5" fill="#10b981" stroke="#fff" strokeWidth="1.5" />

                      {/* Axis Labels */}
                      <text x={cx} y={cy - maxR - 8} textAnchor="middle" className="text-[10px] font-black fill-rose-600">
                        🇨🇳 จีน ({chineseStars}⭐)
                      </text>
                      <text x={cx + maxR + 8} y={cy + 4} textAnchor="start" className="text-[10px] font-black fill-indigo-600">
                        🔢 คณิต ({mathStars}⭐)
                      </text>
                      <text x={cx} y={cy + maxR + 15} textAnchor="middle" className="text-[10px] font-black fill-sky-600">
                        🇬🇧 อังกฤษ ({englishStars}⭐)
                      </text>
                      <text x={cx - maxR - 8} y={cy + 4} textAnchor="end" className="text-[10px] font-black fill-emerald-600">
                        🔬 วิทย์ ({scienceStars}⭐)
                      </text>
                    </svg>
                  </div>

                  <p className="text-[11px] text-slate-500 font-bold text-center mt-1">
                    ยิ่งพื้นที่ใยแมงมุมกว้างและสมดุล แสดงว่าผู้เรียนมีความรอบรู้ครบทุกด้าน!
                  </p>
                </div>

                {/* 2. Horizontal Progress Meters */}
                <div className="bg-white rounded-3xl p-4 sm:p-5 border-2 border-amber-100 shadow-sm flex flex-col justify-between space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <div className="flex items-center gap-1.5">
                      <Layers className="w-4 h-4 text-amber-500" />
                      <h4 className="font-black text-xs sm:text-sm text-slate-800">
                        แถบความก้าวหน้าสู่เป้าหมาย
                      </h4>
                    </div>
                    <span className="text-[10px] font-bold text-slate-400">
                      เป้าหมาย 500 ⭐
                    </span>
                  </div>

                  <div className="space-y-3 py-1">
                    {/* Chinese Meter */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs font-black">
                        <span className="text-slate-700 flex items-center gap-1">
                          <span>🇨🇳</span>
                          <span>ภาษาจีน</span>
                        </span>
                        <span className="text-rose-600">{chineseStars} / 500 ⭐</span>
                      </div>
                      <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-rose-400 to-rose-600 h-full rounded-full transition-all duration-1000"
                          style={{ width: `${Math.min(100, Math.round((chineseStars / 500) * 100))}%` }}
                        />
                      </div>
                    </div>

                    {/* Math Meter */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs font-black">
                        <span className="text-slate-700 flex items-center gap-1">
                          <span>🔢</span>
                          <span>คณิตศาสตร์</span>
                        </span>
                        <span className="text-indigo-600">{mathStars} / 500 ⭐</span>
                      </div>
                      <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-indigo-400 to-indigo-600 h-full rounded-full transition-all duration-1000"
                          style={{ width: `${Math.min(100, Math.round((mathStars / 500) * 100))}%` }}
                        />
                      </div>
                    </div>

                    {/* English Meter */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs font-black">
                        <span className="text-slate-700 flex items-center gap-1">
                          <span>🇬🇧</span>
                          <span>ภาษาอังกฤษ</span>
                        </span>
                        <span className="text-sky-600">{englishStars} / 500 ⭐</span>
                      </div>
                      <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-sky-400 to-sky-600 h-full rounded-full transition-all duration-1000"
                          style={{ width: `${Math.min(100, Math.round((englishStars / 500) * 100))}%` }}
                        />
                      </div>
                    </div>

                    {/* Science Meter */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs font-black">
                        <span className="text-slate-700 flex items-center gap-1">
                          <span>🔬</span>
                          <span>วิทยาศาสตร์</span>
                        </span>
                        <span className="text-emerald-600">{scienceStars} / 500 ⭐</span>
                      </div>
                      <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-emerald-400 to-emerald-600 h-full rounded-full transition-all duration-1000"
                          style={{ width: `${Math.min(100, Math.round((scienceStars / 500) * 100))}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-50 rounded-2xl p-2.5 border border-amber-200/80 flex items-center gap-2">
                    <span className="text-xl">💡</span>
                    <p className="text-[11px] font-bold text-amber-900 leading-tight">
                      ฝึกทำโจทย์ทุกวันเพื่อเพิ่มคะแนนวิชาที่ยังน้อย ให้เส้นใยแมงมุมขยายกว้างขึ้นนะ!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================
              TAB 2: EDIT PROFILE & AVATAR GALLERY
             ======================================================== */}
          {activeTab === 'edit' && (
            <form onSubmit={handleSaveProfile} className="space-y-5 animate-fade-in">
              {/* Avatar Selector Gallery */}
              <div className="space-y-3">
                <label className="block text-xs font-black text-slate-800">
                  เลือกรูปภาพอวาตาร์ประจำตัว (แตะเพื่อเปลี่ยนรูป):
                </label>

                <div className="space-y-3 bg-slate-50 p-4 rounded-3xl border border-slate-200">
                  {AVATAR_CATEGORIES.map((catGroup) => (
                    <div key={catGroup.category} className="space-y-1.5">
                      <span className="text-[11px] font-black text-slate-500 block">
                        {catGroup.category}
                      </span>
                      <div className="grid grid-cols-5 sm:grid-cols-9 gap-2">
                        {catGroup.avatars.map((av) => {
                          const isSelected = avatar === av;
                          return (
                            <button
                              key={av}
                              type="button"
                              onClick={() => {
                                sfx.playCorrect();
                                setAvatar(av);
                              }}
                              className={`w-11 h-11 rounded-2xl text-2xl flex items-center justify-center transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-amber-400 shadow-md ring-4 ring-amber-300 scale-110'
                                  : 'bg-white hover:bg-slate-200 shadow-xs hover:scale-105'
                              }`}
                            >
                              {av}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Name & Nickname Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-black text-slate-700 mb-1">
                    ชื่อเล่น (ที่เสี่ยวหลงใช้เรียก) *
                  </label>
                  <input
                    type="text"
                    required
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                    placeholder="เช่น ต้นกล้า, มินนี่"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-black focus:outline-none focus:ring-2 focus:ring-rose-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-slate-700 mb-1">
                    ชื่อ-นามสกุล / ชื่อในระบบ
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="เช่น ด.ญ. รักเรียน เก่งกาจ"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-rose-400"
                  />
                </div>
              </div>

              {/* Grade Level Selector */}
              <div>
                <label className="block text-xs font-black text-slate-700 mb-1">
                  ระดับชั้นการศึกษา:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {(Object.keys(GRADE_LABELS) as GradeLevel[]).map((lvl) => (
                    <button
                      key={lvl}
                      type="button"
                      onClick={() => {
                        sfx.playClick();
                        setGradeLevel(lvl);
                      }}
                      className={`px-3 py-2 rounded-xl text-xs font-black text-left transition-all border ${
                        gradeLevel === lvl
                          ? 'bg-rose-50 border-rose-300 text-rose-700 shadow-2xs font-extrabold'
                          : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {GRADE_LABELS[lvl]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Theme Color Selector */}
              <div>
                <label className="block text-xs font-black text-slate-700 mb-1">
                  โทนสีการ์ดโปรไฟล์:
                </label>
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {COLOR_PRESETS.map((c) => (
                    <button
                      key={c.value}
                      type="button"
                      onClick={() => {
                        sfx.playClick();
                        setColor(c.value);
                      }}
                      className={`flex-1 min-w-[70px] py-2 px-2 rounded-xl text-center text-[10px] font-black text-white bg-gradient-to-r ${c.value} transition-all shadow-xs ${
                        color === c.value ? 'ring-4 ring-offset-2 ring-slate-400 scale-105' : 'opacity-80 hover:opacity-100'
                      }`}
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-2xl font-black text-sm shadow-md hover:scale-101 active:scale-98 transition-all flex items-center justify-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{isSaved ? 'บันทึกเรียบร้อยแล้ว! ✓' : 'บันทึกการเปลี่ยนแปลง'}</span>
                </button>
              </div>
            </form>
          )}

          {/* ========================================================
              TAB 3: USER ACCOUNT & CLOUD SYNC
             ======================================================== */}
          {activeTab === 'account' && (
            <div className="space-y-5 animate-fade-in">
              {cloudUser ? (
                <div className="space-y-4">
                  {/* Account Badge */}
                  <div className="p-4 rounded-3xl bg-sky-50 border-2 border-sky-200 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-10 h-10 rounded-2xl bg-sky-500 text-white flex items-center justify-center font-black text-lg shadow-sm">
                          {(cloudUser.email || 'U')[0].toUpperCase()}
                        </div>
                        <div>
                          <span className="font-black text-sm text-slate-800 block">
                            {cloudUser.displayName || (cloudUser.email ? cloudUser.email.split('@')[0] : 'ผู้เรียน')}
                          </span>
                          <span className="text-xs text-slate-500 font-bold block">
                            {cloudUser.email || 'บัญชีผู้ใช้งาน'}
                          </span>
                        </div>
                      </div>

                      <span className="text-[11px] font-black bg-sky-100 text-sky-700 px-2.5 py-1 rounded-full">
                        {cloudUser.provider === 'google' ? 'Google Account' : 'Email Account'}
                      </span>
                    </div>

                    <div className="border-t border-sky-100 pt-2 flex items-center justify-between text-xs font-bold text-slate-600">
                      <span>สถานะการเชื่อมต่อ:</span>
                      <span className="flex items-center gap-1.5 font-black text-emerald-600">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        เชื่อมต่อระบบคลาวด์แยกบัญชี
                      </span>
                    </div>
                  </div>

                  {/* Sync Control Actions */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      onClick={async () => {
                        sfx.playClick();
                        const ok = await syncManager.syncNow();
                        if (ok) {
                          sfx.playCorrect();
                          confetti({ particleCount: 40, spread: 60 });
                        }
                      }}
                      className="py-3 px-4 bg-white border-2 border-slate-200 hover:border-emerald-400 rounded-2xl text-xs font-black text-slate-700 flex items-center justify-center gap-2 hover:bg-emerald-50 transition-all shadow-xs"
                    >
                      <RefreshCw className="w-4 h-4 text-emerald-600" />
                      <span>บันทึกคะแนนขึ้นคลาวด์ทันที</span>
                    </button>

                    <button
                      onClick={async () => {
                        sfx.playClick();
                        if (cloudUser.uid) {
                          const ok = await syncManager.restoreFromCloud(cloudUser.uid);
                          if (ok) {
                            sfx.playCorrect();
                            confetti({ particleCount: 50, spread: 70 });
                            alert('กู้คืนคะแนนล่าสุดจากคลาวด์เรียบร้อยแล้ว!');
                          }
                        }
                      }}
                      className="py-3 px-4 bg-white border-2 border-slate-200 hover:border-sky-400 rounded-2xl text-xs font-black text-slate-700 flex items-center justify-center gap-2 hover:bg-sky-50 transition-all shadow-xs"
                    >
                      <Cloud className="w-4 h-4 text-sky-600" />
                      <span>กู้คืนคะแนนจากคลาวด์</span>
                    </button>
                  </div>

                  {/* Sign Out Button */}
                  <div className="pt-2">
                    <button
                      onClick={handleSignOut}
                      className="w-full py-2.5 px-4 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 rounded-2xl text-xs font-black flex items-center justify-center gap-2 transition-all"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>ออกจากระบบ (สลับบัญชีผู้เรียนคนอื่น)</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-6 px-4 bg-gradient-to-b from-sky-50 to-indigo-50 border-2 border-sky-200 rounded-3xl space-y-4">
                  <div className="w-16 h-16 rounded-full bg-white text-3xl flex items-center justify-center mx-auto shadow-md">
                    ☁️
                  </div>
                  <div>
                    <h4 className="text-base font-black text-slate-800">
                      เข้าสู่ระบบเพื่อบันทึกคะแนนส่วนตัว
                    </h4>
                    <p className="text-xs text-slate-600 max-w-md mx-auto mt-1 leading-relaxed">
                      สร้างบัญชีผู้เรียนของคุณ เพื่อบันทึกคะแนน 4 วิชา สัตว์เลี้ยง และดูกราฟวิเคราะห์ความก้าวหน้า ไม่ว่าจะเปิดบนเครื่องไหน หรือ iPad เครื่องใด คะแนนก็จะตามคุณไปทุกที่!
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      sfx.playClick();
                      onClose();
                      onOpenAuthModal?.();
                    }}
                    className="px-6 py-3 bg-gradient-to-r from-sky-500 to-indigo-600 text-white rounded-2xl text-xs font-black shadow-md hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-2"
                  >
                    <Sparkles className="w-4 h-4 text-yellow-300" />
                    <span>เข้าสู่ระบบ / สร้างบัญชีนักเรียน (ฟรี)</span>
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
