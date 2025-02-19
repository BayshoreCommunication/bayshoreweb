/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  },

  // images: {
  //   domains: ["cdn-icons-png.flaticon.com"],
  // },
  images: {
    domains: ["cdn-icons-png.flaticon.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
      },
      {
        protocol: "https",
        hostname: "drive.google.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "bayshore.nyc3.digitaloceanspaces.com",
        // hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
