# SYINCO TECHNOLOGIES — EDWARDS VACUUM PRODUCT MASTER
## Official Edwards Source Batch Master Specification

**Generated:** 2026-09-06 22:40:48  
**OEM Manufacturer:** Edwards Vacuum (Burgess Hill, UK / Atlas Copco Group)  
**Total Canonical Product Families:** 68  
**Total Verified Product Models:** 221  
**Top-Level SYINCO Domain:** `vacuum-technology` (Vacuum Technology & Abatement)  
**Data Provenance:** Strict OEM Document Traceability (`verified`)  

---

### Architectural Policy & Scope Boundary
1. **Edwards Source Batch Master:** This master represents the definitive extraction of the 84 official source documents supplied. It is intentionally designated as the *Edwards source batch master* and does not claim global completeness beyond the supplied source batch.
2. **OEM Taxonomy vs SYINCO Navigation:** Edwards' native OEM categories (`Vacuum Pumps`, `Leak Detection`, `Measurement & Control`, `Valves`, `Accessories`) are preserved in `oemTaxonomy`. In SYINCO's customer-facing structure, all products reside under the single domain `Vacuum Technology & Abatement` (`vacuum-technology`) using dedicated subcategories.
3. **Single Canonical Product Identity:** Multi-document references are resolved to single canonical families. The nXDS series is represented by the single canonical record `edwards-nxds-series`.
4. **Isolation of OEM Evidence vs SYINCO Commercial Claims:** Technical specifications, models, flanges, and performance parameters are strictly derived from OEM literature. SYINCO commercial terms (channel partner status, INR billing, customs clearance, warranty, local Indian field service) are segregated under `syincoCommercialStatus`.
5. **Strict URL Architecture:** Every canonical family defines `canonicalSlug`, `canonicalUrl` (`/products/vacuum-technology/${canonicalSlug}`), and `indexabilityStatus: "indexable"`.

---

## Product Families Summary by Category

