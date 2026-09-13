"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { EnquiryChannelList } from "@/components/ui/EnquireMenu";

export function CtaBand({
  title = "Tell us the specification you are matching",
  description = "Share your marker, assay range and annual volume. We respond with a technical data sheet, sample availability and pricing.",
}: {
  title?: string;
  description?: string;
}) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <section className="relative isolate overflow-hidden bg-forest-deep">
      <Image
        src="/images/cta-band.jpg"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover opacity-25"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-forest-deep via-forest-deep/90 to-forest-deep/70"
      />

      <Container className="relative z-10">
        <RevealOnScroll>
          <div className="flex flex-col items-start gap-10 py-16 sm:gap-12 sm:py-24 lg:py-28 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <span
                aria-hidden="true"
                className="mb-8 block h-px w-16 bg-gold"
              />
              <h2 className="font-display text-[2.5rem] leading-[1.12] font-light text-ivory sm:text-5xl">
                {title}
              </h2>
              <p className="mt-6 text-base leading-9 font-light text-ivory/70">
                {description}
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-4 sm:flex-row">
              {/* Contact Us — opens channel chooser */}
              <div className="relative" ref={panelRef}>
                <Button
                  variant="gold"
                  onClick={() => setOpen((v) => !v)}
                  aria-expanded={open}
                >
                  Contact Us
                </Button>

                <AnimatePresence>
                  {open && (
                    <motion.div
                      initial={reduced ? false : { opacity: 0, y: 8 }}
                      animate={reduced ? {} : { opacity: 1, y: 0 }}
                      exit={reduced ? {} : { opacity: 0, y: 6 }}
                      transition={{
                        duration: 0.24,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      style={{ transformOrigin: "bottom left" }}
                      className="absolute bottom-full left-0 z-40 mb-3 w-72 border border-gold/30 bg-ivory shadow-xl"
                    >
                      {/* Gold cap */}
                      <span
                        aria-hidden="true"
                        className="block h-px w-full bg-gold/60"
                      />
                      <EnquiryChannelList
                        onNavigate={() => setOpen(false)}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <ButtonLink href="/products" variant="outlineLight">
                Browse Catalogue
              </ButtonLink>
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
