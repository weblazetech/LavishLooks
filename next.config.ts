import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  // Allow the sandbox preview origin to load _next assets without warnings.
  allowedDevOrigins: [
    "*.space-z.ai",
  ],
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
