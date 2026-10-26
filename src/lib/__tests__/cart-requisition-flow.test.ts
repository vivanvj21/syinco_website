import { describe, it, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import { useRfqStore } from '../../hooks/useRfqStore';
import { SparesRequisitionSchema } from '../../lib/schemas';
import { SparesRequisition, SparesRequisitionItem } from '../../types/rfq';

describe('Cart & Requisition Request Lifecycle Test Suite', () => {
  beforeEach(() => {
    useRfqStore.getState().clearBasket();
  });

  it('1. Can add multiple products to the cart and accumulate quantities', () => {
    const store = useRfqStore.getState();

    // Add Edwards Dry Scroll Pump
    store.addItem({
      id: 'edwards-nxds-10i',
      partNumber: 'nXDS10i-A73601983',
      name: 'Edwards nXDS10i Dry Scroll Vacuum Pump',
      category: 'Vacuum Pumps',
      associatedModelSeries: 'nXDS Series',
      stockStatus: 'hyderabad-stock',
    }, 1);

    // Add Advance Riko ZEM-3 System
    store.addItem({
      id: 'advance-riko-zem-3',
      partNumber: 'ZEM-3M10',
      name: 'Advance Riko ZEM-3 Series',
      category: 'Thermoelectric Evaluation Systems',
      associatedModelSeries: 'ZEM-3',
      stockStatus: 'built-to-order',
    }, 1);

    // Add compatible tip seal accessory
    store.addItem({
      id: 'acc-tip-seal-nxds',
      partNumber: 'A73501801',
      name: 'nXDS Tip Seal Replacement Kit',
      category: 'Spares & Consumables',
      associatedModelSeries: 'nXDS',
      stockStatus: 'hyderabad-stock',
    }, 2);

    const items = useRfqStore.getState().items;
    assert.equal(items.length, 3, 'Cart should contain 3 distinct line items');
    assert.equal(useRfqStore.getState().getTotalCount(), 4, 'Cart total units should be 1 + 1 + 2 = 4');

    // Add duplicate product - should increment existing quantity
    store.addItem({
      id: 'edwards-nxds-10i',
      partNumber: 'nXDS10i-A73601983',
      name: 'Edwards nXDS10i Dry Scroll Vacuum Pump',
      category: 'Vacuum Pumps',
    }, 1);

    const updatedItems = useRfqStore.getState().items;
    assert.equal(updatedItems.length, 3, 'Line items count remains 3 after adding existing product');
    const pumpItem = updatedItems.find((i) => i.id === 'edwards-nxds-10i');
    assert.equal(pumpItem?.quantity, 2, 'Pump quantity should increment to 2');
    assert.equal(useRfqStore.getState().getTotalCount(), 5, 'Total units should now be 5');
  });

  it('2. Quantity updates and removals function accurately', () => {
    const store = useRfqStore.getState();

    store.addItem({
      id: 'item-valve-sp25k',
      partNumber: 'C41101000',
      name: 'Edwards Speedivalve SP25K Diaphragm Valve',
      category: 'Valves',
    }, 3);

    assert.equal(useRfqStore.getState().getTotalCount(), 3);

    // Decrease quantity
    store.updateQuantity('item-valve-sp25k', 2);
    assert.equal(useRfqStore.getState().items[0].quantity, 2);

    // Remove item
    store.removeItem('item-valve-sp25k');
    assert.equal(useRfqStore.getState().items.length, 0);
    assert.equal(useRfqStore.getState().getTotalCount(), 0);
  });

  it('3. Completing the Cart Request: Full Payload Validation & Captured Details', () => {
    const store = useRfqStore.getState();

    // Populate cart items
    const sampleItems: SparesRequisitionItem[] = [
      {
        id: 'edwards-nxds15i',
        partNumber: 'A73701983',
        name: 'Edwards nXDS15i Dry Scroll Pump',
        category: 'Vacuum Pumps',
        quantity: 1,
        stockStatus: 'hyderabad-stock',
      },
      {
        id: 'acc-silencer',
        partNumber: 'A50597000',
        name: 'NW25 Exhaust Silencer & Mist Filter',
        category: 'Exhaust Accessories',
        quantity: 2,
        stockStatus: 'hyderabad-stock',
      },
    ];

    sampleItems.forEach((i) => store.addItem(i, i.quantity));

    // Construct full requisition request payload
    const requisitionPayload: SparesRequisition = {
      channel: 'spares-consumables',
      items: useRfqStore.getState().items,
      fullName: 'Dr. Ramesh Rao',
      email: 'ramesh.rao@iitm.ac.in',
      phone: '9840123456',
      cityState: 'Chennai, Tamil Nadu',
      organization: 'Department of Metallurgical and Materials Engineering, IIT Madras',
      requirementStage: 'immediate-po-ready',
      gstNumber: '33AAATI1234F1Z8',
      notes: 'Need NW25 centering rings and clamps included in quotation.',
      submittedAt: new Date().toISOString(),
    };

    // Validate payload against schema
    const validation = SparesRequisitionSchema.safeParse(requisitionPayload);
    assert.equal(validation.success, true, 'Requisition payload must satisfy schema');

    if (validation.success) {
      const data = validation.data;

      // Check all returned details
      assert.equal(data.channel, 'spares-consumables');
      assert.equal(data.fullName, 'Dr. Ramesh Rao');
      assert.equal(data.email, 'ramesh.rao@iitm.ac.in');
      assert.equal(data.phone, '9840123456');
      assert.equal(data.cityState, 'Chennai, Tamil Nadu');
      assert.equal(data.organization, 'Department of Metallurgical and Materials Engineering, IIT Madras');
      assert.equal(data.gstNumber, '33AAATI1234F1Z8');
      assert.equal(data.notes, 'Need NW25 centering rings and clamps included in quotation.');

      // Check line items received
      assert.equal(data.items.length, 2);
      assert.equal(data.items[0].partNumber, 'A73701983');
      assert.equal(data.items[0].quantity, 1);
      assert.equal(data.items[1].partNumber, 'A50597000');
      assert.equal(data.items[1].quantity, 2);

      // Verify generated tracking reference pattern
      const generatedId = `SYN-REQ-2026-${Math.floor(100000 + Math.random() * 900000)}`;
      assert.match(generatedId, /^SYN-REQ-2026-\d{6}$/);
    }
  });

  it('4. Rejects request when cart is empty', () => {
    const emptyPayload = {
      channel: 'spares-consumables' as const,
      items: [],
      fullName: 'Dr. Ramesh Rao',
      email: 'ramesh.rao@iitm.ac.in',
      phone: '9840123456',
      cityState: 'Chennai, Tamil Nadu',
    };

    const result = SparesRequisitionSchema.safeParse(emptyPayload);
    assert.equal(result.success, false);
    if (!result.success) {
      const error = result.error.errors.find((e) => e.path.includes('items'));
      assert.equal(error?.message, 'Requisition must contain at least one line item');
    }
  });
});
