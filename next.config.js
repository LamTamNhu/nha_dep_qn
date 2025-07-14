/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nhadepquangnam.vn',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;