import { Facebook, Instagram, Linkedin, Mail, MessageCircle, Phone } from "lucide-react";
import logo from "@/assets/images/mandi-partner-logo.png.asset.json";
import { CONTACT, NAV_LINKS, PRODUCTS, productLabel, scrollToSection, whatsappUrl } from "@/lib/site";

const SOCIALS = [
  { href: CONTACT.instagram, label: "Instagram", icon: Instagram },
  { href: CONTACT.facebook, label: "Facebook", icon: Facebook },
  { href: CONTACT.linkedin, label: "LinkedIn", icon: Linkedin },
];

function FooterLink({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <a
      href={`#${id}`}
      onClick={(e) => {
        e.preventDefault();
        scrollToSection(id);
      }}
      className="text-ivory/70 transition-colors hover:text-gold"
    >
      {children}
    </a>
  );
}

export function Footer() {
  return (
    <footer className="bg-forest-deep text-ivory">
      <div className="container-page grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:py-20">
        <div>
          <div className="flex items-center gap-4">
            <img
              src={logo.url}
              alt="MANDI PARTNER logo"
              width={72}
              height={72}
              loading="lazy"
              className="h-[72px] w-[72px] shrink-0 rounded-full bg-card object-contain"
            />
            <div>
              <p className="font-display text-2xl font-semibold">MANDI PARTNER</p>
              <p className="text-sm text-gold">Connecting Farms to Global Markets.</p>
            </div>
          </div>
          <p className="mt-6 max-w-sm leading-relaxed text-ivory/65">
            An India-based agricultural trading and export company supplying quality grains,
            millets, seeds and superfoods to domestic and international markets.
          </p>
          <div className="mt-6 flex gap-3">
            {SOCIALS.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`MANDI PARTNER on ${label}`}
                className="grid h-11 w-11 place-items-center rounded-full border border-ivory/20 text-ivory/80 transition-all hover:-translate-y-0.5 hover:border-gold hover:bg-gold hover:text-forest-deep"
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Quick links">
          <h3 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-gold">
            Quick Links
          </h3>
          <ul className="mt-5 space-y-3">
            {NAV_LINKS.map((l) => (
              <li key={l.id}>
                <FooterLink id={l.id}>{l.label}</FooterLink>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-gold">
            Our Products
          </h3>
          <ul className="mt-5 space-y-3">
            {PRODUCTS.map((p) => (
              <li key={p.name}>
                <FooterLink id="products">{productLabel(p)}</FooterLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-gold">
            Contact
          </h3>
          <ul className="mt-5 space-y-4">
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-3 text-ivory/80 transition-colors hover:text-gold"
              >
                <Mail className="h-4 w-4 shrink-0 text-gold" /> {CONTACT.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${CONTACT.phoneTel}`}
                className="flex items-center gap-3 text-ivory/80 transition-colors hover:text-gold"
              >
                <Phone className="h-4 w-4 shrink-0 text-gold" /> {CONTACT.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-ivory/80 transition-colors hover:text-gold"
              >
                <MessageCircle className="h-4 w-4 shrink-0 text-gold" /> WhatsApp Inquiry
              </a>
            </li>
          </ul>
          <div className="mt-6 space-y-2 text-sm">
            <p>
              <FooterLink id="domestic">Domestic Trade</FooterLink>
            </p>
            <p>
              <FooterLink id="export">Export Business</FooterLink>
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-ivory/10">
        <p className="container-page py-6 text-center text-sm text-ivory/55">
          Copyright © 2026 MANDI PARTNER. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
