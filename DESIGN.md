# DESIGN.md — Website Lely Cake

## 1. Tujuan Dokumen

Dokumen ini menjadi acuan desain utama untuk website Lely Cake. Seluruh keputusan visual, tata letak, komponen, dan pengalaman pengguna harus menjaga karakter merek:

> **Elegan · Simpel · Hangat · Terpercaya**

Website tidak dirancang sebagai marketplace yang rumit. Fungsi utamanya adalah:

1. memperkenalkan Lely Cake secara profesional;
2. menampilkan produk dan paket secara jelas;
3. membangun kepercayaan;
4. memudahkan pengunjung melakukan pemesanan melalui WhatsApp;
5. mendukung pemasaran melalui Meta Ads, Google Business Profile, dan pencarian lokal.

Target utama pengguna adalah pelanggan berusia **25–60 tahun** di Surabaya, Sidoarjo, Gresik, dan Mojokerto. Karena itu, desain harus mudah dipahami, nyaman dibaca, tidak terlalu eksperimental, dan tetap terasa premium.

---

## 2. Fondasi Merek

### 2.1 Karakter Merek

Lely Cake harus terasa:

- **Elegan:** rapi, proporsional, tidak berlebihan.
- **Simpel:** navigasi jelas, informasi tidak menumpuk.
- **Hangat:** foto produk, warna, dan bahasa terasa dekat.
- **Terpercaya:** harga, cara pesan, area layanan, dan informasi produk disampaikan dengan jelas.

### 2.2 Tagline

Tagline resmi pada logo:

> **Freshly Made, With Heart**

Karena isi website menggunakan Bahasa Indonesia, tagline resmi tetap boleh tampil di dalam aset logo. Pada isi teks, gunakan padanan:

> **Dibuat Segar, dengan Sepenuh Hati**

Jangan mencampurkan bahasa Inggris ke dalam navigasi, tombol, judul halaman, atau deskripsi produk.

### 2.3 Penggunaan Logo

Gunakan aset logo asli. Jangan mengetik ulang logo menggunakan font biasa.

Varian penggunaan:

- **Logo penuh horizontal:** header desktop, footer, halaman Tentang Kami.
- **Logo vertikal dengan tagline:** halaman pembuka, materi merek, bagian cerita.
- **Logo aplikasi:** ikon aplikasi, ikon profil, thumbnail.
- **Favicon:** favicon browser dan shortcut perangkat.

Aturan:

- Sediakan ruang kosong minimal setara tinggi huruf **L** di sekeliling logo.
- Jangan memiringkan, meregangkan, memberi efek bayangan berat, atau mengganti warna logo.
- Gunakan versi terang pada latar cokelat gelap.
- Gunakan versi utama pada latar krem atau putih hangat.
- Jangan menempatkan logo di atas foto yang ramai tanpa bidang latar yang cukup.

---

## 3. Palet Warna

### 3.1 Warna Utama

| Token            | Warna                |       Hex | Penggunaan                                 |
| ---------------- | -------------------- | --------: | ------------------------------------------ |
| `brand-brown`    | Cokelat utama        | `#4B2E1A` | Judul, teks penting, footer, tombol utama  |
| `brand-gold`     | Emas hangat          | `#C49A4A` | Aksen, garis dekoratif, ikon, status aktif |
| `brand-cream`    | Krem lembut          | `#F7F3EA` | Latar utama, kartu, bidang visual          |
| `surface-white`  | Putih hangat         | `#FFFDF9` | Latar konten dan kartu                     |
| `text-primary`   | Cokelat sangat gelap | `#2A1A10` | Teks isi utama                             |
| `text-secondary` | Cokelat abu          | `#6F625A` | Teks pendukung                             |
| `border-soft`    | Garis lembut         | `#E5D9C8` | Batas kartu dan form                       |
| `success`        | Hijau lembut         | `#4F6B4F` | Konfirmasi berhasil                        |
| `error`          | Merah hangat         | `#9A3F32` | Validasi dan pesan kesalahan               |

