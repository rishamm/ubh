'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
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
            `ʻO Lorem Ipsum kahi haʻahaʻa wale nō o ka paʻi a me keʻano o nāʻoihana. ʻO Lorem Ipsum ka 'ōlelo papahana maʻamau o kaʻoihana o ka makahiki 1500, i ka wā i lawe ai kekahi mea paʻi kiʻiʻole i keʻano o ka type a scrambled iā ia e hana i kahi puke kiko'ī. ʻAʻole i ola wale i kaʻelima mau kenekulia, akā,ʻo ka leleʻana hoʻi i nāʻano o ka lolouila, e hoʻololiʻoleʻia ana.`,
            `ʻO Lorem Ipsum kahi haʻahaʻa wale nō o ka paʻi a me keʻano o nāʻoihana. ʻO Lorem Ipsum ka 'ōlelo papahana maʻamau o kaʻoihana o ka makahiki 1500, i ka wā i lawe ai kekahi mea paʻi kiʻiʻole i keʻano o ka type a scrambled iā ia e hana i kahi puke kiko'ī. ʻAʻole i ola wale i kaʻelima mau kenekulia, akā,ʻo ka leleʻana hoʻi i nāʻano o ka lolouila, e hoʻololiʻoleʻia ana.`,
            `ʻO Lorem Ipsum kahi haʻahaʻa wale nō o ka paʻi a me keʻano o nāʻoihana. ʻO Lorem Ipsum ka 'ōlelo papahana maʻamau o kaʻoihana o ka makahiki 1500, i ka wā i lawe ai kekahi mea paʻi kiʻiʻole i keʻano o ka type a scrambled iā ia e hana i kahi puke kiko'ī. ʻAʻole i ola wale i kaʻelima mau kenekulia, akā,ʻo ka leleʻana hoʻi i nāʻano o ka lolouila, e hoʻololiʻoleʻia ana.`,
          ].map((text, i) => (
            <motion.p
              key={i}
              className="text-justify text-foreground"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: i * 0.15 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {text}
            </motion.p>
          ))}
        </div>
      </div>
    </div>
  );
}
