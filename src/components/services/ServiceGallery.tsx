"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { Icon } from "@iconify/react";

interface ServiceGalleryProps {
  images: { id: number; url: string; alt: string }[];
}

export default function ServiceGallery({ images }: ServiceGalleryProps) {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Keyboard navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!showAllPhotos) return;
    if (e.key === "Escape") setShowAllPhotos(false);
    if (e.key === "ArrowLeft") setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
    if (e.key === "ArrowRight") setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  }, [showAllPhotos, images.length]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Prevent body scroll when modal open
  useEffect(() => {
    if (showAllPhotos) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showAllPhotos]);

  const mainImage = images[0];
  const sideImages = images.slice(1, 5);

  if (!mainImage) return null;

  return (
    <>
      {/* Desktop/Tablet Bento Grid Layout */}
      <div className="relative hidden md:grid grid-cols-4 grid-rows-2 gap-2 h-[50vh] min-h-[400px] max-h-[600px] rounded-2xl overflow-hidden group">
        {/* Main large image */}
        <div
          className="col-span-2 row-span-2 relative cursor-pointer overflow-hidden"
          onClick={() => {
            setCurrentIndex(0);
            setShowAllPhotos(true);
          }}
        >
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
          <Image
            src={mainImage.url}
            alt={mainImage.alt || "Main service photo"}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            priority
          />
          {/* Zoom hint icon */}
          <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
              <Icon icon="solar:full-screen-line-bold" className="w-6 h-6 text-gray-700" />
            </div>
          </div>
        </div>

        {/* 4 side images */}
        {sideImages.map((img, index) => (
          <div
            key={img.id}
            className="relative col-span-1 row-span-1 cursor-pointer overflow-hidden group/side"
            onClick={() => {
              setCurrentIndex(index + 1);
              setShowAllPhotos(true);
            }}
          >
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
            <Image
              src={img.url}
              alt={img.alt || `Service photo ${index + 1}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Zoom hint */}
            <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover/side:opacity-100 transition-opacity">
              <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                <Icon icon="solar:full-screen-line-bold" className="w-5 h-5 text-gray-700" />
              </div>
            </div>
          </div>
        ))}

        {/* See all photos button */}
        {images.length > 5 && (
          <button
            onClick={() => {
              setCurrentIndex(0);
              setShowAllPhotos(true);
            }}
            className="absolute bottom-4 right-4 z-20 flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur-sm text-gray-900 rounded-xl shadow-lg hover:bg-white transition-all font-semibold text-sm"
          >
            <Icon icon="solar:gallery-bold" width={18} />
            Lihat semua ({images.length})
          </button>
        )}
      </div>

      {/* Mobile Single Image Carousel */}
      <div className="md:hidden relative w-full">
        <div className="overflow-x-auto snap-x snap-mandatory scrollbar-hide flex -mx-4 px-4 gap-2">
          {images.slice(0, 5).map((img, idx) => (
            <div
              key={img.id}
              className="relative flex-shrink-0 w-[85vw] aspect-[4/3] rounded-xl overflow-hidden snap-center cursor-pointer"
              onClick={() => {
                setCurrentIndex(idx);
                setShowAllPhotos(true);
              }}
            >
              <Image
                src={img.url}
                alt={img.alt || `Service photo ${idx + 1}`}
                fill
                className="object-cover"
                sizes="85vw"
                priority={idx === 0}
              />
              {/* Zoom icon */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/20 transition-colors">
                <Icon icon="solar:full-screen-line-bold" className="w-8 h-8 text-white opacity-0 hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
        {/* Photo count indicator */}
        {images.length > 1 && (
          <div className="absolute bottom-3 right-8 bg-black/60 text-white px-2.5 py-1 rounded-md text-xs backdrop-blur-sm">
            1-{Math.min(5, images.length)} dari {images.length}
          </div>
        )}
        {/* View all button */}
        {images.length > 1 && (
          <button
            onClick={() => {
              setCurrentIndex(0);
              setShowAllPhotos(true);
            }}
            className="absolute bottom-3 right-4 flex items-center gap-1 bg-white/90 hover:bg-white text-gray-900 px-2.5 py-1 rounded-md text-xs font-medium shadow-sm backdrop-blur-sm transition-colors"
          >
            <Icon icon="solar:gallery-bold" width={14} />
            Semua
          </button>
        )}
      </div>

      {/* Enhanced Lightbox Modal */}
      {showAllPhotos && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex flex-col animate-in fade-in duration-200">
          {/* Header */}
          <div className="sticky top-0 z-10 p-4 flex items-center justify-between bg-gradient-to-b from-black/80 to-transparent">
            <div className="flex items-center gap-3">
              <Icon icon="solar:gallery-bold" className="w-6 h-6 text-white" />
              <h2 className="text-white text-lg font-semibold">
                Galeri Foto ({currentIndex + 1} / {images.length})
              </h2>
            </div>
            <button
              onClick={() => setShowAllPhotos(false)}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Tutup"
            >
              <Icon icon="solar:close-circle-line-duotone" className="w-8 h-8 text-white" />
            </button>
          </div>

          {/* Main Image Area */}
          <div className="flex-1 flex items-center justify-center relative px-4">
            {/* Previous Button */}
            {images.length > 1 && (
              <button
                onClick={() => setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1))}
                className="absolute left-4 z-10 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all group"
                aria-label="Sebelumnya"
              >
                <Icon icon="solar:alt-arrow-left-bold" className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </button>
            )}

            {/* Image */}
            <div className="relative w-full max-w-5xl aspect-[4/3]">
              <Image
                src={images[currentIndex].url}
                alt={images[currentIndex].alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 80vw"
                priority
              />
            </div>

            {/* Next Button */}
            {images.length > 1 && (
              <button
                onClick={() => setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0))}
                className="absolute right-4 z-10 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all group"
                aria-label="Selanjutnya"
              >
                <Icon icon="solar:alt-arrow-right-bold" className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </button>
            )}
          </div>

          {/* Thumbnail Strip */}
          {images.length > 1 && (
            <div className="p-4 bg-gradient-to-t from-black/80 to-transparent">
              <div className="flex gap-2 overflow-x-auto pb-2 justify-center">
                {images.map((img, idx) => (
                  <button
                    key={img.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`relative flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden transition-all ${
                      idx === currentIndex
                        ? "ring-2 ring-white scale-105"
                        : "opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img.url}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </button>
                ))}
              </div>
              <p className="text-center text-white/60 text-xs mt-2">
                Tekan ← → atau klik thumbnail untuk navigasi
              </p>
            </div>
          )}

          {/* Caption */}
          {images[currentIndex].alt && (
            <div className="p-4 text-center">
              <p className="text-white/80 text-sm">{images[currentIndex].alt}</p>
            </div>
          )}
        </div>
      )}
    </>
  );
}
