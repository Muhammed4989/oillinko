import Image from "next/image";
import Link from "next/link";

export function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <section className="border-b border-line bg-oil-800">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">{subtitle}</p>
      </div>
    </section>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-10">
      {eyebrow && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
      {subtitle && <p className="mt-3 max-w-2xl text-muted">{subtitle}</p>}
    </div>
  );
}

export function CtaBand() {
  return (
    <section className="relative overflow-hidden border-t border-line bg-accent">
      <Image
        src="/images/refinery-night-unsplash.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-20"
      />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-14 text-center">
        <h2 className="text-2xl font-bold text-black sm:text-3xl">
          Have a Bill of Quantities ready?
        </h2>
        <p className="max-w-2xl text-black/80">
          Send us your BOQ or equipment list and get competitive offers from
          verified manufacturers — checked against the technical specifications
          your project requires.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/rfq"
            className="rounded bg-black px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90"
          >
            Request a Quote
          </Link>
          <Link
            href={`mailto:info@oillinko.com`}
            className="rounded border-2 border-black px-6 py-3 font-semibold text-black transition-colors hover:bg-black hover:text-white"
          >
            Email Us
          </Link>
        </div>
      </div>
    </section>
  );
}
