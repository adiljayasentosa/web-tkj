# Audit sumber `index.html`

## Temuan sumber

1. Satu file memuat struktur HTML, CSS, data statis, state, rendering, dan event handler JavaScript.
2. Data siswa, jadwal, piket, organisasi kelas, dan status presensi berada pada objek/array JavaScript.
3. Presensi dan tugas disimpan di `localStorage`; tidak ada sinkronisasi lintas browser/perangkat.
4. Login admin menggunakan username/password yang ditanam di JavaScript dan status admin disimpan pada `localStorage`. Ini bukan autentikasi aman.
5. Hak akses hanya berupa pengaturan tampilan tombol. Pengguna dapat mengubah localStorage atau menjalankan JavaScript dari DevTools.
6. Presensi menggunakan nama siswa sebagai kunci data. Nama yang berubah dapat memecah riwayat presensi.
7. Rekap sumber memakai jumlah hari tercatat sebagai denominator, termasuk hari ketika sebagian siswa belum ditandai; persentase bisa menyesatkan.
8. Pemilihan semester sumber memakai tahun kalender berjalan dan pemisahan bulan sederhana, bukan tahun ajaran yang ditentukan secara eksplisit.
9. Notifikasi sumber bergantung pada Notification API dan pemeriksaan saat halaman berjalan. Tidak menjamin notifikasi terkirim saat situs ditutup.
10. Belum ada Firebase SDK/config, security rules, manifest PWA, atau service worker dalam file sumber ini.
11. Beberapa nama petugas piket merupakan nama panggilan dan tidak selalu cocok persis dengan nama di daftar siswa. Data dipertahankan dan perlu diverifikasi pemilik kelas.

## Perubahan tahap 1

- CSS dipisah ke `css/`.
- Data kelas dipisah ke `js/data/class-data.js`.
- Fitur dipisah ke `js/modules/` dan dashboard role ke `js/dashboards/`.
- Login hardcoded dihapus dari versi berjalan. Sebagai gantinya, ada pratinjau role yang jelas diberi label demo, bukan autentikasi.
- Presensi, tugas, kas, tema, dan ekspor memakai localStorage dengan namespace baru `xitkj_v2_` agar tidak menimpa data lama secara diam-diam.
- Rekap persentase dihitung dari status yang benar-benar tercatat per siswa.
- Firebase hanya scaffold, sesuai keputusan menunda integrasi sampai struktur file stabil.

## Belum diselesaikan

- Firebase Authentication, database, dan Security Rules.
- Pengaitan akun murid ke ID siswa yang stabil.
- Otorisasi yang ditegakkan backend; role preview client-side tidak aman.
- Notifikasi background/service worker dan PWA.
- Ekspor PDF.
- Pengujian browser manual menyeluruh dan uji akses adversarial.
