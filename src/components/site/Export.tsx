import {
  ArrowRight,
  ClipboardList,
  Container,
  Globe2,
  Handshake,
  Package,
  ShipWheel,
} from "lucide-react";
import exportImg from "@/assets/images/export-cargo-port.webp.asset.json";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const HIGHLIGHTS = [
  { icon: ShipWheel, label: "Export-Ready Sourcing" },
  { icon: Container, label: "Bulk Export Orders" },
  { icon: Globe2, label: "International Buyer Support" },
  { icon: ClipboardList, label: "Product Specifications" },
  { icon: Package, label: "Packaging Coordination" },
  { icon: Handshake, label: "Long-Term Trade Partnerships" },
];

export function Export({ onDiscuss }: { onDiscuss: () => void }) {
  return (
    <section id="export" className="relative isolate overflow-hidden pt-14 pb-24 sm:pt-16 sm:pb-32">
      <img
        src={exportImg.url}
        alt="Container cargo ship at an Indian sea port at dusk"
        loading="lazy"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="bg-export-overlay absolute inset-0 -z-10" />

      <div className="container-page">
        <Reveal className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <SectionHeading
            tone="light"
            eyebrow="Export Business"
            title="Taking Indian Agricultural Products to Global Markets"
            className="max-w-3xl"
          />
          <p className="text-lg leading-relaxed text-ivory/80">
            MANDI PARTNER aims to connect international buyers with quality Indian agricultural
            commodities. We work towards building reliable export partnerships and supplying
            products according to buyer specifications and market requirements.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-ivory/15 bg-ivory/15 sm:grid-cols-2 lg:grid-cols-3">
          {HIGHLIGHTS.map(({ icon: Icon, label }, i) => (
            <Reveal key={label} delay={i * 70} className="h-full">
              <div className="group flex h-full items-center gap-4 bg-forest-deep/45 p-7 backdrop-blur-sm transition-colors duration-300 hover:bg-forest-deep/65">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-gold/40 text-gold transition-colors group-hover:bg-gold group-hover:text-forest-deep">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="font-display text-lg font-medium text-ivory">{label}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <Button variant="gold" size="xl" onClick={onDiscuss}>
            Discuss Export Requirements <ArrowRight />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
