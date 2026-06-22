"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import * as FeatherIcons from "react-feather";
import equipmentData from "@/data/equipment.json";

// ── Types ──
interface Hotspot {
  top: string;
  left: string;
  title: string;
  subtitle?: string;
  thumb?: string;
  fungsi?: string;
  gejala?: string[];
  manfaat?: string[];
  impacts?: string[];
  treatment?: string;
  beforeAfter?: {
    before: string[];
    after: string[];
  };
  testimonial?: {
    quote: string;
    author: string;
  };
}

interface EquipmentItem {
  id: string;
  name: string;
  category: string;
  image: string;
  defaultThumb?: string;
  description: string;
  hotspots: Hotspot[];
  impactScores?: { icon: string; title: string; value: string }[];
}

// ── PulseDot — exact match visual reference ──
const PulseDot = ({
  isActive,
  onClick,
  index
}: {
  isActive: boolean;
  onClick: () => void;
  index: number;
}) => {
  return (
    <button
      onClick={onClick}
      className="relative w-10 h-10 flex items-center justify-center group cursor-pointer"
      aria-label={`Hotspot ${index + 1}`}
    >
      {/* Outer ripple rings (3 layers) */}
      <span className="absolute inset-0 rounded-full border-2 border-red-500/40 animate-ping" style={{ animationDuration: '2s' }} />
      <span className="absolute inset-[-4px] rounded-full border border-red-500/30 animate-ping" style={{ animationDuration: '2.5s', animationDelay: '0.3s' }} />
      <span className="absolute inset-[-8px] rounded-full border border-red-500/20 animate-ping" style={{ animationDuration: '3s', animationDelay: '0.6s' }} />

      {/* Core dot with glow */}
      <span className="relative z-10 w-4 h-4 rounded-full bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.8)] group-hover:shadow-[0_0_20px_rgba(239,68,68,1)] transition-shadow" />

      {/* Number badge */}
      <span className="absolute -top-1 -right-1 z-20 w-5 h-5 rounded-full bg-black/80 border border-red-500 text-red-500 text-[10px] font-bold flex items-center justify-center backdrop-blur-sm dark:bg-white/90 dark:text-red-600 dark:border-red-600">
        {index + 1}
      </span>
    </button>
  );
};

