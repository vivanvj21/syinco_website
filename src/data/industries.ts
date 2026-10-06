export interface Industry {
  id: string;
  slug: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  image: string;
  keyApplications: string[];
  recommendedDisciplines: {
    name: string;
    href: string;
  }[];
}

export const industries: Industry[] = [
  {
    id: "semiconductor-microelectronics",
    slug: "semiconductor-microelectronics",
    name: "Semiconductors & Microelectronics",
    badge: "Nanotechnology",
    tagline: "Sub-nanometer thin films, wafer rapid annealing, and clean vacuum environments",
    description:
      "Precision wafer processing systems, rapid thermal annealing furnaces, and hydrocarbon-free dry vacuum pumping for cleanrooms and wafer fabs.",
    image: "/images/industries/semiconductor-microelectronics.webp",
    keyApplications: [
      "Thin-film thermal boundary conductance (2-Omega method)",
      "Rapid thermal processing (RTA) and wafer annealing",
      "Turbomolecular backing and clean load-lock evacuation",
      "Infrared rapid thermal processing (RTP) chamber heating",
    ],
    recommendedDisciplines: [
      { name: "Semiconductor Thin Film", href: "/products/semiconductor-thin-film" },
      { name: "Clean Vacuum Pumps", href: "/products/vacuum-technology" },
    ],
  },
  {
    id: "aerospace-defense",
    slug: "aerospace-defense",
    name: "Aerospace & Defense",
    badge: "Mission Critical",
    tagline: "Ultra-high temperature materials qualification and space simulation vacuum",
    description:
      "Sub-nanometer laser dilatometry, high-temperature thermal barrier characterization, and high-vacuum environmental simulation stations.",
    image: "/images/industries/aerospace-defense.webp",
    keyApplications: [
      "Absolute thermal expansion of zero-expansion satellite optics (SuperLIX)",
      "Thermal barrier coatings and ultra-high temperature ceramics testing",
      "Space simulation chambers and satellite component bakeout",
      "Spark plasma sintering for ultra-high temperature ceramics",
    ],
    recommendedDisciplines: [
      { name: "Laser Dilatometry", href: "/products/thermal-expansion" },
      { name: "High-Vacuum Systems", href: "/products/vacuum-technology" },
      { name: "Thermal Analysis", href: "/products/thermal-properties" },
    ],
  },
  {
    id: "advanced-materials-energy",
    slug: "advanced-materials-energy",
    name: "Advanced Materials & Energy",
    badge: "Clean Tech",
    tagline: "Thermoelectric waste-heat harvesting, solid-state batteries, and 2D materials",
    description:
      "The global reference standard for simultaneous Seebeck coefficient and electrical resistivity measurement, plus thermal conductivity characterization.",
    image: "/images/industries/advanced-materials-energy.webp",
    keyApplications: [
      "Simultaneous Seebeck coefficient & electrical resistivity (ZEM-3)",
      "Spark plasma sintering (SPS) of thermoelectric legs and battery solid electrolytes",
      "Thermal conductivity of nano-scale battery separators and graphene films",
      "Thermal cycling and stability evaluation under inert/vacuum atmospheres",
    ],
    recommendedDisciplines: [
      { name: "Thermoelectric Evaluation", href: "/products/thermoelectric-energy" },
      { name: "Spark Plasma Sintering", href: "/products/high-temp-furnaces" },
      { name: "Thermal Properties", href: "/products/thermal-properties" },
    ],
  },
  {
    id: "metallurgy-ceramics",
    slug: "metallurgy-ceramics",
    name: "Metallurgy & Advanced Ceramics",
    badge: "Industrial Processing",
    tagline: "Rapid field-assisted consolidation and high-speed infrared gold image melting",
    description:
      "Spark Plasma Sintering (SPS) systems for rapid densification of refractory metals, fine ceramics, and infrared gold image furnaces with 100°C/s heating rates.",
    image: "/images/industries/metallurgy-ceramics.webp",
    keyApplications: [
      "Field-assisted consolidation of nanostructured ceramics (Dr. Sinter SPS)",
      "High-speed thermal cycle simulation and quenching studies (RHL-E Series)",
      "Refractory alloy phase equilibrium and expansion measurements",
      "Harsh chemical vapor vacuum extraction with dry screw pumps",
    ],
    recommendedDisciplines: [
      { name: "Spark Plasma Sintering", href: "/products/high-temp-furnaces" },
      { name: "Infrared Furnaces", href: "/products/high-temp-processing" },
      { name: "Chemical Vacuum Systems", href: "/products/vacuum-technology" },
    ],
  },
  {
    id: "academic-national-laboratories",
    slug: "academic-national-laboratories",
    name: "Academic & National Research",
    badge: "Premier R&D",
    tagline: "Turnkey scientific instruments for IITs, IISc, DRDO, ISRO, CSIR, and DAE",
    description:
      "Direct OEM-backed instrumentation with Hyderabad-based application testing, in-country warranty, installation, and domestic currency procurement.",
    image: "/images/industries/academic-national-laboratories.webp",
    keyApplications: [
      "Central scientific instrumentation centers and materials research labs",
      "Joint sponsored research projects and funded grant hardware supply",
      "Contract sample measurement before capital equipment acquisition",
      "Annual Maintenance Contracts and Hyderabad spares replenishment",
    ],
    recommendedDisciplines: [
      { name: "All Scientific Systems", href: "/products" },
      { name: "Contract Sample Analysis", href: "/services" },
      { name: "Spares & AMC Services", href: "/services" },
    ],
  },
];