### 3.2 Proporsi Penggunaan

Gunakan prinsip:

- 70% krem/putih hangat;
- 20% cokelat;
- 10% emas sebagai aksen.

Warna emas tidak digunakan untuk paragraf panjang karena kontrasnya rendah. Gunakan emas pada elemen dekoratif, ikon, garis, label kecil, dan hover.

### 3.3 Kombinasi yang Disarankan

- Latar krem + teks cokelat gelap.
- Latar putih hangat + judul cokelat.
- Latar cokelat + teks putih hangat.
- Tombol cokelat + teks putih.
- Tombol sekunder transparan + garis cokelat.

---

## 4. Tipografi

### 4.1 Rekomendasi Font Website

**Judul:** `Cormorant Garamond`  
**Isi dan antarmuka:** `Plus Jakarta Sans`

Alasan:

- Cormorant Garamond memberi kesan elegan dan selaras dengan karakter logo.
- Plus Jakarta Sans bersih, modern, dan mudah dibaca oleh pengguna usia 25–60 tahun.

Alternatif:

- Judul: `Playfair Display`
- Isi: `Inter`

### 4.2 Aturan Tipografi

- Ukuran teks isi minimum: **16 px**.
- Tinggi baris isi: **1,6–1,75**.
- Hindari teks kapital penuh untuk paragraf.
- Kapital penuh hanya untuk label kecil dengan jarak huruf yang cukup.
- Gunakan maksimal dua keluarga font.
- Jangan memakai font dekoratif untuk teks panjang.

### 4.3 Skala Tipografi

| Elemen       |  Desktop |  Seluler | Catatan              |
| ------------ | -------: | -------: | -------------------- |
| H1           | 56–64 px | 38–44 px | Maksimal 2–3 baris   |
| H2           | 40–48 px | 32–36 px | Judul bagian         |
| H3           | 28–32 px | 24–28 px | Judul kartu/kelompok |
| Judul produk | 22–26 px | 20–24 px | Ringkas              |
| Isi besar    | 18–20 px | 17–18 px | Intro dan sorotan    |
| Isi normal   | 16–18 px |    16 px | Paragraf             |
| Teks kecil   |    14 px |    14 px | Label dan catatan    |
| Tombol       | 15–16 px | 15–16 px | Semibold             |

### 4.4 Panjang Baris

- Paragraf: maksimal **65–75 karakter** per baris.
- Deskripsi produk pada kartu: maksimal **2–3 baris**.
- Gunakan ruang kosong agar halaman tidak terasa padat.

---

## 5. Tata Letak

### 5.1 Grid

- Lebar konten maksimum: **1200 px**.
- Padding desktop: **48–64 px**.
- Padding tablet: **32 px**.
- Padding seluler: **20–24 px**.
- Grid desktop: **12 kolom**.
- Grid tablet: **8 kolom**.
- Grid seluler: **4 kolom**.

### 5.2 Spasi

Gunakan sistem kelipatan 4:

`4, 8, 12, 16, 24, 32, 48, 64, 80, 96`

Rekomendasi:

- Jarak antarbagian utama: 80–120 px desktop, 56–72 px seluler.
- Jarak judul ke isi: 16–24 px.
- Jarak antarparagraf: 16 px.
- Padding kartu: 20–28 px.
- Tinggi tombol minimum: 48 px.

### 5.3 Sudut dan Bayangan

- Radius tombol: 8–10 px.
- Radius kartu: 12–16 px.
- Radius foto: 12–16 px.
- Bayangan sangat lembut, tidak dramatis.
- Hindari efek kaca, neon, atau gradien yang berlebihan.

---

## 6. Prinsip Pengalaman Pengguna

### 6.1 Prioritas Utama

Pengunjung harus memahami dalam waktu singkat:

1. Lely Cake menjual apa;
2. produk dibuat segar dan terpercaya;
3. kisaran harga atau cara mendapatkan harga;
4. cara melakukan pemesanan;
5. area pengiriman.

### 6.2 Alur Utama

