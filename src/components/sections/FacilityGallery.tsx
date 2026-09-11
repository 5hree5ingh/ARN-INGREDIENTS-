import Image from "next/image";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { facilityPhotos } from "@/data/facility";

const [lead, ...others] = facilityPhotos;

/**
 * Strict grid: one full-width lead shot, then a uniform three-across grid.
 * Every tile below the lead shares the same 4:3 crop so rows end level and
 * captions sit on a common baseline.
 */
export function FacilityGallery() {
  return (
    <div>
      {/* Lead shot */}
      <RevealOnScroll>
        <figure className="group">
          <div className="relative aspect-[16/7] overflow-hidden bg-forest-deep">
            <Image
              src={lead.src}
              alt={lead.alt}
              fill
              sizes="100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          </div>
          <figcaption className="mt-6 grid gap-3 border-t border-ink/10 pt-6 md:grid-cols-[0.3fr_1fr] md:gap-10">
            <h3 className="tracked text-[0.58rem] font-medium text-gold-deep">
              {lead.caption}
            </h3>
            <p className="max-w-2xl text-sm leading-7 font-light text-ink-soft">
              {lead.detail}
            </p>
          </figcaption>
        </figure>
      </RevealOnScroll>

      {/* Uniform grid */}
      <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {others.map((photo, i) => (
          <RevealOnScroll key={photo.src} delay={(i % 3) * 0.08}>
            <figure className="group flex h-full flex-col">
              <div className="relative aspect-[4/3] overflow-hidden bg-forest-deep">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>
              <figcaption className="mt-5 border-t border-ink/10 pt-5">
                <h3 className="tracked text-[0.58rem] font-medium text-gold-deep">
                  {photo.caption}
                </h3>
                <p className="mt-3 text-sm leading-7 font-light text-ink-soft">
                  {photo.detail}
                </p>
              </figcaption>
            </figure>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
}
