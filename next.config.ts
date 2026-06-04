import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/audit",
        destination: "/local-business-audit",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
