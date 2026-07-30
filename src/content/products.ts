import type { Product } from "@/types/content";

import { assertFeaturedItemsAvailable, assertUniqueSlugs } from "./validation";

export const productDetailFallbackContent = {
  price: 25000,
  pricePrefix: "[DUMMY]",
  unit: "[DUMMY] box",
  minimumOrder: "[DUMMY] 1 box",
  shelfLife: "[DUMMY] 24 jam pada suhu ruang",
  servingSuggestion: "[DUMMY] Sajikan sesuai kebutuhan acara Anda agar produk tetap nyaman dinikmati.",
  orderNote: "[DUMMY] Tanya stok atau pesan untuk acara khusus",
  galleryThumbnailLabel: "[DUMMY] Foto",
  relatedTitle: "Pilihan favorit lainnya",
  relatedDescription: "Lengkapi momen spesial Anda dengan pilihan camilan lainnya.",
  packageTitle: "[DUMMY] Paket khusus",
  packageDescription: "[DUMMY] Buat pilihan paket sesuai kebutuhan acara Anda.",
} as const;

export const products: Product[] = [
  {
    slug: "tetel-wajik",
    name: "Tetel & Wajik",
    category: "Kue tradisional",
    shortDescription: "Pilihan kue tradisional untuk melengkapi suguhan acara.",
    description: "Tetel dan wajik untuk suguhan keluarga, pertemuan, atau acara Anda.",
    image: "/images/products/tetel-wajik",
    featured: true,
    available: true,
  },
  {
    slug: "kue-marmer-jadoel",
    name: "Kue Marmer Jadoel",
    category: "Cake",
    shortDescription: "Cake dengan motif marmer klasik untuk teman minum teh dan suguhan.",
    description: "Kue marmer dengan motif klasik yang cocok disajikan untuk keluarga maupun acara Anda.",
    image: "/images/products/marble-cake.png",
    featured: true,
    available: true,
  },
  {
    slug: "onde-onde",
    name: "Onde-Onde",
    category: "Kue tradisional",
    shortDescription: "Onde-onde berbalut wijen dengan isian kacang hijau.",
    description:
      "Onde-onde berbalut wijen dengan kulit kenyal dan isian kacang hijau yang lembut. Cocok untuk suguhan keluarga dan berbagai acara.",
    image: "/images/products/onde-onde.png",
    featured: true,
    available: true,
  },
  {
    slug: "kue-tok",
    name: "Kue Tok",
    category: "Kue tradisional",
    shortDescription: "Kue tradisional untuk pilihan suguhan dalam berbagai acara.",
    description: "Kue tok untuk melengkapi pilihan suguhan pada acara keluarga dan pertemuan Anda.",
    image: "/images/products/kue-tok.png",
    available: true,
  },
  {
    slug: "puding-roti-tawar-kukus",
    name: "Puding Roti Tawar Kukus",
    category: "Puding",
    shortDescription: "Puding roti tawar kukus untuk pilihan hidangan manis.",
    description: "Puding roti tawar kukus sebagai pilihan hidangan manis untuk keluarga dan acara Anda.",
    image: "/images/products/Puding Roti Tawar Kukus.png",
    available: true,
  },
  {
    slug: "poetri-mandi",
    name: "Poetri Mandi",
    category: "Kue tradisional",
    shortDescription: "Kue tradisional untuk melengkapi suguhan acara Anda.",
    description: "Poetri Mandi untuk pilihan suguhan pada acara keluarga dan berbagai pertemuan.",
    image: "/images/products/putri-mandi.png",
    featured: true,
    available: true,
  },
];

assertUniqueSlugs(products, "produk");
assertFeaturedItemsAvailable(products, "produk");

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}
