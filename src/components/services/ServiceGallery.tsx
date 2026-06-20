"use client";

import Image from "next/image";
import { useState } from "react";
import { Icon } from "@iconify/react";

interface ServiceGalleryProps {
  images: { id: number; url: string; alt: string }[];
}

export default function ServiceGallery({ images }: ServiceGalleryProps) {
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  // If no images or less than 5, adjust layout gracefully
  const mainImage = images[0];
  const sideImages = images.slice(1, 5);

  if (!mainImage) return null;

  return (
    <>
      {/* Desktop/Tablet Bento Grid Layout */}
      <div className="relative hidden md:grid grid-cols-4 grid-rows-2 gap-2 h-[50vh] min-h-[400px] max-h-[600px] rounded-2xl overflow-hidden group">
        {/* Main large image */}
        <div className="col-span-2 row-span-2 relative cursor-pointer overflow-hidden" onClick={() => setShowAllPhotos(true)}>
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
          <Image
            src={mainImage.url}
            alt={mainImage.alt || "Main service photo"}
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
            priority
          />
        </div>

        {/* 4 side images */}
        {sideImages.map((img, index) => (
          <div key={img.id} className="relative col-span-1 row-span-1 cursor-pointer overflow-hidden" onClick={() => setShowAllPhotos(true)}>
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
            <Image
              src={img.url}
              alt={img.alt || `Service photo ${index + 1}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}

        {/* See all photos button */}
        {images.length > 5 && (
          <button
            onClick={() => setShowAllPhotos(true)}
            className="absolute bottom-4 right-4 z-20 flex items-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-lg shadow-md hover:bg-gray-50 transition-colors font-medium text-sm"
          >
            <Icon icon="solar:gallery-bold" width={18} />
            See all photos ({images.length})
          </button>
        )}
      </div>

      {/* Mobile Single Image Carousel */}
      <div className="md:hidden relative w-full">
        {/* Swipeable carousel container */}
        <div className="overflow-x-auto snap-x snap-mandatory scrollbar-hide flex -mx-4 px-4 gap-2">
          {images.slice(0, 5).map((img, idx) => (
            <div
              key={img.id}
              className="relative flex-shrink-0 w-[85vw] aspect-[4/3] rounded-xl overflow-hidden snap-center cursor-pointer"
              onClick={() => setShowAllPhotos(true)}
            >
              <Image
                src={img.url}
                alt={img.alt || `Service photo ${idx + 1}`}
                fill
                className="object-cover"
                sizes="85vw"
                priority={idx === 0}
              />
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
            onClick={() => setShowAllPhotos(true)}
            className="absolute bottom-3 right-4 flex items-center gap-1 bg-white/90 hover:bg-white text-gray-900 px-2.5 py-1 rounded-md text-xs font-medium shadow-sm backdrop-blur-sm transition-colors"
          >
            <Icon icon="solar:gallery-bold" width={14} />
            Semua
          </button>
        )}
      </div>

      {/* Lightbox / Modal (Simple implementation) */}
      {showAllPhotos && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col overflow-y-auto">
          <div className="sticky top-0 bg-white z-10 p-4 border-b flex items-center justify-between">
            <h2 className="text-xl font-bold">All Photos</h2>
            <button
              onClick={() => setShowAllPhotos(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <Icon icon="solar:close-circle-line-duotone" width={28} />
            </button>
          </div>
          <div className="p-4 sm:p-8 max-w-4xl mx-auto w-full grid gap-4">
            {images.map((img) => (
              <div key={img.id} className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src={img.url}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
