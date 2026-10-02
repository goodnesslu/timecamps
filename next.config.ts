import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  typescript: {
    // Allows production builds to successfully finish even with type errors
    ignoreBuildErrors: true,
  },
  // eslint: {
  //   // Also ignores ESLint errors during builds
  //   ignoreDuringBuilds: true,
  // },
}

export default nextConfig
