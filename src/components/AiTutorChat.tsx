'use client';

import React, { useState, useRef, useEffect } from 'react';
import { UserProfile, ChatMessage } from '@/types';
import { Send, Mic, Volume2, Sparkles, Loader2 } from 'lucide-react';
import { speakChinese, sfx, createSpeechRecognizer } from '@/lib/speech';

interface AiTutorChatProps {
  activeProfile: UserProfile;
  onEarnReward?: (stars: number) => void;
}

const PRESET_TOPICS = [
  { label: '👋 ทักทาย', prompt: '你好！你是小熊猫宝宝吗？' },
  { label: '🧋 ชานมไข่มุก', prompt: '我想喝一杯冰奶茶，好喝吗？' },
  { label: '🐱 เล่าเรื่องสัตว์เลี้ยง', prompt: '我家有一只可爱的小猫，我很喜欢它。' },
  { label: '🍎 ซื้อผลไม้', prompt: '请问红苹果一个多少钱？' },
];

export const AiTutorChat: React.FC<AiTutorChatProps> = ({ activeProfile, onEarnReward }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      text: '你好！我是小熊猫宝宝 🐼🎋 很高兴能陪你练习中文！今天你想和我聊些什么呢？',
      pinyin: 'Nǐ hǎo! Wǒ shì xiǎoxióngmāo bǎobao, hěn gāoxìng néng péi nǐ liànxí zhōngwén! Jīntiān nǐ xiǎng hé wǒ liáo xiē shénme ne?',
      thai: 'สวัสดีจ้า! ฉันคือแพนด้าน้อยเป่าเปา ดีใจมากที่ได้ฝึกภาษาจีนกับหนูนะ วันนี้อยากคุยเรื่องอะไรกับเป่าเปาดีเอ่ย?',
      timestamp: Date.now(),
    },
  ]);

  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: text.trim(),
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text.trim(),
          profileName: activeProfile.name,
        }),
      });

      const data = await res.json();

      if (data.success) {
        const botMsg: ChatMessage = {
          id: `bot-${Date.now()}`,
          sender: 'assistant',
          text: data.text,
          pinyin: data.pinyin,
          thai: data.thai,
          timestamp: Date.now(),
        };

        setMessages((prev) => [...prev, botMsg]);
        sfx.playCorrect();
        speakChinese(data.text);

        if (onEarnReward) onEarnReward(3);
      } else {
        throw new Error(data.error);
      }
    } catch (e) {
      console.error(e);
      setMessages((prev) => [
        ...prev,
        {
          id: `err-${Date.now()}`,
          sender: 'assistant',
          text: 'เป่าเปากำลังคิดคำตอบอยู่น้า ลองถามใหม่อีกทีนะจ๊ะ 🐼',
          timestamp: Date.now(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Mic Speech Input
  const handleStartVoice = () => {
    if (isRecording) return;
    setIsRecording(true);

    const recognizer = createSpeechRecognizer(
      (transcript) => {
        setIsRecording(false);
        setInputText(transcript);
        handleSendMessage(transcript);
      },
      () => setIsRecording(false),
      () => setIsRecording(false)
    );

    if (recognizer) {
      try {
        recognizer.start();
      } catch (e) {
        setIsRecording(false);
      }
    } else {
      setIsRecording(false);
      alert('เบราว์เซอร์นี้ยังไม่รองรับระบบตรวจจับไมโครโฟน');
    }
  };

  return (
    <div className="max-w-2xl mx-auto flex flex-col h-[650px] bg-white rounded-3xl shadow-xl border border-rose-100 overflow-hidden">
      {/* Chat Header */}
      <div className="bg-gradient-to-r from-rose-500 to-amber-500 p-4 text-white flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-3xl shadow-inner">
            🐼
          </div>
          <div>
            <h3 className="font-black text-lg flex items-center gap-2">
              <span>เป่าเปา AI ติวเตอร์</span>
              <span className="text-xs bg-emerald-400 text-slate-900 px-2 py-0.5 rounded-full font-bold">
                Online
              </span>
            </h3>
            <p className="text-xs text-rose-100">
              เพื่อนคุยภาษาจีนของ {activeProfile.nickname} (Gemini AI Powered)
            </p>
          </div>
        </div>

        <button
          onClick={() => speakChinese('你好，我是小熊猫宝宝')}
          className="p-2 bg-white/20 hover:bg-white/30 rounded-xl transition-colors"
          title="ฟังเสียงเป่าเปา"
        >
          <Volume2 className="w-5 h-5" />
        </button>
      </div>

      {/* Preset Scenario Topic Pills */}
      <div className="bg-rose-50/70 p-2.5 flex gap-2 overflow-x-auto border-b border-rose-100 scrollbar-none">
        {PRESET_TOPICS.map((topic, i) => (
          <button
            key={i}
            onClick={() => handleSendMessage(topic.prompt)}
            className="px-3 py-1.5 bg-white hover:bg-rose-100 text-rose-700 border border-rose-200 rounded-xl text-xs font-bold whitespace-nowrap transition-colors shadow-sm flex items-center gap-1"
          >
            <Sparkles className="w-3 h-3 text-amber-500" />
            <span>{topic.label}</span>
          </button>
        ))}
      </div>

      {/* Messages List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
        {messages.map((msg) => {
          const isUser = msg.sender === 'user';
          return (
            <div
              key={msg.id}
              className={`flex items-start gap-2.5 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
            >
              {/* Avatar */}
              <div
                className={`w-9 h-9 rounded-2xl flex items-center justify-center text-lg flex-shrink-0 shadow-sm ${
                  isUser ? 'bg-amber-400 text-slate-900' : 'bg-rose-500 text-white'
                }`}
              >
                {isUser ? activeProfile.avatar : '🐼'}
              </div>

              {/* Message Bubble */}
              <div
                className={`max-w-[80%] rounded-3xl p-4 shadow-sm text-sm ${
                  isUser
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-tr-none'
                    : 'bg-white border border-rose-100 text-slate-800 rounded-tl-none'
                }`}
              >
                {/* Chinese Text */}
                <p className="font-bold text-base leading-relaxed tracking-wide">
                  {msg.text}
                </p>

                {/* Pinyin if available */}
                {msg.pinyin && (
                  <p className="text-xs text-rose-500 font-semibold mt-1">
                    {msg.pinyin}
                  </p>
                )}

                {/* Thai Translation if available */}
                {msg.thai && (
                  <p className="text-xs text-slate-500 mt-1.5 border-t border-slate-100 pt-1.5">
                    {msg.thai}
                  </p>
                )}

                {/* Speak button for assistant */}
                {!isUser && (
                  <button
                    onClick={() => speakChinese(msg.text)}
                    className="mt-2 text-xs flex items-center gap-1 text-rose-600 hover:text-rose-800 font-bold"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>ฟังเสียงอ่าน</span>
                  </button>
                )}
              </div>
            </div>
          );
        })}

        {isLoading && (
          <div className="flex items-center gap-2 text-slate-500 text-xs p-2">
            <Loader2 className="w-4 h-4 animate-spin text-rose-500" />
            <span>เป่าเปากำลังคิดคำตอบภาษาจีน... 🎋</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Bar */}
      <div className="p-3 bg-white border-t border-slate-100 flex items-center gap-2">
        <button
          onClick={handleStartVoice}
          className={`p-3 rounded-2xl transition-all shadow-md ${
            isRecording
              ? 'bg-red-500 text-white animate-pulse'
              : 'bg-rose-50 text-rose-600 hover:bg-rose-100'
          }`}
          title="กดพูดผ่านไมค์มือถือ"
        >
          <Mic className="w-5 h-5" />
        </button>

        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder={isRecording ? 'กำลังฟังเสียงพูดของคุณ...' : 'พิมพ์ภาษาจีนหรือภาษาไทยเพื่อคุยกับเป่าเปา...'}
          className="flex-1 px-4 py-2.5 bg-slate-100 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-rose-400 text-slate-800"
        />

        <button
          onClick={() => handleSendMessage()}
          disabled={!inputText.trim() || isLoading}
          className="p-3 bg-rose-500 hover:bg-rose-600 text-white rounded-2xl shadow-md disabled:opacity-40 transition-colors"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
