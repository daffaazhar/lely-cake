# AGENTS.md — Website Lely Cake

Panduan kerja untuk developer dan AI coding agent. Tujuannya menjaga pengembangan tetap fokus, hemat token, dan sesuai tujuan bisnis.

## 1. Urutan acuan

1. Permintaan terbaru pengguna
2. `AGENTS.md`
3. `DESIGN.md`
4. `WRITING_STYLE.md`
5. Pola yang sudah ada di repositori

Baca hanya bagian dokumen yang relevan dengan tugas.

## 2. Tujuan produk

Website Lely Cake adalah **katalog penjualan lokal**, bukan marketplace.

Tujuan utama:

> Membantu pengunjung menemukan produk atau paket, lalu memesan melalui WhatsApp dengan cepat.

Target:

- usia 25–60 tahun;
- Surabaya, Sidoarjo, Gresik, dan Mojokerto;
- trafik utama dari ponsel, Meta Ads, Google, Instagram, dan Google Business Profile.

Karakter merek:

> **Elegan · Simpel · Hangat · Terpercaya**

Gunakan Bahasa Indonesia penuh. Tagline Inggris hanya boleh tampil sebagai bagian dari logo. Pada isi teks gunakan **“Dibuat Segar, dengan Sepenuh Hati.”**

## 3. Prioritas keberhasilan

Urutan prioritas:

1. Informasi produk mudah dipahami.
2. Harga mulai, minimal pemesanan, dan area layanan jelas.
3. Tombol WhatsApp mudah ditemukan.
4. Pesan WhatsApp membawa konteks produk atau paket.
5. Halaman cepat, responsif, dan mudah dibaca.
6. Klik WhatsApp dapat diukur sebagai konversi.

Optimalkan kejelasan dan konversi, bukan jumlah fitur.

## 4. Ruang lingkup v1

### Halaman

- Beranda
- Produk
- Detail produk
- Paket
- Tentang Kami
- Testimoni
- Tanya Jawab
- Kontak
- Area layanan
- Kebijakan Privasi
- Syarat Pemesanan
- 404

### Fungsi

- navigasi responsif;
- katalog dan kategori;
- detail produk dan paket;
- tombol WhatsApp dengan pesan otomatis;
- metadata SEO, sitemap, robots, dan Open Graph;
- pelacakan klik WhatsApp;
- desain mobile-first.

Pencarian, filter, promo, artikel, peta, atau formulir hanya ditambahkan bila sudah ada kebutuhan dan konten nyata.

## 5. Di luar ruang lingkup

Jangan membuat tanpa permintaan eksplisit:

- akun, login, atau registrasi;
- keranjang dan checkout;
- payment gateway;
- ongkir atau stok waktu nyata;
- dashboard admin atau CMS;
- loyalty, wishlist, atau ulasan publik;
- chatbot atau fitur AI;
- aplikasi seluler;
- multi-bahasa;
- microservices;
- backend khusus.

Jangan membuat abstraksi untuk fitur “nanti”.

## 6. Pendekatan teknis

Pertahankan stack dan package manager yang sudah ada. Jangan melakukan migrasi tanpa alasan kuat.

Jika proyek masih kosong, gunakan:

- Next.js App Router;
- TypeScript strict;
- Tailwind CSS;
- React server-first;
- data lokal bertipe;
- deployment statis atau serverless sederhana.

Aturan:

- static-first;
- client component hanya untuk interaksi;
- dependensi seminimal mungkin;
- tanpa global state bila state lokal cukup;
- tanpa backend sebelum dibutuhkan;
- abstraksi hanya untuk pola yang benar-benar berulang.

## 7. Data dan konten

Gunakan satu sumber kebenaran, misalnya:

```text
src/content/products.ts
src/content/packages.ts
src/content/testimonials.ts
src/content/faqs.ts
src/content/service-areas.ts
src/content/site.ts
```

Data produk minimal:

```ts
type Product = {
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  image: string;
  images?: string[];
  priceFrom?: number;
  unit?: string;
  minimumOrder?: string;
  shelfLife?: string;
  storage?: string;
  featured?: boolean;
  available: boolean;
};
```

