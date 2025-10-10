'use client';

import { useState, useEffect } from 'react';

const breakpoints = {
  mobile: 768,
  tablet: 1024,
  laptop: 1440,
};

type ScreenCategory = 'mobile' | 'tablet' | 'laptop' | 'desktop' | undefined;

export function useScreenSize() {
  const [screenCategory, setScreenCategory] = useState<ScreenCategory>(undefined);

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width < breakpoints.mobile) {
        setScreenCategory('mobile');
      } else if (width < breakpoints.tablet) {
        setScreenCategory('tablet');
      } else if (width < breakpoints.laptop) {
        setScreenCategory('laptop');
      } else {
        setScreenCategory('desktop');
      }
    }

    handleResize(); // Set initial size
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    screenCategory,
    isMobile: screenCategory === 'mobile',
    isTablet: screenCategory === 'tablet',
    isLaptop: screenCategory === 'laptop',
    isDesktop: screenCategory === 'desktop',
  };
}
