import Breadcrumbs from "@/components/common/Breadcrumbs";
import { generatePageMetadata } from "@/utils/metadata";
import { SITE_URL } from "@/utils/constants";

export function generateMetadata() {
  return generatePageMetadata({
    title: "Disclaimer and Terms of Use",
    description:
      "Disclaimer and terms of use for Your Crypto Crash Course — informational purposes only, not financial advice.",
    canonical: `${SITE_URL}/disclaimer`,
    type: "website",
  });
}

export default function DisclaimerPage() {
  return (
    <>
      <Breadcrumbs />
      <div className="max-w-3xl mx-auto px-6 py-16 space-y-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Disclaimer</h1>

        <p className="text-gray-700 leading-relaxed">
          The content provided on YourCryptoCrashCourse.com is for{" "}
          <strong>informational and educational purposes only</strong>.
          Nothing on this site constitutes{" "}
          <strong>financial, investment, legal, or tax advice</strong>.
          Cryptocurrency investments are highly volatile and may result in
          loss of capital. Always consult a qualified financial professional
          before making investment decisions.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-2">
          No Accuracy Guarantee
        </h2>
        <p className="text-gray-700 leading-relaxed">
          We strive to provide accurate and up-to-date information, but{" "}
          <strong>we make no warranties or guarantees</strong> about the
          accuracy, completeness, or reliability of the content. The
          cryptocurrency industry evolves rapidly, and some information may
          become outdated.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-2">
          No Endorsements
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Mentioning any cryptocurrency, exchange, wallet, or service does{" "}
          <strong>not</strong> imply an endorsement. We are not affiliated
          with any third-party platforms unless explicitly stated.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-2">
          Investment Risks
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Cryptocurrency investments carry <strong>substantial risk</strong>.
          Prices are volatile, and investors may lose their entire
          investment. Past performance is <strong>not</strong> indicative of
          future results. Do your own research (<strong>DYOR</strong>) before
          making investment decisions.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-2">
          Security &amp; Responsibility
        </h2>
        <p className="text-gray-700 leading-relaxed">
          It is your <strong>sole responsibility</strong> to secure your
          digital assets. We <strong>do not provide security services</strong>{" "}
          or recover lost funds. Always use <strong>hardware wallets</strong>,
          strong passwords, and two-factor authentication (2FA).
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-2">
          Final Disclaimer
        </h2>
        <p className="text-gray-700 leading-relaxed">
          By using this website, you agree that{" "}
          <strong>YourCryptoCrashCourse.com</strong> and its authors are{" "}
          <strong>not responsible</strong> for any financial decisions,
          losses, or damages incurred from using the information provided.
          You <strong>assume full risk</strong>.
        </p>

        <p className="text-sm text-gray-500 mt-8">
          <strong>Last updated:</strong> July 27, 2026
        </p>
      </div>
    </>
  );
}
