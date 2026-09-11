import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { ConsultancyServices } from "@/components/sections/ConsultancyServices";
import { CtaBand } from "@/components/sections/CtaBand";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { internalResearch, publishedResearch } from "@/data/research";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Published research, internal technical notes and consultancy services from the ARN Ingredients research and development team.",
};

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        eyebrow="R & D"
        title="Research & projects"
        description="Analytical method development and extraction research underpin every specification we publish. A selection of our work is summarised below."
        breadcrumb={[
          { href: "/", label: "Home" },
          { href: "/research", label: "Research" },
        ]}
        image="/images/research-banner.jpg"
        imageAlt="Analytical laboratory glassware and extract solutions on pale stone benchtop"
      />

      <Section className="grain">
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Published Research"
            title="Peer-reviewed work"
            description="Method development and validation studies published in analytical and phytomedicine journals."
          />
        </RevealOnScroll>

        <ul className="mt-20 border-t border-ink/10">
          {publishedResearch.map((paper, i) => (
            <li key={paper.title}>
              <RevealOnScroll delay={i * 0.06}>
                <article className="grid gap-6 border-b border-ink/10 py-12 md:grid-cols-[0.3fr_1fr]">
                  <p className="tracked text-[0.58rem] font-medium text-gold-deep">
                    {paper.journal}
                  </p>
                  <div>
                    <h3 className="font-display text-2xl leading-snug font-light text-forest">
                      {paper.title}
                    </h3>
                    <p className="mt-4 max-w-2xl text-sm leading-7 font-light text-ink-soft">
                      {paper.summary}
                    </p>
                  </div>
                </article>
              </RevealOnScroll>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="bg-ivory-warm">
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Internal Research"
            title="Technical notes from our laboratory"
            description="Process and method notes produced in-house. Full documents are shared with customers on request."
          />
        </RevealOnScroll>

        <div className="mt-20 grid gap-10 md:grid-cols-3">
          {internalResearch.map((note, i) => (
            <RevealOnScroll key={note.title} delay={i * 0.1}>
              <article className="h-full border border-ink/10 bg-ivory p-9">
                <p className="tracked text-[0.56rem] font-medium text-gold-deep">
                  {note.label}
                </p>
                <span aria-hidden="true" className="mt-5 block h-px w-10 bg-gold" />
                <h3 className="font-display mt-5 text-2xl leading-snug font-light text-forest">
                  {note.title}
                </h3>
                <p className="mt-4 text-sm leading-7 font-light text-ink-soft">
                  {note.summary}
                </p>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </Section>

      <section className="bg-forest py-24 sm:py-32">
        <Container>
          <RevealOnScroll>
            <SectionHeading
              eyebrow="Consultancy Services"
              title="Capability we can transfer to you"
              description="For companies building their own extraction capability, we take on design, development and project work directly."
              tone="light"
            />
          </RevealOnScroll>
          <div className="mt-20">
            <ConsultancyServices tone="light" />
          </div>
        </Container>
      </section>

      <CtaBand
        title="Have a development brief?"
        description="Send us the target marker, the matrix and the constraints you are working within — we will tell you what is achievable and how long it takes."
      />
    </>
  );
}
