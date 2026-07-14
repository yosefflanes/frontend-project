# EduPro - User Management & Authentication System (Frontend)

EduPro adalah aplikasi web *User Management* dan sistem otentikasi berbasis *Single Page Application* (SPA). Aplikasi ini dibangun menggunakan **React 19** dan **Vite**, serta diintegrasikan dengan API backend **Laravel** menggunakan **Axios** untuk pengelolaan data pengguna yang dinamis.

---

## 🚀 Fitur Utama

- **Sistem Otentikasi Sesi**: Registrasi, Login, dan Logout menggunakan token API (`localStorage`).
- **Sistem Proteksi Rute (ProtectedRoute)**: Mengunci rute internal khusus (seperti `/dashboard` dan manajemen user) agar tidak bisa diakses oleh pengunjung yang belum melakukan login.
- **Manajemen Pengguna Terpaginasi**: Menampilkan daftar pengguna terdaftar dengan sistem paginasi dinamis (membatasi 10 data per halaman) langsung dari server database.
- **Detail Informasi Profil**: Menampilkan data spesifik setiap pengguna (ID, Nama, Email, dan Role) secara aman berdasarkan parameter ID rute `/users/:id`.
- **Tata Letak Responsif & Fleksibel (Sticky Footer)**: Desain modern menggunakan Flexbox yang memastikan komponen *footer* selalu berada tepat di dasar layar browser meskipun data sedang kosong atau memuat (*loading*).

---

## 🛠️ Spesifikasi Teknologi (Tech Stack)

### Core & Navigation
- **React v19.2.7**
- **Vite v8.1.1** (Build Tool super cepat)
- **React Router DOM v7.18.1** (Sistem Routing)
- **Axios v1.18.1** (Klien HTTP untuk konsumsi API)

### Desain & Antarmuka (UI)
- **Tailwind CSS v4.3.2** (Utility-first CSS Framework)
- **Material-UI (MUI v9.2.0)** (Komponen UI fungsional)
- **React Icons v5.7.0** (Pustaka Ikon pendukung)

---

## 📂 Struktur Direktori Proyek

```text
src/
├── api/
│   └── client.js          # Konfigurasi dasar Axios (baseURL & request interceptor)
├── components/
│   ├── ProtectedRoute.jsx # Guard rute terproteksi (dashboard/users)
│   ├── Navbar.jsx         # Bar navigasi global
│   └── FooterSection.jsx  # Footer global dengan layout Flexbox
├── context/
│   └── AuthContext.jsx    # State global otentikasi pengguna (isLoggedIn, loading, user)
├── pages/
│   ├── Home.jsx           # Landing page utama
│   ├── Login.jsx          # Halaman masuk sistem
│   ├── Register.jsx       # Halaman pendaftaran pengguna baru
│   ├── Dashboard.jsx      # Halaman utama setelah masuk
│   ├── Users.jsx          # Daftar manajemen user terpaginasi (10 item)
│   └── UserDetail.jsx     # Tampilan detail informasi data user (Read-only)
├── App.jsx                # Router utama dan konfigurasi layout Flexbox
└── main.jsx               # Entry point aplikasi