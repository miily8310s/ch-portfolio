/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'avatars.githubusercontent.com',
      '1.bp.blogspot.com',
      '3.bp.blogspot.com',
      '4.bp.blogspot.com',
    ],
  },
}

module.exports = nextConfig
