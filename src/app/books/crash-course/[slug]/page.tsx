import BookDetail, { bookDetailMetadata } from "@/components/books/BookDetail";
import { getBooksBySeries, getCollectionsBySeries } from "@/utils/catalog";

export function generateStaticParams() {
  return [
    ...getBooksBySeries("crash-course"),
    ...getCollectionsBySeries("crash-course"),
  ].map((book) => ({ slug: book.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return bookDetailMetadata("crash-course", slug);
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <BookDetail seriesSlug="crash-course" slug={slug} />;
}
