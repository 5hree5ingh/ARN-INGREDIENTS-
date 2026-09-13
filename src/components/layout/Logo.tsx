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
      {/* Crop window over the leaf badge at the top of the artwork */}
      <span
        aria-hidden="true"
        className="relative block h-9 w-9 shrink-0 overflow-hidden md:h-12 md:w-12"
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

      <span className="leading-none">
        <span
          className={`font-display block text-[1.3rem] leading-none font-medium tracking-[0.14em] md:text-[1.7rem] ${main}`}
        >
          ARN
        </span>
        <span className={`tracked mt-1.5 block text-[0.6rem] font-medium ${sub}`}>
          Ingredients
        </span>
      </span>
    </Link>
  );
}
