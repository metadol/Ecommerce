/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['fakestoreapi.com','images.pexels.com','cdn.dribbble.com'],
        remotePatterns: [
          {
            protocol: "https",
            hostname: "**",
          },]
      },
}



module.exports = nextConfig
