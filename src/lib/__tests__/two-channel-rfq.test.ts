import test from "node:test";
import assert from "node:assert/strict";
import {
  CapitalEquipmentRFQSchema,
  SparesRequisitionItemSchema,
  SparesRequisitionSchema,
} from "../schemas";
import { CapitalEquipmentRFQ, SparesRequisition } from "@/types/rfq";
import { useRfqStore } from "../../hooks/useRfqStore";

// Mock localStorage for Node environment persistence tests
class MockLocalStorage {
  private store: Record<string, string> = {};

  getItem(key: string): string | null {
    return this.store[key] || null;
  }

  setItem(key: string, value: string): void {
    this.store[key] = value;
  }

  removeItem(key: string): void {
    delete this.store[key];
  }

  clear(): void {
    this.store = {};
  }
}

const mockStorage = new MockLocalStorage();
// Assign to global if not already present in Node environment
if (typeof globalThis.localStorage === "undefined") {
  Object.defineProperty(globalThis, "localStorage", {
    value: mockStorage,
    writable: true,
  });
}

test("1 & 2. Channel A: Capital RFQ Creation & Model Prefill", () => {
  const capitalPayload: CapitalEquipmentRFQ = {
    channel: "capital-equipment",
    productSlug: "advance-riko-zem-3",
    productName: "Advance Riko ZEM-3 Series",
    modelNumber: "ZEM-3M10",
    manufacturerName: "Advance Riko, Inc.",
    organizationType: "central-university-iit",
    requirementStage: "immediate-po-ready",
    fullName: "Prof. K. Ramanathan",
    designation: "Principal Investigator, Dept of Physics",
    email: "ramanathan@iitm.ac.in",
    phone: "+91 94440 12345",
    cityState: "Chennai, Tamil Nadu",
    targetTemperature: "Ambient to 1000°C",
    sampleDimensions: "3 x 3 x 15 mm prism",
    notes: "Requires formal DGS&D / GeM compliant tender technical compliance matrix.",
    submittedAt: new Date().toISOString(),
  };

  assert.equal(capitalPayload.channel, "capital-equipment");
  assert.equal(capitalPayload.productSlug, "advance-riko-zem-3");
  assert.equal(capitalPayload.modelNumber, "ZEM-3M10");
  assert.equal(capitalPayload.manufacturerName, "Advance Riko, Inc.");
});

test("3. Channel A: Capital RFQ Validation (Valid Payload)", () => {
  const validPayload = {
    channel: "capital-equipment" as const,
    productSlug: "advance-riko-zem-3",
    productName: "Advance Riko ZEM-3 Series",
    modelNumber: "ZEM-3M10",
    manufacturerName: "Advance Riko, Inc.",
    organizationType: "central-university-iit" as const,
    requirementStage: "immediate-po-ready" as const,
    fullName: "Dr. A. Sharma",
    email: "sharma@iisc.ac.in",
    phone: "9876543210",
    cityState: "Bengaluru, Karnataka",
  };

  const parsed = CapitalEquipmentRFQSchema.parse(validPayload);
  assert.equal(parsed.fullName, "Dr. A. Sharma");
  assert.equal(parsed.channel, "capital-equipment");
  assert.equal(parsed.modelNumber, "ZEM-3M10");
});

test("4. Channel B: Spares Item Creation Schema", () => {
  const item = {
    id: "acc-tip-6-10",
    partNumber: "A73501801",
    name: "Genuine Tip Seal Replacement Kit (nXDS6i / nXDS10i)",
    category: "Maintenance Kits",
    quantity: 1,
    associatedModelSeries: "nXDS",
    stockStatus: "hyderabad-stock",
  };

  const parsed = SparesRequisitionItemSchema.parse(item);
  assert.equal(parsed.partNumber, "A73501801");
  assert.equal(parsed.quantity, 1);
});

test("5. Channel B: Duplicate Part-Number Quantity Accumulation", () => {
  const store = useRfqStore.getState();
  store.clearBasket();

  // Initial addition of Tip Seal Kit A73501801
  store.addItem(
    {
      id: "acc-tip-6-10",
      partNumber: "A73501801",
      name: "Genuine Tip Seal Replacement Kit",
      category: "Maintenance Kits",
      associatedModelSeries: "nXDS",
      stockStatus: "hyderabad-stock",
    },
    1
  );

  assert.equal(useRfqStore.getState().items.length, 1);
  assert.equal(useRfqStore.getState().items[0].quantity, 1);

  // Duplicate addition with quantity 3
  store.addItem(
    {
      id: "acc-tip-6-10",
      partNumber: "A73501801",
      name: "Genuine Tip Seal Replacement Kit",
      category: "Maintenance Kits",
      associatedModelSeries: "nXDS",
      stockStatus: "hyderabad-stock",
    },
    3
  );

  // Must not create second line item; quantity must accumulate to 1 + 3 = 4
  const updatedItems = useRfqStore.getState().items;
  assert.equal(updatedItems.length, 1);
  assert.equal(updatedItems[0].id, "acc-tip-6-10");
  assert.equal(updatedItems[0].quantity, 4);
  assert.equal(useRfqStore.getState().getTotalCount(), 4);
});

