# TASKS.md — Website Lely Cake

Dokumen ini membagi pengembangan website Lely Cake menjadi enam fase yang terukur. Setiap fase harus diselesaikan, diperiksa, dan dikomit sebelum melanjutkan ke fase berikutnya.

Acuan utama:

1. `AGENTS.md`
2. `DESIGN.md`
3. `WRITING_STYLE.md`

Tujuan produk:

> Membantu pengunjung menemukan produk atau paket Lely Cake, lalu melakukan pemesanan melalui WhatsApp dengan cepat.

---

# Task 1 — Bootstrap dan Fondasi Proyek

## Tujuan

Menyiapkan fondasi teknis dan visual agar fase berikutnya dapat dikembangkan tanpa mengubah struktur dasar proyek.

## Cakupan

### 1.1 Inisialisasi proyek

- [ ] Inisialisasi Next.js App Router.
- [ ] Aktifkan TypeScript strict.
- [ ] Pasang dan konfigurasi Tailwind CSS.
- [ ] Tetapkan package manager proyek.
- [ ] Tambahkan script:
  - [ ] `dev`
  - [ ] `build`
  - [ ] `start`
  - [ ] `lint`
  - [ ] `typecheck`
  - [ ] `test`, bila test runner sudah digunakan
- [ ] Tambahkan `.gitignore`.
- [ ] Tambahkan `.env.example`.

### 1.2 Struktur direktori

Siapkan struktur minimum:

```text
src/
  app/
  components/
    layout/
    ui/
  content/
  lib/
  types/
public/
  images/
    brand/
    products/
    packages/
    about/
```

- [ ] Jangan membuat folder tambahan sebelum dibutuhkan.
- [ ] Gunakan alias import yang konsisten, misalnya `@/`.

### 1.3 Identitas visual

- [ ] Tambahkan aset logo Lely Cake.
- [ ] Tambahkan favicon.
- [ ] Konfigurasi font:
  - [ ] Cormorant Garamond untuk judul.
  - [ ] Plus Jakarta Sans untuk isi.
- [ ] Buat design tokens dari `DESIGN.md`.
- [ ] Terapkan warna utama:
  - [ ] `#4B2E1A`
  - [ ] `#C49A4A`
  - [ ] `#F7F3EA`
- [ ] Atur gaya dasar:
  - [ ] body
  - [ ] heading
  - [ ] link
  - [ ] focus state
  - [ ] container
  - [ ] spacing section

### 1.4 Layout dasar

- [ ] Buat root layout.
- [ ] Buat header responsif awal.
- [ ] Buat footer awal.
- [ ] Buat container layout.
- [ ] Buat navigasi seluler.
- [ ] Tambahkan tombol utama “Pesan lewat WhatsApp”.

### 1.5 Konfigurasi situs

Buat satu sumber data untuk:

- [ ] nama bisnis;
- [ ] tagline;
- [ ] nomor WhatsApp;
- [ ] tautan Instagram;
- [ ] area layanan;
- [ ] jam operasional;
- [ ] alamat, bila sudah tersedia;
- [ ] domain, bila sudah tersedia.

### 1.6 Utilitas awal

- [ ] Buat utilitas format rupiah.
- [ ] Buat utilitas pembentuk tautan WhatsApp.
- [ ] Buat utilitas metadata dasar.
- [ ] Tambahkan unit test untuk utilitas WhatsApp dan format harga, bila test runner tersedia.

## Deliverable

- Proyek dapat dijalankan secara lokal.
- Layout dasar tampil baik pada seluler dan desktop.
- Logo, warna, dan font sudah konsisten.
- Tidak ada konten produk palsu.
- Fondasi teknis siap dipakai fase berikutnya.

## Acceptance Criteria

- [ ] `lint` lulus.
- [ ] `typecheck` lulus.
- [ ] `build` lulus.
- [ ] Header dan footer responsif.
- [ ] Logo tidak terdistorsi.
- [ ] Tombol WhatsApp menggunakan utilitas terpusat.
- [ ] Tidak ada dependensi yang belum digunakan.
- [ ] Tidak ada fitur di luar ruang lingkup.

## Tidak dikerjakan pada fase ini

- halaman produk lengkap;
- CMS;
- analytics;
- checkout;
- backend;
- halaman SEO lokal;
- animasi kompleks.

## Commit yang disarankan

