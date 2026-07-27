import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const mockArticles = [
  { slug: "past-1", date: "2020-01-01", category: "Crypto Basics" },
  { slug: "past-2", date: "2020-06-15", category: "Crypto Basics" },
  { slug: "future-1", date: "2099-01-01", category: "Crypto Basics" },
  { slug: "today", date: "2024-03-10", category: "Crypto Basics" },
];

vi.mock("@/data/articles.json", () => ({ default: mockArticles }));

describe("articles utils", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2024-03-10T12:00:00Z"));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("excludes articles dated in the future", async () => {
    const { getVisibleArticles } = await import("./articles");
    const slugs = getVisibleArticles().map((a) => a.slug);
    expect(slugs).not.toContain("future-1");
  });

  it("includes articles dated today or earlier", async () => {
    const { getVisibleArticles } = await import("./articles");
    const slugs = getVisibleArticles().map((a) => a.slug);
    expect(slugs).toEqual(
      expect.arrayContaining(["past-1", "past-2", "today"]),
    );
  });

  it("sorts visible articles newest first", async () => {
    const { getVisibleArticles } = await import("./articles");
    const slugs = getVisibleArticles().map((a) => a.slug);
    expect(slugs).toEqual(["today", "past-2", "past-1"]);
  });

  it("does not mutate the source articles array", async () => {
    const { getVisibleArticles } = await import("./articles");
    getVisibleArticles();
    expect(mockArticles[0].slug).toBe("past-1");
  });

  it("paginates results and reports total pages", async () => {
    const { getPaginatedArticles, ARTICLES_PER_PAGE } = await import(
      "./articles"
    );
    expect(ARTICLES_PER_PAGE).toBe(12);

    const { paginatedArticles, totalPages } = getPaginatedArticles(1);
    expect(paginatedArticles).toHaveLength(3); // 3 visible articles, future excluded
    expect(totalPages).toBe(1);
  });

  it("returns an empty page past the last page", async () => {
    const { getPaginatedArticles } = await import("./articles");
    const { paginatedArticles } = getPaginatedArticles(5);
    expect(paginatedArticles).toEqual([]);
  });

  it("formats a date as a full month name, day, and year", async () => {
    const { formatArticleDate } = await import("./articles");
    expect(formatArticleDate("2024-03-10")).toBe("March 10, 2024");
  });
});
