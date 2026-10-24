import fs from 'fs';
import path from 'path';

function escapePdf(str: string): string {
  return str.replace(/[\\()]/g, '\\$&').replace(/[^\x20-\x7E]/g, ' ');
}

interface SpecItem {
  param: string;
  val: string;
}

interface DocConfig {
  filename: string;
  title: string;
  subtitle: string;
  docType: 'Official System Brochure' | 'Engineering Technical Datasheet';
  modelSeries: string;
  specs: SpecItem[];
  variants?: string[];
  features: string[];
}

function generatePdfBuffer(doc: DocConfig): Buffer {
  const content: string[] = [
    'BT',
    '/F1 15 Tf',
    '50 740 Td',
    `(${escapePdf(doc.title)}) Tj`,
    '/F1 11 Tf',
    '0 -18 Td',
    `(${escapePdf(doc.subtitle)} - ${escapePdf(doc.docType)}) Tj`,
    '/F1 8 Tf',
    '0 -15 Td',
    '(==================================================================================================) Tj',
    '0 -12 Td',
    '(OEM: FUJI ELECTRONIC INDUSTRIAL CO., LTD. (JAPAN) | SPS TECHNOLOGY DIVISION (fdc.co.jp/sps)) Tj',
    '0 -11 Td',
    '(INDIAN TECHNICAL SALES & DEPOT SUPPORT: SYINCO TECHNOLOGIES, HYDERABAD, TELANGANA, INDIA) Tj',
    '0 -12 Td',
    '(==================================================================================================) Tj',
    '/F1 11 Tf',
    '0 -20 Td',
    '(VERIFIED TECHNICAL SPECIFICATIONS & OPERATING PARAMETERS:) Tj',
    '/F1 8.5 Tf',
  ];

  let yOffset = -15;
  for (const s of doc.specs.slice(0, 10)) {
    content.push(`0 ${yOffset} Td`);
    const line = `* ${s.param}: ${s.val}`;
    const clamped = line.length > 95 ? line.slice(0, 92) + '...' : line;
    content.push(`(${escapePdf(clamped)}) Tj`);
    yOffset = -13;
  }

  if (doc.variants && doc.variants.length > 0) {
    content.push('0 -18 Td');
    content.push('/F1 10 Tf');
    content.push('(CANONICAL MODEL CONFIGURATIONS & FORCE ENVELOPES:) Tj');
    content.push('/F1 8 Tf');
    yOffset = -13;
    for (const v of doc.variants.slice(0, 6)) {
      content.push(`0 ${yOffset} Td`);
      content.push(`(${escapePdf(`> ${v}`)}) Tj`);
      yOffset = -12;
    }
  }

  content.push('0 -16 Td');
  content.push('/F1 10 Tf');
  content.push('(SCOPE OF DELIVERY & SYINCO LOCAL SUPPORT ADVANTAGE:) Tj');
  content.push('/F1 8 Tf');
  content.push('0 -13 Td');
  content.push('(- Complete OEM Furnace Body, Chamber, Electrode Assembly & DC Pulse Power Supply) Tj');
  content.push('0 -11 Td');
  content.push('(- In-Country INR Supply & Customs Clearance Handled Ex-Hyderabad Central Logistics Depot) Tj');
  content.push('0 -11 Td');
  content.push('(- Certified Field Installation, Commissioning, Calibration & Preventive Maintenance (AMC)) Tj');
  content.push('0 -11 Td');
  content.push('(- Dedicated Inventory of High-Purity Graphite Tooling (Dies & Punches), Thermocouples & Seals) Tj');
  content.push('0 -16 Td');
  content.push('/F1 8 Tf');
  content.push('(Technical Consultation Desk: info@syinco.in | Mobile: +91 73822 92929 | Official Portal: www.syinco.in) Tj');
  content.push('ET');

  const streamData = content.join('\n');
  const streamLength = Buffer.byteLength(streamData);

  const objects: string[] = [
    '1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj',
    '2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj',
    '3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>\nendobj',
    `4 0 obj\n<< /Length ${streamLength} >>\nstream\n${streamData}\nendstream\nendobj`,
    '5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj'
  ];

  let body = '%PDF-1.4\n';
  const xref: number[] = [0];

  for (let i = 0; i < objects.length; i++) {
    xref.push(body.length);
    body += objects[i] + '\n';
  }

  const xrefStart = body.length;
  body += 'xref\n';
  body += `0 ${objects.length + 1}\n`;
  body += '0000000000 65535 f \n';
  for (let i = 1; i <= objects.length; i++) {
    const offset = xref[i].toString().padStart(10, '0');
    body += `${offset} 00000 n \n`;
  }

  body += 'trailer\n';
  body += `<< /Size ${objects.length + 1} /Root 1 0 R >>\n`;
  body += 'startxref\n';
  body += `${xrefStart}\n`;
  body += '%%EOF';

  return Buffer.from(body, 'latin1');
}

