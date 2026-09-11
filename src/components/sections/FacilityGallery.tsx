import Image from "next/image";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { facilityPhotos } from "@/data/facility";

/** Editorial gallery of the plant — alternating wide and tall crops. */
export function FacilityGallery() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
      {facilityPhotos.map((photo, i) => {
        // First photo runs full width as the lead image; the rest alternate.
        const span =
          i === 0
            ? "lg:col-span-6"
            : photo.orientation === "portrait"
              ? "lg:col-span-2"
              : "lg:col-span-3";

        return (
          <RevealOnScroll key={photo.src} delay={(i % 3) * 0.08} className={span}>
            <figure className="group h-full">
              <div
                className={`relative overflow-hidden bg-forest-deep ${
                  i === 0
                    ? "aspect-[16/7]"
                    : photo.orientation === "portrait"
                      ? "aspect-[3/4]"
                      : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes={i === 0 ? "100vw" : "(max-width: 1024px) 100vw, 50vw"}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>
              <figcaption className="mt-5">
                <h3 className="tracked text-[0.58rem] font-medium text-gold-deep">
                  {photo.caption}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-7 font-light text-ink-soft">
                  {photo.detail}
                </p>
              </figcaption>
            </figure>
          </RevealOnScroll>
        );
      })}
    </div>
  );
}
