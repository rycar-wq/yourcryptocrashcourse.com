export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://yourcryptocrashcourse.com";

export const SITE_AUTHOR = "Ryan Carrington";

export const SITE_ORGANIZATION = {
  "@type": "Organization",
  name: "Your Crypto Crash Course",
  url: SITE_URL,
};

// No dedicated brand logo file yet — use the flagship collection cover as a
// stand-in for structured-data purposes (same approach Sharper Thinking took).
export const SITE_LOGO =
  "/images/covers/crash-course/digital/crypto-crash-course-bundle.jpg";
