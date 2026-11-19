import quinoaImg from "@/assets/images/quinoa-premium-pouches.webp.asset.json";
import bajraImg from "@/assets/images/bajra-pearl-millet.webp.asset.json";
import chiaImg from "@/assets/images/chia-seeds.webp.asset.json";
import rajgiraImg from "@/assets/images/rajgira-amaranth.webp.asset.json";
import jowarImg from "@/assets/images/jowar-sorghum.webp.asset.json";
import assortedImg from "@/assets/images/assorted-grains-seeds.webp.asset.json";

/** Business contact details. Update here and every section follows. */
export const CONTACT = {
  email: "business@mandipartner.com",
  phoneDisplay: "+91 99999 99999",
  phoneTel: "+919999999999",
  whatsappNumber: "919999999999",
  instagram: "https://www.instagram.com/mandi_partner/",
  facebook: "https://www.facebook.com/mandi.partner",
  linkedin: "https://www.linkedin.com/company/mandi-partner/",
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
    alt: "MANDI PARTNER premium quinoa pouches with loose quinoa grains",
  },
  {
    name: "Bajra",
    subtitle: "Pearl Millet",
    description: "A traditional Indian millet widely used in nutritious food products.",
    image: bajraImg.url,
    alt: "Bajra pearl millet grains in a wooden bowl beside pearl millet ear heads",
  },
  {
    name: "Chia Seeds",
    description: "Nutrient-dense seeds valued for their versatility and nutritional profile.",
    image: chiaImg.url,
    alt: "Chia seeds in a wooden bowl and spoon on a rustic table",
  },
  {
    name: "Rajgira",
    subtitle: "Amaranth",
    description: "A traditional grain known for its nutritional benefits.",
    image: rajgiraImg.url,
    alt: "Rajgira amaranth grains in a wooden bowl with a red amaranth flower",
  },
  {
    name: "Jowar",
    subtitle: "Sorghum",
    description: "A versatile millet suitable for various food applications.",
    image: jowarImg.url,
    alt: "Jowar sorghum grains in a wooden bowl beside a dried sorghum head",
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
