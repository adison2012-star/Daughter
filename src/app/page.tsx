'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PortalHeader } from '@/components/PortalHeader';
import {
  getStoredProfiles,
  getActiveProfileId,
  setActiveProfileId,
  DEFAULT_PROFILES,
  feedActivePet,
  switchActivePetType,
  getCloudUser,
} from '@/lib/storage';
import { UserProfile, PetType, SubjectType, CloudUser } from '@/types';
import { PET_CATALOG, calculatePetProgress, getPetGrowthImage } from '@/lib/petSystem';
import { PetModal } from '@/components/PetModal';
import { RewardShopModal } from '@/components/RewardShopModal';
import { ProfileManagerModal } from '@/components/ProfileManagerModal';
import { AuthModal } from '@/components/AuthModal';
import { sfx } from '@/lib/speech';
import {
  ArrowRight,
  Star,
  Flame,
  Gift,
  Trophy,
  ChevronRight,
  Sparkles,
  BarChart3,
} from 'lucide-react';

interface SubjectGuideCard {
  id: string;
  title: string;
  enTitle: string;
  badge: string;
  href: string;
  imageSrc: string;
  accentColor: string;
  btnBg: string;
  cardBg: string;
}

const SUBJECT_GUIDES: SubjectGuideCard[] = [
  {
    id: 'chinese',
    title: 'ภาษาจีน',
    enTitle: 'ZhongWen Duo',
    badge: 'HSK 1–6 (5,400 คำ)',
    href: '/chinese',
    imageSrc: '/images/xiaolong/chinese.png',
    accentColor: 'text-rose-600',
    btnBg: 'btn-pixar-rose bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600',
    cardBg: 'hover:border-rose-400/80 hover:shadow-rose-100/60',
  },
  {
    id: 'math',
    title: 'คณิตศาสตร์',
    enTitle: 'Math Magic',
    badge: 'ประถม ➔ มหาลัย',
    href: '/math',
    imageSrc: '/images/xiaolong/math.png',
    accentColor: 'text-amber-600',
    btnBg: 'btn-pixar-amber bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600',
    cardBg: 'hover:border-amber-400/80 hover:shadow-amber-100/60',
  },
  {
    id: 'english',
    title: 'ภาษาอังกฤษ',
    enTitle: 'English Safari',
    badge: 'Oxford 5,000+ & โฟนิกส์',
    href: '/english',
    imageSrc: '/images/xiaolong/english.png',
    accentColor: 'text-blue-600',
    btnBg: 'btn-pixar-blue bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700',
    cardBg: 'hover:border-blue-400/80 hover:shadow-blue-100/60',
  },
  {
    id: 'science',
    title: 'วิทยาศาสตร์',
    enTitle: 'Science Explorer',
    badge: 'ระบบสุริยะ 3D & อวัยวะ',
    href: '/science',
    imageSrc: '/images/xiaolong/science.png',
    accentColor: 'text-teal-600',
    btnBg: 'btn-pixar-teal bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700',
    cardBg: 'hover:border-teal-400/80 hover:shadow-teal-100/60',
  },
];

