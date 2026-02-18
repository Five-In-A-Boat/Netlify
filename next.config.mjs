/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
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
