'use client';

import React, { useState, useEffect } from 'react';
import {
  UserProfile,
  RewardItem,
  RedemptionRecord,
  RewardCategory,
  SubjectType,
  RedemptionStatus,
} from '@/types';
import {
  PARENT_PIN,
  DEFAULT_REWARDS,
  REWARD_CATEGORIES,
  REWARD_EMOJI_GROUPS,
  getStoredRewards,
  addRewardItem,
  updateRewardItem,
  deleteRewardItem,
  resetToDefaultRewards,
  getRedemptions,
  redeemReward,
  updateRedemptionStatus,
} from '@/lib/rewardSystem';
import { sfx } from '@/lib/speech';
import confetti from 'canvas-confetti';
import {
  Gift,
  Ticket,
  ShieldCheck,
  X,
  Sparkles,
  Star,
  CheckCircle2,
  Clock,
  Plus,
  Trash2,
  AlertCircle,
  Coins,
  ChevronRight,
  Smile,
  HeartHandshake,
  Lock,
  Unlock,
  Edit3,
  RotateCcw,
  KeyRound,
  Save,
} from 'lucide-react';

interface RewardShopModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeProfile: UserProfile;
  profiles: UserProfile[];
  onProfileUpdated: (updated: UserProfile) => void;
}

export const RewardShopModal: React.FC<RewardShopModalProps> = ({
  isOpen,
  onClose,
  activeProfile,
  profiles,
  onProfileUpdated,
}) => {
  const [activeTab, setActiveTab] = useState<'catalog' | 'tickets' | 'parent'>('catalog');
  const [rewards, setRewards] = useState<RewardItem[]>(DEFAULT_REWARDS);
  const [redemptions, setRedemptions] = useState<RedemptionRecord[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<RewardCategory | 'all'>('all');

  // Parent PIN 9999 Security States
  const [isParentUnlocked, setIsParentUnlocked] = useState(false);
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState('');

  // Parent Add & Edit Reward States
  const [editingRewardId, setEditingRewardId] = useState<string | null>(null);
  const [newTitle, setNewTitle] = useState('');
  const [newCost, setNewCost] = useState(1500);
  const [newEmoji, setNewEmoji] = useState('🎁');
  const [newDesc, setNewDesc] = useState('');
  const [newCategory, setNewCategory] = useState<RewardCategory>('treat');

  // Emoji Picker Modal State
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);
  const [activeEmojiGroupIdx, setActiveEmojiGroupIdx] = useState(0);

  // Redemption confirm modal state
  const [confirmItem, setConfirmItem] = useState<RewardItem | null>(null);
  const [selectedWallet, setSelectedWallet] = useState<SubjectType | 'all'>('all');
  const [redeemNotes, setRedeemNotes] = useState('');
  const [redeemSuccessTicket, setRedeemSuccessTicket] = useState<RedemptionRecord | null>(null);

  useEffect(() => {
    if (isOpen) {
      setRewards(getStoredRewards());
      setRedemptions(getRedemptions());
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const myRedemptions = redemptions.filter((r) => r.userId === activeProfile.id);
  const pendingCount = redemptions.filter((r) => r.status === 'pending').length;

  const filteredRewards =
    selectedCategory === 'all'
      ? rewards
      : rewards.filter((r) => r.category === selectedCategory);

  const getWalletAvailableStars = (wallet: SubjectType | 'all'): number => {
    if (wallet === 'all') return activeProfile.stars || 0;
    return activeProfile.subjectStars?.[wallet] || 0;
  };

  // ==========================================
  // PIN Verification Handlers (9999)
  // ==========================================
  const handlePinDigit = (digit: string) => {
    sfx.playClick();
    if (pinInput.length >= 4) return;
    const newPin = pinInput + digit;
    setPinInput(newPin);
    setPinError('');

    if (newPin.length === 4) {
      if (newPin === PARENT_PIN) {
        sfx.playCorrect();
        setIsParentUnlocked(true);
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

  // ==========================================
  // Reward Management Handlers (Add / Edit / Delete)
  // ==========================================
  const handleSaveReward = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || newCost <= 0) return;

    if (editingRewardId) {
      // Update existing item (default or custom)
      const updated = updateRewardItem(editingRewardId, {
        title: newTitle.trim(),
        description: newDesc.trim() || 'ของรางวัลแสนพิเศษ',
        starsCost: Number(newCost),
        category: newCategory,
        emoji: newEmoji.trim() || '🎁',
      });
      if (updated) {
        setRewards(getStoredRewards());
        sfx.playCorrect();
        setEditingRewardId(null);
        setNewTitle('');
        setNewDesc('');
        setNewCost(1500);
        setNewEmoji('🎁');
      }
    } else {
      // Add new reward item
      addRewardItem({
        title: newTitle.trim(),
        description: newDesc.trim() || 'รางวัลพิเศษจากคุณพ่อคุณแม่',
        starsCost: Number(newCost),
        category: newCategory,
        emoji: newEmoji.trim() || '🎁',
      });
      setRewards(getStoredRewards());
      sfx.playCorrect();
      setNewTitle('');
      setNewDesc('');
      setNewCost(1500);
      setNewEmoji('🎁');
    }
  };

  const handleStartEditReward = (reward: RewardItem) => {
    sfx.playClick();
    setEditingRewardId(reward.id);
    setNewTitle(reward.title);
    setNewDesc(reward.description);
    setNewCost(reward.starsCost);
    setNewCategory(reward.category);
    setNewEmoji(reward.emoji);

    const formEl = document.getElementById('parent-reward-form');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleCancelEdit = () => {
    sfx.playClick();
    setEditingRewardId(null);
    setNewTitle('');
    setNewDesc('');
    setNewCost(1500);
    setNewEmoji('🎁');
  };

  const handleDeleteReward = (reward: RewardItem) => {
    if (
      confirm(
        `คุณพ่อคุณแม่ต้องการลบของรางวัล "${reward.title}" ออกจากตู้แลกของขวัญใช่หรือไม่?`
      )
    ) {
      deleteRewardItem(reward.id);
      setRewards(getStoredRewards());
      sfx.playClick();
      if (editingRewardId === reward.id) {
        handleCancelEdit();
      }
    }
  };

  const handleResetDefaults = () => {
    if (
      confirm(
        'ต้องการกู้คืนรายการของรางวัลเริ่มต้นทั้ง 8 รายการกลับมาใช่หรือไม่?'
      )
    ) {
      const res = resetToDefaultRewards();
      setRewards(res);
      sfx.playCorrect();
      handleCancelEdit();
    }
  };

  // ==========================================
  // Redemption Handlers (Child & Parent)
  // ==========================================
  const handleOpenRedeem = (reward: RewardItem) => {
    sfx.playClick();
    setConfirmItem(reward);
    setRedeemNotes('');
    setSelectedWallet('all');
  };

  const handleConfirmRedeem = () => {
    if (!confirmItem) return;

    const res = redeemReward(activeProfile, confirmItem, selectedWallet, redeemNotes);
    if (!res.success) {
      sfx.playSoftTryAgain();
      alert(res.error || 'ไม่สามารถแลกรางวัลได้');
      return;
    }

    if (res.updatedProfile && res.redemption) {
      onProfileUpdated(res.updatedProfile);
      setRedemptions((prev) => [res.redemption!, ...prev]);
      setConfirmItem(null);
      setRedeemSuccessTicket(res.redemption);

      sfx.playCorrect();
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  };

  const handleParentUpdateStatus = (ticketId: string, status: RedemptionStatus) => {
    sfx.playCorrect();
    const updated = updateRedemptionStatus(ticketId, status);
    if (updated) {
      setRedemptions(getRedemptions());
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/65 backdrop-blur-sm animate-fadeIn font-sans">
      <div className="bg-gradient-to-b from-amber-50/60 via-slate-50 to-white w-full max-w-4xl max-h-[92vh] rounded-3xl shadow-2xl border-2 border-white/60 overflow-hidden flex flex-col relative">
        {/* Top Header */}
        <div className="px-5 py-4 bg-white/95 backdrop-blur-md border-b border-slate-100 flex items-center justify-between sticky top-0 z-30 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-400 to-rose-500 text-white flex items-center justify-center text-2xl shadow-md">
              🎁
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-black text-slate-800">
                  ศูนย์รวมของรางวัล & ตู้แลกของขวัญ
                </h3>
                <span className="text-[10px] bg-amber-500 text-white font-black px-2 py-0.5 rounded-full shadow-xs">
                  Rewards Hub
                </span>
              </div>
              <p className="text-[11px] font-bold text-slate-500 flex items-center gap-1.5">
                <span>ผู้เรียน:</span>
                <span className="text-slate-800 font-extrabold">
                  {activeProfile.name} {activeProfile.avatar}
                </span>
                <span>• มีดาวรวม:</span>
                <span className="text-amber-600 font-black">
                  {activeProfile.stars?.toLocaleString() || 0} ⭐
                </span>
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              sfx.playClick();
              onClose();
            }}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-rose-100 text-slate-500 hover:text-rose-600 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Child Stars Breakdown Bar */}
        <div className="bg-gradient-to-r from-amber-50 via-rose-50 to-indigo-50 border-b border-amber-100/60 px-5 py-2.5 flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2 font-black text-slate-700">
            <Coins className="w-4 h-4 text-amber-500" />
            <span>กระเป๋าดาวสะสมของ {activeProfile.nickname || activeProfile.name}:</span>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <span className="bg-white/80 border border-indigo-200/60 px-2.5 py-1 rounded-xl font-bold text-indigo-700 shadow-2xs">
              📐 คณิต: <span className="font-black">{activeProfile.subjectStars?.math || 0}</span> ⭐
            </span>
            <span className="bg-white/80 border border-sky-200/60 px-2.5 py-1 rounded-xl font-bold text-sky-700 shadow-2xs">
              🇬🇧 อังกฤษ: <span className="font-black">{activeProfile.subjectStars?.english || 0}</span> ⭐
            </span>
            <span className="bg-white/80 border border-rose-200/60 px-2.5 py-1 rounded-xl font-bold text-rose-700 shadow-2xs">
              🇨🇳 จีน: <span className="font-black">{activeProfile.subjectStars?.chinese || 0}</span> ⭐
            </span>
            <span className="bg-white/80 border border-teal-200/60 px-2.5 py-1 rounded-xl font-bold text-teal-700 shadow-2xs">
              🔬 วิทย์: <span className="font-black">{activeProfile.subjectStars?.science || 0}</span> ⭐
            </span>
            <span className="bg-amber-500 text-white px-3 py-1 rounded-xl font-black shadow-xs">
              รวม: {activeProfile.stars || 0} ⭐
            </span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="px-5 pt-3 border-b border-slate-100 bg-white flex items-center gap-2">
          <button
            onClick={() => {
              sfx.playClick();
              setActiveTab('catalog');
            }}
            className={`px-4 py-2 text-xs font-black rounded-t-xl transition-all flex items-center gap-1.5 border-b-2 ${
              activeTab === 'catalog'
                ? 'border-amber-500 text-amber-600 bg-amber-50/50'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Gift className="w-4 h-4" />
            <span>คลังของรางวัล ({rewards.length})</span>
          </button>

          <button
            onClick={() => {
              sfx.playClick();
              setActiveTab('tickets');
            }}
            className={`px-4 py-2 text-xs font-black rounded-t-xl transition-all flex items-center gap-1.5 border-b-2 ${
              activeTab === 'tickets'
                ? 'border-rose-500 text-rose-600 bg-rose-50/50'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Ticket className="w-4 h-4" />
            <span>ตั๋วรางวัลของฉัน ({myRedemptions.length})</span>
          </button>

          <button
            onClick={() => {
              sfx.playClick();
              setActiveTab('parent');
            }}
            className={`px-4 py-2 text-xs font-black rounded-t-xl transition-all flex items-center gap-1.5 border-b-2 relative ${
              activeTab === 'parent'
                ? 'border-indigo-600 text-indigo-700 bg-indigo-50/50'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            {isParentUnlocked ? (
              <Unlock className="w-4 h-4 text-emerald-600" />
            ) : (
              <Lock className="w-4 h-4 text-indigo-600" />
            )}
            <span>โหมดผู้ปกครอง</span>
            {pendingCount > 0 && (
              <span className="w-5 h-5 bg-rose-500 text-white text-[10px] rounded-full flex items-center justify-center font-black animate-pulse">
                {pendingCount}
              </span>
            )}
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1">
          {/* ========================================================
              TAB 1: REWARD CATALOG (Child View)
             ======================================================== */}
          {activeTab === 'catalog' && (
            <div className="space-y-4">
              {/* Category Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-black whitespace-nowrap transition-all ${
                    selectedCategory === 'all'
                      ? 'bg-slate-800 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  ทั้งหมด ({rewards.length})
                </button>
                {REWARD_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-black whitespace-nowrap transition-all flex items-center gap-1.5 ${
                      selectedCategory === cat.id
                        ? 'bg-amber-500 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    <span>{cat.icon}</span>
                    <span>{cat.label}</span>
                  </button>
                ))}
              </div>

              {/* Reward Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
                {filteredRewards.map((reward) => {
                  const canAfford = (activeProfile.stars || 0) >= reward.starsCost;
                  const percentOfGoal = Math.min(
                    100,
                    Math.round(((activeProfile.stars || 0) / reward.starsCost) * 100)
                  );

                  return (
                    <div
                      key={reward.id}
                      className={`p-4 rounded-3xl border-2 transition-all flex flex-col justify-between relative overflow-hidden bg-white shadow-xs hover:shadow-md ${
                        canAfford ? 'border-amber-300' : 'border-slate-200/80 opacity-90'
                      }`}
                    >
                      {reward.isCustom && (
                        <div className="absolute top-2 right-2 bg-indigo-50 border border-indigo-200 text-indigo-700 text-[10px] font-black px-2 py-0.5 rounded-full">
                          คุณพ่อคุณแม่ตั้งให้ 💖
                        </div>
                      )}

                      <div className="space-y-2.5">
                        <div className="flex items-start gap-3">
                          <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-3xl shadow-2xs shrink-0">
                            {reward.emoji}
                          </div>
                          <div className="flex-1 min-w-0 pr-6">
                            <h4 className="font-black text-sm text-slate-800 line-clamp-2 leading-tight">
                              {reward.title}
                            </h4>
                            <p className="text-[11px] font-medium text-slate-500 line-clamp-2 mt-0.5">
                              {reward.description}
                            </p>
                          </div>
                        </div>

                        {/* Progress Bar towards stars needed */}
                        <div className="space-y-1">
                          <div className="flex items-center justify-between text-[11px] font-extrabold">
                            <span className="text-amber-600 flex items-center gap-1">
                              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                              <span>{reward.starsCost.toLocaleString()} ดาว</span>
                            </span>
                            <span
                              className={`text-[10px] ${
                                canAfford ? 'text-emerald-600' : 'text-slate-400'
                              }`}
                            >
                              {canAfford ? 'พร้อมแลกแล้ว 🎉' : `มีแล้ว ${percentOfGoal}%`}
                            </span>
                          </div>

                          <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                            <div
                              className={`h-full rounded-full transition-all duration-500 ${
                                canAfford
                                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500'
                                  : 'bg-gradient-to-r from-amber-400 to-orange-400'
                              }`}
                              style={{ width: `${percentOfGoal}%` }}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                        <span className="text-[10px] font-bold text-slate-400">
                          {canAfford
                            ? 'กดแลกตั๋วเพื่อรับรางวัล'
                            : `ขาดอีก ${(reward.starsCost - (activeProfile.stars || 0)).toLocaleString()} ดาว`}
                        </span>

                        <button
                          onClick={() => handleOpenRedeem(reward)}
                          disabled={!canAfford}
                          className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition-all flex items-center gap-1 shadow-xs ${
                            canAfford
                              ? 'bg-gradient-to-r from-amber-500 to-rose-500 hover:brightness-105 active:scale-95 text-white cursor-pointer'
                              : 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200'
                          }`}
                        >
                          <Gift className="w-3.5 h-3.5" />
                          <span>แลกรางวัล</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ========================================================
              TAB 2: CHILD REDEEMED TICKETS
             ======================================================== */}
          {activeTab === 'tickets' && (
            <div className="space-y-4">
              <div className="bg-rose-50 border border-rose-200 rounded-2xl p-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🎫</span>
                  <div>
                    <h4 className="text-xs font-black text-rose-950">
                      ตั๋วรางวัลของ {activeProfile.name} ({myRedemptions.length} ใบ)
                    </h4>
                    <p className="text-[11px] text-rose-700 font-semibold">
                      เมื่อแลกของรางวัลแล้ว ตั๋วจะมาอยู่ที่นี่ นำตั๋วนี้ไปแสดงให้คุณพ่อคุณแม่ดูได้เลยจ้า!
                    </p>
                  </div>
                </div>
              </div>

              {myRedemptions.length === 0 ? (
                <div className="py-12 text-center space-y-3 bg-white rounded-3xl border border-dashed border-slate-200">
                  <span className="text-5xl block opacity-60">🎟️</span>
                  <div className="space-y-1">
                    <h5 className="font-black text-sm text-slate-700">
                      ยังไม่มีตั๋วรางวัลที่แลกไว้
                    </h5>
                    <p className="text-xs text-slate-400 font-medium max-w-xs mx-auto">
                      สะสมดาวจากการฝึกฝน 4 วิชา แล้วกลับมาเลือกแลกของรางวัลที่ชอบได้เลย!
                    </p>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {myRedemptions.map((ticket) => (
                    <div
                      key={ticket.id}
                      className="bg-white p-4 rounded-3xl border-2 border-slate-200/80 shadow-xs flex flex-col justify-between relative overflow-hidden"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <span className="text-4xl">{ticket.rewardEmoji}</span>
                          <div>
                            <h5 className="font-black text-sm text-slate-800">
                              {ticket.rewardTitle}
                            </h5>
                            <span className="text-[10px] text-slate-400 font-mono">
                              รหัส: #{ticket.id.slice(-6)}
                            </span>
                          </div>
                        </div>

                        <span
                          className={`text-[10px] font-black px-2.5 py-1 rounded-full ${
                            ticket.status === 'completed'
                              ? 'bg-emerald-100 text-emerald-800'
                              : ticket.status === 'approved'
                              ? 'bg-indigo-100 text-indigo-800'
                              : 'bg-amber-100 text-amber-800'
                          }`}
                        >
                          {ticket.status === 'completed'
                            ? 'ได้รับของขวัญแล้ว 🎁'
                            : ticket.status === 'approved'
                            ? 'พ่อแม่อนุมัติแล้ว 👍'
                            : 'รอดำเนินการ ⏳'}
                        </span>
                      </div>

                      <div className="mt-3 pt-3 border-t border-dashed border-slate-200 flex items-center justify-between text-xs">
                        <span className="text-slate-500 font-medium">
                          จ่ายไป: <strong className="text-amber-600">{ticket.starsPaid} ⭐</strong>
                        </span>
                        <span className="text-slate-400 text-[10px]">
                          {new Date(ticket.redeemedAt).toLocaleDateString('th-TH')}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* ========================================================
              TAB 3: PARENT DASHBOARD & MANAGEMENT (Protected by PIN 9999)
             ======================================================== */}
          {activeTab === 'parent' && (
            <div className="space-y-6">
              {!isParentUnlocked ? (
                /* ==========================================
                   PIN 9999 ENTRY SCREEN
                   ========================================== */
                <div className="max-w-sm mx-auto my-6 p-6 sm:p-8 bg-white rounded-4xl border-2 border-indigo-200 shadow-xl text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-3xl bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center text-3xl mx-auto shadow-inner">
                    <KeyRound className="w-8 h-8 text-indigo-600" />
                  </div>

                  <div>
                    <h4 className="text-base sm:text-lg font-black text-slate-900">
                      โหมดผู้ปกครอง (Parent Mode)
                    </h4>
                    <p className="text-xs text-slate-500 font-semibold mt-1">
                      กรุณากรอกรหัสผ่าน 4 หลัก เพื่อเพิ่ม ลด หรือแก้ไขของรางวัล
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
                    {['1', '2', '3', '4', '5', '6', '7', '8', '9', 'C', '0', '⌫'].map(
                      (k) => (
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
                      )
                    )}
                  </div>

                  <p className="text-[11px] text-slate-400 font-bold pt-1">
                    🔒 เฉพาะคุณพ่อคุณแม่เท่านั้น (Parent Only)
                  </p>
                </div>
              ) : (
                /* ==========================================
                   UNLOCKED PARENT REWARD MANAGEMENT DASHBOARD
                   ========================================== */
                <div className="space-y-6 animate-fadeIn">
                  {/* Top Bar with Lock & Reset Buttons */}
                  <div className="bg-gradient-to-r from-indigo-700 via-purple-700 to-rose-700 rounded-3xl p-5 text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-emerald-300" />
                        <h4 className="text-base font-black">
                          แดชบอร์ดจัดการของรางวัลสำหรับผู้ปกครอง 🛡️
                        </h4>
                      </div>
                      <p className="text-xs text-indigo-100">
                        คุณพ่อคุณแม่สามารถเพิ่มของรางวัลใหม่ ปรับลดหรือแก้ไขคะแนนดาวของรางวัลเดิม และลบรางวัลที่ไม่ต้องการได้อิสระ
                      </p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={handleResetDefaults}
                        className="px-3.5 py-2 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-black border border-white/20 transition-all flex items-center gap-1.5"
                        title="กู้คืนรายการของรางวัลเริ่มต้น"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>กู้คืนของรางวัลเริ่มต้น</span>
                      </button>

                      <button
                        onClick={() => {
                          sfx.playClick();
                          setIsParentUnlocked(false);
                          setActiveTab('catalog');
                        }}
                        className="px-3.5 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-black shadow-xs transition-all flex items-center gap-1.5"
                      >
                        <Lock className="w-3.5 h-3.5" />
                        <span>ล็อคโหมดผู้ปกครอง</span>
                      </button>
                    </div>
                  </div>

                  {/* Pending Approvals Section */}
                  <div className="space-y-3">
                    <h5 className="text-xs font-black text-slate-700 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-amber-500" />
                      <span>
                        รายการตั๋วรางวัลที่รอดำเนินการ ({pendingCount})
                      </span>
                    </h5>

                    {pendingCount === 0 ? (
                      <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-xs font-bold text-emerald-800 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>ไม่มีรายการรออนุมัติ คุณพ่อคุณแม่ตรวจเช็กครบเรียบร้อยแล้วจ้า!</span>
                      </div>
                    ) : (
                      <div className="space-y-2.5">
                        {redemptions
                          .filter((r) => r.status === 'pending')
                          .map((ticket) => (
                            <div
                              key={ticket.id}
                              className="bg-white p-4 rounded-2xl border-2 border-amber-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                            >
                              <div className="flex items-center gap-3">
                                <span className="text-3xl">{ticket.rewardEmoji}</span>
                                <div>
                                  <div className="flex items-center gap-2">
                                    <span className="font-black text-sm text-slate-800">
                                      {ticket.userName} {ticket.userAvatar}
                                    </span>
                                    <span className="text-xs text-slate-500">
                                      แลก &ldquo;<strong>{ticket.rewardTitle}</strong>&rdquo;
                                    </span>
                                  </div>
                                  <div className="text-[11px] text-slate-500 font-medium">
                                    หักดาวไป: <span className="text-amber-600 font-bold">{ticket.starsPaid} ⭐</span>
                                    {ticket.notes && ` (หมายเหตุ: ${ticket.notes})`}
                                  </div>
                                </div>
                              </div>

                              <div className="flex items-center gap-2 shrink-0">
                                <button
                                  onClick={() => handleParentUpdateStatus(ticket.id, 'approved')}
                                  className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-black transition-all shadow-xs"
                                >
                                  อนุมัติ 👍
                                </button>
                                <button
                                  onClick={() => handleParentUpdateStatus(ticket.id, 'completed')}
                                  className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-black transition-all shadow-xs"
                                >
                                  มอบของรางวัลแล้ว 🎁
                                </button>
                              </div>
                            </div>
                          ))}
                      </div>
                    )}
                  </div>

                  {/* Add / Edit Reward Form */}
                  <div
                    id="parent-reward-form"
                    className={`bg-white p-5 sm:p-6 rounded-3xl border-2 transition-all shadow-xs space-y-4 ${
                      editingRewardId
                        ? 'border-indigo-400 ring-2 ring-indigo-200'
                        : 'border-slate-200/80'
                    }`}
                  >
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <h5 className="text-xs sm:text-sm font-black text-slate-800 flex items-center gap-2">
                        {editingRewardId ? (
                          <>
                            <Edit3 className="w-4 h-4 text-indigo-600" />
                            <span>แก้ไขของรางวัล (Edit Reward)</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-4 h-4 text-rose-500" />
                            <span>เพิ่มของรางวัลใหม่ (+ Add Reward)</span>
                          </>
                        )}
                      </h5>

                      {editingRewardId && (
                        <button
                          type="button"
                          onClick={handleCancelEdit}
                          className="px-3 py-1 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-black transition-colors"
                        >
                          ยกเลิกการแก้ไข
                        </button>
                      )}
                    </div>

                    <form onSubmit={handleSaveReward} className="space-y-4 text-xs">
                      {/* Row 1: Title, Stars Cost */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="sm:col-span-2 space-y-1">
                          <label className="font-extrabold text-slate-600 block">
                            ชื่อของรางวัล
                          </label>
                          <input
                            type="text"
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                            placeholder="เช่น ไอศกรีม 1 ถ้วย, ชานมไข่มุก, ชุดเลโก้ชิ้นโปรด"
                            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-rose-500 font-bold text-slate-800"
                            required
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="font-extrabold text-slate-600 block">
                            จำนวนดาวที่ต้องใช้ (ปรับเพิ่ม-ลดได้)
                          </label>
                          <input
                            type="number"
                            min="10"
                            max="1000000"
                            step="10"
                            value={newCost}
                            onChange={(e) => setNewCost(Number(e.target.value))}
                            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-rose-500 font-bold text-slate-800"
                            required
                          />
                        </div>
                      </div>

                      {/* Row 2: Emoji Picker Button, Category, Description */}
                      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                        {/* Emoji Picker Selector */}
                        <div className="sm:col-span-3 space-y-1">
                          <label className="font-extrabold text-slate-600 block">
                            ไอคอนอีโมจิ
                          </label>
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => {
                                sfx.playClick();
                                setIsEmojiPickerOpen(true);
                              }}
                              className="w-12 h-12 rounded-2xl bg-[#FAF8F5] border-2 border-slate-200 hover:border-amber-400 flex items-center justify-center text-3xl shadow-2xs hover:scale-105 active:scale-95 transition-all"
                              title="คลิกเพื่อเลือกอีโมจิ"
                            >
                              <span>{newEmoji}</span>
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                sfx.playClick();
                                setIsEmojiPickerOpen(true);
                              }}
                              className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-black text-xs transition-colors flex items-center gap-1"
                            >
                              <span>เลือกรูป 🎨</span>
                            </button>
                          </div>
                        </div>

                        {/* Category */}
                        <div className="sm:col-span-4 space-y-1">
                          <label className="font-extrabold text-slate-600 block">
                            หมวดหมู่รางวัล
                          </label>
                          <select
                            value={newCategory}
                            onChange={(e) => setNewCategory(e.target.value as RewardCategory)}
                            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-rose-500 font-bold text-slate-800"
                          >
                            {REWARD_CATEGORIES.map((c) => (
                              <option key={c.id} value={c.id}>
                                {c.icon} {c.label}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Description */}
                        <div className="sm:col-span-5 space-y-1">
                          <label className="font-extrabold text-slate-600 block">
                            คำอธิบายเพิ่มเติม
                          </label>
                          <input
                            type="text"
                            value={newDesc}
                            onChange={(e) => setNewDesc(e.target.value)}
                            placeholder="เช่น รสช็อกโกแลต, ทริปวันเสาร์นี้นะคะ"
                            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-rose-500 font-bold text-slate-800"
                          />
                        </div>
                      </div>

                      {/* Action Button */}
                      <div className="pt-2 flex items-center gap-2.5">
                        <button
                          type="submit"
                          className="px-6 py-2.5 bg-gradient-to-r from-rose-500 to-amber-500 hover:brightness-105 active:scale-98 text-white font-black rounded-2xl shadow-sm cursor-pointer flex items-center gap-2 transition-all"
                        >
                          {editingRewardId ? (
                            <>
                              <Save className="w-4 h-4" />
                              <span>บันทึกการแก้ไขรางวัล</span>
                            </>
                          ) : (
                            <>
                              <Plus className="w-4 h-4" />
                              <span>บันทึกของรางวัลใหม่</span>
                            </>
                          )}
                        </button>

                        {editingRewardId && (
                          <button
                            type="button"
                            onClick={handleCancelEdit}
                            className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-600 font-black rounded-2xl transition-colors"
                          >
                            ยกเลิก
                          </button>
                        )}
                      </div>
                    </form>
                  </div>

                  {/* Manage ALL Rewards (Delete & Edit) */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h6 className="text-xs font-black text-slate-700 flex items-center gap-1.5">
                        <Gift className="w-4 h-4 text-indigo-600" />
                        <span>
                          รายการของรางวัลทั้งหมดในตู้ ({rewards.length} รายการ - สามารถแก้ไข หรือลบได้):
                        </span>
                      </h6>
                      <span className="text-[10px] text-slate-400 font-bold">
                        กด ✏️ เพื่อแก้ไขดาว/ชื่อ หรือ 🗑️ เพื่อลบออก
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {rewards.map((r) => (
                        <div
                          key={r.id}
                          className={`p-3.5 bg-white border-2 rounded-2xl flex items-center justify-between gap-3 shadow-2xs transition-all ${
                            editingRewardId === r.id
                              ? 'border-indigo-500 bg-indigo-50/20 ring-2 ring-indigo-200'
                              : 'border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <span className="text-3xl shrink-0">{r.emoji}</span>
                            <div className="min-w-0">
                              <div className="font-black text-xs text-slate-800 truncate">
                                {r.title}
                              </div>
                              <div className="text-[11px] text-amber-600 font-black flex items-center gap-1.5 mt-0.5">
                                <span>{r.starsCost.toLocaleString()} ดาว</span>
                                {r.isCustom && (
                                  <span className="text-[9px] bg-indigo-50 text-indigo-700 px-1.5 py-0.2 rounded-md font-bold">
                                    กำหนดเอง
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-1 shrink-0">
                            <button
                              onClick={() => handleStartEditReward(r)}
                              className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-xl transition-colors"
                              title="แก้ไขของรางวัลนี้"
                            >
                              <Edit3 className="w-4 h-4" />
                            </button>

                            <button
                              onClick={() => handleDeleteReward(r)}
                              className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors"
                              title="ลบของรางวัลนี้"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* ========================================================
            EMOJI PICKER MODAL POPUP
           ======================================================== */}
        {isEmojiPickerOpen && (
          <div className="fixed inset-0 z-70 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn font-sans">
            <div className="bg-white rounded-3xl p-5 max-w-lg w-full shadow-2xl border-2 border-slate-100 space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🎨</span>
                  <div>
                    <h4 className="font-black text-sm text-slate-800">
                      เลือกไอคอนอีโมจิสำหรับของรางวัล
                    </h4>
                    <p className="text-[11px] text-slate-400 font-semibold">
                      แตะที่อีโมจิที่ต้องการเพื่อเลือกใช้งาน
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsEmojiPickerOpen(false)}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Category Tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                {REWARD_EMOJI_GROUPS.map((grp, idx) => (
                  <button
                    key={grp.category}
                    onClick={() => {
                      sfx.playClick();
                      setActiveEmojiGroupIdx(idx);
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-black whitespace-nowrap transition-all border flex items-center gap-1 ${
                      activeEmojiGroupIdx === idx
                        ? 'bg-amber-500 text-white border-amber-600 shadow-2xs'
                        : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <span>{grp.icon}</span>
                    <span>{grp.category}</span>
                  </button>
                ))}
              </div>

              {/* Emoji Grid */}
              <div className="grid grid-cols-6 sm:grid-cols-7 gap-2 max-h-60 overflow-y-auto p-1">
                {REWARD_EMOJI_GROUPS[activeEmojiGroupIdx].emojis.map((em) => (
                  <button
                    key={em.emoji + em.label}
                    onClick={() => {
                      sfx.playClick();
                      setNewEmoji(em.emoji);
                      setIsEmojiPickerOpen(false);
                    }}
                    className="p-2.5 rounded-2xl bg-[#FAF8F5] hover:bg-amber-100 text-3xl flex flex-col items-center justify-center transition-all hover:scale-115 active:scale-95 border border-slate-200/70 hover:border-amber-400"
                    title={em.label}
                  >
                    <span>{em.emoji}</span>
                    <span className="text-[9px] font-bold text-slate-500 truncate w-full text-center mt-1">
                      {em.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            REDEEM CONFIRMATION MODAL POPUP
           ======================================================== */}
        {confirmItem && (
          <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn font-sans">
            <div className="bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl border-2 border-white/60 space-y-4">
              <div className="text-center space-y-2">
                <span className="text-5xl block animate-bounce">{confirmItem.emoji}</span>
                <h4 className="text-lg font-black text-slate-800">
                  ยืนยันการแลกของรางวัล
                </h4>
                <p className="text-sm font-bold text-amber-600">
                  &ldquo;{confirmItem.title}&rdquo;
                </p>
                <p className="text-xs text-slate-500">{confirmItem.description}</p>
              </div>

              {/* Wallet Selector */}
              <div className="bg-amber-50/60 border border-amber-200/80 p-3.5 rounded-2xl space-y-2">
                <label className="text-xs font-black text-slate-700 block">
                  เลือกกระเป๋าดาวที่จะใช้จ่าย ({confirmItem.starsCost.toLocaleString()} ⭐):
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setSelectedWallet('all')}
                    className={`p-2 rounded-xl font-bold border transition-all text-left ${
                      selectedWallet === 'all'
                        ? 'bg-amber-500 text-white border-amber-500 shadow-2xs'
                        : 'bg-white text-slate-700 border-slate-200'
                    }`}
                  >
                    รวมทุกวิชา ({activeProfile.stars || 0} ⭐)
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedWallet('math')}
                    className={`p-2 rounded-xl font-bold border transition-all text-left ${
                      selectedWallet === 'math'
                        ? 'bg-indigo-600 text-white border-indigo-600 shadow-2xs'
                        : 'bg-white text-slate-700 border-slate-200'
                    }`}
                  >
                    📐 คณิต ({activeProfile.subjectStars?.math || 0} ⭐)
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedWallet('english')}
                    className={`p-2 rounded-xl font-bold border transition-all text-left ${
                      selectedWallet === 'english'
                        ? 'bg-sky-600 text-white border-sky-600 shadow-2xs'
                        : 'bg-white text-slate-700 border-slate-200'
                    }`}
                  >
                    🇬🇧 อังกฤษ ({activeProfile.subjectStars?.english || 0} ⭐)
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedWallet('chinese')}
                    className={`p-2 rounded-xl font-bold border transition-all text-left ${
                      selectedWallet === 'chinese'
                        ? 'bg-rose-600 text-white border-rose-600 shadow-2xs'
                        : 'bg-white text-slate-700 border-slate-200'
                    }`}
                  >
                    🇨🇳 จีน ({activeProfile.subjectStars?.chinese || 0} ⭐)
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedWallet('science')}
                    className={`col-span-2 p-2 rounded-xl font-bold border transition-all text-left ${
                      selectedWallet === 'science'
                        ? 'bg-teal-600 text-white border-teal-600 shadow-2xs'
                        : 'bg-white text-slate-700 border-slate-200'
                    }`}
                  >
                    🔬 วิทย์ ({activeProfile.subjectStars?.science || 0} ⭐)
                  </button>
                </div>
              </div>

              {/* Note input */}
              <div className="space-y-1 text-xs">
                <label className="font-extrabold text-slate-600 block">
                  ข้อความถึงคุณพ่อคุณแม่ (ถ้ามี)
                </label>
                <input
                  type="text"
                  value={redeemNotes}
                  onChange={(e) => setRedeemNotes(e.target.value)}
                  placeholder="เช่น อยากกินรสช็อกโกแลต, ขอเป็นวันเสาร์นี้นะคะ"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-rose-500 font-medium text-slate-800"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 pt-2">
                <button
                  onClick={() => setConfirmItem(null)}
                  className="flex-1 py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-600 font-extrabold text-xs transition-colors"
                >
                  ยกเลิก
                </button>
                <button
                  onClick={handleConfirmRedeem}
                  disabled={getWalletAvailableStars(selectedWallet) < confirmItem.starsCost}
                  className={`flex-1 py-2.5 rounded-2xl font-black text-xs transition-all shadow-md ${
                    getWalletAvailableStars(selectedWallet) >= confirmItem.starsCost
                      ? 'bg-gradient-to-r from-amber-500 to-rose-500 text-white hover:brightness-105 active:scale-98 cursor-pointer'
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  ตกลงแลกเลย! 🚀
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            REDEEM SUCCESS MODAL
           ======================================================== */}
        {redeemSuccessTicket && (
          <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn font-sans">
            <div className="bg-white rounded-3xl p-6 max-w-sm w-full shadow-2xl border-2 border-amber-300 text-center space-y-4">
              <span className="text-6xl block animate-bounce">🎉</span>
              <div className="space-y-1">
                <h4 className="text-lg font-black text-slate-800">
                  แลกรางวัลสำเร็จแล้ว!
                </h4>
                <p className="text-xs text-slate-500">
                  ระบบได้ออกตั๋วรางวัล &ldquo;<strong>{redeemSuccessTicket.rewardTitle}</strong>&rdquo; ให้เรียบร้อยแล้ว
                </p>
              </div>

              <div className="p-3 bg-amber-50 border border-amber-200 rounded-2xl text-xs font-bold text-amber-900">
                <span>ตั๋วหมายเลข: </span>
                <span className="font-mono font-black">#{redeemSuccessTicket.id.slice(-6)}</span>
                <br />
                <span className="text-[11px] text-amber-700">
                  นำไปแสดงให้คุณพ่อคุณแม่ดูเพื่อรับรางวัลได้เลยจ้า!
                </span>
              </div>

              <button
                onClick={() => {
                  setRedeemSuccessTicket(null);
                  setActiveTab('tickets');
                }}
                className="w-full py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-black rounded-2xl text-xs shadow-md"
              >
                ดูตั๋วของฉัน 🎫
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
