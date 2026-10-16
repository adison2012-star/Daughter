'use client';

import React, { useEffect, useRef, useState } from 'react';
import HanziWriter from 'hanzi-writer';
import confetti from 'canvas-confetti';
import { Word } from '@/types';
import { Play, RotateCcw, Volume2, Sparkles, Award } from 'lucide-react';
import { speakChinese, sfx } from '@/lib/speech';
import { PixarDragon } from '@/components/PixarDragon';

interface HanziCanvasProps {
  word: Word;
  onCompleteWord?: (wordId: string) => void;
}

export const HanziCanvas: React.FC<HanziCanvasProps> = ({ word, onCompleteWord }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const writerRef = useRef<HanziWriter | null>(null);

  // Split word into individual characters
  const characters = Array.from(word.hanzi);
  const [selectedCharIndex, setSelectedCharIndex] = useState(0);
  const currentChar = characters[selectedCharIndex] || characters[0];

  const [mode, setMode] = useState<'view' | 'quiz'>('view');
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [mistakes, setMistakes] = useState(0);

  // Initialize or re-render HanziWriter when character changes
  useEffect(() => {
    if (!containerRef.current) return;

    // Clear previous SVG
    containerRef.current.innerHTML = '';
    setQuizScore(null);
    setMistakes(0);

    // Responsive Canvas Size for Mobile & iPad
    const isTablet = typeof window !== 'undefined' && window.innerWidth >= 768;
    const size = isTablet
      ? 330
      : Math.min(290, typeof window !== 'undefined' ? window.innerWidth - 64 : 270);

    const writer = HanziWriter.create(containerRef.current, currentChar, {
      width: size,
      height: size,
      padding: 12,
      showOutline: true,
      strokeAnimationSpeed: 1,
      delayBetweenStrokes: 120,
      strokeColor: '#e11d48', // rose-600
      radicalColor: '#2563eb', // blue-600 for radicals
      outlineColor: '#f1f5f9', // light gray
      drawingColor: '#059669', // emerald-600 when drawing
      drawingWidth: isTablet ? 18 : 15,
      showHintAfterMisses: 2,
    });

    writerRef.current = writer;

    // Automatically animate on first load
    writer.animateCharacter({
      onComplete: () => setIsAnimating(false),
    });
    setIsAnimating(true);

    return () => {
      if (writerRef.current) {
        writerRef.current.cancelQuiz();
      }
    };
  }, [currentChar]);

  // Handle Play Animation
  const handleAnimate = (speed: number = 1) => {
    if (!writerRef.current) return;
    setIsAnimating(true);
    setMode('view');
    writerRef.current.cancelQuiz();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((writerRef.current as any)._options) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (writerRef.current as any)._options.strokeAnimationSpeed = speed;
    }
    writerRef.current.animateCharacter({
      onComplete: () => setIsAnimating(false),
    });
    speakChinese(currentChar);
  };

  // Handle Start Quiz Mode (Practice Writing on Touchscreen/iPad)
  const handleStartQuiz = () => {
    if (!writerRef.current) return;
    setMode('quiz');
    setQuizScore(null);
    setMistakes(0);

    writerRef.current.quiz({
      onMistake: () => {
        setMistakes((prev) => prev + 1);
        sfx.playSoftTryAgain();
      },
      onCorrectStroke: () => {
        sfx.playCorrect();
      },
      onComplete: (summaryData) => {
        const accuracy = Math.max(0, Math.round(100 - summaryData.totalMistakes * 10));
        setQuizScore(accuracy);
        sfx.playStarFanfare();

        // Celebration Confetti
        confetti({
          particleCount: 70,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#fbbf24', '#f43f5e', '#10b981', '#6366f1'],
        });

        if (onCompleteWord) {
          onCompleteWord(word.id);
        }
      },
    });
  };

  return (
    <div className="pixar-card p-5 sm:p-7 max-w-lg mx-auto relative overflow-hidden">
      {/* Decorative Golden Dragon Clouds in corners */}
      <div className="absolute -top-6 -left-6 w-20 h-20 bg-amber-100/60 rounded-full blur-xl pointer-events-none" />
      <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-rose-100/60 rounded-full blur-xl pointer-events-none" />

      {/* Header Info */}
      <div className="w-full flex items-center justify-between mb-3 relative z-10">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-2xl sm:text-3xl font-black text-slate-800 tracking-wide">
              {word.pinyin}
            </span>
            <button
              onClick={() => speakChinese(word.hanzi)}
              className="p-2 bg-rose-50 text-rose-600 rounded-2xl hover:bg-rose-100 hover:scale-105 active:scale-95 transition-all shadow-sm"
              title="ฟังเสียงอ่านเจ้าของภาษา"
            >
              <Volume2 className="w-5 h-5" />
            </button>
          </div>
          <p className="text-sm font-extrabold text-rose-600 mt-0.5">
            {word.thai} ({word.thaiPhonetic})
          </p>
        </div>

        {/* Character tabs if word has more than 1 character */}
        {characters.length > 1 && (
          <div className="flex gap-1.5 bg-slate-100/90 p-1 rounded-2xl border border-slate-200">
            {characters.map((char, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedCharIndex(index);
                  setMode('view');
                }}
                className={`w-10 h-10 rounded-xl font-black text-lg transition-all ${
                  selectedCharIndex === index
                    ? 'bg-gradient-to-tr from-rose-500 to-amber-500 text-white shadow-md scale-105'
                    : 'text-slate-600 hover:bg-slate-200'
                }`}
              >
                {char}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Canvas Box (Tian Zi Ge / Magical Scroll background) */}
      <div className="relative group my-2 p-3 sm:p-4 bg-gradient-to-br from-amber-50/90 via-orange-50/60 to-rose-50/70 rounded-[2rem] border-4 border-amber-300/80 shadow-inner flex items-center justify-center touch-canvas-wrapper">
        {/* Background Grid Lines (Tian Zi Ge guide for iPad / Apple Pencil) */}
        <div className="absolute inset-4 pointer-events-none opacity-20 border-2 border-red-500 rounded-2xl">
          <div className="w-full h-1/2 border-b border-dashed border-red-500" />
          <div className="h-full w-1/2 -mt-[50%] ml-[50%] border-l border-dashed border-red-500" />
        </div>

        {/* Hanzi Writer Container */}
        <div ref={containerRef} className="cursor-crosshair z-10 touch-none select-none" />

        {/* Score Overlay upon completion */}
        {quizScore !== null && (
          <div className="absolute inset-0 bg-white/95 backdrop-blur-md rounded-[2rem] flex flex-col items-center justify-center p-4 z-20 animate-fade-in text-center">
            <div className="w-16 h-16 bg-gradient-to-tr from-emerald-400 to-teal-500 text-white rounded-full flex items-center justify-center mb-2 shadow-lg shadow-emerald-200 animate-bounce">
              <Award className="w-9 h-9" />
            </div>
            <p className="text-2xl font-black text-slate-800">เขียนสำเร็จแล้ว! 🎉</p>
            <p className="text-sm text-emerald-600 font-extrabold mb-3">
              ความแม่นยำ: {quizScore}% (ผิด {mistakes} ครั้ง)
            </p>
            <div className="flex gap-2">
              <button
                onClick={handleStartQuiz}
                className="btn-pixar btn-pixar-emerald px-5 py-2.5 rounded-2xl text-xs font-black shadow-md flex items-center gap-1.5"
              >
                <RotateCcw className="w-4 h-4" />
                <span>เขียนอีกครั้ง</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Control 3D Buttons (Disney / Pixar Tactile Style) */}
      <div className="w-full grid grid-cols-3 gap-2.5 mt-4 relative z-10">
        <button
          onClick={() => handleAnimate(1)}
          disabled={isAnimating}
          className="btn-pixar btn-pixar-rose flex flex-col items-center justify-center py-3 px-2 rounded-2xl text-xs font-black disabled:opacity-50"
        >
          <Play className="w-5 h-5 mb-1" />
          <span>ดูการเขียน</span>
        </button>

        <button
          onClick={() => handleAnimate(0.4)}
          disabled={isAnimating}
          className="btn-pixar btn-pixar-amber flex flex-col items-center justify-center py-3 px-2 rounded-2xl text-xs font-black disabled:opacity-50"
        >
          <Sparkles className="w-5 h-5 mb-1" />
          <span>ดูแบบช้าๆ</span>
        </button>

        <button
          onClick={handleStartQuiz}
          className={`btn-pixar flex flex-col items-center justify-center py-3 px-2 rounded-2xl text-xs font-black ${
            mode === 'quiz'
              ? 'btn-pixar-emerald ring-4 ring-emerald-200'
              : 'btn-pixar-emerald'
          }`}
        >
          <RotateCcw className="w-5 h-5 mb-1" />
          <span>{mode === 'quiz' ? 'รีเซ็ตฝึกเขียน' : '✍️ เริ่มหัดเขียน'}</span>
        </button>
      </div>

      {/* Little Dragon Guidance Bar */}
      <div className="w-full mt-4 flex items-center gap-3 bg-gradient-to-r from-emerald-50 via-teal-50 to-amber-50 p-3 rounded-2xl border-2 border-emerald-200/80">
        <PixarDragon size="sm" showSpeechBubble={false} />
        <div className="text-xs text-slate-700 flex-1">
          <p className="font-black text-emerald-800">
            {mode === 'quiz' ? 'ลากเส้นตามลำดับขีดเลยจ้า!' : 'สังเกตทิศทางของแต่ละเส้นนะ'}
          </p>
          <p className="text-[11px] text-slate-600 mt-0.5">
            ใช้นิ้วมือหรือ Apple Pencil วาดลงในช่องตารางสีทองได้เลย
          </p>
        </div>
      </div>

      {/* Example Sentence */}
      <div className="w-full mt-3 p-3.5 bg-rose-50/70 rounded-2xl border-2 border-rose-100 flex items-start gap-2.5">
        <button
          onClick={() => speakChinese(word.sampleSentence.hanzi)}
          className="p-2 bg-rose-200/90 text-rose-800 rounded-xl hover:bg-rose-300 transition-colors mt-0.5 shadow-sm active:scale-95"
          title="ฟังเสียงประโยคตัวอย่าง"
        >
          <Volume2 className="w-4 h-4" />
        </button>
        <div className="text-xs">
          <p className="font-extrabold text-slate-800 text-sm tracking-wide">
            {word.sampleSentence.hanzi}
          </p>
          <p className="text-rose-600 font-bold">{word.sampleSentence.pinyin}</p>
          <p className="text-slate-600 mt-0.5">{word.sampleSentence.thai}</p>
        </div>
      </div>
    </div>
  );
};
