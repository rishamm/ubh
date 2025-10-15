'use client';

import Image from 'next/image';
import { getPlaceholderImage } from '@/lib/image-helper';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function HomeAboutSection() {
  const image1 = getPlaceholderImage('about-home-first');
  const image2 = getPlaceholderImage('about-home-second');

  const contentRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ['start 100%', 'end 80%'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['200px', '0px']);
  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);

  const headingRef = useRef(null);
  const inView = useInView(headingRef, { once: true, margin: '-50px' });

  return (
    <section className="about-section-container flex flex-col overflow-hidden">
      <motion.div
        ref={contentRef}
        style={{ y, scale }}
        transition={{ type: 'spring', stiffness: 60, damping: 20 }}
        className="about-section-content"
      >
        {/* Heading */}
        <motion.h2
          ref={headingRef}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-6xl md:text-8xl font-thin text-primary leading-none uppercase px-6"
        >
          About UBH
        </motion.h2>

        {/* Cards */}
        <div className="mt-1 pt-8">
          <div className="grid md:grid-cols-2 gap-0 about-section-grid items-start">
            {/* Left Card */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.3 }}
              className="border-t border-black bg-white shadow-sm flex flex-col justify-between h-full"
            >
              <div className="pt-4 px-6 pb-6 flex flex-col">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  className="border border-primary text-primary inline-block px-2 py-1 w-fit text-sm font-medium mb-4"
                >
                  PURPOSE
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-lg md:text-sm text-foreground/80 max-w-md"
                >
                  We focus on creating high-quality, timeless pieces with ethical
                  production practices, ensuring style with integrity.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
                className="relative h-[400px] overflow-hidden shrink-0"
              >
                <Image
                  src={image1.imageUrl}
                  alt={image1.description}
                  fill
                  className="object-cover"
                  data-ai-hint={image1.imageHint}
                  unoptimized
                />
              </motion.div>
            </motion.div>

            {/* Right Card */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.3 }}
              className="border-t border-l border-black bg-white shadow-sm flex flex-col justify-between h-full"
            >
              <div className="pt-4 px-6 pb-6 flex flex-col">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  className="border border-primary text-primary inline-block w-fit px-2 py-1 text-sm font-medium mb-4"
                >
                  STATEMENT
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-lg md:text-sm text-foreground/80 max-w-md"
                >
                  We dedicate ourselves to crafting refined, lasting pieces through fair production,
                  embodying style with honesty and sustainability to offer fashion that enhances
                  self-expression.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
                className="relative h-[400px] overflow-hidden shrink-0"
              >
                <Image
                  src={image2.imageUrl}
                  alt={image2.description}
                  fill
                  className="object-cover"
                  data-ai-hint={image2.imageHint}
                  unoptimized
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Button */}
        <motion.button
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="flex w-full bg-[#888282] py-6 justify-center text-white items-center text-lg hover:bg-white hover:text-black transition-colors duration-300 mt-0"
        >
          Learn More
        </motion.button>
      </motion.div>
    </section>
  );
}
