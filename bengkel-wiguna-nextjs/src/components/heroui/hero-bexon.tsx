/**
 * HeroUI Bexon Style — High Fidelity Restoration
 * 1:1 Matching the Bexon Home-05 layout with modern NextUI/HeroUI primitives.
 */

"use client";

import React from "react";
import { Button, Chip, Link } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { motion } from "framer-motion";

interface HeroBexonProps {
  badgeText?: string;
  title?: React.ReactNode;
  subtitle?: string;
  primaryAction?: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
  mainImage?: string;
}

export default function HeroBexon({
  badgeText = "Bengkel One Stop Service Terpercaya",
  title = <>Servis Mobil <span className="text-brand-blue">Akurat & Transparan</span> di Depok</>,
  subtitle = "Solusi lengkap perawatan kendaraan Anda mulai dari Ganti Oli, AC, Kaki-kaki, hingga Diagnosis Computerized Scanner OBD2.",
  primaryAction = { label: "Booking Sekarang", href: "https://wa.me/628123456789" },
  secondaryAction = { label: "Lihat Layanan", href: "/services" },
  mainImage = "/images/right-banner-bg.svg"
}: HeroBexonProps) {
  return (
    <div className="relative min-h-[900px] w-full bg-home-one-gradient-banner pt-32 pb-12 overflow-hidden">
      
      {/* Background Dots Pattern (matching Bexon) */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none" style={{ backgroundImage: "url('/images/svg/dots.svg')", backgroundRepeat: 'repeat' }} />

      <div className="max-w-screen-xl mx-auto boxed-layout-gap">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 items-center relative z-10 lg:pt-12">
          
          {/* Left Side: Content */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Chip
                className="bg-white brand-rounded border border-gray-100 text-brand-blue font-bold px-4 py-6 shadow-sm mb-2"
                variant="flat"
              >
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-blue"></span>
                  </span>
                  {badgeText}
                </div>
              </Chip>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-900 font-bold xl:text-[80px] lg:text-7xl text-5xl leading-[1.05] tracking-tighter"
            >
              {title}
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 text-xl font-medium max-w-lg leading-relaxed"
            >
              {subtitle}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button
                as={Link}
                href={primaryAction.href}
                className="bg-brand-blue text-white font-bold h-16 px-10 text-lg brand-rounded shadow-2xl shadow-brand-blue/30"
              >
                {primaryAction.label}
              </Button>
              <Button
                as={Link}
                href={secondaryAction.href}
                variant="bordered"
                className="border-2 border-gray-900 text-gray-900 font-bold h-16 px-10 text-lg brand-rounded hover:bg-gray-900 hover:text-white transition-all"
              >
                {secondaryAction.label}
              </Button>
            </motion.div>

            {/* Social / Text Image Decorative */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Image src="/images/text-icon.png" alt="Trusted" width={299} height={70} className="relative -left-4" />
            </motion.div>
          </div>

          {/* Right Side: Visual Image and Floating Cards */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative brand-rounded lg:overflow-visible overflow-hidden shadow-2xl"
            >
              <Image 
                src={mainImage} 
                alt="Bengkel Wiguna" 
                width={637} 
                height={721} 
                className="w-full h-auto brand-rounded object-cover"
                priority
              />

              {/* Floating Element: Experience (Classic Bexon Style) */}
              <div className="absolute top-10 -left-10 bg-white brand-rounded border border-gray-100 shadow-2xl p-5 flex items-center gap-4 hidden xl:flex z-20">
                <div className="w-14 h-14 bg-lime-300 brand-rounded flex items-center justify-center text-gray-900">
                  <Icon icon="solar:transmission-bold" width={32} />
                </div>
                <div>
                  <div className="text-3xl font-black text-gray-900 leading-none">15+</div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Tahun Eksis</div>
                </div>
              </div>

              {/* Floating Element: Trust Group (Classic Bexon Style) */}
              <div className="absolute bottom-10 -right-10 bg-white brand-rounded border border-gray-100 shadow-2xl p-5 flex flex-row items-center gap-5 hidden xl:flex z-20">
                <div className="flex -space-x-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden shadow-sm bg-gray-200">
                       <img src={`https://i.pravatar.cc/150?u=${i+10}`} alt="client" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="text-2xl font-black text-gray-900 leading-none">750+</div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Client Puas</div>
                </div>
              </div>

            </motion.div>
            
            {/* Background Blur Orbs */}
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-brand-blue/10 rounded-full blur-[100px] z-0" />
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-brand-gold/20 rounded-full blur-[100px] z-0" />
          </div>

        </div>
      </div>
    </div>
  );
}
