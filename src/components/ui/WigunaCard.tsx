"use client";

/**
 * WigunaCard - Reusable UI Card Component
 * Replicates the Travel Card mockup design (Split vs Full-bleed Overlay)
 * Optimized for Bengkel Wiguna V3 brand colors and responsive spacing.
 */

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';

export interface WigunaCardProps {
  href?: string;
  image: string;
  imageAspectRatio?: '4/3' | '16/10' | '4/5' | 'square';
  tag?: string;
  title: string;
  excerpt?: string;
  variant?: 'split' | 'overlay';
  metaItems?: Array<{ icon: string; text: string }>;
  buttonText?: string;
  price?: string;
  oldPrice?: string;
  badgeText?: string;
  onClick?: (e: React.MouseEvent) => void;
  onButtonClick?: (e: React.MouseEvent) => void;
  onSecondaryClick?: (e: React.MouseEvent) => void;
  secondaryIcon?: string;
  linkClassName?: string;
}

const WigunaCard: React.FC<WigunaCardProps> = ({
  href,
  image,
  imageAspectRatio = '4/3',
  tag,
  title,
  excerpt,
  variant = 'split',
  metaItems = [],
  buttonText = 'Lihat Detail',
  price,
  oldPrice,
  badgeText,
  onClick,
  onButtonClick,
  onSecondaryClick,
  secondaryIcon = 'solar:heart-linear',
  linkClassName,
}) => {
  
  // Decide image aspect ratio classes
  const aspectClass = {
    '4/3': 'aspect-[4/3]',
    '16/10': 'aspect-[16/10]',
    '4/5': 'aspect-[4/5]',
    'square': 'aspect-square',
  }[imageAspectRatio];

  // Helper to handle clicks on the card itself
  const handleCardClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick(e);
    }
  };

  // Prevent parent link navigation when clicking inner action buttons
  const stopPropagation = (e: React.MouseEvent, action?: (e: React.MouseEvent) => void) => {
    e.stopPropagation();
    if (action) {
      action(e);
    }
  };

  // Card Content JSX
  const renderCardContent = () => {
    if (variant === 'overlay') {
      /* === 1. OVERLAY VARIANT (PHILIPPINES STYLE) === */
      return (
        <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden flex flex-col justify-end p-6 group shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 min-h-[380px] sm:min-h-[440px] bg-neutral-900 border border-white/10">
          {/* Badge at Top-Left */}
          {badgeText && (
            <div className="absolute top-6 left-6 z-10">
              <span className="inline-block bg-[#ffd900] text-black text-xs font-black px-4 py-2 rounded-full shadow-md uppercase tracking-wider">
                {badgeText}
              </span>
            </div>
          )}

          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Matte gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
          </div>

          {/* Interactive Floating / Blur Content Panel */}
          <div className="relative z-10 w-full flex flex-col pt-8">
            {/* Tag / Category */}
            {tag && (
              <span className="text-[11px] font-black uppercase tracking-widest text-[#ffd900] mb-2">
                {tag}
              </span>
            )}

            {/* Title */}
            <h3 className="text-white text-2xl font-black tracking-tight leading-snug line-clamp-2 uppercase font-sans group-hover:text-[#ffd900] transition-colors mb-2">
              {title}
            </h3>

            {/* Excerpt */}
            {excerpt && (
              <p className="text-white/80 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-4 font-medium">
                {excerpt}
              </p>
            )}

            {/* Price section if available */}
            {(price || oldPrice) && (
              <div className="flex items-center gap-2 mb-4">
                {price && <span className="text-lg font-black text-[#ffd900]">{price}</span>}
                {oldPrice && <span className="text-xs text-white/50 line-through">{oldPrice}</span>}
              </div>
            )}

            {/* Meta Row (Icons) */}
            {metaItems.length > 0 && (
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6">
                {metaItems.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 text-xs font-bold text-white/85">
                    <Icon icon={item.icon} className="w-4 h-4 text-[#ffd900] shrink-0" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Action Buttons Row */}
            <div className="flex items-center gap-3">
              {/* Primary Action Button */}
              <button
                onClick={(e) => stopPropagation(e, onButtonClick || onClick)}
                className="flex-1 py-3 px-6 rounded-full bg-white/10 hover:bg-[#224297] hover:text-white backdrop-blur-md border border-white/20 hover:border-[#224297] text-white font-bold text-sm text-center transition-all duration-300"
              >
                {buttonText}
              </button>

              {/* Secondary Heart/WhatsApp Action Button */}
              <button
                onClick={(e) => stopPropagation(e, onSecondaryClick)}
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#ffd900] hover:text-black backdrop-blur-md border border-white/20 hover:border-[#ffd900] text-white flex items-center justify-center transition-all duration-300"
                aria-label="Secondary Action"
              >
                <Icon icon={secondaryIcon} className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      /* === 2. SPLIT VARIANT (SINGAPORE STYLE) === */
      return (
        <div className="bg-white dark:bg-neutral-900 border border-gray-100/80 dark:border-neutral-800 rounded-[2.5rem] p-4 flex flex-col h-full group hover:shadow-[0_20px_40px_rgba(34,66,151,0.06)] hover:-translate-y-1.5 transition-all duration-500 ease-out shadow-sm">
          {/* Top Image Container */}
          <div className={`relative w-full overflow-hidden rounded-[1.8rem] bg-gray-50 dark:bg-neutral-800 ${aspectClass} mb-5`}>
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Tag / Category Badge on Top-Right of Image if Split */}
            {tag && (
              <div className="absolute top-4 right-4 z-10">
                <span className="inline-block bg-[#224297] dark:bg-[#ffd900] text-white dark:text-black text-[10px] font-black px-3 py-1.5 rounded-full shadow-sm uppercase tracking-wider">
                  {tag}
                </span>
              </div>
            )}
            {/* Discount Badge on Top-Left of Image if Split */}
            {badgeText && (
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-block bg-[#ffd900] text-black text-[10px] font-black px-3 py-1.5 rounded-full shadow-sm uppercase tracking-wider">
                  {badgeText}
                </span>
              </div>
            )}
          </div>

          {/* Bottom Card Body */}
          <div className="flex-1 flex flex-col justify-between px-2 pb-2">
            <div>
              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white leading-snug tracking-tight uppercase font-sans group-hover:text-[#224297] dark:group-hover:text-[#ffd900] transition-colors mb-2 line-clamp-2">
                {title}
              </h3>

              {/* Excerpt */}
              {excerpt && (
                <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-4 font-medium">
                  {excerpt}
                </p>
              )}

              {/* Price Tag */}
              {(price || oldPrice) && (
                <div className="flex items-center gap-2 mb-4">
                  {price && <span className="text-lg font-black text-[#224297] dark:text-[#ffd900]">{price}</span>}
                  {oldPrice && <span className="text-xs text-gray-400 dark:text-gray-500 line-through">{oldPrice}</span>}
                </div>
              )}

              {/* Meta Row (Icons) */}
              {metaItems.length > 0 && (
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6">
                  {metaItems.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-xs font-bold text-gray-500 dark:text-gray-400">
                      <Icon icon={item.icon} className="w-4 h-4 text-[#224297] dark:text-[#ffd900] shrink-0" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Action Buttons Row */}
            <div className="flex items-center gap-3 mt-auto">
              {/* Primary Action Button */}
              <button
                onClick={(e) => stopPropagation(e, onButtonClick || onClick)}
                className="flex-1 py-3 px-6 rounded-full bg-gray-100/90 hover:bg-[#224297] text-gray-800 hover:text-white font-bold text-sm text-center transition-all duration-300 border border-transparent hover:border-[#224297] dark:bg-neutral-800 dark:hover:bg-[#ffd900] dark:text-gray-200 dark:hover:text-black dark:hover:border-[#ffd900]"
              >
                {buttonText}
              </button>

              {/* Secondary Heart/WhatsApp Action Button */}
              <button
                onClick={(e) => stopPropagation(e, onSecondaryClick)}
                className="w-12 h-12 rounded-full bg-gray-100/90 hover:bg-[#ffd900] text-gray-600 hover:text-black flex items-center justify-center transition-all duration-300 dark:bg-neutral-800 dark:hover:bg-[#ffd900] dark:text-gray-300 dark:hover:text-black"
                aria-label="Secondary Action"
              >
                <Icon icon={secondaryIcon} className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      );
    }
  };

  // If href is specified and there's no custom onClick, render as Next.js Link
  if (href && !onClick) {
    return (
      <Link href={href} className={`block h-full cursor-pointer ${linkClassName || ''}`}>
        {renderCardContent()}
      </Link>
    );
  }

  // Otherwise, render as a clickable div
  return (
    <div onClick={handleCardClick} className={`block h-full cursor-pointer ${linkClassName || ''}`}>
      {renderCardContent()}
    </div>
  );
};

export default WigunaCard;
