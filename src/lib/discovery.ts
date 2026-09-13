import { site } from "./site";
import { catalogueRoutes, catalogueSections, sectors } from "./catalogue";
import { blogPosts, postUrl } from "./blog";
import { blogCategories, categoryUrl } from "./blog-taxonomy";

function link(label: string, pathname: string, description?: string) {
  return `- [${label.replace(/[\[\]]/g, "")}](${site.domain}${pathname})${description ? `: ${description}` : ""}`;
}

export function discoveryText() {
  return [
    "# Oillinko",
    "",
    "> Oillinko coordinates oil and gas equipment sourcing and procurement enquiries. Buyers submit requirements to Oillinko for review and supplier coordination.",
    "",
    "The catalogue describes equipment, software and specialist service requirements across the industry. A listed topic does not establish available stock, manufacturer authorization or an in-house field service. Availability, technical suitability, documentation and commercial terms are confirmed for each enquiry. Country-of-origin filters describe product origin, not distribution territory. Directory listings do not establish a commercial partnership.",
    "",
    "## Company and enquiries",
    "",
    link("About Oillinko", "/about"),
    link("Sourcing and procurement services", "/services"),
    link("How enquiries work", "/how-it-works"),
    link("Quality and documentation", "/quality"),
    link("Global company directory", "/oil-and-gas/companies"),
    link("Supplier information", "/suppliers"),
    link("Contact Oillinko", "/contact"),
    link("Request a quote", "/rfq"),
    "",
    "## Catalogue",
    "",
    link("Oil and gas equipment, services and software", "/oil-and-gas"),
    ...catalogueSections.flatMap(section => [
      "",
      `### ${section.name}`,
      "",
      link(section.name, `/oil-and-gas/${section.slug}`),
      ...catalogueRoutes().filter(route => route.kind === section.kind && route.group && !route.item)
        .map(route => link(route.group!.name, route.url)),
    ]),
    "",
    "## Industry applications",
    "",
    ...sectors.map(sector => link(sector.name, `/industries/${sector.id}`)),
    "",
    "## Blog and technical guides",
    "",
    link("Oil and gas knowledge library", "/blog"),
    ...blogCategories.filter(category => !category.parent).flatMap(main => [
      "",
      `### ${main.name}`,
      "",
      link(main.name, categoryUrl(main)),
      ...blogCategories.filter(category => category.parent === main.slug)
        .map(category => link(category.name, categoryUrl(category))),
      ...blogPosts.filter(post => post.mainCategory === main.slug)
        .map(post => link(post.title, postUrl(post))),
    ]),
    "",
    "## Optional",
    "",
    link("XML sitemap", "/sitemap.xml", "The complete list of canonical pages intended for indexing."),
    "",
  ].join("\n");
}
