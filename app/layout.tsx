import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import Header from './_components/Header';
import Footer from './_components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Simply Commerce',
  description: 'A simple ecommerce app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='flex flex-col h-screen justify-between'>
          <Analytics />
          <SpeedInsights />
          <Header />
          <main className='mb-auto overflow-y-auto'>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
