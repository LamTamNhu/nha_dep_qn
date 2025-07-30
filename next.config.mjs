/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
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

export default nextConfig;