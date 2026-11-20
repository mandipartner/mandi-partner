import quinoaImg from "@/assets/images/white-quinoa.webp.asset.json";
import bajraImg from "@/assets/images/bajra.webp.asset.json";
import chiaImg from "@/assets/images/chia-seeds.webp.asset.json";
import rajgiraImg from "@/assets/images/rajgira.webp.asset.json";
import jowarImg from "@/assets/images/jowar.webp.asset.json";
import blackQuinoaImg from "@/assets/images/black-quinoa.webp.asset.json";
import coconutImg from "@/assets/images/tender-coconut.webp.asset.json";
import assortedImg from "@/assets/images/assorted-grains-seeds.webp.asset.json";

/** Business contact details. Update here and every section follows. */
export const CONTACT = {
  email: "business@mandipartner.com",
  phoneDisplay: "+91 73575 85628",
  phoneTel: "+917357585628",
  whatsappNumber: "917357585628",
  instagram: "https://www.instagram.com/mandi_partner/",
  facebook: "https://www.facebook.com/share/1QLSeXxWyE/",
  linkedin: "https://www.linkedin.com/in/mandi-partner-0a275944b",
} as const;

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hello MANDI PARTNER, I am interested in your agricultural products. Please share more details.";

export function whatsappUrl(message: string = DEFAULT_WHATSAPP_MESSAGE): string {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "products", label: "Products" },
  { id: "domestic", label: "Domestic Trade" },
  { id: "export", label: "Export" },
  { id: "contact", label: "Contact Us" },
] as const;

export type Product = {
  name: string;
  subtitle?: string;
  description: string;
  image: string;
  alt: string;
};

export const PRODUCTS: Product[] = [
  {
    name: "Quinoa",
    description: "A nutrient-rich grain known for its versatility and nutritional value.",
    image: quinoaImg.url,
    alt: "White quinoa grains heaped in a wooden bowl on a wooden table",
  },
  {
    name: "Bajra",
    subtitle: "Pearl Millet",
    description: "A traditional Indian millet widely used in nutritious food products.",
    image: bajraImg.url,
    alt: "Bajra pearl millet grains in a wooden bowl on a wooden table",
  },
  {
    name: "Chia Seeds",
    description: "Nutrient-dense seeds valued for their versatility and nutritional profile.",
    image: chiaImg.url,
    alt: "Chia seeds in a wooden bowl on a wooden table",
  },
  {
    name: "Rajgira",
    subtitle: "Amaranth",
    description: "A traditional grain known for its nutritional benefits.",
    image: rajgiraImg.url,
    alt: "Rajgira amaranth grains in a wooden bowl on a wooden table",
  },
  {
    name: "Jowar",
    subtitle: "Sorghum",
    description: "A versatile millet suitable for various food applications.",
    image: jowarImg.url,
    alt: "Jowar sorghum grains in a wooden bowl on a wooden table",
  },
  {
    name: "Black Quinoa",
    description:
      "A nutrient-rich ancient grain known for its distinctive dark colour, earthy flavour and versatility in various food applications.",
    image: blackQuinoaImg.url,
    alt: "Black quinoa grains in a wooden bowl on a wooden table",
  },
  {
    name: "Tender Coconut",
    description:
      "A refreshing tropical product valued for its naturally hydrating coconut water and tender coconut flesh, widely used in beverages and food applications.",
    image: coconutImg.url,
    alt: "Fresh green tender coconuts in a wooden bowl, one opened with a straw for coconut water",
  },
  {
    name: "Other Agricultural Products",
    description:
      "We also deal in various grains, millets, seeds and agricultural commodities based on buyer requirements.",
    image: assortedImg.url,
    alt: "Assorted Indian grains, millets, lentils and seeds in wooden bowls and jute sacks",
  },
];

export function productLabel(p: Product): string {
  return p.subtitle ? `${p.name} (${p.subtitle})` : p.name;
}

export const INQUIRY_TYPES = ["Domestic Trade", "Export", "General Inquiry"] as const;
export type InquiryType = (typeof INQUIRY_TYPES)[number];

export function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}
