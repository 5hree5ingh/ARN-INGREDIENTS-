import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { FacilityGallery } from "@/components/sections/FacilityGallery";
import { CtaBand } from "@/components/sections/CtaBand";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { capabilities } from "@/data/facility";

export const metadata: Metadata = {
  title: "Infrastructure",
  description:
    "Inside ARN Ingredients' Haridwar plant — extraction hall, rotary extractors, vacuum tray drying, steam generation, quality control and warehousing.",
};

export default function InfrastructurePage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Facility"
        title="Infrastructure"
        description="Our Haridwar plant is laid out so material moves in one direction — intake, extraction, concentration, drying, quality control, dispatch — with segregation at every stage."
        breadcrumb={[
          { href: "/", label: "Home" },
          { href: "/infrastructure", label: "Infrastructure" },
        ]}
        image="/images/FACTORY_IMAGES/extraction_plant.jpg"
        imageAlt="Extraction vessels in the ARN Ingredients plant"
      />

      <Section className="grain">
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Process Flow"
            title="Four stages, one chain of custody"
            description="Capacity is organised around campaigns, so a customer's material stays identifiable from intake through to the drum that leaves the building."
          />
        </RevealOnScroll>

        <ul className="mt-20 border-t border-ink/10">
          {capabilities.map((block, i) => (
            <li key={block.title}>
              <RevealOnScroll delay={i * 0.06}>
                <article className="grid gap-8 border-b border-ink/10 py-14 lg:grid-cols-[0.2fr_1fr_0.8fr]">
                  <p className="font-display text-4xl leading-none font-light text-gold-deep">
                    0{i + 1}
                  </p>
                  <div>
                    <h2 className="font-display text-3xl leading-snug font-light text-forest">
                      {block.title}
                    </h2>
                    <p className="mt-5 max-w-lg text-sm leading-7 font-light text-ink-soft">
                      {block.description}
                    </p>
                  </div>
                  <ul className="space-y-3 self-center">
                    {block.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-baseline gap-4 text-sm leading-7 font-light text-ink-soft"
                      >
                        <span
                          aria-hidden="true"
                          className="inline-block h-1 w-1 shrink-0 rotate-45 bg-gold"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </RevealOnScroll>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="bg-ivory-warm">
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Inside the Plant"
            title="The facility, as it actually is"
            description="Photographed at our Haridwar site — the extraction hall, drying and recovery equipment, utilities and warehousing that produce every consignment we ship."
          />
        </RevealOnScroll>
        <div className="mt-12 sm:mt-20">
          <FacilityGallery />
        </div>
      </Section>

      <section className="bg-forest py-16 sm:py-24 lg:py-32">
        <Container>
          <RevealOnScroll>
            <SectionHeading
              eyebrow="Scale"
              title="From a pilot batch to a full campaign"
              description="We run pilot quantities to prove a specification before committing a commercial campaign, so a new product can be validated without tying up your working capital."
              tone="light"
            />
          </RevealOnScroll>
        </Container>
      </section>

      <CtaBand
        title="Planning a plant visit or audit?"
        description="We host customer and third-party audits at the Haridwar facility. Get in touch to arrange dates and scope."
      />
    </>
  );
}
