"use client";

import Link from "next/link";
import { useState } from "react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/equipment", label: "Equipment" },
  { href: "/quality", label: "Quality" },
  { href: "/contact", label: "Contact" },
];

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="1" y="1" width="30" height="30" rx="6" stroke="#f97316" strokeWidth="2" fill="#0b0f14" />
        <path d="M9 22V10h5a4 4 0 0 1 0 8h-5" stroke="#f97316" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M23 10v12" stroke="#f97316" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
      <span className="text-lg font-bold tracking-tight">
        OILLINKO
      </span>
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-oil-900/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Logo />
        <nav className="hidden items-center gap-6 text-sm text-muted md:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="transition-colors hover:text-foreground">
              {n.label}
            </Link>
          ))}
          <Link
            href="/rfq"
            className="rounded bg-accent px-4 py-2 text-sm font-semibold text-black transition-colors hover:bg-accent-hi"
          >
            Request a Quote
          </Link>
        </nav>
        <button
          className="flex h-10 w-10 items-center justify-center rounded border border-line md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>
      {open && (
        <nav className="border-t border-line bg-oil-900 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3 text-muted">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="hover:text-foreground">
                {n.label}
              </Link>
            ))}
            <Link
              href="/rfq"
              onClick={() => setOpen(false)}
              className="rounded bg-accent px-4 py-2 text-center font-semibold text-black"
            >
              Request a Quote
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
