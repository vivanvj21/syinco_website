# CURRENT DESIGN SYSTEM AUDIT — SYINCO TECHNOLOGIES

**Audit Execution Timestamp:** 2026-09-29
**Source of Truth:** Real codebase implementation (`d:\Syinco\tailwind.config.ts`, `src/app/globals.css`, `src/components/ui/`, `src/components/technical/`)

---

## 1. Actual Color System Implemented in Code

The application implements an industrial-scientific dual theme (Dark Hero/Canvas + Light Analytical Workspace):

### 1.1 Brand & Accent Colors
| Token Name | Hex Code | Tailwind Utility | Actual Usage |
|---|---|---|---|
| `brand.teal` | `#008390` | `bg-brand-teal`, `text-brand-teal` | Primary brand identity, active indicators, verified tags, link hovers |
| `brand.teal-hover` | `#006D77` | `hover:bg-brand-teal-hover` | Hover state for teal interactive elements |
| `brand.teal-tint` | `#E6F4F5` | `bg-brand-teal-tint` | Table row highlights, subtle badge backgrounds, active pill backgrounds |
| `action.amber` | `#F59E0B` | `bg-action-amber` | Primary conversion CTAs (e.g. 'Explore Technical Catalogue', 'Request Quote') |
| `action.amber-hover` | `#D97706` | `hover:bg-action-amber-hover` | Hover state for primary action buttons |

### 1.2 Dark Canvas Theme (Hero, Accreditation & Horizon)
| Token Name | Hex Code | Tailwind Utility | Actual Usage |
|---|---|---|---|
| `slate.canvas` | `#0B1118` | `bg-slate-canvas` | Deep dark foundation for Hero, Pre-Header, Sample Analysis Portal, and Footer |
| `slate.surface` | `#111827` | `bg-slate-surface` | Partner card containers, dark input backgrounds, elevated dark panels |
| `slate.panel` | `#1E293B` | `bg-slate-panel` | Interactive micro-cards, right-hand hero architectural CAD box |

### 1.3 Light Analytical Workspace (Catalogue, PDP Body & Specifications)
| Token Name | Hex Code | Tailwind Utility | Actual Usage |
|---|---|---|---|
| `surface.light` | `#F8FAFC` | `bg-surface-light` | Category bento section, flagship showcase section background, spec table striping |
| `surface.card` | `#FFFFFF` | `bg-surface-card` | ProductCard background, specification table cells, sticky navigation tabs |

### 1.4 Typography Ink Hierarchy
| Token Name | Hex Code | Tailwind Utility | Actual Usage |
|---|---|---|---|
| `ink.primary` | `#0F172A` | `text-ink-primary` | High-contrast body text, product titles, specification parameter names |
| `ink.muted` | `#64748B` | `text-ink-muted` | Secondary descriptions, test conditions, unit labels, breadcrumb dividers |
| `ink.inverse-primary` | `#F8FAFC` | `text-ink-inverse-primary` | Light typography on dark canvas sections |
| `ink.inverse-muted` | `#94A3B8` | `text-ink-inverse-muted` | Subheadings and captions on dark canvas sections |

### 1.5 Structural Border Palette
| Token Name | Hex Code | Tailwind Utility | Actual Usage |
|---|---|---|---|
| `border.light` | `#E2E8F0` | `border-border-light` | Standard 1px divider for cards, specification tables, and filters |
| `border.dark` | `#1E293B` | `border-border-dark` | Borders on dark hero, partner cards, and pre-header |
| `border.teal` | `#008390` | `border-border-teal` | Active tab indicators, focus rings, selected card outlines |

---

## 2. Typography System

Three typeface families are configured in `tailwind.config.ts`:
1. **Display Headings (`font-display`):** `Space Grotesk`, `-apple-system`, `sans-serif`
   - Used for: H1 hero headlines, H2 section benchmarks, product PDP title, category headers.
   - Letter spacing: `tracking-tight`.
2. **Body & Interface (`font-sans`):** `Inter`, `-apple-system`, `BlinkMacSystemFont`, `sans-serif`
   - Used for: Descriptions, button labels, navigation links, specification values.
