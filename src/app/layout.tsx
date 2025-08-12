import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer'; // 1. Import the Footer

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Your Name | Developer Portfolio',
  description: 'My personal portfolio website built with Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer /> {/* 2. Add the Footer before the closing body tag */}
      </body>
    </html>
  );
}