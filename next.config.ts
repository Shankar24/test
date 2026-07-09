import type { NextConfig } from "next";

// The site is statically exported and served by GitHub Pages at
// https://shankar24.github.io/test/ — the CI workflow sets GITHUB_PAGES=true
// so the /test base path is only applied for the deployed build.
const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGitHubPages ? "/test" : "",
  images: { unoptimized: true },
  poweredByHeader: false,
};

export default nextConfig;
