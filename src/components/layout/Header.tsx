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
    hideOnTop?: boolean;
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
    servicesData = [],
    hideOnTop = false
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
                { name: 'Tune Up', href: '/services/tune-up', icon: '🛢️' },
                { name: 'Ganti Ban', href: '/services/ganti-ban', icon: '🛞' },
                { name: 'Spooring', href: '/services/spooring', icon: '⚖️' },
            ]
        },
        {
            title: 'Servis AC',
            items: [
                { name: 'Service AC Mobil', href: '/services/servis-ac-mobil', icon: '❄️' },
                { name: 'Flush AC', href: '/services/flushing-ac', icon: '🌬️' },
                { name: 'Tambah Freon', href: '/services/isi-freon-ac', icon: '💨' },
            ]
        },
        {
            title: 'Kaki-Kaki',
            items: [
                { name: 'Servis Rem', href: '/services/servis-rem', icon: '🔧' },
                { name: 'Kaki-Kaki / Suspensi', href: '/services/servis-kaki-kaki', icon: '🦵' },
                { name: 'Balancing', href: '/services/balancing', icon: '⚡' },
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

    // Determine header visibility classes based on hideOnTop and scrolled state
    const visibilityClass = hideOnTop && !scrolled ? 'opacity-0 pointer-events-none -translate-y-4' : 'opacity-100 pointer-events-auto translate-y-0';

    return (
        <>
            <header
                className={`header-wrapper w-full ${position} top-0 left-0 z-40 transition-all duration-500 ${visibilityClass} ${headerClass === "bg-color-none" ? "bg-color-none" : ""} ${theme} ${scrolled ? "glass-header bg-white/80 backdrop-blur-xl shadow-sm border-b border-gray-200/50" : `${bgColor}`}`}
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
                                {(() => {
                                    const itemsToRender = menuItems && menuItems.length > 0 
                                        ? menuItems.map(item => ({
                                            title: item.name || item.label || "",
                                            href: item.path || "/",
                                            subMenu: item.children?.map((child: any) => ({
                                                title: child.name || child.label || child.title || "",
                                                href: child.path || "/"
                                            }))
                                        }))
                                        : [
                                            { title: 'Beranda', href: '/' },
                                            { title: 'Layanan', href: '/services', isMegaMenu: true },
                                            { title: 'Promosi', href: '/promosi' },
                                            { title: 'Paket Service', href: '/paket-service' },
                                            { title: 'Spesialis', href: '/layanan-spesialis' },
                                            { title: 'Tentang Wiguna', href: '/tentang-wiguna' },
                                            { title: 'Blog', href: '/blog' },
                                            { title: 'Lokasi', href: '/lokasi' },
                                        ];

                                    return itemsToRender.map((item, index) => {
                                        const isLayanan = item.title.toLowerCase() === 'layanan' || (item as any).isMegaMenu;

                                        if (isLayanan) {
                                            return (
                                                <div
                                                    key={index}
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
                                                        {item.title}
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
                                                            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 w-[850px]">
                                                                <div className="grid grid-cols-4 gap-8">
                                                                    {serviceCategories.map((category, catIndex) => (
                                                                        <div key={catIndex}>
                                                                            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4 px-2">
                                                                                {category.title}
                                                                            </h3>
                                                                            <ul className="space-y-1">
                                                                                {category.items.map((subItem, itemIndex) => (
                                                                                    <li key={itemIndex}>
                                                                                        <Link
                                                                                            href={subItem.href}
                                                                                            onClick={() => setLayananOpen(false)}
                                                                                            className="group flex items-start gap-3 p-2 rounded-xl hover:bg-gray-50 transition-all"
                                                                                        >
                                                                                            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100/80 group-hover:bg-white group-hover:shadow-sm border border-transparent group-hover:border-gray-200 transition-all flex-shrink-0">
                                                                                                <span className="text-sm">{subItem.icon}</span>
                                                                                            </div>
                                                                                            <div className="flex flex-col pt-1">
                                                                                                <span className="text-sm font-medium text-gray-600 group-hover:text-brand-blue transition-colors leading-snug">
                                                                                                    {String(subItem.name)}
                                                                                                </span>
                                                                                            </div>
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
                                            );
                                        }

                                        if ((item as any).subMenu && (item as any).subMenu.length > 0) {
                                            return (
                                                <div key={index} className="relative group">
                                                    <button className="flex items-center gap-1 px-4 py-7 text-gray-700 hover:text-brand-blue font-medium text-sm transition-colors">
                                                        {item.title}
                                                        <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                                                    </button>
                                                    <div className="absolute top-full left-0 pt-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                                        <div className="bg-white rounded-xl shadow-lg border border-gray-100 py-2 w-48">
                                                            {(item as any).subMenu.map((sub: any, subIndex: number) => (
                                                                <Link
                                                                    key={subIndex}
                                                                    href={sub.href}
                                                                    className="block px-4 py-2 text-sm text-gray-700 hover:text-brand-blue hover:bg-gray-50 transition-colors"
                                                                >
                                                                    {sub.title}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        }

                                        return (
                                            <Link
                                                key={index}
                                                href={item.href || '/'}
                                                className="px-4 py-7 text-gray-700 hover:text-brand-blue font-medium text-sm transition-colors"
                                            >
                                                {item.title}
                                            </Link>
                                        );
                                    });
                                })()}
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
