import nextMDX from "@next/mdx"
import remarkSmartypants from "remark-smartypants"

/** @type {import("next").NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ["app", "components", "config", "e2e"],
  },
  experimental: {
    mdxRs: true,
  },
  images: {
    minimumCacheTTL: 3600,
    // 1 hour
    remotePatterns: [
      {
        hostname: "picsum.photos",
        protocol: "https",
      },
    ],
    unoptimized: true,
  },
  output: "export",
  pageExtensions: ["ts", "tsx", "mdx"],
  reactStrictMode: true,
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [],
    remarkPlugins: [remarkSmartypants],
  },
})

export default withMDX(nextConfig)
