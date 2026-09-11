"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Forces scroll to the very top on every client-side navigation.
 * Next.js App Router sometimes retains the previous scroll position.
 */
export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
