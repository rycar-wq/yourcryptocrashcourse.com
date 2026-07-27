import { describe, expect, it } from "vitest";
import { buildArticleJsonLd } from "./articles";

describe("buildArticleJsonLd", () => {
  it("builds schema.org Article structured data", () => {
    const jsonLd = buildArticleJsonLd({
      title: "Stablecoins Explained",
      description: "How stablecoins keep their peg.",
      url: "https://yourcryptocrashcourse.com/articles/stablecoins-explained",
      date: "2024-03-01",
    });

    expect(jsonLd["@type"]).toBe("Article");
    expect(jsonLd.headline).toBe("Stablecoins Explained");
    expect(jsonLd.datePublished).toBe("2024-03-01");
    expect(jsonLd.dateModified).toBe("2024-03-01");
    expect(jsonLd.mainEntityOfPage).toEqual({
      "@type": "WebPage",
      "@id": "https://yourcryptocrashcourse.com/articles/stablecoins-explained",
    });
    expect(jsonLd.publisher.name).toBe("Your Crypto Crash Course");
  });
});
