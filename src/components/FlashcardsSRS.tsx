'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Word } from '@/types';
import {
  Volume2,
  Eye,
  EyeOff,
  Star,
  Sparkles,
  Layers,
  BookOpen,
  Award,
  CheckCircle2,
  XCircle,
  RotateCcw,
  ArrowRight,
  ArrowLeft,
  Shuffle,
  Headphones,
  Flame,
  Trophy,
  HelpCircle,
  Bookmark,
  Check,
} from 'lucide-react';
import { speakChinese, sfx } from '@/lib/speech';
import confetti from 'canvas-confetti';
import { CATEGORIES } from '@/data/vocabulary';
import { MASTERY_LEVELS } from '@/data/levels';

interface FlashcardsSRSProps {
  words: Word[];
  onEarnReward?: (stars: number) => void;
  initialLevel?: number;
}

type Mode = 'study' | 'quiz';
type QuizFormat = 'mixed' | 'meaning' | 'listening' | 'reverse';

interface QuizChoice {
  id: string;
  label: string;
  subLabel?: string;
  isCorrect: boolean;
}

interface QuizQuestion {
  id: string;
  word: Word;
  type: 'meaning' | 'listening' | 'reverse';
  prompt: string;
  subPrompt?: string;
  choices: QuizChoice[];
}

const QUESTIONS_PER_ROUND = 10;

