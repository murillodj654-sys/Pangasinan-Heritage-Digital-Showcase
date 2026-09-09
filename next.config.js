/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",

  basePath: "/Pangasinan-Heritage-Digital-Showcase",
  assetPrefix: "/Pangasinan-Heritage-Digital-Showcase/",

  images: {
    unoptimized: true,
  },

  trailingSlash: true,
};

module.exports = nextConfig;