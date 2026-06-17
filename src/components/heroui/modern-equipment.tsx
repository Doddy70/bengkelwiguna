"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import * as FeatherIcons from "react-feather";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardBody, CardHeader, Button, Divider } from "@nextui-org/react";
import equipmentData from "@/data/equipment.json";

// Hotspot Node (Floating style with dynamic positioning)
const FloatingHotspot = ({ top, left, isActive, onClick, delay = 0, title, description, offsetX = 100, offsetY = -100 }: any) => {
  // SVG line from the dot (0,0) to the center of the tooltip (offsetX + 110, offsetY + 40)
  // We use a simple path with a slight curve for aesthetics
  const endX = offsetX + 110;
  const endY = offsetY + 30;
  const controlX = endX * 0.5;
  const controlY = endY;
  const svgPath = `M 0 0 Q ${controlX} ${controlY} ${endX} ${endY}`;

  return (
    <div className="absolute z-20" style={{ top, left }}>
      {/* Tooltip Line (Always visible) */}
      <motion.svg
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{ opacity: 1, pathLength: 1 }}
        transition={{ duration: 0.5, delay }}
        className="absolute z-[-1] pointer-events-none hidden md:block"
        style={{ width: '1px', height: '1px', overflow: 'visible' }}
      >
        <path
          d={svgPath}
          fill="none"
          stroke={isActive ? "#2563eb" : "#93c5fd"}
          strokeWidth={isActive ? "2" : "1.5"}
          className="transition-all duration-300"
        />
      </motion.svg>

      {/* The Hotspot Dot (Blue and Animated) */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay }}
        className="relative group cursor-pointer flex items-center justify-center pointer-events-auto"
        onClick={onClick}
      >
        <div className={`absolute inset-[-6px] rounded-full opacity-60 ${isActive ? 'bg-blue-600 animate-pulse' : 'bg-blue-400 animate-pulse'}`}></div>
        <div className={`relative w-4 h-4 rounded-full shadow-lg z-10 flex items-center justify-center transition-all duration-300 ${isActive ? 'bg-blue-600 scale-125 ring-4 ring-white' : 'bg-white ring-2 ring-blue-500 hover:scale-110'}`}>
        </div>
      </motion.div>

      {/* Floating Tooltip Label (Always visible) */}
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, delay }}
        className={`absolute w-[220px] backdrop-blur-md rounded-2xl p-4 shadow-xl border z-50 md:z-auto transition-colors duration-300 cursor-pointer pointer-events-auto ${isActive ? 'bg-blue-600/95 border-blue-500' : 'bg-white/95 border-white hover:border-blue-200'}`}
        style={{ left: `${offsetX}px`, top: `${offsetY}px` }}
        onClick={onClick}
      >
        <div className="flex items-center gap-2 mb-1.5">
          <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-white' : 'bg-blue-500'}`}></div>
          <h4 className={`font-bold text-[13px] leading-tight transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-800'}`}>{title}</h4>
        </div>
        <p className={`text-[11px] leading-relaxed line-clamp-3 transition-colors duration-300 ${isActive ? 'text-blue-100' : 'text-gray-500'}`}>{description}</p>
      </motion.div>
    </div>
  );
};

