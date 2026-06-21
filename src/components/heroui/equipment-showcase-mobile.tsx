"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import * as FeatherIcons from "react-feather";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { cn } from "@/lib/utils";
import equipmentData from "@/data/equipment.json";

// Hotspot Dot — Mobile Optimized (larger, easier to tap)
const MobileHotspotDot = ({
  top,
  left,
  isActive,
  onClick,
  index,
}: {
  top: string;
  left: string;
  isActive: boolean;
  onClick: () => void;
  index: number;
}) => (
  <button
    className={cn(
      "absolute z-20 w-10 h-10 rounded-full shadow-lg flex items-center justify-center text-[13px] font-black transition-all active:scale-95",
      isActive
        ? "bg-blue-600 text-white scale-110 ring-4 ring-white"
        : "bg-white text-blue-600 border-2 border-blue-500 hover:scale-110"
    )}
    style={{ top, left }}
    onClick={onClick}
    aria-label={`Hotspot ${index + 1}`}
  >
    {index + 1}
  </button>
);

export default function EquipmentShowcaseMobile() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState<any | null>(null);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    setCurrentTime(
      new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      })
    );
    const interval = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const activeItem = equipmentData[activeItemIndex];

  const handleHotspotClick = (hotspot: any) => {
    setActiveHotspot(hotspot === activeHotspot ? null : hotspot);
  };

  return (
    <div className="w-full bg-gradient-to-b from-[#f0f4f8] to-[#eef2ff] font-sans text-gray-800 pb-8">
      {/* ===== SECTION HEADER ===== */}
      <div className="text-center pt-10 pb-6 px-4">
        <div className="inline-flex items-center justify-center gap-2 px-3 py-1 bg-blue-100/80 backdrop-blur-sm border border-blue-200 rounded-full text-blue-700 font-bold text-[11px] uppercase tracking-widest mb-3 shadow-sm">
          <FeatherIcons.Crosshair size={12} />
          Teknologi Mutakhir
        </div>
        <h2 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">
          Fasilitas & Peralatan Modern
        </h2>
        <p className="text-gray-500 text-sm mt-2 max-w-md mx-auto">
          Inspeksi presisi tinggi untuk performa kendaraan maksimal.
        </p>
      </div>

      {/* ===== EQUIPMENT TABS (Horizontal Scroll) ===== */}
      <div className="px-4 mb-4">
        <div className="flex flex-row gap-2 overflow-x-auto pb-3 scrollbar-hide">
          {equipmentData.map((item: any, idx: number) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveItemIndex(idx);
                setActiveHotspot(null);
              }}
              className={cn(
                "shrink-0 rounded-full font-bold text-[13px] transition-all flex items-center gap-2.5 px-4 py-2.5 border",
                activeItemIndex === idx
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 border-blue-500"
                  : "bg-white/60 backdrop-blur-md text-gray-600 border-white/50 hover:bg-white"
              )}
            >
              <div
                className={cn(
                  "w-2 h-2 rounded-full shrink-0",
                  activeItemIndex === idx ? "bg-white" : "bg-gray-400"
                )}
              />
              <span className="whitespace-nowrap">{item.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ===== ACTIVE EQUIPMENT NAME ===== */}
      <div className="px-4 mb-3">
        <h3 className="text-xl font-bold text-gray-900">{activeItem.name}</h3>
        <p className="text-[13px] text-gray-500 mt-0.5 leading-relaxed">
          {activeItem.description?.slice(0, 120)}
          {activeItem.description?.length > 120 ? "..." : ""}
        </p>
      </div>

      {/* ===== IMAGE + HOTSPOTS ===== */}
      <div className="relative w-full aspect-[16/9] mx-auto mb-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeItem.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="relative w-full h-full"
          >
            <Image
              src={activeItem.image}
              alt={activeItem.name}
              fill
              className="object-contain drop-shadow-lg"
              priority
            />
            {/* Hotspot dots */}
            <div className="absolute inset-0 z-20">
              {activeItem.hotspots?.map((hotspot: any, idx: number) => (
                <MobileHotspotDot
                  key={idx}
                  top={hotspot.top}
                  left={hotspot.left}
                  index={idx}
                  isActive={activeHotspot === hotspot}
                  onClick={() => handleHotspotClick(hotspot)}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Hotspot instruction overlay */}
        <AnimatePresence>
          {!activeHotspot && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 pointer-events-none"
            >
              <div className="bg-black/60 backdrop-blur-md text-white text-[11px] font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <FeatherIcons.MousePointer size={12} />
                Tap titik untuk detail
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ===== INFO PANEL ===== */}
      <div className="px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeHotspot?.title || "default"}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <Card
              className={cn(
                "rounded-[1.5rem] border border-white/70 bg-white/70 backdrop-blur-xl shadow-[0_8px_32px_rgba(31,38,135,0.12)] overflow-hidden"
              )}
              radius="none"
            >
              {/* Has thumbnail image */}
              {((!activeHotspot && activeItem.defaultThumb) ||
                (activeHotspot && activeHotspot.thumb)) && (
                <div className="relative w-full">
                  {activeHotspot && (
                    <button
                      className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-white/80 backdrop-blur-md border border-black/10 flex items-center justify-center text-gray-600 shadow-sm hover:bg-white transition-all"
                      onClick={() => setActiveHotspot(null)}
                    >
                      <FeatherIcons.X size={14} />
                    </button>
                  )}
                  <div className="w-full overflow-hidden">
                    <img
                      src={
                        activeHotspot
                          ? activeHotspot.thumb
                          : activeItem.defaultThumb
                      }
                      alt={activeHotspot ? activeHotspot.title : activeItem.name}
                      className="w-full max-h-[40vh] object-contain block mx-auto"
                    />
                  </div>
                </div>
              )}

              <CardBody className="p-5 gap-4">
                {/* Selected Area Title */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                      <FeatherIcons.Crosshair size={18} />
                    </div>
                    <div>
                      <p className="text-[11px] text-gray-400 uppercase tracking-widest font-bold">
                        {activeHotspot ? "Area Terpilih" : "Equipment"}
                      </p>
                      <h4 className="text-[17px] font-bold text-gray-800 leading-tight">
                        {activeHotspot
                          ? activeHotspot.title
                          : activeItem.name}
                      </h4>
                    </div>
                  </div>
                  {activeHotspot && (
                    <button
                      className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50 bg-white shrink-0 mt-1"
                      onClick={() => setActiveHotspot(null)}
                    >
                      <FeatherIcons.X size={13} />
                    </button>
                  )}
                </div>

                {/* Description */}
                <p className="text-[14px] text-gray-600 leading-relaxed border-b border-gray-100 pb-4">
                  {activeHotspot
                    ? activeHotspot.fungsi || activeHotspot.treatment || activeHotspot.description
                    : activeItem.description}
                </p>

                {/* Gejala Kerusakan */}
                {activeHotspot?.gejala && activeHotspot.gejala.length > 0 && (
                  <div>
                    <p className="text-[11px] font-bold text-red-600 uppercase tracking-wide mb-2 flex items-center gap-1.5">
                      <FeatherIcons.AlertCircle size={12} />
                      Gejala Kerusakan
                    </p>
                    <ul className="space-y-1.5">
                      {activeHotspot.gejala.map((g: string, i: number) => (
                        <li
                          key={i}
                          className="text-[13px] text-gray-600 flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                          <span>{g}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Manfaat Treatment */}
                {(activeHotspot?.manfaat || activeHotspot?.impacts) &&
                  (activeHotspot.manfaat || activeHotspot.impacts).length > 0 && (
                    <div>
                      <p className="text-[11px] font-bold text-green-600 uppercase tracking-wide mb-2 flex items-center gap-1.5">
                        <FeatherIcons.CheckCircle size={12} />
                        Manfaat Treatment
                      </p>
                      <ul className="space-y-1.5">
                        {(activeHotspot.manfaat || activeHotspot.impacts).map(
                          (m: string, i: number) => (
                            <li
                              key={i}
                              className="text-[13px] text-gray-700 flex items-start gap-2"
                            >
                              <FeatherIcons.Check
                                size={15}
                                className="text-green-500 shrink-0 mt-0.5"
                              />
                              <span>{m}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  )}

                {/* Before vs After */}
                {activeHotspot?.beforeAfter && (
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex-1 bg-red-50/40 p-4 rounded-xl border border-red-100/50">
                      <p className="text-[12px] font-bold text-red-600 mb-2.5 uppercase tracking-wide">
                        Sebelum
                      </p>
                      <ul className="space-y-2">
                        {activeHotspot.beforeAfter.before.map(
                          (b: string, i: number) => (
                            <li
                              key={i}
                              className="text-[12px] text-gray-600 flex items-start gap-2 leading-relaxed"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                              <span>{b}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                    <div className="flex-1 bg-green-50/40 p-4 rounded-xl border border-green-100/50">
                      <p className="text-[12px] font-bold text-green-600 mb-2.5 uppercase tracking-wide">
                        Sesudah
                      </p>
                      <ul className="space-y-2">
                        {activeHotspot.beforeAfter.after.map(
                          (a: string, i: number) => (
                            <li
                              key={i}
                              className="text-[12px] text-gray-600 flex items-start gap-2 leading-relaxed"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0" />
                              <span>{a}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Testimonial */}
                {activeHotspot?.testimonial && (
                  <div className="p-4 bg-blue-50/40 rounded-xl border border-blue-100/50">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-9 h-9 rounded-full bg-white/80 flex items-center justify-center border border-blue-100">
                        <FeatherIcons.User size={16} className="text-[#224297]" />
                      </div>
                      <div>
                        <p className="text-[13px] font-bold text-gray-900 leading-tight">
                          {activeHotspot.testimonial.author.split(",")[0]}
                        </p>
                        <p className="text-[11px] text-gray-500">
                          {activeHotspot.testimonial.author
                            .split(",")
                            .slice(1)
                            .join(",")}
                        </p>
                      </div>
                    </div>
                    <p className="text-[13px] text-gray-700 italic leading-relaxed">
                      &quot;{activeHotspot.testimonial.quote}&quot;
                    </p>
                  </div>
                )}

                {/* CTA Button */}
                <div className="pt-1">
                  <button className="w-full flex items-center justify-center gap-2.5 py-4 bg-[#224297] hover:bg-[#1a356e] text-white font-bold text-[14px] rounded-2xl transition-colors shadow-lg shadow-blue-900/20">
                    <FeatherIcons.Calendar size={16} />
                    Booking Sekarang
                  </button>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}