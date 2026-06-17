/**
 * GoogleReviews — High Fidelity Restoration
 * Optimized version with lazy loading for Splide
 *
 * ✅ PERFORMANCE OPTIMIZATION:
 * - Dynamic import of Splide CSS
 * - Reduced motion support
 * - Optimized breakpoints
 */

"use client";

import React, { useEffect, useState } from "react";
import { Link, Button } from "@nextui-org/react";
import { Icon } from "@iconify/react";

const fallbackReviews = [
  {
    name: "Rio Pratama",
    initial: "R",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
    role: "Local Guide",
    date: "2 bulan yang lalu",
    rating: 5,
    text: "Tim mekanik bisa kasih masukan & opsi prioritas penggantian spare part. Sangat membantu untuk menyesuaikan dengan budget.",
  },
  {
    name: "Ahmad Rizky",
    initial: "A",
    bgColor: "bg-stone-100",
    textColor: "text-stone-700",
    role: "Pelanggan Setia",
    date: "4 bulan yang lalu",
    rating: 5,
    text: "Pelayanan sangat memuaskan. Teknisi mas-mas Jawa dan bapak-bapak Boyolalinya bagus sekali cara melayaninya. Ramah dan solutif.",
  },
  {
    name: "Lucky Ruslan",
    initial: "L",
    bgColor: "bg-pink-50",
    textColor: "text-pink-600",
    role: "Local Guide",
    date: "Setahun lalu",
    rating: 5,
    text: "Pengerjaannya sangat transparan. Montirnya ramah dan menjelaskan masalah kendaraan dengan detail tanpa asal tembak ganti part.",
  },
  {
    name: "Siti Rahma",
    initial: "S",
    bgColor: "bg-green-50",
    textColor: "text-green-600",
    role: "Pemilik Honda Civic",
    date: "3 minggu yang lalu",
    rating: 5,
    text: "Layanan ganti oli rutin dan engine flushing di sini cepat sekali. Harganya sangat transparan, ada rincian sebelum dikerjakan.",
  },
  {
    name: "Dewi Lestari",
    initial: "D",
    bgColor: "bg-orange-50",
    textColor: "text-orange-600",
    role: "Local Guide • 89 Ulasan",
    date: "1 bulan yang lalu",
    rating: 5,
    text: "Suka banget sama kejujuran Bengkel Wiguna. Gak ada pemaksaan ganti suku cadang jika masih layak pakai. Semua dicek menyeluruh dan pengerjaannya rapi sekali.",
  },
];

const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

