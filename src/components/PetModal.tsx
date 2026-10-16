'use client';

import React from 'react';
import { UserProfile, PetType, SubjectType } from '@/types';
import { PetCompanion } from '@/components/PetCompanion';
import { X, Sparkles } from 'lucide-react';
import { sfx } from '@/lib/speech';

interface PetModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeProfile: UserProfile;
  profiles: UserProfile[];
  onFeedStars: (amount: number, fromSubject?: SubjectType) => { leveledUp: boolean; newLevel: number; actualFed: number };
  onSwitchPetType: (type: PetType) => void;
  onSwitchProfile: (profileId: string) => void;
  initialSubject?: SubjectType;
}

export const PetModal: React.FC<PetModalProps> = ({
  isOpen,
  onClose,
  activeProfile,
  profiles,
  onFeedStars,
  onSwitchPetType,
  onSwitchProfile,
  initialSubject,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/50 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#FAF7F2] w-full max-w-4xl max-h-[92vh] rounded-4xl shadow-2xl border border-[#EDE7DE] overflow-hidden flex flex-col relative">
        {/* Modal Top Bar */}
        <div className="px-5 py-3.5 bg-white/95 backdrop-blur-md border-b border-[#EAE5DB] flex items-center justify-between sticky top-0 z-30 shadow-2xs">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl animate-bounce">🌿</span>
            <div>
              <h3 className="text-base font-black text-slate-800 flex items-center gap-2">
                <span>ศาลเจ้าสัตว์เลี้ยงและการเติบโต</span>
                <span className="text-[10px] bg-[#EBF2E8] text-[#54754B] font-black px-2.5 py-0.5 rounded-full">
                  Level 1–100
                </span>
              </h3>
              <p className="text-[11px] font-semibold text-slate-500">
                ดูแลและป้อนอาหารดวงดาว เพื่อดูการเติบโต 11 ขั้นของเสี่ยวหลง
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              sfx.playCorrect();
              onClose();
            }}
            className="w-9 h-9 rounded-full bg-[#FAF7F2] hover:bg-slate-200/70 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors border border-[#EDE7DE]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
          <PetCompanion
            activeProfile={activeProfile}
            profiles={profiles}
            onFeedStars={onFeedStars}
            onSwitchPetType={onSwitchPetType}
            onSwitchProfile={onSwitchProfile}
            embeddedMode={false}
            initialSubject={initialSubject}
          />
        </div>
      </div>
    </div>
  );
};
