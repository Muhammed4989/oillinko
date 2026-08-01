import Link from "next/link";
import { site } from "@/lib/site";
import { Logo } from "./Header";

const columns = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/services", label: "Services" },
      { href: "/quality", label: "Quality & Compliance" },
      { href: "/suppliers", label: "Supplier Network" },
      { href: "/how-it-works", label: "How It Works" },
    ],
  },
  {
    title: "Equipment",
    links: [
      { href: "/equipment/hot-tap-line-stop", label: "Hot Tap & Line Stop" },
      { href: "/equipment/pipeline-fittings", label: "Pipeline Fittings" },
      { href: "/equipment/flanges", label: "Flanges" },
      { href: "/equipment/gaskets", label: "Gaskets" },
      { href: "/equipment/stud-bolts", label: "Stud Bolts & Nuts" },
      { href: "/equipment/pipe-cutters", label: "Pipe Cutters" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-oil-900">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Oil & gas equipment sourcing and procurement consultancy based in
              Istanbul, connecting buyers worldwide with verified manufacturers.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="transition-colors hover:text-foreground">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
              Contact
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>{site.address}</li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-foreground">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={site.whatsappLink} className="hover:text-foreground">
                  WhatsApp: {site.whatsapp}
                </a>
              </li>
              <li>
                <a href={site.phoneLink} className="hover:text-foreground">
                  {site.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-xs text-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
