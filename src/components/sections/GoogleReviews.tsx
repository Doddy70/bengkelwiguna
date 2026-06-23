/**
 * GoogleReviews — High Fidelity Restoration
 * Optimized with react-google-reviews package
 */

"use client";

import React, { useEffect, useState } from "react";
import { Link, Button } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";

const fallbackReviews = [
  {
    reviewId: "fallback-1",
    reviewer: {
      profilePhotoUrl: "",
      displayName: "Rio Pratama",
      isAnonymous: false,
    },
    starRating: 5,
    comment: "Tim mekanik bisa kasih masukan & opsi prioritas penggantian spare part. Sangat membantu untuk menyesuaikan dengan budget.",
    createTime: null,
    updateTime: null,
  },
  {
    reviewId: "fallback-2",
    reviewer: {
      profilePhotoUrl: "",
      displayName: "Ahmad Rizky",
      isAnonymous: false,
    },
    starRating: 5,
    comment: "Pelayanan sangat memuaskan. Teknisi mas-mas Jawa dan bapak-bapak Boyolalinya bagus sekali cara melayaninya. Ramah dan solutif.",
    createTime: null,
    updateTime: null,
  },
  {
    reviewId: "fallback-3",
    reviewer: {
      profilePhotoUrl: "",
      displayName: "Lucky Ruslan",
      isAnonymous: false,
    },
    starRating: 5,
    comment: "Pengerjaannya sangat transparan. Montirnya ramah dan menjelaskan masalah kendaraan dengan detail tanpa asal tembak ganti part.",
    createTime: null,
    updateTime: null,
  },
  {
    reviewId: "fallback-4",
    reviewer: {
      profilePhotoUrl: "",
      displayName: "Siti Rahma",
      isAnonymous: false,
    },
    starRating: 5,
    comment: "Layanan ganti oli rutin dan engine flushing di sini cepat sekali. Harganya sangat transparan, ada rincian sebelum dikerjakan.",
    createTime: null,
    updateTime: null,
  },
  {
    reviewId: "fallback-5",
    reviewer: {
      profilePhotoUrl: "",
      displayName: "Dewi Lestari",
      isAnonymous: false,
    },
    starRating: 5,
    comment: "Suka banget sama kejujuran Bengkel Wiguna. Gak ada pemaksaan ganti suku cadang jika masih layak pakai. Semua dicek menyeluruh dan pengerjaannya rapi sekali.",
    createTime: null,
    updateTime: null,
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
  const [mounted, setMounted] = useState(false);
  const [reviewsList, setReviewsList] = useState<any[]>([]);
  const [totalRatings, setTotalRatings] = useState<number>(896);
  const [avgRating, setAvgRating] = useState<number>(4.7);

  useEffect(() => {
    setMounted(true);

    // Fetch live reviews from internal API
    const fetchLiveReviews = async () => {
      try {
        const res = await fetch('/api/reviews');
        if (res.ok) {
          const data = await res.json();
          if (data && data.reviews) {
            // Map the API structure to the GoogleReview structure expected by the package
            const mappedReviews = data.reviews.map((r: any, idx: number) => ({
              reviewId: r.time ? String(r.time) : `live-${idx}`,
              reviewer: {
                profilePhotoUrl: r.profile_photo_url || "",
                displayName: r.author_name || "Pelanggan",
                isAnonymous: !r.author_name,
              },
              starRating: r.rating || 5,
              comment: r.text || "",
              createTime: r.time ? new Date(r.time * 1000).toISOString() : null,
              updateTime: null,
            }));
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

  if (!mounted) {
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
        <div className="w-full react-google-reviews-wrapper">
          <ReactGoogleReviews
            layout="carousel"
            reviews={reviewsList.length > 0 ? reviewsList : fallbackReviews}
            averageRating={avgRating}
            totalReviewCount={totalRatings}
            theme="light"
            maxCharacters={200}
            nameDisplay="fullNames"
          />
        </div>

      </div>

      <style jsx global>{`
        /* Overrides to blend react-google-reviews styling seamlessly into our premium theme */
        .react-google-reviews-wrapper .rgr-carousel {
          padding: 10px 0;
        }
        .react-google-reviews-wrapper .rgr-review-card {
          background-color: white !important;
          border: 1px solid #f3f4f6 !important;
          border-radius: 1rem !important;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.05) !important;
          transition: all 0.3s ease !important;
          padding: 2rem !important;
          min-height: 280px;
        }
        .react-google-reviews-wrapper .rgr-review-card:hover {
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1) !important;
        }
        .react-google-reviews-wrapper .rgr-reviewer-name {
          color: #1a3567 !important;
          font-weight: 700 !important;
        }
        .react-google-reviews-wrapper .rgr-star-icon {
          color: #ffd900 !important;
        }
        .react-google-reviews-wrapper .rgr-slick-dots li button:before {
          color: #cbd5e1 !important;
          font-size: 8px !important;
        }
        .react-google-reviews-wrapper .rgr-slick-dots li.slick-active button:before {
          color: #224297 !important;
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
}
