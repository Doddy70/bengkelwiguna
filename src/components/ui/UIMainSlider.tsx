"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export type UIMainSlide = {
  id: string | number;
  src: string;
  title: string;
  subtitle: string;
  link: string;
};

interface UIMainSliderProps {
  slides: UIMainSlide[];
  onSlideClick?: (index: number) => void;
}

export default function UIMainSlider({ slides, onSlideClick }: UIMainSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [SplideComponent, setSplideComponent] = useState<any>(null);
  const [SplideSlideComponent, setSplideSlideComponent] = useState<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadSplide = async () => {
      try {
        await import("@splidejs/splide/dist/css/splide.min.css");
        const { Splide, SplideSlide } = await import("@splidejs/react-splide");
        setSplideComponent(() => Splide);
        setSplideSlideComponent(() => SplideSlide);
        setIsLoaded(true);
      } catch (error) {
        console.warn('Splide loading failed:', error);
      }
    };
    loadSplide();
  }, []);

  if (!slides || slides.length === 0) return null;


  const Splide = SplideComponent;
  const Slide = SplideSlideComponent;

  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 mb-6 w-full">
      {/* Left Column: Image Slider */}
      <div className="lg:col-span-2 relative h-[400px] lg:h-[450px] rounded-2xl overflow-hidden shadow-2xl bg-[#224297]">
        {!isLoaded ? (
          <div className="h-full w-full animate-pulse bg-white/10"></div>
        ) : (
          <Splide
            aria-label="Promo Slider"
            options={{
              type: "loop",
              height: "450px",
              arrows: false,
              pagination: false,
              autoplay: true,
              interval: 5000,
              speed: 800,
              breakpoints: {
                1024: { height: "400px" },
              },
            }}
            onMoved={(splide: any, newIndex: number) => setCurrentIndex(newIndex)}
            className="h-full w-full"
          >
            {slides.map((slide, idx) => (
              <Slide key={slide.id || idx} className="h-full w-full relative">
                <button 
                  onClick={() => onSlideClick && onSlideClick(idx)}
                  className={`w-full h-full text-left relative ${onSlideClick ? 'cursor-pointer' : 'cursor-default'}`}
                >
                  <Image
                    src={slide.src}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority={idx === 0}
                  />
                  
                  {/* Dark Gradient Overlay for Text Readability at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-0"></div>

                  {/* Slide Content: Bottom Left */}
                  <div className="absolute bottom-0 left-0 p-8 z-10 w-full flex justify-between items-end">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 drop-shadow-md">
                        {slide.title}
                      </h3>
                      <p className="text-gray-300 text-sm font-medium drop-shadow-md">
                        Promo Spesial Bengkel Wiguna
                      </p>
                    </div>
                  </div>
                </button>
              </Slide>
            ))}
          </Splide>
        )}

        {/* Counter Pill: Bottom Right (Outside Splide so it's always visible) */}
        <div className="absolute bottom-8 right-8 z-20 bg-black/70 px-4 py-2 rounded-full flex items-center gap-1">
          <span className="text-white text-lg font-medium">{currentIndex + 1}</span>
          <span className="text-gray-400 text-sm">/ {slides.length}</span>
        </div>
      </div>

      {/* Right Column: CTA WhatsApp Card (Tanya Monna) */}
      <div className="w-full bg-white relative p-8 flex flex-col items-center justify-center min-h-[300px] rounded-2xl shadow-xl overflow-hidden">
        
        {/* Background Glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-60"></div>
        </div>

        {/* Icon / Avatar Area */}
        <div className="relative mb-6 z-10 group">
          {/* Outer Headset Icon (Blue) */}
          <div className="relative w-28 h-28 flex items-center justify-center rounded-full border-4 border-[#224297] bg-white shadow-sm transition-transform duration-500 group-hover:scale-105">
            {/* Inner Chat Bubble (Yellow) */}
            <div className="w-20 h-20 bg-[#ffd900] rounded-full flex items-center justify-center relative">
              {/* WB Text */}
              <span className="text-[#224297] font-black text-2xl italic tracking-tighter">WB</span>
              {/* Chat Bubble Tail */}
              <div className="absolute -bottom-1 -left-1 w-6 h-6 bg-[#ffd900] rounded-bl-xl rotate-45 transform skew-x-12 z-[-1]"></div>
            </div>
            
            {/* Headset Accents */}
            <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-3 h-10 bg-[#224297] rounded-full"></div>
            <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-3 h-10 bg-[#224297] rounded-full"></div>
            {/* Mic boom */}
            <div className="absolute bottom-4 left-4 w-6 h-2.5 bg-[#224297] rounded-full rotate-45"></div>
          </div>
        </div>

        {/* Text Area */}
        <div className="text-center mb-8 z-10">
          <h3 className="text-3xl font-bold text-gray-700 mb-2">Tanya Monna</h3>
          <p className="text-gray-500 text-lg">
            <strong className="text-gray-700 font-bold">Customer Support</strong> Bengkel Wiguna
          </p>
        </div>

        {/* CTA Button */}
        <Link 
          href="https://wa.me/6281717773888?text=halo%20mon,%20saya%20ingin%20tanya%20seputar%20servis%20mobil%20saya%20di%20bengkel%20wiguna.%20(web)"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full relative z-10 bg-[#224297] hover:bg-[#1a3567] text-white text-xl font-bold py-4 rounded-md text-center transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1"
        >
          Chat Monna
        </Link>
      </div>
    </div>
  );
}
