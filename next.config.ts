import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mgf.ukaisyndrome.id",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
