import type { NextConfig } from "next";
import { legacyCatalogueRedirects } from "./src/lib/catalogue";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Exact legacy paths go straight to their final canonical URL on either host.
      ...legacyCatalogueRedirects().map(route=>({...route,destination:`https://oillinko.com${route.destination}`,permanent:true})),
      // Canonical host: send www.oillinko.com to oillinko.com with a 308 so
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