```text
chore: bootstrap Lely Cake website foundation
```

---

# Task 2 — Model Konten dan Komponen Dasar

## Tujuan

Membuat sumber data bertipe dan komponen reusable yang dibutuhkan oleh halaman utama tanpa melakukan over-engineering.

## Cakupan

### 2.1 Model data

- [ ] Buat tipe `Product`.
- [ ] Buat tipe `Package`.
- [ ] Buat tipe `Testimonial`.
- [ ] Buat tipe `Faq`.
- [ ] Buat tipe `ServiceArea`.
- [ ] Buat tipe `SiteConfig`, bila diperlukan.

### 2.2 Data lokal

Buat file konten:

```text
src/content/products.ts
src/content/packages.ts
src/content/testimonials.ts
src/content/faqs.ts
src/content/service-areas.ts
src/content/site.ts
```

- [ ] Gunakan data yang telah dikonfirmasi.
- [ ] Tandai informasi belum tersedia dengan TODO.
- [ ] Jangan tampilkan TODO atau placeholder ke pengguna.
- [ ] Gunakan slug yang stabil.
- [ ] Sediakan status `available`.
- [ ] Sediakan status `featured` untuk produk dan paket.

### 2.3 Komponen UI dasar

Buat hanya komponen yang benar-benar dipakai:

- [ ] Button
- [ ] Container
- [ ] SectionHeading
- [ ] Badge
- [ ] EmptyState
- [ ] Breadcrumb
- [ ] ResponsiveImage, bila menambah nilai
- [ ] WhatsAppButton

### 2.4 Komponen domain

- [ ] ProductCard
- [ ] ProductGrid
- [ ] PackageCard
- [ ] PackageGrid
- [ ] TestimonialCard
- [ ] FaqAccordion
- [ ] ServiceAreaCard

### 2.5 State dasar

- [ ] Empty state untuk daftar kosong.
- [ ] Fallback gambar bila aset belum tersedia.
- [ ] Penanganan produk tidak tersedia.
- [ ] Penanganan slug tidak ditemukan.

### 2.6 Validasi data

- [ ] Pastikan slug unik.
- [ ] Pastikan produk unggulan tersedia.
- [ ] Pastikan harga tidak diformat manual.
- [ ] Pastikan nomor WhatsApp tidak diduplikasi.
- [ ] Tambahkan validasi ringan saat development bila diperlukan.

## Deliverable

- Semua konten utama berasal dari data terstruktur.
- Komponen dasar siap dipakai oleh halaman.
- Tidak ada informasi bisnis penting yang ditulis berulang di banyak file.

## Acceptance Criteria

- [ ] TypeScript tidak memiliki error.
- [ ] Komponen dapat digunakan tanpa data hard-coded.
- [ ] Format harga konsisten.
- [ ] Link WhatsApp konsisten.
- [ ] Kartu produk dan paket responsif.
- [ ] Empty state tersedia.
- [ ] Tidak ada abstraksi yang belum dipakai.

## Tidak dikerjakan pada fase ini

- seluruh halaman final;
- pencarian kompleks;
- filter multi-parameter;
- API;
- database;
- dashboard admin.

## Commit yang disarankan

```text
feat: add typed content models and core components
```

---

# Task 3 — Alur Penjualan Utama

## Tujuan

Menyelesaikan alur utama dari pengunjung melihat produk hingga menghubungi Lely Cake melalui WhatsApp.

## Cakupan

### 3.1 Beranda

Buat bagian berikut:

- [ ] Hero.
- [ ] Keunggulan utama.
- [ ] Produk pilihan.
- [ ] Paket populer.
- [ ] Tentang Lely Cake secara singkat.
- [ ] Testimoni singkat.
- [ ] Area layanan.
- [ ] CTA penutup.

Hero harus menjawab:

- apa yang dijual;
- untuk kebutuhan apa;
- bagaimana cara memesan.

### 3.2 Daftar produk

- [ ] Buat halaman `/produk`.
- [ ] Tampilkan kategori produk.
- [ ] Tampilkan produk yang tersedia.
- [ ] Tambahkan filter kategori sederhana bila diperlukan.
- [ ] Tambahkan empty state.
- [ ] Tampilkan harga mulai dan minimal pemesanan bila tersedia.

### 3.3 Detail produk

