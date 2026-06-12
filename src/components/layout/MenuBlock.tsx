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
                // Split children into columns (4 items per column max)
                const itemsPerColumn = 6;
                const columns: SubMenuItem[][] = [];

                for (let i = 0; i < childCount; i += itemsPerColumn) {
                    const slice = children.slice(i, i + itemsPerColumn); columns.push(slice.map(c => ({ title: c.title || "", path: c.path || "", label: c.title, href: c.path })));
                }

                return {
                    title: title,
                    href: href,
                    megaMenu: [
                        {
                            title: 'Menu',
                            subMenu: columns.flat().map(child => ({
                                title: child.title || "",
                                href: (child as any).path || "/"
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
                        href: (child as any).path || "/"
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
    logo = "/images/logo/logo.png" ,
    dynamicItems = [],
    spesialisData = []
}) => {
    const [openSubMenu, setOpenSubMenu] = useState<Record<string, boolean>>({});

    // Initialize state from props to prevent flash/delay
    // Use the passed in dynamicItems and spesialisData immediately
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
            {/* Desktop Menu */}
            <ul className="hidden lg:flex gap-4 xl:gap-5 font-semibold text-[16px] xl:text-[17px] main-menu">
                {menuItems.map((item, index) => {
                    const isMegaMenu = !!item.megaMenu;
                    const allItems = isMegaMenu ? (item.megaMenu?.flatMap(section => section.subMenu) || []) : [];
                    const itemKey = `menu-${index}`;

                    return (
                        <li
                            key={index}
                            className={`group static ${isMegaMenu ? 'has-dropdown' : item.subMenu?.length ? 'has-dropdown' : ''}`}
                            onMouseEnter={() => isMegaMenu || item.subMenu?.length ? setOpenSubMenu(prev => ({ ...prev, [itemKey]: true })) : null}
                            onMouseLeave={() => isMegaMenu || item.subMenu?.length ? setOpenSubMenu(prev => ({ ...prev, [itemKey]: false })) : null}
                        >
                            <Link href={item.href || "#"} className="flex items-center gap-1 py-8 hover:text-brand-gold transition-colors">
                                {item.title} {isMegaMenu || item.subMenu?.length ? <ChevronDown size={14} /> : null}
                            </Link>

                            {/* Mega Menu (many items) */}
                            {isMegaMenu && openSubMenu[itemKey] && (
                                <ul className="sub-menu header__mega-menu mega-menu mega-menu-pages" style={{
                                    position: 'absolute',
                                    top: '100%',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    maxWidth: '1320px',
                                    width: '100%',
                                    padding: '30px 0',
                                    background: 'white',
                                    boxShadow: '0 16px 15px rgba(0,0,0,0.1)',
                                    borderRadius: '10px',
                                    zIndex: 100
                                }}>
                                    <li>
                                        <div className="mega-menu-wrapper" style={{
                                            display: 'grid',
                                            gridTemplateColumns: 'repeat(4, 1fr)',
                                            gap: '25px',
                                            padding: '0 30px'
                                        }}>
                                            {/* Single Title Header */}
                                            <div style={{
                                                gridColumn: '1 / -1',
                                                borderBottom: '2px solid #224297',
                                                marginBottom: '15px',
                                                paddingBottom: '10px'
                                            }}>
                                                <h6 style={{
                                                    fontSize: '18px',
                                                    fontWeight: 600,
                                                    color: '#224297'
                                                }}>
                                                    {item.title === 'Promosi' ? 'Promo Terbaru' : 'Layanan Service Bengkel Wiguna'}
                                                </h6>
                                            </div>

                                            {/* Service Columns (3 columns) - No titles */}
                                            {(() => {
                                                const itemsPerCol = Math.ceil(allItems.length / 3);
                                                const cols = [];
                                                for (let i = 0; i < allItems.length; i += itemsPerCol) {
                                                    cols.push(allItems.slice(i, i + itemsPerCol));
                                                }
                                                return cols.slice(0, 3).map((colItems, colIdx) => (
                                                    <div key={colIdx} className="mega-menu-pages-single" style={{ minWidth: 0 }}>
                                                        <div className="mega-menu-list" style={{ display: 'flex', flexDirection: 'column' }}>
                                                            {colItems.map((sub, sIndex) => (
                                                                <Link
                                                                    key={sIndex}
                                                                    href={sub.href || "#"}
                                                                    style={{
                                                                        display: 'block',
                                                                        padding: '10px 0',
                                                                        color: '#374151',
                                                                        fontWeight: 500,
                                                                        fontSize: '14px',
                                                                        borderBottom: '1px solid #f3f4f6',
                                                                        transition: 'all 0.3s'
                                                                    }}
                                                                    className="hover:text-brand-blue hover:pl-2"
                                                                >
                                                                    {sub.title}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ));
                                            })()}

                                            {/* WhatsApp Consultation Card */}
                                            <div className="mega-menu-pages-single" style={{
                                                background: 'linear-gradient(135deg, #224297 0%, #1a3567 100%)',
                                                borderRadius: '12px',
                                                padding: '20px',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                textAlign: 'center'
                                            }}>
                                                <div style={{
                                                    width: '100px',
                                                    height: '100px',
                                                    borderRadius: '50%',
                                                    overflow: 'hidden',
                                                    border: '4px solid #ffd900',
                                                    marginBottom: '15px'
                                                }}>
                                                    <Image
                                                        src="/images/cs-support.png"
                                                        alt="Customer Support"
                                                        width={100}
                                                        height={100}
                                                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                                                    />
                                                </div>
                                                <h6 style={{ fontSize: '16px', fontWeight: 700, color: 'white', marginBottom: '8px' }}>
                                                    Konsultasi Gratis
                                                </h6>
                                                <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.8)', marginBottom: '15px', lineHeight: 1.4 }}>
                                                    Customer Support Bengkel Wiguna
                                                </p>
                                                <a
                                                    href="https://wa.me/6287817773888?text=halo%20mon,%20saya%20ingin%20tanya%20seputar%20servis%20mobil%20saya%20di%20bengkel%20wiguna.%20(web)"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    style={{
                                                        display: 'inline-flex',
                                                        alignItems: 'center',
                                                        gap: '8px',
                                                        padding: '12px 20px',
                                                        background: '#ffd900',
                                                        color: '#224297',
                                                        fontWeight: 700,
                                                        fontSize: '13px',
                                                        borderRadius: '25px',
                                                        textDecoration: 'none'
                                                    }}
                                                    className="hover:bg-yellow-400"
                                                >
                                                    💬 Chat WhatsApp
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            )}

                            {/* Sub Menu (fewer items) */}
                            {item.subMenu && item.subMenu.length > 0 && !isMegaMenu && (
                                <ul className="sub-menu" style={{
                                    position: 'absolute',
                                    top: '100%',
                                    left: 0,
                                    background: 'white',
                                    padding: '15px 0',
                                    boxShadow: '0 10px 15px rgba(0,0,0,0.1)',
                                    borderRadius: '10px',
                                    minWidth: '250px',
                                    zIndex: 50
                                }}>
                                    {item.subMenu.map((sub, subIndex) => (
                                        <li key={subIndex}>
                                            <Link
                                                href={sub.href || "#"}
                                                style={{
                                                    display: 'block',
                                                    padding: '15px 25px',
                                                    color: '#374151',
                                                    fontWeight: 500,
                                                    borderBottom: '1px solid #e5e7eb',
                                                    transition: 'all 0.3s'
                                                }}
                                                className="hover:text-brand-blue hover:pl-7"
                                            >
                                                {sub.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    );
                })}
            </ul>


            {/* Mobile Menu */}
            <div
                className={`fixed top-0 left-0 h-full w-72 bg-white z-[110] transform transition-transform duration-300 flex flex-col lg:hidden ${mobileOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'
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
                <ul className="flex flex-col overflow-y-auto" style={{ padding: '16px' }}>
                    {menuItems.map((item, index) => {
                        const mobileKey = `mobile-${index}`;
                        const isOpen = !!openSubMenu[mobileKey];

                        const subItems = [
                            ...(item.subMenu || []),
                            ...(item.megaMenu?.flatMap(s => s.subMenu) || [])
                        ];

                        if (subItems.length > 0) {
                            return (
                                <li key={index} className="border-b border-gray-100 last:border-0">
                                    <button
                                        onClick={() => toggleSubMenu(mobileKey)}
                                        className="flex justify-between w-full items-center py-4 px-2 font-semibold text-gray-900"
                                    >
                                        {item.title}
                                        <ChevronDown size={18} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                                    </button>
                                    {isOpen && (
                                        <ul className="pb-2">
                                            {subItems.map((sub, i) => (
                                                <li key={i}>
                                                    <Link href={sub.href || "/"} className="block py-3 px-4 text-gray-600 hover:text-brand-blue">
                                                        {sub.title}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            );
                        }

                        return (
                            <li key={index} className="border-b border-gray-100 last:border-0">
                                <Link href={item.href || "/"} className="block py-4 px-2 text-gray-900 font-semibold">
                                    {item.title}
                                </Link>
                            </li>
                        );
                    })}
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
                    className="fixed inset-0 bg-black/60 z-[105] lg:hidden backdrop-blur-sm transition-opacity"
                    onClick={toggleMobileMenu}
                />
            )}
        </>
    );
};

export default MenuBlock;
