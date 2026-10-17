'use client';

import React, { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { HanziCanvas } from '@/components/HanziCanvas';
import { FlashcardsSRS } from '@/components/FlashcardsSRS';
import { ChineseSpeakingStudio } from '@/components/ChineseSpeakingStudio';
import { AiTutorChat } from '@/components/AiTutorChat';
import { PetCompanion } from '@/components/PetCompanion';
import { ParentDashboard } from '@/components/ParentDashboard';
import { LevelMasteryRoadmap } from '@/components/LevelMasteryRoadmap';
import { VOCABULARY_LIST, CATEGORIES } from '@/data/vocabulary';
import { MASTERY_LEVELS } from '@/data/levels';
import {
  getStoredProfiles,
  getActiveProfileId,
  setActiveProfileId,
  addStarsToActive,
  unlockLevelForActive,
  toggleParentOverrideAll,
  DEFAULT_PROFILES,
  feedActivePet,
  switchActivePetType,
} from '@/lib/storage';
import { UserProfile, Word, PetType, SubjectType } from '@/types';
import { ArrowLeft, ArrowRight, BookOpen, Search, Sparkles, Layers, Lock, KeyRound, Home as HomeIcon } from 'lucide-react';
import { sfx } from '@/lib/speech';
import Link from 'next/link';

export default function ChinesePage() {
  const [profiles, setProfiles] = useState<UserProfile[]>(DEFAULT_PROFILES);
  const [activeProfileId, setActiveId] = useState<string>(DEFAULT_PROFILES[0].id);
  const [activeTab, setActiveTab] = useState<string>('learn');

  // Filters for Hanzi Canvas
  const [selectedLevel, setSelectedLevel] = useState<number>(0); // 0 = all unlocked
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  // Locked notice state
  const [lockedNoticeLevel, setLockedNoticeLevel] = useState<number | null>(null);

  useEffect(() => {
    const loadedProfiles = getStoredProfiles();
    const activeId = getActiveProfileId();
    if (loadedProfiles && loadedProfiles.length > 0) setProfiles(loadedProfiles);
    if (activeId) setActiveId(activeId);
  }, []);

  const activeProfile = profiles.find((p) => p.id === activeProfileId) || profiles[0] || DEFAULT_PROFILES[0];
  const unlocked = activeProfile.unlockedLevels || [1];
  const isParentOverride = activeProfile.parentOverrideUnlockAll || false;

  const handleSwitchProfile = (id: string) => {
    setActiveId(id);
    setActiveProfileId(id);
  };

  const handleEarnReward = (stars: number) => {
    const updated = addStarsToActive(stars, 'chinese');
    setProfiles((prev) =>
      prev.map((p) => (p.id === updated.id ? updated : p))
    );
  };

  const handleUnlockLevel = (level: number) => {
    const updated = unlockLevelForActive(level);
    setProfiles((prev) =>
      prev.map((p) => (p.id === updated.id ? updated : p))
    );
  };

  const handleFeedStars = (amount: number, fromSubject?: SubjectType) => {
    const res = feedActivePet(amount, fromSubject);
    setProfiles((prev) =>
      prev.map((p) => (p.id === res.updatedProfile.id ? res.updatedProfile : p))
    );
    return res;
  };

  const handleSwitchPetType = (type: PetType) => {
    const updated = switchActivePetType(type);
    setProfiles((prev) =>
      prev.map((p) => (p.id === updated.id ? updated : p))
    );
  };

  const handleToggleParentOverride = () => {
    const updatedProfiles = toggleParentOverrideAll();
    setProfiles(updatedProfiles);
  };

  const handleSelectLevel = (lvlNum: number) => {
    if (lvlNum === 0) {
      setSelectedLevel(0);
      setCurrentWordIndex(0);
      return;
    }

    const isLvlUnlocked = isParentOverride || unlocked.includes(lvlNum);
    if (!isLvlUnlocked) {
      sfx.playSoftTryAgain();
      setLockedNoticeLevel(lvlNum);
      return;
    }

    sfx.playCorrect();
    setSelectedLevel(lvlNum);
    setCurrentWordIndex(0);
  };

  // Filter words by Level, Category, and Search Query
  const filteredWords = VOCABULARY_LIST.filter((w) => {
    // If selectedLevel is 0 (all), only show unlocked levels unless parent override
    const matchLevel =
      selectedLevel === 0
        ? isParentOverride || unlocked.includes(w.hskLevel)
        : w.hskLevel === selectedLevel;

    const matchCategory = selectedCategory === 'all' || w.category === selectedCategory;
    const matchSearch =
      !searchQuery.trim() ||
      w.hanzi.includes(searchQuery.trim()) ||
      w.pinyin.toLowerCase().includes(searchQuery.trim().toLowerCase()) ||
      w.thai.includes(searchQuery.trim());
    return matchLevel && matchCategory && matchSearch;
  });

  const currentWord = filteredWords[currentWordIndex] || filteredWords[0];

  const handleNextWord = () => {
    sfx.playCorrect();
    setCurrentWordIndex((prev) => (prev + 1) % filteredWords.length);
  };

  const handlePrevWord = () => {
    sfx.playCorrect();
    setCurrentWordIndex((prev) => (prev - 1 + filteredWords.length) % filteredWords.length);
  };

  const handleSelectLevelFromRoadmap = (level: number) => {
    setSelectedLevel(level);
    setSelectedCategory('all');
    setCurrentWordIndex(0);
    setActiveTab('learn');
  };

  return (
    <div className="min-h-screen pb-32 lg:pb-16 text-slate-800">
      {/* Top Banner with Back to Portal link */}
      <div className="bg-white/80 backdrop-blur-md border-b border-purple-100/70 text-slate-700 px-4 py-1.5 text-xs font-black flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-1.5 text-purple-700 hover:text-purple-900 bg-purple-50 hover:bg-purple-100 px-3 py-1 rounded-full transition-all border border-purple-100/80 shadow-2xs"
        >
          <HomeIcon className="w-3.5 h-3.5 text-purple-600" />
          <span>หน้าแรก Portal</span>
        </Link>
        <span className="hidden sm:inline-block text-purple-500 font-extrabold text-[11px]">
          🇨🇳 ภาษาจีน 5,400 คำ (HSK 1–6)
        </span>
        <div className="flex items-center gap-3">
          <Link
            href="/math"
            className="hidden md:inline-block text-slate-400 hover:text-purple-600 text-[11px] font-bold transition-colors"
          >
            คณิต 🔢
          </Link>
          <Link
            href="/english"
            className="hidden md:inline-block text-slate-400 hover:text-purple-600 text-[11px] font-bold transition-colors"
          >
            อังกฤษ 🇬🇧
          </Link>
          <Link
            href="/science"
            className="hidden md:inline-block text-slate-400 hover:text-purple-600 text-[11px] font-bold transition-colors"
          >
            วิทย์ 🔬
          </Link>
        </div>
      </div>

      {/* Top Navigation & Profile Bar */}
      <Navbar
        activeProfile={activeProfile}
        profiles={profiles}
        onSwitchProfile={handleSwitchProfile}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-4 pt-6">
        {/* Tab 1: Hanzi Stroke Writing Practice */}
        {activeTab === 'learn' && (
          <div className="space-y-5">
            {/* Level Selector & Search Bar */}
            <div className="bg-white rounded-3xl p-4 shadow-sm border border-slate-200 space-y-3">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                {/* Level Pills with Lock Icons */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                  <span className="text-xs font-bold text-slate-500 whitespace-nowrap flex items-center gap-1">
                    <Layers className="w-4 h-4 text-rose-500" />
                    <span>เลือกระดับ:</span>
                  </span>
                  <button
                    onClick={() => handleSelectLevel(0)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-black whitespace-nowrap transition-all ${
                      selectedLevel === 0
                        ? 'bg-slate-900 text-white'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                    }`}
                  >
                    ทุกระดับที่ปลดล็อก
                  </button>

                  {MASTERY_LEVELS.map((lvl) => {
                    const isLvlUnlocked = isParentOverride || unlocked.includes(lvl.level);
                    const isSelected = selectedLevel === lvl.level;

                    return (
                      <button
                        key={lvl.level}
                        onClick={() => handleSelectLevel(lvl.level)}
                        className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                          isSelected
                            ? 'bg-rose-500 text-white shadow-sm'
                            : isLvlUnlocked
                            ? 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                            : 'bg-slate-100 text-slate-400 opacity-70 cursor-pointer'
                        }`}
                        title={isLvlUnlocked ? `Level ${lvl.level}` : `Level ${lvl.level} (ล็อกอยู่)`}
                      >
                        <span>{lvl.badge}</span>
                        <span>Level {lvl.level}</span>
                        {!isLvlUnlocked && <Lock className="w-3 h-3 text-slate-400 ml-0.5" />}
                      </button>
                    );
                  })}
                </div>

                {/* Instant Search Box */}
                <div className="relative min-w-[220px]">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setCurrentWordIndex(0);
                    }}
                    placeholder="ค้นหาจีน, พินอิน หรือคำแปล..."
                    className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-rose-400"
                  />
                </div>
              </div>

              {/* Category Pills */}
              <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none border-t border-slate-100 pt-2.5">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      setCurrentWordIndex(0);
                    }}
                    className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-[11px] font-bold whitespace-nowrap transition-all ${
                      selectedCategory === cat.id
                        ? 'bg-amber-500 text-white shadow-sm'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                    }`}
                  >
                    <span>{cat.icon}</span>
                    <span>{cat.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Locked Level Warning Modal / Toast */}
            {lockedNoticeLevel !== null && (
              <div className="bg-amber-50 border-2 border-amber-300 rounded-3xl p-5 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4 animate-fade-in">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-200 text-amber-800 flex items-center justify-center text-2xl shadow-inner">
                    🔒
                  </div>
                  <div>
                    <h4 className="font-black text-slate-800 text-sm">
                      Level {lockedNoticeLevel} ยังล็อกอยู่จ้า!
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      สองพี่น้องต้องฝึกฝนและทำแบบทดสอบผ่าน Level {lockedNoticeLevel - 1} ก่อนนะ จึงจะปลดล็อกด่านต่อไปได้!
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setLockedNoticeLevel(null);
                      setActiveTab('roadmap');
                    }}
                    className="px-4 py-2 bg-gradient-to-r from-rose-500 to-amber-500 text-white rounded-xl text-xs font-black shadow-md flex items-center gap-1.5"
                  >
                    <KeyRound className="w-4 h-4 text-yellow-200" />
                    <span>ไปทำแบบทดสอบปลดล็อก</span>
                  </button>
                  <button
                    onClick={() => setLockedNoticeLevel(null)}
                    className="px-3 py-2 bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 rounded-xl text-xs font-bold"
                  >
                    ปิด
                  </button>
                </div>
              </div>
            )}

            {filteredWords.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
                <p className="text-3xl mb-2">🔍</p>
                <p className="text-slate-600 font-bold text-sm">
                  ไม่พบคำศัพท์ตามเงื่อนไขที่ค้นหา
                </p>
                <button
                  onClick={() => {
                    setSelectedLevel(0);
                    setSelectedCategory('all');
                    setSearchQuery('');
                  }}
                  className="mt-3 px-4 py-2 bg-rose-500 text-white rounded-xl text-xs font-bold"
                >
                  ล้างตัวกรองทั้งหมด
                </button>
              </div>
            ) : (
              <>
                {/* Word Navigator */}
                <div className="flex items-center justify-between max-w-lg mx-auto px-2">
                  <button
                    onClick={handlePrevWord}
                    className="btn-pixar btn-pixar-amber flex items-center gap-1 text-xs font-black px-4 py-2 rounded-2xl shadow-sm"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>คำก่อนหน้า</span>
                  </button>

                  <div className="text-center">
                    <span className="text-xs font-black text-slate-700 block">
                      คำที่ {currentWordIndex + 1} จาก {filteredWords.length} คำ
                    </span>
                    <span className="bg-gradient-to-r from-rose-500 to-amber-500 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-sm mt-0.5 inline-block">
                      Level {currentWord.hskLevel}
                    </span>
                  </div>

                  <button
                    onClick={handleNextWord}
                    className="btn-pixar btn-pixar-rose flex items-center gap-1 text-xs font-black px-4 py-2 rounded-2xl shadow-sm"
                  >
                    <span>คำถัดไป</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Hanzi Canvas */}
                <HanziCanvas
                  word={currentWord}
                  onCompleteWord={() => handleEarnReward(10)}
                />
              </>
            )}
          </div>
        )}

        {/* Tab 2: SRS Flashcards */}
        {activeTab === 'flashcards' && (
          <FlashcardsSRS
            words={VOCABULARY_LIST}
            onEarnReward={handleEarnReward}
            initialLevel={selectedLevel}
          />
        )}

        {/* Tab 3: Pronunciation & Speaking Studio */}
        {activeTab === 'tone' && (
          <ChineseSpeakingStudio onEarnReward={handleEarnReward} />
        )}

        {/* Tab 4: AI Tutor Chat */}
        {activeTab === 'ai-tutor' && (
          <AiTutorChat
            activeProfile={activeProfile}
            onEarnReward={handleEarnReward}
          />
        )}

        {/* Tab 5: Roadmap to Native */}
        {activeTab === 'roadmap' && (
          <LevelMasteryRoadmap
            activeProfile={activeProfile}
            words={VOCABULARY_LIST}
            onSelectLevel={handleSelectLevelFromRoadmap}
            onUnlockLevel={handleUnlockLevel}
          />
        )}

        {/* Tab 6: Virtual Pet Evolution */}
        {activeTab === 'pet' && (
          <PetCompanion
            activeProfile={activeProfile}
            profiles={profiles}
            onFeedStars={handleFeedStars}
            onSwitchPetType={handleSwitchPetType}
            onSwitchProfile={handleSwitchProfile}
            initialSubject="chinese"
          />
        )}

        {/* Tab 7: Parent Dashboard */}
        {activeTab === 'parent' && (
          <ParentDashboard
            profiles={profiles}
            onToggleParentOverride={handleToggleParentOverride}
          />
        )}
      </main>
    </div>
  );
}