Data paket minimal:

```ts
type Package = {
  slug: string;
  name: string;
  description: string;
  suitableFor: string[];
  contents: string[];
  priceFrom?: number;
  minimumOrder?: string;
  image: string;
  featured?: boolean;
  available: boolean;
};
```

Jangan mengarang harga, testimoni, sertifikasi, bahan, daya tahan, atau klaim produk. Gunakan TODO untuk data yang belum tersedia dan jangan tampilkan placeholder ke publik.

## 8. Struktur proyek

Ikuti struktur yang sudah ada. Untuk proyek baru:

```text
src/
  app/
  components/
    layout/
    sections/
    product/
    package/
    ui/
  content/
  lib/
    whatsapp.ts
    seo.ts
    format.ts
  types/
public/images/
  brand/
  products/
  packages/
  about/
```

Jangan membuat folder untuk satu file tanpa alasan.

## 9. Desain dan konten

Ikuti `DESIGN.md` dan `WRITING_STYLE.md`.

Aturan inti:

- warna utama `#4B2E1A`, `#C49A4A`, `#F7F3EA`;
- judul Cormorant Garamond;
- isi Plus Jakarta Sans;
- teks isi minimal 16 px;
- target sentuh minimal 44 × 44 px;
- tombol utama minimal tinggi 48 px;
- mobile-first;
- gunakan aset logo asli;
- foto realistis dan hangat;
- tanpa slider otomatis, pop-up awal, neon, atau animasi berlebihan;
- gunakan sapaan “Anda”;
- judul memakai kapitalisasi kalimat;
- jangan mencampur istilah Inggris yang memiliki padanan jelas;
- jangan membuat klaim atau testimoni palsu.

Tombol utama:

> **Pesan lewat WhatsApp**

Jangan gunakan “Klik di sini”.

## 10. WhatsApp

Nomor tampilan:

```text
0812-1609-1918
```

Nomor tautan:

```text
6281216091918
```

Gunakan satu utilitas pembentuk URL. Jangan merakit URL di setiap komponen.

Pesan produk:

```text
Halo Lely Cake, saya ingin menanyakan produk berikut:

Produk: {nama produk}
Jumlah:
Tanggal dibutuhkan:
Area pengiriman:

Mohon informasi ketersediaan dan total harganya. Terima kasih.
```

Pesan paket:

```text
Halo Lely Cake, saya tertarik dengan {nama paket}.

Jumlah peserta:
Tanggal acara:
Area pengiriman:
Perkiraan anggaran:
Catatan:

Mohon bantuannya untuk pilihan yang sesuai. Terima kasih.
```

Nama produk atau paket harus terisi otomatis. Encode pesan dengan benar dan lacak klik sebagai konversi.

## 11. SEO lokal

Setiap halaman wajib memiliki:

- judul dan deskripsi unik;
- satu H1;
- canonical;
- Open Graph;
- alt text;
- breadcrumb untuk halaman detail;
- URL Bahasa Indonesia yang ringkas.

Contoh:

```text
/produk/onde-onde
/paket/paket-rapat
/area-layanan/surabaya
```

Gunakan structured data yang relevan: `LocalBusiness`, `Product`, `BreadcrumbList`, dan `FAQPage`. Jangan mengisi rating palsu.

Halaman kota harus memiliki isi nyata, bukan teks duplikat yang hanya mengganti nama lokasi.

## 12. Performa dan aksesibilitas

Target:

- LCP < 2,5 detik;
- CLS < 0,1;
- INP < 200 ms;
- Lighthouse utama mendekati atau di atas 90.

Wajib:

- gambar responsif dan teroptimasi;
- lazy loading di bawah layar;
- heading berurutan;
- fokus keyboard terlihat;
- kontras WCAG AA;
- label form tetap terlihat;
- hormati `prefers-reduced-motion`;
- jangan memakai library besar untuk fungsi kecil.

## 13. Analytics

Lacak seperlunya:

