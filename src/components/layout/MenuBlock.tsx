'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ChevronDown, X } from 'react-feather';
import Image from 'next/image';
import { NavMenuItem, LayananSpesialis } from '@/types/wordpress';

interface SubMenuItem {
    title: string;
    href: string;
    logo?: string;
}

interface MegaMenuItem {
    title: string;
    subMenu: SubMenuItem[];
}

export interface MenuItem {
    title: string;
    href?: string;
    subMenu?: SubMenuItem[];
    megaMenu?: MegaMenuItem[];
}

interface MenuBlockProps {
    mobileOpen?: boolean;
    toggleMobileMenu?: () => void;
    logo?: string;
    btnColor?: string;
    btnlinkColor?: string;
    dynamicItems?: NavMenuItem[];
    spesialisData?: LayananSpesialis[];
}

const defaultMenuItems: MenuItem[] = [
    {
        title: 'Beranda',
        href: '/',
    },
    {
        title: 'Layanan',
        subMenu: [
            { title: 'Semua Layanan', href: '/services' },
            { title: 'Ganti Ban', href: '/services/ganti-ban' },
            { title: 'Spooring', href: '/services/spooring' },
            { title: 'Balancing', href: '/services/balancing' },
            { title: 'Service AC', href: '/services/servis-ac-mobil' },
        ]
    },
    {
        title: 'Promosi',
        subMenu: [
            { title: 'Semua Promo', href: '/promosi' },
            { title: 'Paket Siaga 1', href: '/promosi/paket-siaga-1' },
            { title: 'Paket Siaga 2', href: '/promosi/paket-siaga-2' },
            { title: 'Paket Ajag', href: '/promosi/paket-ajag' },
        ]
    },
    { title: 'Paket Service', href: '/paket-service' },
    { title: 'Tentang Wiguna', href: '/tentang-wiguna' },
    { title: 'Blog', href: '/blog' },
    { title: 'Lokasi', href: '/contact' },
];

/**
 * Transforms WordPress NavMenuItems to component MenuItems
 * Creates mega menu for items with many children (> 5)
 */
const transformWpMenu = (wpItems: NavMenuItem[], spesialisData: LayananSpesialis[] = []): MenuItem[] => {
    // If WordPress menu has items, use them as-is
    if (wpItems && wpItems.length > 0) {
        return wpItems.map(item => {
            const title = item.name || item.label || "";
            const href = item.path || "/";
            const children = item.children || [];
            const childCount = children.length;

            // Create mega menu for items with many children (> 5)
            if (childCount > 5) {
                return {
                    title: title,
                    href: href,
                    megaMenu: [
                        {
                            title: 'Menu',
                            subMenu: children.map(child => ({
                                title: child.title || "",
                                href: child.path || "/"
                            }))
                        }
                    ]
                };
            }

            // Simple submenu for items with few children
            if (childCount > 0 && childCount <= 5) {
                return {
                    title: title,
                    href: href,
                    subMenu: children.map(child => ({
                        title: child.title || "",
                        href: child.path || "/"
                    }))
                };
            }

            return {
                title: title,
                href: href
            };
        });
    }

    // Fallback to default menu only if no WP items
    return defaultMenuItems;
};

