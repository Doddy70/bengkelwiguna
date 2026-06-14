/**
 * HeroUI Footer Modern — Adapted for Bengkel Wiguna
 */

"use client";

import type { IconProps } from "@iconify/react";
import React from "react";
import { Button, Input, Link } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import DarkToggle from "../layout/DarkToggle";
import TiltCard from "../ui/TiltCard";
import ZdogIcon from "../ui/ZdogIcon";

type SocialIconProps = Omit<IconProps, "icon">;

const footerNavigation = {
  services: [
    { name: "Service Berkala", href: "/services" },
    { name: "Tune Up", href: "/services" },
    { name: "Servis AC", href: "/services" },
    { name: "Kaki-Kaki & Rem", href: "/services" },
  ],
  spesialis: [
    { name: "Layanan Spesialis", href: "/layanan-spesialis" },
    { name: "Semi Overhaul", href: "/layanan-spesialis" },
    { name: "Scanner Komputer", href: "/layanan-spesialis" },
    { name: "Spooring 3D", href: "/layanan-spesialis" },
  ],
  blog: [
    { name: "Tips Otomotif", href: "/blog" },
    { name: "Edukasi Mobil", href: "/blog" },
    { name: "Promo Terbaru", href: "/promosi" },
    { name: "Paket Service", href: "/paket-service" },
  ],
  company: [
    { name: "Tentang Kami", href: "/tentang-wiguna" },
    { name: "Lokasi Bengkel", href: "/lokasi" },
    { name: "Hubungi Kami", href: "/lokasi" },
    { name: "Promosi", href: "/promosi" },
    { name: "Blog & Tips", href: "/blog" },
  ],
  legal: [
    { name: "Kebijakan Privasi", href: "/privacy" },
    { name: "Syarat & Ketentuan", href: "/terms" },
  ],
  social: [
    {
      name: "Facebook",
      href: "https://web.facebook.com/Bengkel.WigunaBan",
      icon: (props: SocialIconProps) => <Icon {...props} icon="fa6-brands:facebook" />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/bengkelwiguna_depok/",
      icon: (props: SocialIconProps) => <Icon {...props} icon="fa6-brands:instagram" />,
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@bengkel.wiguna.depok",
      icon: (props: SocialIconProps) => <Icon {...props} icon="fa6-brands:tiktok" />,
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@BengkelWiguna",
      icon: (props: SocialIconProps) => <Icon {...props} icon="fa6-brands:youtube" />,
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/6287817773888",
      icon: (props: SocialIconProps) => <Icon {...props} icon="fa6-brands:whatsapp" />,
    },
  ],
};

export default function FooterModern() {
  const renderList = React.useCallback(
    ({ title, items }: { title: string; items: { name: string; href: string }[] }) => (
      <div>
        <h3 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider">{title}</h3>
        <ul className="mt-6 space-y-4">
          {items.map((item) => (
            <li key={item.name}>
              <Link className="text-gray-500 dark:text-gray-400 hover:text-[#224297] dark:hover:text-[#ffd900] transition-colors" href={item.href} size="sm">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    ),
    [],
  );

  return (
    <footer className="flex w-full flex-col bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="mx-auto w-full max-w-screen-xl px-4 pb-8 pt-12 sm:pt-16 lg:px-8">
        {/* Desktop: 4 Column Layout | Tablet: 2 Column | Mobile: 1 Column */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Column 1: Customer Support Widget (REPLACED WITH 3D WIDGET) */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xs font-black text-brand-blue dark:text-[#ffd900] uppercase tracking-[0.2em] mb-4">Konsultasi Gratis</h3>
              
              <TiltCard options={{ max: 20, perspective: 1000, scale: 1.05 }}>
                <Link
                  href="https://wa.me/6287817773888?text=Halo%20Asisten%20Wiguna,%20saya%20ingin%20tanya%20seputar%20servis%20mobil%20saya.%20(web)"
                  isExternal
                  className="block group"
                >
                  <div className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-5 rounded-[2rem] border border-gray-100 dark:border-gray-700 shadow-xl overflow-hidden group-hover:border-brand-blue/30 transition-colors">
                    
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-brand-blue/5 rounded-full -mr-8 -mt-8 blur-2xl group-hover:bg-brand-blue/10 transition-colors"></div>
                    
                    <div className="flex items-center gap-4 relative z-10">
                      <div className="w-16 h-16 rounded-2xl bg-brand-blue flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform duration-500" style={{ transformStyle: 'preserve-3d' }}>
                        <div style={{ transform: 'translateZ(30px)' }}>
                          <ZdogIcon type="message" size={40} color="#fff" />
                        </div>
                      </div>
                      
                      <div style={{ transform: 'translateZ(20px)' }}>
                        <p className="text-[10px] font-black text-brand-blue dark:text-[#ffd900] uppercase tracking-widest mb-0.5">Online Now</p>
                        <h4 className="text-gray-900 dark:text-white font-black text-lg leading-tight">Asisten Wiguna</h4>
                        <p className="text-[11px] text-gray-500 dark:text-gray-400 font-bold mt-1">Chat via WhatsApp &rarr;</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </TiltCard>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-5 px-2">
              {footerNavigation.social.map((item) => (
                <Link key={item.name} isExternal className="text-gray-400 hover:text-[#224297] dark:hover:text-[#ffd900] transition-colors hover:scale-110" href={item.href}>
                  <span className="sr-only">{item.name}</span>
                  <item.icon aria-hidden="true" className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            {renderList({ title: "Layanan Service", items: footerNavigation.services })}
          </div>

          {/* Column 3: Spesialis */}
          <div>
            {renderList({ title: "Layanan Spesialis", items: footerNavigation.spesialis })}
          </div>

          {/* Column 4: Blog & Edukasi */}
          <div>
            {renderList({ title: "Blog & Edukasi", items: footerNavigation.blog })}
          </div>

          {/* Column 5: Company & Legal */}
          <div>
            {renderList({ title: "Perusahaan", items: footerNavigation.company })}
            <div className="mt-8">
              {renderList({ title: "Legal", items: footerNavigation.legal })}
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="my-10 sm:my-14 bg-gray-50 dark:bg-gray-800/50 p-5 sm:p-8 rounded-2xl border border-gray-100 dark:border-gray-800">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Berlangganan Newsletter
              </h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Dapatkan tips & promo terbaru di email Anda.
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <Input
                isRequired
                aria-label="Alamat Email"
                autoComplete="email"
                id="footer-email"
                placeholder="nama@email.com"
                startContent={<Icon className="text-gray-500 dark:text-gray-400" icon="solar:letter-linear" />}
                type="email"
                variant="bordered"
                className="bg-white dark:bg-gray-900 rounded-xl w-full lg:w-80"
                size="sm"
              />
              <Button className="bg-brand-blue text-white shadow-md font-medium rounded-xl w-full sm:w-auto hover:bg-blue-800 transition-colors" type="submit">
                Berlangganan
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-gray-100 dark:border-gray-800">
          <p className="text-xs sm:text-sm text-gray-400 text-center sm:text-left font-medium">
            &copy; 2026 Bengkel Wiguna. Hak Cipta Dilindungi.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">Tema:</span>
            <DarkToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
