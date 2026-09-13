"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { companyDirectoryPath, companyRoles, companySearchUrl, companySpecialties, readCompanyFilters, type CompanyFilters } from "@/lib/companies";

export default function CompanyFilterForm({ filters }: { filters: CompanyFilters }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const control = "mt-2 w-full min-w-0 rounded-md border border-line bg-white px-3 py-3 text-base text-foreground";
  return (
    <form action={companyDirectoryPath} method="get" aria-label="Company directory filters" aria-busy={pending}
      onSubmit={event => {
        event.preventDefault();
        const query = Object.fromEntries(new FormData(event.currentTarget)) as Record<string, string>;
        startTransition(() => router.push(companySearchUrl(readCompanyFilters(query))));
      }} className="grid gap-4 rounded-xl border border-line bg-oil-800 p-5 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_auto]">
      <label className="min-w-0 text-sm font-medium">Company, country or keyword
        <input className={control} type="search" name="search" maxLength={160} defaultValue={filters.search} placeholder="e.g. Sulzer, Japan, subsea" />
      </label>
      <label className="min-w-0 text-sm font-medium">Company type
        <select name="role" defaultValue={filters.role} className={control}>
          <option value="">All company types</option>
          {filters.role && !Object.hasOwn(companyRoles, filters.role) && <option value={filters.role}>Unknown company type</option>}
          {Object.entries(companyRoles).map(([id, name]) => <option key={id} value={id}>{name}</option>)}
        </select>
      </label>
      <label className="min-w-0 text-sm font-medium">Specialty
        <select name="specialty" defaultValue={filters.specialty} className={control}>
          <option value="">All specialties</option>
          {filters.specialty && !Object.hasOwn(companySpecialties, filters.specialty) && <option value={filters.specialty}>Unknown specialty</option>}
          {Object.entries(companySpecialties).map(([id, item]) => <option key={id} value={id}>{item.name}</option>)}
        </select>
      </label>
      <div className="flex items-end gap-4 lg:flex-col lg:justify-end lg:gap-2">
        <button type="submit" disabled={pending} className="rounded-md bg-accent px-5 py-3 font-semibold text-black hover:bg-accent-hi disabled:opacity-60">{pending ? "Searching…" : "Search companies"}</button>
        <Link href={companyDirectoryPath} className="py-2 text-sm font-semibold text-accent underline">Clear filters</Link>
      </div>
    </form>
  );
}
