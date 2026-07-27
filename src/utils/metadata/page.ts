import type { Metadata } from "next";
import { SITE_URL, SITE_ORGANIZATION } from "../constants";

interface MetaProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  type?: "website" | "article";
}

export function generatePageMetadata({
  title,
  description,
  canonical,
  image,
  type = "website",
}: MetaProps): Metadata {
  const fullTitle = `${title} | ${SITE_ORGANIZATION.name}`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: canonical || `${SITE_URL}`,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical || SITE_URL,
      siteName: SITE_ORGANIZATION.name,
      images: [
        {
          url: image || `${SITE_URL}/og-default.jpg`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image || `${SITE_URL}/og-default.jpg`],
    },
  };
}
