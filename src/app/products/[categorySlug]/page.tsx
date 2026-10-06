import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { activeCatalogueProducts, getCategoryBySlug, allCategories, getProductsByCategory } from "@/data/products";
import { CatalogueDiscoveryEngine } from "@/components/business/CatalogueDiscoveryEngine";
import type { Metadata } from "next";

interface CategoryPageProps {
  params: Promise<{ categorySlug: string }>;
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    return {
      title: "Category Not Found | SYINCO TECHNOLOGIES",
    };
  }

  return {
    title: `${category.name} | SYINCO TECHNOLOGIES India`,
    description: category.description,
  };
}

export async function generateStaticParams() {
  return allCategories.map((c) => ({
    categorySlug: c.slug,
  }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  const categoryProducts = getProductsByCategory(categorySlug);

  return (
    <div className="max-w-container mx-auto px-4 py-6">
      {/* Breadcrumb Trail */}
      <nav aria-label="Breadcrumb" className="mb-3">
        <ol className="flex items-center gap-1.5 text-xs font-mono text-ink-muted">
          <li>
            <Link href="/" className="hover:text-ink-primary transition-colors">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/products" className="hover:text-ink-primary transition-colors">
              Products
            </Link>
          </li>
          <li>/</li>
          <li className="text-ink-primary font-semibold">{category.name}</li>
        </ol>
      </nav>

      {/* Concise Category Header (Immediate Orientation) */}
      <div className="border-b border-border-light pb-4 mb-6">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-brand-teal bg-brand-teal-tint/50 px-2 py-0.5 rounded-xs border border-brand-teal/30">
            {category.domainName}
          </span>
          <span className="font-mono text-[11px] text-ink-muted">
            {categoryProducts.length} Verified Systems
          </span>
        </div>
        <h1 className="text-xl sm:text-2xl font-display font-bold text-ink-primary tracking-tight">
          {category.name}
        </h1>
        <p className="text-xs font-sans text-ink-muted mt-1 max-w-2xl">
          {category.description}
        </p>
      </div>

      {/* Discovery Engine scoped to this category */}
      <CatalogueDiscoveryEngine
        initialProducts={activeCatalogueProducts}
        categorySlug={category.slug}
        categoryTitle={category.name}
        categoryDescription={category.description}
      />
    </div>
  );
}
