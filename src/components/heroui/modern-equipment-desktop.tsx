"use client";
import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import * as FeatherIcons from "react-feather";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import equipmentDataRaw from "@/data/equipment.json";
const equipmentData = equipmentDataRaw as unknown as EquipmentItem[];

interface EquipmentItem {
  id: string;
  name: string;
  image: string;
  defaultThumb?: string;
  description?: string;
  hotspots?: Hotspot[];
  impactScores?: { icon: string; title: string; value: string }[];
}

interface Hotspot {
  top: string;
  left: string;
  title: string;
  widgetTitle?: string;
  subtitle?: string;
  description?: string;
  diagnosa?: string;
  labelOffsetX?: number;
  labelOffsetY?: number;
  thumb?: string;
  fungsi?: string;
  treatment?: string;
  gejala?: string[];
  manfaat?: string[];
  impacts?: string[];
  hasilDeteksi?: string;
  beforeAfter?: { before: string[]; after: string[] };
  testimonial?: { author: string; quote: string };
}

// ─── FULL DESKTOP LAYOUT (>1366px) — Normal page section ─────────────────────
function DesktopOverlay({ activeItem, activeHotspot, onHotspotClick, onTabClick, activeItemIndex }: {
  activeItem: EquipmentItem; activeHotspot: Hotspot | null;
  onHotspotClick: (h: Hotspot) => void; onTabClick: (i: number) => void;
  activeItemIndex: number;
}) {
  return (
    <div style={{ width: '100%', background: 'linear-gradient(135deg, #f0f4f8 0%, #f8fafc 50%, #eef2ff 100%)' }}>
      {/* Title */}
      <div style={{ textAlign: 'center', padding: '48px 16px 24px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 12px', background: 'rgba(219,234,254,0.8)', backdropFilter: 'blur(8px)', border: '1px solid rgba(191,219,254,1)', borderRadius: '9999px', color: '#1d4ed8', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>
          <FeatherIcons.Crosshair size={12} />Teknologi Mutakhir
        </div>
        <h2 style={{ fontSize: '36px', fontWeight: 900, color: '#111827', letterSpacing: '-0.025em' }}>Fasilitas &amp; Peralatan Modern</h2>
        <p style={{ color: '#6b7280', fontSize: '14px', marginTop: '8px' }}>Inspeksi presisi tinggi untuk performa kendaraan maksimal.</p>
      </div>

      {/* Main content row: Left Tabs + Center Image + Right Panel */}
      <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr 360px', gap: '24px', padding: '0 24px 48px', maxWidth: '1600px', margin: '0 auto', alignItems: 'start' }}>

        {/* Left Panel — Vertical Tabs */}
        <div>
          <h3 style={{ fontSize: '32px', fontWeight: 700, color: '#1e293b', lineHeight: 1.1, letterSpacing: '-0.025em', marginBottom: '12px' }}>{activeItem.name}</h3>
          <p style={{ fontSize: '13px', color: '#6b7280', lineHeight: 1.6, marginBottom: '20px' }}>
            Teknologi canggih {activeItem.name} yang mampu mensimulasikan guncangan jalan rusak secara statis.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {equipmentData.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => onTabClick(idx)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  padding: '12px 16px', borderRadius: idx === activeItemIndex ? '14px' : '12px',
                  fontWeight: 700, fontSize: '13px', transition: 'all 0.3s',
                  border: idx === activeItemIndex ? '1px solid #3b82f6' : '1px solid rgba(255,255,255,0.5)',
                  background: idx === activeItemIndex ? 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)' : 'rgba(255,255,255,0.7)',
                  backdropFilter: 'blur(12px)', color: idx === activeItemIndex ? '#fff' : '#4b5563',
                  boxShadow: idx === activeItemIndex ? '0 8px 20px rgba(37,99,235,0.3)' : 'none',
                  cursor: 'pointer', textAlign: 'left',
                }}
              >
                <div style={{ width: '7px', height: '7px', borderRadius: '50%', flexShrink: 0, background: idx === activeItemIndex ? '#fff' : '#9ca3af' }} />
                {item.name}
              </button>
            ))}
          </div>
        </div>

        {/* Center Image + Hotspots */}
        <div style={{ flex: 1, position: 'relative', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6 }}
              style={{ position: 'relative', width: '100%', maxWidth: '1200px', aspectRatio: '16/9' }}
            >
              <Image src={activeItem.image} alt={activeItem.name} fill style={{ objectFit: 'contain' }} priority />
              <div style={{ position: 'absolute', inset: 0, zIndex: 20 }}>
                {activeItem.hotspots?.map((h, i) => (
                  <HotspotDot key={i} h={h} i={i} active={activeHotspot === h} onClick={() => onHotspotClick(h)} />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Info Panel */}
        <div>
          <InfoPanel activeItem={activeItem} activeHotspot={activeHotspot} onClose={() => activeHotspot && onHotspotClick(activeHotspot)} />
        </div>
      </div>
    </div>
  );
}

