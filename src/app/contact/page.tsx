import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { ContactForm } from "@/components/sections/ContactForm";
import { Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import {
  addressLines,
  salesOfficeLines,
  company,
  enquiryContacts,
  mailtoLink,
} from "@/data/company";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact ARN Ingredients in Haridwar, Uttarakhand for herbal extract, phytochemical and contract manufacturing enquiries.",
};

const blockLabel = "tracked text-[0.56rem] font-medium text-gold-deep";
const linkClass =
  "block py-1 text-sm leading-7 font-light text-ink-soft transition-colors duration-300 hover:text-gold-deep focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-gold";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get in Touch"
        title="Contact us"
        description="Send us a specification and we will come back with feasibility, lead time and pricing. Samples are available for evaluation on most catalogue grades."
        breadcrumb={[
          { href: "/", label: "Home" },
          { href: "/contact", label: "Contact" },
        ]}
        image="/images/contact-banner.jpg"
        imageAlt="Glass vial of golden extract powder with brass spatula and ivory linen on pale stone"
      />

      <Section className="grain">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <RevealOnScroll>
            <SectionHeading eyebrow="Our Offices" title="ARN Ingredients Pvt. Ltd." />

            <div className="mt-12 space-y-10">
              <div>
                <h3 className={blockLabel}>Manufacturing Unit</h3>
                <address className="mt-3 text-sm leading-8 font-light text-ink-soft not-italic">
                  {addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </div>

              <div>
                <h3 className={blockLabel}>Sales Office</h3>
                <address className="mt-3 text-sm leading-8 font-light text-ink-soft not-italic">
                  {salesOfficeLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </div>

              {/* Each line rings a different desk; email is shared and shown once below */}
              {enquiryContacts.map((contact) => (
                <div key={contact.label}>
                  <h3 className={blockLabel}>{contact.label}</h3>
                  <p className="mt-2 text-xs font-light text-ink-faint">
                    {contact.note}
                  </p>
                  <a
                    href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`}
                    className={`${linkClass} mt-1`}
                  >
                    {contact.phone}
                  </a>
                </div>
              ))}

              <div>
                <h3 className={blockLabel}>Email</h3>
                <a
                  href={mailtoLink(company.email, "Enquiry — ARN Ingredients")}
                  className={`${linkClass} mt-3 break-all`}
                >
                  {company.email.toLowerCase()}
                </a>
              </div>
            </div>

            {/* PLACEHOLDER: swap for a map embed once a maps API key is available. */}
            <div className="mt-14 flex h-44 items-center justify-center border border-dashed border-ink/20">
              <p className="tracked px-6 text-center text-[0.56rem] text-ink-faint">
                Haridwar · Uttarakhand — map to be added
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <div className="border border-ink/10 bg-ivory-warm p-9 sm:p-14">
              <SectionHeading eyebrow="Enquiry" title="Tell us what you need" />
              <div className="mt-12">
                <ContactForm />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </Section>
    </>
  );
}
