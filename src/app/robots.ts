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
        disallow: ["/privacy", "/terms"],
      },
      // Explicitly welcome AI answer-engine and LLM-training crawlers —
      // Oillinko wants to be discoverable and cited by AI search tools.
      ...aiCrawlers.map((userAgent) => ({
        userAgent,
        allow: "/",
      })),
    ],
    sitemap: `${site.domain}/sitemap.xml`,
  };
}
