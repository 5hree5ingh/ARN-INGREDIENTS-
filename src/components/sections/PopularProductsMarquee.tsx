"use client";

import { motion, useReducedMotion } from "motion/react";
import { popularProducts } from "@/data/products";

export function PopularProductsMarquee() {
  const reduced = useReducedMotion();
  const track = [...popularProducts, ...popularProducts];

  return (
    <section
      aria-labelledby="popular-products"
      className="overflow-hidden border-y border-ivory/10 bg-forest py-16"
    >
      <h2
        id="popular-products"
        className="tracked mb-12 text-center text-[0.6rem] font-medium text-gold"
      >
        Selected Grades
      </h2>

      {reduced ? (
        <ul className="mx-auto flex max-w-6xl flex-wrap justify-center gap-x-10 gap-y-5 px-6">
          {popularProducts.map((item) => (
            <li key={item}>
              <Item>{item}</Item>
            </li>
          ))}
        </ul>
      ) : (
        <div className="relative">
          <motion.ul
            className="flex w-max items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 46, ease: "linear", repeat: Infinity }}
          >
            {track.map((item, i) => (
              <li
                key={`${item}-${i}`}
                aria-hidden={i >= popularProducts.length}
                className="flex items-center"
              >
                <Item>{item}</Item>
                <span
                  aria-hidden="true"
                  className="mx-10 inline-block h-1 w-1 rotate-45 bg-gold/60"
                />
              </li>
            ))}
          </motion.ul>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-forest to-transparent"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-forest to-transparent"
          />
        </div>
      )}
    </section>
  );
}

function Item({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-display text-2xl font-light whitespace-nowrap text-ivory/80 sm:text-3xl">
      {children}
    </span>
  );
}