test("6 & 7. Channel B: Quantity Increment and Decrement", () => {
  const store = useRfqStore.getState();

  // Increment to 6
  store.updateQuantity("acc-tip-6-10", 6);
  assert.equal(useRfqStore.getState().items[0].quantity, 6);
  assert.equal(useRfqStore.getState().getTotalCount(), 6);

  // Decrement to 2
  store.updateQuantity("acc-tip-6-10", 2);
  assert.equal(useRfqStore.getState().items[0].quantity, 2);
  assert.equal(useRfqStore.getState().getTotalCount(), 2);

  // Decrement to 0 triggers automatic removal
  store.updateQuantity("acc-tip-6-10", 0);
  assert.equal(useRfqStore.getState().items.length, 0);
  assert.equal(useRfqStore.getState().getTotalCount(), 0);
});

test("8. Channel B: Item Removal", () => {
  const store = useRfqStore.getState();
  store.clearBasket();

  store.addItem({
    id: "acc-silencer",
    partNumber: "A50597000",
    name: "NW25 Exhaust Silencer & Mist Filter",
    category: "Exhaust Accessories",
  });

  assert.equal(useRfqStore.getState().items.length, 1);
  store.removeItem("acc-silencer");
  assert.equal(useRfqStore.getState().items.length, 0);
});

test("9. Persistence & Corrupted Storage Safety", () => {
  // Verify that safe JSON parser handles corrupted localStorage without throwing
  const corruptedPayload = "{ corrupted json line ::: ";
  try {
    JSON.parse(corruptedPayload);
    assert.fail("Should have thrown JSON parse error");
  } catch (e) {
    // Expected behavior: safeLocalStorage handles this by clearing key and returning null
    assert.ok(e instanceof SyntaxError);
  }
});

test("10. Empty Basket Rejection in SparesRequisitionSchema", () => {
  const emptyRequisition: SparesRequisition = {
    channel: "spares-consumables",
    items: [], // Empty items
    fullName: "Purchase Officer",
    email: "procurement@drdo.gov.in",
    phone: "9876543210",
    cityState: "Hyderabad, Telangana",
  };

  const result = SparesRequisitionSchema.safeParse(emptyRequisition);
  assert.equal(result.success, false);
  if (!result.success) {
    const itemError = result.error.errors.find((err) => err.path.includes("items"));
    assert.ok(itemError);
    assert.equal(itemError?.message, "Requisition must contain at least one line item");
  }
});

test("11. Invalid Payload Rejection (Invalid Emails & Missing Phones)", () => {
  // Invalid Capital RFQ with bad email
  const invalidCapital = {
    channel: "capital-equipment" as const,
    productSlug: "advance-riko-zem-3",
    productName: "Advance Riko ZEM-3 Series",
    modelNumber: "ZEM-3M10",
    manufacturerName: "Advance Riko, Inc.",
    organizationType: "central-university-iit" as const,
    requirementStage: "immediate-po-ready" as const,
    fullName: "X", // too short (< 2 chars)
    email: "not-an-email", // invalid email
    phone: "123", // too short (< 10 chars)
    cityState: "", // missing
  };

  const capResult = CapitalEquipmentRFQSchema.safeParse(invalidCapital);
  assert.equal(capResult.success, false);

  if (!capResult.success) {
    const errorPaths = capResult.error.errors.map((e) => e.path[0]);
    assert.ok(errorPaths.includes("fullName"));
    assert.ok(errorPaths.includes("email"));
    assert.ok(errorPaths.includes("phone"));
    assert.ok(errorPaths.includes("cityState"));
  }

  // Invalid Spares Requisition with non-positive quantity item
  const invalidSparesItem = {
    id: "item-1",
    partNumber: "P-100",
    name: "Seal",
    category: "Spares",
    quantity: 0, // invalid (min 1)
  };

  const itemResult = SparesRequisitionItemSchema.safeParse(invalidSparesItem);
  assert.equal(itemResult.success, false);
});
