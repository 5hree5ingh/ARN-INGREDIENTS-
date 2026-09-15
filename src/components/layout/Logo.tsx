import Link from "next/link";
import Image from "next/image";

/**
 * The supplied logo is a vertical lockup (leaf badge above the wordmark).
 * For horizontal placements we crop to the badge and set the wordmark in
 * Cormorant alongside it; `variant="full"` renders the artwork as supplied.
 */
export function Logo({
  tone = "dark",
  variant = "lockup",
}: {
  tone?: "dark" | "light";
  variant?: "lockup" | "full";
}) {
  const main = tone === "light" ? "text-ivory" : "text-forest";
  const sub = tone === "light" ? "text-gold" : "text-gold-deep";

  if (variant === "full") {
    return (
      <Link
        href="/"
        className="inline-block focus-visible:outline-1 focus-visible:outline-offset-6 focus-visible:outline-gold"
        aria-label="ARN Ingredients — home"
      >
        <Image
          src="/logo.png"
          alt="ARN Ingredients Pvt Ltd"
          width={220}
          height={220}
          className="h-auto w-44"
        />
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-4 focus-visible:outline-1 focus-visible:outline-offset-6 focus-visible:outline-gold"
      aria-label="ARN Ingredients — home"
    >
      {/* Mobile crop (h-9): offsets scaled proportionally from the h-12 version */}
      <span
        aria-hidden="true"
        className="relative block h-9 w-9 shrink-0 overflow-hidden md:hidden"
      >
        <Image
          src="/logo.png"
          alt=""
          width={240}
          height={240}
          priority
          className="absolute max-w-none"
          style={{ width: "4.4rem", left: "-1.1rem", top: "-0.46rem" }}
        />
      </span>
      {/* Desktop crop (h-12): original offsets */}
      <span
        aria-hidden="true"
        className="relative hidden h-12 w-12 shrink-0 overflow-hidden md:block"
      >
        <Image
          src="/logo.png"
          alt=""
          width={240}
          height={240}
          priority
          className="absolute max-w-none"
          style={{ width: "5.9rem", left: "-1.48rem", top: "-0.62rem" }}
        />
      </span>

      <span className="flex flex-col leading-none gap-[0.18rem]">
        {/* Line 1 — ARN */}
        <span
          className={`font-display block text-[1.25rem] font-bold tracking-[0.18em] leading-none uppercase md:text-[1.6rem] ${main}`}
          style={{ WebkitTextStroke: "0.4px currentColor" }}
        >
          ARN
        </span>
        {/* Line 2 — INGREDIENTS */}
        <span
          className={`font-display block text-[0.72rem] font-bold tracking-[0.2em] leading-none uppercase md:text-[0.9rem] ${sub}`}
          style={{ WebkitTextStroke: "0.3px currentColor" }}
        >
          Ingredients
        </span>
        {/* Line 3 — tagline */}
        <span
          className={`block whitespace-nowrap text-[0.42rem] font-normal italic tracking-[0.12em] opacity-60 md:text-[0.48rem] ${main}`}
          aria-hidden="true"
        >
          Authentic · Reliable · Natural
        </span>
      </span>
    </Link>
  );
}
