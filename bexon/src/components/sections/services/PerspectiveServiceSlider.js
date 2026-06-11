"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { services as staticServices } from "@/data/services";
import { getWhatsAppLink } from "@/lib/constants";

const PerspectiveServiceSlider = ({ servicesData = [] }) => {
  // Map WP data if available, otherwise use static data
  const activeServices = servicesData && servicesData.length > 0 
    ? servicesData.map((s, index) => ({
        id: s.id || index + 1,
        slug: s.slug,
        title: s.title,
        icon: s.icon || "fa-solid fa-wrench", // Fallback icon
        image: s.featured_img || staticServices[index % staticServices.length]?.image || "/images/service/service-oli.jpg",
      }))
    : staticServices;

  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(1200); // Default to desktop width
  const [isDragging, setIsDragging] = useState(false);
  const [themeSettings, setThemeSettings] = useState(null);
  const autoPlayRef = useRef(null);
  const dragStartRef = useRef(0);
  const dragDeltaRef = useRef(0);
  const isHoveredRef = useRef(false);

  // Responsive state logic with Debounce for Performance
  useEffect(() => {
    // Fetch theme settings from backend
    fetch('/api/homepage-settings')
      .then(res => res.json())
      .then(data => {
        if (data && data.hero && data.hero.theme) {
          setThemeSettings(data.hero.theme);
        }
      })
      .catch(err => console.error("Error fetching theme settings:", err));

    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      
      let timeoutId;
      const handleResize = () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          setWindowWidth(window.innerWidth);
        }, 150); // Debounce 150ms
      };
      
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
        clearTimeout(timeoutId);
      };
    }
  }, []);

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 992;

  // Calculate circular differences for infinite loop navigation
  const getDiff = useCallback((idx) => {
    let d = idx - activeIndex;
    const half = Math.floor(activeServices.length / 2);
    if (d > half) d -= activeServices.length;
    if (d < -half) d += activeServices.length;
    return d;
  }, [activeIndex, activeServices.length]);

  // Navigation handlers
  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % activeServices.length);
  }, [activeServices.length]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + activeServices.length) % activeServices.length);
  }, [activeServices.length]);

  // Autoplay functionality
  const startAutoplay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      if (!isHoveredRef.current && !isDragging) {
        handleNext();
      }
    }, 5000);
  }, [handleNext, isDragging]);

  const stopAutoplay = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [startAutoplay, stopAutoplay]);

  // Hover detection
  const handleMouseEnter = () => {
    isHoveredRef.current = true;
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;
  };

  // Click handler for card navigation
  const handleCardClick = (idx, diff) => {
    if (diff === 0) {
      // Active card: direct user to the service detail page
      return;
    }
    // Inactive card: make it the active centered card
    setActiveIndex(idx);
  };

  // Drag / Swipe handlers (Mouse & Touch)
  const handleDragStart = (e) => {
    setIsDragging(true);
    const clientX = e.type.startsWith("touch") ? e.touches[0].clientX : e.clientX;
    dragStartRef.current = clientX;
    dragDeltaRef.current = 0;
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    const clientX = e.type.startsWith("touch") ? e.touches[0].clientX : e.clientX;
    dragDeltaRef.current = clientX - dragStartRef.current;
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const threshold = 60; // drag threshold in pixels to trigger slide change
    if (dragDeltaRef.current < -threshold) {
      handleNext();
    } else if (dragDeltaRef.current > threshold) {
      handlePrev();
    }
  };

  // Calculate dynamic 3D styles for curve perspective
  const getCardStyle = (index) => {
    const diff = getDiff(index);
    const absDiff = Math.abs(diff);

    // Hide cards that are far away to prevent cluttering the viewport
    // On mobile, only show immediate neighbors (absDiff <= 1)
    // On tablet, show up to 2 neighbors (absDiff <= 2)
    // On desktop, show up to 3 neighbors (absDiff <= 3)
    const maxVisibleDiff = isMobile ? 1 : (isTablet ? 2 : 3);
    
    if (absDiff > maxVisibleDiff) {
      return { 
        opacity: 0, 
        pointerEvents: "none", 
        transform: "translateX(0) translateZ(-400px) scale(0)",
        transition: "transform 0.5s ease, opacity 0.5s ease"
      };
    }

    // Perspective parameters
    let xOffset = 220; // horizontal spacing between cards
    let yOffset = -8;  // upward vertical shift for curve (negative curves up)
    let yRotation = -24; // degree of 3D rotation facing inwards
    
    // Base horizontal spread between cards
    const spreadSpacing = windowWidth < 768 ? 100 : windowWidth < 1024 ? 150 : 220;
    
    // Non-linear spreading
    let tx = diff * spreadSpacing;
    if (absDiff > 1) {
      tx = Math.sign(diff) * (spreadSpacing + (absDiff - 1) * (spreadSpacing * 0.85));
    }

    // Depth (Z-axis) - push side cards back
    const baseTz = -70; // How far back each step goes
    let tz = absDiff === 0 ? 80 : absDiff * baseTz;
    
    // Scale - center card is larger
    const scale = absDiff === 0 ? 1.05 : Math.max(0.75, 1 - absDiff * 0.1);

    const ty = absDiff * absDiff * yOffset; 
    const ry = diff * yRotation;

    return {
      transform: `translateX(${tx}px) translateY(${ty}px) translateZ(${tz}px) rotateY(${ry}deg) scale(${scale})`,
      zIndex: 10 - absDiff,
      opacity: 1 - absDiff * 0.12,
      filter: `brightness(${1 - absDiff * 0.05}) blur(${absDiff > 0 ? absDiff * 3 : 0}px)`,
      transition: isDragging ? "none" : "transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.6s ease, filter 0.6s ease",
      cursor: diff === 0 ? "default" : "pointer"
    };
  };

  // OPTIMIZATION: Use WebP version for smaller file size (185KB vs 337KB)
  const heroBgImage = themeSettings?.bgImage || '/images/hero/bg_diagnostics.webp';

  // OPTIMIZATION: Preload hero background image for LCP
  useEffect(() => {
    if (typeof document === 'undefined') return;

    // Check if preload link already exists
    const existingLink = document.querySelector(
      'link[href*="bg_diagnostics"]'
    );
    if (existingLink) return;

    // Create preload link for hero background
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.as = 'image';
    preloadLink.href = heroBgImage;
    document.head.appendChild(preloadLink);
  }, [heroBgImage]);

  return (
    <section 
      id="services-slider-section" 
      className="h5-banner-section section-gap-x"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Eye-Catching Image Background with Dark Overlay */}
      <div 
        className="perspective-hero-bg"
        style={{ backgroundImage: `url('${heroBgImage}')` }}
      >
        <div 
          className="perspective-image-overlay"
          style={themeSettings?.overlayOpacity ? { background: `rgba(5, 11, 20, ${themeSettings.overlayOpacity})` } : {}}
        ></div>
      </div>

      <div className="h5-banner-area">
        <div className="container">
          {/* Section Header */}
          <div className="row">
            <div className="col-12">
              <div className="sec-heading-wrap text-center" style={{ marginBottom: "40px" }}>
                {themeSettings?.title ? (
                  <h2 
                    className="sec-title text-center" 
                    style={{ color: "#ffffff", display: "inline-block", marginBottom: 0 }} 
                    dangerouslySetInnerHTML={{ __html: themeSettings.title }} 
                  />
                ) : (
                  <h2 className="sec-title text-center" style={{ color: "#ffffff", display: "inline-block", marginBottom: 0 }}>
                    Selamat Datang Di <span style={{ color: "#ffd900" }}>Bengkel Wiguna</span>
                  </h2>
                )}
              </div>
            </div>
          </div>

          {/* 3D Perspective Slider Container */}
          <div className="row">
            <div className="col-12">
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
                  {activeServices.map((service, index) => {
                    const diff = getDiff(index);
                    const isCenter = diff === 0;
                    const isVisible = isMobile ? Math.abs(diff) <= 1 : (isTablet ? Math.abs(diff) <= 2 : Math.abs(diff) <= 3);

                    // Formatted index number (e.g. #01, #02)
                    const formattedNum = `#${String(service.id).padStart(2, "0")}`;

                    return (
                      <div
                        key={service.id}
                        className={`perspective-card-wrapper ${isCenter ? "active-card" : ""} ${isVisible ? "perspective-card-wrapper-visible" : ""}`}
                        style={getCardStyle(index)}
                        onClick={() => handleCardClick(index, diff)}
                      >
                        {/* The Main 3D Card (Glass Liquid style) */}
                        <div className="perspective-card">
                          <div className="perspective-card-image">
                            {/* If center card, link to detail page */}
                            {isCenter ? (
                              <Link href={`/services/${service.slug}`}>
                                <Image
                                  src={service.image}
                                  alt={service.title}
                                  fill
                                  priority={service.id <= 3}
                                  sizes="(max-width: 768px) 150px, 250px"
                                  style={{ objectFit: "cover" }}
                                />
                              </Link>
                            ) : (
                              <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                sizes="(max-width: 768px) 150px, 250px"
                                style={{ objectFit: "cover" }}
                              />
                            )}
                          </div>

                          {/* Card Content below the image */}
                          <div className="perspective-card-content">
                            <div className="perspective-card-title-area">
                              <div className="perspective-card-icon">
                                <i className={service.icon}></i>
                              </div>
                              <h4 className="perspective-card-title-internal">
                                {service.title}
                              </h4>
                            </div>
                            
                            <div className="perspective-card-action">
                              {isCenter ? (
                                <Link href={`/services/${service.slug}`} className="perspective-card-btn">
                                  Lihat Detail <i className="fa-solid fa-arrow-right"></i>
                                </Link>
                              ) : (
                                <span className="perspective-card-btn">
                                  Lihat Detail <i className="fa-solid fa-arrow-right"></i>
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Navigation Controls */}
                <div className="perspective-slider-controls">
                  <button 
                    className="perspective-control-btn btn-prev" 
                    onClick={handlePrev}
                    aria-label="Layanan sebelumnya"
                  >
                    <i className="fa-solid fa-chevron-left"></i>
                  </button>
                  <button 
                    className="perspective-control-btn btn-next" 
                    onClick={handleNext}
                    aria-label="Layanan berikutnya"
                  >
                    <i className="fa-solid fa-chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default PerspectiveServiceSlider;
