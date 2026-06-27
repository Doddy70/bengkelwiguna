'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { NavMenuItem, LayananSpesialis } from '@/types/wordpress';
import { getRelativeUrl } from '@/lib/utils';

interface SubMenuItem {
    title: string;
    href: string;
}

interface MenuItem {
    title: string;
    href?: string;
    subMenu?: SubMenuItem[];
}

interface MenuBlockProps {
    btnColor?: string;
    btnlinkColor?: string;
    logo?: string;
    dynamicItems?: NavMenuItem[];
    spesialisData?: LayananSpesialis[];
}

const defaultMenuItems: MenuItem[] = [
    { title: 'Beranda', href: '/' },
    { title: 'Layanan', href: '/services' },
    { title: 'Promosi', href: '/promosi' },
    { title: 'Paket Service', href: '/paket-service' },
    { title: 'Tentang Wiguna', href: '/tentang-wiguna' },
    { title: 'Blog', href: '/blog' },
    { title: 'Lokasi', href: '/contact' },
];

export default function MenuBlock({
    dynamicItems = [],
    spesialisData = []
}: MenuBlockProps) {
    const [menuItems, setMenuItems] = useState<MenuItem[]>(defaultMenuItems);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    useEffect(() => {
        if (dynamicItems && dynamicItems.length > 0) {
            const transformed = dynamicItems.map((item: NavMenuItem) => ({
                title: item.name || item.label || "",
                href: getRelativeUrl(item.path),
                subMenu: item.children?.map((child: any) => ({
                    title: child.title || "",
                    href: getRelativeUrl(child.path)
                }))
            }));
            setMenuItems(transformed);
        } else {
            setMenuItems(defaultMenuItems);
        }
    }, [dynamicItems, spesialisData]);

    return (
        <ul className="hidden lg:flex items-center gap-1">
            {menuItems.map((item, index) => (
                <li
                    key={index}
                    className="relative"
                    onMouseEnter={() => item.subMenu && setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    {item.subMenu && item.subMenu.length > 0 ? (
                        <>
                            <button className="flex items-center gap-1 px-4 py-8 text-gray-700 hover:text-blue-600 font-medium text-sm transition-colors">
                                {item.title}
                                <ChevronDown size={14} className="ml-0.5" />
                            </button>

                            {/* Dropdown */}
                            {hoveredIndex === index && (
                                <div className="absolute top-full left-0 pt-2 z-50">
                                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[200px]">
                                        {item.subMenu.map((sub, subIndex) => (
                                            <Link
                                                key={subIndex}
                                                href={sub.href || '/'}
                                                className="block px-4 py-2.5 text-gray-600 hover:text-blue-600 hover:bg-gray-50 text-sm transition-colors"
                                            >
                                                {sub.title}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </>
                    ) : (
                        <Link
                            href={item.href || '/'}
                            className="block px-4 py-8 text-gray-700 hover:text-blue-600 font-medium text-sm transition-colors"
                        >
                            {item.title}
                        </Link>
                    )}
                </li>
            ))}
        </ul>
    );
}