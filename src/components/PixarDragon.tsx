'use client';

import React, { useState } from 'react';
import { Sparkles, Heart } from 'lucide-react';
import { sfx, speakChinese } from '@/lib/speech';
import confetti from 'canvas-confetti';

interface PixarDragonProps {
  mood?: 'happy' | 'curious' | 'celebrating' | 'teaching';
  size?: 'sm' | 'md' | 'lg';
  speechText?: string;
  showSpeechBubble?: boolean;
}

const DRAGON_QUOTES = [
  { hanzi: '加油！', pinyin: 'Jiāyóu!', thai: 'สู้ๆ นะคนเก่ง! 🐲✨' },
  { hanzi: '太棒了！', pinyin: 'Tài bàng le!', thai: 'ยอดเยี่ยมที่สุดเลย! 🎉' },
  { hanzi: '你真聪明！', pinyin: 'Nǐ zhēn cōngmíng!', thai: 'หนูฉลาดจังเลย! 🌟' },
  { hanzi: '我喜欢你！', pinyin: 'Wǒ xǐhuan nǐ!', thai: 'เสี่ยวหลงชอบหนูที่สุด! ❤️' },
  { hanzi: '我们一起学中文！', pinyin: 'Wǒmen yīqǐ xué zhōngwén!', thai: 'มาเรียนภาษาจีนด้วยกันนะ!' },
];

