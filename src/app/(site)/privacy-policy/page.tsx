// app/(site)/privacy-policy/page.tsx
import Link from "next/link";

export const metadata = {
    title: 'Privacy Policy | Bengkel Wiguna',
    description: 'Kebijakan Privasi Bengkel Wiguna - Bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda.',
};

export default function PrivacyPolicyPage() {
    return (
        <>
            {/* Branded Header Section */}
            <section className="bg-light-blue-banner lg:pt-48 pt-8 lg:pt-12 pb-20 relative overflow-hidden">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 relative z-10">
                    <div className="max-w-3xl">
                        <span className="inline-block bg-brand-gold text-brand-blue px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-6 shadow-xl shadow-yellow-900/10">
                            Legal & Privacy
                        </span>
                        <h1 className="text-4xl lg:text-7xl font-black text-gray-900 mb-6 italic tracking-tighter uppercase leading-[0.85]">
                            Privacy <br /><span className="text-brand-blue">Policy</span>
                        </h1>
                        <p className="text-gray-800 font-bold text-lg lg:text-xl max-w-xl leading-relaxed">
                            Terakhir diperbarui: 29 April 2025
                        </p>
                    </div>
                </div>
            </section>

            <section className="term-wrap font-dm lg:pb-24 pb-12 bg-white dark:bg-gray-950">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 lg:pt-24 pt-20">
                    <div className="lg:w-8/12 mx-auto prose prose-lg dark:prose-invert
                        prose-h2:text-3xl prose-h2:font-black prose-h2:italic prose-h2:uppercase prose-h2:tracking-tighter prose-h2:text-gray-900 prose-h2:dark:text-white prose-h2:mb-6
                        prose-p:text-gray-700 prose-p:dark:text-gray-300 prose-p:font-medium prose-p:leading-relaxed prose-p:mb-8
                        prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-8
                        prose-li:text-gray-700 prose-li:dark:text-gray-300 prose-li:font-medium prose-li:mb-2">

                        <p><strong>Selamat datang di Bengkel Wiguna!</strong></p>
                        <p>Bengkel Wiguna (&ldquo;kami&rdquo;, &ldquo;kita&rdquo;, atau &ldquo;milik kami&rdquo;) menghargai privasi Anda. Halaman Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda saat Anda menggunakan layanan kami, mengunjungi bengkel kami, atau berinteraksi melalui situs web dan kontak resmi kami.</p>

                        <h2>Informasi yang Kami Kumpulkan</h2>
                        <p>Kami dapat mengumpulkan informasi pribadi dari Anda ketika Anda:</p>
                        <ul>
                            <li>Menghubungi kami melalui email, telepon, atau formulir di website.</li>
                            <li>Membuat janji atau permintaan layanan.</li>
                            <li>Memberikan umpan balik, ulasan, atau pertanyaan terkait layanan kami.</li>
                        </ul>
                        <p>Informasi pribadi yang dapat kami kumpulkan meliputi:</p>
                        <ul>
                            <li>Nama lengkap</li>
                            <li>Alamat email</li>
                            <li>Nomor telepon</li>
                            <li>Informasi kendaraan (seperti merek, model, tahun produksi)</li>
                            <li>Informasi lain yang Anda berikan secara sukarela</li>
                        </ul>

                        <h2>Bagaimana Kami Menggunakan Informasi Anda</h2>
                        <p>Informasi yang kami kumpulkan dapat digunakan untuk:</p>
                        <ul>
                            <li>Memberikan, mengelola, dan meningkatkan layanan perbaikan dan perawatan kendaraan Anda.</li>
                            <li>Menghubungi Anda untuk konfirmasi layanan, penjadwalan, atau tindak lanjut.</li>
                            <li>Menjawab pertanyaan atau keluhan yang Anda ajukan.</li>
                            <li>Memberikan informasi terkait promosi, layanan baru, atau penawaran khusus (dengan persetujuan Anda).</li>
                        </ul>

                        <h2>Perlindungan Informasi</h2>
                        <p>Kami berkomitmen untuk melindungi informasi pribadi Anda. Kami menerapkan berbagai langkah keamanan teknis dan administratif untuk mencegah akses tidak sah, pengungkapan, perubahan, atau penghancuran informasi pribadi Anda.</p>

                        <h2>Berbagi Informasi</h2>
                        <p>Bengkel Wiguna tidak akan menjual, menyewakan, atau membagikan informasi pribadi Anda kepada pihak ketiga tanpa persetujuan Anda, kecuali jika diwajibkan oleh hukum atau untuk keperluan operasional layanan (misalnya, dengan mitra pihak ketiga yang membantu kami menyediakan layanan).</p>

                        <h2>Hak Anda</h2>
                        <p>Anda memiliki hak untuk:</p>
                        <ul>
                            <li>Meminta salinan informasi pribadi Anda yang kami simpan.</li>
                            <li>Meminta perbaikan atas informasi yang tidak akurat.</li>
                            <li>Meminta penghapusan informasi pribadi Anda, kecuali ada keperluan hukum atau operasional yang mengharuskan kami menyimpannya.</li>
                        </ul>
                        <p>Untuk permintaan tersebut, Anda dapat menghubungi kami melalui kontak di bawah ini.</p>

                        <h2>Perubahan terhadap Kebijakan Privasi Ini</h2>
                        <p>Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan akan kami informasikan melalui situs web kami atau media komunikasi resmi lainnya. Harap tinjau halaman ini secara berkala untuk mengetahui pembaruan terbaru.</p>

                        <h2>Kontak Kami</h2>
                        <p>Jika Anda memiliki pertanyaan atau permintaan terkait Kebijakan Privasi ini, silakan hubungi kami:</p>
                        <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 not-prose">
                            <p className="text-xl font-black text-brand-blue dark:text-brand-gold italic tracking-tighter uppercase mb-2">Bengkel Wiguna</p>
                            <p className="text-gray-700 dark:text-gray-300 font-bold mb-4 leading-relaxed">
                                Jl. Margonda No.268, Kemiri Muka, Kecamatan Beji, Kota Depok, Jawa Barat 16423
                            </p>
                            <div className="flex flex-col gap-2">
                                <Link href="mailto:info@bengkelwiguna.com" className="text-brand-blue dark:text-blue-400 font-bold hover:underline">
                                    Email: info@bengkelwiguna.com
                                </Link>
                                <Link href="tel:087817773888" className="text-brand-blue dark:text-blue-400 font-bold hover:underline">
                                    Telepon: 0878-1777-3888
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
