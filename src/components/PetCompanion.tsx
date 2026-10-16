'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { UserProfile, PetType, SubjectType } from '@/types';
import {
  PET_CATALOG,
  calculatePetProgress,
  MAX_PET_LEVEL,
  MAX_STARS_FED,
  getPetGrowthImage,
  getPetStageDef,
} from '@/lib/petSystem';
import { PetAvatar3D } from '@/components/PetAvatar3D';
import { sfx } from '@/lib/speech';
import confetti from 'canvas-confetti';
import {
  Sparkles,
  Trophy,
  Heart,
  Crown,
  Flame,
  ArrowRight,
  RefreshCw,
  Users,
  Compass,
  Star,
  Swords,
  Info,
  CheckCircle2,
  Lock,
  Eye,
  Smile,
  Shield,
  Zap,
} from 'lucide-react';

interface PetCompanionProps {
  activeProfile: UserProfile;
  profiles: UserProfile[];
  onFeedStars: (amount: number, fromSubject?: SubjectType) => { leveledUp: boolean; newLevel: number; actualFed: number };
  onSwitchPetType: (type: PetType) => void;
  onSwitchProfile?: (profileId: string) => void;
  embeddedMode?: boolean;
  initialSubject?: SubjectType;
}

export const PetCompanion: React.FC<PetCompanionProps> = ({
  activeProfile,
  profiles,
  onFeedStars,
  onSwitchPetType,
  onSwitchProfile,
  embeddedMode = true,
  initialSubject,
}) => {
  const activePetType = activeProfile.activePetType || activeProfile.pet?.type || 'dragon';
  const activeDef = PET_CATALOG[activePetType] || PET_CATALOG.dragon;
  const activePetData = activeProfile.pets?.[activePetType] || activeProfile.pet;
  const progress = calculatePetProgress(activePetType, activePetData.totalStarsFed || 0);

  const [selectedSubjectWallet, setSelectedSubjectWallet] = useState<SubjectType | 'all'>(
    initialSubject || 'all'
  );
  const [isFeedingAnimation, setIsFeedingAnimation] = useState(false);
  const [speechMessage, setSpeechMessage] = useState<string>('');
  const [previewStageIndex, setPreviewStageIndex] = useState<number | null>(null);
  const [showEvolutionCloset, setShowEvolutionCloset] = useState(true);

  // Sibling stats for showdown
  const sister1 = profiles.find((p) => p.id === 'sister-1') || profiles[0];
  const sister2 = profiles.find((p) => p.id === 'sister-2') || profiles[1] || profiles[0];

  const s1ActivePet = sister1?.pets?.[sister1?.activePetType || sister1?.pet?.type || 'dragon'] || sister1?.pet;
  const s2ActivePet = sister2?.pets?.[sister2?.activePetType || sister2?.pet?.type || 'panda'] || sister2?.pet;

  const s1Level = s1ActivePet?.level || 1;
  const s2Level = s2ActivePet?.level || 1;
  const s1Fed = s1ActivePet?.totalStarsFed || 0;
  const s2Fed = s2ActivePet?.totalStarsFed || 0;

  const levelDifference = Math.abs(s1Level - s2Level);
  const isS1Leading = s1Level > s2Level;
  const isS2Leading = s2Level > s1Level;
  const isTie = s1Level === s2Level;

  const availableStarsInWallet =
    selectedSubjectWallet === 'all'
      ? activeProfile.stars || 0
      : activeProfile.subjectStars?.[selectedSubjectWallet] || 0;

  // Evolution stages of currently active pet
  const petStages = activeDef.stages;
  const previewStage =
    previewStageIndex !== null ? petStages[previewStageIndex] : progress.stageDef;

  const handleFeed = (amount: number) => {
    if (availableStarsInWallet <= 0) {
      sfx.playSoftTryAgain();
      setSpeechMessage(
        selectedSubjectWallet === 'all'
          ? 'ดาวหมดแล้วจ้า! ไปทำโจทย์ 4 วิชาเพื่อเก็บดาวมาป้อนใหม่นะ!'
          : 'ดาวในวิชานี้หมดแล้วจ้า! ลองเลือกกระเป๋าวิชาอื่นดูนะ!'
      );
      return;
    }

    setIsFeedingAnimation(true);
    setPreviewStageIndex(null); // return to actual stage on feed

    const result = onFeedStars(
      amount,
      selectedSubjectWallet === 'all' ? undefined : selectedSubjectWallet
    );

    if (result.actualFed > 0) {
      if (result.leveledUp) {
        sfx.playStarFanfare();
        confetti({
          particleCount: 90,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#769772', '#E9B44C', '#D4A373', '#F43F5E', '#38BDF8'],
        });
        setSpeechMessage(
          `🎉 ไชโย! ${activeDef.name} เลเวลอัปเป็น Level ${result.newLevel} แล้ว! ร่างกายแข็งแกร่งขึ้นอีกขั้น!`
        );
      } else {
        sfx.playCorrect();
        const quotes = activeDef.voiceQuotes;
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        setSpeechMessage(randomQuote);
      }
    }

    setTimeout(() => {
      setIsFeedingAnimation(false);
    }, 1200);
  };

  const handlePetAction = () => {
    sfx.playCorrect();
    confetti({
      particleCount: 25,
      spread: 45,
      origin: { y: 0.5 },
      colors: ['#F472B6', '#FBBF24', '#34D399', '#38BDF8'],
    });
    const petQuotes =
      activePetType === 'dragon'
        ? [
            'ฮือออ สบายจังเลย~ ขอบคุณที่ลูบหัวข้านะเด็กดี!',
            'เสี่ยวหลงชอบให้น้องลูบหัวที่สุดเลย! หัวใจฟูฟ่อง~',
            'ลูบหัวแล้วมีพลังฮึดสู้ท่องศัพท์จีนต่อได้ทั้งวันเลย!',
            'คิคิ จั๊กจี้จัง! ข้าพร้อมผจญภัยไปกับเจ้าเสมอ!',
          ]
        : activePetType === 'jellyfish'
        ? [
            'ดุ๊กดิ๊กๆ~ ขอบคุณที่ลูบหัวเจลลี่นะ สบายตัวจังเลย!',
            'ฟองสบู่แห่งความรักลอยเต็มหัวใจเจลลี่แล้ว~ ✨',
            'เจลลี่เรืองแสงสีชมพูเพราะน้องลูบหัวเลยนะ น่ารักที่สุด!',
            'มีพลังว่ายน้ำลุยทำแบบฝึกหัดต่อแล้ว สู้ๆ ไปด้วยกันนะ!',
          ]
        : activePetType === 'panda'
        ? [
            'งั่มๆ~ ลูบหัวเป่าเปาแล้วรู้สึกอารมณ์ดีเหมือนได้กินหน่อไม้ดาวเลย!',
            'ฮึ้บ! เป่าเปาพลังกังฟูเพิ่มขึ้น 100 เท่า พร้อมลุยทุกวิชาแล้ว!',
            'ขนเป่าเปานุ่มฟูไหม? ขอบคุณที่คอยดูแลและให้กำลังใจกันนะ!',
            'หมัดแพนด้าน้อยพร้อมปกป้องเพื่อนๆ ทุกคนในยุทธภพแล้ว!',
          ]
        : activePetType === 'hippo'
        ? [
            'ฟิ้ววว~ ลูบหัวซูก้าแล้วขนนุ่มปุยสบายตัวที่สุดเลย!',
            'ชูก้าน้อยกางปีกร่อนเวหา หัวใจพองฟูเพราะความรักของน้อง!',
            'พลังสายลมและดวงดาวในตัวซูก้าลุกโชน พร้อมบินท่องโลกความรู้แล้ว!',
            'คิคิ จั๊กจี้หางปุยจัง! ซูก้าจะบินเคียงข้างน้องๆ ตลอดไปเลยนะ!',
          ]
        : [
            `ขอบคุณที่ลูบหัว${activeDef.name}นะ สบายใจจังเลย!`,
            `มีพลังเต็มเปี่ยมแล้ว พร้อมเรียนรู้ไปด้วยกันเสมอ!`,
          ];
    setSpeechMessage(petQuotes[Math.floor(Math.random() * petQuotes.length)]);
  };

  const handleAdoptPet = (type: PetType) => {
    sfx.playCorrect();
    onSwitchPetType(type);
    setPreviewStageIndex(null);
    const targetLvl = activeProfile.pets?.[type]?.level || 1;
    setSpeechMessage(
      `ยินดีที่ได้ร่วมผจญภัยด้วยกันนะ! ตอนนี้ข้าอยู่ที่ Level ${targetLvl} มาป้อนดาวให้ถึง Level 100 กัน!`
    );
  };

  // Donut progress calculation for SVG
  const radius = 48;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (progress.levelPercent / 100) * circumference;

  return (
    <div className="space-y-6 max-w-4xl mx-auto font-sans">
      {/* ========================================================
          1. TOP GREETING & PROFILE CAPSULE (Pinterest mema style)
         ======================================================== */}
      <section className="bg-[#FAF7F2] border border-[#EAE5DB] rounded-3xl p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xl">🌿</span>
            <span className="text-[11px] font-black uppercase tracking-wider text-[#6A8D60] bg-[#EBF2E8] px-2.5 py-0.5 rounded-full">
              Pet Sanctuary & Evolution
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight mt-1">
            ศาลเจ้าสัตว์เลี้ยงของ {activeProfile.nickname || activeProfile.name}
          </h2>
          <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-0.5">
            ป้อนคะแนนดาวจาก 4 วิชา เพื่อพัฒนา {activeDef.name} สู่ร่างมหาเทพ Level 100
          </p>
        </div>

        {/* Right Action Pills: Profile Switcher & Total Star Purse */}
        <div className="flex flex-wrap items-center gap-2.5">
          {profiles.length > 1 && (
            <div className="flex items-center bg-white border border-[#EAE5DB] rounded-2xl p-1 shadow-2xs">
              {profiles.map((p) => {
                const isCur = p.id === activeProfile.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => {
                      if (!isCur) {
                        sfx.playCorrect();
                        onSwitchProfile?.(p.id);
                      }
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 ${
                      isCur
                        ? 'bg-[#6A8D60] text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    <span>{p.avatar}</span>
                    <span>{p.nickname || p.name}</span>
                  </button>
                );
              })}
            </div>
          )}

          {/* Star Wallet Pill */}
          <div className="flex items-center gap-2 bg-[#FFF9E6] border border-[#F3DF95] px-3.5 py-1.5 rounded-2xl shadow-2xs">
            <Star className="w-4 h-4 text-amber-500 fill-amber-400" />
            <div>
              <span className="text-[10px] font-bold text-amber-800/80 block leading-tight">
                ดาวสะสมรวม
              </span>
              <span className="text-sm font-black text-amber-950">
                {activeProfile.stars.toLocaleString()} ⭐
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. MAIN GARDEN PET STAGE & CIRCULAR DONUT METRIC
             (Pure White Studio Showcase for Flawless Artwork)
         ======================================================== */}
      <section className="bg-white rounded-4xl p-6 sm:p-8 border border-[#EAE5DB] shadow-sm relative overflow-hidden">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* LEFT COLUMN: Circular Donut Level Progress Metric (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-center text-center space-y-4 lg:border-r lg:border-slate-100 lg:pr-6">
            <span className="text-xs font-black text-slate-500 uppercase tracking-wide flex items-center gap-1.5">
              <span>🎯</span>
              <span>ความก้าวหน้าระดับเลเวล</span>
            </span>

            {/* Circular Donut Ring */}
            <div className="relative w-40 h-40 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 120 120">
                {/* Background Ring */}
                <circle
                  cx="60"
                  cy="60"
                  r={radius}
                  className="text-slate-100"
                  strokeWidth="10"
                  stroke="currentColor"
                  fill="transparent"
                />
                {/* Progress Ring */}
                <circle
                  cx="60"
                  cy="60"
                  r={radius}
                  className="text-[#6A8D60] transition-all duration-700 ease-out"
                  strokeWidth="10"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                />
              </svg>

              {/* Center Donut Text */}
              <div className="absolute flex flex-col items-center justify-center">
                <span className="text-3xl font-black text-slate-800 tracking-tight">
                  {Math.round(progress.levelPercent)}%
                </span>
                <span className="text-[11px] font-bold text-slate-400 mt-0.5">
                  สู่ Lv.{progress.nextLevel}
                </span>
              </div>
            </div>

            {/* Level Stats Breakdown */}
            <div className="w-full bg-[#FAF8F5] rounded-2xl p-3.5 border border-[#EDE7DE] space-y-2 text-xs">
              <div className="flex justify-between items-center font-bold">
                <span className="text-slate-500">ระดับปัจจุบัน:</span>
                <span className="font-black text-slate-800 bg-white px-2 py-0.5 rounded-lg border border-slate-200">
                  Level {progress.currentLevel}
                </span>
              </div>
              <div className="flex justify-between items-center font-bold">
                <span className="text-slate-500">ดาวในเลเวลนี้:</span>
                <span className="font-black text-[#6A8D60]">
                  {progress.starsInCurrentLevel.toLocaleString()} /{' '}
                  {(progress.nextLevelStars - progress.currentLevelStars).toLocaleString()}
                </span>
              </div>
              {!progress.isMaxLevel ? (
                <div className="text-[11px] font-black text-amber-700 bg-amber-50 rounded-xl py-1 px-2 border border-amber-200/60">
                  ขาดอีก {progress.starsNeededForNextLevel.toLocaleString()} ดาว สู่ Level {progress.nextLevel}
                </div>
              ) : (
                <div className="text-[11px] font-black text-amber-900 bg-amber-100 rounded-xl py-1 px-2">
                  🏆 บรรลุระดับสูงสุด Level 100 แล้ว!
                </div>
              )}
            </div>

            {/* Grand 1M Stars Milestone */}
            <div className="w-full space-y-1 text-left">
              <div className="flex justify-between text-[11px] font-black text-slate-500">
                <span>สู่ 1,000,000 ดาว (Lv.100)</span>
                <span className="text-[#6A8D60]">{progress.overallPercent.toFixed(2)}%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-[#6A8D60] to-emerald-400 h-full rounded-full transition-all duration-500"
                  style={{ width: `${progress.overallPercent}%` }}
                />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: The Pure White Pet Showcase Stage (8 cols) */}
          <div className="lg:col-span-8 flex flex-col items-center">
            {/* The Stage Card (Pure White Background for Seamless Cutouts) */}
            <div className="w-full max-w-lg rounded-3xl border-2 border-[#EAE5DB] bg-white p-6 relative overflow-hidden shadow-sm flex flex-col items-center min-h-[360px] justify-between">
              {/* Stage Top Title Pill */}
              <div className="relative z-10 flex flex-wrap items-center justify-center gap-2">
                <span className="bg-[#FAF8F5] px-3.5 py-1 rounded-full text-xs font-black text-slate-700 border border-[#EDE7DE] flex items-center gap-1.5 shadow-2xs">
                  <span>{previewStage.icon}</span>
                  <span>ขั้นที่ {previewStage.stage}/11: {previewStage.title}</span>
                </span>

                {previewStageIndex !== null && (
                  <button
                    onClick={() => {
                      sfx.playCorrect();
                      setPreviewStageIndex(null);
                    }}
                    className="bg-amber-100 hover:bg-amber-200 text-amber-900 text-[10px] font-black px-2.5 py-1 rounded-full border border-amber-300 transition-colors flex items-center gap-1"
                  >
                    <span>↩️</span>
                    <span>กลับสู่ร่างปัจจุบัน (Lv.{progress.currentLevel})</span>
                  </button>
                )}
              </div>

              {/* Character Avatar Standing on Pure White Background */}
              <div className="relative z-10 my-4 flex items-center justify-center bg-white">
                <PetAvatar3D
                  type={activePetType}
                  level={previewStageIndex !== null ? previewStage.minLevel : progress.currentLevel}
                  size="2xl"
                  isCelebrating={isFeedingAnimation}
                  overrideImage={previewStage.image}
                  speechText={
                    speechMessage ||
                    `สวัสดีจ้า! ข้าคือ ${activeDef.name} ${previewStage.title} ลูบหัวหรือป้อนดาวให้ข้าหน่อยนะ!`
                  }
                  showStageBadge={false}
                  onClick={handlePetAction}
                />
              </div>

              {/* Bottom Action Bar: Petting & Description */}
              <div className="relative z-10 w-full flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-slate-100">
                <div className="text-center sm:text-left">
                  <span className="text-[11px] font-bold text-slate-600 block line-clamp-1">
                    {previewStage.description || activeDef.description}
                  </span>
                  <span className="text-[10px] text-slate-400 font-semibold">
                    ช่วงระดับ: Level {previewStage.minLevel} – {previewStage.maxLevel}
                  </span>
                </div>

                {/* Tactile Sage Green Petting Button */}
                <button
                  onClick={handlePetAction}
                  className="px-4 py-2 rounded-2xl bg-white hover:bg-[#FAF8F5] text-[#54754B] border-2 border-[#6A8D60]/30 hover:border-[#6A8D60] text-xs font-black shadow-xs hover:scale-102 active:scale-95 transition-all flex items-center gap-1.5 whitespace-nowrap"
                  title={`คลิกลูบหัว${activeDef.name}เพื่อเพิ่มความผูกพัน`}
                >
                  <Heart className="w-4 h-4 text-rose-500 fill-rose-500 animate-pulse" />
                  <span>ลูบหัว{activeDef.name.split(' ')[0]}</span>
                </button>
              </div>
            </div>

            {/* Quick Helper Subtext */}
            <p className="text-[11px] font-semibold text-slate-400 mt-2 text-center">
              💡 แตะที่ตัว{activeDef.name.split(' ')[0]}เพื่อลูบหัว หรือเลือกดูร่างวิวัฒนาการในตู้เสื้อผ้าด้านล่าง
            </p>
          </div>
        </div>

        {/* ========================================================
            3. SUBJECT STAR WALLET SELECTOR & FEEDING STATION
           ======================================================== */}
        <div className="mt-8 pt-6 border-t border-slate-100 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span className="text-xs font-black text-slate-700 flex items-center gap-1.5">
              <span>👛</span>
              <span>เลือกกระเป๋าดาวจากวิชาที่ต้องการใช้ป้อน (ระบบหักดาวแยกแต่ละวิชา):</span>
            </span>

            <span className="text-xs font-black text-[#6A8D60] bg-[#EBF2E8] px-3 py-1 rounded-full self-start sm:self-auto">
              กระเป๋านี้มี: {availableStarsInWallet.toLocaleString()} ⭐
            </span>
          </div>

          {/* 5 Clean Subject Pill Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {[
              { id: 'all' as const, label: 'รวมทุกวิชา', emoji: '✨', count: activeProfile.stars || 0 },
              { id: 'chinese' as const, label: 'ภาษาจีน', emoji: '🇨🇳', count: activeProfile.subjectStars?.chinese || 0 },
              { id: 'math' as const, label: 'คณิตศาสตร์', emoji: '📐', count: activeProfile.subjectStars?.math || 0 },
              { id: 'english' as const, label: 'ภาษาอังกฤษ', emoji: '🇬🇧', count: activeProfile.subjectStars?.english || 0 },
              { id: 'science' as const, label: 'วิทยาศาสตร์', emoji: '🔬', count: activeProfile.subjectStars?.science || 0 },
            ].map((opt) => {
              const isSelected = selectedSubjectWallet === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => {
                    sfx.playCorrect();
                    setSelectedSubjectWallet(opt.id);
                  }}
                  className={`p-2.5 rounded-2xl text-center transition-all border flex flex-col items-center justify-center gap-0.5 ${
                    isSelected
                      ? 'bg-[#6A8D60] text-white border-[#54754B] shadow-sm scale-102 font-black'
                      : 'bg-[#FAF8F5] text-slate-700 border-[#EDE7DE] hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <span className="text-base">{opt.emoji}</span>
                  <span className="text-[11px] font-bold block truncate w-full">{opt.label}</span>
                  <span className={`text-[10px] font-black ${isSelected ? 'text-emerald-100' : 'text-slate-500'}`}>
                    {opt.count.toLocaleString()} ⭐
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick-Feeding Amount Chips (Pinterest sage & warm terracotta buttons) */}
          <div className="space-y-2 pt-2">
            <span className="text-xs font-black text-slate-600 block text-center sm:text-left">
              🍽️ เลือกอาหารดาวเพื่อป้อน{activeDef.name.split(' ')[0]}:
            </span>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
              {/* +1 Star */}
              <button
                onClick={() => handleFeed(1)}
                disabled={availableStarsInWallet < 1 || progress.isMaxLevel}
                className={`p-3 rounded-2xl font-black text-xs transition-all border flex flex-col items-center justify-center gap-1 shadow-2xs ${
                  availableStarsInWallet >= 1 && !progress.isMaxLevel
                    ? 'bg-[#FAF8F5] hover:bg-white text-slate-800 border-[#EDE7DE] hover:border-[#6A8D60] hover:scale-102 active:scale-95'
                    : 'bg-slate-50 text-slate-400 border-slate-200 cursor-not-allowed opacity-50'
                }`}
              >
                <span className="text-xl">🍎</span>
                <span>ป้อน 1 ดาว</span>
                <span className="text-[10px] text-slate-500 font-bold">-1 ⭐</span>
              </button>

              {/* +10 Stars */}
              <button
                onClick={() => handleFeed(10)}
                disabled={availableStarsInWallet < 10 || progress.isMaxLevel}
                className={`p-3 rounded-2xl font-black text-xs transition-all border flex flex-col items-center justify-center gap-1 shadow-2xs ${
                  availableStarsInWallet >= 10 && !progress.isMaxLevel
                    ? 'bg-[#FAF8F5] hover:bg-white text-slate-800 border-[#EDE7DE] hover:border-[#6A8D60] hover:scale-102 active:scale-95'
                    : 'bg-slate-50 text-slate-400 border-slate-200 cursor-not-allowed opacity-50'
                }`}
              >
                <span className="text-xl">🍓</span>
                <span>ป้อน 10 ดาว</span>
                <span className="text-[10px] text-slate-500 font-bold">-10 ⭐</span>
              </button>

              {/* +50 Stars */}
              <button
                onClick={() => handleFeed(50)}
                disabled={availableStarsInWallet < 50 || progress.isMaxLevel}
                className={`p-3 rounded-2xl font-black text-xs transition-all border flex flex-col items-center justify-center gap-1 shadow-2xs ${
                  availableStarsInWallet >= 50 && !progress.isMaxLevel
                    ? 'bg-[#FAF8F5] hover:bg-white text-slate-800 border-[#EDE7DE] hover:border-[#6A8D60] hover:scale-102 active:scale-95'
                    : 'bg-slate-50 text-slate-400 border-slate-200 cursor-not-allowed opacity-50'
                }`}
              >
                <span className="text-xl">🍉</span>
                <span>ป้อน 50 ดาว</span>
                <span className="text-[10px] text-slate-500 font-bold">-50 ⭐</span>
              </button>

              {/* +100 Stars */}
              <button
                onClick={() => handleFeed(100)}
                disabled={availableStarsInWallet < 100 || progress.isMaxLevel}
                className={`p-3 rounded-2xl font-black text-xs transition-all border flex flex-col items-center justify-center gap-1 shadow-2xs ${
                  availableStarsInWallet >= 100 && !progress.isMaxLevel
                    ? 'bg-[#FAF8F5] hover:bg-white text-slate-800 border-[#EDE7DE] hover:border-[#6A8D60] hover:scale-102 active:scale-95'
                    : 'bg-slate-50 text-slate-400 border-slate-200 cursor-not-allowed opacity-50'
                }`}
              >
                <span className="text-xl">🍲</span>
                <span>ป้อน 100 ดาว</span>
                <span className="text-[10px] text-slate-500 font-bold">-100 ⭐</span>
              </button>

              {/* Feed ALL Stars in this Wallet */}
              <button
                onClick={() => handleFeed(availableStarsInWallet)}
                disabled={availableStarsInWallet <= 0 || progress.isMaxLevel}
                className={`p-3 rounded-2xl font-black text-xs transition-all border flex flex-col items-center justify-center gap-1 shadow-sm ${
                  availableStarsInWallet > 0 && !progress.isMaxLevel
                    ? 'bg-[#6A8D60] hover:bg-[#58794F] text-white border-[#4A6842] hover:scale-102 active:scale-95'
                    : 'bg-slate-50 text-slate-400 border-slate-200 cursor-not-allowed opacity-50'
                }`}
              >
                <span className="text-xl">✨</span>
                <span>ป้อนหมดกระเป๋า!</span>
                <span className="text-[10px] text-emerald-100 font-bold">
                  -{availableStarsInWallet.toLocaleString()} ⭐
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. EVOLUTION SHOWCASE & GROWTH TIMELINE (11 STAGES)
             (The core requested feature: 10 Level Increments)
         ======================================================== */}
      {(activePetType === 'dragon' || activePetType === 'jellyfish' || activePetType === 'panda' || activePetType === 'hippo') && (
        <section className="bg-white rounded-3xl p-6 border border-[#EAE5DB] shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl">{activeDef.emoji}</span>
              <div>
                <h3 className="text-base font-black text-slate-800 flex items-center gap-2">
                  <span>เส้นทางการเติบโตของ{activeDef.name} (11 ขั้น • Level 1 ถึง 100)</span>
                  <span className="text-[10px] bg-[#EBF2E8] text-[#54754B] font-black px-2 py-0.5 rounded-full">
                    แบ่งทีละ 10 Level
                  </span>
                </h3>
                <p className="text-xs text-slate-500 font-semibold">
                  {activePetType === 'dragon'
                    ? 'สะสมเลเวลเพื่อปลดล็อกชุดเกราะและปีกมังกรจีนโบราณ คลิกเพื่อส่องดูตัวละครแต่ละช่วงวัย'
                    : activePetType === 'jellyfish'
                    ? 'สะสมเลเวลเพื่อปลดล็อกมงกุฎและเกราะแก้วใต้สมุทรของเจลลี่ คลิกเพื่อส่องดูตัวละครแต่ละช่วงวัย'
                    : activePetType === 'panda'
                    ? 'สะสมเลเวลเพื่อปลดล็อกวิทยายุทธ์และชุดเกราะมังกรทองของเป่าเปา คลิกเพื่อส่องดูตัวละครแต่ละช่วงวัย'
                    : 'สะสมเลเวลเพื่อปลดล็อกปีกเวหา เกราะอัศวิน และร่างมหาเทพเซราฟิมของซูก้า คลิกเพื่อส่องดูตัวละครแต่ละช่วงวัย'}
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowEvolutionCloset(!showEvolutionCloset)}
              className="text-xs font-black text-[#6A8D60] hover:text-[#52704B] flex items-center gap-1 bg-[#F5F8F4] px-3 py-1.5 rounded-xl border border-[#DDE7DB]"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>{showEvolutionCloset ? 'ซ่อนตู้เสื้อผ้า' : 'เปิดตู้เสื้อผ้า'}</span>
            </button>
          </div>

          {showEvolutionCloset && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 pt-2">
              {petStages.map((stg, idx) => {
                const isCurrentActive =
                  progress.currentLevel >= stg.minLevel &&
                  progress.currentLevel <= stg.maxLevel;
                const isUnlocked = progress.currentLevel >= stg.minLevel;
                const isPreviewing = previewStageIndex === idx;

                return (
                  <div
                    key={stg.stage}
                    onClick={() => {
                      sfx.playCorrect();
                      setPreviewStageIndex(idx);
                    }}
                    className={`p-3 rounded-2xl border-2 transition-all cursor-pointer flex flex-col items-center justify-between text-center relative group ${
                      isPreviewing
                        ? 'bg-[#EBF2E8] border-[#6A8D60] shadow-md scale-102 ring-2 ring-[#6A8D60]/30'
                        : isCurrentActive
                        ? 'bg-amber-50/70 border-amber-400 shadow-xs'
                        : isUnlocked
                        ? 'bg-[#FAF8F5] hover:bg-white border-[#EDE7DE] hover:border-slate-300'
                        : 'bg-slate-50 border-slate-200/80 opacity-60'
                    }`}
                  >
                    {/* Status Top Pill */}
                    <div className="w-full flex justify-between items-center mb-1">
                      <span className="text-[10px] font-black text-slate-500">
                        ขั้น {stg.stage}
                      </span>
                      {isCurrentActive ? (
                        <span className="text-[9px] font-black bg-amber-400 text-slate-900 px-1.5 py-0.2 rounded-full shadow-2xs">
                          ปัจจุบัน ✨
                        </span>
                      ) : isUnlocked ? (
                        <span className="text-[9px] font-black text-emerald-700 bg-emerald-100 px-1.5 py-0.2 rounded-full">
                          ปลดล็อกแล้ว ✓
                        </span>
                      ) : (
                        <span className="text-[9px] font-black text-slate-500 flex items-center gap-0.5">
                          <Lock className="w-2.5 h-2.5" />
                          <span>Lv.{stg.minLevel}</span>
                        </span>
                      )}
                    </div>

                    {/* Stage Thumbnail */}
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 my-1 flex items-center justify-center bg-white rounded-2xl p-1 shadow-2xs border border-slate-100/80">
                      {stg.image ? (
                        <Image
                          src={stg.image}
                          alt={stg.title}
                          fill
                          sizes="96px"
                          className={`object-contain transition-transform group-hover:scale-105 ${
                            !isUnlocked ? 'grayscale contrast-125 opacity-70' : ''
                          }`}
                        />
                      ) : (
                        <span className="text-4xl">{stg.icon}</span>
                      )}
                    </div>

                    {/* Stage Title and Level Range */}
                    <div className="w-full mt-1 space-y-0.5">
                      <span className="text-xs font-black text-slate-800 block truncate">
                        {stg.title}
                      </span>
                      <span className="text-[10px] font-bold text-slate-400 block">
                        Lv.{stg.minLevel} – {stg.maxLevel}
                      </span>
                    </div>

                    {/* Preview Button */}
                    <button
                      className={`mt-2 w-full text-[10px] font-black py-1 rounded-xl transition-colors ${
                        isPreviewing
                          ? 'bg-[#6A8D60] text-white'
                          : 'bg-white hover:bg-[#6A8D60] hover:text-white text-slate-600 border border-slate-200'
                      }`}
                    >
                      {isPreviewing ? 'กำลังดูร่างนี้' : 'ส่องดูร่างนี้ 👁️'}
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      )}

      {/* ========================================================
          5. PET SWITCHER CAPSULE (4 Magic Pets With Individual Levels)
         ======================================================== */}
      <section className="bg-white rounded-3xl p-6 border border-[#EAE5DB] shadow-xs space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">🐾</span>
          <div>
            <h4 className="text-base font-black text-slate-800">
              สัตว์เลี้ยงประจำตัวทั้ง 4 ตัว (แยก Level อิสระ ไม่ปนกัน):
            </h4>
            <p className="text-xs text-slate-500 font-semibold">
              สามารถสลับสัตว์เลี้ยงได้ตลอดเวลา คะแนนและเลเวลของแต่ละตัวจะถูกบันทึกแยกกัน
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {(Object.keys(PET_CATALOG) as PetType[]).map((type) => {
            const pDef = PET_CATALOG[type];
            const petData = activeProfile.pets?.[type];
            const petLevel = petData?.level || 1;
            const petStarsFed = petData?.totalStarsFed || 0;
            const isSelected = activePetType === type;

            return (
              <button
                key={type}
                onClick={() => handleAdoptPet(type)}
                className={`p-3.5 rounded-2xl text-center transition-all border-2 flex flex-col items-center justify-between relative group ${
                  isSelected
                    ? 'bg-[#FAFDF8] border-[#6A8D60] shadow-sm scale-102 ring-2 ring-[#6A8D60]/20'
                    : 'bg-[#FAF8F5] hover:bg-white text-slate-700 border-[#EDE7DE] hover:border-slate-300'
                }`}
              >
                {isSelected ? (
                  <span className="absolute -top-2 right-2 bg-[#6A8D60] text-white text-[9px] font-black px-2 py-0.5 rounded-full shadow-2xs">
                    กำลังเลี้ยงอยู่ ✓
                  </span>
                ) : (
                  <span className="absolute -top-2 right-2 bg-slate-200 text-slate-600 group-hover:bg-[#EBF2E8] group-hover:text-[#54754B] text-[9px] font-bold px-2 py-0.5 rounded-full transition-colors">
                    สลับเลี้ยง
                  </span>
                )}

                <div className="w-14 h-14 relative my-1 flex items-center justify-center bg-white rounded-xl shadow-2xs border border-slate-100/80">
                  {getPetGrowthImage(type, petLevel) ? (
                    <Image
                      src={getPetGrowthImage(type, petLevel)!}
                      alt={pDef.name}
                      fill
                      sizes="56px"
                      className="object-contain group-hover:scale-110 transition-transform"
                    />
                  ) : (
                    <span className="text-4xl group-hover:scale-110 transition-transform">
                      {pDef.emoji}
                    </span>
                  )}
                </div>

                <span className="font-black text-xs text-slate-800 block">{pDef.name}</span>

                <div className="mt-1.5 flex items-center justify-center gap-1 w-full">
                  <span
                    className={`text-[11px] font-black px-2 py-0.5 rounded-lg border ${
                      isSelected
                        ? 'bg-amber-300 text-slate-900 border-amber-400'
                        : 'bg-white text-slate-700 border-slate-200'
                    }`}
                  >
                    Level {petLevel}
                  </span>
                </div>

                <span className="text-[10px] text-slate-400 font-bold block mt-1">
                  กินดาวแล้ว: {petStarsFed.toLocaleString()} ⭐
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* ========================================================
          6. SIBLING SHOWDOWN ARENA (Friendly Comparison)
         ======================================================== */}
      {profiles.length > 1 && (
        <section className="bg-[#FAF7F2] rounded-3xl p-5 sm:p-6 border border-[#EAE5DB] shadow-xs space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#EDE7DE] pb-3">
            <div className="flex items-center gap-2">
              <span className="text-xl">🏆</span>
              <div>
                <h4 className="text-base font-black text-slate-800">
                  กระดานมิตรภาพ & ความก้าวหน้าของสองพี่น้อง
                </h4>
                <p className="text-xs text-slate-500 font-semibold">
                  ฝึกฝน 4 วิชาแล้วนำดาวมาป้อนสัตว์เลี้ยงเพื่อเติบโตไปด้วยกัน
                </p>
              </div>
            </div>

            <div className="bg-white px-3 py-1 rounded-xl border border-[#EDE7DE] text-xs font-black text-slate-700 shadow-2xs">
              {isTie && <span>🤝 สองพี่น้องระดับสูสีกันที่ Level {s1Level}</span>}
              {isS1Leading && (
                <span className="text-amber-800">
                  👧🏻 {sister1.nickname || sister1.name} นำอยู่ +{levelDifference} เลเวล!
                </span>
              )}
              {isS2Leading && (
                <span className="text-amber-800">
                  🧒🏻 {sister2.nickname || sister2.name} นำอยู่ +{levelDifference} เลเวล!
                </span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Sister 1 Card */}
            <div
              className={`p-4 rounded-2xl border-2 transition-all flex items-center justify-between gap-3 ${
                activeProfile.id === sister1.id
                  ? 'bg-white border-[#6A8D60] shadow-sm ring-2 ring-[#6A8D60]/20'
                  : 'bg-white/70 border-[#EDE7DE]'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl">{sister1.avatar}</span>
                <div>
                  <span className="font-black text-sm text-slate-800 block">
                    {sister1.nickname || sister1.name}
                  </span>
                  <div className="text-xs font-bold text-slate-500 mt-0.5">
                    สัตว์เลี้ยง: <strong className="text-slate-800">{s1ActivePet?.name || 'เสี่ยวหลง'}</strong>
                  </div>
                  <div className="text-xs font-black text-[#6A8D60] mt-0.5">
                    ระดับ: Level {s1Level} • ({s1Fed.toLocaleString()} ⭐)
                  </div>
                </div>
              </div>

              {activeProfile.id !== sister1.id ? (
                <button
                  onClick={() => {
                    sfx.playCorrect();
                    onSwitchProfile?.(sister1.id);
                  }}
                  className="px-3 py-1.5 bg-[#FAF7F2] hover:bg-[#6A8D60] hover:text-white text-slate-700 border border-[#EDE7DE] rounded-xl text-xs font-black transition-all"
                >
                  สลับเล่น
                </button>
              ) : (
                <span className="bg-[#EBF2E8] text-[#54754B] text-[10px] font-black px-2.5 py-1 rounded-lg">
                  กำลังเล่นอยู่ 👈
                </span>
              )}
            </div>

            {/* Sister 2 Card */}
            <div
              className={`p-4 rounded-2xl border-2 transition-all flex items-center justify-between gap-3 ${
                activeProfile.id === sister2.id
                  ? 'bg-white border-[#6A8D60] shadow-sm ring-2 ring-[#6A8D60]/20'
                  : 'bg-white/70 border-[#EDE7DE]'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl">{sister2.avatar}</span>
                <div>
                  <span className="font-black text-sm text-slate-800 block">
                    {sister2.nickname || sister2.name}
                  </span>
                  <div className="text-xs font-bold text-slate-500 mt-0.5">
                    สัตว์เลี้ยง: <strong className="text-slate-800">{s2ActivePet?.name || 'เป่าเปา'}</strong>
                  </div>
                  <div className="text-xs font-black text-[#6A8D60] mt-0.5">
                    ระดับ: Level {s2Level} • ({s2Fed.toLocaleString()} ⭐)
                  </div>
                </div>
              </div>

              {activeProfile.id !== sister2.id ? (
                <button
                  onClick={() => {
                    sfx.playCorrect();
                    onSwitchProfile?.(sister2.id);
                  }}
                  className="px-3 py-1.5 bg-[#FAF7F2] hover:bg-[#6A8D60] hover:text-white text-slate-700 border border-[#EDE7DE] rounded-xl text-xs font-black transition-all"
                >
                  สลับเล่น
                </button>
              ) : (
                <span className="bg-[#EBF2E8] text-[#54754B] text-[10px] font-black px-2.5 py-1 rounded-lg">
                  กำลังเล่นอยู่ 👈
                </span>
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