- [ ] Buat halaman `/produk/[slug]`.
- [ ] Tampilkan:
  - [ ] foto;
  - [ ] nama;
  - [ ] deskripsi;
  - [ ] harga;
  - [ ] satuan;
  - [ ] minimal pemesanan;
  - [ ] daya tahan;
  - [ ] cara penyimpanan;
  - [ ] status ketersediaan;
  - [ ] produk terkait.
- [ ] Tambahkan breadcrumb.
- [ ] Tambahkan tombol WhatsApp dengan nama produk otomatis.
- [ ] Gunakan `notFound()` untuk slug tidak valid.

### 3.4 Daftar paket

- [ ] Buat halaman `/paket`.
- [ ] Tampilkan:
  - [ ] nama paket;
  - [ ] kegunaan;
  - [ ] isi;
  - [ ] harga mulai;
  - [ ] minimal pemesanan;
  - [ ] opsi penyesuaian.
- [ ] Tambahkan CTA WhatsApp per paket.

### 3.5 Detail paket

Buat hanya bila informasi paket cukup banyak.

- [ ] Buat `/paket/[slug]`, bila diperlukan.
- [ ] Hindari halaman detail bila kartu paket sudah cukup.
- [ ] Gunakan keputusan paling sederhana.

### 3.6 Integrasi WhatsApp

- [ ] Nama produk atau paket terisi otomatis.
- [ ] Pesan dapat diedit pengguna.
- [ ] Tautan bekerja pada seluler dan desktop.
- [ ] Tambahkan atribut tracking yang dibutuhkan.
- [ ] Jangan meminta pengguna mengisi form panjang sebelum membuka WhatsApp.

### 3.7 Responsif dan aksesibilitas

- [ ] Prioritaskan tampilan seluler.
- [ ] Tombol utama mudah dijangkau.
- [ ] Target sentuh minimal 44 × 44 px.
- [ ] Teks minimal 16 px.
- [ ] Fokus keyboard terlihat.
- [ ] Heading berurutan.

## Deliverable

Alur berikut berfungsi:

```text
Beranda
  → Produk atau Paket
  → Detail
  → Pesan lewat WhatsApp
```

Pada akhir fase ini website sudah dapat digunakan sebagai landing page Meta Ads versi awal.

## Acceptance Criteria

- [ ] Semua rute utama dapat dibuka.
- [ ] Tidak ada broken link.
- [ ] Slug tidak valid menghasilkan 404.
- [ ] Tombol WhatsApp membawa konteks produk atau paket.
- [ ] Beranda memiliki satu CTA utama yang jelas.
- [ ] Data tidak ditulis ulang di halaman.
- [ ] Tampilan seluler sudah diuji.
- [ ] `lint`, `typecheck`, dan `build` lulus.

## Tidak dikerjakan pada fase ini

- checkout;
- payment gateway;
- akun;
- filter kompleks;
- CMS;
- artikel SEO dalam jumlah besar;
- personalisasi AI.

## Commit yang disarankan

```text
feat: build core product and WhatsApp ordering flow
```

---

# Task 4 — Kepercayaan dan SEO Lokal

## Tujuan

Melengkapi informasi yang membantu calon pelanggan memahami Lely Cake, merasa yakin, dan mengetahui area layanan.

## Cakupan

### 4.1 Tentang Kami

- [ ] Buat `/tentang-kami`.
- [ ] Tampilkan cerita Lely Cake.
- [ ] Jelaskan filosofi merek.
- [ ] Tampilkan komitmen kualitas.
- [ ] Tambahkan foto nyata bila tersedia.
- [ ] Tambahkan CTA WhatsApp.

### 4.2 Testimoni

- [ ] Buat `/testimoni`.
- [ ] Tampilkan testimoni asli.
- [ ] Sertakan konteks pesanan.
- [ ] Samarkan data pribadi.
- [ ] Jangan membuat rating atau testimoni palsu.

### 4.3 Tanya Jawab

- [ ] Buat `/tanya-jawab`.
- [ ] Gunakan pertanyaan nyata tentang:
  - [ ] minimal pemesanan;
  - [ ] pesanan mendadak;
  - [ ] daya tahan;
  - [ ] pengiriman;
  - [ ] pembayaran;
  - [ ] penyesuaian isi;
  - [ ] acara besar;
  - [ ] waktu pemesanan.
- [ ] Gunakan akordeon yang dapat diakses keyboard.

### 4.4 Kontak

