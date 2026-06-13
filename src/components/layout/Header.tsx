'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import MobileMenu from './MobileMenu';
import SearchBox from '../ui/Search';
import Image from 'next/image';
import Button from '../ui/Button';
import { NavMenuItem, LayananSpesialis, Service } from '@/types/wordpress';

interface HeaderProps {
    btnColor?: string;
    btnlinkColor?: string;
    bgColor?: string;
    logo?: string;
    headerClass?: string;
    position?: string;
    theme?: 'header-dark' | 'header-light';
    logoWidth?: number;
    showSearch?: boolean;
    menuItems?: NavMenuItem[];
    spesialisData?: LayananSpesialis[];
    servicesData?: Service[];
}

export default function Header({
    btnColor = 'bg-brand-gold',
    bgColor = "bg-transparent",
    headerClass = "",
    position = "absolute",
    btnlinkColor = "text-[#1a3567]",
    theme = "header-light",
    logo = "/images/logo/logo-square.avif",
    logoWidth = 60,
    showSearch = true,
    menuItems = [],
    spesialisData = [],
    servicesData = []
}: HeaderProps) {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [layananOpen, setLayananOpen] = useState(false);
    const layananRef = useRef<HTMLDivElement>(null);

    const toggleMobileMenu = () => setMobileOpen(prev => !prev);

    // Scroll listener for sticky header
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mega menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (layananRef.current && !layananRef.current.contains(event.target as Node)) {
                setLayananOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Close mega menu on escape key
    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setLayananOpen(false);
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, []);

    // Service categories for mega menu
    const serviceCategories = [
        {
            title: 'Perawatan Rutin',
            items: [
                { name: 'Ganti Oli', href: '/services/ganti-oli', icon: '🛢️' },
                { name: 'Ganti Ban', href: '/services/ganti-ban', icon: '🔘' },
                { name: 'Spooring & Balancing', href: '/services/spooring-balancing', icon: '⚙️' },
            ]
        },
        {
            title: 'Servis AC',
            items: [
                { name: 'Service AC Mobil', href: '/services/service-ac', icon: '❄️' },
                { name: 'Flush AC', href: '/services/flush-ac', icon: '🧊' },
                { name: 'Tambah Freon', href: '/services/tambah-freon', icon: '💨' },
            ]
        },
        {
            title: 'Kaki-Kaki',
            items: [
                { name: 'Shockbreaker', href: '/services/shockbreaker', icon: '🔧' },
                { name: 'Kaki-Kaki / Suspensi', href: '/services/kaki-kaki', icon: '🦵' },
                { name: 'Busi & Koil', href: '/services/busi-koil', icon: '⚡' },
            ]
        },
        {
            title: 'Layanan Spesialis',
            items: spesialisData.slice(0, 4).map(s => ({
                name: s.title || 'Layanan',
                href: `/layanan-spesialis/${s.slug}`,
                icon: '🔩'
            }))
        }
    ];

    return (
        <>
            <header
                className={`header-wrapper w-full ${position} top-0 left-0 z-40 transition-all duration-300 ${headerClass === "bg-color-none" ? "bg-color-none" : ""} ${theme} ${scrolled ? "scroll-header shadow-md" : `${bgColor}`}`}
            >
                <div className="max-w-screen-xl mx-auto px-4">
                    <div className={`${headerClass === "bg-color-none" ? "bg-gray-100 rounded-lg px-3" : ""}`}>
                        <nav className="flex items-center justify-between">

                            {/* Logo */}
                            <Link href="/" className="flex-shrink-0 py-2">
                                <Image
                                    src={logo}
                                    alt="Bengkel Wiguna"
                                    width={logoWidth}
                                    height={logoWidth}
                                    priority
                                    className="h-auto w-full"
                                />
                            </Link>

                            {/* Desktop Navigation - Hidden on mobile */}
                            <div className="hidden lg:flex items-center gap-1">
                                {/* Beranda */}
                                <Link
                                    href="/"
                                    className="px-4 py-7 text-gray-700 hover:text-brand-blue font-medium text-sm transition-colors"
                                >
                                    Beranda
                                </Link>

                                {/* Layanan - with Mega Menu */}
                                <div
                                    ref={layananRef}
                                    className="relative"
                                    onMouseEnter={() => setLayananOpen(true)}
                                    onMouseLeave={() => setLayananOpen(false)}
                                >
                                    <button
                                        className={`flex items-center gap-1 px-4 py-7 font-medium text-sm transition-colors ${
                                            layananOpen ? 'text-brand-blue' : 'text-gray-700 hover:text-brand-blue'
                                        }`}
                                        aria-expanded={layananOpen}
                                        aria-haspopup="true"
                                    >
                                        Layanan
                                        <ChevronDown
                                            size={14}
                                            className={`transition-transform duration-200 ${layananOpen ? 'rotate-180' : ''}`}
                                        />
                                    </button>

                                    {/* Mega Menu Dropdown */}
                                    {layananOpen && (
                                        <div
                                            className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                                            onMouseEnter={() => setLayananOpen(true)}
                                        >
                                            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 min-w-[600px]">
                                                <div className="grid grid-cols-4 gap-6">
                                                    {serviceCategories.map((category, catIndex) => (
                                                        <div key={catIndex}>
                                                            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                                                                {category.title}
                                                            </h3>
                                                            <ul className="space-y-2">
                                                                {category.items.map((item, itemIndex) => (
                                                                    <li key={itemIndex}>
                                                                        <Link
                                                                            href={item.href}
                                                                            onClick={() => setLayananOpen(false)}
                                                                            className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-brand-blue hover:bg-brand-blue/5 rounded-lg transition-colors text-sm"
                                                                        >
                                                                            <span className="text-base">{item.icon}</span>
                                                                            {String(item.name)}
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    ))}
                                                </div>

                                                {/* CTA Banner */}
                                                <div className="mt-6 pt-6 border-t border-gray-100">
                                                    <Link
                                                        href="/services"
                                                        onClick={() => setLayananOpen(false)}
                                                        className="flex items-center justify-between px-4 py-3 bg-brand-blue/5 hover:bg-brand-blue/10 rounded-xl transition-colors"
                                                    >
                                                        <span className="font-semibold text-brand-blue">Lihat Semua Layanan</span>
                                                        <ChevronRight size={18} className="text-brand-blue" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Promosi */}
                                <Link
                                    href="/promosi"
                                    className="px-4 py-7 text-gray-700 hover:text-brand-blue font-medium text-sm transition-colors"
                                >
                                    Promosi
                                </Link>

                                {/* Paket Service */}
                                <Link
                                    href="/paket-service"
                                    className="px-4 py-7 text-gray-700 hover:text-brand-blue font-medium text-sm transition-colors"
                                >
                                    Paket Service
                                </Link>

                                {/* Layanan Spesialis */}
                                <Link
                                    href="/layanan-spesialis"
                                    className="px-4 py-7 text-gray-700 hover:text-brand-blue font-medium text-sm transition-colors"
                                >
                                    Spesialis
                                </Link>

                                {/* Tentang Wiguna */}
                                <Link
                                    href="/tentang-wiguna"
                                    className="px-4 py-7 text-gray-700 hover:text-brand-blue font-medium text-sm transition-colors"
                                >
                                    Tentang Wiguna
                                </Link>

                                {/* Blog */}
                                <Link
                                    href="/blog"
                                    className="px-4 py-7 text-gray-700 hover:text-brand-blue font-medium text-sm transition-colors"
                                >
                                    Blog
                                </Link>

                                {/* Lokasi */}
                                <Link
                                    href="/lokasi"
                                    className="px-4 py-7 text-gray-700 hover:text-brand-blue font-medium text-sm transition-colors"
                                >
                                    Lokasi
                                </Link>
                            </div>

                            {/* Right Side Actions */}
                            <div className="flex items-center gap-3">
                                {/* Search - Desktop Only */}
                                <div className="hidden lg:block">
                                    <SearchBox />
                                </div>

                                {/* CTA Button - Desktop Only */}
                                <div className="hidden xl:block">
                                    <Button
                                        href='https://wa.me/6287817773888?text=halo%20minna,%20saya%20ingin%20tanya%20seputar%20servis%20mobil%20di%20bengkel%20wiguna'
                                        label='Chat Minna'
                                        className="text-sm font-semibold"
                                        bgColor={btnColor}
                                        textColor={btnlinkColor}
                                    />
                                </div>

                                {/* Mobile Menu Toggle - Mobile Only */}
                                <button
                                    onClick={toggleMobileMenu}
                                    className="lg:hidden flex items-center justify-center w-11 h-11 rounded-lg bg-white shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors"
                                    aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
                                    aria-expanded={mobileOpen}
                                >
                                    {mobileOpen ? (
                                        <X size={22} className="text-gray-700" />
                                    ) : (
                                        <Menu size={22} className="text-gray-700" />
                                    )}
                                </button>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            <MobileMenu
                mobileOpen={mobileOpen}
                toggleMobileMenu={toggleMobileMenu}
                logo={logo}
                dynamicItems={menuItems}
                spesialisData={spesialisData}
                servicesData={servicesData}
            />
        </>
    );
}
