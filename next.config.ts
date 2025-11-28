import type { NextConfig } from "next";
import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

const nextConfig: NextConfig = {
  transpilePackages: ["geist"],
  // remove output: 'export'
  // remove trailingSlash unless you truly need it
  // remove images.unoptimized unless you have a reason
};

export default withMDX(nextConfig);
