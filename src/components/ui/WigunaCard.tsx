"use client";

/**
 * WigunaCard - Enhanced UI Card Components
 * Two variants: Framed Card (Bento Grid) & Overlay Card (Apple Carousel)
 * Inspired by Liquid Glass design principles
 */

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';

// ============================================
// TYPES
// ============================================

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

// ============================================
// FRAMED CARD (Bento Grid Style)
// Inspired by clean card design with subtle shadows
// ============================================

interface FramedCardProps {
  image: string;
  tag?: string;
  title: string;
  excerpt?: string;
  price?: string;
  oldPrice?: string;
  badgeText?: string;
  metaItems?: Array<{ icon: string; text: string }>;
  buttonText?: string;
  onButtonClick?: (e: React.MouseEvent) => void;
  onWhatsAppClick?: (e: React.MouseEvent) => void;
}

export const FramedCard: React.FC<FramedCardProps> = ({
  image,
  tag,
  title,
  excerpt,
  price,
  oldPrice,
  badgeText,
  metaItems = [],
  buttonText = 'Lihat Detail',
  onButtonClick,
  onWhatsAppClick,
}) => {
  return (
    <div className="group relative bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex flex-col p-2 h-full">
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-50 rounded-2xl">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {tag && (
            <span className="inline-flex items-center gap-1.5 bg-white text-gray-800 text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              {tag}
            </span>
          )}
          {badgeText && (
            <span className="inline-block bg-[#ffd900] text-black text-[10px] font-black px-3 py-1.5 rounded-full shadow-sm uppercase tracking-wider">
              {badgeText}
            </span>
          )}
        </div>

        {/* Top Right Floating Icons */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
           <button className="w-8 h-8 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/40 transition-colors">
              <Icon icon="solar:link-linear" className="w-4 h-4" />
           </button>
           <button className="w-8 h-8 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/40 transition-colors">
              <Icon icon="solar:heart-linear" className="w-4 h-4" />
           </button>
        </div>

        {/* Hover Overlay with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-1 p-5">
        {/* Title */}
        <h3 className="text-xl font-black text-gray-900 tracking-tight uppercase leading-tight mb-2 group-hover:text-[#224297] transition-colors line-clamp-2">
          {title}
        </h3>

        {/* Excerpt */}
        {excerpt && (
          <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4 flex-1">
            {excerpt}
          </p>
        )}

        {/* Price */}
        {(price || oldPrice) && (
          <div className="flex items-center gap-2 mb-4">
            {price && <span className="text-xl font-black text-[#224297]">{price}</span>}
            {oldPrice && <span className="text-sm text-gray-400 line-through">{oldPrice}</span>}
          </div>
        )}

        {/* Meta Items */}
        {metaItems.length > 0 && (
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {metaItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-1.5 text-xs text-gray-500">
                <Icon icon={item.icon} className="w-4 h-4 text-[#224297]" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-100">
          <button
            onClick={onButtonClick}
            className="flex-1 py-3 px-5 rounded-xl bg-gray-900 hover:bg-[#224297] text-white font-bold text-sm text-center transition-all duration-300 shadow-sm hover:shadow-md"
          >
            {buttonText}
          </button>
          <button
            onClick={onWhatsAppClick}
            className="w-11 h-11 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-900 flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md"
            aria-label="Chat WhatsApp"
          >
            <Icon icon="fa6-brands:whatsapp" className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="h-1 bg-gradient-to-r from-[#224297] to-[#ffd900] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

// ============================================
// OVERLAY CARD (Apple Carousel Style)
// Inspired by Liquid Glass principles
// Semi-transparent with backdrop blur
// ============================================

interface OverlayCardProps {
  image: string;
  tag?: string;
  title: string;
  excerpt?: string;
  badgeText?: string;
  price?: string;
  oldPrice?: string;
  onButtonClick?: (e: React.MouseEvent) => void;
  onWhatsAppClick?: (e: React.MouseEvent) => void;
}

export const OverlayCard: React.FC<OverlayCardProps> = ({
  image,
  tag,
  title,
  excerpt,
  badgeText,
  price,
  oldPrice,
  onButtonClick,
  onWhatsAppClick,
}) => {
  return (
    <div className="group relative h-[460px] rounded-[2.5rem] overflow-hidden flex flex-col justify-end">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Glass Overlay - Inspired by Liquid Glass */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />

      {/* Glass Content Panel - Frosted Glass Effect */}
      {/* Top Floating Badges */}
      <div className="absolute top-6 left-6 right-6 z-30 flex items-start justify-between pointer-events-none">
        <div className="flex flex-col gap-2">
          {tag && (
            <span className="inline-flex items-center gap-1.5 bg-white text-gray-800 text-xs font-bold px-3 py-1.5 rounded-full shadow-md pointer-events-auto">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              {tag}
            </span>
          )}
          {badgeText && (
            <span className="inline-flex px-3 py-1.5 bg-[#25D366] text-white text-[10px] font-black uppercase tracking-wider rounded-full shadow-lg pointer-events-auto">
              {badgeText}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2">
           <button className="w-10 h-10 rounded-full bg-black/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black/40 transition-colors pointer-events-auto">
              <Icon icon="solar:link-linear" className="w-5 h-5" />
           </button>
           <button className="w-10 h-10 rounded-full bg-black/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black/40 transition-colors pointer-events-auto">
              <Icon icon="solar:heart-linear" className="w-5 h-5" />
           </button>
        </div>
      </div>

      <div className="relative z-20 p-6 backdrop-blur-md bg-white/5 border-t border-white/10">

        {/* Title */}
        <h3 className="text-2xl font-black text-white uppercase tracking-tight leading-tight mb-2 group-hover:text-[#ffd900] transition-colors duration-300 line-clamp-2">
          {title}
        </h3>

        {/* Excerpt */}
        {excerpt && (
          <p className="text-white/80 text-sm leading-relaxed line-clamp-2 mb-3">
            {excerpt}
          </p>
        )}

        {/* Price */}
        {(price || oldPrice) && (
          <div className="flex items-center gap-2 mb-4">
            {price && <span className="text-xl font-black text-[#ffd900]">{price}</span>}
            {oldPrice && <span className="text-sm text-white/50 line-through">{oldPrice}</span>}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={onButtonClick}
            className="flex-1 py-3 px-5 rounded-full bg-white/20 hover:bg-white hover:text-[#224297] backdrop-blur-md border border-white/30 text-white font-bold text-sm text-center transition-all duration-300"
          >
            Lihat Promo
          </button>
          <button
            onClick={onWhatsAppClick}
            className="w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            aria-label="Chat WhatsApp"
          >
            <Icon icon="fa6-brands:whatsapp" className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Subtle Glow Effect on Hover */}
      <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-[#224297]/30 to-transparent" />
      </div>
    </div>
  );
};

// ============================================
// LEGACY COMPONENT (Kept for backward compatibility)
// ============================================

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

  // Handle clicks on the card itself
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

  // Use the new components based on variant
  if (variant === 'overlay') {
    const OverlayContent = (
      <OverlayCard
        image={image}
        tag={tag}
        title={title}
        excerpt={excerpt}
        badgeText={badgeText}
        price={price}
        oldPrice={oldPrice}
        onButtonClick={onButtonClick}
        onWhatsAppClick={onSecondaryClick}
      />
    );

    if (href && !onClick) {
      return <Link href={href} className={`block ${linkClassName || ''}`}>{OverlayContent}</Link>;
    }
    return <div onClick={handleCardClick} className={`block ${linkClassName || ''}`}>{OverlayContent}</div>;
  }

  // Split variant uses FramedCard
  const FramedContent = (
    <FramedCard
      image={image}
      tag={tag}
      title={title}
      excerpt={excerpt}
      price={price}
      oldPrice={oldPrice}
      badgeText={badgeText}
      metaItems={metaItems}
      buttonText={buttonText}
      onButtonClick={() => onButtonClick?.({} as React.MouseEvent)}
      onWhatsAppClick={onSecondaryClick}
    />
  );

  if (href && !onClick) {
    return <Link href={href} className={`block ${linkClassName || ''}`}>{FramedContent}</Link>;
  }
  return <div onClick={handleCardClick} className={`block ${linkClassName || ''}`}>{FramedContent}</div>;
};

export default WigunaCard;
