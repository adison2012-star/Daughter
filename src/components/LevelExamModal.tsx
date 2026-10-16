'use client';

import React, { useState } from 'react';
import { Word } from '@/types';
import { CheckCircle2, XCircle, Award, Sparkles, HelpCircle, X, ChevronRight } from 'lucide-react';
import { speakChinese, sfx } from '@/lib/speech';
import confetti from 'canvas-confetti';

interface LevelExamModalProps {
  levelToPass: number; // e.g. 1 (to unlock 2)
  wordsInLevel: Word[];
  isOpen: boolean;
  onClose: () => void;
  onPassExam: (unlockedLevel: number) => void;
}

interface Question {
  prompt: string;
  hanzi: string;
  pinyin: string;
  correctAnswer: string;
  options: string[];
}

export const LevelExamModal: React.FC<LevelExamModalProps> = ({
  levelToPass,
  wordsInLevel,
  isOpen,
  onClose,
  onPassExam,
}) => {
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  // Generate 5 test questions from the level words
  const questions: Question[] = React.useMemo(() => {
    if (!wordsInLevel || wordsInLevel.length === 0) return [];

    // Shuffle and pick up to 5 words
    const shuffled = [...wordsInLevel].sort(() => 0.5 - Math.random()).slice(0, 5);

    return shuffled.map((targetWord) => {
      // Pick 3 wrong answers from other words
      const wrongOptions = wordsInLevel
        .filter((w) => w.id !== targetWord.id)
        .map((w) => w.thai)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

      const allOptions = [targetWord.thai, ...wrongOptions].sort(() => 0.5 - Math.random());

      return {
        prompt: `คำว่า "${targetWord.hanzi}" (${targetWord.pinyin}) มีความหมายตรงกับข้อใด?`,
        hanzi: targetWord.hanzi,
        pinyin: targetWord.pinyin,
        correctAnswer: targetWord.thai,
        options: allOptions,
      };
    });
  }, [wordsInLevel, isOpen]);

  if (!isOpen || questions.length === 0) return null;

  const currentQ = questions[currentQIndex];

  const handleSelectOption = (opt: string) => {
    if (isAnswered) return;
    setSelectedOption(opt);
    setIsAnswered(true);

    const isCorrect = opt === currentQ.correctAnswer;
    if (isCorrect) {
      setScore((prev) => prev + 1);
      sfx.playCorrect();
    } else {
      sfx.playSoftTryAgain();
    }
  };

  const handleNext = () => {
    if (currentQIndex + 1 < questions.length) {
      setCurrentQIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsCompleted(true);
      const passed = (score + (selectedOption === currentQ.correctAnswer ? 0 : 0)) >= 3;
      if (passed) {
        sfx.playStarFanfare();
        confetti({ particleCount: 80, spread: 90 });
        onPassExam(levelToPass + 1);
      } else {
        sfx.playSoftTryAgain();
      }
    }
  };

  const isPassed = score >= 3; // 3 out of 5 to pass

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border-2 border-rose-200 relative overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-500 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isCompleted ? (
          <div>
            {/* Header */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">📝</span>
              <div>
                <h3 className="font-black text-lg text-slate-800">
                  แบบทดสอบเลื่อนระดับสู่ Level {levelToPass + 1}
                </h3>
                <p className="text-xs text-slate-500 font-bold">
                  ข้อที่ {currentQIndex + 1} จาก {questions.length} ข้อ (ต้องถูกอย่างน้อย 3 ข้อ)
                </p>
              </div>
            </div>

            {/* Target Character Display */}
            <div className="my-4 p-4 bg-gradient-to-br from-rose-50 to-amber-50 rounded-2xl border border-rose-100 text-center">
              <span className="text-5xl font-black text-slate-800 block mb-1">
                {currentQ.hanzi}
              </span>
              <span className="text-sm font-extrabold text-rose-600 block">
                {currentQ.pinyin}
              </span>
              <button
                onClick={() => speakChinese(currentQ.hanzi)}
                className="mt-2 text-xs text-rose-700 bg-white border border-rose-200 px-3 py-1 rounded-xl font-bold shadow-sm inline-flex items-center gap-1"
              >
                <span>🔊 ฟังเสียงอ่าน</span>
              </button>
            </div>

            <p className="font-extrabold text-sm text-slate-700 mb-3 text-center">
              {currentQ.prompt}
            </p>

            {/* Options */}
            <div className="space-y-2 mb-4">
              {currentQ.options.map((opt, i) => {
                let btnStyle = 'bg-slate-50 hover:bg-rose-50 text-slate-700 border-slate-200';
                if (isAnswered) {
                  if (opt === currentQ.correctAnswer) {
                    btnStyle = 'bg-emerald-500 text-white border-emerald-500 font-black';
                  } else if (opt === selectedOption) {
                    btnStyle = 'bg-rose-500 text-white border-rose-500 font-black';
                  } else {
                    btnStyle = 'bg-slate-50 text-slate-400 border-slate-100 opacity-60';
                  }
                }

                return (
                  <button
                    key={i}
                    onClick={() => handleSelectOption(opt)}
                    disabled={isAnswered}
                    className={`w-full p-3 rounded-2xl border text-sm font-bold transition-all text-left flex items-center justify-between ${btnStyle}`}
                  >
                    <span>{opt}</span>
                    {isAnswered && opt === currentQ.correctAnswer && (
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    )}
                    {isAnswered && opt === selectedOption && opt !== currentQ.correctAnswer && (
                      <XCircle className="w-5 h-5 text-white" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Next Button */}
            {isAnswered && (
              <button
                onClick={handleNext}
                className="w-full py-3 bg-gradient-to-r from-rose-500 to-amber-500 text-white font-black rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 text-sm"
              >
                <span>{currentQIndex + 1 < questions.length ? 'ข้อถัดไป' : 'ดูผลคะแนน'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        ) : (
          /* Result Screen */
          <div className="text-center py-4 space-y-4">
            <div
              className={`w-20 h-20 rounded-full mx-auto flex items-center justify-center text-4xl shadow-lg ${
                isPassed ? 'bg-emerald-100 text-emerald-600' : 'bg-amber-100 text-amber-600'
              }`}
            >
              {isPassed ? '🎉' : '💪'}
            </div>

            <h3 className="text-2xl font-black text-slate-800">
              {isPassed ? `ยินดีด้วย! ผ่านการทดสอบแล้ว!` : 'เกือบผ่านแล้วจ้า! ลองอีกนิดนะ'}
            </h3>

            <p className="text-sm font-bold text-slate-600">
              ทำคะแนนได้: <span className="text-rose-600 text-lg font-black">{score}</span> / {questions.length} ข้อ
            </p>

            {isPassed ? (
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-2xl text-xs text-emerald-900 leading-relaxed font-bold">
                🔓 ปลดล็อก <strong>Level {levelToPass + 1}</strong> เรียบร้อยแล้ว! สองพี่น้องสามารถเข้าเรียนรู้คำศัพท์ระดับใหม่ได้ทันที!
              </div>
            ) : (
              <p className="text-xs text-slate-500 leading-relaxed">
                ลองทบทวนคำศัพท์ในหน้า Flashcards หรือฝึกเขียนอีกสักรอบ แล้วกลับมาทดสอบใหม่ได้ตลอดเวลานะจ๊ะ!
              </p>
            )}

            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-extrabold rounded-xl text-sm shadow-md transition-colors"
            >
              ตกลง
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
