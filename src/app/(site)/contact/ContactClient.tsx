"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    vehicle: string;
    service: string;
    message: string;
}

interface ServiceTag {
    name: string;
    slug: string;
}

interface ContactClientProps {
    serviceTags?: ServiceTag[];
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactClient({ serviceTags = [] }: ContactClientProps) {
    const [status, setStatus] = useState<FormStatus>('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        vehicle: '',
        service: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Redirect to WordPress CF7 booking page
        window.location.href = 'https://bengkelwiguna.com/booking/';
    };

    return (
        <div className="relative font-sans min-h-screen">
            {/* ═══ Hero Section - Real Google Maps ═══ */}
            <section className="relative overflow-hidden min-h-[400px] lg:min-h-[450px]">
                {/* Google Maps Embed */}
                <div className="absolute inset-0">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.2!2d106.8!3d-6.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjMnMDQuOCJTIDEwNsKwNDknNTQuOCJF!5e0!3m2!1sen!2sid!4v1234567890!5m2!1sen!2sid"
                        className="w-full h-full border-0"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Lokasi Bengkel Wiguna - Jl. Margonda No.268, Depok"
                    />
                    {/* Dark Overlay - Red tint for marker visibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Animated Location Marker - Hidden on Mobile */}
                <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full z-20 pointer-events-none">
                    <div className="relative flex flex-col items-center">
                        {/* SVG Map Pin - Red Standard with Glow */}
                        <div className="relative">
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-red-500/30 rounded-full blur-xl animate-pulse" style={{ animationDuration: '1.5s' }} />

                            <svg
                                className="w-12 h-16 animate-bounce relative z-10"
                                style={{ animationDuration: '1.8s' }}
                                viewBox="0 0 24 36"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {/* Pin Shadow */}
                                <ellipse cx="12" cy="34" rx="6" ry="2" fill="#1a1a1a" opacity="0.2" />

                                {/* Pin Body - Red */}
                                <path
                                    d="M12 0C5.373 0 0 5.373 0 12c0 9 12 24 12 24s12-15 12-24c0-6.627-5.373-12-12-12z"
                                    fill="#DC2626"
                                />

                                {/* Inner Circle - White */}
                                <circle cx="12" cy="12" r="5" fill="white" />

                                {/* Center Dot - Red */}
                                <circle cx="12" cy="12" r="2.5" fill="#DC2626" />
                            </svg>
                        </div>

                        {/* Label */}
                        <div className="mt-1 px-3 py-1 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                            <p className="text-xs font-black text-red-600 dark:text-white whitespace-nowrap">Bengkel Wiguna</p>
                        </div>
                    </div>
                </div>

                {/* Main Container */}
                <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 lg:pt-6 h-full flex flex-col justify-between">
                    {/* Top Bar - Breadcrumb */}
                    <div className="flex items-center justify-between mb-4">
                        {/* Breadcrumb */}
                        <div className="flex items-center gap-2 text-sm font-medium text-white drop-shadow-lg">
                            <Icon icon="solar:home-2-linear" width={18} />
                            <span className="text-white/60">/</span>
                            <span>Hubungi Kami</span>
                        </div>

                        {/* Quick Actions */}
                        <a
                            href="https://maps.app.goo.gl/J3s5ZhpwFttGFeeUA"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-xl shadow-lg text-sm font-bold text-[#224297] dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                        >
                            <Icon icon="solar:external-link-linear" width={18} />
                            Buka di Maps
                        </a>
                    </div>

                    {/* Location Info Card - Floating on Map */}
                    <div className="max-w-xl">
                        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">
                            {/* Card Header */}
                            <div className="bg-[#224297] dark:bg-[#1a1a2e] px-5 py-3.5">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-[#ffd900] rounded-xl flex items-center justify-center shadow-lg">
                                            <Icon icon="solar:car-bold" width={22} className="text-[#224297]" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold uppercase tracking-wider text-white/70">Lokasi Workshop</p>
                                            <p className="text-lg font-black text-white">Bengkel Wiguna</p>
                                        </div>
                                    </div>
                                    <span className="px-2.5 py-1 bg-green-500/20 text-green-300 text-[10px] font-bold rounded-full flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                                        Buka Sekarang
                                    </span>
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="p-5">
                                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                                    {/* Address Info */}
                                    <div className="flex-1 space-y-3">
                                        <div className="flex items-start gap-2.5">
                                            <div className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center shrink-0">
                                                <Icon icon="solar:map-point-bold" width={16} className="text-[#224297]" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-0.5">Alamat</p>
                                                <p className="text-xs font-bold text-gray-900 dark:text-white leading-snug">
                                                    Jl. Margonda No.268, Kemiri Muka, Kecamatan Beji, Kota Depok 16423
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-2.5">
                                            <div className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center shrink-0">
                                                <Icon icon="solar:clock-circle-bold" width={16} className="text-[#224297]" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-0.5">Jam Operasional</p>
                                                <p className="text-xs font-bold text-gray-900 dark:text-white">Senin-Sabtu: 08:00 - 17:00</p>
                                                <p className="text-xs font-bold text-gray-900 dark:text-white">Minggu: 09:00 - 15:00</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex sm:flex-col gap-2 sm:min-w-[140px]">
                                        <a
                                            href="https://maps.app.goo.gl/J3s5ZhpwFttGFeeUA"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-[#224297] hover:bg-[#1a3567] text-white text-xs font-bold uppercase tracking-wide rounded-lg transition-all shadow-md hover:shadow-lg"
                                        >
                                            <Icon icon="solar:navigation-bold" width={16} />
                                            Petunjuk Arah
                                        </a>
                                        <a
                                            href="https://wa.me/6287817773888"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-[#25D366] hover:bg-[#128C7E] text-white text-xs font-bold rounded-lg transition-all shadow-md"
                                        >
                                            <Icon icon="fa6-brands:whatsapp" width={16} />
                                            Chat Minna
                                        </a>
                                        <a
                                            href="tel:+6287817773888"
                                            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-white text-xs font-bold rounded-lg transition-all"
                                        >
                                            <Icon icon="solar:phone-bold" width={16} />
                                            Telepon
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ Main Content Section ═══ */}
            <section className="relative bg-white dark:bg-gray-950 py-16 lg:py-24">
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
                                        className="inline-flex items-center justify-center gap-3 w-full py-4 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-[#128C7E] dark:text-white font-black uppercase tracking-wider rounded-xl transition-all shadow-lg"
                                    >
                                        <Icon icon="fa6-brands:whatsapp" width={24} />
                                        Chat Sekarang
                                    </a>
                                </div>
                            </div>

                            {/* Info Cards Grid */}
                            <div className="grid sm:grid-cols-2 gap-4">
                                {/* Phone */}
                                <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:border-[#224297]/20 transition-colors">
                                    <div className="w-12 h-12 rounded-xl bg-[#224297]/10 flex items-center justify-center mb-4">
                                        <Icon icon="solar:phone-bold" width={24} className="text-[#224297]" />
                                    </div>
                                    <p className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">Telepon</p>
                                    <a href="tel:+6287817773888" className="text-lg font-black text-gray-900 dark:text-white hover:text-[#224297] transition-colors">
                                        0878-1777-3888
                                    </a>
                                </div>

                                {/* Email */}
                                <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:border-[#224297]/20 transition-colors">
                                    <div className="w-12 h-12 rounded-xl bg-[#224297]/10 flex items-center justify-center mb-4">
                                        <Icon icon="solar:mail-bold" width={24} className="text-[#224297]" />
                                    </div>
                                    <p className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">Email</p>
                                    <a href="mailto:info@bengkelwiguna.com" className="text-sm font-black text-gray-900 dark:text-white hover:text-[#224297] transition-colors break-all">
                                        info@bengkelwiguna.com
                                    </a>
                                </div>

                                {/* Location */}
                                <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:border-[#224297]/20 transition-colors sm:col-span-2">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-[#224297]/10 flex items-center justify-center shrink-0">
                                            <Icon icon="solar:map-point-bold" width={24} className="text-[#224297]" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">Alamat</p>
                                            <p className="text-sm font-bold text-gray-900 dark:text-white leading-relaxed">
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
                                <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:border-[#224297]/20 transition-colors sm:col-span-2">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-[#ffd900]/20 flex items-center justify-center shrink-0">
                                            <Icon icon="solar:clock-circle-bold" width={24} className="text-[#224297]" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">Jam Operasional</p>
                                            <div className="space-y-2">
                                                <div className="flex justify-between items-center">
                                                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Senin - Sabtu</span>
                                                    <span className="text-sm font-bold text-gray-900 dark:text-white">08:00 - 17:00 WIB</span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Minggu</span>
                                                    <span className="text-sm font-bold text-gray-900 dark:text-white">09:00 - 15:00 WIB</span>
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
                            <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 lg:p-10 border border-gray-100 dark:border-gray-800 shadow-xl">
                                {/* Header */}
                                <div className="mb-8">
                                    <h2 className="text-2xl lg:text-3xl font-black text-gray-900 dark:text-white mb-2">
                                        Kirim Pesan
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                                        Ceritakan keluhan kendaraan Anda, tim kami akan segera merespons.
                                    </p>
                                </div>

                                {/* Success Message */}
                                {status === 'success' && (
                                    <div className="mb-6 p-5 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-xl">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Icon icon="solar:check-circle-bold" width={24} className="text-green-600 dark:text-green-400" />
                                            <span className="font-bold text-green-700 dark:text-green-300">Pesan Terkirim!</span>
                                        </div>
                                        <p className="text-sm text-green-600 dark:text-green-400">Tim kami akan segera menghubungi Anda dalam 1x24 jam.</p>
                                    </div>
                                )}

                                {/* Error Message */}
                                {status === 'error' && (
                                    <div className="mb-6 p-5 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-xl">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Icon icon="solar:danger-triangle-linear" width={24} className="text-red-600 dark:text-red-400" />
                                            <span className="font-bold text-red-700 dark:text-red-300">Gagal Terkirim</span>
                                        </div>
                                        <p className="text-sm text-red-600 dark:text-red-400">{errorMessage}</p>
                                    </div>
                                )}

                                {/* Form */}
                                <form onSubmit={handleSubmit} data-track="contact-form" className="space-y-5">
                                    {/* Name Row */}
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div className="space-y-2">
                                            <label htmlFor="firstName" className="text-sm font-bold text-gray-700 dark:text-gray-300">
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
                                                disabled={status === 'submitting'}
                                                className="w-full px-4 py-3.5 text-base border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#224297] focus:border-transparent transition-all placeholder:text-gray-400 disabled:bg-gray-100 dark:disabled:bg-gray-800 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="lastName" className="text-sm font-bold text-gray-700 dark:text-gray-300">
                                                Nama Belakang
                                            </label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                placeholder="Santoso"
                                                disabled={status === 'submitting'}
                                                className="w-full px-4 py-3.5 text-base border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#224297] focus:border-transparent transition-all placeholder:text-gray-400 disabled:bg-gray-100 dark:disabled:bg-gray-800 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                                            />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-bold text-gray-700 dark:text-gray-300">
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
                                            disabled={status === 'submitting'}
                                            className="w-full px-4 py-3.5 text-base border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#224297] focus:border-transparent transition-all placeholder:text-gray-400 disabled:bg-gray-100 dark:disabled:bg-gray-800 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-bold text-gray-700 dark:text-gray-300">
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
                                            disabled={status === 'submitting'}
                                            className="w-full px-4 py-3.5 text-base border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#224297] focus:border-transparent transition-all placeholder:text-gray-400 disabled:bg-gray-100 dark:disabled:bg-gray-800 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                                        />
                                    </div>

                                    {/* Vehicle */}
                                    <div className="space-y-2">
                                        <label htmlFor="vehicle" className="text-sm font-bold text-gray-700 dark:text-gray-300">
                                            Tipe & Merk Kendaraan
                                        </label>
                                        <input
                                            type="text"
                                            id="vehicle"
                                            name="vehicle"
                                            value={formData.vehicle}
                                            onChange={handleChange}
                                            placeholder="Contoh: Honda HR-V 2021"
                                            disabled={status === 'submitting'}
                                            className="w-full px-4 py-3.5 text-base border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#224297] focus:border-transparent transition-all placeholder:text-gray-400 disabled:bg-gray-100 dark:disabled:bg-gray-800 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                                        />
                                    </div>

                                    {/* Service Type */}
                                    <div className="space-y-2">
                                        <label htmlFor="service" className="text-sm font-bold text-gray-700 dark:text-gray-300">
                                            Jenis Layanan
                                        </label>
                                        <select
                                            id="service"
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            disabled={status === 'submitting'}
                                            className="w-full px-4 py-3.5 text-base border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#224297] focus:border-transparent transition-all bg-white dark:bg-gray-900 text-gray-900 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-800"
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
                                        <label htmlFor="message" className="text-sm font-bold text-gray-700 dark:text-gray-300">
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
                                            disabled={status === 'submitting'}
                                            className="w-full px-4 py-3.5 text-base border border-gray-200 dark:border-gray-700 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-[#224297] focus:border-transparent transition-all placeholder:text-gray-400 disabled:bg-gray-100 dark:bg-gray-900 dark:text-white"
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={status === 'submitting'}
                                        className="w-full py-4 text-white text-base font-black bg-[#224297] hover:bg-[#1a3567] rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {status === 'submitting' ? (
                                            <>
                                                <Icon icon="solar:loader-linear" width={22} className="animate-spin" />
                                                Mengirim...
                                            </>
                                        ) : (
                                            <>
                                                <Icon icon="solar:paper-plane-bold" width={22} />
                                                Kirim Pesan
                                            </>
                                        )}
                                    </button>

                                    {/* Alternative Contact */}
                                    <div className="relative py-6">
                                        <div className="absolute inset-0 flex items-center">
                                            <div className="w-full border-t border-gray-200 dark:border-gray-700" />
                                        </div>
                                        <div className="relative flex justify-center text-sm">
                                            <span className="px-4 bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400">atau</span>
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
            <section className="bg-gray-50 dark:bg-gray-900 py-16 border-t border-gray-100 dark:border-gray-800">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-2">Layanan Bengkel Wiguna</h2>
                        <p className="text-gray-600 dark:text-gray-400 font-medium">Pilihan layanan profesional untuk kendaraan Anda</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                        {serviceTags.length > 0 ? (
                            serviceTags.map((tag) => (
                                <Link
                                    key={tag.slug}
                                    href={`/services/${tag.slug}`}
                                    className="group inline-flex items-center gap-2 px-5 py-3 bg-white dark:bg-gray-800 hover:bg-[#224297] border border-gray-200 dark:border-gray-700 hover:border-[#224297] rounded-full text-sm font-bold text-gray-600 dark:text-gray-400 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                                >
                                    <Icon icon="solar:car-bold" width={18} className="text-[#224297] dark:text-gray-400 group-hover:text-white transition-colors" />
                                    {tag.name}
                                </Link>
                            ))
                        ) : (
                            // Fallback static tags
                            <>
                                {[
                                    { name: 'Tune Up', slug: 'tune-up' },
                                    { name: 'Spooring & Balancing', slug: 'spooring-balancing' },
                                    { name: 'AC Mobil', slug: 'ac-mobil' },
                                    { name: 'Ganti Oli', slug: 'ganti-oli' },
                                    { name: 'Sistem Rem', slug: 'sistem-rem' },
                                    { name: 'Kaki Kaki', slug: 'kaki-kaki' }
                                ].map((service) => (
                                    <Link
                                        key={service.slug}
                                        href={`/services/${service.slug}`}
                                        className="group inline-flex items-center gap-2 px-5 py-3 bg-white dark:bg-gray-800 hover:bg-[#224297] border border-gray-200 dark:border-gray-700 hover:border-[#224297] rounded-full text-sm font-bold text-gray-600 dark:text-gray-400 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                                    >
                                        <Icon icon="solar:car-bold" width={18} className="text-[#224297] dark:text-gray-400 group-hover:text-white transition-colors" />
                                        {service.name}
                                    </Link>
                                ))}
                            </>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
