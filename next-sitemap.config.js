/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://yourcryptocrashcourse.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false, // optional: prevents multiple sitemap splits
  outDir: "./public", // must be set if using output: export
  exclude: ["/404"],
};
