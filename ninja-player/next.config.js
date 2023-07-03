/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "encrypted-tbn0.gstatic.com",
      "firebasestorage.googleapis.com",
      "images.hindustantimes.com",
      "cdn.telanganatoday.com",
    ],
  },
};

module.exports = nextConfig;
