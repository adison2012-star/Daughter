'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Image from 'next/image';
import { PortalHeader } from '@/components/PortalHeader';
import {
  getStoredProfiles,
  getActiveProfileId,
  setActiveProfileId,
  addStarsToActive,
  DEFAULT_PROFILES,
  feedActivePet,
  switchActivePetType,
  getCloudUser,
} from '@/lib/storage';
import { UserProfile, PetType, SubjectType, CloudUser } from '@/types';
import { PetModal } from '@/components/PetModal';
import { RewardShopModal } from '@/components/RewardShopModal';
import { ProfileManagerModal } from '@/components/ProfileManagerModal';
import { AuthModal } from '@/components/AuthModal';
import { sfx } from '@/lib/speech';
import confetti from 'canvas-confetti';
import {
  Volume2,
  Sparkles,
  CheckCircle2,
  RotateCcw,
  Award,
  Search,
  BookOpen,
  Gamepad2,
  ChevronLeft,
  ChevronRight,
  Shuffle,
  Flame,
  Delete,
  X,
  ArrowRight,
} from 'lucide-react';
import { OXFORD_3000, OXFORD_STATS, OxfordWord, CEFRLevel } from '@/data/oxford3000';

interface PhonicsItem {
  letter: string;
  word: string;
  phonics: string;
  thai: string;
  emoji: string;
}

const PHONICS_LIST: PhonicsItem[] = [
  { letter: 'A', word: 'Apple', phonics: '/æ/ แอะ', thai: 'แอปเปิ้ล', emoji: '🍎' },
  { letter: 'B', word: 'Bear', phonics: '/b/ เบอะ', thai: 'หมี', emoji: '🐻' },
  { letter: 'C', word: 'Cat', phonics: '/k/ เคอะ', thai: 'แมว', emoji: '🐱' },
  { letter: 'D', word: 'Dolphin', phonics: '/d/ เดอะ', thai: 'โลมา', emoji: '🐬' },
  { letter: 'E', word: 'Elephant', phonics: '/e/ เอะ', thai: 'ช้าง', emoji: '🐘' },
  { letter: 'F', word: 'Fox', phonics: '/f/ เฟอะ', thai: 'สุนัขจิ้งจอก', emoji: '🦊' },
  { letter: 'G', word: 'Giraffe', phonics: '/g/ เกอะ', thai: 'ยีราฟ', emoji: '🦒' },
  { letter: 'H', word: 'Honey', phonics: '/h/ เฮอะ', thai: 'น้ำผึ้ง', emoji: '🍯' },
  { letter: 'I', word: 'Ice cream', phonics: '/aɪ/ ไอ', thai: 'ไอศกรีม', emoji: '🍦' },
  { letter: 'J', word: 'Jellyfish', phonics: '/dʒ/ เจอะ', thai: 'แมงกะพรุน', emoji: '🪼' },
  { letter: 'K', word: 'Koala', phonics: '/k/ เคอะ', thai: 'โคอาลา', emoji: '🐨' },
  { letter: 'L', word: 'Lion', phonics: '/l/ เลอะ', thai: 'สิงโต', emoji: '🦁' },
  { letter: 'M', word: 'Monkey', phonics: '/m/ เมอะ', thai: 'ลิง', emoji: '🐵' },
  { letter: 'N', word: 'Nest', phonics: '/n/ เนอะ', thai: 'รังนก', emoji: '🪺' },
  { letter: 'O', word: 'Owl', phonics: '/aʊ/ อาว', thai: 'นกฮูก', emoji: '🦉' },
  { letter: 'P', word: 'Panda', phonics: '/p/ เพอะ', thai: 'แพนด้า', emoji: '🐼' },
  { letter: 'Q', word: 'Queen', phonics: '/kw/ เควิอะ', thai: 'ราชินี', emoji: '👑' },
  { letter: 'R', word: 'Rabbit', phonics: '/r/ เรอะ', thai: 'กระต่าย', emoji: '🐰' },
  { letter: 'S', word: 'Star', phonics: '/s/ เสอะ', thai: 'ดวงดาว', emoji: '⭐' },
  { letter: 'T', word: 'Tiger', phonics: '/t/ เทอะ', thai: 'เสือ', emoji: '🐯' },
  { letter: 'U', word: 'Umbrella', phonics: '/ʌ/ อะ', thai: 'ร่ม', emoji: '☂️' },
  { letter: 'V', word: 'Violin', phonics: '/v/ เวอะ', thai: 'ไวโอลิน', emoji: '🎻' },
  { letter: 'W', word: 'Whale', phonics: '/w/ เวอะ', thai: 'วาฬ', emoji: '🐳' },
  { letter: 'X', word: 'Xylophone', phonics: '/z/ ไซ', thai: 'ไซโลโฟน', emoji: '🎹' },
  { letter: 'Y', word: 'Yogurt', phonics: '/j/ เยอะ', thai: 'โยเกิร์ต', emoji: '🥛' },
  { letter: 'Z', word: 'Zebra', phonics: '/z/ เซอะ', thai: 'ม้าลาย', emoji: '🦓' },
];

