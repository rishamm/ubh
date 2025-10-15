"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { bandCards } from "@/lib/band-data";
import { getPlaceholderImage } from "@/lib/image-helper";

export default function BandSection() {
  return (
    <section className="bg-[#202330] text-white min-h-screen">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-[1024px] mx-auto px-5 py-16 text-center"
      >
        <p className="mb-4 text-gray-300 tracking-wide uppercase">Tagline</p>
        <h1 className="mb-6 text-4xl md:text-5xl font-semibold">
          Short heading goes here
        </h1>
        <div className="mb-6 text-lg leading-relaxed text-gray-200 max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          architecto exercitationem voluptates? Alias, obcaecati qui suscipit
          totam provident asperiores temporibus eveniet a. At sapiente quo quae
          dolorum accusamus. Libero, temporibus!
        </div>
        <a
          href="#"
          target="_blank"
          className="text-xl text-white hover:opacity-80 transition"
        >
          Version without GSAP and Javascript
        </a>
      </motion.header>

      {/* Cards */}
      <div className="max-w-[1200px] mx-auto space-y-12">
        {bandCards.map((card, i) => {
          const isEven = i % 2 === 0;
          const image = getPlaceholderImage(card.imageId);

          return (
            <motion.div
              key={i}
              className={`grid md:grid-cols-2 border border-[#202330] bg-white h-[90vh] min-h-[600px] overflow-hidden ${
                !isEven ? "md:[direction:rtl]" : ""
              }`}
              viewport={{ once: true }}
            >
              {/* Text Section */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: isEven ? -100 : 100,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                viewport={{ once: true }}
                className={`flex flex-col justify-center p-10 text-black ${
                  !isEven ? "md:[direction:ltr]" : ""
                }`}
              >
                <div className="text-sm font-semibold uppercase tracking-wide">
                  {card.tagline}
                </div>
                <h1 className="text-3xl font-semibold my-3">{card.title}</h1>
                <p className="text-base leading-relaxed text-gray-800">
                  {card.excerpt}
                </p>

                <div className="flex items-center gap-4 mt-8">
                  <a
                    href={card.link}
                    target="_blank"
                    className="border border-black px-6 py-3 text-sm uppercase tracking-wide hover:bg-black hover:text-white transition"
                  >
                    Escuchar en Youtube
                  </a>
                </div>
              </motion.div>

              {/* Image Section */}
              <motion.figure
                initial={{
                  opacity: 0,
                  x: isEven ? 100 : -100,
                  scale: 1.05,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 0.9,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                viewport={{ once: true }}
                className="relative overflow-hidden"
              >
                <Image
                  src={image.imageUrl}
                  alt={card.title}
                  fill
                  className="object-cover"
                  data-ai-hint={image.imageHint}
                  priority
                  unoptimized
                />
              </motion.figure>
            </motion.div>
          );
        })}
      </div>

      <div className="w-full h-screen" />
    </section>
  );
}
