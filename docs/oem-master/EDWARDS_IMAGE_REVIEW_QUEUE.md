# SYINCO TECHNOLOGIES — Edwards Catalogue Asset Review Queue

**Governance Protocol:** Automated Asset Pipeline Quality Gate (Milestone 5.8I)
**Audit Timestamp:** 2026-09-28
**Total Edwards Families:** 68
**Auto-Selected Qualified Heroes (Confidence >= 0.80):** 65
**Active Precision Wireframe Placeholders (Review Required):** 3

---

## 1. Executive Summary & Asset Pipeline Hard Invariants

In accordance with SYINCO technical catalogue standards:
1. **Zero Diagram Leakage:** Performance curves, dimensional drawings, CAD schematics, and decorative brochure graphics are **strictly forbidden** from appearing as product hero images.
2. **No Arbitrary Guessing:** If no high-confidence (`>= 0.80`) product photography or 3D render cutout is extractable from OEM literature, the system automatically activates the **SYINCO Precision Wireframe Placeholder** and places the item in this review queue.
3. **Commercial Independence:** Asset quality status (`assetStatus`) and resolution status (`resolutionStatus`) remain strictly decoupled from OEM commercial authorization status (`authorizationStatus`).

---

## 2. Active Review Queue Table

| Product Family ID | Official Product Name | Subcategory | Source Documents | Candidates Evaluated | Review Trigger Reason | Required Action |
|---|---|---|---|---|---|---|
| `edwards-stokes-mechanical-booster` | **Stokes Mechanical Booster Series** | Roots Vacuum Boosters | EDW-DOC-030 (30_edwards-stokes-mechanical-booster-pumps-datasheet.pdf) | 1 | Insufficient photo confidence (< 0.80) or non-PDF source | Request high-resolution isolated cutout from Edwards OEM Asset Portal |
| `edwards-rv-series` | **Edwards RV Series Rotary Vane Vacuum Pumps** | Laboratory Rotary Vane Pumps | EDW-DOC-049 (49_en_515d80c9.html) | 0 | Insufficient photo confidence (< 0.80) or non-PDF source | Request high-resolution isolated cutout from Edwards OEM Asset Portal |
| `edwards-small-em-series` | **Small EM Series Two-Stage Rotary Vane Pumps** | Industrial Rotary Vane Pumps | EDW-DOC-050 (50_en_9416a2ad.html) | 0 | Insufficient photo confidence (< 0.80) or non-PDF source | Request high-resolution isolated cutout from Edwards OEM Asset Portal |

---

## 3. Detailed Per-Product Candidate Evaluation Logs

### `edwards-stokes-mechanical-booster` — Stokes Mechanical Booster Series
- **Subcategory:** Roots Vacuum Boosters
- **Linked Documents:** EDW-DOC-030 (30_edwards-stokes-mechanical-booster-pumps-datasheet.pdf)
- **Total Image Candidates Evaluated:** 1
- **Candidate Analysis:**
  - **Doc EDW-DOC-030, Page 1, xref 48:** Role `unknown` (Confidence: 0.30) — *Asset (244x167) does not meet product photography criteria*
- **Current Runtime Status:** `assetStatus: 'placeholder-active'`, `resolutionStatus: 'vector-placeholder'`, `reviewRequired: true`.
- **User Presentation:** Fallback to `<ProductPlaceholder type='component' aspectRatio='4/3' label='EDWARDS-STOKES-MECHANICAL-BOOSTER' />`.

### `edwards-rv-series` — Edwards RV Series Rotary Vane Vacuum Pumps
- **Subcategory:** Laboratory Rotary Vane Pumps
- **Linked Documents:** EDW-DOC-049 (49_en_515d80c9.html)
- **Total Image Candidates Evaluated:** 0
- **Evaluation Findings:** Source document in registry is an interactive HTML landing page rather than an extracted brochure PDF. Zero candidate raster streams available.
- **Current Runtime Status:** `assetStatus: 'placeholder-active'`, `resolutionStatus: 'vector-placeholder'`, `reviewRequired: true`.
- **User Presentation:** Fallback to `<ProductPlaceholder type='component' aspectRatio='4/3' label='EDWARDS-RV-SERIES' />`.

### `edwards-small-em-series` — Small EM Series Two-Stage Rotary Vane Pumps
- **Subcategory:** Industrial Rotary Vane Pumps
- **Linked Documents:** EDW-DOC-050 (50_en_9416a2ad.html)
- **Total Image Candidates Evaluated:** 0
- **Evaluation Findings:** Source document in registry is an interactive HTML landing page rather than an extracted brochure PDF. Zero candidate raster streams available.
- **Current Runtime Status:** `assetStatus: 'placeholder-active'`, `resolutionStatus: 'vector-placeholder'`, `reviewRequired: true`.
- **User Presentation:** Fallback to `<ProductPlaceholder type='component' aspectRatio='4/3' label='EDWARDS-SMALL-EM-SERIES' />`.

---

## 4. Asset Rejection Statistics Across All 68 Families

| Candidate Role Classification | Total Candidates Encountered | Handling Policy |
|---|---|---|
| `accessory` | 22 | STRICT HARD REJECTION (Never Hero) |
| `decorative` | 96 | STRICT HARD REJECTION (Never Hero) |
| `dimensional-drawing` | 78 | STRICT HARD REJECTION (Never Hero) |
| `logo` | 14 | STRICT HARD REJECTION (Never Hero) |
| `page-artwork` | 28 | STRICT HARD REJECTION (Never Hero) |
| `performance-curve` | 50 | STRICT HARD REJECTION (Never Hero) |
| `product-hero` | 171 | HERO ELIGIBLE (Confidence >= 0.80) |
| `product-secondary` | 137 | HERO ELIGIBLE (Confidence >= 0.80) |
| `technical-diagram` | 7 | STRICT HARD REJECTION (Never Hero) |
| `unknown` | 150 | STRICT HARD REJECTION (Never Hero) |

---
Generated by SYINCO Automated Asset Pipeline Processor.