import Link from "next/link";
import type { ReactNode } from "react";

export default function AmazonLink({
  href,
  className,
  children,
}: {
  href?: string;
  className: string;
  children: ReactNode;
}) {
  if (!href) return null;

  return (
    <Link href={href} target="_blank" className={className}>
      {children}
    </Link>
  );
}
