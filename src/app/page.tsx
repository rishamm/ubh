import StackedCardsHero from '@/components/stacked-cards-hero';
import VideoSection from '@/components/video-section';
import AnimatedHeading from '@/components/animated-heading';
import HomeAboutSection from '@/components/homeabout';
import HomeCollections from '@/components/HomeCollection';
import LookbookGallery from '@/components/lookbook-gallery';
import { getPlaceholderImage } from '@/lib/image-helper';

export default function Home() {

   const lookbookImages = [
    getPlaceholderImage('home-11'),
    getPlaceholderImage('home-6'),
    getPlaceholderImage('home-8'),
    getPlaceholderImage('home-1'),
     getPlaceholderImage('home-9'),
      getPlaceholderImage('home-3'),
    getPlaceholderImage('home-4'),
     getPlaceholderImage('home-5'),
      getPlaceholderImage('home-10'),
   
  ];

 
  return (
    <>
      <StackedCardsHero />
      <HomeAboutSection/>
      <AnimatedHeading words={"Our,Crafts"} bgColor='bg-black' textColor='text-white' textSize=' md:text-[6rem]'/>
      <VideoSection />
      <div className="bg-background py-16 md:py-24">
        <LookbookGallery images={lookbookImages} />
      </div>
      <HomeCollections/>
      
    </>
  );
}
