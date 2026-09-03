import type { Metadata } from "next";
import BlogListing from "@/components/BlogListing";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Oil and gas industry knowledge base: equipment standards and procurement, upstream production and extraction, midstream transportation, testing and laboratories, and industry technology — practical articles for professionals.",
  keywords:
    "oil and gas blog, oil and gas equipment guide, oil and gas production, oil and gas transportation, petroleum testing, oil and gas industry technology, API 610 guide, bill of quantities",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  return <BlogListing />;
}
