import { describe, expect, it } from "vitest";
import { categoryToSlug, categoryFromSlug } from "./categorySlug";

describe("categoryToSlug", () => {
  it("lowercases and hyphenates spaces", () => {
    expect(categoryToSlug("Crypto Basics")).toBe("crypto-basics");
  });

  it("converts an ampersand to 'and'", () => {
    expect(categoryToSlug("Wallets & Security")).toBe("wallets-and-security");
  });
});

describe("categoryFromSlug", () => {
  it("finds the registered category matching a slug", () => {
    expect(categoryFromSlug("crypto-basics")).toBe("Crypto Basics");
    expect(categoryFromSlug("wallets-and-security")).toBe(
      "Wallets & Security",
    );
  });

  it("returns undefined for a slug with no matching category", () => {
    expect(categoryFromSlug("does-not-exist")).toBeUndefined();
  });
});