// ─── TABLET/MID-SIZE LAYOUT (1024px–1366px) — Full vertical stack ──────────────
function TabletLayout({ activeItem, activeHotspot, onHotspotClick, onTabClick, activeItemIndex }: {
  activeItem: EquipmentItem; activeHotspot: Hotspot | null;
  onHotspotClick: (h: Hotspot) => void; onTabClick: (i: number) => void;
  activeItemIndex: number;
}) {
  return (
    <div style={{ width: '100%', background: 'linear-gradient(135deg, #f0f4f8 0%, #f8fafc 50%, #eef2ff 100%)', overflowX: 'hidden', paddingBottom: '32px' }}>

      {/* Header */}
      <div style={{ textAlign: 'center', padding: '32px 16px 12px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 12px', background: 'rgba(219,234,254,0.8)', backdropFilter: 'blur(8px)', border: '1px solid rgba(191,219,254,1)', borderRadius: '9999px', color: '#1d4ed8', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>
          <FeatherIcons.Crosshair size={12} />Teknologi Mutakhir
        </div>
        <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#111827' }}>Fasilitas &amp; Peralatan Modern</h2>
        <p style={{ color: '#6b7280', fontSize: '12px', marginTop: '4px' }}>Pilih equipment dan tap hotspot untuk detail.</p>
      </div>

      {/* Horizontal Scrollable Tabs — Centered */}
      <div style={{ padding: '8px 16px', overflowX: 'auto', WebkitOverflowScrolling: 'touch', display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'flex', gap: '6px', minWidth: 'max-content' }}>
          {equipmentData.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => onTabClick(idx)}
              style={{
                display: 'flex', alignItems: 'center', gap: '6px',
                padding: '8px 14px', borderRadius: '9999px',
                fontWeight: 700, fontSize: '12px', transition: 'all 0.3s',
                border: idx === activeItemIndex ? '1px solid #3b82f6' : '1px solid rgba(255,255,255,0.5)',
                background: idx === activeItemIndex ? 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)' : 'rgba(255,255,255,0.8)',
                backdropFilter: 'blur(12px)', color: idx === activeItemIndex ? '#fff' : '#4b5563',
                boxShadow: idx === activeItemIndex ? '0 4px 12px rgba(37,99,235,0.3)' : '0 2px 6px rgba(0,0,0,0.05)',
                cursor: 'pointer', whiteSpace: 'nowrap',
              }}
            >
              <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: idx === activeItemIndex ? '#fff' : '#9ca3af', flexShrink: 0 }} />
              {item.name}
            </button>
          ))}
        </div>
      </div>

      {/* Active Equipment Name */}
      <div style={{ textAlign: 'center', padding: '4px 16px 8px' }}>
        <p style={{ fontSize: '14px', fontWeight: 700, color: '#1e293b' }}>{activeItem.name}</p>
      </div>

      {/* Image + Hotspots — Full Width */}
      <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', margin: '0 auto' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeItem.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            style={{ position: 'relative', width: '100%', height: '100%' }}
          >
            <Image src={activeItem.image} alt={activeItem.name} fill style={{ objectFit: 'contain' }} priority />
            <div style={{ position: 'absolute', inset: 0, zIndex: 20 }}>
              {activeItem.hotspots?.map((h, i) => (
                <HotspotDot key={i} h={h} i={i} active={activeHotspot === h} onClick={() => onHotspotClick(h)} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Info Panel — Compact card below image */}
      <div style={{ padding: '0 16px', marginTop: '12px' }}>
        <Card
          style={{
            background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.7)', borderRadius: '1.25rem',
            boxShadow: '0 4px 20px rgba(31,38,135,0.08)', overflow: 'hidden',
          }}
          radius="none"
        >
          {/* Title row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', borderBottom: activeHotspot ? '1px solid #f3f4f6' : 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#eff6ff', border: '1px solid #dbeafe', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563eb', flexShrink: 0 }}>
                <FeatherIcons.Crosshair size={16} />
              </div>
              <div>
                <p style={{ fontSize: '10px', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>Area Terpilih</p>
                <p style={{ fontSize: '14px', fontWeight: 700, color: '#1f2937', lineHeight: 1.2 }}>
                  {activeHotspot ? activeHotspot.title : activeItem.name}
                </p>
              </div>
            </div>
            {activeHotspot && (
              <button
                onClick={() => onHotspotClick(activeHotspot)}
                style={{ width: '26px', height: '26px', borderRadius: '50%', border: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', cursor: 'pointer', flexShrink: 0 }}
              >
                <FeatherIcons.X size={11} />
              </button>
            )}
          </div>

          {/* Content */}
          <div style={{ padding: '12px 16px' }}>
            <p style={{ fontSize: '13px', color: '#4b5563', lineHeight: 1.6, marginBottom: '12px' }}>
              {activeHotspot
                ? (activeHotspot.fungsi || activeHotspot.treatment || activeItem.description)
                : activeItem.description}
            </p>

            {/* Gejala + Manfaat side by side */}
            <div style={{ display: 'flex', gap: '8px', marginBottom: activeHotspot?.beforeAfter ? '8px' : '12px' }}>
              {activeHotspot?.gejala && activeHotspot.gejala.length > 0 && (
                <div style={{ flex: 1, background: 'rgba(254,226,226,0.3)', padding: '10px 12px', borderRadius: '10px', border: '1px solid rgba(252,165,165,0.25)' }}>
                  <p style={{ fontSize: '10px', fontWeight: 700, color: '#dc2626', textTransform: 'uppercase', marginBottom: '4px' }}>Gejala</p>
                  {activeHotspot.gejala.slice(0, 2).map((g, i) => (
                    <p key={i} style={{ fontSize: '11px', color: '#4b5563', lineHeight: 1.4 }}>• {g}</p>
                  ))}
                </div>
              )}
              {(activeHotspot?.manfaat || activeHotspot?.impacts) && (
                <div style={{ flex: 1, background: 'rgba(220,252,231,0.3)', padding: '10px 12px', borderRadius: '10px', border: '1px solid rgba(134,239,172,0.25)' }}>
                  <p style={{ fontSize: '10px', fontWeight: 700, color: '#16a34a', textTransform: 'uppercase', marginBottom: '4px' }}>Manfaat</p>
                  {(activeHotspot.manfaat || activeHotspot.impacts || []).slice(0, 2).map((m, i) => (
                    <p key={i} style={{ fontSize: '11px', color: '#374151', lineHeight: 1.4 }}>• {m}</p>
                  ))}
                </div>
              )}
            </div>

            {/* Before/After compact */}
            {activeHotspot?.beforeAfter && (
              <div style={{ display: 'flex', gap: '8px', marginBottom: '10px' }}>
                <div style={{ flex: 1, padding: '8px 10px', borderRadius: '8px', background: 'rgba(254,226,226,0.3)', border: '1px solid rgba(252,165,165,0.2)' }}>
                  <p style={{ fontSize: '10px', fontWeight: 700, color: '#dc2626', marginBottom: '3px' }}>Sebelum</p>
                  <p style={{ fontSize: '11px', color: '#4b5563', lineHeight: 1.4 }}>• {activeHotspot.beforeAfter.before[0]}</p>
                </div>
                <div style={{ flex: 1, padding: '8px 10px', borderRadius: '8px', background: 'rgba(220,252,231,0.3)', border: '1px solid rgba(134,239,172,0.2)' }}>
                  <p style={{ fontSize: '10px', fontWeight: 700, color: '#16a34a', marginBottom: '3px' }}>Sesudah</p>
                  <p style={{ fontSize: '11px', color: '#374151', lineHeight: 1.4 }}>• {activeHotspot.beforeAfter.after[0]}</p>
                </div>
              </div>
            )}

            {/* CTA */}
            <button style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', padding: '11px', background: '#224297', color: '#fff', fontWeight: 700, fontSize: '13px', borderRadius: '10px', cursor: 'pointer', border: 'none', boxShadow: '0 4px 12px rgba(34,66,151,0.25)' }}>
              <FeatherIcons.Calendar size={13} />Booking Sekarang
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
}

