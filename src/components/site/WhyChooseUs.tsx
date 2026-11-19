import { Globe2, Handshake, HeartHandshake, Wheat } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const FEATURES = [
  {
    icon: Wheat,
    title: "Quality-Focused Sourcing",
    text: "Careful selection of grains, millets and seeds to meet buyer quality expectations.",
  },
  {
    icon: Handshake,
    title: "Reliable Business Partnerships",
    text: "Transparent dealings and clear communication, built for long-term trade relationships.",
  },
  {
    icon: Globe2,
    title: "Domestic & Global Trade",
    text: "Supplying buyers across India and supporting international buyers with export requirements.",
  },
  {
    icon: HeartHandshake,
    title: "Customer-Centric Approach",
    text: "Products, quantities and specifications arranged around what each buyer needs.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-background py-24 sm:py-32">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Why Choose Us"
            title="A Partner Built on Quality and Trust"
          />
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 100}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
                <span className="absolute right-6 top-6 font-display text-5xl font-semibold text-secondary transition-colors group-hover:text-gold-soft">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-primary text-gold shadow-soft">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="relative mt-8 text-xl font-semibold leading-snug text-forest">
                  {title}
                </h3>
                <p className="relative mt-3 leading-relaxed text-muted-foreground">{text}</p>
                <span className="absolute inset-x-8 bottom-0 h-1 origin-left scale-x-0 rounded-t-full bg-gold transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
