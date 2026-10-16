'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { UserProfile, PetType, SubjectType } from '@/types';
import {
  CHEMISTRY_COMPOUNDS,
  HAZARDOUS_REACTIONS,
  ChemicalCompound,
  HazardousReaction,
  findMatchingCompound,
  checkHazardousReaction,
} from '@/data/chemistryReactions';
import { PERIODIC_ELEMENTS, ElementData } from '@/data/periodicTable';
import { PET_CATALOG, getPetStageDef } from '@/lib/petSystem';
import { sfx, speakThai } from '@/lib/speech';
import confetti from 'canvas-confetti';
import {
  FlaskConical,
  Flame,
  Sparkles,
  AlertTriangle,
  RotateCcw,
  Zap,
  BookOpen,
  Trophy,
  CheckCircle2,
  HelpCircle,
  ShieldAlert,
  ShieldCheck,
  Star,
  Info,
  Layers,
  HeartHandshake,
  Droplets,
  Plus,
  Trash2,
  Atom,
} from 'lucide-react';

interface ChemistryReactionLabProps {
  activeProfile: UserProfile;
  onEarnStars: (amount: number) => void;
}

// Selectable elements for the lab rack (Core elements for kids)
const LAB_RACK_SYMBOLS = [
  'H', 'C', 'N', 'O', 'Na', 'Mg', 'Al', 'Si',
  'Cl', 'K', 'Ca', 'Fe', 'Cu', 'Zn', 'He', 'Ne'
];

const DISCOVERY_STORAGE_KEY = 'duo_academy_chemistry_discoveries_v1';