- [ ] Buat `/kontak`.
- [ ] Tampilkan:
  - [ ] WhatsApp;
  - [ ] Instagram;
  - [ ] jam operasional;
  - [ ] alamat atau Google Maps bila tersedia;
  - [ ] area layanan;
  - [ ] langkah pemesanan.
- [ ] Tambahkan CTA utama.

### 4.5 Area layanan

- [ ] Buat `/area-layanan`.
- [ ] Buat halaman:
  - [ ] `/area-layanan/surabaya`
  - [ ] `/area-layanan/sidoarjo`
  - [ ] `/area-layanan/gresik`
  - [ ] `/area-layanan/mojokerto`
- [ ] Setiap halaman harus memiliki isi yang relevan.
- [ ] Jelaskan mekanisme ongkir tanpa mengarang tarif.
- [ ] Jelaskan rekomendasi waktu pemesanan.
- [ ] Tambahkan produk atau paket terkait.
- [ ] Tambahkan CTA WhatsApp.

### 4.6 Halaman kebijakan

- [ ] Kebijakan Privasi.
- [ ] Syarat Pemesanan.
- [ ] Informasi pembatalan hanya bila sudah dikonfirmasi bisnis.
- [ ] Jangan menulis kebijakan yang tidak diterapkan.

### 4.7 Halaman 404

- [ ] Gunakan bahasa yang ramah.
- [ ] Berikan tautan ke Beranda dan Produk.
- [ ] Jangan membuat animasi atau ilustrasi berat.

## Deliverable

- Website memiliki identitas bisnis yang jelas.
- Informasi pemesanan dan area layanan mudah ditemukan.
- Tersedia fondasi konten SEO lokal yang wajar.

## Acceptance Criteria

- [ ] Semua konten memakai Bahasa Indonesia.
- [ ] Tidak ada testimoni palsu.
- [ ] Tidak ada klaim sertifikasi tanpa bukti.
- [ ] Halaman kota tidak identik satu sama lain.
- [ ] Informasi kontak konsisten.
- [ ] FAQ mudah dipahami.
- [ ] `lint`, `typecheck`, dan `build` lulus.

## Tidak dikerjakan pada fase ini

- program loyalitas;
- akun pelanggan;
- blog besar;
- direktori kota;
- halaman lokasi massal;
- ulasan publik otomatis.

## Commit yang disarankan

```text
feat: add trust pages and local service content
```

---

# Task 5 — SEO Teknis, Analytics, QA, dan Peluncuran

## Tujuan

Menyiapkan website agar layak dipublikasikan, dapat ditemukan, cepat, terukur, dan stabil.

## Cakupan

### 5.1 Metadata

- [ ] Metadata default.
- [ ] Metadata unik per halaman.
- [ ] Metadata dinamis untuk produk dan paket.
- [ ] Canonical URL.
- [ ] Open Graph.
- [ ] Twitter card bila relevan.
- [ ] Social sharing image.
- [ ] Favicon lengkap.

### 5.2 SEO teknis

- [ ] `sitemap.ts`.
- [ ] `robots.ts`.
- [ ] Breadcrumb.
- [ ] Structured data:
  - [ ] `LocalBusiness`;
  - [ ] `Product`;
  - [ ] `BreadcrumbList`;
  - [ ] `FAQPage`.
- [ ] Jangan menambahkan rating palsu.
- [ ] Jangan memasukkan harga yang tidak tersedia.

### 5.3 Analytics

- [ ] Integrasikan analytics yang dipilih.
- [ ] Jadikan analytics dapat dinonaktifkan lewat environment variable.
- [ ] Lacak:
  - [ ] `whatsapp_click`;
  - [ ] `product_view`;
  - [ ] `package_view`;
  - [ ] `contact_click`;
  - [ ] `map_click`;
  - [ ] `form_submit`, bila ada.
- [ ] Jangan kirim data pribadi.
- [ ] Pastikan UTM dari Meta Ads tetap terbaca.

### 5.4 Performa

- [ ] Optimasi gambar ke WebP atau AVIF.
- [ ] Gunakan ukuran responsif.
- [ ] Optimasi hero image.
- [ ] Lazy load gambar di bawah layar.
- [ ] Optimasi font.
- [ ] Hapus JavaScript yang tidak perlu.
- [ ] Audit bundle.
- [ ] Hindari layout shift.

Target:

