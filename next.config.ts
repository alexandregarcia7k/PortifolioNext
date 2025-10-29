import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'html.tailus.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'deifkwefumgah.cloudfront.net',
        port: '',
        pathname: '/**',
      },
    ],
    qualities: [75, 90, 100],
  },
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
    optimizeCss: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  transpilePackages: [],
  swcMinify: true,
};

export default nextConfig;
