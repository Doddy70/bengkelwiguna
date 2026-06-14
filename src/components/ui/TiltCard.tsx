"use client";

import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  options?: any;
}

export default function TiltCard({ children, className = "", options = {} }: TiltCardProps) {
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!tiltRef.current) return;

    const defaultOptions = {
      max: 15,
      speed: 400,
      glare: true,
      "max-glare": 0.2,
      perspective: 1000,
      scale: 1.02,
    };

    VanillaTilt.init(tiltRef.current, { ...defaultOptions, ...options });

    return () => {
      if (tiltRef.current && (tiltRef.current as any).vanillaTilt) {
        (tiltRef.current as any).vanillaTilt.destroy();
      }
    };
  }, [options]);

  return (
    <div ref={tiltRef} className={className} style={{ transformStyle: "preserve-3d" }}>
      {children}
    </div>
  );
}
