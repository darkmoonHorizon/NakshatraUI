import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@vserve_digital/ui"],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;

