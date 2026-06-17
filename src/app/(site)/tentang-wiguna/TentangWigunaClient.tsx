"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function TentangWigunaClient() {
  const stats = [
    { value: "15+", label: "Tahun Pengalaman" },
    { value: "100%", label: "Kepuasan Pelanggan" },
    { value: "15.000+", label: "Mobil Diperbaiki" },
    { value: "50+", label: "Tim Ahli & Mekanik" }
  ];

  const team = [
    { name: "Bpk. Minna", role: "Founder & Master Mechanic", img: "/images/bg-default-page.webp" },
    { name: "Rudi Hartono", role: "Service Advisor", img: "/images/bg-default-page.webp" },
    { name: "Bima", role: "Spesialis Kaki-Kaki", img: "/images/bg-default-page.webp" },
    { name: "Arif", role: "Spesialis Mesin", img: "/images/bg-default-page.webp" }
  ];

  const faqs = [
    {
      q: "Berapa lama proses servis mobil di Bengkel Wiguna?",
      a: "Waktu pengerjaan sangat bergantung pada jenis layanan yang Anda butuhkan. Untuk servis ringan seperti ganti oli atau pengecekan rutin, biasanya selesai dalam 1-2 jam. Untuk servis berat, kami akan memberikan estimasi waktu sebelum pekerjaan dimulai."
    },
    {
      q: "Apakah Bengkel Wiguna menyediakan layanan derek?",
      a: "Ya, kami menyediakan layanan towing (derek) untuk wilayah Depok dan sekitarnya jika mobil Anda mogok atau tidak bisa berjalan. Silakan hubungi admin kami untuk informasi lebih lanjut."
    },
    {
      q: "Bagaimana cara mengetahui estimasi harga servis?",
      a: "Sesuai prinsip 'No Tebak-Tebak', kami akan melakukan inspeksi terlebih dahulu. Setelah itu, kami akan memberikan estimasi biaya yang jelas dan transparan sebelum pekerjaan apapun dimulai."
    },
    {
      q: "Apakah ada garansi untuk setiap perbaikan?",
      a: "Tentu. Setiap layanan perbaikan dan penggantian suku cadang di Bengkel Wiguna dilengkapi dengan garansi. Durasi garansi bervariasi tergantung jenis perbaikan dan suku cadang yang digunakan."
    }
  ];

  return (
    <div 
      className="relative font-sans min-h-screen bg-cover bg-no-repeat bg-top"
      style={{ backgroundImage: "url('/images/home-12-hero-bg.webp')" }}
    >

      {/* 1. Header Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center items-center gap-2 mb-6">
          <div className="w-1.5 h-1.5 rounded-full bg-gray-900"></div>
          <span className="text-sm font-bold tracking-widest uppercase text-gray-900">Tentang Kami</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 leading-[1.1] tracking-tight max-w-4xl mx-auto mb-16">
          Temukan Layanan Service Mobil Terbaik — Dan Tim yang Bisa Anda Percaya
        </h1>

        {/* Masonry Image Row */}
        <div className="flex flex-row justify-center items-center gap-2 sm:gap-4 lg:gap-6 w-full max-w-7xl mx-auto overflow-hidden">
          {/* Img 1 (Smallest) */}
          <div className="relative w-[15%] aspect-[3/4] rounded-2xl overflow-hidden shrink-0 hidden md:block">
            <Image src="/images/about/Bengkel Mobil Terdekat di Depok.jpg" alt="Workshop 1" fill className="object-cover" />
          </div>
          {/* Img 2 (Medium) */}
          <div className="relative w-[25%] md:w-[20%] aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden shrink-0">
            <Image src="/images/about/Bengkel Bergaransi di Depok.jpg" alt="Workshop 2" fill className="object-cover" />
          </div>
          {/* Img 3 (Largest/Center) */}
          <div className="relative w-[40%] md:w-[30%] aspect-square rounded-2xl md:rounded-[2rem] overflow-hidden shrink-0 z-10 shadow-xl">
            <Image src="/images/about/Bengkel Wiguna Bergaransi.jpg" alt="Workshop Center" fill className="object-cover" />
          </div>
          {/* Img 4 (Medium) */}
          <div className="relative w-[25%] md:w-[20%] aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden shrink-0">
            <Image src="/images/about/Servis AC Mobil Depok.jpg" alt="Workshop 4" fill className="object-cover" />
          </div>
          {/* Img 5 (Smallest) */}
          <div className="relative w-[15%] aspect-[3/4] rounded-2xl overflow-hidden shrink-0 hidden md:block">
            <Image src="/images/about/Engine Flushing Depok.jpg" alt="Workshop 5" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* 2. Intro Section */}
      <section className="py-16 lg:py-24 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-900 leading-tight">
              Dari perawatan rutin hingga perbaikan berat, <span className="text-gray-500">Kami menyediakan solusi untuk membantu merawat mobil Anda secara cepat, transparan, dan bebas stres.</span>
            </h2>
          </div>
          <div className="relative aspect-[16/9] lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
             <Image src="/images/about/Servis Berkala Mobil Depok.jpg" alt="Mechanic talking to customer" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* 3. Stats Section */}
      <section className="py-12 border-t border-b border-gray-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-gray-200 text-center md:text-left">
            {stats.map((stat, idx) => (
              <div key={idx} className="md:px-8 first:pl-0 last:pr-0">
                <p className="text-4xl lg:text-5xl font-medium text-gray-900 mb-2">{stat.value}</p>
                <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Vision Bento Layout */}
      <section className="py-24 lg:py-32 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Images */}
          <div className="grid grid-cols-2 gap-4">
             <div className="space-y-4">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-md">
                   <Image src="/images/about/Garansi Servis Mobil.jpg" alt="Vision 1" fill className="object-cover" />
                </div>
             </div>
             <div className="space-y-4 pt-12">
                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-md">
                   <Image src="/images/about/Bengkel Bergaransi Depok.jpg" alt="Vision 2" fill className="object-cover" />
                </div>
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-md">
                   <Image src="/images/about/Memilih Bengkel Bergaransi.jpg" alt="Vision 3" fill className="object-cover" />
                </div>
             </div>
          </div>
          
          {/* Right Content */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-900"></div>
              <span className="text-sm font-bold tracking-widest uppercase text-gray-900">Visi Kami</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 leading-tight mb-8">
              Membimbing Setiap Keputusan Perawatan Mobil Dengan Percaya Diri
            </h2>
            
            <div className="space-y-6 text-gray-600 mb-10">
              <p>
                Visi kami adalah menghubungkan pemilik kendaraan dengan layanan perawatan mobil yang tepat melalui bimbingan ahli, proses yang transparan, dan pemahaman mendalam mengenai mesin otomotif.
              </p>
              <p>
                Kami fokus pada kejelasan, integritas, dan hasil yang optimal — sehingga setiap keputusan perawatan terasa percaya diri, aman, dan memuaskan dari diagnosa pertama hingga perbaikan selesai.
              </p>
            </div>

            <Link href="/services" className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white rounded-full font-bold transition-all">
              Lihat Layanan Kami
              <Icon icon="solar:arrow-right-line-duotone" className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Highlighted Testimonial */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="flex justify-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Icon key={i} icon="solar:star-bold" className="w-6 h-6 text-yellow-400" />
          ))}
        </div>
        <p className="text-sm font-bold tracking-widest uppercase text-gray-500 mb-10">Rated 5/5 di Google</p>
        
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-900 leading-snug mb-12">
          Service di Bengkel Wiguna benar-benar <span className="font-bold">mengubah pengalaman saya</span>. Mereka membantu mendiagnosa kerusakan mobil lebih cepat dari yang saya bayangkan, <span className="text-gray-500">dengan transparan tanpa biaya tersembunyi.</span>
        </h3>

        <div className="flex items-center justify-center gap-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200">
            <Image src="/images/bg-default-page.webp" alt="Avatar" fill className="object-cover" />
          </div>
          <div className="text-left">
            <p className="font-bold text-gray-900">Budi Santoso</p>
            <p className="text-sm text-gray-500">Pelanggan Setia</p>
          </div>
        </div>
      </section>

      {/* 6. Our Team */}
      <section className="py-24 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center items-center gap-2 mb-6">
          <div className="w-1.5 h-1.5 rounded-full bg-gray-900"></div>
          <span className="text-sm font-bold tracking-widest uppercase text-gray-900">Tim Kami</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-medium text-gray-900 leading-tight mb-16 max-w-2xl mx-auto">
          Profesional yang Bisa Anda Percaya Untuk Kendaraan Anda
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {team.map((member, idx) => (
            <div key={idx} className="relative aspect-[3/4] rounded-3xl overflow-hidden group">
              <Image src={member.img} alt={member.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                <p className="text-white font-bold text-lg">{member.name}</p>
                <p className="text-white/80 text-sm font-medium">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-10">
           <button className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-gray-800 transition">
             <Icon icon="solar:arrow-left-line-duotone" className="w-6 h-6" />
           </button>
           <button className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-gray-800 transition">
             <Icon icon="solar:arrow-right-line-duotone" className="w-6 h-6" />
           </button>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-24 border-t border-gray-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-24">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-900"></div>
                <span className="text-sm font-bold tracking-widest uppercase text-gray-900">FAQ</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-medium text-gray-900 leading-tight mb-6">
                Jawaban Jelas.<br />Tanpa Kebingungan.
              </h2>
            </div>
            
            <div className="lg:col-span-3">
              <Accordion variant="splitted" className="px-0 gap-4">
                {faqs.map((faq, idx) => (
                  <AccordionItem
                    key={idx}
                    aria-label={faq.q}
                    title={<span className="font-medium text-lg text-gray-900">{faq.q}</span>}
                    className="bg-[#f0f0f0] border-none shadow-none rounded-2xl px-2"
                  >
                    <p className="text-gray-600 pb-4 leading-relaxed">
                      {faq.a}
                    </p>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CTA Section */}
      <section className="py-12 lg:py-20 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[2rem] lg:rounded-[3rem] overflow-hidden bg-gray-900">
          <Image src="/images/about/Bengkel Bergaransi.jpg" alt="CTA Background" fill className="object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent" />
          
          <div className="relative z-10 py-20 lg:py-32 px-6 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight mb-6 max-w-2xl mx-auto">
              Perawatan Mobil Anda Selanjutnya Lebih Dekat Dari Yang Anda Kira
            </h2>
            <p className="text-white/80 font-medium mb-10 max-w-xl mx-auto">
              Jangan tunda kenyamanan dan keamanan berkendara Anda. Tim ahli Bengkel Wiguna siap memberikan solusi terbaik.
            </p>
            <a 
              href="https://wa.me/6287817773888?text=Halo%20Bengkel%20Wiguna,%20saya%20ingin%20konsultasi%20mengenai%20servis%20mobil."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white hover:bg-gray-100 text-gray-900 rounded-full font-bold transition-all shadow-xl"
            >
              Hubungi Tim Kami
              <div className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center">
                <Icon icon="solar:arrow-right-line-duotone" className="w-4 h-4 text-white" />
              </div>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
