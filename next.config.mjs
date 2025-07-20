/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
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