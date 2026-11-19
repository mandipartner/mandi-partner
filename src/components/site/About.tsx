import { Check } from "lucide-react";
import aboutImg from "@/assets/images/about-grain-sourcing.webp.asset.json";
import { Reveal } from "./Reveal";

const PILLARS = [
  "Dependable sourcing",
  "Transparent business practices",
  "Consistent quality",
  "Long-term partnerships",
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="container-page grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <div className="grain-texture absolute -left-6 -top-6 h-40 w-40 rounded-3xl" aria-hidden />
          <div className="relative overflow-hidden rounded-3xl shadow-lift">
            <img
              src={aboutImg.url}
              alt="Farmer's hands scooping millet grains from jute sacks at an Indian grain market"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
            />
          </div>
          <div className="absolute -bottom-6 right-4 max-w-[15rem] rounded-2xl bg-primary p-5 text-primary-foreground shadow-card sm:right-8">
            <p className="font-display text-lg italic leading-snug">
              &ldquo;Connecting Farms to Global Markets.&rdquo;
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <span className="eyebrow">About Us</span>
          <h2 className="mt-4 text-3xl font-semibold leading-[1.1] text-forest sm:text-4xl lg:text-[2.75rem]">
            Your Trusted Partner in Agricultural Trade
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            At MANDI PARTNER, we believe in building strong connections between agricultural
            producers, businesses and global markets. We specialize in sourcing and supplying
            quality agricultural commodities for domestic and international buyers.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Our focus is on dependable sourcing, transparent business practices, consistent quality
            and long-term partnerships.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {PILLARS.map((p) => (
              <li
                key={p}
                className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm font-semibold text-forest"
              >
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold-soft text-forest">
                  <Check className="h-3.5 w-3.5" />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
