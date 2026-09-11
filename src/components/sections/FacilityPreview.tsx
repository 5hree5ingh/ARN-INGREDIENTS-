import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { capabilities, facilityPhotos } from "@/data/facility";

// Lead shot plus two supporting crops — the rest live on /infrastructure.
const [lead, ...rest] = facilityPhotos;
const supporting = [
  rest.find((p) => p.caption === "Vacuum Tray Dryer"),
  rest.find((p) => p.caption === "Finished Goods Store"),
].filter(Boolean) as typeof rest;

const captionClass =
  "tracked mt-4 text-[0.56rem] font-medium text-gold-deep";

export function FacilityPreview() {
  return (
    <>
      <RevealOnScroll>
        <SectionHeading
          eyebrow="Manufacturing"
          title="We make it ourselves, in Haridwar"
          description="Not a trading house. Every grade we quote is extracted, dried, assayed and packed in our own plant — which is why we can commit to a specification and hold it batch after batch."
        />
      </RevealOnScroll>

      {/* Both columns stretch to the same height so the row stays flush */}
      <div className="mt-16 grid gap-8 lg:min-h-[34rem] lg:grid-cols-3">
        <RevealOnScroll className="lg:col-span-2">
          <figure className="flex h-full flex-col">
            <div className="relative aspect-[16/10] overflow-hidden bg-forest-deep lg:aspect-auto lg:flex-1">
              <Image
                src={lead.src}
                alt={lead.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover transition-transform duration-700 ease-out hover:scale-[1.04]"
              />
            </div>
            <figcaption className={captionClass}>{lead.caption}</figcaption>
          </figure>
        </RevealOnScroll>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
          {supporting.map((photo, i) => (
            <RevealOnScroll key={photo.src} delay={0.1 + i * 0.08}>
              <figure className="flex h-full flex-col">
                <div className="relative aspect-[4/3] overflow-hidden bg-forest-deep lg:aspect-auto lg:flex-1">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out hover:scale-[1.04]"
                  />
                </div>
                <figcaption className={captionClass}>{photo.caption}</figcaption>
              </figure>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      {/* Process flow, compressed to four labels */}
      <ol className="mt-16 grid border-t border-ink/10 sm:grid-cols-2 lg:grid-cols-4">
        {capabilities.map((stage, i) => (
          <li
            key={stage.title}
            className={`border-b border-ink/10 py-8 sm:px-8 lg:border-b-0 ${
              i > 0 ? "sm:border-l" : ""
            } ${i === 0 ? "sm:pl-0" : ""}`}
          >
            <RevealOnScroll delay={i * 0.08}>
              <p className="font-display text-xl leading-none font-light text-gold-deep">
                0{i + 1}
              </p>
              <h3 className="font-display mt-3 text-lg leading-snug font-light text-forest">
                {stage.title}
              </h3>
            </RevealOnScroll>
          </li>
        ))}
      </ol>

      <RevealOnScroll delay={0.1}>
        <div className="mt-14 flex justify-center">
          <ButtonLink href="/infrastructure" variant="outline">
            View All Facility Images
          </ButtonLink>
        </div>
      </RevealOnScroll>
    </>
  );
}
