"use client";

import React, { useState } from "react";
import Image from "next/image";
import * as FeatherIcons from "react-feather";
import { motion, AnimatePresence } from "framer-motion";
import equipmentData from "@/data/equipment.json";

type FeatherIconKeys = keyof typeof FeatherIcons;

const smoothBezier = [0.32, 0.72, 0, 1] as const;

const HudHotspot = ({ top, left, title, subtitle, lineAngle, lineLength, labelOffsetX, labelOffsetY, delay = 0, imageUrl, onClick }: any) => {
  return (
    <div className="absolute z-20" style={{ top, left }}>
      {/* Glowing Dot */}
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay }}
        onClick={onClick}
        className="relative w-6 h-6 lg:w-4 lg:h-4 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.9)] flex items-center justify-center cursor-pointer group pointer-events-auto hover:scale-110"
      >
        <div className="absolute inset-0 rounded-full bg-white animate-ping opacity-60"></div>
        <div className="w-2.5 h-2.5 lg:w-2 lg:h-2 rounded-full bg-[#2d3142]"></div>
      </motion.div>
      
      {/* Pointer Line */}
      <motion.div 
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: lineLength, opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.3, ease: "easeOut" }}
        className="hidden lg:block absolute top-1/2 left-1/2 h-[1.5px] bg-[#2d3142]/40 origin-left pointer-events-none"
        style={{ transform: `translateY(-50%) rotate(${lineAngle}deg)` }}
      >
        {/* Moving particle on the line */}
        <motion.div 
          animate={{ left: ['0%', '100%'], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: delay + 1 }}
          className="absolute top-1/2 -translate-y-1/2 w-6 h-[2.5px] bg-[#2d3142] rounded-full shadow-[0_0_8px_rgba(45,49,66,0.8)]"
        />
      </motion.div>

      {/* Label Box */}
      <motion.div 
        initial={{ opacity: 0, y: 10, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, delay: delay + 0.8 }}
        onClick={onClick}
        className="hidden lg:flex absolute bg-white/70 backdrop-blur-2xl border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.08)] rounded-2xl px-4 py-3 w-[180px] pointer-events-auto cursor-pointer hover:bg-white/90 transition-all flex-col justify-center min-h-[75px]"
        style={{ top: labelOffsetY, left: labelOffsetX }}
      >
        <div className="flex items-center gap-2 mb-1.5">
           <div className="w-2 h-2 rounded-full bg-[#2d3142] shadow-[0_0_5px_rgba(45,49,66,0.5)]"></div>
           <h5 className="text-[13px] font-bold text-[#2d3142] leading-none">{title}</h5>
        </div>
        <p className="text-[11px] text-[#8b95a5] pl-4 leading-snug">{subtitle}</p>
      </motion.div>
    </div>
  );
};

