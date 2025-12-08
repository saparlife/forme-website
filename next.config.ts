import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  async rewrites() {
    return [
      {
        source: '/taplink',
        destination: '/taplink/index.html',
      },
    ];
  },
};

export default nextConfig;
