'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'react-feather';
import MenuBlock from './MenuBlock';
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

const Header = ({
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
}: HeaderProps) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Toggle mobile menu
    const toggleMobileMenu = () => setMobileOpen(!mobileOpen);

    // Scroll listener for sticky header
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Keep consistent logo width - NO shrink on scroll
    const currentLogoWidth = logoWidth;

    return (
        <header
            className={`header-wrapper w-full ${position} top-0 left-0 z-[70] transition-all duration-300 ease-in-out font-dm-sans ${headerClass === "bg-color-none" ? "bg-color-none top-0" : ""} ${theme} ${scrolled ? "scroll-header glass-header shadow-sm" : `${bgColor} border-transparent`
                }`}
        >
            <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
                <div className={`${headerClass === "bg-color-none" ? "bg-gray-200 rounded-xl px-4 shadow-md" : ""}`} >
                    <nav className="flex items-center justify-between w-full relative">

                        {/* Logo - Always same size, no shrink */}
                        <Link href="/" className="flex items-center lg:py-3 py-2 flex-shrink-0">
                            <div className="w-[60px] h-[60px] lg:w-[70px] lg:h-[70px] transition-all duration-300">
                                <Image
                                    src={logo}
                                    alt="Bengkel Wiguna Logo"
                                    width={60}
                                    height={60}
                                    priority
                                    className='h-full w-auto object-contain'
                                />
                            </div>
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex flex-grow justify-center">
                            <MenuBlock
                                btnColor={btnColor}
                                btnlinkColor="text-gray-900"
                                logo={logo}
                                mobileOpen={mobileOpen}
                                toggleMobileMenu={toggleMobileMenu}
                                dynamicItems={menuItems}
                                spesialisData={spesialisData}
                            />
                        </div>

                        {/* Right Icons */}
                        <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
                            {/* Search Button */}
                            {showSearch && <SearchBox />}

                            {/* Register/Chat Button - Desktop Only */}
                            <div className="hidden xl:block">
                                <Button
                                    href='https://wa.me/6287817773888?text=halo%20mon,%20saya%20ingin%20tanya%20seputar%20servis%20mobil%20saya%20di%20bengkel%20wiguna.%20(web)'
                                    label='Chat Minna'
                                    icon=""
                                    className="text-sm font-semibold rounded-full"
                                    bgColor={btnColor}
                                    textColor={btnlinkColor}
                                />
                            </div>

                            {/* Mobile Menu Button - Always Visible on Mobile */}
                            <button
                                aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
                                aria-expanded={mobileOpen}
                                className="flex items-center justify-center w-12 h-12 rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
                                onClick={toggleMobileMenu}
                            >
                                {mobileOpen ? (
                                    <X size={24} className="text-gray-900 dark:text-white" />
                                ) : (
                                    <Menu size={24} className="text-gray-900 dark:text-white" />
                                )}
                            </button>
                        </div>

                    </nav>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileOpen && (
                <div
                    className="fixed inset-0 bg-black/60 z-[100] lg:hidden"
                    onClick={toggleMobileMenu}
                />
            )}

            {/* Mobile Menu - Rendered Outside of Nav */}
            <MenuBlock
                btnColor={btnColor}
                btnlinkColor="text-gray-900"
                logo={logo}
                mobileOpen={mobileOpen}
                toggleMobileMenu={toggleMobileMenu}
                dynamicItems={menuItems}
                spesialisData={spesialisData}
            />
        </header >
    );
};

export default Header;
