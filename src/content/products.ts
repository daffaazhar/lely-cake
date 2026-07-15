import type { Product } from "@/types/content";

import { assertFeaturedItemsAvailable, assertUniqueSlugs } from "./validation";

// TODO: Tambahkan produk setelah nama, deskripsi, foto, dan informasi penjualan dikonfirmasi.
export const products: Product[] = [];

assertUniqueSlugs(products, "produk");
assertFeaturedItemsAvailable(products, "produk");

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}
