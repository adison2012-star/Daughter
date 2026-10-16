'use client';

import React, { useState, useEffect, useMemo } from 'react';
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
import { sfx, speakThai, speakEnglish } from '@/lib/speech';
import confetti from 'canvas-confetti';
import {
  Sparkles,
  CheckCircle2,
  Orbit,
  Heart,
  Brain,
  Lightbulb,
  ArrowRight,
  FlaskConical,
  Atom,
  Search,
  Volume2,
  BookOpen,
  Trophy,
  Zap,
  HelpCircle,
  ShieldCheck,
  Star,
  Flame,
  Dices,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Filter,
} from 'lucide-react';
import {
  PERIODIC_ELEMENTS,
  CHEMISTRY_MNEMONICS,
  ElementData,
} from '@/data/periodicTable';
import {
  EXTENSIVE_CHEMISTRY_QUIZZES,
  ChemQuizQuestion,
} from '@/data/chemistryQuestionBank';
import { ChemistryReactionLab } from '@/components/ChemistryReactionLab';

interface Planet {
  name: string;
  thName: string;
  emoji: string;
  color: string;
  funFact: string;
  moons: number;
  highlight: string;
}

const PLANETS: Planet[] = [
  {
    name: 'Sun',
    thName: 'ดวงอาทิตย์',
    emoji: '☀️',
    color: 'from-amber-400 to-rose-600',
    funFact: 'ดวงอาทิตย์คือดาวฤกษ์ดวงใหญ่ตรงใจกลางระบบสุริยะ ร้อนแรงถึง 5,500 องศาเซลเซียส!',
    moons: 0,
    highlight: 'ให้แสงสว่างและความอบอุ่นแก่โลก',
  },
  {
    name: 'Mercury',
    thName: 'ดาวพุธ',
    emoji: '🪨',
    color: 'from-stone-400 to-stone-600',
    funFact: 'เป็นดาวเคราะห์ที่อยู่ใกล้ดวงอาทิตย์ที่สุดและเล็กที่สุด ไม่มีชั้นบรรยากาศคอยกักความร้อน',
    moons: 0,
    highlight: 'กลางวันร้อนจัด กลางคืนหนาวเหน็บ',
  },
  {
    name: 'Venus',
    thName: 'ดาวศุกร์',
    emoji: '🌕',
    color: 'from-amber-200 to-amber-500',
    funFact: 'ดาวเคราะห์ที่สว่างที่สุดบนท้องฟ้า (ดาวประกายพรึก) มีก๊าซเรือนกระจกหนาแน่นจนร้อนที่สุด',
    moons: 0,
    highlight: 'ดาวเคราะห์ที่ร้อนที่สุดในระบบสุริยะ (465°C)',
  },
  {
    name: 'Earth',
    thName: 'โลกของเรา',
    emoji: '🌍',
    color: 'from-blue-400 to-emerald-500',
    funFact: 'บ้านแสนอบอุ่นของเรา มีน้ำ 3 ใน 4 ส่วน และมีก๊าซออกซิเจนให้พวกเราหายใจ!',
    moons: 1,
    highlight: 'ดาวดวงเดียวที่มีสิ่งมีชีวิตอาศัยอยู่',
  },
  {
    name: 'Mars',
    thName: 'ดาวอังคาร',
    emoji: '🔴',
    color: 'from-rose-500 to-red-700',
    funFact: 'ดาวเคราะห์สีแดง มีภูเขาไฟโอลิมปัสที่สูงที่สุดในระบบสุริยะ สูงกว่าเอเวอเรสต์ 3 เท่า!',
    moons: 2,
    highlight: 'มีหุ่นยนต์ยานสำรวจกำลังค้นหาแหล่งน้ำ',
  },
  {
    name: 'Jupiter',
    thName: 'ดาวพฤหัสบดี',
    emoji: '🪐',
    color: 'from-orange-300 to-amber-700',
    funFact: 'พี่ใหญ่ใจดี ดาวเคราะห์ที่ใหญ่ที่สุด มีจุดแดงยักษ์ซึ่งเป็นพายุหมุนขนาดใหญ่กว่าโลกทั้งใบ!',
    moons: 95,
    highlight: 'ดาวเคราะห์ก๊าซยักษ์ ปกป้องโลกจากอุกกาบาต',
  },
  {
    name: 'Saturn',
    thName: 'ดาวเสาร์',
    emoji: '🪐',
    color: 'from-amber-100 to-yellow-600',
    funFact: 'ราชินีแห่งความงาม มีวงแหวนน้ำแข็งและเศษหินระยิบระยับล้อมรอบกว้างใหญ่สวยงามที่สุด',
    moons: 146,
    highlight: 'วงแหวนทำจากก้อนน้ำแข็งและเศษหิน',
  },
  {
    name: 'Uranus',
    thName: 'ดาวยูเรนัส',
    emoji: '🧊',
    color: 'from-cyan-300 to-teal-600',
    funFact: 'ยักษ์น้ำแข็งสีฟ้าอมเขียว นอนหมุนรอบตัวเองตะแคงข้างเกือบ 90 องศา!',
    moons: 28,
    highlight: 'ดาวเคราะห์ที่หมุนตะแคงข้าง',
  },
  {
    name: 'Neptune',
    thName: 'ดาวเนปจูน',
    emoji: '🌊',
    color: 'from-blue-600 to-indigo-900',
    funFact: 'ดาวเคราะห์ที่อยู่ไกลที่สุด หนาวเย็นจัดและมีลมพายุพัดเร็วที่สุดในระบบสุริยะ (2,000 กม./ชม.)!',
    moons: 16,
    highlight: 'สีน้ำเงินเข้มลึกลับ ห่างไกลดวงอาทิตย์มาก',
  },
];

