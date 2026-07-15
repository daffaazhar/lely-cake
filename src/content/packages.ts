import type { Package } from "@/types/content";

import { assertFeaturedItemsAvailable, assertUniqueSlugs } from "./validation";

// TODO: Tambahkan paket setelah isi, foto, dan informasi penjualan dikonfirmasi.
export const packages: Package[] = [];

assertUniqueSlugs(packages, "paket");
assertFeaturedItemsAvailable(packages, "paket");

export function getPackageBySlug(slug: string): Package | undefined {
  return packages.find((packageItem) => packageItem.slug === slug);
}
