import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Canonical host: send www.oillinko.com to oillinko.com with a 301 so
      // Google consolidates both variants onto one URL instead of splitting
      // clicks and impressions across them. The canonical tags already point
      // at the non-www host; this makes the redirect authoritative.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.oillinko.com" }],
        destination: "https://oillinko.com/:path*",
        permanent: true,
      },
      {
        source: "/guides",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/guides/:slug",
        destination: "/blog/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