const BODY_ORGANS = [
  {
    name: 'หัวใจ (Heart)',
    emoji: '❤️',
    desc: 'ปั๊มเลือดส่งไปเลี้ยงทั่วร่างกาย',
    detail: 'หัวใจเต้นวันละประมาณ 100,000 ครั้ง ไม่เคยหยุดพักแม้แต่ตอนเราหลับ!',
  },
  {
    name: 'ปอด (Lungs)',
    emoji: '🫁',
    desc: 'แลกเปลี่ยนออกซิเจนเวลาหายใจ',
    detail: 'เมื่อเราสูดหายใจเข้า ปอดจะขยายตัวเพื่อรับออกซิเจนไปเติมในเม็ดเลือดแดง',
  },
  {
    name: 'สมอง (Brain)',
    emoji: '🧠',
    desc: 'ศูนย์บัญชาการความคิดและการเรียนรู้',
    detail: 'สมองมีเซลล์ประสาทนับแสนล้านเซลล์ ทำหน้าที่คิด จดจำคำศัพท์ และควบคุมร่างกาย',
  },
  {
    name: 'กระเพาะอาหาร (Stomach)',
    emoji: '🥣',
    desc: 'ย่อยอาหารอร่อยๆ ที่เรากินเข้าไป',
    detail: 'ผลิตน้ำย่อยช่วยบดอาหารให้กลายเป็นพลังงานให้เราวิ่งเล่นได้ทั้งวัน',
  },
];

