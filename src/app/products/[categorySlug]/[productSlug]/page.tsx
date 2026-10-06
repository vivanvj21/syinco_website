import React, { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductBySlug, getCategoryBySlug, allProducts } from "@/data/products";
import ProductDetailClient from "./_ProductDetailClient";

interface PDPPageProps {
  params: Promise<{
    categorySlug: string;
    productSlug: string;
  }>;
}

export async function generateMetadata({ params }: PDPPageProps): Promise<Metadata> {
  const { categorySlug, productSlug } = await params;
  const product = getProductBySlug(productSlug);
  const category = getCategoryBySlug(categorySlug);

  if (!product || !category) {
    return {
      title: "Product Not Found | SYINCO TECHNOLOGIES",
    };
  }

  const title = `${product.name} | ${product.technologySubcategory || category.name} | SYINCO TECHNOLOGIES India`;
  const description =
    product.shortDescription ||
    `${product.name} by ${product.manufacturer.name}. Supplied by SYINCO TECHNOLOGIES with authorized OEM warranty, INR invoicing, and engineering support across India.`;

  const canonicalUrl = `https://syinco.in/products/${categorySlug}/${productSlug}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "website",
    },
  };
}

export async function generateStaticParams() {
  return allProducts
    .filter((p) => p.categorySlug && p.slug)
    .map((p) => ({
      categorySlug: p.categorySlug,
      productSlug: p.slug,
    }));
}

export default async function ProductDetailPage({ params }: PDPPageProps) {
  const { categorySlug, productSlug } = await params;
  const product = getProductBySlug(productSlug);
  const category = getCategoryBySlug(categorySlug);

  const matchesCategory =
    product &&
    category &&
    (product.categorySlug === category.slug || category.aliases?.includes(product.categorySlug));

  if (!product || !matchesCategory) {
    notFound();
  }

  return (
    <Suspense
      fallback={
        <div className="max-w-container mx-auto px-4 py-12 text-center text-xs font-mono text-ink-muted">
          Loading technical specifications...
        </div>
      }
    >
      <ProductDetailClient params={params} />
    </Suspense>
  );
}