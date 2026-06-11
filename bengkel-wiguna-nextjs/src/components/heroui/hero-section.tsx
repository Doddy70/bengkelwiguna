/**
 * HeroUI Hero Section - Adapted for Bengkel Wiguna
 * Based on hero-section-basic template
 */

"use client";

import {Button} from "@nextui-org/react";
import {Icon} from "@iconify/react";

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

interface HeroSectionProps {
  badgeText?: string;
  title: string;
  subtitle?: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  backgroundImage?: string;
}

export default function HeroSection({
  badgeText = "Layanan Profesional",
  title = "Solusi Lengkap untuk Kendaraan Anda",
  subtitle = "Bengkel Wiguna menyediakan layanan service berkualitas tinggi dengan teknisi berpengalaman dan peralatan modern.",
  primaryCta = {
    label: "Lihat Layanan",
    href: "/services"
  },
  secondaryCta = {
    label: "Hubungi Kami",
    href: "/lokasi"
  },
  backgroundImage = "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/backgrounds/bg-gradient.png"
}: HeroSectionProps) {
  return (
    <div className="relative flex h-dvh w-full flex-col overflow-hidden bg-background">
      <Header />

      <main className="container mx-auto flex flex-1 flex-col items-center justify-center overflow-hidden px-8">
        <section className="z-20 flex flex-col items-center justify-center gap-[18px] sm:gap-6">
          {/* Badge */}
          <Button
            className="h-9 overflow-hidden border-1 border-default-100 bg-default-50 px-[18px] py-2 text-small font-normal leading-5 text-default-500"
            endContent={
              <Icon
                className="flex-none outline-none [&>path]:stroke-[2]"
                icon="solar:arrow-right-linear"
                width={20}
              />
            }
            radius="full"
            variant="bordered"
          >
            {badgeText}
          </Button>

          {/* Title */}
          <div className="text-center text-[clamp(40px,10vw,64px)] font-bold leading-[1.2] tracking-tighter sm:text-[64px]">
            <div className="bg-gradient-to-r from-brand-blue to-blue-800 bg-clip-text text-transparent">
              {title}
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-center font-normal leading-7 text-default-500 sm:w-[466px] sm:text-[18px]">
            {subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Button
              as="a"
              href={primaryCta.href}
              className="h-10 w-[163px] bg-brand-blue px-[16px] py-[10px] text-small font-medium leading-5 text-white"
              radius="full"
            >
              {primaryCta.label}
            </Button>
            <Button
              as="a"
              href={secondaryCta.href}
              className="h-10 w-[163px] border-1 border-default-100 px-[16px] py-[10px] text-small font-medium leading-5"
              endContent={
                <span className="pointer-events-none flex h-[22px] w-[22px] items-center justify-center rounded-full bg-default-100">
                  <Icon
                    className="text-default-500 [&>path]:stroke-[1.5]"
                    icon="solar:arrow-right-linear"
                    width={16}
                  />
                </span>
              }
              radius="full"
              variant="bordered"
            >
              {secondaryCta.label}
            </Button>
          </div>
        </section>

        {/* Background Gradient */}
        <div className="pointer-events-none absolute inset-0 top-[-25%] z-10 scale-150 select-none sm:scale-125">
          <div
            className="absolute inset-0 bg-gradient-to-b from-blue-100/20 to-transparent"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.5
            }}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}