export default function ModernEquipmentShowcase() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState<any | null>(null);
  // To avoid hydration mismatch if we want a real clock, or just use a static status
  const [currentTime, setCurrentTime] = useState("Live Monitoring");
  
  useEffect(() => {
    // Optional: Make it an actual clock on the client side
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }));
    }, 1000);
    // Init immediately
    setCurrentTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }));
    return () => clearInterval(interval);
  }, []);

  const activeItem = equipmentData[activeItemIndex];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#f0f4f8] via-[#f8fafc] to-[#eef2ff] font-sans text-gray-800 overflow-x-hidden lg:overflow-hidden relative flex flex-col lg:block pb-24 lg:pb-0">
      
      {/* 0. SECTION TITLE */}
      <div className="relative lg:absolute top-6 lg:top-[100px] left-0 right-0 w-full text-center z-20 px-4 mb-8 lg:mb-0">
         <div className="inline-flex items-center justify-center gap-2 px-3 py-1 bg-blue-100/80 backdrop-blur-sm border border-blue-200 rounded-full text-blue-700 font-bold text-[11px] uppercase tracking-widest mb-3 shadow-sm">
           <FeatherIcons.Crosshair size={12} />
           Teknologi Mutakhir
         </div>
         <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">Fasilitas & Peralatan Modern</h2>
         <p className="text-gray-500 text-sm mt-2 max-w-lg mx-auto">Inspeksi presisi tinggi untuk performa kendaraan maksimal.</p>
      </div>

      {/* 1. TOP NAVIGATION */}
      <header className="relative lg:absolute top-0 w-full h-[80px] px-6 lg:px-10 flex items-center justify-between z-50 bg-white/30 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none border-b border-white/20 lg:border-none">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white shrink-0">
            <FeatherIcons.Activity size={18} strokeWidth={2.5} />
          </div>
          <h1 className="text-xl font-bold text-gray-800 tracking-tight hidden sm:block">Wiguna Diagnostics</h1>
        </div>

        <div className="flex items-center gap-2 bg-white/60 lg:bg-white/40 backdrop-blur-xl rounded-full p-1.5 shadow-sm lg:shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] border border-white/60 overflow-x-auto scrollbar-hide max-w-[50vw] sm:max-w-none">
          {equipmentData.map((item: any, idx: number) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveItemIndex(idx);
                setActiveHotspot(null);
              }}
              className={`px-4 lg:px-5 py-2 rounded-full text-[12px] lg:text-[13px] font-semibold transition-all duration-300 flex items-center gap-2 shrink-0 ${
                activeItemIndex === idx
                  ? "bg-white text-gray-800 shadow-md"
                  : "bg-transparent text-gray-500 hover:text-gray-800"
              }`}
            >
              {item.name.replace("Mesin ", "")}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden shadow-sm shrink-0">
            <Image src="/images/services/fortuner_tools.png" alt="Profile" width={40} height={40} className="object-cover" />
          </div>
        </div>
      </header>

      {/* 3. LEFT FLOATING AREA (Title & Tools) - Moved up for Mobile Stacking Order */}
      <div className="relative lg:absolute lg:top-[160px] lg:left-[5%] xl:left-[8%] z-30 pointer-events-auto flex flex-col items-center lg:items-start max-w-full lg:max-w-[350px] mt-8 lg:mt-0 px-6 lg:px-0 text-center lg:text-left order-1 lg:order-none">
        <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
          <h2 className="text-[36px] lg:text-[46px] font-bold text-[#1e293b] tracking-tight leading-none">
            {activeItem.name}
          </h2>
          <button className="hidden lg:flex w-11 h-11 bg-white rounded-full items-center justify-center text-gray-500 shadow-sm hover:shadow-md transition-shadow shrink-0">
            <FeatherIcons.RefreshCcw size={16} />
          </button>
        </div>
        <p className="text-[14px] text-gray-500 leading-relaxed mb-6 lg:mb-12 max-w-md mx-auto lg:mx-0">
          Teknologi canggih {activeItem.name} yang mampu mensimulasikan guncangan jalan rusak secara statis untuk deteksi yang akurat.
        </p>

        {/* Circular tool buttons - Horizontal on mobile, vertical on desktop */}
        <div className="flex flex-row lg:flex-col gap-4 lg:gap-5 justify-center">
          <button className="w-12 h-12 lg:w-14 lg:h-14 bg-white rounded-full flex items-center justify-center text-gray-600 shadow-sm hover:shadow-md transition-all group">
            <FeatherIcons.Target size={20} className="group-hover:scale-110 transition-transform" />
          </button>
          <button className="w-12 h-12 lg:w-14 lg:h-14 bg-white rounded-full flex items-center justify-center text-gray-600 shadow-sm hover:shadow-md transition-all group">
            <FeatherIcons.Layers size={20} className="group-hover:scale-110 transition-transform" />
          </button>
          <button className="w-12 h-12 lg:w-14 lg:h-14 bg-white rounded-full flex items-center justify-center text-gray-600 shadow-sm hover:shadow-md transition-all group">
            <FeatherIcons.Sliders size={20} className="group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>

      {/* 2. CENTER CANVAS (Car & Hotspots) - Center on Mobile */}
      <div className="relative lg:absolute inset-0 z-10 flex items-center justify-center pointer-events-none lg:pt-10 mt-8 lg:mt-0 order-2 lg:order-none min-h-[300px] lg:min-h-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeItem.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
            className="relative w-full max-w-[1100px] aspect-[16/9] lg:mt-20 lg:ml-20"
          >
            <Image
              src={activeItem.image}
              alt={activeItem.name}
              fill
              className="object-contain drop-shadow-2xl z-10 lg:scale-110"
              priority
            />
            {/* Hotspots */}
            <div className="absolute inset-0 z-20">
              {activeItem.hotspots?.map((hotspot: any, index: number) => (
                <FloatingHotspot
                  key={index}
                  top={hotspot.top}
                  left={hotspot.left}
                  index={index}
                  isActive={activeHotspot === hotspot}
                  title={hotspot.widgetTitle || hotspot.title}
                  description={hotspot.diagnosa || hotspot.description}
                  offsetX={hotspot.labelOffsetX}
                  offsetY={hotspot.labelOffsetY}
                  onClick={() => setActiveHotspot(hotspot)}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 4. RIGHT FLOATING AREA (Info Detail Card) */}
      <div className="relative lg:absolute lg:top-[120px] lg:right-[5%] xl:right-[8%] z-30 pointer-events-auto w-full max-w-[500px] lg:w-[380px] px-6 lg:px-0 mt-12 lg:mt-0 mx-auto lg:mx-0 order-3 lg:order-none">
        <Card className="bg-white/80 backdrop-blur-xl shadow-2xl border border-white/60 p-2" radius="lg">
          <CardHeader className="flex justify-between items-center px-5 pt-5 pb-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                <FeatherIcons.Crosshair size={18} />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Area Terpilih</p>
                <h3 className="text-[16px] font-bold text-gray-800 leading-tight">
                  {activeHotspot ? activeHotspot.title : activeItem.name}
                </h3>
              </div>
            </div>
            <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50 bg-white" onClick={() => setActiveHotspot(null)}>
              <FeatherIcons.X size={14} />
            </button>
          </CardHeader>

          <CardBody className="gap-4 px-5 pb-5 pt-2 max-h-[70vh] overflow-y-auto scrollbar-hide">
            
            {/* 2. Deskripsi Singkat */}
            <p className="text-[13px] text-gray-600 leading-relaxed m-0 border-b border-gray-100 pb-4">
              {activeHotspot ? activeHotspot.treatment : activeItem.description}
            </p>

            {/* 3. Impact Score Cards (3 Kartu horizontal) */}
            {(activeItem.impactScores || []).length > 0 && (
              <div className="flex gap-2">
                {activeItem.impactScores.map((score: any, idx: number) => {
                  const Icon = (FeatherIcons as any)[score.icon] || FeatherIcons.CheckCircle;
                  return (
                    <div key={idx} className="flex-1 bg-white/60 p-2.5 rounded-xl border border-gray-100 shadow-sm text-center">
                      <Icon size={14} className="text-blue-500 mx-auto mb-1.5" />
                      <p className="text-[10px] text-gray-500 leading-tight mb-0.5">{score.title}</p>
                      <p className="text-[11px] font-bold text-gray-800">{score.value}</p>
                    </div>
                  );
                })}
              </div>
            )}

            {/* 4. Benefit Checklist */}
            {activeHotspot && activeHotspot.impacts && (
              <div className="pt-1">
                <ul className="space-y-2">
                  {activeHotspot.impacts.map((impact: string, idx: number) => (
                    <li key={idx} className="text-[13px] text-gray-700 flex items-start gap-2.5">
                      <FeatherIcons.Check size={16} className="text-green-500 shrink-0" />
                      <span className="leading-tight">{impact}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 5. Before vs After */}
            {activeHotspot && activeHotspot.beforeAfter && (
              <div className="flex flex-col sm:flex-row gap-3 mt-1">
                <div className="flex-1 bg-red-50/40 p-3 rounded-xl border border-red-100/50">
                  <p className="text-[11px] font-bold text-red-600 mb-2 uppercase tracking-wide">Sebelum</p>
                  <ul className="space-y-1.5">
                    {activeHotspot.beforeAfter.before.map((b: string, i: number) => (
                      <li key={i} className="text-[11px] text-gray-600 flex items-start gap-1.5 leading-tight">
                        <span className="w-1 h-1 rounded-full bg-red-400 mt-1.5 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 bg-green-50/40 p-3 rounded-xl border border-green-100/50">
                  <p className="text-[11px] font-bold text-green-600 mb-2 uppercase tracking-wide">Sesudah</p>
                  <ul className="space-y-1.5">
                    {activeHotspot.beforeAfter.after.map((a: string, i: number) => (
                      <li key={i} className="text-[11px] text-gray-600 flex items-start gap-1.5 leading-tight">
                        <span className="w-1 h-1 rounded-full bg-green-500 mt-1.5 shrink-0" />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* 6. Testimoni Kontekstual */}
            {activeHotspot && activeHotspot.testimonial && (
              <div className="mt-1 bg-gray-50/80 p-4 rounded-xl border border-gray-100 relative">
                <div className="flex text-yellow-400 mb-2">
                  {[...Array(5)].map((_, i) => <FeatherIcons.Star key={i} size={10} className="fill-current" />)}
                </div>
                <p className="text-[12px] italic text-gray-600 leading-relaxed mb-3">"{activeHotspot.testimonial.quote}"</p>
                <div className="text-[11px] font-bold text-gray-800">
                  - {activeHotspot.testimonial.author.split(',')[0]}
                  <span className="block text-gray-400 font-normal mt-0.5">{activeHotspot.testimonial.author.split(',').slice(1).join(',')}</span>
                </div>
              </div>
            )}

            {!activeHotspot && (
               <div className="text-center py-10 opacity-60">
                 <FeatherIcons.MousePointer size={32} className="mx-auto mb-3 text-gray-400" />
                 <p className="text-sm">Klik titik (hotspot) pada gambar kendaraan untuk melihat detail perawatan.</p>
               </div>
            )}

            {/* 7. Action Buttons / Sticky Footer */}
            <div className="mt-2 sticky bottom-0 bg-white pt-2 pb-1">
              <Button className="w-full bg-[#263e7c] text-white font-bold text-[14px] shadow-md shadow-blue-900/20" size="lg" radius="md">
                Booking Sekarang
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>

      {/* AI CHAT REMOVED PER IMPLEMENTATION PLAN */}

      {/* 6. BOTTOM PILLS - Hidden on mobile to reduce clutter, visible on Desktop */}
      <div className="hidden lg:flex absolute bottom-[5%] left-[5%] xl:left-[8%] z-30 pointer-events-auto">
        <div className="bg-white/80 backdrop-blur-xl rounded-full py-3 px-5 flex items-center gap-5 shadow-lg border border-white cursor-pointer hover:bg-white transition-colors">
          <div>
            <h4 className="text-[14px] font-bold text-gray-800 leading-tight">Panduan & FAQ</h4>
            <p className="text-[11.5px] text-gray-500">Solusi Mandiri</p>
          </div>
          <div className="w-9 h-9 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 shadow-sm">
            <FeatherIcons.ArrowUpRight size={16} />
          </div>
        </div>
      </div>

      <div className="hidden lg:flex absolute bottom-[5%] right-[5%] xl:right-[8%] z-30 pointer-events-auto">
        <div className="bg-white/80 backdrop-blur-xl rounded-full py-3 px-5 flex items-center gap-5 shadow-lg border border-white cursor-pointer hover:bg-white transition-colors">
          <div>
            <h4 className="text-[14px] font-bold text-gray-800 leading-tight">Layanan Edukasi</h4>
            <p className="text-[11.5px] text-gray-500">Access Support Instantly</p>
          </div>
          <div className="w-9 h-9 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 shadow-sm">
            <FeatherIcons.ArrowUpRight size={16} />
          </div>
        </div>
      </div>

    </div>
  );
}
