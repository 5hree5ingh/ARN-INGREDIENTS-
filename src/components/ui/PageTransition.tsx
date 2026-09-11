"use client";

import { usePathname } from "next/navigation";

/**
 * Forces a remount on every route change via the `key` prop,
 * which triggers the CSS `fadeSlideIn` animation each time.
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div key={pathname} className="animate-page-enter">
      {children}
    </div>
  );
}
