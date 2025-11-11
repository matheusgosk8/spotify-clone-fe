import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    domains: [
      "i.scdn.co",
      "mosaic.scdn.co",
      'image-cdn-fa.spotifycdn.com',
      'image-cdn-ak.spotifycdn.com',
      'image-cdn.spotifycdn.com',
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.scdn.co",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
