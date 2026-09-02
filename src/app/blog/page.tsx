import type { Metadata } from "next";
import BlogListing from "@/components/BlogListing";

export const metadata: Metadata = {
  title: "Blog | Oillinko",
  description:
    "Oil and gas equipment knowledge base: API 610 pump types, third-party inspection, EN 10204 material certificates, flanges and bolting, pipeline fittings, and how to prepare a bill of quantities for procurement.",
  keywords:
    "oil and gas equipment blog, API 610 guide, TPI inspection guide, EN 10204 guide, flange bolting guide, pipeline fittings guide, bill of quantities",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  return <BlogListing />;
}
