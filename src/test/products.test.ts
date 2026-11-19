import { describe, expect, it } from "vitest";
import { PRODUCTS, productLabel } from "@/lib/site";

describe("product list", () => {
  it("keeps the six original products in order and appends the two new ones", () => {
    expect(PRODUCTS.map(productLabel)).toEqual([
      "Quinoa",
      "Bajra (Pearl Millet)",
      "Chia Seeds",
      "Rajgira (Amaranth)",
      "Jowar (Sorghum)",
      "Other Agricultural Products",
      "Black Quinoa",
      "Tender Coconut",
    ]);
  });

  it("shows Black Quinoa and Tender Coconut with the brief's descriptions", () => {
    const blackQuinoa = PRODUCTS.find((p) => p.name === "Black Quinoa");
    const tenderCoconut = PRODUCTS.find((p) => p.name === "Tender Coconut");

    expect(blackQuinoa?.description).toBe(
      "A nutrient-rich ancient grain known for its distinctive dark colour, earthy flavour and versatility in various food applications.",
    );
    expect(blackQuinoa?.image).toMatch(/^\/__l5e\/assets-v1\//);
    expect(blackQuinoa?.alt).toContain("Black quinoa");

    expect(tenderCoconut?.description).toBe(
      "A refreshing tropical product valued for its naturally hydrating coconut water and tender coconut flesh, widely used in beverages and food applications.",
    );
    expect(tenderCoconut?.image).toMatch(/^\/__l5e\/assets-v1\//);
    expect(tenderCoconut?.alt).toContain("Tender coconut");
  });
});
