import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Duo Wonder Academy | สถาบันเรียนรู้สองพี่น้อง 4 หมวดวิชา (จีน • คณิต • อังกฤษ • วิทย์)',
  description: 'พอร์ทัลการเรียนรู้มหัศจรรย์สำหรับสองพี่น้อง ครอบคลุม 4 หมวดวิชาหลัก: ภาษาจีน (HSK 1-6), คณิตศาสตร์สากล (ประถม-มหาลัย), ภาษาอังกฤษ Phonics & ซาฟารี, และวิทยาศาสตร์ 3D',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Duo Wonder',
  },
  icons: {
    icon: '/dragon-icon.svg',
    apple: '/dragon-icon.svg',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
  themeColor: '#f43f5e',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body className="min-h-screen antialiased text-slate-800">
        {children}
      </body>
    </html>
  );
}
