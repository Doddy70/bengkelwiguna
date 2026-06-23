"use client";

import React, { forwardRef, useImperativeHandle, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface VehicleCanvasProps {
  activeItem: any;
  activeHotspot: any;
  onSelectHotspot: (hotspot: any) => void;
  showBeam?: boolean; // Desktop only - beam connects to side panel
}

export interface VehicleCanvasRef {
  getContainerRect: () => DOMRect | null;
}

export const VehicleCanvas = forwardRef<VehicleCanvasRef, VehicleCanvasProps>(({
  activeItem,
  activeHotspot,
  onSelectHotspot,
  showBeam = true
}, ref) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [hoveredHotspot, setHoveredHotspot] = useState<any>(null);

  // Expose method to get container rect
  useImperativeHandle(ref, () => ({
    getContainerRect: () => containerRef.current?.getBoundingClientRect() || null
  }));

  // Beam state
  const [beamPath, setBeamPath] = useState<string>("");

  // Calculate beam path when hotspot changes
  useEffect(() => {
    if (!activeHotspot || !containerRef.current) {
      setBeamPath("");
      return;
    }

    const updateBeam = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();

      // Get hotspot position as percentage and convert to pixels
      const startX = (parseFloat(activeHotspot.left) / 100) * rect.width;
      const startY = (parseFloat(activeHotspot.top) / 100) * rect.height;

      // End point: right edge of container (where info panel will be)
      const endX = rect.width;
      const endY = rect.height / 2;

      // Create curved path
      const midX = (startX + endX) / 2;
      const d = `M ${startX},${startY} Q ${midX},${startY - 30} ${endX},${endY}`;
      setBeamPath(d);
    };

    updateBeam();
    const observer = new ResizeObserver(updateBeam);
    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [activeHotspot]);

  return (
    <div className="relative flex items-center justify-center min-h-[50vh] sm:min-h-[60vh]">
      <div
        key={activeItem.id}
        ref={containerRef}
        className="relative w-full max-w-[850px] mx-auto z-10"
      >
        {/* Background image */}
        <img
          src={activeItem.image}
          alt={activeItem.name}
          className="w-full h-auto block"
          style={{ display: 'block' }}
        />

        {/* Animated Beam Connector - Desktop only (connects to side panel) */}
        {showBeam && activeHotspot && beamPath && (
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-10"
            style={{ overflow: 'visible', background: 'transparent' }}
          >
            <motion.path
              d={beamPath}
              stroke="#EF4444"
              strokeWidth="2"
              strokeDasharray="10 8"
              strokeLinecap="round"
              fill="none"
              initial={{ strokeDashoffset: 100 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
            />
          </svg>
        )}

        {/* Hotspot Targets */}
        {activeItem.hotspots?.map((hotspot: any, index: number) => {
          const isActive = activeHotspot === hotspot;
          const isHovered = hoveredHotspot === hotspot;

          return (
            <div
              key={index}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{ top: hotspot.top, left: hotspot.left }}
            >
              <button
                onClick={() => onSelectHotspot(isActive ? null : hotspot)}
                onMouseEnter={() => setHoveredHotspot(hotspot)}
                onMouseLeave={() => setHoveredHotspot(null)}
                className="relative flex items-center justify-center w-12 h-12 group cursor-pointer"
                aria-label={hotspot.title}
              >
                {/* Active state */}
                {isActive ? (
                  <>
                    <span className="absolute w-8 h-8 rounded-full border-2 border-[#ffd900]/80 animate-ping" style={{ animationDuration: '2s' }} />
                    <span className="absolute w-10 h-10 rounded-full border border-[#ffd900]/40 animate-ping" style={{ animationDuration: '2.5s' }} />
                    <div className="w-6 h-6 rounded-full border-2 border-white bg-[#ffd900] flex items-center justify-center transition-all duration-300">
                      <div className="w-2 h-2 rounded-full bg-slate-900" />
                    </div>
                  </>
                ) : (
                  <>
                    {isHovered && (
                      <span className="absolute w-8 h-8 rounded-full border-2 border-[#ffd900]/60 animate-ping" style={{ animationDuration: '2s' }} />
                    )}
                    <span className="absolute w-7 h-7 rounded-full border-2 border-blue-500/40 animate-ping" style={{ animationDuration: '3s' }} />
                    <div className="w-4 h-4 rounded-full border-2 border-white bg-blue-600 group-hover:scale-110 group-hover:bg-blue-500 transition-all duration-300" />
                  </>
                )}

                {/* Tooltip */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 5, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 5, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-slate-900/95 dark:bg-slate-800/95 backdrop-blur border border-white/10 text-white px-3 py-2 rounded-xl flex flex-col items-center pointer-events-none z-[100]"
                    >
                      <span className="text-xs font-bold">{hotspot.title}</span>
                      <span className="text-[10px] text-slate-300 mt-0.5">Klik untuk detail</span>
                      <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-slate-900/95 dark:bg-slate-800/95 border-r border-b border-white/10 rotate-45" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
});

VehicleCanvas.displayName = 'VehicleCanvas';
