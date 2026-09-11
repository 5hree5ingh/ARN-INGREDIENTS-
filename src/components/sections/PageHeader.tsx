import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumb,
  image = "/images/herbs-mortar.jpg",
  imageAlt = "Botanical ingredients in an apothecary setting",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumb?: { href: string; label: string }[];
  image?: string;
  imageAlt?: string;
}) {
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
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-forest-deep/82"
      />

      <Container className="relative z-10">
        <div className="max-w-3xl py-24 sm:py-32">
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
