import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  staticGeneration: {
    disableStaticImages: true,
  },
  /* other config options here */
};

export default nextConfig;