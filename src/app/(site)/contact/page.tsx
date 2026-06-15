"use client";


import Image from "next/image";
import { FormEvent, useState } from "react";
import FaqSection from "@/components/layout/FaqSection";
import { ArrowUpRight, Phone, MapPin, Clock, MessageCircle, Star } from 'lucide-react';

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <>
            <div className="absolute top-0 left-0 w-full h-[500px] font-dm bg-gradient-to-br from-[#050b14] to-[#224297] lg:pt-24 pt-12"></div>
            <div className="contact-wrap font-dm z-10 lg:pt-24 pt-12 relative">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 lg:py-24 py-20">
                    <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-10 space-y-5 lg:space-y-0">
                        {/* Left Side - Contact Info */}
                        <div className="w-full lg:pr-16">
                            <div className="flex mb-6">
                                <div className="px-3 py-1 border border-white/20 shadow-sm rounded-lg text-[13px] font-semibold uppercase text-white bg-white/10 flex items-center gap-2">
                                    <MessageCircle size={18} className="text-[#ffd900]" />
                                    Hubungi Kami
                                </div>
                            </div>

                            <h2 className="xl:text-[56px] lg:text-5xl text-4xl lg:leading-[1] tracking-tight text-white font-bold mb-4">
                                Ada Masalah dengan Kendaraan Anda?
                            </h2>

                            <p className="text-white/80 font-medium text-lg lg:pr-16 mb-8">
                                Jangan biarkan masalah kecil menjadi besar. Konsultasi gratis dengan teknisi berpengalaman kami — diagnosa transparan, tanpa biaya tersembunyi.
                            </p>

                            {/* Customer Support Image */}
                            <div className="relative w-full max-w-md mb-8 rounded-2xl overflow-hidden">
                                <Image
                                    src="/images/cs-support.png"
                                    alt="Customer Support Bengkel Wiguna"
                                    width={400}
                                    height={200}
                                    className="w-full rounded-2xl"
                                />
                            </div>

                            {/* Contact Cards */}
                            <div className="space-y-4 mb-8">
                                {/* WhatsApp Chat Minna */}
                                <a
                                    href="https://wa.me/6287817773888?text=Halo%20Minna,%20saya%20mau%20tanya%20seputar%20layanan%20servis%20(web)"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-colors group"
                                >
                                    <div className="w-12 h-12 bg-[#ffd900] rounded-xl flex items-center justify-center flex-shrink-0">
                                        <MessageCircle className="w-6 h-6 text-[#1a3567]" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-bold text-white">Chat Minna (Booking Service)</p>
                                        <p className="text-sm text-white/70">Respon cepat, biasanya 5 menit</p>
                                    </div>
                                    <ArrowUpRight className="w-5 h-5 text-[#ffd900] group-hover:translate-x-1 transition-transform" />
                                </a>

                                {/* Service Consultant */}
                                <a
                                    href="https://wa.me/62881012769484?text=Halo%20Monna,%20saya%20mau%20tanya%20seputar%20layanan%20servis%20(web)"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-colors group"
                                >
                                    <div className="w-12 h-12 bg-[#ffd900] rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-6 h-6 text-[#1a3567]" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-bold text-white">Service Consultant: Monna</p>
                                        <p className="text-sm text-white/70">Online untuk konsultasi service</p>
                                    </div>
                                    <ArrowUpRight className="w-5 h-5 text-[#ffd900] group-hover:translate-x-1 transition-transform" />
                                </a>

                                {/* Location */}
                                <a
                                    href="https://maps.app.goo.gl/bfXLHt9D2zeS9L6F6"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-colors group"
                                >
                                    <div className="w-12 h-12 bg-[#ffd-yellow] rounded-xl flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-[#1a3567]" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-bold text-white">Kunjungi Bengkel</p>
                                        <p className="text-sm text-white/70">Jl. Margonda No.268, Kemiri Muka, Kecamatan Beji, Kota Depok, Jawa Barat 16423</p>
                                    </div>
                                    <ArrowUpRight className="w-5 h-5 text-[#ffd-yellow] group-hover:translate-x-1 transition-transform" />
                                </a>

                                {/* Operating Hours */}
                                <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Clock className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-white">Jam Operasional</p>
                                        <p className="text-sm text-white/70">Booking Slot: 08.00 - 17.00 WIB</p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="mb-8">
                                <p className="text-white/60 text-sm mb-4">Ikuti Kami:</p>
                                <div className="flex gap-3">
                                    <a href="https://facebook.com/Bengkel.WigunaBan" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/20 hover:bg-[#ffd900] rounded-lg flex items-center justify-center transition-colors group">
                                        <span className="text-white group-hover:text-[#1a3567] font-bold text-sm">fb</span>
                                    </a>
                                    <a href="https://instagram.com/bengkelwiguna_depok" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/20 hover:bg-[#ffd900] rounded-lg flex items-center justify-center transition-colors group">
                                        <span className="text-white group-hover:text-[#1a3567] font-bold text-sm">ig</span>
                                    </a>
                                    <a href="https://tiktok.com/@bengkel.wiguna.depok" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/20 hover:bg-[#ffd-yellow] rounded-lg flex items-center justify-center transition-colors group">
                                        <span className="text-white group-hover:text-[#1a3567] font-bold text-sm">tt</span>
                                    </a>
                                    <a href="https://youtube.com/@BengkelWiguna" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/20 hover:bg-red-500 rounded-lg flex items-center justify-center transition-colors group">
                                        <span className="text-white group-hover:text-white font-bold text-sm">yt</span>
                                    </a>
                                </div>
                            </div>

                            {/* Trust Indicators */}
                            <div className="flex items-center gap-4 pt-4 border-t border-white/20">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <div key={i} className="w-10 h-10 rounded-full bg-white/20 border-2 border-white/30 flex items-center justify-center">
                                            <span className="text-xs">👤</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="text-white">
                                    <p className="font-bold flex items-center gap-1">
                                        <Star className="w-4 h-4 fill-[#ffd900] text-[#ffd-yellow]" />
                                        Rating 4.9
                                    </p>
                                    <p className="text-sm text-white/60">2.847+ pelanggan puas</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Contact Form */}
                        <div className="w-full">
                            <div className="bg-white shadow-xl border border-gray-100 rounded-2xl p-8 lg:p-10">
                                <h3 className="text-gray-900 font-bold lg:text-3xl text-2xl mb-2">
                                    Kirim Pesan
                                </h3>
                                <p className="text-gray-600 font-medium text-base mb-6">
                                    Ceritakan masalah kendaraan Anda. Teknisi kami akan merespons dalam 1x24 jam.
                                </p>

                                <form onSubmit={handleSubmit} id="contactForm" className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="firstName" className="block text-gray-900 font-medium mb-2">
                                                Nama Depan
                                            </label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                placeholder="Budi"
                                                required
                                                className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#224297] focus:border-[#224297] transition"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="lastName" className="block text-gray-900 font-medium mb-2">
                                                Nama Belakang
                                            </label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                placeholder="Santoso"
                                                className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#224297] focus:border-[#224297] transition"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-gray-900 font-medium mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="budi.santoso@gmail.com"
                                            required
                                            className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#224297] focus:border-[#224297] transition"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-gray-900 font-medium mb-2">
                                            Nomor WhatsApp
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            placeholder="+62 878-xxxx-xxxx"
                                            className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#224297] focus:border-[#224297] transition"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="vehicle" className="block text-gray-900 font-medium mb-2">
                                            Tipe / Merk Kendaraan
                                        </label>
                                        <input
                                            type="text"
                                            id="vehicle"
                                            name="vehicle"
                                            placeholder="Contoh: Toyota Avanza 2018"
                                            className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#224297] focus:border-[#224297] transition"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-gray-900 font-medium mb-2">
                                            Ceritakan Masalah Kendaraan Anda
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={4}
                                            placeholder="Contoh: Mesin susah nyala pagi hari, AC tidak dingin sudah sebulan..."
                                            required
                                            className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#224297] focus:border-[#224297] transition"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full flex items-center justify-center gap-2 py-4 text-white text-base font-bold bg-[#224297] hover:bg-[#1a3567] rounded-lg transition-colors"
                                    >
                                        <span>Kirim Pesan</span>
                                        <ArrowUpRight size={18} />
                                    </button>

                                    {submitted && (
                                        <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-center">
                                            Pesan Anda berhasil terkirim! Kami akan segera menghubungi Anda.
                                        </div>
                                    )}

                                    <p className="text-center text-sm text-gray-500">
                                        Atau hubungi langsung via WhatsApp untuk respons lebih cepat:
                                        <a href="https://wa.me/6287817773888" target="_blank" rel="noopener noreferrer" className="text-[#224297] font-medium hover:underline"> +62 878-1777-3888</a>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Layanan Kami</h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {['Oli', 'Ban', 'Rem', 'AC Service', 'Engine Flush', 'Coolant Flush', 'Kaki Kaki', 'Spooring & Balancing', 'Tune Up', 'Semi Overhaul', 'Detailing', 'Berkala'].map((service) => (
                            <span key={service} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover:border-[#224297] hover:text-[#224297] cursor-pointer transition-colors">
                                {service}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            <FaqSection />
        </>
    );
}
