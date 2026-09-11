import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Careers at ARN Ingredients — production, quality control and research roles at our Haridwar manufacturing facility.",
};

const areas = [
  {
    title: "Production & Extraction",
    description:
      "Operators, shift supervisors and process engineers running extraction, drying and packing campaigns.",
  },
  {
    title: "Quality Control & Assurance",
    description:
      "Analysts and QA officers working on HPLC, GC and microbiological testing, batch review and documentation.",
  },
  {
    title: "Research & Development",
    description:
      "Scientists developing extraction routes, analytical methods and new standardised grades.",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title="Build a career in botanical science"
        description="We hire people who are curious about why a batch behaves the way it does — and rigorous enough to document the answer."
        breadcrumb={[
          { href: "/", label: "Home" },
          { href: "/careers", label: "Careers" },
        ]}
        image="/images/FACTORY_IMAGES/extraction_plant2.jpg"
        imageAlt="Distillation and recovery equipment in the plant"
      />

      <Section className="grain">
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Where We Hire"
            title="Teams across the plant and laboratory"
          />
        </RevealOnScroll>

        <div className="mt-20 grid gap-12 md:grid-cols-3">
          {areas.map((area, i) => (
            <RevealOnScroll key={area.title} delay={i * 0.1}>
              <div className="border-t-2 border-gold pt-9">
                <h2 className="font-display text-2xl leading-snug font-light text-forest">
                  {area.title}
                </h2>
                <p className="mt-4 text-sm leading-7 font-light text-ink-soft">
                  {area.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Section>

      <Section className="bg-ivory-warm">
        <RevealOnScroll>
          {/* PLACEHOLDER: replace with a live openings list when vacancies are published. */}
          <div className="border border-ink/10 bg-ivory px-8 py-20 text-center sm:px-16">
            <span
              aria-hidden="true"
              className="mx-auto mb-9 block h-px w-16 bg-gold"
            />
            <h2 className="font-display mx-auto max-w-2xl text-4xl leading-[1.15] font-light text-forest sm:text-5xl">
              No open positions listed at present
            </h2>
            <p className="mx-auto mt-7 max-w-xl text-base leading-9 font-light text-ink-soft">
              Current vacancies will be published on this page. We are always
              glad to hear from experienced extraction and analytical
              professionals — send your CV and we will keep it on file.
            </p>
            <ButtonLink
              href="https://wa.me/918840804180?text=Hi%2C%20I%27d%20like%20to%20send%20my%20CV%20for%20a%20career%20opportunity."
              className="mt-12"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send Your CV
            </ButtonLink>
          </div>
        </RevealOnScroll>
      </Section>
    </>
  );
}
