import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 eslint: {
  ignoreDuringBuilds: true
 },

 typescript: {
  // tsconfigPath: "./tsconfig.json",
  ignoreBuildErrors: true
 }
};

export default nextConfig;
