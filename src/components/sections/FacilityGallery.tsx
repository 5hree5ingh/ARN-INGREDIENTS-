"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Lightbox } from "@/components/ui/Lightbox";
import { facilityPhotos } from "@/data/facility";

const [lead, ...others] = facilityPhotos;
const allPhotos = [lead, ...others];

export function FacilityGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const open = useCallback((i: number) => setLightboxIndex(i), []);
  const close = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(() =>
    setLightboxIndex((i) => (i === null ? null : (i - 1 + allPhotos.length) % allPhotos.length)), []);
  const next = useCallback(() =>
    setLightboxIndex((i) => (i === null ? null : (i + 1) % allPhotos.length)), []);

  return (
    <>
      <Lightbox photos={allPhotos} index={lightboxIndex} onClose={close} onPrev={prev} onNext={next} />

      <div>
        {/* Lead shot */}
        <RevealOnScroll>
          <figure className="group">
            <button
              onClick={() => open(0)}
              className="relative block w-full cursor-zoom-in overflow-hidden bg-forest-deep aspect-[16/7]"
              aria-label={`View full image: ${lead.caption}`}
            >
              <Image
                src={lead.src}
                alt={lead.alt}
                fill
                sizes="100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              {/* hover overlay hint */}
              <div className="absolute inset-0 flex items-center justify-center bg-forest-deep/0 transition-colors duration-300 group-hover:bg-forest-deep/20">
                <span className="rounded-full border border-ivory/60 bg-forest-deep/60 px-4 py-2 text-[0.6rem] tracking-widest font-medium text-ivory opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  VIEW FULL IMAGE
                </span>
              </div>
            </button>
            <figcaption className="mt-6 grid gap-3 border-t border-ink/10 pt-6 md:grid-cols-[0.3fr_1fr] md:gap-10">
              <h3 className="tracked text-[0.58rem] font-medium text-gold-deep">{lead.caption}</h3>
              <p className="max-w-2xl text-sm leading-7 font-light text-ink-soft">{lead.detail}</p>
            </figcaption>
          </figure>
        </RevealOnScroll>

        {/* Uniform grid */}
        <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((photo, i) => (
            <RevealOnScroll key={photo.src} delay={(i % 3) * 0.08}>
              <figure className="group flex h-full flex-col">
                <button
                  onClick={() => open(i + 1)}
                  className="relative block w-full cursor-zoom-in overflow-hidden bg-forest-deep aspect-[4/3]"
                  aria-label={`View full image: ${photo.caption}`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-forest-deep/0 transition-colors duration-300 group-hover:bg-forest-deep/20">
                    <span className="rounded-full border border-ivory/60 bg-forest-deep/60 px-4 py-2 text-[0.6rem] tracking-widest font-medium text-ivory opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                      VIEW FULL IMAGE
                    </span>
                  </div>
                </button>
                <figcaption className="mt-5 border-t border-ink/10 pt-5">
                  <h3 className="tracked text-[0.58rem] font-medium text-gold-deep">{photo.caption}</h3>
                  <p className="mt-3 text-sm leading-7 font-light text-ink-soft">{photo.detail}</p>
                </figcaption>
              </figure>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </>
  );
}
