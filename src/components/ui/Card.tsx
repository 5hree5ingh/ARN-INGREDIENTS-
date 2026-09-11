"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

/** Editorial card with an image crop, hairline border and gold hover. */
export function ImageCard({
  href,
  image,
  alt,
  eyebrow,
  title,
  description,
  cta,
}: {
  href: string;
  image: string;
  alt: string;
  eyebrow?: string;
  title: string;
  description: string;
  cta?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <Link
      href={href}
      className="group block h-full focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-gold"
    >
      <motion.article
        className="flex h-full cursor-pointer flex-col border border-ink/10 bg-ivory transition-colors duration-300 group-hover:border-gold"
        whileHover={reduced ? undefined : { y: -6 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={image}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-forest-deep/10 transition-opacity duration-500 group-hover:opacity-0"
          />
        </div>

        <div className="flex flex-1 flex-col p-8">
          {eyebrow && (
            <p className="tracked mb-3 text-[0.6rem] font-medium text-gold-deep">
              {eyebrow}
            </p>
          )}
          <h3 className="font-display text-2xl leading-snug font-light text-forest">
            {title}
          </h3>
          <p className="mt-3 flex-1 text-sm leading-7 font-light text-ink-soft">
            {description}
          </p>
          {cta && (
            <span className="tracked mt-7 inline-flex items-center gap-3 text-[0.62rem] font-medium text-forest transition-colors duration-300 group-hover:text-gold-deep">
              {cta}
              <span
                aria-hidden="true"
                className="h-px w-7 bg-gold transition-all duration-300 group-hover:w-11"
              />
            </span>
          )}
        </div>
      </motion.article>
    </Link>
  );
}

/** Bordered content panel without imagery. */
export function PanelCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex h-full flex-col border border-ink/10 bg-ivory p-8 sm:p-10 ${className}`}
    >
      {children}
    </div>
  );
}
