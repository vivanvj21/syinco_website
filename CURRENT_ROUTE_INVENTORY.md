# CURRENT ROUTE INVENTORY — SYINCO TECHNOLOGIES

**Audit Execution Timestamp:** 2026-09-29
**Target System:** `http://localhost:3000` (d:\Syinco Next.js 15.2.0 App Router)
**Total Tested Routes:** 118
**Live Functioning Routes:** 87
**Missing / Unimplemented Routes (404):** 31

---

## 1. Executive Forensic Summary of Route Architecture

The current SYINCO website implementation is entirely constrained within four physical page templates in Next.js App Router:
1. `src/app/page.tsx` (`/`) — Master Homepage
2. `src/app/products/page.tsx` (`/products`) — Global Catalogue & Application Matrix
3. `src/app/products/[categorySlug]/page.tsx` (`/products/*`) — 9 Canonical Discipline Categories (and Aliases)
4. `src/app/products/[categorySlug]/[productSlug]/page.tsx` (`/products/*/*`) — Dynamic Product Detail Pages (PDP)

> [!WARNING] Critical Architectural Route Disconnect
> Every single non-catalogue navigation link present in the Header, Mega Menu, and Footer — including `/about`, `/contact-us`, `/request-a-quote`, `/services/*`, `/partners/*`, `/applications/*`, `/industries/*`, and `/resources/*` — **DOES NOT EXIST** in the filesystem and returns an **HTTP 404 Not Found** error.

---

## 2. Complete Master Route Inventory Table

