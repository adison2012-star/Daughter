'use client';

import React, { useState } from 'react';
import { UserProfile, GradeLevel, PetType } from '@/types';
import { addNewProfile, updateProfile, deleteProfile } from '@/lib/storage';
import { PET_CATALOG } from '@/lib/petSystem';
import { sfx } from '@/lib/speech';
import confetti from 'canvas-confetti';
import {
  Users,
  UserPlus,
  X,
  Sparkles,
  Check,
  Edit2,
  Trash2,
  GraduationCap,
  Star,
  CheckCircle2,
  ShieldAlert,
} from 'lucide-react';

interface ProfileManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeProfile: UserProfile;
  profiles: UserProfile[];
  onProfilesChanged: (newProfiles: UserProfile[], newActiveId: string) => void;
}

const AVATAR_OPTIONS = [
  '👧🏻', '👧🏼', '👧🏽', '🧒🏻', '👦🏻', '👦🏼',
  '👶', '🦄', '🌟', '👑', '🚀', '🐱', '🐶', '🦊', '🦁', '🐼'
];

const GRADE_LABELS: Record<GradeLevel, string> = {
  p1_3: 'ประถมศึกษาตอนต้น (ป.1 - ป.3)',
  p4_6: 'ประถมศึกษาตอนปลาย (ป.4 - ป.6)',
  m1_3: 'มัธยมศึกษาตอนต้น (ม.1 - ม.3)',
  m4_6: 'มัธยมศึกษาตอนปลาย (ม.4 - ม.6)',
  general: 'บุคคลทั่วไป / เตรียมสอบ',
};

const COLOR_PRESETS = [
  { label: 'ชมพู-กุหลาบ', value: 'from-pink-400 to-rose-500' },
  { label: 'ส้ม-ทองคำ', value: 'from-amber-400 to-orange-500' },
  { label: 'ม่วง-คราม', value: 'from-indigo-500 to-purple-600' },
  { label: 'เขียว-มิ้นต์', value: 'from-emerald-400 to-teal-500' },
  { label: 'ฟ้า-ท้องฟ้า', value: 'from-sky-400 to-blue-600' },
];

