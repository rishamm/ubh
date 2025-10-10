"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getPlaceholderImage } from "@/lib/image-helper";
import { bandCards } from "@/lib/band-data";
import { useScreenSize } from "@/hooks/use-screen-size";

gsap.registerPlugin(ScrollTrigger);

export default function StackedCardsHero() {
  const componentRef = useRef(null);
  const { isMobile } = useScreenSize();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cardsEl = gsap.utils.toArray(".c-card");
      if (cardsEl.length === 0) return;

      const lastCardIndex = cardsEl.length - 1;
      const lastCardST = ScrollTrigger.create({
        trigger: cardsEl[lastCardIndex] as HTMLElement,
        start: "center center",
      });

      // 🔹 Card stacking + pinning
      cardsEl.forEach((card, index) => {
        const scale = 1 - (cardsEl.length - 0.9 - index) * 0.19;
        const scaleDown = gsap.to(card as HTMLElement, { scale });

        ScrollTrigger.create({
          trigger: card as HTMLElement,
          start: "top top",
          end: () => lastCardST.start,
          pin: true,
          pinSpacing: false,
          scrub: 0.5,
          ease: "none",
          animation: scaleDown,
        });

        // 🔹 Animate text content when card becomes active
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card as HTMLElement,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        });

        tl.fromTo(
          card.querySelectorAll(
            ".c-card__tagline, .c-card__title, .c-card__excerpt, .c-card__cta"
          ),
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
          }
        );
      });
    }, componentRef);

    return () => ctx.revert();
  }, []);

  // 🔹 Mobile version (simple stacked layout)
  if (isMobile) {
    return (
      <section ref={componentRef} className="min-h-screen bg-[#0c0a09]">
        <div className="l-cards-mobile">
          {bandCards.map((card, i) => {
            const image = getPlaceholderImage(card.imageId);
            return (
              <div className="c-card-mobile" key={i}>
                <figure className="c-card__figure-mobile">
                  {card.type === "image" ? (
                    <Image
                      src={image.imageUrl}
                      alt={image.imageHint || "Banner media"}
                      fill
                      className="object-cover"
                      priority
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
                </figure>
                <div className="c-card__description-mobile">
                  <div className="c-card__tagline-mobile">{card.tagline}</div>
                  <h1 className="c-card__title-mobile">{card.title}</h1>
                  <div className="c-card__excerpt-mobile">{card.excerpt}</div>
                  <div className="c-card__cta-mobile">
                    <a href={card.link} target="_blank" rel="noreferrer">
                      view in detail
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }

  // 🔹 Desktop stacked version
  return (
    <section ref={componentRef} className="stacked-cards-hero-body">
      <div className="l-cards">
        {bandCards.map((card, i) => {
          const image = getPlaceholderImage(card.imageId);
          return (
            <div className="c-card" key={i}>
              <figure className="c-card__figure">
                {card.type === "image" ? (
                  <Image
                    src={image.imageUrl}
                    alt={image.imageHint || "Banner media"}
                    fill
                    className="object-cover"
                    priority
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
              </figure>
              <div className="c-card__description">
                <div className="c-card__tagline">{card.tagline}</div>
                <h1 className="c-card__title">{card.title}</h1>
                <div className="c-card__excerpt">{card.excerpt}</div>
                <div className="c-card__cta">
                  <a href={card.link} target="_blank" rel="noreferrer">
                    view in detail
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