export const FlashcardsSRS: React.FC<FlashcardsSRSProps> = ({
  words,
  onEarnReward,
  initialLevel = 0,
}) => {
  // Main Mode: Study & Review vs Recall Quiz
  const [activeMode, setActiveMode] = useState<Mode>('study');

  // Filter States
  const [selectedLevel, setSelectedLevel] = useState<number>(initialLevel);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // ----------------------------------------------------
  // Filtered Vocabulary Pool
  // ----------------------------------------------------
  const filteredWords = useMemo(() => {
    return words.filter((w) => {
      const matchLevel = selectedLevel === 0 || w.hskLevel === selectedLevel;
      const matchCategory = selectedCategory === 'all' || w.category === selectedCategory;
      return matchLevel && matchCategory;
    });
  }, [words, selectedLevel, selectedCategory]);

  // Fallback pool for distractors
  const fallbackPool = useMemo(() => {
    if (filteredWords.length >= 8) return filteredWords;
    if (selectedLevel > 0) {
      const levelWords = words.filter((w) => w.hskLevel === selectedLevel);
      if (levelWords.length >= 8) return levelWords;
    }
    return words;
  }, [words, filteredWords, selectedLevel]);

  // ----------------------------------------------------
  // STUDY MODE STATE (Zero Stars / Safe Review)
  // ----------------------------------------------------
  const [studyIndex, setStudyIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showPinyin, setShowPinyin] = useState(true);
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<string>>(new Set());

  // Ensure study index stays within bounds
  useEffect(() => {
    setStudyIndex(0);
    setIsFlipped(false);
  }, [selectedLevel, selectedCategory]);

  const currentStudyWord = filteredWords[studyIndex] || filteredWords[0] || words[0];

  const handleStudyFlip = () => {
    setIsFlipped((prev) => !prev);
    if (!isFlipped && currentStudyWord) {
      speakChinese(currentStudyWord.hanzi);
    }
  };

  const handleStudyNext = () => {
    if (filteredWords.length === 0) return;
    setIsFlipped(false);
    setStudyIndex((prev) => (prev + 1) % filteredWords.length);
  };

  const handleStudyPrev = () => {
    if (filteredWords.length === 0) return;
    setIsFlipped(false);
    setStudyIndex((prev) => (prev - 1 + filteredWords.length) % filteredWords.length);
  };

  const handleStudyRandom = () => {
    if (filteredWords.length <= 1) return;
    setIsFlipped(false);
    let nextIdx = Math.floor(Math.random() * filteredWords.length);
    if (nextIdx === studyIndex) {
      nextIdx = (studyIndex + 1) % filteredWords.length;
    }
    setStudyIndex(nextIdx);
  };

  const toggleBookmark = (id: string) => {
    setBookmarkedIds((prev) => {
      const updated = new Set(prev);
      if (updated.has(id)) {
        updated.delete(id);
      } else {
        updated.add(id);
        sfx.playCorrect();
      }
      return updated;
    });
  };

  // ----------------------------------------------------
  // QUIZ MODE STATE (Verified Recall / Anti-Farming)
  // ----------------------------------------------------
  const [quizFormat, setQuizFormat] = useState<QuizFormat>('mixed');
  const [hideQuizPinyin, setHideQuizPinyin] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState<QuizQuestion | null>(null);
  const [questionCount, setQuestionCount] = useState(1);
  const [roundScore, setRoundScore] = useState(0);
  const [roundStarsEarned, setRoundStarsEarned] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [selectedChoiceId, setSelectedChoiceId] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [missedWords, setMissedWords] = useState<Word[]>([]);
  const [recentBonusToast, setRecentBonusToast] = useState<string | null>(null);

  // Generate a randomized question with 4 choices
  const generateQuestion = useCallback(
    (qIndex: number = questionCount): QuizQuestion | null => {
      const pool = filteredWords.length >= 4 ? filteredWords : fallbackPool;
      if (pool.length < 2) return null;

      // Pick target word randomly
      const targetWord = pool[Math.floor(Math.random() * pool.length)];

      // Determine question type
      let qType: 'meaning' | 'listening' | 'reverse' = 'meaning';
      if (quizFormat === 'mixed') {
        const types: ('meaning' | 'listening' | 'reverse')[] = ['meaning', 'listening', 'reverse'];
        qType = types[Math.floor(Math.random() * types.length)];
      } else {
        qType = quizFormat;
      }

      // Pick 3 distractors
      const distractors: Word[] = [];
      const usedIds = new Set<string>([targetWord.id]);
      const usedThai = new Set<string>([targetWord.thai]);
      const usedHanzi = new Set<string>([targetWord.hanzi]);

      // Shuffle pool copy
      const shuffledCandidates = [...fallbackPool].sort(() => 0.5 - Math.random());

      for (const cand of shuffledCandidates) {
        if (
          !usedIds.has(cand.id) &&
          !usedThai.has(cand.thai) &&
          !usedHanzi.has(cand.hanzi)
        ) {
          usedIds.add(cand.id);
          usedThai.add(cand.thai);
          usedHanzi.add(cand.hanzi);
          distractors.push(cand);
          if (distractors.length >= 3) break;
        }
      }

      // Format choices according to qType
      const correctChoice: QuizChoice = {
        id: `choice-correct-${targetWord.id}`,
        label:
          qType === 'meaning'
            ? targetWord.thai
            : qType === 'reverse'
            ? targetWord.hanzi
            : `${targetWord.hanzi} (${targetWord.pinyin})`,
        subLabel:
          qType === 'reverse'
            ? targetWord.pinyin
            : qType === 'listening'
            ? targetWord.thai
            : undefined,
        isCorrect: true,
      };

      const distractorChoices: QuizChoice[] = distractors.map((d, idx) => ({
        id: `choice-distractor-${d.id}-${idx}`,
        label:
          qType === 'meaning'
            ? d.thai
            : qType === 'reverse'
            ? d.hanzi
            : `${d.hanzi} (${d.pinyin})`,
        subLabel:
          qType === 'reverse'
            ? d.pinyin
            : qType === 'listening'
            ? d.thai
            : undefined,
        isCorrect: false,
      }));

      // Combine and shuffle choices
      const allChoices = [correctChoice, ...distractorChoices].sort(
        () => 0.5 - Math.random()
      );

      // Auto speak for listening question
      if (qType === 'listening') {
        setTimeout(() => speakChinese(targetWord.hanzi), 250);
      }

      return {
        id: `q-${Date.now()}-${qIndex}`,
        word: targetWord,
        type: qType,
        prompt:
          qType === 'meaning'
            ? targetWord.hanzi
            : qType === 'reverse'
            ? targetWord.thai
            : '🎧 แตะเพื่อฟังเสียงอ่านภาษาจีน',
        subPrompt:
          qType === 'meaning'
            ? hideQuizPinyin
              ? 'คำนี้แปลว่าอะไรในภาษาไทย?'
              : targetWord.pinyin
            : qType === 'reverse'
            ? 'คำศัพท์ภาษาจีนข้อใดตรงกับคำแปลนี้?'
            : 'เลือกตัวอักษรจีนที่มีเสียงอ่านตรงกับที่ได้ยิน',
        choices: allChoices,
      };
    },
    [filteredWords, fallbackPool, quizFormat, hideQuizPinyin, questionCount]
  );

  // Start / Restart Quiz Round
  const startNewQuizRound = useCallback(() => {
    setQuestionCount(1);
    setRoundScore(0);
    setRoundStarsEarned(0);
    setStreak(0);
    setBestStreak(0);
    setSelectedChoiceId(null);
    setIsAnswerSubmitted(false);
    setIsQuizComplete(false);
    setMissedWords([]);
    setRecentBonusToast(null);

    const firstQ = generateQuestion(1);
    setCurrentQuestion(firstQ);
  }, [generateQuestion]);

  // When switching to quiz mode, init question
  useEffect(() => {
    if (activeMode === 'quiz' && !currentQuestion && !isQuizComplete) {
      startNewQuizRound();
    }
  }, [activeMode, currentQuestion, isQuizComplete, startNewQuizRound]);

  // When filters change during quiz mode, reset quiz
  useEffect(() => {
    if (activeMode === 'quiz') {
      startNewQuizRound();
    }
  }, [selectedLevel, selectedCategory, quizFormat, startNewQuizRound, activeMode]);

  // Handle Choice Selection (STRICT VERIFICATION)
  const handleSelectChoice = (choice: QuizChoice) => {
    if (isAnswerSubmitted || !currentQuestion) return; // Prevent double clicks / farming

    setSelectedChoiceId(choice.id);
    setIsAnswerSubmitted(true);

    if (choice.isCorrect) {
      // 1. Correct Answer Verification
      sfx.playCorrect();
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#10b981', '#34d399', '#fbbf24', '#f43f5e'],
      });

      // Award strictly 5 stars
      const earned = 5;
      if (onEarnReward) onEarnReward(earned);
      setRoundStarsEarned((prev) => prev + earned);
      setRoundScore((prev) => prev + 1);

      // Streak tracking & combo bonus
      setStreak((prevStreak) => {
        const nextStreak = prevStreak + 1;
        setBestStreak((b) => Math.max(b, nextStreak));

        // Combo bonus at 5 and 10 streak
        if (nextStreak === 5 || nextStreak === 10) {
          sfx.playStarFanfare();
          const bonusStars = 5;
          if (onEarnReward) onEarnReward(bonusStars);
          setRoundStarsEarned((s) => s + bonusStars);
          setRecentBonusToast(`🔥 สุดยอด! คอมโบ ${nextStreak} ข้อติด โบนัสพิเศษ +${bonusStars} ⭐`);
          setTimeout(() => setRecentBonusToast(null), 3000);
        }
        return nextStreak;
      });
    } else {
      // 2. Incorrect Answer: 0 stars awarded
      sfx.playSoftTryAgain();
      setStreak(0);
      setMissedWords((prev) => {
        if (prev.some((w) => w.id === currentQuestion.word.id)) return prev;
        return [...prev, currentQuestion.word];
      });
    }
  };

  // Next Question or Complete Round
  const handleNextQuestion = () => {
    if (questionCount >= QUESTIONS_PER_ROUND) {
      // Complete round
      setIsQuizComplete(true);
      sfx.playStarFanfare();
      confetti({
        particleCount: 80,
        spread: 90,
        origin: { y: 0.5 },
        colors: ['#fbbf24', '#f59e0b', '#10b981', '#ec4899'],
      });
    } else {
      const nextCount = questionCount + 1;
      setQuestionCount(nextCount);
      setSelectedChoiceId(null);
      setIsAnswerSubmitted(false);
      const nextQ = generateQuestion(nextCount);
      setCurrentQuestion(nextQ);
    }
  };

  return (
    <div className="max-w-xl mx-auto space-y-5">
      {/* ========================================================
          TOP MODE SWITCHER: STUDY vs QUIZ (Pixar 3D Segmented)
         ======================================================== */}
      <div className="bg-white/95 backdrop-blur-md p-1.5 rounded-3xl border-2 border-rose-200 shadow-md flex items-center justify-between gap-1.5 select-none">
        <button
          onClick={() => {
            sfx.playCorrect();
            setActiveMode('study');
          }}
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-2xl text-xs sm:text-sm font-black transition-all ${
            activeMode === 'study'
              ? 'bg-gradient-to-r from-amber-500 to-rose-500 text-white shadow-md scale-101'
              : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>📖 ทบทวนการ์ดคำศัพท์</span>
        </button>

        <button
          onClick={() => {
            sfx.playCorrect();
            setActiveMode('quiz');
          }}
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-2xl text-xs sm:text-sm font-black transition-all ${
            activeMode === 'quiz'
              ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md scale-101'
              : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
          }`}
        >
          <Award className="w-4 h-4 text-yellow-300" />
          <span>🎯 ทดสอบความจำ (วัดผลจริง)</span>
        </button>
      </div>

      {/* ========================================================
          LEVEL FILTER SELECTOR
         ======================================================== */}
      <div className="bg-white/90 backdrop-blur-md p-3.5 rounded-3xl border-2 border-rose-100 shadow-sm">
        <div className="flex items-center justify-between gap-1.5 text-xs font-black text-slate-700 mb-2">
          <div className="flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-rose-500" />
            <span>เลือกระดับคำศัพท์ (HSK Level):</span>
          </div>
          <span className="text-[11px] text-slate-400 font-bold">
            พบคลังคำศัพท์ {filteredWords.length} คำ
          </span>
        </div>
        <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => setSelectedLevel(0)}
            className={`px-3 py-1.5 rounded-2xl text-xs font-black whitespace-nowrap transition-all ${
              selectedLevel === 0
                ? 'bg-slate-900 text-white shadow-md'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
            }`}
          >
            ทุกระดับ (1-6)
          </button>

          {MASTERY_LEVELS.map((lvl) => (
            <button
              key={lvl.level}
              onClick={() => setSelectedLevel(lvl.level)}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-2xl text-xs font-black whitespace-nowrap transition-all ${
                selectedLevel === lvl.level
                  ? 'bg-gradient-to-r from-rose-500 to-amber-500 text-white shadow-md scale-102'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
              }`}
            >
              <span>{lvl.badge}</span>
              <span>Level {lvl.level}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ========================================================
          CATEGORY PILLS SELECTOR
         ======================================================== */}
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`flex items-center gap-1 px-3.5 py-2 rounded-2xl text-xs font-black whitespace-nowrap transition-all ${
              selectedCategory === cat.id
                ? 'bg-amber-500 text-white shadow-md'
                : 'bg-white hover:bg-amber-50 text-slate-600 border border-slate-200 shadow-sm'
            }`}
          >
            <span>{cat.icon}</span>
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      {/* ========================================================
          EMPTY STATE
         ======================================================== */}
      {filteredWords.length === 0 ? (
        <div className="text-center py-12 pixar-card p-6">
          <p className="text-4xl mb-2">🔍</p>
          <p className="text-slate-700 font-black text-sm">
            ไม่พบคลังคำศัพท์ใน Level {selectedLevel} และหมวดหมู่นี้
          </p>
          <button
            onClick={() => {
              setSelectedLevel(0);
              setSelectedCategory('all');
            }}
            className="mt-3 btn-pixar btn-pixar-rose px-5 py-2 rounded-2xl text-xs font-black"
          >
            แสดงคำศัพท์ทั้งหมด
          </button>
        </div>
      ) : activeMode === 'study' ? (
        /* ========================================================
            MODE 1: STUDY & REVIEW FLASHCARDS (SAFE / NO FARMING)
           ======================================================== */
        <div className="space-y-4 animate-fade-in">
          {/* Anti-farming Notice Banner */}
          <div className="bg-gradient-to-r from-amber-50 via-rose-50 to-amber-50 border-2 border-amber-200/90 rounded-2xl p-3 shadow-xs flex items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <span className="text-xl">🛡️</span>
              <div>
                <p className="font-black text-slate-800">
                  โหมดทบทวนการ์ดคำศัพท์ (ฝึกอ่านฟรี ไม่แจกดาว)
                </p>
                <p className="text-[11px] text-slate-500 font-bold">
                  ท่องจำให้คล่อง แล้วสลับไปที่ &quot;โหมดทดสอบความจำ 🎯&quot; เพื่อทำข้อสอบและพิชิตดาวจริง!
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                sfx.playCorrect();
                setActiveMode('quiz');
              }}
              className="bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-black px-3 py-1.5 rounded-xl whitespace-nowrap shadow-sm hover:scale-105 active:scale-95 transition-all"
            >
              ไปทำข้อสอบ 🎯
            </button>
          </div>

          {/* Progress & Pinyin Toggle */}
          <div className="flex items-center justify-between text-xs font-black text-slate-500 px-2 select-none">
            <span>
              การ์ดที่ {studyIndex + 1} / {filteredWords.length} (Level {currentStudyWord.hskLevel})
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => toggleBookmark(currentStudyWord.id)}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-2xl transition-all text-xs font-bold ${
                  bookmarkedIds.has(currentStudyWord.id)
                    ? 'bg-amber-100 text-amber-800 border border-amber-300'
                    : 'bg-white border border-slate-200 text-slate-500 hover:bg-slate-50'
                }`}
                title="บันทึกคำนี้ไว้ทบทวนซ้ำ"
              >
                <Bookmark
                  className={`w-3.5 h-3.5 ${
                    bookmarkedIds.has(currentStudyWord.id)
                      ? 'fill-amber-500 text-amber-500'
                      : 'text-slate-400'
                  }`}
                />
                <span>
                  {bookmarkedIds.has(currentStudyWord.id) ? 'บันทึกแล้ว' : 'บันทึกทบทวน'}
                </span>
              </button>

              <button
                onClick={() => setShowPinyin(!showPinyin)}
                className="flex items-center gap-1 bg-white border-2 border-slate-200 px-3 py-1.5 rounded-2xl hover:bg-slate-50 transition-colors shadow-sm active:scale-95 text-xs font-bold"
              >
                {showPinyin ? (
                  <EyeOff className="w-3.5 h-3.5 text-rose-500" />
                ) : (
                  <Eye className="w-3.5 h-3.5 text-emerald-500" />
                )}
                <span>{showPinyin ? 'ซ่อนพินอิน' : 'แสดงพินอิน'}</span>
              </button>
            </div>
          </div>

          {/* 3D Pixar Flip Card */}
          <div
            onClick={handleStudyFlip}
            className="pixar-card relative cursor-pointer min-h-[360px] sm:min-h-[380px] p-6 sm:p-8 flex flex-col items-center justify-between text-center transition-all duration-300 hover:scale-101 border-4 border-amber-200 select-none group"
          >
            {/* Top Bar on Card */}
            <div className="w-full flex justify-between items-center text-xs">
              <span className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full font-black border border-rose-200">
                Level {currentStudyWord.hskLevel} (HSK {currentStudyWord.hskLevel})
              </span>
              <span className="text-slate-400 font-bold group-hover:text-amber-600 transition-colors">
                แตะเพื่อพลิกดูเฉลย 🔄
              </span>
            </div>

            {/* Front of Card: Hanzi + Pinyin */}
            {!isFlipped ? (
              <div className="my-auto space-y-4">
                <h3 className="text-6xl sm:text-7xl font-black text-slate-800 tracking-wider">
                  {currentStudyWord.hanzi}
                </h3>
                {showPinyin && (
                  <p className="text-2xl sm:text-3xl font-black text-rose-500">
                    {currentStudyWord.pinyin}
                  </p>
                )}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    speakChinese(currentStudyWord.hanzi);
                  }}
                  className="btn-pixar btn-pixar-rose inline-flex items-center gap-1.5 px-5 py-2.5 rounded-2xl text-xs font-black shadow-md hover:scale-105 active:scale-95"
                >
                  <Volume2 className="w-4 h-4" />
                  <span>ฟังเสียงอ่าน</span>
                </button>
              </div>
            ) : (
              /* Back of Card: Meaning, Sentences & Details */
              <div className="my-auto space-y-3.5 w-full animate-fade-in">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-4xl font-black text-slate-800">
                    {currentStudyWord.hanzi}
                  </span>
                  <span className="text-xl font-black text-rose-500">
                    {currentStudyWord.pinyin}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      speakChinese(currentStudyWord.hanzi);
                    }}
                    className="p-1.5 bg-rose-100 hover:bg-rose-200 rounded-full text-rose-700"
                    title="ฟังเสียง"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="bg-rose-50/90 p-3.5 rounded-2xl border-2 border-rose-100">
                  <p className="text-xl font-black text-slate-900">{currentStudyWord.thai}</p>
                  {currentStudyWord.english && (
                    <p className="text-xs text-slate-500 font-bold mt-0.5">
                      {currentStudyWord.english}
                    </p>
                  )}
                </div>

                {currentStudyWord.sampleSentence && (
                  <div className="text-left text-xs bg-slate-50 p-3 rounded-2xl border border-slate-200 relative group/sent">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-black text-slate-800">
                          {currentStudyWord.sampleSentence.hanzi}
                        </p>
                        <p className="text-rose-600 font-bold">
                          {currentStudyWord.sampleSentence.pinyin}
                        </p>
                        <p className="text-slate-600 mt-0.5">
                          {currentStudyWord.sampleSentence.thai}
                        </p>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          speakChinese(currentStudyWord.sampleSentence.hanzi);
                        }}
                        className="p-1.5 bg-slate-200 hover:bg-slate-300 rounded-lg text-slate-700"
                        title="ฟังประโยคตัวอย่าง"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Bottom Card Hint */}
            <div className="w-full text-center text-xs text-slate-400 font-bold">
              หมวดหมู่: {currentStudyWord.category}
            </div>
          </div>

          {/* Clean Navigation Controls (Previous, Shuffle, Next) */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            <button
              onClick={handleStudyPrev}
              className="btn-pixar btn-pixar-slate py-3 px-2 rounded-2xl text-xs sm:text-sm font-black flex items-center justify-center gap-1.5"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>คำก่อนหน้า</span>
            </button>

            <button
              onClick={handleStudyRandom}
              className="btn-pixar btn-pixar-amber py-3 px-2 rounded-2xl text-xs sm:text-sm font-black flex items-center justify-center gap-1.5"
            >
              <Shuffle className="w-4 h-4" />
              <span>สุ่มคำศัพท์</span>
            </button>

            <button
              onClick={handleStudyNext}
              className="btn-pixar btn-pixar-rose py-3 px-2 rounded-2xl text-xs sm:text-sm font-black flex items-center justify-center gap-1.5"
            >
              <span>คำถัดไป</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : isQuizComplete ? (
        /* ========================================================
            QUIZ COMPLETE SUMMARY SCREEN
           ======================================================== */
        <div className="pixar-card p-6 sm:p-8 text-center space-y-5 animate-scale-in border-4 border-amber-300">
          <div className="w-20 h-20 bg-gradient-to-tr from-amber-300 via-yellow-400 to-amber-500 text-amber-900 rounded-full mx-auto flex items-center justify-center text-4xl shadow-xl animate-bounce">
            🏆
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-800">
              จบการทดสอบความจำรอบนี้แล้ว! 🎉
            </h2>
            <p className="text-xs sm:text-sm font-bold text-slate-600 mt-1">
              ผลการประเมินความแม่นยำและการสะสมดาวจากการตอบถูกจริง
            </p>
          </div>

          {/* Stats Badges Grid */}
          <div className="grid grid-cols-3 gap-2.5 max-w-md mx-auto">
            <div className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-3">
              <span className="text-xs font-bold text-emerald-700 block">ตอบถูก</span>
              <span className="text-2xl font-black text-emerald-800">
                {roundScore} / {QUESTIONS_PER_ROUND}
              </span>
              <span className="text-[10px] text-emerald-600 block mt-0.5">
                ({Math.round((roundScore / QUESTIONS_PER_ROUND) * 100)}%)
              </span>
            </div>

            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-3">
              <span className="text-xs font-bold text-yellow-700 block">ดาวที่ได้รับจริง</span>
              <span className="text-2xl font-black text-yellow-800 flex items-center justify-center gap-1">
                <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                <span>+{roundStarsEarned}</span>
              </span>
              <span className="text-[10px] text-yellow-600 block mt-0.5">คะแนนสะสมจริง</span>
            </div>

            <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-3">
              <span className="text-xs font-bold text-orange-700 block">คอมโบสูงสุด</span>
              <span className="text-2xl font-black text-orange-800 flex items-center justify-center gap-0.5">
                <Flame className="w-5 h-5 text-orange-500 fill-orange-500" />
                <span>{bestStreak}</span>
              </span>
              <span className="text-[10px] text-orange-600 block mt-0.5">ข้อต่อเนื่อง</span>
            </div>
          </div>

          {/* Missed Words Section (if any) */}
          {missedWords.length > 0 && (
            <div className="text-left bg-rose-50/80 border-2 border-rose-200 rounded-2xl p-4 max-w-md mx-auto space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-black text-rose-800">
                <HelpCircle className="w-4 h-4 text-rose-600" />
                <span>คำที่ต้องทบทวนเพิ่ม ({missedWords.length} คำ):</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {missedWords.map((mw) => (
                  <button
                    key={mw.id}
                    onClick={() => speakChinese(mw.hanzi)}
                    className="flex items-center gap-1.5 bg-white border border-rose-300 px-2.5 py-1 rounded-xl text-xs font-bold text-slate-800 hover:bg-rose-100 transition-all shadow-2xs"
                    title="แตะเพื่อฟังเสียง"
                  >
                    <span className="font-black">{mw.hanzi}</span>
                    <span className="text-rose-600 text-[11px]">({mw.pinyin})</span>
                    <span className="text-slate-500 text-[11px]">- {mw.thai}</span>
                    <Volume2 className="w-3 h-3 text-rose-500 ml-0.5" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={startNewQuizRound}
              className="w-full sm:w-auto btn-pixar btn-pixar-emerald px-6 py-3 rounded-2xl text-sm font-black shadow-lg flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>เริ่มทดสอบชุดใหม่ (10 ข้อ)</span>
            </button>

            <button
              onClick={() => {
                sfx.playCorrect();
                setActiveMode('study');
              }}
              className="w-full sm:w-auto btn-pixar btn-pixar-amber px-6 py-3 rounded-2xl text-sm font-black shadow-md flex items-center justify-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              <span>กลับไปทบทวนการ์ดคำศัพท์</span>
            </button>
          </div>
        </div>
      ) : currentQuestion ? (
        /* ========================================================
            MODE 2: RECALL & MEMORY CHALLENGE (REAL TEST / NO FARMING)
           ======================================================== */
        <div className="space-y-4 animate-fade-in">
          {/* Quiz Top Status Bar */}
          <div className="flex items-center justify-between bg-white/90 backdrop-blur-md p-3 rounded-2xl border-2 border-emerald-100 shadow-sm text-xs font-black">
            {/* Question Counter */}
            <div className="flex items-center gap-1.5 text-slate-700">
              <span className="bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full">
                ข้อ {questionCount} / {QUESTIONS_PER_ROUND}
              </span>
              <span className="text-slate-400">Level {currentQuestion.word.hskLevel}</span>
            </div>

            {/* Streak Counter */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-orange-600 bg-orange-50 px-2.5 py-0.5 rounded-full border border-orange-200">
                <Flame className="w-4 h-4 fill-orange-500 text-orange-500 animate-pulse" />
                <span>คอมโบ {streak}</span>
              </div>

              {/* Real Stars Earned Live */}
              <div className="flex items-center gap-1 text-yellow-700 bg-yellow-50 px-2.5 py-0.5 rounded-full border border-yellow-200">
                <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
                <span>+{roundStarsEarned} ⭐</span>
              </div>
            </div>
          </div>

          {/* Quiz Format Selector Pills */}
          <div className="flex items-center justify-between gap-1 overflow-x-auto pb-1 text-xs">
            <div className="flex gap-1.5">
              <button
                onClick={() => setQuizFormat('mixed')}
                className={`px-3 py-1.5 rounded-xl font-black whitespace-nowrap transition-all ${
                  quizFormat === 'mixed'
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
                }`}
              >
                🔀 คละรูปแบบ
              </button>
              <button
                onClick={() => setQuizFormat('meaning')}
                className={`px-3 py-1.5 rounded-xl font-black whitespace-nowrap transition-all ${
                  quizFormat === 'meaning'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
                }`}
              >
                🇨🇳 ทายความหมาย
              </button>
              <button
                onClick={() => setQuizFormat('listening')}
                className={`px-3 py-1.5 rounded-xl font-black whitespace-nowrap transition-all ${
                  quizFormat === 'listening'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
                }`}
              >
                🎧 ฟังเสียงทายคำ
              </button>
              <button
                onClick={() => setQuizFormat('reverse')}
                className={`px-3 py-1.5 rounded-xl font-black whitespace-nowrap transition-all ${
                  quizFormat === 'reverse'
                    ? 'bg-rose-600 text-white shadow-sm'
                    : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
                }`}
              >
                🇹🇭 ไทยเป็นจีน
              </button>
            </div>

            {/* Toggle Pinyin in Quiz */}
            {currentQuestion.type === 'meaning' && (
              <button
                onClick={() => setHideQuizPinyin(!hideQuizPinyin)}
                className="bg-white border border-slate-200 px-2.5 py-1.5 rounded-xl text-[11px] font-bold text-slate-600 hover:bg-slate-50 whitespace-nowrap"
                title="ซ่อนพินอินเพื่อเพิ่มความท้าทาย"
              >
                {hideQuizPinyin ? '👁️ แสดงพินอิน' : '🙈 ซ่อนพินอิน'}
              </button>
            )}
          </div>

          {/* Bonus Toast Notification */}
          {recentBonusToast && (
            <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-black px-4 py-2 rounded-2xl shadow-lg text-center animate-bounce">
              {recentBonusToast}
            </div>
          )}

          {/* Main Quiz Question Card */}
          <div className="pixar-card p-6 sm:p-8 text-center space-y-4 border-4 border-emerald-200 relative overflow-hidden">
            {/* Background decorative glow */}
            <div className="absolute -top-10 -right-10 w-28 h-28 bg-emerald-100/60 rounded-full blur-2xl pointer-events-none" />

            {/* Prompt Type Badge */}
            <div className="flex items-center justify-between text-xs">
              <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full font-black border border-emerald-200">
                {currentQuestion.type === 'meaning'
                  ? '🇨🇳 คำถามความหมาย'
                  : currentQuestion.type === 'listening'
                  ? '🎧 คำถามฟังเสียง'
                  : '🇹🇭 คำถามแปลไทยเป็นจีน'}
              </span>
              <span className="text-slate-400 font-bold">
                {isAnswerSubmitted ? 'ตรวจคำตอบแล้ว' : 'แตะเลือก 1 คำตอบ'}
              </span>
            </div>

            {/* Question Prompt Display */}
            <div className="py-3 space-y-2">
              {currentQuestion.type === 'listening' ? (
                <div className="space-y-3">
                  <button
                    onClick={() => speakChinese(currentQuestion.word.hanzi)}
                    className="w-20 h-20 bg-gradient-to-tr from-indigo-500 via-indigo-600 to-purple-600 hover:scale-105 active:scale-95 text-white rounded-3xl mx-auto flex items-center justify-center text-3xl shadow-xl shadow-indigo-200 transition-all cursor-pointer group"
                  >
                    <Volume2 className="w-10 h-10 group-hover:scale-110 transition-transform" />
                  </button>
                  <p className="text-sm font-black text-indigo-700">
                    แตะที่ลำโพงเพื่อฟังเสียงอีกครั้ง 🔊
                  </p>
                  <p className="text-xs text-slate-500 font-bold">
                    {currentQuestion.subPrompt}
                  </p>
                </div>
              ) : currentQuestion.type === 'reverse' ? (
                <div className="space-y-2">
                  <p className="text-xs text-slate-500 font-black">
                    {currentQuestion.subPrompt}
                  </p>
                  <h3 className="text-3xl sm:text-4xl font-black text-slate-800">
                    &quot;{currentQuestion.prompt}&quot;
                  </h3>
                </div>
              ) : (
                <div className="space-y-2">
                  <h3 className="text-6xl sm:text-7xl font-black text-slate-800 tracking-wider">
                    {currentQuestion.prompt}
                  </h3>
                  {!hideQuizPinyin && (
                    <p className="text-2xl sm:text-3xl font-black text-rose-500">
                      {currentQuestion.subPrompt}
                    </p>
                  )}
                  <button
                    onClick={() => speakChinese(currentQuestion.word.hanzi)}
                    className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-800 font-bold bg-slate-100 hover:bg-slate-200 px-3 py-1 rounded-xl transition-all"
                  >
                    <Volume2 className="w-3.5 h-3.5 text-rose-500" />
                    <span>ฟังเสียงอ่าน</span>
                  </button>
                </div>
              )}
            </div>

            {/* 4 Choices Grid (Anti-farming: strictly locked once clicked) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {currentQuestion.choices.map((choice, index) => {
                const isSelected = selectedChoiceId === choice.id;
                let btnStyle =
                  'bg-white hover:bg-slate-50 border-2 border-slate-200 text-slate-800 hover:border-emerald-300 shadow-sm';

                if (isAnswerSubmitted) {
                  if (choice.isCorrect) {
                    btnStyle =
                      'bg-emerald-500 border-2 border-emerald-600 text-white shadow-md animate-scale-in';
                  } else if (isSelected && !choice.isCorrect) {
                    btnStyle =
                      'bg-rose-500 border-2 border-rose-600 text-white shadow-md';
                  } else {
                    btnStyle =
                      'bg-slate-100 border-2 border-slate-200 text-slate-400 opacity-60';
                  }
                }

                return (
                  <button
                    key={choice.id}
                    disabled={isAnswerSubmitted}
                    onClick={() => handleSelectChoice(choice)}
                    className={`p-3.5 sm:p-4 rounded-2xl text-left font-black transition-all flex items-center justify-between gap-2 cursor-pointer disabled:cursor-default ${btnStyle}`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-black ${
                          isAnswerSubmitted && choice.isCorrect
                            ? 'bg-white text-emerald-700'
                            : isAnswerSubmitted && isSelected && !choice.isCorrect
                            ? 'bg-white text-rose-700'
                            : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {String.fromCharCode(65 + index)}
                      </span>
                      <div>
                        <span className="text-sm sm:text-base block">{choice.label}</span>
                        {choice.subLabel && (
                          <span
                            className={`text-[11px] block ${
                              isAnswerSubmitted && (choice.isCorrect || isSelected)
                                ? 'text-white/90'
                                : 'text-slate-500'
                            }`}
                          >
                            {choice.subLabel}
                          </span>
                        )}
                      </div>
                    </div>

                    {isAnswerSubmitted && (
                      <div>
                        {choice.isCorrect ? (
                          <CheckCircle2 className="w-5 h-5 text-white" />
                        ) : isSelected && !choice.isCorrect ? (
                          <XCircle className="w-5 h-5 text-white" />
                        ) : null}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Answer Feedback & Next Button */}
            {isAnswerSubmitted && (
              <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 animate-fade-in">
                <div className="text-left">
                  {selectedChoiceId &&
                  currentQuestion.choices.find((c) => c.id === selectedChoiceId)?.isCorrect ? (
                    <div className="flex items-center gap-1.5 text-emerald-700 font-black text-sm">
                      <Sparkles className="w-4 h-4 text-emerald-500 fill-emerald-500" />
                      <span>ถูกต้อง! ยอดเยี่ยมมาก (+5 ⭐)</span>
                    </div>
                  ) : (
                    <div className="text-rose-600 text-xs font-black">
                      <span>ยังไม่ถูกต้อง (0 ⭐) เฉลยคือ: </span>
                      <span className="text-slate-800 underline">
                        {currentQuestion.word.hanzi} ({currentQuestion.word.pinyin}) ={' '}
                        {currentQuestion.word.thai}
                      </span>
                    </div>
                  )}
                </div>

                <button
                  onClick={handleNextQuestion}
                  className="w-full sm:w-auto btn-pixar btn-pixar-emerald px-6 py-2.5 rounded-2xl text-xs sm:text-sm font-black shadow-md flex items-center justify-center gap-1.5 hover:scale-105 active:scale-95"
                >
                  <span>
                    {questionCount >= QUESTIONS_PER_ROUND ? 'ดูผลการทดสอบ' : 'ข้อถัดไป'}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
};
