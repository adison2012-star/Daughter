'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { PortalHeader } from '@/components/PortalHeader';
import { getStoredProfiles, getActiveProfileId, setActiveProfileId, addStarsToActive, DEFAULT_PROFILES, feedActivePet, switchActivePetType, getCloudUser } from '@/lib/storage';
import { UserProfile, PetType, SubjectType, CloudUser } from '@/types';
import { PetModal } from '@/components/PetModal';
import { RewardShopModal } from '@/components/RewardShopModal';
import { ProfileManagerModal } from '@/components/ProfileManagerModal';
import { AuthModal } from '@/components/AuthModal';
import { sfx, speakThai } from '@/lib/speech';
import confetti from 'canvas-confetti';
import { MATH_LEVELS, MathLevel, LEVEL1_SUBCATEGORIES, LEVEL2_SUBCATEGORIES } from '@/data/mathLevels';
import { generateMathQuestion, MathQuestion } from '@/lib/mathQuestionGenerator';
import {
  EXTENSIVE_MATH_EXAM_QUESTIONS,
  MathExamQuestion,
} from '@/data/mathExamQuestionBank';
import {
  Sparkles,
  Trophy,
  RotateCcw,
  CheckCircle2,
  BookOpen,
  HelpCircle,
  Lightbulb,
  ArrowRight,
  Flame,
  Award,
  Layers,
  GraduationCap,
  Wand2,
  ChevronDown,
  ChevronUp,
  Target,
  Percent,
  Circle,
  Hash,
  Scale,
  Users,
  Search,
  Filter,
  Dices,
  ChevronLeft,
  ChevronRight,
  Star,
  ShieldCheck,
} from 'lucide-react';

const EXAM_SOURCES = [
  { id: 'all', label: 'ทั้งหมด (500 ข้อ)', icon: '📚' },
  { id: 'ipst', label: 'สสวท. (ประถม-ม.ต้น)', icon: '🔬' },
  { id: 'posn', label: 'สอวน. (โอลิมปิก)', icon: '🏅' },
  { id: 'onet', label: 'O-NET (ป.6/ม.3/ม.6)', icon: '📝' },
  { id: 'alevel', label: 'A-Level (ม.ปลาย)', icon: '🎓' },
];

const EXAM_CATEGORIES = [
  { id: 'all', label: 'ทุกเนื้อหา' },
  { id: 'number_theory', label: '🔢 ทฤษฎีจำนวน & ห.ร.ม.' },
  { id: 'algebra', label: '🔣 พีชคณิต & พหุนาม' },
  { id: 'geometry_trig', label: '📐 เรขาคณิต & ตรีโกณมิติ' },
  { id: 'sequence_series', label: '📈 ลำดับและอนุกรม' },
  { id: 'probability_stats', label: '🎲 ความน่าจะเป็น & สถิติ' },
  { id: 'calculus', label: '📐 แคลคูลัส' },
  { id: 'applied_puzzles', label: '🧩 ปัญหาประยุกต์ & เชาวน์' },
];

