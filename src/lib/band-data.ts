export type BandCard = {
  tagline: string;
  title: string;
  excerpt: string;
  link: string;
  imageId: string;
  type:string
};

export type LookbookCard = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  link: string;
  imageId: string;
  type: "image" | "video";
};

export type MenCard = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  link: string;
  imageId: string;
  type: "image" | "video";
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

export const lookbookCards: LookbookCard[] = [
  {
    id: "women-lookbook",
    title: "Women’s Lookbook",
    subtitle: "Monochrome Grace",
    description:
      "Soft silhouettes and bold tones meet in perfect harmony. Redefining elegance for the modern muse.",
    link: "/lookbook/women",
    imageId: "lookbook-cover-women",
    type: "image",
  },
  {
    id: "men-lookbook",
    title: "Men’s Lookbook",
    subtitle: "Effortless Strength",
    description:
      "Clean cuts, minimal form, and refined detailing — crafted for those who move with purpose.",
    link: "/lookbook/men",
    imageId: "lookbook-cover-men",
    type: "image",
  },
   {
    id: "kids-lookbook",
    title: "Kids’ Lookbook",
    subtitle: "Playful Energy",
    description:
      "For the dreamers and explorers. Soft, durable fabrics made for endless movement and creative adventures.",
    link: "/lookbook/kids",
    imageId: "lookbook-cover-kids",
    type: "image",
  }
];

export const menCards: MenCard[] = [
  {
    id: "men-feature-1",
    title: "Urban Essentials",
    tagline: "Minimal Form. Maximum Presence.",
    description:
      "Explore a collection built on refined textures, sharp tailoring, and everyday versatility — crafted for the modern man.",
    link: "/collection/men",
    imageId: "men-urban",
    type: "image",
  },
  {
    id: "men-feature-2",
    title: "Monochrome Edit",
    tagline: "The Power of Subtlety.",
    description:
      "A play of structure and simplicity. Discover monochrome pieces that redefine understated elegance.",
    link: "/lookbook/men",
    imageId: "men-monochrome",
    type: "video",
  },
];

export type KidsCard = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  link: string;
  imageId: string;
  type: "image" | "video";
};

export const kidsCards: KidsCard[] = [
  {
    id: "kids-feature-1",
    title: "Playtime Comfort",
    tagline: "Made to Move, Built to Last.",
    description:
      "Soft, breathable, and durable — every piece designed to keep up with boundless energy and imagination.",
    link: "/collection/kids",
    imageId: "kids-playtime",
    type: "image",
  },
  {
    id: "kids-feature-2",
    title: "Colorful Days",
    tagline: "Where Fun Meets Style.",
    description:
      "A splash of colors and joy — explore everyday wear crafted for adventure, discovery, and giggles.",
    link: "/lookbook/kids",
    imageId: "kids-colorful",
    type: "video",
  },
];

export type AboutHomeCard = {
  id: string;
  title: string;
  description: string;
  imageId: string;
  type: "image" | "video";
};

export const aboutHomeCards: AboutHomeCard[] = [
  {
    id: "about-home-first",
    title: "Threads Woven with Purpose",
    description:
      "Born from a love for design and family — every piece we craft carries a story of connection, care, and timeless simplicity.",
    imageId: "about-home-first",
    type: "image",
  },
  {
    id: "about-home-second",
    title: "Crafted for Every Story",
    description:
      "From studio to stitch, our vision stays simple — creating clothing that feels as meaningful as it looks.",
    imageId: "about-home-second",
    type: "image",
  },
];


export type CollectionHomeCard = {
  id: string;
  tagline: string;
  excerpt: string;
  link: string;
  title: string;
  description?: string; // optional if not always used
  imageId: string;
  type: "image" | "video";
};

export const collectionHomeCards: CollectionHomeCard[] = [
  {
    id: "kids",
    tagline: "For the Young Explorers",
    title: "Kids' Collection",
    excerpt:
      "Adventure begins with comfort. Crafted for movement, curiosity, and every fearless step ahead.",
    link: "/lookbook/kids",
    imageId: "home-collection-kids",
    type: "image",
  },
  {
    id: "men",
    tagline: "Effortless Everyday Style",
    title: "Men's Collection",
    excerpt:
      "Redefining modern wear with minimalist design and timeless comfort for every occasion.",
    link: "/lookbook/men",
    imageId: "men",
    type: "image",
  },
  {
    id: "women",
    tagline: "Grace in Every Detail",
    title: "Women’s Collection",
    excerpt:
      "A curated selection blending elegance and functionality, made to inspire confidence daily.",
    link: "/lookbook/women",
    imageId: "home-collection-women",
    type: "image",
  },
   
];