export const PixarDragon: React.FC<PixarDragonProps> = ({
  mood = 'happy',
  size = 'md',
  speechText,
  showSpeechBubble = true,
}) => {
  const [currentQuote, setCurrentQuote] = useState(DRAGON_QUOTES[0]);
  const [isWiggling, setIsWiggling] = useState(false);

  const handleTapDragon = () => {
    sfx.playCorrect();
    setIsWiggling(true);
    setTimeout(() => setIsWiggling(false), 800);

    // Pick random cheerful quote
    const nextQ = DRAGON_QUOTES[Math.floor(Math.random() * DRAGON_QUOTES.length)];
    setCurrentQuote(nextQ);
    speakChinese(nextQ.hanzi);

    // Tiny confetti burst
    confetti({
      particleCount: 25,
      spread: 40,
      origin: { y: 0.7 },
      colors: ['#fbbf24', '#f43f5e', '#10b981'],
    });
  };

  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24 sm:w-28 sm:h-28',
    lg: 'w-36 h-36 sm:w-44 sm:h-44',
  }[size];

  return (
    <div className="relative inline-flex flex-col items-center select-none">
      {/* Speech Bubble (Pixar Cloud style) */}
      {showSpeechBubble && (
        <div
          onClick={handleTapDragon}
          className="cursor-pointer mb-2 max-w-[240px] bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border-2 border-amber-200 shadow-md text-center transform hover:scale-105 transition-all animate-fade-in relative group"
        >
          <div className="flex items-center justify-center gap-1">
            <span className="text-xs font-black text-rose-600">{currentQuote.hanzi}</span>
            <span className="text-[10px] text-amber-600 font-bold">({currentQuote.pinyin})</span>
          </div>
          <p className="text-[11px] font-bold text-slate-700 mt-0.5 leading-tight">
            {speechText || currentQuote.thai}
          </p>

          {/* Little speech tail */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-b-2 border-r-2 border-amber-200 transform rotate-45" />
        </div>
      )}

      {/* 3D Disney/Pixar Stylized Dragon Mascot */}
      <div
        onClick={handleTapDragon}
        className={`relative cursor-pointer transition-transform duration-300 ${sizeClasses} ${
          isWiggling ? 'scale-115 rotate-6' : 'hover:scale-105'
        } animate-dragon-float`}
        title="แตะที่ตัวเสี่ยวหลงเพื่อฟังเสียงให้กำลังใจ!"
      >
        <svg viewBox="0 0 160 160" className="w-full h-full drop-shadow-xl overflow-visible">
          <defs>
            {/* Dragon Body Gradient */}
            <linearGradient id="dragonSkin" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#34d399" />
              <stop offset="45%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#047857" />
            </linearGradient>

            {/* Belly / Soft Chest Gradient */}
            <linearGradient id="dragonBelly" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="100%" stopColor="#fde047" />
            </linearGradient>

            {/* Golden Horn Gradient */}
            <linearGradient id="goldHorn" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="40%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>

            {/* Pixar Eye Gloss */}
            <radialGradient id="eyeGloss" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#374151" />
              <stop offset="60%" stopColor="#1f2937" />
              <stop offset="100%" stopColor="#111827" />
            </radialGradient>

            {/* Ruby Cheeks */}
            <radialGradient id="blushGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fb7185" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#fb7185" stopOpacity="0" />
            </radialGradient>

            {/* Golden Pearl Light */}
            <radialGradient id="pearlShine" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="40%" stopColor="#fde047" />
              <stop offset="100%" stopColor="#eab308" />
            </radialGradient>
          </defs>

          {/* Auspicious Chinese Cloud below Dragon */}
          <path
            d="M 25 140 Q 15 125 35 120 Q 50 110 70 120 Q 90 105 115 118 Q 140 115 145 135 Q 130 150 25 140 Z"
            fill="#ffffff"
            opacity="0.85"
            className="filter drop-shadow"
          />

          {/* Cute Dragon Tail with fluffy golden tuft */}
          <path
            d="M 45 110 Q 20 120 18 100 Q 16 85 30 90"
            fill="none"
            stroke="url(#dragonSkin)"
            strokeWidth="14"
            strokeLinecap="round"
          />
          <path
            d="M 16 88 Q 8 80 20 75 Q 15 65 30 78 Z"
            fill="url(#goldHorn)"
          />

          {/* Golden Little Dragon Horns (Antlers) */}
          {/* Left Horn */}
          <path
            d="M 52 48 Q 40 28 32 30 Q 30 35 38 42 Q 28 35 25 45 Q 35 52 48 55 Z"
            fill="url(#goldHorn)"
            className="filter drop-shadow-sm"
          />
          {/* Right Horn */}
          <path
            d="M 108 48 Q 120 28 128 30 Q 130 35 122 42 Q 132 35 135 45 Q 125 52 112 55 Z"
            fill="url(#goldHorn)"
            className="filter drop-shadow-sm"
          />

          {/* Dragon Back Spikes (Golden Flames) */}
          <polygon points="76,28 80,18 84,28" fill="url(#goldHorn)" />
          <polygon points="86,32 94,22 96,35" fill="url(#goldHorn)" />
          <polygon points="64,35 66,22 74,32" fill="url(#goldHorn)" />

          {/* Dragon Round Chubby Head & Body */}
          <ellipse cx="80" cy="78" rx="46" ry="42" fill="url(#dragonSkin)" />

          {/* Chubby Cheeks and Snout */}
          <ellipse cx="80" cy="88" rx="34" ry="24" fill="#a7f3d0" />

          {/* Fluffy Whiskers (龙须) */}
          <path
            d="M 50 92 Q 25 90 20 102"
            fill="none"
            stroke="#fef08a"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M 110 92 Q 135 90 140 102"
            fill="none"
            stroke="#fef08a"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Big Disney/Pixar Expressive Eyes */}
          {/* Left Eye */}
          <ellipse cx="62" cy="70" rx="13" ry="16" fill="#ffffff" />
          <ellipse cx="63" cy="70" rx="10" ry="12" fill="url(#eyeGloss)" />
          {/* Sparkle highlights */}
          <circle cx="60" cy="65" r="4.5" fill="#ffffff" />
          <circle cx="66" cy="74" r="2" fill="#ffffff" />

          {/* Right Eye */}
          <ellipse cx="98" cy="70" rx="13" ry="16" fill="#ffffff" />
          <ellipse cx="97" cy="70" rx="10" ry="12" fill="url(#eyeGloss)" />
          {/* Sparkle highlights */}
          <circle cx="94" cy="65" r="4.5" fill="#ffffff" />
          <circle cx="100" cy="74" r="2" fill="#ffffff" />

          {/* Blushing Cheeks */}
          <ellipse cx="48" cy="85" rx="9" ry="6" fill="url(#blushGlow)" />
          <ellipse cx="112" cy="85" rx="9" ry="6" fill="url(#blushGlow)" />

          {/* Cute Little Nostrils */}
          <ellipse cx="74" cy="86" rx="2.5" ry="3.5" fill="#047857" opacity="0.8" />
          <ellipse cx="86" cy="86" rx="2.5" ry="3.5" fill="#047857" opacity="0.8" />

          {/* Sweet Happy Smile */}
          <path
            d="M 72 94 Q 80 103 88 94"
            fill="none"
            stroke="#065f46"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Baby Claws holding a Golden Dragon Pearl (龙珠) */}
          <circle cx="80" cy="120" r="14" fill="url(#pearlShine)" className="animate-glow" />
          <ellipse cx="64" cy="116" rx="7" ry="6" fill="url(#dragonSkin)" />
          <ellipse cx="96" cy="116" rx="7" ry="6" fill="url(#dragonSkin)" />
        </svg>

        {/* Floating Sparkle Stars */}
        <div className="absolute -top-1 -right-2 text-amber-400 animate-spin duration-3000 pointer-events-none">
          ✨
        </div>
      </div>
    </div>
  );
};
