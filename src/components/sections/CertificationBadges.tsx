import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { certifications } from "@/data/research";

/** Logo artwork is optional — fall back to a typographic mark until it lands. */
function hasArtwork(logo: string) {
  return existsSync(path.join(process.cwd(), "public", logo));
}

/**
 * Marks are transparent PNGs, so they sit directly on the section background
 * rather than on a tile — no white box behind the artwork.
 */
function Mark({ logo, code, size }: { logo: string; code: string; size: number }) {
  if (!hasArtwork(logo)) {
    return (
      <span
        className="inline-flex items-center justify-center border border-gold/40 px-2 text-center"
        style={{ width: size, height: size }}
      >
        <span className="font-display text-sm leading-tight font-light text-gold-deep">
          {code}
        </span>
      </span>
    );
  }

  return (
    <Image
      src={logo}
      alt={`${code} certification mark`}
      width={size}
      height={size}
      className="object-contain"
      style={{ width: size, height: size }}
    />
  );
}

export function CertificationBadges({
  detailed = false,
  tone = "dark",
}: {
  detailed?: boolean;
  tone?: "dark" | "light";
}) {
  const light = tone === "light";

  if (detailed) {
    return (
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => (
          <RevealOnScroll key={cert.code} delay={(i % 3) * 0.08}>
            <div className="flex h-full flex-col border border-ink/10 bg-ivory p-9">
              <Mark logo={cert.logo} code={cert.code} size={96} />
              <span aria-hidden="true" className="mt-7 block h-px w-10 bg-gold" />
              <p className="font-display mt-5 text-2xl leading-snug font-light text-forest">
                {cert.code}
              </p>
              <h3 className="tracked mt-2 text-[0.56rem] font-medium text-gold-deep">
                {cert.name}
              </h3>
              <p className="mt-4 text-sm leading-7 font-light text-ink-soft">
                {cert.description}
              </p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    );
  }

  return (
    <ul
      className={`grid grid-cols-2 border-t border-l sm:grid-cols-4 ${
        light ? "border-ivory/12" : "border-ink/10"
      }`}
    >
      {certifications.map((cert, i) => (
        <li
          key={cert.code}
          className={`flex flex-col items-center border-r border-b px-4 py-10 text-center ${
            light ? "border-ivory/12" : "border-ink/10"
          }`}
        >
          <RevealOnScroll delay={(i % 4) * 0.06}>
            <Mark logo={cert.logo} code={cert.code} size={72} />
            <p
              className={`tracked mt-4 text-[0.52rem] font-medium ${
                light ? "text-ivory/55" : "text-ink-faint"
              }`}
            >
              {cert.code}
            </p>
          </RevealOnScroll>
        </li>
      ))}
    </ul>
  );
}
