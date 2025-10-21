'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';

const Preloader = ({ show }: { show: boolean }) => {
  useEffect(() => {
    if (show) document.body.classList.add('no-scroll');
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [show]);

  if (!show) return null; // don't render preloader at all after first load

  return (
    <div className="flex flex-col">
      <motion.div
        initial={{ opacity: 1, zIndex: 100 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        onAnimationComplete={() => {
          const element = document.querySelector('.preloader');
          if (element) {
            (element as HTMLElement).style.display = 'none';
            document.body.classList.remove('no-scroll');
          }
        }}
        className="preloader fixed inset-0 bg-black flex justify-center items-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="preloader-content text-center"
        >
          <span className="text-[40px] font-semi text-white">UBH CLOTHING</span>
          <span className="text-xs align-top h-[40px] text-white">®</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Preloader;
