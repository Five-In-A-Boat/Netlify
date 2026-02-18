/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.fiveplay.com',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
};

export default nextConfig;
