'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
  Mic,
  MicOff,
  Volume2,
  Play,
  RotateCcw,
  Sparkles,
  Award,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  MessageCircle,
  Compass,
  Zap,
  ArrowRight,
  UserCheck,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { speakChinese, sfx, createSpeechRecognizer } from '@/lib/speech';
import {
  evaluatePronunciation,
  PronunciationScoreResult,
  cleanChineseText,
} from '@/lib/pronunciationScorer';
import { SHADOWING_PHRASES, ShadowingPhrase } from '@/data/shadowingPhrases';
import {
  SITUATIONAL_SCENARIOS,
  SituationalScenario,
  DialogueTurn,
} from '@/data/speakingDialogues';
import { ToneCoach } from '@/components/ToneCoach';

interface ChineseSpeakingStudioProps {
  onEarnReward?: (stars: number) => void;
}

type SubTab = 'shadowing' | 'roleplay' | 'dragon_tone';

export const ChineseSpeakingStudio: React.FC<ChineseSpeakingStudioProps> = ({
  onEarnReward,
}) => {
  const [activeSubTab, setActiveSubTab] = useState<SubTab>('shadowing');

  // ==========================================
  // TAB 1: SHADOWING & VOICE SCORER STATE
  // ==========================================
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState<number>(0);
  const [speechRate, setSpeechRate] = useState<number>(0.85); // 0.85 = normal, 0.7 = slow
  const [isRecordingShadow, setIsRecordingShadow] = useState<boolean>(false);
  const [shadowScoreResult, setShadowScoreResult] = useState<PronunciationScoreResult | null>(null);
  const [shadowAudioUrl, setShadowAudioUrl] = useState<string | null>(null);
  const [isPlayingUserAudio, setIsPlayingUserAudio] = useState<boolean>(false);
  const [isNativeSpeaking, setIsNativeSpeaking] = useState<boolean>(false);

  // Audio & Recognition refs
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const activeRecognizerRef = useRef<any>(null);
  const userAudioPlayerRef = useRef<HTMLAudioElement | null>(null);

  // Filter phrases
  const filteredPhrases = SHADOWING_PHRASES.filter(
    (p) => selectedCategory === 'all' || p.category === selectedCategory
  );
  const currentPhrase: ShadowingPhrase =
    filteredPhrases[currentPhraseIndex] || filteredPhrases[0] || SHADOWING_PHRASES[0];

  const categories = [
    { id: 'all', label: 'ทั้งหมด', icon: '🌟' },
    { id: 'ทักทายและสุภาพ', label: 'ทักทายและสุภาพ', icon: '👋' },
    { id: 'ชีวิตประจำวัน', label: 'ชีวิตประจำวัน', icon: '🍚' },
    { id: 'อาหารและเครื่องดื่ม', label: 'อาหาร & ขนม', icon: '🧋' },
    { id: 'อารมณ์และความรู้สึก', label: 'อารมณ์ & รู้สึก', icon: '💖' },
  ];

  // Cleanup audio URLs
  useEffect(() => {
    return () => {
      if (shadowAudioUrl) URL.revokeObjectURL(shadowAudioUrl);
      if (userAudioPlayerRef.current) {
        userAudioPlayerRef.current.pause();
      }
    };
  }, [shadowAudioUrl]);

  // Reset scoring & recording on phrase change
  const handleSelectPhraseIndex = (newIdx: number) => {
    if (isRecordingShadow) stopShadowRecording();
    if (shadowAudioUrl) URL.revokeObjectURL(shadowAudioUrl);
    setShadowAudioUrl(null);
    setShadowScoreResult(null);
    setIsPlayingUserAudio(false);
    setCurrentPhraseIndex(newIdx);
  };

  // Play Native Chinese Audio with highlight
  const handlePlayNativeAudio = (text: string, rate: number = speechRate) => {
    setIsNativeSpeaking(true);
    speakChinese(text, rate);
    const estimatedDuration = Math.max(1200, (text.length * 400) / rate);
    setTimeout(() => {
      setIsNativeSpeaking(false);
    }, estimatedDuration);
  };

  // Start Shadowing Recording & Scoring
  const handleStartShadowRecording = async () => {
    if (isRecordingShadow) {
      stopShadowRecording();
      return;
    }

    try {
      if (shadowAudioUrl) {
        URL.revokeObjectURL(shadowAudioUrl);
        setShadowAudioUrl(null);
      }
      setShadowScoreResult(null);
      setIsPlayingUserAudio(false);

      // 1. Setup MediaRecorder for audio playback
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) audioChunksRef.current.push(e.data);
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: mediaRecorder.mimeType || 'audio/webm',
        });
        const url = URL.createObjectURL(audioBlob);
        setShadowAudioUrl(url);
        stream.getTracks().forEach((track) => track.stop());
      };

      mediaRecorder.start();
      mediaRecorderRef.current = mediaRecorder;
      setIsRecordingShadow(true);

      // 2. Setup Speech Recognition
      const pinyinTokens = currentPhrase.tokens.map((t) => t.pinyin);
      const recognizer = createSpeechRecognizer(
        (transcript) => {
          stopShadowRecording();
          const result = evaluatePronunciation(
            currentPhrase.hanzi,
            transcript,
            pinyinTokens
          );
          setShadowScoreResult(result);

          if (result.score >= 85) {
            sfx.playCorrect();
            confetti({
              particleCount: 50,
              spread: 70,
              origin: { y: 0.6 },
              colors: ['#10b981', '#f59e0b', '#ec4899'],
            });
            onEarnReward?.(15);
          } else if (result.score >= 60) {
            sfx.playCorrect();
            onEarnReward?.(5);
          } else {
            sfx.playSoftTryAgain();
          }
        },
        () => {
          stopShadowRecording();
        },
        () => {
          stopShadowRecording();
        }
      );

      if (recognizer) {
        activeRecognizerRef.current = recognizer;
        try {
          recognizer.start();
        } catch {
          // already started or not allowed
        }
      }
    } catch (err) {
      console.warn('Microphone access failed:', err);
      setIsRecordingShadow(false);
      alert('กรุณาอนุญาตการเข้าถึงไมโครโฟนบนเบราว์เซอร์เพื่อฝึกพูดนะจ๊ะ 🎙️');
    }
  };

  const stopShadowRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      try {
        mediaRecorderRef.current.stop();
      } catch {
        // ignore
      }
    }
    if (activeRecognizerRef.current) {
      try {
        activeRecognizerRef.current.stop();
      } catch {
        // ignore
      }
      activeRecognizerRef.current = null;
    }
    setIsRecordingShadow(false);
  };

  const handlePlayUserAudio = () => {
    if (!shadowAudioUrl) return;
    if (userAudioPlayerRef.current) {
      userAudioPlayerRef.current.pause();
    }
    const audio = new Audio(shadowAudioUrl);
    userAudioPlayerRef.current = audio;
    setIsPlayingUserAudio(true);
    audio.onended = () => setIsPlayingUserAudio(false);
    audio.onerror = () => setIsPlayingUserAudio(false);
    audio.play();
  };

  // ==========================================
  // TAB 2: ROLE-PLAY SITUATIONAL DIALOGUE STATE
  // ==========================================
  const [selectedScenario, setSelectedScenario] = useState<SituationalScenario | null>(null);
  const [currentTurnIndex, setCurrentTurnIndex] = useState<number>(0);
  const [completedTurns, setCompletedTurns] = useState<string[]>([]);
  const [isRoleplayRecording, setIsRoleplayRecording] = useState<boolean>(false);
  const [roleplayFeedback, setRoleplayFeedback] = useState<{
    success: boolean;
    text: string;
    transcript?: string;
  } | null>(null);
  const [showPinyinHint, setShowPinyinHint] = useState<boolean>(true);
  const [isScenarioFinished, setIsScenarioFinished] = useState<boolean>(false);

  const handleSelectScenario = (scenario: SituationalScenario) => {
    setSelectedScenario(scenario);
    setCurrentTurnIndex(0);
    setCompletedTurns([]);
    setRoleplayFeedback(null);
    setIsScenarioFinished(false);
    // Speak first NPC line
    if (scenario.turns[0]) {
      setTimeout(() => {
        speakChinese(scenario.turns[0].npcText, 0.85);
      }, 400);
    }
  };

  const handleStartRoleplaySpeech = () => {
    if (!selectedScenario) return;
    const currentTurn: DialogueTurn = selectedScenario.turns[currentTurnIndex];
    if (!currentTurn) return;

    if (isRoleplayRecording) {
      if (activeRecognizerRef.current) activeRecognizerRef.current.stop();
      setIsRoleplayRecording(false);
      return;
    }

    setIsRoleplayRecording(true);
    setRoleplayFeedback(null);

    const recognizer = createSpeechRecognizer(
      (transcript) => {
        setIsRoleplayRecording(false);
        const cleanRec = cleanChineseText(transcript);
        const cleanTarget = cleanChineseText(currentTurn.userTargetHanzi);

        // Check against target or accepted alternatives
        let isMatch =
          cleanRec.includes(cleanTarget) ||
          cleanTarget.includes(cleanRec) && cleanRec.length >= cleanTarget.length * 0.6;

        if (!isMatch && currentTurn.acceptedAlternatives) {
          for (const alt of currentTurn.acceptedAlternatives) {
            const cleanAlt = cleanChineseText(alt);
            if (cleanRec.includes(cleanAlt) || cleanAlt.includes(cleanRec)) {
              isMatch = true;
              break;
            }
          }
        }

        if (isMatch) {
          sfx.playCorrect();
          setRoleplayFeedback({
            success: true,
            text: `พูดได้ยอดเยี่ยมมาก! สำเนียงชัดเจน 👏`,
            transcript,
          });

          const newCompleted = [...completedTurns, currentTurn.id];
          setCompletedTurns(newCompleted);

          // Check if this was the last turn
          if (currentTurnIndex + 1 >= selectedScenario.turns.length) {
            setTimeout(() => {
              setIsScenarioFinished(true);
              sfx.playCorrect();
              confetti({
                particleCount: 80,
                spread: 90,
                origin: { y: 0.5 },
                colors: ['#ec4899', '#f59e0b', '#3b82f6', '#10b981'],
              });
              onEarnReward?.(selectedScenario.rewardStars);
            }, 1200);
          } else {
            // Auto advance after 1.8 seconds
            setTimeout(() => {
              const nextIdx = currentTurnIndex + 1;
              setCurrentTurnIndex(nextIdx);
              setRoleplayFeedback(null);
              // Speak next NPC line
              const nextTurn = selectedScenario.turns[nextIdx];
              if (nextTurn) {
                speakChinese(nextTurn.npcText, 0.85);
              }
            }, 1800);
          }
        } else {
          sfx.playSoftTryAgain();
          setRoleplayFeedback({
            success: false,
            text: `ได้ยินเป็น "${transcript}" ยังไม่ตรงกับที่ตัวละครต้องการ ลองพูดใหม่อีกครั้งนะจ๊ะ 💪`,
            transcript,
          });
        }
      },
      () => {
        setIsRoleplayRecording(false);
      },
      () => {
        setIsRoleplayRecording(false);
      }
    );

    if (recognizer) {
      activeRecognizerRef.current = recognizer;
      try {
        recognizer.start();
      } catch {
        // ignore
      }
    } else {
      setIsRoleplayRecording(false);
      alert('เบราว์เซอร์นี้ยังไม่รองรับระบบตรวจจับไมโครโฟน แนะนำให้ใช้ Google Chrome หรือ Safari บน iPad/iPhone จ้า 🎙️');
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* ======================================================== */}
      {/* TOP STUDIO SWITCHER (3 PIXAR-STYLE SEGMENT TABS) */}
      {/* ======================================================== */}
      <div className="bg-white/90 backdrop-blur-md rounded-3xl p-2 sm:p-2.5 shadow-md border-2 border-rose-100 flex flex-wrap sm:flex-nowrap items-center justify-between gap-2">
        <button
          onClick={() => {
            sfx.playCorrect();
            setActiveSubTab('shadowing');
          }}
          className={`flex-1 min-w-[130px] flex items-center justify-center gap-2 py-3 px-3 sm:px-4 rounded-2xl font-black text-xs sm:text-sm transition-all duration-300 ${
            activeSubTab === 'shadowing'
              ? 'bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 text-white shadow-md scale-[1.02]'
              : 'text-slate-600 hover:bg-rose-50/80 hover:text-rose-600'
          }`}
        >
          <span className="text-base sm:text-lg">🎙️</span>
          <div className="text-left">
            <span className="block leading-tight">คาราโอเกะพูดตาม</span>
            <span
              className={`text-[10px] font-bold ${
                activeSubTab === 'shadowing' ? 'text-rose-100' : 'text-slate-400'
              }`}
            >
              วัดคะแนน 0–100% & A/B
            </span>
          </div>
        </button>

        <button
          onClick={() => {
            sfx.playCorrect();
            setActiveSubTab('roleplay');
          }}
          className={`flex-1 min-w-[130px] flex items-center justify-center gap-2 py-3 px-3 sm:px-4 rounded-2xl font-black text-xs sm:text-sm transition-all duration-300 ${
            activeSubTab === 'roleplay'
              ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-md scale-[1.02]'
              : 'text-slate-600 hover:bg-purple-50/80 hover:text-purple-600'
          }`}
        >
          <span className="text-base sm:text-lg">🎭</span>
          <div className="text-left">
            <span className="block leading-tight">สวมบทบาทสนทนา</span>
            <span
              className={`text-[10px] font-bold ${
                activeSubTab === 'roleplay' ? 'text-indigo-100' : 'text-slate-400'
              }`}
            >
              6 สถานการณ์จริง
            </span>
          </div>
        </button>

        <button
          onClick={() => {
            sfx.playCorrect();
            setActiveSubTab('dragon_tone');
          }}
          className={`flex-1 min-w-[130px] flex items-center justify-center gap-2 py-3 px-3 sm:px-4 rounded-2xl font-black text-xs sm:text-sm transition-all duration-300 ${
            activeSubTab === 'dragon_tone'
              ? 'bg-gradient-to-r from-teal-500 via-emerald-500 to-amber-500 text-white shadow-md scale-[1.02]'
              : 'text-slate-600 hover:bg-emerald-50/80 hover:text-emerald-600'
          }`}
        >
          <span className="text-base sm:text-lg">🐉</span>
          <div className="text-left">
            <span className="block leading-tight">มังกรเหินเวหา</span>
            <span
              className={`text-[10px] font-bold ${
                activeSubTab === 'dragon_tone' ? 'text-emerald-100' : 'text-slate-400'
              }`}
            >
              โค้ชกราฟ 4 วรรณยุกต์
            </span>
          </div>
        </button>
      </div>

      {/* ======================================================== */}
      {/* SUB-TAB 1: SHADOWING KARAOKE & REAL-TIME VOICE SCORING */}
      {/* ======================================================== */}
      {activeSubTab === 'shadowing' && (
        <div className="space-y-5 animate-in fade-in duration-300">
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 rounded-3xl p-5 sm:p-6 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-3xl shadow-inner border border-white/30 shrink-0">
                🎙️
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-black flex items-center gap-2">
                  <span>คาราโอเกะพูดตาม & ตรวจสำเนียงเจ้าของภาษา</span>
                </h2>
                <p className="text-rose-100 text-xs sm:text-sm mt-0.5 max-w-md">
                  ฟังต้นฉบับ ปรับความเร็ว 1.0x / 0.75x แล้วกดไมค์พูดตาม 
                  ระบบจะตรวจวัดความถูกต้อง 0–100% พร้อมวิเคราะห์คำต่อคำ!
                </p>
              </div>
            </div>

            {/* Speed Control Pill */}
            <div className="bg-white/20 backdrop-blur-md p-1.5 rounded-2xl flex items-center gap-1 border border-white/30 shrink-0">
              <span className="text-[11px] font-black px-2 text-rose-100">ความเร็วเสียง:</span>
              <button
                onClick={() => {
                  setSpeechRate(0.85);
                  sfx.playCorrect();
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all ${
                  speechRate === 0.85
                    ? 'bg-white text-rose-600 shadow-sm'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                1.0x ปกติ
              </button>
              <button
                onClick={() => {
                  setSpeechRate(0.68);
                  sfx.playCorrect();
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all ${
                  speechRate < 0.8
                    ? 'bg-white text-rose-600 shadow-sm'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                0.75x ช้าชัด
              </button>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  handleSelectPhraseIndex(0);
                  sfx.playCorrect();
                }}
                className={`px-3.5 py-2 rounded-2xl text-xs font-black whitespace-nowrap flex items-center gap-1.5 transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-rose-500 text-white shadow-md scale-102'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-rose-50/50'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Main Shadowing Stage Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-rose-100/80 shadow-lg relative overflow-hidden">
            {/* Top Navigation between phrases */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-rose-100">
              <button
                onClick={() => {
                  const prevIdx =
                    (currentPhraseIndex - 1 + filteredPhrases.length) % filteredPhrases.length;
                  handleSelectPhraseIndex(prevIdx);
                  sfx.playCorrect();
                }}
                className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-rose-50 text-slate-600 hover:text-rose-600 font-bold text-xs flex items-center gap-1 transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>ประโยคก่อน</span>
              </button>

              <div className="text-center">
                <span className="text-xs font-black text-slate-500">
                  ประโยคที่ {currentPhraseIndex + 1} จาก {filteredPhrases.length}
                </span>
                <div className="flex items-center justify-center gap-1.5 mt-0.5">
                  <span className="text-[10px] bg-rose-100 text-rose-700 font-black px-2.5 py-0.5 rounded-full">
                    {currentPhrase.categoryIcon} {currentPhrase.category}
                  </span>
                  <span className="text-[10px] bg-amber-100 text-amber-800 font-black px-2 py-0.5 rounded-full">
                    {currentPhrase.difficulty === 'easy'
                      ? 'ระดับง่าย'
                      : currentPhrase.difficulty === 'medium'
                      ? 'ระดับกลาง'
                      : 'ระดับท้าทาย'}
                  </span>
                </div>
              </div>

              <button
                onClick={() => {
                  const nextIdx = (currentPhraseIndex + 1) % filteredPhrases.length;
                  handleSelectPhraseIndex(nextIdx);
                  sfx.playCorrect();
                }}
                className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-rose-50 text-slate-600 hover:text-rose-600 font-bold text-xs flex items-center gap-1 transition-all"
              >
                <span>ประโยคถัดไป</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Karaoke Hanzi Display */}
            <div className="text-center py-4 sm:py-6">
              {/* Tokenized Hanzi & Pinyin */}
              <div className="flex flex-wrap items-end justify-center gap-2 sm:gap-3 mb-4">
                {currentPhrase.tokens.map((token, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col items-center px-2 py-1.5 rounded-2xl transition-all duration-200 ${
                      isNativeSpeaking
                        ? 'bg-rose-50 scale-105 border border-rose-200'
                        : 'hover:bg-slate-50'
                    }`}
                  >
                    <span className="text-sm sm:text-base font-extrabold text-amber-600 tracking-wider">
                      {token.pinyin}
                    </span>
                    <span className="text-3xl sm:text-5xl font-black text-slate-800 mt-1 select-none font-serif">
                      {token.char}
                    </span>
                  </div>
                ))}
              </div>

              {/* Thai Translation */}
              <p className="text-base sm:text-lg font-bold text-slate-600 mb-2">
                &ldquo;{currentPhrase.thai}&rdquo;
              </p>

              {/* Phonetic Master Tip */}
              <div className="max-w-md mx-auto bg-amber-50/70 border border-amber-200/80 rounded-2xl p-2.5 sm:p-3 text-xs text-amber-900 flex items-start gap-2 text-left">
                <Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-black block text-amber-950">เทคนิคการออกเสียง:</span>
                  <span>{currentPhrase.tip}</span>
                </div>
              </div>
            </div>

            {/* Action Bar: Native Audio + Record Button */}
            <div className="mt-6 pt-6 border-t border-rose-100 flex flex-col sm:flex-row items-center justify-center gap-3">
              {/* 1. Listen Native Audio Button */}
              <button
                onClick={() => handlePlayNativeAudio(currentPhrase.hanzi)}
                disabled={isNativeSpeaking}
                className={`btn-pixar btn-pixar-amber px-5 py-3 rounded-2xl font-black text-xs sm:text-sm flex items-center gap-2 shadow-sm ${
                  isNativeSpeaking ? 'animate-pulse opacity-80' : ''
                }`}
              >
                <Volume2 className="w-5 h-5 text-amber-800" />
                <span>
                  {isNativeSpeaking ? 'กำลังเล่นเสียงต้นฉบับ...' : '🔊 ฟังเสียงเจ้าของภาษา'}
                </span>
              </button>

              {/* 2. Speak & Record Button */}
              <button
                onClick={handleStartShadowRecording}
                className={`px-6 py-3 rounded-2xl font-black text-xs sm:text-sm flex items-center gap-2 shadow-lg transition-all ${
                  isRecordingShadow
                    ? 'bg-rose-600 text-white animate-pulse ring-4 ring-rose-300'
                    : 'bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white hover:scale-103'
                }`}
              >
                {isRecordingShadow ? (
                  <>
                    <MicOff className="w-5 h-5 animate-spin" />
                    <span>กำลังฟังเสียงหนู... (กดเพื่อหยุด)</span>
                  </>
                ) : (
                  <>
                    <Mic className="w-5 h-5" />
                    <span>🎙️ กดไมค์แล้วฝึกพูดตาม</span>
                  </>
                )}
              </button>
            </div>

            {/* Live Recording Notice */}
            {isRecordingShadow && (
              <div className="mt-4 text-center animate-in fade-in">
                <div className="inline-flex items-center gap-2 bg-rose-50 border border-rose-200 text-rose-700 px-4 py-2 rounded-full text-xs font-black">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
                  <span>กำลังบันทึกเสียงและถอดความภาษาจีน... พูดได้เลยค่ะ!</span>
                </div>
              </div>
            )}

            {/* ======================================================== */}
            {/* PRONUNCIATION SCORE CARD (Option 1) */}
            {/* ======================================================== */}
            {shadowScoreResult && (
              <div className="mt-8 pt-6 border-t-2 border-rose-100 animate-in slide-in-from-bottom duration-300">
                <div
                  className={`rounded-3xl p-5 sm:p-6 border-2 shadow-md ${
                    shadowScoreResult.score >= 85
                      ? 'bg-emerald-50/70 border-emerald-200'
                      : shadowScoreResult.score >= 60
                      ? 'bg-amber-50/70 border-amber-200'
                      : 'bg-rose-50/70 border-rose-200'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    {/* Score Gauge Circle */}
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-18 h-18 sm:w-20 sm:h-20 rounded-3xl flex flex-col items-center justify-center font-black shadow-inner border-2 ${
                          shadowScoreResult.score >= 85
                            ? 'bg-emerald-500 text-white border-emerald-300'
                            : shadowScoreResult.score >= 60
                            ? 'bg-amber-500 text-white border-amber-300'
                            : 'bg-rose-500 text-white border-rose-300'
                        }`}
                      >
                        <span className="text-2xl sm:text-3xl leading-none">
                          {shadowScoreResult.score}
                        </span>
                        <span className="text-[10px] uppercase tracking-wider opacity-90">
                          คะแนน
                        </span>
                      </div>

                      <div>
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-black shadow-xs mb-1 ${
                            shadowScoreResult.score >= 85
                              ? 'bg-emerald-100 text-emerald-800'
                              : shadowScoreResult.score >= 60
                              ? 'bg-amber-100 text-amber-800'
                              : 'bg-rose-100 text-rose-800'
                          }`}
                        >
                          {shadowScoreResult.gradeBadge}
                        </span>
                        <h4 className="font-black text-slate-800 text-sm sm:text-base">
                          {shadowScoreResult.praiseText}
                        </h4>
                        <p className="text-xs text-slate-600 mt-0.5">
                          เสียงที่ระบบได้ยิน:{' '}
                          <span className="font-extrabold text-slate-900">
                            &ldquo;{shadowScoreResult.recognizedText}&rdquo;
                          </span>
                        </p>
                      </div>
                    </div>

                    {/* Reward Stars Pill */}
                    {shadowScoreResult.score >= 85 && (
                      <div className="flex items-center gap-1.5 bg-yellow-400 text-yellow-950 font-black px-4 py-2 rounded-2xl shadow-sm text-xs sm:text-sm animate-bounce">
                        <Sparkles className="w-4 h-4 fill-yellow-950" />
                        <span>รับรางวัล +15 ดาว ⭐</span>
                      </div>
                    )}
                  </div>

                  {/* Character-by-Character Diagnostics (Green, Yellow, Red) */}
                  <div className="mt-5 pt-4 border-t border-slate-200/60">
                    <span className="text-xs font-black text-slate-600 block mb-2">
                      🔍 วิเคราะห์ความชัดเจนรายตัวอักษร:
                    </span>
                    <div className="flex flex-wrap items-center gap-2">
                      {shadowScoreResult.charDetails.map((detail, idx) => (
                        <div
                          key={idx}
                          className={`px-3 py-1.5 rounded-xl border flex items-center gap-1.5 text-xs font-black ${
                            detail.status === 'correct'
                              ? 'bg-emerald-100 border-emerald-300 text-emerald-800'
                              : detail.status === 'close'
                              ? 'bg-amber-100 border-amber-300 text-amber-800'
                              : 'bg-rose-100 border-rose-300 text-rose-800'
                          }`}
                        >
                          <span className="text-sm font-serif">{detail.char}</span>
                          {detail.pinyin && (
                            <span className="text-[11px] opacity-80">({detail.pinyin})</span>
                          )}
                          <span>
                            {detail.status === 'correct'
                              ? '🟢 ชัดเจน'
                              : detail.status === 'close'
                              ? '🟡 ใกล้เคียง'
                              : '🔴 ยังไม่ชัด'}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Actionable Coach Tip */}
                    <div className="mt-3 bg-white/80 rounded-2xl p-3 border border-slate-200/80 text-xs text-slate-700 flex items-start gap-2">
                      <HelpCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-black text-slate-900">คำแนะนำจากโค้ช: </span>
                        <span>{shadowScoreResult.tipText}</span>
                      </div>
                    </div>
                  </div>

                  {/* ======================================================== */}
                  {/* A/B AUDIO COMPARISON PLAYER (Option 3) */}
                  {/* ======================================================== */}
                  <div className="mt-5 pt-4 border-t border-slate-200/60">
                    <span className="text-xs font-black text-slate-700 block mb-2.5">
                      🎧 ห้องเปรียบเทียบเสียง (A/B Audio Comparison):
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {/* Native Track */}
                      <button
                        onClick={() => handlePlayNativeAudio(currentPhrase.hanzi)}
                        className="p-3 rounded-2xl bg-white border-2 border-amber-200 hover:border-amber-400 flex items-center justify-between transition-all group"
                      >
                        <div className="flex items-center gap-2.5 text-left">
                          <div className="w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 font-bold group-hover:scale-105 transition-transform">
                            🔊
                          </div>
                          <div>
                            <span className="text-xs font-black text-slate-800 block">
                              เสียงต้นฉบับ A (Native)
                            </span>
                            <span className="text-[10px] text-slate-500 font-bold">
                              สำเนียงมาตรฐานปักกิ่ง ({speechRate === 0.85 ? '1.0x' : '0.75x'})
                            </span>
                          </div>
                        </div>
                        <Play className="w-4 h-4 text-amber-600 fill-amber-600" />
                      </button>

                      {/* User Track */}
                      <button
                        onClick={handlePlayUserAudio}
                        disabled={!shadowAudioUrl}
                        className={`p-3 rounded-2xl bg-white border-2 flex items-center justify-between transition-all group ${
                          shadowAudioUrl
                            ? 'border-rose-200 hover:border-rose-400 cursor-pointer'
                            : 'border-slate-200 opacity-60 cursor-not-allowed'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 text-left">
                          <div className="w-9 h-9 rounded-xl bg-rose-100 flex items-center justify-center text-rose-700 font-bold group-hover:scale-105 transition-transform">
                            {isPlayingUserAudio ? '🎧' : '🎙️'}
                          </div>
                          <div>
                            <span className="text-xs font-black text-slate-800 block">
                              เสียงของหนู B (User Voice)
                            </span>
                            <span className="text-[10px] text-slate-500 font-bold">
                              {isPlayingUserAudio ? 'กำลังเล่นเสียงที่บันทึก...' : 'แตะเพื่อฟังเทียบเสียง'}
                            </span>
                          </div>
                        </div>
                        <Play
                          className={`w-4 h-4 ${
                            isPlayingUserAudio
                              ? 'text-rose-600 fill-rose-600 animate-pulse'
                              : 'text-slate-400'
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* SUB-TAB 2: ROLE-PLAY SITUATIONAL DIALOGUE (Option 2) */}
      {/* ======================================================== */}
      {activeSubTab === 'roleplay' && (
        <div className="space-y-5 animate-in fade-in duration-300">
          {!selectedScenario ? (
            /* Scenario Selection Grid */
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl p-5 sm:p-6 text-white shadow-xl flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-3xl shadow-inner border border-white/30 shrink-0">
                  🎭
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-black">
                    ห้องสนทนาสถานการณ์จริง (Role-Play Situations)
                  </h2>
                  <p className="text-indigo-100 text-xs sm:text-sm mt-0.5">
                    เลือกบทบาทจำลอง พูดคุยโต้ตอบกับตัวละครชาวจีน turn-by-turn แล้วรับดาวรางวัล!
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {SITUATIONAL_SCENARIOS.map((sc) => (
                  <div
                    key={sc.id}
                    onClick={() => {
                      sfx.playCorrect();
                      handleSelectScenario(sc);
                    }}
                    className="pixar-card p-5 cursor-pointer hover:scale-102 transition-all flex flex-col justify-between group border-2 border-indigo-100 hover:border-indigo-400"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-3xl group-hover:scale-110 transition-transform">
                          {sc.icon}
                        </span>
                        <span className="text-[10px] bg-indigo-50 text-indigo-700 font-black px-2.5 py-0.5 rounded-full border border-indigo-200">
                          {sc.badge}
                        </span>
                      </div>

                      <h3 className="font-black text-slate-800 text-base mb-1">
                        {sc.title}
                      </h3>
                      <p className="text-xs text-slate-500 font-bold mb-3 flex items-center gap-1">
                        <Compass className="w-3.5 h-3.5 text-indigo-500" />
                        <span>{sc.location}</span>
                      </p>

                      <div className="flex items-center gap-2 bg-slate-50 p-2 rounded-xl mb-3">
                        <span className="text-2xl">{sc.npcAvatar}</span>
                        <div>
                          <span className="text-xs font-black text-slate-800 block">
                            {sc.npcName}
                          </span>
                          <span className="text-[10px] text-slate-500 font-bold">
                            {sc.npcRole}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-black text-amber-600 flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 fill-amber-500" />
                        <span>+{sc.rewardStars} ดาว</span>
                      </span>
                      <span className="text-xs font-black text-indigo-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        <span>เริ่มคุย</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* Active Scenario Dialogue Screen */
            <div className="space-y-4">
              {/* Scenario Top Bar */}
              <div className="bg-white rounded-3xl p-4 sm:p-5 border-2 border-indigo-100 shadow-md flex items-center justify-between gap-3">
                <button
                  onClick={() => {
                    sfx.playCorrect();
                    setSelectedScenario(null);
                  }}
                  className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-indigo-50 text-slate-600 hover:text-indigo-600 font-bold text-xs flex items-center gap-1 transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>เปลี่ยนบทบาท</span>
                </button>

                <div className="text-center">
                  <h3 className="font-black text-slate-800 text-sm sm:text-base flex items-center justify-center gap-1.5">
                    <span>{selectedScenario.icon}</span>
                    <span>{selectedScenario.title}</span>
                  </h3>
                  <span className="text-[11px] font-bold text-indigo-600 block">
                    ประโยคที่ {currentTurnIndex + 1} จาก {selectedScenario.turns.length}
                  </span>
                </div>

                <div className="flex items-center gap-1 bg-amber-50 border border-amber-200 px-3 py-1 rounded-xl text-xs font-black text-amber-800">
                  <Sparkles className="w-3.5 h-3.5 fill-amber-500" />
                  <span>+{selectedScenario.rewardStars} ดาว</span>
                </div>
              </div>

              {/* Victory Celebration Screen */}
              {isScenarioFinished ? (
                <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-3xl p-8 text-white text-center shadow-xl space-y-4 animate-in zoom-in-95 duration-300">
                  <div className="w-20 h-20 mx-auto rounded-3xl bg-white/20 backdrop-blur-md flex items-center justify-center text-4xl shadow-inner border border-white/30">
                    🏆
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black">
                    ยอดเยี่ยมมาก! สนทนาบทบาทนี้สำเร็จแล้ว 🎉
                  </h3>
                  <p className="text-indigo-100 text-xs sm:text-sm max-w-md mx-auto">
                    หนูสามารถพูดคุยสื่อสารกับ {selectedScenario.npcName} ได้อย่างคล่องแคล่วและถูกต้อง มอบดาวรางวัลให้เลยจ้า!
                  </p>
                  <div className="inline-flex items-center gap-2 bg-yellow-400 text-yellow-950 font-black px-6 py-2.5 rounded-2xl shadow-md text-base animate-bounce">
                    <Sparkles className="w-5 h-5 fill-yellow-950" />
                    <span>+{selectedScenario.rewardStars} ดาววิชาภาษาจีน ⭐</span>
                  </div>
                  <div className="pt-4 flex items-center justify-center gap-3">
                    <button
                      onClick={() => handleSelectScenario(selectedScenario)}
                      className="px-5 py-2.5 rounded-2xl bg-white/20 hover:bg-white/30 text-white font-black text-xs sm:text-sm transition-all"
                    >
                      🔄 ฝึกซ้ำอีกรอบ
                    </button>
                    <button
                      onClick={() => setSelectedScenario(null)}
                      className="btn-pixar btn-pixar-amber px-6 py-2.5 rounded-2xl font-black text-xs sm:text-sm shadow-md"
                    >
                      🎭 เลือกบทบาทอื่น
                    </button>
                  </div>
                </div>
              ) : (
                /* Dialogue Timeline View */
                <div className="bg-white rounded-3xl p-5 sm:p-7 border-2 border-indigo-100/80 shadow-lg space-y-6">
                  {/* NPC Speech Bubble */}
                  {selectedScenario.turns[currentTurnIndex] && (
                    <div className="space-y-4">
                      {/* Character Bubble */}
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-indigo-50 border-2 border-indigo-200 flex items-center justify-center text-2xl shrink-0 shadow-xs">
                          {selectedScenario.npcAvatar}
                        </div>
                        <div className="flex-1 bg-gradient-to-br from-indigo-50/70 to-purple-50/50 border-2 border-indigo-100 rounded-3xl rounded-tl-sm p-4 sm:p-5 shadow-xs relative">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-black text-xs text-indigo-700">
                              {selectedScenario.npcName} ({selectedScenario.npcRole})
                            </span>
                            <button
                              onClick={() =>
                                speakChinese(
                                  selectedScenario.turns[currentTurnIndex].npcText,
                                  0.85
                                )
                              }
                              className="px-2.5 py-1 rounded-xl bg-white border border-indigo-200 hover:bg-indigo-100 text-indigo-700 font-bold text-xs flex items-center gap-1 transition-all"
                            >
                              <Volume2 className="w-3.5 h-3.5" />
                              <span>ฟังเสียง</span>
                            </button>
                          </div>

                          <p className="text-xs sm:text-sm font-extrabold text-amber-700 mb-1">
                            {selectedScenario.turns[currentTurnIndex].npcPinyin}
                          </p>
                          <p className="text-xl sm:text-2xl font-black text-slate-800 font-serif mb-2">
                            {selectedScenario.turns[currentTurnIndex].npcText}
                          </p>
                          <p className="text-xs font-bold text-slate-500">
                            &ldquo;{selectedScenario.turns[currentTurnIndex].npcThai}&rdquo;
                          </p>
                        </div>
                      </div>

                      {/* User Prompt / Action Area */}
                      <div className="mt-6 pt-5 border-t border-indigo-100">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-black text-slate-700 flex items-center gap-1.5">
                            <UserCheck className="w-4 h-4 text-rose-500" />
                            <span>ตาหนูพูดตอบกลับ:</span>
                            <span className="text-rose-600 font-extrabold">
                              {selectedScenario.turns[currentTurnIndex].userPrompt}
                            </span>
                          </span>

                          <button
                            onClick={() => setShowPinyinHint(!showPinyinHint)}
                            className="text-[11px] text-slate-500 hover:text-indigo-600 font-bold"
                          >
                            {showPinyinHint ? '🙈 ซ่อนเฉลย' : '👀 แสดงเฉลย'}
                          </button>
                        </div>

                        {/* Target Phrase Box */}
                        {showPinyinHint && (
                          <div className="bg-amber-50/60 border border-amber-200/80 rounded-2xl p-4 text-center mb-4">
                            <p className="text-xs font-extrabold text-amber-700 mb-0.5">
                              {selectedScenario.turns[currentTurnIndex].userPinyin}
                            </p>
                            <p className="text-2xl sm:text-3xl font-black text-slate-800 font-serif mb-1">
                              {selectedScenario.turns[currentTurnIndex].userTargetHanzi}
                            </p>
                            <p className="text-xs font-bold text-slate-500">
                              &ldquo;{selectedScenario.turns[currentTurnIndex].userThai}&rdquo;
                            </p>
                            <p className="text-[11px] text-amber-900 mt-2 font-medium bg-amber-100/60 inline-block px-3 py-1 rounded-full">
                              💡 {selectedScenario.turns[currentTurnIndex].hintTip}
                            </p>
                          </div>
                        )}

                        {/* Microphone Button */}
                        <div className="text-center">
                          <button
                            onClick={handleStartRoleplaySpeech}
                            className={`px-8 py-3.5 rounded-2xl font-black text-sm sm:text-base flex items-center justify-center gap-2 mx-auto shadow-lg transition-all ${
                              isRoleplayRecording
                                ? 'bg-rose-600 text-white animate-pulse ring-4 ring-rose-300'
                                : 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:scale-103'
                            }`}
                          >
                            {isRoleplayRecording ? (
                              <>
                                <MicOff className="w-5 h-5 animate-spin" />
                                <span>กำลังฟัง... แตะเพื่อหยุด</span>
                              </>
                            ) : (
                              <>
                                <Mic className="w-5 h-5" />
                                <span>🎙️ แตะไมค์แล้วพูดตอบโต้</span>
                              </>
                            )}
                          </button>
                        </div>

                        {/* Speech Feedback Message */}
                        {roleplayFeedback && (
                          <div
                            className={`mt-4 p-3.5 rounded-2xl border text-xs sm:text-sm font-black flex items-center gap-2.5 animate-in fade-in ${
                              roleplayFeedback.success
                                ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                                : 'bg-rose-50 border-rose-200 text-rose-800'
                            }`}
                          >
                            {roleplayFeedback.success ? (
                              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                            ) : (
                              <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
                            )}
                            <div>
                              <span>{roleplayFeedback.text}</span>
                              {roleplayFeedback.transcript && (
                                <span className="block text-[11px] opacity-80 mt-0.5">
                                  เสียงที่จับได้: &ldquo;{roleplayFeedback.transcript}&rdquo;
                                </span>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* ======================================================== */}
      {/* SUB-TAB 3: DRAGON PITCH TONE MASTER */}
      {/* ======================================================== */}
      {activeSubTab === 'dragon_tone' && (
        <div className="animate-in fade-in duration-300">
          <ToneCoach onEarnReward={onEarnReward} />
        </div>
      )}
    </div>
  );
};
