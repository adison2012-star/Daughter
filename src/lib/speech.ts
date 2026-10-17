'use client';

// Cached voices to ensure immediate availability and voice consistency
let cachedVoices: SpeechSynthesisVoice[] = [];

function loadVoices(): SpeechSynthesisVoice[] {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return [];
  if (cachedVoices.length > 0) return cachedVoices;
  const voices = window.speechSynthesis.getVoices();
  if (voices && voices.length > 0) {
    cachedVoices = voices;
  }
  return cachedVoices;
}

if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  loadVoices();
  window.speechSynthesis.onvoiceschanged = () => {
    cachedVoices = window.speechSynthesis.getVoices();
  };
}

/**
 * Finds the best Chinese voice (Prioritizing standard Mandarin zh-CN clear voices)
 */
function getBestChineseVoice(): SpeechSynthesisVoice | null {
  const voices = loadVoices();
  if (voices.length === 0) return null;

  // Preferred Apple iOS & Android standard Mandarin voices:
  // "Tingting" (iOS standard Beijing Mandarin female), "Lili", "Meijia", "Siri" zh-CN
  const preferredNames = ['tingting', 'ting-ting', 'lili', 'meijia', 'xiaoxiao', 'siri', 'natural'];

  for (const pref of preferredNames) {
    const match = voices.find(
      (v) =>
        (v.lang === 'zh-CN' || v.lang === 'zh_CN') &&
        v.name.toLowerCase().includes(pref)
    );
    if (match) return match;
  }

  // Fallback to any zh-CN voice (avoiding zh-HK Cantonese)
  const anyMandarin = voices.find((v) => v.lang === 'zh-CN' || v.lang === 'zh_CN');
  if (anyMandarin) return anyMandarin;

  const mandarinByName = voices.find(
    (v) =>
      (v.name.toLowerCase().includes('mandarin') || v.name.toLowerCase().includes('chinese')) &&
      !v.name.toLowerCase().includes('cantonese') &&
      !v.lang.includes('HK')
  );
  if (mandarinByName) return mandarinByName;

  return voices.find((v) => v.lang.startsWith('zh')) || null;
}

/**
 * Finds the best English voice (Prioritizing friendly, standard US English voices)
 */
function getBestEnglishVoice(): SpeechSynthesisVoice | null {
  const voices = loadVoices();
  if (voices.length === 0) return null;

  // Preferred friendly Apple iOS & Android voices for kids:
  // "Samantha" (iOS standard US female), "Ava", "Allison", "Victoria", "Siri"
  const preferredNames = ['samantha', 'ava', 'allison', 'victoria', 'siri', 'jenny', 'karen', 'alex'];

  for (const pref of preferredNames) {
    const match = voices.find(
      (v) =>
        (v.lang === 'en-US' || v.lang === 'en_US') &&
        v.name.toLowerCase().includes(pref)
    );
    if (match) return match;
  }

  const anyUS = voices.find((v) => v.lang === 'en-US' || v.lang === 'en_US');
  if (anyUS) return anyUS;

  const anyGB = voices.find((v) => v.lang === 'en-GB' || v.lang === 'en_GB');
  if (anyGB) return anyGB;

  return voices.find((v) => v.lang.startsWith('en')) || null;
}

/**
 * Finds the best Thai voice
 */
function getBestThaiVoice(): SpeechSynthesisVoice | null {
  const voices = loadVoices();
  if (voices.length === 0) return null;

  const match = voices.find((v) => v.lang === 'th-TH' || v.lang === 'th_TH');
  if (match) return match;

  return voices.find((v) => v.lang.startsWith('th')) || null;
}

// Speech Synthesis (TTS)
export function speakChinese(text: string, rate: number = 0.85) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'zh-CN';
  utterance.rate = rate; // slightly slower for young learners
  utterance.pitch = 1.05; // slightly higher and clearer for kids

  const voice = getBestChineseVoice();
  if (voice) {
    utterance.voice = voice;
  }

  window.speechSynthesis.speak(utterance);
}

export function speakThai(text: string, rate: number = 0.9) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'th-TH';
  utterance.rate = rate;

  const voice = getBestThaiVoice();
  if (voice) {
    utterance.voice = voice;
  }

  window.speechSynthesis.speak(utterance);
}