```text
Iklan / Pencarian
        ↓
Beranda / Halaman Produk
        ↓
Melihat produk atau paket
        ↓
Klik “Pesan lewat WhatsApp”
        ↓
Pesan otomatis berisi detail produk
        ↓
Konfirmasi oleh admin
```

### 6.3 Prinsip Antarmuka

- Satu halaman memiliki satu tujuan utama.
- Tombol pemesanan selalu mudah ditemukan.
- Jangan memaksa pengguna membuat akun.
- Jangan menggunakan istilah teknis.
- Harga, minimal pemesanan, dan area layanan harus jelas.
- Informasi penting tidak boleh hanya disampaikan melalui ikon.
- Form dibuat sesingkat mungkin.

---

## 7. Struktur Informasi Website

### 7.1 Navigasi Utama

- Beranda
- Produk
- Paket
- Tentang Kami
- Testimoni
- Tanya Jawab
- Kontak

### 7.2 Halaman Pendukung

- Area Layanan
  - Surabaya
  - Sidoarjo
  - Gresik
  - Mojokerto
- Artikel
- Galeri
- Promo
- Kebijakan Privasi
- Syarat Pemesanan

### 7.3 Struktur Versi Awal

Untuk versi pertama, prioritaskan:

1. Beranda
2. Daftar Produk
3. Detail Produk
4. Paket
5. Tentang Kami
6. Testimoni
7. Tanya Jawab
8. Kontak
9. Area Layanan
10. Tombol WhatsApp

Artikel, galeri, dan promo dapat dikembangkan setelah konten inti stabil.

---

## 8. Rancangan Halaman

## 8.1 Beranda

Urutan bagian:

### A. Header

Isi:

- logo penuh;
- navigasi utama;
- tombol **Pesan Sekarang**;
- menu hamburger pada seluler.

Header bersifat ringkas dan tetap terlihat saat pengguna menggulir, tetapi tidak menutupi terlalu banyak layar.

### B. Hero

Isi:

- judul utama yang jelas;
- deskripsi singkat;
- tombol utama **Pesan lewat WhatsApp**;
- tombol sekunder **Lihat Produk**;
- foto produk terbaik.

Contoh:

> **Kue Rumahan untuk Setiap Momen Istimewa**

> Dibuat segar dengan bahan pilihan untuk keluarga, rapat, arisan, dan berbagai acara Anda.

### C. Keunggulan

Tampilkan 3–4 poin:

- Dibuat segar
- Bahan pilihan
- Cocok untuk berbagai acara
- Pengiriman area Surabaya dan sekitarnya

### D. Produk Pilihan

Tampilkan 6–8 produk unggulan dengan foto, nama, harga mulai, dan tombol lihat detail.

### E. Paket Populer

Tampilkan paket berdasarkan kebutuhan:

- Paket Rapat
- Paket Arisan
- Paket Pengajian
- Paket Ulang Tahun
- Paket Keluarga

### F. Tentang Singkat

Foto dapur atau proses produksi, cerita singkat, dan tautan ke halaman Tentang Kami.

### G. Testimoni

Gunakan kutipan pendek, nama atau inisial pelanggan, serta konteks pesanan.

### H. Area Layanan

Tampilkan Surabaya, Sidoarjo, Gresik, dan Mojokerto.

### I. CTA Penutup

Contoh:

> **Sedang menyiapkan acara?**

> Ceritakan kebutuhan Anda. Kami akan membantu memilihkan produk dan jumlah yang sesuai.

Tombol: **Hubungi Lely Cake**

---

## 8.2 Halaman Produk

### Daftar Produk

Fitur:

- kategori yang mudah dipilih;
- pencarian sederhana;
- filter kebutuhan acara bila jumlah produk banyak;
- kartu produk konsisten.

Kategori yang disarankan:

- Kue Tradisional
- Cake
- Snack Box
- Puding dan Hidangan Manis
- Produk Musiman

### Kartu Produk

Isi:

- foto;
- nama produk;
- deskripsi satu kalimat;
- harga mulai;
- label minimal pemesanan bila perlu;
- tombol **Lihat Detail** atau **Pesan**.

