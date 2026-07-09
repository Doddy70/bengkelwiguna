// app/terms/page.tsx
import Link from "next/link";
import PageTitle from "@/components/ui/PageTitle";

export const metadata = {
    title: 'Syarat & Ketentuan - Bengkel Wiguna',
    description: 'Baca syarat dan ketentuan layanan Bengkel Wiguna.',
};

export default function TermsPage() {
  const lastUpdated = "4 Agustus 2025"; 

  const sections = [
    {
      id: 1,
      title: "Layanan",
      content: "Bengkel Wiguna menyediakan layanan perawatan dan perbaikan kendaraan roda empat, termasuk tetapi tidak terbatas pada:",
      items: [
        "Servis berkala",
        "Ganti oli dan filter",
        "Perbaikan mesin",
        "Servis rem dan suspensi",
        "Diagnosa kendaraan",
        "Layanan kelistrikan mobil"
      ],
      footer: "Kami berkomitmen memberikan layanan terbaik, namun hasil layanan dapat bervariasi tergantung pada kondisi kendaraan dan riwayat perawatannya."
    },
    {
      id: 2,
      title: "Jadwal dan Reservasi",
      content: "Pelanggan dapat datang langsung atau melakukan reservasi terlebih dahulu melalui:",
      items: [
        "Telepon: 0878-1777-3888",
        "Email: info@bengkelwiguna.com"
      ],
      footer: "Waktu pengerjaan dan estimasi penyelesaian akan diinformasikan saat pengecekan kendaraan."
    },
    {
      id: 3,
      title: "Estimasi Biaya dan Pembayaran",
      content: "Estimasi biaya akan diinformasikan sebelum pengerjaan dimulai. Harga dapat berubah apabila ditemukan kerusakan tambahan saat proses perbaikan, dan pelanggan akan dikonfirmasi terlebih dahulu.",
      footer: "Pembayaran dapat dilakukan secara tunai, transfer, atau metode lain yang kami sediakan."
    },
    {
      id: 4,
      title: "Garansi Layanan",
      content: "Kami memberikan garansi terbatas untuk beberapa jenis perbaikan dan penggantian suku cadang (maksimal 14 hari atau 500 km, mana yang tercapai lebih dulu). Garansi tidak berlaku jika kerusakan disebabkan oleh:",
      items: [
        "Kecelakaan",
        "Pemakaian tidak wajar",
        "Modifikasi kendaraan tanpa persetujuan kami",
        "Perbaikan di tempat lain setelah layanan kami"
      ]
    },
    {
      id: 5,
      title: "Suku Cadang",
      content: "Kami hanya menggunakan suku cadang asli atau berkualitas setara. Permintaan penggunaan suku cadang dari pelanggan adalah tanggung jawab pelanggan sepenuhnya."
    },
    {
      id: 6,
      title: "Tanggung Jawab",
      content: "Bengkel Wiguna tidak bertanggung jawab atas:",
      items: [
        "Kehilangan barang pribadi di dalam kendaraan",
        "Kerusakan yang timbul akibat keterlambatan pengambilan kendaraan",
        "Force majeure atau kejadian di luar kendali kami"
      ]
    },
    {
      id: 7,
      title: "Data Pribadi",
      content: "Data pribadi pelanggan yang dikumpulkan saat reservasi atau transaksi akan kami simpan dengan aman dan hanya digunakan untuk keperluan layanan Bengkel Wiguna."
    },
    {
      id: 8,
      title: "Perubahan Ketentuan",
      content: "Bengkel Wiguna berhak mengubah syarat & ketentuan ini sewaktu-waktu tanpa pemberitahuan terlebih dahulu. Pelanggan disarankan untuk memeriksa halaman ini secara berkala."
    }
  ];

  return (
    <>
      <PageTitle
        title="Syarat & Ketentuan"
        subtitle={`Terakhir diperbarui: ${lastUpdated}`}
      />
      <section className="term-wrap font-dm lg:pb-24 pb-12">
        <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 lg:pt-24 pt-20">
          <div className="lg:w-8/12 mx-auto">
            <p className="leading-relaxed mb-10 text-lg">
              Selamat datang di <strong>Bengkel Wiguna</strong>. Harap baca Syarat dan Ketentuan berikut ini dengan seksama sebelum menggunakan layanan kami. 
              Dengan menggunakan layanan atau mengunjungi lokasi kami di <em>Jl. Margonda No.268, Kemiri Muka, Kecamatan Beji, Kota Depok, Jawa Barat 16423</em>, 
              Anda setuju untuk mematuhi dan terikat oleh ketentuan yang tercantum di bawah ini.
            </p>

            <main className="space-y-10">
              {sections.map((section) => (
                <section key={section.id} className="scroll-mt-20">
                  <h2 className="text-2xl font-bold mb-4 flex items-center text-gray-900">
                    <span className="mr-3 text-brand-blue">{section.id}.</span>
                    {section.title}
                  </h2>
                  <div className="pl-8 space-y-4">
                    <p className="leading-relaxed text-gray-800 text-lg">{section.content}</p>
                    {section.items && (
                      <ul className="list-disc list-outside space-y-2 ml-4 text-gray-800 text-lg">
                        {section.items.map((item, index) => (
                          <li key={index} className="pl-2">{item}</li>
                        ))}
                      </ul>
                    )}
                    {section.footer && (
                      <p className="leading-relaxed italic text-gray-700 text-lg">{section.footer}</p>
                    )}
                  </div>
                </section>
              ))}
            </main>

            <section className="mt-16 pt-8 border-t bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-4">Hubungi Kami</h3>
                <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div>
                    <p className="font-semibold mb-1">Alamat:</p>
                    <p>Jl. Margonda No.268, Kemiri Muka, Kecamatan Beji, Kota Depok, Jawa Barat 16423</p>
                </div>
                <div>
                    <p className="font-semibold mb-1">Email:</p>
                    <a href="mailto:info@bengkelwiguna.com" className="text-blue-600 hover:underline">
                    info@bengkelwiguna.com
                    </a>
                </div>
                <div>
                    <p className="font-semibold mb-1">Telepon:</p>
                    <a href="tel:087817773888" className="text-blue-600 hover:underline">
                    0878-1777-3888
                    </a>
                </div>
                </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
