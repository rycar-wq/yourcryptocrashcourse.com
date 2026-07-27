import categories from "@/data/categories.json";

export function categoryToSlug(category: string): string {
  return category.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and");
}

export function categoryFromSlug(slug: string): string | undefined {
  const normalized = slug.toLowerCase();
  return categories.find((category) => categoryToSlug(category) === normalized);
}
