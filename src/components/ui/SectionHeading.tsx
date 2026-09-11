export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
}) {
  const light = tone === "light";

  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p
          className={`tracked ${align === "center" ? "" : "gold-rule"} mb-6 text-[0.66rem] font-medium ${
            light ? "text-gold" : "text-gold-deep"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-[2.5rem] leading-[1.12] font-light tracking-[-0.01em] sm:text-5xl ${
          light ? "text-ivory" : "text-forest"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-6 text-[0.98rem] leading-8 font-light ${
            light ? "text-ivory/70" : "text-ink-soft"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
