import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/sections/PageHeader";
import { CtaBand } from "@/components/sections/CtaBand";
import { Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { productCategories } from "@/data/products";

export function generateStaticParams() {
  return productCategories.map((c) => ({ category: c.slug }));
}

function findCategory(slug: string) {
  return productCategories.find((c) => c.slug === slug);
}

export async function generateMetadata({
  params,
}: PageProps<"/products/[category]">): Promise<Metadata> {
  const { category } = await params;
  const found = findCategory(category);
  if (!found) return { title: "Product not found" };
  return { title: found.name, description: found.summary };
}

export default async function CategoryPage({
  params,
}: PageProps<"/products/[category]">) {
  const { category } = await params;
  const found = findCategory(category);
  if (!found) notFound();

  return (
    <>
      <PageHeader
        eyebrow="Products"
        title={found.name}
        description={found.summary}
        breadcrumb={[
          { href: "/", label: "Home" },
          { href: "/products", label: "Products" },
          { href: `/products/${found.slug}`, label: found.name },
        ]}
        image={found.image}
        imageAlt={found.imageAlt}
      />

      <Section className="grain">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <RevealOnScroll>
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={found.image}
                  alt={found.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-5 -bottom-5 hidden h-full w-full border border-gold/50 sm:block"
              />
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <SectionHeading eyebrow="Overview" title="What we supply" />
            <p className="mt-8 text-base leading-9 font-light text-ink-soft">
              {found.intro}
            </p>

            <ul className="mt-12 border-t border-ink/10">
              {found.highlights.map((point) => (
                <li
                  key={point}
                  className="flex items-baseline gap-5 border-b border-ink/10 py-5 text-sm leading-7 font-light text-ink-soft"
                >
                  <span
                    aria-hidden="true"
                    className="inline-block h-1 w-1 shrink-0 rotate-45 bg-gold"
                  />
                  {point}
                </li>
              ))}
            </ul>
          </RevealOnScroll>
        </div>
      </Section>

      <Section className="bg-ivory-warm">
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Representative Grades"
            title="Specifications at a glance"
            description="Grades below are indicative. Assay ranges, mesh size, solvent system and packing can be adjusted to your specification."
          />
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div className="mt-16 overflow-x-auto">
            <table className="w-full min-w-[38rem] border-collapse text-left">
              <caption className="sr-only">
                Representative {found.name} grades and specifications
              </caption>
              <thead>
                <tr className="border-y border-ink/15">
                  {["Product", "Specification", "Botanical Source"].map((h) => (
                    <th
                      key={h}
                      scope="col"
                      className="tracked px-2 py-6 text-[0.56rem] font-medium text-gold-deep"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {found.items.map((item) => (
                  <tr key={item.name} className="border-b border-ink/10">
                    <th
                      scope="row"
                      className="font-display px-2 py-7 text-xl font-light text-forest"
                    >
                      {item.name}
                    </th>
                    <td className="px-2 py-7 text-sm font-light text-ink-soft">
                      {item.spec}
                    </td>
                    <td className="px-2 py-7 text-sm font-light text-ink-faint italic">
                      {item.source}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </RevealOnScroll>
      </Section>

      <CtaBand
        title={`Request a ${found.name.toLowerCase()} quotation`}
        description="Share your target assay, annual volume and destination market — we will respond with a technical data sheet, sample and pricing."
      />
    </>
  );
}
