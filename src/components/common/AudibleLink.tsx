import Link from "next/link";
import type { ReactNode } from "react";

export default function AudibleLink({
  href,
  className,
  children,
  fallback = null,
}: {
  href?: string;
  className: string;
  children: ReactNode;
  fallback?: ReactNode;
}) {
  if (!href) return <>{fallback}</>;

  return (
    <Link href={href} target="_blank" className={className}>
      {children}
    </Link>
  );
}
