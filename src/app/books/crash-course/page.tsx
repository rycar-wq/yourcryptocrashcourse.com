import JsonLd from "@/components/common/JsonLd";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import BookGrid from "@/components/books/BookGrid";
import {
  getBooksBySeries,
  getCollectionsBySeries,
  getSeriesInfo,
  withCollectionsFirst,
} from "@/utils/catalog";
import {
  buildBooksIndexJsonLd,
  buildBreadcrumbJsonLd,
  generatePageMetadata,
} from "@/utils/metadata";
import { SITE_URL } from "@/utils/constants";

const series = getSeriesInfo("crash-course")!;

export function generateMetadata() {
  return generatePageMetadata({
    title: series.name,
    description: series.tagline,
    canonical: `${SITE_URL}/books/crash-course`,
    type: "website",
  });
}

export default function CrashCourseBooksPage() {
  const books = getBooksBySeries("crash-course");
  const collections = getCollectionsBySeries("crash-course");
  const ordered = withCollectionsFirst(collections, books);

  const jsonLd = buildBooksIndexJsonLd(ordered);
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", url: `${SITE_URL}/` },
    { name: "Books", url: `${SITE_URL}/books` },
    { name: series.name, url: `${SITE_URL}/books/crash-course` },
  ]);

  return (
    <>
      <JsonLd data={[jsonLd, breadcrumbJsonLd]} />
      <Breadcrumbs />

      <section className="bg-primary/10 py-16 px-6 text-center border-b border-primary/20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {series.name}
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto">{series.tagline}</p>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        {collections[0] && (
          <p className="text-gray-700 max-w-3xl mx-auto text-center mb-10">
            {collections[0].longDescription}
          </p>
        )}
        <BookGrid books={ordered} section="books" coverField="coverDigital" />
      </section>
    </>
  );
}
