'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import MobileMenu from './MobileMenu';
import SearchBox from '../ui/Search';
import Image from 'next/image';
import Button from '../ui/Button';
import { NavMenuItem, LayananSpesialis, Service } from '@/types/wordpress';
import { getRelativeUrl } from '@/lib/utils';

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
    const [isDark, setIsDark] = useState(false);

    const toggleMobileMenu = () => setMobileOpen(prev => !prev);

    // Scroll listener for sticky header
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Dark mode listener
    useEffect(() => {
        const checkDarkMode = () => {
            setIsDark(document.body.classList.contains('dark'));
        };

        checkDarkMode();
        const observer = new MutationObserver(checkDarkMode);
        observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

        return () => observer.disconnect();
    }, []);



    // Determine header visibility classes based on hideOnTop and scrolled state
    const visibilityClass = hideOnTop && !scrolled ? 'opacity-0 pointer-events-none -translate-y-4' : 'opacity-100 pointer-events-auto translate-y-0';

    // Dark mode header background
    const darkModeBg = isDark ? (scrolled ? 'dark-glass-header' : 'dark-bg-header') : '';

    return (
        <>
            <header
                className={`header-wrapper w-full ${position} top-0 left-0 z-[100] transition-all duration-500 ${visibilityClass} ${headerClass === "bg-color-none" ? "bg-color-none" : ""} ${theme} ${scrolled ? "glass-header bg-white/80 backdrop-blur-xl shadow-sm border-b border-gray-200/50" : `${bgColor}`} ${darkModeBg}`}
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
                            <div className="hidden xl:flex items-center gap-1">
                                {(() => {
                                    const itemsToRender = menuItems && menuItems.length > 0
                                        ? menuItems.map(item => ({
                                            title: item.name || item.label || "",
                                            href: getRelativeUrl(item.path),
                                            subMenu: item.children?.map((child: any) => ({
                                                title: child.name || child.label || child.title || "",
                                                href: getRelativeUrl(child.path)
                                            }))
                                        }))
                                        : [
                                            { title: 'Beranda', href: '/' },
                                            { title: 'Layanan', href: '/services', isMegaMenu: true },
                                            { title: 'Promosi', href: '/promosi' },
                                            { title: 'Paket Service', href: '/paket-service' },
                                            { title: 'Layanan Spesialis', href: '/layanan-spesialis' },
                                            { title: 'Tentang Wiguna', href: '/tentang-wiguna' },
                                            { title: 'Blog', href: '/blog' },
                                            { title: 'Lokasi', href: '/lokasi' },
                                        ];

                                    return itemsToRender.map((item, index) => {


                                        if ((item as any).subMenu && (item as any).subMenu.length > 0) {
                                            return (
                                                <div key={index} className="relative group">
                                                    <button className="flex items-center gap-1 px-4 py-7 text-gray-700 dark:text-gray-200 hover:text-brand-blue dark:hover:text-[#ffd900] font-medium text-sm transition-colors">
                                                        {item.title}
                                                        <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                                                    </button>
                                                    <div className="absolute top-full left-0 pt-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                                        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 py-2 w-48">
                                                            {(item as any).subMenu.map((sub: any, subIndex: number) => (
                                                                <Link
                                                                    key={subIndex}
                                                                    href={sub.href}
                                                                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:text-brand-blue dark:hover:text-[#ffd900] hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
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
                                                className="px-4 py-7 text-gray-700 dark:text-gray-200 hover:text-brand-blue dark:hover:text-[#ffd900] font-medium text-sm transition-colors"
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
                                <div className="hidden xl:block">
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
                                    className="xl:hidden flex items-center justify-center w-11 h-11 rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                                    aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
                                    aria-expanded={mobileOpen}
                                >
                                    {mobileOpen ? (
                                        <X size={22} className="text-gray-700 dark:text-gray-200" />
                                    ) : (
                                        <Menu size={22} className="text-gray-700 dark:text-gray-200" />
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
