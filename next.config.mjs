import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  experimental: {
    mdxRs: true,
  },
};

export default withContentlayer(nextConfig);
