import { siteConfig } from "@/content/site";

export function createWhatsAppUrl(message: string): string {
  return `https://wa.me/${siteConfig.whatsapp.linkNumber}?text=${encodeURIComponent(message)}`;
}

export function createProductWhatsAppMessage(productName: string): string {
  return `Halo Lely Cake, saya ingin menanyakan produk berikut:\n\nProduk: ${productName}\nJumlah:\nTanggal dibutuhkan:\nArea pengiriman:\n\nMohon informasi ketersediaan dan total harganya. Terima kasih.`;
}

export function createPackageWhatsAppMessage(packageName: string): string {
  return `Halo Lely Cake, saya tertarik dengan ${packageName}.\n\nJumlah peserta:\nTanggal acara:\nArea pengiriman:\nPerkiraan anggaran:\nCatatan:\n\nMohon bantuannya untuk pilihan yang sesuai. Terima kasih.`;
}
