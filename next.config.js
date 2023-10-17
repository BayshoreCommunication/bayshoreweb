/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  },
  images: {
    domains: ["cdn-icons-png.flaticon.com"],
  },
};

module.exports = nextConfig;
