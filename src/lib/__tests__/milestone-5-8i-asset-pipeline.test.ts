import test from "node:test";
import assert from "node:assert/strict";
import { allProducts, getProductById, getProductBySlug } from "../../data/products";
import { ProductSchema } from "../schemas";
import type { AssetRole } from "../../types/product";

const edwardsAll = allProducts.filter((p) => p.manufacturer.id === "edwards-vacuum");

test("5.8I.1 — Asset Role Taxonomy: Every Edwards Product Possesses Strict Role Classification", () => {
  assert.equal(edwardsAll.length, 86, "Must evaluate all 86 Edwards product families");

  const validRoles: AssetRole[] = [
    "product-hero",
    "product-secondary",
    "technical-diagram",
    "performance-curve",
    "dimensional-drawing",
    "installation-photo",
    "accessory",
    "logo",
    "decorative",
    "page-artwork",
    "unknown",
  ];

  for (const product of edwardsAll) {
    assert.ok(product.heroImage, `Product ${product.id} must define heroImage`);
    assert.ok(product.heroImage.role, `Product ${product.id} must define heroImage.role`);
    assert.ok(
      validRoles.includes(product.heroImage.role as AssetRole),
      `Product ${product.id} role '${product.heroImage.role}' must be part of AssetRole taxonomy`
    );

    // If product has an active non-placeholder image, role MUST be either product-hero or product-secondary
    if (product.assetStatus !== "placeholder-active") {
      assert.ok(
        product.heroImage.role === "product-hero" || product.heroImage.role === "product-secondary",
        `Product ${product.id} heroImage role must be 'product-hero' or 'product-secondary', got '${product.heroImage.role}'`
      );
    }
  }
});

test("5.8I.2 — Rejection Invariant: Decorative Assets Cannot Become Hero Images", () => {
  for (const product of edwardsAll) {
    assert.notEqual(
      product.heroImage.role,
      "decorative",
      `Product ${product.id} cannot have decorative asset as heroImage`
    );
    assert.notEqual(
      product.heroImage.role,
      "logo",
      `Product ${product.id} cannot have logo asset as heroImage`
    );
  }
});

test("5.8I.3 — Rejection Invariant: Technical Diagrams & Performance Curves Cannot Become Hero Images", () => {
  for (const product of edwardsAll) {
    assert.notEqual(
      product.heroImage.role,
      "performance-curve",
      `Product ${product.id} cannot have performance curve as heroImage`
    );
    assert.notEqual(
      product.heroImage.role,
      "dimensional-drawing",
      `Product ${product.id} cannot have dimensional drawing as heroImage`
    );
    assert.notEqual(
      product.heroImage.role,
      "technical-diagram",
      `Product ${product.id} cannot have technical diagram as heroImage`
    );
    assert.notEqual(
      product.heroImage.role,
      "page-artwork",
      `Product ${product.id} cannot have brochure page artwork as heroImage`
    );
  }
});

test("5.8I.4 — Minimum Confidence Threshold: Selected Heroes Must Have Confidence >= 0.80", () => {
  for (const product of edwardsAll) {
    if (product.assetStatus !== "placeholder-active") {
      assert.ok(
        (product.heroImage.confidenceScore ?? 0) >= 0.80,
        `Selected hero for ${product.id} must have confidence >= 0.80, got ${product.heroImage.confidenceScore}`
      );
      assert.equal(
        product.reviewRequired,
        false,
        `Selected hero for ${product.id} should have reviewRequired: false`
      );
    } else {
      assert.equal(
        product.reviewRequired,
        true,
        `Placeholder product ${product.id} must require review`
      );
    }
  }
});

