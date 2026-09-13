# Search discovery

The canonical origin is `https://oillinko.com`. Published catalogue and blog URLs come from their existing registries. Preserve old-path permanent redirects when content moves, and keep only final indexable URLs in `src/app/sitemap.ts`.

## Search engines

Submit the complete `https://oillinko.com/sitemap.xml` in the verified Search Console domain property. A successful sitemap submission or processing result is a discovery signal, not confirmation that every page has been indexed. Use individual URL Inspection requests for a small number of important changed URLs; do not repeatedly submit the same URL or misuse Google's restricted Indexing API for ordinary equipment and blog pages.

Use the page-indexing report's last-updated date when interpreting counts. Alternate canonical URLs and old redirect sources are normally excluded deliberately. The final canonical destinations should return HTTP 200 with crawlable content and without noindex or restrictive snippet directives.

## AI-supported search

Google AI Overviews and AI Mode use the ordinary Search indexing foundation and do not require a special AI file or schema. Search access for ChatGPT is governed by OAI-SearchBot; Perplexity uses PerplexityBot; Claude uses Claude-SearchBot and Claude-User. The existing wildcard robots group permits public content for crawlers not listed individually. Training bots serve a separate purpose and are not a prerequisite for appearing in search.

`/llms.txt` is an optional, human-readable site guide, not an indexing submission endpoint or a ranking guarantee. It is now generated statically by `src/app/llms.txt/route.ts` from `src/lib/discovery.ts`, which uses the catalogue and blog registries. This prevents new catalogue or blog URL changes from leaving stale hand-maintained links in the guide. Do not recreate a conflicting `public/llms.txt` file.

Do not add invented inventory, manufacturer authorization, partnerships, standards compliance or field-service capabilities to discovery summaries. Product-origin filters identify manufacturing origin rather than a distribution region.

If real crawler traffic is blocked, inspect the actual response and relevant hosting logs. A successful request with a crawler User-Agent from a developer's machine does not establish access from the crawler's verified IP ranges. Do not weaken the firewall globally or trust a User-Agent string as authentication.

## Primary references

- [Google: requesting recrawls and submitting sitemaps](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl)
- [Google: AI features and website requirements](https://developers.google.com/search/docs/appearance/ai-features)
- [OpenAI crawler roles](https://developers.openai.com/api/docs/bots)
- [Perplexity crawler documentation](https://docs.perplexity.ai/docs/resources/perplexity-crawlers)
- [Anthropic crawler roles](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler)
- [Bing Webmaster Guidelines](https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a)
- [IndexNow protocol and response meanings](https://www.indexnow.org/documentation)
