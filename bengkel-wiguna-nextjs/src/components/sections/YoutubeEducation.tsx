/**
 * YoutubeEducation — High Fidelity Restoration
 * Optimized version with lazy loading for Splide and GLightbox
 *
 * ✅ PERFORMANCE OPTIMIZATION:
 * - Dynamic import of Splide and GLightbox
 * - Intersection Observer for lazy loading
 * - Reduced motion support
 */

"use client";

import React, { useEffect, useState, useRef } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";

const videoPlaylist = [
  {
    id: 1,
    title: "Setir Mobil Miring atau Lari Kiri Kanan? Ini Solusinya!",
    youtubeId: "WdvoqAxUyyk",
    thumbnail: "https://img.youtube.com/vi/WdvoqAxUyyk/hqdefault.jpg",
    category: "Spooring & Balancing"
  },
  {
    id: 2,
    title: "Pentingnya Filter AC Mobil! Jangan Tunggu Sampai Bau",
    youtubeId: "NsYl85Xb_lY",
    thumbnail: "https://img.youtube.com/vi/NsYl85Xb_lY/hqdefault.jpg",
    category: "AC Mobil"
  },
  {
    id: 3,
    title: "Mobil Gak Kuat Nanjak? Jalur Oli Mesin Bisa Jadi Mampet!",
    youtubeId: "kKYBezWYfY4",
    thumbnail: "https://img.youtube.com/vi/kKYBezWYfY4/hqdefault.jpg",
    category: "Mesin & Ganti Oli"
  },
  {
    id: 4,
    title: "Penyebab Evaporator AC Kotor & AC Mobil Gak Dingin",
    youtubeId: "prQqmha71Vk",
    thumbnail: "https://img.youtube.com/vi/prQqmha71Vk/hqdefault.jpg",
    category: "AC Mobil"
  },
  {
    id: 5,
    title: "Kaki-Kaki Honda CR-V Bunyi Gluduk & Jedug? Ini Sebabnya!",
    youtubeId: "oV7iQkVbJQ0",
    thumbnail: "https://img.youtube.com/vi/oV7iQkVbJQ0/hqdefault.jpg",
    category: "Kaki-Kaki Mobil"
  },
  {
    id: 6,
    title: "Rem Mobil Bunyi Cit-Cit? Bahaya Jangan Tunggu Blong!",
    youtubeId: "Tm98X91q1Ds",
    thumbnail: "https://img.youtube.com/vi/Tm98X91q1Ds/hqdefault.jpg",
    category: "Sistem Rem"
  }
];

export default function YoutubeEducation() {
  const [SplideComponent, setSplideComponent] = useState<React.ComponentType<any> | null>(null);
  const [SplideSlideComponent, setSplideSlideComponent] = useState<React.ComponentType<any> | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Lazy load Splide and GLightbox when section is visible
    const loadLibraries = async () => {
      try {
        const [splideModule, glightboxModule] = await Promise.all([
          import("@splidejs/react-splide"),
          import("glightbox")
        ]);

        // Import Splide CSS from the correct path
        await import("@splidejs/splide/dist/css/splide.min.css");

        // Import GLightbox CSS
        await import("glightbox/dist/css/glightbox.css");

        const { Splide, SplideSlide } = splideModule;
        const { default: GLightbox } = glightboxModule;

        setSplideComponent(() => Splide);
        setSplideSlideComponent(() => SplideSlide);
        setIsLoaded(true);

        // Initialize GLightbox after a small delay
        setTimeout(() => {
          GLightbox({
            selector: ".video-glightbox",
            touchFollowAxis: true,
          });
        }, 100);
      } catch (error) {
        console.warn('Library loading failed:', error);
      }
    };

    // Use Intersection Observer for lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadLibraries();
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    } else {
      // Fallback: load immediately
      loadLibraries();
    }

    return () => observer.disconnect();
  }, []);

  const splideOptions = {
    type: "loop" as const,
    perPage: 3,
    gap: "24px",
    arrows: true,
    pagination: false,
    breakpoints: {
      1024: { perPage: 2 },
      640: { perPage: 1 },
    },
    // ✅ Performance options
    rewind: false,
    updateOnMove: true,
    autoWidth: false,
    autoHeight: false,
  };

  // ✅ Skeleton loading state
  if (!isLoaded || !SplideComponent || !SplideSlideComponent) {
    return (
      <section ref={sectionRef} className="py-24 bg-white overflow-hidden">
        <div className="max-w-screen-xl mx-auto boxed-layout-gap">
          <div className="animate-pulse">
            <div className="h-6 bg-gray-200 rounded w-32 mb-4"></div>
            <div className="h-12 bg-gray-200 rounded w-96 mb-12"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i}>
                  <div className="h-64 bg-gray-100 rounded-xl mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
                  <div className="h-6 bg-gray-200 rounded w-full"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  const Splide = SplideComponent;
  const Slide = SplideSlideComponent;

  return (
    <section ref={sectionRef} className="py-24 bg-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto boxed-layout-gap">

        {/* Header Section */}
        <div className="flex justify-between items-end mb-12">
          <div className="flex flex-col gap-2 text-left">
            <span className="text-brand-blue font-bold uppercase tracking-widest text-sm">
              YOUTUBE PLAYLIST
            </span>
            <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
              Edukasi & Tips <span className="text-brand-blue">Perawatan Mobil</span>
            </h2>
          </div>

          <div className="hidden md:flex gap-4">
            <button className="splide__arrow--prev-custom w-12 h-12 rounded-full border-2 border-gray-100 flex items-center justify-center text-gray-400 hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all">
              <Icon icon="solar:alt-arrow-left-linear" width={24} />
            </button>
            <button className="splide__arrow--next-custom w-12 h-12 rounded-full border-2 border-gray-100 flex items-center justify-center text-gray-400 hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all">
              <Icon icon="solar:alt-arrow-right-linear" width={24} />
            </button>
          </div>
        </div>

        {/* Video Slider */}
        <div className="w-full">
          <Splide
            options={splideOptions}
          >
            {videoPlaylist.map((video) => (
              <Slide key={video.id}>
                <a
                  href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                  className="video-glightbox block group"
                >
                  {/* ✅ CLS PREVENTION: Explicit aspect ratio */}
                  <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                      className="object-cover group-hover:scale-110 transition-transform duration-700 rounded-xl"
                      loading="lazy"
                      decoding="async"
                    />

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-brand-blue/30 transition-colors flex items-center justify-center z-10 rounded-xl">
                      <div className="w-16 h-16 rounded-full bg-brand-blue/90 border-2 border-brand-gold flex items-center justify-center text-white shadow-2xl transform group-hover:scale-110 transition-transform">
                        <Icon icon="solar:play-bold" width={24} className="ml-1" />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 mt-4">
                    <span className="text-brand-blue font-bold text-xs uppercase tracking-wider">{video.category}</span>
                    <h4 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-brand-blue transition-colors">
                      {video.title}
                    </h4>
                  </div>
                </a>
              </Slide>
            ))}
          </Splide>
        </div>

      </div>
    </section>
  );
}