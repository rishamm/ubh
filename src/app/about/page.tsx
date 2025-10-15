'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export default function ParallaxPage() {
  const ref = useRef(null);

  // Track window scroll for parallax effect
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-60%']);

  return (
    <div
      ref={ref}
      className="font-[Open_Sans] text-[18px] leading-[28px] scroll-smooth"
    >
      {/* --- PARALLAX SECTION --- */}
      <div className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background layer */}
        <motion.div
          style={{ y }}
          className="absolute inset-0 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/sakura.png')] bg-repeat bg-black scale-110"
        />

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          style={{ y }}
          className="relative text-white
  text-[48px] leading-[56px] 
  sm:text-[80px] sm:leading-[88px]
  md:text-[120px] md:leading-[130px]
  lg:text-[160px] lg:leading-[170px]
  xl:text-[200px] xl:leading-[200px]
  font-extrabold tracking-[-6px] sm:tracking-[-10px] lg:tracking-[-15px]
  text-center drop-shadow-lg"
        >
          Our Story
        </motion.h1>
      </div>

      {/* --- CONTENT SECTION --- */}
      <div className="relative bg-white z-10">
        <div className=" md:px-10 px-5 pb-[100px] pt-5 space-y-[15px]">
          {[
            `Chaliyam.
A small coastal village born between the sea and the wind.
This is where my story begins. The sound of the sea itself was the heartbeat of the coconut trees in our house.

My father – “Uppa” – was a fisherman. The callouses on his hands, the pain dried by the wind, were a hope for the entire family.

We were a family of fishermen, going out to the sea every single day.

But I – I had a different dream.
Somewhere among the pearls of the sea, I saw a small “color of a dream.” Yet, there was no one to tell about it.`,
            `The dawns of Chaliyam have a rhythm of their own.
When the waves of the sea sing in their majestic tune,
and the fishermen return to shore,
their faces glisten — with both sweat and pride.

Amid those waves, I dreamed of something different — fashion.
A fisherman’s son dreaming of a world of clothes beyond the sea —
the world laughed at it.
But within that laughter, my fire only burned brighter.

The dream of UBH was born one night on the seashore.
As the scent of jasmine drifted through the harbor wind,
I wrote on a piece of paper:
“UBH – Unbreakable. Believable. Honest.”`,
            `My family taught me only one thing — hard work.
But I came to understand its meaning in a different way.
Hard work isn’t just about catching fish — it’s also about catching dreams.

No one supported me.
When a boy spoke about “fashion,” people laughed.
“You can’t do that.”
“Those things don’t happen for people like us.”
Those were the words I heard every day.

But from that day on, a voice began to rise within me —
“One day, I will prove it, and it happened.”`,
`Uppa’s strength, the rhythm of the sea —
they all wove themselves into the threads of my dream.
Back then, the name UBH didn’t even exist —
but the spirit, the fire, the determination —
they were already alive within me.

From that small home where the scent of fish mixed with the taste of sweat,
a dream began to rise.
And that dream, one day, became a name the world would hear —
UBH Clothing.`

          ].map((text, i) => (
            <motion.p
              key={i}
              className="text-justify text-foreground text-[16px] md:text-[18px] lg:text-[20px]"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: i * 0.15 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {text}
            </motion.p>
          ))}
        </div>
        <div className='flex justify-center mb-20'>
          <Image src="/logo.svg" alt="Description" width={200} height={200} unoptimized/>
        </div>
      </div>
    </div>
  );
}
