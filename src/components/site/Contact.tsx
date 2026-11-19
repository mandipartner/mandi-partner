import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { CheckCircle2, Mail, MessageCircle, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  EMPTY_INQUIRY,
  inquiryToWhatsAppMessage,
  validateInquiry,
  type InquiryErrors,
  type InquiryForm,
} from "@/lib/inquiry";
import { CONTACT, INQUIRY_TYPES, PRODUCTS, productLabel, whatsappUrl } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export type InquiryPrefill = {
  product?: string;
  inquiryType?: InquiryForm["inquiryType"];
  nonce: number;
};

const fieldBase =
  "w-full rounded-xl border bg-background px-4 py-3 text-[0.95rem] text-foreground placeholder:text-muted-foreground/70 transition-colors focus:outline-none focus:ring-2 focus:ring-ring/40 focus:border-olive";

function Field({
  id,
  label,
  required,
  error,
  children,
  className,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-forest">
        {label}
        {required && <span className="ml-0.5 text-destructive">*</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

export function Contact({ prefill }: { prefill: InquiryPrefill | null }) {
  const [form, setForm] = useState<InquiryForm>(EMPTY_INQUIRY);
  const [errors, setErrors] = useState<InquiryErrors>({});
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!prefill) return;
    setSent(false);
    setForm((f) => ({
      ...f,
      ...(prefill.product ? { product: prefill.product } : {}),
      ...(prefill.inquiryType ? { inquiryType: prefill.inquiryType } : {}),
    }));
  }, [prefill]);

  const update =
    (key: keyof InquiryForm) =>
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const value = e.target.value;
      setForm((f) => ({ ...f, [key]: value }));
      if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
    };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const found = validateInquiry(form);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const first = Object.keys(found)[0];
      document.getElementById(`inq-${first}`)?.focus();
      return;
    }
    // API integration point: to also store inquiries or email them, send `form`
    // to a server function here before (or instead of) opening WhatsApp.
    window.open(whatsappUrl(inquiryToWhatsAppMessage(form)), "_blank", "noopener,noreferrer");
    setSent(true);
    setForm(EMPTY_INQUIRY);
  };

  const aria = (key: keyof InquiryForm) => ({
    id: `inq-${key}`,
    "aria-invalid": !!errors[key],
    "aria-describedby": errors[key] ? `inq-${key}-error` : undefined,
    className: cn(fieldBase, errors[key] ? "border-destructive" : "border-input"),
  });

  return (
    <section id="contact" className="relative bg-secondary py-24 sm:py-32">
      <div className="container-page grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal>
          <SectionHeading
            eyebrow="Business Inquiry"
            title="Let's Build a Strong Business Partnership"
            description="Share your requirements and our team will get back to you. Your inquiry opens in WhatsApp, ready to send."
          />

          <div className="mt-10 space-y-4">
            <a
              href={`mailto:${CONTACT.email}`}
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-card"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary text-gold">
                <Mail className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-bold uppercase tracking-widest text-olive">
                  Email
                </span>
                <span className="block truncate font-semibold text-forest">{CONTACT.email}</span>
              </span>
            </a>
            <a
              href={`tel:${CONTACT.phoneTel}`}
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-card"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary text-gold">
                <Phone className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs font-bold uppercase tracking-widest text-olive">
                  Phone
                </span>
                <span className="block font-semibold text-forest">{CONTACT.phoneDisplay}</span>
              </span>
            </a>
            <Button variant="whatsapp" size="xl" asChild className="w-full sm:w-auto">
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                <MessageCircle /> Chat on WhatsApp
              </a>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form
            noValidate
            onSubmit={onSubmit}
            className="rounded-3xl border border-border bg-card p-6 shadow-card sm:p-10"
            aria-label="Business inquiry form"
          >
            {sent && (
              <div
                role="status"
                className="mb-6 flex items-start gap-3 rounded-2xl border border-olive/30 bg-olive/10 p-4 text-sm text-forest"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-olive" />
                <p>
                  Thank you! Your inquiry has opened in WhatsApp — press send there to reach our
                  team. If it didn't open, message us at {CONTACT.phoneDisplay}.
                </p>
              </div>
            )}

            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="inq-fullName" label="Full Name" required error={errors.fullName}>
                <input
                  {...aria("fullName")}
                  value={form.fullName}
                  onChange={update("fullName")}
                  autoComplete="name"
                  placeholder="Your full name"
                />
              </Field>
              <Field id="inq-companyName" label="Company Name" error={errors.companyName}>
                <input
                  {...aria("companyName")}
                  value={form.companyName}
                  onChange={update("companyName")}
                  autoComplete="organization"
                  placeholder="Company name"
                />
              </Field>
              <Field id="inq-email" label="Email Address" required error={errors.email}>
                <input
                  {...aria("email")}
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  autoComplete="email"
                  placeholder="you@company.com"
                />
              </Field>
              <Field id="inq-phone" label="Contact Number" required error={errors.phone}>
                <input
                  {...aria("phone")}
                  type="tel"
                  value={form.phone}
                  onChange={update("phone")}
                  autoComplete="tel"
                  placeholder="+91 98765 43210"
                />
              </Field>
              <Field id="inq-country" label="Country" required error={errors.country}>
                <input
                  {...aria("country")}
                  value={form.country}
                  onChange={update("country")}
                  autoComplete="country-name"
                  placeholder="e.g. India"
                />
              </Field>
              <Field id="inq-inquiryType" label="Inquiry Type" required error={errors.inquiryType}>
                <select
                  {...aria("inquiryType")}
                  value={form.inquiryType}
                  onChange={update("inquiryType")}
                >
                  <option value="" disabled>
                    Select inquiry type
                  </option>
                  {INQUIRY_TYPES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </Field>
              <Field id="inq-product" label="Product Interested In" required error={errors.product}>
                <select {...aria("product")} value={form.product} onChange={update("product")}>
                  <option value="" disabled>
                    Select a product
                  </option>
                  {PRODUCTS.map((p) => (
                    <option key={p.name} value={productLabel(p)}>
                      {productLabel(p)}
                    </option>
                  ))}
                </select>
              </Field>
              <Field id="inq-quantity" label="Required Quantity" error={errors.quantity}>
                <input
                  {...aria("quantity")}
                  value={form.quantity}
                  onChange={update("quantity")}
                  placeholder="e.g. 20 MT"
                />
              </Field>
              <Field
                id="inq-message"
                label="Message"
                required
                error={errors.message}
                className="sm:col-span-2"
              >
                <textarea
                  {...aria("message")}
                  rows={5}
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Tell us about your requirements, specifications, packaging or delivery location."
                />
              </Field>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-muted-foreground">
                <span className="text-destructive">*</span> Required fields
              </p>
              <Button type="submit" variant="forest" size="xl">
                Submit Inquiry <Send />
              </Button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
