/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://door.bssm.kro.kr/api/:path*'
      }
    ]
  }
}

module.exports = nextConfig
