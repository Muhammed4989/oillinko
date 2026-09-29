import type { ReactNode } from "react";

/** The page heading belongs in the content column, never in this strip. */
export default function BreadcrumbBar({ children }: { children: ReactNode }) {
  return (
    <div data-breadcrumb-strip className="border-b border-line bg-oil-800">
      <div className="mx-auto max-w-6xl px-4 py-5">{children}</div>
    </div>
  );
}
