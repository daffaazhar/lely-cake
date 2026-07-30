import type { SiteConfig } from "@/types/content";

export const siteConfig: SiteConfig = {
  name: "Lely Cake",
  tagline: "Dibuat Segar, dengan Sepenuh Hati.",
  whatsapp: {
    displayNumber: "0812-1609-1918",
    linkNumber: "6281216091918",
  },
  instagramUrl: "https://www.instagram.com/lelycake_sub",
  googleMapsAddress: "Lely Cake, Jawa Timur 61257",
  address: "Griyo Wage Asri 1 Blok F No. 19 RT 04/RW 02, Kecamatan Taman, Kabupaten Sidoarjo, Jawa Timur 61257",
  businessHours: "Senin - Sabtu, 08:00 - 17:00",
  siteUrl: "",
};

export const primaryWhatsAppMessage =
  "Halo Lely Cake, saya ingin menanyakan informasi pemesanan.\n\nMohon bantuannya. Terima kasih.";

export const contactPageContent = {
  eyebrow: "Hubungi kami",
  title: "Mari berbincang",
  introduction:
    "Kami di Lely Cake siap membantu kebutuhan acara Anda. Ceritakan produk atau paket yang Anda perlukan, lalu kami akan membantu memilihkan pilihan yang sesuai.",
  instagramHandle: "@lelycake_sub",
  operatingHours: [
    { day: "Senin - Sabtu", hours: "08:00 - 17:00" },
    { day: "Minggu & libur nasional", hours: "Tutup*" },
  ],
  operatingHoursNote: "*Kecuali untuk pesanan pre-order yang sudah disepakati sebelumnya.",
  formTitle: "Ceritakan kebutuhan Anda",
  formDescription: "Butuh kue untuk ulang tahun atau paket untuk kerabat? Isi formulir di bawah ini.",
  locationEyebrow: "Lokasi kami",
  locationTitle: "Kunjungi workshop kami",
  locationDescription: "Workshop kami berada di Surabaya, tempat setiap pesanan disiapkan dengan penuh perhatian.",
  deliveryNote: "Pengiriman tersedia dalam slot waktu terbatas setiap harinya untuk menjaga kesegaran produk.",
} as const;
