"use client";

import { useEffect, useRef, useState } from "react";

type Heading = { id: string; text: string };

const HEADER_OFFSET = 88;

function useTocHeadings(containerId: string) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const container = document.getElementById(containerId);
    if (!container) return;

    const nodes = Array.from(
      container.querySelectorAll<HTMLHeadingElement>("h2[id]"),
    );
    if (nodes.length === 0) return;
    // Reading the server-rendered heading ids/text out of the DOM here —
    // this is a one-time scan of an external system (the rendered article),
    // not state derivable from props/state, so it belongs in an effect.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHeadings(nodes.map((n) => ({ id: n.id, text: n.textContent || "" })));

    if (window.location.hash) {
      const target = document.getElementById(
        decodeURIComponent(window.location.hash.slice(1)),
      );
      if (target) {
        window.requestAnimationFrame(() => {
          const y =
            target.getBoundingClientRect().top +
            window.scrollY -
            HEADER_OFFSET;
          window.scrollTo({ top: y, behavior: "auto" });
        });
      }
    }

    observerRef.current?.disconnect();
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-96px 0px -65% 0px", threshold: [0, 1] },
    );
    nodes.forEach((n) => observer.observe(n));
    observerRef.current = observer;

    return () => observer.disconnect();
  }, [containerId]);

  return { headings, activeId, setActiveId };
}

export default function TableOfContents({
  containerId = "post-content",
  variant = "sidebar",
}: {
  containerId?: string;
  variant?: "sidebar" | "inline";
}) {
  const { headings, activeId, setActiveId } = useTocHeadings(containerId);

  if (headings.length < 2) return null;

  function goTo(e: React.MouseEvent, id: string) {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
    window.scrollTo({ top: y, behavior: "smooth" });
    window.history.pushState(null, "", `#${id}`);
    setActiveId(id);
  }

  const linkClass = (id: string) =>
    `block border-l-2 py-1.5 pl-4 -ml-px text-sm transition-colors ${
      activeId === id
        ? "border-accent text-accent font-medium"
        : "border-line text-muted hover:border-foreground/40 hover:text-foreground"
    }`;

  // Inline: rendered inside the article body itself (all screen sizes), so
  // the TOC and its section links are part of the article's own content —
  // helpful for readers who never notice a sidebar, and for search/AI
  // crawlers reading the article as a single block of HTML.
  if (variant === "inline") {
    return (
      <details open className="mb-10 rounded-lg border border-line bg-oil-800">
        <summary className="cursor-pointer list-none px-4 py-3 text-sm font-semibold text-foreground">
          On this page
        </summary>
        <nav aria-label="Table of contents" className="border-t border-line px-4 py-3">
          <ul className="space-y-1">
            {headings.map((h) => (
              <li key={h.id}>
                <a href={`#${h.id}`} onClick={(e) => goTo(e, h.id)} className={linkClass(h.id)}>
                  {h.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </details>
    );
  }

  // Sidebar: sticky nav in the left column, desktop only.
  return (
    <nav aria-label="Table of contents" className="hidden lg:block">
      <div className="sticky top-24">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted">
          On this page
        </p>
        <ul className="space-y-1 border-l border-line">
          {headings.map((h) => (
            <li key={h.id}>
              <a href={`#${h.id}`} onClick={(e) => goTo(e, h.id)} className={linkClass(h.id)}>
                {h.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
