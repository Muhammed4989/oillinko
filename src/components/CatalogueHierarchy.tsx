import Link from "next/link";
import {
  catalogue,
  catalogueRoot,
  catalogueSections,
  groupUrl,
  sectionUrl,
  typeUrl,
  type CatalogueGroup,
  type CatalogueType,
  type RequirementKind,
} from "@/lib/catalogue";

type Props = {
  activeKind?: RequirementKind;
  activeGroup?: CatalogueGroup;
  activeItem?: CatalogueType;
};

function sectionLabel(kind: RequirementKind) {
  if (kind === "Service") return "Services";
  if (kind === "Software") return "Software";
  return "Equipment";
}

export default function CatalogueHierarchy({ activeKind, activeGroup, activeItem }: Props) {
  return (
    <nav aria-label="Oil and gas catalogue hierarchy" className="rounded-lg border border-line bg-white">
      <Link href={catalogueRoot} aria-current={!activeKind ? "page" : undefined} className="block border-b border-line px-4 py-4 font-bold">
        Oil & Gas
      </Link>
      <div className="divide-y divide-line">
        {catalogueSections.map((section) => {
          const sectionActive = activeKind === section.kind;
          const sectionGroups = catalogue.filter((group) => group.types.some((item) => (item.kind ?? group.kind) === section.kind));
          return (
            <details key={section.slug} open={sectionActive} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-sm font-semibold marker:content-none">
                <Link
                  href={sectionUrl(section.kind)}
                  aria-current={sectionActive && !activeGroup ? "page" : undefined}
                  className={sectionActive && !activeGroup ? "text-accent" : "hover:text-accent"}
                >
                  {sectionLabel(section.kind)}
                </Link>
                <span aria-hidden="true" className="text-lg leading-none text-muted group-open:hidden">
                  +
                </span>
                <span aria-hidden="true" className="hidden text-lg leading-none text-muted group-open:inline">
                  -
                </span>
              </summary>
              <div className="border-t border-line py-2">
                {sectionGroups.map((group) => {
                  const groupActive = activeGroup?.slug === group.slug && sectionActive;
                  const items = group.types.filter((item) => (item.kind ?? group.kind) === section.kind);
                  return (
                    <details key={`${section.slug}-${group.slug}`} open={groupActive} className="group/category">
                      <summary className="flex cursor-pointer list-none items-start justify-between gap-3 px-4 py-2 pl-6 text-sm marker:content-none">
                        <Link
                          href={groupUrl(group, section.kind)}
                          aria-current={groupActive && !activeItem ? "page" : undefined}
                          className={groupActive && !activeItem ? "font-semibold text-accent" : "text-muted hover:text-accent"}
                        >
                          {group.name}
                        </Link>
                        <span aria-hidden="true" className="text-base leading-none text-muted group-open/category:hidden">
                          +
                        </span>
                        <span aria-hidden="true" className="hidden text-base leading-none text-muted group-open/category:inline">
                          -
                        </span>
                      </summary>
                      <ul className="ml-6 border-l border-line py-1">
                        {items.map((item) => {
                          const itemActive = activeItem?.id === item.id;
                          return (
                            <li key={item.id}>
                              <Link
                                href={typeUrl(group, item)}
                                aria-current={itemActive ? "page" : undefined}
                                className={`block px-4 py-2 text-sm leading-5 ${
                                  itemActive
                                    ? "border-l-4 border-accent bg-oil-800 font-semibold text-foreground"
                                    : "text-muted hover:bg-oil-800 hover:text-accent"
                                }`}
                              >
                                {item.name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </details>
                  );
                })}
              </div>
            </details>
          );
        })}
      </div>
    </nav>
  );
}
