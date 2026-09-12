import type { Metadata } from "next";
import { PageHeader } from "@/components/ui";
import CatalogueExplorer from "@/components/CatalogueExplorer";
export const metadata: Metadata = {title:"Oil & Gas Equipment & Services Catalogue",description:"Browse oil and gas equipment and services by sector, product type and project need. Specify your required country of origin and send your RFQ to Oillinko.",alternates:{canonical:"/equipment"}};
export default function EquipmentPage(){return <><PageHeader title="Equipment & Services Catalogue" subtitle="Explore requirements across the oil and gas value chain. Choose your equipment, specify the manufacturing origin you require, and send your inquiry to Oillinko."/><CatalogueExplorer/></>;}
