/** @type {import('next').NextConfig} */

const isGithubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig = {
  output: "export",
  trailingSlash: true,

  basePath: isGithubPages
    ? "/Pangasinan-Heritage-Digital-Showcase"
    : "",

  assetPrefix: isGithubPages
    ? "/Pangasinan-Heritage-Digital-Showcase/"
    : "",

  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;