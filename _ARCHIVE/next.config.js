/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export for S3
  trailingSlash: true, // Ensures URLs work correctly on S3
  images: { unoptimized: true }, // Disable Next.js Image Optimization for S3
  reactStrictMode: true,
};

module.exports = nextConfig;
