<div align="center">

# 📊 React Inventory Management System

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.1.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![MUI](https://img.shields.io/badge/Material_UI-5.15-007FFF?style=for-the-badge&logo=mui&logoColor=white)
![SQL Server](https://img.shields.io/badge/SQL_Server-2022-CC2927?style=for-the-badge&logo=microsoftsqlserver&logoColor=white)
![Nivo](https://img.shields.io/badge/Nivo_Charts-0.84-FF6B6B?style=for-the-badge)

**Aplikasi dashboard admin berbasis web untuk manajemen inventaris aset dengan sistem multi-role, laporan otomatis, dan visualisasi data interaktif.**

</div>

---

## ✨ Fitur Unggulan

| Fitur | Deskripsi |
|-------|-----------|
| 🏠 **Dashboard** | Overview statistik & metrik utama secara real-time |
| 📦 **Inventory Management** | Kelola data aset & non-aset |
| ✅ **Approval System** | Alur persetujuan multi-level |
| 🔄 **Mutasi Aset** | Pencatatan mutasi & perpindahan aset |
| 📋 **Stock Opname** | Pengecekan & rekonsiliasi stok fisik |
| 🗃️ **DUPAT** | Manajemen daftar usulan penghapusan aset |
| 📅 **Kalender** | Penjadwalan & event management |
| 👥 **Manajemen Tim** | Kelola data anggota & user |
| 📊 **Visualisasi Data** | Bar, Pie, Line, Geography chart (Nivo + ApexCharts) |
| 📄 **Export Laporan** | Export data ke PDF & Excel |
| 🌙 **Dark / Light Mode** | Tema gelap & terang |

---

## 👤 Multi-Role Access

| Role | Akses |
|------|-------|
| 🛡️ **Admin** | Full akses semua fitur & dashboard utama |
| 🔧 **Koordinator UPT** | Dashboard, inventory, approval, mutasi, stock opname |
| 🔬 **PIC Lab** | Inventory lab, stock opname lab |
| 📦 **PIC Non-Asset** | Inventory non-aset, stock opname non-aset |

---

## 🛠️ Tech Stack

- **Framework:** React 18 + Vite
- **UI Library:** Material UI (MUI) v5
- **Charts:** Nivo, ApexCharts, Plotly.js
- **Routing:** React Router DOM v6
- **Form:** Formik + Yup
- **Calendar:** FullCalendar
- **PDF Export:** jsPDF + jsPDF-AutoTable
- **Excel Export:** XLSX
- **Database:** Microsoft SQL Server
- **Sidebar:** React Pro Sidebar

---

## 🚀 Cara Menjalankan

### Prerequisites
- Node.js 18+
- npm / yarn
- Microsoft SQL Server (running)

### Setup & Run
```bash
# Clone repo
git clone https://github.com/Zaldigengs32/react-inventory-management-system.git
cd react-inventory-management-system

# Install dependencies
npm install

# Jalankan development server
npm run dev
```

Akses di browser: `http://localhost:5173`

### Build Production
```bash
npm run build
```

---

## 📁 Struktur Project

```
src/
├── assets/          # Gambar, logo, foto produk
├── components/      # Komponen reusable (Header, StatBox, Charts, dll)
├── data/            # Mock data & data statis
├── scenes/          # Halaman-halaman utama
│   ├── dashboard/       # Dashboard admin
│   ├── dashboard-koor-upt/
│   ├── inventory/       # Manajemen inventaris
│   ├── approval/        # Sistem approval
│   ├── mutation/        # Mutasi aset
│   ├── stock-opname/    # Stock opname
│   ├── dupat/           # DUPAT
│   ├── login/           # Halaman login
│   ├── team/            # Manajemen tim
│   └── ...
├── services/        # API service & business logic
├── App.jsx
├── Router.jsx
├── theme.js         # Konfigurasi tema MUI
└── main.jsx
```

---

## 👥 Tim Pengembang

> Dibuat dengan ❤️ oleh **Kelompok 3**

---

## 📄 License

Project ini menggunakan lisensi [MIT](LICENSE).

---

<div align="center">
<sub>⭐ Kalau project ini bermanfaat, jangan lupa kasih bintang!</sub>
</div>
