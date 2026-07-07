// app/(site)/karir/page.tsx
import Link from "next/link";

export const metadata = {
    title: 'Karir - Bengkel Wiguna',
    description: 'Bergabung dengan tim Bengkel Wiguna. Kami membuka lowongan untuk Mekanik Mobil, Customer Service, dan Program Magang.',
};

const vacancies = [
    {
        title: "MEKANIK MOBIL",
        description: "Untuk Pengembangan Bengkel Wiguna, Kami Membutuhkan:",
        requirements: [
            "Spooring balancing",
            "Service rem, ganti oli dan ban mobil",
            "Overhoul/ Turun mesin (DIUTAMAKAN)",
            "Ac mobil",
            "Kaki – kaki mobil",
            "Elektrikal mobil"
        ],
        qualifications: [
            "Usia Maksimal 35 tahun",
            "Mempunyai pengalaman min. 3 tahun sebagai mekanik di bengkel mobil",
            "Paham dan mampu melakukan service berkala"
        ]
    },
    {
        title: "CUSTOMER SERVICE",
        description: "Melayani pelanggan dengan sepenuh hati:",
        requirements: [
            "Melayani pelanggan dengan cepat dan ramah",
            "Merespon pertanyaan pelanggan dengan baik",
            "Menghandle keluhan yang disampaikan oleh pelanggan",
            "Memastikan kepuasan pelanggan dan memberikan dukungan pelanggan secara profesional",
            "Menjaga sikap positif, empati dan profesional terhadap setiap pelanggan",
            "Melakukan end to end process administrasi"
        ],
        qualifications: [
            "Pendidikan Min. SMA/SMK",
            "Pengalaman Min. 2 tahun dibidang penjualan penawaran produk",
            "Memiliki skill komunikasi yang baik dan percaya diri",
            "Memiliki ketertarikan dibidang otomotif (nilai plus)",
            "Berorientasi pada target"
        ]
    }
];

export default function KarirPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#224297] via-[#1a3575] to-[#0f2347] lg:pt-48 pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#ffd900] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-[#224297] rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block bg-brand-gold text-brand-blue px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-6 shadow-xl shadow-yellow-900/20">
                Bergabung dengan Tim Kami
            </span>
            <h1 className="text-4xl lg:text-7xl font-black text-white mb-6 italic tracking-tighter uppercase leading-[0.85]">
                Karir di <br /><span className="text-brand-gold">Bengkel Wiguna</span>
            </h1>
            <p className="text-gray-300 font-medium text-lg lg:text-xl max-w-xl leading-relaxed">
                Bergabunglah dengan tim profesional kami dan kembangkan karir di industri otomotif.
            </p>
          </div>
        </div>
      </section>

      {/* Vacancies Section */}
      <section className="bg-white dark:bg-gray-950 lg:pb-24 pb-12">
        <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 lg:pt-24 pt-20">
          <div className="lg:w-9/12 mx-auto space-y-12">
            {vacancies.map((vacancy, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 border border-gray-100 dark:border-gray-800">
                <h2 className="text-2xl lg:text-3xl font-black text-brand-blue dark:text-brand-gold italic uppercase tracking-tight mb-4">
                    {vacancy.title}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 font-medium mb-6">{vacancy.description}</p>

                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="font-bold text-gray-900 dark:text-white mb-3">Tugas & Tanggung Jawab:</h3>
                        <ul className="space-y-2">
                            {vacancy.requirements.map((req, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                                    <span className="w-2 h-2 bg-brand-gold rounded-full mt-2 flex-shrink-0"></span>
                                    {req}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-900 dark:text-white mb-3">Kualifikasi:</h3>
                        <ul className="space-y-2">
                            {vacancy.qualifications.map((qual, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                                    <span className="w-2 h-2 bg-brand-blue rounded-full mt-2 flex-shrink-0"></span>
                                    {qual}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
                    <Link
                        href="https://wa.me/6287817773888?text=Halo%20Bengkel%20Wiguna,%20saya%20tertarik%20melamar%20posisi%20yang%20ada"
                        className="inline-flex items-center gap-3 bg-brand-blue hover:bg-brand-blue/90 text-white font-bold px-8 py-4 rounded-full transition-all hover:scale-105"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        Lamar via WhatsApp
                    </Link>
                </div>
              </div>
            ))}

            {/* Magang Section */}
            <div className="bg-gradient-to-br from-[#224297] to-[#0f2347] rounded-3xl p-8 text-white">
                <h2 className="text-2xl lg:text-3xl font-black italic uppercase tracking-tight mb-4">
                    MAGANG MEKANIK & CUSTOMER SERVICE
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <p className="text-gray-300 mb-6 font-medium">
                            Bergabunglah dalam program magang kami dan dapatkan pengalaman langsung di industri otomotif!
                        </p>
                        <ul className="space-y-3">
                            {[
                                "Memperoleh penjelasan tentang peran dan tugas, serta ruang lingkup tugas di bengkel masing-masing.",
                                "Memperoleh bimbingan dalam pelaksanaan practise kerja.",
                                "Memperoleh uang bantuan transportasi",
                                "Memperoleh Sertifikat selama magang",
                                "Berkesempatan menjadi Karyawan Tetap",
                                "Mendapatkan Uang Saku"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-brand-gold rounded-full mt-2 flex-shrink-0"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex items-center">
                        <Link
                            href="https://wa.me/6287817773888?text=Halo%20Bengkel%20Wiguna,%20saya%20tertarik%20program%20magang"
                            className="w-full inline-flex items-center justify-center gap-3 bg-brand-gold hover:bg-brand-gold/90 text-brand-blue font-bold px-8 py-4 rounded-full transition-all hover:scale-105"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                            </svg>
                            Lamar Program Magang
                        </Link>
                    </div>
                </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 border border-gray-100 dark:border-gray-800">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Kirimkan Lamaran Anda:</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                    <strong>Subject Email:</strong> MEKANIK MOBIL / CUSTOMER SERVICE / MAGANG
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                    <div>
                        <p className="font-semibold mb-2 text-gray-900 dark:text-white">Alamat:</p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            Jl. Margonda No.268, Kemiri Muka, Kecamatan Beji, Kota Depok, Jawa Barat 16423
                        </p>
                    </div>
                    <div>
                        <p className="font-semibold mb-2 text-gray-900 dark:text-white">WhatsApp:</p>
                        <Link href="https://wa.me/6287817773888" className="text-brand-blue dark:text-blue-400 hover:underline text-sm">
                            0878 1777 3888
                        </Link>
                    </div>
                    <div>
                        <p className="font-semibold mb-2 text-gray-900 dark:text-white">Email:</p>
                        <Link href="mailto:bengkelwigunaban@gmail.com" className="text-brand-blue dark:text-blue-400 hover:underline text-sm">
                            bengkelwigunaban@gmail.com
                        </Link>
                    </div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-6">
                    * Surat lamaran / CV, pas photo, FC ijazah dapat dikirimkan ke kontak di atas.
                </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
