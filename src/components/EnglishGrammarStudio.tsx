'use client';

import React, { useState } from 'react';
import {
  Volume2,
  Sparkles,
  CheckCircle2,
  RotateCcw,
  Award,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  Zap,
  Clock,
  Search,
  Train,
  Shield,
  HelpCircle,
  ThumbsUp,
  Smile,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { speakEnglish, sfx } from '@/lib/speech';
import {
  TRAIN_CHALLENGES,
  TrainSentenceChallenge,
  TrainWordTile,
  TIME_MACHINE_VERBS,
  TimeMachineVerb,
  HUNGRY_S_CHALLENGES,
  HungrySChallenge,
  DETECTIVE_CASES,
  DetectiveCase,
  GRAMMAR_SUPERHEROES,
  GrammarSuperhero,
  PartOfSpeech,
} from '@/data/englishGrammarData';

interface EnglishGrammarStudioProps {
  onEarnReward?: (stars: number) => void;
}

type GrammarMode = 'train' | 'timemachine' | 'hungry_s' | 'detective' | 'superheroes';

export const EnglishGrammarStudio: React.FC<EnglishGrammarStudioProps> = ({
  onEarnReward,
}) => {
  const [activeMode, setActiveMode] = useState<GrammarMode>('train');

  // =========================================================================
  // 1. TRAIN SENTENCE BUILDER STATE
  // =========================================================================
  const [trainIndex, setTrainIndex] = useState(0);
  const currentTrain = TRAIN_CHALLENGES[trainIndex] || TRAIN_CHALLENGES[0];
  const [slottedTiles, setSlottedTiles] = useState<TrainWordTile[]>([]);
  const [trainStatus, setTrainStatus] = useState<'idle' | 'success' | 'wrong'>('idle');
  const [trainFeedback, setTrainFeedback] = useState<string | null>(null);

  const availableTiles = currentTrain.tiles.filter(
    (t) => !slottedTiles.some((s) => s.id === t.id)
  );

  const handleResetTrain = (newIdx: number = trainIndex) => {
    setTrainIndex(newIdx);
    setSlottedTiles([]);
    setTrainStatus('idle');
    setTrainFeedback(null);
  };

  const handleAddTileToTrain = (tile: TrainWordTile) => {
    if (trainStatus === 'success') return;
    sfx.playCorrect();
    const updated = [...slottedTiles, tile];
    setSlottedTiles(updated);
    setTrainStatus('idle');
    setTrainFeedback(null);
  };

  const handleRemoveTileFromTrain = (tileId: string) => {
    if (trainStatus === 'success') return;
    sfx.playSoftTryAgain();
    setSlottedTiles(slottedTiles.filter((t) => t.id !== tileId));
    setTrainStatus('idle');
    setTrainFeedback(null);
  };

  const handleLaunchTrain = () => {
    const assembledText = slottedTiles.map((t) => t.word).join(' ') + '.';
    const cleanAssembled = assembledText.replace(/\s+/g, ' ').trim().toLowerCase();
    const cleanTarget = currentTrain.correctSentence.replace(/\s+/g, ' ').trim().toLowerCase();

    if (cleanAssembled === cleanTarget) {
      setTrainStatus('success');
      sfx.playCorrect();
      confetti({
        particleCount: 60,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#38bdf8', '#fbbf24', '#f43f5e', '#34d399'],
      });
      speakEnglish(currentTrain.correctSentence);
      onEarnReward?.(10);
      setTrainFeedback('ยอดเยี่ยมมาก! ขบวนรถไฟวิ่งฉิวไปเลย ปู๊นๆ! 🚂💨');
    } else {
      setTrainStatus('wrong');
      sfx.playSoftTryAgain();
      setTrainFeedback('ยังไม่ตรงกับขบวนที่ถูกต้องนะจ๊ะ ลองสลับตำแหน่งหรือเปลี่ยนโบกี้ดูใหม่นะ!');
    }
  };

  // =========================================================================
  // 2. TIME MACHINE STATE
  // =========================================================================
  const [selectedVerbIndex, setSelectedVerbIndex] = useState(0);
  const [selectedTimeEra, setSelectedTimeEra] = useState<'past' | 'present' | 'continuous' | 'future'>('past');
  const currentVerb = TIME_MACHINE_VERBS[selectedVerbIndex] || TIME_MACHINE_VERBS[0];

  // =========================================================================
  // 3. HUNGRY "S" MONSTER STATE
  // =========================================================================
  const [hungryIndex, setHungryIndex] = useState(0);
  const currentHungry = HUNGRY_S_CHALLENGES[hungryIndex] || HUNGRY_S_CHALLENGES[0];
  const [hungryFeedback, setHungryFeedback] = useState<{
    answered: boolean;
    correct: boolean;
    message: string;
  } | null>(null);

  const handleAnswerHungryS = (childAnswerNeedsS: boolean) => {
    if (hungryFeedback?.answered) return;

    if (childAnswerNeedsS === currentHungry.needsS) {
      sfx.playCorrect();
      setHungryFeedback({
        answered: true,
        correct: true,
        message: 'ถูกต้องที่สุด! ' + currentHungry.reasonTh,
      });
      speakEnglish(currentHungry.fullSentence);
      confetti({ particleCount: 40, spread: 60, origin: { y: 0.6 } });
      onEarnReward?.(5);
    } else {
      sfx.playSoftTryAgain();
      setHungryFeedback({
        answered: true,
        correct: false,
        message: 'ยังไม่ใช่นะจ๊ะ! ' + currentHungry.reasonTh,
      });
    }
  };

  const handleSelectHungryS = (newIdx: number) => {
    setHungryFeedback(null);
    setHungryIndex(newIdx);
  };

  const handleNextHungryS = () => {
    setHungryFeedback(null);
    setHungryIndex((prev) => (prev + 1) % HUNGRY_S_CHALLENGES.length);
  };

  // =========================================================================
  // 4. GRAMMAR DETECTIVE STATE
  // =========================================================================
  const [detectiveIndex, setDetectiveIndex] = useState(0);
  const currentDetective = DETECTIVE_CASES[detectiveIndex] || DETECTIVE_CASES[0];
  const [detectiveFeedback, setDetectiveFeedback] = useState<{
    solved: boolean;
    chosen: string;
    message: string;
  } | null>(null);

  const handleSelectDetective = (newIdx: number) => {
    setDetectiveFeedback(null);
    setDetectiveIndex(newIdx);
  };

  const handleSolveDetective = (option: string) => {
    if (detectiveFeedback?.solved) return;

    if (option === currentDetective.correctWord) {
      sfx.playCorrect();
      setDetectiveFeedback({
        solved: true,
        chosen: option,
        message: 'ไขคดีสำเร็จ! ' + currentDetective.ruleExplanationTh,
      });
      speakEnglish(currentDetective.fixedSentence);
      confetti({
        particleCount: 50,
        spread: 70,
        colors: ['#6366f1', '#fbbf24', '#10b981'],
      });
      onEarnReward?.(15);
    } else {
      sfx.playSoftTryAgain();
      setDetectiveFeedback({
        solved: false,
        chosen: option,
        message: 'ยังไม่ใช่คำที่ถูกต้อง ลองสืบหาใหม่อีกครั้งนะจ๊ะ!',
      });
    }
  };

  const handleNextDetective = () => {
    setDetectiveFeedback(null);
    setDetectiveIndex((prev) => (prev + 1) % DETECTIVE_CASES.length);
  };

  // =========================================================================
  // 5. SUPERHERO ACADEMY STATE
  // =========================================================================
  const [selectedHero, setSelectedHero] = useState<GrammarSuperhero>(GRAMMAR_SUPERHEROES[0]);

  return (
    <div className="space-y-6">
      {/* ======================================================== */}
      {/* TOP SUB-TAB NAVIGATION (PIXAR 3D GLASS CARDS) */}
      {/* ======================================================== */}
      <div className="bg-white/90 backdrop-blur-md rounded-3xl p-2 sm:p-2.5 shadow-md border-2 border-indigo-100 flex flex-wrap sm:flex-nowrap items-center justify-between gap-1.5 overflow-x-auto scrollbar-none">
        <button
          onClick={() => {
            sfx.playCorrect();
            setActiveMode('train');
          }}
          className={`flex-1 min-w-[125px] flex items-center justify-center gap-2 py-2.5 px-3 rounded-2xl font-black text-xs sm:text-sm transition-all duration-300 ${
            activeMode === 'train'
              ? 'bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 text-white shadow-md scale-102'
              : 'text-slate-600 hover:bg-sky-50 hover:text-sky-600'
          }`}
        >
          <span className="text-lg">🚂</span>
          <div className="text-left">
            <span className="block leading-tight">ตัวต่อรถไฟ</span>
            <span className="text-[10px] font-bold opacity-80">สร้างประโยค</span>
          </div>
        </button>

        <button
          onClick={() => {
            sfx.playCorrect();
            setActiveMode('timemachine');
          }}
          className={`flex-1 min-w-[125px] flex items-center justify-center gap-2 py-2.5 px-3 rounded-2xl font-black text-xs sm:text-sm transition-all duration-300 ${
            activeMode === 'timemachine'
              ? 'bg-gradient-to-r from-purple-500 via-indigo-600 to-pink-500 text-white shadow-md scale-102'
              : 'text-slate-600 hover:bg-purple-50 hover:text-purple-600'
          }`}
        >
          <span className="text-lg">⏳</span>
          <div className="text-left">
            <span className="block leading-tight">ไทม์แมชชีน</span>
            <span className="text-[10px] font-bold opacity-80">ท่อง 4 Tenses</span>
          </div>
        </button>

        <button
          onClick={() => {
            sfx.playCorrect();
            setActiveMode('hungry_s');
          }}
          className={`flex-1 min-w-[125px] flex items-center justify-center gap-2 py-2.5 px-3 rounded-2xl font-black text-xs sm:text-sm transition-all duration-300 ${
            activeMode === 'hungry_s'
              ? 'bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 text-white shadow-md scale-102'
              : 'text-slate-600 hover:bg-amber-50 hover:text-amber-600'
          }`}
        >
          <span className="text-lg">👾</span>
          <div className="text-left">
            <span className="block leading-tight">มอนสเตอร์ตัว S</span>
            <span className="text-[10px] font-bold opacity-80">ป้อนขนมตัว S</span>
          </div>
        </button>

        <button
          onClick={() => {
            sfx.playCorrect();
            setActiveMode('detective');
          }}
          className={`flex-1 min-w-[125px] flex items-center justify-center gap-2 py-2.5 px-3 rounded-2xl font-black text-xs sm:text-sm transition-all duration-300 ${
            activeMode === 'detective'
              ? 'bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-600 text-white shadow-md scale-102'
              : 'text-slate-600 hover:bg-emerald-50 hover:text-emerald-600'
          }`}
        >
          <span className="text-lg">🔍</span>
          <div className="text-left">
            <span className="block leading-tight">นักสืบจับผิด</span>
            <span className="text-[10px] font-bold opacity-80">ไขคดีไวยากรณ์</span>
          </div>
        </button>

        <button
          onClick={() => {
            sfx.playCorrect();
            setActiveMode('superheroes');
          }}
          className={`flex-1 min-w-[125px] flex items-center justify-center gap-2 py-2.5 px-3 rounded-2xl font-black text-xs sm:text-sm transition-all duration-300 ${
            activeMode === 'superheroes'
              ? 'bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 text-white shadow-md scale-102'
              : 'text-slate-600 hover:bg-pink-50 hover:text-pink-600'
          }`}
        >
          <span className="text-lg">🦸</span>
          <div className="text-left">
            <span className="block leading-tight">8 ฮีโร่คำศัพท์</span>
            <span className="text-[10px] font-bold opacity-80">Parts of Speech</span>
          </div>
        </button>
      </div>

      {/* ======================================================== */}
      {/* 1. SENTENCE TRAIN BUILDER (ขบวนรถไฟต่อประโยค) */}
      {/* ======================================================== */}
      {activeMode === 'train' && (
        <div className="space-y-5 animate-in fade-in duration-300">
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 rounded-3xl p-5 sm:p-6 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-3xl shadow-inner border border-white/30 shrink-0">
                🚂
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-black">
                  ขบวนรถไฟต่อประโยค (Sentence LEGO Train)
                </h3>
                <p className="text-sky-100 text-xs sm:text-sm mt-0.5">
                  ลากหรือแตะบล็อกคำศัพท์มาต่อเป็นขบวนรถไฟ: หัวรถจักร (ใคร) + เครื่องยนต์ (ทำอะไร) + ตู้สินค้า (อะไร)!
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => {
                  const prevIdx = trainIndex > 0 ? trainIndex - 1 : TRAIN_CHALLENGES.length - 1;
                  handleResetTrain(prevIdx);
                  sfx.playCorrect();
                }}
                className="w-9 h-9 rounded-2xl bg-white/20 hover:bg-white/30 active:scale-95 flex items-center justify-center text-white border border-white/30 transition-all cursor-pointer shadow-xs"
                title="ด่านก่อนหน้า"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="bg-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-2xl text-xs font-black border border-white/30 flex items-center gap-1.5 shrink-0">
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>ด่านที่ {trainIndex + 1} / {TRAIN_CHALLENGES.length}</span>
              </div>
              <button
                onClick={() => {
                  const nextIdx = (trainIndex + 1) % TRAIN_CHALLENGES.length;
                  handleResetTrain(nextIdx);
                  sfx.playCorrect();
                }}
                className="w-9 h-9 rounded-2xl bg-white/20 hover:bg-white/30 active:scale-95 flex items-center justify-center text-white border border-white/30 transition-all cursor-pointer shadow-xs"
                title="ด่านถัดไป"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Main Stage */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-sky-100 shadow-lg space-y-6">
            {/* Quick Stage Selector Bar (25 Challenges) */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 px-1 scrollbar-thin">
              <span className="text-[11px] font-black text-slate-400 shrink-0 mr-1 flex items-center gap-1">
                <Train className="w-3.5 h-3.5 text-sky-500" />
                <span>เลือกด่าน:</span>
              </span>
              {TRAIN_CHALLENGES.map((ch, idx) => (
                <button
                  key={ch.id}
                  onClick={() => {
                    handleResetTrain(idx);
                    sfx.playCorrect();
                  }}
                  className={`shrink-0 h-7 min-w-[28px] px-2 rounded-xl text-xs font-black transition-all flex items-center justify-center cursor-pointer ${
                    idx === trainIndex
                      ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-sm scale-105'
                      : 'bg-sky-50 text-slate-600 hover:bg-sky-100 border border-sky-100'
                  }`}
                  title={`${ch.levelTitle}: ${ch.correctSentence}`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>

            {/* Mission Target */}
            <div className="text-center pb-4 border-b border-sky-100">
              <span className="text-xs font-extrabold text-sky-600 uppercase tracking-wider block mb-1">
                {currentTrain.levelTitle}
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-800">
                ภารกิจ: ต่อประโยคที่มีความหมายว่า &ldquo;{currentTrain.thaiMeaning}&rdquo;
              </h2>
            </div>

            {/* The Train Track Slots */}
            <div className="relative bg-gradient-to-r from-sky-50 via-indigo-50 to-amber-50 p-6 rounded-3xl border-2 border-dashed border-sky-200 min-h-[140px] flex flex-wrap items-center justify-center gap-3">
              {slottedTiles.length === 0 ? (
                <div className="text-center py-6 text-slate-400">
                  <span className="text-3xl block mb-2">🚂🚃🚃</span>
                  <span className="text-xs font-bold">
                    แตะบล็อกคำศัพท์ด้านล่างเพื่อเริ่มต่อตู้ขบวนรถไฟ!
                  </span>
                </div>
              ) : (
                slottedTiles.map((tile, idx) => (
                  <button
                    key={tile.id}
                    onClick={() => handleRemoveTileFromTrain(tile.id)}
                    className="group relative bg-white border-2 border-sky-400 hover:border-rose-400 px-4 py-3 rounded-2xl shadow-md transition-all hover:scale-105 active:scale-95 flex flex-col items-center select-none"
                    title="แตะเพื่อถอดตู้ขบวนนี้ออก"
                  >
                    <span className="text-xs font-bold text-slate-400 absolute -top-2.5 bg-sky-100 group-hover:bg-rose-100 group-hover:text-rose-600 px-2 py-0.2 rounded-full transition-colors">
                      {idx === 0 ? '🚂 หัวรถจักร' : `🚃 ตู้ที่ ${idx + 1}`}
                    </span>
                    <span className="text-2xl mt-1">{tile.emoji}</span>
                    <span className="text-base sm:text-lg font-black text-slate-800 tracking-wide">
                      {tile.word}
                    </span>
                    <span className="text-[11px] text-slate-500 font-bold">
                      {tile.thai}
                    </span>
                  </button>
                ))
              )}
            </div>

            {/* Action Buttons: Launch Train & Audio */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={handleLaunchTrain}
                disabled={slottedTiles.length === 0 || trainStatus === 'success'}
                className={`px-8 py-3.5 rounded-2xl font-black text-sm sm:text-base flex items-center gap-2 shadow-lg transition-all ${
                  slottedTiles.length === 0 || trainStatus === 'success'
                    ? 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
                    : 'bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white hover:scale-103 active:scale-95'
                }`}
              >
                <span>🚀 ปล่อยขบวนรถไฟ! (ตรวจสอบ)</span>
              </button>

              <button
                onClick={() => handleResetTrain(trainIndex)}
                className="px-4 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold text-xs flex items-center gap-1.5 transition-all"
              >
                <RotateCcw className="w-4 h-4" />
                <span>รีเซ็ตขบวน</span>
              </button>
            </div>

            {/* Feedback & Celebration Banner */}
            {trainFeedback && (
              <div
                className={`p-4 rounded-2xl border text-center animate-in zoom-in-95 duration-200 ${
                  trainStatus === 'success'
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                    : 'bg-rose-50 border-rose-300 text-rose-900'
                }`}
              >
                <div className="flex items-center justify-center gap-2 text-base font-black mb-1">
                  <span>{trainStatus === 'success' ? '🎉' : '💡'}</span>
                  <span>{trainFeedback}</span>
                </div>
                {trainStatus === 'success' && (
                  <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
                    <button
                      onClick={() => speakEnglish(currentTrain.correctSentence)}
                      className="px-3.5 py-1.5 rounded-xl bg-white border border-emerald-300 text-emerald-800 font-black text-xs flex items-center gap-1.5 shadow-xs"
                    >
                      <Volume2 className="w-4 h-4 text-emerald-600" />
                      <span>ฟังเสียงอ่านประโยค 🔊</span>
                    </button>
                    <button
                      onClick={() => {
                        const nextIdx = (trainIndex + 1) % TRAIN_CHALLENGES.length;
                        handleResetTrain(nextIdx);
                        sfx.playCorrect();
                      }}
                      className="btn-pixar btn-pixar-amber px-5 py-1.5 rounded-xl text-xs font-black flex items-center gap-1.5"
                    >
                      <span>ไปด่านถัดไป</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Available Word Tiles Dock */}
            <div className="pt-4 border-t border-sky-100">
              <span className="text-xs font-black text-slate-600 block mb-3 text-center sm:text-left">
                📦 แตะบล็อกคำศัพท์เพื่อต่อเข้าขบวน:
              </span>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
                {availableTiles.length === 0 ? (
                  <span className="text-xs text-slate-400 italic">
                    นำคำศัพท์ทั้งหมดขึ้นขบวนรถไฟเรียบร้อยแล้ว
                  </span>
                ) : (
                  availableTiles.map((tile) => (
                    <button
                      key={tile.id}
                      onClick={() => handleAddTileToTrain(tile)}
                      className="bg-sky-50 hover:bg-sky-100 active:scale-95 border-2 border-sky-200 hover:border-sky-400 px-4 py-2.5 rounded-2xl flex items-center gap-2 text-slate-800 font-black text-sm shadow-xs transition-all"
                    >
                      <span className="text-lg">{tile.emoji}</span>
                      <span>{tile.word}</span>
                      <span className="text-[11px] text-slate-500 font-normal">
                        ({tile.thai})
                      </span>
                    </button>
                  ))
                )}
              </div>
            </div>

            {/* Explanation Note */}
            <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-3.5 text-xs text-amber-900 flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <span className="font-black">ความลับของไวยากรณ์: </span>
                <span>{currentTrain.explanationTh}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* 2. TIME MACHINE TENSES (ไทม์แมชชีนกาลเวลา) */}
      {/* ======================================================== */}
      {activeMode === 'timemachine' && (
        <div className="space-y-5 animate-in fade-in duration-300">
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-purple-500 via-indigo-600 to-pink-500 rounded-3xl p-5 sm:p-6 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-3xl shadow-inner border border-white/30 shrink-0">
                ⏳
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-black">
                  ไทม์แมชชีนกาลเวลา (Time Machine Tenses)
                </h3>
                <p className="text-purple-100 text-xs sm:text-sm mt-0.5">
                  กริยาเปลี่ยนร่างเมื่อเวลาเปลี่ยน! กดปุ่มมิติเวลาเพื่อดูว่าคำกริยาเดินทางข้ามอดีต ปัจจุบัน และอนาคตอย่างไร!
                </p>
              </div>
            </div>
          </div>

          {/* Verb Selector Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {TIME_MACHINE_VERBS.map((v, idx) => (
              <button
                key={v.id}
                onClick={() => {
                  setSelectedVerbIndex(idx);
                  sfx.playCorrect();
                }}
                className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-black whitespace-nowrap flex items-center gap-2 transition-all ${
                  selectedVerbIndex === idx
                    ? 'bg-purple-600 text-white shadow-md scale-102'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-purple-50/50'
                }`}
              >
                <span>{v.emoji}</span>
                <span>{v.base}</span>
                <span className="text-[11px] opacity-80 font-normal">({v.thai})</span>
              </button>
            ))}
          </div>

          {/* Time Machine Stage */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-purple-100 shadow-lg space-y-6">
            {/* 4 Time Era Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {/* 1. Past Land */}
              <button
                onClick={() => {
                  setSelectedTimeEra('past');
                  sfx.playCorrect();
                }}
                className={`p-4 rounded-2xl border-2 flex flex-col items-center text-center transition-all ${
                  selectedTimeEra === 'past'
                    ? 'bg-amber-50 border-amber-500 shadow-md scale-103 ring-2 ring-amber-300'
                    : 'bg-slate-50 border-slate-200 opacity-80 hover:opacity-100'
                }`}
              >
                <span className="text-3xl mb-1">🦕</span>
                <span className="font-black text-slate-800 text-xs sm:text-sm">
                  เมื่อวานนี้
                </span>
                <span className="text-[10px] text-amber-700 font-extrabold mt-0.5">
                  Past Simple (-ed / แปลงร่าง)
                </span>
              </button>

              {/* 2. Present City */}
              <button
                onClick={() => {
                  setSelectedTimeEra('present');
                  sfx.playCorrect();
                }}
                className={`p-4 rounded-2xl border-2 flex flex-col items-center text-center transition-all ${
                  selectedTimeEra === 'present'
                    ? 'bg-blue-50 border-blue-500 shadow-md scale-103 ring-2 ring-blue-300'
                    : 'bg-slate-50 border-slate-200 opacity-80 hover:opacity-100'
                }`}
              >
                <span className="text-3xl mb-1">🏙️</span>
                <span className="font-black text-slate-800 text-xs sm:text-sm">
                  ทุกๆ วัน
                </span>
                <span className="text-[10px] text-blue-700 font-extrabold mt-0.5">
                  Present Simple (+s / -)
                </span>
              </button>

              {/* 3. Right Now */}
              <button
                onClick={() => {
                  setSelectedTimeEra('continuous');
                  sfx.playCorrect();
                }}
                className={`p-4 rounded-2xl border-2 flex flex-col items-center text-center transition-all ${
                  selectedTimeEra === 'continuous'
                    ? 'bg-emerald-50 border-emerald-500 shadow-md scale-103 ring-2 ring-emerald-300'
                    : 'bg-slate-50 border-slate-200 opacity-80 hover:opacity-100'
                }`}
              >
                <span className="text-3xl mb-1">👟</span>
                <span className="font-black text-slate-800 text-xs sm:text-sm">
                  ตอนนี้เลย!
                </span>
                <span className="text-[10px] text-emerald-700 font-extrabold mt-0.5">
                  Present Continuous (-ing)
                </span>
              </button>

              {/* 4. Future Galaxy */}
              <button
                onClick={() => {
                  setSelectedTimeEra('future');
                  sfx.playCorrect();
                }}
                className={`p-4 rounded-2xl border-2 flex flex-col items-center text-center transition-all ${
                  selectedTimeEra === 'future'
                    ? 'bg-purple-50 border-purple-500 shadow-md scale-103 ring-2 ring-purple-300'
                    : 'bg-slate-50 border-slate-200 opacity-80 hover:opacity-100'
                }`}
              >
                <span className="text-3xl mb-1">🛸</span>
                <span className="font-black text-slate-800 text-xs sm:text-sm">
                  พรุ่งนี้ / อนาคต
                </span>
                <span className="text-[10px] text-purple-700 font-extrabold mt-0.5">
                  Future (will + กริยาเดิม)
                </span>
              </button>
            </div>

            {/* Time Travel Display Box */}
            <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 rounded-3xl p-6 sm:p-8 text-white text-center shadow-xl relative overflow-hidden">
              <div className="absolute top-2 right-4 text-6xl opacity-15 select-none pointer-events-none">
                ⏳
              </div>

              <span className="text-xs uppercase tracking-widest text-indigo-300 font-black block mb-2">
                ร่างกริยาในมิติเวลานี้:
              </span>

              {/* Big Transformed Verb */}
              <div className="inline-block bg-white/15 backdrop-blur-md border border-white/30 px-6 py-2.5 rounded-2xl mb-4">
                <span className="text-3xl sm:text-5xl font-black text-amber-300 tracking-wider">
                  {selectedTimeEra === 'past' && currentVerb.past.text}
                  {selectedTimeEra === 'present' && `${currentVerb.presentSimple.singular} / ${currentVerb.presentSimple.plural}`}
                  {selectedTimeEra === 'continuous' && currentVerb.presentContinuous.text}
                  {selectedTimeEra === 'future' && currentVerb.future.text}
                </span>
              </div>

              {/* Example Sentence */}
              <div className="max-w-xl mx-auto space-y-2 mt-2">
                <p className="text-lg sm:text-xl font-bold text-white">
                  &ldquo;
                  {selectedTimeEra === 'past' && currentVerb.past.sentence}
                  {selectedTimeEra === 'present' && currentVerb.presentSimple.sentence}
                  {selectedTimeEra === 'continuous' && currentVerb.presentContinuous.sentence}
                  {selectedTimeEra === 'future' && currentVerb.future.sentence}
                  &rdquo;
                </p>
                <p className="text-xs sm:text-sm text-indigo-200">
                  {selectedTimeEra === 'past' && currentVerb.past.sentenceTh}
                  {selectedTimeEra === 'present' && currentVerb.presentSimple.sentenceTh}
                  {selectedTimeEra === 'continuous' && currentVerb.presentContinuous.sentenceTh}
                  {selectedTimeEra === 'future' && currentVerb.future.sentenceTh}
                </p>
              </div>

              {/* Listen Button */}
              <div className="mt-5">
                <button
                  onClick={() => {
                    const sentence =
                      selectedTimeEra === 'past'
                        ? currentVerb.past.sentence
                        : selectedTimeEra === 'present'
                        ? currentVerb.presentSimple.sentence
                        : selectedTimeEra === 'continuous'
                        ? currentVerb.presentContinuous.sentence
                        : currentVerb.future.sentence;
                    speakEnglish(sentence);
                  }}
                  className="px-5 py-2.5 rounded-2xl bg-amber-400 hover:bg-amber-300 active:scale-95 text-slate-950 font-black text-xs sm:text-sm inline-flex items-center gap-2 shadow-md transition-all"
                >
                  <Volume2 className="w-4 h-4" />
                  <span>🔊 ฟังเสียงเจ้าของภาษา</span>
                </button>
              </div>
            </div>

            {/* Coach Note */}
            <div className="bg-purple-50/70 border border-purple-200 rounded-2xl p-4 text-xs sm:text-sm text-purple-900 flex items-start gap-3">
              <Zap className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-black block text-purple-950 mb-0.5">เคล็ดลับไทม์แมชชีน:</span>
                <span>
                  {selectedTimeEra === 'past' && currentVerb.past.note}
                  {selectedTimeEra === 'present' && currentVerb.presentSimple.note}
                  {selectedTimeEra === 'continuous' && currentVerb.presentContinuous.note}
                  {selectedTimeEra === 'future' && currentVerb.future.note}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* 3. HUNGRY "S" MONSTER (สัตว์ประหลาดเขมือบตัว S) */}
      {/* ======================================================== */}
      {activeMode === 'hungry_s' && (
        <div className="space-y-5 animate-in fade-in duration-300">
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 rounded-3xl p-5 sm:p-6 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-3xl shadow-inner border border-white/30 shrink-0 animate-bounce">
                👾
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-black">
                  เจ้ามอนสเตอร์เขมือบตัว S (The Hungry &lsquo;S&rsquo; Monster)
                </h3>
                <p className="text-amber-100 text-xs sm:text-sm mt-0.5">
                  กฎลับ: ถ้าประธานมาคนเดียวเหงาๆ (He/She/It) มอนสเตอร์จะหิวโซ ต้องป้อนขนมตัว S ให้กริยาเสมอ!
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => {
                  const prevIdx = hungryIndex > 0 ? hungryIndex - 1 : HUNGRY_S_CHALLENGES.length - 1;
                  handleSelectHungryS(prevIdx);
                  sfx.playCorrect();
                }}
                className="w-9 h-9 rounded-2xl bg-white/20 hover:bg-white/30 active:scale-95 flex items-center justify-center text-white border border-white/30 transition-all cursor-pointer shadow-xs"
                title="ข้อก่อนหน้า"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="bg-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-2xl text-xs font-black border border-white/30 shrink-0">
                ข้อที่ {hungryIndex + 1} / {HUNGRY_S_CHALLENGES.length}
              </div>
              <button
                onClick={() => {
                  const nextIdx = (hungryIndex + 1) % HUNGRY_S_CHALLENGES.length;
                  handleSelectHungryS(nextIdx);
                  sfx.playCorrect();
                }}
                className="w-9 h-9 rounded-2xl bg-white/20 hover:bg-white/30 active:scale-95 flex items-center justify-center text-white border border-white/30 transition-all cursor-pointer shadow-xs"
                title="ข้อถัดไป"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Game Stage */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-amber-100 shadow-lg text-center space-y-6">
            {/* Quick Question Selector */}
            <div className="flex items-center justify-center gap-2 pb-1">
              {HUNGRY_S_CHALLENGES.map((h, idx) => (
                <button
                  key={h.id}
                  onClick={() => {
                    handleSelectHungryS(idx);
                    sfx.playCorrect();
                  }}
                  className={`h-7 w-7 rounded-xl text-xs font-black transition-all flex items-center justify-center cursor-pointer ${
                    idx === hungryIndex
                      ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-sm scale-110'
                      : 'bg-amber-50 text-slate-600 hover:bg-amber-100 border border-amber-200'
                  }`}
                  title={`${h.subject} (${h.verbBase})`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
            {/* Subject Presentation */}
            <div className="inline-block bg-amber-50 border-2 border-amber-200 px-8 py-5 rounded-3xl shadow-xs">
              <span className="text-5xl block mb-2">{currentHungry.subjectEmoji}</span>
              <span className="text-2xl sm:text-4xl font-black text-slate-800 tracking-wide block">
                {currentHungry.subject}
              </span>
              <span className="text-xs sm:text-sm text-slate-500 font-bold">
                ({currentHungry.subjectTh})
              </span>
            </div>

            <div className="text-base sm:text-lg font-black text-slate-700">
              กริยาคือคำว่า:{' '}
              <span className="text-rose-600 underline text-xl">
                &ldquo;{currentHungry.verbBase}&rdquo;
              </span>{' '}
              ({currentHungry.verbBaseTh})
            </div>

            {/* Question Prompt */}
            <p className="text-sm font-bold text-slate-600 max-w-md mx-auto">
              ประธานแบบนี้... เจ้ามอนสเตอร์ตัว S จะหิวไหม? หนูต้องป้อนขนมตัว S หรือกางโล่กันไว้?
            </p>

            {/* Decision Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                onClick={() => handleAnswerHungryS(true)}
                disabled={hungryFeedback !== null}
                className={`w-full sm:w-auto px-6 py-4 rounded-2xl font-black text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all shadow-md ${
                  hungryFeedback
                    ? 'opacity-60 cursor-not-allowed'
                    : 'bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white hover:scale-103 active:scale-95'
                }`}
              >
                <span className="text-2xl">🍪</span>
                <span>ป้อนขนมตัว S! (เติม -s)</span>
              </button>

              <button
                onClick={() => handleAnswerHungryS(false)}
                disabled={hungryFeedback !== null}
                className={`w-full sm:w-auto px-6 py-4 rounded-2xl font-black text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all shadow-md ${
                  hungryFeedback
                    ? 'opacity-60 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white hover:scale-103 active:scale-95'
                }`}
              >
                <span className="text-2xl">🛡️</span>
                <span>กางโล่กันไว้! (ไม่ต้องเติม S)</span>
              </button>
            </div>

            {/* Answer Result Banner */}
            {hungryFeedback && (
              <div
                className={`p-5 rounded-3xl border-2 text-center animate-in zoom-in-95 duration-200 space-y-3 ${
                  hungryFeedback.correct
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                    : 'bg-rose-50 border-rose-300 text-rose-950'
                }`}
              >
                <div className="text-base sm:text-lg font-black flex items-center justify-center gap-2">
                  <span>{hungryFeedback.correct ? '🎉 เก่งมาก!' : '😅 อุ๊ยเกือบถูก!'}</span>
                  <span>{hungryFeedback.message}</span>
                </div>

                <div className="bg-white/80 rounded-2xl p-3 max-w-lg mx-auto">
                  <span className="text-xs font-bold text-slate-500 block">ประโยคที่ถูกต้อง:</span>
                  <span className="text-base sm:text-lg font-black text-indigo-900 block mt-0.5">
                    {currentHungry.fullSentence}
                  </span>
                  <span className="text-xs text-slate-600 font-medium">
                    {currentHungry.fullSentenceTh}
                  </span>
                </div>

                <div className="pt-2 flex items-center justify-center gap-3">
                  <button
                    onClick={() => speakEnglish(currentHungry.fullSentence)}
                    className="px-4 py-2 rounded-xl bg-white border border-emerald-300 text-emerald-800 font-black text-xs flex items-center gap-1.5 shadow-xs"
                  >
                    <Volume2 className="w-4 h-4 text-emerald-600" />
                    <span>ฟังเสียงประโยค 🔊</span>
                  </button>
                  <button
                    onClick={handleNextHungryS}
                    className="btn-pixar btn-pixar-amber px-5 py-2 rounded-xl text-xs font-black flex items-center gap-1.5"
                  >
                    <span>ข้อถัดไป</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* 4. GRAMMAR DETECTIVE (นักสืบจับผิดไวยากรณ์) */}
      {/* ======================================================== */}
      {activeMode === 'detective' && (
        <div className="space-y-5 animate-in fade-in duration-300">
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-600 rounded-3xl p-5 sm:p-6 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-3xl shadow-inner border border-white/30 shrink-0">
                🔍
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-black">
                  นักสืบจับผิดไวยากรณ์ (Grammar Detective)
                </h3>
                <p className="text-teal-100 text-xs sm:text-sm mt-0.5">
                  เจ้ามอนสเตอร์จอมป่วนแอบมาเปลี่ยนคำในประโยคให้พัง! ช่วยยอดนักสืบเสี่ยวหลงซ่อมแซมประโยคให้ถูกต้องนะ!
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => {
                  const prevIdx = detectiveIndex > 0 ? detectiveIndex - 1 : DETECTIVE_CASES.length - 1;
                  handleSelectDetective(prevIdx);
                  sfx.playCorrect();
                }}
                className="w-9 h-9 rounded-2xl bg-white/20 hover:bg-white/30 active:scale-95 flex items-center justify-center text-white border border-white/30 transition-all cursor-pointer shadow-xs"
                title="คดีก่อนหน้า"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="bg-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-2xl text-xs font-black border border-white/30 shrink-0">
                คดีที่ {detectiveIndex + 1} / {DETECTIVE_CASES.length}
              </div>
              <button
                onClick={() => {
                  const nextIdx = (detectiveIndex + 1) % DETECTIVE_CASES.length;
                  handleSelectDetective(nextIdx);
                  sfx.playCorrect();
                }}
                className="w-9 h-9 rounded-2xl bg-white/20 hover:bg-white/30 active:scale-95 flex items-center justify-center text-white border border-white/30 transition-all cursor-pointer shadow-xs"
                title="คดีถัดไป"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Detective Case Stage */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-emerald-100 shadow-lg space-y-6">
            {/* Quick Case Selector Bar (25 Cases) */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 px-1 scrollbar-thin">
              <span className="text-[11px] font-black text-slate-400 shrink-0 mr-1 flex items-center gap-1">
                <Search className="w-3.5 h-3.5 text-emerald-500" />
                <span>เลือกคดี:</span>
              </span>
              {DETECTIVE_CASES.map((c, idx) => (
                <button
                  key={c.id}
                  onClick={() => {
                    handleSelectDetective(idx);
                    sfx.playCorrect();
                  }}
                  className={`shrink-0 h-7 min-w-[28px] px-2 rounded-xl text-xs font-black transition-all flex items-center justify-center cursor-pointer ${
                    idx === detectiveIndex
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-sm scale-105'
                      : 'bg-emerald-50 text-slate-600 hover:bg-emerald-100 border border-emerald-100'
                  }`}
                  title={`${c.caseTitle}: ${c.glitchedSentence}`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>

            <div className="text-center">
              <span className="text-xs bg-emerald-100 text-emerald-800 font-black px-3 py-1 rounded-full mb-2 inline-block">
                {currentDetective.caseTitle}
              </span>
              <h2 className="text-lg sm:text-xl font-black text-slate-800 mt-2">
                ประโยคที่ถูกแอบเปลี่ยนคำ:
              </h2>
            </div>

            {/* Glitched Sentence Card */}
            <div className="bg-rose-50 border-2 border-dashed border-rose-300 rounded-3xl p-6 text-center max-w-xl mx-auto shadow-inner">
              <p className="text-xl sm:text-2xl font-black text-slate-800">
                {currentDetective.glitchedSentence.split(currentDetective.brokenWord)[0]}
                <span className="bg-rose-500 text-white px-2.5 py-0.5 rounded-xl underline decoration-wavy mx-1 animate-pulse">
                  {currentDetective.brokenWord}
                </span>
                {currentDetective.glitchedSentence.split(currentDetective.brokenWord)[1]}
              </p>
              <span className="text-xs text-rose-600 font-bold block mt-2">
                ⚠️ พบจุดผิดพลาดที่คำว่า &ldquo;{currentDetective.brokenWord}&rdquo;
              </span>
            </div>

            {/* Multiple Choice Options */}
            <div>
              <span className="text-xs font-black text-slate-600 block text-center mb-3">
                สวมแว่นขยาย... เลือกคำที่ถูกต้องมาแทนที่:
              </span>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {currentDetective.options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleSolveDetective(option)}
                    disabled={detectiveFeedback?.solved}
                    className={`px-6 py-3.5 rounded-2xl font-black text-base sm:text-lg transition-all shadow-md ${
                      detectiveFeedback?.solved && option === currentDetective.correctWord
                        ? 'bg-emerald-600 text-white ring-4 ring-emerald-300'
                        : 'bg-white border-2 border-emerald-200 hover:border-emerald-500 text-slate-800 hover:scale-105 active:scale-95'
                    }`}
                  >
                    <span>🔍 {option}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Detective Feedback */}
            {detectiveFeedback && (
              <div
                className={`p-5 rounded-3xl border-2 text-center animate-in zoom-in-95 duration-200 space-y-3 ${
                  detectiveFeedback.solved
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                    : 'bg-rose-50 border-rose-300 text-rose-950'
                }`}
              >
                <div className="text-base sm:text-lg font-black flex items-center justify-center gap-2">
                  <span>{detectiveFeedback.solved ? '🎉' : '❌'}</span>
                  <span>{detectiveFeedback.message}</span>
                </div>

                {detectiveFeedback.solved && (
                  <div className="bg-white/80 rounded-2xl p-4 max-w-lg mx-auto shadow-xs">
                    <span className="text-xs font-bold text-slate-500 block">ประโยคที่สมบูรณ์:</span>
                    <span className="text-base sm:text-lg font-black text-emerald-900 block mt-0.5">
                      {currentDetective.fixedSentence}
                    </span>
                    <span className="text-xs text-slate-600 font-medium">
                      {currentDetective.fixedSentenceTh}
                    </span>
                    <div className="mt-2 text-xs bg-amber-100 text-amber-900 px-3 py-1 rounded-full font-black inline-block">
                      {currentDetective.rewardBadge} (+15 ดาว ⭐)
                    </div>
                  </div>
                )}

                {detectiveFeedback.solved && (
                  <div className="pt-2 flex items-center justify-center gap-3">
                    <button
                      onClick={() => speakEnglish(currentDetective.fixedSentence)}
                      className="px-4 py-2 rounded-xl bg-white border border-emerald-300 text-emerald-800 font-black text-xs flex items-center gap-1.5 shadow-xs"
                    >
                      <Volume2 className="w-4 h-4 text-emerald-600" />
                      <span>ฟังเสียงประโยค 🔊</span>
                    </button>
                    <button
                      onClick={handleNextDetective}
                      className="btn-pixar btn-pixar-amber px-5 py-2 rounded-xl text-xs font-black flex items-center gap-1.5"
                    >
                      <span>ไปคดีถัดไป</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* 5. 8 SUPERHERO ACADEMY (Parts of Speech 8 ฮีโร่) */}
      {/* ======================================================== */}
      {activeMode === 'superheroes' && (
        <div className="space-y-5 animate-in fade-in duration-300">
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 rounded-3xl p-5 sm:p-6 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-3xl shadow-inner border border-white/30 shrink-0">
                🦸
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-black">
                  สถาบันซูเปอร์ฮีโร่คำศัพท์ (Parts of Speech Academy)
                </h3>
                <p className="text-pink-100 text-xs sm:text-sm mt-0.5">
                  รู้จัก 8 ซูเปอร์ฮีโร่ผู้พิทักษ์ภาษาอังกฤษ! แต่ละคนมีพลังวิเศษเฉพาะตัวที่ทำให้ประโยคมีชีวิตชีวา!
                </p>
              </div>
            </div>
          </div>

          {/* Hero Selection Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {GRAMMAR_SUPERHEROES.map((hero) => (
              <button
                key={hero.id}
                onClick={() => {
                  setSelectedHero(hero);
                  sfx.playCorrect();
                }}
                className={`p-3.5 rounded-2xl border-2 flex flex-col items-center text-center transition-all ${
                  selectedHero.id === hero.id
                    ? 'bg-rose-50 border-rose-500 shadow-md scale-103 ring-2 ring-rose-300'
                    : 'bg-white border-slate-200 hover:border-rose-200'
                }`}
              >
                <span className="text-3xl mb-1">{hero.avatar}</span>
                <span className="font-black text-slate-800 text-xs sm:text-sm block leading-tight">
                  {hero.name.split(' ')[0]}
                </span>
                <span className="text-[10px] text-slate-400 font-bold mt-0.5">
                  {hero.englishRole.split(' ')[0]}
                </span>
              </button>
            ))}
          </div>

          {/* Selected Hero Showcase Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-rose-100 shadow-lg space-y-5">
            <div className="flex flex-col sm:flex-row items-center gap-5 pb-5 border-b border-rose-100">
              <div
                className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${selectedHero.themeColor} text-white flex items-center justify-center text-4xl shadow-md border-2 border-white shrink-0`}
              >
                {selectedHero.avatar}
              </div>
              <div className="text-center sm:text-left">
                <span className="text-xs bg-rose-100 text-rose-800 font-black px-3 py-0.5 rounded-full">
                  {selectedHero.englishRole}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-800 mt-1">
                  {selectedHero.name} ({selectedHero.thaiName})
                </h3>
                <p className="text-xs sm:text-sm text-rose-700 font-bold mt-1">
                  ⚡ พลังวิเศษ: {selectedHero.superpowerTh}
                </p>
              </div>
            </div>

            {/* Examples of Words */}
            <div>
              <span className="text-xs font-black text-slate-600 block mb-2.5">
                ตัวอย่างคำศัพท์ที่ใช้พลังของ {selectedHero.name.split(' ')[0]}:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {selectedHero.examples.map((ex, idx) => (
                  <button
                    key={idx}
                    onClick={() => speakEnglish(ex.word)}
                    className="p-3 bg-slate-50 hover:bg-rose-50 border border-slate-200 hover:border-rose-300 rounded-2xl flex items-center justify-between text-left transition-all group"
                  >
                    <div>
                      <span className="font-black text-slate-800 text-sm block group-hover:text-rose-600">
                        {ex.word}
                      </span>
                      <span className="text-[11px] text-slate-500 font-bold">
                        {ex.thai}
                      </span>
                    </div>
                    <Volume2 className="w-4 h-4 text-slate-400 group-hover:text-rose-600 shrink-0" />
                  </button>
                ))}
              </div>
            </div>

            {/* Fun Fact */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-xs sm:text-sm text-amber-900 flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <span className="font-black block text-amber-950 mb-0.5">เรื่องน่ารู้:</span>
                <span>{selectedHero.funFactTh}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
