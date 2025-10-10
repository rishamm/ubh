export type BandCard = {
  tagline: string;
  title: string;
  excerpt: string;
  link: string;
  imageId: string;
  type:string
};

export const bandCards: BandCard[] = [
  {
  tagline: "For Her",
  title: "Women's Collection",
  excerpt:
    "Grace meets strength. Discover monochrome elegance reimagined — refined silhouettes for the modern muse.",
  link: "/lookbook/women",
  imageId: "hero-women",
  type: "video",
},
{
  tagline: "For Him",
  title: "Men's Collection",
  excerpt:
    "Subtle power in motion. Explore timeless essentials designed for confidence, movement, and quiet sophistication.",
  link: "/lookbook/men",
  imageId: "men",
  type: "image",
},

{
  tagline: "For the Young Explorers",
  title: "Kids' Collection",
  excerpt:
    "Adventure begins with comfort. Crafted for movement, curiosity, and every fearless step ahead.",
  link: "/lookbook/kids",
  imageId: "kids",
  type: "image",
}

];
