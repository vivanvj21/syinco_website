import { Product } from "@/types/product";

/**
 * SYINCO TECHNOLOGIES — Product Display Presentation Layer
 * 
 * Implements strict Level 1 Discovery taxonomy:
 * 1. Product Photo
 * 2. Principal / Manufacturer (Uppercase: EDWARDS VACUUM, ADVANCE RIKO, FUJI-SPS)
 * 3. Product Name (e.g. nXDS Series, ZEM-3, Dr. Sinter Lab Jr.)
 * 4. Equipment Type (Concrete physical machine type, e.g. Dry Scroll Vacuum Pump, Thermoelectric Evaluation System)
 * 5. One Short Description (1 concise sentence explaining what it does)
 * 6. Learn More ->
 */

/**
 * Returns clean uppercase manufacturer name.
 */
export function getProductPrincipal(product: Product): string {
  const mfrId = product.manufacturer.id;
  if (mfrId === "edwards-vacuum") return "EDWARDS VACUUM";
  if (mfrId === "advance-riko") return "ADVANCE RIKO";
  if (mfrId === "fuji-sps" || mfrId === "fuji-electronic") return "FUJI-SPS";

  const name = product.manufacturer.name.toUpperCase();
  if (name.includes("EDWARDS")) return "EDWARDS VACUUM";
  if (name.includes("ADVANCE RIKO")) return "ADVANCE RIKO";
  if (name.includes("FUJI")) return "FUJI-SPS";
  return name;
}

/**
 * Clean canonical display name for discovery cards.
 */
export function getDisplayProductName(product: Product): string {
  const id = product.id;

  // Specific canonical highlights
  if (id === "advance-riko-zem-3") return "ZEM-3";
  if (id === "advance-riko-mini-pem") return "Mini-PEM";
  if (id === "advance-riko-vhc-series") return "VHC Series";
  if (id === "edwards-nxds-series") return "nXDS Series";
  if (id === "edwards-eld30") return "ELD30 Leak Detector";
  if (id === "edwards-eld500") return "ELD500 Leak Detector";
  if (id === "edwards-next-maglev-series") return "nEXT M Maglev Turbos";
  if (id === "edwards-nxri-series") return "nXRi Multistage Roots";
  if (id === "fuji-sps-dr-sinter-lab-jr-ms1") return "DR. SINTER LAB Jr. MS-1";
  if (id === "fuji-sps-dr-sinter-lab-jr") return "Dr. Sinter Lab Jr.";
  if (id === "fuji-sps-25-series") return "25 Series";
  if (id === "fuji-sps-standard-research-production") return "Standard Research & Production SPS";
  if (id === "fuji-sps-automatic") return "Automatic SPS System";
  if (id === "fuji-sps-mpsl") return "Multi-Process SPS (MPSL)";

  let name = product.name;

  // Strip redundant leading OEM name if present
  if (name.startsWith("Edwards ")) {
    name = name.replace(/^Edwards\s+/, "");
  }

  // If name has a clean "XYZ Series" pattern at the start, extract it for punchiness
  const seriesMatch = name.match(/^([A-Za-z0-9\-\/]+(?:\s+[A-Za-z0-9\-\/]+)?\s+Series)\b/i);
  if (seriesMatch && seriesMatch[1] && product.manufacturer.id === "edwards-vacuum") {
    // If the remainder is just the subcategory name, return the series name
    return seriesMatch[1];
  }

  return name;
}

/**
 * Returns concrete physical equipment / machine type.
 * Tells the visitor clearly: "What physical equipment is this?"
 */
