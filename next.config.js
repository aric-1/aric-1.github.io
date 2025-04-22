/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // This enables static HTML export
    images: {
      unoptimized: true, // Required for Next 13+ with export
    },
    trailingSlash: true, // Optional: makes folder-style URLs work
    basePath: '/aric-1.github.io', // Optional: set a base path if needed
    assetPrefix: '/aric-1.github.io/', // Optional: set an asset prefix if needed
  }
  
  module.exports = nextConfig