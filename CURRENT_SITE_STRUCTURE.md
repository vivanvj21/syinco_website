# CURRENT SITE STRUCTURE & HIERARCHY — SYINCO TECHNOLOGIES

**Audit Execution Timestamp:** 2026-09-29
**Source of Truth:** Real Next.js App Router tree and dynamic parameter maps

---

## 1. Actual Implemented Website Tree

```text
SYINCO PLATFORM (http://localhost:3000)
│
├── / (Homepage)
│   ├── Section 01: Hero Strategic Anchor
│   ├── Section 02: OEM Channel Principals Accreditation
│   ├── Section 03: Core Technological Disciplines (Bento Grid)
│   ├── Section 04: Application Discovery Gateway
│   ├── Section 05: Verified Flagship Equipment Showcase (LEAKAGE: All 125 Products)
│   ├── Section 06: Local Engineering Advantage (Hyderabad Moat)
│   ├── Section 07: Contract Paid Sample Analysis Portal
│   ├── Section 08: Facility Transparency & Sectors Served
│   └── Section 09: Final Conversion Horizon
│
├── /products (Master Hardware Catalogue & Discovery Hub)
│   ├── ?tab=hardware (Default Hardware Catalogue with Sidebar Filters)
│   └── ?tab=application (Interactive 3-Step Application Discovery Matrix)
│
├── /products/[categorySlug] (Discipline Category Pages)
│   ├── /products/thermoelectric-energy (Thermoelectric & Energy Materials)
│   ├── /products/thermal-properties (Thermal Properties & Management)
│   ├── /products/high-temp-furnaces (High-Temperature Processing & Furnaces)
│   ├── /products/thermal-expansion (Thermal Expansion & Dimensional Stability)
│   ├── /products/thermal-analysis (Thermal Analysis & Gas Characterization)
│   ├── /products/semiconductor-thin-film (Semiconductor & Thin-Film Technology)
│   ├── /products/materials-characterization (Materials Characterization & Physical Testing)
│   ├── /products/vacuum-technology (Vacuum Technology & Abatement — 68 Edwards Families)
│   ├── /products/process-instrumentation (Process Pyrometry & Sensors — Chino IR-CA)
│   └── [Legacy Aliases: /thermoelectric-evaluation, /dry-vacuum-pumps, /process-pyrometry, etc.]
│
├── /products/[categorySlug]/[productSlug] (Product Detail Pages - 125 Active Systems)
│   ├── /products/thermoelectric-energy/advance-riko-zem-3 (Flagship Seebeck/Resistivity)
│   ├── /products/vacuum-technology/edwards-nxds-series (Dry Scroll Vacuum Pump)
│   ├── /products/vacuum-technology/edwards-cdx-series (Chemical Dry Screw Pump)
│   ├── /products/vacuum-technology/edwards-gxs-series (Dry Industrial Vacuum Pump)
│   ├── /products/vacuum-technology/edwards-rv-series (Rotary Vane Vacuum Pump)
│   ├── /products/vacuum-technology/edwards-eld500 (Precision Helium Leak Detector)
│   ├── /products/vacuum-technology/edwards-barocel-7000 (Capacitance Manometer Gauge)
│   ├── /products/vacuum-technology/edwards-bgv-series (Stainless Steel Gate Valve)
│   ├── /products/process-instrumentation/chino-ir-ca (High-Speed Infrared Pyrometer)
│   ├── /products/high-temp-furnaces/fuji-sps-825 (Spark Plasma Sintering System)
│   └── ... [115 additional verified PDP routes across categories]
│
└── [PHANTOM / UNIMPLEMENTED 404 NAVIGATION BRANCHES]
    ├── /about (Linked in Header & Footer -> Returns HTTP 404)
    ├── /contact-us (Linked in Header & Footer -> Returns HTTP 404)
    ├── /request-a-quote (Linked in Header & Footer -> Returns HTTP 404)
    ├── /services/* (Sample Analysis, Calibration, AMC -> Returns HTTP 404)
    ├── /partners/* (Advance Riko, Edwards, Chino, Fuji -> Returns HTTP 404)
    ├── /applications/* (Metallurgy, Aerospace, etc. -> Returns HTTP 404)
    ├── /industries/* (Semiconductor, Defense -> Returns HTTP 404)
    └── /resources/* (Downloads, Case Studies -> Returns HTTP 404)
```

---

## 2. Parent-Child Relationship Analysis

### 2.1 The Two Operational Hierarchies
1. **The Product Hierarchy (Fully Functioning):**
   `Homepage` -> `Master Catalogue (/products)` -> `Category (/products/:categorySlug)` -> `PDP (/products/:categorySlug/:productSlug)`.
   - This entire vertical tree is fully wired, verified, and operational.
   - All 9 categories resolve their corresponding product families.
   - Deep-linking with `?model=` preserves canonical family PDP state without thin page duplication.

2. **The Institutional & Services Hierarchy (Completely Severed):**
   `Header / Footer` -> `/partners/*`, `/services/*`, `/about`, `/contact-us`.
   - This entire institutional trust layer is completely disconnected. Every anchor clicks through to a Next.js default 404 page.