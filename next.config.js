/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack5: true,
  reactStrictMode: true,
  pageExtensions: ['tsx'],
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/login',
        destination: '/',
        permanent: true,
      },
    ]
  },
  images: {
    domains: ['is1-ssl.mzstatic.com', 'is2-ssl.mzstatic.com', 'is5-ssl.mzstatic.com'],
  },
}

module.exports = nextConfig
