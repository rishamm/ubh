import Image from 'next/image';
import type { ClothingItem } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getPlaceholderImage } from '@/lib/image-helper';

type ProductCardProps = {
  item: ClothingItem;
};

export default function ProductCard({ item }: ProductCardProps) {
  const image = getPlaceholderImage(item.id);
  return (
    <Card className="overflow-hidden flex flex-col group border-2 border-transparent hover:border-primary transition-all duration-300 hover:shadow-xl">
      <CardHeader className="p-0 relative">
        <div className="overflow-hidden aspect-[3/4]">
          <Image
            src={image.imageUrl}
            alt={item.name}
            width={600}
            height={800}
            className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
            data-ai-hint={image.imageHint}
          />
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <h3 className="text-lg font-semibold leading-tight">{item.name}</h3>
        <p className="text-sm mt-1 line-clamp-2">{item.description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <p className="text-lg font-semibold text-primary">${item.price.toFixed(2)}</p>
        <Badge variant={item.familyMember === 'Mom' ? 'default' : item.familyMember === 'Dad' ? 'secondary' : 'outline'}>
          {item.familyMember}
        </Badge>
      </CardFooter>
    </Card>
  );
}
