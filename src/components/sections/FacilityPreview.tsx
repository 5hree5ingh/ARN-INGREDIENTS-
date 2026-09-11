"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Lightbox } from "@/components/ui/Lightbox";
import { capabilities, facilityPhotos } from "@/data/facility";

// Lead shot plus two supporting crops — the rest live on /infrastructure.
const [lead, ...rest] = facilityPhotos;
const supporting = [
  rest.find((p) => p.caption === "Vacuum Tray Dryer"),
  rest.find((p) => p.caption === "Finished Goods Store"),
].filter(Boolean) as typeof rest;

const previewPhotos = [lead, ...supporting];

const captionClass = "tracked mt-4 text-[0.56rem] font-medium text-gold-deep";

export function FacilityPreview() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const open = useCallback((i: number) => setLightboxIndex(i), []);
  const close = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(() =>
    setLightboxIndex((i) => (i === null ? null : (i - 1 + previewPhotos.length) % previewPhotos.length)), []);
  const next = useCallback(() =>
    setLightboxIndex((i) => (i === null ? null : (i + 1) % previewPhotos.length)), []);

  return (
    <>
      <Lightbox photos={previewPhotos} index={lightboxIndex} onClose={close} onPrev={prev} onNext={next} />

      <RevealOnScroll>
        <SectionHeading
          eyebrow="Manufacturing"
          title="We make it ourselves, in Haridwar"
          description="Not a trading house. Every grade we quote is extracted, dried, assayed and packed in our own plant — which is why we can commit to a specification and hold it batch after batch."
        />
      </RevealOnScroll>

      {/* Both columns stretch to the same height so the row stays flush */}
      <div className="mt-16 grid gap-8 lg:min-h-[34rem] lg:grid-cols-3">
        <RevealOnScroll className="lg:col-span-2">
          <figure className="group flex h-full flex-col">
            <button
              onClick={() => open(0)}
              className="relative block w-full cursor-zoom-in overflow-hidden bg-forest-deep aspect-[16/10] lg:aspect-auto lg:flex-1"
              aria-label={`View full image: ${lead.caption}`}
            >
              <Image
                src={lead.src}
                alt={lead.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-forest-deep/0 transition-colors duration-300 group-hover:bg-forest-deep/20">
                <span className="rounded-full border border-ivory/60 bg-forest-deep/60 px-4 py-2 text-[0.6rem] tracking-widest font-medium text-ivory opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  VIEW FULL IMAGE
                </span>
              </div>
            </button>
            <figcaption className={captionClass}>{lead.caption}</figcaption>
          </figure>
        </RevealOnScroll>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
          {supporting.map((photo, i) => (
            <RevealOnScroll key={photo.src} delay={0.1 + i * 0.08}>
              <figure className="group flex h-full flex-col">
                <button
                  onClick={() => open(i + 1)}
                  className="relative block w-full cursor-zoom-in overflow-hidden bg-forest-deep aspect-[4/3] lg:aspect-auto lg:flex-1"
                  aria-label={`View full image: ${photo.caption}`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-forest-deep/0 transition-colors duration-300 group-hover:bg-forest-deep/20">
                    <span className="rounded-full border border-ivory/60 bg-forest-deep/60 px-4 py-2 text-[0.6rem] tracking-widest font-medium text-ivory opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                      VIEW FULL IMAGE
                    </span>
                  </div>
                </button>
                <figcaption className={captionClass}>{photo.caption}</figcaption>
              </figure>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      {/* Process flow, compressed to four labels */}
      <ol className="mt-16 grid border-t border-ink/10 sm:grid-cols-2 lg:grid-cols-4">
        {capabilities.map((stage, i) => (
          <li
            key={stage.title}
            className={`border-b border-ink/10 py-8 sm:px-8 lg:border-b-0 ${
              i > 0 ? "sm:border-l" : ""
            } ${i === 0 ? "sm:pl-0" : ""}`}
          >
            <RevealOnScroll delay={i * 0.08}>
              <p className="font-display text-xl leading-none font-light text-gold-deep">0{i + 1}</p>
              <h3 className="font-display mt-3 text-lg leading-snug font-light text-forest">{stage.title}</h3>
            </RevealOnScroll>
          </li>
        ))}
      </ol>

      <RevealOnScroll delay={0.1}>
        <div className="mt-14 flex justify-center">
          <ButtonLink href="/infrastructure" variant="outline">
            View All Facility Images
          </ButtonLink>
        </div>
      </RevealOnScroll>
    </>
  );
}
