import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/sections/PageHeader";
import { StatsBar } from "@/components/sections/StatsBar";
import { CtaBand } from "@/components/sections/CtaBand";
import { Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "ARN Ingredients is a Haridwar-based manufacturer and exporter of standardised herbal extracts, phytochemicals and cosmoceutical ingredients.",
};

const values = [
  {
    title: "Sourcing we can trace",
    description:
      "Botanicals are bought against a defined origin and season, because the marker content of a plant is decided long before it reaches our extractors.",
  },
  {
    title: "Process built around the assay",
    description:
      "Solvent system, ratio and drying route are chosen to protect the active you are paying for — not simply to maximise yield.",
  },
  {
    title: "Release on evidence",
    description:
      "Nothing ships until identity, assay, residue and microbiology results are on file. The documentation goes out with the drum.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Two decades of standardising botanicals"
        description="ARN Ingredients Pvt. Ltd. manufactures and exports standardised herbal extracts, phytochemicals and cosmoceutical ingredients from Haridwar, Uttarakhand."
        breadcrumb={[
          { href: "/", label: "Home" },
          { href: "/about", label: "About" },
        ]}
        image="/images/about-banner.jpg"
        imageAlt="Laboratory sample vials arranged across pale travertine with brass scale"
      />

      <StatsBar />

      <Section className="grain">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <RevealOnScroll>
            <SectionHeading
              eyebrow="Our Story"
              title="Founded by people from the plant floor"
            />
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <div className="space-y-7 text-base leading-9 font-light text-ink-soft">
              <p className="font-display text-2xl leading-[1.6] text-forest">
                The company grew out of a simple frustration: buyers were being
                sold botanical material that looked right on a label but behaved
                differently in every batch.
              </p>
              <p>
                ARN Ingredients was established by professionals with more than
                twenty years between them in the research, development and
                manufacture of active pharmaceutical ingredients and
                standardised herbal extracts.
              </p>
              <p>
                Our answer was to treat every extract as a specification rather
                than a commodity. Each product is tied to a named marker
                compound and an analytical method, so a formulator can build a
                dossier around it and know the next shipment will behave like
                the last one.
              </p>
              <p>
                Today we supply nutraceutical, pharmaceutical and personal care
                manufacturers across more than thirty countries, and we run
                consultancy work for companies building extraction capability of
                their own.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </Section>

      <section className="relative isolate overflow-hidden">
        <div className="relative h-[26rem] sm:h-[34rem]">
          <Image
            src="/images/FACTORY_IMAGES/extraction_plant.jpg"
            alt="Extraction vessels in the ARN Ingredients plant at Haridwar"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-forest-deep/45" />
        </div>
      </section>

      <Section className="bg-ivory-warm">
        <RevealOnScroll>
          <SectionHeading
            eyebrow="How We Work"
            title="Three commitments behind every batch"
          />
        </RevealOnScroll>

        <div className="mt-20 grid gap-12 md:grid-cols-3">
          {values.map((value, i) => (
            <RevealOnScroll key={value.title} delay={i * 0.1}>
              <div className="border-t-2 border-gold pt-9">
                <p className="font-display text-2xl font-light text-gold-deep">
                  0{i + 1}
                </p>
                <h3 className="font-display mt-4 text-2xl leading-snug font-light text-forest">
                  {value.title}
                </h3>
                <p className="mt-4 text-sm leading-7 font-light text-ink-soft">
                  {value.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Work with a supplier that documents everything"
        description="Tell us what you are formulating and we will tell you honestly whether we are the right partner for it."
      />
    </>
  );
}
