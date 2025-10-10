'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useScreenSize } from '@/hooks/use-screen-size';

interface AnimatedHeadingProps {
  words: string | string[];
  textColor?: string; // Tailwind text color (default: text-white)
  bgColor?: string; // Optional background color (default: transparent)
  textSize?: string; // Tailwind size class (default: text-[6rem])
}

export default function AnimatedHeading({
  words,
  textColor = 'text-white',
  bgColor = 'bg-transparent',
  textSize = 'text-[10rem]',
}: AnimatedHeadingProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const { isMobile } = useScreenSize();

  // Support both a string ("Our Craft") or an array (["Our", "Craft"])
  const letters = Array.isArray(words) ? words.join(' ') : words;
  const splitLetters = letters.split('');

  const fontSizeClass = isMobile ? 'text-[3rem]' : textSize;

  return (
    <div
      ref={containerRef}
      className={`animated-heading-container flex justify-center items-center ${bgColor} py-12`}
    >
      <motion.h2
        className={`${fontSizeClass} font-bold uppercase ${textColor} tracking-tight text-center leading-none`}
      >
        {splitLetters.map((letter, i) => {
          const start = i / splitLetters.length;
          const end = start + 1 / splitLetters.length;
          const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);
          return (
            <motion.span style={{ opacity }} key={i}>
              {letter}
            </motion.span>
          );
        })}
      </motion.h2>
    </div>
  );
}
