import { notFound } from "next/navigation";
import { PageHeader } from "@/components/sections/PageHeader";
import { CategoryTabs } from "@/components/sections/CategoryTabs";
import { productCategories } from "@/data/products";

/**
 * Shared shell for every product category.
 *
 * Living in a layout rather than the page is what makes switching categories
 * feel smooth: Next preserves this subtree across sibling routes, so the tab
 * strip never unmounts — it stays fixed while only the page body below swaps.
 */
export default async function CategoryLayout({
  children,
  params,
}: LayoutProps<"/products/[category]">) {
  const { category } = await params;
  const found = productCategories.find((c) => c.slug === category);
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

      <CategoryTabs />

      {children}
    </>
  );
}