export default function SciencePage() {
  const [profiles, setProfiles] = useState<UserProfile[]>(DEFAULT_PROFILES);
  const [activeProfileId, setActiveId] = useState<string>(DEFAULT_PROFILES[0].id);
  const [isPetModalOpen, setIsPetModalOpen] = useState(false);
  const [isRewardShopOpen, setIsRewardShopOpen] = useState(false);
  const [isProfileManagerOpen, setIsProfileManagerOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [cloudUser, setCloudUser] = useState<CloudUser | null>(null);

  // Active Main Tab
  const [activeTab, setActiveTab] = useState<'periodic' | 'reactions' | 'quiz' | 'planets' | 'body'>('periodic');

  // ==========================================
  // Periodic Table States
  // ==========================================
  const [selectedElement, setSelectedElement] = useState<ElementData>(PERIODIC_ELEMENTS[10]); // Default Na (Z=11)
  const [elementCategoryFilter, setElementCategoryFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showMnemonics, setShowMnemonics] = useState<boolean>(false);

  // ==========================================
  // Chemistry Quiz & Exam Arena States (500 Questions Bank)
  // ==========================================
  const [quizGradeFilter, setQuizGradeFilter] = useState<'all' | 'primary_lower_sec' | 'upper_sec'>('all');
  const [quizCategoryFilter, setQuizCategoryFilter] = useState<string>('all');
  const [quizSearchQuery, setQuizSearchQuery] = useState<string>('');
  const [quizIdx, setQuizIdx] = useState(0);
  const [selectedAns, setSelectedAns] = useState<number | null>(null);
  const [isQuizAnswered, setIsQuizAnswered] = useState(false);
  const [answeredQuestionIds, setAnsweredQuestionIds] = useState<string[]>([]);
  const [streakCount, setStreakCount] = useState<number>(0);

  // ==========================================
  // Planet & Body States (Exploration - NO Farming)
  // ==========================================
  const [selectedPlanet, setSelectedPlanet] = useState<Planet>(PLANETS[3]); // Earth default

  useEffect(() => {
    const loaded = getStoredProfiles();
    const active = getActiveProfileId();
    const user = getCloudUser();
    if (loaded && loaded.length > 0) setProfiles(loaded);
    if (active) setActiveId(active);
    if (user) setCloudUser(user);

    try {
      const storedAnswered = localStorage.getItem('duo_academy_chemistry_quizzes_answered_v1');
      if (storedAnswered) {
        setAnsweredQuestionIds(JSON.parse(storedAnswered));
      }
    } catch (e) {
      console.warn('Failed to load answered quizzes', e);
    }
  }, []);

  const activeProfile = profiles.find((p) => p.id === activeProfileId) || profiles[0] || DEFAULT_PROFILES[0];

  const handleSwitchProfile = (id: string) => {
    setActiveId(id);
    setActiveProfileId(id);
  };

  const handleEarnReward = (stars: number) => {
    const updated = addStarsToActive(stars, 'science');
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

  // Filter elements
  const filteredElements = useMemo(() => {
    return PERIODIC_ELEMENTS.filter((el) => {
      // Category filter
      if (elementCategoryFilter === 'core20' && el.z > 20) return false;
      if (elementCategoryFilter === 'alkali' && el.category !== 'alkali') return false;
      if (elementCategoryFilter === 'alkaline_earth' && el.category !== 'alkaline_earth') return false;
      if (elementCategoryFilter === 'halogen' && el.category !== 'halogen') return false;
      if (elementCategoryFilter === 'noble_gas' && el.category !== 'noble_gas') return false;
      if (elementCategoryFilter === 'transition' && el.category !== 'transition') return false;
      if (
        elementCategoryFilter === 'nonmetal_metalloid' &&
        el.category !== 'nonmetal' &&
        el.category !== 'metalloid'
      )
        return false;

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchSymbol = el.symbol.toLowerCase().includes(q);
        const matchTh = el.nameTh.toLowerCase().includes(q);
        const matchEn = el.nameEn.toLowerCase().includes(q);
        const matchZ = el.z.toString() === q;
        return matchSymbol || matchTh || matchEn || matchZ;
      }

      return true;
    });
  }, [elementCategoryFilter, searchQuery]);

  // Filter Quizzes from 500 questions bank
  const filteredQuizzes = useMemo(() => {
    return EXTENSIVE_CHEMISTRY_QUIZZES.filter((q) => {
      if (quizGradeFilter !== 'all' && q.grade !== quizGradeFilter && q.grade !== 'all') {
        return false;
      }
      if (quizCategoryFilter !== 'all' && q.category !== quizCategoryFilter) {
        return false;
      }
      if (quizSearchQuery.trim()) {
        const query = quizSearchQuery.toLowerCase().trim();
        const matchQ = q.q.toLowerCase().includes(query);
        const matchExp = q.explanation.toLowerCase().includes(query);
        const matchChoices = q.choices.some((c) => c.toLowerCase().includes(query));
        return matchQ || matchExp || matchChoices;
      }
      return true;
    });
  }, [quizGradeFilter, quizCategoryFilter, quizSearchQuery]);

  const currentQuiz: ChemQuizQuestion =
    filteredQuizzes[quizIdx % (filteredQuizzes.length || 1)] || EXTENSIVE_CHEMISTRY_QUIZZES[0];

  const handleAnswerQuiz = (choiceIdx: number) => {
    if (isQuizAnswered) return;
    setSelectedAns(choiceIdx);
    setIsQuizAnswered(true);

    if (choiceIdx === currentQuiz.ans) {
      sfx.playCorrect();
      const isAlreadyAnswered = answeredQuestionIds.includes(currentQuiz.id);
      if (!isAlreadyAnswered) {
        handleEarnReward(currentQuiz.starsAwarded);
        const nextAnswered = [...answeredQuestionIds, currentQuiz.id];
        setAnsweredQuestionIds(nextAnswered);
        try {
          localStorage.setItem('duo_academy_chemistry_quizzes_answered_v1', JSON.stringify(nextAnswered));
        } catch (e) {
          // ignore
        }
        setStreakCount((prev) => prev + 1);
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#10B981', '#38BDF8', '#FBBF24', '#F43F5E'],
        });
      } else {
        // Correct, but was already claimed
        sfx.playCorrect();
      }
    } else {
      sfx.playSoftTryAgain();
      setStreakCount(0);
    }
  };

  const handleNextQuiz = () => {
    sfx.playClick();
    setIsQuizAnswered(false);
    setSelectedAns(null);
    setQuizIdx((prev) => (prev + 1) % (filteredQuizzes.length || 1));
  };

  const handlePrevQuiz = () => {
    sfx.playClick();
    setIsQuizAnswered(false);
    setSelectedAns(null);
    setQuizIdx((prev) => (prev - 1 + filteredQuizzes.length) % (filteredQuizzes.length || 1));
  };

  const handleRandomQuiz = () => {
    sfx.playClick();
    setIsQuizAnswered(false);
    setSelectedAns(null);
    if (filteredQuizzes.length > 1) {
      let rand = Math.floor(Math.random() * filteredQuizzes.length);
      if (rand === quizIdx % filteredQuizzes.length) {
        rand = (rand + 1) % filteredQuizzes.length;
      }
      setQuizIdx(rand);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-slate-800 pb-24 font-sans">
      <PortalHeader
        activeProfile={activeProfile}
        profiles={profiles}
        onSwitchProfile={handleSwitchProfile}
        title="Science & Chemistry Mastery"
        subtitle="ตารางธาตุ • สอบเคมี • ระบบสุริยะ • ร่างกายมนุษย์"
        showBackToPortal={true}
        currentSubject="science"
        onOpenPetSanctuary={() => setIsPetModalOpen(true)}
        onOpenRewardShop={() => setIsRewardShopOpen(true)}
        onOpenProfileManager={() => setIsProfileManagerOpen(true)}
        onOpenAuthModal={() => setIsAuthModalOpen(true)}
        cloudUser={cloudUser}
      />

      <main className="max-w-5xl mx-auto px-4 pt-6 space-y-6">
        {/* ========================================================
            MASCOT BANNER: เสี่ยวหลง นักวิทย์ & เคมีผู้เชี่ยวชาญ
           ======================================================== */}
        <section className="bg-gradient-to-r from-emerald-600 via-teal-700 to-cyan-800 rounded-3xl p-5 text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-4 border border-emerald-500/30">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30 shadow-inner flex-shrink-0 p-1">
              <Image
                src="/images/xiaolong/science.png"
                alt="เสี่ยวหลง นักวิทย์น้อย"
                width={70}
                height={70}
                className="object-contain drop-shadow"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl sm:text-2xl font-black tracking-tight">
                  เสี่ยวหลง ติวเข้มวิทยาศาสตร์ & เคมี 🧪
                </h2>
                <span className="bg-amber-300 text-slate-900 font-black text-[11px] px-2.5 py-0.5 rounded-full shadow-2xs">
                  Chem Master
                </span>
              </div>
              <p className="text-xs sm:text-sm text-teal-100 font-medium mt-1">
                จดจำตารางธาตุ 20 ธาตุแรก การจัดเรียง e⁻ และเทคนิคพิชิตข้อสอบเคมี ป.ปลาย – ม.ปลาย
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 z-10 w-full sm:w-auto justify-end">
            <button
              onClick={() => {
                sfx.playClick();
                setActiveTab('reactions');
              }}
              className="flex items-center justify-center gap-1.5 bg-emerald-400 hover:bg-emerald-300 text-slate-900 font-black text-xs px-4 py-2.5 rounded-2xl shadow-sm transition-all active:scale-95 flex-1 sm:flex-initial border border-emerald-300"
            >
              <span className="text-sm">⚗️</span>
              <span>ห้องทดลองผสมธาตุ</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => {
                sfx.playClick();
                setActiveTab('quiz');
              }}
              className="flex items-center justify-center gap-1.5 bg-amber-400 hover:bg-amber-300 text-slate-900 font-black text-xs px-4 py-2.5 rounded-2xl shadow-sm transition-all active:scale-95 flex-1 sm:flex-initial border border-amber-300"
            >
              <Trophy className="w-4 h-4 text-amber-950" />
              <span>สนามสอบเคมีเก็บดาว</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </section>

        {/* ========================================================
            NAVIGATION TABS (Tactile & Clean)
           ======================================================== */}
        <div className="flex items-center justify-center gap-2 bg-white p-2 rounded-2xl border border-[#EAE5DB] shadow-xs overflow-x-auto scrollbar-none">
          <button
            onClick={() => {
              sfx.playClick();
              setActiveTab('periodic');
            }}
            className={`px-4 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'periodic'
                ? 'bg-[#6A8D60] text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <FlaskConical className="w-4 h-4" />
            <span>ตารางธาตุ & ติวเคมี</span>
          </button>

          <button
            onClick={() => {
              sfx.playClick();
              setActiveTab('reactions');
            }}
            className={`px-4 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'reactions'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <span className="text-sm">⚗️</span>
            <span>ห้องทดลองผสมธาตุ (Lab)</span>
          </button>

          <button
            onClick={() => {
              sfx.playClick();
              setActiveTab('quiz');
            }}
            className={`px-4 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'quiz'
                ? 'bg-amber-500 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <Trophy className="w-4 h-4" />
            <span>สนามสอบเคมี (รับดาว)</span>
          </button>

          <button
            onClick={() => {
              sfx.playClick();
              setActiveTab('planets');
            }}
            className={`px-4 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'planets'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <Orbit className="w-4 h-4" />
            <span>ระบบสุริยะ 3D</span>
          </button>

          <button
            onClick={() => {
              sfx.playClick();
              setActiveTab('body');
            }}
            className={`px-4 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'body'
                ? 'bg-rose-500 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <Heart className="w-4 h-4" />
            <span>ร่างกายมนุษย์</span>
          </button>
        </div>

        {/* ========================================================
            TAB 1: PERIODIC TABLE & CHEMISTRY MASTERY (The Core Request)
           ======================================================== */}
        {activeTab === 'periodic' && (
          <div className="space-y-6">
            {/* Top Toolbar: Search, Filters, Mnemonics Toggle */}
            <div className="bg-white rounded-3xl p-5 border border-[#EAE5DB] shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="relative w-full sm:w-80">
                  <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="ค้นหาชื่อธาตุ, สัญลักษณ์ (เช่น Na, เหล็ก, 11)..."
                    className="w-full pl-9 pr-4 py-2 text-xs font-bold rounded-2xl border border-slate-200 bg-[#FAF8F5] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#6A8D60] transition-all"
                  />
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                  <button
                    onClick={() => {
                      sfx.playClick();
                      setShowMnemonics(!showMnemonics);
                    }}
                    className={`px-3.5 py-2 rounded-2xl text-xs font-black transition-all flex items-center gap-1.5 border ${
                      showMnemonics
                        ? 'bg-amber-100 text-amber-900 border-amber-300'
                        : 'bg-[#FAF8F5] hover:bg-slate-100 text-slate-700 border-slate-200'
                    }`}
                  >
                    <BookOpen className="w-4 h-4 text-amber-600" />
                    <span>{showMnemonics ? 'ซ่อนสูตรกลอนจำตารางธาตุ' : 'สูตรกลอนจำตารางธาตุ ✨'}</span>
                  </button>
                </div>
              </div>

              {/* Category Filter Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                {[
                  { id: 'all', label: 'ทั้งหมด' },
                  { id: 'core20', label: '🌟 20 ธาตุแรก (ต้องรู้!)' },
                  { id: 'alkali', label: 'หมู่ 1A แอลคาไล' },
                  { id: 'alkaline_earth', label: 'หมู่ 2A แอลคาไลน์เอิร์ท' },
                  { id: 'halogen', label: 'หมู่ 7A แฮโลเจน' },
                  { id: 'noble_gas', label: 'หมู่ 8A ก๊าซมีตระกูล' },
                  { id: 'transition', label: 'โลหะแทรนซิชัน (Fe, Cu, Au)' },
                  { id: 'nonmetal_metalloid', label: 'อโลหะ & กึ่งโลหะ' },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      sfx.playClick();
                      setElementCategoryFilter(cat.id);
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all whitespace-nowrap border ${
                      elementCategoryFilter === cat.id
                        ? 'bg-[#6A8D60] text-white border-[#55754C] shadow-2xs'
                        : 'bg-[#FAF8F5] hover:bg-white text-slate-600 border-slate-200'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Chemistry Mnemonics Banner (if toggled) */}
            {showMnemonics && (
              <div className="bg-gradient-to-br from-amber-50 via-orange-50/50 to-white rounded-3xl p-6 border-2 border-amber-200 shadow-sm space-y-4 animate-fade-in">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">📜</span>
                  <div>
                    <h3 className="text-base font-black text-amber-950">
                      สูตรกลอน & เทคนิคจำตารางธาตุฉบับเตรียมสอบ (จำง่าย สอบผ่าน 100%)
                    </h3>
                    <p className="text-xs text-amber-800 font-semibold">
                      ท่องตามจังหวะ จำสัญลักษณ์และหมู่ได้แม่นยำ ไม่ต้องนั่งเปิดตารางธาตุในห้องสอบ
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {CHEMISTRY_MNEMONICS.map((m) => (
                    <div
                      key={m.id}
                      className="bg-white rounded-2xl p-4 border border-amber-200/80 shadow-2xs space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black text-slate-800">{m.title}</span>
                        <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded-full">
                          {m.groupOrTopic}
                        </span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-amber-50/80 border border-amber-200 text-xs font-black text-amber-950 font-mono tracking-wide leading-relaxed">
                        {m.chant}
                      </div>
                      <p className="text-[11px] text-slate-600 font-medium">{m.explanation}</p>
                      <div className="text-[10px] font-black text-[#6A8D60] bg-[#EBF2E8] px-2.5 py-1 rounded-lg">
                        💡 ทริกทำข้อสอบ: {m.examNote}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Selected Element Detailed Chem-Card & Bohr Model */}
            <div className="bg-white rounded-4xl p-6 sm:p-8 border border-[#EAE5DB] shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* LEFT: Big Interactive Element Badge & Bohr Model Orbit */}
              <div className="lg:col-span-5 flex flex-col items-center text-center space-y-4 lg:border-r lg:border-slate-100 lg:pr-6">
                <div className="flex items-center justify-between w-full">
                  <span className="text-xs font-black text-slate-500 uppercase">
                    Atomic No. #{selectedElement.z}
                  </span>
                  <span className="text-xs font-black bg-[#EBF2E8] text-[#54754B] px-2.5 py-0.5 rounded-full">
                    {selectedElement.categoryTh}
                  </span>
                </div>

                {/* Big Element Symbol Card with Bohr Shell Rings */}
                <div className="relative w-48 h-48 rounded-3xl bg-gradient-to-br from-[#FAF8F5] via-white to-slate-50 border-2 border-[#EAE5DB] shadow-inner flex items-center justify-center overflow-hidden">
                  {/* Bohr Model SVG Orbit Rings */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 200 200">
                    {selectedElement.electronShells.map((count, shellIdx) => {
                      const radius = 35 + shellIdx * 18;
                      return (
                        <g key={shellIdx}>
                          {/* Orbit Circle */}
                          <circle
                            cx="100"
                            cy="100"
                            r={radius}
                            fill="none"
                            stroke="#CBD5E1"
                            strokeWidth="1.2"
                            strokeDasharray="4 3"
                            className="opacity-70 animate-spin-slow"
                            style={{
                              transformOrigin: '100px 100px',
                              animationDuration: `${20 + shellIdx * 8}s`,
                            }}
                          />
                          {/* Electrons on this Shell */}
                          {Array.from({ length: count }).map((_, eIdx) => {
                            const angle = (2 * Math.PI * eIdx) / count;
                            const cx = 100 + radius * Math.cos(angle);
                            const cy = 100 + radius * Math.sin(angle);
                            return (
                              <circle
                                key={eIdx}
                                cx={cx}
                                cy={cy}
                                r="3.2"
                                fill="#6A8D60"
                                stroke="#FFFFFF"
                                strokeWidth="1"
                              />
                            );
                          })}
                        </g>
                      );
                    })}
                  </svg>

                  {/* Nucleus Center Element Info */}
                  <div className="relative z-10 flex flex-col items-center justify-center bg-white/95 backdrop-blur-md rounded-2xl p-3 border border-slate-200/90 shadow-sm min-w-[90px]">
                    <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                      {selectedElement.symbol}
                    </span>
                    <span className="text-xs font-black text-slate-700 mt-0.5">
                      {selectedElement.nameTh}
                    </span>
                    <span className="text-[10px] text-slate-400 font-bold">
                      {selectedElement.nameEn}
                    </span>
                  </div>
                </div>

                {/* Pronunciation Audio Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      speakThai(`${selectedElement.nameTh} สัญลักษณ์ ${selectedElement.symbol}`);
                    }}
                    className="px-3 py-1.5 rounded-xl bg-[#FAF8F5] hover:bg-[#6A8D60] hover:text-white text-slate-700 border border-slate-200 text-xs font-black transition-all flex items-center gap-1"
                    title="ฟังเสียงอ่านชื่อภาษาไทย"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>ฟังชื่อไทย</span>
                  </button>
                  <button
                    onClick={() => {
                      speakEnglish(selectedElement.nameEn);
                    }}
                    className="px-3 py-1.5 rounded-xl bg-[#FAF8F5] hover:bg-[#6A8D60] hover:text-white text-slate-700 border border-slate-200 text-xs font-black transition-all flex items-center gap-1"
                    title="Listen to English pronunciation"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>English</span>
                  </button>
                </div>
              </div>

              {/* RIGHT: High-Yield Chemistry Metrics & Exam Highlights */}
              <div className="lg:col-span-7 space-y-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-2xl font-black text-slate-900">
                      {selectedElement.nameTh} ({selectedElement.nameEn})
                    </h3>
                    <span className="bg-amber-100 text-amber-900 font-black text-xs px-2.5 py-0.5 rounded-full border border-amber-200">
                      หมู่ {selectedElement.group} • คาบ {selectedElement.period}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 font-bold mt-0.5">
                    มวลอะตอม: {selectedElement.atomicMass.toFixed(3)} u • สถานะ: {selectedElement.stateTh} (ที่ 25°C)
                  </p>
                </div>

                {/* Chemistry Core Grid (Electron Config, Valence, Common Ion) */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="p-3 rounded-2xl bg-[#FAF8F5] border border-slate-200">
                    <span className="text-[10px] font-bold text-slate-400 block">การจัดเรียง e⁻</span>
                    <span className="text-sm font-black text-[#6A8D60] block font-mono">
                      {selectedElement.electronConfig}
                    </span>
                  </div>

                  <div className="p-3 rounded-2xl bg-[#FAF8F5] border border-slate-200">
                    <span className="text-[10px] font-bold text-slate-400 block">เวเลนซ์ e⁻ (วงนอกสุด)</span>
                    <span className="text-sm font-black text-indigo-700 block">
                      {selectedElement.valence} ตัว (บอกหมู่)
                    </span>
                  </div>

                  <div className="p-3 rounded-2xl bg-[#FAF8F5] border border-slate-200 col-span-2 sm:col-span-1">
                    <span className="text-[10px] font-bold text-slate-400 block">ประจุไอออนที่พบบ่อย</span>
                    <span className="text-sm font-black text-rose-700 block font-mono">
                      {selectedElement.commonIon}
                    </span>
                  </div>
                </div>

                {/* Real World Use & Application */}
                <div className="p-3.5 rounded-2xl bg-[#FAFDF8] border border-[#D5E5D0] space-y-1">
                  <span className="text-xs font-black text-[#54754B] flex items-center gap-1">
                    <span>🌍</span>
                    <span>ประโยชน์และการนำไปใช้ในชีวิตจริง:</span>
                  </span>
                  <p className="text-xs font-semibold text-slate-700 leading-relaxed">
                    {selectedElement.funFact}
                  </p>
                </div>

                {/* High-Yield Exam Tip */}
                <div className="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200 space-y-1">
                  <span className="text-xs font-black text-amber-900 flex items-center gap-1">
                    <Zap className="w-4 h-4 text-amber-600 fill-amber-400" />
                    <span>เกร็ดความรู้ที่ข้อสอบเคมีชอบออก (High-Yield Exam Tip):</span>
                  </span>
                  <p className="text-xs font-semibold text-slate-800 leading-relaxed">
                    {selectedElement.examTip}
                  </p>
                </div>
              </div>
            </div>

            {/* Element Grid Explorer (Click to View Details) */}
            <div className="bg-white rounded-3xl p-6 border border-[#EAE5DB] shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-base font-black text-slate-800">
                    คลังธาตุเคมี ({filteredElements.length} ธาตุ)
                  </h4>
                  <p className="text-xs text-slate-500 font-semibold">
                    แตะที่การ์ดธาตุเพื่อตรวจสอบโครงสร้างอะตอม การจัดเรียง e⁻ และเกร็ดข้อสอบ
                  </p>
                </div>
                <span className="text-xs font-bold text-slate-400 bg-slate-50 px-3 py-1 rounded-xl border border-slate-200">
                  เลือกดู: {selectedElement.nameTh} ({selectedElement.symbol})
                </span>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2.5">
                {filteredElements.map((el) => {
                  const isSelected = selectedElement.z === el.z;
                  return (
                    <button
                      key={el.z}
                      onClick={() => {
                        sfx.playClick();
                        setSelectedElement(el);
                      }}
                      className={`p-2.5 rounded-2xl border-2 transition-all flex flex-col items-center justify-between text-center relative group ${
                        isSelected
                          ? 'bg-[#EBF2E8] border-[#6A8D60] shadow-sm scale-102 ring-2 ring-[#6A8D60]/20'
                          : 'bg-[#FAF8F5] hover:bg-white text-slate-700 border-[#EDE7DE] hover:border-slate-300'
                      }`}
                    >
                      <div className="w-full flex justify-between text-[9px] font-black text-slate-400 mb-0.5">
                        <span>{el.z}</span>
                        <span>{el.group}</span>
                      </div>
                      <span className="text-xl sm:text-2xl font-black text-slate-900 group-hover:scale-110 transition-transform">
                        {el.symbol}
                      </span>
                      <span className="text-[11px] font-black text-slate-800 block truncate w-full mt-0.5">
                        {el.nameTh}
                      </span>
                      <span className="text-[9px] font-bold text-slate-400 block truncate w-full">
                        {el.nameEn}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            TAB 2: CHEMISTRY REACTION LAB & CRAFTING (ผสมธาตุ & ปฏิกิริยาเคมี)
           ======================================================== */}
        {activeTab === 'reactions' && (
          <ChemistryReactionLab
            activeProfile={activeProfile}
            onEarnStars={handleEarnReward}
          />
        )}

        {/* ========================================================
            TAB 3: CHEMISTRY EXAM & 500 QUESTION ARENA (คลังข้อสอบ 500 ข้อ)
           ======================================================== */}
        {activeTab === 'quiz' && (
          <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-xs border border-[#EAE5DB] space-y-6">
            {/* Header: Title, Solved Progress & Streak Counter */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div className="space-y-1 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <span className="text-2xl">🏆</span>
                  <h3 className="text-lg sm:text-xl font-black text-slate-800">
                    สนามสอบเคมี & คลังข้อสอบ 500 ข้อ (Chemistry Mastery)
                  </h3>
                </div>
                <p className="text-xs text-slate-500 font-semibold">
                  ฝึกฝนข้อสอบเคมี 500 ข้อ พร้อมเฉลยละเอียดอ้างอิงวิชาการ (สสวท. / สอวน. / O-NET / A-Level)
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2">
                {/* Solved Count Badge */}
                <div className="flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-2xl text-xs font-black text-emerald-900 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>
                    ผ่านแล้ว {answeredQuestionIds.length}/{EXTENSIVE_CHEMISTRY_QUIZZES.length} ข้อ
                  </span>
                </div>

                {/* Streak Pill */}
                <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-2xl text-xs font-black text-amber-900 shadow-2xs">
                  <Flame className="w-4 h-4 text-orange-500 fill-orange-500" />
                  <span>Streak: {streakCount} ข้อติด!</span>
                </div>

                {/* Stars Purse */}
                <div className="flex items-center gap-1.5 bg-[#FFF9E6] border border-[#F3DF95] px-3 py-1.5 rounded-2xl text-xs font-black text-amber-950 shadow-2xs">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-400" />
                  <span>{activeProfile.subjectStars.science.toLocaleString()} ⭐</span>
                </div>
              </div>
            </div>

            {/* Filter Row 1: Grade Level Selector & Random Question Button */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto scrollbar-none pb-1">
                <button
                  onClick={() => {
                    sfx.playClick();
                    setQuizGradeFilter('all');
                    setQuizIdx(0);
                    setIsQuizAnswered(false);
                    setSelectedAns(null);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all whitespace-nowrap ${
                    quizGradeFilter === 'all'
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  ทั้งหมด ({EXTENSIVE_CHEMISTRY_QUIZZES.length} ข้อ)
                </button>
                <button
                  onClick={() => {
                    sfx.playClick();
                    setQuizGradeFilter('primary_lower_sec');
                    setQuizIdx(0);
                    setIsQuizAnswered(false);
                    setSelectedAns(null);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all whitespace-nowrap ${
                    quizGradeFilter === 'primary_lower_sec'
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  ป.ปลาย - ม.ต้น (พื้นฐานธาตุ)
                </button>
                <button
                  onClick={() => {
                    sfx.playClick();
                    setQuizGradeFilter('upper_sec');
                    setQuizIdx(0);
                    setIsQuizAnswered(false);
                    setSelectedAns(null);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all whitespace-nowrap ${
                    quizGradeFilter === 'upper_sec'
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  ม.ต้น - ม.ปลาย (สอวน. & A-Level)
                </button>
              </div>

              {/* Big Prominent Random Question Button */}
              <button
                onClick={handleRandomQuiz}
                className="w-full md:w-auto px-4 py-2 bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 hover:brightness-105 active:scale-95 text-white font-black text-xs rounded-2xl shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                title="สุ่มข้อสอบใหม่จากคลัง 500 ข้อ"
              >
                <Dices className="w-4 h-4 animate-spin-slow" />
                <span>🎲 สุ่มข้อสอบใหม่ (Random Question)</span>
              </button>
            </div>

            {/* Filter Row 2: Category Topic Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
              {[
                { id: 'all', label: 'ทุกหมวดเคมี', icon: '🧪' },
                { id: 'symbol', label: 'สัญลักษณ์ & ละติน', icon: '🔤' },
                { id: 'electron_config', label: 'โครงสร้างอะตอม & e⁻', icon: '⚛️' },
                { id: 'periodic_trend', label: 'แนวโน้มตารางธาตุ', icon: '🗺️' },
                { id: 'compound', label: 'พันธะเคมี & โมเลกุล', icon: '🔗' },
                { id: 'reaction', label: 'ปฏิกิริยา & กฎทรงมวล', icon: '💥' },
                { id: 'acid_base', label: 'กรด - เบส & pH', icon: '🍋' },
                { id: 'daily_life', label: 'เคมีในชีวิตจริง', icon: '🌍' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    sfx.playClick();
                    setQuizCategoryFilter(cat.id);
                    setQuizIdx(0);
                    setIsQuizAnswered(false);
                    setSelectedAns(null);
                  }}
                  className={`px-2.5 py-1 rounded-xl text-[11px] font-black transition-all flex items-center gap-1 whitespace-nowrap ${
                    quizCategoryFilter === cat.id
                      ? 'bg-amber-500 text-white shadow-2xs'
                      : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.label}</span>
                </button>
              ))}
            </div>

            {/* Search Box in Questions */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                value={quizSearchQuery}
                onChange={(e) => {
                  setQuizSearchQuery(e.target.value);
                  setQuizIdx(0);
                  setIsQuizAnswered(false);
                  setSelectedAns(null);
                }}
                placeholder="ค้นหาข้อสอบเคมี (เช่น โซเดียม, พันธะไอออนิก, pH, ออกเตต, ก๊าซเฉื่อย, กฎทรงมวล)..."
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-2xl text-xs font-bold text-slate-800 focus:bg-white focus:outline-emerald-500"
              />
              {quizSearchQuery && (
                <button
                  onClick={() => {
                    setQuizSearchQuery('');
                    setQuizIdx(0);
                  }}
                  className="absolute right-3 top-2 text-xs font-black text-slate-400 hover:text-slate-600"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Question Navigation Bar (Prev / Progress / Next) */}
            <div className="flex items-center justify-between bg-slate-50 p-2.5 rounded-2xl border border-slate-200 text-xs font-bold text-slate-600">
              <button
                onClick={handlePrevQuiz}
                disabled={filteredQuizzes.length <= 1}
                className="px-3 py-1.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 font-black flex items-center gap-1 transition-all disabled:opacity-40"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>ข้อก่อนหน้า</span>
              </button>

              <div className="flex items-center gap-2">
                <span className="font-black text-slate-800">
                  ข้อที่ {(quizIdx % (filteredQuizzes.length || 1)) + 1} จาก {filteredQuizzes.length} ข้อ
                </span>
                {answeredQuestionIds.includes(currentQuiz.id) && (
                  <span className="text-[10px] font-black text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>ตอบถูกแล้ว</span>
                  </span>
                )}
              </div>

              <button
                onClick={handleNextQuiz}
                disabled={filteredQuizzes.length <= 1}
                className="px-3 py-1.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 font-black flex items-center gap-1 transition-all disabled:opacity-40"
              >
                <span>ข้อถัดไป</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Current Question Box */}
            <div className="max-w-2xl mx-auto space-y-4 text-center animate-fadeIn">
              <div className="flex flex-wrap items-center justify-center gap-2">
                <span className="bg-slate-100 text-slate-700 text-[11px] font-black px-3 py-1 rounded-full border border-slate-200">
                  {currentQuiz.gradeLabel}
                </span>
                <span className="bg-emerald-100 text-emerald-800 text-[11px] font-black px-3 py-1 rounded-full border border-emerald-200">
                  +{currentQuiz.starsAwarded} ⭐ ดาววิทย์
                </span>
                <span className="bg-indigo-50 text-indigo-800 text-[11px] font-black px-3 py-1 rounded-full border border-indigo-200">
                  {currentQuiz.categoryLabel}
                </span>
              </div>

              <h4 className="text-base sm:text-xl font-black text-slate-900 leading-snug pt-1">
                {currentQuiz.q}
              </h4>

              {/* 4 Choices */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-left">
                {currentQuiz.choices.map((choice, idx) => {
                  let style = 'bg-[#FAF8F5] hover:bg-slate-100 border-2 border-slate-200 text-slate-800';
                  if (isQuizAnswered) {
                    if (idx === currentQuiz.ans) {
                      style = 'bg-emerald-500 text-white border-2 border-emerald-600 shadow-sm';
                    } else if (idx === selectedAns) {
                      style = 'bg-rose-500 text-white border-2 border-rose-600 shadow-sm';
                    } else {
                      style = 'bg-slate-50 text-slate-400 border border-slate-200 opacity-50';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      disabled={isQuizAnswered}
                      onClick={() => handleAnswerQuiz(idx)}
                      className={`p-4 rounded-2xl text-xs sm:text-sm font-black transition-all flex items-center justify-between cursor-pointer active:scale-98 ${style}`}
                    >
                      <span className="leading-snug">{choice}</span>
                      {isQuizAnswered && idx === currentQuiz.ans && (
                        <CheckCircle2 className="w-5 h-5 text-white ml-2 flex-shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Answer Explanation & Navigation Actions */}
              {isQuizAnswered && (
                <div className="bg-[#FAFDF8] border-2 border-[#D5E5D0] p-4 sm:p-5 rounded-3xl space-y-3 animate-fade-in text-left mt-4 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-xs font-black text-[#54754B]">
                    <Lightbulb className="w-4 h-4 text-amber-500" />
                    <span>คำอธิบายหลักการเคมี & เฉลยละเอียด:</span>
                  </div>
                  <p className="text-xs font-semibold text-slate-700 leading-relaxed bg-white p-3.5 rounded-2xl border border-emerald-100">
                    {currentQuiz.explanation}
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-emerald-900/10">
                    <span className="text-[11px] font-bold text-slate-500 text-center sm:text-left">
                      {selectedAns === currentQuiz.ans
                        ? '🎉 ถูกต้อง! ได้รับดาววิทย์แล้ว ยอดเยี่ยมมาก'
                        : '💡 ไม่เป็นไรนะ อ่านคำอธิบายแล้วลองทำข้อถัดไปกัน!'}
                    </span>

                    <div className="flex items-center gap-2 w-full sm:w-auto">
                      <button
                        onClick={handleRandomQuiz}
                        className="flex-1 sm:flex-initial px-4 py-2 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-black shadow-xs flex items-center justify-center gap-1.5 transition-all"
                      >
                        <Dices className="w-3.5 h-3.5" />
                        <span>สุ่มข้อต่อไป 🎲</span>
                      </button>

                      <button
                        onClick={handleNextQuiz}
                        className="flex-1 sm:flex-initial px-5 py-2 rounded-2xl bg-[#6A8D60] hover:bg-[#58794F] text-white text-xs font-black shadow-xs flex items-center justify-center gap-1.5 transition-all"
                      >
                        <span>ข้อถัดไป 🚀</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ========================================================
            TAB 3: SOLAR SYSTEM (Farming Removed - Pure Exploration)
           ======================================================== */}
        {activeTab === 'planets' && (
          <div className="bg-white rounded-3xl p-6 shadow-xs border border-[#EAE5DB] space-y-6">
            <div>
              <h3 className="text-lg font-black text-slate-800">
                ระบบสุริยะจักรวาล (The Solar System) 🪐
              </h3>
              <p className="text-xs text-slate-500 font-bold">
                แตะเลือกดาวเคราะห์เพื่อดูข้อมูลอวกาศ (การสำรวจไม่แจกดาวฟรี • ตอบควิซเพื่อรับดาวจริง)
              </p>
            </div>

            {/* Planet Horizontal Track */}
            <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
              {PLANETS.map((p) => {
                const isSelected = selectedPlanet.name === p.name;
                return (
                  <button
                    key={p.name}
                    onClick={() => {
                      sfx.playClick();
                      setSelectedPlanet(p);
                    }}
                    className={`flex flex-col items-center gap-1 p-3 rounded-2xl border-2 transition-all min-w-[85px] ${
                      isSelected
                        ? 'border-[#6A8D60] bg-[#FAFDF8] shadow-sm scale-105 ring-2 ring-[#6A8D60]/20'
                        : 'border-[#EDE7DE] hover:border-slate-300 bg-[#FAF8F5]'
                    }`}
                  >
                    <span className="text-3xl filter drop-shadow">{p.emoji}</span>
                    <span className="text-xs font-black text-slate-800">{p.thName}</span>
                    <span className="text-[10px] text-slate-400 font-bold">{p.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Selected Planet Detail Card */}
            <div className="bg-gradient-to-tr from-slate-900 to-indigo-950 text-white p-6 rounded-3xl shadow-md flex flex-col md:flex-row items-center gap-6 border-2 border-slate-800">
              <div className="relative w-36 h-36 rounded-full bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center border border-white/20 shadow-2xl">
                <span className="text-7xl select-none animate-pulse">{selectedPlanet.emoji}</span>
              </div>

              <div className="space-y-2 text-center md:text-left flex-1">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                  <h4 className="text-2xl font-black text-yellow-300">
                    {selectedPlanet.thName} ({selectedPlanet.name})
                  </h4>
                  <span className="bg-emerald-500/30 text-emerald-300 border border-emerald-400 text-xs px-2.5 py-0.5 rounded-full font-bold">
                    ดวงจันทร์บริวาร: {selectedPlanet.moons} ดวง
                  </span>
                </div>

                <p className="text-sm font-semibold text-slate-200 leading-relaxed">
                  {selectedPlanet.funFact}
                </p>

                <div className="bg-white/10 p-3 rounded-2xl border border-white/10 text-xs text-amber-200 font-black">
                  ⭐ ไฮไลต์เด็ด: {selectedPlanet.highlight}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            TAB 4: HUMAN BODY (Farming Removed - Pure Exploration)
           ======================================================== */}
        {activeTab === 'body' && (
          <div className="bg-white rounded-3xl p-6 shadow-xs border border-[#EAE5DB] space-y-6">
            <div>
              <h3 className="text-lg font-black text-slate-800">
                อวัยวะและการทำงานของร่างกายมนุษย์ 🫀
              </h3>
              <p className="text-xs text-slate-500 font-bold">
                กลไกชีววิทยาในร่างกายเรา (การสำรวจไม่แจกดาวฟรี • ตอบควิซเพื่อรับดาวจริง)
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {BODY_ORGANS.map((organ, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    sfx.playClick();
                    speakThai(`${organ.name}. ${organ.desc}`);
                  }}
                  className="p-5 rounded-3xl bg-[#FAF8F5] border-2 border-[#EDE7DE] hover:border-[#6A8D60] cursor-pointer transition-all shadow-2xs group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-4xl group-hover:scale-110 transition-transform">
                      {organ.emoji}
                    </span>
                    <div>
                      <h4 className="text-base font-black text-slate-900">{organ.name}</h4>
                      <p className="text-xs font-bold text-[#54754B]">{organ.desc}</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 font-medium bg-white p-3 rounded-2xl border border-slate-200/80">
                    {organ.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Floating Pet Modal */}
      <PetModal
        isOpen={isPetModalOpen}
        onClose={() => setIsPetModalOpen(false)}
        activeProfile={activeProfile}
        profiles={profiles}
        onFeedStars={handleFeedStars}
        onSwitchPetType={handleSwitchPetType}
        onSwitchProfile={handleSwitchProfile}
        initialSubject="science"
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
