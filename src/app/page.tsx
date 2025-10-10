import StackedCardsHero from '@/components/stacked-cards-hero';
import VideoSection from '@/components/video-section';
import AnimatedHeading from '@/components/animated-heading';
import HomeAboutSection from '@/components/homeabout';
import HomeCollections from '@/components/HomeCollection';

export default function Home() {
 
  return (
    <>
      <StackedCardsHero />
      <HomeAboutSection/>
      <AnimatedHeading words={"Our,Crafts"} bgColor='bg-black' textColor='text-white' textSize=' md:text-[6rem]'/>
      <VideoSection />
      <HomeCollections/>
    </>
  );
}
