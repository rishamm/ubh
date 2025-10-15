"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { collectionHomeCards } from "@/lib/band-data";
import { getPlaceholderImage } from "@/lib/image-helper";
import { Button } from "./ui/button";
import Link from "next/link";
import { useRef } from "react";

export default function HomeCollections() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  });

const words = "Explore, Our, Collections".split(' ').map(w => w.trim());


  return (
    <section ref={containerRef} className="bg-background text-foreground py-16 md:py-24 flex flex-col gap-12 h-full">
      <div className=" mx-auto px-5 text-center flex flex-col items-center h-ull gap-[8rem] text-wrap py-[3 00px]">
        <motion.p
            className="text-[40px] md:text-[5rem] sm:text-[3rem] font-bold  h-full flex flex-wrap justify-center "
        >
            {words.map((letter, i) => {
              const start = i / words.length;
              const end = start + (1 / words.length);
              const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);
              return <motion.span  className="h-full" style={{ opacity }} key={i}>{letter}</motion.span>
            })}
        </motion.p>
        <motion.p 
            className="mb-8 text-lg md:text-xl max-w-5xl text-justify"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
        >
            From timeless classics for Mom and Dad to playful and durable pieces for the kids, our collections are designed to be part of your family's story.
        </motion.p>
      </div>

      <div className="flex flex-col gap-16  px-4 sm:px-6 lg:px-8 py-12">
        {collectionHomeCards.map((card, i) => {
          
          const isEven = i % 2 === 0;
          const image = getPlaceholderImage(card.imageId);

          return (
            <motion.div
              key={i}
              className={`grid  lg:grid-cols-2 bg-card text-card-foreground  overflow-hidden h-full ${
                !isEven ? "md:[direction:rtl]" : ""
              }`}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.3 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 },
               }}
            >
              <div
                className={`flex flex-col justify-center md:py-12 sm:py-4  py-4  ${
                  !isEven ? "md:[direction:ltr] px-4" : ""
                }`}
              >
                <div className="text-sm font-semibold uppercase tracking-wide text-primary">
                  {card.tagline}
                </div>
                <h3 className="text-3xl font-bold my-3">{card.title}</h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {card.excerpt}
                </p>

                <div className="mt-8 ">
                  <Button asChild className="rounded-none">
                    <Link href={card.link}>
                      View Collection
                    </Link>
                  </Button>
                </div>
              </div>

              <div
                className="relative overflow-hidden lg:h-[600px] md:h-[800px] h-64"
              >
                 {card.type=== "image" ? (
                            <Image
                              src={image.imageUrl}
                              alt={image.imageHint || "Banner media"}
                              fill
                              className="object-cover"
                              priority
                              unoptimized
                            />
                          ) : (
                            <video
                              src={image.imageUrl}
                              autoPlay
                              muted
                              loop
                              playsInline
                              className="w-full h-full object-cover"
                            />
                          )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
