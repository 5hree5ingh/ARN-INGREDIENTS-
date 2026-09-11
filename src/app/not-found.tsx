import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Section className="grain text-center">
      <p className="tracked text-[0.6rem] font-medium text-gold-deep">404</p>
      <h1 className="font-display mx-auto mt-7 max-w-2xl text-5xl leading-[1.1] font-light text-forest sm:text-6xl">
        We could not find that page
      </h1>
      <p className="mx-auto mt-7 max-w-md text-base leading-9 font-light text-ink-soft">
        The page may have moved, or the link may be out of date. Our catalogue is
        a good place to pick the trail back up.
      </p>
      <div className="mt-12 flex flex-wrap justify-center gap-4">
        <ButtonLink href="/products">Browse Products</ButtonLink>
        <ButtonLink href="/" variant="outline">
          Back to Home
        </ButtonLink>
      </div>
    </Section>
  );
}
