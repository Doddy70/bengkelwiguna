"use client";

import React, { useRef } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { X, CheckCircle, ChevronLeft, ChevronRight, Check, Sparkles } from "lucide-react";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import Image from "next/image";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface InfoPanelProps {
  hotspot: any;
  totalHotspots: number;
  currentIndex: number;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  sheetState?: 'closed' | 'peek' | 'open';
  onStateChange?: (state: 'closed' | 'peek' | 'open') => void;
  serviceSlug?: string;
  variant?: 'panel' | 'sheet';
}

// Snap points for sheet variant
const SNAP_CLOSED = 0;
const SNAP_PEEK = 50;
const SNAP_OPEN = 90;

export function InfoPanel({
  hotspot,
  totalHotspots,
  currentIndex,
  onClose,
  onNext,
  onPrev,
  sheetState = 'open',
  onStateChange,
  serviceSlug,
  variant = 'panel'
}: InfoPanelProps) {
  const sheetRef = useRef<HTMLDivElement>(null);

  const isPeek = sheetState === 'peek';
  const isOpen = sheetState === 'open';
  const isClosed = sheetState === 'closed';
  const isSheet = variant === 'sheet';

  // Calculate visibility for sheet
  const getVisibility = () => {
    switch (sheetState) {
      case 'closed': return SNAP_CLOSED;
      case 'peek': return SNAP_PEEK;
      case 'open': return SNAP_OPEN;
      default: return SNAP_CLOSED;
    }
  };

  const visibility = getVisibility();

  // Handle drag snap for sheet
  const handleDragEnd = (_: any, info: PanInfo) => {
    const velocity = info.velocity.y;
    const offset = info.offset.y;

    if (velocity > 500 || (offset > 50 && velocity > 0)) {
      onStateChange?.('closed');
      onClose();
    } else if (velocity < -500 || offset < -50) {
      if (isPeek) {
        onStateChange?.('open');
      }
    }
  };

  // Use provided before/after images
  const beforeImage = hotspot.beforeImage || "/images/hotspot/Stinger-Before.jpg";
  const afterImage = hotspot.afterImage || "/images/hotspot/Stinger-After.jpg";
  const mainImage = hotspot.mainImage || "/images/equipment/Info-1.jpg";

  // Map recommendations based on serviceSlug
  const getRecommendation = () => {
    switch (serviceSlug) {
      case 'semi-overhaul':
        return {
          title: "Stinger Engine Flush + Oli System Cleaner",
          description: "Membersihkan sludge, varnish, dan kerak oli secara menyeluruh tanpa bongkar mesin."
        };
      case 'kyoto-shaking-machine':
        return {
          title: "Kyoto Shaking Machine Kaki-kaki Check",
          description: "Mendeteksi secara akurat sumber bunyi dan kerusakan kaki-kaki mobil dalam 15 menit."
        };
      case 'reset-ac':
        return {
          title: "Kyoto AC Flushing + Ganti Oli Kompresor",
          description: "Mengganti oli kompresor 100% steril dan vakum untuk memaksimalkan pendinginan kabin."
        };
      case 'coolant-changer':
        return {
          title: "Radiator Coolant Changer & System Flush",
          description: "Menguras sisa air radiator lama berkarat secara vakum agar sirkulasi air baru maksimal."
        };
      case 'perawatan-berkala':
        return {
          title: "Tune Up & Engine Condition Inspections",
          description: "Inspeksi menyeluruh 25 titik mesin dan pembersihan katup pembakaran untuk menjaga keandalan mesin."
        };
      default:
        return {
          title: "Stinger Engine Flush + Oli System Cleaner",
          description: "Membersihkan sludge, varnish, dan kerak oli secara menyeluruh tanpa bongkar mesin."
        };
    }
  };

  const recommendation = getRecommendation();

  // ===== SHEET VARIANT (Mobile Bottom Sheet) =====
  if (isSheet) {
    return (
      <>
        {/* Backdrop */}
        <AnimatePresence>
          {(isPeek || isOpen) && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                onStateChange?.('closed');
                onClose();
              }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            />
          )}
        </AnimatePresence>

        {/* Sheet */}
        <motion.div
          ref={sheetRef}
          initial={false}
          animate={{ y: `${100 - visibility}%` }}
          transition={{ type: "spring", damping: 30, stiffness: 300 }}
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          dragElastic={0.1}
          onDragEnd={handleDragEnd}
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 50,
            touchAction: 'none'
          }}
          className="fixed inset-x-0 bottom-0 w-full max-h-[90vh] rounded-t-3xl
            flex flex-col bg-white dark:bg-[#0a0f1d] backdrop-blur-xl
            border-t border-slate-200 dark:border-white/10
            shadow-[0_-8px_30px_rgba(0,0,0,0.15)]
            text-slate-900 dark:text-white overflow-hidden"
        >
          {/* Drag Handle */}
          <div className="flex justify-center pt-3 pb-1 flex-none">
            <div className="w-10 h-1.5 rounded-full bg-slate-300 dark:bg-white/20" />
          </div>

          {/* Header */}
          <div className="px-4 py-2 border-b border-slate-100 dark:border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-medium text-slate-500 dark:text-gray-400">
                Area {currentIndex + 1} dari {totalHotspots}
              </span>
              <div className="flex gap-1">
                {Array.from({ length: totalHotspots }).map((_, i) => (
                  <div
                    key={i}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-300",
                      i === currentIndex ? 'w-4 bg-blue-500' : 'w-1.5 bg-slate-200 dark:bg-white/10'
                    )}
                  />
                ))}
              </div>
            </div>
            <button
              onClick={() => {
                onStateChange?.('closed');
                onClose();
              }}
              className="w-8 h-8 rounded-full flex items-center justify-center text-slate-500 dark:text-gray-400 hover:text-red-500 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">

            {/* Title & Mini Visual Row */}
            <div className="flex gap-3 items-start">
              <div className="flex-1 space-y-1">
                <h3 className="text-base font-bold text-slate-900 dark:text-white leading-tight">
                  {hotspot.title}
                </h3>
                <p className="text-[10px] font-semibold text-slate-500 dark:text-gray-400 uppercase tracking-wider">
                  {hotspot.subtitle}
                </p>
                {hotspot.description && (
                  <p className="text-[11px] text-slate-600 dark:text-gray-300 leading-relaxed line-clamp-2">
                    {hotspot.description}
                  </p>
                )}
              </div>

              {/* Mini Visual/GIF */}
              <div className="w-20 h-20 shrink-0 rounded-xl overflow-hidden bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                {serviceSlug === 'semi-overhaul' ? (
                  <img
                    src="/gifs/hotspot/semi-overhaul-demo.gif"
                    alt="Demo"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    {mainImage ? (
                      <Image src={mainImage} alt={hotspot.title} fill className="object-cover" />
                    ) : (
                      <span className="text-slate-400 text-[10px]">Preview</span>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Navigation */}
            {onPrev && onNext && (
              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={onPrev}
                  className="w-9 h-9 rounded-full flex items-center justify-center bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  <ChevronLeft size={18} />
                </button>
                <span className="text-xs text-slate-500 dark:text-gray-400">
                  {currentIndex + 1} / {totalHotspots}
                </span>
                <button
                  onClick={onNext}
                  className="w-9 h-9 rounded-full flex items-center justify-center bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            )}

            {/* "Lihat Detail" CTA (Peek only) */}
            {isPeek && (
              <button
                onClick={() => onStateChange?.('open')}
                className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-xl transition-all shadow-[0_4px_14px_0_rgba(37,99,235,0.3)] flex justify-center items-center gap-2 cursor-pointer"
              >
                Lihat Detail <ChevronRight size={16} />
              </button>
            )}

            {/* Full Content (when open) */}
            {!isPeek && (
              <div className="space-y-4">
                {/* 3 Columns: Problems, Treatments, Benefits */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="space-y-2">
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
                      MASALAH
                    </h4>
                    <ul className="space-y-1.5">
                      {hotspot.problems?.map((p: string, i: number) => (
                        <li key={i} className="text-[10px] text-slate-600 dark:text-gray-300 flex items-start gap-1.5">
                          <X size={10} className="text-red-500 dark:text-red-400 shrink-0 mt-0.5" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-green-600 dark:text-green-400">
                      MANFAAT
                    </h4>
                    <ul className="space-y-1.5">
                      {hotspot.treatments?.map((t: string, i: number) => (
                        <li key={i} className="text-[10px] text-slate-600 dark:text-gray-300 flex items-start gap-1.5">
                          <CheckCircle size={10} className="text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                      BENEFIT
                    </h4>
                    <ul className="space-y-1.5">
                      {hotspot.benefits?.map((b: string, i: number) => (
                        <li key={i} className="text-[10px] text-slate-600 dark:text-gray-300 flex items-start gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1 shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Before/After Slider - Semi Overhaul only */}
                {serviceSlug === 'semi-overhaul' && (
                  <div className="space-y-2">
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-gray-400">
                      SEBELUM & SESUDAH
                    </h4>
                    <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-white/10">
                      <ReactCompareSlider
                        itemOne={
                          <div className="relative w-full h-full">
                            <ReactCompareSliderImage src={beforeImage} alt="Sebelum" />
                            <span className="absolute top-2 left-2 px-2 py-0.5 text-[9px] font-bold uppercase rounded bg-red-600/90 text-white">Sebelum</span>
                          </div>
                        }
                        itemTwo={
                          <div className="relative w-full h-full">
                            <ReactCompareSliderImage src={afterImage} alt="Sesudah" />
                            <span className="absolute top-2 right-2 px-2 py-0.5 text-[9px] font-bold uppercase rounded bg-green-600/90 text-white">Sesudah</span>
                          </div>
                        }
                        className="w-full aspect-[16/10]"
                      />
                    </div>
                  </div>
                )}

                {/* Rekomendasi */}
                <div className="flex gap-3 items-start bg-blue-50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/30 rounded-xl p-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20">
                    <Sparkles size={16} className="text-blue-500" />
                  </div>
                  <div className="space-y-1">
                    <h5 className="text-xs font-bold text-slate-900 dark:text-white">
                      {recommendation.title}
                    </h5>
                    <p className="text-[11px] text-slate-500 dark:text-gray-400">
                      {recommendation.description}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sticky Bottom CTA */}
          {!isClosed && (
            <div className="flex-none p-4 border-t border-slate-100 dark:border-white/10 bg-white dark:bg-[#0a0f1d] z-20">
              <button className="w-full flex items-center justify-center gap-2 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-xl transition-all shadow-[0_4px_14px_0_rgba(37,99,235,0.3)] cursor-pointer">
                <span>📅</span>
                <span>Booking Inspeksi Sekarang</span>
              </button>
              <div className="flex justify-center items-center gap-6 mt-3">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-gray-400">
                  <Check size={14} className="text-blue-500" />
                  <span>Gratis Konsultasi</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-gray-400">
                  <Check size={14} className="text-blue-500" />
                  <span>Bergaransi</span>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </>
    );
  }

  // ===== PANEL VARIANT (Desktop Side Panel) =====
  return (
    <motion.div
      ref={sheetRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-white/95 dark:bg-[#0a0f1d]/95 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden"
    >
      {/* Header */}
      <div className="px-5 py-3 border-b border-slate-200 dark:border-white/10 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            {hotspot.title} <span className="text-slate-500 dark:text-gray-400 font-normal text-xs">{hotspot.subtitle}</span>
          </h3>
        </div>
        <div className="flex items-center gap-2">
          {onPrev && onNext && (
            <div className="flex items-center gap-1 mr-2">
              <button
                onClick={onPrev}
                className="w-7 h-7 rounded flex items-center justify-center text-slate-500 dark:text-gray-400 hover:text-blue-600 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors border border-slate-200 dark:border-white/10 cursor-pointer"
              >
                <ChevronLeft size={14} />
              </button>
              <button
                onClick={onNext}
                className="w-7 h-7 rounded flex items-center justify-center text-slate-500 dark:text-gray-400 hover:text-blue-600 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors border border-slate-200 dark:border-white/10 cursor-pointer"
              >
                <ChevronRight size={14} />
              </button>
            </div>
          )}
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-slate-500 dark:text-gray-400 hover:text-red-500 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X size={16} />
          </button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-5 space-y-6 max-h-[60vh]">

        {/* GIF Preview - Semi Overhaul */}
        {serviceSlug === 'semi-overhaul' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-gray-400 flex items-center gap-1.5">
                <span>🎬</span>
                <span>How It Works</span>
              </h4>
            </div>
            <div className="w-full aspect-video relative rounded-xl overflow-hidden bg-slate-900 border border-slate-200 dark:border-white/10">
              <img
                src="/gifs/hotspot/semi-overhaul-demo.gif"
                alt="Semi Overhaul Demo"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        )}

        {/* Static Image - Non Semi Overhaul */}
        {serviceSlug !== 'semi-overhaul' && (
          <div className="w-full aspect-video relative rounded-xl overflow-hidden bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center">
            {mainImage ? (
              <Image src={mainImage} alt={hotspot.title} fill className="object-cover opacity-90" />
            ) : (
              <div className="text-slate-500 dark:text-gray-400 text-sm">3D Render Component</div>
            )}
          </div>
        )}

        {hotspot.description && (
          <p className="text-xs text-slate-600 dark:text-gray-300 leading-relaxed border-b border-slate-200 dark:border-white/10 pb-4">
            {hotspot.description}
          </p>
        )}

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-3">
          <div className="space-y-3">
            <h4 className="text-[10px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
              MASALAH UMUM
            </h4>
            <ul className="space-y-2">
              {hotspot.problems?.map((p: string, i: number) => (
                <li key={i} className="text-[11px] text-slate-600 dark:text-gray-300 flex items-start gap-1.5">
                  <X size={10} className="text-red-500 dark:text-red-400 shrink-0 mt-0.5 font-bold" />
                  <span className="leading-tight">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-[10px] font-bold uppercase tracking-wider text-green-600 dark:text-green-400">
              MANFAAT TREATMENT
            </h4>
            <ul className="space-y-2">
              {hotspot.treatments?.map((t: string, i: number) => (
                <li key={i} className="text-[11px] text-slate-600 dark:text-gray-300 flex items-start gap-1.5">
                  <CheckCircle size={10} className="text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
                  <span className="leading-tight">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              BENEFIT
            </h4>
            <ul className="space-y-2">
              {hotspot.benefits?.map((b: string, i: number) => (
                <li key={i} className="text-[11px] text-slate-600 dark:text-gray-300 flex items-start gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1 shrink-0" />
                  <span className="leading-tight">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Before/After Slider - Semi Overhaul */}
        {serviceSlug === 'semi-overhaul' && (
          <div className="space-y-3">
            <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-gray-400">
              SEBELUM & SESUDAH TREATMENT
            </h4>
            <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-md">
              <ReactCompareSlider
                itemOne={
                  <div className="relative w-full h-full">
                    <ReactCompareSliderImage src={beforeImage} alt="Sebelum" />
                    <span className="absolute top-2 left-2 px-2 py-0.5 text-[9px] font-bold uppercase rounded bg-red-600/90 text-white backdrop-blur-sm">Sebelum</span>
                  </div>
                }
                itemTwo={
                  <div className="relative w-full h-full">
                    <ReactCompareSliderImage src={afterImage} alt="Sesudah" />
                    <span className="absolute top-2 right-2 px-2 py-0.5 text-[9px] font-bold uppercase rounded bg-green-600/90 text-white backdrop-blur-sm">Sesudah</span>
                  </div>
                }
                className="w-full aspect-[16/10] lg:aspect-[21/9]"
              />
            </div>
          </div>
        )}

        {/* Rekomendasi */}
        <div className="space-y-3">
          <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-gray-400">
            REKOMENDASI TREATMENT
          </h4>
          <div className="flex gap-3 items-start bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/30 rounded-xl p-3.5">
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20">
              <Sparkles size={16} className="text-blue-500" />
            </div>
            <div className="space-y-1">
              <h5 className="text-xs font-bold text-slate-900 dark:text-white">
                {recommendation.title}
              </h5>
              <p className="text-[11px] text-slate-500 dark:text-gray-400 leading-normal">
                {recommendation.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Bottom CTA */}
      <div className="flex-none p-4 border-t border-slate-200 dark:border-white/10 bg-white/95 dark:bg-[#0a0f1d]/95 backdrop-blur-xl">
        <button className="w-full flex items-center justify-center gap-2 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-xl transition-all shadow-[0_4px_14px_0_rgba(37,99,235,0.3)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.4)] cursor-pointer">
          <span>📅</span>
          <span>Booking Inspeksi Sekarang</span>
        </button>
        <div className="flex justify-center items-center gap-8 mt-3">
          <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-gray-400">
            <Check size={14} className="text-blue-500" />
            <span>Gratis Konsultasi</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-gray-400">
            <Check size={14} className="text-blue-500" />
            <span>Bergaransi</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
