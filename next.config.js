/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["1up-store.s3.amazonaws.com"],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
