import Image from 'next/image';
import { getPlaceholderImage } from '@/lib/image-helper';
import { lookbookCards } from '@/lib/band-data';
import Link from 'next/link';
import { Card } from '@/components/ui/card';

export default function LookbookLandingPage() {

  return (
    <div className="bg-background">
      <div className="md:px-6 px-4  py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Lookbooks</h1>
          <p className="mt-6 text-lg md:text-xl">
            Find inspiration in our curated looks, telling the story of family in every thread.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {lookbookCards.map((card) => {
                const image = getPlaceholderImage(card.imageId);
                return (
                    <Link href={card.link} key={card.imageId}>
                        <Card className="group overflow-hidden rounded-none border-0 hover:scale-105 transition-shadow duration-300">
                             <div className="relative aspect-[4/3] overflow-hidden">
                                {card.type=== "image" ? (
                                                           <Image
                                                             src={image.imageUrl}
                                                             alt={image.imageHint || "Banner media"}
                                                             fill
                                                             className="object-cover object-top"
                                                             priority
                                                             unoptimized
                                                           />
                                                         ) : (
                                                           <video
                                                             src={image.imageUrl}
                                                             autoPlay
                                                             muted
                                                             loop
                                                             playsInline
                                                             className="w-full h-full object-cover"
                                                           />
                                                         )}
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                             </div>
                             <div className="p-6 bg-card">
                                <p className="text-sm text-muted-foreground">{card.tagline}</p>
                                <h2 className="text-2xl font-bold mt-1">{card.title}</h2>
                                <p className="mt-2 text-muted-foreground">{card.excerpt}</p>
                             </div>
                        </Card>
                    </Link>
                )
            })}
        </div>
      </div>
    </div>
  );
}
