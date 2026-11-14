const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://azimetkeremersoy.com";

/** @type {import('next').NextConfig} */
const nextConfig = {
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