- [ ] LCP < 2,5 detik.
- [ ] CLS < 0,1.
- [ ] INP < 200 ms.

### 5.5 Aksesibilitas

- [ ] Audit kontras.
- [ ] Audit keyboard.
- [ ] Audit focus state.
- [ ] Audit alt text.
- [ ] Audit heading.
- [ ] Audit label form.
- [ ] Audit reduced motion.
- [ ] Audit ukuran target sentuh.

### 5.6 Pengujian

- [ ] Unit test utilitas penting.
- [ ] Smoke test:
  - [ ] `/`
  - [ ] `/produk`
  - [ ] detail produk valid
  - [ ] `/paket`
  - [ ] `/tentang-kami`
  - [ ] `/kontak`
  - [ ] `/area-layanan/surabaya`
  - [ ] rute tidak valid
- [ ] Uji tautan WhatsApp.
- [ ] Uji metadata dinamis.
- [ ] Uji tampilan seluler, tablet, dan desktop.
- [ ] Uji browser utama.

### 5.7 Deployment

- [ ] Siapkan environment produksi.
- [ ] Konfigurasi domain.
- [ ] Konfigurasi HTTPS.
- [ ] Pastikan canonical menggunakan domain produksi.
- [ ] Pastikan sitemap menggunakan domain produksi.
- [ ] Verifikasi robots.
- [ ] Verifikasi halaman 404.
- [ ] Verifikasi analytics.
- [ ] Verifikasi social preview.
- [ ] Dokumentasikan cara deploy.

### 5.8 Pemeriksaan pra-rilis

- [ ] Tidak ada placeholder.
- [ ] Tidak ada TODO yang tampil.
- [ ] Nomor WhatsApp benar.
- [ ] Harga yang tampil sudah dikonfirmasi.
- [ ] Semua gambar memiliki izin penggunaan.
- [ ] Semua tautan bekerja.
- [ ] Tidak ada data sensitif dalam repository.
- [ ] `lint`, `typecheck`, test, dan build lulus.

## Deliverable

- Website siap produksi.
- Konversi WhatsApp dapat diukur.
- SEO teknis dasar selesai.
- Dokumentasi deployment tersedia.

## Acceptance Criteria

- [ ] Semua pemeriksaan otomatis lulus.
- [ ] Tidak ada error console utama.
- [ ] Tidak ada broken route.
- [ ] Metadata dan structured data valid.
- [ ] Performa memenuhi target secara realistis.
- [ ] Website dapat digunakan pada jaringan seluler.
- [ ] Domain produksi dan HTTPS aktif.

## Tidak dikerjakan pada fase ini

- A/B testing kompleks;
- data warehouse;
- attribution platform khusus;
- dashboard analytics khusus;
- sistem observability enterprise.

## Commit yang disarankan

```text
chore: prepare SEO analytics QA and production release
```

---

# Task 6 — Optimasi Setelah Peluncuran

## Tujuan

Meningkatkan performa website berdasarkan data dan pertanyaan pelanggan nyata, bukan asumsi.

Fase ini dimulai setelah website tayang dan memiliki trafik yang cukup.

## Cakupan

### 6.1 Baseline data

Catat kondisi awal:

- [ ] jumlah pengunjung;
- [ ] sumber trafik;
- [ ] halaman masuk;
- [ ] produk paling banyak dilihat;
- [ ] paket paling banyak dilihat;
- [ ] jumlah klik WhatsApp;
- [ ] rasio klik WhatsApp;
- [ ] perangkat;
- [ ] kota atau area, bila tersedia secara aman;
- [ ] halaman dengan keluar tertinggi.

Jangan menyimpulkan dari sampel yang terlalu kecil.

### 6.2 Evaluasi funnel

Periksa:

```text
Landing page
  → Melihat produk/paket
  → Membuka detail
  → Klik WhatsApp
  → Pesanan terkonfirmasi
```

- [ ] Identifikasi titik penurunan.
- [ ] Bandingkan kampanye Meta Ads.
- [ ] Catat produk yang sering ditanyakan.
- [ ] Catat pertanyaan berulang di WhatsApp.
- [ ] Catat hambatan pemesanan.

### 6.3 Optimasi konten

Berdasarkan data:

