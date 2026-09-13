"use client";

import { usePathname } from "next/navigation";

/**
 * Replays the enter animation when moving between top-level sections.
 *
 * Deliberately keyed on the first path segment rather than the full pathname:
 * sibling routes (e.g. /products/essential-oils → /products/oleoresins) then
 * keep their shared shell mounted, so the category tab strip stays put instead
 * of flashing out and back. Those pages animate their own changing parts.
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const section = pathname.split("/")[1] || "home";

  return (
    <div key={section} className="animate-page-enter">
      {children}
    </div>
  );
}