export const ChemistryReactionLab: React.FC<ChemistryReactionLabProps> = ({
  activeProfile,
  onEarnStars,
}) => {
  // Beaker contents: array of element symbols e.g. ['H', 'H', 'O']
  const [beakerElements, setBeakerElements] = useState<string[]>([]);
  
  // Reaction result states
  const [reactionResult, setReactionResult] = useState<{
    type: 'success' | 'hazard' | 'inert' | 'no_reaction' | null;
    compound?: ChemicalCompound;
    hazard?: HazardousReaction;
    inertMessage?: string;
  }>({ type: null });

  // Pet soot & sadness state (when an explosion occurs!)
  const [isPetSooted, setIsPetSooted] = useState<boolean>(false);
  const [isExplodingAnim, setIsExplodingAnim] = useState<boolean>(false);
  const [petSpeechOverride, setPetSpeechOverride] = useState<string | null>(null);

  // Discovered compounds IDs saved in localStorage
  const [discoveredIds, setDiscoveredIds] = useState<string[]>([]);

  // Sub-tabs: 'lab' (ห้องทดลอง) | 'codex' (สมุดสารประกอบ) | 'theory' (สาระสำคัญเคมี)
  const [activeSubTab, setActiveSubTab] = useState<'lab' | 'codex' | 'theory'>('lab');

  // Selected compound to view detail in modal or codex
  const [inspectCompound, setInspectCompound] = useState<ChemicalCompound | null>(null);

  // Active Pet Data
  const petType: PetType = activeProfile.activePetType || activeProfile.pet?.type || 'dragon';
  const petDef = PET_CATALOG[petType] || PET_CATALOG.dragon;
  const petStage = getPetStageDef(petType, activeProfile.pet?.stage || 1);

  // Load discoveries from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(DISCOVERY_STORAGE_KEY);
      if (stored) {
        setDiscoveredIds(JSON.parse(stored));
      }
    } catch (e) {
      console.warn('Failed to load chemistry discoveries', e);
    }
  }, []);

  // Save discoveries to localStorage
  const saveDiscoveries = (ids: string[]) => {
    try {
      localStorage.setItem(DISCOVERY_STORAGE_KEY, JSON.stringify(ids));
      setDiscoveredIds(ids);
    } catch (e) {
      console.warn('Failed to save chemistry discoveries', e);
    }
  };

  // Rack elements mapped to ElementData
  const rackElements = useMemo(() => {
    return LAB_RACK_SYMBOLS.map((sym) => {
      const found = PERIODIC_ELEMENTS.find((el) => el.symbol === sym);
      return (
        found || {
          z: 0,
          symbol: sym,
          nameTh: sym,
          nameEn: sym,
          atomicMass: 0,
          group: 'A',
          period: 1,
          category: 'nonmetal',
          categoryTh: 'ธาตุ',
          state: 'solid',
          stateTh: 'ของแข็ง',
          electronConfig: '',
          electronShells: [],
          valence: 1,
          commonIon: '',
          color: 'bg-slate-400',
          funFact: '',
          examTip: '',
        }
      );
    });
  }, []);

  // ==========================================
  // Element Drag & Drop / Click Handlers
  // ==========================================
  const handleAddElementToBeaker = (symbol: string) => {
    sfx.playClick();
    if (beakerElements.length >= 8) {
      return; // max 8 atoms in beaker
    }
    setBeakerElements((prev) => [...prev, symbol]);
    setReactionResult({ type: null });
  };

  const handleRemoveElementFromBeaker = (index: number) => {
    sfx.playClick();
    setBeakerElements((prev) => prev.filter((_, i) => i !== index));
    setReactionResult({ type: null });
  };

  const handleClearBeaker = () => {
    sfx.playClick();
    setBeakerElements([]);
    setReactionResult({ type: null });
  };

  // Drag and drop handlers
  const handleDragStart = (e: React.DragEvent, symbol: string) => {
    e.dataTransfer.setData('text/plain', symbol);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const symbol = e.dataTransfer.getData('text/plain');
    if (symbol && LAB_RACK_SYMBOLS.includes(symbol)) {
      handleAddElementToBeaker(symbol);
    }
  };

  // ==========================================
  // Trigger Chemical Reaction (ปฏิกิริยาเคมี)
  // ==========================================
  const handleTriggerReaction = (forceSpark: boolean = false) => {
    if (beakerElements.length === 0) return;

    // 1. Check for Noble Gases (He, Ne) -> Inert, won't react
    const hasNobleGas = beakerElements.some((sym) => sym === 'He' || sym === 'Ne');
    if (hasNobleGas && beakerElements.length > 1) {
      sfx.playBubble();
      setReactionResult({
        type: 'inert',
        inertMessage:
          '🎈 ก๊าซเฉื่อย (He, Ne) มีเวเลนซ์อิเล็กตรอนครบ 8 ตัวตามกฎออกเตต เสถียรที่สุดในจักรวาล ไม่ยอมทำพันธะกับใคร ลอยหนีไปบนฟ้าอย่างสงบ!',
      });
      return;
    }

    // 2. Check for Hazardous Reactions (ระเบิดอันตราย!)
    const hazard = checkHazardousReaction(beakerElements, forceSpark && beakerElements.includes('H') && beakerElements.includes('O'));
    if (hazard) {
      // Trigger Explosion!
      sfx.playExplosion();
      setIsExplodingAnim(true);
      setIsPetSooted(true);

      // Character-specific sad cries
      let sadCry = 'ฮืออออ... ตกใจหมดเลย! บีกเกอร์ระเบิดใส่เค้า หน้าดำปี๋เลย แงงง! 😭';
      if (petType === 'dragon') {
        sadCry = 'โฮกปิ๊บ! บีกเกอร์ระเบิดใส่เสี่ยวหลง เกล็ดไหม้เกรียมหน้าดำหมดแล้ว แงงงง! 😭';
      } else if (petType === 'jellyfish') {
        sadCry = 'แงงงง! ตัวของเจลลี่เปื้อนเขม่าหมดแล้ว ควันฟุ้งเต็มห้องแล็บเลย ช่วยด้วยยย! 😿';
      } else if (petType === 'panda') {
        sadCry = 'งึมๆ... เป่าเปาตัวดำเป็นหมีขั้วโลกโดนรมควันแล้ว ช่วยเช็ดตัวให้หน่อยน้าา 🥺';
      } else if (petType === 'hippo') {
        sadCry = 'ว้ายยย! ตกใจจนบินไม่ถูกเลย ปีกซูก้าเปื้อนเขม่าหมดแล้ว ปลอบเค้าหน่อยนะ ฮือออ! 😭';
      }
      setPetSpeechOverride(sadCry);

      setTimeout(() => {
        setIsExplodingAnim(false);
      }, 1000);

      setReactionResult({
        type: 'hazard',
        hazard,
      });
      return;
    }

    // 3. Check for Successful Compound Synthesis
    const compound = findMatchingCompound(beakerElements);
    if (compound) {
      sfx.playStarFanfare();
      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#38BDF8', '#10B981', '#FBBF24', '#F43F5E', '#A855F7'],
      });

      // Voice read name and formula
      speakThai(`สังเคราะห์สารใหม่สำเร็จ! ${compound.nameTh} สูตรเคมี ${compound.formula}`);

      // First-time discovery bonus!
      if (!discoveredIds.includes(compound.id)) {
        const nextIds = [...discoveredIds, compound.id];
        saveDiscoveries(nextIds);
        onEarnStars(compound.starsReward);
      }

      setReactionResult({
        type: 'success',
        compound,
      });

      // Happy pet reaction
      setPetSpeechOverride(`ว้าว! ยินดีด้วยนะ ได้ "${compound.nameTh}" (${compound.formula}) สุดยอดนักเคมีตัวจริง! ✨`);
      return;
    }

    // 4. No Known Reaction Formed
    sfx.playSoftTryAgain();
    setReactionResult({
      type: 'no_reaction',
      inertMessage:
        '🧪 ธาตุเหล่านี้ยังไม่ทำปฏิกิริยากันในสภาวะนี้ ลองปรับสัดส่วนหรือดูคำใบ้ใน "สมุดค้นพบสารเคมี" ด้านล่างดูนะ!',
    });
  };

  // ==========================================
  // Clean & Soothe Pet (ล้างตัว & ปลอบใจสัตว์เลี้ยง - ไม่แจกคะแนน เพื่อป้องกันการฟาร์ม)
  // ==========================================
  const handleCleanPet = () => {
    sfx.playBubble();
    setIsPetSooted(false);

    confetti({
      particleCount: 25,
      spread: 50,
      origin: { y: 0.7 },
      colors: ['#06B6D4', '#3B82F6', '#FFFFFF'],
    });

    let happyCry = 'เย้! ขอบคุณน้า หน้าสะอาดใสวิ้งแล้ว คราวหลังเราต้องใส่แว่นนิรภัยด้วยนะ! 💖';
    if (petType === 'dragon') {
      happyCry = 'เย้! เสี่ยวหลงหายมอมแมมแล้ว ไฟในตัวกลับมาอบอุ่นเหมือนเดิม ขอบคุณนะ! 🐲✨';
    } else if (petType === 'jellyfish') {
      happyCry = 'ตัวของเจลลี่นุ่มสะอาดใสปิ๊งแล้ว ขอบคุณที่ช่วยดูแลความปลอดภัยในห้องแล็บนะ! 🪼🧼';
    } else if (petType === 'panda') {
      happyCry = 'เป่าเปาสะอาดแล้ว อบอุ่นจังเลย ต่อไปจะไม่ซนกับสารไวไฟแล้วนะ 🐼✨';
    } else if (petType === 'hippo') {
      happyCry = 'ปีกของซูก้ากางบินได้ฉิวเหมือนเดิมแล้ว ขอบคุณที่ช่วยอาบน้ำให้นะ! 🐿️💖';
    }

    setPetSpeechOverride(happyCry);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* ========================================================
          SUB-NAVIGATION TABS
         ======================================================== */}
      <div className="flex items-center justify-between flex-wrap gap-2 bg-white p-2 rounded-2xl border border-slate-200 shadow-xs">
        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none">
          <button
            onClick={() => {
              sfx.playClick();
              setActiveSubTab('lab');
            }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeSubTab === 'lab'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <FlaskConical className="w-4 h-4" />
            <span>ห้องทดลองผสมธาตุ (Chemical Lab)</span>
          </button>

          <button
            onClick={() => {
              sfx.playClick();
              setActiveSubTab('codex');
            }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeSubTab === 'codex'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>สมุดสารประกอบที่ค้นพบ ({discoveredIds.length}/{CHEMISTRY_COMPOUNDS.length})</span>
          </button>

          <button
            onClick={() => {
              sfx.playClick();
              setActiveSubTab('theory');
            }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeSubTab === 'theory'
                ? 'bg-amber-500 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Atom className="w-4 h-4" />
            <span>สรุป 3 พันธะเคมี & กรด-เบส</span>
          </button>
        </div>

        {/* Discovery Progress Pill */}
        <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-xl text-xs font-black text-emerald-800">
          <Trophy className="w-3.5 h-3.5 text-emerald-600" />
          <span>ค้นพบแล้ว {discoveredIds.length}/{CHEMISTRY_COMPOUNDS.length} สาร</span>
        </div>
      </div>

      {/* ========================================================
          TAB 1: INTERACTIVE REACTION LAB
         ======================================================== */}
      {activeSubTab === 'lab' && (
        <div className="space-y-6">
          {/* Main 2-Column Lab Stage */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* LEFT: The Reaction Chamber & Beaker (7 Cols) */}
            <div className={`lg:col-span-7 bg-white rounded-3xl p-5 sm:p-6 border-2 shadow-sm transition-all relative overflow-hidden ${
              isExplodingAnim
                ? 'border-rose-500 bg-rose-50 animate-shake ring-4 ring-rose-300'
                : 'border-slate-200'
            }`}>
              
              {/* Explosion Flash Overlay */}
              {isExplodingAnim && (
                <div className="absolute inset-0 bg-rose-500/20 z-30 pointer-events-none animate-pulse" />
              )}

              {/* Lab Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black">
                    ⚗️
                  </div>
                  <div>
                    <h3 className="font-black text-sm sm:text-base text-slate-800">
                      บีกเกอร์ปฏิกิริยาเคมี (Reaction Chamber)
                    </h3>
                    <p className="text-[11px] text-slate-400 font-semibold">
                      คลิกหรือลากธาตุจากถาดด้านขวามาหย่อนลงในบีกเกอร์เพื่อทดลอง
                    </p>
                  </div>
                </div>

                {beakerElements.length > 0 && (
                  <button
                    onClick={handleClearBeaker}
                    className="flex items-center gap-1 text-slate-400 hover:text-rose-600 text-xs font-bold transition-colors"
                    title="ล้างบีกเกอร์"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>ล้างบีกเกอร์</span>
                  </button>
                )}
              </div>

              {/* Interactive Beaker Dropzone */}
              <div
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                className="my-5 min-h-[220px] rounded-3xl bg-gradient-to-b from-slate-50 via-slate-100/60 to-emerald-50/40 border-2 border-dashed border-slate-300 hover:border-emerald-400 transition-colors p-4 flex flex-col items-center justify-between relative shadow-inner"
              >
                {/* Floating Elements In Beaker */}
                {beakerElements.length === 0 ? (
                  <div className="flex-1 flex flex-col items-center justify-center text-center p-6 space-y-2">
                    <span className="text-4xl animate-bounce">🧪</span>
                    <p className="text-xs font-bold text-slate-400 max-w-xs">
                      บีกเกอร์ยังว่างอยู่! เลือกลากธาตุ เช่น <strong className="text-emerald-700">H + O</strong> (น้ำ) หรือ <strong className="text-amber-700">Na + Cl</strong> (เกลือ) มาใส่ได้เลย
                    </p>
                  </div>
                ) : (
                  <div className="w-full flex-1 flex flex-wrap items-center justify-center gap-2.5 p-3">
                    {beakerElements.map((sym, idx) => {
                      const elData = rackElements.find((r) => r.symbol === sym);
                      return (
                        <div
                          key={idx}
                          className="bg-white border-2 border-emerald-400 text-slate-800 px-3.5 py-2 rounded-2xl shadow-sm flex items-center gap-2 animate-popIn"
                        >
                          <div className="text-center">
                            <span className="text-base font-black leading-none block">
                              {sym}
                            </span>
                            <span className="text-[9px] text-slate-400 font-bold block">
                              {elData?.nameTh || sym}
                            </span>
                          </div>
                          <button
                            onClick={() => handleRemoveElementFromBeaker(idx)}
                            className="w-5 h-5 rounded-full bg-slate-100 hover:bg-rose-100 text-slate-400 hover:text-rose-600 flex items-center justify-center text-xs font-bold transition-colors"
                            title="นำออกจากบีกเกอร์"
                          >
                            ×
                          </button>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Beaker Bottom Liquid / Status */}
                <div className="w-full pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <Droplets className="w-4 h-4 text-emerald-500 animate-pulse" />
                    <span>สารในบีกเกอร์: {beakerElements.length} อะตอม</span>
                  </div>

                  <span className="text-[11px] text-slate-400">
                    {beakerElements.length === 0 ? 'ลากหรือคลิกธาตุเพื่อเพิ่ม' : 'พร้อมทำปฏิกิริยา!'}
                  </span>
                </div>
              </div>

              {/* Action Buttons: React & Spark */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <button
                  disabled={beakerElements.length === 0}
                  onClick={() => handleTriggerReaction(false)}
                  className={`py-3 px-4 rounded-2xl font-black text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 ${
                    beakerElements.length > 0
                      ? 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:brightness-105 active:scale-98 text-white cursor-pointer'
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  <Zap className="w-4 h-4 text-yellow-300" />
                  <span>เริ่มทำปฏิกิริยาเคมี! (React)</span>
                </button>

                <button
                  disabled={beakerElements.length === 0}
                  onClick={() => handleTriggerReaction(true)}
                  className={`py-3 px-4 rounded-2xl font-black text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 ${
                    beakerElements.length > 0
                      ? 'bg-gradient-to-r from-amber-500 to-rose-500 hover:brightness-105 active:scale-98 text-white cursor-pointer'
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  }`}
                  title="จุดประกายไฟ หรือให้ความร้อนปฏิกิริยา"
                >
                  <Flame className="w-4 h-4 text-yellow-200" />
                  <span>จุดประกายไฟ / ความร้อน 🔥</span>
                </button>
              </div>

              {/* Reaction Result Card */}
              {reactionResult.type === 'success' && reactionResult.compound && (
                <div className="mt-5 p-5 rounded-3xl bg-gradient-to-br from-emerald-50 via-teal-50 to-white border-2 border-emerald-300 shadow-md animate-fadeIn space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                      <span>สังเคราะห์สารประกอบสำเร็จ!</span>
                    </span>

                    <span className="text-xs font-black text-amber-600 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-lg flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                      <span>+{reactionResult.compound.starsReward} ดาว</span>
                    </span>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="text-4xl p-3 bg-white rounded-2xl shadow-xs border border-emerald-100">
                      {reactionResult.compound.emoji}
                    </span>
                    <div className="space-y-1">
                      <h4 className="font-black text-lg text-slate-900 flex items-center gap-2">
                        <span>{reactionResult.compound.nameTh}</span>
                        <span className="text-emerald-700 font-extrabold text-base bg-emerald-100 px-2 py-0.5 rounded-lg">
                          {reactionResult.compound.formula}
                        </span>
                      </h4>
                      <p className="text-xs text-slate-500 font-bold">
                        สมการเคมี: <code className="text-slate-800 bg-white px-2 py-0.5 rounded border border-slate-200 font-mono text-[11px]">{reactionResult.compound.equation}</code>
                      </p>
                      <p className="text-xs text-slate-600 font-medium pt-1">
                        {reactionResult.compound.description}
                      </p>
                    </div>
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs">
                    <div className="bg-white p-2.5 rounded-xl border border-emerald-100 space-y-0.5">
                      <span className="text-[10px] text-slate-400 font-bold block">ชนิดพันธะเคมี:</span>
                      <span className="font-bold text-slate-800 block text-[11px]">
                        {reactionResult.compound.bondTypeTh}
                      </span>
                    </div>
                    <div className="bg-white p-2.5 rounded-xl border border-emerald-100 space-y-0.5">
                      <span className="text-[10px] text-slate-400 font-bold block">ประโยชน์ในชีวิตประจำวัน:</span>
                      <span className="font-medium text-slate-700 block text-[11px] line-clamp-2">
                        {reactionResult.compound.dailyLifeUse}
                      </span>
                    </div>
                  </div>

                  {/* Exam Tip */}
                  <div className="bg-amber-50/80 p-3 rounded-2xl border border-amber-200/80 text-xs text-amber-950 font-medium flex items-start gap-2">
                    <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-black text-amber-900">เกร็ดความรู้พิชิตข้อสอบ:</strong>{' '}
                      {reactionResult.compound.examTip}
                    </div>
                  </div>
                </div>
              )}

              {/* Reaction Hazard / Explosion Card */}
              {reactionResult.type === 'hazard' && reactionResult.hazard && (
                <div className="mt-5 p-5 rounded-3xl bg-gradient-to-br from-rose-50 via-amber-50 to-white border-2 border-rose-400 shadow-lg animate-fadeIn space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-rose-800 bg-rose-100 px-3 py-1 rounded-full flex items-center gap-1.5 animate-pulse">
                      <ShieldAlert className="w-3.5 h-3.5 text-rose-600" />
                      <span>{reactionResult.hazard.hazardLevelTh}</span>
                    </span>

                    <span className="text-xs font-black text-rose-600 bg-white border border-rose-200 px-2 py-0.5 rounded-lg">
                      Lab Incident 💥
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-4xl">💥</span>
                    <div className="space-y-1">
                      <h4 className="font-black text-base text-rose-900">
                        {reactionResult.hazard.title}
                      </h4>
                      <p className="text-xs text-slate-700 font-medium leading-relaxed">
                        {reactionResult.hazard.reason}
                      </p>
                    </div>
                  </div>

                  <div className="bg-rose-100/70 p-3 rounded-2xl border border-rose-300 text-xs text-rose-950 font-bold flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-black text-rose-900">กฎความปลอดภัยในห้องแล็บ:</strong>{' '}
                      {reactionResult.hazard.safetyLesson}
                    </div>
                  </div>
                </div>
              )}

              {/* Reaction Inert / No-Reaction Alert */}
              {(reactionResult.type === 'inert' || reactionResult.type === 'no_reaction') && (
                <div className="mt-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700 flex items-start gap-2.5 animate-fadeIn">
                  <span className="text-xl">💡</span>
                  <div className="space-y-1">
                    <p className="leading-relaxed">{reactionResult.inertMessage}</p>
                    <button
                      onClick={() => setActiveSubTab('codex')}
                      className="text-emerald-700 font-black hover:underline inline-flex items-center gap-1"
                    >
                      <span>เปิดดูสูตรผสมในสมุดสารประกอบ</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              )}

            </div>

            {/* RIGHT: Lab Rack & Pet Companion Assistant (5 Cols) */}
            <div className="lg:col-span-5 space-y-5">
              
              {/* Pet Companion Assistant Box (Reacts to Success & Explosions!) */}
              <div className={`p-4 sm:p-5 rounded-3xl border-2 transition-all shadow-sm ${
                isPetSooted
                  ? 'bg-gradient-to-br from-slate-900 via-rose-950 to-slate-900 border-rose-400 text-white'
                  : 'bg-white border-slate-200 text-slate-800'
              }`}>
                <div className="flex items-center justify-between pb-3 border-b border-slate-200/40">
                  <span className="text-xs font-black flex items-center gap-1.5">
                    <span>{isPetSooted ? '😿' : petDef.emoji}</span>
                    <span>ผู้ช่วยตัวน้อยประจำห้องแล็บ: {petDef.name}</span>
                  </span>

                  {isPetSooted ? (
                    <span className="text-[10px] font-black bg-rose-500 text-white px-2 py-0.5 rounded-full animate-pulse">
                      โดนควันระเบิด!
                    </span>
                  ) : (
                    <span className="text-[10px] font-black bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                      ปลอดภัย 👍
                    </span>
                  )}
                </div>

                {/* Character & Speech View */}
                <div className="flex items-center gap-4 my-3">
                  {/* Pet Illustration / Avatar with Soot Filter when exploded */}
                  <div className="relative w-24 h-24 shrink-0 flex items-center justify-center">
                    <div className={`relative w-20 h-20 transition-all ${
                      isPetSooted
                        ? 'filter brightness-65 contrast-125 grayscale-[70%] animate-shake'
                        : 'animate-float'
                    }`}>
                      {petStage.image ? (
                        <Image
                          src={petStage.image}
                          alt={petDef.name}
                          fill
                          className="object-contain"
                        />
                      ) : (
                        <span className="text-5xl">{petDef.emoji}</span>
                      )}
                    </div>

                    {/* Soot / Smoke Overlay Effect */}
                    {isPetSooted && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-2xl animate-pulse">
                        💨
                      </div>
                    )}
                  </div>

                  {/* Speech Message */}
                  <div className="flex-1 space-y-2">
                    <div className={`p-3 rounded-2xl text-xs font-black leading-relaxed shadow-xs ${
                      isPetSooted
                        ? 'bg-rose-950/80 border border-rose-400 text-rose-200'
                        : 'bg-emerald-50 border border-emerald-200 text-emerald-900'
                    }`}>
                      {petSpeechOverride ||
                        `สวัสดีจ้า! ข้าคือ ${petDef.name} วันนี้เรามาผสมธาตุสร้างสารประกอบใหม่ๆ กันเถอะ! 🧪`}
                    </div>

                    {/* Button to Clean and Soothe Pet when Sooted! */}
                    {isPetSooted && (
                      <button
                        onClick={handleCleanPet}
                        className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:brightness-110 active:scale-95 text-white text-xs font-black shadow-md transition-all flex items-center justify-center gap-1.5"
                      >
                        <HeartHandshake className="w-3.5 h-3.5" />
                        <span>🧼 ล้างหน้า & ปลอบใจสัตว์เลี้ยง</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Element Rack (ถาดเลือกธาตุ 16 ธาตุยอดนิยม) */}
              <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-black text-xs sm:text-sm text-slate-800 flex items-center gap-1.5">
                    <Atom className="w-4 h-4 text-emerald-600" />
                    <span>ถาดเลือกธาตุสารตั้งต้น (Element Rack)</span>
                  </h4>
                  <span className="text-[10px] text-slate-400 font-bold">
                    คลิกหรือลากใส่บีกเกอร์
                  </span>
                </div>

                {/* Elements Grid */}
                <div className="grid grid-cols-4 sm:grid-cols-4 gap-2">
                  {rackElements.map((el) => {
                    const countInBeaker = beakerElements.filter((s) => s === el.symbol).length;
                    return (
                      <div
                        key={el.symbol}
                        draggable
                        onDragStart={(e) => handleDragStart(e, el.symbol)}
                        onClick={() => handleAddElementToBeaker(el.symbol)}
                        className={`p-2.5 rounded-2xl border-2 transition-all cursor-pointer select-none text-center relative group active:scale-90 ${
                          countInBeaker > 0
                            ? 'border-emerald-500 bg-emerald-50/50 shadow-xs'
                            : 'border-slate-200 hover:border-emerald-400 hover:bg-slate-50'
                        }`}
                        title={`${el.nameTh} (${el.nameEn}) Z=${el.z} - คลิกเพื่อหย่อนลงบีกเกอร์`}
                      >
                        {/* Atomic Number Badge */}
                        <span className="text-[9px] text-slate-400 font-bold absolute top-1 left-2">
                          {el.z}
                        </span>

                        {/* Element Symbol */}
                        <div className="font-black text-base sm:text-lg text-slate-900 group-hover:text-emerald-700 transition-colors">
                          {el.symbol}
                        </div>

                        {/* Thai Name */}
                        <div className="text-[10px] text-slate-500 font-bold truncate">
                          {el.nameTh}
                        </div>

                        {/* Count in beaker pill */}
                        {countInBeaker > 0 && (
                          <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-emerald-600 text-white text-[10px] rounded-full flex items-center justify-center font-black shadow-xs">
                            {countInBeaker}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="text-[11px] text-slate-400 font-medium bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex items-center justify-between">
                  <span>💡 <strong>คำแนะนำ:</strong> สามารถคลิกซ้ำเพื่อเพิ่มจำนวนอะตอมในบีกเกอร์ได้</span>
                  <span className="text-emerald-700 font-bold shrink-0">สูงสุด 8 อะตอม</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* ========================================================
          TAB 2: DISCOVERY CODEX (สมุดสารประกอบที่ค้นพบ)
         ======================================================== */}
      {activeSubTab === 'codex' && (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-800 rounded-3xl p-5 text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="font-black text-base sm:text-lg flex items-center justify-center sm:justify-start gap-2">
                <span>📖 สมุดบันทึกสารประกอบทางเคมี (Chemical Codex)</span>
              </h3>
              <p className="text-xs text-indigo-100">
                สารประกอบสำคัญที่จำเป็นต่อการเรียนและสอบเคมี ป.ปลาย – ม.ปลาย ค้นพบได้จากการผสมธาตุในห้องแล็บ
              </p>
            </div>

            <div className="bg-white/15 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/20 text-center shrink-0">
              <span className="text-[10px] uppercase font-bold text-indigo-200 block">ค้นพบแล้ว</span>
              <span className="text-lg font-black text-white">
                {discoveredIds.length} / {CHEMISTRY_COMPOUNDS.length} ชนิด
              </span>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {CHEMISTRY_COMPOUNDS.map((c) => {
              const isDiscovered = discoveredIds.includes(c.id);

              return (
                <div
                  key={c.id}
                  onClick={() => {
                    sfx.playClick();
                    if (isDiscovered) {
                      setInspectCompound(c);
                    }
                  }}
                  className={`p-4 rounded-3xl border-2 transition-all flex flex-col justify-between ${
                    isDiscovered
                      ? 'bg-white border-slate-200 hover:border-indigo-400 shadow-xs cursor-pointer hover:scale-101'
                      : 'bg-slate-50 border-dashed border-slate-300 opacity-75 select-none'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                      <span className="text-3xl">{isDiscovered ? c.emoji : '❓'}</span>
                      {isDiscovered ? (
                        <span className="text-[10px] font-black text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>ค้นพบแล้ว</span>
                        </span>
                      ) : (
                        <span className="text-[10px] font-bold text-slate-400 bg-slate-200/60 px-2 py-0.5 rounded-full">
                          ยังไม่ค้นพบ
                        </span>
                      )}
                    </div>

                    <div className="mt-3 space-y-1">
                      <h4 className="font-black text-sm text-slate-800">
                        {isDiscovered ? c.nameTh : 'สารประกอบปริศนา'}
                      </h4>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">
                          {isDiscovered ? c.formula : '???'}
                        </span>
                        <span className="text-[10px] text-slate-400">
                          {isDiscovered ? c.stateTh : 'ลองผสมดู'}
                        </span>
                      </div>

                      <p className="text-[11px] text-slate-500 font-medium pt-1 line-clamp-2">
                        {isDiscovered
                          ? c.description
                          : `💡 คำใบ้: ลองนำธาตุ ${c.requiredElements.join(' + ')} มาใส่ในบีกเกอร์แล้วทำปฏิกิริยา!`}
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                    <span className="text-amber-600 flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                      <span>+{c.starsReward} ดาว</span>
                    </span>

                    {isDiscovered && (
                      <span className="text-indigo-600 text-[11px] hover:underline">
                        ดูรายละเอียด →
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ========================================================
          TAB 3: THEORY CHEATSHEET (สาระสำคัญเคมี 3 พันธะ & กรด-เบส)
         ======================================================== */}
      {activeSubTab === 'theory' && (
        <div className="space-y-6 animate-fadeIn">
          {/* Header */}
          <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 rounded-3xl p-5 text-white shadow-md">
            <h3 className="font-black text-base sm:text-lg flex items-center gap-2">
              <span>📚 สาระสำคัญวิชาเคมีที่ออกข้อสอบบ่อย (Chemistry Key Concepts)</span>
            </h3>
            <p className="text-xs text-amber-100 mt-1">
              เจาะลึก 3 พันธะเคมีหลัก กฎทรงมวล และความเป็นกรด-เบส สำหรับเด็กประถมปลายจนถึงมัธยมปลาย
            </p>
          </div>

          {/* Section 1: The 3 Chemical Bonds */}
          <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-xs space-y-4">
            <h4 className="font-black text-sm sm:text-base text-slate-800 flex items-center gap-2">
              <span className="text-xl">🔗</span>
              <span>1. เปรียบเทียบ 3 พันธะเคมีหลัก (Chemical Bonds)</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              {/* Covalent */}
              <div className="bg-sky-50/70 border border-sky-200 rounded-2xl p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🤝</span>
                  <div>
                    <h5 className="font-black text-xs sm:text-sm text-sky-900">
                      พันธะโคเวเลนต์ (Covalent)
                    </h5>
                    <span className="text-[10px] text-sky-700 font-bold">อโลหะ + อโลหะ</span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  อะตอมทั้งสองนำ <strong>เวเลนซ์อิเล็กตรอนมาใช้ร่วมกัน (Sharing Electrons)</strong> เพื่อให้ครบ 8 ตามกฎออกเตต
                </p>
                <div className="text-[11px] font-bold text-sky-800 bg-white p-2 rounded-xl border border-sky-100">
                  📌 <strong>ตัวอย่าง:</strong> น้ำ ($H_2O$), ก๊าซออกซิเจน ($O_2$), มีเทน ($CH_4$), คาร์บอนไดออกไซด์ ($CO_2$)
                </div>
              </div>

              {/* Ionic */}
              <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <h5 className="font-black text-xs sm:text-sm text-amber-900">
                      พันธะไอออนิก (Ionic)
                    </h5>
                    <span className="text-[10px] text-amber-700 font-bold">โลหะ + อโลหะ</span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  โลหะ <strong>ให้อิเล็กตรอน</strong> กลายเป็นไอออนบวก (+) และอโลหะ <strong>รับอิเล็กตรอน</strong> กลายเป็นไอออนลบ (-) ดึงดูดกันด้วยแรงไฟฟ้าสถิต
                </p>
                <div className="text-[11px] font-bold text-amber-800 bg-white p-2 rounded-xl border border-amber-100">
                  📌 <strong>ตัวอย่าง:</strong> เกลือแกง ($NaCl$), หินปูน ($CaCO_3$), แมกนีเซียมออกไซด์ ($MgO$)
                </div>
              </div>

              {/* Metallic */}
              <div className="bg-purple-50/70 border border-purple-200 rounded-2xl p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🛡️</span>
                  <div>
                    <h5 className="font-black text-xs sm:text-sm text-purple-900">
                      พันธะโลหะ (Metallic)
                    </h5>
                    <span className="text-[10px] text-purple-700 font-bold">โลหะ + โลหะ</span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  อะตอมโลหะอยู่รวมกันท่ามกลาง <strong>"ทะเลอิเล็กตรอน (Sea of Electrons)"</strong> ที่ไหลเวียนอิสระ จึงนำไฟฟ้าและความร้อนได้ยอดเยี่ยม
                </p>
                <div className="text-[11px] font-bold text-purple-800 bg-white p-2 rounded-xl border border-purple-100">
                  📌 <strong>ตัวอย่าง:</strong> เหล็ก ($Fe$), ทองแดง ($Cu$), ทองเหลือง (Cu-Zn), อะลูมิเนียม ($Al$)
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Acids & Bases */}
          <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-xs space-y-4">
            <h4 className="font-black text-sm sm:text-base text-slate-800 flex items-center gap-2">
              <span className="text-xl">🧪</span>
              <span>2. กรด - เบส ในชีวิตประจำวัน (Acids & Bases)</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 space-y-2">
                <h5 className="font-black text-sm text-rose-900 flex items-center gap-1.5">
                  <span>🔴 กรด (Acid) — pH &lt; 7</span>
                </h5>
                <ul className="text-xs text-slate-700 space-y-1 font-medium list-disc list-inside">
                  <li>รสเปรี้ยว เปลี่ยนสีกระดาษลิตมัสจาก <strong>น้ำเงินเป็นแดง</strong></li>
                  <li>แตกตัวให้ไอออนไฮโดรเจน ($H^+$)</li>
                  <li>ทำปฏิกิริยากับโลหะ ได้ก๊าซไฮโดรเจน ($H_2$)</li>
                  <li><strong>ตัวอย่าง:</strong> น้ำมะนาว, กรดเกลือในกระเพาะ ($HCl$), น้ำส้มสายชู</li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 space-y-2">
                <h5 className="font-black text-sm text-blue-900 flex items-center gap-1.5">
                  <span>🔵 เบส (Base) — pH &gt; 7</span>
                </h5>
                <ul className="text-xs text-slate-700 space-y-1 font-medium list-disc list-inside">
                  <li>รสฝาด สัมผัสแล้วลื่นมือ เปลี่ยนลิตมัสจาก <strong>แดงเป็นน้ำเงิน</strong></li>
                  <li>แตกตัวให้ไอออนไฮดรอกไซด์ ($OH^-$)</li>
                  <li>ละลายไขมันได้ดี นิยมใช้ทำสารทำความสะอาด</li>
                  <li><strong>ตัวอย่าง:</strong> สบู่, โซดาไฟ ($NaOH$), น้ำยาล้างจาน, แอมโมเนีย</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 3: Lab Safety Golden Rules */}
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-3xl p-5 space-y-3">
            <div className="flex items-center gap-2 text-emerald-900">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <h4 className="font-black text-sm sm:text-base">
                กฎทอง 4 ข้อเพื่อความปลอดภัยในห้องปฏิบัติการ (Lab Safety)
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 font-medium">
              <div className="bg-white p-3 rounded-xl border border-emerald-100 flex items-start gap-2">
                <span>👓</span>
                <div>
                  <strong className="font-black text-slate-900 block">สวมอุปกรณ์ป้องกันเสมอ</strong>
                  ใส่แว่นตานิรภัย (Goggles) และเสื้อกาวน์เพื่อป้องกันสารเคมีกระเด็น
                </div>
              </div>

              <div className="bg-white p-3 rounded-xl border border-emerald-100 flex items-start gap-2">
                <span>🚰</span>
                <div>
                  <strong className="font-black text-slate-900 block">เทกรดลงน้ำ ไม่เทน้ำลงกรด</strong>
                  การเจือจางกรดต้องค่อยๆ เทกรดลงในน้ำ เพื่อป้องกันความร้อนดันสารละลายกระเด็น
                </div>
              </div>

              <div className="bg-white p-3 rounded-xl border border-emerald-100 flex items-start gap-2">
                <span>👃</span>
                <div>
                  <strong className="font-black text-slate-900 block">ห้ามดมสารเคมีโดยตรง</strong>
                  หากจำเป็นต้องดม ให้ใช้มือพัดไอสารเคมีเข้าหาจมูกเบาๆ ห้ามสูดดมตรงๆ จากปากหลอด
                </div>
              </div>

              <div className="bg-white p-3 rounded-xl border border-emerald-100 flex items-start gap-2">
                <span>🛢️</span>
                <div>
                  <strong className="font-black text-slate-900 block">เก็บโลหะไวไฟในน้ำมัน</strong>
                  โลหะกลุ่มแอลคาไล (Na, K) ทำปฏิกิริยารุนแรงกับน้ำและอากาศ ต้องเก็บในน้ำมันพาราฟินเสมอ
                </div>
              </div>
            </div>
          </div>

        </div>
      )}

      {/* ========================================================
          COMPOUND INSPECTION MODAL (เมื่อคลิกดูสารที่ค้นพบแล้ว)
         ======================================================== */}
      {inspectCompound && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white w-full max-w-lg rounded-3xl p-6 shadow-2xl border border-slate-200 space-y-4 relative">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <span className="text-4xl">{inspectCompound.emoji}</span>
                <div>
                  <h4 className="font-black text-base text-slate-900">{inspectCompound.nameTh}</h4>
                  <p className="text-xs text-indigo-600 font-extrabold">{inspectCompound.formula} ({inspectCompound.nameEn})</p>
                </div>
              </div>

              <button
                onClick={() => setInspectCompound(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center font-bold"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200 space-y-1">
                <span className="text-[10px] text-slate-400 font-bold">สมการเคมี (Chemical Equation):</span>
                <div className="font-mono font-bold text-slate-900 text-sm bg-white p-2 rounded-xl border border-slate-200">
                  {inspectCompound.equation}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200">
                  <span className="text-[10px] text-slate-400 font-bold block">ชนิดพันธะ:</span>
                  <span className="font-bold text-slate-800 text-[11px] block">{inspectCompound.bondTypeTh}</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200">
                  <span className="text-[10px] text-slate-400 font-bold block">สถานะที่อุณหภูมิห้อง:</span>
                  <span className="font-bold text-slate-800 text-[11px] block">{inspectCompound.stateTh}</span>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-[11px] font-black text-slate-700 block">ประโยชน์ในชีวิตประจำวัน:</span>
                <p className="text-slate-600 font-medium leading-relaxed bg-emerald-50/60 p-3 rounded-2xl border border-emerald-100">
                  {inspectCompound.dailyLifeUse}
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-[11px] font-black text-amber-800 block">เกร็ดความรู้สำหรับสอบเคมี:</span>
                <p className="text-amber-900 font-medium leading-relaxed bg-amber-50 p-3 rounded-2xl border border-amber-200">
                  {inspectCompound.examTip}
                </p>
              </div>
            </div>

            <button
              onClick={() => setInspectCompound(null)}
              className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-black text-xs rounded-2xl transition-colors"
            >
              ปิดหน้าต่าง
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
