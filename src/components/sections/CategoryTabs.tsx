"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { productCategories } from "@/data/products";

/**
 * Category switcher shown directly under the header on product pages, so a
 * buyer can move between families without going back to the index. Wraps
 * rather than scrolls — every option stays visible at any width.
 */
export function CategoryTabs() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Product categories"
      className="border-b border-ivory/10 bg-forest-deep"
    >
      <Container>
        {/*
          Phones scroll this row sideways; wrapping nine categories there cost
          ~177px of a 812px screen. From sm up there is room to wrap and show
          every option at once.
        */}
        <ul className="hide-scrollbar flex snap-x snap-mandatory items-center gap-x-7 overflow-x-auto py-2 sm:flex-wrap sm:overflow-visible">
          {productCategories.map((category) => {
            const href = `/products/${category.slug}`;
            const active = pathname === href;

            return (
              <li key={category.slug} className="shrink-0 snap-start">
                <Link
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={`tracked group relative inline-flex min-h-10 items-center text-[0.56rem] font-medium transition-colors duration-200 ease-out focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-gold ${
                    active ? "text-gold" : "text-ivory/55 hover:text-ivory"
                  }`}
                >
                  {category.shortName}
                  <span
                    aria-hidden="true"
                    className={`absolute bottom-1.5 left-0 h-px bg-gold transition-all duration-200 ease-out ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </nav>
  );
}