test("5.8I.5 — Fallback Invariant: Precision Wireframe Placeholder Used When No Hero Meets Threshold", () => {
  const placeholders = edwardsAll.filter((p) => p.assetStatus === "placeholder-active");

  for (const product of placeholders) {
    assert.equal(product.resolutionStatus, "vector-placeholder");
    assert.equal(product.reviewRequired, true);
    assert.ok(
      product.heroImage.url.includes("placeholder"),
      `Placeholder product ${product.id} URL must indicate placeholder: ${product.heroImage.url}`
    );
  }

  // Specifically check RV series has authentic photography
  const rv = getProductById("edwards-rv-series");
  assert.ok(rv, "edwards-rv-series must exist");
  assert.ok(rv.heroImage.url.includes("edwards-rv-series-hero.webp"), "RV series has genuine hero photo");
});

test("5.8I.6 — OEM Provenance: Every Selected Hero Has Source Document ID", () => {
  for (const product of edwardsAll) {
    if (product.assetStatus !== "placeholder-active") {
      assert.ok(
        Boolean(product.heroImage.sourceDocumentId),
        `Product ${product.id} must have sourceDocumentId`
      );
      assert.match(
        product.heroImage.sourceDocumentId as string,
        /^EDW-DOC-\d+$/,
        `Product ${product.id} sourceDocumentId must follow EDW-DOC-XXX format`
      );
    }
  }
});

test("5.8I.7 — Document Traceability: Source Page & Section Recorded for PDF Extractions", () => {
  for (const product of edwardsAll) {
    if (product.assetStatus !== "placeholder-active") {
      assert.ok(
        typeof product.heroImage.sourcePage === "number" && product.heroImage.sourcePage >= 1,
        `Product ${product.id} must have a valid sourcePage number >= 1`
      );
      assert.ok(
        Boolean(product.heroImage.sourceSection),
        `Product ${product.id} must have a sourceSection description`
      );
    }
  }
});

test("5.8I.8 — Commercial Independence: Authorization Status Remains Independent of Asset Quality", () => {
  for (const product of edwardsAll) {
    // authorizationStatus must not automatically become 'authorized' purely from technical photo extraction
    assert.equal(
      product.authorizationStatus,
      "needs-authorization",
      `Product ${product.id} authorizationStatus must remain independent ('needs-authorization')`
    );
  }
});

test("5.8I.9 — Data Integrity: Specifications, Variants, and Key Metrics Remain Unchanged", () => {
  // Verify nXDS data integrity
  const nxds = getProductById("edwards-nxds-series");
  assert.ok(nxds);
  assert.equal(nxds.name, "Edwards nXDS Series Dry Scroll Vacuum Pumps");
  assert.equal(nxds.variants?.length, 4);
  assert.equal(nxds.keyMetricHighlights?.length, 3);
  assert.equal(nxds.keyFeatures.length, 6);

  // Verify CDX data integrity
  const cdx = getProductById("edwards-cdx-series");
  assert.ok(cdx);
  assert.equal(cdx.modelSeries, "CDX");
  assert.equal(cdx.specifications[0].rows.length, 6);
  assert.equal(cdx.variants?.length, 2);

  // Validate entire product schema across all 68 products
  for (const product of edwardsAll) {
    const parseRes = ProductSchema.safeParse(product);
    assert.ok(
      parseRes.success,
      `Product ${product.id} failed ProductSchema validation: ${JSON.stringify(parseRes.error?.issues)}`
    );
  }
});

test("5.8I.10 — Routing Stability: Canonical Slugs & Discovery Navigation Remain Intact", () => {
  const representativeSlugs = [
    "edwards-nxds-series",
    "edwards-cdx-series",
    "edwards-edp-series",
    "edwards-gxs-series",
    "edwards-rv-series",
    "edwards-nxri-series",
    "edwards-eld500",
    "edwards-barocel-7000",
  ];

  for (const slug of representativeSlugs) {
    const p = getProductBySlug(slug);
    assert.ok(p, `Slug '${slug}' must resolve directly`);
    assert.equal(p.slug, slug);
    assert.equal(p.categorySlug, "vacuum-technology");
  }
});
