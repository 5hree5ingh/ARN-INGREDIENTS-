import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { CertificationBadges } from "@/components/sections/CertificationBadges";
import { CtaBand } from "@/components/sections/CtaBand";
import { Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export const metadata: Metadata = {
  title: "Certifications",
  description:
    "Quality, food safety and dietary certifications held by ARN Ingredients for herbal extract and phytochemical manufacturing.",
};

const documents = [
  "Certificate of Analysis against the agreed specification",
  "Material Safety Data Sheet",
  "Manufacturing and expiry batch details",
  "Allergen, GMO and origin declarations",
  "Heavy metals and pesticide residue results",
  "Microbiological test report",
];

export default function CertificationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Quality & Compliance"
        title="Certifications"
        description="Our quality systems are audited by third parties so your regulatory, procurement and customer-facing teams have documented evidence to rely on."
        breadcrumb={[
          { href: "/", label: "Home" },
          { href: "/certifications", label: "Certifications" },
        ]}
        image="/images/FACTORY_IMAGES/finish_good_storage.jpg"
        imageAlt="Sealed drums of released finished product in the warehouse"
      />

      <Section className="grain">
        <RevealOnScroll>
          <SectionHeading
            eyebrow="What We Hold"
            title="Certified systems, not certified claims"
            description="Each certification covers our manufacturing and quality processes. Copies of current certificates are issued on request with your first order."
          />
        </RevealOnScroll>
        <div className="mt-12 sm:mt-20">
          <CertificationBadges detailed />
        </div>
      </Section>

      <Section className="bg-ivory-warm">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <RevealOnScroll>
            <SectionHeading
              eyebrow="Documentation"
              title="What ships with your order"
              description="Every consignment is released with a documentation pack sized for regulated export markets."
            />
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <ul className="border-t border-ink/10">
              {documents.map((doc) => (
                <li
                  key={doc}
                  className="flex items-baseline gap-5 border-b border-ink/10 py-6 text-sm leading-7 font-light text-ink-soft"
                >
                  <span
                    aria-hidden="true"
                    className="inline-block h-1 w-1 shrink-0 rotate-45 bg-gold"
                  />
                  {doc}
                </li>
              ))}
            </ul>
          </RevealOnScroll>
        </div>
      </Section>

      <CtaBand
        title="Need our certificates for a vendor audit?"
        description="Send us your vendor qualification checklist and we will return the completed pack with current certificate copies."
      />
    </>
  );
}
