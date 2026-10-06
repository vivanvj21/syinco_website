import { CategoryDefinition } from '@/types/product';

/**
 * SYINCO TECHNOLOGIES — 8 Canonical Active Catalogue Categories
 * Source of Truth: Milestone 5.8D Approved Architecture
 * 
 * 1. Thermoelectric & Energy Materials
 * 2. Thermal Properties & Thermal Management
 * 3. High-Temperature Processing & Furnaces
 * 4. Thermal Expansion & Dimensional Stability
 * 5. Thermal Analysis & Gas Characterization
 * 6. Semiconductor & Thin-Film Technology
 * 7. Materials Characterization & Physical Testing
 * 8. Vacuum Technology & Abatement
 */
export const allCategories: CategoryDefinition[] = [
  {
    slug: 'thermoelectric-energy',
    name: 'Thermoelectric & Energy Materials',
    domain: 'thermoelectric-energy',
    domainName: 'Thermoelectric & Energy Materials',
    description:
      'World-standard instrumentation for simultaneous Seebeck coefficient and electrical resistivity evaluation across cryogenic to ultra-high temperatures.',
    heroHeadline:
      'Simultaneous Seebeck Coefficient & Electrical Resistivity Measurement (-150°C to 1000°C)',
    aliases: ['thermoelectric-evaluation', 'thermoelectric-thermal-analysis'],
  },
  {
    slug: 'thermal-properties',
    name: 'Thermal Properties & Thermal Management',
    domain: 'thermal-properties',
    domainName: 'Thermal Properties & Thermal Management',
    description:
      'Laser flash, xenon flash, nanoscale thin-film 2-omega, and steady-state thermal conductivity analyzers.',
    heroHeadline:
      'Cross-Plane & In-Plane Thermal Diffusivity and Nanoscale Conductivity',
    aliases: ['thermal-management'],
  },
  {
    slug: 'high-temp-furnaces',
    name: 'High-Temperature Processing & Furnaces',
    domain: 'high-temp-furnaces',
    domainName: 'High-Temperature Processing & Furnaces',
    description:
      'Infrared gold image furnaces, rapid heating up to 1800°C in seconds, ultra-clean cold-wall vacuum/gas processing, and Spark Plasma Sintering (SPS) systems.',
    heroHeadline:
      'Infrared Gold Image Radiation Heating, Spark Plasma Sintering & Thermal Treatment Simulators',
    aliases: ['high-temp-processing', 'thermal-processing-furnaces', 'spark-plasma-sintering', 'sps'],
  },
  {
    slug: 'thermal-expansion',
    name: 'Thermal Expansion & Dimensional Stability',
    domain: 'thermal-expansion',
    domainName: 'Thermal Expansion & Dimensional Stability',
    description:
      'Ultra-high-precision laser interferometer dilatometers with sub-nanometer resolution (10⁻⁸/K) and push-rod dilatometers.',
    heroHeadline:
      'Laser Interferometric & Push-Rod Absolute Thermal Dilatometry',
    aliases: ['dimensional-stability'],
  },
  {
    slug: 'thermal-analysis-gas',
    name: 'Thermal Analysis & Gas Characterization',
    domain: 'thermal-analysis-gas',
    domainName: 'Thermal Analysis & Gas Characterization',
    description:
      'Ultra-fast TG/DTA with gold image radiant heating, high-sensitivity DSC, TMA viscoelasticity, and vacuum effusion vapor pressure systems.',
    heroHeadline:
      'Simultaneous TG/DTA, Differential Scanning Calorimetry & Knudsen Vapor Effusion',
    aliases: ['thermal-analysis', 'gas-characterization'],
  },
  {
    slug: 'semiconductor-thin-film',
    name: 'Semiconductor & Thin-Film Technology',
    domain: 'semiconductor-thin-film',
    domainName: 'Semiconductor & Thin-Film Technology',
    description:
      'Rapid thermal annealing (RTA/RTP) for wafers up to 300 mm, desktop mini lamp annealers, and clean optical heating.',
    heroHeadline:
      'Wafer Rapid Thermal Annealing & Clean Atmospheric Lamp Processing',
    aliases: ['thin-film-deposition'],
  },
  {
    slug: 'materials-characterization',
    name: 'Materials Characterization & Physical Testing',
    domain: 'materials-characterization',
    domainName: 'Materials Characterization & Physical Testing',
    description:
      'In-situ optical high-temperature observation microscopes up to 1600°C, 3000K millisecond pulse testing, contact angle wettability, and arc-plasma deposition.',
    heroHeadline:
      'In-Situ High-Temperature Observation, 3000K Pulse Characterization & Surface Wettability',
  },
  {
    slug: 'vacuum-technology',
    name: 'Vacuum Technology & Abatement',
    domain: 'vacuum-technology',
    domainName: 'Vacuum Technology',
    description:
      'Hydrocarbon-free primary vacuum scroll pumps and turbomolecular backing solutions engineered for cleanroom, laboratory, and industrial environments.',
    heroHeadline:
      'Oil-Free Dry Scroll Vacuum Pumps & Primary Pumping Systems',
    aliases: ['dry-vacuum-pumps'],
  },
];

export function getCategoryBySlug(slug: string): CategoryDefinition | undefined {
  return allCategories.find((c) => c.slug === slug || c.aliases?.includes(slug));
}
