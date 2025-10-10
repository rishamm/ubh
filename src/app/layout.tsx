'use client';

import Head from 'next/head';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Atkinson_Hyperlegible } from 'next/font/google';
import { useScreenSize } from '@/hooks/use-screen-size';
import MobileHeader from '@/components/layout/mobile-header';
import Preloader from '@/components/preloader';

const atkinson = Atkinson_Hyperlegible({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

   const { isMobile } = useScreenSize();

  return (
    <html lang="en" className={`${atkinson.variable} scroll-smooth`}>
        
      <Head>
        <title>ubh</title>
        <meta
          name="description"
          content="Beautifully crafted clothing for the entire family. Discover our collections and create lasting memories in style."
        />
        <meta
          name="keywords"
          content="family clothing, matching outfits, kids apparel, fashion, brand"
        />
      </Head>
      <body className="font-body bg-background text-foreground antialiased overflow-x-hidden">
         <Preloader/>
        {isMobile ? <MobileHeader /> : <Header />}
        <main className="min-h-[calc(100vh-10rem)]">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
