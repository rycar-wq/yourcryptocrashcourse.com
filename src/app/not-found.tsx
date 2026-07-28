import Link from "next/link";

const paths = [
  {
    href: "/books",
    emoji: "📖",
    title: "Books",
    description: "The full Crash Course and Instant Crypto library.",
  },
  {
    href: "/audiobooks",
    emoji: "🎧",
    title: "Audiobooks",
    description: "Listen to the series, narrated and ready to go.",
  },
  {
    href: "/articles",
    emoji: "📰",
    title: "Articles",
    description: "Quick reads on crypto, Web3, and blockchain basics.",
  },
];

export default function NotFound() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-24 text-center">
      <p className="text-primary font-semibold mb-2">404</p>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        This page doesn&apos;t exist
      </h1>
      <p className="text-gray-700 max-w-xl mx-auto mb-12">
        The link might be broken or the page may have moved. Here&apos;s
        where you can pick back up.
      </p>

      <div className="grid sm:grid-cols-3 gap-6">
        {paths.map((path) => (
          <Link
            key={path.href}
            href={path.href}
            className="block rounded-2xl border border-primary/20 bg-white p-6 text-left shadow hover:shadow-md hover:border-primary/40 transition"
          >
            <span className="text-3xl">{path.emoji}</span>
            <h2 className="text-lg font-semibold text-gray-900 mt-3">
              {path.title}
            </h2>
            <p className="text-gray-700 text-sm mt-1">{path.description}</p>
          </Link>
        ))}
      </div>

      <Link
        href="/"
        className="inline-block mt-12 px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition"
      >
        Back to Home
      </Link>
    </section>
  );
}
