# PAGE-BY-PAGE DESIGN FORENSIC AUDIT — SYINCO TECHNOLOGIES

**Audit Execution Timestamp:** 2026-09-29
**Core Objective:** Document exactly what each page LOOKS LIKE in real browser rendering.

---

## Homepage: `/` — Master Homepage
- **Target URL:** `http://localhost:3000/`
- **Visual Character Summary:** High-authority industrial instrument showroom blending dark scientific control room aesthetics with dense, readable light technical workspaces.
- **Background Style:** Alternating dual-canvas (Dark #0B1118 canvas in Hero/Accreditation/Portal/Horizon vs Light #F8FAFC in Bento/Catalogue/Facility)
- **Header & Navigation:** Dark fixed pre-header + semi-transparent white/slate main header with sticky elevation and border-b border-border-light
- **Hero Architecture:** Asymmetric 12-column grid (7 cols left text & conversion CTAs / 5 cols right elevated dark CAD architectural card)
- **Container & Max Width:** 1360px max-width container (`max-w-container mx-auto px-4`)
- **Layout & Grid:** Hero: 12 cols; Bento: 12 cols (7/5/4/4/4); Partners: 3 cols; Applications: 4 cols; Showcase: 1-col stacked product cards
- **Typography Palette:** Headings: Space Grotesk font-bold (text-2xl to text-5xl); Body: Inter font-medium (text-xs to text-sm); Badges: JetBrains Mono uppercase tracking-wider
- **Border Style & Radius:** 1px solid #E2E8F0 on light cards; 1px solid #1E293B on dark panels; hover:border-brand-teal/50 transition
- **Button Variants:** Action Amber (#F59E0B) primary buttons; Slate panel secondary buttons; Border light outline buttons
- **Badges & Tags:** Monospace OEM tags (UK/Japan), stock status dots, classification badges
- **Imagery & Aspect Ratios:** Hero visual CAD architecture diagram; Product hero WebP images with 4:3 containment in ProductCards

---

## Catalogue Index: `/products` — Global Hardware Catalogue
- **Target URL:** `http://localhost:3000/products`
- **Visual Character Summary:** Structured analytical research workstation prioritizing high scannability, rapid facet filtering, and instant Fuse.js search response.
- **Background Style:** Light analytical workspace (#F8FAFC background with #FFFFFF card surfaces)
- **Header & Navigation:** Global navigation header with active indicator under 'Products'
- **Hero Architecture:** Compact header block with title, total systems count (125), and dual tab selector ('Hardware Catalogue' vs 'Application Discovery')
- **Container & Max Width:** 1360px max-width container (`max-w-container mx-auto px-4`)
- **Layout & Grid:** Desktop: 240px fixed-width sticky sidebar on left + flexible 1-col stacked ProductCard stream on right
- **Typography Palette:** Display: Space Grotesk font-bold; Monospace: JetBrains Mono counts and filters; Body: Inter text-sm
- **Border Style & Radius:** 1px solid #E2E8F0 dividers, active facet checkmarks, subtle card hover shadows
- **Button Variants:** Amber conversion CTAs, grey pagination controls, clear filter ghost buttons
- **Badges & Tags:** Dynamic count chips on category and OEM facets, active filter pills
- **Imagery & Aspect Ratios:** 4:3 product thumbnails inside horizontal ProductCards

---

## Application Discovery Matrix: `/products?tab=application` — Application Discovery Engine
- **Target URL:** `http://localhost:3000/products?tab=application`
- **Visual Character Summary:** Exhaustive engineering specification dossier designed for institutional procurement committees, principal investigators, and process engineers.
- **Background Style:** Light technical canvas (#F8FAFC) with white specification containers (#FFFFFF)
- **Header & Navigation:** Global header + sticky PDP sub-navigation tab bar linking to Overview, Specs, Applications, Documents, Accessories
- **Hero Architecture:** 2-column technical hero: Left 4:3 high-res product viewer with zoom/gallery + Right commercial panel (Models, Lead Time, Invoicing, RFQ CTA)
- **Container & Max Width:** 1360px max-width container (`max-w-container mx-auto px-4`)
- **Layout & Grid:** Overview: 2 cols; Specifications: Full-width dense alternating striped table; Accessories: 3-col card grid
- **Typography Palette:** Space Grotesk H1 (text-3xl), JetBrains Mono parameter tables (font-mono text-xs), Inter narrative text
- **Border Style & Radius:** 1px solid #E2E8F0 borders on tables, cards, and modal triggers
- **Button Variants:** Large Action Amber Request Quote CTA, Spares Basket Add buttons, PDF Download buttons
- **Badges & Tags:** OEM official channel partner badge, in-country INR billing badge, warranty badge
- **Imagery & Aspect Ratios:** Clean isolated hero photograph (or vector wireframe CAD placeholder if review required), gallery angles, CAD footprint drawing

---

## Category Page: `/products/thermoelectric-energy` — Category: Thermoelectric & Energy Materials
- **Target URL:** `http://localhost:3000/products/thermoelectric-energy`
- **Visual Character Summary:** Curated technical discipline index presenting genuine OEM equipment without marketing hyperbole.
- **Background Style:** Light analytical workspace (#F8FAFC) with dedicated breadcrumb trail and discipline overview hero
- **Header & Navigation:** Global navigation header with persistent search bar and RFQ launcher
- **Hero Architecture:** Discipline Hero banner: Domain name eyebrow, H1 category headline, technical scope description, and breadcrumb path
- **Container & Max Width:** 1360px max-width container (`max-w-container mx-auto px-4`)
- **Layout & Grid:** Subcategory filter pills on top, followed by 1-column stacked verified ProductCards
- **Typography Palette:** Space Grotesk H1 (text-3xl), JetBrains Mono series labels, Inter descriptions
- **Border Style & Radius:** 1px solid #E2E8F0 borders with brand-teal border highlights on active category pills
- **Button Variants:** Request Quote (Amber), View Specs (Brand outline)
- **Badges & Tags:** Classification badges, official OEM badges, Hyderabad depot indicators
- **Imagery & Aspect Ratios:** Verified high-resolution product cutouts (or active precision placeholders for unverified assets)

---

## Category Page: `/products/high-temp-furnaces` — Category: High-Temperature Processing & Furnaces
- **Target URL:** `http://localhost:3000/products/high-temp-furnaces`
- **Visual Character Summary:** Curated technical discipline index presenting genuine OEM equipment without marketing hyperbole.
- **Background Style:** Light analytical workspace (#F8FAFC) with dedicated breadcrumb trail and discipline overview hero
- **Header & Navigation:** Global navigation header with persistent search bar and RFQ launcher
- **Hero Architecture:** Discipline Hero banner: Domain name eyebrow, H1 category headline, technical scope description, and breadcrumb path
- **Container & Max Width:** 1360px max-width container (`max-w-container mx-auto px-4`)
- **Layout & Grid:** Subcategory filter pills on top, followed by 1-column stacked verified ProductCards
- **Typography Palette:** Space Grotesk H1 (text-3xl), JetBrains Mono series labels, Inter descriptions
- **Border Style & Radius:** 1px solid #E2E8F0 borders with brand-teal border highlights on active category pills
- **Button Variants:** Request Quote (Amber), View Specs (Brand outline)
- **Badges & Tags:** Classification badges, official OEM badges, Hyderabad depot indicators
- **Imagery & Aspect Ratios:** Verified high-resolution product cutouts (or active precision placeholders for unverified assets)

---

## Category Page: `/products/vacuum-technology` — Category: Vacuum Technology & Abatement
- **Target URL:** `http://localhost:3000/products/vacuum-technology`
- **Visual Character Summary:** Curated technical discipline index presenting genuine OEM equipment without marketing hyperbole.
- **Background Style:** Light analytical workspace (#F8FAFC) with dedicated breadcrumb trail and discipline overview hero
- **Header & Navigation:** Global navigation header with persistent search bar and RFQ launcher
- **Hero Architecture:** Discipline Hero banner: Domain name eyebrow, H1 category headline, technical scope description, and breadcrumb path
- **Container & Max Width:** 1360px max-width container (`max-w-container mx-auto px-4`)
- **Layout & Grid:** Subcategory filter pills on top, followed by 1-column stacked verified ProductCards
- **Typography Palette:** Space Grotesk H1 (text-3xl), JetBrains Mono series labels, Inter descriptions
- **Border Style & Radius:** 1px solid #E2E8F0 borders with brand-teal border highlights on active category pills
- **Button Variants:** Request Quote (Amber), View Specs (Brand outline)
- **Badges & Tags:** Classification badges, official OEM badges, Hyderabad depot indicators
- **Imagery & Aspect Ratios:** Verified high-resolution product cutouts (or active precision placeholders for unverified assets)

---

## Product Detail Page (PDP): `/products/thermoelectric-energy/advance-riko-zem-3` — PDP: Advance Riko ZEM-3 Series
- **Target URL:** `http://localhost:3000/products/thermoelectric-energy/advance-riko-zem-3`
- **Visual Character Summary:** Exhaustive engineering specification dossier designed for institutional procurement committees, principal investigators, and process engineers.
- **Background Style:** Light technical canvas (#F8FAFC) with white specification containers (#FFFFFF)
- **Header & Navigation:** Global header + sticky PDP sub-navigation tab bar linking to Overview, Specs, Applications, Documents, Accessories
- **Hero Architecture:** 2-column technical hero: Left 4:3 high-res product viewer with zoom/gallery + Right commercial panel (Models, Lead Time, Invoicing, RFQ CTA)
- **Container & Max Width:** 1360px max-width container (`max-w-container mx-auto px-4`)
- **Layout & Grid:** Overview: 2 cols; Specifications: Full-width dense alternating striped table; Accessories: 3-col card grid
- **Typography Palette:** Space Grotesk H1 (text-3xl), JetBrains Mono parameter tables (font-mono text-xs), Inter narrative text
- **Border Style & Radius:** 1px solid #E2E8F0 borders on tables, cards, and modal triggers
- **Button Variants:** Large Action Amber Request Quote CTA, Spares Basket Add buttons, PDF Download buttons
- **Badges & Tags:** OEM official channel partner badge, in-country INR billing badge, warranty badge
- **Imagery & Aspect Ratios:** Clean isolated hero photograph (or vector wireframe CAD placeholder if review required), gallery angles, CAD footprint drawing

---

## Product Detail Page (PDP): `/products/vacuum-technology/edwards-nxds-series` — PDP: Edwards nXDS Series Dry Scroll Pumps
- **Target URL:** `http://localhost:3000/products/vacuum-technology/edwards-nxds-series`
- **Visual Character Summary:** Exhaustive engineering specification dossier designed for institutional procurement committees, principal investigators, and process engineers.
- **Background Style:** Light technical canvas (#F8FAFC) with white specification containers (#FFFFFF)
- **Header & Navigation:** Global header + sticky PDP sub-navigation tab bar linking to Overview, Specs, Applications, Documents, Accessories
- **Hero Architecture:** 2-column technical hero: Left 4:3 high-res product viewer with zoom/gallery + Right commercial panel (Models, Lead Time, Invoicing, RFQ CTA)
- **Container & Max Width:** 1360px max-width container (`max-w-container mx-auto px-4`)
- **Layout & Grid:** Overview: 2 cols; Specifications: Full-width dense alternating striped table; Accessories: 3-col card grid
- **Typography Palette:** Space Grotesk H1 (text-3xl), JetBrains Mono parameter tables (font-mono text-xs), Inter narrative text
- **Border Style & Radius:** 1px solid #E2E8F0 borders on tables, cards, and modal triggers
- **Button Variants:** Large Action Amber Request Quote CTA, Spares Basket Add buttons, PDF Download buttons
- **Badges & Tags:** OEM official channel partner badge, in-country INR billing badge, warranty badge
- **Imagery & Aspect Ratios:** Clean isolated hero photograph (or vector wireframe CAD placeholder if review required), gallery angles, CAD footprint drawing

---

## Product Detail Page (PDP): `/products/vacuum-technology/edwards-rv-series` — PDP: Edwards RV Series Rotary Vane Pumps
- **Target URL:** `http://localhost:3000/products/vacuum-technology/edwards-rv-series`
- **Visual Character Summary:** Exhaustive engineering specification dossier designed for institutional procurement committees, principal investigators, and process engineers.
- **Background Style:** Light technical canvas (#F8FAFC) with white specification containers (#FFFFFF)
- **Header & Navigation:** Global header + sticky PDP sub-navigation tab bar linking to Overview, Specs, Applications, Documents, Accessories
- **Hero Architecture:** 2-column technical hero: Left 4:3 high-res product viewer with zoom/gallery + Right commercial panel (Models, Lead Time, Invoicing, RFQ CTA)
- **Container & Max Width:** 1360px max-width container (`max-w-container mx-auto px-4`)
- **Layout & Grid:** Overview: 2 cols; Specifications: Full-width dense alternating striped table; Accessories: 3-col card grid
- **Typography Palette:** Space Grotesk H1 (text-3xl), JetBrains Mono parameter tables (font-mono text-xs), Inter narrative text
- **Border Style & Radius:** 1px solid #E2E8F0 borders on tables, cards, and modal triggers
- **Button Variants:** Large Action Amber Request Quote CTA, Spares Basket Add buttons, PDF Download buttons
- **Badges & Tags:** OEM official channel partner badge, in-country INR billing badge, warranty badge
- **Imagery & Aspect Ratios:** Clean isolated hero photograph (or vector wireframe CAD placeholder if review required), gallery angles, CAD footprint drawing

---

## Product Detail Page (PDP): `/products/vacuum-technology/edwards-eld500` — PDP: Edwards ELD500 Precision Leak Detector
- **Target URL:** `http://localhost:3000/products/vacuum-technology/edwards-eld500`
- **Visual Character Summary:** Exhaustive engineering specification dossier designed for institutional procurement committees, principal investigators, and process engineers.
- **Background Style:** Light technical canvas (#F8FAFC) with white specification containers (#FFFFFF)
- **Header & Navigation:** Global header + sticky PDP sub-navigation tab bar linking to Overview, Specs, Applications, Documents, Accessories
- **Hero Architecture:** 2-column technical hero: Left 4:3 high-res product viewer with zoom/gallery + Right commercial panel (Models, Lead Time, Invoicing, RFQ CTA)
- **Container & Max Width:** 1360px max-width container (`max-w-container mx-auto px-4`)
- **Layout & Grid:** Overview: 2 cols; Specifications: Full-width dense alternating striped table; Accessories: 3-col card grid
- **Typography Palette:** Space Grotesk H1 (text-3xl), JetBrains Mono parameter tables (font-mono text-xs), Inter narrative text
- **Border Style & Radius:** 1px solid #E2E8F0 borders on tables, cards, and modal triggers
- **Button Variants:** Large Action Amber Request Quote CTA, Spares Basket Add buttons, PDF Download buttons
- **Badges & Tags:** OEM official channel partner badge, in-country INR billing badge, warranty badge
- **Imagery & Aspect Ratios:** Clean isolated hero photograph (or vector wireframe CAD placeholder if review required), gallery angles, CAD footprint drawing

---

## Product Detail Page (PDP): `/products/vacuum-technology/edwards-barocel-7000` — PDP: Edwards BAROCEL 7000 Capacitance Manometer
- **Target URL:** `http://localhost:3000/products/vacuum-technology/edwards-barocel-7000`
- **Visual Character Summary:** Exhaustive engineering specification dossier designed for institutional procurement committees, principal investigators, and process engineers.
- **Background Style:** Light technical canvas (#F8FAFC) with white specification containers (#FFFFFF)
- **Header & Navigation:** Global header + sticky PDP sub-navigation tab bar linking to Overview, Specs, Applications, Documents, Accessories
- **Hero Architecture:** 2-column technical hero: Left 4:3 high-res product viewer with zoom/gallery + Right commercial panel (Models, Lead Time, Invoicing, RFQ CTA)
- **Container & Max Width:** 1360px max-width container (`max-w-container mx-auto px-4`)
- **Layout & Grid:** Overview: 2 cols; Specifications: Full-width dense alternating striped table; Accessories: 3-col card grid
- **Typography Palette:** Space Grotesk H1 (text-3xl), JetBrains Mono parameter tables (font-mono text-xs), Inter narrative text
- **Border Style & Radius:** 1px solid #E2E8F0 borders on tables, cards, and modal triggers
- **Button Variants:** Large Action Amber Request Quote CTA, Spares Basket Add buttons, PDF Download buttons
- **Badges & Tags:** OEM official channel partner badge, in-country INR billing badge, warranty badge
- **Imagery & Aspect Ratios:** Clean isolated hero photograph (or vector wireframe CAD placeholder if review required), gallery angles, CAD footprint drawing

---

## Product Detail Page (PDP): `/products/vacuum-technology/edwards-bgv-series` — PDP: Edwards BGV Stainless Steel Gate Valves
- **Target URL:** `http://localhost:3000/products/vacuum-technology/edwards-bgv-series`
- **Visual Character Summary:** Exhaustive engineering specification dossier designed for institutional procurement committees, principal investigators, and process engineers.
- **Background Style:** Light technical canvas (#F8FAFC) with white specification containers (#FFFFFF)
- **Header & Navigation:** Global header + sticky PDP sub-navigation tab bar linking to Overview, Specs, Applications, Documents, Accessories
- **Hero Architecture:** 2-column technical hero: Left 4:3 high-res product viewer with zoom/gallery + Right commercial panel (Models, Lead Time, Invoicing, RFQ CTA)
- **Container & Max Width:** 1360px max-width container (`max-w-container mx-auto px-4`)
- **Layout & Grid:** Overview: 2 cols; Specifications: Full-width dense alternating striped table; Accessories: 3-col card grid
- **Typography Palette:** Space Grotesk H1 (text-3xl), JetBrains Mono parameter tables (font-mono text-xs), Inter narrative text
- **Border Style & Radius:** 1px solid #E2E8F0 borders on tables, cards, and modal triggers
- **Button Variants:** Large Action Amber Request Quote CTA, Spares Basket Add buttons, PDF Download buttons
- **Badges & Tags:** OEM official channel partner badge, in-country INR billing badge, warranty badge
- **Imagery & Aspect Ratios:** Clean isolated hero photograph (or vector wireframe CAD placeholder if review required), gallery angles, CAD footprint drawing

---

## Product Detail Page (PDP): `/products/process-instrumentation/chino-ir-ca` — PDP: Chino IR-CA High-Speed Pyrometer
- **Target URL:** `http://localhost:3000/products/process-instrumentation/chino-ir-ca`
- **Visual Character Summary:** Raw Next.js development 404 screen. Complete severance from SYINCO Design System.
- **Background Style:** Default Next.js dark/light system background (centered flex column)
- **Header & Navigation:** None (unhandled error boundary)
- **Hero Architecture:** Centered minimal error message ('404 | This page could not be found.')
- **Container & Max Width:** Auto-centered inline-block
- **Layout & Grid:** None (vertical flex)
- **Typography Palette:** System font (-apple-system, BlinkMacSystemFont, Roboto, sans-serif)
- **Border Style & Radius:** 1px solid vertical divider (#000 or rgba(255,255,255,0.3)) between 404 and message
- **Button Variants:** None
- **Badges & Tags:** None
- **Imagery & Aspect Ratios:** None

---

## Product Detail Page (PDP): `/products/high-temp-furnaces/fuji-sps-825` — PDP: Fuji SPS-825 Spark Plasma Sintering System
- **Target URL:** `http://localhost:3000/products/high-temp-furnaces/fuji-sps-825`
- **Visual Character Summary:** Raw Next.js development 404 screen. Complete severance from SYINCO Design System.
- **Background Style:** Default Next.js dark/light system background (centered flex column)
- **Header & Navigation:** None (unhandled error boundary)
- **Hero Architecture:** Centered minimal error message ('404 | This page could not be found.')
- **Container & Max Width:** Auto-centered inline-block
- **Layout & Grid:** None (vertical flex)
- **Typography Palette:** System font (-apple-system, BlinkMacSystemFont, Roboto, sans-serif)
- **Border Style & Radius:** 1px solid vertical divider (#000 or rgba(255,255,255,0.3)) between 404 and message
- **Button Variants:** None
- **Badges & Tags:** None
- **Imagery & Aspect Ratios:** None

---

## Unimplemented Route: `/about` — About Us Route (404)
- **Target URL:** `http://localhost:3000/about`
- **Visual Character Summary:** Raw Next.js development 404 screen. Complete severance from SYINCO Design System.
- **Background Style:** Default Next.js dark/light system background (centered flex column)
- **Header & Navigation:** None (unhandled error boundary)
- **Hero Architecture:** Centered minimal error message ('404 | This page could not be found.')
- **Container & Max Width:** Auto-centered inline-block
- **Layout & Grid:** None (vertical flex)
- **Typography Palette:** System font (-apple-system, BlinkMacSystemFont, Roboto, sans-serif)
- **Border Style & Radius:** 1px solid vertical divider (#000 or rgba(255,255,255,0.3)) between 404 and message
- **Button Variants:** None
- **Badges & Tags:** None
- **Imagery & Aspect Ratios:** None

---

## Unimplemented Route: `/contact-us` — Contact Us Route (404)
- **Target URL:** `http://localhost:3000/contact-us`
- **Visual Character Summary:** Raw Next.js development 404 screen. Complete severance from SYINCO Design System.
- **Background Style:** Default Next.js dark/light system background (centered flex column)
- **Header & Navigation:** None (unhandled error boundary)
- **Hero Architecture:** Centered minimal error message ('404 | This page could not be found.')
- **Container & Max Width:** Auto-centered inline-block
- **Layout & Grid:** None (vertical flex)
- **Typography Palette:** System font (-apple-system, BlinkMacSystemFont, Roboto, sans-serif)
- **Border Style & Radius:** 1px solid vertical divider (#000 or rgba(255,255,255,0.3)) between 404 and message
- **Button Variants:** None
- **Badges & Tags:** None
- **Imagery & Aspect Ratios:** None

---

## Unimplemented Route: `/request-a-quote` — Request a Quote Route (404)
- **Target URL:** `http://localhost:3000/request-a-quote`
- **Visual Character Summary:** Raw Next.js development 404 screen. Complete severance from SYINCO Design System.
- **Background Style:** Default Next.js dark/light system background (centered flex column)
- **Header & Navigation:** None (unhandled error boundary)
- **Hero Architecture:** Centered minimal error message ('404 | This page could not be found.')
- **Container & Max Width:** Auto-centered inline-block
- **Layout & Grid:** None (vertical flex)
- **Typography Palette:** System font (-apple-system, BlinkMacSystemFont, Roboto, sans-serif)
- **Border Style & Radius:** 1px solid vertical divider (#000 or rgba(255,255,255,0.3)) between 404 and message
- **Button Variants:** None
- **Badges & Tags:** None
- **Imagery & Aspect Ratios:** None

---
