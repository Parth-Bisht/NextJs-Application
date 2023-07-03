/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["lh3.googleusercontent.com", "encrypted-tbn0.gstatic.com"],
  },
};

module.exports = nextConfig;
