import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ZhongWen Duo 中文 Duo | สถาบันเรียนภาษาจีน มังกรน้อยเสี่ยวหลง',
  description: 'เรียนภาษาจีน 4 ทักษะ คาราโอเกะพูดตาม วัดคะแนนสำเนียง 0-100% บทสนทนาสถานการณ์จริง และ AI ติวเตอร์',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: '中文 Duo',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      { url: '/apple-touch-icon-167x167.png', sizes: '167x167', type: 'image/png' },
      { url: '/apple-touch-icon-152x152.png', sizes: '152x152', type: 'image/png' },
      { url: '/apple-touch-icon-120x120.png', sizes: '120x120', type: 'image/png' },
    ],
  },
};

export default function ChineseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
