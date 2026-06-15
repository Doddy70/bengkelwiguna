"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, MessageCircle, Phone, MapPin, Clock, Star, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="bg-[#fcfcfc] dark:bg-neutral-950 font-dm min-h-screen pt-32 pb-20">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 grid-cols-1 gap-12 lg:gap-16 items-start">
                    
                    {/* Left Column - Text and Info Cards */}
                    <div className="lg:col-span-7 flex flex-col justify-between h-full">
                        <div>
                            {/* Tag Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-neutral-900 border border-[#224297]/10 dark:border-neutral-800 rounded-full text-xs font-bold uppercase tracking-wider text-[#224297] dark:text-[#ffd900] mb-6">
                                <MessageCircle size={14} />
                                Hubungi Kami
                            </div>

                            {/* Title */}
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white leading-[1.15] tracking-tight uppercase mb-6">
                                Ada yang Bisa Kami Bantu?
                            </h1>

                            {/* Subtitle */}
                            <p className="text-gray-600 dark:text-gray-400 text-lg font-medium leading-relaxed mb-8">
                                Konsultasi gratis seputar keluhan kendaraan Anda dengan tim teknisi kami. Dapatkan diagnosa transparan tanpa drama dan tanpa biaya tersembunyi.
                            </p>

                            {/* Checklist points */}
                            <div className="space-y-4 mb-10">
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-blue-50 dark:bg-neutral-900 flex items-center justify-center text-[#224297] dark:text-[#ffd900] shrink-0">
                                        <CheckCircle2 className="w-4 h-4" />
                                    </div>
                                    <span className="text-gray-700 dark:text-gray-300 font-semibold">Booking slot service secara online dengan cepat</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-blue-50 dark:bg-neutral-900 flex items-center justify-center text-[#224297] dark:text-[#ffd900] shrink-0">
                                        <CheckCircle2 className="w-4 h-4" />
                                    </div>
                                    <span className="text-gray-700 dark:text-gray-300 font-semibold">Konsultasi diagnosa awal & estimasi harga servis gratis</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-blue-50 dark:bg-neutral-900 flex items-center justify-center text-[#224297] dark:text-[#ffd900] shrink-0">
                                        <CheckCircle2 className="w-4 h-4" />
                                    </div>
                                    <span className="text-gray-700 dark:text-gray-300 font-semibold">Bantuan info klaim promo bulanan & paket service</span>
                                </div>
                            </div>
                        </div>

                        {/* Two Sub-Cards (General Communication & Location) */}
                        <div className="grid sm:grid-cols-2 gap-6 mt-6">
                            {/* Card 1: Booking Minna */}
                            <div className="bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-900 rounded-[1.8rem] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between min-h-[160px] hover:shadow-md transition-all duration-300">
                                <div>
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="w-8 h-8 rounded-lg bg-green-50 dark:bg-neutral-800 flex items-center justify-center text-green-600 dark:text-green-400">
                                            <MessageCircle className="w-4 h-4" />
                                        </div>
                                        <h3 className="font-bold text-gray-900 dark:text-white text-base">Booking Minna</h3>
                                    </div>
                                    <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mb-4 leading-relaxed">
                                        Chat WhatsApp customer service untuk booking jadwal cepat & respon 5 menit.
                                    </p>
                                </div>
                                <a 
                                    href="https://wa.me/6287817773888?text=Halo%20Minna,%20saya%20mau%20tanya%20seputar%20layanan%20servis%20(web)" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#224297] dark:text-[#ffd900] hover:underline"
                                >
                                    Chat Minna <ArrowUpRight className="w-4 h-4" />
                                </a>
                            </div>

                            {/* Card 2: Lokasi Bengkel */}
                            <div className="bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-900 rounded-[1.8rem] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between min-h-[160px] hover:shadow-md transition-all duration-300">
                                <div>
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-neutral-800 flex items-center justify-center text-[#224297] dark:text-[#ffd900]">
                                            <MapPin className="w-4 h-4" />
                                        </div>
                                        <h3 className="font-bold text-gray-900 dark:text-white text-base">Alamat Bengkel</h3>
                                    </div>
                                    <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mb-4 leading-relaxed line-clamp-2">
                                        Jl. Margonda No.268, Kemiri Muka, Kecamatan Beji, Depok.
                                    </p>
                                </div>
                                <a 
                                    href="https://maps.app.goo.gl/bfXLHt9D2zeS9L6F6" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#224297] dark:text-[#ffd900] hover:underline"
                                >
                                    Petunjuk Arah <ArrowUpRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>

                        {/* Extra Operating Hours & Trust Footer */}
                        <div className="flex flex-wrap items-center justify-between gap-6 mt-12 pt-8 border-t border-gray-100 dark:border-neutral-800">
                            <div className="flex items-center gap-3">
                                <Clock className="w-5 h-5 text-gray-400" />
                                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                                    <span className="font-bold">Jam Kerja:</span> Booking Slot 08.00 - 17.00 WIB
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <Star className="w-4 h-4 fill-[#ffd900] text-[#ffd900]" />
                                <span className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">Rating 4.9</span>
                                <span className="text-xs text-gray-400">(2.800+ Review)</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Premium Clean Form Card */}
                    <div className="lg:col-span-5 w-full">
                        <div className="bg-white dark:bg-neutral-900 shadow-xl border border-gray-100 dark:border-neutral-900 rounded-[2.5rem] p-8 sm:p-10">
                            <h3 className="text-gray-900 dark:text-white font-black text-2xl sm:text-3xl tracking-tight uppercase mb-2">
                                Kirim Pesan
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-8">
                                Masukkan detail keluhan Anda, admin kami akan segera merespons Anda.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* First Name & Last Name */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="relative">
                                        <label htmlFor="firstName" className="absolute -top-2.5 left-4 px-1.5 bg-white dark:bg-neutral-900 text-xs font-bold text-gray-400 dark:text-gray-500">
                                            Nama Depan
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            placeholder="Budi"
                                            required
                                            className="w-full px-4 py-3.5 text-base border border-gray-200 dark:border-neutral-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#224297] dark:bg-neutral-900 dark:text-white transition"
                                        />
                                    </div>
                                    <div className="relative">
                                        <label htmlFor="lastName" className="absolute -top-2.5 left-4 px-1.5 bg-white dark:bg-neutral-900 text-xs font-bold text-gray-400 dark:text-gray-500">
                                            Nama Belakang
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            placeholder="Santoso"
                                            className="w-full px-4 py-3.5 text-base border border-gray-200 dark:border-neutral-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#224297] dark:bg-neutral-900 dark:text-white transition"
                                        />
                                    </div>
                                </div>

                                {/* Email Address */}
                                <div className="relative">
                                    <label htmlFor="email" className="absolute -top-2.5 left-4 px-1.5 bg-white dark:bg-neutral-900 text-xs font-bold text-gray-400 dark:text-gray-500">
                                        Alamat Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="budi.santoso@gmail.com"
                                        required
                                        className="w-full px-4 py-3.5 text-base border border-gray-200 dark:border-neutral-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#224297] dark:bg-neutral-900 dark:text-white transition"
                                    />
                                </div>

                                {/* WhatsApp Number */}
                                <div className="relative">
                                    <label htmlFor="phone" className="absolute -top-2.5 left-4 px-1.5 bg-white dark:bg-neutral-900 text-xs font-bold text-gray-400 dark:text-gray-500">
                                        Nomor WhatsApp
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        placeholder="+62 878-1777-3888"
                                        required
                                        className="w-full px-4 py-3.5 text-base border border-gray-200 dark:border-neutral-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#224297] dark:bg-neutral-900 dark:text-white transition"
                                    />
                                </div>

                                {/* Vehicle Type */}
                                <div className="relative">
                                    <label htmlFor="vehicle" className="absolute -top-2.5 left-4 px-1.5 bg-white dark:bg-neutral-900 text-xs font-bold text-gray-400 dark:text-gray-500">
                                        Tipe & Merk Kendaraan
                                    </label>
                                    <input
                                        type="text"
                                        id="vehicle"
                                        name="vehicle"
                                        placeholder="Contoh: Honda HR-V 2021"
                                        className="w-full px-4 py-3.5 text-base border border-gray-200 dark:border-neutral-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#224297] dark:bg-neutral-900 dark:text-white transition"
                                    />
                                </div>

                                {/* Message Description */}
                                <div className="relative">
                                    <label htmlFor="message" className="absolute -top-2.5 left-4 px-1.5 bg-white dark:bg-neutral-900 text-xs font-bold text-gray-400 dark:text-gray-500">
                                        Keluhan Kendaraan Anda
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        placeholder="Contoh: AC tidak dingin sudah 2 minggu..."
                                        required
                                        className="w-full px-4 py-3.5 text-base border border-gray-200 dark:border-neutral-800 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-[#224297] dark:bg-neutral-900 dark:text-white transition"
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full py-4 text-white text-base font-bold bg-[#224297] hover:bg-[#1a3567] rounded-xl transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                                >
                                    <span>Kirim Pesan</span>
                                    <ArrowUpRight size={18} />
                                </button>

                                {/* Success message */}
                                {submitted && (
                                    <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/40 rounded-xl text-green-700 dark:text-green-400 text-center text-sm font-semibold">
                                        Pesan Anda berhasil terkirim! Admin kami akan segera menghubungi Anda.
                                    </div>
                                )}

                                <p className="text-center text-xs text-gray-400">
                                    Atau hubungi WhatsApp kami langsung untuk konsultasi:
                                    <a href="https://wa.me/6287817773888" target="_blank" rel="noopener noreferrer" className="text-[#224297] dark:text-[#ffd900] font-bold hover:underline"> +62 878-1777-3888</a>
                                </p>
                            </form>
                        </div>
                    </div>

                </div>
            </div>

            {/* List Services Section */}
            <section className="mt-24 py-16 bg-gray-50 dark:bg-neutral-900/30 border-t border-b border-gray-100 dark:border-neutral-900">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h3 className="text-lg font-black tracking-wider uppercase text-center text-[#224297] dark:text-[#ffd900] mb-8">
                        Layanan Bengkel Wiguna
                    </h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {['Tune Up', 'Spooring & Balancing', 'AC Mobil', 'Ganti Oli', 'Sistem Rem', 'Kaki Kaki', 'Overhaul Mesin', 'Engine Flush', 'Radiator Coolant', 'Diagnosa Scanner', 'Servis Berkala'].map((service) => (
                            <span key={service} className="px-5 py-2.5 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-full text-xs font-bold text-gray-600 dark:text-gray-300 hover:border-[#224297] hover:text-[#224297] dark:hover:text-[#ffd900] dark:hover:border-[#ffd900] cursor-pointer transition-colors shadow-sm">
                                {service}
                            </span>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
