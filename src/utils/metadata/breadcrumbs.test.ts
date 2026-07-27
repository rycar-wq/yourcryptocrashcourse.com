import { describe, expect, it } from "vitest";
import { buildBreadcrumbJsonLd } from "./breadcrumbs";

describe("buildBreadcrumbJsonLd", () => {
  it("builds a positioned BreadcrumbList from an ordered items array", () => {
    const jsonLd = buildBreadcrumbJsonLd([
      { name: "Home", url: "https://yourcryptocrashcourse.com/" },
      { name: "Books", url: "https://yourcryptocrashcourse.com/books" },
    ]);

    expect(jsonLd["@type"]).toBe("BreadcrumbList");
    expect(jsonLd.itemListElement).toEqual([
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://yourcryptocrashcourse.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Books",
        item: "https://yourcryptocrashcourse.com/books",
      },
    ]);
  });

  it("returns an empty list for no items", () => {
    expect(buildBreadcrumbJsonLd([]).itemListElement).toEqual([]);
  });
});
