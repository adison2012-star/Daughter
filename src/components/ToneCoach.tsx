'use client';

import React, { useState } from 'react';
import { Volume2, Mic, CheckCircle2, RotateCcw, Award, Sparkles } from 'lucide-react';
import { speakChinese, sfx, createSpeechRecognizer } from '@/lib/speech';
import confetti from 'canvas-confetti';
import { PixarDragon } from '@/components/PixarDragon';

interface ToneData {
  toneNumber: number;
  name: string;
  pinyinMark: string;
  contour: string;
  pathD: string;
  dragonPos: { x: number; y: number };
  color: string;
  sampleSyllables: Array<{ hanzi: string; pinyin: string; thai: string }>;
  tip: string;
}

const TONES: ToneData[] = [
  {
    toneNumber: 1,
    name: 'เสียง 1 (阴平 - เสียงสูงราบเรียบ)',
    pinyinMark: 'ˉ',
    contour: 'ระดับ 55 (สูง สม่ำเสมอ ไม่ตก)',
    pathD: 'M 10 16 L 90 16',
    dragonPos: { x: 50, y: 16 },
    color: '#0ea5e9', // sky blue
    sampleSyllables: [
      { hanzi: '妈', pinyin: 'mā', thai: 'แม่' },
      { hanzi: '八', pinyin: 'bā', thai: 'แปด' },
      { hanzi: '天', pinyin: 'tiān', thai: 'ท้องฟ้า/วัน' },
    ],
    tip: 'มังกรบินตรงแนวนอน ลากเสียงสูงสม่ำเสมอเหมือนร้องโน้ตตัว "โซ"',
  },
  {
    toneNumber: 2,
    name: 'เสียง 2 (阳平 - เสียงขึ้นสูง)',
    pinyinMark: 'ˊ',
    contour: 'ระดับ 35 (จากกลาง พุ่งขึ้นสู่ฟ้า)',
    pathD: 'M 10 40 Q 50 26 90 12',
    dragonPos: { x: 70, y: 18 },
    color: '#10b981', // emerald
    sampleSyllables: [
      { hanzi: '麻', pinyin: 'má', thai: 'ป่าน' },
      { hanzi: '鱼', pinyin: 'yú', thai: 'ปลา' },
      { hanzi: '白', pinyin: 'bái', thai: 'สีขาว' },
    ],
    tip: 'มังกรเหินเวหาพุ่งขึ้นฟ้า เหมือนเวลาเราถามด้วยความสงสัย "หา? จริงเหรอ?"',
  },
  {
    toneNumber: 3,
    name: 'เสียง 3 (上声 - เสียงต่ำแล้วขึ้น)',
    pinyinMark: 'ˇ',
    contour: 'ระดับ 214 (ดำดิ่งลงต่ำ แล้วสะบัดขึ้น)',
    pathD: 'M 10 32 Q 45 54 85 18',
    dragonPos: { x: 45, y: 52 },
    color: '#f59e0b', // amber
    sampleSyllables: [
      { hanzi: '马', pinyin: 'mǎ', thai: 'ม้า' },
      { hanzi: '狗', pinyin: 'gǒu', thai: 'สุนัข' },
      { hanzi: '好', pinyin: 'hǎo', thai: 'ดี' },
    ],
    tip: 'มังกรดำลงไปในน้ำลึกก่อน แล้วค่อยทะยานขึ้นสู่ผิวน้ำ',
  },
  {
    toneNumber: 4,
    name: 'เสียง 4 (去声 - เสียงตกกระแทกลง)',
    pinyinMark: 'ˋ',
    contour: 'ระดับ 51 (จากสูง ตกลงต่ำเร็วและมั่นใจ)',
    pathD: 'M 10 12 L 90 52',
    dragonPos: { x: 75, y: 45 },
    color: '#ef4444', // ruby red
    sampleSyllables: [
      { hanzi: '骂', pinyin: 'mà', thai: 'ดุ/ว่า' },
      { hanzi: '爱', pinyin: 'ài', thai: 'รัก' },
      { hanzi: '二', pinyin: 'èr', thai: 'สอง' },
    ],
    tip: 'มังกรทิ้งดิ่งลงมาอย่างมั่นคงและเด็ดเดี่ยว เหมือนพูดว่า "ใช่!"',
  },
];

