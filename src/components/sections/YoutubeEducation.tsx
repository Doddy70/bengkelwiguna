"use client";

import React, { useEffect, useState, useRef } from "react";
import { Icon } from "@iconify/react";
import WigunaCard from "@/components/ui/WigunaCard";

const videoPlaylist = [
  {
    id: 1,
    title: "Setir Mobil Miring atau Lari Kiri Kanan? Ini Solusinya!",
    youtubeId: "WdvoqAxUyyk",
    thumbnail: "https://img.youtube.com/vi/WdvoqAxUyyk/maxresdefault.jpg",
    category: "Spooring & Balancing"
  },
  {
    id: 2,
    title: "Pentingnya Filter AC Mobil! Jangan Tunggu Sampai Bau",
    youtubeId: "NsYl85Xb_lY",
    thumbnail: "https://img.youtube.com/vi/NsYl85Xb_lY/maxresdefault.jpg",
    category: "AC Mobil"
  },
  {
    id: 3,
    title: "Mobil Gak Kuat Nanjak? Jalur Oli Mesin Bisa Jadi Mampet!",
    youtubeId: "kKYBezWYfY4",
    thumbnail: "https://img.youtube.com/vi/kKYBezWYfY4/maxresdefault.jpg",
    category: "Mesin & Ganti Oli"
  },
  {
    id: 4,
    title: "Penyebab Evaporator AC Kotor & AC Mobil Gak Dingin",
    youtubeId: "prQqmha71Vk",
    thumbnail: "https://img.youtube.com/vi/prQqmha71Vk/maxresdefault.jpg",
    category: "AC Mobil"
  },
  {
    id: 5,
    title: "Kaki-Kaki Honda CR-V Bunyi Gluduk & Jedug? Ini Sebabnya!",
    youtubeId: "oV7iQkVbJQ0",
    thumbnail: "https://img.youtube.com/vi/oV7iQkVbJQ0/maxresdefault.jpg",
    category: "Kaki-Kaki Mobil"
  },
  {
    id: 6,
    title: "Rem Mobil Bunyi Cit-Cit? Bahaya Jangan Tunggu Blong!",
    youtubeId: "Tm98X91q1Ds",
    thumbnail: "https://img.youtube.com/vi/Tm98X91q1Ds/maxresdefault.jpg",
    category: "Sistem Rem"
  }
];