### Detail Produk

Isi:

- galeri foto;
- nama produk;
- deskripsi;
- harga;
- satuan;
- minimal pemesanan;
- pilihan jumlah;
- informasi daya tahan;
- saran penyimpanan;
- opsi rasa atau ukuran;
- tombol WhatsApp dengan pesan otomatis;
- rekomendasi produk terkait.

Hindari deskripsi terlalu panjang. Informasi terpenting harus terlihat tanpa banyak menggulir.

---

## 8.3 Halaman Paket

Susun berdasarkan kebutuhan, bukan hanya jumlah isi.

Setiap paket menampilkan:

- nama paket;
- cocok untuk acara apa;
- isi paket;
- jumlah porsi;
- harga mulai;
- minimal pemesanan;
- opsi penyesuaian;
- tombol pemesanan.

Gunakan tabel hanya bila membantu perbandingan. Pada seluler, tampilkan sebagai kartu.

---

## 8.4 Tentang Kami

Isi:

- cerita awal Lely Cake;
- makna “Dibuat Segar, dengan Sepenuh Hati”;
- komitmen kualitas;
- proses produksi;
- foto nyata dapur, pemilik, atau tim;
- area layanan;
- CTA pemesanan.

Halaman ini harus terasa personal, bukan seperti profil perusahaan besar.

---

## 8.5 Testimoni

Gunakan:

- kutipan asli pelanggan;
- konteks pemesanan;
- foto pesanan bila tersedia;
- tangkapan layar WhatsApp yang telah disamarkan;
- nama atau inisial dengan izin.

Jangan membuat testimoni fiktif.

---

## 8.6 Tanya Jawab

Pertanyaan prioritas:

- Berapa minimal pemesanan?
- Apakah menerima pesanan mendadak?
- Berapa lama produk dapat bertahan?
- Apakah bisa memilih isi snack box?
- Apakah tersedia pengiriman?
- Wilayah mana saja yang dilayani?
- Bagaimana cara pembayaran?
- Apakah menerima pesanan untuk acara besar?
- Apakah bisa menyesuaikan anggaran?
- Kapan sebaiknya melakukan pemesanan?

Gunakan komponen akordeon dengan target sentuh minimal 44 px.

---

## 8.7 Kontak

Tampilkan:

- WhatsApp;
- Instagram;
- alamat atau titik Google Maps;
- jam operasional;
- area pengiriman;
- petunjuk pemesanan singkat.

Nomor WhatsApp utama:

> **0812-1609-1918**

Gunakan tautan langsung dengan pesan awal yang sopan dan mudah diedit.

---

## 8.8 Area Layanan

Setiap halaman area berisi:

- penjelasan layanan di kota tersebut;
- jenis produk yang dapat dipesan;
- estimasi cakupan;
- mekanisme ongkir;
- rekomendasi waktu pemesanan;
- produk atau paket populer;
- CTA WhatsApp.

Hindari menggandakan teks yang sama pada setiap kota. Setiap halaman harus memiliki isi yang benar-benar relevan.

---

## 9. Komponen Antarmuka

### 9.1 Tombol

**Utama**

- Latar: cokelat.
- Teks: putih hangat.
- Contoh: **Pesan lewat WhatsApp**.

**Sekunder**

- Latar: transparan atau krem.
- Garis: cokelat.
- Contoh: **Lihat Produk**.

**Teks**

- Tanpa bidang.
- Gunakan untuk tautan ringan.
- Contoh: **Pelajari Selengkapnya**.

Aturan:

- Gunakan kata kerja yang jelas.
- Hindari “Klik di Sini”.
- Minimal tinggi 48 px.
- Pada seluler, tombol utama boleh memenuhi lebar.

### 9.2 Kartu Produk

- Foto rasio konsisten, disarankan 4:5 atau 1:1.
- Latar putih hangat.
- Judul maksimal dua baris.
- Harga mudah ditemukan.
- Hover lembut pada desktop.
- Tidak memakai animasi berlebihan.

