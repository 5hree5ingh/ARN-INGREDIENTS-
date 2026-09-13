"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

/**
 * Each slide carries its own copy, so the message matches what is on screen.
 * Kept to an eyebrow and a two-line headline — the hero stays uncluttered.
 */
const slides = [
  {
    src: "/images/hero-main.jpg",
    eyebrow: "Haridwar, India",
    lead: "Manufacturers of",
    accent: "herbal extracts",
  },
  {
    src: "/images/FACTORY_IMAGES/raw_material_storage.jpg",
    eyebrow: "Raw Material Store",
    lead: "Botanicals stocked",
    accent: "by the tonne",
  },
  {
    src: "/images/FACTORY_IMAGES/extraction_plant.jpg",
    eyebrow: "Our Facility",
    lead: "Made in our",
    accent: "own GMP plant",
  },
  {
    src: "/images/FACTORY_IMAGES/finish_good_storage.jpg",
    eyebrow: "Finished Goods",
    lead: "Packed and sealed",
    accent: "ready for export",
  },
  // Add generated slides here once the files land in public/images:
  // { src: "/images/hero-qc-lab.jpg", eyebrow: "Quality Control",
  //   lead: "Assayed against", accent: "a named marker" },
  // { src: "/images/hero-packing.jpg", eyebrow: "Dispatch",
  //   lead: "Documented for", accent: "export" },
];

const SLIDE_MS = 6000;
const SLIDE_EASE = [0.32, 0.72, 0, 1] as const;

export function Hero() {
  const reduced = useReducedMotion();
  // Track the outgoing slide so only it and the incoming one animate.
  const [{ index, prev }, setSlide] = useState({ index: 0, prev: -1 });

  const goTo = useCallback((next: number) => {
    setSlide((s) => (s.index === next ? s : { index: next, prev: s.index }));
  }, []);

  useEffect(() => {
    if (reduced || slides.length < 2) return;
    const id = setInterval(
      () => setSlide((s) => ({ index: (s.index + 1) % slides.length, prev: s.index })),
      SLIDE_MS,
    );
    return () => clearInterval(id);
  }, [reduced]);

  const slide = slides[index];

  return (
    // Header sits above this in normal flow (h-24 + border = 97px), so the
    // hero is sized to the *remaining* viewport rather than a full 100vh —
    // otherwise header + hero together exceed one screen and the bottom of
    // the hero (the slide dots) gets pushed just past the fold.
    <section className="relative isolate flex min-h-[calc(100vh-97px)] min-h-[calc(100dvh-97px)] items-center overflow-hidden bg-forest-deep">

      <div aria-hidden="true" className="absolute inset-0">
        {slides.map((s, i) => {
          /*
           * Three positions only: the current slide sits at 0, the outgoing
           * one leaves to the left, and every other slide waits off-screen
           * right. No modular arithmetic and no slide ever crosses the
           * viewport to get into position, so a step always looks the same
           * regardless of which slide it is or where the sequence wraps.
           */
          const x = i === index ? "0%" : i === prev ? "-100%" : "100%";

          // Only the incoming and outgoing slides travel; the rest reset
          // instantly while parked off-screen.
          const isMoving = i === index || i === prev;

          return (
            <motion.div
              key={s.src}
              className="absolute inset-0"
              initial={false}
              animate={{ x }}
              transition={
                reduced || !isMoving
                  ? { duration: 0 }
                  : { duration: 1, ease: SLIDE_EASE }
              }
            >
              {/* Off-screen slides never trigger lazy loading, so load eagerly */}
              {i === 0 ? (
                <>
                  {/* Desktop image */}
                  <Image
                    src="/images/hero-main.jpg"
                    alt=""
                    fill
                    priority
                    sizes="100vw"
                    className="hidden object-cover object-center md:block"
                  />
                  {/* Mobile image */}
                  <Image
                    src="/images/hero-main-mobile.png"
                    alt=""
                    fill
                    priority
                    sizes="100vw"
                    className="block object-cover object-center md:hidden"
                  />
                </>
              ) : (
                <Image
                  src={s.src}
                  alt=""
                  fill
                  loading="eager"
                  sizes="100vw"
                  className="object-cover object-center"
                />
              )}
            </motion.div>
          );
        })}
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-forest-deep/80 via-forest-deep/35 to-forest-deep/5"
      />

      <Container className="relative z-10">
        <div className="max-w-4xl py-28">
          {/*
            Reserved height keeps the button from shifting between slides.
            The copy cross-fades — outgoing and incoming overlap rather than
            queueing, so the text change stays in step with the 1s image slide.
          */}
          <div className="relative min-h-[10rem] sm:min-h-[11.5rem] lg:min-h-[13rem] xl:min-h-[15.5rem]">
            <AnimatePresence initial={false}>
              <motion.div
                key={index}
                className="absolute inset-x-0 top-0"
                initial={reduced ? false : { opacity: 0, y: 18 }}
                animate={reduced ? {} : { opacity: 1, y: 0 }}
                exit={reduced ? {} : { opacity: 0, y: -12 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
              >
                <p className="tracked gold-rule text-[0.66rem] font-medium text-gold">
                  {slide.eyebrow}
                </p>

                {/*
                  Sans, not the display serif, and no italic. This is an
                  industrial B2B manufacturer sitting over plant photography —
                  the grotesque reads as plain-spoken and credible where the
                  serif read as a luxury boutique.
                */}
                <h1 className="mt-8 text-[2.5rem] leading-[1.08] font-medium tracking-[-0.02em] text-ivory sm:text-5xl lg:text-[4rem] xl:text-[5rem]">
                  {slide.lead}
                  <span className="block text-gold">{slide.accent}</span>
                </h1>
              </motion.div>
            </AnimatePresence>
          </div>

          <ButtonLink href="/products">Explore the Catalogue</ButtonLink>

          {slides.length > 1 && (
            <div className="mt-14 flex items-center gap-3">
              {slides.map((s, i) => (
                <button
                  key={s.src}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Show image ${i + 1} of ${slides.length}`}
                  aria-current={i === index}
                  className="group cursor-pointer py-2 focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-gold"
                >
                  <span
                    className={`block h-px transition-all duration-500 ease-out ${
                      i === index
                        ? "w-10 bg-gold"
                        : "w-5 bg-ivory/35 group-hover:bg-ivory/70"
                    }`}
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </Container>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent"
      />
    </section>
  );
}
