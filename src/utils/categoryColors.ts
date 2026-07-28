export const categoryColors: Record<string, string> = {
  "Crypto Basics": "text-amber-800",
  Blockchain: "text-indigo-800",
  Trading: "text-primary",
  "Wallets & Security": "text-rose-800",
  DeFi: "text-violet-800",
  NFTs: "text-cyan-800",
  Regulation: "text-orange-800",
  Mindset: "text-sky-800",
  default: "text-gray-700",
};

// Header background/border tint per category — kept in sync with the text
// shade above (same hue, lighter weight) so the themed header reads as one
// family of colors rather than a clash.
export const categoryHeaderColors: Record<string, string> = {
  "Crypto Basics": "bg-amber-50 border-amber-100",
  Blockchain: "bg-indigo-50 border-indigo-100",
  Trading: "bg-primary/10 border-primary/20",
  "Wallets & Security": "bg-rose-50 border-rose-100",
  DeFi: "bg-violet-50 border-violet-100",
  NFTs: "bg-cyan-50 border-cyan-100",
  Regulation: "bg-orange-50 border-orange-100",
  Mindset: "bg-sky-50 border-sky-100",
  default: "bg-primary/10 border-primary/20",
};
