"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import * as FeatherIcons from "react-feather";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import equipmentData from "@/data/equipment.json";

// Hotspot Node (Floating style with dynamic positioning)
const FloatingHotspot = ({ top, left, isActive, onClick, delay = 0, title, description, offsetX = 100, offsetY = -100, index }: any) => {
  const endX = offsetX + 110;
  const endY = offsetY + 30;
  const controlX = endX * 0.5;
  const controlY = endY;
  const svgPath = `M 0 0 Q ${controlX} ${controlY} ${endX} ${endY}`;

  return (
    <div className="absolute z-20" style={{ top, left }}>
      <AnimatePresence>
        {isActive && (
          <motion.svg
            key="line"
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

      <AnimatePresence>
        {isActive && (
          <motion.div
            key="tooltip"
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

  const activeItem = equipmentData[activeItemIndex];

  return (
    // Normal page section — scrolls with homepage
    <div
      className="w-full z-50"
      style={{
        background: 'linear-gradient(135deg, #f0f4f8 0%, #f8fafc 50%, #eef2ff 100%)',
      }}
    >

      {/* SECTION TITLE */}
      <div className="text-center px-4 pt-12 pb-8 lg:pt-16 lg:pb-10">
        <div className="inline-flex items-center justify-center gap-2 px-3 py-1 bg-blue-100/80 backdrop-blur-sm border border-blue-200 rounded-full text-blue-700 font-bold text-[11px] uppercase tracking-widest mb-3 shadow-sm">
          <FeatherIcons.Crosshair size={12} />
          Teknologi Mutakhir
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">Fasilitas & Peralatan Modern</h2>
        <p className="text-gray-500 text-sm mt-2 max-w-lg mx-auto">Inspeksi presisi tinggi untuk performa kendaraan maksimal.</p>
      </div>

      {/* MAIN CONTENT — responsive flex row */}
      <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8 px-4 lg:px-8 pb-8 max-w-screen-xl mx-auto">

        {/* LEFT PANEL — Name & Tabs */}
        <div className="w-full lg:w-[260px] shrink-0 flex flex-col items-center lg:items-start">
          <h2 className="text-2xl lg:text-[32px] font-bold text-[#1e293b] tracking-tight leading-none mb-3 text-center lg:text-left">
            {activeItem.name}
          </h2>
          <p className="text-[13px] text-gray-500 leading-relaxed mb-5 text-center lg:text-left max-w-sm mx-auto lg:mx-0">
            Teknologi canggih {activeItem.name} yang mampu mensimulasikan guncangan jalan rusak secara statis untuk deteksi yang akurat.
          </p>

          {/* Menu Tabs — Horizontal scroll on mobile, vertical on desktop */}
          <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto w-full pb-3 lg:pb-0 scrollbar-hide">
            {equipmentData.map((item: any, idx: number) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveItemIndex(idx);
                  setActiveHotspot(null);
                }}
                className={`px-4 lg:px-5 py-2.5 lg:py-3 rounded-full lg:rounded-xl text-[12px] lg:text-[13px] font-bold transition-all duration-300 flex items-center gap-2.5 shrink-0 whitespace-nowrap border ${activeItemIndex === idx
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 border-blue-500"
                    : "bg-white/60 backdrop-blur-md hover:bg-white text-gray-600 border-white/50"
                  }`}
              >
                <div className={`w-2 h-2 rounded-full ${activeItemIndex === idx ? "bg-white" : "bg-gray-400"} shrink-0`}></div>
                {item.name}
              </button>
            ))}
          </div>
        </div>

        {/* CENTER — Image & Hotspots */}
        <div className="flex-1 w-full relative min-h-[280px] lg:min-h-[380px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-[700px] aspect-[16/9] mx-auto"
            >
              <Image
                src={activeItem.image}
                alt={activeItem.name}
                fill
                className="object-contain drop-shadow-2xl"
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

        {/* RIGHT — Info Card */}
        <div className="w-full lg:w-[360px] shrink-0">
          <Card className="bg-gradient-to-br from-white/50 to-white/20 backdrop-blur-[40px] backdrop-saturate-200 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] border border-white/70 rounded-[2rem] p-2 w-full transition-all duration-500" radius="none">
            {/* Thumbnail variant */}
            {((!activeHotspot && activeItem.defaultThumb) || (activeHotspot && activeHotspot.thumb)) ? (
              <div className="flex flex-col w-full relative">
                {activeHotspot && (
                  <button
                    className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-gray-600 bg-white/60 backdrop-blur-md hover:bg-white/90 transition-all shadow-sm"
                    onClick={() => setActiveHotspot(null)}
                  >
                    <FeatherIcons.X size={14} />
                  </button>
                )}
                <div className="w-full overflow-hidden rounded-[1.5rem] flex justify-center p-2">
                  <img
                    src={activeHotspot ? activeHotspot.thumb : activeItem.defaultThumb}
                    alt={activeHotspot ? activeHotspot.title : activeItem.name}
                    className="w-auto max-w-full max-h-[60vh] object-contain block"
                  />
                </div>
                {!activeHotspot && (
                  <div className="px-4 pb-4">
                    <button className="w-full flex items-center justify-center gap-2.5 py-3 bg-[#224297] hover:bg-[#1a356e] text-white font-bold text-[13px] rounded-xl transition-colors shadow-lg shadow-blue-900/20">
                      <FeatherIcons.Calendar size={15} />
                      Booking Sekarang
                    </button>
                  </div>
                )}
              </div>
            ) : (
              /* Text variant */
              <>
                <CardHeader className="flex justify-between items-center px-5 pt-5 pb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                      <FeatherIcons.Crosshair size={18} />
                    </div>
                    <div>
                      <p className="text-[11px] text-gray-400 uppercase tracking-widest font-bold">Area Terpilih</p>
                      <h3 className="text-[16px] font-bold text-gray-800 leading-tight">
                        {activeHotspot ? activeHotspot.title : activeItem.name}
                      </h3>
                    </div>
                  </div>
                  <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50 bg-white" onClick={() => setActiveHotspot(null)}>
                    <FeatherIcons.X size={13} />
                  </button>
                </CardHeader>

                <CardBody className="gap-3 px-5 pb-5 pt-2 max-h-[60vh] overflow-y-auto scrollbar-hide">
                  <p className="text-[13px] text-gray-600 leading-relaxed border-b border-gray-100 pb-3">
                    {activeHotspot ? (activeHotspot.fungsi || activeHotspot.treatment) : activeItem.description}
                  </p>

                  {/* Impact Scores */}
                  {(activeItem.impactScores || []).length > 0 && (
                    <div className="flex gap-2">
                      {activeItem.impactScores?.map((score: any, idx: number) => {
                        const Icon = (FeatherIcons as any)[score.icon] || FeatherIcons.CheckCircle;
                        return (
                          <div key={idx} className="flex-1 bg-white/60 p-2.5 rounded-xl border border-gray-100 shadow-sm text-center">
                            <Icon size={14} className="text-blue-500 mx-auto mb-1.5" />
                            <p className="text-[10px] text-gray-500 leading-tight mb-0.5">{score.title}</p>
                            <p className="text-[12px] font-bold text-gray-800">{score.value}</p>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Gejala */}
                  {activeHotspot && activeHotspot.gejala && activeHotspot.gejala.length > 0 && (
                    <div>
                      <p className="text-[10px] font-bold text-red-600 uppercase tracking-wide mb-1.5 flex items-center gap-1">
                        <FeatherIcons.AlertCircle size={11} />
                        Gejala Kerusakan
                      </p>
                      <ul className="space-y-1">
                        {activeHotspot.gejala.map((g: string, idx: number) => (
                          <li key={idx} className="text-[12px] text-gray-600 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                            <span>{g}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Manfaat */}
                  {(activeHotspot?.manfaat || activeHotspot?.impacts) && (
                    <div>
                      <p className="text-[10px] font-bold text-green-600 uppercase tracking-wide mb-1.5 flex items-center gap-1">
                        <FeatherIcons.CheckCircle size={11} />
                        Manfaat Treatment
                      </p>
                      <ul className="space-y-1">
                        {(activeHotspot.manfaat || activeHotspot.impacts).map((m: string, idx: number) => (
                          <li key={idx} className="text-[12px] text-gray-700 flex items-start gap-2">
                            <FeatherIcons.Check size={14} className="text-green-500 shrink-0 mt-0.5" />
                            <span>{m}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Before/After */}
                  {activeHotspot && activeHotspot.beforeAfter && (
                    <div className="flex gap-2">
                      <div className="flex-1 bg-red-50/40 p-3 rounded-xl border border-red-100/50">
                        <p className="text-[11px] font-bold text-red-600 uppercase tracking-wide mb-1.5">Sebelum</p>
                        <ul className="space-y-1">
                          {activeHotspot.beforeAfter.before.map((b: string, i: number) => (
                            <li key={i} className="text-[11px] text-gray-600 flex items-start gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex-1 bg-green-50/40 p-3 rounded-xl border border-green-100/50">
                        <p className="text-[11px] font-bold text-green-600 uppercase tracking-wide mb-1.5">Sesudah</p>
                        <ul className="space-y-1">
                          {activeHotspot.beforeAfter.after.map((a: string, i: number) => (
                            <li key={i} className="text-[11px] text-gray-600 flex items-start gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0" />
                              <span>{a}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* CTA */}
                  <div className="pt-1">
                    <button className="w-full flex items-center justify-center gap-2 py-3 bg-[#224297] hover:bg-[#1a356e] text-white font-bold text-[13px] rounded-xl transition-colors shadow-lg shadow-blue-900/20">
                      <FeatherIcons.Calendar size={14} />
                      Booking Sekarang
                    </button>
                  </div>
                </CardBody>
              </>
            )}
          </Card>
        </div>
      </div>

      {/* Social Proof Pill */}
      <div className="px-4 lg:px-8 pb-12 max-w-screen-xl mx-auto">
        <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-xl rounded-[2rem] px-5 py-3 shadow-lg border border-white">
          <div className="flex -space-x-2 overflow-hidden">
            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
          </div>
          <div className="flex flex-col">
            <h4 className="text-[13px] font-bold text-gray-900 leading-none">672 orang</h4>
            <p className="text-[11px] text-gray-500 mt-0.5">Puas dengan Treatment Kami</p>
          </div>
        </div>
      </div>

    </div>
  );
}
