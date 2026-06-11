'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'react-feather';
import MenuBlock from './MenuBlock';
import DarkToggle from './DarkToggle';
import SearchBox from '../ui/Search';
import Image from 'next/image';
import Button from '../ui/Button';

interface HeaderProps {
    btnColor?: string;
    btnlinkColor?: string;
    bgColor?: string;
    logo?: string;
    headerClass?: string;
    position?: string;
    theme?: 'header-dark' | 'header-light';
}

const Header = ({ btnColor = 'bg-blue-600', bgColor = "bg-transparent", headerClass = "", position = "absolute", btnlinkColor = "text-white", theme = "header-dark", logo = "/images/logo/logo.png" }: HeaderProps) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const getDarkLogo = (src: string) => {
        if (src.endsWith('.png')) return src.replace('.png', '-white.png');
        if (src.endsWith('.jpg')) return src.replace('.jpg', '-white.jpg');
        if (src.endsWith('.svg')) return src.replace('.svg', '-white.svg');
        return src; // fallback
    };

    // Toggle mobile menu
    const toggleMobileMenu = () => setMobileOpen(!mobileOpen);

    // Scroll listener for sticky header
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10); // change after 10px scroll
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`header-wrapper w-full ${position} left-0 z-50 transition-all duration-300 ease-in-out font-dm-sans ${headerClass === "bg-color-none" ? "bg-color-none top-0" : ""} ${theme} ${scrolled ? "scroll-header shadow-xs" : `${bgColor} border-transparent`
                }`}
        >
            <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
                <div className={`${headerClass === "bg-color-none" ? "bg-gray-200 rounded-xl px-4 shadow-md" : ""}`} >
                    <nav className="flex items-center justify-between w-full relative">

                        {/* Logo */}
                        <Link href="/" className="flex items-center lg:py-2 py-3 mr-5">
                            {/* Light Logo */}
                            <Image
                                src={logo}
                                alt="logo"
                                width={125}
                                height={40}
                                priority
                                className='light-logo'
                            />
                            {/* Dark Logo (auto-generated) */}
                            <Image
                                src={getDarkLogo(logo)}
                                alt="logo dark"
                                width={125}
                                height={40}
                                priority
                                className='dark-logo'
                            />
                        </Link>

                        {/* Mobile Menu Overlay */}
                        {mobileOpen && (
                            <div
                                className="fixed inset-0 bg-black/60 z-40 lg:hidden"
                                onClick={toggleMobileMenu}
                            ></div>
                        )}

                        {/* MenuBlock handles both desktop and mobile */}
                        <MenuBlock btnColor={btnColor} btnlinkColor={btnlinkColor} logo={logo} mobileOpen={mobileOpen} toggleMobileMenu={toggleMobileMenu} />

                        {/* Right Icons */}
                        <div className="flex items-center space-x-3">
                            {/* Search Button */}
                            <SearchBox />

                            {/* Dark Mode Toggle */}
                            <DarkToggle />

                            {/* Register Button */}

                            <Button href='/register' label='Register' icon="" className="text-sm register-btn" bgColor={` ${btnColor} `} textColor={` ${btnlinkColor} `} />

                            {/* Mobile Menu Button */}
                            <button
                                aria-label="menu"
                                className="lg:hidden flex items-center"
                                onClick={toggleMobileMenu}
                            >
                                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>

                    </nav>
                </div>
            </div>
        </header >
    );
};

export default Header;
