import type { NextConfig } from "next";

const isGitHubPages = process.env.DEPLOY_TARGET === "github-pages";
const githubPagesBasePath = "/bespokeMKTG";

const nextConfig: NextConfig = isGitHubPages
  ? {
      output: "export",
      basePath: githubPagesBasePath,
      assetPrefix: githubPagesBasePath,
      trailingSlash: true,
      images: {
        unoptimized: true,
      },
    }
  : {};

export default nextConfig;
