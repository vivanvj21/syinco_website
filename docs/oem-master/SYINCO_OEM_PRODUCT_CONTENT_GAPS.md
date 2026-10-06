# SYINCO Technologies — OEM Product Content Gaps Register

**Document Purpose**: Identifies all missing specifications, documentation, media, and commercial parameters required from Advance Riko and SYINCO Commercial Operations prior to live publication.  
**Governance Rule**: No missing data may be filled by AI assumption or fictional values.  

---

## 1. Gaps by Category

### Category A: Product Identity & Model Breakdown
- **Series Disaggregation**: For product families such as `ZEM-3`, `TC-1200RH / TC-9000`, `RHL-E/VHT/P`, and `RTA`, individual sub-model part numbers, furnace tube diameters, and temperature envelope variants must be obtained.
- **Model Codes**: Specific model suffixes (e.g., `-M`, `-L`, `-UHV`, `-HT`) must be verified against current Advance Riko factory price books.

### Category B: High-Resolution Media & Schematics
- **Low-Resolution Assets**: All 51 extracted product images currently exist only as 300x300 pixel WordPress thumbnails.
- **CAD & Dimensional Drawings**: Zero outline drawings (STEP/DXF/DWG) or optical path schematics are present in the public web archive.
- **Publishing Authorization**: Formal written confirmation is required from Advance Riko, Inc. granting SYINCO Technologies reproduction rights for marketing in India and global channels.

### Category C: Technical Specifications
- **Quantitative Envelopes**: The public archive provides qualitative summaries. Quantitative engineering values must be obtained for:
  - Exact temperature ranges (minimum and maximum operating limits)
  - Ramp rates (°C/min or °C/s) and cooling rates
  - Ultimate vacuum levels (Pa or mbar) and pump package dependencies
  - Measurement accuracy, repeatability, and resolution limits
  - Allowable sample dimensions (thickness, diameter, geometry constraints)
  - Atmosphere compatibility (Air, Ar, N₂, H₂ reducing, corrosive gas options)
  - Power and utility requirements (kW, voltage, chilled water flow rate)

### Category D: Documentation Assets
- **Datasheets**: High-resolution official PDF product brochures and specification sheets are required for download gating.
- **Application Notes**: Technical whitepapers detailing measurement physics, sample preparation protocols, and calibration procedures.
- **Academic Citations**: Peer-reviewed journal papers validating instruments (e.g. ZEM-3, TCN-2ω, SuperLIX).

### Category E: Standards Compliance
- **Explicit Testing Standards**: Only two standards (`JIS R3251-1995` on LIX-2 and `ASTM E1530` on GH-1) were explicitly stated in archive text.
- **Required Industry Standards**: Confirmation is needed for:
  - Laser Flash: `ASTM E1461`, `JIS R1611`, `ISO 22007-4`
  - Dilatometry: `ASTM E831`, `ASTM D696`, `ISO 11359-2`
  - TG/DTA: `ASTM E1131`, `ISO 11358`
  - DSC: `ASTM E967`, `ASTM E968`, `ISO 11357`

### Category F: Commercial & Service Envelope (SYINCO Responsibility)
- **Commercial Terms**: Confirmation whether SYINCO provides INR direct invoicing or High Sea Sales / BoE import consignment.
- **Lead Times**: Standard manufacturing lead times (weeks) for built-to-order Japanese equipment.
- **Local Depot Services**: Availability of calibration, demonstration, and paid sample evaluation at the SYINCO Hyderabad facility.
- **Warranty & AMC**: Standard warranty duration (typically 12 months) and annual maintenance contract terms in India.

---

## 2. Action Items for SYINCO Procurement & Technical Sales

| Item ID | Priority | Responsible Party | Required Deliverable |
|:---|:---:|:---|:---|
| `GAP-01` | **P0** | SYINCO Legal / Commercial | Formal distributor asset usage authorization from Advance Riko, Inc. |
| `GAP-02` | **P0** | Technical Sales | Master Price Book with discrete model codes and configuration options. |
| `GAP-03` | **P1** | Product Specialist | Full PDF technical brochures for the 8 flagship systems. |
| `GAP-04` | **P1** | Product Specialist | Quantitative specification sheets (temperatures, tolerances, dimensions). |
| `GAP-05` | **P2** | Hyderabad Depot Lead | Scope of local calibration, sample testing, and commissioning capabilities. |