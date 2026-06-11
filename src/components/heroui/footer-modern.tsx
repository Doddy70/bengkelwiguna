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

type SocialIconProps = Omit<IconProps, "icon">;

const footerNavigation = {
  services: [
    { name: "Service Berkala", href: "/services" },
    { name: "Tune Up", href: "/services" },
    { name: "Servis AC", href: "/services" },
    { name: "Kaki-Kaki & Rem", href: "/services" },
  ],
  spesialis: [
    { name: "Semi Overhaul", href: "/layanan-spesialis/semi-overhaul" },
    { name: "Scanner Komputer", href: "/layanan-spesialis" },
    { name: "Spooring 3D", href: "/layanan-spesialis" },
    { name: "Ganti Oli", href: "/services" },
  ],
  company: [
    { name: "Tentang Kami", href: "/about" },
    { name: "Lokasi Bengkel", href: "/lokasi" },
    { name: "Hubungi Kami", href: "/contact" },
    { name: "Promosi", href: "/promosi" },
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
      <div className="mx-auto max-w-screen-xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 md:pr-8">
            <div className="flex items-center justify-start gap-3">
              <Image 
                src="/images/logo/logo-panjang.png" 
                alt="Bengkel Wiguna" 
                width={280} 
                height={60} 
                className="h-auto w-auto"
              />
            </div>
            <p className="text-small text-gray-500 dark:text-gray-400 max-w-xs">
              Bengkel One Stop Service terpercaya di Depok. Menghadirkan perawatan mobil berkualitas dengan standar presisi tinggi sejak tahun 2010.
            </p>
            <div className="flex space-x-6">
              {footerNavigation.social.map((item) => (
                <Link key={item.name} isExternal className="text-gray-400 hover:text-[#224297] hover:text-brand-blue transition-colors" href={item.href}>
                  <span className="sr-only">{item.name}</span>
                  <item.icon aria-hidden="true" className="w-6 h-6" />
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>{renderList({ title: "Layanan Utama", items: footerNavigation.services })}</div>
              <div className="mt-10 md:mt-0">
                {renderList({ title: "Spesialis", items: footerNavigation.spesialis })}
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>{renderList({ title: "Perusahaan", items: footerNavigation.company })}</div>
              <div className="mt-10 md:mt-0">
                {renderList({ title: "Legal", items: footerNavigation.legal })}
              </div>
            </div>
          </div>
        </div>

        <div className="my-10 brand-rounded bg-gray-50 dark:bg-gray-800/50 p-4 sm:my-14 sm:p-8 lg:my-16 lg:flex lg:items-center lg:justify-between lg:gap-2 border border-gray-100 dark:border-gray-800">
          <div className="max-w-md">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Berlangganan Newsletter
            </h3>
            <p className="mt-2 text-small text-gray-500 dark:text-gray-400 dark:text-gray-400">
              Dapatkan tips perawatan mobil, info promo terbaru, dan artikel otomotif langsung di email Anda.
            </p>
          </div>
          <form className="mt-6 sm:flex sm:max-w-md lg:mt-0 gap-3">
            <Input
              isRequired
              aria-label="Alamat Email"
              autoComplete="email"
              id="footer-email"
              placeholder="nama@email.com"
              startContent={<Icon className="text-gray-500 dark:text-gray-400" icon="solar:letter-linear" />}
              type="email"
              variant="bordered"
              className="bg-white dark:bg-gray-900 brand-rounded"
            />
            <Button className="bg-brand-blue text-white shadow-md font-medium" type="submit">
              Berlangganan
            </Button>
          </form>
        </div>

        <div className="flex flex-wrap justify-between gap-4 pt-8 border-t border-gray-100 dark:border-gray-800">
          <p className="text-small text-gray-400 hover:text-[#224297]">
            &copy; 2026 Bengkel Wiguna. Hak Cipta Dilindungi Undang-Undang.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-gray-400 hover:text-[#224297]">Pilih Tema:</span>
            <DarkToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
