import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/sections/PageHeader";
import { CtaBand } from "@/components/sections/CtaBand";
import { Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import {
  productCategories,
  type ProductGroup,
  type ProductItem,
} from "@/data/products";

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
        compact
      />

      {/* ── Product list first — tight padding so list starts immediately ── */}
      <section className="grain py-10 sm:py-12">
        <div className="mx-auto w-full max-w-[82rem] px-6 sm:px-10">
          {found.items && <ProductTable name={found.name} items={found.items} />}
          {found.groups && <ProductGroups groups={found.groups} />}
        </div>
      </section>

      {/* ── Overview / What we supply below ── */}
      <Section className="bg-ivory-warm">
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

      <CtaBand
        title={`Request a ${found.name.toLowerCase()} quotation`}
        description="Share your target assay, annual volume and destination market — we will respond with a technical data sheet, sample and pricing."
      />
    </>
  );
}

/** Full specification sheet — optional columns appear only when data exists. */
function ProductTable({ name, items }: { name: string; items: ProductItem[] }) {
  const showBotanical = items.some((i) => i.botanical);
  const showMethod = items.some((i) => i.method);
  const showApplication = items.some((i) => i.application);

  const headers = [
    "Product",
    showBotanical && "Botanical Source",
    "Specification",
    showMethod && "Method",
    showApplication && "Application",
  ].filter(Boolean) as string[];

  return (
    <RevealOnScroll delay={0.1}>
      <p className="mt-16 text-sm font-light text-ink-faint">
        {items.length} grades listed
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[46rem] border-collapse text-left">
          <caption className="sr-only">
            {name} grades and specifications
          </caption>
          <thead>
            <tr className="border-y border-ink/15">
              {headers.map((h) => (
                <th
                  key={h}
                  scope="col"
                  className="tracked px-3 py-5 text-[0.56rem] font-medium text-gold-deep first:pl-0"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.name} className="border-b border-ink/10">
                <th
                  scope="row"
                  className="font-display px-3 py-5 pl-0 text-lg font-light text-forest"
                >
                  {item.name}
                </th>
                {showBotanical && (
                  <td className="px-3 py-5 text-sm font-light text-ink-faint italic">
                    {item.botanical ?? "—"}
                  </td>
                )}
                <td className="px-3 py-5 text-sm font-light text-ink-soft">
                  {item.spec ?? "—"}
                </td>
                {showMethod && (
                  <td className="px-3 py-5 text-sm font-light text-ink-soft whitespace-nowrap">
                    {item.method ?? "—"}
                  </td>
                )}
                {showApplication && (
                  <td className="px-3 py-5 text-sm font-light text-ink-soft">
                    {item.application ?? "—"}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </RevealOnScroll>
  );
}

/** Grouped name lists for ranges without per-item specs (spray-dried powders). */
function ProductGroups({ groups }: { groups: ProductGroup[] }) {
  return (
    <div className="mt-16 space-y-16">
      {groups.map((group, gi) => (
        <RevealOnScroll key={group.title} delay={gi * 0.08}>
          <div className="grid gap-8 border-t border-ink/10 pt-10 lg:grid-cols-[0.3fr_1fr]">
            <h3 className="font-display text-2xl leading-snug font-light text-forest">
              {group.title}
            </h3>
            <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="flex items-baseline gap-3 border-b border-ink/5 pb-3 text-sm font-light text-ink-soft"
                >
                  <span
                    aria-hidden="true"
                    className="inline-block h-1 w-1 shrink-0 rotate-45 bg-gold"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </RevealOnScroll>
      ))}
    </div>
  );
}