### 9.3 Form

- Label selalu terlihat.
- Jangan hanya memakai placeholder.
- Berikan contoh format.
- Pesan kesalahan menggunakan bahasa yang sopan.
- Gunakan pilihan sederhana untuk jumlah, tanggal, dan area.
- Jangan meminta data yang tidak dibutuhkan.

### 9.4 Tombol WhatsApp Mengambang

Boleh digunakan dengan ketentuan:

- tidak menutupi konten;
- memiliki label singkat pada desktop;
- mudah ditutup atau tidak mengganggu;
- posisi kanan bawah;
- tetap memperhatikan area aman pada perangkat seluler.

### 9.5 Breadcrumb

Gunakan pada halaman detail dan artikel:

```text
Beranda / Produk / Onde-Onde
```

Ini membantu pengguna dan mesin pencari memahami struktur halaman.

---

## 10. Fotografi dan Visual

### 10.1 Gaya Foto

Foto harus:

- realistis;
- hangat;
- terang lembut;
- menampilkan tekstur produk;
- memiliki komposisi sederhana;
- memakai latar krem, putih hangat, kayu terang, atau kain natural;
- mempertahankan bentuk asli produk.

Hindari:

- warna terlalu jenuh;
- tampilan kartun;
- efek AI yang terlihat tidak alami;
- properti terlalu ramai;
- bayangan keras;
- filter dingin.

### 10.2 Jenis Foto yang Dibutuhkan

- hero produk;
- foto tiap produk;
- foto kemasan;
- proses produksi;
- pesanan dalam jumlah banyak;
- paket untuk acara;
- suasana pengantaran atau penyerahan;
- foto tim atau pemilik.

### 10.3 Rasio Gambar

- Hero desktop: 16:9 atau 3:2.
- Kartu produk: 4:5.
- Galeri: campuran 4:5 dan 3:2.
- Logo: SVG atau PNG transparan.
- Favicon: SVG/PNG persegi.

### 10.4 Optimasi

- Gunakan WebP atau AVIF.
- Sediakan ukuran responsif.
- Gunakan pemuatan lambat untuk gambar di bawah layar.
- Isi teks alternatif harus menjelaskan produk secara wajar.

---

## 11. Ikon dan Ilustrasi

- Gunakan ikon garis sederhana.
- Ketebalan ikon konsisten.
- Warna cokelat atau emas.
- Jangan memakai emoji sebagai ikon utama.
- Ilustrasi dekoratif boleh mengambil unsur gandum, daun, atau garis logo secara sangat halus.
- Dekorasi tidak boleh mengganggu keterbacaan.

---

## 12. Gerak dan Interaksi

Karakter animasi:

- lembut;
- singkat;
- fungsional;
- tidak menarik perhatian berlebihan.

Rekomendasi:

- durasi 150–250 ms;
- perpindahan opacity dan posisi kecil;
- tidak memakai parallax berat;
- menghormati `prefers-reduced-motion`;
- tidak menunda tombol pemesanan.

---

## 13. Responsif

### Seluler

- Prioritas utama karena sebagian besar trafik iklan kemungkinan berasal dari ponsel.
- Tombol pemesanan terlihat tanpa terlalu banyak menggulir.
- Navigasi maksimal satu tingkat.
- Kartu produk satu kolom atau dua kolom bila ruang cukup.
- Teks tidak lebih kecil dari 16 px.
- Area sentuh minimal 44 × 44 px.
- Hindari tabel lebar.

### Tablet

- Gunakan 2–3 kolom untuk produk.
- Pertahankan ruang kosong.
- Navigasi dapat tetap penuh bila muat.

### Desktop

- Gunakan lebar konten maksimum 1200 px.
- Jangan membentangkan paragraf terlalu lebar.
- Gunakan foto besar untuk membangun kualitas merek.

---

## 14. Aksesibilitas

Standar minimum:

