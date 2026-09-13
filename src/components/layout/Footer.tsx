import Link from "next/link";
import { Logo } from "./Logo";
import { Container } from "@/components/ui/Container";
import {
  addressLines,
  salesOfficeLines,
  company,
  enquiryContacts,
  mailtoLink,
} from "@/data/company";
import { productCategories } from "@/data/products";

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/certifications", label: "Certifications" },
  { href: "/infrastructure", label: "Infrastructure" },
  { href: "/research", label: "Research" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

const linkClass =
  "inline-block py-2 text-sm font-light text-ivory/60 transition-colors duration-300 hover:text-gold focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-gold";

const headingClass = "tracked text-[0.6rem] font-medium text-gold";

export function Footer() {
  return (
    <footer className="bg-forest-deep text-ivory">
      <Container>
        <div className="grid gap-14 border-b border-ivory/10 py-20 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1.4fr]">
          <div>
            <Logo tone="light" variant="full" />
            <p className="mt-2 max-w-xs text-sm leading-8 font-light text-ivory/60">
              {company.description}
            </p>
          </div>

          <nav aria-label="Products">
            <h2 className={headingClass}>Products</h2>
            <ul className="mt-6">
              {productCategories.map((c) => (
                <li key={c.slug}>
                  <Link href={`/products/${c.slug}`} className={linkClass}>
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <h2 className={headingClass}>Company</h2>
            <ul className="mt-6">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className={headingClass}>Get in Touch</h2>

            <p className="mt-6 text-[0.56rem] font-medium tracking-widest text-ivory/40">MANUFACTURING UNIT</p>
            <address className="mt-2 text-sm leading-7 font-light text-ivory/60 not-italic">
              {addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>

            <div className="my-6 border-t border-ivory/10" />

            <p className="text-[0.56rem] font-medium tracking-widest text-ivory/40">SALES OFFICE</p>
            <address className="mt-2 text-sm leading-7 font-light text-ivory/60 not-italic">
              {salesOfficeLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>

            {/* Each line rings a different desk; email is shared and shown once below */}
            {enquiryContacts.map((contact) => (
              <div key={contact.label}>
                <p className="mt-5 text-[0.56rem] font-medium tracking-widest text-ivory/40">
                  {contact.label.toUpperCase()}
                </p>
                <a
                  href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`}
                  className={`${linkClass} mt-1`}
                >
                  {contact.phone}
                </a>
              </div>
            ))}

            <p className="mt-5 text-[0.56rem] font-medium tracking-widest text-ivory/40">
              EMAIL
            </p>
            <a
              href={mailtoLink(company.email, "Enquiry — ARN Ingredients")}
              className={`${linkClass} mt-1 break-all`}
            >
              {company.email.toLowerCase()}
            </a>
          </div>
        </div>

        <div className="tracked flex flex-col gap-3 py-8 text-[0.6rem] text-ivory/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {company.name}
          </p>
          <p>Haridwar · Noida · India</p>
        </div>
      </Container>
    </footer>
  );
}
