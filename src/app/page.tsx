import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { ProductCategoryGrid } from "@/components/sections/ProductCategoryGrid";
import { PopularProductsMarquee } from "@/components/sections/PopularProductsMarquee";
import { ConsultancyServices } from "@/components/sections/ConsultancyServices";
import { CertificationBadges } from "@/components/sections/CertificationBadges";
import { FacilityPreview } from "@/components/sections/FacilityPreview";
import { CtaBand } from "@/components/sections/CtaBand";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ButtonLink } from "@/components/ui/Button";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />

      <Section className="grain">
        <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-24">
          <RevealOnScroll>
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/about-portrait.jpg"
                  alt="Glass apothecary jars holding standardised botanical extracts on pale stone"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
              {/* Gold frame offset */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-5 -bottom-5 hidden h-full w-full border border-gold/50 sm:block"
              />
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.12}>
            <p className="font-display text-[0.6rem] tracking-[0.22em] uppercase text-gold">
              About Us
            </p>

            <h2 className="font-display mt-4 text-3xl font-light leading-snug text-forest sm:text-4xl">
              ARN Ingredients Pvt Ltd
            </h2>

            <div className="mt-8 space-y-5 font-light text-ink-soft leading-[1.9]">
              <p className="font-display text-[1.2rem] leading-[1.7] text-forest">
                <strong className="font-semibold">Authentic, Reliable, Natural</strong> — as our name, ARN Ingredients
                is led by a team of strong R&amp;D and techno-commercial
                professionals having rich experience of over{" "}
                <strong className="font-semibold">20 years</strong> in natural
                extracts, from nature to science-backed ingredients.
              </p>

              <p className="text-sm">
                ARN provides a complete solution from ingredients to formulations
                in all the therapeutic segments. Rooted in nature, branching
                into science, our extracts nurture global potential.
              </p>

              <p className="text-sm">
                Our facility with a cutting-edge{" "}
                <strong className="font-medium text-ink">cGMP manufacturing plant</strong>{" "}
                is spread in a pristine, pollution-free environment near the
                Ganges (Ganga river).
              </p>

              <p className="text-sm">
                We provide customer-based solutions and support for long-term
                business partnerships.
              </p>
            </div>

            {/* A · R · N tag line */}
            <div className="mt-10 flex gap-6 border-t border-gold/25 pt-8">
              {[
                { letter: "A", word: "Authentic" },
                { letter: "R", word: "Reliable" },
                { letter: "N", word: "Natural" },
              ].map((item) => (
                <div key={item.letter} className="flex items-baseline gap-2">
                  <span className="font-display text-2xl font-light text-gold-deep">
                    {item.letter}
                  </span>
                  <span className="text-[0.7rem] tracking-widest uppercase text-ink-soft">
                    {item.word}
                  </span>
                </div>
              ))}
            </div>

            <ButtonLink href="/about" variant="outline" className="mt-10">
              Learn More
            </ButtonLink>
          </RevealOnScroll>
        </div>
      </Section>

      <Section className="bg-ivory-warm">
        <RevealOnScroll>
          <SectionHeading
            eyebrow="The Collection"
            title="Six families, one quality system"
            description="Each family is manufactured and released under the same documented controls. Select one to see representative grades, markers and packing."
          />
        </RevealOnScroll>
        <div className="mt-12 sm:mt-20">
          <ProductCategoryGrid />
        </div>
      </Section>

      <PopularProductsMarquee />

      <Section className="grain">
        <FacilityPreview />
      </Section>

      <Section className="bg-ivory-warm">
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <RevealOnScroll>
            <SectionHeading
              eyebrow="Quality & Compliance"
              title="Certified where it matters to your buyers"
              description="Our systems are audited by third parties, so your regulatory and customer-facing teams have documented evidence to rely on."
            />
            <Link
              href="/certifications"
              className="tracked mt-10 inline-flex items-center gap-4 text-[0.62rem] font-medium text-forest transition-colors duration-300 hover:text-gold-deep focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              All Certifications
              <span aria-hidden="true" className="h-px w-9 bg-gold" />
            </Link>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <CertificationBadges />
          </RevealOnScroll>
        </div>
      </Section>

      <section className="relative isolate overflow-hidden bg-forest py-16 sm:py-24 lg:py-32">
        <Container>
          <RevealOnScroll>
            <SectionHeading
              eyebrow="Consultancy"
              title="Beyond supply — we help you build the capability"
              description="Several customers started with a bulk order and ended up asking us to design their own extraction line. We do both."
              tone="light"
            />
          </RevealOnScroll>
          <div className="mt-12 sm:mt-20">
            <ConsultancyServices tone="light" />
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