3. **Engineering & Monospace (`font-mono`):** `JetBrains Mono`, `monospace`
   - Used for: Eyebrow tags, model part numbers, numerical dimensions, vacuum units (`m³/h`, `mbar`), metadata badges.

---

## 3. Spatial, Layout & Grid System

- **Master Container Width:** Max `1360px` (`max-w-container mx-auto px-4`).
- **Section Vertical Padding:**
  - Hero: `py-14 lg:py-20`
  - Standard Sections: `py-12`
  - Secondary Banners: `py-10`
- **Grid Systems:**
  - Hero: 12-column grid (`lg:grid-cols-12` with 7 cols left / 5 cols right).
  - Bento Technology Domains: 12-column grid (`md:col-span-7`, `md:col-span-5`, `md:col-span-4`).
  - Partner Grid: 3 columns (`md:grid-cols-3 gap-4`).
  - Applications Gateway: 4 columns (`sm:grid-cols-2 lg:grid-cols-4 gap-4`).
  - Master Catalogue Layout: 240px sticky filter sidebar + flexible product list.
  - PDP Layout: Sticky 2-column or stacked tabbed architecture.
- **Responsive Breakpoints:** Standard Tailwind defaults:
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px
  - `xl`: 1280px
  - `2xl`: 1536px

---

## 4. Component Styles & Variants

### 4.1 Buttons (`src/components/ui/Button.tsx`)
- **Primary:** `bg-action-amber text-slate-canvas hover:bg-action-amber-hover font-semibold shadow-sm`
- **Secondary:** `bg-slate-panel text-ink-inverse-primary hover:bg-slate-surface`
- **Outline:** `bg-transparent border border-border-light text-ink-primary hover:bg-slate-100 hover:border-slate-300`
- **Ghost:** `bg-transparent text-ink-primary hover:bg-brand-teal-tint hover:text-brand-teal`
- **Danger:** `bg-red-600 text-white hover:bg-red-700`
- **Sizes:** `sm` (h-8 px-3 text-xs), `md` (h-10 px-4 text-sm), `lg` (h-12 px-6 text-base).

### 4.2 Product Cards (`src/components/business/ProductCard.tsx`)
- Horizontal layout on desktop (`flex flex-col sm:flex-row items-stretch`).
- Visual anchor: 4:3 container (`sm:w-[200px] lg:w-[240px] shrink-0 bg-white sm:bg-slate-50/60 border-r border-border-light`).
- Compare quick-toggle pill on top-left of image.
- High-density 3-metric highlight grid (`grid grid-cols-3 gap-2 my-2.5 pt-2.5 border-t border-border-light/70`).
- Stock status badge & direct Quote / Specs conversion CTA.

### 4.3 Technical Badges & Tags
- **OEM Tag (`src/components/technical/OEMTag.tsx`):**
  - Monospace pill with origin country flag text.
  - Edwards: `UK`, Advance Riko: `Japan`, Chino: `Japan`, Fuji: `Japan`.
- **Classification Badge (`src/components/technical/ClassificationBadge.tsx`):**
  - `subsystem-component` -> 'Subsystem Component'
  - `scientific-instrument` -> 'Scientific Instrument'
  - `industrial-automated` -> 'Industrial System'
  - `spare-consumable` -> 'Spares & Consumables'
- **Stock Status Badge (`src/components/technical/StockStatus.tsx`):**
  - `hyderabad-stock`: Green dot + 'Hyderabad Depot Stock (48-72h)'
  - `built-to-order`: Blue dot + 'Built-to-Order OEM Direct'
  - `import-on-demand`: Slate dot + 'Import-on-Demand (4-6 Weeks)'

### 4.4 Form Controls & RFQ Channels
- Two modal workflows implemented via Radix UI Dialog & Zod validation:
  - **Channel A (Capital Equipment RFQ):** Institutional qualification, timeline, telephone, organization type.
  - **Channel B (Spares Requisition):** Multi-item quantity basket, part number entry, GSTIN, local delivery address.

### 4.5 Engineering Grid Background Linework
- Subtly layered 24px CSS background grid:
  `linear-gradient(to right, #1E293B 1px, transparent 1px), linear-gradient(to bottom, #1E293B 1px, transparent 1px)` with `backgroundSize: '24px 24px'`.
  Provides clean industrial CAD aesthetics across dark and light modules.