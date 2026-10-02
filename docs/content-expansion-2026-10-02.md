# Catalogue and directory editorial expansion — 2 October 2026

This supplementary work expands existing equipment and service topics. The four daily blog articles were already published, so this change adds no article and no Google Business Profile post. It preserves existing taxonomy IDs and canonical paths.

Existing `information-N` section anchors are assigned before the additional sections are inserted. New guidance sections receive descriptive `guidance-` anchors, so links to earlier specification sections keep their original targets.

## Scope

`src/lib/catalogue-topic-guidance.ts` adds three topic-specific sections to each of these existing pages:

- Cathodic protection equipment: design/supply boundaries, net alloy versus assembly mass, traceability and commissioning responsibilities.
- Casing and production tubing: complete tubular and connection identification, accessories, tally and batch records.
- Wellheads and Christmas trees: assembly interfaces, actuation boundaries and release documentation.
- Completion packers and downhole valves: completion envelope, qualification scope, deployment accessories and handover.
- Inspection, NDT and material testing: examination objective and coverage, qualifications, acceptance responsibility and usable reporting.
- Calibration and instrument repair: calibration versus adjustment/repair, as-found/as-left evidence, uncertainty and decision rules.
- Piping spools and skid fabrication: drawing control, dimensional interfaces, fabrication/test boundaries and traceability.
- Structural steel and equipment supports: design responsibility, site interfaces, material/finish requirements and assembly evidence.

The text is original procurement guidance, not an operating procedure. Project limits, material suitability, qualification levels and acceptance criteria remain with the responsible engineering and project documents. No universal numerical limits or certifications are invented.

## Technical research basis

Primary sources reviewed on 2 October 2026:

- [DNV-RP-B401: Cathodic protection design](https://www.dnv.com/energy/standards-guidelines/dnv-rp-b401-cathodic-protection-design/): scope includes galvanic anode design, manufacture and installation. No proprietary numerical criteria reproduced.
- [API Monogram and APIQR updates](https://www.api.org/products-and-services/api-monogram-and-apiqr/latest-updates): distinguishes wellhead/tree, packer and subsurface safety-valve product specification families. The copy asks for the governing project edition instead of prescribing a potentially changing edition.
- [API standards plan](https://www.api.org/products-and-services/standards/standards-plan): product specification scope for casing and tubing. No connection interchangeability or sour-service acceptance inferred from a grade label.
- [ILAC guidance series](https://ilac.org/publications-and-resources/ilac-guidance-series/): guidance on statements of conformity/decision rules and calibration intervals.
- [OIML D 10 / ILAC G24:2022](https://www.oiml.org/en/files/pdf_d/d010-e22.pdf): calibration intervals and the distinction between calibration and adjustment. The copy avoids prescribing an automatic annual interval.
- [TWI distortion control](https://www.twi-global.com/what-we-do/services-and-support/technical-support/welding-engineering/distortion-control): welding configuration and sequence affect distortion; fabrication guidance asks for controlled acceptance and responsibilities rather than prescribing a welding procedure.

## Directory evidence

Five new reference records are restricted to `/oil-and-gas/companies`. The catalogue receives no company names, branded images, external manufacturer links or company-specific RFQ defaults. These references do not assert an Oillinko partnership, appointed dealership, reserved inventory or approved-vendor status.

| Record | Official source reviewed | Supported scope |
| --- | --- | --- |
| Vastas | https://www.vastas.com/company/at-a-glance/ | Türkiye-based valve manufacturing; pipeline focus; published valve and actuator families |
| Dikkan | https://dikkanvalve.com/en and https://dikkan.com/corporate/about-us.html | İzmir manufacturing; marine/water/industrial valves and foundry capabilities |
| Pekos | https://www.pekos.es/about and https://www.pekosvalves.com/ | Spain-based ball valves and automation |
| Ayvaz | https://www.ayvaz.com/en/ | İstanbul headquarters; expansion joints, metal hoses, valves, level and steam equipment |
| Cla-Val | https://www.cla-val.com/about-us | Costa Mesa headquarters; automatic control valves and published markets |

Headquarters is directory context, not a promise of the manufacturing origin of an offered item. Logos and standalone profiles were not added without suitable supporting assets and page-specific evidence.

## Verification and publication

Run the production build and existing catalogue, company, image-description, lint and type checks. Review desktop and mobile layouts. Record commit, deployment, production verification and the IndexNow receipt in the local publishing log after the actual result; a push alone is not publication success.
