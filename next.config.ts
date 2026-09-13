import type { NextConfig } from "next";
import { legacyCatalogueRedirects } from "./src/lib/catalogue";
import { legacyBlogRedirects } from "./src/lib/blog";

const nextConfig: NextConfig = {
  turbopack: { root: process.cwd() },
  async redirects() {
    return [
      ...legacyBlogRedirects().map(route=>({...route,destination:`https://oillinko.com${route.destination}`,permanent:true})),
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
    ];
  },
};

export default nextConfig;
