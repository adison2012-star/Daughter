'use client';

import React from 'react';
import Image from 'next/image';
import { PetType } from '@/types';
import { getPetStageDef, PetStageDef, PET_CATALOG } from '@/lib/petSystem';
import { Sparkles, Crown, Flame, Shield, Heart } from 'lucide-react';

interface PetAvatar3DProps {
  type: PetType;
  level: number;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  showStageBadge?: boolean;
  isCelebrating?: boolean;
  speechText?: string;
  overrideImage?: string;
  onClick?: () => void;
}

export const PetAvatar3D: React.FC<PetAvatar3DProps> = ({
  type,
  level,
  size = 'md',
  showStageBadge = true,
  isCelebrating = false,
  speechText,
  overrideImage,
  onClick,
}) => {
  const def = PET_CATALOG[type] || PET_CATALOG.dragon;
  const stageDef = getPetStageDef(type, level);
  const activeImage = overrideImage || stageDef.image;

  const sizeClasses = {
    sm: 'w-14 h-14',
    md: 'w-24 h-24',
    lg: 'w-40 h-40',
    xl: 'w-56 h-56',
    '2xl': 'w-72 h-72',
  }[size];

  const speechSize = {
    sm: 'text-[10px] px-2 py-0.5 max-w-[120px]',
    md: 'text-xs px-3 py-1.5 max-w-[190px]',
    lg: 'text-sm px-4 py-2 max-w-[280px]',
    xl: 'text-sm sm:text-base px-4 py-2.5 max-w-[340px]',
    '2xl': 'text-base px-5 py-3 max-w-[380px]',
  }[size];

  const isCosmic = level >= 100;
  const isMythic = level >= 80;

  return (
    <div
      onClick={onClick}
      className={`relative inline-flex flex-col items-center justify-center select-none ${
        onClick ? 'cursor-pointer hover:scale-102 active:scale-95 transition-transform' : ''
      }`}
    >
      {/* Speech Bubble */}
      {speechText && (
        <div
          className={`mb-3 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-amber-200/90 text-slate-800 font-black ${speechSize} text-center animate-bounce relative z-20`}
        >
          <span>{speechText}</span>
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-b border-r border-amber-200/90 rotate-45" />
        </div>
      )}

      {/* Main Avatar Container */}
      <div className="relative group flex items-center justify-center">
        {/* Glow Aura / Ring Effect (ONLY for fallback 3D sphere, NOT for growth character cutouts) */}
        {!activeImage && (
          <div
            className={`absolute -inset-4 rounded-full blur-xl opacity-60 transition-all group-hover:opacity-90 ${
              isCosmic
                ? 'bg-gradient-to-r from-amber-400 via-rose-500 to-indigo-500 animate-spin-slow'
                : isMythic
                ? 'bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500 animate-pulse'
                : 'bg-gradient-to-tr ' + def.themeGradient
            }`}
          />
        )}

        {activeImage ? (
          /* Character Illustration Display (Xiao Long, Jelly, Bao Bao, Sugar on Clean White) */
          <div
            className={`relative ${sizeClasses} flex items-center justify-center ${
              isCelebrating ? 'animate-bounce' : 'animate-float'
            }`}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={activeImage}
                alt={stageDef.title}
                fill
                sizes="(max-width: 768px) 160px, 280px"
                className="object-contain transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>

            {/* Level Pill Over Character Bottom */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-slate-900/90 text-white text-[10px] sm:text-xs font-black px-3 py-0.5 rounded-full border border-white/60 shadow-md whitespace-nowrap flex items-center gap-1 z-20">
              <span className="text-yellow-300">★</span>
              <span>Lv.{level}</span>
            </div>

            {/* Cosmic / Mythic Top Badge */}
            {level >= 80 && (
              <div className="absolute -top-1 -right-1 bg-gradient-to-r from-yellow-400 to-amber-500 text-white rounded-full p-1.5 shadow-md border border-white z-20 animate-pulse">
                <Crown className="w-4 h-4 fill-white" />
              </div>
            )}
          </div>
        ) : (
          /* Fallback 3D Sphere Body (Panda, Hippo, Jellyfish) */
          <div
            className={`relative rounded-3xl ${sizeClasses} bg-gradient-to-tr ${def.themeGradient} p-1 flex items-center justify-center shadow-xl border-4 ${
              isCosmic
                ? 'border-yellow-300 ring-4 ring-purple-400 shadow-purple-400/50'
                : isMythic
                ? 'border-yellow-200 ring-2 ring-amber-300 shadow-amber-400/50'
                : 'border-white/80'
            } ${isCelebrating ? 'animate-bounce' : 'animate-float'}`}
          >
            {/* Internal Pixar Shine & Highlights */}
            <div className="absolute top-2 left-2 w-1/3 h-1/3 bg-white/40 rounded-full blur-xs pointer-events-none" />
            <div className="absolute bottom-1 right-2 w-1/4 h-1/4 bg-black/10 rounded-full blur-xs pointer-events-none" />

            {/* Emoji Avatar */}
            <span className="relative z-10 text-4xl sm:text-6xl transform transition-transform group-hover:scale-110 drop-shadow-md">
              {isCosmic ? '🌌' : stageDef.icon || def.emoji}
            </span>

            {/* Stage Badge on Top Right */}
            {level >= 80 && (
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-amber-500 text-white rounded-full p-1 shadow-md border border-white">
                <Crown className="w-4 h-4 fill-white" />
              </div>
            )}

            {/* Level Pill Over Avatar Bottom */}
            <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-slate-900/90 text-white text-[10px] sm:text-xs font-black px-2.5 py-0.5 rounded-full border border-white/60 shadow-md whitespace-nowrap flex items-center gap-1 z-20">
              <span className="text-yellow-300">★</span>
              <span>Lv.{level}</span>
            </div>
          </div>
        )}
      </div>

      {/* Stage Title and Badge */}
      {showStageBadge && (
        <div className="mt-3 text-center">
          <div className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-black border border-slate-200/90 shadow-2xs text-slate-700">
            <span>{stageDef.icon}</span>
            <span>{stageDef.title}</span>
          </div>
        </div>
      )}
    </div>
  );
};