export default function YoutubeEducation() {
  const [SplideComponent, setSplideComponent] = useState<React.ComponentType<any> | null>(null);
  const [SplideSlideComponent, setSplideSlideComponent] = useState<React.ComponentType<any> | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [videos, setVideos] = useState(videoPlaylist);
  const sectionRef = useRef<HTMLElement>(null);
  const splideRef = useRef<any>(null);

  useEffect(() => {
    const loadLibraries = async () => {
      try {
        const fetchVideosPromise = fetch('/api/youtube', { cache: 'no-store' })
          .then(res => res.ok ? res.json() : null)
          .then(data => data?.videos && data.videos.length > 0 ? data.videos : videoPlaylist)
          .catch(e => {
            console.error('Fallback to local videos', e);
            return videoPlaylist;
          });

        const [splideModule, glightboxModule, fetchedVideos] = await Promise.all([
          import("@splidejs/react-splide"),
          import("glightbox"),
          fetchVideosPromise
        ]);

        await import("@splidejs/splide/dist/css/splide.min.css");
        await import("glightbox/dist/css/glightbox.css");

        const { Splide, SplideSlide } = splideModule;
        const { default: GLightbox } = glightboxModule;

        setVideos(fetchedVideos);
        setSplideComponent(() => Splide);
        setSplideSlideComponent(() => SplideSlide);
        setIsLoaded(true);

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
      loadLibraries();
    }

    return () => observer.disconnect();
  }, []);

  const splideOptions = {
    type: "loop",
    perPage: 4, 
    gap: "24px",
    arrows: false,
    pagination: false,
    breakpoints: {
      1280: { perPage: 3 },
      1024: { perPage: 2 },
      640: { perPage: 1 },
    },
    rewind: false,
    updateOnMove: true,
    autoWidth: false,
    autoHeight: false,
  };

  if (!isLoaded || !SplideComponent || !SplideSlideComponent) {
    return (
      <section ref={sectionRef} className="py-24 bg-[#f0f4ff] dark:bg-slate-900 overflow-hidden min-h-[600px] flex items-center justify-center">
        <div className="animate-pulse flex gap-6">
            <div className="w-64 h-96 bg-gray-200 rounded-[2rem]"></div>
            <div className="w-64 h-96 bg-gray-200 rounded-[2rem]"></div>
            <div className="w-64 h-96 bg-gray-200 rounded-[2rem]"></div>
        </div>
      </section>
    );
  }

  const Splide = SplideComponent;
  const Slide = SplideSlideComponent;

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-[#f0f4ff] dark:bg-slate-900 overflow-hidden font-dm transition-colors duration-500">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 lg:mb-16 gap-6 border-b border-gray-300 dark:border-gray-800 pb-8">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-bold text-gray-900 dark:text-white tracking-tight leading-none uppercase">
                TIPS RAWAT MOBIL
            </h2>
            <a href="https://www.youtube.com/@bengkelwiguna" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase hover:text-brand-blue dark:hover:text-[#ffd900] dark:text-gray-300 transition-colors pb-2">
                Show More <Icon icon="solar:alt-arrow-right-linear" width={18} />
            </a>
        </div>

        {/* Carousel Section */}
        <div className="w-full relative">
            <Splide
                ref={splideRef}
                options={splideOptions}
                className="!pb-0" 
            >
                {/* All Videos Mapped as WigunaCard Overlay */}
                {videos.map((video) => {
                    const handleWatch = (e: React.MouseEvent) => {
                        e.preventDefault();
                        const parent = e.currentTarget.closest('.video-glightbox') as HTMLElement;
                        if (parent) {
                            parent.click();
                        }
                    };

                    return (
                        <Slide key={video.id}>
                            <WigunaCard
                                href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                                image={video.thumbnail}
                                title={video.title}
                                variant="overlay"
                                tag={video.category}
                                buttonText="Watch Video"
                                secondaryIcon="solar:play-linear"
                                linkClassName="video-glightbox block h-full"
                                metaItems={[
                                    { icon: 'solar:videocamera-record-linear', text: 'YouTube' }
                                ]}
                                onButtonClick={handleWatch}
                                onSecondaryClick={handleWatch}
                            />
                        </Slide>
                    );
                })}

            </Splide>
        </div>

        {/* Footer Section: Description & Arrows */}
        <div className="mt-12 lg:mt-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <p className="text-gray-600 dark:text-gray-400 max-w-md text-lg leading-relaxed">
                Cegah kerusakan fatal sebelum terjadi. Dapatkan ilmu gratis seputar masalah mesin, kaki-kaki, hingga AC mobil langsung dari ahlinya di Bengkel Wiguna.
            </p>

            {/* Custom Carousel Navigation */}
            <div className="flex gap-4">
                <button 
                    onClick={() => splideRef.current?.splide?.go('<')}
                    className="w-16 h-16 rounded-full border-2 border-brand-blue/30 text-brand-blue dark:border-white/20 dark:text-white hover:border-brand-blue hover:bg-brand-blue/5 transition-colors flex items-center justify-center"
                >
                    <Icon icon="solar:alt-arrow-left-linear" width={24} />
                </button>
                <button 
                    onClick={() => splideRef.current?.splide?.go('>')}
                    className="w-16 h-16 rounded-full bg-brand-gold border-2 border-brand-gold flex items-center justify-center text-black hover:bg-[#e6c300] hover:border-[#e6c300] transition-colors"
                >
                    <Icon icon="solar:alt-arrow-right-linear" width={24} />
                </button>
            </div>
        </div>

      </div>
    </section>
  );
}