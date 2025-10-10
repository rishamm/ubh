import Image from 'next/image';
import { getPlaceholderImage } from '@/lib/image-helper';

export default function LookbookPage() {
    const lookbookImages = [
        getPlaceholderImage('mom-boho-dress'),
        getPlaceholderImage('mom-cable-knit'),
        getPlaceholderImage('mom-swimsuit'),
        getPlaceholderImage('mom-velvet-dress'),
    ];

  return (
    <div className="bg-background">
      <div className="container py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Women's Lookbook</h1>
          <p className="mt-6 text-lg md:text-xl">
            Find inspiration in our curated looks for women, telling the story of family in every thread.
          </p>
        </div>

        <div className="mt-16 columns-1 sm:columns-2 md:columns-2 gap-4 lg:gap-8">
            {lookbookImages.map((image) => (
                <div key={image.id} className="mb-4 lg:mb-8 break-inside-avoid">
                     <Image
                        src={image.imageUrl}
                        alt={image.description}
                        width={600}
                        height={800}
                        className="object-cover w-full h-auto rounded-lg shadow-lg"
                        data-ai-hint={image.imageHint}
                    />
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}
