# Katalog Tanaman Hias - Pemrograman Mobile

* **Nama:** Gladys Huang
* **NIM:** 253303620001
* **Tema yang Dipilih:** Skenario A - Kartu Produk Toko Online (Katalog Tanaman Hias)

## Pohon Komponen (Component Tree)
Struktur hierarki komponen yang digunakan di dalam aplikasi ini:
```text
App (Functional Component Utama)
 └── SafeAreaView
      └── ScrollView
           ├── Header ("Katalog Mini Tanaman Hias")
           ├── KartuProduk (Monstera Deliciosa)
           ├── KartuProduk (Lidah Mertua (Sansevieria))
           ├── KartuProduk (Sirih Gading (Golden Pothos))
           └── KartuProduk (Kaktus Mini)
```
## Screenshot Aplikasi di HP Fisik
Berikut adalah tampilan antarmuka aplikasi saat dijalankan menggunakan aplikasi *Expo Go* di perangkat seluler:

<img width="590" height="1280" alt="katalogminitanamanhias" src="https://github.com/user-attachments/assets/6e94911c-a892-4d43-a435-d824cf8b40e0" />
<img width="738" height="1600" alt="katalogminitanamanhias2" src="https://github.com/user-attachments/assets/e933b7cf-8b1d-4a18-a05f-3b310a8f2263" />

## Cara Menjalankan Proyek
Ikuti langkah-langkah berikut untuk menjalankan proyek ini di komputer lokal:
1. Clone repository ini atau unduh kodenya ke komputer.
2. Buka terminal pada folder proyek, lalu install semua dependensi yang dibutuhkan dengan perintah:
   ```bash
   npm install
3. Jalankan aplikasi menggunakan Expo:
   ```bash
   npx expo start
4. Scan QR code yang muncul di terminal menggunakan aplikasi Expo Go di HP kamu (pastikan HP dan komputer berada dalam satu jaringan WiFi yang sama).

## Yang Saya Pelajari
Melalui proyek pembuatan aplikasi katalog tanaman ini, saya belajar bagaimana menyusun tata letak antarmuka seluler menggunakan komponen dasar React Native seperti View, Text, dan Image. Saya juga memahami pentingnya memecah kode menjadi komponen yang dapat digunakan kembali (reusable components), seperti membuat komponen KartuProduk dan Header secara terpisah agar kode menjadi lebih rapi dan mudah dirawat. Selain itu, saya mempraktikkan cara mengelola manajemen versi kode menggunakan Git dengan membuat beberapa commit yang bermakna serta mengunggahnya ke GitHub dengan aman.

## Tautan Expo Snack
https://snack.expo.dev/@gladys_expo/katalog-tanaman
