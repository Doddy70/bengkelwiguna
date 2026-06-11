'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ChevronDown, X } from 'react-feather';
import Image from 'next/image';
import { NavMenuItem, LayananSpesialis } from '@/types/wordpress';
import { getAllLayananSpesialis } from '@/lib/wordpress';

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
}

const defaultMenuItems: MenuItem[] = [
    {
        title: 'Layanan',
        megaMenu: [
            {
                title: 'Layanan Utama',
                subMenu: [
                    { title: 'Semua Layanan', href: '/services' },
                    { title: 'Tune Up', href: '/services/tune-up' },
                    { title: 'Ganti Oli', href: '/services/ganti-oli' },
                ]
            },
            {
                title: 'Perbaikan Khusus',
                subMenu: [
                    { title: 'Service AC', href: '/services/service-ac' },
                    { title: 'Kaki-Kaki & Spooring', href: '/services/kaki-kaki' },
                    { title: 'Rem & Kelistrikan', href: '/services/rem-kelistrikan' },
                ]
            },
            {
                title: 'Layanan Spesialis',
                subMenu: [
                    { title: 'Semua Spesialis', href: '/layanan-spesialis' },
                    { title: 'Reset AC', href: '/layanan-spesialis/reset-ac' },
                    { title: 'Cek Kaki-Kaki', href: '/layanan-spesialis/cek-kaki-kaki' },
                    { title: 'Semi Overhaul', href: '/layanan-spesialis/semi-overhaul' },
                ]
            }
        ],
    },
    {
        title: 'Promo',
        subMenu: [
            { title: 'Promo Bulan Ini', href: '/promosi' },
            { title: 'Paket Service', href: '/paket-service' },
        ],
    },
    {
        title: 'Tentang',
        subMenu: [
            { title: 'Tentang Kami', href: '/about' },
            { title: 'Lokasi Bengkel', href: 'https://maps.app.goo.gl/J3s5ZhpwFttGFeeUA' },
            { title: 'Blog & Artikel', href: '/blog' },
        ],
    },
    { title: 'Lokasi', href: 'https://maps.app.goo.gl/J3s5ZhpwFttGFeeUA' },
    { title: 'Blog', href: '/blog' },
    { title: 'Kontak', href: '/contact' },
];

/**
 * Transforms WordPress NavMenuItems to component MenuItems
 */
const transformWpMenu = (wpItems: NavMenuItem[], spesialisData: LayananSpesialis[] = []): MenuItem[] => {
    return wpItems.map(item => {
        const title = item.name || item.label || "";
        const href = item.path || "/";
        const isLayanan = title.toLowerCase() === 'layanan';

        if (isLayanan && item.children && item.children.length > 0) {
            // Split children into columns
            const half = Math.ceil(item.children.length / 2);
            const col1Items = item.children.slice(0, half);
            const col2Items = item.children.slice(half);

            const col3Items = spesialisData.map(s => ({
                title: s.title as string,
                href: `/layanan-spesialis/${s.slug}`
            }));

            if (col3Items.length === 0) {
                col3Items.push({ title: 'Semua Spesialis', href: '/layanan-spesialis' });
            }

            return {
                title: title,
                href: href,
                megaMenu: [
                    {
                        title: 'Layanan Utama',
                        subMenu: col1Items.map(child => ({
                            title: child.name || child.label || "",
                            href: child.path || "/"
                        }))
                    },
                    {
                        title: 'Perbaikan Khusus',
                        subMenu: col2Items.map(child => ({
                            title: child.name || child.label || "",
                            href: child.path || "/"
                        }))
                    },
                    {
                        title: 'Layanan Spesialis',
                        subMenu: col3Items
                    }
                ]
            };
        }

        return {
            title: title,
            href: href,
            subMenu: item.children && item.children.length > 0 
                ? item.children.map(child => ({
                    title: child.name || child.label || "",
                    href: child.path || "/"
                }))
                : undefined
        };
    });
};

