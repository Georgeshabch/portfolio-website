import { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'media.licdn.com', // Add LinkedIn here
      },
    ],
  },
  experimental: {
    serverActions: {},
  },
};

export default nextConfig;
