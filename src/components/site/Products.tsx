import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PRODUCTS, productLabel } from "@/lib/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Products({ onInquire }: { onInquire: (product: string) => void }) {
  return (
    <section id="products" className="relative bg-secondary py-24 sm:py-32">
      <div className="container-page">
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Our Products"
            title="Our Agricultural Products"
            description="Quality grains, millets, seeds and superfoods sourced from India for domestic and international buyers."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 100}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border/70 bg-card shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
                <div className="relative overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.alt}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-bold tracking-wider text-forest backdrop-blur">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="text-2xl font-semibold text-forest">
                    {p.name}
                    {p.subtitle && (
                      <span className="ml-2 font-sans text-sm font-semibold uppercase tracking-wider text-olive">
                        {p.subtitle}
                      </span>
                    )}
                  </h3>
                  <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{p.description}</p>
                  <Button
                    variant="outline"
                    size="pill"
                    className="mt-6 self-start border-forest/25 bg-transparent font-semibold text-forest hover:border-forest hover:bg-primary hover:text-primary-foreground"
                    onClick={() => onInquire(productLabel(p))}
                    aria-label={`Send an inquiry about ${productLabel(p)}`}
                  >
                    Send Inquiry <ArrowUpRight />
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
