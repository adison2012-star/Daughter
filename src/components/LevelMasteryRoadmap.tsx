'use client';

import React, { useState } from 'react';
import { MASTERY_LEVELS } from '@/data/levels';
import { UserProfile, Word } from '@/types';
import { CheckCircle2, ChevronRight, Lock, Sparkles, Trophy, BookOpen, KeyRound } from 'lucide-react';
import { sfx } from '@/lib/speech';
import { LevelExamModal } from '@/components/LevelExamModal';

interface LevelMasteryRoadmapProps {
  activeProfile: UserProfile;
  words: Word[];
  onSelectLevel: (level: number) => void;
  onUnlockLevel: (level: number) => void;
}

export const LevelMasteryRoadmap: React.FC<LevelMasteryRoadmapProps> = ({
  activeProfile,
  words,
  onSelectLevel,
  onUnlockLevel,
}) => {
  const [examLevel, setExamLevel] = useState<number | null>(null);

  const unlocked = activeProfile.unlockedLevels || [1];
  const isParentOverride = activeProfile.parentOverrideUnlockAll || false;

  const handleStartExam = (lvl: number) => {
    sfx.playCorrect();
    setExamLevel(lvl);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-purple-700 via-indigo-600 to-rose-600 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-3xl">🐉</span>
            <span className="text-xs bg-white/20 backdrop-blur-md px-3 py-1 rounded-full font-bold uppercase tracking-wider">
              Road to Native Mastery
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black tracking-tight">
            เส้นทางสู่ระดับเจ้าของภาษา (6 ระดับความเชี่ยวชาญ)
          </h2>
          <p className="text-indigo-100 text-xs md:text-sm mt-2 max-w-2xl leading-relaxed">
            ระบบความก้าวหน้าทีละขั้น (Progression Lock): ต้องฝึกฝนและผ่านแบบทดสอบในแต่ละระดับ 
            เพื่อปลดล็อกด่านต่อไป สู่เป้าหมาย 5,400 คำ (New HSK 1-6 ครบ 100%) เสมือนเจ้าของภาษาแท้ๆ
          </p>

          <div className="mt-4 flex flex-wrap gap-4 text-xs font-bold text-yellow-300">
            <div className="flex items-center gap-1.5 bg-black/20 px-3 py-1.5 rounded-xl">
              <Trophy className="w-4 h-4 text-yellow-400" />
              <span>ระดับที่ปลดล็อกแล้ว: {isParentOverride ? 'ทุกระดับ (โหมดคุณพ่อ)' : `Level 1 ถึง ${Math.max(...unlocked)}`}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-black/20 px-3 py-1.5 rounded-xl">
              <Sparkles className="w-4 h-4 text-rose-300" />
              <span>ผู้เรียนปัจจุบัน: {activeProfile.nickname}</span>
            </div>
          </div>
        </div>

        {/* Decorative background glow */}
        <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-white/10 rounded-full blur-2xl pointer-events-none" />
      </div>

      {/* 6 Levels Roadmap Grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {MASTERY_LEVELS.map((lvl) => {
          const isUnlocked = isParentOverride || unlocked.includes(lvl.level);
          const isNextToUnlock = !isUnlocked && unlocked.includes(lvl.level - 1);

          const wordsInThisLevel = words.filter((w) => w.hskLevel === lvl.level);
          const previousLevelWords = words.filter((w) => w.hskLevel === lvl.level - 1);

          // Cumulative word milestones from New HSK 1-6 (3.0) 2026
          const cumulativeTargets = [300, 500, 1000, 2000, 3600, 5400];
          const cumulative = cumulativeTargets[lvl.level - 1];

          return (
            <div
              key={lvl.level}
              className={`rounded-3xl p-5 shadow-lg border transition-all flex flex-col justify-between relative overflow-hidden ${
                isUnlocked
                  ? 'bg-white border-slate-200 hover:shadow-xl'
                  : 'bg-slate-50/80 border-slate-200 opacity-90'
              }`}
            >
              <div>
                {/* Level Badge & Header */}
                <div className="flex items-start justify-between gap-2 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-md text-white ${
                        isUnlocked
                          ? `bg-gradient-to-tr ${lvl.color}`
                          : 'bg-slate-300 text-slate-500'
                      }`}
                    >
                      {isUnlocked ? lvl.badge : <Lock className="w-6 h-6 text-slate-600" />}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span
                          className={`text-xs font-black px-2 py-0.5 rounded-md ${
                            isUnlocked
                              ? 'text-rose-600 bg-rose-50'
                              : 'text-slate-500 bg-slate-200'
                          }`}
                        >
                          Level {lvl.level}
                        </span>
                        <span className="text-[11px] text-slate-500 font-bold">
                          {lvl.hskEquivalent}
                        </span>
                      </div>
                      <h3 className="font-extrabold text-base text-slate-800 mt-0.5 flex items-center gap-1.5">
                        <span>{lvl.title}</span>
                        {!isUnlocked && (
                          <span className="text-[10px] bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded font-bold">
                            🔒 ล็อก
                          </span>
                        )}
                      </h3>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-xs font-black text-slate-700 bg-slate-100 px-2.5 py-1 rounded-xl">
                      เป้าหมาย {lvl.targetWords} คำ
                    </span>
                    <p className="text-[10px] text-slate-500 mt-1">
                      (สะสม {cumulative.toLocaleString()} คำ)
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                  {lvl.description}
                </p>

                {/* Learning Outcomes List */}
                <div className="mt-3 space-y-1.5 bg-slate-50/70 p-3 rounded-2xl border border-slate-100">
                  {lvl.learningOutcomes.map((outcome, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-600">
                      <CheckCircle2
                        className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${
                          isUnlocked ? 'text-emerald-500' : 'text-slate-400'
                        }`}
                      />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons based on Lock Status */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <div className="text-xs text-slate-500 font-bold">
                  คลังศัพท์พร้อมฝึก: <span className="text-rose-600 font-extrabold">{wordsInThisLevel.length} / {lvl.targetWords} คำ (ครบ 100%)</span>
                </div>

                {isUnlocked ? (
                  <button
                    onClick={() => {
                      sfx.playCorrect();
                      onSelectLevel(lvl.level);
                    }}
                    className="px-4 py-2 bg-slate-900 hover:bg-rose-600 text-white rounded-xl text-xs font-bold transition-colors shadow-sm flex items-center gap-1"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>เข้าฝึก Level นี้</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                ) : isNextToUnlock ? (
                  <button
                    onClick={() => handleStartExam(lvl.level - 1)}
                    className="px-3.5 py-2 bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white rounded-xl text-xs font-black shadow-md transition-all flex items-center gap-1.5 animate-pulse"
                  >
                    <KeyRound className="w-3.5 h-3.5 text-yellow-200" />
                    <span>สอบเลื่อนขั้นปลดล็อก ➔</span>
                  </button>
                ) : (
                  <span className="text-xs font-bold text-slate-400 flex items-center gap-1">
                    <Lock className="w-3.5 h-3.5" />
                    <span>ต้องผ่าน Level {lvl.level - 1} ก่อน</span>
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Level Exam Modal */}
      {examLevel !== null && (
        <LevelExamModal
          levelToPass={examLevel}
          wordsInLevel={words.filter((w) => w.hskLevel === examLevel)}
          isOpen={examLevel !== null}
          onClose={() => setExamLevel(null)}
          onPassExam={(unlockedLevel) => {
            onUnlockLevel(unlockedLevel);
            setExamLevel(null);
          }}
        />
      )}
    </div>
  );
};