// ─── SHARED: Hotspot Dot ────────────────────────────────────────────────────────
function HotspotDot({ h, i, active, onClick }: { h: Hotspot; i: number; active: boolean; onClick: () => void }) {
  const endX = (h.labelOffsetX ?? 100) + 110;
  const endY = (h.labelOffsetY ?? -100) + 30;
  const svgPath = `M 0 0 Q ${endX * 0.5} ${endY} ${endX} ${endY}`;

  return (
    <div className="absolute z-20" style={{ top: h.top, left: h.left }}>
      <AnimatePresence>
        {active && (
          <motion.svg initial={{ opacity: 0, pathLength: 0 }} animate={{ opacity: 1, pathLength: 1 }}
            exit={{ opacity: 0, pathLength: 0 }} transition={{ duration: 0.3 }}
            className="absolute pointer-events-none hidden md:block"
            style={{ width: '1px', height: '1px', overflow: 'visible', zIndex: -1 }}
          >
            <path d={svgPath} fill="none" stroke="#2563eb" strokeWidth="2" />
          </motion.svg>
        )}
      </AnimatePresence>
      <motion.button
        initial={{ scale: 0 }} animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: i * 0.1 }}
        onClick={onClick}
        aria-label={`Hotspot ${i + 1}`}
        className="relative group cursor-pointer flex items-center justify-center pointer-events-auto w-7 h-7"
      >
        <div className={`absolute inset-[-4px] rounded-full opacity-60 ${active ? 'bg-blue-600 animate-pulse' : 'bg-blue-400 animate-pulse'}`} />
        <div className={`relative w-6 h-6 rounded-full shadow-lg z-10 flex items-center justify-center transition-all duration-300 text-[11px] font-black
          ${active ? 'bg-blue-600 text-white scale-110 ring-4 ring-white' : 'bg-white text-blue-600 ring-2 ring-blue-500 hover:scale-110'}`}>
          {i + 1}
        </div>
      </motion.button>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.9 }} transition={{ duration: 0.3 }}
            className="absolute w-[200px] backdrop-blur-md rounded-2xl p-4 shadow-xl border z-50 bg-blue-600/95 border-blue-500 cursor-pointer pointer-events-auto"
            style={{ left: `${h.labelOffsetX ?? 100}px`, top: `${h.labelOffsetY ?? -100}px` }}
            onClick={onClick}
          >
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-2 h-2 rounded-full bg-white" />
              <h4 className="font-bold text-[12px] leading-tight text-white">{h.widgetTitle || h.title}</h4>
            </div>
            <p className="text-[10px] leading-relaxed line-clamp-3 text-blue-100">{h.diagnosa || h.description || ''}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── SHARED: Info Panel ─────────────────────────────────────────────────────────
