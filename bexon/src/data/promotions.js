/**
 * Database Promosi Bengkel Wiguna - Local Single Source of Truth
 * Berisi 10 promosi dengan konten copywriting yang diselaraskan dengan SOP resmi Bengkel Wiguna.
 */

export const promotions = [
  {
    id: 1,
    slug: "paket-oli-komplit",
    title: "Mesin Halus & Tarikan Enteng Seketika",
    originalTitle: "Promo Oli Komplit",
    category: "Ganti Oli",
    badge: "Best Seller",
    price: "Rp 290.000",
    duration: "Promo Berjalan",
    description: "Paket ganti oli mesin premium lengkap dengan filter oli baru dan pembersihan filter udara untuk performa maksimal.",
    fullDescription: "Paket Oli Komplit adalah solusi lengkap dan praktis untuk menjaga kebersihan ruang bakar serta perputaran mesin mobil Anda. Dirancang berdasarkan SOP ketat Bengkel Wiguna guna menekan kebisingan mesin, mengoptimalkan konsumsi BBM, dan memberikan perlindungan gesekan terbaik.",
    features: [
      "Penggantian Oli Mesin Premium (maks. 4 Liter) & cek ring baut oli",
      "Pemasangan filter oli baru (seal karet dilumasi & dikencangkan ± 3/4 putaran)",
      "Pembersihan Filter Udara Mesin menggunakan udara bertekanan",
      "Pemeriksaan level oli lewat dipstick pasca mesin menyala 30-60 detik",
      "QC Akhir: Pemasangan gantungan kartu oli baru & area mesin bersih bebas kebocoran"
    ],
    includes: "Oli Premium, Filter Oli, Jasa Mekanik",
    image: "/images/promosi/oli-komplit.jpg"
  },
  {
    id: 2,
    slug: "paket-siaga-1",
    title: "Perjalanan Aman Tanpa Cemas Mogok",
    originalTitle: "Paket Siaga 1",
    category: "Paket Servis",
    badge: "Proteksi Dasar",
    price: "Rp 150.000",
    duration: "Promo Berjalan",
    description: "Proteksi dasar berkendara dengan checkup mesin komprehensif, cek rem, dan pengecekan cairan penting.",
    fullDescription: "Paket Siaga 1 dirancang khusus bagi Anda yang mengutamakan keamanan perjalanan keluarga. Pengecekan 15 titik vital memastikan mobil dalam kondisi prima dan terhindar dari risiko mogok mendadak di jalan sesuai prosedur walkaround check kami.",
    features: [
      "Sambutan 5S ramah & walkaround check awal (lecet, ban, BBM, barang bawaan)",
      "Pengecekan Komprehensif 15 Titik Vital di atas jack stand secara aman",
      "Pemeriksaan Sistem Rem Depan & Belakang secara visual & fungsi",
      "Pemeriksaan Ketinggian & Kualitas Cairan Mesin (Oli, Coolant, Minyak Rem)",
      "Pengecekan Voltase Aki & Sistem Pengisian Alternator"
    ],
    includes: "Inspeksi 15 Titik, Cek Rem & Kolong",
    image: "/images/promosi/paket-siaga-1.jpg"
  },
  {
    id: 3,
    slug: "paket-siaga-2",
    title: "Kembalikan Performa Mobil Seperti Baru",
    originalTitle: "Paket Siaga 2",
    category: "Paket Servis",
    badge: "Paling Populer",
    price: "Rp 350.000",
    duration: "Promo Berjalan",
    description: "Paket perawatan menengah kombinasi tune-up mesin ringan dan gurah carbon clean untuk tarikan responsif.",
    fullDescription: "Paket Siaga 2 adalah kombinasi ideal antara tune-up mesin standar dan pembersihan kerak karbon di ruang bakar (gurah mesin). Sangat efektif menghilangkan gejala mesin ngelitik (knocking) dan mengembalikan tenaga yang loyo.",
    features: [
      "Pengecekan kelistrikan & aki kendaraan sebelum pengerjaan dimulai",
      "Gurah Carbon Clean via lubang busi (15-30 ml cairan per silinder pada piston BDC)",
      "Perendaman cairan carbon clean selama 20-30 menit untuk melunakkan kerak",
      "Penyedotan vakum ruang bakar & semprot angin kompresor hingga benar-benar kering",
      "Pembersihan busi manual & throttle body, serta test drive perbaikan"
    ],
    includes: "Tune-Up, Carbon Clean, Jasa Mekanik",
    image: "/images/promosi/paket-siaga-2.jpg"
  },
  {
    id: 4,
    slug: "paket-siaga-3",
    title: "Servis Lengkap Premium, Mobil Prima Total",
    originalTitle: "Paket Siaga 3",
    category: "Paket Servis",
    badge: "Paling Lengkap",
    price: "Rp 650.000",
    duration: "Promo Berjalan",
    description: "Paket terlengkap mencakup tune-up, gurah mesin, servis rem 4 roda, dan penggantian filter untuk perlindungan maksimal.",
    fullDescription: "Paket Siaga 3 adalah paket perawatan kasta tertinggi untuk peremajaan menyeluruh. Kami membersihkan tumpukan kerak karbon di ruang bakar sekaligus melakukan servis pengereman di keempat roda untuk memastikan kenyamanan berkendara yang stabil dan aman.",
    features: [
      "Layanan Tune-Up & Gurah Carbon Clean komplit (perendaman 20-30 menit & vakum kering)",
      "Servis Rem Depan-Belakang (pembongkaran, pembersihan, & pelumasan pin caliper rem)",
      "Pengecekan Kaki-Kaki Manual & kolong mobil menyeluruh di atas jack stand",
      "QC 3-Steps eksklusif: Test drive dalam kota, test drive TOL RPM tinggi, & cek kolong pasca-servis",
      "Serah terima kendaraan bersih (interior/kemudi bebas gemuk & velg bersih dari residu)"
    ],
    includes: "Tune-Up Komplit, Carbon Clean, Servis Rem 4 Roda",
    image: "/images/promosi/paket-siaga-3.jpg"
  },
  {
    id: 5,
    slug: "paket-reset-ac",
    title: "Kabin Dingin Sejuk & Bebas Bau",
    originalTitle: "PAket Reset AC",
    category: "Servis AC",
    badge: "Udara Bersih",
    price: "Rp 250.000",
    duration: "Promo Berjalan",
    description: "Kembalikan kesegaran kabin dengan pembersihan evaporator, kondensor, isi freon baru, dan sterilisasi anti-bakteri.",
    fullDescription: "Paket Reset AC mengembalikan kesegaran dan kedinginan AC mobil Anda secara optimal sesuai SOP pendinginan kabin. Menggunakan metode pembersihan modern dan fogging disinfektan untuk membunuh kuman, jamur, serta bau tidak sedap di dalam kabin.",
    features: [
      "Pengukuran tekanan dengan Manifold Gauge (Low: 25-45 psi, High: 50-250 psi)",
      "Pembersihan Evaporator AC (Tanpa Bongkar Dasbor) & Kondensor depan",
      "Deteksi kebocoran selang, nepel, & sambungan dengan Leak Detector / UV Lamp",
      "Isi ulang Freon R134a/R1234yf premium & penambahan oli kompresor baru",
      "Sterilisasi Fogging Anti-Bakteri Kabin untuk suhu akhir optimal (4-8°C)"
    ],
    includes: "Freon, Cleaning Evaporator, Fogging Kabin",
    image: "/images/promosi/reset-ac.jpg"
  },
  {
    id: 6,
    slug: "paket-ijig",
    title: "Servis Rutin Hemat Ramah Kantong",
    originalTitle: "PAket Ijig",
    category: "Paket Servis",
    badge: "Paket Hemat",
    price: "Rp 120.000",
    duration: "Promo Berjalan",
    description: "Pilihan cerdas untuk pengecekan berkala: cek aki, cairan, filter udara, dan tune-up ringan dengan biaya sangat bersahabat.",
    fullDescription: "Paket Ijig adalah solusi servis ringan bernilai tinggi untuk memastikan mobil Anda tetap stabil dipakai harian. Sangat cocok sebagai langkah pencegahan sebelum terjadi kendala serius, terutama di saat budget terbatas.",
    features: [
      "Pengecekan Voltase Aki & Sistem Pengisian (Alternator)",
      "Pembersihan Filter Udara Mesin dengan udara bertekanan kompresor",
      "Pengecekan & Top-up Cairan Radiator (Coolant) serta minyak rem",
      "Pembersihan & penyetelan celah elektroda busi pengapian secara manual",
      "Inspeksi visual ringan untuk mendeteksi potensi kebocoran oli mesin"
    ],
    includes: "Cek Aki, Filter Udara, Top-up Cairan",
    image: "/images/promosi/paket-ijig.jpg"
  },
  {
    id: 7,
    slug: "paket-ajag",
    title: "Kendali Mantap, Rem Pakem Sempurna",
    originalTitle: "Paket Ajag",
    category: "Paket Servis",
    badge: "Berkendara Stabil",
    price: "Rp 400.000",
    duration: "Promo Berjalan",
    description: "Paket kombinasi khusus perawatan sistem pengereman, kaki-kaki, dan tune-up mesin untuk kenyamanan berkendara stabil.",
    fullDescription: "Paket Ajag adalah paket kombinasi terbaik untuk menyelaraskan kembali kenyamanan dan keselamatan berkendara Anda. Kami melakukan servis rem total dan mendeteksi potensi keausan kaki-kaki sebelum berdampak buruk pada kestabilan laju mobil.",
    features: [
      "Servis Rem Depan & Belakang (Bongkar + Bersih + Pelumasan caliper pin)",
      "Pengecekan manual Bushing Arm, Ball Joint, Tie Rod & Link Stabilizer",
      "Tune-Up Mesin Standar & Reset ECU menggunakan OBD Scanner",
      "Pemeriksaan ketinggian minyak rem & kebocoran oli shockbreaker",
      "QC Akhir: Pengencangan baut roda dengan torque wrench berpola silang"
    ],
    includes: "Servis Rem 4 Roda, Cek Suspensi, Tune-up",
    image: "/images/promosi/paket-ajag.jpg"
  },
  {
    id: 8,
    slug: "cek-kaki-kaki",
    title: "Hilangkan Bunyi Gluduk di Jalan Rusak",
    originalTitle: "Cek Kaki Kaki",
    category: "Kaki-Kaki",
    badge: "Deteksi Dini",
    price: "Rp 75.000",
    duration: "Promo Berjalan",
    description: "Deteksi dini kerusakan suspensi, bushing arm, shockbreaker, tie-rod, dan ball joint demi keselamatan berkendara.",
    fullDescription: "Bunyi berisik gluduk-gluduk dari bawah kolong mobil adalah tanda bahaya untuk suspensi Anda. Pemeriksaan Kaki-Kaki secara manual di Bengkel Wiguna membantu mengidentifikasi titik kerusakan komponen suspensi secara akurat untuk kenyamanan setir yang stabil.",
    features: [
      "Pemeriksaan manual getaran roda horizontal & vertikal di atas Jack Stand",
      "Pengecekan bushing arm dengan pencongkelan linggis untuk melihat retak/getas",
      "Uji rebound shockbreaker & deteksi visual kebocoran oli shock absorber",
      "Pemeriksaan detail Link Stabilizer, Ball Joint, Tie Rod End & Rack End",
      "Inspeksi Bearing Roda & pemberian estimasi rincian biaya perbaikan jujur"
    ],
    includes: "Pengecekan Kaki-kaki + Estimasi Biaya",
    image: "/images/promosi/cek-kaki-kaki.jpg"
  },
  {
    id: 9,
    slug: "review-google",
    title: "Tulis Review, Dapatkan Hadiah Langsung",
    originalTitle: "Review Google",
    category: "Promo Spesial",
    badge: "Promo Pelanggan",
    price: "Gratis",
    duration: "Berlaku Tiap Hari",
    description: "Apapun jenis servis Anda hari ini, berikan review Google Maps dan dapatkan Engine Flush gratis atau diskon langsung di kasir.",
    fullDescription: "Kami menghargai feedback jujur Anda. Tulis ulasan bintang 5 Anda mengenai pelayanan Bengkel Wiguna Depok di Google Maps, tunjukkan kepada petugas kasir kami, dan langsung klaim cairan Engine Flush Stinger berkualitas tinggi gratis!",
    features: [
      "Berlaku untuk seluruh pelanggan servis (tanpa minimal transaksi)",
      "Free 1 Botol Cairan Stinger Engine Flush premium",
      "Pilihan alternatif berupa potongan langsung pada jasa servis pilihan",
      "Proses klaim cepat & instan di kasir kurang dari 1 menit",
      "Membantu kami terus memantau & meningkatkan kepuasan pelanggan"
    ],
    includes: "Free Engine Flush / Diskon Jasa",
    image: "/images/promosi/review-google.jpg"
  },
  {
    id: 10,
    slug: "stinger-engine-flush",
    title: "Kuras Lumpur Mesin, Oli Baru Maksimal",
    originalTitle: "Stinger Engine Flush",
    category: "Tambahan",
    badge: "Performa Optimal",
    price: "Rp 60.000",
    duration: "Promo Berjalan",
    description: "Bersihkan endapan karbon dan kerak lumpur di dalam mesin menggunakan cairan Stinger Engine Flush premium sebelum ganti oli baru.",
    fullDescription: "Stinger Engine Flush melarutkan sisa kerak, kotoran, dan lumpur oli (oil sludge) yang menempel di dinding mesin bagian dalam. Memastikan oli baru yang Anda masukkan bekerja 100% melumasi komponen tanpa terkontaminasi residu kotoran lama.",
    features: [
      "Menggunakan cairan Stinger Engine Flush dengan formula pembersih khusus",
      "Melarutkan endapan lumpur oli (sludge) di ruang karter mesin",
      "Memperlancar sirkulasi aliran oli baru ke seluruh komponen silinder",
      "Mencegah keausan silinder & ring piston akibat gesekan partikel kotoran",
      "Proses pengerjaan kuras aman oleh teknisi sebelum pengurasan oli lama"
    ],
    includes: "1 Botol Cairan Stinger, Jasa Kuras",
    image: "/images/promosi/stinger-engine-flush.jpg"
  }
];

export default promotions;
