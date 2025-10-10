import { PlaceHolderImages, type ImagePlaceholder } from './placeholder-images';

const imageMap = new Map<string, ImagePlaceholder>(
  PlaceHolderImages.map((img) => [img.id, img])
);

export function getPlaceholderImage(id: string): ImagePlaceholder {
  const image = imageMap.get(id);
  if (!image) {
    console.warn(`Image with id "${id}" not found in placeholder-images.json. Using default.`);
    return {
      id: 'default',
      description: 'Default placeholder image',
      imageUrl: 'https://picsum.photos/seed/default/600/400',
      imageHint: 'placeholder object',
    };
  }
  return image;
}
