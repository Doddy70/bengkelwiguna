/**
 * ThumbnailSlider - Bengkel Wiguna
 * Slider dengan thumbnail navigation - click thumbnail untuk navigasi
 */
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { promotions } from "@/data/promotions";

const ThumbnailSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activePromo = promotions[activeIndex];

  return (
    <section id="services" className="thumbnail-slider-section section-gap">
      <div className="container">
        {/* Section Header */}
        <div className="row mb-5">
          <div className="col-12">
            <div className="sec-heading-wrap style-3 text-center">
              <span className="sub-title" style={{ color: '#224297', fontWeight: '600' }}>
                <i className="tji-box"></i> LAYANAN KAMI
              </span>
              <h2 className="sec-title">
                Solusi Lengkap untuk <span style={{ color: '#224297' }}>Kendaraan Anda</span>
              </h2>
            </div>
          </div>
        </div>

        {/* Main Display */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="thumbnail-main-wrapper">
              {/* Main Image - Links to the service page */}
              <Link href={`/promosi/${activePromo.id}`} className="thumbnail-main-link">
                <div className="thumbnail-main-image">
                  <Image
                    src={activePromo.image}
                    alt={activePromo.originalTitle}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 70vw"
                    style={{ objectFit: 'cover' }}
                  />

                  {/* Gradient overlay for text readability */}
                  <div className="thumbnail-main-overlay"></div>

                  {/* Title overlay */}
                  <div className="thumbnail-main-content">
                    <h3>{activePromo.originalTitle}</h3>
                    <p className="promo-tagline">"{activePromo.title}"</p>
                    <span className="view-detail-btn">
                      <i className="fa-solid fa-arrow-right"></i>
                      Lihat Detail
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Thumbnail Strip */}
        <div className="row">
          <div className="col-12">
            <div className="thumbnail-strip">
              {promotions.map((promo, index) => (
                <button
                  key={promo.id}
                  className={`thumbnail-item ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Lihat ${promo.originalTitle}`}
                >
                  <div className="thumbnail-inner">
                    <Image
                      src={promo.image}
                      alt={promo.originalTitle}
                      fill
                      sizes="120px"
                      style={{ objectFit: 'cover' }}
                    />
                    <div className="thumbnail-overlay">
                      <span className="thumbnail-title">{promo.originalTitle}</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .thumbnail-slider-section {
          background: #f8f9fa;
        }

        .thumbnail-main-wrapper {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }

        .thumbnail-main-link {
          display: block;
          text-decoration: none;
        }

        .thumbnail-main-image {
          position: relative;
          height: 450px;
          width: 100%;
        }

        .thumbnail-main-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.8) 0%,
            rgba(0, 0, 0, 0.3) 50%,
            rgba(0, 0, 0, 0.1) 100%
          );
          pointer-events: none;
        }

        .thumbnail-main-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 40px;
          color: white;
          z-index: 2;
        }

        .thumbnail-main-content h3 {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 8px;
          color: white;
        }

        .promo-tagline {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 20px;
          font-style: italic;
        }

        .view-detail-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          background: #4ade80;
          color: #1a1a2e;
          border-radius: 50px;
          font-weight: 600;
          font-size: 15px;
          transition: all 0.3s ease;
        }

        .thumbnail-main-link:hover .view-detail-btn {
          background: #22c55e;
          transform: translateX(5px);
        }

        .thumbnail-main-link:hover .thumbnail-main-image :global(img) {
          transform: scale(1.05);
        }

        /* Thumbnail Strip */
        .thumbnail-strip {
          display: flex;
          gap: 12px;
          overflow-x: auto;
          padding: 10px 5px;
          scrollbar-width: thin;
          scrollbar-color: #224297 #e5e7eb;
        }

        .thumbnail-strip::-webkit-scrollbar {
          height: 6px;
        }

        .thumbnail-strip::-webkit-scrollbar-track {
          background: #e5e7eb;
          border-radius: 3px;
        }

        .thumbnail-strip::-webkit-scrollbar-thumb {
          background: #224297;
          border-radius: 3px;
        }

        .thumbnail-item {
          flex-shrink: 0;
          width: 120px;
          height: 80px;
          border: none;
          padding: 0;
          cursor: pointer;
          border-radius: 12px;
          overflow: hidden;
          position: relative;
          transition: all 0.3s ease;
          background: none;
        }

        .thumbnail-inner {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 12px;
          overflow: hidden;
        }

        .thumbnail-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: flex-end;
          padding: 8px;
          opacity: 1;
          transition: all 0.3s ease;
        }

        .thumbnail-title {
          font-size: 10px;
          color: white;
          font-weight: 600;
          line-height: 1.2;
          text-align: left;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Active State */
        .thumbnail-item.active {
          transform: scale(1.1);
          box-shadow: 0 8px 25px rgba(34, 66, 151, 0.4);
          border: 3px solid #4ade80;
        }

        .thumbnail-item.active .thumbnail-overlay {
          background: rgba(34, 66, 151, 0.7);
        }

        .thumbnail-item.active .thumbnail-title {
          font-weight: 700;
        }

        /* Hover State */
        .thumbnail-item:hover:not(.active) {
          transform: scale(1.05);
        }

        .thumbnail-item:hover:not(.active) .thumbnail-overlay {
          background: rgba(34, 66, 151, 0.6);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .thumbnail-main-image {
            height: 350px;
          }

          .thumbnail-main-content h3 {
            font-size: 24px;
          }

          .thumbnail-item {
            width: 100px;
            height: 65px;
          }
        }
      `}</style>
    </section>
  );
};

export default ThumbnailSlider;