const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  swcMinify: true,
  reactStrictMode: false,
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  experimental: {
    serverActions: true,
  },
  eslint: {
    dirs: ['app', 'components', 'lib', 'scripts'],
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = withContentlayer(nextConfig)
