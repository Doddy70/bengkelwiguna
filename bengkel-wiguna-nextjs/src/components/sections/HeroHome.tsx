/**
 * HeroHome — High Fidelity Restoration
 * Replicating the exact Bexon v1 Hero from bengkelwiguna.com
 */

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function HeroHome() {
  return (
    <section className="tj-banner-section">
      <div className="max-w-screen-xl mx-auto boxed-layout-gap">
        <div className="banner-area">
          {/* Left Box */}
          <div className="banner-left-box">
            <div className="banner-content">
              <span className="sub-title" data-aos="fade-down" data-aos-delay="200">
                <Icon icon="solar:star-bold" className="text-brand-gold" /> Bengkel Mobil Terpercaya di Depok
              </span>
              <h1 className="banner-title" data-aos="fade-up" data-aos-delay="400">
                Servis Mobil <span className="text-brand-gold">Akurat & Transparan</span> di Depok
              </h1>
              <div className="banner-desc-area" data-aos="fade-up" data-aos-delay="700">
                <p className="banner-desc">
                  Dari penggantian ban hingga service AC, kami hadir dengan layanan profesional
                  dan berpengalaman untuk menjaga performa kendaraan Anda.
                </p>
                <div className="banner-btn-group flex gap-4 flex-wrap">
                  <Link 
                    href="/services" 
                    className="bg-brand-gold text-gray-900 font-bold px-8 py-4 brand-rounded flex items-center gap-2 hover:bg-white transition-all shadow-lg shadow-brand-gold/20"
                  >
                    Layanan Kami <Icon icon="solar:arrow-right-linear" />
                  </Link>
                  <Link
                    href="https://wa.me/6287817773888"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] text-white font-bold px-8 py-4 brand-rounded flex items-center gap-2 hover:opacity-90 transition-all shadow-lg"
                  >
                    <Icon icon="fontisto:whatsapp" /> Chat WhatsApp
                  </Link>
                </div>
              </div>
            </div>
            <div className="banner-shape">
              <Image
                src="/images/shape/pattern-bg.svg"
                alt=""
                width={600}
                height={600}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>

          {/* Right Box */}
          <div className="banner-right-box" data-aos="fade-left" data-aos-delay="300">
            <div className="banner-img">
              <Image
                src="/images/hero/bg_diagnostics.svg"
                alt="Bengkel Wiguna - Servis Mobil Profesional"
                width={945}
                height={793}
                priority
                className="w-full h-full object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 945px"
              />
            </div>
            {/* Customers Box (Floating) */}
            <div className="customers-box" data-aos="zoom-in" data-aos-delay="800">
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Tahun Pengalaman</span>
              </div>
              <p className="customers-text font-medium">
                Melayani ribuan kendaraan pelanggan setia dengan standar presisi tinggi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
