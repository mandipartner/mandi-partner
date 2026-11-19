import { describe, expect, it } from "vitest";
import { PRODUCTS, productLabel } from "@/lib/site";

describe("Product list", () => {
  it("shows eight products in the agreed order, with other goods last", () => {
    expect(PRODUCTS.map((p) => p.name)).toEqual([
      "Quinoa",
      "Bajra",
      "Chia Seeds",
      "Rajgira",
      "Jowar",
      "Black Quinoa",
      "Tender Coconut",
      "Other Agricultural Products",
    ]);
  });

  it("keeps the five original products untouched", () => {
    expect(PRODUCTS.slice(0, 5).map(productLabel)).toEqual([
      "Quinoa",
      "Bajra (Pearl Millet)",
      "Chia Seeds",
      "Rajgira (Amaranth)",
      "Jowar (Sorghum)",
    ]);
  });

  it("labels the new products exactly as Black Quinoa and Tender Coconut", () => {
    expect(productLabel(PRODUCTS.at(5)!)).toBe("Black Quinoa");
    expect(productLabel(PRODUCTS.at(6)!)).toBe("Tender Coconut");
  });

  it("gives both new products an alt text and a full description", () => {
    for (const name of ["Black Quinoa", "Tender Coconut"]) {
      const p = PRODUCTS.find((x) => x.name === name);
      expect(p).toBeDefined();
      expect(p!.alt).toMatch(/quinoa|coconut/i);
      expect(p!.description.length).toBeGreaterThan(90);
    }
  });

  it("gives every product a photo and an inquiry-ready label", () => {
    for (const p of PRODUCTS) {
      expect(p.image).toMatch(/^\/__l5e\/assets-v1\//);
      expect(productLabel(p).length).toBeGreaterThan(0);
    }
  });
});
