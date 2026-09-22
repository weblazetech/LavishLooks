import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // All assets are served locally from public/ to eliminate external bandwidth abuse
  // and prevent arbitrary remote image optimizer exploitation.
  images: {
    remotePatterns: [],
  },
};

export default nextConfig;
