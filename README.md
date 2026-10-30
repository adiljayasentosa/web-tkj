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

## Deploy ke Vercel

Proyek ini dapat di-deploy sebagai **frontend statis + Vercel Function**.
Vercel tidak menjalankan `server.js` sebagai proses Express yang terus hidup;
endpoint health check produksi berada di `api/health.js`.

1. Ekstrak ZIP, lalu unggah folder `kelas-xi-tkj-v3` ke repository GitHub.
2. Buka https://vercel.com/new dan impor repository tersebut.
3. Pada Project Settings saat impor:
   - Framework Preset: **Other**
   - Root Directory: `./` (folder yang berisi `vercel.json`)
   - Build Command: kosong / **Override** dimatikan
   - Output Directory: kosong / **Override** dimatikan
   - Install Command: biarkan otomatis atau kosong
4. Klik **Deploy**.
5. Setelah selesai, buka `https://nama-proyek.vercel.app/`.
6. Tes backend function melalui `https://nama-proyek.vercel.app/api/health`.

### Konfigurasi Firebase

Isi `js/services/firebase-config.js` dengan konfigurasi aplikasi Web Firebase
sebelum deploy. Jika file ini diabaikan Git oleh `.gitignore`, buat file tersebut
di repository atau ubah aturan ignore untuk mengizinkan file konfigurasi Web.
Firebase Web API key bukan kredensial server rahasia. Jangan pernah commit
service-account private key.

### Batasan versi deploy ini

- Halaman dan aset frontend dapat di-host di Vercel.
- `/api/health` berjalan sebagai Vercel Serverless Function.
- `server.js` tetap untuk menjalankan Express secara lokal.
- Database masih **belum terhubung**. Data yang saat ini disimpan di localStorage
  tidak otomatis tersinkron antar pengguna/perangkat.
- Login role di UI masih pratinjau, bukan autentikasi produksi. Aktifkan Firebase
  Authentication dan terapkan Firestore Security Rules sebelum memakai data asli.
- Jangan menganggap endpoint health sebagai bukti bahwa database sudah aktif.

### Catatan perbaikan konfigurasi Vercel

`vercel.json` tidak menetapkan `functions.runtime` secara manual. Vercel
otomatis mendeteksi runtime Node.js untuk file JavaScript di folder `api/`.
Ini menghindari error `invalid_function_runtime` akibat nilai runtime yang
tidak sesuai dengan format runtime Vercel.