export default function MathPage() {
  const [profiles, setProfiles] = useState<UserProfile[]>(DEFAULT_PROFILES);
  const [activeProfileId, setActiveId] = useState<string>(DEFAULT_PROFILES[0].id);
  const [isPetModalOpen, setIsPetModalOpen] = useState(false);
  const [isRewardShopOpen, setIsRewardShopOpen] = useState(false);
  const [isProfileManagerOpen, setIsProfileManagerOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [cloudUser, setCloudUser] = useState<CloudUser | null>(null);

  // Selected Level (Default: Level 2 - ประถมปลาย)
  const [selectedLevelNum, setSelectedLevelNum] = useState<number>(2);
  const [selectedL1Category, setSelectedL1Category] = useState<string>('all');
  const [selectedL2Category, setSelectedL2Category] = useState<string>('all');
  const [activeTab, setActiveTab] = useState<'exam' | 'quiz' | 'formulas' | 'lab'>('exam');

  // Exam Arena State (สสวท., สอวน., O-NET, A-Level 500 ข้อ - ข้อละ 20 ดาว)
  const [examSourceFilter, setExamSourceFilter] = useState<'all' | 'ipst' | 'posn' | 'onet' | 'alevel'>('all');
  const [examCategoryFilter, setExamCategoryFilter] = useState<string>('all');
  const [examSearchQuery, setExamSearchQuery] = useState('');
  const [examIdx, setExamIdx] = useState(0);
  const [selectedExamChoice, setSelectedExamChoice] = useState<number | null>(null);
  const [isExamAnswered, setIsExamAnswered] = useState(false);
  const [answeredExamQuestionIds, setAnsweredExamQuestionIds] = useState<string[]>([]);
  const [examStreak, setExamStreak] = useState(0);
  const [showExamStepByStep, setShowExamStepByStep] = useState(false);

  // Question State
  const [currentQuestion, setCurrentQuestion] = useState<MathQuestion | null>(null);
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [l1CorrectCount, setL1CorrectCount] = useState(0);
  const [l2CorrectCount, setL2CorrectCount] = useState(0);

  // Lab Tool States
  // Level 1 Lab: Multiplication & Division Sharing & Remainder
  const [multiTable, setMultiTable] = useState(3);
  const [shareItems, setShareItems] = useState(15);
  const [sharePeople, setSharePeople] = useState(3);
  const [remDividend, setRemDividend] = useState(17);
  const [remDivisor, setRemDivisor] = useState(5);

  // Level 2 Lab: Fractions Visualizer
  const [f1Num, setF1Num] = useState(1);
  const [f1Den, setF1Den] = useState(2);
  const [f2Num, setF2Num] = useState(1);
  const [f2Den, setF2Den] = useState(3);
  const [fracOp, setFracOp] = useState<'+' | '-'>('+');

  // Level 2 Lab: Discount & Profit Simulator
  const [tagPrice, setTagPrice] = useState(500);
  const [discountPercent, setDiscountPercent] = useState(20);
  const [isProfitMode, setIsProfitMode] = useState(false);

  // Level 2 Lab: Circle Area
  const [circleR, setCircleR] = useState(7);

  // Level 3-4 Lab: Pythagoras
  const [sideA, setSideA] = useState(3);
  const [sideB, setSideB] = useState(4);

  // Level 5-6 Lab: 2x2 Matrix Determinant
  const [matA, setMatA] = useState(3);
  const [matB, setMatB] = useState(2);
  const [matC, setMatC] = useState(1);
  const [matD, setMatD] = useState(4);

  useEffect(() => {
    const loaded = getStoredProfiles();
    const active = getActiveProfileId();
    const user = getCloudUser();
    if (loaded && loaded.length > 0) setProfiles(loaded);
    if (active) setActiveId(active);
    if (user) setCloudUser(user);
    loadNewQuestion(2, 'all');

    try {
      const saved = localStorage.getItem('duo_academy_math_exam_answered_v1');
      if (saved) {
        setAnsweredExamQuestionIds(JSON.parse(saved));
      }
    } catch (e) {
      // ignore
    }
  }, []);

  const activeProfile = profiles.find((p) => p.id === activeProfileId) || profiles[0] || DEFAULT_PROFILES[0];
  const activeLevel = MATH_LEVELS.find((l) => l.level === selectedLevelNum) || MATH_LEVELS[1];

  const handleSwitchProfile = (id: string) => {
    setActiveId(id);
    setActiveProfileId(id);
  };

  const handleEarnReward = (stars: number) => {
    const updated = addStarsToActive(stars, 'math');
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
    setProfiles((prev) =>
      prev.map((p) => (p.id === updated.id ? updated : p))
    );
  };

  // Exam Filtering & Memoization
  const filteredExamQuestions = useMemo(() => {
    return EXTENSIVE_MATH_EXAM_QUESTIONS.filter((q) => {
      if (examSourceFilter !== 'all' && q.examSource !== examSourceFilter) {
        return false;
      }
      if (examCategoryFilter !== 'all' && q.category !== examCategoryFilter) {
        return false;
      }
      if (examSearchQuery.trim()) {
        const query = examSearchQuery.toLowerCase().trim();
        const matchQ = q.q.toLowerCase().includes(query);
        const matchExp = q.explanation.toLowerCase().includes(query);
        const matchChoices = q.choices.some((c) => c.toLowerCase().includes(query));
        return matchQ || matchExp || matchChoices;
      }
      return true;
    });
  }, [examSourceFilter, examCategoryFilter, examSearchQuery]);

  const currentExam: MathExamQuestion =
    filteredExamQuestions[examIdx % (filteredExamQuestions.length || 1)] || EXTENSIVE_MATH_EXAM_QUESTIONS[0];

  const handleRandomExamQuestion = () => {
    sfx.playCorrect();
    if (filteredExamQuestions.length <= 1) return;
    const nextIdx = Math.floor(Math.random() * filteredExamQuestions.length);
    setExamIdx(nextIdx);
    setSelectedExamChoice(null);
    setIsExamAnswered(false);
    setShowExamStepByStep(false);
  };

  const handleNextExamQuestion = () => {
    sfx.playCorrect();
    setExamIdx((prev) => (prev + 1) % (filteredExamQuestions.length || 1));
    setSelectedExamChoice(null);
    setIsExamAnswered(false);
    setShowExamStepByStep(false);
  };

  const handlePrevExamQuestion = () => {
    sfx.playCorrect();
    setExamIdx((prev) => (prev - 1 + filteredExamQuestions.length) % (filteredExamQuestions.length || 1));
    setSelectedExamChoice(null);
    setIsExamAnswered(false);
    setShowExamStepByStep(false);
  };

  const handleAnswerExam = (choiceIdx: number) => {
    if (isExamAnswered || !currentExam) return;
    setSelectedExamChoice(choiceIdx);
    setIsExamAnswered(true);

    if (choiceIdx === currentExam.ans) {
      sfx.playCorrect();
      const isAlreadyAnswered = answeredExamQuestionIds.includes(currentExam.id);
      if (!isAlreadyAnswered) {
        handleEarnReward(currentExam.starsAwarded); // 20 stars!
        const nextAnswered = [...answeredExamQuestionIds, currentExam.id];
        setAnsweredExamQuestionIds(nextAnswered);
        try {
          localStorage.setItem('duo_academy_math_exam_answered_v1', JSON.stringify(nextAnswered));
        } catch (e) {
          // ignore
        }
        setExamStreak((prev) => prev + 1);
        confetti({
          particleCount: 75,
          spread: 85,
          origin: { y: 0.6 },
          colors: ['#F59E0B', '#10B981', '#6366F1', '#EC4899', '#38BDF8'],
        });
      }
    } else {
      sfx.playSoftTryAgain();
      setExamStreak(0);
    }
  };

  const loadNewQuestion = (level = selectedLevelNum, category?: string) => {
    const cat = category !== undefined
      ? category
      : (level === 1 ? selectedL1Category : level === 2 ? selectedL2Category : undefined);

    const q = generateMathQuestion(level, cat);
    setCurrentQuestion(q);
    setSelectedChoice(null);
    setIsAnswered(false);
    setIsCorrect(false);
    setShowExplanation(false);
  };

  const handleSelectLevel = (lvlNum: number) => {
    sfx.playCorrect();
    setSelectedLevelNum(lvlNum);
    loadNewQuestion(lvlNum);
  };

  const handleSelectL1Category = (catId: string) => {
    sfx.playCorrect();
    setSelectedL1Category(catId);
    loadNewQuestion(1, catId);
  };

  const handleSelectL2Category = (catId: string) => {
    sfx.playCorrect();
    setSelectedL2Category(catId);
    loadNewQuestion(2, catId);
  };

  const handleAnswer = (choice: string) => {
    if (isAnswered || !currentQuestion) return;
    setSelectedChoice(choice);
    setIsAnswered(true);

    if (choice === currentQuestion.correctAnswer) {
      setIsCorrect(true);
      setShowExplanation(true);
      sfx.playCorrect();
      setScore((s) => s + currentQuestion.points * 2);
      setStreak((st) => st + 1);
      if (selectedLevelNum === 1) setL1CorrectCount((c) => c + 1);
      if (selectedLevelNum === 2) setL2CorrectCount((c) => c + 1);
      handleEarnReward(currentQuestion.points);

      confetti({
        particleCount: 50,
        spread: 65,
        origin: { y: 0.6 },
      });
    } else {
      setIsCorrect(false);
      setShowExplanation(true);
      sfx.playSoftTryAgain();
      setStreak(0);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50/50 via-purple-50/30 to-amber-50/30 text-slate-800 pb-28">
      {/* Universal Top Header */}
      <PortalHeader
        activeProfile={activeProfile}
        profiles={profiles}
        onSwitchProfile={handleSwitchProfile}
        title="Math Magic"
        subtitle="คณิตศาสตร์ 6 ระดับสากล"
        showBackToPortal={true}
        currentSubject="math"
        onOpenPetSanctuary={() => setIsPetModalOpen(true)}
        onOpenRewardShop={() => setIsRewardShopOpen(true)}
        onOpenProfileManager={() => setIsProfileManagerOpen(true)}
        onOpenAuthModal={() => setIsAuthModalOpen(true)}
        cloudUser={cloudUser}
      />

      <main className="max-w-5xl mx-auto px-4 pt-6 space-y-6">
        {/* Mascot & Level Overview Banner */}
        <div className={`rounded-3xl p-6 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-5 border-2 border-white/20 bg-gradient-to-r ${activeLevel.color}`}>
          <div className="flex items-center gap-4 z-10">
            <div className="relative w-18 h-18 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border-2 border-white/30 shadow-inner flex-shrink-0 p-1">
              <Image
                src="/images/xiaolong/math.png"
                alt="เสี่ยวหลง"
                width={70}
                height={70}
                className="object-contain drop-shadow"
              />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-white/20 backdrop-blur-md text-amber-200 text-xs font-black px-2.5 py-0.5 rounded-full border border-white/30">
                  🐾 เสี่ยวหลงติวเตอร์
                </span>
                <span className="bg-amber-300 text-indigo-950 text-[11px] font-black px-2 py-0.5 rounded-full">
                  {activeLevel.gradeEn}
                </span>
                {selectedLevelNum === 1 && (
                  <span className="bg-emerald-400 text-emerald-950 text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-xs">
                    ✖️➗ โหมดคูณ-หารคล่องแคล่ว
                  </span>
                )}
                {selectedLevelNum === 2 && (
                  <span className="bg-rose-500 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-xs animate-pulse">
                    🌟 โหมดประถมปลาย (ป.4–ป.6)
                  </span>
                )}
              </div>
              <h2 className="text-xl sm:text-2xl font-black tracking-tight mt-1">
                {activeLevel.title}
              </h2>
              <p className="text-xs text-white/90 font-medium mt-1 max-w-lg leading-relaxed">
                {activeLevel.description}
              </p>
            </div>
          </div>

          {/* Sibling Score & Combo */}
          <div className="flex items-center gap-3 bg-white/15 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/20 z-10">
            <Trophy className="w-6 h-6 text-yellow-300" />
            <div>
              <span className="text-[11px] block font-bold text-white/80">คะแนนคณิตศาสตร์</span>
              <span className="text-lg font-black text-white">{score} แต้ม</span>
            </div>
            {streak > 1 && (
              <span className="ml-1 bg-rose-500 text-white text-xs font-black px-2 py-0.5 rounded-full animate-bounce">
                Streak x{streak} 🔥
              </span>
            )}
          </div>
        </div>

        {/* 6 INTERNATIONAL PROGRESSIVE LEVEL PILLS */}
        <div className="bg-white rounded-3xl p-3.5 shadow-sm border border-slate-200 space-y-2">
          <div className="flex items-center justify-between px-1">
            <span className="text-xs font-black text-slate-500 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-indigo-600" />
              <span>เลือกระดับชั้นการเรียนรู้ (สากล):</span>
            </span>
            <span className="text-[11px] font-bold text-indigo-600">
              {activeLevel.gradeTh}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {MATH_LEVELS.map((lvl) => {
              const isSelected = selectedLevelNum === lvl.level;
              const isL1 = lvl.level === 1;
              const isL2 = lvl.level === 2;
              return (
                <button
                  key={lvl.level}
                  onClick={() => handleSelectLevel(lvl.level)}
                  className={`p-2.5 rounded-2xl text-left transition-all border-2 flex flex-col justify-between relative ${
                    isSelected
                      ? `bg-indigo-600 text-white border-indigo-700 shadow-md scale-102`
                      : isL1
                      ? 'bg-emerald-50/80 hover:bg-emerald-100 text-slate-800 border-emerald-300'
                      : isL2
                      ? 'bg-blue-50/80 hover:bg-blue-100 text-slate-800 border-blue-300'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                  }`}
                >
                  {isL1 && !isSelected && (
                    <span className="absolute -top-1.5 -right-1 text-[9px] bg-emerald-600 text-white px-1.5 py-0.2 rounded-full font-black">
                      คูณ-หาร ✖️➗
                    </span>
                  )}
                  {isL2 && !isSelected && (
                    <span className="absolute -top-1.5 -right-1 text-[9px] bg-rose-500 text-white px-1.5 py-0.2 rounded-full font-black">
                      ประถมปลาย 👧👧
                    </span>
                  )}
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-black px-1.5 py-0.5 rounded-md ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
                    }`}>
                      Level {lvl.level}
                    </span>
                    <span className="text-sm">
                      {lvl.level === 1 ? '🌱' : lvl.level === 2 ? '⚡' : lvl.level === 3 ? '🔮' : lvl.level === 4 ? '🌌' : lvl.level === 5 ? '📐' : '🏛️'}
                    </span>
                  </div>
                  <div className="mt-1.5">
                    <span className="text-xs font-black block leading-tight">
                      {lvl.level === 1 ? 'ประถมต้น (คูณ-หาร)' : lvl.level === 2 ? 'ประถมปลาย (ป.4-6)' : lvl.level <= 4 ? 'มัธยม' : 'มหาวิทยาลัย'}
                    </span>
                    <span className={`text-[10px] block truncate font-medium ${isSelected ? 'text-indigo-100' : 'text-slate-500'}`}>
                      {lvl.gradeTh.split('(')[0].trim()}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* SPECIAL SUB-CATEGORY FILTER FOR LEVEL 1 (ประถมต้น เน้นคูณ-หาร) */}
        {selectedLevelNum === 1 && (
          <div className="bg-gradient-to-r from-emerald-50/90 via-teal-50/80 to-amber-50/90 rounded-3xl p-4 border-2 border-emerald-300 shadow-sm space-y-3 animate-fade-in">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="text-xl">✖️➗</span>
                <div>
                  <h3 className="text-xs sm:text-sm font-black text-emerald-950">
                    หมวดฝึกฝนการคูณและการหารอย่างคล่องแคล่ว (ประถมต้น):
                  </h3>
                  <p className="text-[11px] text-emerald-700 font-semibold">
                    เลือกหมวดที่ต้องการฝึกฝน หรือกด "รวมคูณ-หาร" เพื่อสุ่มโจทย์ฝึกความเร็ว
                  </p>
                </div>
              </div>

              {l1CorrectCount > 0 && (
                <div className="bg-white/90 border border-emerald-300 px-3 py-1 rounded-xl text-xs font-black text-emerald-900 shadow-xs flex items-center gap-1.5 self-start sm:self-auto">
                  <Award className="w-4 h-4 text-emerald-600" />
                  <span>ทำถูกคูณ-หารแล้ว {l1CorrectCount} ข้อ</span>
                </div>
              )}
            </div>

            {/* Level 1 Subcategory Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {LEVEL1_SUBCATEGORIES.map((cat) => {
                const isCatActive = selectedL1Category === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleSelectL1Category(cat.id)}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-2xl text-xs font-black whitespace-nowrap transition-all shadow-xs ${
                      isCatActive
                        ? 'bg-emerald-600 text-white shadow-md scale-102 border-2 border-emerald-700'
                        : 'bg-white hover:bg-emerald-50 text-slate-700 border border-emerald-200'
                    }`}
                    title={cat.desc}
                  >
                    <span>{cat.icon}</span>
                    <span>{cat.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* SPECIAL SUB-CATEGORY FILTER FOR LEVEL 2 (ประถมปลาย ป.4–ป.6) */}
        {selectedLevelNum === 2 && (
          <div className="bg-gradient-to-r from-blue-50/90 via-indigo-50/80 to-purple-50/90 rounded-3xl p-4 border-2 border-indigo-200 shadow-sm space-y-3 animate-fade-in">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="text-xl">📚</span>
                <div>
                  <h3 className="text-xs sm:text-sm font-black text-indigo-950">
                    คลังหัวข้อฝึกฝนเข้มข้นระดับประถมปลาย (ป.4–ป.6):
                  </h3>
                  <p className="text-[11px] text-indigo-700 font-semibold">
                    เลือกหมวดที่ต้องการฝึกให้คล่อง หรือกด "รวมทุกหมวด" เพื่อสุ่มข้อสอบแข่งขัน
                  </p>
                </div>
              </div>

              {l2CorrectCount > 0 && (
                <div className="bg-white/90 border border-indigo-200 px-3 py-1 rounded-xl text-xs font-black text-indigo-900 shadow-xs flex items-center gap-1.5 self-start sm:self-auto">
                  <Award className="w-4 h-4 text-amber-500" />
                  <span>ทำถูกแล้ว {l2CorrectCount} ข้อ</span>
                </div>
              )}
            </div>

            {/* Level 2 Subcategory Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {LEVEL2_SUBCATEGORIES.map((cat) => {
                const isCatActive = selectedL2Category === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleSelectL2Category(cat.id)}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-2xl text-xs font-black whitespace-nowrap transition-all shadow-xs ${
                      isCatActive
                        ? 'bg-indigo-600 text-white shadow-md scale-102 border-2 border-indigo-700'
                        : 'bg-white hover:bg-indigo-50 text-slate-700 border border-indigo-100'
                    }`}
                    title={cat.desc}
                  >
                    <span>{cat.icon}</span>
                    <span>{cat.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* MODE NAVIGATION TABS */}
        <div className="flex flex-wrap items-center justify-center gap-2 bg-white p-2 rounded-2xl border border-slate-200 shadow-sm">
          <button
            onClick={() => setActiveTab('exam')}
            className={`px-4 py-2.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 ${
              activeTab === 'exam'
                ? 'bg-gradient-to-r from-amber-500 via-rose-500 to-indigo-600 text-white shadow-md ring-2 ring-amber-300 scale-102'
                : 'text-slate-700 hover:bg-amber-50 border border-amber-200'
            }`}
          >
            <span>🏆</span>
            <span>สนามสอบแข่งขัน 500 ข้อ (สสวท. • สอวน. • O-NET • A-Level) ⭐ +20</span>
          </button>
          <button
            onClick={() => setActiveTab('quiz')}
            className={`px-4 py-2.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 ${
              activeTab === 'quiz'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <span>🎯</span>
            <span>โจทย์ฝึกคิดคำนวณ (Practice Arena)</span>
          </button>
          <button
            onClick={() => setActiveTab('formulas')}
            className={`px-4 py-2.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 ${
              activeTab === 'formulas'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <span>📖</span>
            <span>คลังสูตรและทฤษฎีบท (Formula Vault)</span>
          </button>
          <button
            onClick={() => setActiveTab('lab')}
            className={`px-4 py-2.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 ${
              activeTab === 'lab'
                ? 'bg-amber-500 text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <span>🔮</span>
            <span>ห้องทดลองคณิตศาสตร์ (Interactive Lab)</span>
          </button>
        </div>

        {/* TAB 0: COMPETITION EXAM ARENA (500 QUESTIONS) */}
        {activeTab === 'exam' && currentExam && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-6 animate-fade-in">
            {/* Header info & Stats */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-amber-500 text-white rounded-full text-xs font-black shadow-xs flex items-center gap-1">
                    <Trophy className="w-3.5 h-3.5" />
                    <span>สนามสอบประลองยุทธ 500 ข้อ</span>
                  </span>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-black border border-emerald-300">
                    ⭐ รางวัลสูงพิเศษ +20 ดาว/ข้อ
                  </span>
                  {answeredExamQuestionIds.includes(currentExam.id) && (
                    <span className="px-2.5 py-0.5 bg-green-500 text-white rounded-full text-[10px] font-black flex items-center gap-1 shadow-xs">
                      <CheckCircle2 className="w-3 h-3" /> ผ่านแล้ว
                    </span>
                  )}
                </div>
                <h3 className="text-lg sm:text-xl font-black text-slate-800 mt-2">
                  คลังข้อสอบแข่งขัน สสวท. • สอวน. • O-NET • A-Level
                </h3>
                <p className="text-xs text-slate-500 font-semibold mt-0.5">
                  ข้อสอบมาตรฐานพร้อมเฉลยและวิธีทำอย่างละเอียดทุกข้อเพื่อความเป็นเลิศทางคณิตศาสตร์
                </p>
              </div>

              {/* Progress Counters & Actions */}
              <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap justify-end">
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 px-3.5 py-1.5 rounded-2xl text-right shadow-xs">
                  <span className="text-[10px] font-bold text-amber-700 block">
                    ผ่านแล้ว (สะสม {answeredExamQuestionIds.length * 20} ⭐)
                  </span>
                  <span className="text-xs font-black text-amber-900">
                    {answeredExamQuestionIds.length} / {EXTENSIVE_MATH_EXAM_QUESTIONS.length} ข้อ ({Math.round((answeredExamQuestionIds.length / EXTENSIVE_MATH_EXAM_QUESTIONS.length) * 100)}%)
                  </span>
                </div>

                <button
                  onClick={handleRandomExamQuestion}
                  className="px-3.5 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white rounded-2xl text-xs font-black transition-all flex items-center gap-1.5 shadow-md active:scale-95"
                >
                  <Dices className="w-4 h-4" />
                  <span>🎲 สุ่มข้อสอบใหม่</span>
                </button>
              </div>
            </div>

            {/* Exam Source Filters (สสวท., สอวน., O-NET, A-Level) */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                {EXAM_SOURCES.map((src) => {
                  const isActive = examSourceFilter === src.id;
                  return (
                    <button
                      key={src.id}
                      onClick={() => {
                        sfx.playCorrect();
                        setExamSourceFilter(src.id as any);
                        setExamIdx(0);
                        setSelectedExamChoice(null);
                        setIsExamAnswered(false);
                        setShowExamStepByStep(false);
                      }}
                      className={`px-3 py-1.5 rounded-xl text-xs font-black whitespace-nowrap transition-all flex items-center gap-1.5 border ${
                        isActive
                          ? 'bg-indigo-600 text-white border-indigo-700 shadow-md scale-102'
                          : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                      }`}
                    >
                      <span>{src.icon}</span>
                      <span>{src.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Category Filter Pills & Search */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none flex-1">
                  {EXAM_CATEGORIES.map((cat) => {
                    const isActive = examCategoryFilter === cat.id;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => {
                          sfx.playCorrect();
                          setExamCategoryFilter(cat.id);
                          setExamIdx(0);
                          setSelectedExamChoice(null);
                          setIsExamAnswered(false);
                          setShowExamStepByStep(false);
                        }}
                        className={`px-2.5 py-1 rounded-lg text-[11px] font-bold whitespace-nowrap transition-all border ${
                          isActive
                            ? 'bg-amber-500 text-white border-amber-600 shadow-xs'
                            : 'bg-white hover:bg-amber-50 text-slate-600 border-slate-200'
                        }`}
                      >
                        {cat.label}
                      </button>
                    );
                  })}
                </div>

                <div className="relative min-w-[220px]">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    value={examSearchQuery}
                    onChange={(e) => {
                      setExamSearchQuery(e.target.value);
                      setExamIdx(0);
                      setSelectedExamChoice(null);
                      setIsExamAnswered(false);
                      setShowExamStepByStep(false);
                    }}
                    placeholder="ค้นหาโจทย์ หรือ คำอธิบาย..."
                    className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:bg-white"
                  />
                  {examSearchQuery && (
                    <button
                      onClick={() => setExamSearchQuery('')}
                      className="absolute right-2.5 top-2 text-xs text-slate-400 hover:text-slate-600 font-bold"
                    >
                      ✕
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Navigation and Question Info Bar */}
            <div className="flex items-center justify-between bg-slate-50 px-4 py-2.5 rounded-2xl border border-slate-200">
              <div className="flex items-center gap-2">
                <span className={`text-[11px] font-black px-2.5 py-0.5 rounded-md ${
                  currentExam.examSource === 'ipst'
                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                    : currentExam.examSource === 'posn'
                    ? 'bg-purple-100 text-purple-800 border border-purple-300'
                    : currentExam.examSource === 'onet'
                    ? 'bg-sky-100 text-sky-800 border border-sky-300'
                    : 'bg-rose-100 text-rose-800 border border-rose-300'
                }`}>
                  {currentExam.examSourceLabel}
                </span>
                <span className="text-xs font-bold text-slate-600">
                  {currentExam.gradeLabel} • {currentExam.categoryLabel}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrevExamQuestion}
                  disabled={filteredExamQuestions.length <= 1}
                  className="p-1.5 hover:bg-white rounded-lg text-slate-600 disabled:opacity-30 border border-transparent hover:border-slate-200 transition-all"
                  title="ข้อก่อนหน้า"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-black text-slate-700">
                  ข้อ {examIdx + 1} / {filteredExamQuestions.length}
                </span>
                <button
                  onClick={handleNextExamQuestion}
                  disabled={filteredExamQuestions.length <= 1}
                  className="p-1.5 hover:bg-white rounded-lg text-slate-600 disabled:opacity-30 border border-transparent hover:border-slate-200 transition-all"
                  title="ข้อถัดไป"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Exam Question Card */}
            <div className="py-6 px-5 sm:px-8 bg-gradient-to-tr from-amber-50/70 via-indigo-50/50 to-white rounded-3xl border-2 border-indigo-100 shadow-inner">
              <span className="text-xs font-black text-amber-600 uppercase tracking-wider block mb-2">
                โจทย์ข้อที่ #{currentExam.id.replace('math_q_', '')} ({currentExam.examSourceLabel})
              </span>
              <h3 className="text-lg sm:text-2xl font-black text-slate-900 leading-snug">
                {currentExam.q}
              </h3>
            </div>

            {/* Choices Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-3xl mx-auto">
              {currentExam.choices.map((choice, idx) => {
                let btnStyle = 'bg-white hover:bg-indigo-50/80 text-slate-800 border-2 border-slate-200';
                if (isExamAnswered) {
                  if (idx === currentExam.ans) {
                    btnStyle = 'bg-emerald-500 text-white border-2 border-emerald-600 shadow-md scale-101 ring-2 ring-emerald-300';
                  } else if (idx === selectedExamChoice) {
                    btnStyle = 'bg-rose-500 text-white border-2 border-rose-600 shadow-md';
                  } else {
                    btnStyle = 'bg-slate-100 text-slate-400 border border-slate-200 opacity-40';
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={isExamAnswered}
                    onClick={() => handleAnswerExam(idx)}
                    className={`p-4 sm:p-5 rounded-2xl text-base sm:text-lg font-black transition-all shadow-xs active:scale-95 flex items-center justify-between text-left ${btnStyle}`}
                  >
                    <span>{choice}</span>
                    {isExamAnswered && idx === currentExam.ans && (
                      <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 ml-2" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation & Step-by-Step Card */}
            {isExamAnswered && (
              <div className="mt-6 pt-5 border-t border-slate-100 animate-fade-in space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    {selectedExamChoice === currentExam.ans ? (
                      <span className="text-emerald-700 font-black text-sm flex items-center gap-1.5 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200">
                        <Sparkles className="w-5 h-5 text-amber-500" />
                        ยอดเยี่ยมมาก! ได้รับ +{currentExam.starsAwarded} ดวงดาววิเศษ 🌟
                      </span>
                    ) : (
                      <span className="text-rose-700 font-black text-sm bg-rose-50 px-3 py-1.5 rounded-xl border border-rose-200">
                        ยังไม่ถูกต้องจ้า คำตอบที่ถูกต้องคือ: "{currentExam.choices[currentExam.ans]}"
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => setShowExamStepByStep(!showExamStepByStep)}
                    className="text-xs font-black text-indigo-700 hover:text-indigo-900 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-xl border border-indigo-200 flex items-center gap-1 transition-all self-start sm:self-auto"
                  >
                    <BookOpen className="w-4 h-4 text-indigo-600" />
                    <span>{showExamStepByStep ? 'ซ่อนวิธีทำ' : '📖 ดูวิธีทำทีละสเต็ป'}</span>
                    {showExamStepByStep ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>

                {/* Academic Explanation */}
                <div className="bg-emerald-50/80 border-2 border-emerald-200 rounded-3xl p-5 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-black text-emerald-950">
                    <Lightbulb className="w-4 h-4 text-amber-500" />
                    <span>คำอธิบายเฉลยทางวิชาการ (Academic Solution):</span>
                  </div>
                  <p className="text-xs font-medium text-slate-800 leading-relaxed pl-1">
                    {currentExam.explanation}
                  </p>
                </div>

                {/* Step-by-Step breakdown */}
                {showExamStepByStep && currentExam.stepByStep && currentExam.stepByStep.length > 0 && (
                  <div className="bg-indigo-50/80 border-2 border-indigo-200 rounded-3xl p-5 space-y-3 animate-fade-in">
                    <div className="flex items-center gap-1.5 text-xs font-black text-indigo-950">
                      <GraduationCap className="w-4 h-4 text-indigo-600" />
                      <span>ขั้นตอนการคำนวณและแสดงวิธีทำทีละบรรทัด (Step-by-Step Proof):</span>
                    </div>
                    <div className="space-y-2 pl-2">
                      {currentExam.stepByStep.map((step, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-2.5 text-xs font-semibold text-slate-700 leading-relaxed">
                          <span className="w-5 h-5 rounded-full bg-indigo-200 text-indigo-900 flex items-center justify-center text-[10px] font-black flex-shrink-0 mt-0.5">
                            {sIdx + 1}
                          </span>
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-center gap-3 pt-3">
                  <button
                    onClick={handleNextExamQuestion}
                    className="btn-pixar btn-pixar-rose px-6 py-2.5 rounded-2xl text-xs font-black shadow-md inline-flex items-center gap-2"
                  >
                    <span>ทำข้อถัดไป 🚀</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleRandomExamQuestion}
                    className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-2xl text-xs font-black transition-all flex items-center gap-1.5"
                  >
                    <Dices className="w-4 h-4" />
                    <span>สุ่มข้ออื่น 🎲</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 1: PRACTICE ARENA (QUIZ) */}
        {activeTab === 'quiz' && currentQuestion && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-6">
            {/* Header info */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="text-[11px] font-black text-indigo-600 uppercase tracking-wider block">
                  {activeLevel.badge} • {currentQuestion.topic}
                </span>
                <span className="text-xs text-slate-500 font-bold">
                  รางวัลข้อนี้: +{currentQuestion.points} ดวงดาว ⭐
                </span>
              </div>

              <button
                onClick={() => loadNewQuestion()}
                className="px-3.5 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 border border-indigo-200 shadow-xs"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>สุ่มโจทย์ใหม่</span>
              </button>
            </div>

            {/* Question Card Display */}
            <div className="py-8 px-4 bg-gradient-to-tr from-indigo-50/80 via-purple-50/60 to-white rounded-3xl border-2 border-indigo-100 text-center relative shadow-inner">
              <span className="text-xs font-black text-indigo-500 block mb-2">
                คำถามทดสอบความคิด:
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-snug max-w-2xl mx-auto">
                {currentQuestion.question}
              </h3>
            </div>

            {/* Choices Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-2xl mx-auto">
              {currentQuestion.choices.map((choice, idx) => {
                let btnStyle = 'bg-white hover:bg-indigo-50/70 text-slate-900 border-2 border-slate-200';
                if (isAnswered) {
                  if (choice === currentQuestion.correctAnswer) {
                    btnStyle = 'bg-emerald-500 text-white border-2 border-emerald-600 shadow-md scale-102';
                  } else if (choice === selectedChoice) {
                    btnStyle = 'bg-rose-500 text-white border-2 border-rose-600 shadow-md';
                  } else {
                    btnStyle = 'bg-slate-100 text-slate-400 border border-slate-200 opacity-40';
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={isAnswered}
                    onClick={() => handleAnswer(choice)}
                    className={`p-4 sm:p-5 rounded-2xl text-lg sm:text-xl font-black transition-all shadow-xs active:scale-95 flex items-center justify-between ${btnStyle}`}
                  >
                    <span>{choice}</span>
                    {isAnswered && choice === currentQuestion.correctAnswer && (
                      <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Step-by-Step Explanation Card */}
            {isAnswered && (
              <div className="mt-6 pt-4 border-t border-slate-100 animate-fade-in space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {isCorrect ? (
                      <span className="text-emerald-600 font-black text-sm flex items-center gap-1.5">
                        <Sparkles className="w-5 h-5 text-amber-500" />
                        ถูกต้องยอดเยี่ยม! ได้รับ +{currentQuestion.points} ดวงดาววิเศษ 🌟
                      </span>
                    ) : (
                      <span className="text-rose-600 font-black text-sm">
                        ยังไม่ถูกต้องจ้า คำตอบที่ถูกต้องคือ "{currentQuestion.correctAnswer}"
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => setShowExplanation(!showExplanation)}
                    className="text-xs font-black text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
                  >
                    <span>{showExplanation ? 'ซ่อนวิธีทำ' : 'ดูวิธีทำทีละสเต็ป'}</span>
                    {showExplanation ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>

                {showExplanation && (
                  <div className="bg-indigo-50/70 border-2 border-indigo-200 rounded-3xl p-5 space-y-2.5">
                    <div className="flex items-center gap-1.5 text-xs font-black text-indigo-950">
                      <Lightbulb className="w-4 h-4 text-amber-500" />
                      <span>ขั้นตอนการคิดและวิธีทำอย่างละเอียด (Step-by-Step):</span>
                    </div>
                    <div className="space-y-1.5 pl-2">
                      {currentQuestion.stepByStep.map((step, sIdx) => (
                        <p key={sIdx} className="text-xs font-semibold text-slate-700 leading-relaxed">
                          {step}
                        </p>
                      ))}
                    </div>
                  </div>
                )}

                <div className="text-center pt-2">
                  <button
                    onClick={() => loadNewQuestion()}
                    className="btn-pixar btn-pixar-rose px-6 py-2.5 rounded-2xl text-xs font-black shadow-md inline-flex items-center gap-2"
                  >
                    <span>ฝึกข้อถัดไป 🚀</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: FORMULA & THEORY VAULT */}
        {activeTab === 'formulas' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <h3 className="text-lg font-black text-slate-800">
                  คลังสูตรลับและทฤษฎีบทประจำ {activeLevel.gradeTh} 📖
                </h3>
                <p className="text-xs text-slate-500 font-bold">
                  สรุปหัวใจสำคัญของเนื้อหาคณิตศาสตร์ตามมาตรฐานสากล
                </p>
              </div>
              <span className="bg-indigo-100 text-indigo-800 text-xs font-black px-3 py-1 rounded-full">
                Level {activeLevel.level}
              </span>
            </div>

            {/* Topics Overview */}
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
              <h4 className="text-xs font-black text-slate-700 mb-2 flex items-center gap-1">
                <BookOpen className="w-4 h-4 text-indigo-600" />
                <span>หัวข้อการเรียนรู้ในระดับนี้:</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeLevel.topics.map((t, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-bold text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Formula Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {activeLevel.formulas.map((f, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-3xl bg-gradient-to-tr from-indigo-50/60 to-purple-50/40 border-2 border-indigo-200/80 space-y-2.5 shadow-xs"
                >
                  <span className="text-xs font-black text-indigo-900 block">{f.name}</span>
                  <div className="bg-white p-3 rounded-2xl border border-indigo-100 text-center font-mono font-black text-base text-purple-950 shadow-inner">
                    {f.formula}
                  </div>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    {f.explanation}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: INTERACTIVE LAB (CHANGES DYNAMICALLY BY LEVEL TIER) */}
        {activeTab === 'lab' && (
          <div className="space-y-6">
            {/* LEVEL 1 (ประถมต้น) INTERACTIVE LAB: MULTIPLICATION & EQUAL SHARING */}
            {selectedLevelNum === 1 && (
              <div className="space-y-6 animate-fade-in">
                {/* Tool 1: Multiplication Table */}
                <div className="bg-white rounded-3xl p-6 shadow-sm border-2 border-emerald-300 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-xs font-black text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                        เครื่องมือที่ 1: ท่องสูตรคูณแอนิเมชัน
                      </span>
                      <h3 className="text-base font-black text-slate-800 mt-1">
                        ตารางสูตรคูณลูกแก้วเวทมนตร์ (แม่ 2–12) 🔮
                      </h3>
                      <p className="text-xs text-slate-500 font-bold">
                        แตะเลือกแม่สูตรคูณ และแตะที่ช่องเพื่อฟังเสียงอ่านท่องจำ (ไม่มีการแจกแต้ม)
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-sm scrollbar-none">
                      {[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
                        <button
                          key={num}
                          onClick={() => {
                            sfx.playCorrect();
                            setMultiTable(num);
                          }}
                          className={`w-8 h-8 rounded-xl text-xs font-black transition-all ${
                            multiTable === num
                              ? 'bg-emerald-600 text-white shadow-xs scale-105'
                              : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                          }`}
                        >
                          {num}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                      <div
                        key={i}
                        onClick={() => {
                          speakThai(`${multiTable} คูณ ${i} ได้ ${multiTable * i}`);
                        }}
                        className="p-3 bg-gradient-to-tr from-emerald-50 to-teal-50/50 hover:from-emerald-100 rounded-2xl border border-emerald-200 cursor-pointer text-center transition-all shadow-xs active:scale-95"
                        title="แตะเพื่อฟังเสียงท่องสูตรคูณ"
                      >
                        <span className="text-[11px] font-bold text-slate-500 block">{multiTable} × {i}</span>
                        <span className="text-xl font-black text-emerald-950 block mt-0.5">{multiTable * i}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tool 2: Equal Sharing & Division Visualizer */}
                <div className="bg-white rounded-3xl p-6 shadow-sm border-2 border-teal-300 space-y-4">
                  <div>
                    <span className="text-xs font-black text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded-full">
                      เครื่องมือที่ 2: จำลองการแบ่งของเท่าๆ กัน
                    </span>
                    <h3 className="text-base font-black text-slate-800 mt-1">
                      เครื่องจำลองการหารแบ่งของให้เพื่อนเท่าๆ กัน 🍪
                    </h3>
                    <p className="text-xs text-slate-500 font-bold">
                      ปรับจำนวนสิ่งของและจำนวนเพื่อนเพื่อดูว่าแต่ละคนได้เท่าใด
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-teal-50/60 p-5 rounded-3xl border border-teal-200">
                    <div>
                      <label className="text-xs font-black text-teal-950 block mb-1">
                        จำนวนสิ่งของทั้งหมด: {shareItems} ชิ้น
                      </label>
                      <input
                        type="range"
                        min="6"
                        max="48"
                        step="1"
                        value={shareItems}
                        onChange={(e) => setShareItems(Number(e.target.value))}
                        className="w-full accent-teal-600"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-black text-teal-950 block mb-1">
                        จำนวนเพื่อนที่มาแบ่ง: {sharePeople} คน
                      </label>
                      <input
                        type="range"
                        min="2"
                        max="8"
                        value={sharePeople}
                        onChange={(e) => setSharePeople(Number(e.target.value))}
                        className="w-full accent-teal-600"
                      />
                    </div>
                  </div>

                  {(() => {
                    const eachGets = Math.floor(shareItems / sharePeople);
                    const leftOver = shareItems % sharePeople;
                    return (
                      <div className="bg-gradient-to-tr from-teal-50 to-emerald-50 border-2 border-teal-300 p-5 rounded-3xl flex flex-col sm:flex-row items-center justify-around gap-4 text-center">
                        <div>
                          <span className="text-xs font-bold text-slate-500 block">ประโยคสัญลักษณ์การหาร:</span>
                          <span className="text-xl font-mono font-black text-teal-950">{shareItems} ÷ {sharePeople}</span>
                        </div>
                        <div className="w-px h-12 bg-teal-200 hidden sm:block"></div>
                        <div>
                          <span className="text-xs font-bold text-slate-500 block">เพื่อนแต่ละคนได้:</span>
                          <span className="text-3xl font-black text-emerald-600">{eachGets} ชิ้น</span>
                        </div>
                        <div className="w-px h-12 bg-teal-200 hidden sm:block"></div>
                        <div>
                          <span className="text-xs font-bold text-slate-500 block">เศษที่เหลือ:</span>
                          <span className={`text-2xl font-black ${leftOver > 0 ? 'text-amber-600' : 'text-slate-400'}`}>
                            {leftOver > 0 ? `${leftOver} ชิ้น (หารไม่ลงตัว)` : '0 ชิ้น (หารลงตัวพอดี)'}
                          </span>
                        </div>
                      </div>
                    );
                  })()}
                </div>

                {/* Tool 3: Division with Remainder Calculator */}
                <div className="bg-white rounded-3xl p-6 shadow-sm border-2 border-amber-300 space-y-4">
                  <div>
                    <span className="text-xs font-black text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full">
                      เครื่องมือที่ 3: ฝึกคำนวณการหารมีเศษ
                    </span>
                    <h3 className="text-base font-black text-slate-800 mt-1">
                      เครื่องคิดการหารมีเศษพร้อมการตรวจคำตอบ 🧺
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-amber-50/60 p-5 rounded-3xl border border-amber-200">
                    <div>
                      <label className="text-xs font-black text-amber-950 block mb-1">
                        ตัวตั้ง: {remDividend}
                      </label>
                      <input
                        type="range"
                        min="5"
                        max="50"
                        value={remDividend}
                        onChange={(e) => setRemDividend(Number(e.target.value))}
                        className="w-full accent-amber-600"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-black text-amber-950 block mb-1">
                        ตัวหาร: {remDivisor}
                      </label>
                      <input
                        type="range"
                        min="2"
                        max="9"
                        value={remDivisor}
                        onChange={(e) => setRemDivisor(Number(e.target.value))}
                        className="w-full accent-amber-600"
                      />
                    </div>
                  </div>

                  {(() => {
                    const q = Math.floor(remDividend / remDivisor);
                    const r = remDividend % remDivisor;
                    return (
                      <div className="bg-amber-50 border-2 border-amber-200 p-5 rounded-3xl space-y-2 text-center">
                        <div className="text-2xl font-black text-indigo-950 font-mono">
                          {remDividend} ÷ {remDivisor} = <span className="text-rose-600">{q}</span> {r > 0 ? `เศษ ${r}` : '(ลงตัว)'}
                        </div>
                        <div className="text-xs font-bold text-amber-800 pt-1">
                          ตรวจคำตอบ: ({remDivisor} × {q}) + {r} = {remDivisor * q} + {r} = {remDividend} (ถูกต้อง 100%!)
                        </div>
                      </div>
                    );
                  })()}
                </div>
              </div>
            )}

            {/* LEVEL 2 (ประถมปลาย) LAB TOOLS */}
            {selectedLevelNum === 2 && (
              <div className="space-y-6 animate-fade-in">
                {/* Tool 1: Interactive Fraction Adder/Subtractor with LCM visualizer */}
                <div className="bg-white rounded-3xl p-6 shadow-sm border-2 border-indigo-200 space-y-5">
                  <div>
                    <span className="text-xs font-black text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full">
                      เครื่องมือช่วยคำนวณที่ 1
                    </span>
                    <h3 className="text-lg font-black text-slate-800 mt-1">
                      เครื่องคำนวณบวก-ลบเศษส่วนอัตโนมัติ (Fraction & LCM Visualizer) 🍰
                    </h3>
                    <p className="text-xs text-slate-500 font-bold">
                      ปรับเปลี่ยนเศษส่วน 2 ตัวเพื่อดูขั้นตอนหา ค.ร.น. ตัวส่วนและวิธีบวกลบแบบสดๆ
                    </p>
                  </div>

                  {/* Input controls */}
                  <div className="flex flex-wrap items-center justify-center gap-4 bg-slate-50 p-5 rounded-3xl border border-slate-200">
                    {/* Fraction 1 */}
                    <div className="flex flex-col items-center bg-white p-3 rounded-2xl border border-slate-200 shadow-xs">
                      <span className="text-[10px] font-black text-slate-400 mb-1">เศษส่วนที่ 1</span>
                      <input
                        type="number"
                        min="1"
                        max="10"
                        value={f1Num}
                        onChange={(e) => setF1Num(Math.max(1, Number(e.target.value)))}
                        className="w-12 h-10 text-center font-black text-lg bg-indigo-50 rounded-xl border border-indigo-200"
                      />
                      <div className="w-10 h-0.5 bg-slate-400 my-1"></div>
                      <input
                        type="number"
                        min="2"
                        max="12"
                        value={f1Den}
                        onChange={(e) => setF1Den(Math.max(2, Number(e.target.value)))}
                        className="w-12 h-10 text-center font-black text-lg bg-indigo-50 rounded-xl border border-indigo-200"
                      />
                    </div>

                    {/* Operator */}
                    <button
                      onClick={() => setFracOp(fracOp === '+' ? '-' : '+')}
                      className="w-12 h-12 rounded-2xl bg-indigo-600 text-white font-black text-2xl shadow-sm hover:scale-105 active:scale-95 transition-all"
                    >
                      {fracOp}
                    </button>

                    {/* Fraction 2 */}
                    <div className="flex flex-col items-center bg-white p-3 rounded-2xl border border-slate-200 shadow-xs">
                      <span className="text-[10px] font-black text-slate-400 mb-1">เศษส่วนที่ 2</span>
                      <input
                        type="number"
                        min="1"
                        max="10"
                        value={f2Num}
                        onChange={(e) => setF2Num(Math.max(1, Number(e.target.value)))}
                        className="w-12 h-10 text-center font-black text-lg bg-indigo-50 rounded-xl border border-indigo-200"
                      />
                      <div className="w-10 h-0.5 bg-slate-400 my-1"></div>
                      <input
                        type="number"
                        min="2"
                        max="12"
                        value={f2Den}
                        onChange={(e) => setF2Den(Math.max(2, Number(e.target.value)))}
                        className="w-12 h-10 text-center font-black text-lg bg-indigo-50 rounded-xl border border-indigo-200"
                      />
                    </div>
                  </div>

                  {/* Calculation Result Breakdown */}
                  {(() => {
                    const gcdVal = (a: number, b: number): number => b === 0 ? a : gcdVal(b, a % b);
                    const lcmVal = (a: number, b: number): number => (a * b) / gcdVal(a, b);
                    const cDen = lcmVal(f1Den, f2Den);
                    const m1 = cDen / f1Den;
                    const m2 = cDen / f2Den;
                    const adjN1 = f1Num * m1;
                    const adjN2 = f2Num * m2;
                    const resN = fracOp === '+' ? adjN1 + adjN2 : adjN1 - adjN2;
                    const resG = gcdVal(Math.abs(resN), cDen);
                    const simpN = resN / resG;
                    const simpD = cDen / resG;

                    return (
                      <div className="bg-indigo-50 border-2 border-indigo-200 p-5 rounded-3xl space-y-3">
                        <div className="text-xs font-black text-indigo-950 flex items-center gap-1.5">
                          <Lightbulb className="w-4 h-4 text-amber-500" />
                          <span>ขั้นตอนการคำนวณสด:</span>
                        </div>
                        <p className="text-xs font-semibold text-slate-700">
                          1. หา ค.ร.น. ของตัวส่วน ({f1Den} และ {f2Den}) = <span className="font-black text-indigo-700">{cDen}</span>
                        </p>
                        <p className="text-xs font-semibold text-slate-700">
                          2. ปรับตัวส่วน: ({f1Num}×{m1})/{cDen} {fracOp} ({f2Num}×{m2})/{cDen} = {adjN1}/{cDen} {fracOp} {adjN2}/{cDen}
                        </p>
                        <div className="pt-2 border-t border-indigo-200 text-center">
                          <span className="text-xs font-bold text-slate-500 block">ผลลัพธ์:</span>
                          <span className="text-2xl font-black text-rose-600">
                            = {resN}/{cDen} {resG > 1 ? `(ตัดทอนรูปอย่างต่ำ = ${simpN}/${simpD})` : ''}
                          </span>
                        </div>
                      </div>
                    );
                  })()}
                </div>

                {/* Tool 2: Discount & Profit Simulator */}
                <div className="bg-white rounded-3xl p-6 shadow-sm border-2 border-amber-200 space-y-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-black text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full">
                        เครื่องมือช่วยคำนวณที่ 2
                      </span>
                      <h3 className="text-lg font-black text-slate-800 mt-1">
                        เครื่องจำลองป้ายลดราคา & กำไรสินค้า 🏷️
                      </h3>
                      <p className="text-xs text-slate-500 font-bold">
                        เข้าใจการคิดเงินในชีวิตจริง ทั้งส่วนลดและกำไร
                      </p>
                    </div>

                    <button
                      onClick={() => setIsProfitMode(!isProfitMode)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all ${
                        isProfitMode ? 'bg-emerald-600 text-white' : 'bg-rose-500 text-white'
                      }`}
                    >
                      {isProfitMode ? 'โหมด: คิดหากำไร 📈' : 'โหมด: คิดส่วนลด 🏷️'}
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-amber-50/60 p-5 rounded-3xl border border-amber-200">
                    <div>
                      <label className="text-xs font-black text-amber-950 block mb-1">
                        {isProfitMode ? 'ราคาทุนสินค้า: ' : 'ราคาป้ายสินค้า: '} {tagPrice} บาท
                      </label>
                      <input
                        type="range"
                        min="50"
                        max="2000"
                        step="50"
                        value={tagPrice}
                        onChange={(e) => setTagPrice(Number(e.target.value))}
                        className="w-full accent-amber-600"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-black text-amber-950 block mb-1">
                        {isProfitMode ? `เปอร์เซ็นต์กำไร: ${discountPercent}%` : `เปอร์เซ็นต์ส่วนลด: ${discountPercent}%`}
                      </label>
                      <input
                        type="range"
                        min="5"
                        max="80"
                        step="5"
                        value={discountPercent}
                        onChange={(e) => setDiscountPercent(Number(e.target.value))}
                        className="w-full accent-amber-600"
                      />
                    </div>
                  </div>

                  {(() => {
                    const diffMoney = (discountPercent / 100) * tagPrice;
                    const finalPay = isProfitMode ? tagPrice + diffMoney : tagPrice - diffMoney;
                    return (
                      <div className="bg-gradient-to-tr from-amber-50 to-orange-50 border-2 border-amber-300 p-5 rounded-3xl flex flex-col sm:flex-row items-center justify-around gap-4 text-center">
                        <div>
                          <span className="text-xs font-bold text-slate-500 block">
                            {isProfitMode ? 'กำไรที่ได้เพิ่ม:' : 'เงินส่วนลดที่ประหยัดได้:'}
                          </span>
                          <span className="text-2xl font-black text-emerald-600">{diffMoney.toFixed(0)} บาท</span>
                        </div>
                        <div className="w-px h-12 bg-amber-200 hidden sm:block"></div>
                        <div>
                          <span className="text-xs font-bold text-slate-500 block">
                            {isProfitMode ? 'ราคาที่ต้องตั้งขายจริง:' : 'ราคาที่ต้องจ่ายจริง:'}
                          </span>
                          <span className="text-3xl font-black text-rose-600">{finalPay.toFixed(0)} บาท</span>
                        </div>
                      </div>
                    );
                  })()}
                </div>

                {/* Tool 3: Circle Area & Circumference Explorer */}
                <div className="bg-white rounded-3xl p-6 shadow-sm border-2 border-teal-200 space-y-5">
                  <div>
                    <span className="text-xs font-black text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full">
                      เครื่องมือช่วยคำนวณที่ 3
                    </span>
                    <h3 className="text-lg font-black text-slate-800 mt-1">
                      สำรวจพื้นที่และเส้นรอบรูปวงกลม (Circle Explorer πr²) ⭕
                    </h3>
                    <p className="text-xs text-slate-500 font-bold">
                      ปรับรัศมี r เพื่อเห็นการคำนวณเส้นรอบวงและพื้นที่ทันที
                    </p>
                  </div>

                  <div className="bg-teal-50/60 p-5 rounded-3xl border border-teal-200">
                    <label className="text-xs font-black text-teal-950 block mb-1">
                      ความยาวรัศมี r: {circleR} เซนติเมตร
                    </label>
                    <input
                      type="range"
                      min="7"
                      max="49"
                      step="7"
                      value={circleR}
                      onChange={(e) => setCircleR(Number(e.target.value))}
                      className="w-full accent-teal-600"
                    />
                    <span className="text-[11px] text-teal-700 font-medium mt-1 block">
                      (ปรับทีละ 7 เพื่อให้ตัดกับตัวส่วนของ π = 22/7 ลงตัวง่ายต่อความเข้าใจ)
                    </span>
                  </div>

                  {(() => {
                    const circum = 2 * (22 / 7) * circleR;
                    const area = (22 / 7) * circleR * circleR;
                    return (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-teal-50 p-4 rounded-2xl border border-teal-200 text-center">
                          <span className="text-xs font-bold text-slate-500 block">ความยาวเส้นรอบวง (2πr):</span>
                          <span className="text-xl font-mono font-black text-teal-950 block mt-1">
                            2 × (22/7) × {circleR}
                          </span>
                          <span className="text-2xl font-black text-teal-700 block mt-1">
                            = {circum.toFixed(0)} ซม.
                          </span>
                        </div>
                        <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-200 text-center">
                          <span className="text-xs font-bold text-slate-500 block">พื้นที่รูปวงกลม (πr²):</span>
                          <span className="text-xl font-mono font-black text-emerald-950 block mt-1">
                            (22/7) × {circleR} × {circleR}
                          </span>
                          <span className="text-2xl font-black text-emerald-700 block mt-1">
                            = {area.toFixed(0)} ตร.ซม.
                          </span>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              </div>
            )}

            {/* LEVEL 3-4 LAB: PYTHAGORAS */}
            {selectedLevelNum >= 3 && selectedLevelNum <= 4 && (
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 space-y-6">
                <div>
                  <h3 className="text-lg font-black text-slate-800">
                    เครื่องทดลองทฤษฎีบทพีทาโกรัส 📐 (a² + b² = c²)
                  </h3>
                  <p className="text-xs text-slate-500 font-bold">ปรับความยาวด้านประกอบมุมฉาก a และ b</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-purple-50 p-5 rounded-2xl border border-purple-200">
                  <div>
                    <label className="text-xs font-black text-purple-900 block mb-1">ความยาวด้าน a: {sideA}</label>
                    <input type="range" min="1" max="15" value={sideA} onChange={(e) => setSideA(Number(e.target.value))} className="w-full accent-purple-600" />
                  </div>
                  <div>
                    <label className="text-xs font-black text-purple-900 block mb-1">ความยาวด้าน b: {sideB}</label>
                    <input type="range" min="1" max="15" value={sideB} onChange={(e) => setSideB(Number(e.target.value))} className="w-full accent-purple-600" />
                  </div>
                </div>
                {(() => {
                  const cSquared = sideA * sideA + sideB * sideB;
                  return (
                    <div className="bg-indigo-50 border-2 border-indigo-200 p-5 rounded-3xl text-center space-y-2">
                      <div className="text-2xl font-black text-rose-600">
                        c = √({cSquared}) ≈ {Math.sqrt(cSquared).toFixed(2)} หน่วย
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}

            {/* LEVEL 5-6 LAB: MATRIX DETERMINANT */}
            {selectedLevelNum >= 5 && (
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 space-y-6">
                <div>
                  <h3 className="text-lg font-black text-slate-800">
                    เครื่องคำนวณดีเทอร์มิแนนต์เมทริกซ์ 2×2 (Matrix Determinant Tool) 📐
                  </h3>
                </div>
                <div className="flex items-center justify-center gap-4 py-4">
                  <span className="text-5xl font-light text-slate-400">[</span>
                  <div className="grid grid-cols-2 gap-3">
                    <input type="number" value={matA} onChange={(e) => setMatA(Number(e.target.value))} className="w-16 h-12 text-center text-lg font-black bg-slate-50 border-2 border-indigo-200 rounded-xl" />
                    <input type="number" value={matB} onChange={(e) => setMatB(Number(e.target.value))} className="w-16 h-12 text-center text-lg font-black bg-slate-50 border-2 border-indigo-200 rounded-xl" />
                    <input type="number" value={matC} onChange={(e) => setMatC(Number(e.target.value))} className="w-16 h-12 text-center text-lg font-black bg-slate-50 border-2 border-indigo-200 rounded-xl" />
                    <input type="number" value={matD} onChange={(e) => setMatD(Number(e.target.value))} className="w-16 h-12 text-center text-lg font-black bg-slate-50 border-2 border-indigo-200 rounded-xl" />
                  </div>
                  <span className="text-5xl font-light text-slate-400">]</span>
                </div>
                {(() => {
                  const det = matA * matD - matB * matC;
                  return (
                    <div className="bg-indigo-50 border-2 border-indigo-200 p-5 rounded-3xl text-center">
                      <span className="text-3xl font-black text-indigo-700">det(A) = {det}</span>
                    </div>
                  );
                })()}
              </div>
            )}
          </div>
        )}
      </main>

      {/* Floating Pet Modal for Quick Feeding & Sibling Showcase */}
      <PetModal
        isOpen={isPetModalOpen}
        onClose={() => setIsPetModalOpen(false)}
        activeProfile={activeProfile}
        profiles={profiles}
        onFeedStars={handleFeedStars}
        onSwitchPetType={handleSwitchPetType}
        onSwitchProfile={handleSwitchProfile}
        initialSubject="math"
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
        cloudUser={cloudUser}
        onOpenAuthModal={() => setIsAuthModalOpen(true)}
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
