"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { catalogue, catalogueFilterKeys, catalogueSearchUrl, groupUrl, readCatalogueFilters, typeUrl } from "@/lib/catalogue";

export default function CatalogueLegacyHash() {
 const pathname=usePathname();
 useEffect(()=>{
  const raw=window.location.hash.slice(1);if(!raw)return;
  if(raw.includes('=')&&!window.location.search) {
   const legacy=new URLSearchParams(raw);
   if(catalogueFilterKeys.some(key=>legacy.has(key)))window.location.replace(catalogueSearchUrl(readCatalogueFilters(Object.fromEntries(legacy))));
   return;
  }
  for(const group of catalogue) {
   const item=group.types.find(t=>t.id===raw);
   if(item&&["Equipment","Service","Software"].some(kind=>groupUrl(group,kind as "Equipment"|"Service"|"Software")===pathname)) {
    window.location.replace(typeUrl(group,item)+window.location.search);return;
   }
  }
 },[pathname]);
 return null;
}
