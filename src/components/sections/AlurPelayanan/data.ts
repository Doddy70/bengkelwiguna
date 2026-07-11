// ===========================================
// Alur Pelayanan Bengkel Wiguna - Data
// ===========================================

export interface AlurStep {
  id: number
  number: string
  title: string // PIC Role
  frameTitle?: string // Scene title for video/image (Step title)
  description: string[] // Bullet list of actions
  icon: string // Lucide icon name
  // Media (optional)
  image?: string
  gif?: string
  video?: string
  // Color accent
  color?: string
}

export const alurPelayananSteps: AlurStep[] = [
  {
    id: 1,
    number: "01",
    frameTitle: "Kustomer Datang & Konsultasi",
    title: "PIC : Workshop Controller",
    description: [
      "Menyambut Kustomer",
      "Menanyakan Kebutuhan & Keluhan",
      "Melakukan Initial Check Kendaraan",
      "Mencatat Keluhan Kustomer",
    ],
    icon: "Phone",
    video: "/videos/optimized/step-01.mp4",
    color: "#224297",
  },
  {
    id: 2,
    number: "01A",
    frameTitle: "Initial Inspection",
    title: "PIC : Chief Mechanics",
    description: [
      "Diagnosis Lebih Lanjut",
      "Membantu Troubleshooting",
      "Monitoring Kualitas Pekerjaan",
    ],
    icon: "Search",
    video: "/videos/optimized/step-01a.mp4",
    color: "#224297",
  },
  {
    id: 3,
    number: "02",
    frameTitle: "Pendaftaran & Data Entry",
    title: "PIC : Customer Services",
    description: [
      "Mencatat Data Kendaraan",
      "Melengkapi Profil Kustomer",
      "Mencatat Servis",
      "Membuat SPK Sementara",
    ],
    icon: "ClipboardList",
    video: "/videos/optimized/step-02.mp4",
    color: "#224297",
  },
  {
    id: 4,
    number: "03",
    frameTitle: "Pembuatan SPK & Estimasi",
    title: "PIC : Estimator",
    description: [
      "Membuat Estimasi Biaya (Jasa + Spare Parts)",
      "Approval ke Kustomer",
      "Menunggu Konfirmasi",
      "Info ke Kustomer tentang Fasilitas",
    ],
    icon: "ClipboardList",
    video: "/videos/optimized/step-03.mp4",
    color: "#224297",
  },
  {
    id: 5,
    number: "04",
    frameTitle: "Alokasi Pekerjaan & Spareparts",
    title: "PIC : Workshop Controller & Estimator",
    description: [
      "Memilih Mekanik",
      "Menyiapkan Spareparts",
      "Memastikan Kesiapan Area Kerja",
    ],
    icon: "Wrench",
    video: "/videos/optimized/step-04.mp4",
    color: "#224297",
  },
  {
    id: 6,
    number: "05",
    frameTitle: "Vehicle Services",
    title: "PIC : Teknisi",
    description: [
      "Teknisi mulai bekerja",
      "Gunakan spare part original",
      "Lakukan perbaikan sesuai SOP",
      "Update progress secara berkala",
    ],
    icon: "Wrench",
    video: "/videos/optimized/step-05.mp4",
    color: "#ffd900",
  },
  {
    id: 7,
    number: "05A",
    frameTitle: "Trouble Support & Diagnosis",
    title: "PIC : Chief Mechanics",
    description: [
      "Diagnosis Lebih Lanjut",
      "Membantu Troubleshooting",
      "Monitoring Kualitas Pekerjaan",
    ],
    icon: "Search",
    video: "/videos/optimized/step-05a.mp4",
    color: "#224297",
  },
  {
    id: 8,
    number: "06",
    frameTitle: "Quality Control & Test Drive",
    title: "PIC : Workshop Controller / Chief Estimator",
    description: [
      "Overall Checking Finalized",
      "Test Drive Kendaraan",
      "Memastikan Kualitas Servis",
    ],
    icon: "ShieldCheck",
    video: "/videos/optimized/step-06.mp4",
    color: "#224297",
  },
  {
    id: 9,
    number: "07",
    frameTitle: "Pembayaran & Penyerahan Kendaraan",
    title: "PIC : Cashier",
    description: [
      "Pembuatan Invoice",
      "Penjelasan Biaya Servis",
      "Konfirmasi Pembayaran",
      "Menyerahkan Kendaraan & Kunci",
    ],
    icon: "CreditCard",
    video: "/videos/optimized/step-07.mp4",
    color: "#224297",
  },
  {
    id: 10,
    number: "08",
    frameTitle: "Follow Up After Service",
    title: "PIC : Marketing & Customer Associate",
    description: [
      "Menghubungi Kustomer H+2",
      "Memastikan Kepuasan",
      "Menangani Feedback & Komplain",
    ],
    icon: "Phone",
    video: "/videos/optimized/step-08.mp4",
    color: "#ffd900",
  },
]

// Section metadata
export const alurPelayananMeta = {
  title: "Alur Pelayanan Bengkel Wiguna",
  subtitle: "Proses service transparan dan profesional",
  description:
    "Kami memberikan pelayanan terbaik dengan alur yang jelas dan transparan. Mulai dari konsultasi hingga kendaraan Anda selesai diperbaiki.",
  cta: {
    text: "Booking Sekarang",
    whatsapp: "6287817773888",
    message: "Halo, saya ingin booking service di Bengkel Wiguna",
  },
}
