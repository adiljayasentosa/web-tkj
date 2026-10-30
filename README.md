# Kelas XI TKJ — v3.1 (Node.js + Express)

Portal kelas berbasis HTML, CSS, dan JavaScript ES Modules dengan server lokal Node.js + Express.

## Persyaratan

- Node.js 20 atau lebih baru (disarankan versi LTS yang masih didukung)
- npm (terpasang bersama Node.js)

Periksa instalasi:

```powershell
node --version
npm --version
```

## Menjalankan aplikasi di Windows PowerShell

1. Ekstrak ZIP ini ke folder baru.
2. Buka PowerShell di folder yang berisi `package.json` dan `server.js`.
3. Instal dependensi:

```powershell
npm install
```

4. Jalankan server:

```powershell
npm start
```

5. Buka `http://localhost:3000`.
6. Untuk memastikan backend berjalan, buka `http://localhost:3000/api/health`.

Untuk mode development dengan restart otomatis ketika file server berubah:

```powershell
npm run dev
```

Hentikan server dengan `Ctrl+C`.

## Struktur utama

- `server.js` — server Express, static frontend, dan endpoint health check.
- `index.html` — halaman frontend.
- `css/` — tema, gaya utama, dan gaya dashboard.
- `js/` — dashboard, modul fitur, data demo, serta utilitas.
- `docs/` — catatan audit dan salinan HTML sumber awal.

## Status backend

Sudah tersedia server Node.js + Express dan endpoint `GET /api/health`. Endpoint API lain sengaja belum dibuat sebelum skema database dan aturan akses disepakati.

Belum tersedia:

- PostgreSQL dan Prisma
- Login sungguhan, session/token, serta RBAC server-side
- Endpoint CRUD yang terhubung ke database
- Migrasi data dari `localStorage`
- Pengujian keamanan dan deployment produksi

Mode pemilihan role di frontend masih **pratinjau UI**, bukan autentikasi. Jangan gunakan untuk menyimpan data siswa sungguhan atau mengekspos server ke internet sebelum autentikasi, otorisasi, validasi input, database, dan pengujian keamanan selesai.

## Pemeriksaan sintaks

```powershell
npm run check
```

## Menyiapkan konfigurasi Firebase

1. Buka Firebase Console dan pilih project Kelas XI TKJ.
2. Masuk ke **Project settings → General → Your apps**. Pilih atau buat aplikasi Web.
3. Salin konfigurasi Firebase SDK.
4. Isi placeholder pada `js/services/firebase-config.js`: `apiKey`, `authDomain`, `projectId`, `storageBucket`, `messagingSenderId`, dan `appId`.
5. Aktifkan Firebase Authentication dan buat Cloud Firestore di Firebase Console.
6. Pasang Firestore Security Rules sebelum memasukkan data sungguhan.

`js/services/firebase-config.example.js` adalah template. File `js/services/firebase-config.js` diabaikan oleh Git agar konfigurasi lokal tidak ikut ter-commit. Firebase Web API key bukan password rahasia; jangan pernah menaruh service-account private key di frontend.

**Status:** file ini baru menyediakan tempat mengisi konfigurasi Firebase. Integrasi SDK, autentikasi, dan koneksi Firestore belum diaktifkan oleh template ini.