export function getProductType(product: Product): string {
  const id = product.id;
  const mfrId = product.manufacturer.id;

  // 1. Fuji SPS Systems
  if (mfrId === "fuji-sps" || mfrId === "fuji-electronic") {
    if (id === "fuji-sps-dr-sinter-lab-jr") {
      return "Desktop Spark Plasma Sintering System";
    }
    return "Spark Plasma Sintering System";
  }

  // 2. Advance Riko Specific Systems
  if (mfrId === "advance-riko") {
    if (id === "advance-riko-zem-3" || id === "advance-riko-zem-d") {
      return "Thermoelectric Evaluation System";
    }
    if (id.includes("pem-") || id.includes("mini-pem")) {
      return "Thermoelectric Evaluation System";
    }
    if (id === "advance-riko-superlix" || id.includes("lix")) {
      return "Laser Dilatometer";
    }
    if (id.includes("dl-9000") || id.includes("dly-9000")) {
      return "Thermal Dilatometer";
    }
    if (id.includes("tcn-2omega") || id.includes("gh-1") || id.includes("tc-1200rh")) {
      return "Thermal Conductivity Measurement System";
    }
    if (id.includes("td-1") || id.includes("laserpit") || id.includes("ftc")) {
      return "Thermal Diffusivity Measurement System";
    }
    if (id.includes("f-cal")) {
      return "Thermal Flow Rate Evaluation System";
    }
    if (id.includes("stpm-1000")) {
      return "Scanning Thermal Probe Micro-Imaging System";
    }
    if (id.includes("rhl-e") || id.includes("pspss") || id.includes("miro")) {
      return "Infrared Gold Image Furnace";
    }
    if (
      id.includes("rta") ||
      id.includes("rtp") ||
      id.includes("mila") ||
      id.includes("ht-rta")
    ) {
      return "Rapid Thermal Processing System";
    }
    if (
      id.includes("cas") ||
      id.includes("ssa") ||
      id.includes("qhc") ||
      id.includes("netsushori")
    ) {
      return "High-Temperature Furnace";
    }
    if (id.includes("tm-9000")) {
      return "Thermomechanical Analyzer";
    }
    if (id.includes("dsc-r")) {
      return "Differential Scanning Calorimeter";
    }
    if (
      id.includes("tgd-9000") ||
      id.includes("sh-3000") ||
      id.includes("vpe-9000") ||
      id.includes("trs")
    ) {
      return "Thermal Analysis System";
    }
    if (id.includes("tds-m202r")) {
      return "Thermal Desorption Gas Analyzer";
    }
    if (id.includes("antares")) {
      return "Microbial Activity Measurement System";
    }
    if (id.includes("tms")) {
      return "High Temperature Observation System";
    }
    if (id.includes("wet-1200")) {
      return "High Temperature Wettability Evaluation System";
    }
    if (id.includes("ehr") || id.includes("ter")) {
      return "Electric Resistance Measurement System";
    }
    if (id.includes("microit")) {
      return "Micro-Indentation Tester";
    }
    if (id.includes("aps-1")) {
      return "Arc Plasma Source";
    }
    if (id.includes("apd")) {
      return "Nanoparticle Deposition System";
    }
    if (id.includes("tpc-5000")) {
      return "Programmable Temperature Controller";
    }
    if (id.includes("hs-9000") || id.includes("ha-1h")) {
      return "Precision Welding System";
    }

    // Advance Riko domain fallbacks
    switch (product.domain) {
      case "thermoelectric-energy":
        return "Thermoelectric Evaluation System";
      case "thermal-properties":
        return "Thermal Conductivity Measurement System";
      case "high-temp-furnaces":
        return "High-Temperature Furnace";
      case "high-temp-processing":
        return "Rapid Thermal Processing System";
      case "thermal-expansion":
        return "Laser Dilatometer";
      case "thermal-analysis":
        return "Thermal Analysis System";
      case "semiconductor-thin-film":
        return "Rapid Thermal Processing System";
      case "materials-characterization":
        return "Materials Characterization System";
      default:
        return "High-Temperature System";
    }
  }

  // 3. Edwards Vacuum Systems & Subcategories
  const subcat = product.technologySubcategory;
  if (subcat) {
    if (subcat === "Dry Scroll Vacuum Pumps" || subcat === "Miniature Dry Scroll Pumps" || subcat === "Industrial Dry Scroll Pumps") {
      return "Dry Scroll Vacuum Pump";
    }
    if (subcat === "Chemical Dry Screw Pumps") {
      return "Chemical Dry Vacuum Pump";
    }
    if (subcat === "Chemical Dry Claw Pumps" || subcat === "Industrial Dry Claw Pumps") {
      return "Chemical Dry Claw Pump";
    }
    if (subcat === "Laboratory Diaphragm Pumps" || subcat === "Chemical Diaphragm Pumps") {
      return "Diaphragm Vacuum Pump";
    }
    if (
      subcat === "Oil-Sealed Rotary Vane Pumps" ||
      subcat === "Single-Stage Rotary Vane Pumps" ||
      subcat === "Compact Rotary Vane Pumps" ||
      subcat === "Laboratory Rotary Vane Pumps" ||
      subcat === "Industrial Rotary Vane Pumps"
    ) {
      return "Rotary Vane Vacuum Pump";
    }
    if (subcat === "Turbomolecular Pumping Stations" || subcat === "Mobile High Vacuum Stations") {
      return "Turbomolecular Pumping Station";
    }
    if (subcat === "Turbomolecular Vacuum Pumps" || subcat === "Maglev Turbomolecular Pumps") {
      return "Turbomolecular Vacuum Pump";
    }
    if (subcat.includes("Leak Detector")) {
      return "Helium Leak Detector";
    }
    if (subcat.includes("Gauge") || subcat.includes("Manometer")) {
      return "Vacuum Gauge";
    }
    if (subcat.includes("Valve")) {
      return "Vacuum Valve";
    }
    if (subcat.includes("Controller")) {
      return "Vacuum Controller";
    }
    if (subcat === "Industrial Dry Screw Pumps" || subcat === "Heavy Duty Dry Screw Pumps" || subcat === "Intelligent Dry Screw Pumps") {
      return "Industrial Dry Screw Pump";
    }
    if (subcat.includes("Roots Pumps") || subcat.includes("Roots Vacuum Boosters")) {
      return "Roots Vacuum Pump";
    }

    // Clean singularize generic plurals
    if (subcat.endsWith(" Pumps")) return subcat.slice(0, -1);
    if (subcat.endsWith(" Systems")) return subcat.slice(0, -1);
    if (subcat.endsWith(" Stations")) return subcat.slice(0, -1);
    if (subcat.endsWith(" Valves")) return subcat.slice(0, -1);
    if (subcat.endsWith(" Detectors")) return subcat.slice(0, -1);
    if (subcat.endsWith(" Gauges")) return subcat.slice(0, -1);
    return subcat;
  }

  return "Industrial Vacuum Equipment";
}

