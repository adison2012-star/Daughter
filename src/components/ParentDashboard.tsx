'use client';

import React, { useState, useEffect } from 'react';
import { UserProfile } from '@/types';
import { Award, Bell, Calendar, CheckCircle2, Clock, Flame, Heart, KeyRound, Lock, Shield, Star, Unlock } from 'lucide-react';
import { sfx } from '@/lib/speech';
import { PARENT_PIN } from '@/lib/rewardSystem';

interface ParentDashboardProps {
  profiles: UserProfile[];
  onToggleParentOverride?: () => void;
}

export const ParentDashboard: React.FC<ParentDashboardProps> = ({
  profiles,
  onToggleParentOverride,
}) => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState('');
  const [reminderTime, setReminderTime] = useState('18:30');
  const [testNotificationSent, setTestNotificationSent] = useState(false);

  const isOverrideActive = profiles[0]?.parentOverrideUnlockAll ?? false;

  const handlePinDigit = (digit: string) => {
    sfx.playClick();
    if (pinInput.length >= 4) return;
    const nextPin = pinInput + digit;
    setPinInput(nextPin);
    setPinError('');

    if (nextPin.length === 4) {
      if (nextPin === PARENT_PIN) {
        sfx.playCorrect();
        setIsUnlocked(true);
        setPinInput('');
        setPinError('');
      } else {
        sfx.playSoftTryAgain();
        setPinError('รหัสผ่านไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง');
        setTimeout(() => setPinInput(''), 400);
      }
    }
  };

  const handlePinDelete = () => {
    sfx.playClick();
    setPinInput((prev) => prev.slice(0, -1));
    setPinError('');
  };

  const handlePinClear = () => {
    sfx.playClick();
    setPinInput('');
    setPinError('');
  };

  useEffect(() => {
    if (isUnlocked) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key >= '0' && e.key <= '9') {
        handlePinDigit(e.key);
      } else if (e.key === 'Backspace') {
        handlePinDelete();
      } else if (e.key === 'Escape' || e.key === 'c' || e.key === 'C') {
        handlePinClear();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isUnlocked, pinInput]);

  const handleSendTestNotification = () => {
    sfx.playCorrect();
    setTestNotificationSent(true);
    setTimeout(() => setTestNotificationSent(false), 4000);
  };

  if (!isUnlocked) {
    return (
      <div className="max-w-sm mx-auto my-10 p-6 sm:p-8 bg-white rounded-4xl border-2 border-indigo-200 shadow-xl text-center space-y-4 animate-fadeIn">
        <div className="w-16 h-16 rounded-3xl bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center text-3xl mx-auto shadow-inner">
          <KeyRound className="w-8 h-8 text-indigo-600" />
        </div>

        <div>
          <h4 className="text-base sm:text-lg font-black text-slate-900">
            โหมดคุณพ่อ (Parent Mode) 👨‍👧‍👧
          </h4>
          <p className="text-xs text-slate-500 font-semibold mt-1">
            กรุณากรอกรหัสผ่าน 4 หลัก เพื่อเข้าสู่แดชบอร์ดติดตามพัฒนาการ
          </p>
        </div>

        {/* 4 PIN Indicators */}
        <div className="flex justify-center gap-3.5 my-3">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className={`w-4 h-4 rounded-full transition-all duration-200 border ${
                pinInput.length > i
                  ? 'bg-indigo-600 border-indigo-600 scale-125 shadow-xs'
                  : 'bg-slate-100 border-slate-300'
              }`}
            />
          ))}
        </div>

        {pinError && (
          <div className="text-xs font-black text-rose-600 bg-rose-50 border border-rose-200 py-1.5 px-3 rounded-xl animate-shake">
            {pinError}
          </div>
        )}

        {/* Numeric Keypad */}
        <div className="grid grid-cols-3 gap-2.5 pt-2">
          {['1', '2', '3', '4', '5', '6', '7', '8', '9', 'C', '0', '⌫'].map((k) => (
            <button
              key={k}
              type="button"
              onClick={() => {
                if (k === 'C') handlePinClear();
                else if (k === '⌫') handlePinDelete();
                else handlePinDigit(k);
              }}
              className={`py-3.5 rounded-2xl text-base font-black transition-all active:scale-90 border shadow-2xs ${
                k === 'C' || k === '⌫'
                  ? 'bg-slate-100 hover:bg-slate-200 text-slate-600 border-slate-200 text-sm'
                  : 'bg-[#FAF8F5] hover:bg-indigo-50 text-slate-800 border-slate-200 hover:border-indigo-300'
              }`}
            >
              {k}
            </button>
          ))}
        </div>

        <p className="text-[11px] text-slate-400 font-bold pt-1">
          🔒 เฉพาะคุณพ่อคุณแม่เท่านั้น (Parent Only)
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-3xl">👨‍👧‍👧</span>
            <h2 className="text-xl sm:text-2xl font-black">แดชบอร์ดติดตามพัฒนาการสำหรับคุณพ่อ</h2>
          </div>
          <p className="text-indigo-200 text-xs">
            ดูภาพรวมการเรียนภาษาจีน ควบคุมการปลดล็อกด่าน และตั้งค่าระบบเตือนทบทวนความจำของลูกสาวทั้ง 2 คน
          </p>
        </div>

        <button
          onClick={() => {
            sfx.playClick();
            setIsUnlocked(false);
          }}
          className="px-3.5 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-black shadow-xs transition-all flex items-center gap-1.5 shrink-0"
        >
          <Lock className="w-3.5 h-3.5" />
          <span>ล็อคโหมดคุณพ่อ</span>
        </button>
      </div>

      {/* Dad Mode Override Control */}
      <div className="bg-amber-50 border-2 border-amber-300 rounded-3xl p-5 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-amber-200 text-amber-800 flex items-center justify-center text-2xl shadow-inner">
            {isOverrideActive ? <Unlock className="w-6 h-6 text-amber-700" /> : <Lock className="w-6 h-6 text-amber-700" />}
          </div>
          <div>
            <h3 className="font-black text-slate-800 text-sm sm:text-base flex items-center gap-2">
              <span>โหมดควบคุมการปลดล็อกระดับ (Progression Gating)</span>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                  isOverrideActive ? 'bg-amber-500 text-white' : 'bg-emerald-600 text-white'
                }`}
              >
                {isOverrideActive ? 'ปลดล็อกทุกระดับ (โหมดคุณพ่อ)' : 'ผ่านทีละระดับ (โหมดลูกสาว)'}
              </span>
            </h3>
            <p className="text-xs text-slate-600 mt-0.5">
              {isOverrideActive
                ? 'คุณพ่อกำลังเปิดดูทุก Level ได้อย่างอิสระ สามารถสลับกลับเพื่อให้เด็กๆ สอบผ่านทีละขั้นได้'
                : 'ระบบล็อก Level 2-6 ไว้ ต้องให้ลูกสาวฝึกฝนและทำแบบทดสอบผ่าน Level 1 ก่อนจึงจะปลดล็อก'}
            </p>
          </div>
        </div>

        <button
          onClick={() => {
            sfx.playCorrect();
            if (onToggleParentOverride) onToggleParentOverride();
          }}
          className={`px-4 py-2.5 rounded-xl text-xs font-black shadow-md transition-all whitespace-nowrap flex items-center gap-1.5 ${
            isOverrideActive
              ? 'bg-slate-900 text-white hover:bg-slate-800'
              : 'bg-amber-500 hover:bg-amber-600 text-white'
          }`}
        >
          {isOverrideActive ? <Lock className="w-4 h-4" /> : <Unlock className="w-4 h-4" />}
          <span>{isOverrideActive ? 'สลับกลับเป็น "ล็อกตามระดับ"' : 'ปลดล็อกทุกระดับเพื่อทดสอบ'}</span>
        </button>
      </div>

      {/* Side-by-side Sibling Cards */}
      <div className="grid md:grid-cols-2 gap-4">
        {profiles.map((p) => {
          const unlocked = p.unlockedLevels || [1];
          const highestLevel = Math.max(...unlocked);

          return (
            <div
              key={p.id}
              className="bg-white rounded-3xl p-6 shadow-xl border border-slate-200 flex flex-col justify-between"
            >
              <div>
                {/* Profile Top */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-rose-100 to-amber-100 flex items-center justify-center text-3xl shadow-sm border border-rose-200">
                      {p.avatar}
                    </div>
                    <div>
                      <h3 className="font-black text-lg text-slate-800">{p.name}</h3>
                      <p className="text-xs text-rose-600 font-bold">{p.nickname}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="bg-emerald-50 text-emerald-700 text-xs px-2.5 py-1 rounded-full font-extrabold flex items-center gap-1 border border-emerald-200">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Level {highestLevel} ผ่านแล้ว</span>
                    </span>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-2 my-4 text-center">
                  <div className="bg-amber-50 p-3 rounded-2xl border border-amber-200">
                    <Flame className="w-5 h-5 text-amber-500 mx-auto mb-1" />
                    <p className="text-lg font-black text-slate-800">{p.streak} วัน</p>
                    <p className="text-[10px] text-slate-500 font-bold">ต่อเนื่อง (Streak)</p>
                  </div>

                  <div className="bg-yellow-50 p-3 rounded-2xl border border-yellow-200">
                    <Star className="w-5 h-5 text-yellow-500 fill-yellow-500 mx-auto mb-1" />
                    <p className="text-lg font-black text-slate-800">{p.stars}</p>
                    <p className="text-[10px] text-slate-500 font-bold">ดาวสะสม</p>
                  </div>

                  <div className="bg-rose-50 p-3 rounded-2xl border border-rose-200">
                    <Award className="w-5 h-5 text-rose-500 mx-auto mb-1" />
                    <p className="text-lg font-black text-slate-800">L{highestLevel} / L6</p>
                    <p className="text-[10px] text-slate-500 font-bold">ระดับปัจจุบัน</p>
                  </div>
                </div>

                {/* Pet Info */}
                <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl">🐾</span>
                    <div className="text-xs">
                      <p className="font-bold text-slate-800">{p.pet.name}</p>
                      <p className="text-slate-500">ระดับที่ {p.pet.stage} ({p.pet.experience} EXP)</p>
                    </div>
                  </div>
                  <div className="text-xs font-bold text-rose-600 flex items-center gap-1">
                    <Heart className="w-4 h-4 fill-rose-500" />
                    <span>{p.pet.happiness}%</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 flex justify-between items-center">
                <span>เข้าใช้งานล่าสุด: วันนี้</span>
                <span className="text-emerald-600 font-bold">
                  ระดับที่ปลดล็อก: {unlocked.map((l) => `L${l}`).join(', ')}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Smart Reminder / Habit Notification Settings */}
      <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-200">
        <div className="flex items-center gap-2 mb-3">
          <Bell className="w-5 h-5 text-rose-500" />
          <h3 className="text-lg font-black text-slate-800">
            ระบบผู้ช่วยแจ้งเตือนการทบทวนคำศัพท์ (Smart Study Reminder)
          </h3>
        </div>

        <p className="text-xs text-slate-600 mb-4 leading-relaxed">
          ระบบจะส่งข้อความแจ้งเตือนที่น่ารักและอบอุ่น เพื่อชวนน้องๆ เข้ามาฝึกเขียนตัวอักษรจีนวันละ 10-15 นาที 
          โดยไม่ให้รู้สึกว่าถูกบังคับ
        </p>

        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Clock className="w-6 h-6 text-indigo-600" />
            <div>
              <p className="font-bold text-sm text-slate-800">เวลาแจ้งเตือนประจำวัน</p>
              <p className="text-xs text-slate-500">เวลาหลังเลิกเรียน หรือก่อนเข้านอน</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="time"
              value={reminderTime}
              onChange={(e) => setReminderTime(e.target.value)}
              className="bg-white border border-slate-300 font-bold text-slate-800 px-3 py-1.5 rounded-xl text-sm"
            />
            <button
              onClick={handleSendTestNotification}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-colors shadow-sm whitespace-nowrap"
            >
              ทดสอบส่งข้อความเตือน
            </button>
          </div>
        </div>

        {/* Test Notification Preview */}
        {testNotificationSent && (
          <div className="mt-4 p-4 bg-emerald-50 border border-emerald-200 rounded-2xl animate-fade-in flex items-start gap-3">
            <span className="text-2xl">📱</span>
            <div>
              <p className="font-black text-xs text-emerald-900">
                ตัวอย่างการแจ้งเตือนที่จะเด้งบนมือถือ/LINE Bot:
              </p>
              <p className="text-xs text-emerald-800 mt-1 leading-relaxed">
                "🐼 เสี่ยวหลงกับเป่าเปาคิดถึงแล้วจ้า! วันนี้มีคำศัพท์แสนสนุก 3 คำรอให้สองพี่น้องมาช่วยเขียนนะ มารับ 10 ดาวกันเถอะ! ✨"
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
