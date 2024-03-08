import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import Header from './_components/header';
import Footer from './_components/Footer';
import Menu from './_components/Menu';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tin-E-Commerce',
  description: 'A tiny ecommerce app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
