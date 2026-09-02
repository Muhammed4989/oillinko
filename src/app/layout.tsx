import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: `${site.name} — Oil & Gas Equipment Sourcing & Procurement`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "oil and gas equipment supplier",
    "oil and gas equipment procurement",
    "API 610 pump supplier",
    "valve supplier oil and gas",
    "pipeline fittings supplier",
    "flanges supplier",
    "gaskets",
    "stud bolts",
    "pressure vessel supplier",
    "wellhead equipment supplier",
    "hot tap saddles",
    "pneumatic stoppers",
    "oil field equipment procurement",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.name,
    title: `${site.name} — Oil & Gas Equipment Sourcing & Procurement`,
    description: site.description,
    url: site.domain,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: site.domain,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.legalName,
  url: site.domain,
  email: site.email,
  telephone: site.headOffice.phone.replace(/\s/g, ""),
  address: {
    "@type": "PostalAddress",
    streetAddress: site.headOffice.address,
    addressLocality: site.headOffice.city,
    addressCountry: "TR",
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
