"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const rise = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export function Hero() {
  const reduced = useReducedMotion();
  const anim = reduced
    ? {}
    : {
        initial: "hidden" as const,
        animate: "show" as const,
        variants: rise,
      };

  return (
    <section className="relative isolate flex min-h-[86vh] items-center overflow-hidden bg-forest-deep">
      <Image
        src="/images/FACTORY_IMAGES/extraction_plant.jpg"
        alt="Stainless steel extraction vessels in the ARN Ingredients GMP plant at Haridwar"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center brightness-90"
      />
      {/*
        The photograph already carries its own dark, empty marble on the left
        where the copy sits, so this is a light scrim for legibility only —
        deliberately soft, so the warm gold lighting and marble veining stay
        visible rather than being flattened under a heavy wash.
      */}
      {/* Strong left-side scrim for text legibility over bright industrial image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-forest-deep/90 via-forest-deep/60 to-forest-deep/20"
      />
      {/* Top-to-bottom vignette for depth */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-forest-deep/30 via-transparent to-forest-deep/50"
      />

      <Container className="relative z-10">
        <div className="max-w-3xl py-28">
          <motion.p
            {...anim}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="tracked gold-rule text-[0.66rem] font-medium text-gold"
          >
            Haridwar, India — Since 2015
          </motion.p>

          <motion.h1
            {...anim}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="font-display mt-8 text-[3.25rem] leading-[1.04] font-light tracking-[-0.015em] text-ivory sm:text-7xl lg:text-[5.25rem]"
          >
            Standardised by science,
            <span className="block text-gold italic">sourced from nature</span>
          </motion.h1>

          <motion.p
            {...anim}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-9 max-w-xl text-base leading-9 font-light text-ivory/75"
          >
            Standardised herbal extracts, phytochemicals and cosmoceutical
            ingredients — each batch assayed against a named marker and released
            with complete documentation.
          </motion.p>

          <motion.div
            {...anim}
            transition={{ duration: 0.8, delay: 0.32, ease: "easeOut" }}
            className="mt-12 flex flex-col gap-4 sm:flex-row"
          >
            <ButtonLink href="/products">Explore the Catalogue</ButtonLink>
            <ButtonLink href="https://wa.me/918840804180?text=Hi%2C%20I%27d%20like%20to%20request%20a%20quotation." variant="outlineLight" target="_blank" rel="noopener noreferrer">
              Request a Quotation
            </ButtonLink>
          </motion.div>
        </div>
      </Container>

      {/* Gold hairline anchoring the hero to the page */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent"
      />
    </section>
  );
}
