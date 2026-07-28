import { describe, expect, it } from "vitest";
import {
  buildOrganizationJsonLd,
  buildWebsiteJsonLd,
  buildSiteJsonLd,
} from "./organization";

describe("buildOrganizationJsonLd", () => {
  it("builds an Organization node with a stable @id and founder", () => {
    const org = buildOrganizationJsonLd();

    expect(org["@type"]).toBe("Organization");
    expect(org["@id"]).toBe("https://yourcryptocrashcourse.com/#organization");
    expect(org.name).toBe("Your Crypto Crash Course");
    expect(org.founder).toEqual({ "@type": "Person", name: "Ryan Carrington" });
    expect(org.logo).toBe(
      "https://yourcryptocrashcourse.com/images/covers/crash-course/digital/crypto-crash-course-bundle.jpg",
    );
  });
});

describe("buildWebsiteJsonLd", () => {
  it("builds a WebSite node that references the organization by @id", () => {
    const site = buildWebsiteJsonLd();

    expect(site["@type"]).toBe("WebSite");
    expect(site["@id"]).toBe("https://yourcryptocrashcourse.com/#website");
    expect(site.publisher).toEqual({
      "@id": "https://yourcryptocrashcourse.com/#organization",
    });
  });
});

describe("buildSiteJsonLd", () => {
  it("wraps both nodes in a single @graph", () => {
    const jsonLd = buildSiteJsonLd();

    expect(jsonLd["@context"]).toBe("https://schema.org");
    expect(jsonLd["@graph"]).toHaveLength(2);
    expect(jsonLd["@graph"][0]["@type"]).toBe("Organization");
    expect(jsonLd["@graph"][1]["@type"]).toBe("WebSite");
  });

  it("keeps the WebSite's publisher reference in sync with the Organization's @id", () => {
    const jsonLd = buildSiteJsonLd();
    const [org, site] = jsonLd["@graph"];

    expect((site as { publisher: { "@id": string } }).publisher["@id"]).toBe(
      org["@id"],
    );
  });
});