| Canonical Family ID | Official Product Family Name | OEM Main Category | SYINCO Subcategory | Models Count | RFQ Channel |
| :--- | :--- | :--- | :--- | :--- | :--- |
| [`edwards-cdx-series`](#edwards-cdx-series) | CDX Series Dry Screw Vacuum Pumps | Vacuum Pumps | Chemical Dry Screw Pumps | 2 | `capital-equipment` |
| [`edwards-edp-series`](#edwards-edp-series) | EDP Series Chemical Dry Claw Pumps | Vacuum Pumps | Chemical Dry Claw Pumps | 4 | `capital-equipment` |
| [`edwards-eds-chemical-series`](#edwards-eds-chemical-series) | EDS-C Series Chemical Dry Screw Vacuum Pumps | Vacuum Pumps | Chemical Dry Screw Pumps | 2 | `capital-equipment` |
| [`edwards-xdd1-series`](#edwards-xdd1-series) | XDD1 Series Diaphragm Vacuum Pumps | Vacuum Pumps | Laboratory Diaphragm Pumps | 1 | `standard-component` |
| [`edwards-d-lab-series`](#edwards-d-lab-series) | D-LAB Series Chemical Diaphragm Pumps | Vacuum Pumps | Chemical Diaphragm Pumps | 4 | `standard-component` |
| [`edwards-gv-claw-series`](#edwards-gv-claw-series) | GV Series Dry Claw Vacuum Pumps | Vacuum Pumps | Industrial Dry Claw Pumps | 5 | `capital-equipment` |
| [`edwards-nedc-edc-series`](#edwards-nedc-edc-series) | nEDC / EDC Series Monoclaw Vacuum Pumps | Vacuum Pumps | Industrial Dry Claw Pumps | 6 | `standard-component` |
| [`edwards-eds-industrial-series`](#edwards-eds-industrial-series) | EDS Series Industrial Dry Screw Vacuum Pumps | Vacuum Pumps | Industrial Dry Screw Pumps | 2 | `capital-equipment` |
| [`edwards-idx-series`](#edwards-idx-series) | IDX Series Industrial Dry Screw Vacuum Pumps | Vacuum Pumps | Heavy Duty Dry Screw Pumps | 2 | `capital-equipment` |
| [`edwards-gxs-series`](#edwards-gxs-series) | GXS Series Smart Dry Screw Vacuum Pumps & Combinations | Vacuum Pumps | Intelligent Dry Screw Pumps | 10 | `capital-equipment` |
| [`edwards-exs-series`](#edwards-exs-series) | EXS Series Dry Screw Vacuum Pumps | Vacuum Pumps | Industrial Dry Screw Pumps | 4 | `capital-equipment` |
| [`edwards-gv-screw-series`](#edwards-gv-screw-series) | GV Series Industrial Dry Screw Pumps | Vacuum Pumps | Industrial Dry Screw Pumps | 4 | `capital-equipment` |
| [`edwards-nxds-series`](#edwards-nxds-series) | Edwards nXDS Series Dry Scroll Vacuum Pumps | Vacuum Pumps | Dry Scroll Vacuum Pumps | 12 | `capital-equipment` |
| [`edwards-xds-series`](#edwards-xds-series) | XDS Series Dry Scroll Vacuum Pumps | Vacuum Pumps | Dry Scroll Vacuum Pumps | 3 | `standard-component` |
| [`edwards-mxds3-series`](#edwards-mxds3-series) | mXDS3 Series Miniature Dry Scroll Vacuum Pumps | Vacuum Pumps | Miniature Dry Scroll Pumps | 2 | `standard-component` |
| [`edwards-xds35i-series`](#edwards-xds35i-series) | XDS35i High-Capacity Dry Scroll Vacuum Pumps | Vacuum Pumps | Dry Scroll Vacuum Pumps | 2 | `capital-equipment` |
| [`edwards-edo-series`](#edwards-edo-series) | EDO 65-100 Dry Scroll Vacuum Pumps | Vacuum Pumps | Industrial Dry Scroll Pumps | 2 | `capital-equipment` |
| [`edwards-ecal1-series`](#edwards-ecal1-series) | ECAL1 Vacuum Gauge Calibration Systems | Vacuum Pumps | Calibration Vacuum Systems | 1 | `capital-equipment` |
| [`edwards-t-station-300`](#edwards-t-station-300) | T-Station 300 Turbomolecular Pumping Stations | Vacuum Pumps | Turbomolecular Pumping Stations | 2 | `capital-equipment` |
| [`edwards-t-station-85`](#edwards-t-station-85) | T-Station 85 Turbomolecular Pumping Stations | Vacuum Pumps | Turbomolecular Pumping Stations | 3 | `capital-equipment` |
| [`edwards-tic-pumping-station`](#edwards-tic-pumping-station) | TIC Turbomolecular Cart Pumping Systems | Vacuum Pumps | Mobile High Vacuum Stations | 2 | `capital-equipment` |
| [`edwards-next-tic-cart-xl`](#edwards-next-tic-cart-xl) | nEXT TIC CART XL Mobile High Vacuum Systems | Vacuum Pumps | Mobile High Vacuum Stations | 1 | `capital-equipment` |
| [`edwards-stokes-6-booster`](#edwards-stokes-6-booster) | Stokes 6" Mechanical Booster Pumps | Vacuum Pumps | Roots Vacuum Boosters | 2 | `capital-equipment` |
| [`edwards-gmb-series`](#edwards-gmb-series) | GMB Series High-Capacity Roots Vacuum Boosters | Vacuum Pumps | Roots Vacuum Boosters | 2 | `capital-equipment` |
| [`edwards-eh-series`](#edwards-eh-series) | EH Series Hydrokinetic Drive Mechanical Boosters | Vacuum Pumps | Roots Vacuum Boosters | 5 | `capital-equipment` |
| [`edwards-hv-series`](#edwards-hv-series) | HV Series High-Capacity Mechanical Boosters | Vacuum Pumps | Roots Vacuum Boosters | 3 | `capital-equipment` |
| [`edwards-stokes-mechanical-booster`](#edwards-stokes-mechanical-booster) | Stokes Mechanical Booster Series | Vacuum Pumps | Roots Vacuum Boosters | 3 | `capital-equipment` |
| [`edwards-nxri-series`](#edwards-nxri-series) | nXRi Series Compact Multistage Roots Dry Vacuum Pumps | Vacuum Pumps | Compact Multistage Roots Pumps | 3 | `capital-equipment` |
| [`edwards-nxli-series`](#edwards-nxli-series) | nXLi Series High-Performance Multistage Roots Dry Pumps | Vacuum Pumps | High-Capacity Multistage Roots Pumps | 4 | `capital-equipment` |
| [`edwards-nxqi-series`](#edwards-nxqi-series) | nXQi Series Dry Multistage Roots Pumps | Vacuum Pumps | Compact Multistage Roots Pumps | 1 | `standard-component` |
| [`edwards-eosi-series`](#edwards-eosi-series) | EOSi Series Variable Speed Oil-Sealed Screw Vacuum Pumps | Vacuum Pumps | Oil-Sealed Screw Vacuum Pumps | 6 | `capital-equipment` |
| [`edwards-stokes-microvac-series`](#edwards-stokes-microvac-series) | Stokes Microvac Rotary Piston Vacuum Pumps | Vacuum Pumps | Rotary Piston Pumps | 4 | `capital-equipment` |
| [`edwards-nrvi-series`](#edwards-nrvi-series) | nRVi Series Intelligent Rotary Vane Pumps | Vacuum Pumps | Oil-Sealed Rotary Vane Pumps | 3 | `standard-component` |
| [`edwards-e2s-series`](#edwards-e2s-series) | E2S Series Two-Stage Rotary Vane Vacuum Pumps | Vacuum Pumps | Oil-Sealed Rotary Vane Pumps | 3 | `standard-component` |
| [`edwards-nes-ex-series`](#edwards-nes-ex-series) | nES EX Series Explosion-Proof Rotary Vane Pumps | Vacuum Pumps | Single-Stage Rotary Vane Pumps | 8 | `capital-equipment` |
| [`edwards-e2m-small-series`](#edwards-e2m-small-series) | E2M0.7 / E2M1.5 / E2M2.5 Compact Rotary Vane Pumps | Vacuum Pumps | Compact Rotary Vane Pumps | 3 | `standard-component` |
| [`edwards-nes-series`](#edwards-nes-series) | nES Series Single-Stage Rotary Vane Vacuum Pumps | Vacuum Pumps | Single-Stage Rotary Vane Pumps | 10 | `capital-equipment` |
| [`edwards-rv-series`](#edwards-rv-series) | Edwards RV Series Rotary Vane Vacuum Pumps | Vacuum Pumps | Laboratory Rotary Vane Pumps | 4 | `standard-component` |
| [`edwards-small-em-series`](#edwards-small-em-series) | Small EM Series Two-Stage Rotary Vane Pumps | Vacuum Pumps | Industrial Rotary Vane Pumps | 4 | `standard-component` |
| [`edwards-eld500`](#edwards-eld500) | ELD500 Precision Helium & Hydrogen Leak Detectors | Leak Detection | Precision Leak Detectors | 3 | `capital-equipment` |
| [`edwards-eld30`](#edwards-eld30) | ELD30 Industrial Helium Leak Detectors | Leak Detection | Industrial Leak Detectors | 2 | `capital-equipment` |
| [`edwards-eld4000`](#edwards-eld4000) | ELD4000 High-Throughput Helium Leak Detectors | Leak Detection | High-Throughput Leak Detectors | 1 | `capital-equipment` |
| [`edwards-gascheck-g4`](#edwards-gascheck-g4) | GasCheck G4 Handheld Gas Leak Detectors | Leak Detection | Handheld Gas Leak Detectors | 4 | `standard-component` |
| [`edwards-barocel-7000`](#edwards-barocel-7000) | BAROCEL 7000 Series High-Accuracy Capacitance Manometers | Measurement & Control | Capacitance Manometers | 3 | `standard-component` |
| [`edwards-asg2`](#edwards-asg2) | ASG2 Active Strain Gauges | Measurement & Control | Strain Gauges | 2 | `standard-component` |
| [`edwards-aigx`](#edwards-aigx) | AIGX Active Ion Gauges | Measurement & Control | Hot Cathode Ion Gauges | 2 | `standard-component` |
| [`edwards-wrh`](#edwards-wrh) | WRH Active Wide Range Hot Cathode Gauges | Measurement & Control | Wide Range Vacuum Gauges | 1 | `standard-component` |
| [`edwards-passive-gauges`](#edwards-passive-gauges) | Passive Vacuum Gauges & Sensor Heads | Measurement & Control | Passive Vacuum Sensors | 4 | `standard-component` |
| [`edwards-apgx-h`](#edwards-apgx-h) | APGX-H Active Linear Convection Gauges | Measurement & Control | Convection Pirani Gauges | 1 | `standard-component` |
| [`edwards-aim200`](#edwards-aim200) | AIM200 Active Inverted Magnetron Gauges | Measurement & Control | Cold Cathode Gauges | 2 | `standard-component` |
| [`edwards-apg200`](#edwards-apg200) | APG200 Active Pirani Vacuum Gauges | Measurement & Control | Pirani Vacuum Gauges | 2 | `standard-component` |
| [`edwards-wrg200`](#edwards-wrg200) | WRG200 Active Wide Range Vacuum Gauges | Measurement & Control | Wide Range Vacuum Gauges | 2 | `standard-component` |
| [`edwards-p3`](#edwards-p3) | P3 Handheld Vacuum Measuring Systems | Measurement & Control | Handheld Vacuum Gauges | 1 | `standard-component` |
| [`edwards-vs16k-is16k`](#edwards-vs16k-is16k) | VS16K & IS16K Mechanical Vacuum Switches | Measurement & Control | Vacuum Switches | 2 | `standard-component` |
| [`edwards-cg16k`](#edwards-cg16k) | CG16K Capsule Dial Vacuum Gauges | Measurement & Control | Dial Gauges | 3 | `standard-component` |
| [`edwards-p4-p5`](#edwards-p4-p5) | P4 & P5 Bluetooth LE Handheld Measuring Systems | Measurement & Control | Wireless Handheld Gauges | 2 | `standard-component` |
| [`edwards-tic-controller`](#edwards-tic-controller) | TIC Turbo & Instrument Controllers | Measurement & Control | Vacuum Controllers | 4 | `standard-component` |
| [`edwards-adc`](#edwards-adc) | ADC Active Digital Controllers | Measurement & Control | Display Controllers | 2 | `standard-component` |
| [`edwards-tag`](#edwards-tag) | TAG Turbo & Active Gauge Controllers | Measurement & Control | Vacuum Controllers | 1 | `standard-component` |
| [`edwards-ejgo`](#edwards-ejgo) | EJGO & EJGO MC Vacuum Central System Controllers | Measurement & Control | Industrial Central Controllers | 2 | `capital-equipment` |
| [`edwards-acoustic-enclosures`](#edwards-acoustic-enclosures) | Edwards Acoustic Sound Enclosures | Accessories | Vacuum Pump Sound Enclosures | 3 | `spare-consumable` |
| [`edwards-inlet-filters`](#edwards-inlet-filters) | Edwards Industrial Vacuum Inlet Dust & Liquid Filters | Accessories | Vacuum Inlet Filters & Traps | 4 | `spare-consumable` |
| [`edwards-eld500-trolley`](#edwards-eld500-trolley) | ELD500 Transport Trolley | Accessories | Leak Detector Transport Accessories | 1 | `spare-consumable` |
| [`edwards-bgv-series`](#edwards-bgv-series) | BGV Series Stainless Steel Gate Valves | Valves | High Vacuum Gate Valves | 9 | `standard-component` |
| [`edwards-lcpvek`](#edwards-lcpvek) | LCPVEK Bellows-Sealed Vacuum Valves | Valves | Electromagnetic & Pneumatic Valves | 3 | `standard-component` |
| [`edwards-speedivalve`](#edwards-speedivalve) | Speedivalve Diaphragm Isolation Valves | Valves | Manual Diaphragm Valves | 4 | `standard-component` |
| [`edwards-viv`](#edwards-viv) | VIV Vacuum Isolation Valves | Valves | Fast Vacuum Isolation Valves | 4 | `standard-component` |
| [`edwards-prv`](#edwards-prv) | Pressure Relief Valves | Valves | Vacuum Chamber Relief Valves | 3 | `standard-component` |

---

## Detailed Canonical Product Family Records

<a id="edwards-cdx-series"></a>
### CDX Series Dry Screw Vacuum Pumps
**Canonical ID:** `edwards-cdx-series`  
**Canonical URL:** `/products/vacuum-technology/edwards-cdx-series` (`indexable`)  
**OEM Taxonomy:** Edwards Vacuum → Vacuum Pumps → Chemical Dry Pumps  
**SYINCO Taxonomy:** Vacuum Technology & Abatement (`vacuum-technology`) → Chemical Dry Screw Pumps (`chemical-dry-pumps`)  
**Tagline:** *High-Reliability Dry Screw Pumping for Hostile Chemical and Pharmaceutical Vapors*  

Rugged double-ended dry screw vacuum pump engineered for demanding chemical and fine chemical processing, featuring temperature control and robust liquid and particle handling.

#### Verified Models
`CDX1000`, `CDX1300`

#### Key Technical Specifications
| Model | Parameter | Value | Unit | Source Reference | Footnote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `CDX1000` | Peak Pumping Speed | **900** | m3/h | Page 4, Technical Data | At 50 Hz |
| `CDX1000` | Ultimate Pressure | **0.005** | mbar | Page 4, Technical Data | Without gas ballast |
| `CDX1000` | Motor Power | **22** | kW | Page 4, Technical Data | 400V 50Hz |
| `CDX1300` | Peak Pumping Speed | **1200** | m3/h | Page 4, Technical Data | At 50 Hz |
| `CDX1300` | Ultimate Pressure | **0.005** | mbar | Page 4, Technical Data | Without gas ballast |
| `CDX1300` | Motor Power | **30** | kW | Page 4, Technical Data | 400V 50Hz |

#### Vacuum Connections & Target Applications
- **Inlet Flange:** DN160 PN10 / ANSI 6"
- **Exhaust / Outlet Flange:** DN100 PN10 / ANSI 4"
- **Target Applications:** Chemical processing, API active pharmaceutical synthesis, Distillation and solvent recovery, Drying and degassing

#### Source Evidence Documents
- `EDW-DOC-001`: **CDX 1000-1300 Dry Screw Vacuum Pumps - Brochure** (Pub No: `3602`, Type: `Brochure`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/chemical-dry-pumps/3602120401-CDX1000-1300-EN-Web.pdf)

#### SYINCO Commercial Status
- **RFQ Channel:** `capital-equipment` | **Action:** `Request Technical Quote`
- **Channel Partner Status:** `authorized-channel-partner` | **Stock Status:** `import-on-demand`
- **Local Support:** factory-trained-engineers | **Warranty:** 12-month standard OEM warranty
- **Commercial Terms:** INR domestic billing, customs clearance, and local service support in India

---

<a id="edwards-edp-series"></a>
### EDP Series Chemical Dry Claw Pumps
**Canonical ID:** `edwards-edp-series`  
**Canonical URL:** `/products/vacuum-technology/edwards-edp-series` (`indexable`)  
**OEM Taxonomy:** Edwards Vacuum → Vacuum Pumps → Chemical Dry Pumps  
**SYINCO Taxonomy:** Vacuum Technology & Abatement (`vacuum-technology`) → Chemical Dry Claw Pumps (`chemical-dry-pumps`)  
**Tagline:** *Industry Standard Dry Vacuum Pumps for Chemical, Pharmaceutical, and Petrochemical Plants*  

Pioneering dry claw vacuum pumps engineered specifically for harsh corrosive and condensable chemical process gas loads, operating under automated temperature control.

#### Verified Models
`EDP60`, `EDP100`, `EDP160`, `EDP250`

#### Key Technical Specifications
| Model | Parameter | Value | Unit | Source Reference | Footnote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `EDP60` | Displacement | **80** | m3/h | Page 2, Technical Data | 50 Hz |
| `EDP60` | Ultimate Pressure | **0.1** | mbar | Page 2, Technical Data | Full gas ballast |
| `EDP100` | Displacement | **135** | m3/h | Page 2, Technical Data | 50 Hz |
| `EDP100` | Ultimate Pressure | **0.1** | mbar | Page 2, Technical Data | Full gas ballast |
| `EDP160` | Displacement | **220** | m3/h | Page 2, Technical Data | 50 Hz |
| `EDP160` | Ultimate Pressure | **0.1** | mbar | Page 2, Technical Data | Full gas ballast |
| `EDP250` | Displacement | **330** | m3/h | Page 2, Technical Data | 50 Hz |
| `EDP250` | Ultimate Pressure | **0.1** | mbar | Page 2, Technical Data | Full gas ballast |

#### Vacuum Connections & Target Applications
- **Inlet Flange:** DN50 PN10 / ANSI 2"
- **Exhaust / Outlet Flange:** DN40 PN10 / ANSI 1.5"
- **Target Applications:** Aggressive chemical distillation, Solvent extraction, Reactor venting, Corrosive gas pumping

#### Source Evidence Documents
- `EDW-DOC-002`: **EDP Chemical Dry Vacuum Pump - Datasheet** (Pub No: `3602`, Type: `Datasheet`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/chemical-dry-pumps/edwards-EDP-dry-pumps-data-sheet.pdf)
- `EDW-DOC-003`: **EDP Chemical Dry Pump - Brochure** (Pub No: `3602`, Type: `Brochure`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/chemical-dry-pumps/3602%20119%203%2001_EDP%20Chemical%20Brochure_Web.pdf)

#### SYINCO Commercial Status
- **RFQ Channel:** `capital-equipment` | **Action:** `Request Technical Quote`
- **Channel Partner Status:** `authorized-channel-partner` | **Stock Status:** `import-on-demand`
- **Local Support:** factory-trained-engineers | **Warranty:** 12-month standard OEM warranty
- **Commercial Terms:** INR domestic billing, customs clearance, and local service support in India

---

<a id="edwards-eds-chemical-series"></a>
### EDS-C Series Chemical Dry Screw Vacuum Pumps
**Canonical ID:** `edwards-eds-chemical-series`  
**Canonical URL:** `/products/vacuum-technology/edwards-eds-chemical-series` (`indexable`)  
**OEM Taxonomy:** Edwards Vacuum → Vacuum Pumps → Chemical Dry Pumps  
**SYINCO Taxonomy:** Vacuum Technology & Abatement (`vacuum-technology`) → Chemical Dry Screw Pumps (`chemical-dry-pumps`)  
**Tagline:** *High-Performance Dry Screw Vacuum Technology for Harsh Chemical Process Environments*  

Advanced variable pitch dry screw vacuum pump offering unmatched liquid and particle tolerance, certified for hazardous zone operation.

#### Verified Models
`EDS 200C`, `EDS 300C`

#### Key Technical Specifications
| Model | Parameter | Value | Unit | Source Reference | Footnote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `EDS 200C` | Peak Pumping Speed | **200** | m3/h | Page 6, Specifications | 50 Hz |
| `EDS 200C` | Ultimate Pressure | **0.01** | mbar | Page 6, Specifications | Permanent gas ballast |
| `EDS 300C` | Peak Pumping Speed | **300** | m3/h | Page 6, Specifications | 50 Hz |
| `EDS 300C` | Ultimate Pressure | **0.01** | mbar | Page 6, Specifications | Permanent gas ballast |

#### Vacuum Connections & Target Applications
- **Inlet Flange:** ISO-K 63 / ANSI 2"
- **Exhaust / Outlet Flange:** DN40 PN10
- **Target Applications:** Chemical production, Specialty chemical drying, Solvent stripping, Vacuum crystallization

#### Source Evidence Documents
- `EDW-DOC-004`: **EDS Chemical Dry Screw Vacuum Pumps - Brochure** (Pub No: `3602`, Type: `Brochure`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/chemical-dry-pumps/EDS-chemical-dry-screw-vacuum-pumps-brochure.pdf)

#### SYINCO Commercial Status
- **RFQ Channel:** `capital-equipment` | **Action:** `Request Technical Quote`
- **Channel Partner Status:** `authorized-channel-partner` | **Stock Status:** `import-on-demand`
- **Local Support:** factory-trained-engineers | **Warranty:** 12-month standard OEM warranty
- **Commercial Terms:** INR domestic billing, customs clearance, and local service support in India

---

<a id="edwards-xdd1-series"></a>
### XDD1 Series Diaphragm Vacuum Pumps
**Canonical ID:** `edwards-xdd1-series`  
**Canonical URL:** `/products/vacuum-technology/edwards-xdd1-series` (`indexable`)  
**OEM Taxonomy:** Edwards Vacuum → Vacuum Pumps → Diaphragm Pumps  
**SYINCO Taxonomy:** Vacuum Technology & Abatement (`vacuum-technology`) → Laboratory Diaphragm Pumps (`diaphragm-pumps`)  
**Tagline:** *Compact, Oil-Free Backing Pump for Portable Analytical and Turbomolecular Applications*  

Ultra-compact diaphragm pump designed specifically as an oil-free backing pump for small turbomolecular pumping stations and portable benchtop analytical instruments.

#### Verified Models
`XDD1`

#### Key Technical Specifications
| Model | Parameter | Value | Unit | Source Reference | Footnote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `XDD1` | Pumping Speed | **1.7** | m3/h | Page 2, Technical Data | 50 Hz |
| `XDD1` | Ultimate Vacuum | **2.0** | mbar | Page 2, Technical Data | Total pressure |
| `XDD1` | Motor Power | **180** | W | Page 2, Technical Data | Single phase 230V |
| `XDD1` | Weight | **9.5** | kg | Page 2, Technical Data | Dry unit |

#### Vacuum Connections & Target Applications
- **Inlet Flange:** NW16
- **Exhaust / Outlet Flange:** NW16 / nozzle
- **Target Applications:** Turbopump backing, Spectroscopy, Laboratory evacuation, Helium leak detector backing

#### Source Evidence Documents
- `EDW-DOC-005`: **XDD1 Diaphragm Vacuum Pump - Datasheet** (Pub No: `3601 0472 01`, Type: `Datasheet`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/diaphragm-pumps/3601-0472-01-XDD1-Datasheet.pdf)

#### SYINCO Commercial Status
- **RFQ Channel:** `standard-component` | **Action:** `Request Quote`
- **Channel Partner Status:** `authorized-channel-partner` | **Stock Status:** `import-on-demand`
- **Local Support:** factory-trained-engineers | **Warranty:** 12-month standard OEM warranty
- **Commercial Terms:** INR domestic billing, customs clearance, and local service support in India

---

<a id="edwards-d-lab-series"></a>
### D-LAB Series Chemical Diaphragm Pumps
**Canonical ID:** `edwards-d-lab-series`  
**Canonical URL:** `/products/vacuum-technology/edwards-d-lab-series` (`indexable`)  
**OEM Taxonomy:** Edwards Vacuum → Vacuum Pumps → Diaphragm Pumps  
**SYINCO Taxonomy:** Vacuum Technology & Abatement (`vacuum-technology`) → Chemical Diaphragm Pumps (`diaphragm-pumps`)  
**Tagline:** *Corrosion-Resistant PTFE Diaphragm Pumps for Laboratory Chemical Applications*  

Robust laboratory vacuum pump utilizing pure PTFE heads and diaphragms, ideal for rotary evaporators, vacuum filtration, and solvent degassing.

#### Verified Models
`D-LAB SP20`, `D-LAB MP20`, `D-LAB SP40`, `D-LAB MP40`

#### Key Technical Specifications
| Model | Parameter | Value | Unit | Source Reference | Footnote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `D-LAB SP20` | Pumping Speed | **20** | L/min | Page 2, Performance | Single stage |
| `D-LAB SP20` | Ultimate Vacuum | **100** | mbar | Page 2, Performance | Atmospheric air |
| `D-LAB MP20` | Pumping Speed | **20** | L/min | Page 2, Performance | Multi stage |
| `D-LAB MP20` | Ultimate Vacuum | **8** | mbar | Page 2, Performance | Atmospheric air |
| `D-LAB SP40` | Pumping Speed | **40** | L/min | Page 2, Performance | Single stage |
| `D-LAB SP40` | Ultimate Vacuum | **100** | mbar | Page 2, Performance | Atmospheric air |
| `D-LAB MP40` | Pumping Speed | **40** | L/min | Page 2, Performance | Multi stage |
| `D-LAB MP40` | Ultimate Vacuum | **8** | mbar | Page 2, Performance | Atmospheric air |

#### Vacuum Connections & Target Applications
- **Inlet Flange:** 10 mm hose nozzle
- **Exhaust / Outlet Flange:** 10 mm hose nozzle
- **Target Applications:** Rotary evaporation, Vacuum drying ovens, Centrifugal concentrators, Solid phase extraction

#### Source Evidence Documents
- `EDW-DOC-006`: **D-Lab Diaphragm Vacuum Pump - Datasheet** (Pub No: `3601 0915 01`, Type: `Datasheet`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/diaphragm-pumps/3601-0915-01-D-LAB-Datasheet.pdf)

#### SYINCO Commercial Status
- **RFQ Channel:** `standard-component` | **Action:** `Request Quote`
- **Channel Partner Status:** `authorized-channel-partner` | **Stock Status:** `import-on-demand`
- **Local Support:** factory-trained-engineers | **Warranty:** 12-month standard OEM warranty
- **Commercial Terms:** INR domestic billing, customs clearance, and local service support in India

---

<a id="edwards-gv-claw-series"></a>
### GV Series Dry Claw Vacuum Pumps
**Canonical ID:** `edwards-gv-claw-series`  
**Canonical URL:** `/products/vacuum-technology/edwards-gv-claw-series` (`indexable`)  
**OEM Taxonomy:** Edwards Vacuum → Vacuum Pumps → Dry Claw Pumps  
**SYINCO Taxonomy:** Vacuum Technology & Abatement (`vacuum-technology`) → Industrial Dry Claw Pumps (`dry-claw-pumps`)  
**Tagline:** *Energy-Efficient, Contact-Free Dry Claw Technology for Industrial Rough Vacuum*  

Contact-free, oil-free industrial claw vacuum pump delivering high volumetric efficiency with low total cost of ownership and minimal maintenance.

#### Verified Models
`GV 60`, `GV 100`, `GV 150`, `GV 250`, `GV 400`

#### Key Technical Specifications
| Model | Parameter | Value | Unit | Source Reference | Footnote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `GV 60` | Displacement | **65** | m3/h | Page 4, Technical Data | 50 Hz |
| `GV 60` | Ultimate Pressure | **150** | mbar | Page 4, Technical Data | Continuous operation |
| `GV 100` | Displacement | **100** | m3/h | Page 4, Technical Data | 50 Hz |
| `GV 100` | Ultimate Pressure | **150** | mbar | Page 4, Technical Data | Continuous operation |
| `GV 150` | Displacement | **150** | m3/h | Page 4, Technical Data | 50 Hz |
| `GV 150` | Ultimate Pressure | **150** | mbar | Page 4, Technical Data | Continuous operation |
| `GV 250` | Displacement | **250** | m3/h | Page 4, Technical Data | 50 Hz |
| `GV 250` | Ultimate Pressure | **150** | mbar | Page 4, Technical Data | Continuous operation |
| `GV 400` | Displacement | **400** | m3/h | Page 4, Technical Data | 50 Hz |
| `GV 400` | Ultimate Pressure | **150** | mbar | Page 4, Technical Data | Continuous operation |

#### Vacuum Connections & Target Applications
- **Inlet Flange:** G 1.25" to G 3"
- **Exhaust / Outlet Flange:** G 1.25" to G 3"
- **Target Applications:** Packaging machinery, Pneumatic conveying, Woodworking CNC tables, Thermoforming

#### Source Evidence Documents
- `EDW-DOC-007`: **GV Series Dry Vacuum Pumps - Brochure** (Pub No: `3602`, Type: `Brochure`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/dry-claw-pumps/3602111901-GV-Series-Dry-Claw-Pumps-EN-Web.pdf)

#### SYINCO Commercial Status
- **RFQ Channel:** `capital-equipment` | **Action:** `Request Technical Quote`
- **Channel Partner Status:** `authorized-channel-partner` | **Stock Status:** `import-on-demand`
- **Local Support:** factory-trained-engineers | **Warranty:** 12-month standard OEM warranty
- **Commercial Terms:** INR domestic billing, customs clearance, and local service support in India

---

<a id="edwards-nedc-edc-series"></a>
### nEDC / EDC Series Monoclaw Vacuum Pumps
**Canonical ID:** `edwards-nedc-edc-series`  
**Canonical URL:** `/products/vacuum-technology/edwards-nedc-edc-series` (`indexable`)  
**OEM Taxonomy:** Edwards Vacuum → Vacuum Pumps → Dry Claw Pumps  
**SYINCO Taxonomy:** Vacuum Technology & Abatement (`vacuum-technology`) → Industrial Dry Claw Pumps (`dry-claw-pumps`)  
**Tagline:** *Next-Generation High-Efficiency Monoclaw Dry Vacuum Pumps*  

Innovative dry claw pump utilizing modular composite claws and variable speed drive technology for optimized energy savings in industrial automation.

#### Verified Models
`nEDC 65`, `nEDC 150`, `nEDC 300`, `EDC 65`, `EDC 150`, `EDC 300`

#### Key Technical Specifications
| Model | Parameter | Value | Unit | Source Reference | Footnote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `nEDC 65` | Nominal Pumping Speed | **65** | m3/h | Page 6, Technical Specifications | Variable speed max |
| `nEDC 65` | Ultimate Pressure | **50** | mbar | Page 6, Technical Specifications | Continuous |
| `nEDC 150` | Nominal Pumping Speed | **150** | m3/h | Page 6, Technical Specifications | Variable speed max |
| `nEDC 150` | Ultimate Pressure | **50** | mbar | Page 6, Technical Specifications | Continuous |
| `nEDC 300` | Nominal Pumping Speed | **300** | m3/h | Page 6, Technical Specifications | Variable speed max |
| `nEDC 300` | Ultimate Pressure | **50** | mbar | Page 6, Technical Specifications | Continuous |
| `EDC 65` | Nominal Pumping Speed | **65** | m3/h | Page 6, Technical Specifications | Fixed speed 50Hz |
| `EDC 150` | Nominal Pumping Speed | **150** | m3/h | Page 6, Technical Specifications | Fixed speed 50Hz |
| `EDC 300` | Nominal Pumping Speed | **300** | m3/h | Page 6, Technical Specifications | Fixed speed 50Hz |

#### Vacuum Connections & Target Applications
- **Inlet Flange:** G 1.25" to G 2"
- **Exhaust / Outlet Flange:** G 1.25" to G 2"
- **Target Applications:** Central industrial vacuum systems, Pick and place robotics, Food and beverage packaging, Printing and paper handling

#### Source Evidence Documents
- `EDW-DOC-008`: **nEDC & EDC Dry Claw Vacuum Pumps - Brochure** (Pub No: `3602`, Type: `Brochure`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/dry-claw-pumps/3602107401-nedc-edc-combined-en-web.pdf)

#### SYINCO Commercial Status
- **RFQ Channel:** `standard-component` | **Action:** `Request Quote`
- **Channel Partner Status:** `authorized-channel-partner` | **Stock Status:** `import-on-demand`
- **Local Support:** factory-trained-engineers | **Warranty:** 12-month standard OEM warranty
- **Commercial Terms:** INR domestic billing, customs clearance, and local service support in India

---

<a id="edwards-eds-industrial-series"></a>
### EDS Series Industrial Dry Screw Vacuum Pumps
**Canonical ID:** `edwards-eds-industrial-series`  
**Canonical URL:** `/products/vacuum-technology/edwards-eds-industrial-series` (`indexable`)  
**OEM Taxonomy:** Edwards Vacuum → Vacuum Pumps → Dry Screw Pumps  
**SYINCO Taxonomy:** Vacuum Technology & Abatement (`vacuum-technology`) → Industrial Dry Screw Pumps (`dry-screw-pumps`)  
**Tagline:** *Plug-and-Play Industrial Dry Screw Vacuum Pump for Harsh Rough Processing*  

Rugged, variable pitch dry screw vacuum pump designed for simplicity, robustness, and superior water vapor handling in industrial process environments.

#### Verified Models
`EDS 200`, `EDS 300`

#### Key Technical Specifications
| Model | Parameter | Value | Unit | Source Reference | Footnote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `EDS 200` | Peak Pumping Speed | **200** | m3/h | Page 4, Technical Specifications | 50 Hz |
| `EDS 200` | Ultimate Pressure | **0.01** | mbar | Page 4, Technical Specifications | Without ballast |
| `EDS 300` | Peak Pumping Speed | **300** | m3/h | Page 4, Technical Specifications | 50 Hz |
| `EDS 300` | Ultimate Pressure | **0.01** | mbar | Page 4, Technical Specifications | Without ballast |

#### Vacuum Connections & Target Applications
- **Inlet Flange:** ISO-K 63 / ANSI 2"
- **Exhaust / Outlet Flange:** DN40 PN10
- **Target Applications:** Industrial freeze drying, Vacuum coating, Heat treatment furnaces, Transformer drying

#### Source Evidence Documents
- `EDW-DOC-009`: **EDS Dry Screw Vacuum Pumps -Brochure** (Pub No: `3602`, Type: `Brochure`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/dry-screw-pumps/EDS-industrial-dry-screw-vacuum-pumps-brochure.pdf)

#### SYINCO Commercial Status
- **RFQ Channel:** `capital-equipment` | **Action:** `Request Technical Quote`
- **Channel Partner Status:** `authorized-channel-partner` | **Stock Status:** `import-on-demand`
- **Local Support:** factory-trained-engineers | **Warranty:** 12-month standard OEM warranty
- **Commercial Terms:** INR domestic billing, customs clearance, and local service support in India

---

<a id="edwards-idx-series"></a>
### IDX Series Industrial Dry Screw Vacuum Pumps
**Canonical ID:** `edwards-idx-series`  
**Canonical URL:** `/products/vacuum-technology/edwards-idx-series` (`indexable`)  
**OEM Taxonomy:** Edwards Vacuum → Vacuum Pumps → Dry Screw Pumps  
**SYINCO Taxonomy:** Vacuum Technology & Abatement (`vacuum-technology`) → Heavy Duty Dry Screw Pumps (`dry-screw-pumps`)  
**Tagline:** *Heavy-Duty Dry Screw Vacuum Technology for Steel Degassing and Metallurgy*  

Massive dry screw vacuum pump engineered specifically for metallurgical processing, steel degassing, and large-scale industrial coating plants.

#### Verified Models
`IDX 1000`, `IDX 1300`

#### Key Technical Specifications
| Model | Parameter | Value | Unit | Source Reference | Footnote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `IDX 1000` | Pumping Speed | **1000** | m3/h | Page 4, Technical Data | 50 Hz |
| `IDX 1000` | Ultimate Pressure | **0.005** | mbar | Page 4, Technical Data | With gas ballast |
| `IDX 1300` | Pumping Speed | **1300** | m3/h | Page 4, Technical Data | 50 Hz |
| `IDX 1300` | Ultimate Pressure | **0.005** | mbar | Page 4, Technical Data | With gas ballast |

#### Vacuum Connections & Target Applications
- **Inlet Flange:** ISO-K 160
- **Exhaust / Outlet Flange:** ISO-K 100
- **Target Applications:** Steel degassing, Vacuum induction melting (VIM), Silicon crystal pulling, Heat treatment furnaces

#### Source Evidence Documents
- `EDW-DOC-010`: **IDX 1300 Dry Screw Vacuum Pump - Brochure** (Pub No: `3602`, Type: `Brochure`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/dry-screw-pumps/3602210601-IDX-1300-EN-Web.pdf)

#### SYINCO Commercial Status
- **RFQ Channel:** `capital-equipment` | **Action:** `Request Technical Quote`
- **Channel Partner Status:** `authorized-channel-partner` | **Stock Status:** `import-on-demand`
- **Local Support:** factory-trained-engineers | **Warranty:** 12-month standard OEM warranty
- **Commercial Terms:** INR domestic billing, customs clearance, and local service support in India

---

<a id="edwards-gxs-series"></a>
### GXS Series Smart Dry Screw Vacuum Pumps & Combinations
**Canonical ID:** `edwards-gxs-series`  
**Canonical URL:** `/products/vacuum-technology/edwards-gxs-series` (`indexable`)  
**OEM Taxonomy:** Edwards Vacuum → Vacuum Pumps → Dry Screw Pumps  
**SYINCO Taxonomy:** Vacuum Technology & Abatement (`vacuum-technology`) → Intelligent Dry Screw Pumps (`dry-screw-pumps`)  
**Tagline:** *Intelligent Dry Screw Vacuum Pumps with Integrated Roots Boosters for Industrial Manufacturing*  

Highly sophisticated dry screw vacuum pump featuring on-board temperature controllers, intelligent microprocessors, and variable speed motors for quiet, clean vacuum.

#### Verified Models
`GXS160`, `GXS250`, `GXS450`, `GXS750`, `GXS160/1750`, `GXS250/2600`, `GXS450/2600`, `GXS450/4200`, `GXS750/2600`, `GXS750/4200`

#### Key Technical Specifications
| Model | Parameter | Value | Unit | Source Reference | Footnote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `GXS160` | Peak Pumping Speed | **160** | m3/h | Page 8, Technical Data | Direct drive |
| `GXS160` | Ultimate Pressure | **0.007** | mbar | Page 8, Technical Data | Without ballast |
| `GXS250` | Peak Pumping Speed | **250** | m3/h | Page 8, Technical Data | Direct drive |
| `GXS250` | Ultimate Pressure | **0.007** | mbar | Page 8, Technical Data | Without ballast |
| `GXS450` | Peak Pumping Speed | **450** | m3/h | Page 8, Technical Data | Direct drive |
| `GXS450` | Ultimate Pressure | **0.007** | mbar | Page 8, Technical Data | Without ballast |
| `GXS750` | Peak Pumping Speed | **750** | m3/h | Page 8, Technical Data | Direct drive |
| `GXS750` | Ultimate Pressure | **0.007** | mbar | Page 8, Technical Data | Without ballast |
| `GXS160/1750` | Peak Pumping Speed | **1450** | m3/h | Page 8, Technical Data | Pump + Booster combo |
| `GXS160/1750` | Ultimate Pressure | **0.0007** | mbar | Page 8, Technical Data | High vacuum combo |
| `GXS250/2600` | Peak Pumping Speed | **2050** | m3/h | Page 8, Technical Data | Pump + Booster combo |
| `GXS250/2600` | Ultimate Pressure | **0.0007** | mbar | Page 8, Technical Data | High vacuum combo |
| `GXS450/4200` | Peak Pumping Speed | **3400** | m3/h | Page 8, Technical Data | Pump + Booster combo |
| `GXS450/4200` | Ultimate Pressure | **0.0007** | mbar | Page 8, Technical Data | High vacuum combo |

#### Vacuum Connections & Target Applications
- **Inlet Flange:** ISO-K 100 to ISO-K 250
- **Exhaust / Outlet Flange:** NW40 to NW100
- **Target Applications:** Solar cell manufacturing, Semiconductor back-end, Plasma nitriding and sintering, Lithium-ion battery electrode drying

#### Source Evidence Documents
- `EDW-DOC-011`: **GXS Dry Screw Vacuum Pumps - Brochure** (Pub No: `3602`, Type: `Brochure`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/dry-screw-pumps/edwards-GXS-dry-pumps-product-brochure.pdf)

#### SYINCO Commercial Status
- **RFQ Channel:** `capital-equipment` | **Action:** `Request Technical Quote`
- **Channel Partner Status:** `authorized-channel-partner` | **Stock Status:** `import-on-demand`
- **Local Support:** factory-trained-engineers | **Warranty:** 12-month standard OEM warranty
- **Commercial Terms:** INR domestic billing, customs clearance, and local service support in India

---

<a id="edwards-exs-series"></a>
### EXS Series Dry Screw Vacuum Pumps
**Canonical ID:** `edwards-exs-series`  
**Canonical URL:** `/products/vacuum-technology/edwards-exs-series` (`indexable`)  
**OEM Taxonomy:** Edwards Vacuum → Vacuum Pumps → Dry Screw Pumps  
**SYINCO Taxonomy:** Vacuum Technology & Abatement (`vacuum-technology`) → Industrial Dry Screw Pumps (`dry-screw-pumps`)  
**Tagline:** *Reliable, Simplified Dry Screw Pumping for General Industrial Processes*  

Robust industrial dry screw pump engineered for standard vacuum duty cycles where simplicity and consistent uptime are paramount.

#### Verified Models
`EXS 160`, `EXS 250`, `EXS 450`, `EXS 750`

#### Key Technical Specifications
| Model | Parameter | Value | Unit | Source Reference | Footnote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `EXS 160` | Displacement | **160** | m3/h | Page 4, Technical Data | 50 Hz |
| `EXS 160` | Ultimate Pressure | **0.01** | mbar | Page 4, Technical Data | Permanent ballast |
| `EXS 250` | Displacement | **250** | m3/h | Page 4, Technical Data | 50 Hz |
| `EXS 250` | Ultimate Pressure | **0.01** | mbar | Page 4, Technical Data | Permanent ballast |
| `EXS 450` | Displacement | **450** | m3/h | Page 4, Technical Data | 50 Hz |
| `EXS 450` | Ultimate Pressure | **0.01** | mbar | Page 4, Technical Data | Permanent ballast |
| `EXS 750` | Displacement | **750** | m3/h | Page 4, Technical Data | 50 Hz |
| `EXS 750` | Ultimate Pressure | **0.01** | mbar | Page 4, Technical Data | Permanent ballast |

#### Vacuum Connections & Target Applications
- **Inlet Flange:** ISO-K 63 to ISO-K 160
- **Exhaust / Outlet Flange:** DN40 to DN100 PN10
- **Target Applications:** General industrial vacuum, Coating processes, Thermal processing, Plastics extrusion degassing

#### Source Evidence Documents
- `EDW-DOC-012`: **EXS Dry Screw Vacuum Pump - Brochure** (Pub No: `3602`, Type: `Brochure`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/dry-screw-pumps/3602117101-EXS%20Brochure-EN-Web.pdf)

#### SYINCO Commercial Status
- **RFQ Channel:** `capital-equipment` | **Action:** `Request Technical Quote`
- **Channel Partner Status:** `authorized-channel-partner` | **Stock Status:** `import-on-demand`
- **Local Support:** factory-trained-engineers | **Warranty:** 12-month standard OEM warranty
- **Commercial Terms:** INR domestic billing, customs clearance, and local service support in India

---

<a id="edwards-gv-screw-series"></a>
### GV Series Industrial Dry Screw Pumps
**Canonical ID:** `edwards-gv-screw-series`  
**Canonical URL:** `/products/vacuum-technology/edwards-gv-screw-series` (`indexable`)  
**OEM Taxonomy:** Edwards Vacuum → Vacuum Pumps → Dry Screw Pumps  
**SYINCO Taxonomy:** Vacuum Technology & Abatement (`vacuum-technology`) → Industrial Dry Screw Pumps (`dry-screw-pumps`)  
**Tagline:** *Heavy-Duty Industrial Dry Screw Vacuum Technology for Tough Environments*  

Compact dry screw vacuum pump offering oil-free performance, high water vapor tolerance, and long maintenance intervals for production lines.

#### Verified Models
`GV80`, `GV160`, `GV250`, `GV400`

#### Key Technical Specifications
| Model | Parameter | Value | Unit | Source Reference | Footnote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `GV80` | Pumping Speed | **80** | m3/h | Page 4, Technical Data | 50 Hz |
| `GV80` | Ultimate Pressure | **0.01** | mbar | Page 4, Technical Data | Without ballast |
| `GV160` | Pumping Speed | **160** | m3/h | Page 4, Technical Data | 50 Hz |
| `GV160` | Ultimate Pressure | **0.01** | mbar | Page 4, Technical Data | Without ballast |
| `GV250` | Pumping Speed | **250** | m3/h | Page 4, Technical Data | 50 Hz |
| `GV250` | Ultimate Pressure | **0.01** | mbar | Page 4, Technical Data | Without ballast |
| `GV400` | Pumping Speed | **400** | m3/h | Page 4, Technical Data | 50 Hz |
| `GV400` | Ultimate Pressure | **0.01** | mbar | Page 4, Technical Data | Without ballast |

#### Vacuum Connections & Target Applications
- **Inlet Flange:** ISO-K 63 to ISO-K 160
- **Exhaust / Outlet Flange:** NW40 to NW100
- **Target Applications:** Industrial coatings, Furnace evacuation, Degassing and casting, Automotive leak testing

#### Source Evidence Documents
- `EDW-DOC-013`: **GV Series Dry Vacuum Pumps - Brochure** (Pub No: `3602`, Type: `Brochure`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/dry-screw-pumps/GV-series-dry-vacuum-pumps-brochure.pdf)

#### SYINCO Commercial Status
- **RFQ Channel:** `capital-equipment` | **Action:** `Request Technical Quote`
- **Channel Partner Status:** `authorized-channel-partner` | **Stock Status:** `import-on-demand`
- **Local Support:** factory-trained-engineers | **Warranty:** 12-month standard OEM warranty
- **Commercial Terms:** INR domestic billing, customs clearance, and local service support in India

---

<a id="edwards-nxds-series"></a>
### Edwards nXDS Series Dry Scroll Vacuum Pumps
**Canonical ID:** `edwards-nxds-series`  
**Canonical URL:** `/products/vacuum-technology/edwards-nxds-series` (`indexable`)  
**OEM Taxonomy:** Edwards Vacuum → Vacuum Pumps → Dry Scroll Pumps  
**SYINCO Taxonomy:** Vacuum Technology & Abatement (`vacuum-technology`) → Dry Scroll Vacuum Pumps (`dry-scroll-pumps`)  
**Tagline:** *Ultra-Clean, Hydrocarbon-Free Pumping with 5-Year Maintenance Interval*  

Compact, lubricant-free dry scroll vacuum pump delivering up to 21 m³/h pumping speed and 0.007 mbar ultimate vacuum with an exceptional 5-year tip-seal maintenance interval.

#### Verified Models
`nXDS6i`, `nXDS10i`, `nXDS15i`, `nXDS20i`, `nXDS6iC`, `nXDS10iC`, `nXDS15iC`, `nXDS20iC`, `nXDS6iR`, `nXDS10iR`, `nXDS15iR`, `nXDS20iR`

#### Key Technical Specifications
| Model | Parameter | Value | Unit | Source Reference | Footnote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `nXDS6i` | Peak Pumping Speed | **6.2** | m3/h | Page 4, Technical Data | 50/60 Hz universal inverter |
| `nXDS6i` | Ultimate Vacuum | **0.020** | mbar | Page 4, Technical Data | Total pressure |
| `nXDS6i` | Motor Power | **260** | W | Page 4, Technical Data | Single phase 100-240V |
| `nXDS6i` | Noise Level | **52** | dB(A) | Page 4, Technical Data | At 1 meter |
| `nXDS10i` | Peak Pumping Speed | **11.1** | m3/h | Page 4, Technical Data | 50/60 Hz universal inverter |
| `nXDS10i` | Ultimate Vacuum | **0.007** | mbar | Page 4, Technical Data | Total pressure |
| `nXDS10i` | Motor Power | **280** | W | Page 4, Technical Data | Single phase 100-240V |
| `nXDS10i` | Noise Level | **52** | dB(A) | Page 4, Technical Data | At 1 meter |
| `nXDS15i` | Peak Pumping Speed | **15.1** | m3/h | Page 4, Technical Data | 50/60 Hz universal inverter |
| `nXDS15i` | Ultimate Vacuum | **0.007** | mbar | Page 4, Technical Data | Total pressure |
| `nXDS15i` | Motor Power | **300** | W | Page 4, Technical Data | Single phase 100-240V |
| `nXDS15i` | Noise Level | **52** | dB(A) | Page 4, Technical Data | At 1 meter |
| `nXDS20i` | Peak Pumping Speed | **21.0** | m3/h | Page 4, Technical Data | 50/60 Hz universal inverter |
| `nXDS20i` | Ultimate Vacuum | **0.007** | mbar | Page 4, Technical Data | Total pressure |
| `nXDS20i` | Motor Power | **300** | W | Page 4, Technical Data | Single phase 100-240V |
| `nXDS20i` | Noise Level | **52** | dB(A) | Page 4, Technical Data | At 1 meter |

#### Vacuum Connections & Target Applications
- **Inlet Flange:** NW25
- **Exhaust / Outlet Flange:** NW25
- **Target Applications:** Turbomolecular pump backing, Mass spectrometry, Electron microscopy, Sample preparation, Glove boxes

#### Source Evidence Documents
- `EDW-DOC-014`: **nXDS dry scroll pumps - Brochure** (Pub No: `3601 0088 01`, Type: `Brochure`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/dry-scroll-pumps/3601-0088-01-nXDS-brochure.pdf)

#### SYINCO Commercial Status
- **RFQ Channel:** `capital-equipment` | **Action:** `Request Quote`
- **Channel Partner Status:** `authorized-channel-partner` | **Stock Status:** `import-on-demand`
- **Local Support:** factory-trained-engineers | **Warranty:** 12-month standard OEM warranty
- **Commercial Terms:** INR domestic billing, customs clearance, and local service support in India

---

<a id="edwards-xds-series"></a>
### XDS Series Dry Scroll Vacuum Pumps
**Canonical ID:** `edwards-xds-series`  
**Canonical URL:** `/products/vacuum-technology/edwards-xds-series` (`indexable`)  
**OEM Taxonomy:** Edwards Vacuum → Vacuum Pumps → Dry Scroll Pumps  
**SYINCO Taxonomy:** Vacuum Technology & Abatement (`vacuum-technology`) → Dry Scroll Vacuum Pumps (`dry-scroll-pumps`)  
**Tagline:** *Proven Bearing-Isolated Dry Scroll Vacuum Technology for Laboratories*  

Classic dry scroll vacuum pump featuring bearing purge and isolating bellows to prevent lubricant contamination in research laboratories.

#### Verified Models
`XDS5`, `XDS10`, `XDS35i`

#### Key Technical Specifications
| Model | Parameter | Value | Unit | Source Reference | Footnote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `XDS5` | Displacement | **4.8** | m3/h | Page 2, Technical Data | 50 Hz |
| `XDS5` | Ultimate Pressure | **0.05** | mbar | Page 2, Technical Data | Total pressure |
| `XDS10` | Displacement | **9.3** | m3/h | Page 2, Technical Data | 50 Hz |
| `XDS10` | Ultimate Pressure | **0.05** | mbar | Page 2, Technical Data | Total pressure |

#### Vacuum Connections & Target Applications
- **Inlet Flange:** NW25
- **Exhaust / Outlet Flange:** NW25
- **Target Applications:** General laboratory vacuum, Benchtop backing, Sputter coater backing, Freeze drying

#### Source Evidence Documents
- `EDW-DOC-015`: **XDS Scroll Pump - Datasheet** (Pub No: `3601 0428 01`, Type: `Datasheet`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/dry-scroll-pumps/3601-0428-01-XDS-datasheet.pdf)

#### SYINCO Commercial Status
- **RFQ Channel:** `standard-component` | **Action:** `Request Quote`
- **Channel Partner Status:** `authorized-channel-partner` | **Stock Status:** `import-on-demand`
- **Local Support:** factory-trained-engineers | **Warranty:** 12-month standard OEM warranty
- **Commercial Terms:** INR domestic billing, customs clearance, and local service support in India

---

<a id="edwards-mxds3-series"></a>
### mXDS3 Series Miniature Dry Scroll Vacuum Pumps
**Canonical ID:** `edwards-mxds3-series`  
**Canonical URL:** `/products/vacuum-technology/edwards-mxds3-series` (`indexable`)  
**OEM Taxonomy:** Edwards Vacuum → Vacuum Pumps → Dry Scroll Pumps  
**SYINCO Taxonomy:** Vacuum Technology & Abatement (`vacuum-technology`) → Miniature Dry Scroll Pumps (`dry-scroll-pumps`)  
**Tagline:** *Ultra-Compact, Lightweight Dry Scroll Pump for Portable Instruments*  

Smallest dry scroll pump from Edwards, delivering 3 m³/h pumping speed at only 7.8 kg, designed for integration into mobile carts and benchtop mass spectrometers.

#### Verified Models
`mXDS3`, `mXDS3s`

#### Key Technical Specifications
| Model | Parameter | Value | Unit | Source Reference | Footnote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `mXDS3` | Peak Pumping Speed | **3.0** | m3/h | Page 2, Specifications | Universal inverter |
| `mXDS3` | Ultimate Pressure | **0.1** | mbar | Page 2, Specifications | Total pressure |
| `mXDS3` | Weight | **7.8** | kg | Page 2, Specifications | Dry weight |
| `mXDS3` | Noise Level | **52** | dB(A) | Page 2, Specifications | Acoustic emission |
| `mXDS3s` | Peak Pumping Speed | **3.0** | m3/h | Page 2, Specifications | With inlet valve |
| `mXDS3s` | Ultimate Pressure | **0.1** | mbar | Page 2, Specifications | Total pressure |

#### Vacuum Connections & Target Applications
- **Inlet Flange:** NW16 / NW25
- **Exhaust / Outlet Flange:** NW16
- **Target Applications:** Portable mass spectrometers, Helium leak detection backing, Benchtop R&D equipment, Surface science load locks

#### Source Evidence Documents
- `EDW-DOC-016`: **mXDS3 and mXDS3s Dry Scroll Pumps - Datasheet** (Pub No: `3601 0723 01`, Type: `Datasheet`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/dry-scroll-pumps/3601-0723-01-mXDS3-3s-datasheet.pdf)
- `EDW-DOC-019`: **3601-0746-01-mxds3-and-mxds3s** (Pub No: `Digital Edition`, Type: `Digital Interactive Brochure`) — [Source Link](https://digitalbrochure.edwardsvacuum.com/mXDS3-and-mXDS3s-dry-scroll-pumps/en/)

#### SYINCO Commercial Status
- **RFQ Channel:** `standard-component` | **Action:** `Request Quote`
- **Channel Partner Status:** `authorized-channel-partner` | **Stock Status:** `import-on-demand`
- **Local Support:** factory-trained-engineers | **Warranty:** 12-month standard OEM warranty
- **Commercial Terms:** INR domestic billing, customs clearance, and local service support in India

---

<a id="edwards-xds35i-series"></a>
### XDS35i High-Capacity Dry Scroll Vacuum Pumps
**Canonical ID:** `edwards-xds35i-series`  
**Canonical URL:** `/products/vacuum-technology/edwards-xds35i-series` (`indexable`)  
**OEM Taxonomy:** Edwards Vacuum → Vacuum Pumps → Dry Scroll Pumps  
**SYINCO Taxonomy:** Vacuum Technology & Abatement (`vacuum-technology`) → Dry Scroll Vacuum Pumps (`dry-scroll-pumps`)  
**Tagline:** *High-Capacity 35 m³/h Dry Scroll Pumping with Smart Inverter Drive*  

Heavy-duty dry scroll vacuum pump delivering 35 m³/h pumping speed, suitable for large load locks, accelerator beamlines, and large electron microscopes.

#### Verified Models
`XDS35i`, `XDS35iC`

#### Key Technical Specifications
| Model | Parameter | Value | Unit | Source Reference | Footnote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `XDS35i` | Peak Pumping Speed | **35** | m3/h | Page 2, Specifications | 50/60 Hz |
| `XDS35i` | Ultimate Pressure | **0.01** | mbar | Page 2, Specifications | Total pressure |
| `XDS35i` | Motor Power | **550** | W | Page 2, Specifications | Single phase universal |
| `XDS35i` | Weight | **48** | kg | Page 2, Specifications | Standard unit |

#### Vacuum Connections & Target Applications
- **Inlet Flange:** NW40
- **Exhaust / Outlet Flange:** NW25
- **Target Applications:** Synchrotron beamlines, Large chamber evacuation, Industrial drying, SEM/TEM high-load vacuum

#### Source Evidence Documents
- `EDW-DOC-017`: **XDS35i Dry Scroll Pump - Datasheet** (Pub No: `3601 0452 01`, Type: `Datasheet`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/dry-scroll-pumps/3601-0452-01-XDS35i-datasheet.pdf)

#### SYINCO Commercial Status
- **RFQ Channel:** `capital-equipment` | **Action:** `Request Technical Quote`
- **Channel Partner Status:** `authorized-channel-partner` | **Stock Status:** `import-on-demand`
- **Local Support:** factory-trained-engineers | **Warranty:** 12-month standard OEM warranty
- **Commercial Terms:** INR domestic billing, customs clearance, and local service support in India

---

<a id="edwards-edo-series"></a>
### EDO 65-100 Dry Scroll Vacuum Pumps
**Canonical ID:** `edwards-edo-series`  
**Canonical URL:** `/products/vacuum-technology/edwards-edo-series` (`indexable`)  
**OEM Taxonomy:** Edwards Vacuum → Vacuum Pumps → Dry Scroll Pumps  
**SYINCO Taxonomy:** Vacuum Technology & Abatement (`vacuum-technology`) → Industrial Dry Scroll Pumps (`dry-scroll-pumps`)  
**Tagline:** *Large Displacement Industrial Dry Scroll Pumps for Manufacturing Automation*  

Heavy industrial scroll vacuum pump delivering up to 100 m³/h clean vacuum, filling the gap between small laboratory scrolls and large screw pumps.

#### Verified Models
`EDO 65`, `EDO 100`

#### Key Technical Specifications
| Model | Parameter | Value | Unit | Source Reference | Footnote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `EDO 65` | Pumping Speed | **65** | m3/h | Page 4, Technical Data | 50 Hz |
| `EDO 65` | Ultimate Pressure | **0.01** | mbar | Page 4, Technical Data | Permanent ballast |
| `EDO 100` | Pumping Speed | **100** | m3/h | Page 4, Technical Data | 50 Hz |
| `EDO 100` | Ultimate Pressure | **0.01** | mbar | Page 4, Technical Data | Permanent ballast |

#### Vacuum Connections & Target Applications
- **Inlet Flange:** ISO-K 63 / NW40
- **Exhaust / Outlet Flange:** NW40
- **Target Applications:** Industrial leak test systems, Cleanroom automated lines, Solar laminators, Optical coating systems

#### Source Evidence Documents
- `EDW-DOC-018`: **EDO 65-100 Dry Scroll Vacuum Pump - Brochure** (Pub No: `3602`, Type: `Brochure`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/dry-scroll-pumps/3602115001_EDO_65-100_EN_web.pdf)

#### SYINCO Commercial Status
- **RFQ Channel:** `capital-equipment` | **Action:** `Request Technical Quote`
- **Channel Partner Status:** `authorized-channel-partner` | **Stock Status:** `import-on-demand`
- **Local Support:** factory-trained-engineers | **Warranty:** 12-month standard OEM warranty
- **Commercial Terms:** INR domestic billing, customs clearance, and local service support in India

---

<a id="edwards-ecal1-series"></a>
### ECAL1 Vacuum Gauge Calibration Systems
**Canonical ID:** `edwards-ecal1-series`  
**Canonical URL:** `/products/vacuum-technology/edwards-ecal1-series` (`indexable`)  
**OEM Taxonomy:** Edwards Vacuum → Vacuum Pumps → High Vacuum Pump Systems  
**SYINCO Taxonomy:** Vacuum Technology & Abatement (`vacuum-technology`) → Calibration Vacuum Systems (`high-vacuum-systems`)  
**Tagline:** *Precision Turnkey Vacuum Gauge Calibration System for Standards Laboratories*  

Fully integrated high-vacuum calibration rig incorporating turbomolecular pumping, reference spinning rotor gauges, and precision gas inlet for secondary standard calibrations.

#### Verified Models
`ECAL1`

#### Key Technical Specifications
| Model | Parameter | Value | Unit | Source Reference | Footnote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `ECAL1` | Base Pressure | **1e-8** | mbar | Page 2, System Specifications | Turbopump backed |
| `ECAL1` | Calibration Range | **1e-6 to 1000** | mbar | Page 2, System Specifications | Multi-range reference |

#### Vacuum Connections & Target Applications
- **Inlet Flange:** DN100CF / ISO-K 100
- **Exhaust / Outlet Flange:** NW25
- **Target Applications:** Metrology institutes, Quality assurance laboratories, Aerospace sensor verification, High-vacuum research

#### Source Evidence Documents
- `EDW-DOC-020`: **ECAL1 Calibration system - Datasheet** (Pub No: `3601 0732 01`, Type: `Datasheet`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/high-vacuum-pump-systems/3601-0732-01-ECAL1-Datasheet.pdf)
- `EDW-DOC-025`: **ECAL1 Calibration system - Datasheet** (Pub No: `3601 0736 01`, Type: `Datasheet`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/high-vacuum-pump-systems/3601-0736-01-ECAL1-Datasheet.pdf)

#### SYINCO Commercial Status
- **RFQ Channel:** `capital-equipment` | **Action:** `Request Technical Quote`
- **Channel Partner Status:** `authorized-channel-partner` | **Stock Status:** `import-on-demand`
- **Local Support:** factory-trained-engineers | **Warranty:** 12-month standard OEM warranty
- **Commercial Terms:** INR domestic billing, customs clearance, and local service support in India

---

<a id="edwards-t-station-300"></a>
### T-Station 300 Turbomolecular Pumping Stations
**Canonical ID:** `edwards-t-station-300`  
**Canonical URL:** `/products/vacuum-technology/edwards-t-station-300` (`indexable`)  
**OEM Taxonomy:** Edwards Vacuum → Vacuum Pumps → High Vacuum Pump Systems  
**SYINCO Taxonomy:** Vacuum Technology & Abatement (`vacuum-technology`) → Turbomolecular Pumping Stations (`high-vacuum-systems`)  
**Tagline:** *High-Speed 300 L/s Plug-and-Play Turbomolecular Pumping Station*  

Complete modular turbomolecular high-vacuum station combining a nEXT300D turbopump with a dry scroll (nXDS) or oil-sealed backing pump and integrated controller.

#### Verified Models
`T-Station 300 / nXDS10i`, `T-Station 300 / E2M1.5`

#### Key Technical Specifications
| Model | Parameter | Value | Unit | Source Reference | Footnote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `T-Station 300` | High Vacuum Pumping Speed | **300** | L/s | Page 2, Specifications | For N2 |
| `T-Station 300` | Ultimate Vacuum | **1e-8** | mbar | Page 2, Specifications | CF Flange version |

#### Vacuum Connections & Target Applications
- **Inlet Flange:** ISO-K 100 / DN100CF
- **Exhaust / Outlet Flange:** Exhaust nozzle
- **Target Applications:** General laboratory UHV, Surface physics, Accelerator beamlines, Electron microscopy

#### Source Evidence Documents
- `EDW-DOC-021`: **T-Station 300 - Datasheet** (Pub No: `3601 0664 01`, Type: `Datasheet`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/high-vacuum-pump-systems/3601-0664-01-T-Station-300-Datasheet.pdf)

#### SYINCO Commercial Status
- **RFQ Channel:** `capital-equipment` | **Action:** `Request Technical Quote`
- **Channel Partner Status:** `authorized-channel-partner` | **Stock Status:** `import-on-demand`
- **Local Support:** factory-trained-engineers | **Warranty:** 12-month standard OEM warranty
- **Commercial Terms:** INR domestic billing, customs clearance, and local service support in India

---

<a id="edwards-t-station-85"></a>
### T-Station 85 Turbomolecular Pumping Stations
**Canonical ID:** `edwards-t-station-85`  
**Canonical URL:** `/products/vacuum-technology/edwards-t-station-85` (`indexable`)  
**OEM Taxonomy:** Edwards Vacuum → Vacuum Pumps → High Vacuum Pump Systems  
**SYINCO Taxonomy:** Vacuum Technology & Abatement (`vacuum-technology`) → Turbomolecular Pumping Stations (`high-vacuum-systems`)  
**Tagline:** *Compact Benchtop 85 L/s Turbomolecular Pumping System*  

Compact benchtop high-vacuum station combining a nEXT85H turbopump with a choice of diaphragm (XDD1) or dry scroll (mXDS3) backing pumps.

#### Verified Models
`T-Station 85 / XDD1`, `T-Station 85 / mXDS3`, `T-Station 85 / E2M1.5`

#### Key Technical Specifications
| Model | Parameter | Value | Unit | Source Reference | Footnote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `T-Station 85` | High Vacuum Pumping Speed | **85** | L/s | Page 2, Specifications | For N2 |
| `T-Station 85` | Ultimate Vacuum | **5e-8** | mbar | Page 2, Specifications | CF Flange with bakeout |

#### Vacuum Connections & Target Applications
- **Inlet Flange:** ISO-K 63 / DN63CF / NW40
- **Exhaust / Outlet Flange:** Exhaust nozzle
- **Target Applications:** Academic physics laboratories, Spectroscopy chamber evacuation, Load lock rapid cycling, Tube furnace evacuation

#### Source Evidence Documents
- `EDW-DOC-022`: **T-Station 85 - Datasheet** (Pub No: `3601 0254 01`, Type: `Datasheet`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/high-vacuum-pump-systems/3601-0254-01-T-Station-85-Datasheet.pdf)

#### SYINCO Commercial Status
- **RFQ Channel:** `capital-equipment` | **Action:** `Request Technical Quote`
- **Channel Partner Status:** `authorized-channel-partner` | **Stock Status:** `import-on-demand`
- **Local Support:** factory-trained-engineers | **Warranty:** 12-month standard OEM warranty
- **Commercial Terms:** INR domestic billing, customs clearance, and local service support in India

---

<a id="edwards-tic-pumping-station"></a>
### TIC Turbomolecular Cart Pumping Systems
**Canonical ID:** `edwards-tic-pumping-station`  
**Canonical URL:** `/products/vacuum-technology/edwards-tic-pumping-station` (`indexable`)  
**OEM Taxonomy:** Edwards Vacuum → Vacuum Pumps → High Vacuum Pump Systems  
**SYINCO Taxonomy:** Vacuum Technology & Abatement (`vacuum-technology`) → Mobile High Vacuum Stations (`high-vacuum-systems`)  
**Tagline:** *Mobile Turbo Instrument Controller Pumping Cart System*  

Integrated mobile high-vacuum pumping system with intelligent TIC controller driving turbo, backing pump, and up to 3 active vacuum gauges.

#### Verified Models
`TIC Pumping Station 240V`, `TIC Pumping Station 115V`

#### Key Technical Specifications
| Model | Parameter | Value | Unit | Source Reference | Footnote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `TIC Station` | Pumping Speed | **85 to 300** | L/s | Page 2, Specifications | Dependent on turbopump fitted |
| `TIC Station` | Base Pressure | **1e-8** | mbar | Page 2, Specifications | Metal sealed chamber |

#### Vacuum Connections & Target Applications
- **Inlet Flange:** ISO-K / CF
- **Exhaust / Outlet Flange:** NW25
- **Target Applications:** Mobile cleanroom evacuation, Space simulator pumping, Cryostat insulation vacuum

#### Source Evidence Documents
- `EDW-DOC-023`: **TIC Pumping Station - Datasheet** (Pub No: `3601 0444 01`, Type: `Brochure`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/high-vacuum-pump-systems/3601-0444-01-TIC-pumping-station.pdf)

#### SYINCO Commercial Status
- **RFQ Channel:** `capital-equipment` | **Action:** `Request Technical Quote`
- **Channel Partner Status:** `authorized-channel-partner` | **Stock Status:** `import-on-demand`
- **Local Support:** factory-trained-engineers | **Warranty:** 12-month standard OEM warranty
- **Commercial Terms:** INR domestic billing, customs clearance, and local service support in India

---

<a id="edwards-next-tic-cart-xl"></a>
### nEXT TIC CART XL Mobile High Vacuum Systems
**Canonical ID:** `edwards-next-tic-cart-xl`  
**Canonical URL:** `/products/vacuum-technology/edwards-next-tic-cart-xl` (`indexable`)  
**OEM Taxonomy:** Edwards Vacuum → Vacuum Pumps → High Vacuum Pump Systems  
**SYINCO Taxonomy:** Vacuum Technology & Abatement (`vacuum-technology`) → Mobile High Vacuum Stations (`high-vacuum-systems`)  
**Tagline:** *Heavy-Duty Mobile High-Vacuum Pumping Cart with nEXT Turbomolecular Pumps*  

Reinforced mobile high-vacuum trolley system supporting large nEXT730 or nEXT930 turbopumps backed by high-capacity nXDS or nXRi dry pumps.

#### Verified Models
`nEXT TIC CART XL`

#### Key Technical Specifications
| Model | Parameter | Value | Unit | Source Reference | Footnote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `nEXT CART XL` | Pumping Speed | **730 to 930** | L/s | Page 2, Specifications | For N2 with nEXT930 |
| `nEXT CART XL` | Ultimate Vacuum | **1e-9** | mbar | Page 2, Specifications | Ultra-high vacuum |

#### Vacuum Connections & Target Applications
- **Inlet Flange:** ISO-K 160 / DN160CF
- **Exhaust / Outlet Flange:** NW25
- **Target Applications:** Aerospace thermal vacuum chambers, Particle accelerators, Large fusion diagnostic ports

#### Source Evidence Documents
- `EDW-DOC-024`: **nEXT TIC CART XL - Datasheet** (Pub No: `3601 0705 01`, Type: `Datasheet`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/high-vacuum-pump-systems/3601-0705-01-nEXT-TIC-CART-XL-Datasheet.pdf)

#### SYINCO Commercial Status
- **RFQ Channel:** `capital-equipment` | **Action:** `Request Technical Quote`
- **Channel Partner Status:** `authorized-channel-partner` | **Stock Status:** `import-on-demand`
- **Local Support:** factory-trained-engineers | **Warranty:** 12-month standard OEM warranty
- **Commercial Terms:** INR domestic billing, customs clearance, and local service support in India

---

<a id="edwards-stokes-6-booster"></a>
### Stokes 6" Mechanical Booster Pumps
**Canonical ID:** `edwards-stokes-6-booster`  
**Canonical URL:** `/products/vacuum-technology/edwards-stokes-6-booster` (`indexable`)  
**OEM Taxonomy:** Edwards Vacuum → Vacuum Pumps → Mechanical Booster Pumps  
**SYINCO Taxonomy:** Vacuum Technology & Abatement (`vacuum-technology`) → Roots Vacuum Boosters (`mechanical-boosters`)  
**Tagline:** *High-Reliability Mechanical Roots Boosters for Rapid Industrial Evacuation*  

Heavy-duty bypass-cooled mechanical booster delivering rapid pump-down times in demanding heat treatment and vacuum metallurgy operations.

#### Verified Models
`Stokes 607`, `Stokes 615`

#### Key Technical Specifications
| Model | Parameter | Value | Unit | Source Reference | Footnote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `Stokes 607` | Displacement | **1700** | m3/h | Page 2, Technical Data | 50 Hz |
| `Stokes 607` | Max Differential Pressure | **40** | mbar | Page 2, Technical Data | Continuous |
| `Stokes 615` | Displacement | **2700** | m3/h | Page 2, Technical Data | 50 Hz |
| `Stokes 615` | Max Differential Pressure | **40** | mbar | Page 2, Technical Data | Continuous |

#### Vacuum Connections & Target Applications
- **Inlet Flange:** ANSI 6"
- **Exhaust / Outlet Flange:** ANSI 4"
- **Target Applications:** Vacuum induction melting, Vacuum arc remelting, Heat treating furnaces, Transformer oil purification

#### Source Evidence Documents
- `EDW-DOC-026`: **Stokes 6” Mechanical Booster - Brochure** (Pub No: `3602`, Type: `Brochure`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/mechanical-booster-pumps/3602207401-Stokes%206-Booster-EN-Web.pdf)

#### SYINCO Commercial Status
- **RFQ Channel:** `capital-equipment` | **Action:** `Request Technical Quote`
- **Channel Partner Status:** `authorized-channel-partner` | **Stock Status:** `import-on-demand`
- **Local Support:** factory-trained-engineers | **Warranty:** 12-month standard OEM warranty
- **Commercial Terms:** INR domestic billing, customs clearance, and local service support in India

---

<a id="edwards-gmb-series"></a>
### GMB Series High-Capacity Roots Vacuum Boosters
**Canonical ID:** `edwards-gmb-series`  
**Canonical URL:** `/products/vacuum-technology/edwards-gmb-series` (`indexable`)  
**OEM Taxonomy:** Edwards Vacuum → Vacuum Pumps → Mechanical Booster Pumps  
**SYINCO Taxonomy:** Vacuum Technology & Abatement (`vacuum-technology`) → Roots Vacuum Boosters (`mechanical-boosters`)  
**Tagline:** *Ultra-Large Scale Roots Mechanical Boosters up to 40,000 m³/h*  

Extraordinary high-displacement roots vacuum booster designed for large-scale steel degassing, aerospace test cells, and chemical vapor deposition.

#### Verified Models
`GMB25K`, `GMB40K`

#### Key Technical Specifications
| Model | Parameter | Value | Unit | Source Reference | Footnote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `GMB25K` | Displacement | **25000** | m3/h | Page 2, Specifications | 50 Hz |
| `GMB40K` | Displacement | **40000** | m3/h | Page 2, Specifications | 50 Hz |

#### Vacuum Connections & Target Applications
- **Inlet Flange:** DN500 / DN600
- **Exhaust / Outlet Flange:** DN400 / DN500
- **Target Applications:** Steel degassing RH/VD/VOD, Wind tunnel simulation, Aerospace altitude simulation chambers

#### Source Evidence Documents
- `EDW-DOC-027`: **GMB Roots Vacuum Booster Pumps - Brochure** (Pub No: `3602`, Type: `Product Leaflet`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/mechanical-booster-pumps/3602208401-GMB25-40K-Leaflet-EN-Web.pdf)

#### SYINCO Commercial Status
- **RFQ Channel:** `capital-equipment` | **Action:** `Request Technical Quote`
- **Channel Partner Status:** `authorized-channel-partner` | **Stock Status:** `import-on-demand`
- **Local Support:** factory-trained-engineers | **Warranty:** 12-month standard OEM warranty
- **Commercial Terms:** INR domestic billing, customs clearance, and local service support in India

---

<a id="edwards-eh-series"></a>
### EH Series Hydrokinetic Drive Mechanical Boosters
**Canonical ID:** `edwards-eh-series`  
**Canonical URL:** `/products/vacuum-technology/edwards-eh-series` (`indexable`)  
**OEM Taxonomy:** Edwards Vacuum → Vacuum Pumps → Mechanical Booster Pumps  
**SYINCO Taxonomy:** Vacuum Technology & Abatement (`vacuum-technology`) → Roots Vacuum Boosters (`mechanical-boosters`)  
**Tagline:** *Patented Hydrokinetic Fluid Drive Mechanical Boosters for Direct Atmospheric Start*  

World-famous roots booster pump featuring a unique hydrokinetic fluid coupling that allows the booster to be started at atmospheric pressure simultaneously with the backing pump.

#### Verified Models
`EH250`, `EH500`, `EH1200`, `EH2600`, `EH4200`

#### Key Technical Specifications
| Model | Parameter | Value | Unit | Source Reference | Footnote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `EH250` | Displacement | **250** | m3/h | Page 2, Technical Data | 50 Hz |
| `EH500` | Displacement | **500** | m3/h | Page 2, Technical Data | 50 Hz |
| `EH1200` | Displacement | **1200** | m3/h | Page 2, Technical Data | 50 Hz |
| `EH2600` | Displacement | **2600** | m3/h | Page 2, Technical Data | 50 Hz |
| `EH4200` | Displacement | **4200** | m3/h | Page 2, Technical Data | 50 Hz |

#### Vacuum Connections & Target Applications
- **Inlet Flange:** ISO-K 63 to ISO-K 250
- **Exhaust / Outlet Flange:** ISO-K 63 to ISO-K 160
- **Target Applications:** Vacuum furnaces, Brazing and sintering, Coating systems, Chemical pumping backing

#### Source Evidence Documents
- `EDW-DOC-028`: **EH Mechanical Booster - Datasheet** (Pub No: `3602`, Type: `Datasheet`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/mechanical-booster-pumps/edwards-EH-mechanical-booster-pumps-datasheet.pdf)

#### SYINCO Commercial Status
- **RFQ Channel:** `capital-equipment` | **Action:** `Request Technical Quote`
- **Channel Partner Status:** `authorized-channel-partner` | **Stock Status:** `import-on-demand`
- **Local Support:** factory-trained-engineers | **Warranty:** 12-month standard OEM warranty
- **Commercial Terms:** INR domestic billing, customs clearance, and local service support in India

---

<a id="edwards-hv-series"></a>
### HV Series High-Capacity Mechanical Boosters
**Canonical ID:** `edwards-hv-series`  
**Canonical URL:** `/products/vacuum-technology/edwards-hv-series` (`indexable`)  
**OEM Taxonomy:** Edwards Vacuum → Vacuum Pumps → Mechanical Booster Pumps  
**SYINCO Taxonomy:** Vacuum Technology & Abatement (`vacuum-technology`) → Roots Vacuum Boosters (`mechanical-boosters`)  
**Tagline:** *High-Capacity Direct-Driven Mechanical Boosters up to 30,000 m³/h*  

Direct-drive high-volume mechanical booster pump for high throughput industrial processes requiring continuous deep vacuum operation.

#### Verified Models
`HV8000`, `HV14000`, `HV30000`

#### Key Technical Specifications
| Model | Parameter | Value | Unit | Source Reference | Footnote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `HV8000` | Displacement | **8000** | m3/h | Page 2, Specifications | 50 Hz |
| `HV14000` | Displacement | **14000** | m3/h | Page 2, Specifications | 50 Hz |
| `HV30000` | Displacement | **30000** | m3/h | Page 2, Specifications | 50 Hz |

#### Vacuum Connections & Target Applications
- **Inlet Flange:** ISO-K 320 to DN500
- **Exhaust / Outlet Flange:** ISO-K 200 to DN350
- **Target Applications:** Industrial coating, Extruder degassing, Large scale freeze drying, Metallurgical processing

#### Source Evidence Documents
- `EDW-DOC-029`: **HV Mechanical Booster - Datasheet** (Pub No: `3602`, Type: `Datasheet`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/mechanical-booster-pumps/edwards-HV-mechanical-booster-pumps-datasheet.pdf)

#### SYINCO Commercial Status
- **RFQ Channel:** `capital-equipment` | **Action:** `Request Technical Quote`
- **Channel Partner Status:** `authorized-channel-partner` | **Stock Status:** `import-on-demand`
- **Local Support:** factory-trained-engineers | **Warranty:** 12-month standard OEM warranty
- **Commercial Terms:** INR domestic billing, customs clearance, and local service support in India

---

<a id="edwards-stokes-mechanical-booster"></a>
### Stokes Mechanical Booster Series
**Canonical ID:** `edwards-stokes-mechanical-booster`  
**Canonical URL:** `/products/vacuum-technology/edwards-stokes-mechanical-booster` (`indexable`)  
**OEM Taxonomy:** Edwards Vacuum → Vacuum Pumps → Mechanical Booster Pumps  
**SYINCO Taxonomy:** Vacuum Technology & Abatement (`vacuum-technology`) → Roots Vacuum Boosters (`mechanical-boosters`)  
**Tagline:** *Reliable, Time-Tested Mechanical Roots Boosters for Rough Industrial Vacuum*  

Classic Stokes roots booster technology delivering high volumetric efficiency and robust mechanical drive design.

#### Verified Models
`Stokes 306`, `Stokes 607`, `Stokes 615`

#### Key Technical Specifications
| Model | Parameter | Value | Unit | Source Reference | Footnote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `Stokes 306` | Displacement | **730** | m3/h | Page 2, Specifications | 50 Hz |
| `Stokes 607` | Displacement | **1700** | m3/h | Page 2, Specifications | 50 Hz |
| `Stokes 615` | Displacement | **2700** | m3/h | Page 2, Specifications | 50 Hz |

#### Vacuum Connections & Target Applications
- **Inlet Flange:** ANSI 4" to 6"
- **Exhaust / Outlet Flange:** ANSI 3" to 4"
- **Target Applications:** Vacuum sintering, Automotive parts brazing, Transformer vapor phase drying

#### Source Evidence Documents
- `EDW-DOC-030`: **Stokes 6” Mechanical Booster - Datasheet** (Pub No: `3602`, Type: `Datasheet`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/mechanical-booster-pumps/edwards-stokes-mechanical-booster-pumps-datasheet.pdf)

#### SYINCO Commercial Status
- **RFQ Channel:** `capital-equipment` | **Action:** `Request Technical Quote`
- **Channel Partner Status:** `authorized-channel-partner` | **Stock Status:** `import-on-demand`
- **Local Support:** factory-trained-engineers | **Warranty:** 12-month standard OEM warranty
- **Commercial Terms:** INR domestic billing, customs clearance, and local service support in India

---

<a id="edwards-nxri-series"></a>
### nXRi Series Compact Multistage Roots Dry Vacuum Pumps
**Canonical ID:** `edwards-nxri-series`  
**Canonical URL:** `/products/vacuum-technology/edwards-nxri-series` (`indexable`)  
**OEM Taxonomy:** Edwards Vacuum → Vacuum Pumps → Multistage Roots Pumps  
**SYINCO Taxonomy:** Vacuum Technology & Abatement (`vacuum-technology`) → Compact Multistage Roots Pumps (`multistage-roots-pumps`)  
**Tagline:** *Compact, Energy-Efficient Multistage Roots Pumping with Ultra-Low Footprint*  

Groundbreaking compact dry vacuum pump offering 60 to 120 m³/h pumping speed in a footprint up to 40% smaller than conventional dry pumps, with only 450W power draw.

#### Verified Models
`nXR60i`, `nXR90i`, `nXR120i`

#### Key Technical Specifications
| Model | Parameter | Value | Unit | Source Reference | Footnote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `nXR60i` | Peak Pumping Speed | **60** | m3/h | Page 4, Technical Specifications | Single phase inverter |
| `nXR60i` | Ultimate Vacuum | **0.03** | mbar | Page 4, Technical Specifications | Permanent ballast |
| `nXR60i` | Power Consumption | **450** | W | Page 4, Technical Specifications | Steady state |
| `nXR60i` | Weight | **29** | kg | Page 4, Technical Specifications | Without fluids |
| `nXR90i` | Peak Pumping Speed | **90** | m3/h | Page 4, Technical Specifications | Single phase inverter |
| `nXR90i` | Ultimate Vacuum | **0.03** | mbar | Page 4, Technical Specifications | Permanent ballast |
| `nXR90i` | Power Consumption | **450** | W | Page 4, Technical Specifications | Steady state |
| `nXR90i` | Weight | **30** | kg | Page 4, Technical Specifications | Without fluids |
| `nXR120i` | Peak Pumping Speed | **120** | m3/h | Page 4, Technical Specifications | Single phase inverter |
| `nXR120i` | Ultimate Vacuum | **0.03** | mbar | Page 4, Technical Specifications | Permanent ballast |
| `nXR120i` | Power Consumption | **450** | W | Page 4, Technical Specifications | Steady state |
| `nXR120i` | Weight | **32** | kg | Page 4, Technical Specifications | Without fluids |

#### Vacuum Connections & Target Applications
- **Inlet Flange:** NW40
- **Exhaust / Outlet Flange:** NW25
- **Target Applications:** Mass spectrometry, Electron microscopy, Surface analysis, Leak detection backing, Gloveboxes

#### Source Evidence Documents
- `EDW-DOC-031`: **nXRi Dry Pumps - Datasheet** (Pub No: `3601 0601 01`, Type: `Datasheet`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/multistage-roots-pumps/3601-0601-01-nXRi-Datasheet.pdf)
- `EDW-DOC-032`: **nXRi Dry Pumps - Brochure** (Pub No: `3601 0591 01`, Type: `Brochure`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/multistage-roots-pumps/3601-0591-01-nXRi-Brochure.pdf)

#### SYINCO Commercial Status
- **RFQ Channel:** `capital-equipment` | **Action:** `Request Quote`
- **Channel Partner Status:** `authorized-channel-partner` | **Stock Status:** `import-on-demand`
- **Local Support:** factory-trained-engineers | **Warranty:** 12-month standard OEM warranty
- **Commercial Terms:** INR domestic billing, customs clearance, and local service support in India

---

<a id="edwards-nxli-series"></a>
### nXLi Series High-Performance Multistage Roots Dry Pumps
**Canonical ID:** `edwards-nxli-series`  
**Canonical URL:** `/products/vacuum-technology/edwards-nxli-series` (`indexable`)  
**OEM Taxonomy:** Edwards Vacuum → Vacuum Pumps → Multistage Roots Pumps  
**SYINCO Taxonomy:** Vacuum Technology & Abatement (`vacuum-technology`) → High-Capacity Multistage Roots Pumps (`multistage-roots-pumps`)  
**Tagline:** *Intelligent Dry Multistage Roots Pumps with Single and Dual Inlet Configurations*  

High-capacity dry multistage roots pump delivering up to 250 m³/h, engineered specifically for analytical LC-MS backing and high gas throughput applications.

#### Verified Models
`nXL110i`, `nXL200i`, `nXL250i`, `nXL250i Dual-Inlet`

#### Key Technical Specifications
| Model | Parameter | Value | Unit | Source Reference | Footnote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `nXL110i` | Peak Pumping Speed | **110** | m3/h | Page 4, Specifications | 50/60 Hz |
| `nXL110i` | Ultimate Vacuum | **0.01** | mbar | Page 4, Specifications | Total pressure |
| `nXL200i` | Peak Pumping Speed | **200** | m3/h | Page 4, Specifications | 50/60 Hz |
| `nXL200i` | Ultimate Vacuum | **0.01** | mbar | Page 4, Specifications | Total pressure |
| `nXL250i` | Peak Pumping Speed | **250** | m3/h | Page 4, Specifications | 50/60 Hz |
| `nXL250i` | Ultimate Vacuum | **0.01** | mbar | Page 4, Specifications | Total pressure |

#### Vacuum Connections & Target Applications
- **Inlet Flange:** NW40 / ISO-K 63
- **Exhaust / Outlet Flange:** NW25
- **Target Applications:** LC-MS liquid chromatography mass spectrometry, High-capacity load locks, Helium leak detection, Solar cell assembly

#### Source Evidence Documents
- `EDW-DOC-033`: **nXLi Dry Pump - Datasheet** (Pub No: `3601 0275 01`, Type: `Datasheet`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/multistage-roots-pumps/3601-0275-01-nXLi-Datasheet.pdf)
- `EDW-DOC-034`: **nXLi Dry Pump - Brochure** (Pub No: `3601 0330 01`, Type: `Brochure`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/multistage-roots-pumps/3601-0335-01-nXLi-Brochure.pdf)
- `EDW-DOC-035`: **nXLi single inlet Enhanced datasheet** (Pub No: `3601 1006 01`, Type: `Datasheet`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/multistage-roots-pumps/3601-1006-01-nXLi-single-inlet-Enhanced-datasheet.pdf)
- `EDW-DOC-036`: **nXLi dual inlet Enhanced datasheet** (Pub No: `3601 1016 01`, Type: `Datasheet`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/multistage-roots-pumps/3601-1016-01-nXLi-dual-inlet-Enhanced-datasheet.pdf)

#### SYINCO Commercial Status
- **RFQ Channel:** `capital-equipment` | **Action:** `Request Quote`
- **Channel Partner Status:** `authorized-channel-partner` | **Stock Status:** `import-on-demand`
- **Local Support:** factory-trained-engineers | **Warranty:** 12-month standard OEM warranty
- **Commercial Terms:** INR domestic billing, customs clearance, and local service support in India

---

<a id="edwards-nxqi-series"></a>
### nXQi Series Dry Multistage Roots Pumps
**Canonical ID:** `edwards-nxqi-series`  
**Canonical URL:** `/products/vacuum-technology/edwards-nxqi-series` (`indexable`)  
**OEM Taxonomy:** Edwards Vacuum → Vacuum Pumps → Multistage Roots Pumps  
**SYINCO Taxonomy:** Vacuum Technology & Abatement (`vacuum-technology`) → Compact Multistage Roots Pumps (`multistage-roots-pumps`)  
**Tagline:** *Whisper-Quiet Dry Multistage Roots Vacuum Pump for Ultra-Sensitive Analytical Instruments*  

Specialized low-vibration multistage roots pump delivering exceptional harmonic balance and acoustic quietness for vibration-sensitive metrology and imaging.

#### Verified Models
`nXQ55i`

#### Key Technical Specifications
| Model | Parameter | Value | Unit | Source Reference | Footnote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `nXQ55i` | Peak Pumping Speed | **55** | m3/h | Page 2, Specifications | Inverter driven |
| `nXQ55i` | Ultimate Vacuum | **0.03** | mbar | Page 2, Specifications | Permanent ballast |
| `nXQ55i` | Noise Level | **50** | dB(A) | Page 2, Specifications | At 1 meter |

#### Vacuum Connections & Target Applications
- **Inlet Flange:** NW40
- **Exhaust / Outlet Flange:** NW25
- **Target Applications:** High-resolution TEM/SEM, Vibration-sensitive atomic force microscopy, Metrology chambers

#### Source Evidence Documents
- `EDW-DOC-037`: **nXQ55i dry Multistage Roots pump datasheet** (Pub No: `3601 0855 01`, Type: `Datasheet`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/multistage-roots-pumps/3601-0855-01-nXQi-Datasheet.pdf)

#### SYINCO Commercial Status
- **RFQ Channel:** `standard-component` | **Action:** `Request Quote`
- **Channel Partner Status:** `authorized-channel-partner` | **Stock Status:** `import-on-demand`
- **Local Support:** factory-trained-engineers | **Warranty:** 12-month standard OEM warranty
- **Commercial Terms:** INR domestic billing, customs clearance, and local service support in India

---

<a id="edwards-eosi-series"></a>
### EOSi Series Variable Speed Oil-Sealed Screw Vacuum Pumps
**Canonical ID:** `edwards-eosi-series`  
**Canonical URL:** `/products/vacuum-technology/edwards-eosi-series` (`indexable`)  
**OEM Taxonomy:** Edwards Vacuum → Vacuum Pumps → Oil-Sealed Screw Pumps  
**SYINCO Taxonomy:** Vacuum Technology & Abatement (`vacuum-technology`) → Oil-Sealed Screw Vacuum Pumps (`oil-sealed-screw-pumps`)  
**Tagline:** *Intelligent Variable Speed Oil-Sealed Rotary Screw Vacuum Pumps for Central Systems*  

Ultra-efficient industrial vacuum system with integrated VSD inverter, automatic setpoint tracking, and hydrocarbon retention filter delivering up to 50% energy savings.

#### Verified Models
`EOS 350i`, `EOS 550i`, `EOS 700i`, `EOS 900i`, `EOS 1300i`, `EOS 1900i`

#### Key Technical Specifications
| Model | Parameter | Value | Unit | Source Reference | Footnote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `EOS 350i` | Pumping Speed | **390** | m3/h | Page 6, Performance Data | Max VSD speed |
| `EOS 350i` | Ultimate Pressure | **0.35** | mbar | Page 6, Performance Data | Total pressure |
| `EOS 550i` | Pumping Speed | **570** | m3/h | Page 6, Performance Data | Max VSD speed |
| `EOS 550i` | Ultimate Pressure | **0.35** | mbar | Page 6, Performance Data | Total pressure |
| `EOS 700i` | Pumping Speed | **710** | m3/h | Page 6, Performance Data | Max VSD speed |
| `EOS 700i` | Ultimate Pressure | **0.35** | mbar | Page 6, Performance Data | Total pressure |
| `EOS 900i` | Pumping Speed | **910** | m3/h | Page 6, Performance Data | Max VSD speed |
| `EOS 900i` | Ultimate Pressure | **0.35** | mbar | Page 6, Performance Data | Total pressure |
| `EOS 1300i` | Pumping Speed | **1380** | m3/h | Page 6, Performance Data | Max VSD speed |
| `EOS 1300i` | Ultimate Pressure | **0.35** | mbar | Page 6, Performance Data | Total pressure |
| `EOS 1900i` | Pumping Speed | **1900** | m3/h | Page 6, Performance Data | Max VSD speed |
| `EOS 1900i` | Ultimate Pressure | **0.35** | mbar | Page 6, Performance Data | Total pressure |

#### Vacuum Connections & Target Applications
- **Inlet Flange:** DN80 PN10 to DN150 PN10
- **Exhaust / Outlet Flange:** DN80 PN10 to DN150 PN10
- **Target Applications:** Central hospital vacuum, Plastics manufacturing, Packaging and canning, Glass bottle forming, Electronics assembly

#### Source Evidence Documents
- `EDW-DOC-038`: **EOS1300-1900i - Datasheet** (Pub No: `3602`, Type: `Datasheet`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/oil-sealed-screw-pumps/3602018301-EOS1300-1900i-EN-Web1.pdf)
- `EDW-DOC-039`: **EOSi Oil-Sealed Screw Vacuum Pumps - Brochure** (Pub No: `3602`, Type: `Brochure`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/oil-sealed-screw-pumps/3602016201_EOSi_EN_web.pdf)
- `EDW-DOC-040`: **EOSi Oil-Sealed Screw Vacuum Pumps - Brochure** (Pub No: `3602`, Type: `Brochure`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/oil-sealed-screw-pumps/3602016201-EOSi-Combined-EN-Web.pdf)

#### SYINCO Commercial Status
- **RFQ Channel:** `capital-equipment` | **Action:** `Request Technical Quote`
- **Channel Partner Status:** `authorized-channel-partner` | **Stock Status:** `import-on-demand`
- **Local Support:** factory-trained-engineers | **Warranty:** 12-month standard OEM warranty
- **Commercial Terms:** INR domestic billing, customs clearance, and local service support in India

---

<a id="edwards-stokes-microvac-series"></a>
### Stokes Microvac Rotary Piston Vacuum Pumps
**Canonical ID:** `edwards-stokes-microvac-series`  
**Canonical URL:** `/products/vacuum-technology/edwards-stokes-microvac-series` (`indexable`)  
**OEM Taxonomy:** Edwards Vacuum → Vacuum Pumps → Rotary Piston Pumps  
**SYINCO Taxonomy:** Vacuum Technology & Abatement (`vacuum-technology`) → Rotary Piston Pumps (`rotary-piston-pumps`)  
**Tagline:** *Rugged Industrial Workhorse Rotary Piston Pumps for High-Contamination Processing*  

Legendary Stokes mechanical piston design offering unmatched tolerance to dust, harsh particles, and aggressive process vapors in metallurgy.

#### Verified Models
`148J`, `149J`, `212J`, `412J`

#### Key Technical Specifications
| Model | Parameter | Value | Unit | Source Reference | Footnote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `148J` | Displacement | **85** | m3/h | Page 4, Technical Data | 50 Hz |
| `148J` | Ultimate Pressure | **0.013** | mbar | Page 4, Technical Data | Without ballast |
| `149J` | Displacement | **136** | m3/h | Page 4, Technical Data | 50 Hz |
| `149J` | Ultimate Pressure | **0.013** | mbar | Page 4, Technical Data | Without ballast |
| `212J` | Displacement | **255** | m3/h | Page 4, Technical Data | 50 Hz |
| `212J` | Ultimate Pressure | **0.013** | mbar | Page 4, Technical Data | Without ballast |
| `412J` | Displacement | **510** | m3/h | Page 4, Technical Data | 50 Hz |
| `412J` | Ultimate Pressure | **0.013** | mbar | Page 4, Technical Data | Without ballast |

#### Vacuum Connections & Target Applications
- **Inlet Flange:** ANSI 2" to 6"
- **Exhaust / Outlet Flange:** ANSI 1.5" to 4"
- **Target Applications:** Vacuum heat treatment, Vacuum induction melting, Coil winding impregnation, Chemical drying

#### Source Evidence Documents
- `EDW-DOC-041`: **Stokes Microvac - Brochure** (Pub No: `3602`, Type: `Brochure`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/rotary-piston-pumps/stokes-microvac-rotary-piston-pumps.pdf)
- `EDW-DOC-042`: **Stokes Microvac - Brochure** (Pub No: `3602`, Type: `Brochure`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/rotary-piston-pumps/stokes-microvac-rotary-piston-pumps.pdf)

#### SYINCO Commercial Status
- **RFQ Channel:** `capital-equipment` | **Action:** `Request Technical Quote`
- **Channel Partner Status:** `authorized-channel-partner` | **Stock Status:** `import-on-demand`
- **Local Support:** factory-trained-engineers | **Warranty:** 12-month standard OEM warranty
- **Commercial Terms:** INR domestic billing, customs clearance, and local service support in India

---

<a id="edwards-nrvi-series"></a>
### nRVi Series Intelligent Rotary Vane Pumps
**Canonical ID:** `edwards-nrvi-series`  
**Canonical URL:** `/products/vacuum-technology/edwards-nrvi-series` (`indexable`)  
**OEM Taxonomy:** Edwards Vacuum → Vacuum Pumps → Rotary Vane Pumps  
**SYINCO Taxonomy:** Vacuum Technology & Abatement (`vacuum-technology`) → Oil-Sealed Rotary Vane Pumps (`rotary-vane-pumps`)  
**Tagline:** *Intelligent Inverter-Driven Rotary Vane Vacuum Pumps with Constant Pumping Speed*  

Next-generation rotary vane pump featuring an integrated variable speed drive maintaining constant volumetric pumping speed worldwide regardless of 50/60Hz line frequency.

#### Verified Models
`nRVi10`, `nRVi15`, `nRVi20`

#### Key Technical Specifications
| Model | Parameter | Value | Unit | Source Reference | Footnote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `nRVi10` | Pumping Speed | **10** | m3/h | Page 2, Technical Data | Universal inverter |
| `nRVi10` | Ultimate Pressure | **0.002** | mbar | Page 2, Technical Data | Without ballast |
| `nRVi15` | Pumping Speed | **15** | m3/h | Page 2, Technical Data | Universal inverter |
| `nRVi15` | Ultimate Pressure | **0.002** | mbar | Page 2, Technical Data | Without ballast |
| `nRVi20` | Pumping Speed | **20** | m3/h | Page 2, Technical Data | Universal inverter |
| `nRVi20` | Ultimate Pressure | **0.002** | mbar | Page 2, Technical Data | Without ballast |

#### Vacuum Connections & Target Applications
- **Inlet Flange:** NW25
- **Exhaust / Outlet Flange:** NW25
- **Target Applications:** Analytical laboratory backing, Freeze dryers, Centrifugal vacuum concentrators, Electron microscopy

#### Source Evidence Documents
- `EDW-DOC-043`: **nRVi Enhanced Rotary Vane - Datasheet** (Pub No: `3601 0267 01`, Type: `Datasheet`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/rotary-vane-pumps/3601-0267-01-nRVi-Datasheet.pdf)
- `EDW-DOC-047`: **nRVi Enhanced Rotary Vane - Brochure** (Pub No: `3601 0327 01`, Type: `Brochure`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/rotary-vane-pumps/3601-0327-01-nRVi-brochure.pdf)

#### SYINCO Commercial Status
- **RFQ Channel:** `standard-component` | **Action:** `Request Quote`
- **Channel Partner Status:** `authorized-channel-partner` | **Stock Status:** `import-on-demand`
- **Local Support:** factory-trained-engineers | **Warranty:** 12-month standard OEM warranty
- **Commercial Terms:** INR domestic billing, customs clearance, and local service support in India

---

<a id="edwards-e2s-series"></a>
### E2S Series Two-Stage Rotary Vane Vacuum Pumps
**Canonical ID:** `edwards-e2s-series`  
**Canonical URL:** `/products/vacuum-technology/edwards-e2s-series` (`indexable`)  
**OEM Taxonomy:** Edwards Vacuum → Vacuum Pumps → Rotary Vane Pumps  
**SYINCO Taxonomy:** Vacuum Technology & Abatement (`vacuum-technology`) → Oil-Sealed Rotary Vane Pumps (`rotary-vane-pumps`)  
**Tagline:** *Direct-Drive Two-Stage Rotary Vane Pumps for Research and Industrial Utility*  

Reliable dual-stage oil-sealed rotary vane pump delivering deep ultimate vacuum and proven vapor tolerance with gas ballast control.

#### Verified Models
`E2S45`, `E2S65`, `E2S85`

#### Key Technical Specifications
| Model | Parameter | Value | Unit | Source Reference | Footnote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `E2S45` | Displacement | **45** | m3/h | Page 4, Technical Data | 50 Hz |
| `E2S45` | Ultimate Pressure | **0.003** | mbar | Page 4, Technical Data | Without ballast |
| `E2S65` | Displacement | **65** | m3/h | Page 4, Technical Data | 50 Hz |
| `E2S65` | Ultimate Pressure | **0.003** | mbar | Page 4, Technical Data | Without ballast |
| `E2S85` | Displacement | **85** | m3/h | Page 4, Technical Data | 50 Hz |
| `E2S85` | Ultimate Pressure | **0.003** | mbar | Page 4, Technical Data | Without ballast |

#### Vacuum Connections & Target Applications
- **Inlet Flange:** ISO-K 40 / NW40
- **Exhaust / Outlet Flange:** NW25
- **Target Applications:** Refrigeration line dehydration, Brake fluid filling, Vacuum coating backing, Transformer evacuation

#### Source Evidence Documents
- `EDW-DOC-044`: **E2S Two Stage Rotary Vane Pumps - Brochure** (Pub No: `3602`, Type: `Brochure`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/rotary-vane-pumps/e2s-two-stage-rotary-vane-pumps-brochure.pdf)

#### SYINCO Commercial Status
- **RFQ Channel:** `standard-component` | **Action:** `Request Quote`
- **Channel Partner Status:** `authorized-channel-partner` | **Stock Status:** `import-on-demand`
- **Local Support:** factory-trained-engineers | **Warranty:** 12-month standard OEM warranty
- **Commercial Terms:** INR domestic billing, customs clearance, and local service support in India

---

<a id="edwards-nes-ex-series"></a>
### nES EX Series Explosion-Proof Rotary Vane Pumps
**Canonical ID:** `edwards-nes-ex-series`  
**Canonical URL:** `/products/vacuum-technology/edwards-nes-ex-series` (`indexable`)  
**OEM Taxonomy:** Edwards Vacuum → Vacuum Pumps → Rotary Vane Pumps  
**SYINCO Taxonomy:** Vacuum Technology & Abatement (`vacuum-technology`) → Single-Stage Rotary Vane Pumps (`rotary-vane-pumps`)  
**Tagline:** *ATEX Explosion-Proof Certified Single-Stage Rotary Vane Vacuum Pumps*  

Specialized single-stage oil-sealed rotary vane vacuum pump certified for ATEX Zone 1/21 operation in explosive atmosphere environments.

#### Verified Models
`nES 40 EX`, `nES 65 EX`, `nES 100 EX`, `nES 160 EX`, `nES 250 EX`, `nES 300 EX`, `nES 630 EX`, `nES 750 EX`

#### Key Technical Specifications
| Model | Parameter | Value | Unit | Source Reference | Footnote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `nES 40 EX` | Displacement | **40** | m3/h | Page 4, Technical Data | 50 Hz |
| `nES 40 EX` | Ultimate Pressure | **0.5** | mbar | Page 4, Technical Data | ATEX certified |
| `nES 100 EX` | Displacement | **100** | m3/h | Page 4, Technical Data | 50 Hz |
| `nES 100 EX` | Ultimate Pressure | **0.5** | mbar | Page 4, Technical Data | ATEX certified |
| `nES 300 EX` | Displacement | **300** | m3/h | Page 4, Technical Data | 50 Hz |
| `nES 300 EX` | Ultimate Pressure | **0.5** | mbar | Page 4, Technical Data | ATEX certified |

#### Vacuum Connections & Target Applications
- **Inlet Flange:** G 1.25" to G 3"
- **Exhaust / Outlet Flange:** G 1.25" to G 3"
- **Target Applications:** Chemical vapor venting, Pharmaceutical drying in explosive zones, Solvent extraction in ATEX zones

#### Source Evidence Documents
- `EDW-DOC-045`: **nES EX Series Rotary Vane Pumps - Brochure** (Pub No: `3602`, Type: `Brochure`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/rotary-vane-pumps/nes-ex-series-single-stage-rotary-vane-pumps-brochure-old.pdf)

#### SYINCO Commercial Status
- **RFQ Channel:** `capital-equipment` | **Action:** `Request Technical Quote`
- **Channel Partner Status:** `authorized-channel-partner` | **Stock Status:** `import-on-demand`
- **Local Support:** factory-trained-engineers | **Warranty:** 12-month standard OEM warranty
- **Commercial Terms:** INR domestic billing, customs clearance, and local service support in India

---

<a id="edwards-e2m-small-series"></a>
### E2M0.7 / E2M1.5 / E2M2.5 Compact Rotary Vane Pumps
**Canonical ID:** `edwards-e2m-small-series`  
**Canonical URL:** `/products/vacuum-technology/edwards-e2m-small-series` (`indexable`)  
**OEM Taxonomy:** Edwards Vacuum → Vacuum Pumps → Rotary Vane Pumps  
**SYINCO Taxonomy:** Vacuum Technology & Abatement (`vacuum-technology`) → Compact Rotary Vane Pumps (`rotary-vane-pumps`)  
**Tagline:** *Compact High-Performance Dual-Stage Laboratory Rotary Vane Pumps*  

Whisper-quiet, ultra-reliable small laboratory rotary vane pump delivering deep 10^-3 mbar ultimate pressure with internal oil suckback protection.

#### Verified Models
`E2M0.7`, `E2M1.5`, `E2M2.5`

#### Key Technical Specifications
| Model | Parameter | Value | Unit | Source Reference | Footnote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `E2M0.7` | Displacement | **0.9** | m3/h | Page 2, Technical Data | 50 Hz |
| `E2M0.7` | Ultimate Pressure | **0.003** | mbar | Page 2, Technical Data | Without ballast |
| `E2M1.5` | Displacement | **1.8** | m3/h | Page 2, Technical Data | 50 Hz |
| `E2M1.5` | Ultimate Pressure | **0.003** | mbar | Page 2, Technical Data | Without ballast |
| `E2M2.5` | Displacement | **2.8** | m3/h | Page 2, Technical Data | 50 Hz |
| `E2M2.5` | Ultimate Pressure | **0.003** | mbar | Page 2, Technical Data | Without ballast |

#### Vacuum Connections & Target Applications
- **Inlet Flange:** NW16
- **Exhaust / Outlet Flange:** NW16
- **Target Applications:** Turbopump backing, Helium leak detectors, Vacuum centrifuges, Gas lasers

#### Source Evidence Documents
- `EDW-DOC-046`: **E2M0.7, E2M1.5 and E2M2.5 Oil Sealed Rotary Vane Pump -Datasheet** (Pub No: `3601 0714 01`, Type: `Datasheet`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/rotary-vane-pumps/3601-0714-01-E2M0.7-2.5-datasheet.pdf)

#### SYINCO Commercial Status
- **RFQ Channel:** `standard-component` | **Action:** `Request Quote`
- **Channel Partner Status:** `authorized-channel-partner` | **Stock Status:** `import-on-demand`
- **Local Support:** factory-trained-engineers | **Warranty:** 12-month standard OEM warranty
- **Commercial Terms:** INR domestic billing, customs clearance, and local service support in India

---

<a id="edwards-nes-series"></a>
### nES Series Single-Stage Rotary Vane Vacuum Pumps
**Canonical ID:** `edwards-nes-series`  
**Canonical URL:** `/products/vacuum-technology/edwards-nes-series` (`indexable`)  
**OEM Taxonomy:** Edwards Vacuum → Vacuum Pumps → Rotary Vane Pumps  
**SYINCO Taxonomy:** Vacuum Technology & Abatement (`vacuum-technology`) → Single-Stage Rotary Vane Pumps (`rotary-vane-pumps`)  
**Tagline:** *Robust Single-Stage Oil-Sealed Rotary Vane Pumps for Industrial Automation*  

High-efficiency industrial rotary vane pump delivering steady roughing performance, low noise, and integrated oil mist filtration.

#### Verified Models
`nES 40`, `nES 65`, `nES 100`, `nES 160`, `nES 250`, `nES 300`, `nES 400`, `nES 500`, `nES 630`, `nES 750`

#### Key Technical Specifications
| Model | Parameter | Value | Unit | Source Reference | Footnote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `nES 40` | Displacement | **40** | m3/h | Page 6, Technical Specifications | 50 Hz |
| `nES 40` | Ultimate Pressure | **0.5** | mbar | Page 6, Technical Specifications | Without ballast |
| `nES 100` | Displacement | **100** | m3/h | Page 6, Technical Specifications | 50 Hz |
| `nES 100` | Ultimate Pressure | **0.5** | mbar | Page 6, Technical Specifications | Without ballast |
| `nES 300` | Displacement | **300** | m3/h | Page 6, Technical Specifications | 50 Hz |
| `nES 300` | Ultimate Pressure | **0.5** | mbar | Page 6, Technical Specifications | Without ballast |
| `nES 630` | Displacement | **630** | m3/h | Page 6, Technical Specifications | 50 Hz |
| `nES 630` | Ultimate Pressure | **0.5** | mbar | Page 6, Technical Specifications | Without ballast |

#### Vacuum Connections & Target Applications
- **Inlet Flange:** G 1.25" to G 3"
- **Exhaust / Outlet Flange:** G 1.25" to G 3"
- **Target Applications:** Food packaging, Vacuum holding and lifting, Plastics forming, General factory vacuum

#### Source Evidence Documents
- `EDW-DOC-048`: **nES Series - Brochure** (Pub No: `3602`, Type: `Brochure`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/rotary-vane-pumps/3602014101-nES-Series-EN-Web.pdf)

#### SYINCO Commercial Status
- **RFQ Channel:** `capital-equipment` | **Action:** `Request Quote`
- **Channel Partner Status:** `authorized-channel-partner` | **Stock Status:** `import-on-demand`
- **Local Support:** factory-trained-engineers | **Warranty:** 12-month standard OEM warranty
- **Commercial Terms:** INR domestic billing, customs clearance, and local service support in India

---

<a id="edwards-rv-series"></a>
### Edwards RV Series Rotary Vane Vacuum Pumps
**Canonical ID:** `edwards-rv-series`  
**Canonical URL:** `/products/vacuum-technology/edwards-rv-series` (`indexable`)  
**OEM Taxonomy:** Edwards Vacuum → Vacuum Pumps → Rotary Vane Pumps  
**SYINCO Taxonomy:** Vacuum Technology & Abatement (`vacuum-technology`) → Laboratory Rotary Vane Pumps (`rotary-vane-pumps`)  
**Tagline:** *The World Standard Dual-Mode Rotary Vane Vacuum Pump for Laboratory & R&D*  

Universal laboratory workhorse offering unique dual-mode operation (high throughput or high vacuum) with rapid gas ballast control.

#### Verified Models
`RV3`, `RV5`, `RV8`, `RV12`

#### Key Technical Specifications
| Model | Parameter | Value | Unit | Source Reference | Footnote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `RV3` | Displacement | **3.7** | m3/h | Specifications Table | 50 Hz |
| `RV3` | Ultimate Vacuum | **0.002** | mbar | Specifications Table | High vacuum mode |
| `RV5` | Displacement | **5.8** | m3/h | Specifications Table | 50 Hz |
| `RV5` | Ultimate Vacuum | **0.002** | mbar | Specifications Table | High vacuum mode |
| `RV8` | Displacement | **9.7** | m3/h | Specifications Table | 50 Hz |
| `RV8` | Ultimate Vacuum | **0.002** | mbar | Specifications Table | High vacuum mode |
| `RV12` | Displacement | **14.2** | m3/h | Specifications Table | 50 Hz |
| `RV12` | Ultimate Vacuum | **0.002** | mbar | Specifications Table | High vacuum mode |

#### Vacuum Connections & Target Applications
- **Inlet Flange:** NW25
- **Exhaust / Outlet Flange:** NW25
- **Target Applications:** Turbopump backing, Refrigeration servicing, Analytical chemistry, Glove box evacuation, Freeze drying

#### Source Evidence Documents
- `EDW-DOC-049`: **3601-0076-01-rv-oil-sealed-rotary-vane-pumps** (Pub No: `Digital Edition`, Type: `Digital Interactive Brochure`) — [Source Link](https://digitalbrochure.edwardsvacuum.com/RV-oil-sealed-rotary-vane-pumps/en)

#### SYINCO Commercial Status
- **RFQ Channel:** `standard-component` | **Action:** `Request Quote`
- **Channel Partner Status:** `authorized-channel-partner` | **Stock Status:** `import-on-demand`
- **Local Support:** factory-trained-engineers | **Warranty:** 12-month standard OEM warranty
- **Commercial Terms:** INR domestic billing, customs clearance, and local service support in India

---

<a id="edwards-small-em-series"></a>
### Small EM Series Two-Stage Rotary Vane Pumps
**Canonical ID:** `edwards-small-em-series`  
**Canonical URL:** `/products/vacuum-technology/edwards-small-em-series` (`indexable`)  
**OEM Taxonomy:** Edwards Vacuum → Vacuum Pumps → Rotary Vane Pumps  
**SYINCO Taxonomy:** Vacuum Technology & Abatement (`vacuum-technology`) → Industrial Rotary Vane Pumps (`rotary-vane-pumps`)  
**Tagline:** *Rugged Mechanical Mechanical Rotary Vane Pumps for High Reliability*  

Heavy-duty mechanical dual-stage rotary vane pump designed for robust industrial laboratory service with integral oil pressure system.

#### Verified Models
`E1M18`, `E2M18`, `E2M28`, `E2M30`

#### Key Technical Specifications
| Model | Parameter | Value | Unit | Source Reference | Footnote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `E2M18` | Displacement | **20.5** | m3/h | Technical Data | 50 Hz |
| `E2M18` | Ultimate Pressure | **0.001** | mbar | Technical Data | Without ballast |
| `E2M28` | Displacement | **32.2** | m3/h | Technical Data | 50 Hz |
| `E2M28` | Ultimate Pressure | **0.001** | mbar | Technical Data | Without ballast |

#### Vacuum Connections & Target Applications
- **Inlet Flange:** NW25
- **Exhaust / Outlet Flange:** NW25
- **Target Applications:** Vacuum ovens, Distillation systems, Backing high vacuum turbopumps, Refrigeration dehydration

#### Source Evidence Documents
- `EDW-DOC-050`: **3601-0066-01-small-em-oil-sealed-rotary-vane-pumps** (Pub No: `Digital Edition`, Type: `Digital Interactive Brochure`) — [Source Link](https://digitalbrochure.edwardsvacuum.com/Small-EM-oil-sealed-rotary-vane-pumps/en)

#### SYINCO Commercial Status
- **RFQ Channel:** `standard-component` | **Action:** `Request Quote`
- **Channel Partner Status:** `authorized-channel-partner` | **Stock Status:** `import-on-demand`
- **Local Support:** factory-trained-engineers | **Warranty:** 12-month standard OEM warranty
- **Commercial Terms:** INR domestic billing, customs clearance, and local service support in India

---

<a id="edwards-eld500"></a>
### ELD500 Precision Helium & Hydrogen Leak Detectors
**Canonical ID:** `edwards-eld500`  
**Canonical URL:** `/products/vacuum-technology/edwards-eld500` (`indexable`)  
**OEM Taxonomy:** Edwards Vacuum → Leak Detection → Helium Leak Detectors  
**SYINCO Taxonomy:** Vacuum Technology & Abatement (`vacuum-technology`) → Precision Leak Detectors (`leak-detection`)  
**Tagline:** *Fully Automated Mobile Helium and Hydrogen Sniffer & Vacuum Leak Detector*  

World-class helium mass spectrometer leak detector offering lightning-fast test cycles, high sensitivity down to 5x10^-12 mbar L/s, and intuitive touchscreen control.

#### Verified Models
`ELD500 Standard`, `ELD500 FLEX`, `ELD500 WET`

#### Key Technical Specifications
| Model | Parameter | Value | Unit | Source Reference | Footnote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `ELD500` | Minimum Detectable Leak Rate (Vacuum) | **5e-12** | mbar L/s | Page 2, Technical Specifications | Helium fine mode |
| `ELD500` | Minimum Detectable Leak Rate (Sniffing) | **5e-9** | mbar L/s | Page 2, Technical Specifications | With sniffer line |
| `ELD500` | Pumping Speed (Backing) | **2.5** | m3/h | Page 2, Technical Specifications | Internal diaphragm / vane |
| `ELD500` | Inlet Test Pressure | **15** | mbar | Page 2, Technical Specifications | Gross leak test port |

#### Vacuum Connections & Target Applications
- **Inlet Flange:** NW25
- **Exhaust / Outlet Flange:** Sniffer connection
- **Target Applications:** Aerospace component leak testing, Automotive fuel rails and air conditioning, Semiconductor gas lines, Vacuum chamber integrity

#### Source Evidence Documents
- `EDW-DOC-052`: **ELD500 - Datasheet** (Pub No: `3601 0355 01`, Type: `Datasheet`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/leak-detection/3601-0355-01-ELD500-Datasheet.pdf)
- `EDW-DOC-057`: **3601-0416-01-eld500-precision-leak-detector** (Pub No: `Digital Edition`, Type: `Digital Interactive Brochure`) — [Source Link](https://digitalbrochure.edwardsvacuum.com/ELD500-precision-leak-detector/en)

#### SYINCO Commercial Status
- **RFQ Channel:** `capital-equipment` | **Action:** `Request Technical Quote`
- **Channel Partner Status:** `authorized-channel-partner` | **Stock Status:** `import-on-demand`
- **Local Support:** factory-trained-engineers | **Warranty:** 12-month standard OEM warranty
- **Commercial Terms:** INR domestic billing, customs clearance, and local service support in India

---

<a id="edwards-eld30"></a>
### ELD30 Industrial Helium Leak Detectors
**Canonical ID:** `edwards-eld30`  
**Canonical URL:** `/products/vacuum-technology/edwards-eld30` (`indexable`)  
**OEM Taxonomy:** Edwards Vacuum → Leak Detection → Helium Leak Detectors  
**SYINCO Taxonomy:** Vacuum Technology & Abatement (`vacuum-technology`) → Industrial Leak Detectors (`leak-detection`)  
**Tagline:** *Heavy-Duty Production Line Industrial Helium Leak Detector*  

Robust industrial mass spectrometer leak detector optimized for high throughput manufacturing, rapid response times, and industrial protocol integration.

#### Verified Models
`ELD30 Standard`, `ELD30 Dry`

#### Key Technical Specifications
| Model | Parameter | Value | Unit | Source Reference | Footnote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `ELD30` | Minimum Detectable Leak Rate | **1e-11** | mbar L/s | Page 4, Technical Specifications | Vacuum mode |
| `ELD30` | Inlet Port | **NW25** | flange | Page 4, Technical Specifications | Standard port |
| `ELD30` | Cycle Time | **< 1** | s | Page 4, Technical Specifications | Fast cycle |

#### Vacuum Connections & Target Applications
- **Inlet Flange:** NW25
- **Exhaust / Outlet Flange:** Exhaust
- **Target Applications:** Automotive production lines, HVAC coil testing, Hermetic package testing, Gas cylinder valves

#### Source Evidence Documents
- `EDW-DOC-053`: **ELD30 Industrial Leak Detector - Brochure** (Pub No: `3601 0975 01`, Type: `Brochure`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/leak-detection/3601-0976-01_ELD30-Industrial-Leak-Detector-Brochure.pdf)

#### SYINCO Commercial Status
- **RFQ Channel:** `capital-equipment` | **Action:** `Request Technical Quote`
- **Channel Partner Status:** `authorized-channel-partner` | **Stock Status:** `import-on-demand`
- **Local Support:** factory-trained-engineers | **Warranty:** 12-month standard OEM warranty
- **Commercial Terms:** INR domestic billing, customs clearance, and local service support in India

---

<a id="edwards-eld4000"></a>
### ELD4000 High-Throughput Helium Leak Detectors
**Canonical ID:** `edwards-eld4000`  
**Canonical URL:** `/products/vacuum-technology/edwards-eld4000` (`indexable`)  
**OEM Taxonomy:** Edwards Vacuum → Leak Detection → Helium Leak Detectors  
**SYINCO Taxonomy:** Vacuum Technology & Abatement (`vacuum-technology`) → High-Throughput Leak Detectors (`leak-detection`)  
**Tagline:** *Ultra-Fast Vacuum & Sniffer Leak Detector for Component Manufacturing*  

High-speed leak testing system featuring dual mass spectrometer detection, automated calibration, and robust industrial communications.

#### Verified Models
`ELD4000`

#### Key Technical Specifications
| Model | Parameter | Value | Unit | Source Reference | Footnote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `ELD4000` | Detectability | **1e-11** | mbar L/s | Page 2, Specifications | Vacuum method |
| `ELD4000` | Gross Leak Port | **18** | mbar | Page 2, Specifications | Max crossover pressure |

#### Vacuum Connections & Target Applications
- **Inlet Flange:** NW25
- **Exhaust / Outlet Flange:** Exhaust
- **Target Applications:** High-volume valve testing, Automotive brake hoses, Power distribution switchgear

#### Source Evidence Documents
- `EDW-DOC-054`: **ELD4000 Leak Detector - Brochure** (Pub No: `3601 0846 01`, Type: `Brochure`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/leak-detection/3601-0846-01-ELD4000-Leak-Detector.pdf)

#### SYINCO Commercial Status
- **RFQ Channel:** `capital-equipment` | **Action:** `Request Technical Quote`
- **Channel Partner Status:** `authorized-channel-partner` | **Stock Status:** `import-on-demand`
- **Local Support:** factory-trained-engineers | **Warranty:** 12-month standard OEM warranty
- **Commercial Terms:** INR domestic billing, customs clearance, and local service support in India

---

<a id="edwards-gascheck-g4"></a>
### GasCheck G4 Handheld Gas Leak Detectors
**Canonical ID:** `edwards-gascheck-g4`  
**Canonical URL:** `/products/vacuum-technology/edwards-gascheck-g4` (`indexable`)  
**OEM Taxonomy:** Edwards Vacuum → Leak Detection → Handheld Leak Detectors  
**SYINCO Taxonomy:** Vacuum Technology & Abatement (`vacuum-technology`) → Handheld Gas Leak Detectors (`leak-detection`)  
**Tagline:** *Portable Micro-Thermal Conductivity Handheld Gas Leak Detector*  

Highly sensitive portable leak detector utilizing advanced micro-volume thermal conductivity sensors to rapidly detect helium, SF6, refrigerants, and combustible tracer gases.

#### Verified Models
`GasCheck G1`, `GasCheck G2`, `GasCheck G3`, `GasCheck G4`

#### Key Technical Specifications
| Model | Parameter | Value | Unit | Source Reference | Footnote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `GasCheck G4` | Sensitivity (Helium) | **1e-5** | cc/sec | Page 2, Specifications | Thermal conductivity |
| `GasCheck G4` | Response Time | **1** | s | Page 2, Specifications | T90 response |
| `GasCheck G4` | Battery Life | **40** | hours | Page 2, Specifications | Alkaline AA cells |

#### Vacuum Connections & Target Applications
- **Inlet Flange:** Fine capillary nozzle
- **Exhaust / Outlet Flange:** Internal exhaust
- **Target Applications:** Gas cylinder manifold leak checks, Underground cable pressurized testing, Cryogenic tank monitoring, Glovebox seal verification

#### Source Evidence Documents
- `EDW-DOC-055`: **Gascheck G4 - Datasheet** (Pub No: `3601 0363 01`, Type: `Brochure`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/leak-detection/3601-0363-01-Gascheck-G4.pdf)
- `EDW-DOC-056`: **PRODUCT DATA SHEET - GASCHECK G4 GAS** (Pub No: `3601 0366 01`, Type: `Brochure`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/leak-detection/3601-0366-01-Gascheck-G4.pdf)

#### SYINCO Commercial Status
- **RFQ Channel:** `standard-component` | **Action:** `Request Quote`
- **Channel Partner Status:** `authorized-channel-partner` | **Stock Status:** `import-on-demand`
- **Local Support:** factory-trained-engineers | **Warranty:** 12-month standard OEM warranty
- **Commercial Terms:** INR domestic billing, customs clearance, and local service support in India

---

<a id="edwards-barocel-7000"></a>
### BAROCEL 7000 Series High-Accuracy Capacitance Manometers
**Canonical ID:** `edwards-barocel-7000`  
**Canonical URL:** `/products/vacuum-technology/edwards-barocel-7000` (`indexable`)  
**OEM Taxonomy:** Edwards Vacuum → Measurement & Control → Direct Pressure Measurement Gauges  
**SYINCO Taxonomy:** Vacuum Technology & Abatement (`vacuum-technology`) → Capacitance Manometers (`direct-pressure-gauges`)  
**Tagline:** *Temperature-Compensated & Heated Capacitance Diaphragm Gauges for Exact Pressure*  

Ultra-precise ceramic diaphragm capacitance manometer providing gas-independent absolute pressure measurement with 0.15% accuracy for critical semiconductor and process vacuum.

#### Verified Models
`BAROCEL 7025`, `BAROCEL 7045`, `BAROCEL 7100`

#### Key Technical Specifications
| Model | Parameter | Value | Unit | Source Reference | Footnote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `BAROCEL 7025` | Operating Temperature | **Ambient / Unheated** |  | Page 2, Specifications | Compensated |
| `BAROCEL 7025` | Accuracy | **0.15** | % of reading | Page 2, Specifications | Including linearity |
| `BAROCEL 7045` | Operating Temperature | **45** | °C | Page 2, Specifications | Internally heated |
| `BAROCEL 7045` | Accuracy | **0.15** | % of reading | Page 2, Specifications | Including linearity |
| `BAROCEL 7100` | Operating Temperature | **100** | °C | Page 2, Specifications | Internally heated for condensable vapors |
| `BAROCEL 7100` | Accuracy | **0.15** | % of reading | Page 2, Specifications | Including linearity |

#### Vacuum Connections & Target Applications
- **Inlet Flange:** NW16 / 8 VCR / DN16CF
- **Exhaust / Outlet Flange:** N/A
- **Target Applications:** Semiconductor etch and CVD, Thin-film sputtering, Freeze-drying endpoint detection, Secondary calibration standards

#### Source Evidence Documents
- `EDW-DOC-058`: **BAROCEL 7000 Series Gauge - Datasheet** (Pub No: `3601 0694 01`, Type: `Datasheet`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/measurement-and-control/direct-pressure-measurement-gauges/3601-0694-01-BAROCEL7000series-Datasheet.pdf)
- `EDW-DOC-060`: **BAROCEL 7000 Series Gauge - Brochure** (Pub No: `3601 0555 01`, Type: `Brochure`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/measurement-and-control/direct-pressure-measurement-gauges/3601-0555-01-BAROCEL-7000series-Brochure.pdf)

#### SYINCO Commercial Status
- **RFQ Channel:** `standard-component` | **Action:** `Request Quote`
- **Channel Partner Status:** `authorized-channel-partner` | **Stock Status:** `import-on-demand`
- **Local Support:** factory-trained-engineers | **Warranty:** 12-month standard OEM warranty
- **Commercial Terms:** INR domestic billing, customs clearance, and local service support in India

---

<a id="edwards-asg2"></a>
### ASG2 Active Strain Gauges
**Canonical ID:** `edwards-asg2`  
**Canonical URL:** `/products/vacuum-technology/edwards-asg2` (`indexable`)  
**OEM Taxonomy:** Edwards Vacuum → Measurement & Control → Direct Pressure Measurement Gauges  
**SYINCO Taxonomy:** Vacuum Technology & Abatement (`vacuum-technology`) → Strain Gauges (`direct-pressure-gauges`)  
**Tagline:** *Gas-Independent Piezo Strain Gauge from 1 to 2000 mbar*  

Robust ceramic piezo strain gauge measuring absolute pressure independent of gas composition from atmospheric pressure down to rough vacuum.

#### Verified Models
`ASG2-1000`, `ASG2-2000`

#### Key Technical Specifications
| Model | Parameter | Value | Unit | Source Reference | Footnote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `ASG2-1000` | Measurement Range | **1 to 1000** | mbar | Page 2, Specifications | Linear output |
| `ASG2-1000` | Accuracy | **1** | % of reading | Page 2, Specifications | Gas independent |
| `ASG2-2000` | Measurement Range | **2 to 2000** | mbar | Page 2, Specifications | Overpressure rated |
| `ASG2-2000` | Accuracy | **1** | % of reading | Page 2, Specifications | Gas independent |

#### Vacuum Connections & Target Applications
- **Inlet Flange:** NW16 / 1/8" NPT
- **Exhaust / Outlet Flange:** N/A
- **Target Applications:** Load lock vent monitoring, Atmospheric chamber cycling, Food packaging verification

#### Source Evidence Documents
- `EDW-DOC-059`: **ASG2 Active Strain Gauge - Datasheet** (Pub No: `needs-verification`, Type: `Datasheet`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/measurement-and-control/direct-pressure-measurement-gauges/3601-0184-01-ASG2.pdf)

#### SYINCO Commercial Status
- **RFQ Channel:** `standard-component` | **Action:** `Request Quote`
- **Channel Partner Status:** `authorized-channel-partner` | **Stock Status:** `import-on-demand`
- **Local Support:** factory-trained-engineers | **Warranty:** 12-month standard OEM warranty
- **Commercial Terms:** INR domestic billing, customs clearance, and local service support in India

---

<a id="edwards-aigx"></a>
### AIGX Active Ion Gauges
**Canonical ID:** `edwards-aigx`  
**Canonical URL:** `/products/vacuum-technology/edwards-aigx` (`indexable`)  
**OEM Taxonomy:** Edwards Vacuum → Measurement & Control → Indirect Pressure Measurement Gauges  
**SYINCO Taxonomy:** Vacuum Technology & Abatement (`vacuum-technology`) → Hot Cathode Ion Gauges (`indirect-pressure-gauges`)  
**Tagline:** *Hot Cathode Active Ionization Gauge for High and Ultra-High Vacuum*  

Compact Bayard-Alpert active ionization gauge with twin filaments, degas function, and integrated electronics for high-vacuum monitoring down to 10^-9 mbar.

#### Verified Models
`AIGX-S`, `AIGX-D`

#### Key Technical Specifications
| Model | Parameter | Value | Unit | Source Reference | Footnote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `AIGX-S` | Measurement Range | **6.6e-10 to 6.6e-2** | mbar | Page 2, Specifications | Twin yttria filaments |
| `AIGX-D` | Measurement Range | **6.6e-10 to 6.6e-2** | mbar | Page 2, Specifications | Dual filament design |

#### Vacuum Connections & Target Applications
- **Inlet Flange:** NW25 / DN40CF
- **Exhaust / Outlet Flange:** N/A
- **Target Applications:** UHV chambers, Molecular beam epitaxy (MBE), Surface analysis instruments, Space simulators

#### Source Evidence Documents
- `EDW-DOC-061`: **AIGX Active Ion Gauge - Datasheet** (Pub No: `3601 0131 01`, Type: `Datasheet`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/measurement-and-control/indirect-pressure-measurement-gauges/3601-0131-01-AIGX-datasheet.pdf)

#### SYINCO Commercial Status
- **RFQ Channel:** `standard-component` | **Action:** `Request Quote`
- **Channel Partner Status:** `authorized-channel-partner` | **Stock Status:** `import-on-demand`
- **Local Support:** factory-trained-engineers | **Warranty:** 12-month standard OEM warranty
- **Commercial Terms:** INR domestic billing, customs clearance, and local service support in India

---

<a id="edwards-wrh"></a>
### WRH Active Wide Range Hot Cathode Gauges
**Canonical ID:** `edwards-wrh`  
**Canonical URL:** `/products/vacuum-technology/edwards-wrh` (`indexable`)  
**OEM Taxonomy:** Edwards Vacuum → Measurement & Control → Indirect Pressure Measurement Gauges  
**SYINCO Taxonomy:** Vacuum Technology & Abatement (`vacuum-technology`) → Wide Range Vacuum Gauges (`indirect-pressure-gauges`)  
**Tagline:** *Combination Pirani and Hot Cathode Gauge Covering Atmosphere to 10^-9 mbar*  

Single active gauge housing both Pirani and hot cathode filaments for seamless wide-range pressure measurement from atmospheric pressure to UHV without user intervention.

#### Verified Models
`WRH-100`

#### Key Technical Specifications
| Model | Parameter | Value | Unit | Source Reference | Footnote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `WRH-100` | Measurement Range | **1e-9 to 1000** | mbar | Page 2, Specifications | Continuous seamless output |
| `WRH-100` | Filaments | **Tungsten / Yttria coated** |  | Page 2, Specifications | Automatic crossover |

#### Vacuum Connections & Target Applications
- **Inlet Flange:** NW25 / DN40CF
- **Exhaust / Outlet Flange:** N/A
- **Target Applications:** Turbomolecular pump control, Vacuum furnace automation, Electron beam welders

#### Source Evidence Documents
- `EDW-DOC-062`: **WRH Active Hot Cathode Pirani Gauge - Datasheet** (Pub No: `3601 0613 01`, Type: `Datasheet`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/measurement-and-control/indirect-pressure-measurement-gauges/3601-0613-01-WRH-Datasheet.pdf)

#### SYINCO Commercial Status
- **RFQ Channel:** `standard-component` | **Action:** `Request Quote`
- **Channel Partner Status:** `authorized-channel-partner` | **Stock Status:** `import-on-demand`
- **Local Support:** factory-trained-engineers | **Warranty:** 12-month standard OEM warranty
- **Commercial Terms:** INR domestic billing, customs clearance, and local service support in India

---

<a id="edwards-passive-gauges"></a>
### Passive Vacuum Gauges & Sensor Heads
**Canonical ID:** `edwards-passive-gauges`  
**Canonical URL:** `/products/vacuum-technology/edwards-passive-gauges` (`indexable`)  
**OEM Taxonomy:** Edwards Vacuum → Measurement & Control → Indirect Pressure Measurement Gauges  
**SYINCO Taxonomy:** Vacuum Technology & Abatement (`vacuum-technology`) → Passive Vacuum Sensors (`indirect-pressure-gauges`)  
**Tagline:** *Radiation-Hard and Bakeable Passive Pirani and Penning Gauge Heads*  

Rugged passive sensor heads without on-board electronics, ideal for high-radiation, high-temperature, or severe bakeout environments.

#### Verified Models
`CP25K`, `PR25K`, `IG40`, `CPIG`

#### Key Technical Specifications
| Model | Parameter | Value | Unit | Source Reference | Footnote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `CP25K` | Range | **1e-9 to 1e-2** | mbar | Page 2, Specifications | Penning cold cathode |
| `PR25K` | Range | **1e-4 to 1000** | mbar | Page 2, Specifications | Pirani thermal conductivity |
| `IG40` | Range | **1e-10 to 1e-3** | mbar | Page 2, Specifications | Bakeable to 400°C |

#### Vacuum Connections & Target Applications
- **Inlet Flange:** NW25 / DN40CF
- **Exhaust / Outlet Flange:** N/A
- **Target Applications:** Particle accelerators, Synchrotron beamlines, Nuclear research, UHV bakeout ovens

#### Source Evidence Documents
- `EDW-DOC-063`: **Passive Gauges and Controllers - Datasheet** (Pub No: `3601 0307 01`, Type: `Brochure`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/measurement-and-control/indirect-pressure-measurement-gauges/3601-0307-01-Passive-Gauges.pdf)

#### SYINCO Commercial Status
- **RFQ Channel:** `standard-component` | **Action:** `Request Quote`
- **Channel Partner Status:** `authorized-channel-partner` | **Stock Status:** `import-on-demand`
- **Local Support:** factory-trained-engineers | **Warranty:** 12-month standard OEM warranty
- **Commercial Terms:** INR domestic billing, customs clearance, and local service support in India

---

<a id="edwards-apgx-h"></a>
### APGX-H Active Linear Convection Gauges
**Canonical ID:** `edwards-apgx-h`  
**Canonical URL:** `/products/vacuum-technology/edwards-apgx-h` (`indexable`)  
**OEM Taxonomy:** Edwards Vacuum → Measurement & Control → Indirect Pressure Measurement Gauges  
**SYINCO Taxonomy:** Vacuum Technology & Abatement (`vacuum-technology`) → Convection Pirani Gauges (`indirect-pressure-gauges`)  
**Tagline:** *High-Accuracy Active Linear Convection Pirani Gauge up to Atmosphere*  

Linearized convection Pirani gauge extending the measurement range up to 1333 mbar with high accuracy in the roughing regime.

#### Verified Models
`APGX-H`

#### Key Technical Specifications
| Model | Parameter | Value | Unit | Source Reference | Footnote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `APGX-H` | Range | **1.3e-4 to 1333** | mbar | Page 2, Specifications | Convection enhanced |

#### Vacuum Connections & Target Applications
- **Inlet Flange:** NW16 / NW25 / 1/8" NPT
- **Exhaust / Outlet Flange:** N/A
- **Target Applications:** Rough vacuum monitoring, Foreline interlocks, Vacuum dehydration

#### Source Evidence Documents
- `EDW-DOC-064`: **APGX-H Linear Convection Gauge - Datasheet** (Pub No: `3601 0114 01`, Type: `Datasheet`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/measurement-and-control/indirect-pressure-measurement-gauges/3601-0114-01-APGX-H-gauge.pdf)

#### SYINCO Commercial Status
- **RFQ Channel:** `standard-component` | **Action:** `Request Quote`
- **Channel Partner Status:** `authorized-channel-partner` | **Stock Status:** `import-on-demand`
- **Local Support:** factory-trained-engineers | **Warranty:** 12-month standard OEM warranty
- **Commercial Terms:** INR domestic billing, customs clearance, and local service support in India

---

<a id="edwards-aim200"></a>
### AIM200 Active Inverted Magnetron Gauges
**Canonical ID:** `edwards-aim200`  
**Canonical URL:** `/products/vacuum-technology/edwards-aim200` (`indexable`)  
**OEM Taxonomy:** Edwards Vacuum → Measurement & Control → Indirect Pressure Measurement Gauges  
**SYINCO Taxonomy:** Vacuum Technology & Abatement (`vacuum-technology`) → Cold Cathode Gauges (`indirect-pressure-gauges`)  
**Tagline:** *Rugged Cold Cathode Inverted Magnetron Gauge for High Vacuum*  

Next-generation active inverted magnetron gauge designed to strike reliably at deep vacuum and withstand contamination from sputtering and coating.

#### Verified Models
`AIM200-S`, `AIM200-NW25`

#### Key Technical Specifications
| Model | Parameter | Value | Unit | Source Reference | Footnote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `AIM200` | Range | **1e-9 to 1e-2** | mbar | Page 2, Specifications | Cold cathode |
| `AIM200` | Striking Voltage | **3.0** | kV | Page 2, Specifications | Automatic strike |

#### Vacuum Connections & Target Applications
- **Inlet Flange:** NW25 / DN40CF
- **Exhaust / Outlet Flange:** N/A
- **Target Applications:** Coating systems, Furnaces, Scanning electron microscopes, Industrial vacuum lines

#### Source Evidence Documents
- `EDW-DOC-065`: **AIM200 Active Inverted Magnetron Gauge - Datasheet** (Pub No: `3601 0754 01`, Type: `Datasheet`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/measurement-and-control/indirect-pressure-measurement-gauges/3601-0754-01-AIM200-Datasheet.pdf)

#### SYINCO Commercial Status
- **RFQ Channel:** `standard-component` | **Action:** `Request Quote`
- **Channel Partner Status:** `authorized-channel-partner` | **Stock Status:** `import-on-demand`
- **Local Support:** factory-trained-engineers | **Warranty:** 12-month standard OEM warranty
- **Commercial Terms:** INR domestic billing, customs clearance, and local service support in India

---

<a id="edwards-apg200"></a>
### APG200 Active Pirani Vacuum Gauges
**Canonical ID:** `edwards-apg200`  
**Canonical URL:** `/products/vacuum-technology/edwards-apg200` (`indexable`)  
**OEM Taxonomy:** Edwards Vacuum → Measurement & Control → Indirect Pressure Measurement Gauges  
**SYINCO Taxonomy:** Vacuum Technology & Abatement (`vacuum-technology`) → Pirani Vacuum Gauges (`indirect-pressure-gauges`)  
**Tagline:** *Compact Active Pirani Gauge with Drop-In Replacement Tube Technology*  

Modern active Pirani vacuum gauge with field-replaceable pre-calibrated tube assembly and universal 0-10V linear/logarithmic output.

#### Verified Models
`APG200-LC`, `APG200-MP`

#### Key Technical Specifications
| Model | Parameter | Value | Unit | Source Reference | Footnote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `APG200-LC` | Range | **1e-4 to 1000** | mbar | Page 2, Specifications | Standard filament |
| `APG200-MP` | Range | **1e-3 to 1000** | mbar | Page 2, Specifications | Corrosion resistant |

#### Vacuum Connections & Target Applications
- **Inlet Flange:** NW16 / NW25
- **Exhaust / Outlet Flange:** N/A
- **Target Applications:** General vacuum measurement, Foreline interlocks, Laboratory instrument monitoring

#### Source Evidence Documents
- `EDW-DOC-066`: **APG200 Pirani Gauge - Datasheet** (Pub No: `3601 0834 01`, Type: `Datasheet`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/measurement-and-control/indirect-pressure-measurement-gauges/3601-0834-01-APG200-Datasheet.pdf)

#### SYINCO Commercial Status
- **RFQ Channel:** `standard-component` | **Action:** `Request Quote`
- **Channel Partner Status:** `authorized-channel-partner` | **Stock Status:** `import-on-demand`
- **Local Support:** factory-trained-engineers | **Warranty:** 12-month standard OEM warranty
- **Commercial Terms:** INR domestic billing, customs clearance, and local service support in India

---

<a id="edwards-wrg200"></a>
### WRG200 Active Wide Range Vacuum Gauges
**Canonical ID:** `edwards-wrg200`  
**Canonical URL:** `/products/vacuum-technology/edwards-wrg200` (`indexable`)  
**OEM Taxonomy:** Edwards Vacuum → Measurement & Control → Indirect Pressure Measurement Gauges  
**SYINCO Taxonomy:** Vacuum Technology & Abatement (`vacuum-technology`) → Wide Range Vacuum Gauges (`indirect-pressure-gauges`)  
**Tagline:** *Combined Pirani & Inverted Magnetron Gauge Measuring Atmosphere to 10^-9 mbar*  

Single-port wide-range active gauge seamlessly integrating a Pirani element and cold cathode inverted magnetron sensor.

#### Verified Models
`WRG200-NW25`, `WRG200-DN40CF`

#### Key Technical Specifications
| Model | Parameter | Value | Unit | Source Reference | Footnote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `WRG200` | Range | **1e-9 to 1000** | mbar | Page 2, Specifications | Automatic sensor transition |

#### Vacuum Connections & Target Applications
- **Inlet Flange:** NW25 / DN40CF
- **Exhaust / Outlet Flange:** N/A
- **Target Applications:** Analytical mass spectrometers, Electron microscopes, R&D vacuum systems

#### Source Evidence Documents
- `EDW-DOC-067`: **WRG200 Active Wide Range Gauge - Datasheet** (Pub No: `3601 0764 01`, Type: `Datasheet`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/measurement-and-control/indirect-pressure-measurement-gauges/3601-0764-01-WRG200-Datasheet.pdf)

#### SYINCO Commercial Status
- **RFQ Channel:** `standard-component` | **Action:** `Request Quote`
- **Channel Partner Status:** `authorized-channel-partner` | **Stock Status:** `import-on-demand`
- **Local Support:** factory-trained-engineers | **Warranty:** 12-month standard OEM warranty
- **Commercial Terms:** INR domestic billing, customs clearance, and local service support in India

---

<a id="edwards-p3"></a>
### P3 Handheld Vacuum Measuring Systems
**Canonical ID:** `edwards-p3`  
**Canonical URL:** `/products/vacuum-technology/edwards-p3` (`indexable`)  
**OEM Taxonomy:** Edwards Vacuum → Measurement & Control → Mechanical Vacuum Gauges and Switches  
**SYINCO Taxonomy:** Vacuum Technology & Abatement (`vacuum-technology`) → Handheld Vacuum Gauges (`mechanical-gauges-switches`)  
**Tagline:** *Battery-Powered Handheld Pirani Gauge for Field Service and Inspection*  

Rugged battery-operated portable vacuum meter measuring from 1200 to 1x10^-3 mbar with integrated data logging.

#### Verified Models
`P3 Handheld`

#### Key Technical Specifications
| Model | Parameter | Value | Unit | Source Reference | Footnote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `P3` | Range | **1e-3 to 1200** | mbar | Page 2, Specifications | Internal Pirani sensor |

#### Vacuum Connections & Target Applications
- **Inlet Flange:** NW16
- **Exhaust / Outlet Flange:** N/A
- **Target Applications:** Field maintenance, Vacuum pump servicing, Packaging line audits

#### Source Evidence Documents
- `EDW-DOC-068`: **P3 Handheld Measuring System - Datasheet** (Pub No: `3601 0384 01`, Type: `Datasheet`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/measurement-and-control/mechanical-vacuum-gauges-and-switches/3601-0384-01-P3-datasheet.pdf)

#### SYINCO Commercial Status
- **RFQ Channel:** `standard-component` | **Action:** `Request Quote`
- **Channel Partner Status:** `authorized-channel-partner` | **Stock Status:** `import-on-demand`
- **Local Support:** factory-trained-engineers | **Warranty:** 12-month standard OEM warranty
- **Commercial Terms:** INR domestic billing, customs clearance, and local service support in India

---

<a id="edwards-vs16k-is16k"></a>
### VS16K & IS16K Mechanical Vacuum Switches
**Canonical ID:** `edwards-vs16k-is16k`  
**Canonical URL:** `/products/vacuum-technology/edwards-vs16k-is16k` (`indexable`)  
**OEM Taxonomy:** Edwards Vacuum → Measurement & Control → Mechanical Vacuum Gauges and Switches  
**SYINCO Taxonomy:** Vacuum Technology & Abatement (`vacuum-technology`) → Vacuum Switches (`mechanical-gauges-switches`)  
**Tagline:** *Fail-Safe Mechanical Pressure Switches for System Protection Interlocks*  

Adjustable mechanical diaphragm vacuum switch providing reliable dry contact closure for interlocking pumps, valves, and safety systems.

#### Verified Models
`VS16K`, `IS16K`

#### Key Technical Specifications
| Model | Parameter | Value | Unit | Source Reference | Footnote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `VS16K` | Switching Range | **30 to 1000** | mbar | Page 2, Technical Data | Adjustable threshold |
| `IS16K` | Switching Range | **20 to 1000** | mbar | Page 2, Technical Data | Inherently safe ATEX |

#### Vacuum Connections & Target Applications
- **Inlet Flange:** NW16 / 1/8" BSP
- **Exhaust / Outlet Flange:** N/A
- **Target Applications:** Safety interlocks, Chamber vent alarm, Automatic valve triggering

#### Source Evidence Documents
- `EDW-DOC-069`: **VS16K IS16K vacuum switches - Datasheet** (Pub No: `3601 0156 01`, Type: `Datasheet`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/measurement-and-control/mechanical-vacuum-gauges-and-switches/3601-0156-01-VS16K-IS16K-vacuum-switches.pdf)

#### SYINCO Commercial Status
- **RFQ Channel:** `standard-component` | **Action:** `Request Quote`
- **Channel Partner Status:** `authorized-channel-partner` | **Stock Status:** `import-on-demand`
- **Local Support:** factory-trained-engineers | **Warranty:** 12-month standard OEM warranty
- **Commercial Terms:** INR domestic billing, customs clearance, and local service support in India

---

<a id="edwards-cg16k"></a>
### CG16K Capsule Dial Vacuum Gauges
**Canonical ID:** `edwards-cg16k`  
**Canonical URL:** `/products/vacuum-technology/edwards-cg16k` (`indexable`)  
**OEM Taxonomy:** Edwards Vacuum → Measurement & Control → Mechanical Vacuum Gauges and Switches  
**SYINCO Taxonomy:** Vacuum Technology & Abatement (`vacuum-technology`) → Dial Gauges (`mechanical-gauges-switches`)  
**Tagline:** *Precision Mechanical Capsule Dial Gauges Measuring Independent of Gas Type*  

Direct-reading aneroid capsule dial gauge measuring atmospheric down to 0 mbar with zero electrical power requirement.

#### Verified Models
`CG16K-0-20`, `CG16K-0-100`, `CG16K-0-1000`

#### Key Technical Specifications
| Model | Parameter | Value | Unit | Source Reference | Footnote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `CG16K-0-20` | Range | **0 to 20** | mbar | Page 2, Specifications | Fine roughing |
| `CG16K-0-1000` | Range | **0 to 1000** | mbar | Page 2, Specifications | Atmospheric span |

#### Vacuum Connections & Target Applications
- **Inlet Flange:** NW16 / 1/8" BSP
- **Exhaust / Outlet Flange:** N/A
- **Target Applications:** Explosive environments, Mobile pump carts, Educational laboratories

#### Source Evidence Documents
- `EDW-DOC-070`: **CG16K capsule dial gauges - Datasheet** (Pub No: `3601 0146 01`, Type: `Datasheet`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/measurement-and-control/mechanical-vacuum-gauges-and-switches/3601-0146-01-CG16K-capsule-dial-gauge.pdf)

#### SYINCO Commercial Status
- **RFQ Channel:** `standard-component` | **Action:** `Request Quote`
- **Channel Partner Status:** `authorized-channel-partner` | **Stock Status:** `import-on-demand`
- **Local Support:** factory-trained-engineers | **Warranty:** 12-month standard OEM warranty
- **Commercial Terms:** INR domestic billing, customs clearance, and local service support in India

---

<a id="edwards-p4-p5"></a>
### P4 & P5 Bluetooth LE Handheld Measuring Systems
**Canonical ID:** `edwards-p4-p5`  
**Canonical URL:** `/products/vacuum-technology/edwards-p4-p5` (`indexable`)  
**OEM Taxonomy:** Edwards Vacuum → Measurement & Control → Mechanical Vacuum Gauges and Switches  
**SYINCO Taxonomy:** Vacuum Technology & Abatement (`vacuum-technology`) → Wireless Handheld Gauges (`mechanical-gauges-switches`)  
**Tagline:** *Wireless Bluetooth Low Energy Handheld Vacuum Meters with Smart App Connectivity*  

Wireless handheld vacuum gauge connecting directly to iOS and Android smartphones via Bluetooth for live trending, remote logging, and field verification.

#### Verified Models
`P4 Bluetooth LE`, `P5 Bluetooth LE`

#### Key Technical Specifications
| Model | Parameter | Value | Unit | Source Reference | Footnote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `P4` | Range | **1e-4 to 1000** | mbar | Page 2, Specifications | Piezo/Pirani dual sensor |
| `P5` | Range | **1e-4 to 1000** | mbar | Page 2, Specifications | High precision piezo/Pirani |

#### Vacuum Connections & Target Applications
- **Inlet Flange:** NW16
- **Exhaust / Outlet Flange:** N/A
- **Target Applications:** Remote field service, HVAC charging audits, Transformer vacuum monitoring

#### Source Evidence Documents
- `EDW-DOC-071`: **P4 and P5 (Bluetooth LE) Handheld Gauges** (Pub No: `3601 0815 01`, Type: `Brochure`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/measurement-and-control/mechanical-vacuum-gauges-and-switches/3601-0815-01_P4-P5-Bluetooth-LE_Handheld-Measuring-Systems.pdf)

#### SYINCO Commercial Status
- **RFQ Channel:** `standard-component` | **Action:** `Request Quote`
- **Channel Partner Status:** `authorized-channel-partner` | **Stock Status:** `import-on-demand`
- **Local Support:** factory-trained-engineers | **Warranty:** 12-month standard OEM warranty
- **Commercial Terms:** INR domestic billing, customs clearance, and local service support in India

---

<a id="edwards-tic-controller"></a>
### TIC Turbo & Instrument Controllers
**Canonical ID:** `edwards-tic-controller`  
**Canonical URL:** `/products/vacuum-technology/edwards-tic-controller` (`indexable`)  
**OEM Taxonomy:** Edwards Vacuum → Measurement & Control → Vacuum Gauge and Pump Controllers  
**SYINCO Taxonomy:** Vacuum Technology & Abatement (`vacuum-technology`) → Vacuum Controllers (`vacuum-controllers`)  
**Tagline:** *Universal Rack and Benchtop Controller for Turbomolecular Pumps and Gauges*  

Compact controller capable of operating any Edwards turbopump up to nEXT400 plus up to 3 or 6 active vacuum gauges and backing pumps.

#### Verified Models
`TIC 3-Gauge`, `TIC 6-Gauge`, `TIC Turbo 100W`, `TIC Turbo 200W`

#### Key Technical Specifications
| Model | Parameter | Value | Unit | Source Reference | Footnote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `TIC 3-Gauge` | Gauge Channels | **3** | channels | Page 2, Specifications | RJ45 active gauge ports |
| `TIC Turbo 200W` | Turbo Output | **200** | W | Page 2, Specifications | 24V DC drive |

#### Vacuum Connections & Target Applications
- **Inlet Flange:** N/A
- **Exhaust / Outlet Flange:** N/A
- **Target Applications:** Turnkey pumping stations, Spectrometer vacuum control, Chamber automated pumpdown

#### Source Evidence Documents
- `EDW-DOC-072`: **TIC Instrument Controller - Datasheet** (Pub No: `3601 0224 01`, Type: `Brochure`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/measurement-and-control/vacuum-gauge-and-pump-controllers/3601-0224-01-TIC-Instrument-Controller.pdf)
- `EDW-DOC-073`: **TIC Turbo and Instrument controller - Datasheet** (Pub No: `needs-verification`, Type: `Datasheet`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/measurement-and-control/vacuum-gauge-and-pump-controllers/3601-0654-01-TIC-Turbo-and-Instr-Controller-Datasheet.pdf)

#### SYINCO Commercial Status
- **RFQ Channel:** `standard-component` | **Action:** `Request Quote`
- **Channel Partner Status:** `authorized-channel-partner` | **Stock Status:** `import-on-demand`
- **Local Support:** factory-trained-engineers | **Warranty:** 12-month standard OEM warranty
- **Commercial Terms:** INR domestic billing, customs clearance, and local service support in India

---

<a id="edwards-adc"></a>
### ADC Active Digital Controllers
**Canonical ID:** `edwards-adc`  
**Canonical URL:** `/products/vacuum-technology/edwards-adc` (`indexable`)  
**OEM Taxonomy:** Edwards Vacuum → Measurement & Control → Vacuum Gauge and Pump Controllers  
**SYINCO Taxonomy:** Vacuum Technology & Abatement (`vacuum-technology`) → Display Controllers (`vacuum-controllers`)  
**Tagline:** *Panel-Mount Single and Multi-Channel Digital Vacuum Gauge Displays*  

Clear digital LED display controller providing power, digital readout, and setpoint relay control for Edwards active vacuum gauges.

#### Verified Models
`ADC Standard`, `ADC Enhanced`

#### Key Technical Specifications
| Model | Parameter | Value | Unit | Source Reference | Footnote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `ADC Standard` | Display | **Single channel** |  | Page 2, Specifications | LED display with 2 setpoint relays |
| `ADC Enhanced` | Display | **Dual channel** |  | Page 2, Specifications | LED display with 4 setpoint relays |

#### Vacuum Connections & Target Applications
- **Inlet Flange:** N/A
- **Exhaust / Outlet Flange:** N/A
- **Target Applications:** System control panels, Interlock triggering, Laboratory bench displays

#### Source Evidence Documents
- `EDW-DOC-074`: **ADC Active Digital Controller - Datasheet** (Pub No: `3601 0194 01`, Type: `Brochure`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/measurement-and-control/vacuum-gauge-and-pump-controllers/3601-0194-01-ADC-active-digital-controller.pdf)

#### SYINCO Commercial Status
- **RFQ Channel:** `standard-component` | **Action:** `Request Quote`
- **Channel Partner Status:** `authorized-channel-partner` | **Stock Status:** `import-on-demand`
- **Local Support:** factory-trained-engineers | **Warranty:** 12-month standard OEM warranty
- **Commercial Terms:** INR domestic billing, customs clearance, and local service support in India

---

<a id="edwards-tag"></a>
### TAG Turbo & Active Gauge Controllers
**Canonical ID:** `edwards-tag`  
**Canonical URL:** `/products/vacuum-technology/edwards-tag` (`indexable`)  
**OEM Taxonomy:** Edwards Vacuum → Measurement & Control → Vacuum Gauge and Pump Controllers  
**SYINCO Taxonomy:** Vacuum Technology & Abatement (`vacuum-technology`) → Vacuum Controllers (`vacuum-controllers`)  
**Tagline:** *Compact Dedicated Controller for nEXT Turbomolecular Pumps and Active Gauges*  

Cost-effective controller designed for compact integration on small turbomolecular pumping setups.

#### Verified Models
`TAG Controller`

#### Key Technical Specifications
| Model | Parameter | Value | Unit | Source Reference | Footnote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `TAG` | Turbo Compatibility | **nEXT85 / nEXT240 / nEXT300 / nEXT400** |  | Page 2, Specifications | Full parameter control |

#### Vacuum Connections & Target Applications
- **Inlet Flange:** N/A
- **Exhaust / Outlet Flange:** N/A
- **Target Applications:** Benchtop turbo stations, OEM machine integration

#### Source Evidence Documents
- `EDW-DOC-075`: **Turbo and Active Gauge (TAG) Controller - Datasheet** (Pub No: `3601 0206 01`, Type: `Datasheet`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/measurement-and-control/vacuum-gauge-and-pump-controllers/3601-0206-01-TAG-turbo-active-gauge-controller.pdf)

#### SYINCO Commercial Status
- **RFQ Channel:** `standard-component` | **Action:** `Request Quote`
- **Channel Partner Status:** `authorized-channel-partner` | **Stock Status:** `import-on-demand`
- **Local Support:** factory-trained-engineers | **Warranty:** 12-month standard OEM warranty
- **Commercial Terms:** INR domestic billing, customs clearance, and local service support in India

---

<a id="edwards-ejgo"></a>
### EJGO & EJGO MC Vacuum Central System Controllers
**Canonical ID:** `edwards-ejgo`  
**Canonical URL:** `/products/vacuum-technology/edwards-ejgo` (`indexable`)  
**OEM Taxonomy:** Edwards Vacuum → Measurement & Control → Vacuum Gauge and Pump Controllers  
**SYINCO Taxonomy:** Vacuum Technology & Abatement (`vacuum-technology`) → Industrial Central Controllers (`vacuum-controllers`)  
**Tagline:** *Next-Generation Industrial IoT Vacuum Plant Master Controller*  

Cloud-connected master plant controller managing multiple vacuum pumps, setpoint load-sharing, and predictive maintenance telemetry.

#### Verified Models
`EJGO`, `EJGO MC`

#### Key Technical Specifications
| Model | Parameter | Value | Unit | Source Reference | Footnote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `EJGO MC` | Connected Pumps | **Up to 16** | pumps | Page 4, Technical Data | CANbus / Ethernet control |
| `EJGO MC` | Cloud Telemetry | **GENIUS Ready** |  | Page 4, Technical Data | Remote monitoring |

#### Vacuum Connections & Target Applications
- **Inlet Flange:** N/A
- **Exhaust / Outlet Flange:** N/A
- **Target Applications:** Central industrial vacuum installations, Hospital suction systems, Semiconductor fab sub-fab monitoring

#### Source Evidence Documents
- `EDW-DOC-076`: **EJGO and EJGO MC Controller brochure** (Pub No: `3602`, Type: `Brochure`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/measurement-and-control/ejgo/ejgo-and-mc-controller-brochure.pdf)

#### SYINCO Commercial Status
- **RFQ Channel:** `capital-equipment` | **Action:** `Request Technical Quote`
- **Channel Partner Status:** `authorized-channel-partner` | **Stock Status:** `import-on-demand`
- **Local Support:** factory-trained-engineers | **Warranty:** 12-month standard OEM warranty
- **Commercial Terms:** INR domestic billing, customs clearance, and local service support in India

---

<a id="edwards-acoustic-enclosures"></a>
### Edwards Acoustic Sound Enclosures
**Canonical ID:** `edwards-acoustic-enclosures`  
**Canonical URL:** `/products/vacuum-technology/edwards-acoustic-enclosures` (`indexable`)  
**OEM Taxonomy:** Edwards Vacuum → Accessories → Acoustic Enclosures  
**SYINCO Taxonomy:** Vacuum Technology & Abatement (`vacuum-technology`) → Vacuum Pump Sound Enclosures (`vacuum-accessories-spares`)  
**Tagline:** *Sound-Dampening Enclosures Reducing Pump Operating Noise by up to 10 dB(A)*  

Purpose-built sound-attenuating enclosures lined with acoustic insulation and equipped with forced-air cooling fans for quiet laboratory operation.

#### Verified Models
`Enclosure for RV / nXDS`, `Enclosure for E2M28`, `Enclosure for XDS35i`

#### Key Technical Specifications
| Model | Parameter | Value | Unit | Source Reference | Footnote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `Enclosure nXDS` | Noise Reduction | **up to 10** | dB(A) | Page 2, Specifications | Laboratory environment |
| `Enclosure nXDS` | Cooling | **Twin thermostatically controlled fans** |  | Page 2, Specifications | Overheat alarm included |

#### Vacuum Connections & Target Applications
- **Inlet Flange:** Bellows cutouts
- **Exhaust / Outlet Flange:** Exhaust port cutouts
- **Target Applications:** Noise-sensitive research labs, Cleanroom analytical instrument bays, Office-adjacent testing rooms

#### Source Evidence Documents
- `EDW-DOC-077`: **Acoustic Enclosures - Datasheet** (Pub No: `3601 0036 01`, Type: `Datasheet`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/accessories/3601-0036-01-Acoustic-Enclosures.pdf)

#### SYINCO Commercial Status
- **RFQ Channel:** `spare-consumable` | **Action:** `Add to RFQ Basket`
- **Channel Partner Status:** `authorized-channel-partner` | **Stock Status:** `import-on-demand`
- **Local Support:** factory-trained-engineers | **Warranty:** 12-month standard OEM warranty
- **Commercial Terms:** INR domestic billing, customs clearance, and local service support in India

---

<a id="edwards-inlet-filters"></a>
### Edwards Industrial Vacuum Inlet Dust & Liquid Filters
**Canonical ID:** `edwards-inlet-filters`  
**Canonical URL:** `/products/vacuum-technology/edwards-inlet-filters` (`indexable`)  
**OEM Taxonomy:** Edwards Vacuum → Accessories → Inlet Filters  
**SYINCO Taxonomy:** Vacuum Technology & Abatement (`vacuum-technology`) → Vacuum Inlet Filters & Traps (`vacuum-accessories-spares`)  
**Tagline:** *Heavy-Duty Inlet Filters Protecting Pumps from Particulate and Liquid Ingress*  

High-efficiency particulate filtration canisters preventing abrasive dust and liquid droplets from damaging vacuum pump mechanisms.

#### Verified Models
`Filter F01`, `Filter F02`, `Filter F03`, `Filter F04`

#### Key Technical Specifications
| Model | Parameter | Value | Unit | Source Reference | Footnote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `Filter F01` | Particle Retention | **99% at 5** | micron | Page 2, Specifications | Paper / polyester media |
| `Filter F04` | Flange Size | **DN100** |  | Page 2, Specifications | High flow rate |

#### Vacuum Connections & Target Applications
- **Inlet Flange:** G 1.25" to DN100
- **Exhaust / Outlet Flange:** G 1.25" to DN100
- **Target Applications:** Ceramic powder processing, Metallurgical furnace roughing, Woodworking CNC tables, Pneumatic transport

#### Source Evidence Documents
- `EDW-DOC-078`: **Features and benefits - PRODUCT DATA SHEET** (Pub No: `3602`, Type: `Datasheet`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/accessories/3602211601-Inlet-filter-Datasheet-EN-Web.pdf)

#### SYINCO Commercial Status
- **RFQ Channel:** `spare-consumable` | **Action:** `Add to RFQ Basket`
- **Channel Partner Status:** `authorized-channel-partner` | **Stock Status:** `import-on-demand`
- **Local Support:** factory-trained-engineers | **Warranty:** 12-month standard OEM warranty
- **Commercial Terms:** INR domestic billing, customs clearance, and local service support in India

---

<a id="edwards-eld500-trolley"></a>
### ELD500 Transport Trolley
**Canonical ID:** `edwards-eld500-trolley`  
**Canonical URL:** `/products/vacuum-technology/edwards-eld500-trolley` (`indexable`)  
**OEM Taxonomy:** Edwards Vacuum → Accessories → Transport Trolley  
**SYINCO Taxonomy:** Vacuum Technology & Abatement (`vacuum-technology`) → Leak Detector Transport Accessories (`vacuum-accessories-spares`)  
**Tagline:** *Heavy-Duty Transport Trolley for ELD500 Leak Detectors*  

Mobile industrial trolley fitted with shock-absorbing casters, gas cylinder holders, and tool compartments for field leak detection.

#### Verified Models
`ELD500 Mobile Trolley`

#### Key Technical Specifications
| Model | Parameter | Value | Unit | Source Reference | Footnote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `Trolley` | Payload Capacity | **120** | kg | Page 2, Specifications | Includes helium gas cylinder bracket |

#### Vacuum Connections & Target Applications
- **Inlet Flange:** N/A
- **Exhaust / Outlet Flange:** N/A
- **Target Applications:** Mobile leak testing across large industrial plants, Power generation condenser inspection

#### Source Evidence Documents
- `EDW-DOC-051`: **ELD500 Trolley - Datasheet** (Pub No: `3601 0509 01`, Type: `Datasheet`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/leak-detection/3601-0509-01-ELD500-Trolley-Datasheet.pdf)

#### SYINCO Commercial Status
- **RFQ Channel:** `spare-consumable` | **Action:** `Add to RFQ Basket`
- **Channel Partner Status:** `authorized-channel-partner` | **Stock Status:** `import-on-demand`
- **Local Support:** factory-trained-engineers | **Warranty:** 12-month standard OEM warranty
- **Commercial Terms:** INR domestic billing, customs clearance, and local service support in India

---

<a id="edwards-bgv-series"></a>
### BGV Series Stainless Steel Gate Valves
**Canonical ID:** `edwards-bgv-series`  
**Canonical URL:** `/products/vacuum-technology/edwards-bgv-series` (`indexable`)  
**OEM Taxonomy:** Edwards Vacuum → Valves → Gate Valves  
**SYINCO Taxonomy:** Vacuum Technology & Abatement (`vacuum-technology`) → High Vacuum Gate Valves (`vacuum-valves`)  
**Tagline:** *Manual and Pneumatic Stainless Steel High-Vacuum Gate Valves with LOTO Safety*  

Robust gate valve featuring bellows-sealed actuation, lock-out tag-out (LOTO) safety mechanisms, and viton gate seals for particle-free sealing.

#### Verified Models
`BGV DN16`, `BGV DN25`, `BGV DN40`, `BGV DN50`, `BGV DN63`, `BGV DN100`, `BGV DN160`, `BGV DN200`, `BGV DN250`

#### Key Technical Specifications
| Model | Parameter | Value | Unit | Source Reference | Footnote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `BGV DN16` | Leak Rate Across Gate | **1e-9** | mbar L/s | Page 2, Specifications | Helium leak rate |
| `BGV DN63` | Leak Rate Across Gate | **1e-9** | mbar L/s | Page 2, Specifications | Helium leak rate |
| `BGV DN160` | Leak Rate Across Gate | **1e-9** | mbar L/s | Page 2, Specifications | Helium leak rate |

#### Vacuum Connections & Target Applications
- **Inlet Flange:** ISO-KF / ISO-K / CF
- **Exhaust / Outlet Flange:** ISO-KF / ISO-K / CF
- **Target Applications:** Turbomolecular pump isolation, Load lock gate sealing, Semiconductor chamber isolation, Beamline interlocks

#### Source Evidence Documents
- `EDW-DOC-079`: **BGV Stainless Steel Gate Valve with LOTO Safety Feature - Datasheet** (Pub No: `3601 0046 01`, Type: `Brochure`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/valves/3601-0046-01-BGV-Gate-Valve-withLOTO.pdf)
- `EDW-DOC-083`: **BGV Stainless Steel Gate Valve - Datasheet** (Pub No: `3601 0055 01`, Type: `Brochure`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/valves/3601-0055-01-BGV-stainless-steel-gate-valve.pdf)

#### SYINCO Commercial Status
- **RFQ Channel:** `standard-component` | **Action:** `Request Quote`
- **Channel Partner Status:** `authorized-channel-partner` | **Stock Status:** `import-on-demand`
- **Local Support:** factory-trained-engineers | **Warranty:** 12-month standard OEM warranty
- **Commercial Terms:** INR domestic billing, customs clearance, and local service support in India

---

<a id="edwards-lcpvek"></a>
### LCPVEK Bellows-Sealed Vacuum Valves
**Canonical ID:** `edwards-lcpvek`  
**Canonical URL:** `/products/vacuum-technology/edwards-lcpvek` (`indexable`)  
**OEM Taxonomy:** Edwards Vacuum → Valves → Bellows Valves  
**SYINCO Taxonomy:** Vacuum Technology & Abatement (`vacuum-technology`) → Electromagnetic & Pneumatic Valves (`vacuum-valves`)  
**Tagline:** *Fast-Acting Solenoid & Pneumatic Bellows-Sealed High-Vacuum Valves*  

Compact stainless steel bellows-sealed valve offering rapid closing times (<30 ms) for automatic system isolation upon power failure.

#### Verified Models
`LCPVEK 16`, `LCPVEK 25`, `LCPVEK 40`

#### Key Technical Specifications
| Model | Parameter | Value | Unit | Source Reference | Footnote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `LCPVEK 16` | Cycles to First Service | **1000000** | cycles | Page 2, Specifications | Stainless steel bellows |
| `LCPVEK 25` | Closing Time | **30** | ms | Page 2, Specifications | Fast acting |

#### Vacuum Connections & Target Applications
- **Inlet Flange:** NW16 / NW25 / NW40
- **Exhaust / Outlet Flange:** NW16 / NW25 / NW40
- **Target Applications:** Automatic vent valves, Roughing line isolation, Emergency power failure protection

#### Source Evidence Documents
- `EDW-DOC-080`: **LCPVEK Datasheet** (Pub No: `needs-verification`, Type: `Datasheet`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/valves/3601-0824-01-LCPVEK-datasheet.pdf)

#### SYINCO Commercial Status
- **RFQ Channel:** `standard-component` | **Action:** `Request Quote`
- **Channel Partner Status:** `authorized-channel-partner` | **Stock Status:** `import-on-demand`
- **Local Support:** factory-trained-engineers | **Warranty:** 12-month standard OEM warranty
- **Commercial Terms:** INR domestic billing, customs clearance, and local service support in India

---

<a id="edwards-speedivalve"></a>
### Speedivalve Diaphragm Isolation Valves
**Canonical ID:** `edwards-speedivalve`  
**Canonical URL:** `/products/vacuum-technology/edwards-speedivalve` (`indexable`)  
**OEM Taxonomy:** Edwards Vacuum → Valves → Diaphragm Valves  
**SYINCO Taxonomy:** Vacuum Technology & Abatement (`vacuum-technology`) → Manual Diaphragm Valves (`vacuum-valves`)  
**Tagline:** *Classic Manual & Pneumatic Diaphragm Vacuum Isolation Valves*  

Time-tested diaphragm isolation valve providing leak-tight sealing, visual open/closed indication, and high conductance.

#### Verified Models
`SP10K`, `SP16K`, `SP25K`, `SP40K`

#### Key Technical Specifications
| Model | Parameter | Value | Unit | Source Reference | Footnote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `SP16K` | Helium Leak Rate | **1e-9** | mbar L/s | Page 2, Specifications | Across seat |
| `SP25K` | Conductance | **12** | L/s | Page 2, Specifications | Molecular flow |

#### Vacuum Connections & Target Applications
- **Inlet Flange:** NW10 / NW16 / NW25 / NW40
- **Exhaust / Outlet Flange:** NW10 / NW16 / NW25 / NW40
- **Target Applications:** General vacuum manifolding, Gas inlet throttling, Foreline manual isolation

#### Source Evidence Documents
- `EDW-DOC-081`: **Speedivalve - Datasheet** (Pub No: `3601 0584 01`, Type: `Datasheet`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/valves/3601-0584-01-Speedivalve-datasheet.pdf)

#### SYINCO Commercial Status
- **RFQ Channel:** `standard-component` | **Action:** `Request Quote`
- **Channel Partner Status:** `authorized-channel-partner` | **Stock Status:** `import-on-demand`
- **Local Support:** factory-trained-engineers | **Warranty:** 12-month standard OEM warranty
- **Commercial Terms:** INR domestic billing, customs clearance, and local service support in India

---

<a id="edwards-viv"></a>
### VIV Vacuum Isolation Valves
**Canonical ID:** `edwards-viv`  
**Canonical URL:** `/products/vacuum-technology/edwards-viv` (`indexable`)  
**OEM Taxonomy:** Edwards Vacuum → Valves → Isolation Valves  
**SYINCO Taxonomy:** Vacuum Technology & Abatement (`vacuum-technology`) → Fast Vacuum Isolation Valves (`vacuum-valves`)  
**Tagline:** *Automatic High-Speed Vacuum Isolation Valves for Pump Protection*  

Fast-acting spring-loaded isolation valve designed to immediately isolate vacuum systems and vent the roughing pump when power is cut.

#### Verified Models
`VIV 16`, `VIV 25`, `VIV 40`, `VIV 50`

#### Key Technical Specifications
| Model | Parameter | Value | Unit | Source Reference | Footnote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `VIV 25` | Closing Time | **10** | ms | Page 2, Specifications | Rapid slam-shut |
| `VIV 40` | Closing Time | **10** | ms | Page 2, Specifications | Rapid slam-shut |

#### Vacuum Connections & Target Applications
- **Inlet Flange:** NW16 / NW25 / NW40 / NW50
- **Exhaust / Outlet Flange:** NW16 / NW25 / NW40 / NW50
- **Target Applications:** Oil suckback prevention, Vacuum system crash protection, Backing pump isolation

#### Source Evidence Documents
- `EDW-DOC-082`: **Vacuum Isolation Valves (VIV) - Datasheet** (Pub No: `3601 0565 01`, Type: `Datasheet`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/valves/3601-0565-01-VIV-datasheet.pdf)

#### SYINCO Commercial Status
- **RFQ Channel:** `standard-component` | **Action:** `Request Quote`
- **Channel Partner Status:** `authorized-channel-partner` | **Stock Status:** `import-on-demand`
- **Local Support:** factory-trained-engineers | **Warranty:** 12-month standard OEM warranty
- **Commercial Terms:** INR domestic billing, customs clearance, and local service support in India

---

<a id="edwards-prv"></a>
### Pressure Relief Valves
**Canonical ID:** `edwards-prv`  
**Canonical URL:** `/products/vacuum-technology/edwards-prv` (`indexable`)  
**OEM Taxonomy:** Edwards Vacuum → Valves → Relief Valves  
**SYINCO Taxonomy:** Vacuum Technology & Abatement (`vacuum-technology`) → Vacuum Chamber Relief Valves (`vacuum-valves`)  
**Tagline:** *Positive Overpressure Protection Relief Valves for Vacuum Vessels*  

Calibrated mechanical safety relief valve preventing dangerous overpressurization in vacuum chambers during venting or cryogenic boil-off.

#### Verified Models
`PRV-16`, `PRV-25`, `PRV-40`

#### Key Technical Specifications
| Model | Parameter | Value | Unit | Source Reference | Footnote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `PRV-16` | Cracking Pressure | **0.2 to 0.5** | bar gauge | Page 2, Specifications | Spring calibrated |
| `PRV-25` | Cracking Pressure | **0.2 to 0.5** | bar gauge | Page 2, Specifications | Spring calibrated |

#### Vacuum Connections & Target Applications
- **Inlet Flange:** NW16 / NW25 / NW40
- **Exhaust / Outlet Flange:** Exhaust port
- **Target Applications:** Cryostat overpressure safety, Glovebox positive pressure relief, Vacuum furnace safety venting

#### Source Evidence Documents
- `EDW-DOC-084`: **Pressure Relief Valve - Datasheet** (Pub No: `3601 0986 01`, Type: `Datasheet`) — [Source Link](https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/valves/3601-0986-01-Pressure_relief_valve-Datasheet.pdf)

#### SYINCO Commercial Status
- **RFQ Channel:** `standard-component` | **Action:** `Request Quote`
- **Channel Partner Status:** `authorized-channel-partner` | **Stock Status:** `import-on-demand`
- **Local Support:** factory-trained-engineers | **Warranty:** 12-month standard OEM warranty
- **Commercial Terms:** INR domestic billing, customs clearance, and local service support in India

---