function InfoPanel({ activeItem, activeHotspot, onClose }: { activeItem: EquipmentItem; activeHotspot: Hotspot | null; onClose: () => void }) {
  return (
    <Card style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(40px)', WebkitBackdropFilter: 'blur(40px)', border: '1px solid rgba(255,255,255,0.7)', borderRadius: '1.5rem', padding: '8px', boxShadow: '0 8px 32px rgba(31,38,135,0.12)' }} radius="none">
      {/* Thumbnail variant */}
      {((!activeHotspot && activeItem.defaultThumb) || (activeHotspot && activeHotspot.thumb)) ? (
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', position: 'relative' }}>
          {activeHotspot && (
            <button onClick={onClose} style={{ position: 'absolute', top: '12px', right: '12px', zIndex: 20, width: '28px', height: '28px', borderRadius: '50%', border: '1px solid rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(8px)', cursor: 'pointer', fontSize: '12px' }}>
              <FeatherIcons.X size={12} />
            </button>
          )}
          <div style={{ width: '100%', overflow: 'hidden', borderRadius: '1.25rem', display: 'flex', justifyContent: 'center', padding: '8px' }}>
            <img src={activeHotspot ? activeHotspot.thumb : activeItem.defaultThumb} alt={activeHotspot ? activeHotspot.title : activeItem.name}
              style={{ width: 'auto', maxWidth: '100%', maxHeight: '55vh', objectFit: 'contain', display: 'block' }} />
          </div>
          {!activeHotspot && (
            <div style={{ padding: '12px' }}>
              <button style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '12px', background: '#224297', color: '#fff', fontWeight: 700, fontSize: '13px', borderRadius: '12px', cursor: 'pointer', border: 'none' }}>
                <FeatherIcons.Calendar size={14} />Booking Sekarang
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Text variant */
        <>
          <CardHeader style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 16px 8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#eff6ff', border: '1px solid #dbeafe', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563eb' }}>
                <FeatherIcons.Crosshair size={18} />
              </div>
              <div>
                <p style={{ fontSize: '10px', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>Area Terpilih</p>
                <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#1f2937', lineHeight: 1.3 }}>{activeHotspot ? activeHotspot.title : activeItem.name}</h3>
              </div>
            </div>
            {activeHotspot && (
              <button onClick={onClose} style={{ width: '28px', height: '28px', borderRadius: '50%', border: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', cursor: 'pointer' }}>
                <FeatherIcons.X size={12} />
              </button>
            )}
          </CardHeader>
          <CardBody style={{ padding: '8px 16px 16px', gap: '12px', maxHeight: '50vh', overflowY: 'auto' }}>
            <p style={{ fontSize: '13px', color: '#4b5563', lineHeight: 1.6, borderBottom: '1px solid #f3f4f6', paddingBottom: '12px' }}>
              {activeHotspot ? (activeHotspot.fungsi || activeHotspot.treatment || activeItem.description) : activeItem.description}
            </p>

            {activeHotspot?.gejala && activeHotspot.gejala.length > 0 && (
              <div>
                <p style={{ fontSize: '10px', fontWeight: 700, color: '#dc2626', textTransform: 'uppercase', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <FeatherIcons.AlertCircle size={11} />Gejala Kerusakan
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {activeHotspot.gejala.map((g, i) => (
                    <li key={i} style={{ fontSize: '12px', color: '#4b5563', display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                      <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#f87171', marginTop: '6px', flexShrink: 0 }} />
                      <span>{g}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {(activeHotspot?.manfaat || activeHotspot?.impacts) && (
              <div>
                <p style={{ fontSize: '10px', fontWeight: 700, color: '#16a34a', textTransform: 'uppercase', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <FeatherIcons.CheckCircle size={11} />Manfaat
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {(activeHotspot.manfaat || activeHotspot.impacts || []).map((m, i) => (
                    <li key={i} style={{ fontSize: '12px', color: '#374151', display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                      <FeatherIcons.Check size={13} style={{ color: '#22c55e', flexShrink: 0, marginTop: '1px' }} />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeHotspot?.beforeAfter && (
              <div style={{ display: 'flex', gap: '8px' }}>
                <div style={{ flex: 1, background: 'rgba(254,226,226,0.4)', padding: '12px', borderRadius: '10px', border: '1px solid rgba(252,165,165,0.3)' }}>
                  <p style={{ fontSize: '11px', fontWeight: 700, color: '#dc2626', textTransform: 'uppercase', marginBottom: '6px' }}>Sebelum</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '3px' }}>
                    {activeHotspot.beforeAfter.before.map((b, i) => (
                      <li key={i} style={{ fontSize: '11px', color: '#4b5563', display: 'flex', alignItems: 'flex-start', gap: '4px' }}>
                        <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#f87171', marginTop: '5px', flexShrink: 0 }} />{b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ flex: 1, background: 'rgba(220,252,231,0.4)', padding: '12px', borderRadius: '10px', border: '1px solid rgba(134,239,172,0.3)' }}>
                  <p style={{ fontSize: '11px', fontWeight: 700, color: '#16a34a', textTransform: 'uppercase', marginBottom: '6px' }}>Sesudah</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '3px' }}>
                    {activeHotspot.beforeAfter.after.map((a, i) => (
                      <li key={i} style={{ fontSize: '11px', color: '#4b5563', display: 'flex', alignItems: 'flex-start', gap: '4px' }}>
                        <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#4ade80', marginTop: '5px', flexShrink: 0 }} />{a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            <div style={{ padding: '12px', background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(12px)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.6)' }}>
              {activeHotspot?.testimonial && (
                <div style={{ marginBottom: '8px' }}>
                  <p style={{ fontSize: '12px', color: '#374151', fontStyle: 'italic', lineHeight: 1.5 }}>&quot;{activeHotspot.testimonial.quote}&quot;</p>
                </div>
              )}
              {!activeHotspot && (
                <div style={{ textAlign: 'center', padding: '4px 0 8px', opacity: 0.7 }}>
                  <FeatherIcons.MousePointer size={20} style={{ color: 'rgba(34,66,151,0.6)', margin: '0 auto 4px', display: 'block' }} />
                  <p style={{ fontSize: '12px', color: '#374151' }}>Klik hotspot untuk detail</p>
                </div>
              )}
              <button style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', padding: '10px', background: '#224297', color: '#fff', fontWeight: 700, fontSize: '13px', borderRadius: '10px', cursor: 'pointer', border: 'none', marginTop: activeHotspot?.testimonial ? '8px' : 0 }}>
                <FeatherIcons.Calendar size={13} />Booking
              </button>
            </div>
          </CardBody>
        </>
      )}
    </Card>
  );
}

// ─── MAIN EXPORT ────────────────────────────────────────────────────────────────
export default function ModernEquipmentDesktop() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);
  const [viewportWidth, setViewportWidth] = useState(1440);
  const activeItem = equipmentData[activeItemIndex] as EquipmentItem;

  useEffect(() => {
    setViewportWidth(window.innerWidth);
    const handler = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', handler, { passive: true });
    return () => window.removeEventListener('resize', handler);
  }, []);

  const handleHotspotClick = useCallback((h: Hotspot) => {
    setActiveHotspot(prev => prev === h ? null : h);
  }, []);

  const handleTabClick = useCallback((idx: number) => {
    setActiveItemIndex(idx);
    setActiveHotspot(null);
  }, []);

  const isDesktop = viewportWidth >= 1024;

  return isDesktop ? (
    <DesktopOverlay
      activeItem={activeItem} activeHotspot={activeHotspot}
      onHotspotClick={handleHotspotClick} onTabClick={handleTabClick}
      activeItemIndex={activeItemIndex}
    />
  ) : (
    <TabletLayout
      activeItem={activeItem} activeHotspot={activeHotspot}
      onHotspotClick={handleHotspotClick} onTabClick={handleTabClick}
      activeItemIndex={activeItemIndex}
    />
  );
}