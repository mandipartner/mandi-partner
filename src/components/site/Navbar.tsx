import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/images/mandi-partner-logo.png.asset.json";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, scrollToSection } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar({ onQuote }: { onQuote: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(
      (el): el is HTMLElement => !!el,
    );
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  const go = (id: string) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        solid
          ? "border-b border-border/70 bg-background/90 shadow-soft backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <nav
        aria-label="Main navigation"
        className="container-page grid h-20 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 lg:grid-cols-[auto_1fr_auto]"
      >
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            go("home");
          }}
          className="flex min-w-0 items-center gap-3"
          aria-label="MANDI PARTNER home"
        >
          <img
            src={logo.url}
            alt="MANDI PARTNER logo"
            width={56}
            height={56}
            className="h-14 w-14 shrink-0 rounded-full bg-card object-contain shadow-soft"
          />
          <span className="min-w-0 leading-tight">
            <span
              className={cn(
                "block truncate font-display text-lg font-semibold tracking-wide transition-colors",
                solid ? "text-forest" : "text-ivory",
              )}
            >
              MANDI PARTNER
            </span>
            <span
              className={cn(
                "hidden truncate text-[0.68rem] font-semibold uppercase tracking-[0.2em] sm:block",
                solid ? "text-olive" : "text-gold",
              )}
            >
              Farm to World
            </span>
          </span>
        </a>

        <ul className="hidden items-center justify-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  go(l.id);
                }}
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-sm font-semibold transition-colors",
                  solid
                    ? "text-foreground/75 hover:text-forest"
                    : "text-ivory/80 hover:text-ivory",
                  active === l.id && (solid ? "text-forest" : "text-ivory"),
                )}
              >
                {l.label}
                <span
                  className={cn(
                    "absolute inset-x-3.5 -bottom-0.5 h-0.5 origin-left rounded-full bg-gold transition-transform duration-300",
                    active === l.id ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button
            variant="gold"
            size="pill"
            className="hidden sm:inline-flex"
            onClick={() => {
              setOpen(false);
              onQuote();
            }}
          >
            Get a Quote
          </Button>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "grid h-11 w-11 place-items-center rounded-full transition-colors lg:hidden",
              solid ? "text-forest hover:bg-secondary" : "text-ivory hover:bg-ivory/10",
            )}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-t border-border/70 bg-background transition-[max-height,opacity] duration-500 lg:hidden",
          open ? "max-h-[calc(100vh-5rem)] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <ul className="container-page flex flex-col py-4">
          {NAV_LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  go(l.id);
                }}
                className={cn(
                  "flex items-center justify-between border-b border-border/60 py-4 font-display text-xl",
                  active === l.id ? "text-forest" : "text-foreground/80",
                )}
              >
                {l.label}
                {active === l.id && <span className="h-2 w-2 rounded-full bg-gold" />}
              </a>
            </li>
          ))}
          <li className="pt-5">
            <Button
              variant="forest"
              size="xl"
              className="w-full"
              onClick={() => {
                setOpen(false);
                onQuote();
              }}
            >
              Get a Quote
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
