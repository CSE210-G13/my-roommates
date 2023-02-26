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
        // https://stackoverflow.com/questions/63357131/how-to-set-default-page-in-next-js#66840857h
        source: '/',
        destination: '/roommates',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
