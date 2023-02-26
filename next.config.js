/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        // Redirect / (root of our website) to /roommates
        // https://nextjs.org/docs/api-reference/next.config.js/redirects
        source: '/',
        destination: '/roommates',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
