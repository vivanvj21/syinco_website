import test from "node:test";
import assert from "node:assert/strict";
import { ProductSchema } from "../schemas";
import { nxdsProductData } from "../../data/products/nxds";
import { useRfqStore } from "../../hooks/useRfqStore";
import { m3hToLs, lsToM3h, mbarToTorr, mbarToPascal } from "../conversions";

test("Product Schema Validation: Edwards nXDS Series Record", () => {
  const parsed = ProductSchema.parse(nxdsProductData);

  assert.equal(parsed.id, "edwards-nxds-series");
  assert.equal(parsed.archetype, "industrial-component");
  assert.equal(parsed.classification, "subsystem-component");
  assert.equal(parsed.manufacturer.name, "Edwards Vacuum");
  assert.equal(parsed.manufacturer.originCountry, "UK");
  assert.equal(parsed.provenance, "verified");

  // Verify 4 model variants
  assert.ok(parsed.variants && parsed.variants.length === 4);
  assert.equal(parsed.variants[0].modelNumber, "nXDS6i");
  assert.equal(parsed.variants[1].modelNumber, "nXDS10i");
  assert.equal(parsed.variants[2].modelNumber, "nXDS15i");
  assert.equal(parsed.variants[3].modelNumber, "nXDS20i");

  // Verify compatible accessories & part numbers
  assert.ok(parsed.compatibleAccessories && parsed.compatibleAccessories.length === 4);
  assert.equal(parsed.compatibleAccessories[0].partNumber, "A73501801");
  assert.equal(parsed.compatibleAccessories[1].partNumber, "A73601801");
  assert.equal(parsed.compatibleAccessories[2].partNumber, "A50597000");
  assert.equal(parsed.compatibleAccessories[3].partNumber, "A50599000");
});

test("Model Selection & Parameter Mapping", () => {
  const variants = nxdsProductData.variants!;
  const model15i = variants.find((v) => v.modelNumber === "nXDS15i");
  assert.ok(model15i);

  const speedHighlight = model15i.specificationHighlights!.find((h) => h.label === "Pumping Speed");
  assert.equal(speedHighlight?.value, "15.1");
  assert.equal(speedHighlight?.unit, "m³/h");

  const vacuumHighlight = model15i.specificationHighlights!.find((h) => h.label === "Ultimate Vacuum");
  assert.equal(vacuumHighlight?.value, "0.007");
  assert.equal(vacuumHighlight?.unit, "mbar");
});

test("Industrial Component Unit Conversions (Pumping Speed & Vacuum)", () => {
  // nXDS15i: 15.1 m³/h = 4.2 L/s
  assert.equal(m3hToLs(15.1), 4.2);
  assert.equal(lsToM3h(4.2), 15.1);

  // nXDS15i ultimate vacuum: 0.007 mbar = 0.00525 Torr = 0.7 Pa
  assert.equal(mbarToTorr(0.007), 0.00525);
  assert.equal(mbarToPascal(0.007), 0.7);
});

test("RFQ Store: Item Creation & Duplicate Accessory Quantity Increment", () => {
  const store = useRfqStore.getState();

  // Reset store
  store.clearBasket();
  assert.equal(store.items.length, 0);
  assert.equal(store.getTotalCount(), 0);

  // Add first accessory: Tip seal kit (qty 1)
  store.addItem({
    id: "acc-tip-6-10",
    partNumber: "A73501801",
    name: "Genuine Tip Seal Replacement Kit",
    category: "Maintenance Kits",
    stockStatus: "ready-stock",
  }, 1);

  assert.equal(useRfqStore.getState().items.length, 1);
  assert.equal(useRfqStore.getState().items[0].quantity, 1);
  assert.equal(useRfqStore.getState().getTotalCount(), 1);

  // Duplicate add: Add the EXACT same accessory with quantity 2
  store.addItem({
    id: "acc-tip-6-10",
    partNumber: "A73501801",
    name: "Genuine Tip Seal Replacement Kit",
    category: "Maintenance Kits",
    stockStatus: "ready-stock",
  }, 2);

  // Must NOT create a duplicate row; must increment existing item quantity to 1 + 2 = 3
  assert.equal(useRfqStore.getState().items.length, 1);
  assert.equal(useRfqStore.getState().items[0].quantity, 3);
  assert.equal(useRfqStore.getState().getTotalCount(), 3);

  // Add second distinct accessory: Silencer (qty 1)
  store.addItem({
    id: "acc-silencer",
    partNumber: "A50597000",
    name: "NW25 Exhaust Silencer",
    category: "Exhaust Accessories",
    stockStatus: "ready-stock",
  }, 1);

  assert.equal(useRfqStore.getState().items.length, 2);
  assert.equal(useRfqStore.getState().getTotalCount(), 4);

  // Quantity updates
  store.updateQuantity("acc-tip-6-10", 5);
  assert.equal(useRfqStore.getState().items[0].quantity, 5);

  // Removal
  store.removeItem("acc-silencer");
  assert.equal(useRfqStore.getState().items.length, 1);
  assert.equal(useRfqStore.getState().items[0].id, "acc-tip-6-10");

  // Clean basket
  store.clearBasket();
  assert.equal(useRfqStore.getState().items.length, 0);
  assert.equal(useRfqStore.getState().getTotalCount(), 0);
});
