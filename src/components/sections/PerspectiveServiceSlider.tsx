/**
 * PerspectiveServiceSlider — Original Bexon Home-05 Experience
 * Ported for high fidelity with modern Next.js 15+ patterns.
 *
 * ✅ PERFORMANCE OPTIMIZATION:
 * - LCP optimization with fetchPriority="high"
 * - Explicit image dimensions for CLS prevention
 * - Lazy loading for non-active images
 */

"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { Service } from "@/types/wordpress";

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

    if (absDiff > maxVisibleDiff) {
      return { opacity: 0, pointerEvents: "none" as const, transform: "translateX(0) translateZ(-400px) scale(0)" };
    }

    const spreadSpacing = windowWidth < 768 ? 100 : windowWidth < 1024 ? 150 : 220;
    let tx = diff * spreadSpacing;
    if (absDiff > 1) tx = Math.sign(diff) * (spreadSpacing + (absDiff - 1) * (spreadSpacing * 0.85));

    const tz = absDiff === 0 ? 80 : absDiff * -70;
    const scale = absDiff === 0 ? 1.05 : Math.max(0.75, 1 - absDiff * 0.1);
    const ty = absDiff * absDiff * -8;
    const ry = diff * -24;

    return {
      transform: `translateX(${tx}px) translateY(${ty}px) translateZ(${tz}px) rotateY(${ry}deg) scale(${scale})`,
      zIndex: 10 - absDiff,
      opacity: 1 - absDiff * 0.15,
      filter: `brightness(${1 - absDiff * 0.1}) blur(${absDiff > 0 ? absDiff * 2 : 0}px)`,
      cursor: diff === 0 ? "default" : "pointer",
      transition: isDragging ? "none" : "transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.6s ease, filter 0.6s ease"
    };
  };

  // ✅ Get responsive sizes for images
  const getImageSizes = (diff: number) => {
    if (diff === 0) {
      return "(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 600px";
    }
    return "(max-width: 768px) 50vw, 200px";
  };

  return (
    <section id="services-slider-section" className="relative overflow-hidden" onMouseEnter={() => isHoveredRef.current = true} onMouseLeave={() => isHoveredRef.current = false}>
      {/* Hero Background Image with blur and opacity - Optimized with WebP variants */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source media="(max-width: 767px)" srcSet="/images/hero-mobile.webp" type="image/webp" />
          <source media="(max-width: 1199px)" srcSet="/images/hero-tablet.webp" type="image/webp" />
          <source srcSet="/images/hero-desktop.webp" type="image/webp" />
          <img 
            src="/images/hero-main.jpg" 
            alt="Bengkel Wiguna - Service & Perawatan Kendaraan Profesional"
            className="w-full h-full object-cover object-[center_top] blur-sm opacity-40"
            loading="eager"
            {...({ fetchPriority: "high" } as any)}
          />
        </picture>
        {/* Subtle light overlay instead of dark */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/10 to-white/50" />
      </div>

      <div className="h5-banner-area relative z-10">
        <div className="container mx-auto">
              <div className="sec-heading-wrap mb-10 sm:mb-16 text-center flex flex-col items-center justify-center px-4">

                {/* Tagline - Pill Badge Style */}
                <div className="relative mb-6 sm:mb-8">
                  <div className="absolute inset-0 bg-brand-blue/20 blur-xl rounded-full scale-110"></div>
                  <h2
                    className="relative text-brand-blue text-xs sm:text-sm md:text-base lg:text-lg font-semibold tracking-widest uppercase bg-white/90 backdrop-blur-md px-5 sm:px-7 py-2.5 sm:py-3 rounded-full border-2 border-brand-blue/30 shadow-lg shadow-brand-blue/20"
                    suppressHydrationWarning
                  >
                    <span className="mr-2">✨</span>
                    &quot;No Drama, No Bongkar-Bongkar, No Tebak-Tebek &amp; No Tipu-Tipu&quot;
                    <span className="ml-2">✨</span>
                  </h2>
                </div>

                {/* Main Title */}
                <h1 className="sec-title text-gray-900 mb-6 sm:mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black italic tracking-tight leading-[1.1]">
                  <span className="block">
                    di <span className="text-brand-blue relative">
                      Bengkel Wiguna
                      <span className="absolute -bottom-1 left-0 w-full h-2 sm:h-3 bg-brand-blue/20 rounded-full"></span>
                    </span>
                  </span>
                </h1>

                {/* Subtitle / CTA hint */}
                <p className="text-gray-500 text-xs sm:text-sm md:text-base mt-4 sm:mt-6 font-medium tracking-wide">
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
            <div className="perspective-slider-viewport">
              <div className="perspective-slider-track">
                {servicesData.map((service, index) => {
                  const diff = getDiff(index);
                  const isCenter = diff === 0;
                  const isVisible = isMobile ? Math.abs(diff) <= 1 : (isTablet ? Math.abs(diff) <= 2 : Math.abs(diff) <= 3);

                  const featuredImage = service.featured_img || service._embedded?.['wp:featuredmedia']?.[0]?.source_url || "/images/service/service-oli.svg";
                  const title = typeof service.title === 'string' ? service.title : service.title?.rendered || 'Layanan Bengkel Wiguna';

                  return (
                    <div
                      key={service.id}
                      className={`perspective-card-wrapper ${isCenter ? "active-card" : ""} ${isVisible ? "perspective-card-wrapper-visible" : ""}`}
                      style={getCardStyle(index)}
                      onClick={() => handleCardClick(index, diff)}
                    >
                      <div className="perspective-card bg-white/95 backdrop-blur-md">
                        {/* ✅ CLS PREVENTION: Explicit aspect ratio container */}
                        <div className="perspective-card-image bg-gray-100 relative w-full" style={{ aspectRatio: '16/10' }}>
                          <Image
                            src={featuredImage}
                            alt={title}
                            fill
                            sizes={getImageSizes(diff)}
                            // ✅ LCP OPTIMIZATION: Priority for center card
                            priority={isCenter}
                            fetchPriority={isCenter ? "high" : "low"}
                            loading={isCenter ? "eager" : "lazy"}
                            quality={isCenter ? 85 : 75}
                            style={{ objectFit: "cover" }}
                            className="group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>

                        <div className="perspective-card-content">
                          <div className="perspective-card-title-area">
                            <h4 className="perspective-card-title-internal" suppressHydrationWarning>
                              {title}
                            </h4>
                          </div>

                          <div className="perspective-card-action">
                            <Link
                                href={`/services/${service.slug}`}
                                className="perspective-card-btn text-white"
                                onClick={(e) => !isCenter && e.preventDefault()}
                            >
                              Lihat Detail <Icon icon="solar:arrow-right-linear" className="ml-2" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="perspective-slider-controls">
                <button className="perspective-control-btn btn-prev border border-gray-200 shadow-sm" onClick={handlePrev} aria-label="Prev">
                  <Icon icon="solar:alt-arrow-left-linear" className="text-brand-blue" />
                </button>
                <button className="perspective-control-btn btn-next border border-gray-200 shadow-sm" onClick={handleNext} aria-label="Next">
                  <Icon icon="solar:alt-arrow-right-linear" className="text-brand-blue" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerspectiveServiceSlider;