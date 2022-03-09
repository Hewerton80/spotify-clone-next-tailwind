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
  // images: {
  //   loader: 'imgix',
  //   path: '',
  // },
}

module.exports = nextConfig
