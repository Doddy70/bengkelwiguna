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
  // Mobile Bottom Sheet state
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

  // Set default hotspot on desktop mount or service change
  useEffect(() => {
    const handleLayoutInit = () => {
      // Don't auto-select hotspot - user needs to click to trigger beam
      setActiveHotspot(null);
      setSheetState('closed');
    };

    handleLayoutInit();

    // Re-verify on resize
    window.addEventListener('resize', handleLayoutInit);
    return () => window.removeEventListener('resize', handleLayoutInit);
  }, [activeItemIndex]);

  // Close sheet if hotspot is cleared
  useEffect(() => {
    if (!activeHotspot) {
      setSheetState('closed');
    }
  }, [activeHotspot]);

  // When changing service, reset hotspot selection
  const handleSelectService = (index: number) => {
    setActiveItemIndex(index);
    // User needs to click hotspot to trigger beam + info panel
    setActiveHotspot(null);
    setSheetState('closed');
  };

  const handleSelectHotspot = (hotspot: any) => {
    if (hotspot === activeHotspot && sheetState !== 'closed') {
      setActiveHotspot(null);
      setSheetState('closed');
    } else {
      setActiveHotspot(hotspot);
      // Open bottom sheet to 90% immediately on hotspot tap
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

  // Determine if FAB should be visible (mobile only, sheet closed)
  // const showFAB = isMobile && sheetState === 'closed' && !activeHotspot;

  return (
    <div
      className="min-h-screen relative overflow-hidden bg-slate-50 dark:bg-[#060b13] text-slate-900 dark:text-white transition-colors duration-300"
      ref={containerRef}
    >
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none text-slate-900/5 dark:text-white/5"
        style={{
          backgroundImage: `linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08)_0%,transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15)_0%,transparent_70%)] pointer-events-none" />

      {/* ===== MOBILE LAYOUT ===== */}
      <div className="lg:hidden flex flex-col min-h-screen">
        {/* Mobile Header - Service Tabs + Badge */}
        <div className="sticky top-0 z-30 bg-slate-50/95 dark:bg-[#060b13]/95 backdrop-blur-md">
          {/* Service Tabs */}
          <div className="pt-3 pb-2">
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
        </div>

        {/* Mobile Vehicle Canvas */}
        <div className="flex-1 relative">
          {/* Vehicle Canvas - No beam on mobile (bottom sheet doesn't need connector) */}
          <VehicleCanvas
            ref={canvasRef}
            activeItem={activeItem}
            activeHotspot={activeHotspot}
            onSelectHotspot={handleSelectHotspot}
            showBeam={false}
          />

          {/* Instruction Card - Only show when no hotspot selected */}
          <AnimatePresence>
            {!activeHotspot && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-4 inset-x-4 mx-auto"
              >
                <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-2xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    {/* Animated Pulse Indicator */}
                    <div className="relative w-12 h-12 shrink-0">
                      <span className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping" style={{ animationDuration: '2s' }} />
                      <span className="absolute inset-1 rounded-full bg-blue-500/30 animate-ping" style={{ animationDuration: '2.5s', animationDelay: '0.3s' }} />
                      <div className="absolute inset-2.5 rounded-full bg-blue-500 flex items-center justify-center">
                        <span className="text-white text-sm">👆</span>
                      </div>
                    </div>

                    {/* Instruction Text */}
                    <div className="flex-1 min-w-0">
                      <p className="text-slate-900 dark:text-white font-semibold text-sm leading-tight">
                        Ketuk titik hotspot untuk lihat detail
                      </p>
                      <p className="text-slate-500 dark:text-gray-400 text-xs mt-0.5">
                        {activeItem.hotspots?.length || 0} area tersedia
                      </p>
                    </div>

                    {/* Hotspot Count Badge */}
                    <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                      <span className="text-blue-600 dark:text-blue-400 text-xs font-bold">
                        {activeItem.hotspots?.length || 0}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Impact Scores */}
        {activeItem.impactScores && (
          <div className="lg:hidden px-4 pb-4">
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
                  <div key={idx} className="flex flex-col items-center text-center gap-1.5 p-2.5 bg-white/80 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200/50 dark:border-white/5 rounded-xl">
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

        {/* Mobile Info Panel (Bottom Sheet) */}
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
            />
          )}
        </AnimatePresence>
      </div>

      {/* ===== DESKTOP LAYOUT ===== */}
      <div className="hidden lg:block">
        {/* Main Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 xl:gap-8 px-6 xl:px-8 pt-24 pb-20 max-w-[1600px] mx-auto relative z-10 items-start">

          {/* Left + Center Area */}
          <div className="w-full xl:col-span-8 flex flex-col gap-6">

            {/* Sidebar + Canvas Row */}
            <div className="grid grid-cols-1 xl:grid-cols-8 gap-6 xl:gap-8 items-start">
              {/* Left Sidebar Menu */}
              <div className="w-full xl:col-span-2">
                <ServiceSidebar
                  services={equipmentDataV3}
                  activeServiceIndex={activeItemIndex}
                  onSelectService={handleSelectService}
                  className="w-full"
                />
              </div>

              {/* Center Vehicle Canvas */}
              <div className="diag-center flex flex-col gap-6 w-full min-w-0 xl:col-span-6 items-center relative">
                {/* Floating Info Guide Box */}
                <div className="flex bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-500/30 px-4 py-2.5 rounded-xl items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.05)] dark:shadow-[0_0_15px_rgba(59,130,246,0.1)] self-center">
                  <span className="text-sm">🎯</span>
                  <span>Klik titik hotspot untuk melihat area yang dibersihkan</span>
                </div>

                {/* Desktop Vehicle Canvas - Beam connects to side panel */}
                <VehicleCanvas
                  ref={canvasRef}
                  activeItem={activeItem}
                  activeHotspot={activeHotspot}
                  onSelectHotspot={handleSelectHotspot}
                  showBeam={true}
                />
              </div>
            </div>

            {/* Bottom Impact Score Cards */}
            {activeItem.impactScores && (
              <div className="bg-white/80 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200/50 dark:border-white/5 rounded-2xl p-5 w-full mt-auto shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] dark:shadow-none">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {activeItem.impactScores.map((score: any, idx: number) => {
                    let IconComponent = Snowflake;
                    let colorClass = "text-blue-600 dark:text-blue-400";
                    let bgBorderClass = "bg-blue-500/10 border-blue-500/20";

                    if (score.icon === 'Shield' || score.icon === 'ShieldCheck') {
                      IconComponent = Shield;
                      colorClass = "text-blue-600 dark:text-blue-400";
                      bgBorderClass = "bg-blue-500/10 border-blue-500/20";
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

          {/* Right Info Panel Column */}
          <div
            ref={panelRef}
            className="diag-right-panel w-full xl:col-span-4 xl:min-h-[400px]"
          >
            <AnimatePresence mode="wait">
              {/* Default State - Show GIF preview for Semi Overhaul */}
              {!activeHotspot && activeItem.slug === 'semi-overhaul' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-white/95 dark:bg-[#0a0f1d]/95 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl p-5"
                >
                  <div className="text-center mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 dark:bg-blue-950/40 rounded-full text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                      <span>🎬</span>
                      <span>How It Works</span>
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white mt-2">Semi Overhaul Process</h3>
                  </div>
                  <div className="w-full aspect-video rounded-xl overflow-hidden bg-slate-900 border border-slate-200 dark:border-white/10 mb-4">
                    <img
                      src="/gifs/hotspot/semi-overhaul-demo.gif"
                      alt="Semi Overhaul Demo"
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

              {/* Active Hotspot State */}
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
                />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
