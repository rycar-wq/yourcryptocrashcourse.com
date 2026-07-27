import { describe, expect, it } from "vitest";
import { buildAudiobookJsonLd, buildAudiobooksIndexJsonLd } from "./audiobooks";
import type { Book } from "@/types/book";

const book: Book = {
  slug: "crypto-wallets-unlocked",
  series: "instant-crypto",
  subSeries: "instant-crypto-1",
  kind: "book",
  order: 1,
  title: "Crypto Wallets Unlocked",
  subtitle: "Secure Your Wealth Now",
  coverDigital: "instant-crypto/crypto-wallets-unlocked.jpg",
  coverAudio: "instant-crypto/crypto-wallets-unlocked.jpg",
  description: "A short guide to securing your crypto wallet.",
  longDescription: "A longer description.",
  keyTakeaways: [],
  relatedSlugs: [],
  formats: ["kindle", "audible"],
  audioSample: "/audio/crypto-wallets-unlocked-sample.mp3",
  audibleUrl: "https://www.audible.com/pd/Crypto-Wallets-Unlocked/B0EXAMPLE1",
};

describe("buildAudiobookJsonLd", () => {
  it("builds schema.org Audiobook structured data with offer and audio sample", () => {
    const jsonLd = buildAudiobookJsonLd(book);

    expect(jsonLd["@type"]).toBe("Audiobook");
    expect(jsonLd.name).toBe("Crypto Wallets Unlocked (Audiobook)");
    expect(jsonLd.url).toBe(
      "https://yourcryptocrashcourse.com/audiobooks/instant-crypto/crypto-wallets-unlocked",
    );
    expect(jsonLd.audio?.contentUrl).toBe(
      "https://yourcryptocrashcourse.com/audio/crypto-wallets-unlocked-sample.mp3",
    );
    expect(jsonLd.offers?.url).toBe(book.audibleUrl);
  });

  it("omits offers when there's no Audible link yet", () => {
    const { audibleUrl: _audibleUrl, ...withoutAudible } = book;
    const jsonLd = buildAudiobookJsonLd(withoutAudible as Book);
    expect(jsonLd.offers).toBeUndefined();
  });

  it("omits audio when there's no sample yet", () => {
    const { audioSample: _audioSample, ...withoutSample } = book;
    const jsonLd = buildAudiobookJsonLd(withoutSample as Book);
    expect(jsonLd.audio).toBeUndefined();
  });

  it("uses the book's own keywords when provided", () => {
    const jsonLd = buildAudiobookJsonLd({
      ...book,
      keywords: ["crypto wallet security"],
    });
    expect(jsonLd.keywords).toEqual(["crypto wallet security"]);
  });

  it("falls back to generic keywords when none are provided", () => {
    const jsonLd = buildAudiobookJsonLd(book);
    expect(jsonLd.keywords).toEqual([
      "crypto audiobook",
      "cryptocurrency",
      "blockchain",
      "investing",
      book.title,
    ]);
  });
});

describe("buildAudiobooksIndexJsonLd", () => {
  it("builds an ItemList of audiobooks with position and title suffix", () => {
    const jsonLd = buildAudiobooksIndexJsonLd([book]);

    expect(jsonLd.itemListElement).toHaveLength(1);
    expect(jsonLd.itemListElement[0].name).toBe(
      "Crypto Wallets Unlocked (Audiobook)",
    );
    expect(jsonLd.itemListElement[0].position).toBe(1);
  });
});
