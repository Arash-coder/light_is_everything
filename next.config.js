/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')();

const nextConfig = {
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
