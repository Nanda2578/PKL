
# PRODUCT REQUIREMENTS DOCUMENT (PRD)

# Website MamaMatcha

**Versi Dokumen:** 1.0

**Tanggal:** Juli 2026

**Product Owner:** Tim MamaMatcha

**Project:** Website Pemesanan Minuman Matcha "MamaMatcha"

---

# 1. Project Overview

## 1.1 Nama Produk

Website MamaMatcha

## 1.2 Latar Belakang

MamaMatcha merupakan usaha minuman berbasis matcha yang membutuhkan media digital untuk memudahkan pelanggan memperoleh informasi produk, melakukan pemesanan, mengetahui promo terbaru, serta meningkatkan brand awareness.

Saat ini penjualan masih mengandalkan media sosial sehingga pelanggan harus menghubungi admin secara manual. Website akan menjadi pusat informasi sekaligus sistem pemesanan online.

---

# 2. Problem Statement

Permasalahan yang dihadapi:

* Informasi produk masih tersebar di media sosial.
* Pemesanan dilakukan melalui chat sehingga membutuhkan waktu lama.
* Pelanggan sulit melihat seluruh menu beserta harga.
* Tidak terdapat sistem promo otomatis.
* Tidak ada histori pemesanan pelanggan.
* Admin masih mencatat pesanan secara manual.

---

# 3. Goals

Website dibuat untuk:

* Mempermudah pelanggan melakukan pemesanan.
* Menampilkan seluruh katalog produk.
* Mengurangi proses pemesanan manual.
* Mempermudah pengelolaan pesanan oleh admin.
* Meningkatkan penjualan.
* Meningkatkan pengalaman pengguna (User Experience).

---

# 4. Success Metrics

Target keberhasilan:

* Waktu pemesanan kurang dari 3 menit.
* Minimal 80% transaksi dilakukan melalui website.
* Bounce Rate di bawah 40%.
* Tingkat konversi minimal 15%.
* Kepuasan pelanggan minimal 4,5/5.
* Loading website kurang dari 3 detik.

---

# 5. Stakeholders

| Role                | Tanggung Jawab                    |
| ------------------- | --------------------------------- |
| Product Owner       | Menentukan kebutuhan produk       |
| UI/UX Designer      | Mendesain tampilan website        |
| Front-End Developer | Mengembangkan antarmuka website   |
| Back-End Developer  | Mengembangkan server dan database |
| QA Tester           | Menguji sistem                    |
| Admin MamaMatcha    | Mengelola produk dan pesanan      |
| Customer            | Menggunakan website               |

---

# 6. Target User

## Primary User

* Pelajar
* Mahasiswa
* Karyawan
* Pecinta Matcha

Usia:

15–35 tahun

## Secondary User

* Keluarga
* Wisatawan
* Reseller

---

# 7. User Persona

### Persona 1

Nama: Nanda

Usia: 20 Tahun

Status: Mahasiswa

Kebutuhan:

* Ingin membeli minuman dengan cepat.
* Bisa melihat harga sebelum membeli.
* Bisa membayar secara online.

Pain Point:

* Harus chat admin.
* Menunggu balasan lama.
* Sulit melihat semua menu.

---

# 8. User Journey

Customer membuka website

↓

Melihat menu

↓

Memilih produk

↓

Menambahkan topping

↓

Menentukan jumlah

↓

Checkout

↓

Pembayaran

↓

Pesanan diproses

↓

Pesanan selesai

---

# 9. Sitemap

Home

├── Menu

├── Promo

├── Tentang Kami

├── Artikel

├── FAQ

├── Contact

├── Login

├── Register

├── Cart

├── Checkout

├── Profile

└── Admin Dashboard

---

# 10. Functional Requirements

## Home

Fitur:

* Banner
* Promo
* Produk populer
* Testimoni
* Footer

---

## Login

Pengguna dapat:

* Login Email
* Login Google
* Lupa Password

---

## Register

Pengguna dapat membuat akun menggunakan:

* Nama
* Email
* Password
* Nomor HP

---

## Menu

