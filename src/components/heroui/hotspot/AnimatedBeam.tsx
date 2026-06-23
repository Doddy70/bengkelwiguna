"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface AnimatedBeamProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
  dotPosition: { x: number; y: number }; // Percentage 0-100
  panelX: number; // Pixels from left edge of container to left edge of panel
  panelY: number; // Pixels from top edge of container to panel center
}

export function AnimatedBeam({
  containerRef,
  dotPosition,
  panelX,
  panelY
}: AnimatedBeamProps) {
  const [pathD, setPathD] = useState("");
  const [svgDims, setSvgDims] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const updatePath = () => {
      if (!containerRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      setSvgDims({ w: containerRect.width, h: containerRect.height });

      const startX = (dotPosition.x / 100) * containerRect.width;
      const startY = (dotPosition.y / 100) * containerRect.height;
      const endX = panelX;
      const endY = panelY;

      // Curved path towards the panel
      const midX = (startX + endX) / 2;
      const midY = (startY + endY) / 2;
      const d = `M ${startX},${startY} Q ${midX},${midY - 50} ${endX},${endY}`;
      setPathD(d);
    };

    if (!containerRef.current) return;
    
    updatePath();
    const observer = new ResizeObserver(() => updatePath());
    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [containerRef, dotPosition, panelX, panelY]);

  if (!pathD) return null;

  return (
    <svg
      fill="none"
      width={Math.max(svgDims.w, panelX) + 100}
      height={Math.max(svgDims.h, panelY) + 100}
      className="absolute left-0 top-0 pointer-events-none z-30"
      style={{ overflow: 'visible' }}
    >
      <defs>
        <filter id="beam-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <linearGradient id="beam-gradient" gradientUnits="userSpaceOnUse" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop stopColor="#3b82f6" stopOpacity="0" />
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="1" />
          <stop offset="50%" stopColor="#60a5fa" stopOpacity="1" />
          <stop offset="100%" stopColor="#93c5fd" stopOpacity="0" />
        </linearGradient>
      </defs>

      <path
        d={pathD}
        stroke="rgba(59, 130, 246, 0.2)"
        strokeWidth={1.5}
        strokeDasharray="4 4"
        strokeLinecap="round"
      />

      <motion.path
        d={pathD}
        stroke="url(#beam-gradient)"
        strokeWidth={2}
        strokeDasharray="10 8"
        strokeLinecap="round"
        filter="url(#beam-glow)"
        initial={{ strokeDashoffset: 100 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      />
    </svg>
  );
}