const MenuBlock: React.FC<MenuBlockProps> = ({ 
    mobileOpen = false, 
    toggleMobileMenu, 
    logo = "/images/logo/logo.png" , 
    btnColor = 'bg-blue-600', 
    btnlinkColor = "text-white",
    dynamicItems = []
}) => {
    const [openSubMenu, setOpenSubMenu] = useState<Record<string, boolean>>({});
    const [spesialis, setSpesialis] = useState<LayananSpesialis[]>([]);

    // Initialize state from props to prevent flash
    const [menuItems, setMenuItems] = useState<MenuItem[]>(() => 
        dynamicItems.length > 0 ? transformWpMenu(dynamicItems) : defaultMenuItems
    );

    useEffect(() => {
        const fetchSpesialis = async () => {
            const data = await getAllLayananSpesialis();
            if (data) setSpesialis(data);
        };
        fetchSpesialis();
    }, []);

    useEffect(() => {
        // Update menu when dynamicItems (from parent) or spesialis (local) changes
        if (dynamicItems && dynamicItems.length > 0) {
            setMenuItems(transformWpMenu(dynamicItems, spesialis));
        } else if (dynamicItems && dynamicItems.length === 0) {
            setMenuItems(defaultMenuItems);
        }
    }, [dynamicItems, spesialis]);

    const toggleSubMenu = (key: string) => {
        setOpenSubMenu((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <>
            {/* Desktop Menu */}
            <ul className="hidden lg:flex gap-4 xl:gap-5 font-semibold text-[16px] xl:text-[17px] main-menu">
                {menuItems.map((item, index) => {
                    if (item.megaMenu) {
                        return (
                            <li key={index} className="group static">
                                <button className="flex items-center gap-1 py-8">
                                    {item.title} <ChevronDown size={14} />
                                </button>
                                <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-full max-w-4xl bg-white shadow-xl rounded-xl hidden group-hover:block z-[100] border border-gray-100 p-8 transition-all duration-300">
                                    <div className="grid grid-cols-3 gap-8">
                                        {item.megaMenu.map((megaSection, mIndex) => (
                                            <div key={mIndex}>
                                                <h3 className="text-gray-900 font-bold mb-4 border-b border-gray-100 pb-2 uppercase text-sm tracking-wider">
                                                    {megaSection.title}
                                                </h3>
                                                <ul className="flex flex-col gap-3">
                                                    {megaSection.subMenu.map((sub, sIndex) => (
                                                        <li key={sIndex}>
                                                            <Link
                                                                href={sub.href || "#"}
                                                                className="text-gray-600 hover:text-brand-blue hover:translate-x-2 inline-block transition-all duration-300 font-medium"
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
                        );
                    }

                    if (item.subMenu && item.subMenu.length > 0) {
                        return (
                            <li key={index} className="group relative">
                                <button className="flex items-center gap-1 py-8">
                                    {item.title} <ChevronDown size={14} />
                                </button>
                                <ul className="absolute top-full py-2 left-0 bg-white shadow-lg rounded-lg hidden group-hover:flex flex-col min-w-[220px] z-50 overflow-hidden border border-gray-100">
                                    {item.subMenu.map((sub, subIndex) => (
                                        <li key={subIndex}>
                                            <Link
                                                href={sub.href || "#"}
                                                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-brand-blue hover:translate-x-2 transition-all duration-300"
                                            >
                                                {sub.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        );
                    }

                    return (
                        <li key={index}>
                            <Link href={item.href || "#"} className="flex items-center gap-1 py-8 hover:text-brand-gold transition-colors">
                                {item.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>


            {/* Mobile Menu */}
            <div
                className={`fixed top-0 left-0 h-full w-72 bg-white z-[100] transform transition-transform duration-300 flex flex-col lg:hidden ${mobileOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'
                    }`}
            >
                <div className="flex items-center justify-between p-4 border-b border-gray-100">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src={logo}
                            alt="logo"
                            width={180}
                            height={50}
                            priority
                            className="h-10 w-auto"
                        />
                    </Link>
                    <button onClick={toggleMobileMenu} aria-label="close menu" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <X size={24} className="text-gray-900" />
                    </button>
                </div>
                <ul className="flex flex-col p-4 gap-2 overflow-y-auto">
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            {item.subMenu || item.megaMenu ? (
                                <>
                                    <button
                                        onClick={() => toggleSubMenu(`${index}`)}
                                        className="flex justify-between w-full items-center py-3 px-2 font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                                    >
                                        {item.title} 
                                        <ChevronDown size={18} className={`transition-transform duration-300 ${openSubMenu[`${index}`] ? 'rotate-180' : ''}`} />
                                    </button>
                                    {openSubMenu[`${index}`] && (
                                        <ul className="pl-4 mt-2 mb-2 flex flex-col gap-2 border-l-2 border-gray-100 ml-2">
                                            {/* Regular SubMenu */}
                                            {item.subMenu &&
                                                item.subMenu.map((sub, subIndex) => (
                                                    <li key={subIndex}>
                                                        <Link href={sub.href || '#'} className="text-gray-600 py-2 px-4 block hover:text-brand-blue hover:bg-gray-50 rounded-md transition-colors">
                                                            {sub.title}
                                                        </Link>
                                                    </li>
                                                ))}

                                            {/* Mega Menu Sections (Mobile Fallback) */}
                                            {item.megaMenu &&
                                                item.megaMenu.map((section, secIndex) => (
                                                    <li key={secIndex} className="mt-2">
                                                        <span className="block px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
                                                            {section.title}
                                                        </span>
                                                        <ul className="flex flex-col">
                                                            {section.subMenu.map((sub, subIndex) => (
                                                                <li key={subIndex}>
                                                                    <Link
                                                                        href={sub.href || '#'}
                                                                        className="text-gray-600 py-2 px-4 block hover:text-brand-blue hover:bg-gray-50 rounded-md transition-colors text-sm"
                                                                    >
                                                                        {sub.title}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </li>
                                                ))}
                                        </ul>
                                    )}
                                </>
                            ) : (
                                <Link href={item.href || '#'} className="py-3 px-2 block text-gray-900 font-medium hover:bg-gray-50 rounded-lg transition-colors">
                                    {item.title}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
                <div className="mt-auto p-4 border-t border-gray-100">
                    <Link
                        href="https://wa.me/6287817773888"
                        className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-[#ffd900] text-[#1a3567] hover:bg-yellow-400 transition-all shadow-md`}
                    >
                        Booking Service
                    </Link>
                </div>
            </div>
            {/* Mobile Menu Overlay Backdrop */}
            {mobileOpen && (
                <div 
                    className="fixed inset-0 bg-black/60 z-[90] lg:hidden backdrop-blur-sm transition-opacity"
                    onClick={toggleMobileMenu}
                />
            )}
        </>
    );
};

export default MenuBlock;
