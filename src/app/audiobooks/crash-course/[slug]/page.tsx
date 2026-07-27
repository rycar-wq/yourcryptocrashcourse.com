import AudiobookDetail, {
  audiobookDetailMetadata,
} from "@/components/audiobooks/AudiobookDetail";
import { getSeriesItems } from "@/utils/catalog";

export function generateStaticParams() {
  return getSeriesItems("crash-course")
    .filter((book) => book.formats.includes("audible"))
    .map((book) => ({ slug: book.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return audiobookDetailMetadata("crash-course", slug);
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <AudiobookDetail seriesSlug="crash-course" slug={slug} />;
}
