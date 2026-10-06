export interface ServiceOffering {
  id: string;
  slug: string;
  title: string;
  badge: string;
  tagline: string;
  description: string;
  image: string;
  deliverables: string[];
  contactAction: string;
}

export const services: ServiceOffering[] = [
  {
    id: "hyderabad-spares-depot",
    slug: "hyderabad-spares-depot",
    title: "Hyderabad Spares Warehousing & Local Supply",
    badge: "Domestic Depot",
    tagline: "Off-the-shelf consumable kits, seals, thermocouples, and subassemblies in India",
    description:
      "SYINCO maintains a dedicated engineering and warehousing facility in Hyderabad stocking genuine OEM consumables, tip-seal replacement sets, vacuum fittings, and furnace heating elements for rapid dispatch across India.",
    image: "/images/services/hyderabad-spares-depot.webp",
    deliverables: [
      "In-stock Edwards nXDS tip-seal maintenance kits, silencers, and gas ballast valves",
      "Genuine Advance Riko thermocouples, heaters, electrodes, and quartz tubes",
      "Fuji-SPS genuine sintering dies, punches, graphite spacers, and carbon sheets",
      "Immediate domestic courier dispatch eliminating 8–12 week international freight delays",
    ],
    contactAction: "Inquire About Spares Inventory",
  },
  {
    id: "factory-commissioning-service",
    slug: "factory-commissioning-service",
    title: "On-Site Installation, Commissioning & Operator Training",
    badge: "Field Engineering",
    tagline: "Factory-trained Indian engineers for turnkey site preparation and acceptance testing",
    description:
      "Our field service engineers provide end-to-end installation, utility interfacing, vacuum leak check, and hands-on operational training for researchers and technicians at Indian universities and industrial plants.",
    image: "/images/services/factory-commissioning-service.webp",
    deliverables: [
      "Site utility readiness audit (electrical power, cooling water, gas supply, exhaust)",
      "System integration and formal Site Acceptance Testing (SAT)",
      "Standard sample reference calibration runs with documented verification certificates",
      "Comprehensive multi-tier operator training for faculty, scholars, and lab engineers",
    ],
    contactAction: "Schedule Engineering Service",
  },
  {
    id: "helium-leak-detection",
    slug: "helium-leak-detection",
    title: "Helium Mass Spectrometer Vacuum Leak Testing",
    badge: "Vacuum Metrology",
    tagline: "Ultra-sensitive leak detection down to 1 × 10⁻¹⁰ mbar·l/s for high-vacuum chambers",
    description:
      "Precision vacuum leak audit services utilizing calibrated portable helium mass spectrometer leak detectors. We diagnose and pinpoint micro-leaks in research vacuum chambers, load locks, and industrial processing systems.",
    image: "/images/services/helium-leak-detection.webp",
    deliverables: [
      "Sniffing and spraying helium test methods according to international vacuum standards",
      "Flange seal, weldment, feedthrough, and bellows integrity verification",
      "Quantitative leak rate documentation and corrective remediation guidance",
      "On-site service across Indian industrial facilities and research laboratories",
    ],
    contactAction: "Request Vacuum Leak Audit",
  },
  {
    id: "amc-preventative-maintenance",
    slug: "amc-preventative-maintenance",
    title: "Annual Maintenance Contracts (AMC) & Comprehensive Warranty",
    badge: "Lifecycle Support",
    tagline: "Guaranteed uptime and scheduled preventative maintenance for mission-critical instruments",
    description:
      "Customized AMC packages covering scheduled preventative inspections, calibration checks, priority on-site emergency visits, and discounted spares to maximize instrument longevity.",
    image: "/images/services/amc-preventative-maintenance.webp",
    deliverables: [
      "Biannual or annual preventative maintenance inspection protocols",
      "Comprehensive calibration verification and sensor alignment",
      "Priority response time SLAs for critical research and production downtimes",
      "In-country Indian Rupee (INR) invoicing with 18% GST input credit eligibility",
    ],
    contactAction: "Request AMC Proposal",
  },
  {
    id: "contract-sample-analysis",
    slug: "contract-sample-analysis",
    title: "Contract Paid Sample Analysis & Feasibility Testing",
    badge: "Analytical Services",
    tagline: "ZEM-3 Seebeck & electrical resistivity characterization before equipment procurement",
    description:
      "Researchers can send material specimens to our Hyderabad application facility for accredited Seebeck coefficient and electrical resistivity measurement (-150°C to 1000°C), verifying performance before capital investment.",
    image: "/images/services/contract-sample-analysis.webp",
    deliverables: [
      "High-precision ZEM-3 measurement runs with NIST/OEM traceable calibration standards",
      "Raw data tables, temperature-dependent curves, and formal analytical summary report",
      "Pre-procurement feasibility proof for scientific grant applications and tender specifications",
      "Confidential NDA-backed material testing with fast turnaround",
    ],
    contactAction: "Submit Sample Analysis Request",
  },
];