```text
whatsapp_click
product_view
package_view
contact_click
map_click
form_submit
```

Parameter yang boleh dipakai:

```text
item_name
item_type
page_path
service_area
campaign_source
```

Jangan mengirim nomor telepon, catatan pelanggan, atau data pribadi ke analytics. Analytics harus dapat dinonaktifkan melalui environment variable.

## 14. Cara kerja

Sebelum mengubah kode:

1. baca tugas;
2. buka file target dan dependensi langsung;
3. baca bagian relevan dari dokumen acuan;
4. ikuti pola file terdekat;
5. pilih perubahan terkecil yang menyelesaikan tugas.

Saat mengubah kode:

- jangan melakukan refactor yang tidak diminta;
- jangan menambah dependensi tanpa kebutuhan;
- jangan membuat helper satu kali yang tidak membantu;
- jangan mengubah banyak halaman untuk perubahan kecil;
- gunakan nama yang jelas;
- hapus kode mati akibat perubahan;
- jangan menyimpan rahasia;
- jangan mengarang konten bisnis.

Setelah selesai:

- jalankan pemeriksaan relevan;
- uji halaman yang berubah;
- periksa seluler;
- periksa tautan WhatsApp;
- laporkan perubahan dan hasil pemeriksaan secara ringkas.

## 15. Pengujian

Tidak perlu test suite besar.

Prioritas:

1. utilitas WhatsApp;
2. format harga;
3. pemetaan data;
4. metadata dinamis;
5. navigasi dan 404;
6. alur klik WhatsApp.

Jalankan:

- typecheck;
- lint;
- build produksi;
- unit test utilitas penting;
- smoke test rute utama.

Rute smoke test:

```text
/
/produk
/produk/{slug-valid}
/paket
/tentang-kami
/kontak
/area-layanan/surabaya
/rute-tidak-ada
```

## 16. Definition of Done

Perubahan selesai bila:

- memenuhi permintaan;
- tetap dalam ruang lingkup;
- sesuai desain dan gaya penulisan;
- bekerja pada seluler dan desktop;
- typecheck, lint, dan build lulus;
- WhatsApp bekerja;
- metadata utama tersedia;
- tidak ada placeholder publik;
- tidak menambah dependensi yang tidak perlu.

## 17. Efisiensi token

Untuk setiap tugas:

- jangan membaca seluruh repositori;
- mulai dari file target;
- cari simbol atau rute spesifik;
- baca hanya bagian dokumen yang relevan;
- jangan menyalin ulang dokumen acuan;
- jangan membuat rencana panjang untuk perubahan kecil;
- jangan menjelaskan kode yang tidak berubah;
- jangan meminta konfirmasi bila kebutuhan sudah jelas;
- tanyakan hanya untuk data bisnis yang tidak boleh diasumsikan;
- gunakan solusi paling sederhana yang memenuhi tujuan.

Laporan akhir cukup berisi:

- apa yang diubah;
- file utama;
- pemeriksaan yang dijalankan;
- data yang masih dibutuhkan.

## 18. Pencegahan over-engineering

Sebelum menambah fitur, tanyakan:

1. Apakah membantu pelanggan memahami produk?
2. Apakah meningkatkan kepercayaan?
3. Apakah mempermudah pemesanan?
4. Apakah dibutuhkan sekarang?

Jika tidak, jangan tambahkan.

Lebih baik memiliki katalog kecil dengan data lengkap, foto baik, halaman cepat, dan WhatsApp yang bekerja daripada banyak fitur dengan konten kosong.

## 19. Urutan pengerjaan

1. **Fondasi:** konfigurasi, token desain, font, layout, SEO, utilitas WhatsApp, model data.
2. **Penjualan:** beranda, produk, detail, paket, CTA, analytics.
3. **Kepercayaan:** Tentang Kami, testimoni, Tanya Jawab, kontak, area layanan, kebijakan.
4. **Kualitas:** structured data, sitemap, aksesibilitas, performa, smoke test.

Jangan masuk tahap berikutnya sebelum alur pemesanan utama bekerja.
