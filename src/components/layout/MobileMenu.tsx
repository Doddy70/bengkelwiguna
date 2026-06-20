'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { NavMenuItem, LayananSpesialis, Service } from '@/types/wordpress';

interface MobileMenuProps {
    mobileOpen: boolean;
    toggleMobileMenu: () => void;
    logo?: string;
    dynamicItems?: NavMenuItem[];
    spesialisData?: LayananSpesialis[];
    servicesData?: Service[];
}

interface SubMenuItem {
    title: string;
    href: string;
}

interface MenuItem {
    title: string;
    href?: string;
    subMenu?: SubMenuItem[];
    isMegaMenu?: boolean;
}

const defaultMenuItems: MenuItem[] = [
    { title: 'Beranda', href: '/' },
    { title: 'Layanan', href: '/services', isMegaMenu: true },
    { title: 'Promosi', href: '/promosi' },
    { title: 'Paket Service', href: '/paket-service' },
    { title: 'Layanan Spesialis', href: '/layanan-spesialis' },
    { title: 'Tentang Wiguna', href: '/tentang-wiguna' },
    { title: 'Blog', href: '/blog' },
    { title: 'Lokasi', href: '/lokasi' },
];

export default function MobileMenu({
    mobileOpen,
    toggleMobileMenu,
    logo = "/images/logo/logo-square.avif",
    dynamicItems = [],
    spesialisData = [],
    servicesData = []
}: MobileMenuProps) {
    const [menuItems, setMenuItems] = useState<MenuItem[]>(defaultMenuItems);
    const [openSubMenu, setOpenSubMenu] = useState<Record<string, boolean>>({});

    // Transform WordPress menu items
    useEffect(() => {
        if (dynamicItems && dynamicItems.length > 0) {
            const transformed = dynamicItems.map((item: NavMenuItem) => ({
                title: item.name || item.label || "",
                href: item.path || "/",
                subMenu: item.children?.map((child: any) => ({
                    title: child.title || "",
                    href: child.path || "/"
                }))
            }));
            setMenuItems(transformed);
        } else {
            setMenuItems(defaultMenuItems);
        }
    }, [dynamicItems]);

    const toggleSubMenu = useCallback((key: string) => {
        setOpenSubMenu(prev => ({ ...prev, [key]: !prev[key] }));
    }, []);

    // Handle link click - close menu after navigation
    const handleLinkClick = useCallback(() => {
        toggleMobileMenu();
    }, [toggleMobileMenu]);

    // Prevent body scroll when menu is open
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

    // Don't render anything if menu is closed
    if (!mobileOpen) return null;



    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/50 z-[105]"
                onClick={toggleMobileMenu}
                aria-hidden="true"
            />

            {/* Menu Panel */}
            <div
                className="fixed top-0 left-0 h-full w-[300px] max-w-[85vw] bg-white z-[110] flex flex-col shadow-2xl"
                style={{
                    transform: mobileOpen ? 'translateX(0)' : 'translateX(-100%)',
                    transition: 'transform 0.3s ease-in-out'
                }}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-100">
                    <Link href="/" onClick={handleLinkClick} className="flex items-center">
                        <Image
                            src={logo}
                            alt="Bengkel Wiguna"
                            width={100}
                            height={33}
                            className="h-8 w-auto"
                        />
                    </Link>
                    <button
                        onClick={toggleMobileMenu}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                        aria-label="Tutup menu"
                    >
                        <X size={24} className="text-gray-700" />
                    </button>
                </div>

                {/* Menu Items */}
                <nav className="flex-1 overflow-y-auto py-2">
                    <ul>
                        {menuItems.map((item, index) => {
                            const key = `menu-${index}`;
                            const isOpen = !!openSubMenu[key];
                            return (
                                <li key={index}>
                                    {item.subMenu && item.subMenu.length > 0 ? (
                                        <>
                                            <button
                                                onClick={() => toggleSubMenu(key)}
                                                className="flex items-center justify-between w-full px-4 py-3 text-gray-800 font-medium hover:bg-gray-50 transition-colors"
                                            >
                                                <span>{item.title}</span>
                                                <ChevronDown
                                                    size={18}
                                                    className={`text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                                                />
                                            </button>
                                            {isOpen && (
                                                <ul className="bg-gray-50">
                                                    {item.subMenu.map((sub, subIndex) => (
                                                        <li key={subIndex}>
                                                            <Link
                                                                href={sub.href || '/'}
                                                                onClick={handleLinkClick}
                                                                className="block px-6 py-2.5 text-gray-600 text-sm hover:text-brand-blue hover:bg-gray-100 transition-colors"
                                                            >
                                                                {sub.title}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </>
                                    ) : (
                                        <Link
                                            href={item.href || '/'}
                                            onClick={handleLinkClick}
                                            className="block px-4 py-3 text-gray-800 font-medium hover:bg-gray-50 transition-colors"
                                        >
                                            {item.title}
                                        </Link>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Footer CTA */}
                <div className="p-4 border-t border-gray-100">
                    <Link
                        href="https://wa.me/6287817773888"
                        onClick={handleLinkClick}
                        className="flex items-center justify-center gap-2 w-full py-3 rounded-lg text-sm font-bold bg-brand-gold text-[#1a3567] hover:bg-brand-gold/90 transition-colors"
                    >
                        📞 Booking Service
                    </Link>
                </div>
            </div>
        </>
    );
}
