import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { ProductCategoryGrid } from "@/components/sections/ProductCategoryGrid";
import { PopularProductsMarquee } from "@/components/sections/PopularProductsMarquee";
import { CtaBand } from "@/components/sections/CtaBand";
import { Section } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Standardised herbal extracts, phytochemicals, essential oils, oleoresins, cosmoceutical ingredients and contract manufacturing from ARN Ingredients.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Collection"
        title="Products"
        description="Six families of botanical ingredients, each released against a documented specification. Select a family to see representative grades, markers and packing options."
        breadcrumb={[
          { href: "/", label: "Home" },
          { href: "/products", label: "Products" },
        ]}
        image="/images/spices-flatlay.jpg"
        imageAlt="Botanical ingredients and spices arranged on a surface"
      />

      <Section className="grain">
        <ProductCategoryGrid />
      </Section>

      <PopularProductsMarquee />

      <CtaBand
        title="Looking for something not listed?"
        description="Our catalogue is representative, not exhaustive. Tell us the botanical and marker you need and we will confirm feasibility, lead time and sample availability."
      />
    </>
  );
}
