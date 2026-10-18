'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { RotateCcw, AlertTriangle, Home, Trash2 } from 'lucide-react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalErrorBoundary({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error('App Runtime Error Caught by ErrorBoundary:', error);
  }, [error]);

  const handleClearCacheAndReset = () => {
    if (typeof window !== 'undefined') {
      try {
        // Save current progress as raw backup in session storage before wiping
        const oldProfiles = localStorage.getItem('zhongwen_profiles');
        if (oldProfiles) sessionStorage.setItem('emergency_profiles_backup', oldProfiles);
        localStorage.clear();
      } catch (e) {
        console.warn('Failed to clear storage:', e);
      }
      window.location.href = '/';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-rose-50 to-sky-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border-2 border-rose-100 shadow-2xl text-center space-y-5 animate-fade-in">
        {/* Animated Icon */}
        <div className="w-16 h-16 mx-auto rounded-3xl bg-rose-100 text-rose-600 flex items-center justify-center shadow-inner text-3xl">
          🐲
        </div>

        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-black mb-2">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>ตรวจพบข้อผิดพลาดในเบราว์เซอร์</span>
          </span>
          <h1 className="text-xl sm:text-2xl font-black text-slate-800">
            ระบบพบปัญหาในการแสดงผล
          </h1>
          <p className="text-xs text-slate-500 font-bold mt-1">
            อาจเกิดจากส่วนขยายเบราว์เซอร์ (เช่น ตัวบล็อกคุกกี้ / Brave Shields) หรือแคชเดิมในเครื่อง
          </p>
        </div>

        {/* Error message snippet for debugging */}
        {error?.message && (
          <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 text-[11px] font-mono text-slate-600 text-left overflow-x-auto max-h-24">
            {error.message}
          </div>
        )}

        {/* Action Buttons */}
        <div className="space-y-2 pt-2">
          <button
            onClick={() => reset()}
            className="w-full py-3 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white rounded-2xl font-black text-sm shadow-md flex items-center justify-center gap-2 transition-all active:scale-98 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>โหลดใหม่อีกครั้ง (Reload)</span>
          </button>

          <button
            onClick={handleClearCacheAndReset}
            className="w-full py-2.5 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 rounded-2xl font-black text-xs flex items-center justify-center gap-2 transition-all active:scale-98 cursor-pointer"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>ล้างแคชในเครื่องและเริ่มใหม่ (Clear Cache)</span>
          </button>

          <Link
            href="/"
            onClick={() => (window.location.href = '/')}
            className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-2xl font-black text-xs flex items-center justify-center gap-1.5 transition-all inline-block"
          >
            <Home className="w-3.5 h-3.5 inline mr-1" />
            <span>กลับหน้าหลัก</span>
          </Link>
        </div>

        <p className="text-[10px] text-slate-400 font-semibold pt-1">
          💡 หากใช้งานผ่าน Brave Browser: ให้ลองคลิกไอคอนโล่ส้ม (Brave Shields) แล้วปิดชั่วคราวสำหรับเว็บนี้
        </p>
      </div>
    </div>
  );
}
