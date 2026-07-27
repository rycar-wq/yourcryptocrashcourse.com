import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // required for static export when using <Image>
  },
  trailingSlash: true, // optional but helps with S3 directory-style URLs
};

export default nextConfig;
