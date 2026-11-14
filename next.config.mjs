/** @type {import('next').NextConfig} */
const nextConfig = {
  // Lets a second `next dev`/`next build` run without touching the main `.next` output.
  distDir: process.env.NEXT_DIST_DIR || ".next",
};

export default nextConfig;
