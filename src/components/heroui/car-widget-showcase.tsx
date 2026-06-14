"use client";

import React from "react";
import Image from "next/image";
import * as FeatherIcons from "react-feather";
import { motion } from "framer-motion";

export default function CarWidgetShowcase() {
  return (
    <section className="relative w-full overflow-hidden bg-[#eef0f4] py-10 md:py-16 lg:py-24 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-10 relative z-10 w-full flex flex-col">
        
        {/* Top Header Row */}
        <div className="flex flex-col sm:flex-row justify-between items-center z-30 relative mb-8 md:mb-12">
          {/* Logo Placeholder */}
          <div className="flex items-center gap-2 mb-4 sm:mb-0 md:absolute md:left-0 md:top-0">
            <div className="w-8 h-8 rounded-full bg-[#394263] flex items-center justify-center text-white">
              <FeatherIcons.ChevronRight size={18} />
            </div>
            <span className="text-[#394263] text-xl font-bold tracking-wide">Wiguna Auto</span>
          </div>

          {/* Top Center Tabs */}
          <div className="flex items-center gap-2 sm:gap-3 bg-white/40 p-1.5 rounded-full backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-white/60 md:absolute md:left-1/2 md:-translate-x-1/2 md:top-0">
            <button className="px-4 sm:px-6 py-2 bg-white rounded-full text-xs sm:text-sm font-semibold text-gray-800 shadow-sm transition-all">Service</button>
            <button className="px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium text-gray-600 hover:bg-white/60 transition-all">Sparepart</button>
            <button className="px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium text-gray-600 hover:bg-white/60 transition-all">Konsultasi</button>
          </div>
        </div>

        {/* Stage Container: 
            On desktop (md+), this holds all the absolute positioned widgets to match the design perfectly.
            On mobile, it flex-cols them. 
        */}
        <div className="relative w-full md:min-h-[700px] lg:min-h-[800px] flex flex-col md:block mt-4 md:mt-12">
          
          {/* 1. Left Side Content (Title & Description) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-[320px] lg:w-[360px] z-20 flex flex-col gap-4 md:gap-6 relative md:absolute md:left-0 md:top-[10%] mb-8 md:mb-0"
          >
            <div className="flex items-center gap-4">
              <h1 className="text-4xl lg:text-5xl font-medium text-[#2d3142] tracking-tight">Toyota Fortuner</h1>
              <button className="hidden md:flex w-10 h-10 rounded-full bg-white/70 backdrop-blur-md shadow-sm border border-white/80 items-center justify-center text-gray-600 hover:bg-white transition-all">
                <FeatherIcons.Repeat size={16} />
              </button>
            </div>
            
            <p className="text-gray-500 text-sm leading-relaxed">
              SUV tangguh dengan performa maksimal, dilengkapi fitur keamanan canggih, kenyamanan premium, dan desain modern yang elegan untuk segala medan.
            </p>
            
            <a href="#" className="text-sm font-semibold text-[#2d3142] underline decoration-gray-300 underline-offset-4 hover:decoration-[#2d3142] transition-all w-fit">
              Read More
            </a>

            {/* Left Floating Action Buttons */}
            <div className="flex flex-row md:flex-col gap-3 mt-4 md:mt-8">
              <button className="w-12 h-12 rounded-2xl bg-white/80 backdrop-blur-md shadow-sm border border-white flex items-center justify-center text-gray-700 hover:bg-white hover:scale-105 transition-all">
                <FeatherIcons.Crosshair size={18} />
              </button>
              <button className="w-12 h-12 rounded-2xl bg-white/80 backdrop-blur-md shadow-sm border border-white flex items-center justify-center text-gray-700 hover:bg-white hover:scale-105 transition-all">
                <FeatherIcons.Aperture size={18} />
              </button>
              <button className="w-12 h-12 rounded-2xl bg-white/80 backdrop-blur-md shadow-sm border border-white flex items-center justify-center text-gray-700 hover:bg-white hover:scale-105 transition-all">
                <FeatherIcons.Sliders size={18} />
              </button>
            </div>
          </motion.div>

          {/* 2. Center Car Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative md:absolute md:left-1/2 md:top-[45%] md:transform md:-translate-x-1/2 md:-translate-y-1/2 w-full md:w-[85%] lg:w-[75%] z-10 pointer-events-none mb-8 md:mb-0"
          >
            <Image
              src="/images/fortuner.png"
              alt="Toyota Fortuner"
              width={1200}
              height={600}
              className="w-full h-auto object-contain drop-shadow-2xl scale-110 md:scale-100"
              priority
            />
          </motion.div>

          {/* 3. Top Right Widget: Estimasi Biaya (Rental Cost equivalent) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full md:w-[320px] lg:w-[360px] z-30 relative md:absolute md:right-0 md:top-[5%] mb-8 md:mb-0"
          >
            <div className="bg-white/60 backdrop-blur-2xl rounded-[32px] p-5 lg:p-6 shadow-[0_8px_32px_rgba(0,0,0,0.04)] border border-white">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-base lg:text-lg font-bold text-gray-800">Estimasi Biaya</h3>
                  <p className="text-xs text-gray-500">Pilih opsi layanan</p>
                </div>
                <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-400 hover:text-gray-700 shadow-sm transition-all">
                  <FeatherIcons.X size={14} />
                </button>
              </div>

              <div className="space-y-3 lg:space-y-4 mb-6">
                <div className="bg-white rounded-2xl p-3 flex items-center justify-between shadow-sm border border-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-600">
                      <FeatherIcons.Settings size={18} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-800">Jasa Service</h4>
                      <p className="text-[10px] text-gray-400">Tune up rutin</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="text-gray-400 hover:text-gray-700"><FeatherIcons.ChevronLeft size={16} /></button>
                    <span className="text-base lg:text-lg font-bold text-gray-800 w-10 lg:w-12 text-center">1 <span className="text-[10px] font-normal text-gray-500 block -mt-1">Paket</span></span>
                    <button className="text-gray-400 hover:text-gray-700"><FeatherIcons.ChevronRight size={16} /></button>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-3 flex items-center justify-between shadow-sm border border-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-600">
                      <FeatherIcons.Shield size={18} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-800">Garansi</h4>
                      <p className="text-[10px] text-gray-400">Pilih paket</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="text-gray-400 hover:text-gray-700"><FeatherIcons.ChevronLeft size={16} /></button>
                    <span className="text-sm font-bold text-gray-800 w-12 lg:w-14 text-center">Basic</span>
                    <button className="text-gray-400 hover:text-gray-700"><FeatherIcons.ChevronRight size={16} /></button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 lg:gap-3">
                <button className="bg-white rounded-xl lg:rounded-2xl p-2 lg:p-3 flex flex-col items-center justify-center gap-1 lg:gap-2 shadow-sm border border-gray-50 hover:bg-gray-50 transition-all">
                  <FeatherIcons.Activity size={16} className="text-gray-600" />
                  <div className="text-center">
                    <span className="block text-[10px] lg:text-[11px] font-bold text-gray-800">Scan ECU</span>
                  </div>
                </button>
                <button className="bg-white/40 rounded-xl lg:rounded-2xl p-2 lg:p-3 flex flex-col items-center justify-center gap-1 lg:gap-2 border border-white hover:bg-white/80 transition-all opacity-70">
                  <FeatherIcons.Tool size={16} className="text-gray-400" />
                  <div className="text-center">
                    <span className="block text-[10px] lg:text-[11px] font-bold text-gray-600">Sparepart</span>
                  </div>
                </button>
                <button className="bg-white/40 rounded-xl lg:rounded-2xl p-2 lg:p-3 flex flex-col items-center justify-center gap-1 lg:gap-2 border border-white hover:bg-white/80 transition-all opacity-70">
                  <FeatherIcons.Droplet size={16} className="text-gray-400" />
                  <div className="text-center">
                    <span className="block text-[10px] lg:text-[11px] font-bold text-gray-600">Ganti Oli</span>
                  </div>
                </button>
              </div>
            </div>
          </motion.div>

          {/* 4. Bottom Center Panel: Mekanik Kepala (Driver Details equivalent) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="w-full md:w-[450px] lg:w-[480px] z-40 relative md:absolute md:left-1/2 md:-translate-x-1/2 md:bottom-[-20px] lg:bottom-0 mb-8 md:mb-0"
          >
            <div className="bg-white/80 backdrop-blur-2xl rounded-[32px] p-6 border border-white shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h4 className="text-sm font-bold text-gray-800">Mekanik Kepala</h4>
                  <p className="text-[10px] text-gray-500">Akses info mekanik</p>
                </div>
                <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-600 shadow-sm hover:scale-105 transition-all">
                  <FeatherIcons.Maximize2 size={14} />
                </button>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden border-2 border-white shadow-sm">
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-blue-600">
                    <FeatherIcons.User size={20} />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold text-gray-800">Budi Santoso</h3>
                    <span className="text-xs text-gray-400 font-medium">Senior, 10 Thn</span>
                  </div>
                </div>
                <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-600 shadow-sm border border-gray-100 hover:bg-gray-50 transition-all">
                  <FeatherIcons.Paperclip size={14} />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[9px] text-gray-400 mb-1">Spesialisasi</p>
                  <p className="text-xs font-semibold text-gray-800">Mesin & Transmisi</p>
                </div>
                <div>
                  <p className="text-[9px] text-gray-400 mb-1">ID Mekanik</p>
                  <p className="text-xs font-semibold text-gray-800">BW-1234</p>
                </div>
                <div>
                  <p className="text-[9px] text-gray-400 mb-1">Nomor Telepon</p>
                  <p className="text-xs font-semibold text-gray-800">+62 812 3456</p>
                </div>
                <div>
                  <p className="text-[9px] text-gray-400 mb-1">Email Support</p>
                  <p className="text-xs font-semibold text-gray-800">budi@wiguna.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 5. Bottom Left Panel (Lokasi Bengkel) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="w-full md:w-[240px] lg:w-[280px] z-30 relative md:absolute md:left-0 md:bottom-0 mb-4 md:mb-0"
          >
            <div className="bg-white/50 backdrop-blur-xl rounded-[24px] p-4 lg:p-5 flex justify-between items-center border border-white shadow-sm">
              <div>
                <h4 className="text-sm font-bold text-gray-800">Lokasi Bengkel</h4>
                <p className="text-[10px] text-gray-500">Cek rute ke lokasi</p>
              </div>
              <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-600 shadow-sm hover:scale-105 transition-all">
                <FeatherIcons.MapPin size={14} />
              </button>
            </div>
          </motion.div>

          {/* 6. Bottom Right Panel (Layanan Darurat) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="w-full md:w-[240px] lg:w-[280px] z-30 relative md:absolute md:right-0 md:bottom-0"
          >
            <div className="bg-white/50 backdrop-blur-xl rounded-[24px] p-4 lg:p-5 flex justify-between items-center border border-white shadow-sm">
              <div>
                <h4 className="text-sm font-bold text-gray-800">Layanan Darurat</h4>
                <p className="text-[10px] text-gray-500">Akses bantuan instan</p>
              </div>
              <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-600 shadow-sm hover:scale-105 transition-all">
                <FeatherIcons.PhoneCall size={14} />
              </button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
