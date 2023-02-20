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
      },
      {
        protocol: 'https',
        hostname: 'love.doghero.com.br',
        pathname: '/**/**'
      },
      {
        protocol: 'https',
        hostname: 'user-images.githubusercontent.com',
        pathname: '/**/**/**'
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**/**/**'
      }
    ]
  }
}

module.exports = nextConfig
