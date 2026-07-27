import { describe, expect, it } from "vitest";
import { generatePageMetadata } from "./page";

describe("generatePageMetadata", () => {
  it("suffixes the title with the site name and defaults canonical/image", () => {
    const meta = generatePageMetadata({
      title: "Books",
      description: "Explore the catalog.",
    });

    expect(meta.title).toBe("Books | Your Crypto Crash Course");
    expect(meta.alternates?.canonical).toBe(
      "https://yourcryptocrashcourse.com",
    );
    expect(meta.openGraph?.images).toEqual([
      {
        url: "https://yourcryptocrashcourse.com/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Books",
      },
    ]);
    expect((meta.openGraph as { type?: string })?.type).toBe("website");
  });

  it("uses provided canonical, image, and type when given", () => {
    const meta = generatePageMetadata({
      title: "Crypto Crash Course",
      description: "d",
      canonical:
        "https://yourcryptocrashcourse.com/books/crash-course/crypto-crash-course",
      image: "/images/covers/crash-course/crypto-crash-course.jpg",
      type: "article",
    });

    expect(meta.alternates?.canonical).toBe(
      "https://yourcryptocrashcourse.com/books/crash-course/crypto-crash-course",
    );
    expect((meta.openGraph as { type?: string })?.type).toBe("article");
    expect(meta.twitter?.images).toEqual([
      "/images/covers/crash-course/crypto-crash-course.jpg",
    ]);
  });
});
