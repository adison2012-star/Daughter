'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { UserProfile, CloudUser } from '@/types';
import { Star, Flame, ArrowLeft, Gift, Cloud, Plus } from 'lucide-react';
import { sfx } from '@/lib/speech';
import { PET_CATALOG } from '@/lib/petSystem';

interface PortalHeaderProps {
  activeProfile: UserProfile;
  profiles: UserProfile[];
  onSwitchProfile: (id: string) => void;
  title?: string;
  subtitle?: string;
  showBackToPortal?: boolean;
  currentSubject?: 'portal' | 'chinese' | 'math' | 'english' | 'science';
  onOpenPetSanctuary?: () => void;
  onOpenRewardShop?: () => void;
  onOpenProfileManager?: () => void;
  onOpenAuthModal?: () => void;
  cloudUser?: CloudUser | null;
}

export const PortalHeader: React.FC<PortalHeaderProps> = ({
  activeProfile,
  profiles,
  onSwitchProfile,
  title = 'Duo Wonder',
  subtitle,
  showBackToPortal = false,
  currentSubject = 'portal',
  onOpenPetSanctuary,
  onOpenRewardShop,
  onOpenProfileManager,
  onOpenAuthModal,
  cloudUser,
}) => {
  return (
    <header className="sticky top-0 z-50 glass-header">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
        {/* Left: Branding & Greeting */}
        <div className="flex items-center gap-3">
          {showBackToPortal && (
            <Link
              href="/"
              onClick={() => sfx.playCorrect()}
              className="w-10 h-10 rounded-full glass-pill text-slate-700 hover:text-slate-900 hover:bg-white flex items-center justify-center shadow-xs transition-all group"
              title="กลับหน้าหลัก"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            </Link>
          )}

          <Link href="/" className="flex items-center gap-2.5 select-none">
            <div className="relative w-10 h-10 rounded-2xl bg-amber-100/90 border border-white/90 flex items-center justify-center overflow-hidden shadow-xs">
              <Image
                src="/images/xiaolong/welcome.png"
                alt="Xiao Long"
                width={36}
                height={36}
                className="object-contain"
              />
            </div>
            <div>
              <h1 className="font-black text-base sm:text-lg text-slate-800 leading-none flex items-center gap-1.5">
                <span>{title}</span>
                <span className="text-[10px] bg-rose-500/10 text-rose-700 border border-rose-200/80 font-bold px-2 py-0.5 rounded-full">
                  Kids
                </span>
              </h1>
              <p className="text-[11px] font-bold text-slate-400 mt-0.5">
                {subtitle || `เสี่ยวหลงชวน ${activeProfile.nickname || activeProfile.name} เรียนรู้`}
              </p>
            </div>
          </Link>
        </div>

        {/* Right: Clean Stats & Profile Switcher (Instagram Kids Style) */}
        <div className="flex items-center gap-2">
          {/* Stars & Streak Clean Card */}
          <div className="hidden sm:flex items-center glass-pill px-3 py-1.5 shadow-xs gap-3 text-xs font-black">
            <div className="flex items-center gap-1 text-amber-600">
              <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
              <span>{activeProfile.stars.toLocaleString()}</span>
            </div>
            <div className="w-px h-3.5 bg-slate-200/70" />
            <div className="flex items-center gap-1 text-rose-500">
              <Flame className="w-4 h-4 fill-rose-500 text-rose-500" />
              <span>{activeProfile.streak} วัน</span>
            </div>
          </div>

          {/* Pet Level Pill Button */}
          {onOpenPetSanctuary && (
            <button
              onClick={() => {
                sfx.playCorrect();
                onOpenPetSanctuary();
              }}
              className="flex items-center gap-1.5 glass-pill hover:bg-white px-3 py-1.5 rounded-2xl text-xs font-black shadow-xs transition-all"
              title="สัตว์เลี้ยงคู่หู"
            >
              <span className="text-sm">
                {PET_CATALOG[activeProfile.pet?.type]?.emoji || '🐲'}
              </span>
              <span className="text-slate-700 font-extrabold text-[11px]">
                Lv.{activeProfile.pet?.level || 1}
              </span>
            </button>
          )}

          {/* Reward Shop Button */}
          {onOpenRewardShop && (
            <button
              onClick={() => {
                sfx.playCorrect();
                onOpenRewardShop();
              }}
              className="w-9 h-9 rounded-2xl glass-pill hover:bg-white flex items-center justify-center text-slate-700 shadow-xs hover:scale-105 active:scale-95 transition-all"
              title="คลังของรางวัล"
            >
              <Gift className="w-4 h-4 text-rose-500" />
            </button>
          )}

          {/* Cloud Sync Button */}
          {onOpenAuthModal && (
            <button
              onClick={() => {
                sfx.playClick();
                onOpenAuthModal();
              }}
              className="w-9 h-9 rounded-2xl glass-pill hover:bg-white flex items-center justify-center text-slate-700 shadow-xs hover:scale-105 active:scale-95 transition-all"
              title={cloudUser ? `เชื่อมต่อ: ${cloudUser.email}` : 'สำรองข้อมูลบนคลาวด์'}
            >
              <Cloud className={`w-4 h-4 ${cloudUser ? 'text-sky-500 fill-sky-200' : 'text-slate-400'}`} />
            </button>
          )}

          {/* Profile Switcher Pills */}
          <div className="flex items-center glass-pill p-0.5 shadow-xs">
            {profiles.slice(0, 3).map((p) => {
              const isActive = p.id === activeProfile.id;
              return (
                <button
                  key={p.id}
                  onClick={() => {
                    sfx.playCorrect();
                    onSwitchProfile(p.id);
                  }}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs font-black transition-all ${
                    isActive
                      ? 'bg-amber-100/90 text-slate-900 border border-amber-300 font-extrabold shadow-2xs'
                      : 'text-slate-400 hover:text-slate-700'
                  }`}
                  title={p.name}
                >
                  <span className="text-sm">{p.avatar}</span>
                  <span className="hidden md:inline text-[11px]">{p.nickname || p.name}</span>
                </button>
              );
            })}

            {onOpenProfileManager && (
              <button
                onClick={() => {
                  sfx.playClick();
                  onOpenProfileManager();
                }}
                className="p-1 text-slate-400 hover:text-slate-700 transition-colors"
                title="จัดการผู้เรียน (+)"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Quick Subject Sub-bar */}
      {currentSubject !== 'portal' && (
        <div className="bg-[#faf8f5] border-t border-[#f1ece4] px-4 py-1.5 overflow-x-auto scrollbar-none flex items-center justify-center gap-2 sm:gap-4 text-xs font-black">
          <Link
            href="/chinese"
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all ${
              currentSubject === 'chinese'
                ? 'bg-rose-500 text-white shadow-xs'
                : 'text-slate-600 hover:bg-white'
            }`}
          >
            <span>🇨🇳</span>
            <span>ภาษาจีน</span>
          </Link>
          <Link
            href="/math"
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all ${
              currentSubject === 'math'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-white'
            }`}
          >
            <span>🔢</span>
            <span>คณิตศาสตร์</span>
          </Link>
          <Link
            href="/english"
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all ${
              currentSubject === 'english'
                ? 'bg-sky-500 text-white shadow-xs'
                : 'text-slate-600 hover:bg-white'
            }`}
          >
            <span>🇬🇧</span>
            <span>ภาษาอังกฤษ</span>
          </Link>
          <Link
            href="/science"
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all ${
              currentSubject === 'science'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-white'
            }`}
          >
            <span>🔬</span>
            <span>วิทยาศาสตร์</span>
          </Link>
        </div>
      )}
    </header>
  );
};