- kontras teks memenuhi WCAG AA;
- navigasi dapat digunakan dengan keyboard;
- fokus elemen terlihat;
- teks alternatif pada gambar;
- label form selalu tersedia;
- tombol memiliki nama yang jelas;
- jangan menyampaikan informasi hanya lewat warna;
- sediakan ukuran teks yang nyaman;
- struktur heading berurutan;
- video memiliki teks atau ringkasan;
- hindari animasi berkedip.

Target pengguna hingga usia 60 tahun membuat keterbacaan dan kejelasan menjadi prioritas desain, bukan tambahan.

---

## 15. SEO dan Performa

### SEO

Setiap halaman harus memiliki:

- judul halaman unik;
- deskripsi meta;
- satu H1;
- URL Bahasa Indonesia yang ringkas;
- data terstruktur produk bila relevan;
- data bisnis lokal;
- breadcrumb;
- Open Graph image;
- informasi area layanan;
- teks alternatif gambar.

Contoh URL:

```text
/produk/onde-onde
/paket/paket-rapat
/area-layanan/surabaya
/artikel/cara-memilih-snack-box
```

### Performa

Target:

- LCP di bawah 2,5 detik;
- CLS di bawah 0,1;
- INP di bawah 200 ms;
- gambar hero teroptimasi;
- JavaScript seminimal mungkin;
- font dimuat efisien;
- tidak memakai video latar otomatis.

---

## 16. Pelacakan Konversi

Ukur minimal:

- klik tombol WhatsApp;
- klik nomor telepon;
- tampilan detail produk;
- pemilihan paket;
- pengiriman form;
- sumber kampanye;
- area kota;
- produk yang paling sering dilihat.

Jangan hanya mengukur jumlah pengunjung. Fokus pada tindakan yang mengarah ke pemesanan.

---

## 17. Token Desain Awal

```css
:root {
  --color-brand-brown: #4b2e1a;
  --color-brand-gold: #c49a4a;
  --color-brand-cream: #f7f3ea;
  --color-surface-white: #fffdf9;
  --color-text-primary: #2a1a10;
  --color-text-secondary: #6f625a;
  --color-border-soft: #e5d9c8;
  --color-success: #4f6b4f;
  --color-error: #9a3f32;

  --font-heading: "Cormorant Garamond", Georgia, serif;
  --font-body: "Plus Jakarta Sans", Arial, sans-serif;

  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;

  --shadow-soft: 0 10px 30px rgba(75, 46, 26, 0.08);

  --container-max: 1200px;
  --space-section-desktop: 96px;
  --space-section-mobile: 64px;
}
```

---

## 18. Penamaan Aset

Gunakan nama file yang konsisten:

```text
logo-lely-cake-horizontal.svg
logo-lely-cake-vertikal.svg
logo-lely-cake-terang.svg
favicon-lely-cake.svg
produk-onde-onde-01.webp
produk-marble-cake-01.webp
paket-rapat-01.webp
tentang-proses-produksi-01.webp
```

Hindari nama seperti:

```text
IMG_1234.jpg
final-final-logo.png
foto baru 2.png
```

---

## 19. Larangan Desain

Jangan menggunakan:

- latar hitam pekat sebagai gaya utama;
- emas metalik berlebihan;
- banyak jenis font;
- animasi mencolok;
- navigasi kompleks;
- pop-up langsung saat halaman dibuka;
- slider otomatis;
- teks panjang tanpa struktur;
- foto stok yang tidak mencerminkan Lely Cake;
- tombol dengan istilah tidak jelas;
- elemen visual yang meniru marketplace besar.

---

## 20. Kriteria Selesai

Sebuah halaman dianggap selesai bila:

- tujuan halaman jelas;
- tombol utama terlihat;
- informasi penting mudah ditemukan;
- seluruh teks memakai Bahasa Indonesia;
- tampilan seluler sudah diuji;
- kontras dan ukuran teks aman;
- foto teroptimasi;
- tautan WhatsApp bekerja;
- tidak ada informasi palsu atau placeholder;
- desain konsisten dengan warna dan tipografi merek;
- halaman terasa elegan, simpel, hangat, dan terpercaya.
