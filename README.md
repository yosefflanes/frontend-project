# 🎓 EduPro - Modern Learning Management System (LMS)

**EduPro** adalah platform Learning Management System (LMS) modern yang dirancang untuk memberikan pengalaman belajar interaktif bagi institusi pendidikan tinggi dan korporasi. Proyek frontend ini dibangun mengutamakan skalabilitas kode, performa tinggi, serta antarmuka (UI/UX) yang intuitif dan mudah diakses.

🌐 **Live Demo:** [https://frontend-lms-eosin.vercel.app/](https://frontend-lms-eosin.vercel.app/)

---

## ✨ Fitur Utama

- **🎨 Modern & Accessible UI/UX**: Desain *clean* berfokus pada keterbacaan (*readability*) menggunakan palet warna EdTech modern.
- **🧱 Arsitektur Atomic Design**: Komponen terstruktur dengan rapi untuk kemudahan pemeliharaan dan *reusability* (Atoms, Molecules, Organisms, Templates, Pages).
- **🔀 Smart Routing & Layout**: Navigasi responsif menggunakan `React Router v6` dengan integrasi `Outlet` untuk layout konsisten.
- **🔒 Protected Routes & Dynamic Active State**:
  - Penanganan akses rute berbasis status autentikasi (`AuthContext`).
  - Penanganan tampilan 404 (Not Found) dengan struktur *Navbar* yang tetap stabil.
  - Indikator halaman aktif yang dinamis menggunakan fungsi *callback* `isActive` dari `NavLink`.
- **📱 Multi-Platform Responsive**: Tampilan teroptimasi untuk perangkat Desktop, Tablet, hingga Mobile.

---

## 🛠️ Tech Stack

- **Core Framework:** [React.js](https://react.dev/) (Vite)
- **Routing:** [React Router v6](https://reactrouter.com/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [Material-UI (MUI)](https://mui.com/) & [Lucide Icons](https://lucide.dev/)
- **State Management:** React Context API (`AuthContext`)
- **Deployment:** [Vercel](https://vercel.com/)

---

## 📁 Struktur Folder (Atomic Design Pattern)

Proyek ini menerapkan **Atomic Design System** untuk menjaga keteraturan komponen skala besar:

```text
src/
├── assets/          # Static assets (images, icons, fonts)
├── context/         # React Context (AuthContext, ThemeContext, dll)
├── components/
│   ├── atoms/       # Elemen terkecil (Button, Badge, Input, Typography)
│   ├── molecules/   # Gabungan atom (CourseCard, SearchBar, NavItem)
│   ├── organisms/   # Gabungan molekul (Navbar, CourseGrid, Footer, HeroSection)
│   └── templates/   # Layout struktur halaman (MainLayout, PublicLayout)
├── pages/           # Halaman utama tempat menyuntikkan data (Home, Courses, Dashboard, NotFound)
├── routes/          # Konfigurasi rute & ProtectedRoute
├── App.jsx          # Root component & Routing Provider
└── main.jsx         # Entry point
```

## 🚀 Cara Menjalankan Proyek Secara Lokal

Ikuti petunjuk langkah demi langkah di bawah ini untuk mengkloning dan menjalankan proyek **EduPro Frontend** di lingkungan lokal komputer Anda.

### 📋 Prasyarat Sistem

Sebelum memulai, pastikan Anda telah menginstal perangkat lunak berikut di komputer Anda:
- **Node.js** (Versi `18.x` atau yang lebih baru)
- **npm** (Versi `9.x` atau yang lebih baru) atau **yarn** / **pnpm**
- **Git**

---

### 📥 Langkah-Langkah Instalasi

#### 1. Clone Repository
Salin repository ini dari GitHub ke komputer lokal Anda menggunakan perintah git:
```bash
git clone https://github.com/yosefflanes/frontend-project
cd NAMA_REPOSITORY
npm install
npm run dev