export default function CentralPortal() {
  const [profiles, setProfiles] = useState<UserProfile[]>(DEFAULT_PROFILES);
  const [activeProfileId, setActiveId] = useState<string>(DEFAULT_PROFILES[0].id);
  const [isPetModalOpen, setIsPetModalOpen] = useState(false);
  const [isRewardShopOpen, setIsRewardShopOpen] = useState(false);
  const [isProfileManagerOpen, setIsProfileManagerOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [cloudUser, setCloudUser] = useState<CloudUser | null>(null);

  useEffect(() => {
    const loaded = getStoredProfiles();
    const active = getActiveProfileId();
    const user = getCloudUser();
    if (loaded && loaded.length > 0) setProfiles(loaded);
    if (active) setActiveId(active);
    if (user) setCloudUser(user);
  }, []);

  const activeProfile = profiles.find((p) => p.id === activeProfileId) || profiles[0] || DEFAULT_PROFILES[0];
  const activePetType: PetType = (activeProfile?.activePetType || activeProfile?.pet?.type || 'dragon') as PetType;
  const activeDef = PET_CATALOG[activePetType] || PET_CATALOG.dragon;
  const activePetData = activeProfile?.pets?.[activePetType] || activeProfile?.pet || {
    name: activeDef?.name || 'เสี่ยวหลง',
    type: activePetType,
    level: 1,
    totalStarsFed: 0,
    stage: 1,
    happiness: 90,
    experience: 0,
  };
  const totalStarsFed = typeof activePetData?.totalStarsFed === 'number'
    ? activePetData.totalStarsFed
    : (typeof activePetData?.experience === 'number' ? activePetData.experience : 0);
  const progress = calculatePetProgress(activePetType, totalStarsFed);

  const handleSwitchProfile = (id: string) => {
    setActiveId(id);
    setActiveProfileId(id);
  };

  const handleFeedStars = (amount: number, fromSubject?: SubjectType) => {
    const res = feedActivePet(amount, fromSubject);
    setProfiles((prev) =>
      prev.map((p) => (p.id === res.updatedProfile.id ? res.updatedProfile : p))
    );
    return res;
  };

  const handleSwitchPetType = (type: PetType) => {
    sfx.playCorrect();
    const updated = switchActivePetType(type);
    setProfiles((prev) =>
      prev.map((p) => (p.id === updated.id ? updated : p))
    );
  };

  return (
    <div className="min-h-screen text-slate-800 pb-28">
      {/* Top Header */}
      <PortalHeader
        activeProfile={activeProfile}
        profiles={profiles}
        onSwitchProfile={handleSwitchProfile}
        title="Duo Wonder"
        subtitle={`เสี่ยวหลงชวน ${activeProfile.nickname || activeProfile.name} เรียนรู้`}
        showBackToPortal={false}
        currentSubject="portal"
        onOpenPetSanctuary={() => setIsPetModalOpen(true)}
        onOpenRewardShop={() => setIsRewardShopOpen(true)}
        onOpenProfileManager={() => setIsProfileManagerOpen(true)}
        onOpenAuthModal={() => setIsAuthModalOpen(true)}
        cloudUser={cloudUser}
      />

      {/* Ambient Glassmorphic Glow Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-200/40 rounded-full blur-3xl" />
        <div className="absolute top-1/4 -right-24 w-96 h-96 bg-rose-200/35 rounded-full blur-3xl" />
        <div className="absolute top-2/3 -left-20 w-96 h-96 bg-sky-200/35 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 right-1/4 w-96 h-96 bg-teal-200/35 rounded-full blur-3xl" />
      </div>

      <main className="max-w-4xl mx-auto px-4 pt-6 space-y-6 relative z-10">
        {/* ========================================================
            1. GREETING & STATS (Clean Instagram Kids App Style)
           ======================================================== */}
        <section className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-2">
              <span>สวัสดีจ้า, {activeProfile.nickname || activeProfile.name}!</span>
              <span className="text-2xl sm:text-3xl">👋</span>
            </h2>
            <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-0.5">
              วันนี้พร้อมฝึกฝน 4 วิชากับเสี่ยวหลงหรือยังเอ่ย?
            </p>
          </div>

          {/* Clean Rounded Stat Box */}
          <div className="flex items-center glass-pill px-4 py-2 shadow-xs gap-4 text-xs font-black">
            <div className="flex items-center gap-1.5 text-amber-600">
              <span className="text-base">⭐</span>
              <div>
                <span className="block text-sm leading-none font-black text-slate-800">
                  {(activeProfile?.stars ?? 0).toLocaleString()}
                </span>
                <span className="text-[10px] text-slate-400 font-bold">ดาวสะสม</span>
              </div>
            </div>

            <div className="w-px h-6 bg-slate-200/70" />

            <div className="flex items-center gap-1.5 text-rose-500">
              <span className="text-base">🔥</span>
              <div>
                <span className="block text-sm leading-none font-black text-slate-800">
                  {activeProfile.streak} วัน
                </span>
                <span className="text-[10px] text-slate-400 font-bold">ต่อเนื่อง</span>
              </div>
            </div>

            <div className="w-px h-6 bg-slate-200/70" />

            <div className="flex items-center gap-1.5 text-teal-600">
              <span className="text-base">🐾</span>
              <div>
                <span className="block text-sm leading-none font-black text-slate-800">
                  Lv.{progress.currentLevel}
                </span>
                <span className="text-[10px] text-slate-400 font-bold">เสี่ยวหลง</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            2. HERO FEATURE CARD (Like Letter A + Apple in Reference)
           ======================================================== */}
        <section className="kids-card p-6 sm:p-7 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-3 max-w-md text-center md:text-left z-10">
            <span className="inline-block bg-amber-100/90 text-amber-900 border border-amber-300/80 text-[11px] font-black px-3 py-1 rounded-full shadow-2xs">
              ✨ ผจญภัยการเรียนรู้ 4 วิชา
            </span>

            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-snug tracking-tight">
              เรียนรู้สนุกกับเสี่ยวหลง
              <br />
              <span className="text-amber-500">สะสมดาว เลี้ยงสัตว์ อวดเพื่อนๆ</span>
            </h3>

            <p className="text-xs font-semibold text-slate-500">
              ฝึกเขียนจีน • คิดเลขเร็ว • สะกดคำภาษาอังกฤษ • ท่องอวกาศ 3D
            </p>

            <div className="pt-2 flex items-center justify-center md:justify-start gap-3">
              <a
                href="#subjects-section"
                onClick={() => sfx.playCorrect()}
                className="w-11 h-11 rounded-full bg-teal-600 hover:bg-teal-700 text-white flex items-center justify-center shadow-md shadow-teal-600/20 hover:scale-105 active:scale-95 transition-all"
                title="เลื่อนดูวิชาทั้งหมด"
              >
                <ArrowRight className="w-5 h-5" />
              </a>
              <span className="text-xs font-black text-teal-700">
                เลือกบทเรียนด้านล่างเลย ➔
              </span>
            </div>

            {/* Carousel Dots */}
            <div className="flex items-center justify-center md:justify-start gap-1.5 pt-2">
              <span className="w-5 h-2 rounded-full bg-teal-600" />
              <span className="w-2 h-2 rounded-full bg-slate-200" />
              <span className="w-2 h-2 rounded-full bg-slate-200" />
              <span className="w-2 h-2 rounded-full bg-slate-200" />
            </div>
          </div>

          {/* Xiao Long 3D Mascot Illustration */}
          <div className="relative w-48 sm:w-56 h-48 sm:h-56 flex-shrink-0 animate-soft-bounce z-10">
            <Image
              src="/images/xiaolong/welcome.png"
              alt="Xiao Long Welcoming"
              fill
              className="object-contain drop-shadow-xl"
              priority
            />
          </div>
        </section>

        {/* ========================================================
            3. THE 4 SUBJECTS (With Xiao Long in each subject!)
           ======================================================== */}
        <section id="subjects-section" className="space-y-4">
          <div className="flex items-center justify-between px-1">
            <div>
              <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                เลือกห้องเรียน 4 หมวดวิชา
              </h3>
              <p className="text-xs text-slate-400 font-bold">
                เสี่ยวหลงจะพาน้องๆ ไปฝึกฝนทีละวิชา
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SUBJECT_GUIDES.map((sub) => (
              <div
                key={sub.id}
                className={`kids-card p-5 transition-all hover:shadow-lg flex flex-col justify-between gap-4 border border-white/90 ${sub.cardBg}`}
              >
                <Link
                  href={sub.href}
                  onClick={() => sfx.playCorrect()}
                  className="flex items-center justify-between gap-4 group cursor-pointer"
                >
                  {/* Xiao Long Subject Custom Mascot */}
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0">
                    <Image
                      src={sub.imageSrc}
                      alt={sub.title}
                      fill
                      className="object-contain drop-shadow-md group-hover:scale-105 transition-transform"
                    />
                  </div>

                  {/* Subject Info */}
                  <div className="flex-1 space-y-1">
                    <span className="inline-block text-[10px] font-black bg-slate-100/90 text-slate-700 px-2.5 py-0.5 rounded-full border border-slate-200/80">
                      {sub.badge}
                    </span>
                    <h4 className="text-xl font-black text-slate-900 leading-tight group-hover:text-amber-600 transition-colors">
                      {sub.title}
                    </h4>
                    <p className="text-xs font-bold text-slate-400">
                      {sub.enTitle}
                    </p>
                    <p className={`text-xs font-black ${sub.accentColor} pt-1`}>
                      ⭐ {(activeProfile.subjectStars?.[sub.id as SubjectType] || 0).toLocaleString()} ดาว
                    </p>
                  </div>
                </Link>

                {/* Bottom Action Button (Explicit contrast & prominent) */}
                <div className="pt-3 border-t border-slate-100/80 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-400 flex items-center gap-1">
                    <span>ติวเตอร์:</span>
                    <span className="text-slate-700 font-black">เสี่ยวหลง</span>
                  </span>
                  <Link
                    href={sub.href}
                    onClick={() => sfx.playCorrect()}
                    className={`btn-pixar ${sub.btnBg} px-5 py-2.5 rounded-2xl text-xs font-black shadow-md flex items-center gap-1.5 transition-all active:scale-95`}
                  >
                    <span className="text-white drop-shadow-xs">เริ่มเรียน</span>
                    <ArrowRight className="w-4 h-4 text-white stroke-[2.5]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================
            4. PET SANCTUARY CARD (Xiao Long Growth Showcase)
           ======================================================== */}
        <section className="kids-card p-6 relative overflow-hidden mt-8 border border-white/90 shadow-md">
          {/* Active Pet Growth Artwork */}
          <div className="absolute right-3 -top-6 w-32 sm:w-40 h-32 sm:h-40 z-10 pointer-events-none">
            <Image
              src={
                getPetGrowthImage(activePetType, progress.currentLevel) ||
                '/images/xiaolong/peeking.png'
              }
              alt="Active Pet"
              fill
              className="object-contain drop-shadow-md animate-float"
            />
          </div>

          <div className="relative z-10 max-w-md space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-black bg-[#EBF2E8] text-[#54754B] px-2.5 py-0.5 rounded-full border border-[#D5E3D2]">
                🌿 ศาลเจ้าสัตว์เลี้ยง
              </span>
              <span className="text-xs font-black text-slate-800">
                Level {progress.currentLevel} / 100 • {progress.stageDef.title}
              </span>
            </div>

            <h3 className="text-xl font-black text-slate-900">
              เลี้ยง{activeDef.name}
            </h3>

            {/* Smooth Progress Bar */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-bold text-slate-500">
                <span>สู่ Level {Math.min(100, progress.currentLevel + 1)}</span>
                <span className="text-[#6A8D60] font-black">{Math.round(progress.levelPercent)}%</span>
              </div>
              <div className="h-3 bg-slate-100/80 rounded-full overflow-hidden p-0.5 border border-slate-200/70">
                <div
                  className="h-full bg-gradient-to-r from-[#6A8D60] to-emerald-400 rounded-full transition-all duration-500"
                  style={{ width: `${Math.max(5, progress.levelPercent)}%` }}
                />
              </div>
              <div className="text-[11px] text-slate-400 font-bold text-right">
                กินดาวแล้ว: {totalStarsFed.toLocaleString()} / 1,000,000 ⭐
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <button
                onClick={() => {
                  sfx.playCorrect();
                  setIsPetModalOpen(true);
                }}
                className="btn-pixar bg-[#6A8D60] hover:bg-[#57774E] px-4 py-2 rounded-2xl text-xs font-black text-white shadow-xs flex items-center gap-1.5 transition-all active:scale-95"
              >
                <span>ให้อาหารสัตว์เลี้ยง 🌿</span>
              </button>

              <button
                onClick={() => {
                  sfx.playCorrect();
                  setIsRewardShopOpen(true);
                }}
                className="btn-pixar btn-pixar-rose px-4 py-2 rounded-2xl text-xs font-black text-white shadow-xs flex items-center gap-1.5"
              >
                <Gift className="w-3.5 h-3.5" />
                <span>แลกของรางวัล 🎁</span>
              </button>
            </div>
          </div>
        </section>

        {/* ========================================================
            5. LEARNING ANALYTICS & PROGRESS OVERVIEW (Universal Multi-User)
           ======================================================== */}
        <section className="kids-card p-5 sm:p-6 border border-white/90 shadow-md space-y-4 bg-gradient-to-br from-white/90 via-indigo-50/30 to-amber-50/30">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-600 text-white flex items-center justify-center text-xl shadow-md">
                📊
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-black text-slate-800 flex items-center gap-2">
                  <span>แดชบอร์ดความก้าวหน้า 4 วิชา</span>
                  <span className="text-[10px] bg-indigo-100 text-indigo-700 font-bold px-2 py-0.5 rounded-full">
                    {activeProfile.nickname || activeProfile.name}
                  </span>
                </h4>
                <p className="text-xs text-slate-500 font-bold">
                  สะสมดาวรวม {(activeProfile.stars || 0).toLocaleString()} ⭐ • สตรีค {activeProfile.streak} วัน
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                sfx.playCorrect();
                setIsProfileManagerOpen(true);
              }}
              className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-2xl text-xs font-black transition-all flex items-center justify-center gap-1.5 shadow-md hover:scale-102 active:scale-98"
            >
              <BarChart3 className="w-4 h-4 text-yellow-300" />
              <span>ดูกราฟเรดาร์ & จัดการโปรไฟล์ ➔</span>
            </button>
          </div>

          {/* 4 Mini Subject Progress Indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
            <div className="bg-white/80 border border-rose-200/80 rounded-2xl p-2.5 flex items-center justify-between shadow-2xs">
              <span className="text-xs font-black text-slate-700 flex items-center gap-1">
                <span>🇨🇳</span>
                <span>จีน</span>
              </span>
              <span className="text-xs font-black text-rose-600">
                {(activeProfile.subjectStars?.chinese || 0).toLocaleString()} ⭐
              </span>
            </div>

            <div className="bg-white/80 border border-indigo-200/80 rounded-2xl p-2.5 flex items-center justify-between shadow-2xs">
              <span className="text-xs font-black text-slate-700 flex items-center gap-1">
                <span>🔢</span>
                <span>คณิต</span>
              </span>
              <span className="text-xs font-black text-indigo-600">
                {(activeProfile.subjectStars?.math || 0).toLocaleString()} ⭐
              </span>
            </div>

            <div className="bg-white/80 border border-sky-200/80 rounded-2xl p-2.5 flex items-center justify-between shadow-2xs">
              <span className="text-xs font-black text-slate-700 flex items-center gap-1">
                <span>🇬🇧</span>
                <span>อังกฤษ</span>
              </span>
              <span className="text-xs font-black text-sky-600">
                {(activeProfile.subjectStars?.english || 0).toLocaleString()} ⭐
              </span>
            </div>

            <div className="bg-white/80 border border-emerald-200/80 rounded-2xl p-2.5 flex items-center justify-between shadow-2xs">
              <span className="text-xs font-black text-slate-700 flex items-center gap-1">
                <span>🔬</span>
                <span>วิทย์</span>
              </span>
              <span className="text-xs font-black text-emerald-600">
                {(activeProfile.subjectStars?.science || 0).toLocaleString()} ⭐
              </span>
            </div>
          </div>
        </section>
      </main>

      {/* ========================================================
          6. FLOATING BOTTOM BAR (Clean Mobile Navigation)
         ======================================================== */}
      <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-40 glass-dock rounded-full py-2 px-6 flex items-center gap-6 sm:gap-8 select-none">
        <Link
          href="/"
          className="flex flex-col items-center gap-0.5 text-slate-900 font-black text-[10px] group"
        >
          <span className="text-lg group-hover:scale-115 transition-transform">🏠</span>
          <span>หน้าแรก</span>
        </Link>

        <button
          onClick={() => {
            sfx.playCorrect();
            setIsPetModalOpen(true);
          }}
          className="flex flex-col items-center gap-0.5 text-slate-400 hover:text-slate-800 font-black text-[10px] group"
        >
          <span className="text-lg group-hover:scale-115 transition-transform">🐾</span>
          <span>เสี่ยวหลง</span>
        </button>

        <button
          onClick={() => {
            sfx.playCorrect();
            setIsRewardShopOpen(true);
          }}
          className="flex flex-col items-center gap-0.5 text-slate-400 hover:text-slate-800 font-black text-[10px] group"
        >
          <span className="text-lg group-hover:scale-115 transition-transform">🎁</span>
          <span>ของรางวัล</span>
        </button>

        <button
          onClick={() => {
            sfx.playClick();
            setIsProfileManagerOpen(true);
          }}
          className="flex flex-col items-center gap-0.5 text-slate-400 hover:text-slate-800 font-black text-[10px] group"
        >
          <span className="text-lg group-hover:scale-115 transition-transform">👤</span>
          <span>โปรไฟล์ & กราฟ</span>
        </button>
      </div>

      {/* Universal Modals */}
      <PetModal
        isOpen={isPetModalOpen}
        onClose={() => setIsPetModalOpen(false)}
        activeProfile={activeProfile}
        profiles={profiles}
        onFeedStars={handleFeedStars}
        onSwitchPetType={handleSwitchPetType}
        onSwitchProfile={handleSwitchProfile}
      />

      <RewardShopModal
        isOpen={isRewardShopOpen}
        onClose={() => setIsRewardShopOpen(false)}
        activeProfile={activeProfile}
        profiles={profiles}
        onProfileUpdated={(updated: UserProfile) => {
          setProfiles((prev) =>
            prev.map((p) => (p.id === updated.id ? updated : p))
          );
        }}
      />

      <ProfileManagerModal
        isOpen={isProfileManagerOpen}
        onClose={() => setIsProfileManagerOpen(false)}
        activeProfile={activeProfile}
        profiles={profiles}
        cloudUser={cloudUser}
        onOpenAuthModal={() => setIsAuthModalOpen(true)}
        onProfilesChanged={(newProfiles: UserProfile[], newActiveId: string) => {
          setProfiles(newProfiles);
          setActiveId(newActiveId);
          setActiveProfileId(newActiveId);
        }}
      />

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onDataRestored={() => {
          const loaded = getStoredProfiles();
          if (loaded && loaded.length > 0) setProfiles(loaded);
          const active = getActiveProfileId();
          if (active) setActiveId(active);
          const user = getCloudUser();
          setCloudUser(user);
        }}
      />
    </div>
  );
}
