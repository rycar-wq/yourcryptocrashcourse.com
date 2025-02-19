"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const paths = pathname.split("/").filter((segment) => segment);

  const formatText = (text) => {
    return text
      .replace(/-/g, " ") // Replace hyphens with spaces
      .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize first letter of each word
  };

  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: paths.map((segment, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: formatText(segment),
        item: `${process.env.NEXT_PUBLIC_SITE_URL || "https://yourcryptocrashcourse.com"}/${paths.slice(0, index + 1).join("/")}`,
      })),
    };

    document.querySelector('script[type="application/ld+json"]')?.remove();

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }, [pathname]);

  return (
    <nav aria-label="breadcrumb" className="hidden sm:block text-sm text-gray-600 max-w-6xl mx-auto px-6 py-6">
      <ul className="flex flex-wrap items-center space-x-2">
        <li>
          <Link href="/" className="text-orange-500 hover:underline">
            Home
          </Link>
          <span className="mx-1 text-gray-400">/</span>
        </li>
        {paths.map((segment, index) => {
          const path = `/${paths.slice(0, index + 1).join("/")}`;
          const isLast = index === paths.length - 1;
          const formattedSegment = formatText(segment);

          return (
            <li key={path} className={isLast ? "font-semibold text-gray-900" : ""}>
              {isLast ? (
                <span>{formattedSegment}</span>
              ) : (
                <>
                  <Link href={path} className="text-orange-500 hover:underline">
                    {formattedSegment}
                  </Link>
                  <span className="mx-1 text-gray-400">/</span>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}