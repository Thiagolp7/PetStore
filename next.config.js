/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '13808.cdn.simplo7.net',
        pathname: '/**/**'
      },
      {
        protocol: 'https',
        hostname: 'www.petz.com.br',
        pathname: '/**/**'
      },
      {
        protocol: 'https',
        hostname: 'image.cachorrogato.com.br',
        pathname: '/**/**'
      }
    ]
  }
}

module.exports = nextConfig
