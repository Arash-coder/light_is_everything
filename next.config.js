/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')();

const nextConfig = {
  output: 'standalone',
  images: {
    domains: [process.env.NEXT_PUBLIC_IMAGE_URL]
  }
};

module.exports = withNextIntl(nextConfig);
