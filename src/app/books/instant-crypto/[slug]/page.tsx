import BookDetail, { bookDetailMetadata } from "@/components/books/BookDetail";
import { getSeriesItems } from "@/utils/catalog";

export function generateStaticParams() {
  return getSeriesItems("instant-crypto").map((book) => ({ slug: book.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return bookDetailMetadata("instant-crypto", slug);
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <BookDetail seriesSlug="instant-crypto" slug={slug} />;
}
