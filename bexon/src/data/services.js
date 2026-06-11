/**
 * Database Layanan Bengkel Wiguna - Local Single Source of Truth
 * Berisi 9 layanan utama dengan copywriting profesional dan data gambar existing.
 */

export const services = [
  {
    id: 1,
    slug: "service-oli",
    title: "Penggantian Oli Mesin",
    icon: "fa-solid fa-oil-can",
    description: "Layanan ganti oli mesin presisi untuk menjaga pelumasan optimal dan kebersihan ruang bakar mobil Anda.",
    fullDescription: "Layanan ganti oli mesin di Bengkel Wiguna dilakukan berdasarkan SOP ketat. Kami memastikan pengurasan oli lama secara maksimal, penggantian filter oli dengan olesan pelumas pada seal karet untuk mencegah kebocoran, serta pembersihan filter udara guna menjaga performa mesin tetap halus dan hemat bahan bakar.",
    features: [
      "Penggantian Oli Mesin berkualitas sesuai spesifikasi pabrikan",
      "Penggantian Filter Oli baru (dikencangkan tangan ± 3/4 putaran)",
      "Pembersihan Filter Udara Mesin dengan kompresor angin",
      "Pengecekan level oli lewat dipstick pasca mesin menyala 30-60 detik",
      "General checkup kebocoran baut pembuangan oli & filter"
    ],
    image: "/images/service/service-oli.jpg"
  },
  {
    id: 2,
    slug: "perawatan-ac",
    title: "Perawatan & Servis AC",
    icon: "fa-solid fa-snowflake",
    description: "Kembalikan kesegaran kabin mobil Anda dengan servis AC komprehensif, pembersihan evaporator, dan isi freon.",
    fullDescription: "Sistem AC yang bermasalah dapat mengurangi kenyamanan berkendara. Kami menawarkan servis AC tanpa bongkar dasbor untuk membersihkan evaporator, mengukur tekanan manifold gauge (low: 25-45 psi, high: 50-250 psi), mendeteksi kebocoran dengan UV Lamp, isi ulang freon premium, serta fogging anti-bakteri kabin untuk target suhu hembusan AC 4-8°C.",
    features: [
      "Pembersihan Evaporator AC & Kondensor depan secara optimal",
      "Deteksi kebocoran selang & sambungan dengan Leak Detector / UV Lamp",
      "Isi ulang Freon R134a premium & pengisian oli kompresor baru",
      "Fogging sterilisasi kabin anti-bakteri dan penghilang bau",
      "Uji suhu hembusan AC kabin hingga mencapai 4-8°C"
    ],
    image: "/images/service/perawatan-ac.jpg"
  },
  {
    id: 3,
    slug: "cek-kaki-kaki",
    title: "Pengecekan Kaki-Kaki Manual",
    icon: "fa-solid fa-car-side",
    description: "Deteksi dini dan perbaikan komponen suspensi untuk hilangkan bunyi gluduk-gluduk di jalan rusak.",
    fullDescription: "Pemeriksaan kaki-kaki mobil secara manual dilakukan di atas Jack Stand untuk mendeteksi kelonggaran komponen suspensi. Teknisi kami menguji goyangan roda secara horizontal/vertikal, memeriksa keausan bushing arm dengan pencongkelan linggis, menguji rebound shockbreaker dari kebocoran oli, serta memeriksa link stabilizer demi kestabilan kemudi.",
    features: [
      "Pemeriksaan manual getaran roda horizontal & vertikal (tierod & bearing)",
      "Inspeksi bushing arm dengan pencongkelan linggis untuk deteksi retak/getas",
      "Uji rebound shockbreaker & deteksi kebocoran oli shock absorber",
      "Pemeriksaan Link Stabilizer, Ball Joint, & Rack End",
      "Pemberian estimasi biaya perbaikan kaki-kaki secara jujur & transparan"
    ],
    image: "/images/service/cek-kaki-kaki.jpg"
  },
  {
    id: 4,
    slug: "rem-roda",
    title: "Servis Rem & Roda",
    icon: "fa-solid fa-circle-notch",
    description: "Jaminan pengereman pakem dan aman dengan servis rem 4 roda menyeluruh dan pelumasan caliper pin.",
    fullDescription: "Sistem rem adalah penentu keselamatan utama kendaraan Anda. Kami melakukan pembongkaran rem depan & belakang untuk membersihkan debu kampas, melumasi caliper pin dengan grease khusus, memeriksa ketebalan pad rem, serta menguji kebocoran minyak rem untuk memastikan respons pengereman yang pakem dan stabil.",
    features: [
      "Pembongkaran & pembersihan rem depan-belakang dari debu kampas",
      "Pelumasan caliper pin / sliding pin rem agar tidak macet",
      "Inspeksi ketebalan kampas rem & kondisi piringan cakram",
      "Pemeriksaan level minyak rem & potensi kebocoran minyak rem",
      "QC akhir pengencangan baut roda menggunakan kunci momen (torque wrench)"
    ],
    image: "/images/service/rem-roda.jpg"
  },
  {
    id: 5,
    slug: "service-ban",
    title: "Servis Ban & Tambal Tiptop",
    icon: "fa-solid fa-car",
    description: "Layanan perbaikan kebocoran ban tiptop/plug patch berkualitas tinggi untuk keamanan berkendara jangka panjang.",
    fullDescription: "Tambal ban tiptop / plug patch adalah metode perbaikan kebocoran ban dari sisi dalam yang paling aman dan direkomendasikan. Kami melepas ban dari velg, membersihkan area bocor dengan liquid pulper, mengamplas permukaan karet, menempel patch dengan lem vulkanisir valkarn, mengepres, memberi sealiner, dan melakukan balancing ban pasca tambal.",
    features: [
      "Pelepasan ban luar & deteksi kebocoran melalui bak air perendam",
      "Pembersihan area bocor dengan liquid pulper & amplas permukaan ban",
      "Penambalan dari sisi dalam menggunakan patch premium & lem vulkanisir",
      "Pemberian lapisan sealiner di area tambalan agar kedap udara",
      "Proses balancing roda pasca penambalan & pengisian angin nitrogen"
    ],
    image: "/images/service/service-ban.jpg"
  },
  {
    id: 6,
    slug: "spooring-balancing",
    title: "Spooring & Balancing 3D",
    icon: "fa-solid fa-cog",
    description: "Penyelarasan sudut roda mobil secara presisi untuk kemudi yang stabil dan ban awet merata.",
    fullDescription: "Layanan Spooring 3D dan Balancing di Bengkel Wiguna membantu menyelaraskan kembali geometri roda (Toe, Camber, Caster) agar kemudi tidak narik ke satu sisi. Kami juga melakukan balancing roda untuk menyeimbangkan berat velg dan ban guna menghilangkan getaran pada kecepatan tinggi.",
    features: [
      "Penyelarasan geometri roda 4 roda dengan sensor Spooring 3D presisi",
      "Penyetelan sudut Toe, Camber, dan Caster sesuai spesifikasi pabrikan",
      "Penyeimbangan roda (Balancing) menggunakan timah balancing berkualitas",
      "Pemeriksaan keausan tapak ban & tekanan angin ban sebelum spooring",
      "Test drive jalan raya untuk memastikan stabilitas setir stabil"
    ],
    image: "/images/service/spooring-balancing.jpg"
  },
  {
    id: 7,
    slug: "engine-flush",
    title: "Engine Flushing",
    icon: "fa-solid fa-bolt",
    description: "Kuras lumpur oli dan endapan kerak mesin secara tuntas menggunakan cairan engine flush premium.",
    fullDescription: "Endapan lumpur oli (oil sludge) dapat menyumbat saluran oli dan mempercepat keausan mesin. Layanan Engine Flushing kami menggunakan cairan pembersih khusus Stinger sebelum pembuangan oli lama guna melarutkan residu kotoran di dinding mesin agar oli baru bekerja melumasi 100% tanpa tercemar.",
    features: [
      "Pencampuran cairan Stinger Engine Flush premium ke oli lama",
      "Menjalankan mesin dalam kondisi idle selama 10-15 menit",
      "Pengurasan oli kotor beserta kerak kotoran mesin hingga tuntas",
      "Melarutkan endapan lumpur oli (sludge) di ruang karter mesin",
      "Membantu memaksimalkan efisiensi pelumasan oli mesin baru"
    ],
    image: "/images/service/engine-flush.jpg"
  },
  {
    id: 8,
    slug: "coolant-flush",
    title: "Radiator Coolant Flush",
    icon: "fa-solid fa-gauge-high",
    description: "Kuras dan bersihkan sistem pendingin radiator untuk mencegah mesin overheat saat macet.",
    fullDescription: "Layanan Radiator Coolant Flush di Bengkel Wiguna membersihkan kerak karat dan endapan lumpur di dalam radiator dan blok mesin. Kami menguras air radiator lama, melakukan flushing dengan air bersih atau radiator cleaner, lalu mengisi coolant baru berkualitas untuk menjaga suhu kerja mesin tetap optimal.",
    features: [
      "Pengurasan total cairan pendingin (coolant) radiator lama",
      "Flushing sistem pendingin menggunakan air bersih/radiator cleaner",
      "Pengisian cairan pendingin (coolant) baru berkualitas premium",
      "Pemeriksaan fungsi kipas pendingin (extra fan) & kebocoran selang",
      "Uji suhu kerja mesin stabil pasca pengurasan radiator"
    ],
    image: "/images/service/coolant-flush.jpg"
  },
  {
    id: 9,
    slug: "wash-detailing",
    title: "Premium Wash & Detailing",
    icon: "fa-solid fa-car-battery",
    description: "Cuci bersih kolong mobil (undercarriage) dan body dengan salju premium untuk kebersihan maksimal.",
    fullDescription: "Layanan Premium Wash & Undercarriage membersihkan lumpur, pasir, dan zat korosif di kolong mobil Anda. Kami menggunakan semprotan pressure washer bertekanan tinggi, shampoo salju premium untuk body, dressing semir ban, degreaser area mesin, serta vacuum interior untuk kebersihan luar dalam yang berkilau.",
    features: [
      "Pembersihan kolong mobil (undercarriage) dengan pressure washer",
      "Pencucian body mobil dengan shampoo snow wash premium",
      "Dressing area mesin (engine dressing) & semir ban berkualitas",
      "Vacuum cleaning area interior & pembersihan debu dashboard",
      "Pembersihan kaca & pembersihan panel sela-sela emblem"
    ],
    image: "/images/service/wash-detailing.jpg"
  }
];

export default services;