export const ProfileManagerModal: React.FC<ProfileManagerModalProps> = ({
  isOpen,
  onClose,
  activeProfile,
  profiles,
  onProfilesChanged,
}) => {
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  // Form State
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [avatar, setAvatar] = useState('👧🏻');
  const [gradeLevel, setGradeLevel] = useState<GradeLevel>('p4_6');
  const [initialPet, setInitialPet] = useState<PetType>('dragon');
  const [color, setColor] = useState('from-indigo-500 to-purple-600');

  // Edit State
  const [editName, setEditName] = useState('');
  const [editNickname, setEditNickname] = useState('');
  const [editAvatar, setEditAvatar] = useState('');
  const [editGrade, setEditGrade] = useState<GradeLevel>('p4_6');

  if (!isOpen) return null;

  const handleStartAdd = () => {
    sfx.playClick();
    setName('');
    setNickname('');
    setAvatar('👧🏻');
    setGradeLevel('p4_6');
    setInitialPet('dragon');
    setIsAddingNew(true);
    setEditingId(null);
  };

  const handleCreateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const newProfile = addNewProfile({
      name: name.trim(),
      nickname: nickname.trim() || name.trim(),
      avatar,
      gradeLevel,
      initialPet,
      color,
    });

    const updatedList = [...profiles, newProfile];
    onProfilesChanged(updatedList, newProfile.id);
    setIsAddingNew(false);

    sfx.playCorrect();
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 },
    });
  };

  const handleStartEdit = (p: UserProfile) => {
    sfx.playClick();
    setEditingId(p.id);
    setEditName(p.name);
    setEditNickname(p.nickname || p.name);
    setEditAvatar(p.avatar);
    setEditGrade(p.gradeLevel || 'p4_6');
    setIsAddingNew(false);
  };

  const handleSaveEdit = (profileId: string) => {
    if (!editName.trim()) return;
    const updated = updateProfile(profileId, {
      name: editName.trim(),
      nickname: editNickname.trim(),
      avatar: editAvatar,
      gradeLevel: editGrade,
    });

    if (updated) {
      const updatedList = profiles.map((p) => (p.id === profileId ? { ...p, ...updated } : p));
      onProfilesChanged(updatedList, activeProfile.id);
      setEditingId(null);
      sfx.playCorrect();
    }
  };

  const handleDelete = (profileId: string) => {
    if (profiles.length <= 1) {
      alert('จำเป็นต้องมีผู้เรียนอย่างน้อย 1 คนในระบบครับ');
      return;
    }

    const target = profiles.find((p) => p.id === profileId);
    if (!confirm(`คุณต้องการลบข้อมูลผู้เรียน "${target?.name}" ใช่หรือไม่? (คะแนนสะสมจะถูกลบออก)`)) {
      return;
    }

    sfx.playSoftTryAgain();
    const res = deleteProfile(profileId);
    if (res.success) {
      onProfilesChanged(res.remainingProfiles, res.activeId);
    }
  };

  const handleSelectActive = (profileId: string) => {
    sfx.playCorrect();
    onProfilesChanged(profiles, profileId);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/65 backdrop-blur-sm animate-fadeIn">
      <div className="bg-gradient-to-b from-purple-50/60 via-slate-50 to-white w-full max-w-3xl max-h-[90vh] rounded-3xl shadow-2xl border-2 border-white/60 overflow-hidden flex flex-col relative">
        {/* Top Header */}
        <div className="px-5 py-4 bg-white/95 backdrop-blur-md border-b border-slate-100 flex items-center justify-between sticky top-0 z-30 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center text-2xl shadow-md">
              👥
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-black text-slate-800">
                  จัดการบัญชีผู้เรียน & สลับตัวละคร
                </h3>
                <span className="text-[10px] bg-indigo-600 text-white font-black px-2 py-0.5 rounded-full">
                  มีผู้เรียน {profiles.length} คน
                </span>
              </div>
              <p className="text-[11px] font-bold text-slate-500">
                เพิ่มพี่น้อง เพื่อนๆ หรือคนในครอบครัวเพื่อเก็บคะแนนและเลี้ยงสัตว์แยกอิสระ
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              sfx.playCorrect();
              onClose();
            }}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-rose-100 text-slate-500 hover:text-rose-600 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1">
          {/* Action Bar */}
          {!isAddingNew && (
            <div className="flex items-center justify-between bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-2xs">
              <span className="text-xs font-bold text-slate-600">
                คลิกเลือกที่ชื่อหรือรูปภาพเพื่อสลับผู้เรียนที่กำลังใช้งาน
              </span>
              <button
                onClick={handleStartAdd}
                className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:brightness-105 text-white rounded-xl text-xs font-black shadow-sm flex items-center gap-1.5 cursor-pointer"
              >
                <UserPlus className="w-4 h-4" />
                <span>+ เพิ่มผู้เรียนคนใหม่</span>
              </button>
            </div>
          )}

          {/* ADD NEW PROFILE FORM */}
          {isAddingNew && (
            <div className="bg-white p-5 rounded-3xl border-2 border-indigo-200 shadow-md space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <UserPlus className="w-5 h-5 text-indigo-600" />
                  <h4 className="font-black text-sm text-slate-800">
                    สร้างโปรไฟล์ผู้เรียนคนใหม่
                  </h4>
                </div>
                <button
                  onClick={() => setIsAddingNew(false)}
                  className="text-xs text-slate-400 hover:text-slate-600 font-bold"
                >
                  ยกเลิก
                </button>
              </div>

              <form onSubmit={handleCreateProfile} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="space-y-1">
                    <label className="font-extrabold text-slate-700 block">
                      ชื่อจริง / ชื่อที่แสดง <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="เช่น น้องพรีม, พี่วิน, น้องเก้า"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-indigo-500 font-bold text-slate-800"
                      required
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-extrabold text-slate-700 block">
                      ชื่อเล่น (สั้นๆ)
                    </label>
                    <input
                      type="text"
                      value={nickname}
                      onChange={(e) => setNickname(e.target.value)}
                      placeholder="เช่น พรีม, วิน"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-indigo-500 font-bold text-slate-800"
                    />
                  </div>
                </div>

                {/* Avatar Picker */}
                <div className="space-y-1.5">
                  <label className="font-extrabold text-slate-700 block">
                    เลือกรูปตัวละคร Disney Pixar Avatar:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {AVATAR_OPTIONS.map((emoji) => (
                      <button
                        key={emoji}
                        type="button"
                        onClick={() => setAvatar(emoji)}
                        className={`w-10 h-10 rounded-2xl text-2xl flex items-center justify-center transition-all ${
                          avatar === emoji
                            ? 'bg-indigo-600 text-white ring-4 ring-indigo-200 scale-110 shadow-sm'
                            : 'bg-slate-100 hover:bg-slate-200'
                        }`}
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Grade Level Selection */}
                <div className="space-y-1.5">
                  <label className="font-extrabold text-slate-700 block">
                    ระดับชั้น / กลุ่มวัยเรียน:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {(Object.keys(GRADE_LABELS) as GradeLevel[]).map((g) => (
                      <button
                        key={g}
                        type="button"
                        onClick={() => setGradeLevel(g)}
                        className={`p-2.5 rounded-xl border text-left font-bold transition-all text-xs flex items-center justify-between ${
                          gradeLevel === g
                            ? 'bg-indigo-50 border-indigo-500 text-indigo-800 ring-2 ring-indigo-200'
                            : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        <span>{GRADE_LABELS[g]}</span>
                        {gradeLevel === g && <Check className="w-4 h-4 text-indigo-600" />}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Initial Pet Selection */}
                <div className="space-y-1.5">
                  <label className="font-extrabold text-slate-700 block">
                    เลือกสัตว์เลี้ยงเริ่มต้นคู่หู:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {(['dragon', 'panda', 'jellyfish', 'hippo'] as PetType[]).map((petType) => {
                      const def = PET_CATALOG[petType];
                      return (
                        <button
                          key={petType}
                          type="button"
                          onClick={() => setInitialPet(petType)}
                          className={`p-2.5 rounded-2xl border text-center font-bold transition-all ${
                            initialPet === petType
                              ? 'bg-amber-50 border-amber-400 text-amber-900 ring-2 ring-amber-300'
                              : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                          }`}
                        >
                          <span className="text-3xl block mb-1">{def.emoji}</span>
                          <span className="text-xs block font-black">{def.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsAddingNew(false)}
                    className="flex-1 py-2.5 rounded-2xl bg-slate-100 text-slate-600 font-black text-xs hover:bg-slate-200 transition-colors"
                  >
                    ยกเลิก
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2.5 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-black text-xs shadow-md hover:brightness-105 active:scale-98 transition-all cursor-pointer"
                  >
                    บันทึกผู้เรียนคนใหม่ 🎉
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* LIST OF PROFILES */}
          <div className="space-y-3">
            <h5 className="text-xs font-black text-slate-600 uppercase tracking-wider">
              รายชื่อผู้เรียนทั้งหมดในเครื่องนี้
            </h5>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {profiles.map((p) => {
                const isActive = p.id === activeProfile.id;
                const isEditing = editingId === p.id;
                const petDef = PET_CATALOG[p.activePetType || 'dragon'];
                const currentPetData = p.pets?.[p.activePetType || 'dragon'] || p.pet;

                if (isEditing) {
                  return (
                    <div
                      key={p.id}
                      className="bg-white p-4 rounded-3xl border-2 border-indigo-400 shadow-md space-y-3"
                    >
                      <h6 className="font-black text-xs text-indigo-700">แก้ไขข้อมูลผู้เรียน</h6>
                      <div className="space-y-2 text-xs">
                        <input
                          type="text"
                          value={editName}
                          onChange={(e) => setEditName(e.target.value)}
                          placeholder="ชื่อผู้เรียน"
                          className="w-full px-3 py-1.5 border border-slate-200 rounded-xl font-bold"
                        />
                        <div className="flex gap-1 overflow-x-auto py-1">
                          {AVATAR_OPTIONS.slice(0, 8).map((av) => (
                            <button
                              key={av}
                              type="button"
                              onClick={() => setEditAvatar(av)}
                              className={`w-8 h-8 rounded-lg text-lg flex items-center justify-center ${
                                editAvatar === av ? 'bg-indigo-600 text-white' : 'bg-slate-100'
                              }`}
                            >
                              {av}
                            </button>
                          ))}
                        </div>
                        <div className="flex items-center gap-2 pt-1">
                          <button
                            onClick={() => setEditingId(null)}
                            className="px-3 py-1.5 rounded-xl bg-slate-100 text-slate-600 font-bold"
                          >
                            ยกเลิก
                          </button>
                          <button
                            onClick={() => handleSaveEdit(p.id)}
                            className="px-4 py-1.5 rounded-xl bg-indigo-600 text-white font-black"
                          >
                            บันทึก
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <div
                    key={p.id}
                    className={`p-4 rounded-3xl border-2 transition-all flex flex-col justify-between relative overflow-hidden bg-white ${
                      isActive
                        ? 'border-indigo-500 shadow-md ring-2 ring-indigo-200'
                        : 'border-slate-200 hover:border-slate-300 shadow-2xs'
                    }`}
                  >
                    {/* Top Row */}
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-3">
                        <div
                          onClick={() => handleSelectActive(p.id)}
                          className="w-13 h-13 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-slate-200 flex items-center justify-center text-3xl shadow-xs cursor-pointer hover:scale-105 transition-transform"
                        >
                          {p.avatar}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4
                              onClick={() => handleSelectActive(p.id)}
                              className="font-black text-sm text-slate-800 hover:text-indigo-600 cursor-pointer"
                            >
                              {p.name}
                            </h4>
                            {isActive && (
                              <span className="bg-emerald-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full flex items-center gap-1 shadow-2xs">
                                <CheckCircle2 className="w-3 h-3" />
                                ใช้งานอยู่
                              </span>
                            )}
                          </div>
                          <div className="text-[11px] font-bold text-slate-500 mt-0.5">
                            {p.gradeLevel ? GRADE_LABELS[p.gradeLevel] : 'นักเรียนคนเก่ง'}
                          </div>
                        </div>
                      </div>

                      {/* Edit / Delete actions */}
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => handleStartEdit(p)}
                          className="p-1.5 rounded-xl text-slate-400 hover:text-indigo-600 hover:bg-slate-100 transition-colors"
                          title="แก้ไขข้อมูล"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        {profiles.length > 1 && (
                          <button
                            onClick={() => handleDelete(p.id)}
                            className="p-1.5 rounded-xl text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                            title="ลบโปรไฟล์"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Stats & Pet Row */}
                    <div className="my-3 pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs">
                      <div className="bg-amber-50/70 border border-amber-200/60 p-2.5 rounded-2xl">
                        <div className="text-[10px] text-amber-700 font-bold">ดาวสะสมรวม</div>
                        <div className="text-base font-black text-amber-600 flex items-center gap-1">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
                          <span>{p.stars?.toLocaleString() || 0}</span>
                        </div>
                        <div className="text-[9px] text-slate-500 mt-0.5">
                          คณิต {p.subjectStars?.math || 0} • Eng {p.subjectStars?.english || 0}
                        </div>
                      </div>

                      <div className="bg-purple-50/70 border border-purple-200/60 p-2.5 rounded-2xl">
                        <div className="text-[10px] text-purple-700 font-bold">สัตว์เลี้ยงคู่หู</div>
                        <div className="text-xs font-black text-slate-800 flex items-center gap-1">
                          <span>{petDef.emoji}</span>
                          <span>{currentPetData?.name || petDef.name}</span>
                        </div>
                        <div className="text-[10px] font-extrabold text-purple-600 mt-0.5">
                          Lv.{currentPetData?.level || 1}
                        </div>
                      </div>
                    </div>

                    {/* Switch Button */}
                    {!isActive ? (
                      <button
                        onClick={() => handleSelectActive(p.id)}
                        className="w-full py-2 bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 text-slate-700 rounded-xl text-xs font-black transition-colors"
                      >
                        สลับเป็นผู้เรียนคนนี้ 👈
                      </button>
                    ) : (
                      <div className="text-center py-1.5 text-xs font-black text-emerald-600 bg-emerald-50 rounded-xl">
                        กำลังใช้งานโปรไฟล์นี้
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
