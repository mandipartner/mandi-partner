import { ArrowRight, Globe2, MapPin, ShieldCheck } from "lucide-react";
import heroImg from "@/assets/images/hero-golden-grain-field.webp.asset.json";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/site";

const TRUST = [
  { icon: MapPin, label: "India-Based Sourcing" },
  { icon: Globe2, label: "Domestic & Global Supply" },
  { icon: ShieldCheck, label: "Quality-Focused Trading" },
];

export function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-[100svh] items-end overflow-hidden">
      <img
        src={heroImg.url}
        alt="Golden wheat and millet fields in rural India at sunset"
        className="animate-hero-zoom absolute inset-0 -z-20 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="bg-hero-overlay absolute inset-0 -z-10" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-forest-deep/70 to-transparent" />

      <div className="container-page pb-16 pt-32 sm:pb-20 lg:pb-24">
        <div className="max-w-3xl">
          <span className="eyebrow animate-rise-in text-gold">Connecting Farms to Global Markets</span>
          <h1
            className="animate-rise-in mt-6 text-4xl font-semibold leading-[1.05] text-ivory sm:text-5xl lg:text-[4.25rem]"
            style={{ animationDelay: "120ms" }}
          >
            Connecting India&apos;s Finest Agricultural Products{" "}
            <em className="font-normal italic text-gold">to the World.</em>
          </h1>
          <p
            className="animate-rise-in mt-6 max-w-xl text-lg leading-relaxed text-ivory/85 sm:text-xl"
            style={{ animationDelay: "240ms" }}
          >
            Your Trusted Partner for Quality Grains, Millets, Seeds &amp; Agricultural Commodities.
          </p>
          <div
            className="animate-rise-in mt-9 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "360ms" }}
          >
            <Button variant="gold" size="xl" onClick={() => scrollToSection("products")}>
              Explore Our Products <ArrowRight />
            </Button>
            <Button variant="heroOutline" size="xl" onClick={() => scrollToSection("contact")}>
              Contact Us
            </Button>
          </div>
        </div>

        <ul
          className="animate-rise-in mt-14 grid gap-3 border-t border-ivory/20 pt-8 sm:grid-cols-3 sm:gap-6"
          style={{ animationDelay: "500ms" }}
        >
          {TRUST.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-3 text-ivory">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-gold/40 bg-ivory/5 text-gold backdrop-blur-sm">
                <Icon className="h-[18px] w-[18px]" />
              </span>
              <span className="text-sm font-semibold tracking-wide">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