/**
 * Extracts ONE concise sentence describing what the machine physically/scientifically does.
 * Follows strict prompt rule: 1 short sentence, no buzzwords, no technical clutter.
 */
export function getShortDescription(product: Product): string {
  // Flagship canonical 1-sentence descriptions matching prompt standards
  if (product.id === "advance-riko-zem-3") {
    return "System for measuring thermoelectric material properties across controlled temperatures.";
  }
  if (product.id === "edwards-nxds-series") {
    return "Oil-free dry scroll vacuum pumping for clean laboratory and industrial applications.";
  }
  if (product.id === "fuji-sps-dr-sinter-lab-jr") {
    return "Compact SPS equipment for laboratory-scale materials processing and research.";
  }

  // Extract from shortDescription or tagline
  const raw = (product.shortDescription || product.tagline || "").trim();
  if (!raw) return "";

  // Extract up to the first period + space or end
  const firstSentenceMatch = raw.match(/^([^.?!]+[.?!])/);
  if (firstSentenceMatch && firstSentenceMatch[1]) {
    const s = firstSentenceMatch[1].trim();
    if (s.length <= 130) {
      return s;
    }
  }

  // If long, take up to 110 characters at word boundary and add period
  if (raw.length > 120) {
    const truncated = raw.slice(0, 115).replace(/\s+\S*$/, "");
    return truncated.endsWith(".") ? truncated : `${truncated}.`;
  }

  return raw.endsWith(".") ? raw : `${raw}.`;
}
