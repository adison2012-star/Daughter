'use client';

import React from 'react';
import Image from 'next/image';
import { UserProfile } from '@/types';
import { Star, Flame, Sparkles } from 'lucide-react';
import { sfx } from '@/lib/speech';
import { PET_CATALOG } from '@/lib/petSystem';

interface NavbarProps {
  activeProfile: UserProfile;
  profiles: UserProfile[];
  onSwitchProfile: (id: string) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const NAV_ITEMS = [
  { id: 'learn', label: 'ฝึกเขียน', icon: '✍️', desc: 'เขียนอักษรจีน' },
  { id: 'flashcards', label: 'ท่องศัพท์ & สอบ', icon: '🃏', desc: 'แฟลชการ์ด & วัดผลจริง' },
  { id: 'tone', label: 'ออกเสียง', icon: '🎙️', desc: 'กราฟวรรณยุกต์' },
  { id: 'ai-tutor', label: 'ติวเตอร์', icon: '🐼', desc: 'คุยกับ AI เป่าเปา' },
  { id: 'roadmap', label: '6 ระดับ', icon: '🗺️', desc: 'สู่เจ้าของภาษา' },
  { id: 'pet', label: 'สัตว์เลี้ยง', icon: '🐾', desc: 'Lv.1–100 อวดสัตว์เลี้ยง' },
  { id: 'parent', label: 'คุณพ่อ', icon: '👨‍👧‍👧', desc: 'แดชบอร์ดคุณพ่อ' },
];

export const Navbar: React.FC<NavbarProps> = ({
  activeProfile,
  profiles,
  onSwitchProfile,
  activeTab,
  setActiveTab,
}) => {
  return (
    <>
      {/* Top Header Bar */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-purple-100/80 shadow-xs">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 py-2 flex items-center justify-between gap-2">
          {/* Logo with Cute Dragon Avatar */}
          <div
            onClick={() => {
              sfx.playCorrect();
              setActiveTab('learn');
            }}
            className="flex items-center gap-2.5 cursor-pointer group select-none"
          >
            <div className="relative w-10 h-10 rounded-2xl bg-amber-50 flex items-center justify-center shadow-xs group-hover:scale-105 transition-all border border-amber-200 overflow-hidden p-0.5">
              <Image
                src="/images/xiaolong/chinese.png"
                alt="เสี่ยวหลง"
                width={36}
                height={36}
                className="object-contain"
              />
            </div>
            <div>
              <h1 className="font-black text-base sm:text-lg text-slate-800 tracking-tight flex items-center gap-1 leading-none">
                <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 bg-clip-text text-transparent">
                  ZhongWen
                </span>
                <span className="text-purple-700 font-extrabold">Duo</span>
                <span className="text-[10px] bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full font-bold ml-1 border border-purple-200/50">
                  中文
                </span>
              </h1>
            </div>
          </div>

          {/* Sibling Profile Switcher & Stats */}
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            {/* Streak Badge */}
            <div className="flex items-center gap-1 bg-amber-50 border-2 border-amber-200/80 text-amber-800 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-2xl text-xs font-black shadow-sm">
              <Flame className="w-4 h-4 text-amber-500 fill-amber-500 animate-pulse" />
              <span>{activeProfile.streak} วัน</span>
            </div>

            {/* Chinese Stars Badge */}
            <div
              className="flex items-center gap-1.5 bg-yellow-50 border-2 border-yellow-200/80 text-yellow-800 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-2xl text-xs font-black shadow-sm"
              title={`ดาววิชาภาษาจีน: ${(activeProfile.subjectStars?.chinese ?? activeProfile.stars).toLocaleString()} ดวง`}
            >
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span>{(activeProfile.subjectStars?.chinese ?? activeProfile.stars).toLocaleString()}</span>
              <span className="text-[10px] bg-yellow-200/80 text-yellow-900 px-1.5 py-0.2 rounded-md font-black">
                🇨🇳 จีน
              </span>
            </div>

            {/* Pet Badge */}
            <button
              onClick={() => {
                sfx.playCorrect();
                setActiveTab('pet');
              }}
              className="flex items-center gap-1 bg-gradient-to-r from-amber-400 via-rose-500 to-indigo-600 text-white px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-2xl text-xs font-black shadow-sm hover:scale-105 active:scale-95 transition-all group"
              title="ไปศาลเจ้าสัตว์เลี้ยง & อวดเลเวล"
            >
              <span className="text-base group-hover:scale-110 transition-transform">
                {PET_CATALOG[activeProfile.pet?.type]?.emoji || '🐲'}
              </span>
              <span className="text-amber-200 font-extrabold">Lv.{activeProfile.pet?.level || 1}</span>
            </button>

            {/* Learner Profile Pill */}
            <div
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-gradient-to-r from-rose-500 to-amber-500 text-white font-black text-xs shadow-md select-none"
              title={activeProfile.nickname || activeProfile.name}
            >
              <span className="text-sm sm:text-base">{activeProfile.avatar}</span>
              <span className="text-[11px] font-black">{activeProfile.nickname || activeProfile.name}</span>
            </div>
          </div>
        </div>

        {/* Desktop / iPad Landscape Tabs Navigation */}
        <nav className="hidden lg:block border-t border-purple-100/60 bg-purple-50/40">
          <div className="max-w-6xl mx-auto px-4 flex items-center gap-2 py-1.5">
            {NAV_ITEMS.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    sfx.playCorrect();
                    setActiveTab(item.id);
                  }}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-xs'
                      : 'text-slate-600 hover:bg-purple-100/60'
                  }`}
                >
                  <span className="text-base">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </nav>
      </header>

      {/* Floating Bottom Dock for Mobile & iPad (Thumb-Friendly Navigation) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 px-3 pb-3 pt-1 pointer-events-none">
        <div className="max-w-md mx-auto bg-white/95 backdrop-blur-2xl border border-purple-100/90 rounded-full shadow-[0_8px_30px_rgba(139,92,246,0.15)] p-1.5 flex items-center justify-around pointer-events-auto safe-bottom-dock">
          {NAV_ITEMS.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  sfx.playCorrect();
                  setActiveTab(item.id);
                }}
                className={`flex flex-col items-center justify-center py-1.5 px-2 rounded-full transition-all duration-200 flex-1 ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-xs transform -translate-y-0.5'
                    : 'text-slate-500 hover:text-purple-700 active:scale-95'
                }`}
              >
                <span className={`text-lg transition-transform ${isActive ? 'scale-110' : ''}`}>
                  {item.icon}
                </span>
                <span className={`text-[10px] font-black leading-tight mt-0.5 ${isActive ? 'text-white' : 'text-slate-600'}`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};
