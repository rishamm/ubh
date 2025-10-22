'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';
import React from 'react';

interface LookbookViewerProps {
  images: ImagePlaceholder[];
  selectedIndex: number;
  onClose: () => void;
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 50 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { type: 'spring', damping: 25, stiffness: 200, mass: 0.5 }
  },
  exit: { 
    opacity: 0, 
    scale: 0.95, 
    y: 30,
    transition: { duration: 0.2 }
  },
};

export default function LookbookViewer({ images, selectedIndex, onClose }: LookbookViewerProps) {
    const [api, setApi] = React.useState<CarouselApi>()
 
    useEffect(() => {
        if (api) {
            api.scrollTo(selectedIndex, true);
        }
    }, [api, selectedIndex]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft') api?.scrollPrev();
            if (e.key === 'ArrowRight') api?.scrollNext();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose, api]);

  return (
    <motion.div
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="fixed inset-0 z-[100] bg-black/80  backdrop-blur-sm flex items-center justify-center h-screen p-4   "
      onClick={onClose}
    >
      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="relative w-full h-full max-w-6xl flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-2 -right-2 z-50 h-10 w-10 bg-white/20 hover:bg-white/40 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all"
          aria-label="Close image viewer"
        >
          <X className="h-6 w-6" />
        </button>

        <Carousel setApi={setApi} className="w-full h-full overflow-hidden flex" opts={{loop: true}}>
          <CarouselContent className="h-full ">
            {images.map((image, index) => (
              <CarouselItem key={image.id + index} className="relative flex items-center justify-center h-full ">
                  <Image
                      src={image.imageUrl}
                      alt={image.description}
                      width={100}
                      height={100}
                      className="object-contain w-fit h-full max-w-full h-full"
                      data-ai-hint={image.imageHint}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 66vw"
                  />
              </CarouselItem>
            ))}
          </CarouselContent>
           <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-50 h-12 w-12 bg-white/20 hover:bg-white/40 text-white disabled:hidden" />
           <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-50 h-12 w-12 bg-white/20 hover:bg-white/40 text-white disabled:hidden" />
        </Carousel>
      </motion.div>
    </motion.div>
  );
}