const fujiDocs: DocConfig[] = [
  // 1. DR. SINTER LAB Jr. Series
  {
    filename: 'fuji-sps-dr-sinter-lab-jr-brochure.pdf',
    title: 'DR. SINTER LAB Jr. Series Spark Plasma Sintering Systems',
    subtitle: 'Compact Desktop & Laboratory R&D Materials Synthesis Platform',
    docType: 'Official System Brochure',
    modelSeries: 'DR. SINTER LAB Jr.',
    specs: [
      { param: 'Technology', val: 'Spark Plasma Sintering (SPS) / Pulsed Electric Current Sintering (PECS)' },
      { param: 'Maximum Pressure', val: '20 kN to 60 kN (2,040 kgf to 6,120 kgf) via AC Servo Motor' },
      { param: 'Minimum Pressure', val: '0.5 kN (51 kgf) for micro-load fragile green compacts' },
      { param: 'Maximum Sintering Temperature', val: '2,500 deg C with Optical Pyrometer / Thermocouple' },
      { param: 'Sintering DC Pulse Generator', val: '1,000 A to 3,000 A (Input: AC 200V, 3-Phase, 50/60 Hz)' },
      { param: 'Pulse Timing Control', val: 'ON: 1 to 999 ms / OFF: 1 to 99 ms (continuous variable pulse)' },
      { param: 'Vacuum Chamber', val: 'Water-Cooled Stainless Steel Chamber (Bore: 200 mm to 259 mm)' },
      { param: 'Electrode System', val: 'Special Sealed Water-Cooled Electrode Assembly' },
      { param: 'Displacement Sensor', val: 'Digital Linear Gauge for Real-Time Shrinkage Monitoring' }
    ],
    variants: [
      'Model MS-1: 20 kN Force, 1,000 A Current, 259 mm Chamber Bore, 50 mm Stroke',
      'Model 212Lx: 20 kN Force, 1,000 A Current, 200 mm Chamber Bore, 50 mm Stroke',
      'Model 322Lx: 30 kN Force, 2,000 A Current, 200 mm Chamber Bore, 150 mm Stroke',
      'Model 632Lx: 60 kN Force, 3,000 A Current, 200 mm Chamber Bore, 150 mm Stroke'
    ],
    features: ['Precision AC servo mechanical loading', 'High-density DC pulse generator', 'Laboratory benchtop footprint']
  },
  {
    filename: 'fuji-sps-dr-sinter-lab-jr-datasheet.pdf',
    title: 'DR. SINTER LAB Jr. Series Spark Plasma Sintering Systems',
    subtitle: 'Technical Datasheet & Engineering Specifications',
    docType: 'Engineering Technical Datasheet',
    modelSeries: 'DR. SINTER LAB Jr.',
    specs: [
      { param: 'Press Mechanism', val: 'AC Servo Motor Mechanical Loading System' },
      { param: 'Force Capacities', val: 'MS-1: 20 kN | 212Lx: 20 kN | 322Lx: 30 kN | 632Lx: 60 kN' },
      { param: 'Ram Stroke', val: '50 mm (MS-1, 212Lx) / 150 mm (322Lx, 632Lx)' },
      { param: 'Open Daylight Height', val: '200 mm across all models' },
      { param: 'Vacuum Performance', val: 'Ultimate Vacuum: < 0.01 Pa with standard diffusion/turbo package' },
      { param: 'DC Pulse Output', val: 'MS-1: 1,000 A | 212Lx: 1,000 A | 322Lx: 2,000 A | 632Lx: 3,000 A' },
      { param: 'Cooling Water Requirement', val: 'Clean circulating water: >= 30 L/min, pressure 0.2 to 0.3 MPa' },
      { param: 'Inert Gas Atmosphere', val: 'High-purity Argon / Nitrogen purge capability' }
    ],
    variants: [
      'MS-1: Micro SPS for exploratory nanomaterials synthesis',
      '212Lx: Standard laboratory research unit for rapid sintering',
      '322Lx: Mid-force laboratory system with extended 150 mm stroke',
      '632Lx: High-force laboratory consolidation unit up to 60 kN'
    ],
    features: ['AC servo precision drive', 'Direct digital displacement', 'Front-door access chamber']
  },

  // 2. 25 Series
  {
    filename: 'fuji-sps-25-series-brochure.pdf',
    title: '25 Series Pilot & Industrial Spark Plasma Sintering Systems',
    subtitle: 'High-Capacity Sintering Systems for Pilot Scaling and Medium-Scale Production',
    docType: 'Official System Brochure',
    modelSeries: '25 Series',
    specs: [
      { param: 'Technology', val: 'Spark Plasma Sintering (SPS) with Proportional Hydraulic Control' },
      { param: 'Press Force Range', val: '100 kN to 250 kN (10.2 tf to 25.5 tf)' },
      { param: 'Minimum Forming Pressure', val: '5 kN (standard) / 2 kN (optional low-pressure control)' },
      { param: 'Maximum Sintering Temperature', val: '2,500 deg C (Working envelope: 2,200 deg C)' },
      { param: 'Sintering DC Pulse Generator', val: '3,000 A to 10,000 A Output Capacity' },
      { param: 'Hydraulic Stroke', val: '150 mm standard stroke' },
      { param: 'Open Height', val: '250 mm Daylight Clearance' },
      { param: 'Vacuum Chamber', val: 'Water-Cooled Stainless Steel (Bore: 450 mm, Front Door Cylindrical)' },
      { param: 'Pulse Timing', val: 'ON: 1 to 99 digit / OFF: 1 to 9 digit' }
    ],
    variants: [
      'Model 615: 100 kN Press Force, 3,000 A DC Pulse Generator',
      'Model 625: 100 kN / 250 kN Press Force, 5,000 A DC Pulse Generator',
      'Model 725: 250 kN Press Force, 5,000 A DC Pulse Generator',
      'Model 825: 250 kN Press Force, 8,000 A DC Pulse Generator',
      'Model 925: 250 kN Press Force, 10,000 A DC Pulse Generator'
    ],
    features: ['Hydraulic proportional relief valve', 'Multi-step sintering schedules', 'Large 450 mm chamber']
  },
  {
    filename: 'fuji-sps-25-series-datasheet.pdf',
    title: '25 Series Pilot & Industrial Spark Plasma Sintering Systems',
    subtitle: 'Technical Datasheet & Engineering Specifications',
    docType: 'Engineering Technical Datasheet',
    modelSeries: '25 Series',
    specs: [
      { param: 'Hydraulic System', val: 'Proportional relief valve hydraulic unit with closed-loop pressure feedback' },
      { param: 'Max Forming Pressure', val: '615: 100 kN | 625: 100/250 kN | 725: 250 kN | 825: 250 kN | 925: 250 kN' },
      { param: 'DC Pulse Current', val: '615: 3,000 A | 625: 5,000 A | 725: 5,000 A | 825: 8,000 A | 925: 10,000 A' },
      { param: 'Chamber Bore', val: 'phi 450 mm cylindrical water-cooled stainless steel vessel' },
      { param: 'Vacuum Level', val: 'Standard: < 0.006 Pa with high-vacuum diffusion pump / roots blower' },
      { param: 'Electrode Diameter', val: 'Heavy-duty water-cooled copper-alloy electrode rams' },
      { param: 'Sample Diameter', val: 'Consolidates specimens up to 150 mm diameter in standard graphite dies' }
    ],
    variants: [
      '615: General pilot R&D unit with 3,000 A output',
      '625: Industry-standard 5,000 A flagship workhorse',
      '725: High-force 250 kN platform with 5,000 A power',
      '825: Scaled 8,000 A generator for large-area sintering',
      '925: High-power 10,000 A generator for refractory billets'
    ],
    features: ['Proportional hydraulic pressing', 'High-current DC pulse', 'Standard 150 mm stroke']
  },

  // 3. Standard System for Research and Production
  {
    filename: 'fuji-sps-standard-research-production-brochure.pdf',
    title: 'Standard System for Research & Production SPS Systems',
    subtitle: 'Heavy-Duty Production Sintering Presses from 200 kN up to 6,000 kN Force',
    docType: 'Official System Brochure',
    modelSeries: 'Standard Research & Production',
    specs: [
      { param: 'Technology', val: 'Heavy Industrial Spark Plasma Sintering (SPS) Mega-Press System' },
      { param: 'Press Force Range', val: '200 kN to 6,000 kN (20.4 tf to 612 tf)' },
      { param: 'Minimum Pressure', val: '2 kN to 30 kN (model-dependent low-pressure throttling)' },
      { param: 'Maximum Sintering Temperature', val: '2,500 deg C across all models' },
      { param: 'Sintering DC Pulse Generator', val: '3,000 A up to 45,000 A continuous pulse output' },
      { param: 'Chamber Architecture', val: 'Upper & Lower Split Water-Cooled Vacuum Chamber' },
      { param: 'Hydraulic Stroke', val: '250 mm to 350 mm heavy stroke capacity' },
      { param: 'Daylight Clearance', val: '300 mm to 600 mm for massive multi-tier tooling' }
    ],
    variants: [
      'MODEL 3.20: 200 kN Press Force (20.4 tf), 250 mm Stroke, 300 mm Open Height',
      'MODEL 5.40: 500 kN Press Force (51.0 tf), 250 mm Stroke, 400 mm Open Height',
      'MODEL 7.40: 1,000 kN Press Force (102 tf), 300 mm Stroke, 400 mm Open Height',
      'MODEL 8.40: 2,000 kN Press Force (204 tf), 300 mm Stroke, 600 mm Open Height',
      'MODEL 9.40: 3,000 kN Press Force (306 tf), 350 mm Stroke, 600 mm Open Height',
      'MODEL 10.40: 6,000 kN Press Force (612 tf), 350 mm Stroke, 600 mm Open Height'
    ],
    features: ['Split-chamber fast turnaround', 'Mega-tonnage hydraulic frames', 'Ultra-high current DC pulse supplies']
  },
  {
    filename: 'fuji-sps-standard-research-production-datasheet.pdf',
    title: 'Standard System for Research & Production SPS Systems',
    subtitle: 'Technical Datasheet & Engineering Specifications',
    docType: 'Engineering Technical Datasheet',
    modelSeries: 'Standard Research & Production',
    specs: [
      { param: 'Pressing Capacities', val: '3.20: 200 kN | 5.40: 500 kN | 7.40: 1,000 kN | 8.40: 2,000 kN | 9.40: 3,000 kN | 10.40: 6,000 kN' },
      { param: 'Ram Stroke Length', val: '3.20/5.40: 250 mm | 7.40/8.40: 300 mm | 9.40/10.40: 350 mm' },
      { param: 'Open Height', val: '3.20: 300 mm | 5.40/7.40: 400 mm | 8.40/9.40/10.40: 600 mm' },
      { param: 'Pulse Power Supplies', val: 'Modular DC pulse generator systems from 3,000 A up to 45,000 A' },
      { param: 'Chamber Construction', val: 'Double-walled stainless steel upper/lower hydraulic splitting chamber' },
      { param: 'Billet Sintering Envelope', val: 'Fabricates sputtering targets & ceramic armor plates up to 300+ mm diameter' }
    ],
    variants: [
      '3.20: 200 kN pilot production model',
      '5.40: 500 kN medium industrial press',
      '7.40: 1,000 kN heavy industrial platform',
      '8.40: 2,000 kN large-scale consolidation unit',
      '9.40: 3,000 kN heavy component press',
      '10.40: 6,000 kN mega-capacity production flagship'
    ],
    features: ['6,000 kN maximum force', 'Upper/lower split chamber', 'Up to 45,000 A pulse power']
  },

  // 4. Automatic SPS System
  {
    filename: 'fuji-sps-automatic-brochure.pdf',
    title: 'Automatic SPS System for Production Lines',
    subtitle: 'Continuous & Automated Sintering Production Architecture',
    docType: 'Official System Brochure',
    modelSeries: 'Automatic SPS',
    specs: [
      { param: 'Technology', val: 'Automated Tunnel-Type Spark Plasma Sintering (SPS) Line' },
      { param: 'Clamping Pressure', val: '500 kN (51,000 kgf) Hydraulic Press with Proportional Control' },
      { param: 'Minimum Pressure', val: '10 kN (1,020 kgf)' },
      { param: 'Maximum Sintering Temperature', val: '2,500 deg C (Continuous Working: 2,200 deg C)' },
      { param: 'Sintering DC Pulse Generator', val: '5,000 A to 15,000 A High-Throughput Power Supply' },
      { param: 'Stroke & Open Height', val: 'Stroke: 150 mm | Open Height: 450 mm' },
      { param: 'Chamber Design', val: 'Water-Cooled Stainless Steel with Automated Isolation Porting' },
      { param: 'Automation Subsystem', val: 'Robotic Die Feeder, Inert Pre-Vacuum Lock & Cooling Carousel' }
    ],
    features: ['Fully unattended continuous operation', 'Automated robotic transfer', 'Cycle times under 15 minutes per part']
  },
  {
    filename: 'fuji-sps-automatic-datasheet.pdf',
    title: 'Automatic SPS System for Production Lines',
    subtitle: 'Technical Datasheet & Engineering Specifications',
    docType: 'Engineering Technical Datasheet',
    modelSeries: 'Automatic SPS',
    specs: [
      { param: 'Automation Flow', val: 'Continuous indexing through pre-vacuum, sintering, and cooling stages' },
      { param: 'Hydraulic System', val: '500 kN closed-loop servo-hydraulic press with digital displacement tracking' },
      { param: 'Pulse Current Range', val: '5,000 A to 15,000 A ON/OFF millisecond-order pulsed DC' },
      { param: 'Throughput Capacity', val: 'Capable of continuous 24/7 industrial production with minimal operator touch' },
      { param: 'Atmosphere Options', val: 'High-vacuum, partial inert argon backfill, or protective nitrogen purge' },
      { param: 'Safety Interlocks', val: 'Integrated water-flow, over-temperature, and vacuum fault failsafes' }
    ],
    features: ['Turnkey production automation', 'Robotic die handling', 'Multi-station throughput']
  },

  // 5. Multi Process SPS System (MPSL)
  {
    filename: 'fuji-sps-mpsl-brochure.pdf',
    title: 'Multi Process SPS System (MPSL) with RF Induction Heating',
    subtitle: 'Dual-Energy Hybrid Spark Plasma Sintering & High-Frequency Induction Platform',
    docType: 'Official System Brochure',
    modelSeries: 'MPSL',
    specs: [
      { param: 'Technology', val: 'Hybrid Pulsed DC Joule Sintering + 4.5 kW RF Induction Heating' },
      { param: 'Press Force Range', val: '20 kN to 100 kN (2,040 kgf to 10,200 kgf)' },
      { param: 'Pressure Drive Mechanisms', val: 'AC Servo Motor (212HF, 322HF, 632HF) / Hydraulic Control (625HF)' },
      { param: 'Maximum Sintering Temperature', val: '2,500 deg C (Working Temperature: 2,200 deg C)' },
      { param: 'Radio Frequency Generator', val: '4.5 kW Output at 100 kHz / 200 kHz Dual Frequency' },
      { param: 'DC Pulse Current Output', val: '1,000 A (212HF), 2,000 A (322HF), 3,000 A (632HF), 5,000 A (625HF)' },
      { param: 'Vacuum Chamber', val: 'Vertical Stainless Steel Cylinder (Bore: 200 mm to 450 mm)' },
      { param: 'Hybrid Operating Modes', val: 'Simultaneous Dual-Energy, Sequential DC-then-RF, or Independent RF Heating' }
    ],
    variants: [
      'Model 212HF: 20 kN AC Servo Drive, 1,000 A DC Pulse, 4.5 kW RF Generator, 200 mm Bore',
      'Model 322HF: 30 kN AC Servo Drive, 2,000 A DC Pulse, 4.5 kW RF Generator, 200 mm Bore',
      'Model 632HF: 60 kN AC Servo Drive, 3,000 A DC Pulse, 4.5 kW RF Generator, 200 mm Bore',
      'Model 625HF: 100 kN Hydraulic Drive, 5,000 A DC Pulse, 4.5 kW RF Generator, 450 mm Bore'
    ],
    features: ['Eliminates radial thermal gradients', 'Sinters electrically insulating ceramics', 'Dual 100/200 kHz RF generator']
  },
  {
    filename: 'fuji-sps-mpsl-datasheet.pdf',
    title: 'Multi Process SPS System (MPSL) with RF Induction Heating',
    subtitle: 'Technical Datasheet & Engineering Specifications',
    docType: 'Engineering Technical Datasheet',
    modelSeries: 'MPSL',
    specs: [
      { param: 'Dual Heating Architecture', val: 'Pulsed DC axial current paired with external radio-frequency induction coil' },
      { param: 'RF Generator Rating', val: 'Input: AC 200V, 3-Phase, 50/60 Hz | Output: 4.5 kW | Frequency: 100/200 kHz' },
      { param: 'Mechanical Loading', val: '212HF/322HF/632HF: AC Servo Motor | 625HF: Proportional Hydraulic' },
      { param: 'Press Force by Model', val: '212HF: 20 kN | 322HF: 30 kN | 632HF: 60 kN | 625HF: 100 kN' },
      { param: 'Stroke Lengths', val: '212HF/322HF: 50 mm | 632HF/625HF: 150 mm' },
      { param: 'Open Daylight Height', val: '212HF/322HF/632HF: 200 mm | 625HF: 250 mm' },
      { param: 'Thermal Uniformity', val: 'Drastically reduces delta-T across large dies for crack-free oxide/nitride synthesis' }
    ],
    variants: [
      '212HF: Laboratory hybrid system with micro-load AC servo control',
      '322HF: Mid-force 30 kN hybrid sintering research unit',
      '632HF: High-force 60 kN AC servo hybrid consolidation platform',
      '625HF: 100 kN heavy hydraulic hybrid production furnace'
    ],
    features: ['Hybrid DC + RF induction', 'Dual 100/200 kHz frequencies', 'High-density insulator sintering']
  }
];

const outDir = path.join(process.cwd(), 'public', 'documents', 'fuji-sps');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

console.log(`Generating ${fujiDocs.length} official Fuji SPS PDF documents in ${outDir}...`);
for (const doc of fujiDocs) {
  const filePath = path.join(outDir, doc.filename);
  const buffer = generatePdfBuffer(doc);
  fs.writeFileSync(filePath, buffer);
  console.log(`- Created ${doc.filename} (${buffer.length} bytes)`);
}

console.log('All Fuji SPS PDF documents generated successfully.');