const MenuBlock: React.FC<MenuBlockProps> = ({
    mobileOpen = false,
    toggleMobileMenu,
    logo = "/images/logo/logo-square.avif",
    dynamicItems = [],
    spesialisData = []
}) => {
    const [openSubMenu, setOpenSubMenu] = useState<Record<string, boolean>>({});

    // Initialize state from props to prevent flash/delay
    const [menuItems, setMenuItems] = useState<MenuItem[]>(() =>
        dynamicItems.length > 0
            ? transformWpMenu(dynamicItems, spesialisData)
            : defaultMenuItems
    );

    // Keep menu in sync with dynamic props
    useEffect(() => {
        if (dynamicItems && dynamicItems.length > 0) {
            setMenuItems(transformWpMenu(dynamicItems, spesialisData));
        } else {
            setMenuItems(defaultMenuItems);
        }
    }, [dynamicItems, spesialisData]);

    const toggleSubMenu = (key: string) => {
        setOpenSubMenu((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <>
            {/* Desktop Menu - Only visible on large screens */}
            <ul className="hidden lg:flex gap-6 font-semibold text-[17px] main-menu">
                {menuItems.map((item, index) => (
                    item.subMenu ? (
                        <li key={index} className="group relative">
                            <button className="flex items-center gap-1 py-8 text-gray-900 hover:text-brand-blue transition-colors">
                                {item.title} <ChevronDown size={14} />
                            </button>
                            <ul className="absolute top-full py-2 left-0 bg-white shadow-lg rounded-lg hidden group-hover:flex flex-col min-w-[220px] z-50 overflow-hidden">
                                {item.subMenu.map((sub, subIndex) => (
                                    <li key={subIndex}>
                                        <Link
                                            href={sub.href || "#"}
                                            className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:translate-x-2 transition duration-300"
                                        >
                                            {sub.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ) : item.megaMenu ? (
                        <li key={index} className="group relative">
                            <button className="flex items-center gap-1 py-8 text-gray-900 hover:text-brand-blue transition-colors">
                                {item.title} <ChevronDown size={14} />
                            </button>
                            <div className="absolute top-full left-0 w-full bg-white shadow-lg hidden group-hover:block rounded-lg z-50">
                                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-5 lg:gap-6 gap-1 lg:p-6 p-0 text-base font-medium text-gray-900">
                                    {item.megaMenu.map((section, secIndex) => (
                                        <div key={secIndex}>
                                            <ul className="flex flex-col gap-2">
                                                {section.subMenu.map((sub, subIndex) => (
                                                    <li key={subIndex}>
                                                        <Link
                                                            href={sub.href || "#"}
                                                            className="text-gray-700 hover:text-brand-blue hover:translate-x-2 duration-300 transition block py-1"
                                                        >
                                                            {sub.title}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </li>
                    ) : (
                        <li key={index}>
                            <Link href={item.href || "#"} className="flex items-center gap-1 py-8 text-gray-900 hover:text-brand-blue transition-colors">
                                {item.title}
                            </Link>
                        </li>
                    )
                ))}
            </ul>

            {/* Mobile Menu - Only visible on small/medium screens */}
            <div
                className={`fixed top-0 left-0 h-full w-72 bg-white z-50 transform transition-transform duration-300 flex flex-col lg:hidden ${mobileOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'
                    }`}
            >
                {/* Header with Logo and Close Button */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src={logo}
                            alt="logo"
                            width={120}
                            height={40}
                            priority
                            className="h-10 w-auto"
                        />
                    </Link>
                    <button onClick={toggleMobileMenu} aria-label="close menu">
                        <X size={24} />
                    </button>
                </div>

                {/* Menu Items */}
                <ul className="flex flex-col p-4 gap-2 overflow-y-auto">
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            {item.subMenu || item.megaMenu ? (
                                <>
                                    <button
                                        onClick={() => toggleSubMenu(`${index}`)}
                                        className="flex justify-between w-full items-center py-3 font-semibold text-gray-900"
                                    >
                                        {item.title} <ChevronDown size={18} />
                                    </button>
                                    {openSubMenu[`${index}`] && (
                                        <ul className="pl-4 mt-2 flex flex-col gap-2">
                                            {/* Regular SubMenu */}
                                            {item.subMenu &&
                                                item.subMenu.map((sub, subIndex) => (
                                                    <li key={subIndex}>
                                                        <Link href={sub.href || '#'} className="text-gray-700 py-1 block font-medium hover:text-brand-blue">
                                                            {sub.title}
                                                        </Link>
                                                    </li>
                                                ))}

                                            {/* Mega Menu Sections */}
                                            {item.megaMenu &&
                                                item.megaMenu.map((section, secIndex) => (
                                                    <li key={secIndex}>
                                                        <button
                                                            onClick={() =>
                                                                toggleSubMenu(`${index}-${secIndex}`)
                                                            }
                                                            className="flex justify-between w-full items-center py-2 font-medium text-gray-900"
                                                        >
                                                            {section.title} <ChevronDown size={16} />
                                                        </button>
                                                        {openSubMenu[`${index}-${secIndex}`] && (
                                                            <ul className="pl-4 mt-1 flex flex-col gap-1">
                                                                {section.subMenu.map((sub, subIndex) => (
                                                                    <li key={subIndex}>
                                                                        <Link
                                                                            href={sub.href || '#'}
                                                                            className="text-gray-700 py-1 block font-medium hover:text-brand-blue"
                                                                        >
                                                                            {sub.title}
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                    </li>
                                                ))}
                                        </ul>
                                    )}
                                </>
                            ) : (
                                <Link href={item.href || '#'} className="py-3 block text-gray-900 font-semibold hover:text-brand-blue" onClick={toggleMobileMenu}>
                                    {item.title}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>

                {/* CTA Button at Bottom */}
                <div className="mt-auto p-4 border-t border-gray-200">
                    <Link
                        href="https://wa.me/6287817773888"
                        className="flex items-center justify-center gap-2 w-full py-3 rounded-lg text-sm font-semibold bg-[#ffd900] text-[#1a3567] hover:bg-yellow-400 transition-all"
                        onClick={toggleMobileMenu}
                    >
                        📞 Booking Service
                    </Link>
                </div>
            </div>
        </>
    );
};

export default MenuBlock;