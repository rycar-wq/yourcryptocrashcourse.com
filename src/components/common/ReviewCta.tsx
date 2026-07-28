import Link from "next/link";

export default function ReviewCta({
  title,
  description,
  buttonText,
  buttonHref,
}: {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}) {
  return (
    <section className="max-w-4xl mx-auto px-6 py-4">
      <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>

        <p className="text-gray-700 leading-relaxed max-w-xl mx-auto mb-8">
          {description}
        </p>

        <Link
          href={buttonHref}
          target="_blank"
          className="inline-block bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-xl transition"
        >
          {buttonText}
        </Link>

        <p className="text-sm text-gray-500 mt-6">
          Thank you for supporting Your Crypto Crash Course.
        </p>
      </div>
    </section>
  );
}
