import type { NextConfig } from 'next'

/**
 * Static export so the whole template can be served from GitHub Pages
 * (or any static host) with no server.
 *
 * On GitHub Pages a *project* site lives at /<repo-name>/, so basePath has to
 * be set. The Pages workflow injects NEXT_PUBLIC_BASE_PATH automatically.
 * Locally it stays empty and the site runs at /.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

const nextConfig: NextConfig = {
  // This project sits inside a folder that has its own lockfile; pin the root
  // so Turbopack does not walk up and pick the wrong one.
  turbopack: { root: import.meta.dirname },
  output: 'export',
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
}

export default nextConfig
