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

    // Close menu on route change
    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileOpen]);

    // Scroll listener for sticky header
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`header-wrapper w-full ${position} top-0 left-0 z-50 transition-all duration-300 ease-in-out font-dm-sans ${headerClass === "bg-color-none" ? "bg-color-none top-0" : ""} ${theme} ${scrolled ? "scroll-header glass-header shadow-sm" : `${bgColor} border-transparent`
                }`}
        >
            <div className="max-w-screen-xl mx-auto px-4 lg:px-6">
                <div className={`${headerClass === "bg-color-none" ? "bg-gray-200 rounded-xl px-4 shadow-md" : ""}`} >
                    <nav className="flex items-center justify-between w-full relative">

                        {/* Logo */}
                        <Link href="/" className="flex items-center py-3 mr-4 lg:py-2">
                            <Image
                                src={logo}
                                alt="Bengkel Wiguna Logo"
                                width={logoWidth}
                                height={logoWidth}
                                priority
                                className='h-auto w-full'
                            />
                        </Link>

                        {/* MenuBlock handles both desktop and mobile */}
                        <MenuBlock
                            btnColor={btnColor}
                            btnlinkColor={btnlinkColor}
                            logo={logo}
                            mobileOpen={mobileOpen}
                            toggleMobileMenu={toggleMobileMenu}
                            dynamicItems={menuItems}
                            spesialisData={spesialisData}
                        />

                        {/* Right Icons */}
                        <div className="flex items-center gap-2 lg:gap-4 flex-shrink-0">
                            {/* Search Button */}
                            {showSearch && <SearchBox />}

                            {/* Chat Button - Desktop Only */}
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

                            {/* Mobile Menu Button */}
                            <button
                                aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
                                aria-expanded={mobileOpen}
                                className="lg:hidden flex items-center p-2 -mr-2"
                                onClick={toggleMobileMenu}
                            >
                                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>

                    </nav>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileOpen && (
                <div
                    className="fixed inset-0 bg-black/60 z-40 lg:hidden"
                    onClick={toggleMobileMenu}
                />
            )}
        </header >
    );
};

export default Header;