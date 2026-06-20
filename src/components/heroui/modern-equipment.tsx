"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import * as FeatherIcons from "react-feather";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardBody, CardHeader, Button, Divider } from "@nextui-org/react";
import equipmentData from "@/data/equipment.json";

// Hotspot Node (Floating style with dynamic positioning)
const FloatingHotspot = ({ top, left, isActive, onClick, delay = 0, title, description, offsetX = 100, offsetY = -100, index }: any) => {
  // SVG line from the dot (0,0) to the center of the tooltip (offsetX + 110, offsetY + 40)
  // We use a simple path with a slight curve for aesthetics
  const endX = offsetX + 110;
  const endY = offsetY + 30;
  const controlX = endX * 0.5;
  const controlY = endY;
  const svgPath = `M 0 0 Q ${controlX} ${controlY} ${endX} ${endY}`;

  return (
    <div className="absolute z-20" style={{ top, left }}>
      {/* Tooltip Line (Visible only when active) */}
      <AnimatePresence>
        {isActive && (
          <motion.svg
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: 1, pathLength: 1 }}
            exit={{ opacity: 0, pathLength: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute z-[-1] pointer-events-none hidden md:block"
            style={{ width: '1px', height: '1px', overflow: 'visible' }}
          >
            <path
              d={svgPath}
              fill="none"
              stroke="#2563eb"
              strokeWidth="2"
              className="transition-all duration-300"
            />
          </motion.svg>
        )}
      </AnimatePresence>

      {/* The Hotspot Dot (Blue and Animated) */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay }}
        className="relative group cursor-pointer flex items-center justify-center pointer-events-auto"
        onClick={onClick}
      >
        <div className={`absolute inset-[-6px] rounded-full opacity-60 ${isActive ? 'bg-blue-600 animate-pulse' : 'bg-blue-400 animate-pulse'}`}></div>
        <div className={`relative w-6 h-6 rounded-full shadow-lg z-10 flex items-center justify-center transition-all duration-300 ${isActive ? 'bg-blue-600 text-white scale-110 ring-4 ring-white' : 'bg-white text-blue-600 ring-2 ring-blue-500 hover:scale-110'} text-[11px] font-black`}>
          {index !== undefined ? index + 1 : ''}
        </div>
      </motion.div>

      {/* Floating Tooltip Label (Visible only when active) */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="absolute w-[220px] backdrop-blur-md rounded-2xl p-4 shadow-xl border z-50 md:z-auto transition-colors duration-300 cursor-pointer pointer-events-auto bg-blue-600/95 border-blue-500"
            style={{ left: `${offsetX}px`, top: `${offsetY}px` }}
            onClick={onClick}
          >
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-2 h-2 rounded-full bg-white"></div>
              <h4 className="font-bold text-[13px] leading-tight transition-colors duration-300 text-white">{title}</h4>
            </div>
            <p className="text-[11px] leading-relaxed line-clamp-3 transition-colors duration-300 text-blue-100">{description}</p>
          </motion.div>
        )}
      </AnimatePresence>
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

        {/* Menu Tabs - Vertical on Desktop, Horizontal on Mobile */}
        <div className="flex flex-row lg:flex-col gap-2 lg:gap-3 justify-start lg:justify-center overflow-x-auto w-full lg:w-auto pb-4 lg:pb-0 scrollbar-hide">
          {equipmentData.map((item: any, idx: number) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveItemIndex(idx);
                setActiveHotspot(null);
              }}
              className={`px-5 lg:px-6 py-3 lg:py-3.5 rounded-full lg:rounded-2xl text-[13px] lg:text-[14px] font-bold transition-all duration-300 flex items-center justify-center lg:justify-start gap-3 shrink-0 whitespace-nowrap border ${
                activeItemIndex === idx
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 border-blue-500"
                  : "bg-white/60 backdrop-blur-md hover:bg-white text-gray-600 border-white/50"
              }`}
            >
              <div className={`w-2 h-2 rounded-full ${activeItemIndex === idx ? "bg-white" : "bg-gray-400"}`}></div>
              {item.name}
            </button>
          ))}
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
      <div className="relative lg:absolute lg:top-[120px] lg:right-[5%] xl:right-[8%] z-30 pointer-events-auto w-full max-w-[540px] lg:w-[460px] px-6 lg:px-0 mt-12 lg:mt-0 mx-auto lg:mx-0 order-3 lg:order-none">
        <Card className="bg-gradient-to-br from-white/50 to-white/20 backdrop-blur-[40px] backdrop-saturate-200 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] border border-white/70 rounded-[2rem] p-2" radius="none">
          <CardHeader className="flex justify-between items-center px-5 pt-5 pb-2">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                <FeatherIcons.Crosshair size={20} />
              </div>
              <div>
                <p className="text-[11px] text-gray-400 uppercase tracking-widest font-bold">Area Terpilih</p>
                <h3 className="text-[18px] font-bold text-gray-800 leading-tight mt-0.5">
                  {activeHotspot ? activeHotspot.title : activeItem.name}
                </h3>
              </div>
            </div>
            <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50 bg-white" onClick={() => setActiveHotspot(null)}>
              <FeatherIcons.X size={14} />
            </button>
          </CardHeader>

          <CardBody className="gap-4 px-5 pb-5 pt-2 max-h-[70vh] overflow-y-auto scrollbar-hide">

            {/* 2. Thumbnail Image (for Semi Overhaul hotspots) */}
            {activeHotspot && activeHotspot.thumb && (
              <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-md border border-gray-100">
                <Image
                  src={activeHotspot.thumb}
                  alt={activeHotspot.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 460px"
                />
              </div>
            )}

            {/* 3. Deskripsi Singkat (fungsi/treatment) */}
            <p className="text-[14px] text-gray-600 leading-relaxed m-0 border-b border-gray-100 pb-4">
              {activeHotspot ? (activeHotspot.fungsi || activeHotspot.treatment) : activeItem.description}
            </p>

            {/* 3. Impact Score Cards (3 Kartu horizontal) */}
            {(activeItem.impactScores || []).length > 0 && (
              <div className="flex gap-2">
                {activeItem.impactScores?.map((score: any, idx: number) => {
                  const Icon = (FeatherIcons as any)[score.icon] || FeatherIcons.CheckCircle;
                  return (
                    <div key={idx} className="flex-1 bg-white/60 p-3 rounded-xl border border-gray-100 shadow-sm text-center">
                      <Icon size={16} className="text-blue-500 mx-auto mb-2" />
                      <p className="text-[11px] text-gray-500 leading-tight mb-1">{score.title}</p>
                      <p className="text-[13px] font-bold text-gray-800">{score.value}</p>
                    </div>
                  );
                })}
              </div>
            )}

            {/* 4. Gejala & Benefit Checklist */}
            {activeHotspot && (activeHotspot.gejala || activeHotspot.impacts) && (
              <div className="pt-1">
                {/* Gejala Section */}
                {activeHotspot.gejala && activeHotspot.gejala.length > 0 && (
                  <div className="mb-4">
                    <p className="text-[11px] font-bold text-red-600 uppercase tracking-wide mb-2 flex items-center gap-1.5">
                      <FeatherIcons.AlertCircle size={12} />
                      Gejala Kerusakan
                    </p>
                    <ul className="space-y-1.5">
                      {activeHotspot.gejala.map((gejala: string, idx: number) => (
                        <li key={`g-${idx}`} className="text-[13px] text-gray-600 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                          <span>{gejala}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {/* Manfaat Section */}
                {(activeHotspot.manfaat || activeHotspot.impacts) && (
                  <div>
                    <p className="text-[11px] font-bold text-green-600 uppercase tracking-wide mb-2 flex items-center gap-1.5">
                      <FeatherIcons.CheckCircle size={12} />
                      Manfaat Treatment
                    </p>
                    <ul className="space-y-1.5">
                      {(activeHotspot.manfaat || activeHotspot.impacts).map((manfaat: string, idx: number) => (
                        <li key={`m-${idx}`} className="text-[13px] text-gray-700 flex items-start gap-2">
                          <FeatherIcons.Check size={16} className="text-green-500 shrink-0 mt-0.5" />
                          <span>{manfaat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {/* Hasil Deteksi */}
                {activeHotspot.hasilDeteksi && (
                  <div className="mt-4 p-3 bg-blue-50/50 rounded-xl border border-blue-100">
                    <p className="text-[11px] font-bold text-blue-700 uppercase tracking-wide mb-1.5 flex items-center gap-1.5">
                      <FeatherIcons.Crosshair size={12} />
                      Hasil Deteksi
                    </p>
                    <p className="text-[13px] text-blue-800 leading-relaxed">{activeHotspot.hasilDeteksi}</p>
                  </div>
                )}
              </div>
            )}

            {/* 5. Before vs After */}
            {activeHotspot && activeHotspot.beforeAfter && (
              <div className="flex flex-col sm:flex-row gap-3 mt-1">
                <div className="flex-1 bg-red-50/40 p-4 rounded-xl border border-red-100/50">
                  <p className="text-[12px] font-bold text-red-600 mb-2.5 uppercase tracking-wide">Sebelum</p>
                  <ul className="space-y-2">
                    {activeHotspot.beforeAfter.before.map((b: string, i: number) => (
                      <li key={i} className="text-[12px] text-gray-600 flex items-start gap-2 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 bg-green-50/40 p-4 rounded-xl border border-green-100/50">
                  <p className="text-[12px] font-bold text-green-600 mb-2.5 uppercase tracking-wide">Sesudah</p>
                  <ul className="space-y-2">
                    {activeHotspot.beforeAfter.after.map((a: string, i: number) => (
                      <li key={i} className="text-[12px] text-gray-600 flex items-start gap-2 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0" />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* 6 & 7. Testimoni & Action Button (Unified Liquid Glass Card) */}
            <div className="mt-4 relative overflow-hidden rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] border border-white/60 bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-[20px] backdrop-saturate-150">
              {activeHotspot && activeHotspot.testimonial && (
                <div className="p-4 sm:p-5 relative z-10">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2.5 mb-1">
                        <h4 className="text-gray-900 font-bold text-[15px]">{activeHotspot.testimonial.author.split(',')[0]}</h4>
                        <span className="px-2 py-0.5 bg-green-500/10 text-green-700 border border-green-500/20 text-[10px] font-bold tracking-wide rounded-full backdrop-blur-md">
                          Pelanggan
                        </span>
                      </div>
                      <p className="text-gray-600 font-medium text-[13px]">{activeHotspot.testimonial.author.split(',').slice(1).join(',')}</p>
                    </div>
                    <div className="shrink-0 ml-4">
                      <div className="w-11 h-11 rounded-full bg-white/60 backdrop-blur-md flex items-center justify-center border-2 border-white shadow-sm overflow-hidden">
                        <FeatherIcons.User size={20} className="text-[#224297]" />
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 text-[13.5px] italic mt-4 leading-relaxed font-medium">
                    &quot;{activeHotspot.testimonial.quote}&quot;
                  </p>
                </div>
              )}

              {!activeHotspot && (
                <div className="p-5 text-center opacity-80 relative z-10">
                  <FeatherIcons.MousePointer size={28} className="mx-auto mb-2 text-[#224297]/70" />
                  <p className="text-[13px] text-gray-700 font-medium">Klik titik (hotspot) untuk melihat detail.</p>
                </div>
              )}

              <div className="flex border-t border-white/60 relative z-10">
                <button className="flex-1 flex items-center justify-center gap-2.5 py-4 bg-white/40 hover:bg-white/70 backdrop-blur-md transition-all text-[#224297] font-bold text-[14px]">
                  <FeatherIcons.Calendar size={16} className="text-[#224297]" />
                  Booking Sekarang
                </button>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>

      {/* AI CHAT REMOVED PER IMPLEMENTATION PLAN */}

      {/* 6. BOTTOM PILLS - Hidden on mobile to reduce clutter, visible on Desktop */}
      <div className="hidden lg:flex absolute bottom-[5%] right-[5%] xl:right-[8%] z-30 pointer-events-auto">
        <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] p-3 pr-6 flex items-center gap-4 shadow-lg border border-white cursor-pointer hover:bg-white transition-colors">
          <div className="flex -space-x-2 overflow-hidden pl-1">
            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
          </div>
          <div className="flex flex-col">
            <h4 className="text-[14px] font-bold text-gray-900 leading-none">672 orang</h4>
            <p className="text-[11.5px] text-gray-500 mt-1">Puas dengan Treatment Kami</p>
          </div>
        </div>
      </div>

    </div>
  );
}
