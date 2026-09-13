import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const aiCrawlers = [
    "GPTBot",
    "OAI-SearchBot",
    "ChatGPT-User",
    "ClaudeBot",
    "Claude-Web",
    "anthropic-ai",
    "PerplexityBot",
    "Perplexity-User",
    "Google-Extended",
    "Applebot-Extended",
    "Bytespider",
    "CCBot",
    "Amazonbot",
    "Meta-ExternalAgent",
    "Meta-ExternalFetcher",
  ];

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Legal pages retain noindex in HTML; crawlers must fetch that directive.
      },
      // Preserve existing crawler preferences. Search bots and training bots
      // have separate purposes; training access is not required for search.
      ...aiCrawlers.map((userAgent) => ({
        userAgent,
        allow: "/",
      })),
    ],
    sitemap: `${site.domain}/sitemap.xml`,
  };
}
