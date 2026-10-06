export interface Principal {
  id: string;
  name: string;
  shortName: string;
  country: string;
  flag: string;
  role: string;
  specialty: string;
  filterVendorId: string;
  representativeProducts: {
    name: string;
    model: string;
    href: string;
  }[];
}

export const principals: Principal[] = [
  {
    id: "advance-riko",
    name: "Advance Riko, Inc.",
    shortName: "Advance Riko",
    country: "Japan",
    flag: "🇯🇵",
    role: "Authorized Indian Channel Partner",
    specialty: "Thermoelectric Evaluation, Thermal Analysis & Infrared Gold Image Furnaces",
    filterVendorId: "advance-riko",
    representativeProducts: [
      {
        name: "ZEM-3 Series",
        model: "Seebeck & Resistivity Measurement",
        href: "/products/thermoelectric-energy/advance-riko-zem-3",
      },
      {
        name: "TCN-2ω",
        model: "Nano Thin Film Thermal Conductivity",
        href: "/products/thermal-properties/advance-riko-tcn-2omega",
      },
      {
        name: "RHL-E Series",
        model: "Infrared Gold Image Heating Furnace",
        href: "/products/high-temp-processing/advance-riko-rhl-e-vht-p-series",
      },
    ],
  },
  {
    id: "edwards-vacuum",
    name: "Edwards Vacuum",
    shortName: "Edwards Vacuum",
    country: "United Kingdom",
    flag: "🇬🇧",
    role: "Authorized Indian Channel Partner",
    specialty: "Oil-Free Dry Scroll Vacuum Pumps & Turbomolecular Pumping Stations",
    filterVendorId: "edwards-vacuum",
    representativeProducts: [
      {
        name: "nXDS Series",
        model: "Clean Dry Scroll Vacuum Pumps",
        href: "/products/vacuum-technology/edwards-nxds-series",
      },
      {
        name: "T-Station 300",
        model: "Turbomolecular Pumping Stations",
        href: "/products/vacuum-technology/edwards-t-station-300",
      },
      {
        name: "CDX Series",
        model: "Chemical Dry Screw Vacuum Pumps",
        href: "/products/vacuum-technology/edwards-cdx-series",
      },
    ],
  },
  {
    id: "fuji-sps",
    name: "Fuji Electronic Industrial Co., Ltd.",
    shortName: "Fuji-SPS",
    country: "Japan",
    flag: "🇯🇵",
    role: "Accredited Equipment Partner",
    specialty: "Spark Plasma Sintering (SPS) & Rapid Field-Assisted Consolidation",
    filterVendorId: "fuji-electronic",
    representativeProducts: [
      {
        name: "DR. SINTER LAB Jr.",
        model: "R&D Desktop Spark Plasma Sintering",
        href: "/products/high-temp-furnaces/fuji-sps-dr-sinter-lab-jr",
      },
      {
        name: "SPS-25 Series",
        model: "Pilot & Industrial SPS System",
        href: "/products/high-temp-furnaces/fuji-sps-25-series",
      },
    ],
  },
];

