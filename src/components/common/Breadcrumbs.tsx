"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

export default function Breadcrumbs() {
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);

  const crumbs = segments.map((segment, i) => {
    const href = "/" + segments.slice(0, i + 1).join("/");
    const isLast = i === segments.length - 1;
    const label = segment.replace(/-/g, " ");

    return (
      <div key={href} className="flex items-center">
        <Link
          href={href}
          className={`text-sm font-medium ${
            isLast
              ? "text-gray-900 pointer-events-none"
              : "text-primary hover:text-primary"
          }`}
        >
          {label}
        </Link>
        {!isLast && <ChevronRight className="mx-2 w-4 h-4 text-gray-400" />}
      </div>
    );
  });

  return (
    <section className="relative z-10 bg-white py-8 md:py-10 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <nav
          className="flex items-center flex-wrap gap-2 text-sm font-medium text-gray-500 capitalize"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="text-primary hover:text-primary">
            Home
          </Link>
          {segments.length > 0 && (
            <ChevronRight className="mx-2 w-4 h-4 text-gray-400" />
          )}
          {crumbs}
        </nav>
      </div>
    </section>
  );
}