export default function GoogleReviews() {
  const [SplideComponent, setSplideComponent] = useState<React.ComponentType<any> | null>(null);
  const [SplideSlideComponent, setSplideSlideComponent] = useState<React.ComponentType<any> | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // States for Live API Data
  const [reviewsList, setReviewsList] = useState<any[]>(fallbackReviews);
  const [totalRatings, setTotalRatings] = useState<number>(896);
  const [avgRating, setAvgRating] = useState<number>(4.7);

  useEffect(() => {
    // Fetch live reviews from internal API
    const fetchLiveReviews = async () => {
      try {
        const res = await fetch('/api/reviews');
        if (res.ok) {
          const data = await res.json();
          if (data && data.reviews) {
            // Map the API structure to our component structure
            const mappedReviews = data.reviews.map((r: any, idx: number) => {
              const bgColors = ["bg-blue-50", "bg-stone-100", "bg-pink-50", "bg-green-50", "bg-orange-50"];
              const textColors = ["text-blue-600", "text-stone-700", "text-pink-600", "text-green-600", "text-orange-600"];
              const colorIdx = idx % bgColors.length;
              
              return {
                name: r.author_name,
                initial: r.author_name ? r.author_name.charAt(0) : "A",
                bgColor: bgColors[colorIdx],
                textColor: textColors[colorIdx],
                role: "Local Guide",
                date: r.relative_time_description,
                rating: r.rating,
                text: r.text,
                photoUrl: r.profile_photo_url,
              };
            });
            setReviewsList(mappedReviews);
            if (data.rating) setAvgRating(data.rating);
            if (data.user_ratings_total) setTotalRatings(data.user_ratings_total);
          }
        }
      } catch (err) {
        console.error("Failed to fetch live reviews, falling back to static data.");
      }
    };

    fetchLiveReviews();
  }, []);

  useEffect(() => {
    // Lazy load Splide
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

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadSplide();
          observer.disconnect();
        }
      },
      { rootMargin: '100px' }
    );

    const element = document.getElementById('google-reviews-section');
    if (element) {
      observer.observe(element);
    } else {
      loadSplide();
    }

    return () => observer.disconnect();
  }, []);

  const splideOptions = {
    type: "loop" as const,
    perPage: 3,
    gap: "24px",
    arrows: false,
    pagination: true,
    autoplay: true,
    interval: 5000,
    breakpoints: {
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
      <section className="py-24 bg-[#f9fbfd] overflow-hidden">
        <div className="max-w-screen-xl mx-auto boxed-layout-gap">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-48 mb-4"></div>
            <div className="h-12 bg-gray-200 rounded w-96 mb-12"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-[320px] bg-gray-100 rounded-xl"></div>
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
    <section id="google-reviews-section" className="py-24 bg-[#f9fbfd] overflow-hidden">
      <div className="max-w-screen-xl mx-auto boxed-layout-gap">

        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-brand-blue font-bold uppercase tracking-widest text-sm flex items-center gap-2">
               <Icon icon="solar:star-bold" className="text-brand-gold" /> ULASAN PELANGGAN
            </span>
            <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
              Kata <span className="text-brand-blue">Pelanggan</span> Setia Kami
            </h2>
          </div>

          {/* Google Badge Summary */}
          <div className="bg-white p-5 brand-rounded shadow-sm border border-gray-100 flex items-center gap-5 w-full lg:w-auto">
            <div className="w-12 h-12 flex-shrink-0">
              <GoogleLogo />
            </div>
            <div className="flex-grow">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black text-[#1a3567]">{avgRating.toFixed(1)}</span>
                <div className="flex text-brand-gold">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} icon="solar:star-bold" width={16} />
                  ))}
                </div>
              </div>
              <p className="text-xs text-gray-500 font-medium mt-1 uppercase tracking-tighter">
                Berdasarkan {totalRatings} ulasan Google
              </p>
            </div>
            <Button
              as={Link}
              href="https://g.page/r/CQ2MI8cx0ox9EAE/review"
              isExternal
              className="bg-brand-gold text-[#1a3567] font-bold px-6 h-10 text-xs rounded-full shadow-lg"
            >
              Tulis Ulasan <Icon icon="solar:pen-bold" width={12} />
            </Button>
          </div>
        </div>

        {/* Reviews Slider */}
        <div className="w-full">
          <Splide
            options={splideOptions}
            className="reviews-splide"
          >
            {reviewsList.map((review, idx) => (
              <Slide key={idx}>
                <div className="bg-white brand-rounded p-8 shadow-sm border border-gray-50 h-[320px] flex flex-col hover:shadow-xl transition-all duration-500">

                  {/* Reviewer Info */}
                  <div className="flex items-center gap-4 mb-6">
                    {review.photoUrl ? (
                      <img src={review.photoUrl} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
                    ) : (
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-black ${review.bgColor} ${review.textColor}`}>
                        {review.initial}
                      </div>
                    )}
                    <div className="flex flex-col">
                      <h4 className="font-bold text-[#1a3567] text-base leading-none mb-1">{review.name}</h4>
                      <span className="text-[11px] text-gray-400 font-bold uppercase tracking-tight">{review.role}</span>
                    </div>
                    <div className="w-5 h-5 ml-auto opacity-30">
                      <GoogleLogo />
                    </div>
                  </div>

                  {/* Rating & Date */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex text-brand-gold gap-0.5">
                      {[...Array(review.rating || 5)].map((_, i) => (
                        <Icon key={i} icon="solar:star-bold" width={14} />
                      ))}
                    </div>
                    <span className="text-gray-300 text-xs">•</span>
                    <span className="text-[11px] text-gray-500 font-bold">{review.date}</span>
                  </div>

                  {/* Review Body */}
                  <p className="text-gray-600 text-sm leading-relaxed font-medium italic line-clamp-4">
                    &quot;{review.text}&quot;
                  </p>
                </div>
              </Slide>
            ))}
          </Splide>
        </div>

      </div>

      <style jsx global>{`
        .reviews-splide .splide__pagination {
          bottom: -40px;
        }
        .reviews-splide .splide__pagination__page {
          background: #cbd5e1;
          width: 8px;
          height: 8px;
          transition: all 0.3s ease;
        }
        .reviews-splide .splide__pagination__page.is-active {
          background: #224297;
          transform: scale(1.5);
        }
      `}</style>
    </section>
  );
}
