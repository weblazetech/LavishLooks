import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable framework fingerprinting header
  poweredByHeader: false,

  // All assets are served locally from public/ to eliminate external bandwidth abuse
  // and prevent arbitrary remote image optimizer exploitation.
  images: {
    remotePatterns: [],
  },

  // Security headers for clickjacking defense (anti-framing) and secure transport
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'none';",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
