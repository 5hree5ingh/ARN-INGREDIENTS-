import { ImageCard } from "@/components/ui/Card";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { productCategories } from "@/data/products";

export function ProductCategoryGrid() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {productCategories.map((category, i) => (
        <RevealOnScroll key={category.slug} delay={(i % 3) * 0.1}>
          <ImageCard
            href={`/products/${category.slug}`}
            image={category.image}
            alt={category.imageAlt}
            eyebrow={`0${i + 1}`}
            title={category.name}
            description={category.summary}
            cta="View Details"
          />
        </RevealOnScroll>
      ))}
    </div>
  );
}
