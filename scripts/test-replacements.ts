const testUrls = [
  'https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/high-vacuum-pump-systems/3601-0895-01-nEXT240-300-400-datasheet.pdf',
  'https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/high-vacuum-pump-systems/3601-0624-01-nEXT730-930-1230-datasheet.pdf',
  'https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/high-vacuum-pump-systems/3601-0874-01-nEXT-M-Datasheet.pdf',
  'https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/applications/edwards-liquid-ring-pump-brochure.PDF',
  'https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/applications/edwards-LRP-market-brochure.pdf',
  'https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/rotary-vane-pumps/3602%20013%201%2001_Edwards%20E2M_Brochure_LR_small.pdf',
  'https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/rotary-vane-pumps/3601-0267-01-nRVi-Datasheet.pdf',
  'https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/rotary-vane-pumps/3601-0327-01-nRVi-brochure.pdf',
  'https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/rotary-vane-pumps/3601-0714-01-E2M0.7-2.5-datasheet.pdf',
  'https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/rotary-vane-pumps/e2s-two-stage-rotary-vane-pumps-brochure.pdf',
  'https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/rotary-vane-pumps/3602014101-nES-Series-EN-Web.pdf',
  'https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/applications/3601-0579-01-Analytical-Applications.pdf',
  'https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/valves/3601-0046-01-BGV-Gate-Valve-withLOTO.pdf',
  'https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/valves/3601-0055-01-BGV-stainless-steel-gate-valve.pdf',
  'https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/valves/3601-0565-01-VIV-datasheet.pdf',
  'https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/valves/3601-0584-01-Speedivalve-datasheet.pdf',
  'https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/valves/3601-0824-01-LCPVEK-datasheet.pdf',
  'https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/valves/3601-0986-01-Pressure_relief_valve-Datasheet.pdf',
  'https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/applications/3601-0014-01_R-and-D_brochure_05-24.pdf',
  'https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/hardware/3602211601-Inlet-filter-Datasheet-EN-Web.pdf',
  'https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/hardware/3601-0036-01-Acoustic-Enclosures.pdf',
  'https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/applications/3601-0027-01-HEP-Brochure.pdf',
  'https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/dry-screw-pumps/edwards-GXS-dry-pumps-product-brochure.pdf'
];

async function run() {
  for (const u of testUrls) {
    try {
      const res = await fetch(u, { method: 'HEAD', headers: { 'User-Agent': 'Mozilla/5.0' } });
      console.log(res.status, u.split('/').pop());
    } catch (e: any) {
      console.log('FAIL', u.split('/').pop(), e.message);
    }
  }
}
run();
