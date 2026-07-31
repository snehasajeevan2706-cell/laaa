import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'LārConnect',
  description: 'AI-powered offline learning for teachers and students',
};

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f5f0e8',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`light ${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