| URL | Page Title | Page Type | HTTP Status | Exists? | Rendered? | Navigation Entry? | Forensic Notes |
|---|---|---|---|---|---|---|---|
| `/` | SYINCO TECHNOLOGIES | Precision Scientific Systems, Vacuum & Thermal Instrumentation | Homepage | `200` | YES | YES | Yes | Operational (H1: Precision Scientific Systems, Vacuu...) |
| `/products` | Technical Product Catalogue | SYINCO TECHNOLOGIES India | Catalogue Index | `200` | YES | YES | Yes | Operational (H1: Scientific Systems, Vacuum & Proces...) |
| `/products?tab=application` | Technical Product Catalogue | SYINCO TECHNOLOGIES India | Catalogue Index | `200` | YES | YES | Yes | Operational (H1: Scientific Systems, Vacuum & Proces...) |
| `/products?tab=hardware` | Technical Product Catalogue | SYINCO TECHNOLOGIES India | Catalogue Index | `200` | YES | YES | Yes | Operational (H1: Scientific Systems, Vacuum & Proces...) |
| `/products/thermoelectric-energy` | Thermoelectric & Energy Materials | SYINCO TECHNOLOGIES India | Category Page | `200` | YES | YES | Yes | Operational (H1: Thermoelectric & Energy Materials...) |
| `/products/thermal-properties` | Thermal Properties & Thermal Management | SYINCO TECHNOLOGIES India | Category Page | `200` | YES | YES | Yes | Operational (H1: Thermal Properties & Thermal Manage...) |
| `/products/high-temp-furnaces` | High-Temperature Processing & Furnaces | SYINCO TECHNOLOGIES India | Category Page | `200` | YES | YES | Yes | Operational (H1: High-Temperature Processing & Furna...) |
| `/products/thermal-expansion` | Thermal Expansion & Dimensional Stability | SYINCO TECHNOLOGIES India | Category Page | `200` | YES | YES | Yes | Operational (H1: Thermal Expansion & Dimensional Sta...) |
| `/products/thermal-analysis` | Thermal Analysis & Gas Characterization | SYINCO TECHNOLOGIES India | Category Page | `200` | YES | YES | Yes | Operational (H1: Thermal Analysis & Gas Characteriza...) |
| `/products/semiconductor-thin-film` | Semiconductor & Thin-Film Technology | SYINCO TECHNOLOGIES India | Category Page | `200` | YES | YES | Yes | Operational (H1: Semiconductor & Thin-Film Technolog...) |
| `/products/materials-characterization` | Materials Characterization & Physical Testing | SYINCO TECHNOLOGIES India | Category Page | `200` | YES | YES | Yes | Operational (H1: Materials Characterization & Physic...) |
| `/products/vacuum-technology` | Vacuum Technology & Abatement | SYINCO TECHNOLOGIES India | Category Page | `200` | YES | YES | Yes | Operational (H1: Vacuum Technology & Abatement...) |
| `/products/process-instrumentation` | Process Pyrometry & Optical Sensors | SYINCO TECHNOLOGIES India | Category Page | `200` | YES | YES | Yes | Operational (H1: Process Pyrometry & Optical Sensors...) |
| `/products/thermoelectric-evaluation` | Thermoelectric & Energy Materials | SYINCO TECHNOLOGIES India | Category Page | `200` | YES | YES | Deep Link | Operational (H1: Thermoelectric & Energy Materials...) |
| `/products/dry-vacuum-pumps` | Vacuum Technology & Abatement | SYINCO TECHNOLOGIES India | Category Page | `200` | YES | YES | Deep Link | Operational (H1: Vacuum Technology & Abatement...) |
| `/products/process-pyrometry` | Process Pyrometry & Optical Sensors | SYINCO TECHNOLOGIES India | Category Page | `200` | YES | YES | Deep Link | Operational (H1: Process Pyrometry & Optical Sensors...) |
| `/products/spark-plasma-sintering` | High-Temperature Processing & Furnaces | SYINCO TECHNOLOGIES India | Category Page | `200` | YES | YES | Deep Link | Operational (H1: High-Temperature Processing & Furna...) |
| `/products/thermal-management` | Thermal Properties & Thermal Management | SYINCO TECHNOLOGIES India | Category Page | `200` | YES | YES | Deep Link | Operational (H1: Thermal Properties & Thermal Manage...) |
| `/products/spares-consumables` | N/A | Category Page | `404` | **NO** | **NO** | Deep Link | HTTP 404 Error: Route not implemented in App Router |
| `/about` | N/A | Static Content Route | `404` | **NO** | **NO** | Yes | HTTP 404 Error: Route not implemented in App Router |
| `/contact-us` | N/A | Static Content Route | `404` | **NO** | **NO** | Yes | HTTP 404 Error: Route not implemented in App Router |
| `/contact` | N/A | Static Content Route | `404` | **NO** | **NO** | Deep Link | HTTP 404 Error: Route not implemented in App Router |
| `/request-a-quote` | N/A | Static Content Route | `404` | **NO** | **NO** | Yes | HTTP 404 Error: Route not implemented in App Router |
| `/rfq` | N/A | Static Content Route | `404` | **NO** | **NO** | Deep Link | HTTP 404 Error: Route not implemented in App Router |
| `/services` | N/A | Services Route | `404` | **NO** | **NO** | Yes | HTTP 404 Error: Route not implemented in App Router |
| `/services/sample-analysis` | N/A | Services Route | `404` | **NO** | **NO** | Deep Link | HTTP 404 Error: Route not implemented in App Router |
| `/services/calibration` | N/A | Services Route | `404` | **NO** | **NO** | Deep Link | HTTP 404 Error: Route not implemented in App Router |
| `/services/amc` | N/A | Services Route | `404` | **NO** | **NO** | Deep Link | HTTP 404 Error: Route not implemented in App Router |
| `/partners` | N/A | Partner Route | `404` | **NO** | **NO** | Yes | HTTP 404 Error: Route not implemented in App Router |
| `/partners/advance-riko` | N/A | Partner Route | `404` | **NO** | **NO** | Yes | HTTP 404 Error: Route not implemented in App Router |
| `/partners/edwards-vacuum` | N/A | Partner Route | `404` | **NO** | **NO** | Yes | HTTP 404 Error: Route not implemented in App Router |
| `/partners/chino` | N/A | Partner Route | `404` | **NO** | **NO** | Yes | HTTP 404 Error: Route not implemented in App Router |
| `/partners/fuji-electronic` | N/A | Partner Route | `404` | **NO** | **NO** | Yes | HTTP 404 Error: Route not implemented in App Router |
| `/partners/fuji-sps` | N/A | Partner Route | `404` | **NO** | **NO** | Deep Link | HTTP 404 Error: Route not implemented in App Router |
| `/applications` | N/A | Applications Route | `404` | **NO** | **NO** | Yes | HTTP 404 Error: Route not implemented in App Router |
| `/applications/metallurgy-steel` | N/A | Applications Route | `404` | **NO** | **NO** | Deep Link | HTTP 404 Error: Route not implemented in App Router |
| `/applications/thermoelectrics-energy` | N/A | Applications Route | `404` | **NO** | **NO** | Deep Link | HTTP 404 Error: Route not implemented in App Router |
| `/applications/semiconductors` | N/A | Applications Route | `404` | **NO** | **NO** | Deep Link | HTTP 404 Error: Route not implemented in App Router |
| `/applications/aerospace-defense` | N/A | Applications Route | `404` | **NO** | **NO** | Deep Link | HTTP 404 Error: Route not implemented in App Router |
| `/industries` | N/A | Industries Route | `404` | **NO** | **NO** | Yes | HTTP 404 Error: Route not implemented in App Router |
| `/industries/semiconductor` | N/A | Industries Route | `404` | **NO** | **NO** | Deep Link | HTTP 404 Error: Route not implemented in App Router |
| `/industries/aerospace` | N/A | Industries Route | `404` | **NO** | **NO** | Deep Link | HTTP 404 Error: Route not implemented in App Router |
| `/resources` | N/A | Resources Route | `404` | **NO** | **NO** | Yes | HTTP 404 Error: Route not implemented in App Router |
| `/resources/downloads` | N/A | Resources Route | `404` | **NO** | **NO** | Deep Link | HTTP 404 Error: Route not implemented in App Router |
| `/resources/case-studies` | N/A | Resources Route | `404` | **NO** | **NO** | Deep Link | HTTP 404 Error: Route not implemented in App Router |
| `/products/thermoelectric-energy/advance-riko-zem-3` | SYINCO TECHNOLOGIES | Precision Systems, Vacuum & Thermal Instrumentation | Product Detail Page (PDP) | `200` | YES | YES | Deep Link | Operational (H1: ZEM-3 Series...) |
| `/products/vacuum-technology/edwards-nxds-series` | SYINCO TECHNOLOGIES | Precision Systems, Vacuum & Thermal Instrumentation | Product Detail Page (PDP) | `200` | YES | YES | Deep Link | Operational (H1: Edwards nXDS Series Dry Scroll Vacu...) |
| `/products/vacuum-technology/edwards-rv-series` | SYINCO TECHNOLOGIES | Precision Systems, Vacuum & Thermal Instrumentation | Product Detail Page (PDP) | `200` | YES | YES | Deep Link | Operational (H1: Edwards RV Series Rotary Vane Vacuu...) |
| `/products/vacuum-technology/edwards-gxs-series` | SYINCO TECHNOLOGIES | Precision Systems, Vacuum & Thermal Instrumentation | Product Detail Page (PDP) | `200` | YES | YES | Deep Link | Operational (H1: GXS Series Smart Dry Screw Vacuum P...) |
| `/products/vacuum-technology/edwards-nxri-series` | SYINCO TECHNOLOGIES | Precision Systems, Vacuum & Thermal Instrumentation | Product Detail Page (PDP) | `200` | YES | YES | Deep Link | Operational (H1: nXRi Series Compact Multistage Root...) |
| `/products/vacuum-technology/edwards-eld500` | SYINCO TECHNOLOGIES | Precision Systems, Vacuum & Thermal Instrumentation | Product Detail Page (PDP) | `200` | YES | YES | Deep Link | Operational (H1: ELD500 Precision Helium & Hydrogen ...) |
| `/products/vacuum-technology/edwards-barocel-7000` | SYINCO TECHNOLOGIES | Precision Systems, Vacuum & Thermal Instrumentation | Product Detail Page (PDP) | `200` | YES | YES | Deep Link | Operational (H1: BAROCEL 7000 Series High-Accuracy C...) |
| `/products/vacuum-technology/edwards-bgv-series` | SYINCO TECHNOLOGIES | Precision Systems, Vacuum & Thermal Instrumentation | Product Detail Page (PDP) | `200` | YES | YES | Deep Link | Operational (H1: BGV Series Stainless Steel Gate Val...) |
| `/products/process-instrumentation/chino-ir-ca` | N/A | Product Detail Page (PDP) | `404` | **NO** | **NO** | Deep Link | HTTP 404 Error: Route not implemented in App Router |
| `/products/high-temp-furnaces/fuji-sps-825` | N/A | Product Detail Page (PDP) | `404` | **NO** | **NO** | Deep Link | HTTP 404 Error: Route not implemented in App Router |
| `/products/thermal-properties/advance-riko-tc-7000` | N/A | Product Detail Page (PDP) | `404` | **NO** | **NO** | Deep Link | HTTP 404 Error: Route not implemented in App Router |
| `/products/high-temp-furnaces/advance-riko-mila-5000` | N/A | Product Detail Page (PDP) | `404` | **NO** | **NO** | Deep Link | HTTP 404 Error: Route not implemented in App Router |
| `/products/vacuum-technology/edwards-cdx-series` | SYINCO TECHNOLOGIES | Precision Systems, Vacuum & Thermal Instrumentation | Product Detail Page (PDP) | `200` | YES | YES | Deep Link | Operational (H1: CDX Series Dry Screw Vacuum Pumps...) |
| `/products/vacuum-technology/edwards-edp-series` | SYINCO TECHNOLOGIES | Precision Systems, Vacuum & Thermal Instrumentation | Product Detail Page (PDP) | `200` | YES | YES | Deep Link | Operational (H1: EDP Series Chemical Dry Claw Pumps...) |
| `/products/vacuum-technology/edwards-eds-chemical-series` | SYINCO TECHNOLOGIES | Precision Systems, Vacuum & Thermal Instrumentation | Product Detail Page (PDP) | `200` | YES | YES | Deep Link | Operational (H1: EDS-C Series Chemical Dry Screw Vac...) |
| `/products/vacuum-technology/edwards-xdd1-series` | SYINCO TECHNOLOGIES | Precision Systems, Vacuum & Thermal Instrumentation | Product Detail Page (PDP) | `200` | YES | YES | Deep Link | Operational (H1: XDD1 Series Diaphragm Vacuum Pumps...) |
| `/products/vacuum-technology/edwards-d-lab-series` | SYINCO TECHNOLOGIES | Precision Systems, Vacuum & Thermal Instrumentation | Product Detail Page (PDP) | `200` | YES | YES | Deep Link | Operational (H1: D-LAB Series Chemical Diaphragm Pum...) |
| `/products/vacuum-technology/edwards-gv-claw-series` | SYINCO TECHNOLOGIES | Precision Systems, Vacuum & Thermal Instrumentation | Product Detail Page (PDP) | `200` | YES | YES | Deep Link | Operational (H1: GV Series Dry Claw Vacuum Pumps...) |
| `/products/vacuum-technology/edwards-nedc-edc-series` | SYINCO TECHNOLOGIES | Precision Systems, Vacuum & Thermal Instrumentation | Product Detail Page (PDP) | `200` | YES | YES | Deep Link | Operational (H1: nEDC / EDC Series Monoclaw Vacuum P...) |
| `/products/vacuum-technology/edwards-eds-industrial-series` | SYINCO TECHNOLOGIES | Precision Systems, Vacuum & Thermal Instrumentation | Product Detail Page (PDP) | `200` | YES | YES | Deep Link | Operational (H1: EDS Series Industrial Dry Screw Vac...) |
| `/products/vacuum-technology/edwards-idx-series` | SYINCO TECHNOLOGIES | Precision Systems, Vacuum & Thermal Instrumentation | Product Detail Page (PDP) | `200` | YES | YES | Deep Link | Operational (H1: IDX Series Industrial Dry Screw Vac...) |
| `/products/vacuum-technology/edwards-exs-series` | SYINCO TECHNOLOGIES | Precision Systems, Vacuum & Thermal Instrumentation | Product Detail Page (PDP) | `200` | YES | YES | Deep Link | Operational (H1: EXS Series Dry Screw Vacuum Pumps...) |
| `/products/vacuum-technology/edwards-gv-screw-series` | SYINCO TECHNOLOGIES | Precision Systems, Vacuum & Thermal Instrumentation | Product Detail Page (PDP) | `200` | YES | YES | Deep Link | Operational (H1: GV Series Industrial Dry Screw Pump...) |
| `/products/vacuum-technology/edwards-xds-series` | SYINCO TECHNOLOGIES | Precision Systems, Vacuum & Thermal Instrumentation | Product Detail Page (PDP) | `200` | YES | YES | Deep Link | Operational (H1: XDS Series Dry Scroll Vacuum Pumps...) |
| `/products/vacuum-technology/edwards-mxds3-series` | SYINCO TECHNOLOGIES | Precision Systems, Vacuum & Thermal Instrumentation | Product Detail Page (PDP) | `200` | YES | YES | Deep Link | Operational (H1: mXDS3 Series Miniature Dry Scroll V...) |
| `/products/vacuum-technology/edwards-xds35i-series` | SYINCO TECHNOLOGIES | Precision Systems, Vacuum & Thermal Instrumentation | Product Detail Page (PDP) | `200` | YES | YES | Deep Link | Operational (H1: XDS35i High-Capacity Dry Scroll Vac...) |
| `/products/vacuum-technology/edwards-edo-series` | SYINCO TECHNOLOGIES | Precision Systems, Vacuum & Thermal Instrumentation | Product Detail Page (PDP) | `200` | YES | YES | Deep Link | Operational (H1: EDO 65-100 Dry Scroll Vacuum Pumps...) |
| `/products/vacuum-technology/edwards-ecal1-series` | SYINCO TECHNOLOGIES | Precision Systems, Vacuum & Thermal Instrumentation | Product Detail Page (PDP) | `200` | YES | YES | Deep Link | Operational (H1: ECAL1 Vacuum Gauge Calibration Syst...) |
| `/products/vacuum-technology/edwards-t-station-300` | SYINCO TECHNOLOGIES | Precision Systems, Vacuum & Thermal Instrumentation | Product Detail Page (PDP) | `200` | YES | YES | Deep Link | Operational (H1: T-Station 300 Turbomolecular Pumpin...) |
| `/products/vacuum-technology/edwards-t-station-85` | SYINCO TECHNOLOGIES | Precision Systems, Vacuum & Thermal Instrumentation | Product Detail Page (PDP) | `200` | YES | YES | Deep Link | Operational (H1: T-Station 85 Turbomolecular Pumping...) |
| `/products/vacuum-technology/edwards-tic-pumping-station` | SYINCO TECHNOLOGIES | Precision Systems, Vacuum & Thermal Instrumentation | Product Detail Page (PDP) | `200` | YES | YES | Deep Link | Operational (H1: TIC Turbomolecular Cart Pumping Sys...) |
| `/products/vacuum-technology/edwards-next-tic-cart-xl` | SYINCO TECHNOLOGIES | Precision Systems, Vacuum & Thermal Instrumentation | Product Detail Page (PDP) | `200` | YES | YES | Deep Link | Operational (H1: nEXT TIC CART XL Mobile High Vacuum...) |
| `/products/vacuum-technology/edwards-stokes-6-booster` | SYINCO TECHNOLOGIES | Precision Systems, Vacuum & Thermal Instrumentation | Product Detail Page (PDP) | `200` | YES | YES | Deep Link | Operational (H1: Stokes 6" Mechanical Booster Pumps...) |
| `/products/vacuum-technology/edwards-gmb-series` | SYINCO TECHNOLOGIES | Precision Systems, Vacuum & Thermal Instrumentation | Product Detail Page (PDP) | `200` | YES | YES | Deep Link | Operational (H1: GMB Series High-Capacity Roots Vacu...) |
| `/products/vacuum-technology/edwards-eh-series` | SYINCO TECHNOLOGIES | Precision Systems, Vacuum & Thermal Instrumentation | Product Detail Page (PDP) | `200` | YES | YES | Deep Link | Operational (H1: EH Series Hydrokinetic Drive Mechan...) |
| `/products/vacuum-technology/edwards-hv-series` | SYINCO TECHNOLOGIES | Precision Systems, Vacuum & Thermal Instrumentation | Product Detail Page (PDP) | `200` | YES | YES | Deep Link | Operational (H1: HV Series High-Capacity Mechanical ...) |
| `/products/vacuum-technology/edwards-stokes-mechanical-booster` | SYINCO TECHNOLOGIES | Precision Systems, Vacuum & Thermal Instrumentation | Product Detail Page (PDP) | `200` | YES | YES | Deep Link | Operational (H1: Stokes Mechanical Booster Series...) |
| `/products/vacuum-technology/edwards-nxli-series` | SYINCO TECHNOLOGIES | Precision Systems, Vacuum & Thermal Instrumentation | Product Detail Page (PDP) | `200` | YES | YES | Deep Link | Operational (H1: nXLi Series High-Performance Multis...) |
| `/products/vacuum-technology/edwards-nxqi-series` | SYINCO TECHNOLOGIES | Precision Systems, Vacuum & Thermal Instrumentation | Product Detail Page (PDP) | `200` | YES | YES | Deep Link | Operational (H1: nXQi Series Dry Multistage Roots Pu...) |
| `/products/vacuum-technology/edwards-eosi-series` | SYINCO TECHNOLOGIES | Precision Systems, Vacuum & Thermal Instrumentation | Product Detail Page (PDP) | `200` | YES | YES | Deep Link | Operational (H1: EOSi Series Variable Speed Oil-Seal...) |
| `/products/vacuum-technology/edwards-stokes-microvac-series` | SYINCO TECHNOLOGIES | Precision Systems, Vacuum & Thermal Instrumentation | Product Detail Page (PDP) | `200` | YES | YES | Deep Link | Operational (H1: Stokes Microvac Rotary Piston Vacuu...) |
| `/products/vacuum-technology/edwards-nrvi-series` | SYINCO TECHNOLOGIES | Precision Systems, Vacuum & Thermal Instrumentation | Product Detail Page (PDP) | `200` | YES | YES | Deep Link | Operational (H1: nRVi Series Intelligent Rotary Vane...) |
| `/products/vacuum-technology/edwards-e2s-series` | SYINCO TECHNOLOGIES | Precision Systems, Vacuum & Thermal Instrumentation | Product Detail Page (PDP) | `200` | YES | YES | Deep Link | Operational (H1: E2S Series Two-Stage Rotary Vane Va...) |
| `/products/vacuum-technology/edwards-nes-ex-series` | SYINCO TECHNOLOGIES | Precision Systems, Vacuum & Thermal Instrumentation | Product Detail Page (PDP) | `200` | YES | YES | Deep Link | Operational (H1: nES EX Series Explosion-Proof Rotar...) |
| `/products/vacuum-technology/edwards-e2m-small-series` | SYINCO TECHNOLOGIES | Precision Systems, Vacuum & Thermal Instrumentation | Product Detail Page (PDP) | `200` | YES | YES | Deep Link | Operational (H1: E2M0.7 / E2M1.5 / E2M2.5 Compact Ro...) |
| `/products/vacuum-technology/edwards-nes-series` | SYINCO TECHNOLOGIES | Precision Systems, Vacuum & Thermal Instrumentation | Product Detail Page (PDP) | `200` | YES | YES | Deep Link | Operational (H1: nES Series Single-Stage Rotary Vane...) |
| `/products/vacuum-technology/edwards-small-em-series` | SYINCO TECHNOLOGIES | Precision Systems, Vacuum & Thermal Instrumentation | Product Detail Page (PDP) | `200` | YES | YES | Deep Link | Operational (H1: Small EM Series Two-Stage Rotary Va...) |
| `/products/vacuum-technology/edwards-eld30` | SYINCO TECHNOLOGIES | Precision Systems, Vacuum & Thermal Instrumentation | Product Detail Page (PDP) | `200` | YES | YES | Deep Link | Operational (H1: ELD30 Industrial Helium Leak Detect...) |
| `/products/vacuum-technology/edwards-eld4000` | SYINCO TECHNOLOGIES | Precision Systems, Vacuum & Thermal Instrumentation | Product Detail Page (PDP) | `200` | YES | YES | Deep Link | Operational (H1: ELD4000 High-Throughput Helium Leak...) |
| `/products/vacuum-technology/edwards-gascheck-g4` | SYINCO TECHNOLOGIES | Precision Systems, Vacuum & Thermal Instrumentation | Product Detail Page (PDP) | `200` | YES | YES | Deep Link | Operational (H1: GasCheck G4 Handheld Gas Leak Detec...) |
| `/products/vacuum-technology/edwards-asg2` | SYINCO TECHNOLOGIES | Precision Systems, Vacuum & Thermal Instrumentation | Product Detail Page (PDP) | `200` | YES | YES | Deep Link | Operational (H1: ASG2 Active Strain Gauges...) |
| `/products/vacuum-technology/edwards-aigx` | SYINCO TECHNOLOGIES | Precision Systems, Vacuum & Thermal Instrumentation | Product Detail Page (PDP) | `200` | YES | YES | Deep Link | Operational (H1: AIGX Active Ion Gauges...) |
| `/products/vacuum-technology/edwards-wrh` | SYINCO TECHNOLOGIES | Precision Systems, Vacuum & Thermal Instrumentation | Product Detail Page (PDP) | `200` | YES | YES | Deep Link | Operational (H1: WRH Active Wide Range Hot Cathode G...) |
| `/products/vacuum-technology/edwards-passive-gauges` | SYINCO TECHNOLOGIES | Precision Systems, Vacuum & Thermal Instrumentation | Product Detail Page (PDP) | `200` | YES | YES | Deep Link | Operational (H1: Passive Vacuum Gauges & Sensor Head...) |
| `/products/vacuum-technology/edwards-apgx-h` | SYINCO TECHNOLOGIES | Precision Systems, Vacuum & Thermal Instrumentation | Product Detail Page (PDP) | `200` | YES | YES | Deep Link | Operational (H1: APGX-H Active Linear Convection Gau...) |
| `/products/vacuum-technology/edwards-aim200` | SYINCO TECHNOLOGIES | Precision Systems, Vacuum & Thermal Instrumentation | Product Detail Page (PDP) | `200` | YES | YES | Deep Link | Operational (H1: AIM200 Active Inverted Magnetron Ga...) |
| `/products/vacuum-technology/edwards-apg200` | SYINCO TECHNOLOGIES | Precision Systems, Vacuum & Thermal Instrumentation | Product Detail Page (PDP) | `200` | YES | YES | Deep Link | Operational (H1: APG200 Active Pirani Vacuum Gauges...) |
| `/products/vacuum-technology/edwards-wrg200` | SYINCO TECHNOLOGIES | Precision Systems, Vacuum & Thermal Instrumentation | Product Detail Page (PDP) | `200` | YES | YES | Deep Link | Operational (H1: WRG200 Active Wide Range Vacuum Gau...) |
| `/products/vacuum-technology/edwards-p3` | SYINCO TECHNOLOGIES | Precision Systems, Vacuum & Thermal Instrumentation | Product Detail Page (PDP) | `200` | YES | YES | Deep Link | Operational (H1: P3 Handheld Vacuum Measuring System...) |
| `/products/vacuum-technology/edwards-vs16k-is16k` | SYINCO TECHNOLOGIES | Precision Systems, Vacuum & Thermal Instrumentation | Product Detail Page (PDP) | `200` | YES | YES | Deep Link | Operational (H1: VS16K & IS16K Mechanical Vacuum Swi...) |
| `/products/vacuum-technology/edwards-cg16k` | SYINCO TECHNOLOGIES | Precision Systems, Vacuum & Thermal Instrumentation | Product Detail Page (PDP) | `200` | YES | YES | Deep Link | Operational (H1: CG16K Capsule Dial Vacuum Gauges...) |
| `/products/vacuum-technology/edwards-p4-p5` | SYINCO TECHNOLOGIES | Precision Systems, Vacuum & Thermal Instrumentation | Product Detail Page (PDP) | `200` | YES | YES | Deep Link | Operational (H1: P4 & P5 Bluetooth LE Handheld Measu...) |
| `/products/vacuum-technology/edwards-tic-controller` | SYINCO TECHNOLOGIES | Precision Systems, Vacuum & Thermal Instrumentation | Product Detail Page (PDP) | `200` | YES | YES | Deep Link | Operational (H1: TIC Turbo & Instrument Controllers...) |
| `/products/vacuum-technology/edwards-adc` | SYINCO TECHNOLOGIES | Precision Systems, Vacuum & Thermal Instrumentation | Product Detail Page (PDP) | `200` | YES | YES | Deep Link | Operational (H1: ADC Active Digital Controllers...) |
| `/products/vacuum-technology/edwards-tag` | SYINCO TECHNOLOGIES | Precision Systems, Vacuum & Thermal Instrumentation | Product Detail Page (PDP) | `200` | YES | YES | Deep Link | Operational (H1: TAG Turbo & Active Gauge Controller...) |
| `/products/vacuum-technology/edwards-ejgo` | SYINCO TECHNOLOGIES | Precision Systems, Vacuum & Thermal Instrumentation | Product Detail Page (PDP) | `200` | YES | YES | Deep Link | Operational (H1: EJGO & EJGO MC Vacuum Central Syste...) |
| `/products/vacuum-technology/edwards-acoustic-enclosures` | SYINCO TECHNOLOGIES | Precision Systems, Vacuum & Thermal Instrumentation | Product Detail Page (PDP) | `200` | YES | YES | Deep Link | Operational (H1: Edwards Acoustic Sound Enclosures...) |
| `/products/vacuum-technology/edwards-inlet-filters` | SYINCO TECHNOLOGIES | Precision Systems, Vacuum & Thermal Instrumentation | Product Detail Page (PDP) | `200` | YES | YES | Deep Link | Operational (H1: Edwards Industrial Vacuum Inlet Dus...) |
| `/products/vacuum-technology/edwards-eld500-trolley` | SYINCO TECHNOLOGIES | Precision Systems, Vacuum & Thermal Instrumentation | Product Detail Page (PDP) | `200` | YES | YES | Deep Link | Operational (H1: ELD500 Transport Trolley...) |
| `/products/vacuum-technology/edwards-lcpvek` | SYINCO TECHNOLOGIES | Precision Systems, Vacuum & Thermal Instrumentation | Product Detail Page (PDP) | `200` | YES | YES | Deep Link | Operational (H1: LCPVEK Bellows-Sealed Vacuum Valves...) |
| `/products/vacuum-technology/edwards-speedivalve` | SYINCO TECHNOLOGIES | Precision Systems, Vacuum & Thermal Instrumentation | Product Detail Page (PDP) | `200` | YES | YES | Deep Link | Operational (H1: Speedivalve Diaphragm Isolation Val...) |
| `/products/vacuum-technology/edwards-viv` | SYINCO TECHNOLOGIES | Precision Systems, Vacuum & Thermal Instrumentation | Product Detail Page (PDP) | `200` | YES | YES | Deep Link | Operational (H1: VIV Vacuum Isolation Valves...) |
| `/products/vacuum-technology/edwards-prv` | SYINCO TECHNOLOGIES | Precision Systems, Vacuum & Thermal Instrumentation | Product Detail Page (PDP) | `200` | YES | YES | Deep Link | Operational (H1: Pressure Relief Valves...) |

---

## 3. Route Discrepancy Breakdown

### 3.1 Live Operational Routes
- `/`: SYINCO TECHNOLOGIES | Precision Scientific Systems, Vacuum & Thermal Instrumentation (`200`)
- `/products`: Technical Product Catalogue | SYINCO TECHNOLOGIES India (`200`)
- `/products?tab=application`: Technical Product Catalogue | SYINCO TECHNOLOGIES India (`200`)
- `/products?tab=hardware`: Technical Product Catalogue | SYINCO TECHNOLOGIES India (`200`)
- `/products/thermoelectric-energy`: Thermoelectric & Energy Materials | SYINCO TECHNOLOGIES India (`200`)
- `/products/thermal-properties`: Thermal Properties & Thermal Management | SYINCO TECHNOLOGIES India (`200`)
- `/products/high-temp-furnaces`: High-Temperature Processing & Furnaces | SYINCO TECHNOLOGIES India (`200`)
- `/products/thermal-expansion`: Thermal Expansion & Dimensional Stability | SYINCO TECHNOLOGIES India (`200`)
- `/products/thermal-analysis`: Thermal Analysis & Gas Characterization | SYINCO TECHNOLOGIES India (`200`)
- `/products/semiconductor-thin-film`: Semiconductor & Thin-Film Technology | SYINCO TECHNOLOGIES India (`200`)
- `/products/materials-characterization`: Materials Characterization & Physical Testing | SYINCO TECHNOLOGIES India (`200`)
- `/products/vacuum-technology`: Vacuum Technology & Abatement | SYINCO TECHNOLOGIES India (`200`)
- `/products/process-instrumentation`: Process Pyrometry & Optical Sensors | SYINCO TECHNOLOGIES India (`200`)
- `/products/thermoelectric-evaluation`: Thermoelectric & Energy Materials | SYINCO TECHNOLOGIES India (`200`)
- `/products/dry-vacuum-pumps`: Vacuum Technology & Abatement | SYINCO TECHNOLOGIES India (`200`)
- *...and 72 additional active category and PDP routes.*

### 3.2 Phantom / 404 Navigation Links Currently Exposed to Users
- `/products/spares-consumables`: Linked in UI but returns HTTP `404` (HTTP 404 Error: Route not implemented in App Router)
- `/about`: Linked in UI but returns HTTP `404` (HTTP 404 Error: Route not implemented in App Router)
- `/contact-us`: Linked in UI but returns HTTP `404` (HTTP 404 Error: Route not implemented in App Router)
- `/contact`: Linked in UI but returns HTTP `404` (HTTP 404 Error: Route not implemented in App Router)
- `/request-a-quote`: Linked in UI but returns HTTP `404` (HTTP 404 Error: Route not implemented in App Router)
- `/rfq`: Linked in UI but returns HTTP `404` (HTTP 404 Error: Route not implemented in App Router)
- `/services`: Linked in UI but returns HTTP `404` (HTTP 404 Error: Route not implemented in App Router)
- `/services/sample-analysis`: Linked in UI but returns HTTP `404` (HTTP 404 Error: Route not implemented in App Router)
- `/services/calibration`: Linked in UI but returns HTTP `404` (HTTP 404 Error: Route not implemented in App Router)
- `/services/amc`: Linked in UI but returns HTTP `404` (HTTP 404 Error: Route not implemented in App Router)
- `/partners`: Linked in UI but returns HTTP `404` (HTTP 404 Error: Route not implemented in App Router)
- `/partners/advance-riko`: Linked in UI but returns HTTP `404` (HTTP 404 Error: Route not implemented in App Router)
- `/partners/edwards-vacuum`: Linked in UI but returns HTTP `404` (HTTP 404 Error: Route not implemented in App Router)
- `/partners/chino`: Linked in UI but returns HTTP `404` (HTTP 404 Error: Route not implemented in App Router)
- `/partners/fuji-electronic`: Linked in UI but returns HTTP `404` (HTTP 404 Error: Route not implemented in App Router)
- `/partners/fuji-sps`: Linked in UI but returns HTTP `404` (HTTP 404 Error: Route not implemented in App Router)
- `/applications`: Linked in UI but returns HTTP `404` (HTTP 404 Error: Route not implemented in App Router)
- `/applications/metallurgy-steel`: Linked in UI but returns HTTP `404` (HTTP 404 Error: Route not implemented in App Router)
- `/applications/thermoelectrics-energy`: Linked in UI but returns HTTP `404` (HTTP 404 Error: Route not implemented in App Router)
- `/applications/semiconductors`: Linked in UI but returns HTTP `404` (HTTP 404 Error: Route not implemented in App Router)
- `/applications/aerospace-defense`: Linked in UI but returns HTTP `404` (HTTP 404 Error: Route not implemented in App Router)
- `/industries`: Linked in UI but returns HTTP `404` (HTTP 404 Error: Route not implemented in App Router)
- `/industries/semiconductor`: Linked in UI but returns HTTP `404` (HTTP 404 Error: Route not implemented in App Router)
- `/industries/aerospace`: Linked in UI but returns HTTP `404` (HTTP 404 Error: Route not implemented in App Router)
- `/resources`: Linked in UI but returns HTTP `404` (HTTP 404 Error: Route not implemented in App Router)
- `/resources/downloads`: Linked in UI but returns HTTP `404` (HTTP 404 Error: Route not implemented in App Router)
- `/resources/case-studies`: Linked in UI but returns HTTP `404` (HTTP 404 Error: Route not implemented in App Router)
- `/products/process-instrumentation/chino-ir-ca`: Linked in UI but returns HTTP `404` (HTTP 404 Error: Route not implemented in App Router)
- `/products/high-temp-furnaces/fuji-sps-825`: Linked in UI but returns HTTP `404` (HTTP 404 Error: Route not implemented in App Router)
- `/products/thermal-properties/advance-riko-tc-7000`: Linked in UI but returns HTTP `404` (HTTP 404 Error: Route not implemented in App Router)
- `/products/high-temp-furnaces/advance-riko-mila-5000`: Linked in UI but returns HTTP `404` (HTTP 404 Error: Route not implemented in App Router)