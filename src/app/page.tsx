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

const principles = [
  {
    title: "Standardised to a marker",
    body: "Every grade is tied to a named marker compound and an analytical method — not a nominal extraction ratio.",
  },
  {
    title: "Tested to pharmacopoeial limits",
    body: "Heavy metals, pesticide residue and microbiology are verified against USP, EP and IP limits before release.",
  },
  {
    title: "Documented for export",
    body: "Certificate of analysis, MSDS, allergen and origin declarations travel with every consignment.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />

      <Section className="grain">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <RevealOnScroll>
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/herbs-mortar.jpg"
                  alt="Dried botanicals and roots in apothecary jars"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
              {/* Gold frame offset, a quiet luxury detail */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-5 -bottom-5 hidden h-full w-full border border-gold/50 sm:block"
              />
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.12}>
            <SectionHeading
              eyebrow="Who We Are"
              title="Botanicals held to a pharmaceutical standard"
              description="ARN Ingredients was founded by people who came up through extraction plants and analytical laboratories. That background shapes how we work: a botanical is only useful to a formulator once it behaves predictably, batch after batch."
            />

            <dl className="mt-12 space-y-9">
              {principles.map((p) => (
                <div key={p.title} className="border-l border-gold/40 pl-7">
                  <dt className="font-display text-xl font-light text-forest">
                    {p.title}
                  </dt>
                  <dd className="mt-2 text-sm leading-7 font-light text-ink-soft">
                    {p.body}
                  </dd>
                </div>
              ))}
            </dl>

            <ButtonLink href="/about" variant="outline" className="mt-12">
              Our Story
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
        <div className="mt-20">
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

      <section className="relative isolate overflow-hidden bg-forest py-24 sm:py-32">
        <Container>
          <RevealOnScroll>
            <SectionHeading
              eyebrow="Consultancy"
              title="Beyond supply — we help you build the capability"
              description="Several customers started with a bulk order and ended up asking us to design their own extraction line. We do both."
              tone="light"
            />
          </RevealOnScroll>
          <div className="mt-20">
            <ConsultancyServices tone="light" />
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
