"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ServiceSidebar } from "./hotspot/ServiceSidebar";
import { ServiceTabs } from "./hotspot/ServiceTabs";
import { VehicleCanvas, VehicleCanvasRef } from "./hotspot/VehicleCanvas";
import { InfoPanel } from "./hotspot/InfoPanel";
import { Snowflake, Shield, Leaf } from "lucide-react";
import equipmentDataV3 from "@/data/equipment-v3.json";

export default function ModernEquipmentV3() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const activeItem = equipmentDataV3[activeItemIndex];

  const [activeHotspot, setActiveHotspot] = useState<any | null>(null);
  const [sheetState, setSheetState] = useState<'closed' | 'peek' | 'open'>('closed');
  const containerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<VehicleCanvasRef>(null);

  // Check if mobile view
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Reset on service change
  useEffect(() => {
    setActiveHotspot(null);
    setSheetState('closed');
  }, [activeItemIndex]);

  // Close sheet if hotspot cleared
  useEffect(() => {
    if (!activeHotspot) {
      setSheetState('closed');
    }
  }, [activeHotspot]);

  const handleSelectService = (index: number) => {
    setActiveItemIndex(index);
    setActiveHotspot(null);
    setSheetState('closed');
  };

  const handleSelectHotspot = (hotspot: any) => {
    if (hotspot === activeHotspot && sheetState !== 'closed') {
      setActiveHotspot(null);
      setSheetState('closed');
    } else {
      setActiveHotspot(hotspot);
      setSheetState('open');
    }
  };

  const handleNextHotspot = () => {
    if (!activeItem.hotspots) return;
    const currentIndex = activeItem.hotspots.indexOf(activeHotspot);
    const nextIndex = (currentIndex + 1) % activeItem.hotspots.length;
    setActiveHotspot(activeItem.hotspots[nextIndex]);
  };

  const handlePrevHotspot = () => {
    if (!activeItem.hotspots) return;
    const currentIndex = activeItem.hotspots.indexOf(activeHotspot);
    const prevIndex = currentIndex === 0 ? activeItem.hotspots.length - 1 : currentIndex - 1;
    setActiveHotspot(activeItem.hotspots[prevIndex]);
  };

  return (
    <div
      className="w-full relative overflow-hidden bg-white dark:bg-[#060b13] text-slate-900 dark:text-white transition-colors duration-300 py-8 lg:py-12"
      ref={containerRef}
    >
      {/* ===== MOBILE LAYOUT ===== */}
      <div className="lg:hidden flex flex-col min-h-screen">
        {/* Mobile Header with Horizontal Tabs */}
        <div className="shrink-0 bg-white dark:bg-[#060b13]">
          {/* Mobile Section Title */}
          <div className="px-4 pt-5 pb-1 text-center">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-500/20 rounded-full text-[8px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">
              🎯 DIAGNOSA DIGITAL
            </span>
            <h2 className="text-base font-extrabold text-slate-900 dark:text-white leading-tight uppercase tracking-wide">
              Interactive Diagnostic Experience
            </h2>
          </div>
          {/* Service Tabs - Horizontal Scroll with Icons */}
          <div className="pt-3 pb-5">
            <ServiceTabs
              services={equipmentDataV3}
              activeServiceIndex={activeItemIndex}
              onSelectService={handleSelectService}
            />
          </div>

          {/* Service Badge & Description */}
          <div className="px-4 pb-3">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-5 h-5 rounded bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <span className="text-blue-600 dark:text-blue-400 text-[10px]">⚙️</span>
              </div>
              <span className="text-[9px] font-bold text-blue-600 dark:text-blue-400 tracking-widest uppercase">
                {activeItem?.name}
              </span>
            </div>
            <p className="text-[10px] leading-relaxed text-slate-600 dark:text-gray-400">
              {activeItem?.description}
            </p>
          </div>

          {/* Mobile Instruction Badge */}
          <div className="px-4 pb-4 flex justify-center">
            <div className="flex bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-500/30 px-3.5 py-2 rounded-xl items-center gap-2 text-[10px] font-semibold text-blue-600 dark:text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.05)] dark:shadow-[0_0_15px_rgba(59,130,246,0.1)]">
              <span className="text-xs">🎯</span>
              <span>Klik titik hotspot untuk melihat detail area</span>
            </div>
          </div>
        </div>

        {/* Mobile Canvas */}
        <div className="flex-1 flex items-center justify-center px-4 py-6">
          <VehicleCanvas
            ref={canvasRef}
            activeItem={activeItem}
            activeHotspot={activeHotspot}
            onSelectHotspot={handleSelectHotspot}
            showBeam={false}
          />
        </div>

        {/* Mobile Impact Scores */}
        {activeItem.impactScores && (
          <div className="shrink-0 px-4 pb-4">
            <div className="grid grid-cols-3 gap-3">
              {activeItem.impactScores.map((score: any, idx: number) => {
                let IconComponent = Snowflake;
                let colorClass = "text-blue-600 dark:text-blue-400";

                if (score.icon === 'Shield' || score.icon === 'ShieldCheck') {
                  IconComponent = Shield;
                } else if (score.icon === 'Leaf') {
                  IconComponent = Leaf;
                  colorClass = "text-green-600 dark:text-green-400";
                }

                return (
                  <div key={idx} className="flex flex-col items-center text-center gap-1.5 p-2.5 bg-white dark:bg-[#0a0f1d] backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-xl">
                    <IconComponent className={`${colorClass} w-5 h-5`} />
                    <p className="text-[9px] font-bold text-slate-600 dark:text-gray-300 leading-tight">
                      {score.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Mobile Bottom Sheet */}
        <AnimatePresence>
          {activeHotspot && (
            <InfoPanel
              hotspot={activeHotspot}
              totalHotspots={activeItem.hotspots?.length || 0}
              currentIndex={activeItem.hotspots?.indexOf(activeHotspot) || 0}
              onClose={() => {
                setActiveHotspot(null);
                setSheetState('closed');
              }}
              onNext={handleNextHotspot}
              onPrev={handlePrevHotspot}
              sheetState={sheetState}
              onStateChange={(state) => setSheetState(state)}
              serviceSlug={activeItem.slug}
              variant="sheet"
            />
          )}
        </AnimatePresence>
      </div>

      {/* ===== DESKTOP LAYOUT ===== */}
      <div className="hidden lg:block max-w-[1600px] mx-auto pt-16 px-6 xl:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-500/20 rounded-full text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3 shadow-[0_0_15px_rgba(59,130,246,0.05)]">
            🎯 DIAGNOSA DIGITAL
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight sm:text-4xl">
            Interactive Vehicle Diagnostic Experience
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-sm text-slate-500 dark:text-gray-400">
            Pelajari bagaimana tim ahli kami mendeteksi dan merawat komponen penting kendaraan Anda secara presisi menggunakan peralatan diagnostik modern.
          </p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-12 gap-6 xl:gap-8 pb-4 items-start">

          {/* Left + Center Area */}
          <div className="col-span-8 flex flex-col gap-6">

            {/* Sidebar + Canvas Row */}
            <div className="grid grid-cols-8 gap-8 items-start">
              {/* Left Sidebar */}
              <div className="col-span-2">
                <ServiceSidebar
                  services={equipmentDataV3}
                  activeServiceIndex={activeItemIndex}
                  onSelectService={handleSelectService}
                  className="w-full"
                />
              </div>

              {/* Center Canvas */}
              <div className="col-span-6 flex flex-col gap-6 items-center relative">
                <div className="flex bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-500/30 px-4 py-2.5 rounded-xl items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.05)] dark:shadow-[0_0_15px_rgba(59,130,246,0.1)] self-center">
                  <span className="text-sm">🎯</span>
                  <span>Klik titik hotspot untuk melihat area yang dibersihkan</span>
                </div>

                <VehicleCanvas
                  ref={canvasRef}
                  activeItem={activeItem}
                  activeHotspot={activeHotspot}
                  onSelectHotspot={handleSelectHotspot}
                  showBeam={true}
                />
              </div>
            </div>

            {/* Impact Scores */}
            {activeItem.impactScores && (
              <div className="bg-white/80 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200/50 dark:border-white/5 rounded-2xl p-5 w-full mt-auto shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] dark:shadow-none">
                <div className="grid grid-cols-3 gap-6">
                  {activeItem.impactScores.map((score: any, idx: number) => {
                    let IconComponent = Snowflake;
                    let colorClass = "text-blue-600 dark:text-blue-400";
                    let bgBorderClass = "bg-blue-500/10 border-blue-500/20";

                    if (score.icon === 'Shield' || score.icon === 'ShieldCheck') {
                      IconComponent = Shield;
                    } else if (score.icon === 'Leaf') {
                      IconComponent = Leaf;
                      colorClass = "text-green-600 dark:text-green-400";
                      bgBorderClass = "bg-green-500/10 border-green-500/20";
                    }

                    return (
                      <div key={idx} className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full ${bgBorderClass} border flex items-center justify-center shrink-0`}>
                          <IconComponent className={`${colorClass} w-6 h-6`} />
                        </div>
                        <div>
                          <h4 className={`${colorClass} text-[10px] font-bold mb-1 uppercase tracking-widest`}>{score.title}</h4>
                          <p className="text-xs text-slate-500 dark:text-gray-400 leading-relaxed">{score.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Right Info Panel */}
          <div ref={panelRef} className="col-span-4 min-h-[400px]">
            <AnimatePresence mode="wait">
              {/* Default State */}
              {!activeHotspot && (activeItem.slug === 'semi-overhaul' || activeItem.slug === 'kyoto-shaking-machine') && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-white/95 dark:bg-[#0a0f1d]/95 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl p-5"
                >
                  <div className="text-center mb-3">
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white mt-1">
                      {activeItem.slug === 'kyoto-shaking-machine' ? "Kyoto Shaking Machine" : "Semi Overhaul Process"}
                    </h3>
                  </div>
                  <div className="w-full aspect-video rounded-xl overflow-hidden bg-slate-900 border border-slate-200 dark:border-white/10 mb-4">
                    <img
                      src="/gifs/hotspot/semi-overhaul-demo.gif"
                      alt={activeItem.slug === 'kyoto-shaking-machine' ? "Kyoto Shaking Machine Demo" : "Semi Overhaul Demo"}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-slate-500 dark:text-gray-400">
                      👆 Klik titik hotspot untuk melihat detail area
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Active Hotspot */}
              {activeHotspot && (
                <InfoPanel
                  hotspot={activeHotspot}
                  totalHotspots={activeItem.hotspots?.length || 0}
                  currentIndex={activeItem.hotspots?.indexOf(activeHotspot) || 0}
                  onClose={() => {
                    setActiveHotspot(null);
                    setSheetState('closed');
                  }}
                  onNext={handleNextHotspot}
                  onPrev={handlePrevHotspot}
                  sheetState="open"
                  onStateChange={() => {}}
                  serviceSlug={activeItem.slug}
                  variant="panel"
                />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
