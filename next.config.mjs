const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://azimetkeremersoy.com";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Lets a second dev server run without clobbering the main `.next` output.
  distDir: process.env.NEXT_DIST_DIR || ".next",
  env: {
    NEXT_PUBLIC_SITE_URL: siteUrl,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pepteam.net",
      },
    ],
  },
};

export default nextConfig;