// ── AnimatedBeam — flowing dashed line to panel ──
const AnimatedBeam = ({
  containerRef,
  dotPosition,
  panelX,
  panelY
}: {
  containerRef: React.RefObject<HTMLDivElement | null>;
  dotPosition: { x: number; y: number };
  panelX: number;
  panelY: number;
}) => {
  const [pathD, setPathD] = useState("");
  const [svgDims, setSvgDims] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const updatePath = () => {
      if (!containerRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      setSvgDims({ w: containerRect.width, h: containerRect.height });

      const startX = (dotPosition.x / 100) * containerRect.width;
      const startY = (dotPosition.y / 100) * containerRect.height;
      const endX = containerRect.width + panelX;
      const endY = panelY;

      const midX = (startX + endX) / 2;
      const midY = (startY + endY) / 2;
      const d = `M ${startX},${startY} Q ${midX},${midY - 20} ${endX},${endY}`;
      setPathD(d);
    };

    if (!containerRef.current) return;
    const observer = new ResizeObserver(() => updatePath());
    observer.observe(containerRef.current);
    updatePath();

    return () => observer.disconnect();
  }, [containerRef, dotPosition, panelX, panelY]);

  if (!pathD) return null;

  return (
    <svg
      fill="none"
      width={svgDims.w + Math.abs(panelX) + 50}
      height={svgDims.h + 50}
      className="absolute left-0 top-0 pointer-events-none z-30"
      style={{ overflow: 'visible' }}
    >
      <defs>
        <filter id="beam-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <linearGradient id="beam-gradient" gradientUnits="userSpaceOnUse"
          x1="0%" y1="0%" x2="100%" y2="0%"
        >
          <stop stopColor="#EF4444" stopOpacity="0" />
          <stop offset="0%" stopColor="#EF4444" stopOpacity="1" />
          <stop offset="50%" stopColor="#F97316" stopOpacity="1" />
          <stop offset="100%" stopColor="#FCD34D" stopOpacity="0" />
        </linearGradient>
      </defs>

      <path
        d={pathD}
        stroke="rgba(239, 68, 68, 0.2)"
        strokeWidth={1.5}
        strokeDasharray="4 4"
        strokeLinecap="round"
      />

      <motion.path
        d={pathD}
        stroke="url(#beam-gradient)"
        strokeWidth={2}
        strokeDasharray="8 6"
        strokeLinecap="round"
        filter="url(#beam-glow)"
        initial={{ strokeDashoffset: 100 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </svg>
  );
};

// ── InfoPanel — exact match visual reference (Dark Mode) ──
const InfoPanel = ({
  hotspot,
  onClose
}: {
  hotspot: Hotspot;
  onClose: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 30, scale: 0.95 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed right-4 w-[380px] max-h-[85vh] overflow-y-auto z-50 rounded-2xl
        bg-[#0f0f0f]/95 backdrop-blur-xl
        border border-red-500/20
        shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8),0_0_40px_rgba(239,68,68,0.1)]"
    >
      {/* Header */}
      <div className="p-5 border-b border-white/10">
        <div className="flex items-start justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-red-500 mb-1 block">
              Hotspot Area
            </span>
            <h3 className="text-lg font-bold text-white">
              {hotspot.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
          >
            <FeatherIcons.X size={16} />
          </button>
        </div>
      </div>

      {/* Thumbnail */}
      {hotspot.thumb && (
        <div className="p-5">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black/50">
            <img
              src={hotspot.thumb}
              alt={hotspot.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-5 pt-0 space-y-5">
        {hotspot.subtitle && (
          <p className="text-sm text-gray-400 leading-relaxed">
            {hotspot.subtitle}
          </p>
        )}

        {(hotspot.fungsi || hotspot.treatment) && (
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2 flex items-center gap-2">
              <FeatherIcons.Cpu size={12} />
              Fungsi Komponen
            </h4>
            <p className="text-sm text-gray-300 leading-relaxed">
              {hotspot.fungsi || hotspot.treatment}
            </p>
          </div>
        )}

        {hotspot.gejala && hotspot.gejala.length > 0 && (
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-red-500 mb-3 flex items-center gap-2">
              <FeatherIcons.AlertCircle size={12} />
              Gejala Kerusakan
            </h4>
            <ul className="space-y-2">
              {hotspot.gejala.map((g, i) => (
                <li key={i} className="text-sm text-gray-300 flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                  {g}
                </li>
              ))}
            </ul>
          </div>
        )}

        {(hotspot.manfaat || hotspot.impacts) && (
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-green-500 mb-3 flex items-center gap-2">
              <FeatherIcons.CheckCircle size={12} />
              Manfaat Treatment
            </h4>
            <ul className="space-y-2">
              {(hotspot.manfaat || hotspot.impacts || []).map((m, i) => (
                <li key={i} className="text-sm text-gray-300 flex items-start gap-3">
                  <FeatherIcons.Check size={14} className="text-green-500 shrink-0 mt-0.5" />
                  {m}
                </li>
              ))}
            </ul>
          </div>
        )}

        {hotspot.beforeAfter && (
          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-red-500 mb-2">
                Sebelum
              </h4>
              <ul className="space-y-1.5">
                {hotspot.beforeAfter.before.map((b, i) => (
                  <li key={i} className="text-xs text-gray-400 flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-red-500 mt-1.5 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-green-500 mb-2">
                Sesudah
              </h4>
              <ul className="space-y-1.5">
                {hotspot.beforeAfter.after.map((a, i) => (
                  <li key={i} className="text-xs text-gray-400 flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-green-500 mt-1.5 shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {hotspot.testimonial && (
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 italic">
            <p className="text-sm text-gray-300 mb-2">
              &ldquo;{hotspot.testimonial.quote}&rdquo;
            </p>
            <p className="text-xs text-gray-500 font-medium">
              — {hotspot.testimonial.author}
            </p>
          </div>
        )}

        <button className="w-full flex items-center justify-center gap-2.5 py-3.5 bg-red-500 hover:bg-red-600 text-white font-bold text-sm rounded-xl transition-all shadow-lg shadow-red-500/30">
          <FeatherIcons.Calendar size={16} />
          Booking Sekarang
        </button>
      </div>
    </motion.div>
  );
};

// ── Main Component ──
export default function ModernEquipmentShowcase() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);
  const [panelPos, setPanelPos] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLDivElement>(null);

  const activeItem = equipmentData[activeItemIndex] as EquipmentItem;

  useEffect(() => {
    const updatePanelPos = () => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        const scrollY = window.scrollY;
        setPanelPos({
          x: 50,
          y: rect.top + scrollY + 100
        });
      }
    };
    updatePanelPos();
    window.addEventListener('resize', updatePanelPos);
    return () => window.removeEventListener('resize', updatePanelPos);
  }, [activeItemIndex, activeHotspot]);

  return (
    <div
      className="min-h-screen relative
        bg-gradient-to-b from-[#0a0a0a] via-[#111111] to-[#0a0a0a]
        dark:from-[#0a0a0a] dark:via-[#111111] dark:to-[#0a0a0a]
        light:from-[#f9fafb] light:via-[#ffffff] light:to-[#f3f4f6]"
    >
      {/* Background texture overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-30
          bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.03)_0%,transparent_50%)]"
      />

      {/* SECTION TITLE */}
      <div className="text-center px-4 pt-16 pb-10 relative z-10">
        <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-4
          bg-red-500/10 text-red-500 border border-red-500/20">
          <FeatherIcons.Crosshair size={12} />
          Teknologi Mutakhir
        </div>
        <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white">
          Fasilitas & Peralatan Modern
        </h2>
        <p className="text-sm mt-3 max-w-lg mx-auto text-gray-400">
          Inspeksi presisi tinggi untuk performa kendaraan maksimal.
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-10 px-4 lg:px-8 pb-12 max-w-screen-xl mx-auto relative z-10">

        {/* LEFT PANEL */}
        <div className="w-full lg:w-[280px] shrink-0">
          <h2 className="text-2xl lg:text-[28px] font-bold tracking-tight leading-none mb-3 text-white">
            {activeItem.name}
          </h2>
          <p className="text-[13px] leading-relaxed mb-6 text-gray-400">
            {activeItem.description}
          </p>

          {/* Menu Tabs */}
          <div className="flex flex-col gap-2">
            {equipmentData.map((item: any, idx: number) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveItemIndex(idx);
                  setActiveHotspot(null);
                }}
                className={`px-5 py-3.5 rounded-xl text-[13px] font-semibold transition-all duration-300 text-left flex items-center gap-3 border ${
                  activeItemIndex === idx
                    ? 'bg-red-500 text-white border-red-600 shadow-lg shadow-red-500/30'
                    : 'bg-transparent hover:bg-white/5 text-gray-300 border-white/10'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${activeItemIndex === idx ? 'bg-white' : 'bg-gray-600'}`} />
                {item.name}
              </button>
            ))}
          </div>
        </div>

        {/* CENTER — Image & Hotspots */}
        <div className="flex-1 w-full relative min-h-[350px] lg:min-h-[450px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.id}
              ref={imageRef}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="relative w-full max-w-[750px] aspect-[16/10] mx-auto"
            >
              {/* Background container */}
              <div
                className="absolute inset-0 rounded-2xl overflow-hidden
                  bg-[rgba(20,20,20,0.8)] backdrop-blur-[20px]
                  border border-white/5"
              >
                <Image
                  src={activeItem.image}
                  alt={activeItem.name}
                  fill
                  className="object-contain p-6"
                  priority
                />
              </div>

              {/* AnimatedBeam */}
              {activeHotspot && (
                <AnimatedBeam
                  containerRef={imageRef}
                  dotPosition={{ x: parseFloat(activeHotspot.left), y: parseFloat(activeHotspot.top) }}
                  panelX={panelPos.x}
                  panelY={panelPos.y}
                />
              )}

              {/* Pulse Dot Hotspots */}
              <div className="absolute inset-0 z-20">
                {activeItem.hotspots?.map((hotspot, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.08, duration: 0.3 }}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2"
                    style={{ top: hotspot.top, left: hotspot.left }}
                  >
                    <PulseDot
                      isActive={activeHotspot === hotspot}
                      onClick={() => setActiveHotspot(activeHotspot === hotspot ? null : hotspot)}
                      index={index}
                    />
                  </motion.div>
                ))}
              </div>

              {/* TAP TO EXPLORE hint */}
              {!activeHotspot && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-500 flex items-center gap-2"
                >
                  <FeatherIcons.MousePointer size={14} />
                  TAP TO EXPLORE
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT — Info Card */}
        <div className="w-full lg:w-[380px] shrink-0">
          <div
            className="rounded-2xl p-5 w-full
              bg-[rgba(15,15,15,0.95)] backdrop-blur-[40px]
              border border-white/5"
          >
            {/* Thumbnail */}
            {activeItem.defaultThumb && (
              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black/50 mb-4">
                <img
                  src={activeItem.defaultThumb}
                  alt={activeItem.name}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Impact Scores */}
            {activeItem.impactScores && (
              <div className="flex gap-3 mb-5">
                {activeItem.impactScores.map((score, idx) => {
                  const Icon = (FeatherIcons as any)[score.icon] || FeatherIcons.CheckCircle;
                  return (
                    <div
                      key={idx}
                      className="flex-1 p-3 rounded-xl text-center
                        bg-white/5 border border-white/10"
                    >
                      <Icon size={16} className="text-red-500 mx-auto mb-2" />
                      <p className="text-[10px] leading-tight mb-1 text-gray-400">
                        {score.title}
                      </p>
                      <p className="text-sm font-bold text-white">
                        {score.value}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Hotspot count */}
            <p className="text-xs mb-4 text-center text-gray-500">
              Klik titik merah untuk melihat detail &bull; {activeItem.hotspots?.length || 0} area inspeksi
            </p>

            {/* CTA */}
            <button className="w-full flex items-center justify-center gap-2.5 py-3.5 bg-[#224297] hover:bg-[#1a356e] text-white font-bold text-sm rounded-xl transition-all shadow-lg shadow-blue-900/30">
              <FeatherIcons.Calendar size={16} />
              Booking Sekarang
            </button>
          </div>
        </div>
      </div>

      {/* Info Panel (overlay) */}
      <AnimatePresence>
        {activeHotspot && (
          <InfoPanel
            hotspot={activeHotspot}
            onClose={() => setActiveHotspot(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
