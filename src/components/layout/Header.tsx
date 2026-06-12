'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import MobileMenu from './MobileMenu';
import SearchBox from '../ui/Search';
import Image from 'next/image';
import Button from '../ui/Button';
import { NavMenuItem, LayananSpesialis } from '@/types/wordpress';

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
    spesialisData = []
}: HeaderProps) {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMobileMenu = () => setMobileOpen(prev => !prev);

    // Scroll listener for sticky header
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
                            <div className="hidden lg:flex items-center gap-6">
                                {[
                                    { name: 'Beranda', href: '/' },
                                    { name: 'Layanan', href: '/services' },
                                    { name: 'Promosi', href: '/promosi' },
                                    { name: 'Paket Service', href: '/paket-service' },
                                    { name: 'Tentang Wiguna', href: '/tentang-wiguna' },
                                    { name: 'Blog', href: '/blog' },
                                    { name: 'Lokasi', href: '/contact' },
                                ].map((item, index) => (
                                    <Link
                                        key={index}
                                        href={item.href}
                                        className="text-gray-700 hover:text-blue-600 font-medium text-sm transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
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
            />
        </>
    );
}