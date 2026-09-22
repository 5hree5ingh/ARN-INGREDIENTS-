import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/sections/PageHeader";
import { StatsBar } from "@/components/sections/StatsBar";
import { CtaBand } from "@/components/sections/CtaBand";
import { Section, Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "ARN Ingredients Pvt Ltd — Authentic, Reliable, Natural. Led by 20+ years of R&D and techno-commercial expertise, providing complete solutions from ingredients to formulations across all therapeutic segments.",
};

const pillars = [
  {
    letter: "A",
    word: "Authentic",
    description:
      "Every ingredient is traceable to its botanical origin. Authenticity is not a claim — it is a documented fact backed by rigorous identity testing and source verification.",
  },
  {
    letter: "R",
    word: "Reliable",
    description:
      "20+ years of R&D and techno-commercial experience mean our formulations perform consistently, batch after batch, shipment after shipment, across global markets.",
  },
  {
    letter: "N",
    word: "Natural",
    description:
      "Rooted in the biodiversity of nature, our extracts bridge the gap between traditional botanical wisdom and modern science-backed standardised ingredients.",
  },
];

const highlights = [
  {
    icon: "🌿",
    title: "Nature to Science",
    body: "From raw botanical sourcing to science-backed, standardised ingredients — we manage the entire value chain with precision and transparency.",
  },
  {
    icon: "🏭",
    title: "cGMP Facility",
    body: "Cutting-edge cGMP manufacturing plant in a pristine, pollution-free environment near the sacred Ganges river — one of India's most ecologically pure zones.",
  },
  {
    icon: "💊",
    title: "All Therapeutic Segments",
    body: "Complete solutions from ingredients to formulations across nutraceutical, pharmaceutical, cosmeceutical and all therapeutic categories.",
  },
  {
    icon: "🤝",
    title: "Long-Term Partnerships",
    body: "We provide tailored, customer-based solutions and long-term business support — built on trust, transparency and consistent quality.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Rooted in Nature, Branching into Science"
        description="ARN Ingredients Pvt Ltd — Authentic, Reliable, Natural. From nature to science-backed ingredients, providing complete solutions from ingredients to formulations across all therapeutic segments."
        breadcrumb={[
          { href: "/", label: "Home" },
          { href: "/about", label: "About Us" },
        ]}
        image="/images/about-banner.jpg"
        imageAlt="Laboratory sample vials arranged across pale travertine with brass scale"
      />

      <StatsBar />

      {/* ── Who We Are ──────────────────────────────────────────────── */}
      <Section className="grain">
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-28">
          <RevealOnScroll>
            <SectionHeading
              eyebrow="Who We Are"
              title="ARN Ingredients Pvt Ltd"
            />
            <p className="mt-6 text-sm leading-7 font-light text-ink-soft italic">
              As our name says — Authentic, Reliable, Natural.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <div className="space-y-6 text-base font-light text-ink-soft leading-[1.9]">
              <p className="font-display text-[1.35rem] leading-[1.7] text-forest">
                ARN Ingredients is led by a team of strong R&amp;D and
                techno-commercial professionals having rich experience of over{" "}
                <strong className="font-semibold text-forest">20 years</strong>{" "}
                in natural extracts — from nature to science-backed ingredients.
              </p>
              <p>
                ARN provides a complete solution from ingredients to
                formulations in all the therapeutic segment. Rooted in nature,
                branching into science, our extracts nurture global potential.
              </p>
              <p>
                Our facility with a cutting-edge{" "}
                <strong className="font-medium text-ink">
                  cGMP manufacturing plant
                </strong>{" "}
                is spread in a pristine, pollution-free environment near the
                Ganges (Ganga river) — ensuring every extract benefits from
                one of India&apos;s most ecologically pure settings.
              </p>
              <p>
                We provide customer-based solutions and support for long-term
                business partnerships — built on trust, transparency and
                consistent quality.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </Section>

      {/* ── A · R · N Pillars ───────────────────────────────────────── */}
      <Section className="bg-ivory-warm">
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Our Name, Our Promise"
            title="Authentic · Reliable · Natural"
          />
        </RevealOnScroll>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <RevealOnScroll key={pillar.letter} delay={i * 0.1}>
              <div className="relative overflow-hidden border border-gold/20 bg-white p-10 shadow-sm">
                {/* Giant letter watermark */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-3 -top-4 font-display text-[7rem] font-bold leading-none text-gold/10 select-none"
                >
                  {pillar.letter}
                </span>
                <p className="font-display text-5xl font-light text-gold-deep">
                  {pillar.letter}
                </p>
                <h3 className="font-display mt-3 text-2xl font-light text-forest">
                  {pillar.word}
                </h3>
                <p className="mt-4 text-sm leading-7 font-light text-ink-soft">
                  {pillar.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Section>

      {/* ── Factory Full-Bleed Image ─────────────────────────────────── */}
      <section className="relative isolate overflow-hidden">
        <div className="relative h-[28rem] sm:h-[40rem]">
          <Image
            src="/images/FACTORY_IMAGES/extraction_plant.jpg"
            alt="Extraction vessels in the ARN Ingredients cGMP plant near the Ganges"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-forest-deep/55" />
          {/* Overlay text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <RevealOnScroll>
              <p className="font-display text-[0.65rem] tracking-[0.25em] uppercase text-gold">
                Our Facility
              </p>
              <h2 className="font-display mt-4 max-w-3xl text-3xl font-light leading-snug text-white sm:text-4xl lg:text-5xl">
                A cGMP Plant in a Pristine Environment Near the Ganges
              </h2>
              <p className="mt-6 max-w-xl text-sm leading-7 text-ivory/70 font-light">
                Cutting-edge manufacturing infrastructure in one of India&apos;s
                most ecologically pure zones — ensuring every extract is free
                from environmental contaminants.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── Four Highlights ─────────────────────────────────────────── */}
      <Section className="grain">
        <RevealOnScroll>
          <SectionHeading
            eyebrow="What We Offer"
            title="Complete Solutions, End to End"
          />
        </RevealOnScroll>

        <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h, i) => (
            <RevealOnScroll key={h.title} delay={i * 0.08}>
              <div className="border-t-2 border-gold pt-8">
                <span className="text-3xl" role="img" aria-label={h.title}>
                  {h.icon}
                </span>
                <h3 className="font-display mt-5 text-xl font-light text-forest leading-snug">
                  {h.title}
                </h3>
                <p className="mt-3 text-sm leading-7 font-light text-ink-soft">
                  {h.body}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Section>

      {/* ── Mission Statement Banner ─────────────────────────────────── */}
      <section className="bg-forest-deep py-20 sm:py-28">
        <Container>
          <RevealOnScroll>
            <blockquote className="mx-auto max-w-3xl text-center">
              <p className="font-display text-2xl font-light leading-[1.8] text-ivory sm:text-3xl lg:text-4xl">
                &ldquo;Rooted in nature, branching into science — our extracts
                nurture global potential.&rdquo;
              </p>
              <footer className="mt-8">
                <span className="block h-px w-16 bg-gold mx-auto mb-5" />
                <cite className="not-italic text-[0.6rem] tracking-[0.2em] uppercase text-gold font-medium">
                  ARN Ingredients Pvt Ltd
                </cite>
              </footer>
            </blockquote>
          </RevealOnScroll>
        </Container>
      </section>

      <CtaBand
        title="Ready for a long-term partnership?"
        description="We provide customer-based solutions and support built on trust, quality and over two decades of expertise. Tell us what you need."
      />
    </>
  );
}