export default function ModernEquipmentShowcase() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [revealedImage, setRevealedImage] = useState<string | null>(null);
  const activeItem = equipmentData[activeItemIndex];

  return (
    <section className="relative w-full overflow-hidden bg-[#eef0f4] min-h-screen font-sans">
      {/* Background Soft Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-white/60 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#dbe4f0]/60 blur-[120px] pointer-events-none"></div>

      {/* Header */}
      <header className="relative z-50 flex items-center justify-between w-full max-w-[1500px] mx-auto px-6 md:px-10 pt-8">
        {/* Logo */}
        <div className="flex items-center gap-3 w-[300px]">
          <div className="w-8 h-8 rounded-full bg-[#2d3142] flex items-center justify-center text-white shadow-md">
            <FeatherIcons.ChevronRight size={18} strokeWidth={3} />
          </div>
          <span className="text-[#2d3142] text-xl font-bold tracking-tight">Wiguna Tech</span>
        </div>

        {/* Center Pill Nav */}
        <div className="hidden md:flex items-center gap-2 bg-white/40 backdrop-blur-xl p-1.5 rounded-[2rem] shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-white/50">
          <button className="px-6 py-2.5 bg-white rounded-[1.5rem] text-sm font-bold text-[#2d3142] shadow-sm">Service</button>
          <button className="px-6 py-2.5 rounded-[1.5rem] text-sm font-semibold text-[#6b7280] hover:bg-white/50 transition-colors">Sparepart</button>
          <button className="px-6 py-2.5 rounded-[1.5rem] text-sm font-semibold text-[#6b7280] hover:bg-white/50 transition-colors">Konsultasi</button>
        </div>

        <div className="w-[300px] flex justify-end">
          {/* Empty spacer to balance flex-between */}
        </div>
      </header>

      {/* Main Content Area - Responsive Layout */}
      <div className="relative w-full max-w-[1500px] mx-auto lg:h-[85vh] lg:min-h-[800px] mt-4 lg:mt-8 flex flex-col lg:block px-4 sm:px-6 lg:px-0 pb-20 lg:pb-0 gap-6">
        
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeItem.id}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full"
          >
          {/* DESKTOP LAYOUT (Pure Absolute HUD) */}
          <div className="hidden lg:block relative w-full h-full">

            
            {/* Center Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 1.2, ease: smoothBezier }}
              className="absolute inset-0 flex justify-center items-center z-10 pointer-events-none w-full h-full"
            >
              <div className="relative w-full h-full max-w-[1100px] lg:scale-[1.25] xl:scale-[1.3] lg:-translate-y-4">
                <Image
                  src={activeItem.image}
                  alt={activeItem.name}
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />

                {/* Hotspots Overlay */}
                <div className="absolute inset-0 w-full h-full pointer-events-none">
                   {/* 1. Radiator -> Card Prestone di atas kaca mobil depan */}
                   <HudHotspot 
                     top="52%" left="5%" 
                     title="Mesin Kuras Radiator Prestone" subtitle="Cegah Overheat & Perpanjang Usia Mesin"
                     lineAngle={-53} lineLength={410}
                     labelOffsetX={250} labelOffsetY={-330}
                     delay={0.4}
                     onClick={() => setRevealedImage("/images/equipment/Prestone Coolant Changer.png")}
                   />
                   
                   {/* 2. Ban Depan -> Card Kyoto Shaking Machine di atas kap mobil */}
                   <HudHotspot 
                     top="70%" left="20%" 
                     title="Cek Kaki-Kaki Kyoto Shaking" subtitle="Deteksi Bunyi Akurat Tanpa Test Drive"
                     lineAngle={-73} lineLength={370}
                     labelOffsetX={110} labelOffsetY={-360}
                     delay={0.6}
                     onClick={() => setRevealedImage("/images/equipment/Shaking-Pro-1.png")}
                   />

                   {/* 3. Blok Mesin -> Card Stinger Engine Flush di atas kap mesin */}
                   <HudHotspot 
                     top="45%" left="28%" 
                     title="Servis Ruang Mesin Stinger" subtitle="Kembalikan Tarikan Mesin Seperti Baru"
                     lineAngle={-52} lineLength={350}
                     labelOffsetX={220} labelOffsetY={-280}
                     delay={0.8}
                     onClick={() => setRevealedImage("/images/equipment/Stinger-Promo.png")}
                   />

                   {/* 4. Dashboard Depan -> Card Kyoto Flushing menyebar ke ruang kosong */}
                   <HudHotspot 
                     top="38%" left="38%" 
                     title="Flushing AC Mobil Kyoto" subtitle="Solusi Ampuh AC Panas & Bau Seketika"
                     lineAngle={-22} lineLength={260}
                     labelOffsetX={240} labelOffsetY={-100}
                     delay={1.0}
                     onClick={() => setRevealedImage("/images/equipment/Flushing.png")}
                   />
                </div>

                {/* Mobile Tap Hint */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 lg:hidden px-4 py-2 bg-white/50 backdrop-blur-md rounded-full border border-white/60 shadow-sm text-center w-max pointer-events-auto">
                  <p className="text-[12px] font-medium text-[#2d3142] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                    Ketuk titik pada gambar untuk detail
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Top Left: Title & Description */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: smoothBezier }}
              className="absolute top-10 left-10 z-20 w-full max-w-[400px]"
            >
              <div className="flex items-center gap-4 mb-5">
                <h1 className="text-[3.5rem] leading-none font-medium text-[#2d3142] tracking-tight">
                  {activeItem.name}
                </h1>
                <button className="w-12 h-12 rounded-2xl bg-white/70 backdrop-blur-xl shadow-sm border border-white/60 flex items-center justify-center text-gray-500 hover:bg-white transition-all shrink-0">
                  <FeatherIcons.Repeat size={18} />
                </button>
              </div>
              
              <p className="text-[#6b7280] text-sm lg:text-[15px] leading-relaxed mb-6 max-w-[340px]">
                {activeItem.description}
              </p>
              
              <a href="#" className="text-sm font-bold text-[#394263] hover:text-black transition-colors">
                Read More
              </a>

              {/* Vertical Action Buttons */}
              <div className="hidden md:flex flex-col gap-4 mt-16">
                <button className="w-14 h-14 rounded-[1.25rem] bg-white shadow-sm border border-white/60 flex items-center justify-center text-[#2d3142] hover:bg-gray-50 transition-all">
                  <FeatherIcons.Target size={22} strokeWidth={1.5} />
                </button>
                <button className="w-14 h-14 rounded-[1.25rem] bg-white shadow-sm border border-white/60 flex items-center justify-center text-[#2d3142] hover:bg-gray-50 transition-all">
                  <FeatherIcons.Layers size={22} strokeWidth={1.5} />
                </button>
                <button className="w-14 h-14 rounded-[1.25rem] bg-white/50 backdrop-blur-md shadow-sm border border-white/60 flex items-center justify-center text-[#2d3142] hover:bg-white transition-all">
                  <FeatherIcons.Sliders size={22} strokeWidth={1.5} />
                </button>
              </div>
            </motion.div>

            {/* Top Right: Specs Widget */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: smoothBezier }}
              className="absolute top-10 right-10 z-30 w-full max-w-[360px]"
            >
              <div className="bg-white/50 backdrop-blur-[32px] rounded-[2.5rem] p-7 shadow-[0_8px_32px_rgba(0,0,0,0.06)] border border-white/60">
                <div className="flex justify-between items-start mb-7">
                  <div>
                    <h3 className="text-[1.1rem] font-bold text-[#2d3142]">Spesifikasi Detail</h3>
                    <p className="text-[13px] text-[#8b95a5] mt-1">{revealedImage ? "Equipment Preview" : "Select options to see"}</p>
                  </div>
                  <button 
                    className="w-9 h-9 rounded-[1rem] bg-white shadow-sm flex items-center justify-center text-[#8b95a5] hover:text-[#2d3142]"
                    onClick={() => setRevealedImage(null)}
                  >
                    <FeatherIcons.X size={16} />
                  </button>
                </div>

                <AnimatePresence mode="wait">
                  {!revealedImage ? (
                    <motion.div 
                      key="specs"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="space-y-4 mb-5">
                        {/* Base Fee Row */}
                        <div className="bg-white rounded-[1.5rem] p-4 flex items-center justify-between shadow-sm">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-[1rem] bg-[#f2f4f7] flex items-center justify-center text-[#394263]">
                              <FeatherIcons.Crosshair size={18} />
                            </div>
                            <div>
                              <p className="text-[14px] font-bold text-[#2d3142]">Akurasi</p>
                              <p className="text-[11px] text-[#8b95a5]">Tingkat presisi</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <FeatherIcons.ChevronLeft size={18} className="text-[#394263] cursor-pointer" />
                            <div className="text-center">
                              <p className="text-[22px] font-bold text-[#2d3142] leading-none">99</p>
                              <p className="text-[10px] text-[#8b95a5] font-medium">%</p>
                            </div>
                            <FeatherIcons.ChevronRight size={18} className="text-[#394263] cursor-pointer" />
                          </div>
                        </div>

                        {/* Insurance Row */}
                        <div className="bg-white rounded-[1.5rem] p-4 flex items-center justify-between shadow-sm">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-[1rem] bg-[#f2f4f7] flex items-center justify-center text-[#394263]">
                              <FeatherIcons.Shield size={18} />
                            </div>
                            <div>
                              <p className="text-[14px] font-bold text-[#2d3142]">Garansi</p>
                              <p className="text-[11px] text-[#8b95a5]">Pick a Plan</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <FeatherIcons.ChevronLeft size={18} className="text-[#394263] cursor-pointer" />
                            <p className="text-[15px] font-bold text-[#2d3142] w-12 text-center">Basic</p>
                            <FeatherIcons.ChevronRight size={18} className="text-[#394263] cursor-pointer" />
                          </div>
                        </div>
                      </div>

                      {/* Features Grid */}
                      <div className="grid grid-cols-3 gap-3">
                        <div className="bg-white rounded-[1.25rem] py-4 px-2 flex flex-col items-center justify-center gap-1 shadow-sm">
                          <div className="w-8 h-8 rounded-full bg-[#f2f4f7] flex items-center justify-center mb-1">
                            <FeatherIcons.Cpu size={16} className="text-[#394263]" />
                          </div>
                          <p className="text-[12px] font-bold text-[#2d3142]">Sistem</p>
                          <p className="text-[10px] text-[#8b95a5]">Auto-check</p>
                        </div>
                        <div className="bg-white/30 rounded-[1.25rem] py-4 px-2 flex flex-col items-center justify-center gap-1 border border-white/50">
                          <div className="w-8 h-8 rounded-full flex items-center justify-center mb-1">
                            <FeatherIcons.UserCheck size={16} className="text-[#8b95a5]" />
                          </div>
                          <p className="text-[12px] font-bold text-[#8b95a5]">Sertifikasi</p>
                          <p className="text-[10px] text-[#8b95a5]">Not included</p>
                        </div>
                        <div className="bg-white rounded-[1.25rem] py-4 px-2 flex flex-col items-center justify-center gap-1 shadow-sm">
                          <div className="w-8 h-8 rounded-full bg-[#f2f4f7] flex items-center justify-center mb-1">
                            <FeatherIcons.Wifi size={16} className="text-[#394263]" />
                          </div>
                          <p className="text-[12px] font-bold text-[#2d3142]">Update</p>
                          <p className="text-[10px] text-[#8b95a5]">Unlimited</p>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="image"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="w-full h-[280px] relative rounded-[1.5rem] overflow-hidden bg-white/40 flex items-center justify-center p-4 border border-white/60 shadow-inner"
                    >
                      <Image 
                        src={revealedImage} 
                        alt="Product Preview" 
                        fill 
                        className="object-contain p-4 drop-shadow-xl hover:scale-110 transition-transform duration-500"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Bottom Center: AI Chatbox */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: smoothBezier }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2 z-40 w-full max-w-[460px]"
            >
              <div className="bg-white/60 backdrop-blur-[32px] rounded-t-[2.5rem] rounded-b-[2rem] p-6 shadow-[0_16px_48px_rgba(0,0,0,0.08)] border border-white/60 flex flex-col gap-4">
                
                {/* Header */}
                <div className="flex justify-between items-center px-1">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-[1rem] bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-sm">
                      <FeatherIcons.MessageSquare size={18} />
                    </div>
                    <div>
                      <h3 className="text-[1.1rem] font-bold text-[#2d3142]">Wiguna AI</h3>
                      <p className="text-[12px] text-[#8b95a5]">Always online to help</p>
                    </div>
                  </div>
                  <button className="w-9 h-9 rounded-[1rem] bg-white/60 shadow-sm flex items-center justify-center text-[#8b95a5] hover:text-[#2d3142]">
                    <FeatherIcons.Maximize2 size={14} />
                  </button>
                </div>

                {/* Chat Messages */}
                <div className="flex flex-col gap-3 h-[140px] overflow-y-auto pr-1">
                  {/* AI Bubble */}
                  <div className="flex items-end gap-2">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shrink-0">
                      <FeatherIcons.Zap size={12} />
                    </div>
                    <div className="bg-white/80 backdrop-blur-md rounded-2xl rounded-bl-none px-4 py-2.5 shadow-sm border border-white/60 max-w-[85%]">
                      <p className="text-[13px] text-[#2d3142] leading-relaxed">
                        Halo! Ada yang bisa saya bantu terkait <span className="font-bold">{activeItem.name}</span>?
                      </p>
                    </div>
                  </div>
                  
                  {/* User Bubble */}
                  <div className="flex items-end gap-2 justify-end">
                    <div className="bg-[#2d3142] rounded-2xl rounded-br-none px-4 py-2.5 shadow-sm max-w-[85%]">
                      <p className="text-[13px] text-white leading-relaxed">
                        Apa keunggulan utamanya?
                      </p>
                    </div>
                  </div>
                </div>

                {/* Input Area */}
                <div className="relative mt-1">
                  <input 
                    type="text" 
                    placeholder="Type your question..." 
                    className="w-full h-12 bg-white/70 backdrop-blur-md border border-white/60 rounded-full pl-5 pr-12 text-[13px] text-[#2d3142] placeholder-[#8b95a5] focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-inner"
                  />
                  <button className="absolute right-1.5 top-1.5 w-9 h-9 rounded-full bg-[#2d3142] flex items-center justify-center text-white hover:bg-[#1a1c29] transition-colors shadow-sm">
                    <FeatherIcons.Send size={14} className="-ml-0.5" />
                  </button>
                </div>

              </div>
            </motion.div>

            {/* Bottom Left: Roadmap Panel */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease: smoothBezier }}
              className="absolute bottom-10 left-10 z-30 w-full max-w-[320px] hidden md:block"
            >
              <div className="bg-white/40 backdrop-blur-2xl rounded-[2rem] p-6 shadow-[0_8px_32px_rgba(0,0,0,0.03)] border border-white/60 flex items-center justify-between">
                <div>
                  <h4 className="text-[15px] font-bold text-[#2d3142]">Panduan & FAQ</h4>
                  <p className="text-[12px] text-[#8b95a5] mt-1">Set Location Details</p>
                </div>
                <button className="w-10 h-10 rounded-[1rem] bg-white shadow-sm flex items-center justify-center text-[#8b95a5] hover:text-[#2d3142] transition-colors">
                  <FeatherIcons.ArrowUpRight size={16} />
                </button>
              </div>
            </motion.div>

            {/* Bottom Right: In-Rental Support */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5, ease: smoothBezier }}
              className="absolute bottom-10 right-10 z-30 w-full max-w-[320px] hidden md:block"
            >
              <div className="bg-white/40 backdrop-blur-2xl rounded-[2rem] p-6 shadow-[0_8px_32px_rgba(0,0,0,0.03)] border border-white/60 flex items-center justify-between">
                <div>
                  <h4 className="text-[15px] font-bold text-[#2d3142]">Layanan Edukasi</h4>
                  <p className="text-[12px] text-[#8b95a5] mt-1">Access Support Instantly</p>
                </div>
                <button className="w-10 h-10 rounded-[1rem] bg-white shadow-sm flex items-center justify-center text-[#8b95a5] hover:text-[#2d3142] transition-colors">
                  <FeatherIcons.ArrowUpRight size={16} />
                </button>
              </div>
            </motion.div>

          
          </div>

          {/* MOBILE & TABLET LAYOUT (Flexbox Stacking) */}
          <div className="flex flex-col lg:hidden w-full h-full gap-6">

            
            {/* Center Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 1.2, ease: smoothBezier }}
              className="relative flex justify-center items-center z-10 pointer-events-none order-2 h-[45vh] min-h-[350px] w-full"
            >
              <div className="relative w-full h-full max-w-[1100px] lg:scale-[1.25] xl:scale-[1.3] lg:-translate-y-4">
                <Image
                  src={activeItem.image}
                  alt={activeItem.name}
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />

                {/* Hotspots Overlay */}
                <div className="absolute inset-0 w-full h-full pointer-events-none">
                   {/* 1. Radiator -> Card Prestone di atas kaca mobil depan */}
                   <HudHotspot 
                     top="52%" left="5%" 
                     title="Mesin Kuras Radiator Prestone" subtitle="Cegah Overheat & Perpanjang Usia Mesin"
                     lineAngle={-53} lineLength={410}
                     labelOffsetX={250} labelOffsetY={-330}
                     delay={0.4}
                     onClick={() => setRevealedImage("/images/equipment/Prestone Coolant Changer.png")}
                   />
                   
                   {/* 2. Ban Depan -> Card Kyoto Shaking Machine di atas kap mobil */}
                   <HudHotspot 
                     top="70%" left="20%" 
                     title="Cek Kaki-Kaki Kyoto Shaking" subtitle="Deteksi Bunyi Akurat Tanpa Test Drive"
                     lineAngle={-73} lineLength={370}
                     labelOffsetX={110} labelOffsetY={-360}
                     delay={0.6}
                     onClick={() => setRevealedImage("/images/equipment/Shaking-Pro-1.png")}
                   />

                   {/* 3. Blok Mesin -> Card Stinger Engine Flush di atas kap mesin */}
                   <HudHotspot 
                     top="45%" left="28%" 
                     title="Servis Ruang Mesin Stinger" subtitle="Kembalikan Tarikan Mesin Seperti Baru"
                     lineAngle={-52} lineLength={350}
                     labelOffsetX={220} labelOffsetY={-280}
                     delay={0.8}
                     onClick={() => setRevealedImage("/images/equipment/Stinger-Promo.png")}
                   />

                   {/* 4. Dashboard Depan -> Card Kyoto Flushing menyebar ke ruang kosong */}
                   <HudHotspot 
                     top="38%" left="38%" 
                     title="Flushing AC Mobil Kyoto" subtitle="Solusi Ampuh AC Panas & Bau Seketika"
                     lineAngle={-22} lineLength={260}
                     labelOffsetX={240} labelOffsetY={-100}
                     delay={1.0}
                     onClick={() => setRevealedImage("/images/equipment/Flushing.png")}
                   />
                </div>

                {/* Mobile Tap Hint */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 lg:hidden px-4 py-2 bg-white/50 backdrop-blur-md rounded-full border border-white/60 shadow-sm text-center w-max pointer-events-auto">
                  <p className="text-[12px] font-medium text-[#2d3142] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                    Ketuk titik pada gambar untuk detail
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Top Left: Title & Description */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: smoothBezier }}
              className="relative z-20 w-full order-1"
            >
              <div className="flex items-center gap-4 mb-5">
                <h1 className="text-[3.5rem] leading-none font-medium text-[#2d3142] tracking-tight">
                  {activeItem.name}
                </h1>
                <button className="w-12 h-12 rounded-2xl bg-white/70 backdrop-blur-xl shadow-sm border border-white/60 flex items-center justify-center text-gray-500 hover:bg-white transition-all shrink-0">
                  <FeatherIcons.Repeat size={18} />
                </button>
              </div>
              
              <p className="text-[#6b7280] text-sm lg:text-[15px] leading-relaxed mb-6 max-w-[340px]">
                {activeItem.description}
              </p>
              
              <a href="#" className="text-sm font-bold text-[#394263] hover:text-black transition-colors">
                Read More
              </a>

              {/* Vertical Action Buttons */}
              <div className="hidden md:flex flex-col gap-4 mt-16">
                <button className="w-14 h-14 rounded-[1.25rem] bg-white shadow-sm border border-white/60 flex items-center justify-center text-[#2d3142] hover:bg-gray-50 transition-all">
                  <FeatherIcons.Target size={22} strokeWidth={1.5} />
                </button>
                <button className="w-14 h-14 rounded-[1.25rem] bg-white shadow-sm border border-white/60 flex items-center justify-center text-[#2d3142] hover:bg-gray-50 transition-all">
                  <FeatherIcons.Layers size={22} strokeWidth={1.5} />
                </button>
                <button className="w-14 h-14 rounded-[1.25rem] bg-white/50 backdrop-blur-md shadow-sm border border-white/60 flex items-center justify-center text-[#2d3142] hover:bg-white transition-all">
                  <FeatherIcons.Sliders size={22} strokeWidth={1.5} />
                </button>
              </div>
            </motion.div>

            {/* Top Right: Specs Widget */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: smoothBezier }}
              className="relative z-30 w-full order-3"
            >
              <div className="bg-white/50 backdrop-blur-[32px] rounded-[2.5rem] p-7 shadow-[0_8px_32px_rgba(0,0,0,0.06)] border border-white/60">
                <div className="flex justify-between items-start mb-7">
                  <div>
                    <h3 className="text-[1.1rem] font-bold text-[#2d3142]">Spesifikasi Detail</h3>
                    <p className="text-[13px] text-[#8b95a5] mt-1">{revealedImage ? "Equipment Preview" : "Select options to see"}</p>
                  </div>
                  <button 
                    className="w-9 h-9 rounded-[1rem] bg-white shadow-sm flex items-center justify-center text-[#8b95a5] hover:text-[#2d3142]"
                    onClick={() => setRevealedImage(null)}
                  >
                    <FeatherIcons.X size={16} />
                  </button>
                </div>

                <AnimatePresence mode="wait">
                  {!revealedImage ? (
                    <motion.div 
                      key="specs"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="space-y-4 mb-5">
                        {/* Base Fee Row */}
                        <div className="bg-white rounded-[1.5rem] p-4 flex items-center justify-between shadow-sm">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-[1rem] bg-[#f2f4f7] flex items-center justify-center text-[#394263]">
                              <FeatherIcons.Crosshair size={18} />
                            </div>
                            <div>
                              <p className="text-[14px] font-bold text-[#2d3142]">Akurasi</p>
                              <p className="text-[11px] text-[#8b95a5]">Tingkat presisi</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <FeatherIcons.ChevronLeft size={18} className="text-[#394263] cursor-pointer" />
                            <div className="text-center">
                              <p className="text-[22px] font-bold text-[#2d3142] leading-none">99</p>
                              <p className="text-[10px] text-[#8b95a5] font-medium">%</p>
                            </div>
                            <FeatherIcons.ChevronRight size={18} className="text-[#394263] cursor-pointer" />
                          </div>
                        </div>

                        {/* Insurance Row */}
                        <div className="bg-white rounded-[1.5rem] p-4 flex items-center justify-between shadow-sm">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-[1rem] bg-[#f2f4f7] flex items-center justify-center text-[#394263]">
                              <FeatherIcons.Shield size={18} />
                            </div>
                            <div>
                              <p className="text-[14px] font-bold text-[#2d3142]">Garansi</p>
                              <p className="text-[11px] text-[#8b95a5]">Pick a Plan</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <FeatherIcons.ChevronLeft size={18} className="text-[#394263] cursor-pointer" />
                            <p className="text-[15px] font-bold text-[#2d3142] w-12 text-center">Basic</p>
                            <FeatherIcons.ChevronRight size={18} className="text-[#394263] cursor-pointer" />
                          </div>
                        </div>
                      </div>

                      {/* Features Grid */}
                      <div className="grid grid-cols-3 gap-3">
                        <div className="bg-white rounded-[1.25rem] py-4 px-2 flex flex-col items-center justify-center gap-1 shadow-sm">
                          <div className="w-8 h-8 rounded-full bg-[#f2f4f7] flex items-center justify-center mb-1">
                            <FeatherIcons.Cpu size={16} className="text-[#394263]" />
                          </div>
                          <p className="text-[12px] font-bold text-[#2d3142]">Sistem</p>
                          <p className="text-[10px] text-[#8b95a5]">Auto-check</p>
                        </div>
                        <div className="bg-white/30 rounded-[1.25rem] py-4 px-2 flex flex-col items-center justify-center gap-1 border border-white/50">
                          <div className="w-8 h-8 rounded-full flex items-center justify-center mb-1">
                            <FeatherIcons.UserCheck size={16} className="text-[#8b95a5]" />
                          </div>
                          <p className="text-[12px] font-bold text-[#8b95a5]">Sertifikasi</p>
                          <p className="text-[10px] text-[#8b95a5]">Not included</p>
                        </div>
                        <div className="bg-white rounded-[1.25rem] py-4 px-2 flex flex-col items-center justify-center gap-1 shadow-sm">
                          <div className="w-8 h-8 rounded-full bg-[#f2f4f7] flex items-center justify-center mb-1">
                            <FeatherIcons.Wifi size={16} className="text-[#394263]" />
                          </div>
                          <p className="text-[12px] font-bold text-[#2d3142]">Update</p>
                          <p className="text-[10px] text-[#8b95a5]">Unlimited</p>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="image"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="w-full h-[280px] relative rounded-[1.5rem] overflow-hidden bg-white/40 flex items-center justify-center p-4 border border-white/60 shadow-inner"
                    >
                      <Image 
                        src={revealedImage} 
                        alt="Product Preview" 
                        fill 
                        className="object-contain p-4 drop-shadow-xl hover:scale-110 transition-transform duration-500"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Bottom Center: AI Chatbox */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: smoothBezier }}
              className="relative lg:absolute lg:bottom-10 lg:left-1/2 lg:-translate-x-1/2 z-40 w-full lg:max-w-[460px] mx-auto order-4 lg:order-none mb-6 lg:mb-0"
            >
              <div className="bg-white/60 backdrop-blur-[32px] rounded-t-[2.5rem] rounded-b-[2rem] p-6 shadow-[0_16px_48px_rgba(0,0,0,0.08)] border border-white/60 flex flex-col gap-4">
                
                {/* Header */}
                <div className="flex justify-between items-center px-1">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-[1rem] bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-sm">
                      <FeatherIcons.MessageSquare size={18} />
                    </div>
                    <div>
                      <h3 className="text-[1.1rem] font-bold text-[#2d3142]">Wiguna AI</h3>
                      <p className="text-[12px] text-[#8b95a5]">Always online to help</p>
                    </div>
                  </div>
                  <button className="w-9 h-9 rounded-[1rem] bg-white/60 shadow-sm flex items-center justify-center text-[#8b95a5] hover:text-[#2d3142]">
                    <FeatherIcons.Maximize2 size={14} />
                  </button>
                </div>

                {/* Chat Messages */}
                <div className="flex flex-col gap-3 h-[140px] overflow-y-auto pr-1">
                  {/* AI Bubble */}
                  <div className="flex items-end gap-2">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shrink-0">
                      <FeatherIcons.Zap size={12} />
                    </div>
                    <div className="bg-white/80 backdrop-blur-md rounded-2xl rounded-bl-none px-4 py-2.5 shadow-sm border border-white/60 max-w-[85%]">
                      <p className="text-[13px] text-[#2d3142] leading-relaxed">
                        Halo! Ada yang bisa saya bantu terkait <span className="font-bold">{activeItem.name}</span>?
                      </p>
                    </div>
                  </div>
                  
                  {/* User Bubble */}
                  <div className="flex items-end gap-2 justify-end">
                    <div className="bg-[#2d3142] rounded-2xl rounded-br-none px-4 py-2.5 shadow-sm max-w-[85%]">
                      <p className="text-[13px] text-white leading-relaxed">
                        Apa keunggulan utamanya?
                      </p>
                    </div>
                  </div>
                </div>

                {/* Input Area */}
                <div className="relative mt-1">
                  <input 
                    type="text" 
                    placeholder="Type your question..." 
                    className="w-full h-12 bg-white/70 backdrop-blur-md border border-white/60 rounded-full pl-5 pr-12 text-[13px] text-[#2d3142] placeholder-[#8b95a5] focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-inner"
                  />
                  <button className="absolute right-1.5 top-1.5 w-9 h-9 rounded-full bg-[#2d3142] flex items-center justify-center text-white hover:bg-[#1a1c29] transition-colors shadow-sm">
                    <FeatherIcons.Send size={14} className="-ml-0.5" />
                  </button>
                </div>

              </div>
            </motion.div>

            {/* Bottom Left: Roadmap Panel */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease: smoothBezier }}
              className="relative lg:absolute lg:bottom-10 lg:left-10 z-30 w-full max-w-[320px] mx-auto lg:mx-0 order-5 lg:order-none mb-6 lg:mb-0 hidden md:block"
            >
              <div className="bg-white/40 backdrop-blur-2xl rounded-[2rem] p-6 shadow-[0_8px_32px_rgba(0,0,0,0.03)] border border-white/60 flex items-center justify-between">
                <div>
                  <h4 className="text-[15px] font-bold text-[#2d3142]">Panduan & FAQ</h4>
                  <p className="text-[12px] text-[#8b95a5] mt-1">Set Location Details</p>
                </div>
                <button className="w-10 h-10 rounded-[1rem] bg-white shadow-sm flex items-center justify-center text-[#8b95a5] hover:text-[#2d3142] transition-colors">
                  <FeatherIcons.ArrowUpRight size={16} />
                </button>
              </div>
            </motion.div>

            {/* Bottom Right: In-Rental Support */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5, ease: smoothBezier }}
              className="relative lg:absolute lg:bottom-10 lg:right-10 z-30 w-full max-w-[320px] mx-auto lg:mx-0 order-6 lg:order-none mb-6 lg:mb-0 hidden md:block"
            >
              <div className="bg-white/40 backdrop-blur-2xl rounded-[2rem] p-6 shadow-[0_8px_32px_rgba(0,0,0,0.03)] border border-white/60 flex items-center justify-between">
                <div>
                  <h4 className="text-[15px] font-bold text-[#2d3142]">Layanan Edukasi</h4>
                  <p className="text-[12px] text-[#8b95a5] mt-1">Access Support Instantly</p>
                </div>
                <button className="w-10 h-10 rounded-[1rem] bg-white shadow-sm flex items-center justify-center text-[#8b95a5] hover:text-[#2d3142] transition-colors">
                  <FeatherIcons.ArrowUpRight size={16} />
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