interface ToneCoachProps {
  onEarnReward?: (stars: number) => void;
}

export const ToneCoach: React.FC<ToneCoachProps> = ({ onEarnReward }) => {
  const [selectedToneIndex, setSelectedToneIndex] = useState(0);
  const selectedTone = TONES[selectedToneIndex];

  // Mic Speaking State
  const [isRecording, setIsRecording] = useState(false);
  const [speechFeedback, setSpeechFeedback] = useState<string | null>(null);

  // Tone Ear Training Game State
  const [quizTone, setQuizTone] = useState<ToneData | null>(null);
  const [quizScore, setQuizScore] = useState<{ total: number; correct: number }>({ total: 0, correct: 0 });
  const [quizStatus, setQuizStatus] = useState<string | null>(null);

  // Handle Microphone Speaking Practice (iOS / iPad / Android friendly)
  const handleStartSpeaking = (targetHanzi: string) => {
    if (isRecording) return;
    setIsRecording(true);
    setSpeechFeedback(null);

    const recognizer = createSpeechRecognizer(
      (transcript) => {
        setIsRecording(false);
        if (transcript.includes(targetHanzi)) {
          setSpeechFeedback('ยอดเยี่ยมมาก! สำเนียงเป๊ะเหมือนเจ้าของภาษาเลย 🎉');
          sfx.playCorrect();
          confetti({
            particleCount: 50,
            spread: 70,
            colors: ['#34d399', '#fbbf24', '#f43f5e'],
          });
          if (onEarnReward) onEarnReward(10);
        } else {
          setSpeechFeedback(`ได้ยินเป็น "${transcript}" เกือบถูกแล้ว! ลองฟังกราฟมังกรแล้วออกเสียงใหม่อีกครั้งนะ 🐲`);
          sfx.playSoftTryAgain();
        }
      },
      () => {
        setIsRecording(false);
        setSpeechFeedback('ไม่สามารถเปิดไมค์ได้ กรุณากดอนุญาตการใช้ไมโครโฟนบนเบราว์เซอร์นะจ๊ะ');
      },
      () => setIsRecording(false)
    );

    if (recognizer) {
      try {
        recognizer.start();
      } catch {
        setIsRecording(false);
      }
    } else {
      setIsRecording(false);
      setSpeechFeedback('เบราว์เซอร์นี้ยังไม่รองรับระบบตรวจจับไมค์ กรุณาลองใช้บน Google Chrome หรือ Safari บน iPad/iPhone จ้า');
    }
  };

  // Ear Training Quiz - Play Random Tone
  const startNewQuizRound = () => {
    const randomTone = TONES[Math.floor(Math.random() * TONES.length)];
    const randomSyllable = randomTone.sampleSyllables[Math.floor(Math.random() * randomTone.sampleSyllables.length)];
    setQuizTone(randomTone);
    setQuizStatus(null);
    speakChinese(randomSyllable.hanzi);
  };

  const handleGuessTone = (toneNum: number) => {
    if (!quizTone) return;

    if (toneNum === quizTone.toneNumber) {
      setQuizStatus('ถูกต้องที่สุด! 🌟 มังกรน้อยปรบมือให้เลย!');
      setQuizScore((prev) => ({ total: prev.total + 1, correct: prev.correct + 1 }));
      sfx.playCorrect();
      confetti({ particleCount: 30, spread: 50 });
      if (onEarnReward) onEarnReward(5);
    } else {
      setQuizStatus(`ยังไม่ใช่จ้า คำนี้เป็น ${quizTone.name}`);
      setQuizScore((prev) => ({ total: prev.total + 1, correct: prev.correct }));
      sfx.playSoftTryAgain();
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Hero Banner with Pixar Dragon */}
      <div className="bg-gradient-to-r from-teal-600 via-emerald-600 to-amber-500 rounded-[2.5rem] p-5 sm:p-7 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 relative overflow-hidden">
        <div className="flex items-center gap-4 z-10">
          <PixarDragon size="md" showSpeechBubble={false} />
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">🎙️</span>
              <h2 className="text-xl sm:text-2xl font-black">
                มังกรเหินเวหา: โค้ชวรรณยุกต์จีน (Pitch Tone Master)
              </h2>
            </div>
            <p className="text-emerald-100 text-xs sm:text-sm max-w-lg leading-relaxed">
              ภาษาจีนเปลี่ยนเสียง ความหมายก็เปลี่ยนทันที! บินตามเส้นทางมังกร 
              แล้วแตะไมค์พูดโต้ตอบบนมือถือ/iPad ได้เลย!
            </p>
          </div>
        </div>

        <button
          onClick={startNewQuizRound}
          className="btn-pixar btn-pixar-amber px-5 py-3 rounded-2xl text-xs sm:text-sm font-black whitespace-nowrap flex items-center gap-2 z-10"
        >
          <Sparkles className="w-4 h-4" />
          <span>🎮 เล่นเกมทายเสียง</span>
        </button>
      </div>

      {/* Tone Selection Pills (3D Pixar Style) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {TONES.map((tone, idx) => {
          const isSelected = idx === selectedToneIndex;
          return (
            <button
              key={tone.toneNumber}
              onClick={() => {
                setSelectedToneIndex(idx);
                sfx.playCorrect();
              }}
              style={{
                borderColor: isSelected ? tone.color : 'rgba(255, 237, 213, 0.8)',
              }}
              className={`pixar-card p-4 transition-all flex flex-col items-center select-none ${
                isSelected
                  ? 'ring-4 ring-amber-300 scale-103 shadow-lg'
                  : 'hover:scale-101 opacity-80 hover:opacity-100'
              }`}
            >
              <div
                style={{ backgroundColor: `${tone.color}25`, color: tone.color }}
                className="w-13 h-13 rounded-2xl flex items-center justify-center font-black text-3xl mb-1 shadow-sm border border-white"
              >
                {tone.pinyinMark}
              </div>
              <span className="font-black text-slate-800 text-sm">เสียงที่ {tone.toneNumber}</span>
              <span className="text-[11px] text-slate-500 font-bold text-center mt-0.5">
                {tone.contour}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Pitch Contour Visualizer */}
      <div className="pixar-card p-5 sm:p-7 grid md:grid-cols-2 gap-6 items-center">
        {/* Left: Interactive Dragon Flight Contour Graph */}
        <div>
          <h3 className="font-black text-slate-800 text-base mb-1 flex items-center gap-2">
            <span>🐉 เส้นทางการบินของมังกร (5-Pitch Scale)</span>
          </h3>
          <p className="text-xs text-slate-500 mb-3">{selectedTone.tip}</p>

          <div className="relative bg-gradient-to-br from-amber-50/70 via-sky-50/40 to-emerald-50/50 border-2 border-amber-200 rounded-3xl p-4 shadow-inner">
            {/* Pitch Level Indicator (5, 4, 3, 2, 1) */}
            <div className="flex flex-col justify-between h-44 text-xs font-black text-slate-400 absolute left-3 top-4 bottom-4 select-none">
              <span className="text-rose-500">5 (สูง)</span>
              <span>4</span>
              <span className="text-amber-500">3 (กลาง)</span>
              <span>2</span>
              <span className="text-indigo-500">1 (ต่ำ)</span>
            </div>

            {/* SVG Graph Grid with Flying Dragon */}
            <div className="ml-16 h-44 flex items-center justify-center">
              <svg viewBox="0 0 100 60" className="w-full h-full overflow-visible">
                {/* Reference Grid lines */}
                {[12, 24, 36, 48].map((y, i) => (
                  <line
                    key={i}
                    x1="0"
                    y1={y}
                    x2="100"
                    y2={y}
                    stroke="#e2e8f0"
                    strokeDasharray="3,3"
                    strokeWidth="1"
                  />
                ))}

                {/* Animated Tone Pitch Curve */}
                <path
                  d={selectedTone.pathD}
                  fill="none"
                  stroke={selectedTone.color}
                  strokeWidth="7"
                  strokeLinecap="round"
                  className="filter drop-shadow"
                />

                {/* Flying Dragon on the Curve */}
                <text
                  x={selectedTone.dragonPos.x - 6}
                  y={selectedTone.dragonPos.y + 4}
                  fontSize="12"
                  className="animate-bounce select-none pointer-events-none"
                >
                  🐲
                </text>
              </svg>
            </div>
          </div>
        </div>

        {/* Right: Words with this Tone & Tactile Mic Practice */}
        <div className="flex flex-col gap-3">
          <h3 className="font-black text-slate-800 text-sm">
            ลองแตะไมค์แล้วออกเสียงตามตัวอย่าง:
          </h3>

          <div className="space-y-2.5">
            {selectedTone.sampleSyllables.map((syl, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3.5 bg-white/90 hover:bg-amber-50/50 rounded-2xl border-2 border-slate-200/80 transition-all shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-black text-slate-800">{syl.hanzi}</span>
                  <div>
                    <p className="font-black text-base text-rose-600 leading-none">{syl.pinyin}</p>
                    <p className="text-xs text-slate-500 font-bold mt-1">{syl.thai}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => speakChinese(syl.hanzi)}
                    className="p-3 bg-rose-50 text-rose-600 hover:bg-rose-100 rounded-2xl transition-all shadow-sm active:scale-95"
                    title="ฟังเสียงต้นฉบับ"
                  >
                    <Volume2 className="w-5 h-5" />
                  </button>

                  <button
                    onClick={() => handleStartSpeaking(syl.hanzi)}
                    className={`btn-pixar flex items-center gap-1.5 px-3.5 py-2.5 rounded-2xl text-xs font-black shadow-sm ${
                      isRecording
                        ? 'bg-rose-500 text-white animate-pulse'
                        : 'btn-pixar-emerald'
                    }`}
                  >
                    <Mic className="w-4 h-4" />
                    <span>{isRecording ? 'กำลังฟัง...' : 'แตะพูด'}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Feedback Display */}
          {speechFeedback && (
            <div className="mt-2 p-3.5 bg-emerald-50 border-2 border-emerald-200 rounded-2xl text-xs text-emerald-900 animate-fade-in flex items-start gap-2.5 shadow-sm">
              <span className="text-xl">🐲</span>
              <p className="font-extrabold leading-relaxed">{speechFeedback}</p>
            </div>
          )}
        </div>
      </div>

      {/* Ear Training Quiz Section (When active) */}
      {quizTone && (
        <div className="pixar-card p-6 border-4 border-amber-300 text-center space-y-4 animate-scale-in">
          <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 px-4 py-1.5 rounded-full text-xs font-black">
            <span>🎯 มินิเกมทดสอบหู (คะแนน: {quizScore.correct}/{quizScore.total})</span>
          </div>

          <h3 className="text-xl font-black text-slate-800">
            คำที่ได้ยินเมื่อสักครู่ คือ "เสียงวรรณยุกต์ใด"?
          </h3>

          <div className="flex justify-center gap-2">
            <button
              onClick={() => {
                const syl = quizTone.sampleSyllables[0];
                speakChinese(syl.hanzi);
              }}
              className="btn-pixar btn-pixar-rose px-5 py-2.5 rounded-2xl text-xs font-black flex items-center gap-1.5 shadow-md"
            >
              <Volume2 className="w-4 h-4" />
              <span>กดฟังอีกครั้ง</span>
            </button>
          </div>

          {/* Guess Buttons (3D Tactile) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-lg mx-auto">
            {TONES.map((t) => (
              <button
                key={t.toneNumber}
                onClick={() => handleGuessTone(t.toneNumber)}
                className="btn-pixar bg-white hover:bg-amber-50 border-2 border-amber-200 py-3.5 px-2 rounded-2xl font-black text-slate-800 text-sm"
              >
                เสียงที่ {t.toneNumber} ({t.pinyinMark})
              </button>
            ))}
          </div>

          {quizStatus && (
            <div className="text-sm font-black text-amber-900 mt-2">
              {quizStatus}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
