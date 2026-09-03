"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CtaBand, PageHeader } from "@/components/ui";
import { blogCategories, blogPosts } from "@/lib/blog";

export default function BlogListing() {
  const [active, setActive] = useState<string>("all");

  const counts = useMemo(() => {
    const m = new Map<string, number>();
    for (const c of blogCategories) m.set(c.slug, 0);
    for (const p of blogPosts) m.set(p.category, (m.get(p.category) ?? 0) + 1);
    return m;
  }, []);

  const posts = useMemo(() => {
    const sorted = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));
    return active === "all" ? sorted : sorted.filter((p) => p.category === active);
  }, [active]);

  return (
    <>
      <PageHeader
        title="Blog"
        subtitle="Practical, technical writing on the oil and gas industry — equipment and standards, procurement, production, transportation, testing and technology — for buyers and industry professionals."
      />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
          <aside>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-muted">
              Categories
            </h2>
            <div className="mt-4 flex flex-col gap-1 lg:flex-col">
              <button
                onClick={() => setActive("all")}
                className={`flex items-center justify-between rounded px-3 py-2 text-left text-sm transition-colors ${
                  active === "all"
                    ? "bg-accent text-black font-semibold"
                    : "text-muted hover:bg-oil-800 hover:text-foreground"
                }`}
              >
                <span>All</span>
                <span className="text-xs opacity-70">({blogPosts.length})</span>
              </button>
              {blogCategories.map((c) => (
                <button
                  key={c.slug}
                  onClick={() => setActive(c.slug)}
                  className={`flex items-center justify-between rounded px-3 py-2 text-left text-sm transition-colors ${
                    active === c.slug
                      ? "bg-accent text-black font-semibold"
                      : "text-muted hover:bg-oil-800 hover:text-foreground"
                  }`}
                >
                  <span>{c.name}</span>
                  <span className="text-xs opacity-70">({counts.get(c.slug) ?? 0})</span>
                </button>
              ))}
            </div>
          </aside>

          <div className="grid gap-6 sm:grid-cols-2">
            {posts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group overflow-hidden rounded-lg border border-line bg-oil-800 transition-colors hover:border-accent"
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-oil-900/80 to-transparent" />
                  <span className="absolute bottom-3 left-4 rounded-full border border-line bg-oil-900/90 px-3 py-1 text-xs text-muted">
                    {blogCategories.find((c) => c.slug === p.category)?.name}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-xs text-muted">
                    {p.dateLabel} &middot; {p.readTime}
                  </p>
                  <h2 className="mt-2 text-lg font-semibold transition-colors group-hover:text-accent">
                    {p.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.short}</p>
                  <p className="mt-4 text-xs font-medium text-accent">Read article →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-14 rounded-lg border border-line bg-oil-800 p-6 sm:p-8">
          <h2 className="text-xl font-bold">Can&apos;t find what you need?</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
            These articles cover the equipment and standards we source and quote
            against most. If your project touches something else — valves,
            instrumentation, pipe, storage tank fittings — send us your list and
            we will source it to your specification, standards and budget.
          </p>
          <Link
            href="/rfq"
            className="mt-5 inline-block rounded bg-accent px-6 py-3 font-semibold text-black transition-colors hover:bg-accent-hi"
          >
            Request a Quote
          </Link>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
