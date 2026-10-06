import { allProducts } from "../src/data/products";
import fs from "fs";

const items = [
  "advance-riko-zem-3",
  "edwards-cdx-series",
  "edwards-next-tic-cart-xl",
  "edwards-stokes-mechanical-booster",
  "edwards-rv-series",
  "edwards-small-em-series",
  "edwards-eld30",
  "edwards-gascheck-g4",
  "edwards-barocel-7000",
  "edwards-asg2",
  "edwards-apgx-h",
  "edwards-aim200",
  "edwards-apg200",
  "edwards-wrg200",
  "edwards-tic-controller",
  "edwards-adc",
  "edwards-tag",
  "edwards-lcpvek",
  "edwards-speedivalve",
  "edwards-viv",
  "edwards-large-e2m-series",
  "edwards-erv-series",
  "edwards-ix-series",
  "edwards-ganymede-series",
  "edwards-stp-maglev-series",
  "edwards-abatement-series",
  "edwards-onboard-cryo-series",
  "edwards-maxcool-cryochiller-series",
  "edwards-vacuum-flanges-fittings",
  "edwards-angle-valves-series",
  "edwards-inline-valves-series",
  "edwards-special-valves-series"
];

for (const id of items) {
  const p = allProducts.find(x => x.id === id || x.slug === id);
  if (!p) {
    // Try search by name
    const match = allProducts.find(x => x.name.toLowerCase().includes(id.replace("edwards-", "").replace(/-/g, " ")));
    if (match) {
      console.log(`Matched "${id}" to: ${match.id} (${match.name})`);
    } else {
      console.log(`NOT FOUND: ${id}`);
    }
    continue;
  }
  console.log(`----------------------------------------`);
  console.log(`ID: ${p.id}`);
  console.log(`Name: ${p.name}`);
  console.log(`heroImage.url: ${p.heroImage?.url}`);
  console.log(`heroImage.role: ${p.heroImage?.role}`);
  console.log(`assetStatus: ${p.assetStatus}`);
  console.log(`variants: ${p.variants?.map(v => v.modelNumber).join(", ")}`);
}
