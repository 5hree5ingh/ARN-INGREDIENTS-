"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

export type LightboxPhoto = {
  src: string;
  alt: string;
  caption: string;
  detail?: string;
};

type Props = {
  photos: LightboxPhoto[];
  index: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export function Lightbox({ photos, index, onClose, onPrev, onNext }: Props) {
  const isOpen = index !== null;
  const photo = isOpen ? photos[index] : null;

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [isOpen, onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && photo && (
        <motion.div
          key="lightbox-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-forest-deep/95 backdrop-blur-sm"
          onClick={onClose}
        >
          {/* Close */}
          <button
            onClick={onClose}
            aria-label="Close image"
            className="absolute top-5 right-5 z-10 flex h-11 w-11 cursor-pointer items-center justify-center border border-ivory/20 text-ivory/70 transition-colors duration-200 hover:border-gold hover:text-gold"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M1 1l16 16M17 1L1 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          {/* Prev */}
          {photos.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); onPrev(); }}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 z-10 -translate-y-1/2 flex h-11 w-11 cursor-pointer items-center justify-center border border-ivory/20 text-ivory/70 transition-colors duration-200 hover:border-gold hover:text-gold"
            >
              <svg width="10" height="18" viewBox="0 0 10 18" fill="none" aria-hidden="true">
                <path d="M9 1L1 9l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}

          {/* Next */}
          {photos.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); onNext(); }}
              aria-label="Next image"
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 flex h-11 w-11 cursor-pointer items-center justify-center border border-ivory/20 text-ivory/70 transition-colors duration-200 hover:border-gold hover:text-gold"
            >
              <svg width="10" height="18" viewBox="0 0 10 18" fill="none" aria-hidden="true">
                <path d="M1 1l8 8-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}

          {/* Image */}
          <motion.div
            key={photo.src}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="relative mx-16 flex max-h-[90vh] max-w-[90vw] flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative overflow-hidden" style={{ minHeight: "60vh", minWidth: "min(80vw, 1200px)" }}>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="90vw"
                className="object-contain"
                priority
              />
            </div>
            <div className="mt-4 border-t border-ivory/10 pt-4 text-center">
              <p className="tracked text-[0.6rem] font-medium text-gold">{photo.caption}</p>
              {photo.detail && (
                <p className="mx-auto mt-2 max-w-xl text-sm leading-7 font-light text-ivory/60">{photo.detail}</p>
              )}
              {photos.length > 1 && (
                <p className="mt-3 text-[0.58rem] font-light text-ivory/30">{(index as number) + 1} / {photos.length}</p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
