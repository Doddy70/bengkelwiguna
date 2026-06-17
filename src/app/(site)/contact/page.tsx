"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        vehicle: '',
        message: ''
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        // Track form submission
        if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'generate_lead', {
                event_category: 'contact',
                event_label: 'contact_form'
            });
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div className="relative font-sans min-h-screen">
            {/* ═══ Hero Section ═══ */}
            <section className="relative pt-32 pb-24 overflow-hidden min-h-[500px] flex items-center">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/hero-contact.webp"
                        alt="Bengkel Wiguna Service"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                    {/* Gradient Overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#224297]/95 via-[#224297]/85 to-[#224297]/70" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
                </div>

                <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs font-bold uppercase tracking-wider text-white mb-6">
                        <Icon icon="solar:chat-circle-bold" width={16} />
                        Hubungi Kami
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-6 max-w-3xl">
                        Ada yang Bisa Kami Bantu?
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg sm:text-xl text-white/80 font-medium leading-relaxed max-w-2xl">
                        Konsultasi gratis seputar keluhan kendaraan Anda dengan tim teknisi berpengalaman. Diagnosa transparan tanpa drama!
                    </p>

                    {/* Quick Stats */}
                    <div className="flex flex-wrap items-center gap-8 mt-10">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-2xl bg-[#ffd900] flex items-center justify-center">
                                <Icon icon="solar:clock-square-bold" width={24} className="text-[#224297]" />
                            </div>
                            <div>
                                <p className="text-2xl font-black text-white">14+</p>
                                <p className="text-sm text-white/60">Tahun Pengalaman</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-2xl bg-[#ffd900] flex items-center justify-center">
                                <Icon icon="solar:users-group-two-rounded-bold" width={24} className="text-[#224297]" />
                            </div>
                            <div>
                                <p className="text-2xl font-black text-white">15K+</p>
                                <p className="text-sm text-white/60">Pelanggan Puas</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-2xl bg-[#ffd900] flex items-center justify-center">
                                <Icon icon="solar:star-bold" width={24} className="text-[#224297]" />
                            </div>
                            <div>
                                <p className="text-2xl font-black text-white">4.9</p>
                                <p className="text-sm text-white/60">Rating Google</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ Main Content Section ═══ */}
            <section className="relative bg-white py-16 lg:py-24">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">

                        {/* ═══ Left Column - Contact Info ═══ */}
                        <div className="lg:col-span-2 space-y-8">

                            {/* WhatsApp Card */}
                            <div className="bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl" />
                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                            <Icon icon="fa6-brands:whatsapp" width={32} />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-white/80">Booking & Konsultasi</p>
                                            <p className="text-2xl font-black">Chat Minna</p>
                                        </div>
                                    </div>
                                    <p className="text-white/80 font-medium mb-6 leading-relaxed">
                                        Respons cepat dalam 5 menit. Booking jadwal service tanpa antre!
                                    </p>
                                    <a
                                        href="https://wa.me/6287817773888?text=Halo%20Minna,%20saya%20mau%20tanya%20seputar%20layanan%20servis%20(web)"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        data-source="contact-whatsapp"
                                        className="inline-flex items-center justify-center gap-3 w-full py-4 bg-white hover:bg-gray-100 text-[#128C7E] font-black uppercase tracking-wider rounded-xl transition-all shadow-lg"
                                    >
                                        <Icon icon="fa6-brands:whatsapp" width={24} />
                                        Chat Sekarang
                                    </a>
                                </div>
                            </div>

                            {/* Info Cards Grid */}
                            <div className="grid sm:grid-cols-2 gap-4">
                                {/* Phone */}
                                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-[#224297]/20 transition-colors">
                                    <div className="w-12 h-12 rounded-xl bg-[#224297]/10 flex items-center justify-center mb-4">
                                        <Icon icon="solar:phone-bold" width={24} className="text-[#224297]" />
                                    </div>
                                    <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Telepon</p>
                                    <a href="tel:+6287817773888" className="text-lg font-black text-gray-900 hover:text-[#224297] transition-colors">
                                        0878-1777-3888
                                    </a>
                                </div>

                                {/* Email */}
                                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-[#224297]/20 transition-colors">
                                    <div className="w-12 h-12 rounded-xl bg-[#224297]/10 flex items-center justify-center mb-4">
                                        <Icon icon="solar:mail-bold" width={24} className="text-[#224297]" />
                                    </div>
                                    <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Email</p>
                                    <a href="mailto:info@bengkelwiguna.com" className="text-sm font-black text-gray-900 hover:text-[#224297] transition-colors break-all">
                                        info@bengkelwiguna.com
                                    </a>
                                </div>

                                {/* Location */}
                                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-[#224297]/20 transition-colors sm:col-span-2">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-[#224297]/10 flex items-center justify-center shrink-0">
                                            <Icon icon="solar:map-point-bold" width={24} className="text-[#224297]" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Alamat</p>
                                            <p className="text-sm font-bold text-gray-900 leading-relaxed">
                                                Jl. Margonda No.268, Kemiri Muka, Kecamatan Beji, Kota Depok 16423
                                            </p>
                                            <a
                                                href="https://maps.app.goo.gl/J3s5ZhpwFttGFeeUA"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1 text-sm font-bold text-[#224297] hover:text-[#1a3567] mt-2 transition-colors"
                                            >
                                                Lihat di Maps
                                                <Icon icon="solar:arrow-right-linear" width={16} />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Hours */}
                                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-[#224297]/20 transition-colors sm:col-span-2">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-[#ffd900]/20 flex items-center justify-center shrink-0">
                                            <Icon icon="solar:clock-circle-bold" width={24} className="text-[#224297]" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Jam Operasional</p>
                                            <div className="space-y-2">
                                                <div className="flex justify-between items-center">
                                                    <span className="text-sm font-medium text-gray-700">Senin - Sabtu</span>
                                                    <span className="text-sm font-bold text-gray-900">08:00 - 17:00 WIB</span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-sm font-medium text-gray-700">Minggu</span>
                                                    <span className="text-sm font-bold text-gray-900">09:00 - 15:00 WIB</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="bg-gradient-to-br from-[#224297] to-[#0f1d45] rounded-3xl p-8 text-white">
                                <h3 className="text-lg font-black mb-4">Ikuti Kami</h3>
                                <p className="text-white/70 text-sm font-medium mb-6">Dapatkan info promo dan tips merawat kendaraan di media sosial kami.</p>
                                <div className="flex gap-3">
                                    <a href="https://www.instagram.com/bengkelwiguna/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                                        <Icon icon="fa6-brands:instagram" width={22} />
                                    </a>
                                    <a href="https://www.facebook.com/bengkelwiguna" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                                        <Icon icon="fa6-brands:facebook-f" width={22} />
                                    </a>
                                    <a href="https://www.youtube.com/@bengkelwiguna" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                                        <Icon icon="fa6-brands:youtube" width={22} />
                                    </a>
                                    <a href="https://www.tiktok.com/@bengkelwiguna" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                                        <Icon icon="fa6-brands:tiktok" width={22} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* ═══ Right Column - Contact Form ═══ */}
                        <div className="lg:col-span-3">
                            <div className="bg-white rounded-3xl p-8 lg:p-10 border border-gray-100 shadow-xl">
                                {/* Header */}
                                <div className="mb-8">
                                    <h2 className="text-2xl lg:text-3xl font-black text-gray-900 mb-2">
                                        Kirim Pesan
                                    </h2>
                                    <p className="text-gray-600 font-medium">
                                        Ceritakan keluhan kendaraan Anda, tim kami akan segera merespons.
                                    </p>
                                </div>

                                {/* Form */}
                                <form onSubmit={handleSubmit} data-track="contact-form" className="space-y-5">
                                    {/* Name Row */}
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div className="space-y-2">
                                            <label htmlFor="firstName" className="text-sm font-bold text-gray-700">
                                                Nama Depan <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                placeholder="Budi"
                                                required
                                                className="w-full px-4 py-3.5 text-base border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#224297] focus:border-transparent transition-all placeholder:text-gray-400"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="lastName" className="text-sm font-bold text-gray-700">
                                                Nama Belakang
                                            </label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                placeholder="Santoso"
                                                className="w-full px-4 py-3.5 text-base border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#224297] focus:border-transparent transition-all placeholder:text-gray-400"
                                            />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-bold text-gray-700">
                                            Email <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="budi.santoso@gmail.com"
                                            required
                                            className="w-full px-4 py-3.5 text-base border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#224297] focus:border-transparent transition-all placeholder:text-gray-400"
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-bold text-gray-700">
                                            Nomor WhatsApp <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+62 878-1777-3888"
                                            required
                                            className="w-full px-4 py-3.5 text-base border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#224297] focus:border-transparent transition-all placeholder:text-gray-400"
                                        />
                                    </div>

                                    {/* Vehicle */}
                                    <div className="space-y-2">
                                        <label htmlFor="vehicle" className="text-sm font-bold text-gray-700">
                                            Tipe & Merk Kendaraan
                                        </label>
                                        <input
                                            type="text"
                                            id="vehicle"
                                            name="vehicle"
                                            value={formData.vehicle}
                                            onChange={handleChange}
                                            placeholder="Contoh: Honda HR-V 2021"
                                            className="w-full px-4 py-3.5 text-base border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#224297] focus:border-transparent transition-all placeholder:text-gray-400"
                                        />
                                    </div>

                                    {/* Service Type */}
                                    <div className="space-y-2">
                                        <label htmlFor="service" className="text-sm font-bold text-gray-700">
                                            Jenis Layanan
                                        </label>
                                        <select
                                            id="service"
                                            name="service"
                                            className="w-full px-4 py-3.5 text-base border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#224297] focus:border-transparent transition-all bg-white text-gray-900"
                                        >
                                            <option value="">Pilih layanan...</option>
                                            <option value="tune-up">Tune Up</option>
                                            <option value="ganti-oli">Ganti Oli</option>
                                            <option value="ac-mobil">AC Mobil</option>
                                            <option value="spooring">Spooring & Balancing</option>
                                            <option value="kaki-kaki">Kaki-Kaki</option>
                                            <option value="sistem-rem">Sistem Rem</option>
                                            <option value="body-repair">Body Repair</option>
                                            <option value="diagnosa">Diagnosa Scanner</option>
                                            <option value="lainnya">Lainnya</option>
                                        </select>
                                    </div>

                                    {/* Message */}
                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-bold text-gray-700">
                                            Keluhan Kendaraan <span className="text-red-500">*</span>
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={4}
                                            placeholder="Ceritakan keluhan kendaraan Anda, misalnya: AC tidak dingin sudah 2 minggu..."
                                            required
                                            className="w-full px-4 py-3.5 text-base border border-gray-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-[#224297] focus:border-transparent transition-all placeholder:text-gray-400"
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        className="w-full py-4 text-white text-base font-black bg-[#224297] hover:bg-[#1a3567] rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                                    >
                                        <Icon icon="solar:paper-plane-bold" width={22} />
                                        Kirim Pesan
                                    </button>

                                    {/* Success Message */}
                                    {submitted && (
                                        <div className="p-5 bg-green-50 border border-green-200 rounded-xl text-green-700 text-center">
                                            <div className="flex items-center justify-center gap-2 mb-2">
                                                <Icon icon="solar:check-circle-bold" width={24} />
                                                <span className="font-bold">Pesan Terkirim!</span>
                                            </div>
                                            <p className="text-sm">Tim kami akan segera menghubungi Anda dalam 1x24 jam.</p>
                                        </div>
                                    )}

                                    {/* Alternative Contact */}
                                    <div className="relative py-6">
                                        <div className="absolute inset-0 flex items-center">
                                            <div className="w-full border-t border-gray-200" />
                                        </div>
                                        <div className="relative flex justify-center text-sm">
                                            <span className="px-4 bg-white text-gray-500">atau</span>
                                        </div>
                                    </div>

                                    <a
                                        href="https://wa.me/6287817773888?text=Halo%20Minna,%20saya%20mau%20tanya%20seputar%20layanan%20servis%20(web)"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        data-source="contact-form-whatsapp"
                                        className="w-full py-4 text-white text-base font-black bg-[#25D366] hover:bg-[#128C7E] rounded-xl transition-all duration-300 shadow-lg flex items-center justify-center gap-3"
                                    >
                                        <Icon icon="fa6-brands:whatsapp" width={24} />
                                        Chat via WhatsApp
                                    </a>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ Services Tags Section ═══ */}
            <section className="bg-gray-50 py-16 border-t border-gray-100">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl font-black text-gray-900 mb-2">Layanan Bengkel Wiguna</h2>
                        <p className="text-gray-600 font-medium">Pilihan layanan profesional untuk kendaraan Anda</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            { name: 'Tune Up', icon: 'solar:settings-bold' },
                            { name: 'Spooring & Balancing', icon: 'solar:wheel-bold' },
                            { name: 'AC Mobil', icon: 'solar:snowflake-bold' },
                            { name: 'Ganti Oli', icon: 'solar:drop-bold' },
                            { name: 'Sistem Rem', icon: 'solar:shield-check-bold' },
                            { name: 'Kaki Kaki', icon: 'solar:car-bold' },
                            { name: 'Overhaul Mesin', icon: 'solar:engine-bold' },
                            { name: 'Engine Flush', icon: 'solar:lightning-bold' },
                            { name: 'Radiator Coolant', icon: 'solar:radiator-bold' },
                            { name: 'Diagnosa Scanner', icon: 'solar:diagnostics-bold' },
                            { name: 'Servis Berkala', icon: 'solar:calendar-bold' },
                            { name: 'Body Repair', icon: 'solar:car-crash-bold' }
                        ].map((service) => (
                            <Link
                                key={service.name}
                                href={`/services`}
                                className="group inline-flex items-center gap-2 px-5 py-3 bg-white hover:bg-[#224297] border border-gray-200 hover:border-[#224297] rounded-full text-sm font-bold text-gray-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                            >
                                <Icon icon={service.icon} width={18} className="text-[#224297] group-hover:text-white transition-colors" />
                                {service.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
