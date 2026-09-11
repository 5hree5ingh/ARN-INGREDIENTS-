import type { MetadataRoute } from "next";
import { navLinks } from "@/data/navigation";
import { productCategories } from "@/data/products";

// PLACEHOLDER: replace with ARN's production domain before launch.
const baseUrl = "https://arningredients.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    ...navLinks.map((l) => l.href),
    ...productCategories.map((c) => `/products/${c.slug}`),
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route === "/" ? "" : route}`,
    lastModified: new Date(),
  }));
}
