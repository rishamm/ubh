'use client';

import Image from 'next/image';
import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LookbookViewer from './lookbook-viewer';

interface LookbookGalleryProps {
  images: ImagePlaceholder[];
}

const imageVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

export default function LookbookGallery({ images }: LookbookGalleryProps) {
  // Ensure we have at least 5 images, or repeat if necessary.
  const galleryImages = Array.from({ length: 5 }, (_, i) => images[i % images.length]);
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
    

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleClose = () => {
    setSelectedImageIndex(null);
  };

  return (
    <div className="lookbook-gallery ">
     

      {galleryImages.map((image, i) => (
        <motion.div
          key={image.id + i}
          className={`lookbook-gallery__image-container lookbook-gallery__image-container--${i + 1}`}
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={imageVariants}
           onClick={() => handleImageClick(i)}
          style={{cursor: 'pointer'}}
        >
          <Image
            src={image.imageUrl}
            alt={image.description}
            width={800}
            height={1000}
            className="lookbook-gallery__image"
            data-ai-hint={image.imageHint}
            unoptimized
          />
        </motion.div>
      ))}
      
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <LookbookViewer
            images={galleryImages}
            selectedIndex={selectedImageIndex}
            onClose={handleClose}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