Menampilkan:

* Foto Produk
* Nama Produk
* Harga
* Deskripsi
* Rating
* Tombol Beli

---

## Detail Produk

Menampilkan:

* Gambar
* Harga
* Komposisi
* Level Gula
* Level Es
* Pilihan Ukuran
* Pilihan Topping
* Stok

---

## Cart

Fitur:

Tambah produk

Hapus produk

Edit jumlah

Hitung subtotal otomatis

---

## Checkout

Input:

Nama

Alamat

Nomor HP

Metode Pembayaran

Catatan

Voucher

---

## Payment

Metode:

QRIS

Transfer Bank

E-Wallet

COD

---

## Order Tracking

Status:

Menunggu Pembayaran

↓

Diproses

↓

Sedang Dibuat

↓

Siap Diambil

↓

Selesai

---

## Customer Profile

Menampilkan:

Riwayat Pesanan

Alamat

Wishlist

Voucher

Edit Profil

---

## Contact

WhatsApp

Instagram

Maps

Email

---

# 11. Admin Features

Dashboard

Kelola Produk

Kelola Promo

Kelola Pesanan

Kelola Customer

Kelola Banner

Kelola Artikel

Kelola Voucher

Laporan Penjualan

Export Excel

---

# 12. Non Functional Requirements

## Performance

Loading <3 detik

Support 1000 user bersamaan

Response API <500 ms

---

## Security

HTTPS

JWT Authentication

Password Hash

Role Management

Captcha Login

---

## Compatibility

Chrome

Firefox

Safari

Edge

Android

iPhone

Tablet

Desktop

---

## Availability

Uptime

99%

---

# 13. Database

Table User

* id
* nama
* email
* password
* phone

Table Product

* id
* nama
* harga
* stok
* kategori
* gambar

Table Order

* id
* user_id
* total
* status
* tanggal

Table Order Detail

* id
* order_id
* product_id
* qty

Table Promo

* id
* nama
* diskon

---

# 14. API Requirement

GET /products

POST /login

POST /register

POST /checkout

GET /orders

GET /profile

PUT /profile

DELETE /cart

---

# 15. UI Requirement

Dominan warna:

Hijau Matcha

Putih

Cream

Font:

Poppins

Button:

Rounded

Responsive

Dark Mode (Opsional)

---

# 16. Wireframe

Homepage

Navbar

↓

Banner

↓

Kategori

↓

Best Seller

↓

Promo

↓

Testimoni

↓

Footer

---

Product Page

Filter

↓

Grid Produk

↓

Pagination

---

Checkout

Alamat

↓

Ringkasan Order

↓

Pembayaran

↓

Konfirmasi

---

# 17. Business Rules

* Customer wajib login sebelum checkout.
* Voucher hanya berlaku satu kali.
* Pesanan otomatis dibatalkan setelah 30 menit jika belum dibayar.
* Produk yang habis tidak dapat dipesan.
* Admin dapat mengubah status pesanan.

---

# 18. Acceptance Criteria

Home berhasil tampil.

Login berhasil.

Register berhasil.

Checkout berhasil.

Pembayaran berhasil.

Admin dapat mengubah status pesanan.

Customer menerima notifikasi.

Riwayat pesanan tersimpan.

---

# 19. Timeline

Analisis Kebutuhan: 1 minggu

Desain UI/UX: 2 minggu

Front-End Development: 3 minggu

Back-End Development: 3 minggu

Testing: 2 minggu

Deployment: 1 minggu

Total estimasi: 12 minggu.

---

# 20. Future Development

* Program Membership.
* Sistem Poin dan Reward.
* Integrasi Loyalty Card.
* Live Chat Customer Service.
* AI Recommendation Menu.
* Multi Cabang.
* Integrasi dengan aplikasi mobile.
* Dashboard analitik penjualan.

---

# 21. Lampiran

* Wireframe UI.
* Desain Figma.
* ERD Database.
* Flowchart Sistem.
* Use Case Diagram.
* Sequence Diagram.
* Activity Diagram.
* API Documentation.
