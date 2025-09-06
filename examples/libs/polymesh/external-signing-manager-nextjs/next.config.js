/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    '@dfns/lib-polymesh',
    '@dfns/sdk',
    '@dfns/sdk-keysigner',
  ],
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig