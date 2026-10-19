export interface OemCategory {
  id: string;
  name: string;
  vendorId: string;
}

export const OEM_CATEGORIES: Record<string, OemCategory[]> = {
  'edwards-vacuum': [
    { id: 'vacuum-pumps', name: 'Vacuum Pumps', vendorId: 'edwards-vacuum' },
    { id: 'measurement-and-control', name: 'Measurement and Control', vendorId: 'edwards-vacuum' },
    { id: 'leak-detectors', name: 'Leak Detectors', vendorId: 'edwards-vacuum' },
    { id: 'valves', name: 'Valves', vendorId: 'edwards-vacuum' },
    { id: 'hardware-and-fitting', name: 'Hardware & Fitting', vendorId: 'edwards-vacuum' },
    { id: 'products-software', name: 'Products Software', vendorId: 'edwards-vacuum' },
  ],
  'advance-riko': [
    { id: 'thermoelectric-systems', name: 'Thermoelectric Evaluation Systems', vendorId: 'advance-riko' },
    { id: 'thermal-conductivity', name: 'Thermal Conductivity & Diffusivity', vendorId: 'advance-riko' },
    { id: 'infrared-heating-rta', name: 'Infrared Heating & Annealing (RTA)', vendorId: 'advance-riko' },
    { id: 'thermal-expansion', name: 'Thermal Expansion & Dilatometry', vendorId: 'advance-riko' },
    { id: 'thermal-analysis', name: 'Thermal Analysis & Gas Desorption', vendorId: 'advance-riko' },
    { id: 'materials-characterization', name: 'Materials & Surface Characterization', vendorId: 'advance-riko' },
  ],
  'fuji-electronic': [
    { id: 'spark-plasma-sintering', name: 'Spark Plasma Sintering Systems (SPS)', vendorId: 'fuji-electronic' },
    { id: 'sintering-tooling', name: 'Sintering Tooling & Accessories', vendorId: 'fuji-electronic' },
  ],
};

export function getProductOemCategory(p: {
  manufacturer?: { id: string };
  technologySubcategory?: string;
  name?: string;
  categorySlug?: string;
}): string {
  const vendor = p.manufacturer?.id;
  const sub = (p.technologySubcategory || '').toLowerCase();
  const name = (p.name || '').toLowerCase();
  const slug = (p.categorySlug || '').toLowerCase();

  if (vendor === 'edwards-vacuum') {
    if (sub.includes('leak') || name.includes('leak') || name.includes('gascheck')) return 'leak-detectors';
    if (sub.includes('valve') || name.includes('valve')) return 'valves';
    if (
      sub.includes('gauge') ||
      sub.includes('controller') ||
      sub.includes('sensor') ||
      sub.includes('manometer') ||
      sub.includes('switch') ||
      sub.includes('analyser') ||
      name.includes('gauge') ||
      name.includes('controller')
    ) {
      return 'measurement-and-control';
    }
    if (
      sub.includes('hardware') ||
      sub.includes('flange') ||
      sub.includes('filter') ||
      sub.includes('enclosure') ||
      sub.includes('trap') ||
      sub.includes('fitting') ||
      name.includes('flange') ||
      name.includes('fitting')
    ) {
      return 'hardware-and-fitting';
    }
    if (sub.includes('software') || name.includes('software')) return 'products-software';
    return 'vacuum-pumps';
  }

  if (vendor === 'advance-riko') {
    if (
      slug === 'thermoelectric-energy' ||
      name.includes('zem') ||
      name.includes('pem') ||
      name.includes('thermoelectric')
    ) {
      return 'thermoelectric-systems';
    }
    if (
      slug === 'thermal-properties' ||
      name.includes('laser flash') ||
      name.includes('diffusivity') ||
      name.includes('conductivity') ||
      name.includes('constant')
    ) {
      return 'thermal-conductivity';
    }
    if (
      slug === 'semiconductor-thin-film' ||
      slug === 'high-temp-processing' ||
      name.includes('anneal') ||
      name.includes('rtp') ||
      name.includes('rta') ||
      name.includes('lamp') ||
      name.includes('furnace') ||
      name.includes('gold image') ||
      name.includes('mila')
    ) {
      return 'infrared-heating-rta';
    }
    if (
      slug === 'thermal-expansion' ||
      name.includes('dilatometer') ||
      name.includes('expansion') ||
      name.includes('lix') ||
      name.includes('dl-')
    ) {
      return 'thermal-expansion';
    }
    if (
      slug === 'thermal-analysis' ||
      name.includes('calorimeter') ||
      name.includes('thermobalance') ||
      name.includes('desorption') ||
      name.includes('antares') ||
      name.includes('tgd') ||
      name.includes('dsc')
    ) {
      return 'thermal-analysis';
    }
    return 'materials-characterization';
  }

  if (vendor === 'fuji-electronic' || vendor === 'fuji-sps') {
    if (name.includes('tooling') || name.includes('die') || name.includes('accessory')) {
      return 'sintering-tooling';
    }
    return 'spark-plasma-sintering';
  }

  return 'other';
}