export function speakEnglish(text: string, rate: number = 0.9) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.rate = rate;
  utterance.pitch = 1.05;

  const voice = getBestEnglishVoice();
  if (voice) {
    utterance.voice = voice;
  }

  window.speechSynthesis.speak(utterance);
}

// Built-in Web Audio Sound Effects (No external mp3 downloads required!)
class SoundEffectsManager {
  private ctx: AudioContext | null = null;

  private getContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  // Cheerful correct chime (C5 -> E5 -> G5)
  playCorrect() {
    const ctx = this.getContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    const notes = [523.25, 659.25, 783.99]; // C5, E5, G5
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.08);

      gain.gain.setValueAtTime(0, now + idx * 0.08);
      gain.gain.linearRampToValueAtTime(0.2, now + idx * 0.08 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.25);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + idx * 0.08);
      osc.stop(now + idx * 0.08 + 0.26);
    });
  }

  // Gentle soft pop for minor retry
  playSoftTryAgain() {
    const ctx = this.getContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(329.63, now); // E4
    osc.frequency.exponentialRampToValueAtTime(261.63, now + 0.15); // C4

    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.2);
  }

  // Fanfare when completing a word or star bonus
  playStarFanfare() {
    const ctx = this.getContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    const chord = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
    chord.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.06);

      gain.gain.setValueAtTime(0, now + idx * 0.06);
      gain.gain.linearRampToValueAtTime(0.25, now + idx * 0.06 + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.45);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + idx * 0.06);
      osc.stop(now + idx * 0.06 + 0.5);
    });
  }

  // Crisp click sound for buttons and tabs
  playClick() {
    const ctx = this.getContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, now);
    osc.frequency.exponentialRampToValueAtTime(800, now + 0.04);

    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.06);
  }

  // Deep arcade explosion boom sound effect for chemical reactions
  playExplosion() {
    const ctx = this.getContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    // 1. Low frequency sub-bass boom
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(180, now);
    osc.frequency.exponentialRampToValueAtTime(25, now + 0.8);

    gain.gain.setValueAtTime(0.35, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.85);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.9);

    // 2. White noise blast for crunch/shatter
    try {
      const bufferSize = Math.floor(ctx.sampleRate * 0.5);
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      const noise = ctx.createBufferSource();
      noise.buffer = buffer;
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1200, now);
      filter.frequency.linearRampToValueAtTime(100, now + 0.5);

      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0.3, now);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.55);

      noise.connect(filter);
      filter.connect(noiseGain);
      noiseGain.connect(ctx.destination);
      noise.start(now);
      noise.stop(now + 0.6);
    } catch (e) {
      // Audio buffer fallback safe
    }
  }

  // Liquid bubbling sound for chemical lab mixing
  playBubble() {
    const ctx = this.getContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    [400, 600, 850].forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.05);
      osc.frequency.exponentialRampToValueAtTime(freq + 200, now + idx * 0.05 + 0.06);

      gain.gain.setValueAtTime(0.08, now + idx * 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.05 + 0.08);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + idx * 0.05);
      osc.stop(now + idx * 0.05 + 0.09);
    });
  }
}

export const sfx = new SoundEffectsManager();

// Web Speech Recognition for Chinese input
export interface SpeechRecognitionResult {
  transcript: string;
  isFinal: boolean;
}

export function createSpeechRecognizer(
  onResult: (text: string) => void,
  onError?: (err: unknown) => void,
  onEnd?: () => void
) {
  if (typeof window === 'undefined') return null;

  const SpeechRecognition =
    (window as unknown as { SpeechRecognition: unknown }).SpeechRecognition ||
    (window as unknown as { webkitSpeechRecognition: unknown }).webkitSpeechRecognition;

  if (!SpeechRecognition) {
    console.warn('SpeechRecognition API is not supported in this browser.');
    return null;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const recognition = new (SpeechRecognition as any)();
  recognition.lang = 'zh-CN';
  recognition.continuous = false;
  recognition.interimResults = false;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  recognition.onresult = (event: any) => {
    const text = event.results[0][0].transcript;
    onResult(text);
  };

  recognition.onerror = (event: unknown) => {
    if (onError) onError(event);
  };

  recognition.onend = () => {
    if (onEnd) onEnd();
  };

  return recognition;
}
