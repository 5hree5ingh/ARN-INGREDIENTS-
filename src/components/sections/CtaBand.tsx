import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function CtaBand({
  title = "Tell us the specification you are matching",
  description = "Share your marker, assay range and annual volume. We respond with a technical data sheet, sample availability and pricing.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-forest-deep">
      <Image
        src="/images/cta-band.jpg"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover opacity-25"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-forest-deep via-forest-deep/90 to-forest-deep/70"
      />

      <Container className="relative z-10">
        <RevealOnScroll>
          <div className="flex flex-col items-start gap-12 py-24 sm:py-28 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <span
                aria-hidden="true"
                className="mb-8 block h-px w-16 bg-gold"
              />
              <h2 className="font-display text-[2.5rem] leading-[1.12] font-light text-ivory sm:text-5xl">
                {title}
              </h2>
              <p className="mt-6 text-base leading-9 font-light text-ivory/70">
                {description}
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-4 sm:flex-row">
              <ButtonLink href="https://wa.me/918840804180?text=Hi%2C%20I%27d%20like%20to%20get%20in%20touch." target="_blank" rel="noopener noreferrer">Contact Us</ButtonLink>
              <ButtonLink href="/products" variant="outlineLight">
                Browse Catalogue
              </ButtonLink>
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
