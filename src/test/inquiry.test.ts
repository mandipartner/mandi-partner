import { describe, expect, it } from "vitest";
import { EMPTY_INQUIRY, inquiryToWhatsAppMessage, validateInquiry } from "@/lib/inquiry";
import { whatsappUrl } from "@/lib/site";

const valid = {
  ...EMPTY_INQUIRY,
  fullName: "Asha Rao",
  email: "asha@example.com",
  phone: "+91 98765 43210",
  country: "India",
  inquiryType: "Export" as const,
  product: "Quinoa",
  quantity: "20 MT",
  message: "Please share pricing for bulk quinoa.",
};

describe("WhatsApp inquiry", () => {
  it("opens a chat with +91 9999999999 using the brief's default message", () => {
    expect(whatsappUrl()).toBe(
      "https://wa.me/919999999999?text=" +
        encodeURIComponent(
          "Hello MANDI PARTNER, I am interested in your agricultural products. Please share more details.",
        ),
    );
  });

  it("puts the buyer's form details into the WhatsApp message", () => {
    const msg = inquiryToWhatsAppMessage(valid);
    expect(msg).toContain("Name: Asha Rao");
    expect(msg).toContain("Inquiry Type: Export");
    expect(msg).toContain("Required Quantity: 20 MT");
  });
});

describe("Inquiry form validation", () => {
  it("accepts a complete inquiry", () => {
    expect(validateInquiry(valid)).toEqual({});
  });

  it("requires name, email, phone, country, inquiry type, product and message", () => {
    const errors = validateInquiry(EMPTY_INQUIRY);
    expect(Object.keys(errors).sort()).toEqual(
      ["country", "email", "fullName", "inquiryType", "message", "phone", "product"].sort(),
    );
  });

  it("rejects a malformed email", () => {
    expect(validateInquiry({ ...valid, email: "asha@" }).email).toBeDefined();
  });
});
