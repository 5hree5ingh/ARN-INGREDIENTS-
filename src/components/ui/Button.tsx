import Link from "next/link";

type Variant = "gold" | "outline" | "outlineLight";

const variants: Record<Variant, string> = {
  gold: "bg-gold text-forest-deep hover:bg-gold-bright focus-visible:outline-gold",
  outline:
    "border border-forest/35 text-forest hover:border-forest hover:bg-forest hover:text-ivory focus-visible:outline-forest",
  outlineLight:
    "border border-ivory/35 text-ivory hover:border-gold hover:text-gold focus-visible:outline-gold",
};

const shared =
  "tracked inline-flex min-h-11 cursor-pointer items-center justify-center gap-3 px-8 py-4 text-[0.68rem] font-medium transition-colors duration-300 focus-visible:outline-1 focus-visible:outline-offset-4";

export function ButtonLink({
  href,
  children,
  variant = "gold",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link href={href} className={`${shared} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}

export function Button({
  children,
  variant = "gold",
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return (
    <button
      className={`${shared} ${variants[variant]} disabled:cursor-not-allowed disabled:opacity-60 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
