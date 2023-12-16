/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')();

const nextConfig = {
  env: {
    BASE_URL: process.env.BASE_URL
  },
  images: {
    remotePatterns: [
      {
        hostname: 'swiperjs.com'
      }
    ]
  },
  output: 'standalone'
};

module.exports = withNextIntl(nextConfig);
