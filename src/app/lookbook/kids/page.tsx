'use client';
import { getPlaceholderImage } from '@/lib/image-helper';
import LookbookGallery from '@/components/lookbook-gallery';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  }),
};

export default function LookbookPage() {
    const lookbookImages = [
        getPlaceholderImage('child-tuxedo'),
        getPlaceholderImage('child-corduroy'),
        getPlaceholderImage('child-sun-hat'),
        getPlaceholderImage('lookbook-boys'),
        getPlaceholderImage('dad-boardshorts'),
    ];

  return (
    <div className="bg-background">
      <div className="container py-16 md:py-24">
        <motion.div
            className="text-center max-w-3xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
        >
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Boys' Lookbook</h1>
          <p className="mt-6 text-lg md:text-xl">
            Find inspiration in our curated looks for boys, telling the story of family in every thread.
          </p>
        </motion.div>

        <motion.div 
          className="mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
          custom={0.2}
        >
          <LookbookGallery images={lookbookImages} />
        </motion.div>
      </div>
    </div>
  );
}
