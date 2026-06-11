import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Product photography is already pre-optimized to right-sized WebP by
    // scripts/process-assets.mjs, so we serve it directly and skip the
    // on-demand optimizer (which flaked intermittently under concurrent loads,
    // leaving some images blank). WebP is universally supported.
    unoptimized: true,
  },
};

export default nextConfig;
