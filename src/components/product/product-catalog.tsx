"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";

import { ProductGrid } from "@/components/product/product-grid";
import type { Product } from "@/types/content";

type ProductCatalogProps = {
  products: Product[];
};

const allCategoriesLabel = "Semua produk";

export function ProductCatalog({ products }: ProductCatalogProps) {
  const [activeCategory, setActiveCategory] = useState(allCategoriesLabel);
  const [searchQuery, setSearchQuery] = useState("");
  const categories = [allCategoriesLabel, ...new Set(products.map((product) => product.category))];
  const normalizedQuery = searchQuery.trim().toLocaleLowerCase("id-ID");
  const filteredProducts = useMemo(
    () =>
      products.filter((product) => {
        const matchesCategory = activeCategory === allCategoriesLabel || product.category === activeCategory;
        const matchesSearch =
          !normalizedQuery ||
          [product.name, product.category, product.shortDescription].some((value) =>
            value.toLocaleLowerCase("id-ID").includes(normalizedQuery),
          );

        return matchesCategory && matchesSearch;
      }),
    [activeCategory, normalizedQuery, products],
  );

  return (
    <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,0.27fr)_minmax(0,0.73fr)] lg:gap-12">
      <aside className="lg:pr-2">
        <div className="lg:sticky lg:top-28">
          <div className="rounded-(--radius-md) bg-[color:rgb(75_46_26_/_0.05)] p-5">
            <label className="eyebrow block" htmlFor="product-search">
              Cari produk
            </label>
            <div className="relative mt-3">
              <Search
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-(--color-text-secondary)"
              />
              <input
                className="min-h-12 w-full rounded-(--radius-sm) border border-(--color-border-soft) bg-(--color-surface-white) py-3 pr-4 pl-12 text-base text-(--color-text-primary) transition outline-none focus:border-(--color-brand-gold) focus:ring-2 focus:ring-[color:rgb(123_88_11_/_0.22)]"
                id="product-search"
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Cari nama kue..."
                type="search"
                value={searchQuery}
              />
            </div>
          </div>

          <div className="mt-8 hidden lg:block">
            <p className="eyebrow">Kategori</p>
            <div className="mt-4 space-y-2" role="group" aria-label="Kategori produk">
              {categories.map((category) => {
                const isActive = category === activeCategory;

                return (
                  <button
                    aria-pressed={isActive}
                    className={`min-h-11 w-full rounded-(--radius-sm) px-4 py-2 text-left text-sm font-bold transition ${isActive ? "bg-[color:rgb(123_88_11_/_0.18)] text-(--color-brand-brown)" : "text-(--color-text-secondary) hover:bg-[color:rgb(75_46_26_/_0.05)] hover:text-(--color-brand-brown)"}`}
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    type="button"
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </aside>

      <div>
        <div className="-mx-6 flex gap-3 overflow-x-auto px-6 pb-2 lg:hidden" role="group" aria-label="Kategori produk">
          {categories.map((category) => {
            const isActive = category === activeCategory;

            return (
              <button
                aria-pressed={isActive}
                className={`min-h-11 shrink-0 rounded-full px-4 py-2 text-sm font-bold transition ${isActive ? "bg-(--color-brand-brown) text-(--color-surface-white)" : "bg-[color:rgb(75_46_26_/_0.08)] text-(--color-text-secondary)"}`}
                key={category}
                onClick={() => setActiveCategory(category)}
                type="button"
              >
                {category}
              </button>
            );
          })}
        </div>
        <div className="mt-6 lg:mt-0">
          <ProductGrid
            emptyDescription="Coba gunakan kata kunci atau kategori lain untuk melihat produk yang tersedia."
            emptyTitle="Produk tidak ditemukan"
            products={filteredProducts}
          />
        </div>
      </div>
    </div>
  );
}