- [ ] Perbaiki judul hero.
- [ ] Perjelas CTA.
- [ ] Perbaiki deskripsi produk.
- [ ] Tambahkan informasi yang sering ditanyakan.
- [ ] Urutkan produk berdasarkan minat aktual.
- [ ] Perbarui paket berdasarkan kebutuhan pelanggan.
- [ ] Tambahkan foto yang lebih meyakinkan.

### 6.4 Optimasi kampanye

- [ ] Buat landing page kampanye hanya bila diperlukan.
- [ ] Pertahankan satu tujuan utama per landing page.
- [ ] Gunakan UTM konsisten.
- [ ] Sesuaikan pesan iklan dengan isi halaman.
- [ ] Hindari duplikasi halaman tanpa kebutuhan.

### 6.5 SEO konten

Tambahkan secara bertahap:

- [ ] artikel berdasarkan pertanyaan pelanggan;
- [ ] halaman promo musiman;
- [ ] pengayaan halaman area layanan;
- [ ] internal linking;
- [ ] pembaruan FAQ.

Contoh topik:

- cara memilih snack box untuk rapat;
- jumlah kue untuk 50 tamu;
- pilihan kue untuk pengajian;
- cara menyimpan kue basah;
- memilih paket sesuai anggaran.

### 6.6 Eksperimen ringan

Lakukan satu perubahan per eksperimen:

- [ ] variasi judul hero;
- [ ] urutan produk unggulan;
- [ ] teks CTA;
- [ ] posisi testimoni;
- [ ] susunan paket.

Catat:

- hipotesis;
- perubahan;
- durasi;
- jumlah sampel;
- hasil;
- keputusan.

Jangan memasang platform A/B testing berat sebelum volume trafik memadai.

### 6.7 Evaluasi kebutuhan fitur baru

Fitur baru hanya dipertimbangkan jika terdapat masalah operasional nyata.

Contoh sinyal:

- CMS diperlukan jika perubahan konten terlalu sering dan selalu membutuhkan developer.
- Form diperlukan jika percakapan WhatsApp sering kehilangan informasi penting.
- Checkout diperlukan jika volume pesanan tinggi dan proses manual menjadi hambatan.
- Dashboard diperlukan jika data operasional sudah terlalu kompleks untuk data lokal.

Tanpa bukti kebutuhan, jangan tambahkan.

## Deliverable

- daftar temuan berbasis data;
- prioritas optimasi;
- perubahan kecil yang terukur;
- backlog fitur berdasarkan kebutuhan nyata.

## Acceptance Criteria

- [ ] Setiap perubahan memiliki alasan berbasis data.
- [ ] Metrik sebelum dan sesudah dicatat.
- [ ] Tidak ada fitur besar yang dibuat berdasarkan asumsi.
- [ ] Perubahan tetap sesuai karakter merek.
- [ ] Performa dan aksesibilitas tidak menurun.
- [ ] Hasil eksperimen didokumentasikan.

## Ritme yang disarankan

- Mingguan: cek error, tautan, dan kampanye aktif.
- Bulanan: evaluasi funnel dan konten.
- Per kuartal: evaluasi kebutuhan fitur dan SEO.
- Musiman: perbarui promo dan produk khusus.

## Commit yang disarankan

Gunakan commit kecil sesuai perubahan, misalnya:

```text
feat: improve homepage CTA based on conversion data
```

---

# Ringkasan Ketergantungan

```text
Task 1
  ↓
Task 2
  ↓
Task 3
  ↓
Task 4
  ↓
Task 5
  ↓
Task 6
```

- Task 1–5 merupakan development sebelum peluncuran.
- Task 6 dilakukan setelah peluncuran.
- Task 3 adalah batas minimum website mulai dapat diuji sebagai alat penjualan.
- Task 5 adalah batas website siap dipublikasikan.

---

# Aturan Eksekusi dengan Codex

Untuk setiap task:

1. Gunakan satu sesi atau satu prompt utama.
2. Minta Codex membaca `AGENTS.md`.
3. Minta Codex membaca bagian relevan dari `DESIGN.md` dan `WRITING_STYLE.md`.
4. Jangan meminta implementasi task berikutnya.
5. Minta perubahan sekecil mungkin.
6. Jalankan `lint`, `typecheck`, test relevan, dan `build`.
7. Tinjau hasil sebelum commit.
8. Gunakan satu commit per task.

Task dapat dipecah hanya bila konteks terlalu besar. Bila dipecah, gunakan subtask yang sudah tertulis di dokumen ini dan jangan memperluas ruang lingkup.
