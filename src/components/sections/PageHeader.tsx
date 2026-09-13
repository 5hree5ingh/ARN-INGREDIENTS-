import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumb,
  image = "/images/about-banner.jpg",
  imageAlt = "Botanical extracts and laboratory sample vials on pale stone",
  compact = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumb?: { href: string; label: string }[];
  image?: string;
  imageAlt?: string;
  compact?: boolean;
}) {
  /* ── Compact variant: no image, clean dark header with gold accents ── */
  if (compact) {
    return (
      <section className="relative isolate overflow-hidden bg-forest-deep grain">
        {/* Subtle radial glow from left */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_80%_120%_at_0%_50%,rgba(163,131,72,0.08),transparent)]"
        />
        {/* Gold hairline bottom */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"
        />

        <Container className="relative z-10">
          <div className="flex flex-col justify-center py-10 sm:py-12">
            {breadcrumb && (
              <nav aria-label="Breadcrumb" className="mb-5">
                <ol className="tracked flex flex-wrap items-center gap-3 text-[0.6rem] text-ivory/40">
                  {breadcrumb.map((crumb, i) => (
                    <li key={crumb.href} className="flex items-center gap-3">
                      {i > 0 && (
                        <span aria-hidden="true" className="text-gold/40">
                          /
                        </span>
                      )}
                      <Link
                        href={crumb.href}
                        className="transition-colors duration-300 hover:text-gold focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-gold"
                      >
                        {crumb.label}
                      </Link>
                    </li>
                  ))}
                </ol>
              </nav>
            )}

            <h1 className="font-display text-[2rem] leading-tight font-light tracking-[-0.015em] text-ivory sm:text-[2.75rem]">
              {title}
            </h1>

            {description && (
              <p className="mt-4 max-w-2xl text-sm leading-7 font-light text-ivory/55">
                {description}
              </p>
            )}
          </div>
        </Container>
      </section>
    );
  }

  /* ── Full variant: image background ── */
  return (
    <section className="relative isolate overflow-hidden bg-forest-deep">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/*
        Directional scrim rather than a flat wash — heavy enough on the left
        for the copy to stay legible, clearing to the right so the photograph
        is actually visible instead of reading as a solid green block.
      */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-forest-deep/90 via-forest-deep/70 to-forest-deep/40"
      />

      <Container className="relative z-10">
        <div className="max-w-3xl py-16 sm:py-24 lg:py-32">
          {breadcrumb && (
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="tracked flex flex-wrap items-center gap-3 text-[0.6rem] text-ivory/50">
                {breadcrumb.map((crumb, i) => (
                  <li key={crumb.href} className="flex items-center gap-3">
                    {i > 0 && (
                      <span aria-hidden="true" className="text-gold/50">
                        /
                      </span>
                    )}
                    <Link
                      href={crumb.href}
                      className="transition-colors duration-300 hover:text-gold focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-gold"
                    >
                      {crumb.label}
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          {eyebrow && (
            <p className="tracked gold-rule mb-6 text-[0.66rem] font-medium text-gold">
              {eyebrow}
            </p>
          )}

          <h1 className="font-display text-[2.75rem] leading-[1.08] font-light tracking-[-0.015em] text-ivory sm:text-6xl">
            {title}
          </h1>

          {description && (
            <p className="mt-7 max-w-xl text-base leading-9 font-light text-ivory/70">
              {description}
            </p>
          )}
        </div>
      </Container>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"
      />
    </section>
  );
}
