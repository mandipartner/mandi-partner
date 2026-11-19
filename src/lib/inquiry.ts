import { INQUIRY_TYPES, type InquiryType } from "./site";

export type InquiryForm = {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  country: string;
  inquiryType: InquiryType | "";
  product: string;
  quantity: string;
  message: string;
};

export type InquiryErrors = Partial<Record<keyof InquiryForm, string>>;

export const EMPTY_INQUIRY: InquiryForm = {
  fullName: "",
  companyName: "",
  email: "",
  phone: "",
  country: "",
  inquiryType: "",
  product: "",
  quantity: "",
  message: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateInquiry(f: InquiryForm): InquiryErrors {
  const e: InquiryErrors = {};
  if (f.fullName.trim().length < 2) e.fullName = "Please enter your full name.";
  if (!EMAIL_RE.test(f.email.trim())) e.email = "Please enter a valid email address.";
  const digits = f.phone.replace(/\D/g, "");
  if (digits.length < 7 || digits.length > 15)
    e.phone = "Please enter a valid contact number, with country code.";
  if (!f.country.trim()) e.country = "Please enter your country.";
  if (!INQUIRY_TYPES.includes(f.inquiryType as InquiryType))
    e.inquiryType = "Please choose an inquiry type.";
  if (!f.product.trim()) e.product = "Please choose a product.";
  if (f.message.trim().length < 10) e.message = "Please add a short message (at least 10 characters).";
  return e;
}

/** Turns a validated inquiry into the WhatsApp message the buyer sends to MANDI PARTNER. */
export function inquiryToWhatsAppMessage(f: InquiryForm): string {
  const line = (label: string, value: string) => (value.trim() ? `${label}: ${value.trim()}` : null);
  return [
    "Hello MANDI PARTNER, I would like to make a business inquiry.",
    "",
    line("Name", f.fullName),
    line("Company", f.companyName),
    line("Email", f.email),
    line("Phone", f.phone),
    line("Country", f.country),
    line("Inquiry Type", f.inquiryType),
    line("Product", f.product),
    line("Required Quantity", f.quantity),
    "",
    line("Message", f.message),
  ]
    .filter((l) => l !== null)
    .join("\n");
}
