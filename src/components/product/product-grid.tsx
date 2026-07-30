import { EmptyState } from "@/components/ui/empty-state";
import type { Product } from "@/types/content";

import { ProductCard } from "./product-card";

type ProductGridProps = {
  products: Product[];
  emptyTitle?: string;
  emptyDescription?: string;
};

export function ProductGrid({
  emptyDescription,
  emptyTitle = "Belum ada produk untuk ditampilkan",
  products,
}: ProductGridProps) {
  if (products.length === 0) {
    return <EmptyState description={emptyDescription} title={emptyTitle} />;
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
}
