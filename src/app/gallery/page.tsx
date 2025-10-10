'use client';
import { useState, useMemo } from 'react';
import { clothingItems } from '@/lib/data';
import ProductCard from '@/components/product-card';
import SizeGuideModal from '@/components/size-guide-modal';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const filters = ['All', 'Mom', 'Dad', 'Child'] as const;
type FilterType = typeof filters[number];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('All');

  const filteredItems = useMemo(() => {
    if (activeFilter === 'All') {
      return clothingItems;
    }
    return clothingItems.filter(item => item.familyMember === activeFilter);
  }, [activeFilter]);

  return (
    <div className="bg-background">
      <div className="container py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Our Gallery</h1>
          <p className="mt-6 text-lg md:text-xl">
            Browse our complete collection of handcrafted family apparel. Find individual pieces to mix and match.
          </p>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {filters.map(filter => (
              <Button
                key={filter}
                variant={activeFilter === filter ? 'default' : 'outline'}
                onClick={() => setActiveFilter(filter)}
                className={cn('transition-all', activeFilter === filter && 'bg-primary text-primary-foreground hover:bg-primary/90')}
              >
                {filter}
              </Button>
            ))}
          </div>
          <SizeGuideModal />
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredItems.map(item => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
        
        {filteredItems.length === 0 && (
          <div className="text-center mt-16 py-12 border-2 border-dashed rounded-lg">
              <h3 className="text-2xl">No items found</h3>
              <p className="mt-2">Try selecting a different category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
