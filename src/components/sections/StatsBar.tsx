import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Container } from "@/components/ui/Container";
import { stats } from "@/data/company";

export function StatsBar({ tone = "ivory" }: { tone?: "ivory" | "forest" }) {
  const light = tone === "forest";

  return (
    <section
      className={
        light ? "bg-forest text-ivory" : "grain border-b border-ink/10 bg-ivory-warm"
      }
    >
      <Container>
        <dl className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col-reverse items-center px-4 py-14 text-center ${
                i > 0 ? "lg:border-l" : ""
              } ${i % 2 === 1 ? "border-l" : ""} ${
                light ? "border-ivory/12" : "border-ink/10"
              } ${i < 2 ? "border-b lg:border-b-0" : ""}`}
            >
              <dt
                className={`tracked mt-4 text-[0.58rem] font-medium ${
                  light ? "text-ivory/50" : "text-ink-faint"
                }`}
              >
                {stat.label}
              </dt>
              <dd
                className={`font-display text-5xl leading-none font-light sm:text-6xl ${
                  light ? "text-gold" : "text-gold-deep"
                }`}
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
