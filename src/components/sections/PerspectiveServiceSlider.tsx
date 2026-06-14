"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Service } from "@/types/wordpress";
import { Icon } from "@iconify/react";

interface PerspectiveServiceSliderProps {
  servicesData: Service[];
}

const PerspectiveServiceSlider: React.FC<PerspectiveServiceSliderProps> = ({ servicesData = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(1200);
  const [isDragging, setIsDragging] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const dragStartRef = useRef(0);
  const dragDeltaRef = useRef(0);
  const isHoveredRef = useRef(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize, { passive: true });
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 992;

  const getDiff = useCallback((idx: number) => {
    let d = idx - activeIndex;
    const half = Math.floor(servicesData.length / 2);
    if (d > half) d -= servicesData.length;
    if (d < -half) d += servicesData.length;
    return d;
  }, [activeIndex, servicesData.length]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % servicesData.length);
  }, [servicesData.length]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + servicesData.length) % servicesData.length);
  }, [servicesData.length]);

  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      if (!isHoveredRef.current && !isDragging) handleNext();
    }, 5000);
    return () => { if (autoPlayRef.current) clearInterval(autoPlayRef.current); };
  }, [handleNext, isDragging]);

  const handleCardClick = (idx: number, diff: number) => {
    if (diff !== 0) setActiveIndex(idx);
  };

  const handleDragStart = (e: any) => {
    setIsDragging(true);
    dragStartRef.current = e.type.startsWith("touch") ? e.touches[0].clientX : e.clientX;
  };

  const handleDragMove = (e: any) => {
    if (!isDragging) return;
    const clientX = e.type.startsWith("touch") ? e.touches[0].clientX : e.clientX;
    dragDeltaRef.current = clientX - dragStartRef.current;
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragDeltaRef.current < -60) handleNext();
    else if (dragDeltaRef.current > 60) handlePrev();
  };

  const getCardStyle = (index: number) => {
    const diff = getDiff(index);
    const absDiff = Math.abs(diff);
    const maxVisibleDiff = isMobile ? 1 : (isTablet ? 2 : 3);

    if (absDiff > maxVisibleDiff + 1) {
      return { opacity: 0, pointerEvents: "none" as const, transform: "translateX(0) translateZ(-400px) scale(0)" };
    }

    // Adjusted spread spacing - balanced spacing between cards
    const spreadSpacing = isMobile ? 240 : isTablet ? 300 : 370;

    let tx = diff * spreadSpacing;
    if (absDiff > 1) {
      tx = Math.sign(diff) * (spreadSpacing + (absDiff - 1) * (spreadSpacing * 0.8));
    }

    const tz = absDiff === 0 ? 0 : absDiff * (isMobile ? 100 : 180);
    const ry = diff * (isMobile ? -8 : -18);
    const scale = 1;
    const ty = 0;
    const zIndex = absDiff === 0 ? 1 : absDiff + 10;

    return {
      transform: `translateX(${tx}px) translateY(${ty}px) translateZ(${tz}px) rotateY(${ry}deg) scale(${scale})`,
      zIndex: zIndex,
      opacity: 1,
      filter: absDiff === 0 ? 'none' : (isMobile ? 'brightness(0.5)' : 'brightness(0.7)'),
      cursor: diff === 0 ? "default" : "pointer",
      transition: isDragging ? "none" : "transform 0.8s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.8s ease, filter 0.8s ease"
    };
  };

  return (
    <section id="services-slider-section" className="relative overflow-hidden bg-white" onMouseEnter={() => isHoveredRef.current = true} onMouseLeave={() => isHoveredRef.current = false}>

      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/10 to-white/50" />
      </div>

      <div className="h5-banner-area relative z-10">
        <div className="container mx-auto">

          {/* Title Section */}
          <div className="sec-heading-wrap mb-6 sm:mb-16 text-center flex flex-col items-center justify-center px-4">
            {/* Badge with glassmorphism effect */}
            <div className="relative mb-4 sm:mb-8 group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#224297]/20 via-[#ffd900]/10 to-[#224297]/20 blur-2xl rounded-full scale-110" />
              <div className="relative bg-gradient-to-r from-white/80 via-white/95 to-white/80 backdrop-blur-xl px-6 sm:px-10 py-3 sm:py-4 rounded-full border border-white/50 shadow-[0_8px_32px_rgba(34,66,151,0.2)] flex items-center gap-2 sm:gap-3">
                <span className="text-[#ffd900] text-sm sm:text-lg drop-shadow-md animate-pulse">✨</span>
                <span className="text-[#224297] text-[11px] sm:text-sm md:text-base font-bold tracking-wide sm:tracking-widest uppercase leading-snug">
                  &ldquo;NO DRAMA, NO BONGKAR-BONGKAR, NO TEBAK-TEBEK & NO TIPU-TIPU&rdquo;
                </span>
                <span className="text-[#ffd900] text-sm sm:text-lg drop-shadow-md animate-pulse">✨</span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="sec-title mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black italic tracking-tight leading-[1.1]">
              <span className="block text-gray-800">
                di <span className="text-[#224297]">Bengkel Wiguna</span>
              </span>
              {/* Decorative underline */}
              <span className="block relative mt-2">
                <span className="absolute left-1/2 -translate-x-1/2 w-32 sm:w-48 h-1.5 bg-gradient-to-r from-transparent via-[#ffd900] to-transparent rounded-full"></span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-gray-500 text-xs sm:text-sm md:text-base font-medium tracking-wide max-w-[320px] sm:max-w-none mx-auto leading-relaxed">
              One Stop Service • Ganti Ban • Oli • AC • Kaki-Kaki • Spooring
            </p>
          </div>

          <div
            className="perspective-slider-container"
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchMove={handleDragMove}
            onTouchEnd={handleDragEnd}
          >


            <div className="perspective-slider-viewport !h-[320px] sm:!h-[420px] md:!h-[600px] flex justify-center items-center relative w-full" style={{ perspective: '1600px' }}>
              <div className="perspective-slider-track w-full h-full flex justify-center items-center relative mt-[-20px] md:mt-0" style={{ transformStyle: 'preserve-3d' }}>

                {servicesData.map((service, index) => {
                  const diff = getDiff(index);
                  const isCenter = diff === 0;
                  const isVisible = isMobile ? Math.abs(diff) <= 1 : (isTablet ? Math.abs(diff) <= 2 : Math.abs(diff) <= 3);

                  const featuredImage = service.featured_img || service._embedded?.['wp:featuredmedia']?.[0]?.source_url || "/images/service/service-oli.svg";
                  const title = typeof service.title === 'string' ? service.title : service.title?.rendered || 'Layanan Bengkel Wiguna';

                  return (
                    <div
                      key={service.id}
                      className={`absolute w-[200px] sm:w-[240px] md:w-[320px] h-[280px] sm:h-[360px] md:h-[480px] will-change-transform ${isVisible ? "pointer-events-auto" : "pointer-events-none"}`}
                      style={{ ...getCardStyle(index), transformStyle: 'preserve-3d' }}
                      onClick={() => handleCardClick(index, diff)}
                    >
                      <Link
                        href={`/services/${service.slug}`}
                        className="relative w-full h-full rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden block shadow-[0_20px_50px_rgba(0,0,0,0.3)] bg-gray-900 group"
                        onClick={(e) => {
                            if (!isCenter) {
                                e.preventDefault();
                            }
                        }}
                      >
                          <Image
                              src={featuredImage}
                              alt={title}
                              fill
                              sizes="(max-width: 768px) 50vw, 400px"
                              priority={isCenter}
                              fetchPriority={isCenter ? "high" : "low"}
                              loading={isCenter ? "eager" : "lazy"}
                              quality={isCenter ? 90 : 75}
                              style={{ objectFit: "cover" }}
                              className="transition-transform duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)] opacity-95 group-hover:opacity-100 group-hover:scale-105"
                          />

                          {/* GRADIENT OVERLAY FOR TEXT READABILITY */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-xl sm:rounded-2xl md:rounded-3xl" />

                          {/* Inner border for curved effect */}
                          <div className="absolute inset-0 border border-white/10 rounded-xl sm:rounded-2xl md:rounded-3xl pointer-events-none" />

                          {/* CONTENT AT BOTTOM OF CARD */}
                          <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 md:p-8 flex flex-col justify-end">
                              <p className="text-[#ffd900] font-black text-xs sm:text-sm md:text-xl mb-0.5 md:mb-1 tracking-widest drop-shadow-md">
                                  #{String(index + 1).padStart(2, '0')}
                              </p>
                              <h4 className="text-white font-bold text-sm sm:text-lg md:text-2xl leading-tight drop-shadow-md mb-1 sm:mb-2 md:mb-4">
                                  {title}
                              </h4>

                              {/* BUTTON ONLY VISIBLE/OPACITY WHEN CENTER */}
                              <div className={`transition-all duration-500 overflow-hidden ${isCenter ? 'max-h-14 sm:max-h-16 opacity-100' : 'max-h-0 opacity-0'}`}>
                                  <div className="inline-flex items-center justify-center w-full py-2 sm:py-2.5 md:py-3.5 rounded-full bg-[#224297] text-white text-[10px] sm:text-xs md:text-sm font-bold shadow-lg border border-[#224297]/50 hover:bg-[#ffd900] hover:text-[#1a1a2e] hover:border-[#ffd900] transition-colors group/btn">
                                      Lihat Detail <Icon icon="solar:arrow-right-linear" className="ml-1 sm:ml-1.5 text-sm md:text-lg transition-transform group-hover/btn:translate-x-1" />
                                  </div>
                              </div>
                          </div>
                      </Link>
                    </div>
                  );
                })}
              </div>

              {/* Dot Navigation */}
              <div className="absolute -bottom-4 md:-bottom-4 left-0 right-0 flex justify-center gap-2 z-50">
                {servicesData.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === activeIndex
                        ? 'bg-[#224297] w-6'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerspectiveServiceSlider;
