import { ArrowRight, Boxes, Handshake, PackageCheck, SlidersHorizontal, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const HIGHLIGHTS = [
  { icon: Boxes, label: "Bulk Commodity Supply" },
  { icon: Store, label: "Wholesale Trading" },
  { icon: PackageCheck, label: "Reliable Sourcing" },
  { icon: Handshake, label: "Business Partnerships" },
  { icon: SlidersHorizontal, label: "Customized Buyer Requirements" },
];

const BUYERS = ["Wholesalers", "Distributors", "Food Manufacturers", "Retailers", "Bulk Buyers"];

export function DomesticTrade({ onEnquire }: { onEnquire: () => void }) {
  return (
    <section id="domestic" className="py-24 sm:py-32">
      <div className="container-page grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Reveal>
          <SectionHeading
            eyebrow="Domestic Trade"
            title="Reliable Agricultural Supply Across India"
            description="We serve domestic wholesalers, distributors, food manufacturers, retailers and bulk buyers by connecting them with quality agricultural commodities."
          />
          <div className="mt-8 flex flex-wrap gap-2">
            {BUYERS.map((b) => (
              <span
                key={b}
                className="rounded-full border border-olive/30 bg-olive/10 px-4 py-1.5 text-sm font-semibold text-forest"
              >
                {b}
              </span>
            ))}
          </div>
          <Button variant="forest" size="xl" className="mt-10" onClick={onEnquire}>
            Enquire for Domestic Supply <ArrowRight />
          </Button>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {HIGHLIGHTS.map(({ icon: Icon, label }, i) => (
            <Reveal
              key={label}
              delay={i * 80}
              className={i === HIGHLIGHTS.length - 1 ? "sm:col-span-2" : undefined}
            >
              <div className="group flex h-full items-center gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-olive/40 hover:shadow-card">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-secondary text-forest transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="font-display text-lg font-semibold text-forest">{label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