const ITEMS_PER_PAGE = 36;

export default function EnglishPage() {
  const [profiles, setProfiles] = useState<UserProfile[]>(DEFAULT_PROFILES);
  const [activeProfileId, setActiveId] = useState<string>(DEFAULT_PROFILES[0].id);
  const [isPetModalOpen, setIsPetModalOpen] = useState(false);
  const [isRewardShopOpen, setIsRewardShopOpen] = useState(false);
  const [isProfileManagerOpen, setIsProfileManagerOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [cloudUser, setCloudUser] = useState<CloudUser | null>(null);
  const [activeTab, setActiveTab] = useState<'vocab' | 'spelling' | 'phonics'>('vocab');

  // Vocab Library State
  const [selectedLevel, setSelectedLevel] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [speakingWordId, setSpeakingWordId] = useState<string | null>(null);

  // Spelling Bee State
  const [spellingLevel, setSpellingLevel] = useState<string>('A1');
  const [currentSpellingWord, setCurrentSpellingWord] = useState<OxfordWord | null>(null);
  const [scrambledTiles, setScrambledTiles] = useState<{ id: string; letter: string }[]>([]);
  const [userTiles, setUserTiles] = useState<{ id: string; letter: string }[]>([]);
  const [isSpellingWon, setIsSpellingWon] = useState(false);
  const [streakCount, setStreakCount] = useState(0);
  const [solvedWordsCount, setSolvedWordsCount] = useState(0);

  useEffect(() => {
    const loaded = getStoredProfiles();
    const active = getActiveProfileId();
    const user = getCloudUser();
    if (loaded && loaded.length > 0) setProfiles(loaded);
    if (active) setActiveId(active);
    if (user) setCloudUser(user);
  }, []);

  const activeProfile =
    profiles.find((p) => p.id === activeProfileId) || profiles[0] || DEFAULT_PROFILES[0];

  const handleSwitchProfile = (id: string) => {
    setActiveId(id);
    setActiveProfileId(id);
  };

  const handleEarnReward = (stars: number) => {
    const updated = addStarsToActive(stars, 'english');
    setProfiles((prev) => prev.map((p) => (p.id === updated.id ? updated : p)));
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
    setProfiles((prev) => prev.map((p) => (p.id === updated.id ? updated : p)));
  };

  const speakEnglish = (text: string, wordId?: string) => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.88;
      if (wordId) setSpeakingWordId(wordId);
      utterance.onend = () => {
        if (wordId) setSpeakingWordId(null);
      };
      utterance.onerror = () => {
        if (wordId) setSpeakingWordId(null);
      };
      window.speechSynthesis.speak(utterance);
    }
  };

  // Filtered Vocabulary
  const filteredVocab = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return OXFORD_3000.filter((item) => {
      if (selectedLevel !== 'ALL' && item.level !== selectedLevel) return false;
      if (!q) return true;
      return (
        item.word.toLowerCase().includes(q) ||
        item.meaning.toLowerCase().includes(q) ||
        item.reading.toLowerCase().includes(q) ||
        item.pos.toLowerCase().includes(q)
      );
    });
  }, [selectedLevel, searchQuery]);

  const totalPages = Math.ceil(filteredVocab.length / ITEMS_PER_PAGE) || 1;
  const paginatedVocab = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredVocab.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredVocab, currentPage]);

  const handleLevelChange = (lvl: string) => {
    setSelectedLevel(lvl);
    setCurrentPage(1);
  };

  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    setCurrentPage(1);
  };

  // Eligible words for Spelling Bee (letters only, length 3 to 9)
  const eligibleSpellingWords = useMemo(() => {
    return OXFORD_3000.filter((w) => {
      const isPureLetters = /^[a-zA-Z]+$/.test(w.word);
      const isGoodLength = w.word.length >= 3 && w.word.length <= 9;
      const matchesLevel = spellingLevel === 'ALL' || w.level === spellingLevel;
      return isPureLetters && isGoodLength && matchesLevel;
    });
  }, [spellingLevel]);

  // Initialize Spelling Word
  const initSpellingBee = useCallback(
    (targetWord?: OxfordWord) => {
      let chosen = targetWord;
      if (!chosen) {
        if (eligibleSpellingWords.length === 0) return;
        const randomIdx = Math.floor(Math.random() * eligibleSpellingWords.length);
        chosen = eligibleSpellingWords[randomIdx];
      }

      setCurrentSpellingWord(chosen);
      setIsSpellingWon(false);
      setUserTiles([]);

      // Create letters array with unique IDs for scrambling
      const letters = chosen.word
        .toUpperCase()
        .split('')
        .map((char, index) => ({
          id: `${char}_${index}_${Math.random()}`,
          letter: char,
        }));

      // Scramble letters until order is different if length > 1
      let shuffled = [...letters].sort(() => Math.random() - 0.5);
      if (shuffled.map((l) => l.letter).join('') === chosen.word.toUpperCase()) {
        shuffled.reverse();
      }

      setScrambledTiles(shuffled);
    },
    [eligibleSpellingWords]
  );

  // Auto-init spelling game on tab switch or level change
  useEffect(() => {
    if (activeTab === 'spelling' && (!currentSpellingWord || currentSpellingWord.level !== spellingLevel)) {
      initSpellingBee();
    }
  }, [activeTab, spellingLevel, initSpellingBee, currentSpellingWord]);

  // Click on scrambled tile
  const handlePickTile = (tile: { id: string; letter: string }) => {
    if (isSpellingWon || !currentSpellingWord) return;
    sfx.playCorrect();

    const newScrambled = scrambledTiles.filter((t) => t.id !== tile.id);
    const newUserTiles = [...userTiles, tile];
    setScrambledTiles(newScrambled);
    setUserTiles(newUserTiles);

    const targetUpper = currentSpellingWord.word.toUpperCase();
    if (newUserTiles.length === targetUpper.length) {
      const formed = newUserTiles.map((t) => t.letter).join('');
      if (formed === targetUpper) {
        // WIN!
        setIsSpellingWon(true);
        sfx.playCorrect();
        speakEnglish(currentSpellingWord.word);
        let rewardStars = 10;
        if (currentSpellingWord.level === 'B1' || currentSpellingWord.level === 'B2') {
          rewardStars = 15;
        } else if (currentSpellingWord.level === 'C1' || currentSpellingWord.level === 'C2') {
          rewardStars = 20;
        }
        handleEarnReward(rewardStars);
        setStreakCount((prev) => prev + 1);
        setSolvedWordsCount((prev) => prev + 1);
        confetti({
          particleCount: 65,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#38bdf8', '#fbbf24', '#f43f5e', '#a855f7'],
        });
      } else {
        sfx.playSoftTryAgain();
      }
    }
  };

  // Click on placed user tile to return it
  const handleReturnTile = (tile: { id: string; letter: string }) => {
    if (isSpellingWon) return;
    setUserTiles((prev) => prev.filter((t) => t.id !== tile.id));
    setScrambledTiles((prev) => [...prev, tile]);
  };

  // Reset current spelling attempt
  const handleResetSpelling = () => {
    if (!currentSpellingWord) return;
    const all = [...userTiles, ...scrambledTiles].sort(() => Math.random() - 0.5);
    setScrambledTiles(all);
    setUserTiles([]);
    setIsSpellingWon(false);
  };

  // Next spelling word
  const handleNextWord = () => {
    initSpellingBee();
  };

  // Quick launch spelling bee from vocab library card
  const handlePlayWordFromLibrary = (word: OxfordWord) => {
    setActiveTab('spelling');
    setSpellingLevel(word.level);
    initSpellingBee(word);
  };

  const getLevelColor = (level: CEFRLevel) => {
    switch (level) {
      case 'A1':
        return 'from-emerald-500 to-teal-600 text-white';
      case 'A2':
        return 'from-blue-500 to-indigo-600 text-white';
      case 'B1':
        return 'from-amber-500 to-orange-600 text-white';
      case 'B2':
        return 'from-rose-500 to-pink-600 text-white';
      case 'C1':
        return 'from-purple-600 to-indigo-700 text-white';
      case 'C2':
        return 'from-fuchsia-600 to-rose-700 text-white';
      default:
        return 'from-slate-500 to-slate-700 text-white';
    }
  };

  const getLevelBadgeBg = (level: CEFRLevel) => {
    switch (level) {
      case 'A1':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'A2':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'B1':
        return 'bg-amber-100 text-amber-900 border-amber-200';
      case 'B2':
        return 'bg-rose-100 text-rose-900 border-rose-200';
      case 'C1':
        return 'bg-purple-100 text-purple-900 border-purple-200 font-bold';
      case 'C2':
        return 'bg-fuchsia-100 text-fuchsia-950 border-fuchsia-300 ring-1 ring-fuchsia-300 font-black';
      default:
        return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50/70 via-indigo-50/30 to-amber-50/40 text-slate-800 pb-28">
      <PortalHeader
        activeProfile={activeProfile}
        profiles={profiles}
        onSwitchProfile={handleSwitchProfile}
        title="English Safari"
        subtitle="Oxford 5,000+ & CEFR C2"
        showBackToPortal={true}
        currentSubject="english"
        onOpenPetSanctuary={() => setIsPetModalOpen(true)}
        onOpenRewardShop={() => setIsRewardShopOpen(true)}
        onOpenProfileManager={() => setIsProfileManagerOpen(true)}
        onOpenAuthModal={() => setIsAuthModalOpen(true)}
        cloudUser={cloudUser}
      />

      <main className="max-w-5xl mx-auto px-4 pt-6 space-y-6">
        {/* Mascot Banner: Xiao Long Detective */}
        <div className="bg-gradient-to-r from-sky-500 via-indigo-600 to-blue-600 rounded-3xl p-5 sm:p-6 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-5 border-2 border-sky-300/40 relative overflow-hidden">
          <div className="absolute -right-12 -bottom-10 w-44 h-44 bg-white/10 rounded-full blur-2xl pointer-events-none" />

          <div className="flex items-center gap-4 sm:gap-5 z-10">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-white/15 backdrop-blur-md rounded-2xl flex items-center justify-center border-2 border-sky-200 shadow-inner flex-shrink-0 p-1">
              <Image
                src="/images/xiaolong/english.png"
                alt="เสี่ยวหลง ยอดนักสืบคำศัพท์"
                width={70}
                height={70}
                className="object-contain drop-shadow"
              />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-xl sm:text-2xl font-black tracking-tight">
                  เสี่ยวหลง ยอดนักสืบคำศัพท์
                </h2>
                <span className="bg-amber-300 text-sky-950 font-black text-xs px-2.5 py-0.5 rounded-full shadow-xs">
                  Oxford 5,000+ & CEFR C2
                </span>
              </div>
              <p className="text-xs sm:text-sm text-sky-100 font-medium mt-1">
                คลังคำศัพท์มาตรฐาน {OXFORD_STATS.total.toLocaleString()} คำ พร้อมเสียงอ่านเจ้าของภาษา & เกมสะกดคำสะสมดาว
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 z-10 w-full sm:w-auto justify-end">
            <button
              onClick={() => {
                sfx.playCorrect();
                setActiveTab('spelling');
              }}
              className="flex items-center justify-center gap-1.5 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-slate-900 font-black text-xs px-4 py-2.5 rounded-2xl shadow-md transition-all active:scale-95 flex-1 sm:flex-initial"
            >
              <Gamepad2 className="w-4 h-4 text-amber-950" />
              <span>เริ่มเรียนสะกดคำ</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() =>
                speakEnglish(
                  "Welcome to English Safari with Xiao Long! Let's discover new words and level up your English!"
                )
              }
              className="flex items-center justify-center gap-2 bg-white/95 hover:bg-white text-indigo-700 font-black text-xs px-3.5 py-2.5 rounded-2xl shadow-md transition-all active:scale-95 flex-1 sm:flex-initial"
            >
              <Volume2 className="w-4 h-4 text-indigo-500" />
              <span>ฟังเสียงเสี่ยวหลง</span>
            </button>
          </div>
        </div>

        {/* Tab Navigation (Glassmorphic) */}
        <div className="grid grid-cols-3 gap-2 glass-card p-2 rounded-2xl border border-white/90 shadow-sm max-w-xl mx-auto">
          <button
            onClick={() => setActiveTab('vocab')}
            className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-black transition-all ${
              activeTab === 'vocab'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                : 'text-slate-600 hover:bg-white/60'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>คลังคำศัพท์ ({OXFORD_STATS.total.toLocaleString()})</span>
          </button>
          <button
            onClick={() => setActiveTab('spelling')}
            className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-black transition-all ${
              activeTab === 'spelling'
                ? 'bg-amber-500 text-white shadow-md shadow-amber-200'
                : 'text-slate-600 hover:bg-white/60'
            }`}
          >
            <Gamepad2 className="w-4 h-4" />
            <span>เริ่มสะกดคำ 🐝</span>
          </button>
          <button
            onClick={() => setActiveTab('phonics')}
            className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-black transition-all ${
              activeTab === 'phonics'
                ? 'bg-sky-600 text-white shadow-md shadow-sky-200'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <span className="text-base leading-none">🔤</span>
            <span>Phonics A-Z</span>
          </button>
        </div>

        {/* TAB 1: VOCABULARY LIBRARY (OXFORD 5,000+ & C2) */}
        {activeTab === 'vocab' && (
          <div className="space-y-5">
            {/* Filter Bar & Search */}
            <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-200 space-y-4">
              {/* Level Filter Pills */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-black text-slate-500 mr-1">ระดับ:</span>
                <button
                  onClick={() => handleLevelChange('ALL')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-black border transition-all ${
                    selectedLevel === 'ALL'
                      ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                      : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  ทั้งหมด ({OXFORD_STATS.total.toLocaleString()} คำ)
                </button>
                <button
                  onClick={() => handleLevelChange('A1')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-black border transition-all ${
                    selectedLevel === 'A1'
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                      : 'bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100'
                  }`}
                >
                  🌱 A1 ประถมต้น ({OXFORD_STATS.a1?.toLocaleString()} คำ)
                </button>
                <button
                  onClick={() => handleLevelChange('A2')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-black border transition-all ${
                    selectedLevel === 'A2'
                      ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                      : 'bg-blue-50 text-blue-800 border-blue-200 hover:bg-blue-100'
                  }`}
                >
                  ⭐ A2 ประถมปลาย ({OXFORD_STATS.a2?.toLocaleString()} คำ)
                </button>
                <button
                  onClick={() => handleLevelChange('B1')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-black border transition-all ${
                    selectedLevel === 'B1'
                      ? 'bg-amber-600 text-white border-amber-600 shadow-sm'
                      : 'bg-amber-50 text-amber-900 border-amber-200 hover:bg-amber-100'
                  }`}
                >
                  🚀 B1 มัธยมต้น ({OXFORD_STATS.b1?.toLocaleString()} คำ)
                </button>
                <button
                  onClick={() => handleLevelChange('B2')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-black border transition-all ${
                    selectedLevel === 'B2'
                      ? 'bg-rose-600 text-white border-rose-600 shadow-sm'
                      : 'bg-rose-50 text-rose-900 border-rose-200 hover:bg-rose-100'
                  }`}
                >
                  🏆 B2 มัธยมปลาย-สากล ({OXFORD_STATS.b2?.toLocaleString()} คำ)
                </button>
                <button
                  onClick={() => handleLevelChange('C1')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-black border transition-all ${
                    selectedLevel === 'C1'
                      ? 'bg-purple-600 text-white border-purple-600 shadow-sm'
                      : 'bg-purple-50 text-purple-900 border-purple-200 hover:bg-purple-100'
                  }`}
                >
                  🎓 C1 มหาวิทยาลัย ({OXFORD_STATS.c1?.toLocaleString()} คำ)
                </button>
                <button
                  onClick={() => handleLevelChange('C2')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-black border transition-all ${
                    selectedLevel === 'C2'
                      ? 'bg-fuchsia-600 text-white border-fuchsia-600 shadow-sm ring-2 ring-fuchsia-300'
                      : 'bg-fuchsia-50 text-fuchsia-950 border-fuchsia-200 hover:bg-fuchsia-100'
                  }`}
                >
                  👑 C2 เชี่ยวชาญขั้นสูง ({OXFORD_STATS.c2?.toLocaleString()} คำ)
                </button>
              </div>

              {/* Search Box */}
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  placeholder="ค้นหาคำศัพท์ภาษาอังกฤษ คำแปลภาษาไทย หรือคำอ่าน..."
                  className="w-full pl-10 pr-10 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 text-sm font-medium outline-none transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => handleSearchChange('')}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Stats Bar */}
              <div className="flex items-center justify-between text-xs text-slate-500 font-bold px-1">
                <span>
                  พบ <strong className="text-indigo-600">{filteredVocab.length.toLocaleString()}</strong> คำ
                  {selectedLevel !== 'ALL' && ` ในระดับ ${selectedLevel}`}
                </span>
                <span>
                  หน้า {currentPage} / {totalPages}
                </span>
              </div>
            </div>

            {/* Vocabulary Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
              {paginatedVocab.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs hover:shadow-md hover:border-indigo-300 transition-all flex flex-col justify-between gap-3 group"
                >
                  <div>
                    {/* Top row: Word + Badges */}
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-xl font-black text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors">
                          {item.word}
                        </span>
                        <div className="flex items-center gap-1.5 mt-1">
                          <span
                            className={`text-[10px] font-black px-2 py-0.5 rounded-md border ${getLevelBadgeBg(
                              item.level
                            )}`}
                          >
                            {item.level}
                          </span>
                          {item.pos && (
                            <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                              {item.pos}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Pronounce Button */}
                      <button
                        onClick={() => {
                          speakEnglish(item.word, item.id);
                        }}
                        className={`p-2.5 rounded-xl transition-all active:scale-90 ${
                          speakingWordId === item.id
                            ? 'bg-amber-400 text-amber-950 scale-105 shadow-md animate-pulse'
                            : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-600 hover:text-white'
                        }`}
                        title="ฟังเสียงอ่าน Native"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Meaning */}
                    <div className="mt-2.5">
                      <p className="text-sm font-black text-slate-800 leading-snug">
                        {item.meaning}
                      </p>
                    </div>
                  </div>

                  {/* Bottom: Reading & Quick Practice */}
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                    <div>
                      {item.reading && (
                        <span className="text-[11px] font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-md inline-block">
                          {item.reading}
                        </span>
                      )}
                      {item.ipa && (
                        <span className="text-[10px] font-mono text-slate-400 ml-1.5">
                          /{item.ipa}/
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => handlePlayWordFromLibrary(item)}
                      className="text-[11px] font-black text-amber-600 hover:text-amber-700 bg-amber-50 hover:bg-amber-100 px-2.5 py-1 rounded-lg flex items-center gap-1 transition-all active:scale-95"
                      title="สะกดคำนี้ในเกมส์"
                    >
                      <span>สะกด 🐝</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="bg-white rounded-2xl p-3 border border-slate-200 shadow-sm flex items-center justify-between gap-2 max-w-md mx-auto">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 disabled:opacity-30 disabled:pointer-events-none flex items-center gap-1"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>ก่อนหน้า</span>
                </button>

                <div className="flex items-center gap-1 text-xs font-black text-slate-700">
                  <span>หน้า {currentPage} จาก {totalPages}</span>
                </div>

                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 disabled:opacity-30 disabled:pointer-events-none flex items-center gap-1"
                >
                  <span>ถัดไป</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: SPELLING BEE GAME (OXFORD 3,000) */}
        {activeTab === 'spelling' && (
          <div className="max-w-2xl mx-auto space-y-5">
            {/* Level Selector Bar */}
            <div className="bg-white rounded-2xl p-3 border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-black text-slate-500">ระดับศัพท์:</span>
                <select
                  value={spellingLevel}
                  onChange={(e) => {
                    setSpellingLevel(e.target.value);
                  }}
                  className="bg-slate-50 border border-slate-200 text-xs font-black text-slate-800 rounded-xl px-2.5 py-1.5 outline-none focus:border-amber-500"
                >
                  <option value="A1">🌱 Level A1 (ประถมต้น)</option>
                  <option value="A2">⭐ Level A2 (ประถมปลาย)</option>
                  <option value="B1">🚀 Level B1 (มัธยมต้น)</option>
                  <option value="B2">🏆 Level B2 (มัธยมปลาย-สากล)</option>
                  <option value="C1">🎓 Level C1 (มหาวิทยาลัย)</option>
                  <option value="C2">👑 Level C2 (เชี่ยวชาญขั้นสูง)</option>
                  <option value="ALL">🎲 สุ่มทุกระดับ (Mix A1-C2)</option>
                </select>
              </div>

              {/* Stats pill */}
              <div className="flex items-center gap-3 text-xs font-bold">
                <span className="text-amber-600 bg-amber-50 px-2.5 py-1 rounded-xl flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5 text-amber-500" />
                  <span>สตรีค: {streakCount}</span>
                </span>
                <span className="text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-xl flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>สะกดถูก: {solvedWordsCount} คำ</span>
                </span>
              </div>
            </div>

            {/* Game Card */}
            {currentSpellingWord ? (
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-6 text-center relative overflow-hidden">
                {/* Level badge */}
                <div className="flex items-center justify-between">
                  <span
                    className={`text-xs font-black px-3 py-1 rounded-full border shadow-xs ${getLevelBadgeBg(
                      currentSpellingWord.level
                    )}`}
                  >
                    Oxford {currentSpellingWord.level}
                  </span>

                  <button
                    onClick={() => {
                      sfx.playCorrect();
                      speakEnglish(currentSpellingWord.word);
                    }}
                    className="flex items-center gap-1.5 bg-sky-50 hover:bg-sky-100 text-sky-700 text-xs font-black px-3 py-1.5 rounded-xl transition-all active:scale-95 border border-sky-200"
                  >
                    <Volume2 className="w-4 h-4 text-sky-500" />
                    <span>ฟังเสียงอ่าน 🔊</span>
                  </button>
                </div>

                {/* Word Clues */}
                <div className="space-y-2">
                  <div className="text-xs font-bold text-slate-400">คำนี้แปลว่า:</div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                    {currentSpellingWord.meaning}
                  </h3>
                  <div className="flex items-center justify-center gap-2 pt-1">
                    {currentSpellingWord.reading && (
                      <span className="text-xs font-bold text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-200">
                        คำอ่าน: {currentSpellingWord.reading}
                      </span>
                    )}
                    {currentSpellingWord.pos && (
                      <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                        {currentSpellingWord.pos}
                      </span>
                    )}
                  </div>
                </div>

                {/* Answer Slots */}
                <div className="space-y-2">
                  <span className="text-xs font-bold text-slate-400 block">
                    แตะกล่องเพื่อลบตัวอักษรออกได้:
                  </span>
                  <div className="flex flex-wrap items-center justify-center gap-2 min-h-[68px]">
                    {currentSpellingWord.word.split('').map((_, idx) => {
                      const userTile = userTiles[idx];
                      return (
                        <button
                          key={idx}
                          onClick={() => userTile && handleReturnTile(userTile)}
                          className={`w-12 h-14 sm:w-14 sm:h-16 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl font-black border-2 transition-all shadow-inner active:scale-95 ${
                            userTile
                              ? isSpellingWon
                                ? 'bg-gradient-to-tr from-emerald-500 to-teal-600 text-white border-emerald-600 shadow-md scale-105'
                                : 'bg-gradient-to-tr from-indigo-500 to-blue-600 text-white border-indigo-700 shadow-md'
                              : 'bg-slate-100 border-slate-300/80 text-slate-300'
                          }`}
                        >
                          {userTile ? userTile.letter : ''}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Scrambled Tile Choices */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-bold text-slate-500 block">
                    แตะตัวอักษรที่สลับอยู่เพื่อจัดเรียง:
                  </span>
                  <div className="flex flex-wrap items-center justify-center gap-2.5 min-h-[56px]">
                    {scrambledTiles.map((tile) => (
                      <button
                        key={tile.id}
                        onClick={() => handlePickTile(tile)}
                        className="btn-pixar btn-pixar-amber w-12 h-12 sm:w-14 sm:h-14 rounded-2xl text-amber-950 font-black text-2xl sm:text-3xl flex items-center justify-center transition-all active:scale-90"
                      >
                        {tile.letter}
                      </button>
                    ))}
                    {scrambledTiles.length === 0 && !isSpellingWon && (
                      <span className="text-xs text-rose-500 font-bold">
                        ลองตรวจคำตอบ หรือแตะที่กล่องเพื่อจัดเรียงใหม่นะจ๊ะ
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-center gap-3 pt-4 border-t border-slate-100">
                  <button
                    onClick={handleResetSpelling}
                    className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl flex items-center gap-1.5 transition-all"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>เริ่มสะกดใหม่</span>
                  </button>

                  <button
                    onClick={handleNextWord}
                    className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl flex items-center gap-1.5 transition-all"
                  >
                    <Shuffle className="w-4 h-4" />
                    <span>สุ่มคำใหม่</span>
                  </button>

                  {isSpellingWon && (
                    <button
                      onClick={handleNextWord}
                      className="btn-pixar btn-pixar-emerald px-6 py-2.5 rounded-2xl text-xs font-black shadow-lg flex items-center gap-2 animate-bounce"
                    >
                      <span>
                        คำถัดไป 🚀 (+
                        {currentSpellingWord?.level === 'C1' || currentSpellingWord?.level === 'C2'
                          ? 20
                          : currentSpellingWord?.level === 'B1' || currentSpellingWord?.level === 'B2'
                          ? 15
                          : 10}{' '}
                        ดาว)
                      </span>
                      <Award className="w-4 h-4 text-yellow-200" />
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-8 text-center space-y-3">
                <p className="text-slate-500 font-bold">กำลังเตรียมคำศัพท์...</p>
                <button
                  onClick={() => initSpellingBee()}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold"
                >
                  เริ่มเกมส์
                </button>
              </div>
            )}
          </div>
        )}

        {/* TAB 3: PHONICS SOUNDBOARD A-Z */}
        {activeTab === 'phonics' && (
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-black text-slate-800">
                  แป้นเสียง Phonics Soundboard A-Z 🔤
                </h3>
                <p className="text-xs text-slate-500 font-bold">
                  แตะที่ตัวอักษรเพื่อฟังการออกเสียงโฟนิกส์และคำศัพท์ตัวอย่าง สะสมดาวได้ด้วย!
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 pt-2">
              {PHONICS_LIST.map((item) => (
                <div
                  key={item.letter}
                  onClick={() => {
                    speakEnglish(`${item.letter}. ${item.word}`);
                  }}
                  className="p-3 bg-gradient-to-tr from-sky-50 to-blue-50 hover:from-sky-100 rounded-2xl border-2 border-sky-200/80 cursor-pointer group active:scale-95 transition-all text-center shadow-xs"
                >
                  <div className="text-2xl mb-1">{item.emoji}</div>
                  <span className="text-2xl font-black text-sky-900 block group-hover:scale-110 transition-transform">
                    {item.letter}
                  </span>
                  <span className="text-xs font-bold text-sky-700 block mt-0.5">
                    {item.word}
                  </span>
                  <span className="text-[10px] text-slate-500 block">
                    {item.phonics}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Floating Pet Sanctuary Modal */}
      <PetModal
        isOpen={isPetModalOpen}
        onClose={() => setIsPetModalOpen(false)}
        activeProfile={activeProfile}
        profiles={profiles}
        onFeedStars={handleFeedStars}
        onSwitchPetType={handleSwitchPetType}
        onSwitchProfile={handleSwitchProfile}
        initialSubject="english"
      />

      {/* Reward Shop Modal */}
      <RewardShopModal
        isOpen={isRewardShopOpen}
        onClose={() => setIsRewardShopOpen(false)}
        activeProfile={activeProfile}
        profiles={profiles}
        onProfileUpdated={(updated) => {
          setProfiles((prev) => prev.map((p) => (p.id === updated.id ? updated : p)));
        }}
      />

      {/* Profile Manager Modal */}
      <ProfileManagerModal
        isOpen={isProfileManagerOpen}
        onClose={() => setIsProfileManagerOpen(false)}
        activeProfile={activeProfile}
        profiles={profiles}
        onProfilesChanged={(newProfiles, newActiveId) => {
          setProfiles(newProfiles);
          setActiveId(newActiveId);
          setActiveProfileId(newActiveId);
        }}
      />

      {/* Google Auth & Cloud Sync Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => {
          setIsAuthModalOpen(false);
          setCloudUser(getCloudUser());
        }}
        onDataRestored={() => {
          setProfiles(getStoredProfiles());
          setActiveId(getActiveProfileId());
          setCloudUser(getCloudUser());
        }}
      />
    </div>
  );
}
