import Image from "next/image";
import type { ReactNode } from "react";

export default function PhotoHero({
  image,
  alt,
  title,
  subtitle,
  children,
}: {
  image: string;
  alt: string;
  title: string;
  subtitle: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative h-[420px] flex items-center justify-center text-center text-white overflow-hidden">
      <Image src={image} alt={alt} fill priority className="object-cover" />
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative z-10 max-w-2xl px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-lg text-white/90">{subtitle}</p>
        {children}
      </div>
    </section>
  );
}
