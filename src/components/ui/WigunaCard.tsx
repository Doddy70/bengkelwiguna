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
  variant?: 'split' | 'overlay' | 'glass';
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
  isWide?: boolean;
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
  isWide?: boolean;
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
  isWide = false,
}) => {
  return (
    <div className={`group relative bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex ${isWide ? 'flex-col md:flex-row' : 'flex-col'} p-2 h-full overflow-hidden`}>
      {/* Image Container */}
      <div className={`relative overflow-hidden bg-gray-50 rounded-2xl shrink-0 ${isWide ? 'w-full md:w-[45%] h-52 md:h-auto md:self-stretch' : 'aspect-[16/10] md:aspect-[4/3] w-full'}`}>
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
      <div className="flex flex-col flex-1 p-5 justify-between min-w-0">
        <div>
          {/* Title */}
          <h3 className="text-xl font-black text-gray-900 tracking-tight uppercase leading-tight mb-2 group-hover:text-[#224297] transition-colors line-clamp-2">
            {title}
          </h3>

          {/* Excerpt */}
          {excerpt && (
            <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 md:line-clamp-4 mb-4">
              {excerpt}
            </p>
          )}
        </div>

        <div>
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
          <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
            <button
              onClick={onButtonClick}
              className="flex-1 py-3 px-5 rounded-xl bg-[#224297] hover:bg-[#1a356d] text-white font-bold text-sm text-center transition-all duration-300 shadow-sm hover:shadow-md"
            >
              {buttonText}
            </button>
            <button
              onClick={onWhatsAppClick}
              className="w-11 h-11 rounded-xl bg-[#224297] hover:bg-[#1a356d] text-white flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md"
              aria-label="Chat WhatsApp"
            >
              <Icon icon="fa6-brands:whatsapp" className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#224297] to-[#ffd900] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
  buttonText?: string;
  secondaryIcon?: string;
  metaItems?: Array<{ icon: string; text: string }>;
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
  buttonText = 'Lihat Detail',
  secondaryIcon,
  metaItems = [],
}) => {
  const isWhatsApp = !secondaryIcon || secondaryIcon.includes('whatsapp');
  const secondaryBtnBg = isWhatsApp 
    ? 'bg-[#25D366] hover:bg-[#128C7E] text-white' 
    : 'bg-white hover:bg-gray-100 text-gray-900';

  return (
    <div className="group relative w-full h-[530px] rounded-[2.5rem] overflow-hidden flex flex-col justify-end">
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

      {/* Gradient Blur Layer - Inspired by Liquid Glass progressive blur */}
      <div 
        className="absolute bottom-0 inset-x-0 h-[60%] z-10 backdrop-blur-2xl bg-black/25 pointer-events-none"
        style={{
          maskImage: 'linear-gradient(to top, black 0%, rgba(0,0,0,0.95) 45%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to top, black 0%, rgba(0,0,0,0.95) 45%, transparent 100%)'
        }}
      />

      <div className="relative z-20 p-6">

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

        {/* Meta Items (rendered dynamically for video/other tags) */}
        {metaItems && metaItems.length > 0 && (
          <div className="flex flex-wrap items-center gap-3 mb-4 text-white/75 text-xs font-semibold">
            {metaItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-1.5">
                <Icon icon={item.icon} className="w-4 h-4 text-[#ffd900]" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={onButtonClick}
            className="flex-1 py-3 px-5 rounded-full bg-white/20 hover:bg-white hover:text-[#224297] backdrop-blur-md border border-white/30 text-white font-bold text-sm text-center transition-all duration-300"
          >
            {buttonText}
          </button>
          <button
            onClick={onWhatsAppClick}
            className={`w-12 h-12 rounded-full ${secondaryBtnBg} flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105`}
            aria-label="Action Button"
          >
            <Icon icon={secondaryIcon || "fa6-brands:whatsapp"} className="w-6 h-6" />
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
// GLASS CARD (Glassmorphism Style)
// Premium frosted glass effect with backdrop blur
// Modern and elegant for luxury feel
// ============================================

interface GlassCardProps {
  image: string;
  tag?: string;
  title: string;
  excerpt?: string;
  badgeText?: string;
  price?: string;
  oldPrice?: string;
  metaItems?: Array<{ icon: string; text: string }>;
  buttonText?: string;
  onButtonClick?: (e: React.MouseEvent) => void;
  onWhatsAppClick?: (e: React.MouseEvent) => void;
  isWide?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  image,
  tag,
  title,
  excerpt,
  badgeText,
  price,
  oldPrice,
  metaItems = [],
  buttonText = 'Lihat Detail',
  onButtonClick,
  onWhatsAppClick,
  isWide = false,
}) => {
  return (
    <div className={`group relative h-full rounded-3xl overflow-hidden ${isWide ? 'flex flex-col md:flex-row' : ''}`}>
      {/* Image Container with Glass Effect */}
      <div className={`relative overflow-hidden rounded-3xl shrink-0 ${isWide ? 'w-full md:w-[45%] h-48 md:h-auto md:self-stretch' : 'aspect-[16/10] w-full'}`}>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Glass Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

        {/* Top Badges - Glass Effect */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          {tag && (
            <span className="inline-flex items-center gap-1.5 backdrop-blur-xl bg-white/30 border border-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              {tag}
            </span>
          )}
          {badgeText && (
            <span className="inline-flex items-center backdrop-blur-xl bg-[#ffd900]/90 border border-[#ffd900]/30 text-[#224297] text-[10px] font-black px-3 py-1.5 rounded-full shadow-lg uppercase tracking-wider">
              {badgeText}
            </span>
          )}
        </div>

        {/* Action Icons - Glass Pills */}
        <div className="absolute top-4 right-4 flex items-center gap-2">
          <button className="w-9 h-9 rounded-full backdrop-blur-xl bg-white/20 border border-white/20 flex items-center justify-center text-white hover:bg-white/40 transition-all duration-300 shadow-lg hover:scale-110">
            <Icon icon="solar:share-linear" className="w-4 h-4" />
          </button>
          <button className="w-9 h-9 rounded-full backdrop-blur-xl bg-white/20 border border-white/20 flex items-center justify-center text-white hover:bg-white/40 transition-all duration-300 shadow-lg hover:scale-110">
            <Icon icon="solar:heart-linear" className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Glass Content Panel */}
      <div className={`relative flex flex-col justify-between p-5 backdrop-blur-xl bg-white/80 border border-white/50 rounded-b-3xl ${isWide ? 'rounded-none rounded-r-3xl md:rounded-l-none md:rounded-l-3xl' : ''} shadow-xl -mt-2`}>
        {/* Glass top edge effect */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />

        <div className="flex flex-col flex-1 justify-between">
          <div>
            {/* Title */}
            <h3 className="text-lg font-bold text-gray-900 tracking-tight leading-snug mb-2 group-hover:text-[#224297] transition-colors line-clamp-2">
              {title}
            </h3>

            {/* Excerpt */}
            {excerpt && (
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-4">
                {excerpt}
              </p>
            )}
          </div>

          <div>
            {/* Price */}
            {(price || oldPrice) && (
              <div className="flex items-center gap-2 mb-4">
                {price && <span className="text-xl font-black text-[#224297]">{price}</span>}
                {oldPrice && <span className="text-sm text-gray-400 line-through">{oldPrice}</span>}
              </div>
            )}

            {/* Meta Items - Glass Pills */}
            {metaItems.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 mb-4">
                {metaItems.map((item, idx) => (
                  <div key={idx} className="inline-flex items-center gap-1.5 backdrop-blur-md bg-[#224297]/10 border border-[#224297]/20 text-[#224297] px-3 py-1.5 rounded-full text-xs font-medium">
                    <Icon icon={item.icon} className="w-3.5 h-3.5" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Action Buttons - Glass Style */}
            <div className="flex items-center gap-3 pt-3 border-t border-gray-200/50">
              <button
                onClick={onButtonClick}
                className="flex-1 py-2.5 px-4 rounded-xl backdrop-blur-xl bg-[#224297] hover:bg-[#1a3580] text-white font-bold text-sm text-center transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 border border-[#224297]/50"
              >
                {buttonText}
              </button>
              <button
                onClick={onWhatsAppClick}
                className="w-11 h-11 rounded-xl backdrop-blur-xl bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 border border-[#25D366]/50"
                aria-label="Chat WhatsApp"
              >
                <Icon icon="fa6-brands:whatsapp" className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Glow Effect on Hover */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#224297] via-[#224297]/50 to-[#ffd900] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
  isWide = false,
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
  if (variant === 'glass') {
    const GlassContent = (
      <GlassCard
        image={image}
        tag={tag}
        title={title}
        excerpt={excerpt}
        badgeText={badgeText}
        price={price}
        oldPrice={oldPrice}
        metaItems={metaItems}
        buttonText={buttonText}
        onButtonClick={() => onButtonClick?.({} as React.MouseEvent)}
        onWhatsAppClick={onSecondaryClick}
        isWide={isWide}
      />
    );

    if (href && !onClick) {
      return <Link href={href} className={`block h-full ${linkClassName || ''}`}>{GlassContent}</Link>;
    }
    return <div onClick={handleCardClick} className={`block h-full ${linkClassName || ''}`}>{GlassContent}</div>;
  }

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
        buttonText={buttonText}
        secondaryIcon={secondaryIcon}
        metaItems={metaItems}
      />
    );

    if (href && !onClick) {
      return <Link href={href} className={`block h-full ${linkClassName || ''}`}>{OverlayContent}</Link>;
    }
    return <div onClick={handleCardClick} className={`block h-full ${linkClassName || ''}`}>{OverlayContent}</div>;
  }

  // Default: FramedCard (split variant)
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
      isWide={isWide}
    />
  );

  if (href && !onClick) {
    return <Link href={href} className={`block h-full ${linkClassName || ''}`}>{FramedContent}</Link>;
  }
  return <div onClick={handleCardClick} className={`block h-full ${linkClassName || ''}`}>{FramedContent}</div>;
};

export default WigunaCard;
