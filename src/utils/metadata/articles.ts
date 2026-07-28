import { SITE_URL, SITE_ORGANIZATION, SITE_LOGO } from "../constants";

export function buildArticleJsonLd({
  title,
  description,
  url,
  date,
}: {
  title: string;
  description: string;
  url: string;
  date: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    publisher: {
      "@type": "Organization",
      name: SITE_ORGANIZATION.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}${SITE_LOGO}`,
      },
    },
    datePublished: date,
    dateModified: date,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };
}
