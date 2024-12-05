import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "careers.recruiteecdn.com",
      },
    ]
  }
};

export default nextConfig;
