import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { consultancyServices } from "@/data/products";

export function ConsultancyServices({
  tone = "dark",
}: {
  tone?: "dark" | "light";
}) {
  const light = tone === "light";

  return (
    <div className="grid gap-px md:grid-cols-3">
      {consultancyServices.map((service, i) => (
        <RevealOnScroll key={service.title} delay={i * 0.1}>
          <div
            className={`h-full border-t-2 pt-9 ${
              light ? "border-gold/50" : "border-gold"
            }`}
          >
            <p
              className={`font-display text-2xl font-light ${
                light ? "text-gold" : "text-gold-deep"
              }`}
            >
              0{i + 1}
            </p>
            <h3
              className={`font-display mt-4 text-2xl leading-snug font-light ${
                light ? "text-ivory" : "text-forest"
              }`}
            >
              {service.title}
            </h3>
            <p
              className={`mt-4 text-sm leading-7 font-light ${
                light ? "text-ivory/65" : "text-ink-soft"
              }`}
            >
              {service.description}
            </p>
          </div>
        </RevealOnScroll>
      ))}
    </div>
  );
}
