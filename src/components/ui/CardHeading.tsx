"use client";

import { Icon } from '@iconify/react';

/**
 * CardHeading Component - Tailwind UI Style
 * Versatile card header for service/detail pages
 */

// ============================================
// TYPE 1: Simple Card Heading
// ============================================
interface SimpleCardHeadingProps {
  title: string;
  className?: string;
}

export function SimpleCardHeading({ title, className = '' }: SimpleCardHeadingProps) {
  return (
    <div className={`border-b border-gray-200 bg-white px-4 py-5 sm:px-6 ${className}`}>
      <h3 className="text-base font-semibold text-gray-900">{title}</h3>
    </div>
  );
}

// ============================================
// TYPE 2: Card Heading with Action Button
// ============================================
interface ActionCardHeadingProps {
  title: string;
  actionLabel?: string;
  onAction?: () => void;
  actionIcon?: string;
  className?: string;
}

export function ActionCardHeading({
  title,
  actionLabel,
  onAction,
  actionIcon = 'solar:plus-bold',
  className = ''
}: ActionCardHeadingProps) {
  return (
    <div className={`border-b border-gray-200 bg-white px-4 py-5 sm:px-6 ${className}`}>
      <div className="-mt-2 -ml-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
        <div className="mt-2 ml-4">
          <h3 className="text-base font-semibold text-gray-900">{title}</h3>
        </div>
        {actionLabel && (
          <div className="mt-2 ml-4 shrink-0">
            <button
              type="button"
              onClick={onAction}
              className="relative inline-flex items-center rounded-lg bg-[#224297] px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#1a3567] transition-colors"
            >
              <Icon icon={actionIcon} className="mr-1.5 size-4" />
              {actionLabel}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================
// TYPE 3: Card Heading with Description
// ============================================
interface DescriptionCardHeadingProps {
  title: string;
  description?: string;
  className?: string;
}

export function DescriptionCardHeading({
  title,
  description,
  className = ''
}: DescriptionCardHeadingProps) {
  return (
    <div className={`border-b border-gray-200 bg-white px-4 py-5 sm:px-6 ${className}`}>
      <h3 className="text-base font-semibold text-gray-900">{title}</h3>
      {description && (
        <p className="mt-1 text-sm text-gray-500">{description}</p>
      )}
    </div>
  );
}

// ============================================
// TYPE 4: Card Heading with Avatar & Actions
// ============================================
interface AvatarCardHeadingProps {
  avatar?: string;
  avatarAlt?: string;
  title: string;
  subtitle?: string;
  primaryActionLabel?: string;
  primaryActionIcon?: string;
  onPrimaryAction?: () => void;
  secondaryActionLabel?: string;
  secondaryActionIcon?: string;
  onSecondaryAction?: () => void;
  className?: string;
}

export function AvatarCardHeading({
  avatar,
  avatarAlt = 'Avatar',
  title,
  subtitle,
  primaryActionLabel,
  primaryActionIcon = 'solar:phone-bold',
  onPrimaryAction,
  secondaryActionLabel,
  secondaryActionIcon = 'solar:chat-circle-bold',
  onSecondaryAction,
  className = ''
}: AvatarCardHeadingProps) {
  return (
    <div className={`border-b border-gray-200 bg-white px-4 py-5 sm:px-6 ${className}`}>
      <div className="-mt-4 -ml-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
        <div className="mt-4 ml-4">
          <div className="flex items-center">
            <div className="shrink-0">
              {avatar ? (
                <img
                  alt={avatarAlt}
                  src={avatar}
                  className="size-12 rounded-full object-cover"
                />
              ) : (
                <div className="size-12 rounded-full bg-[#224297] flex items-center justify-center">
                  <Icon icon="solar:user-bold" className="size-6 text-[#ffd900]" />
                </div>
              )}
            </div>
            <div className="ml-4">
              <h3 className="text-base font-semibold text-gray-900">{title}</h3>
              {subtitle && (
                <p className="text-sm text-gray-500">{subtitle}</p>
              )}
            </div>
          </div>
        </div>
        <div className="mt-4 ml-4 flex shrink-0 gap-3">
          {secondaryActionLabel && (
            <button
              type="button"
              onClick={onSecondaryAction}
              className="relative inline-flex items-center rounded-lg bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#128C7E] transition-colors"
            >
              <Icon icon={secondaryActionIcon} className="mr-1.5 size-4" />
              <span>{secondaryActionLabel}</span>
            </button>
          )}
          {primaryActionLabel && (
            <button
              type="button"
              onClick={onPrimaryAction}
              className="relative inline-flex items-center rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 ring-1 shadow-sm ring-gray-300 ring-inset hover:bg-gray-50 transition-colors"
            >
              <Icon icon={primaryActionIcon} className="mr-1.5 size-4 text-gray-400" />
              <span>{primaryActionLabel}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// ============================================
// TYPE 5: Full Featured Card Heading (with Meta)
// ============================================
interface FullCardHeadingProps {
  avatar?: string;
  avatarAlt?: string;
  title: string;
  meta?: string;
  timestamp?: string;
  badges?: Array<{ label: string; variant?: 'default' | 'success' | 'warning' | 'info' }>;
  onShare?: () => void;
  className?: string;
}

export function FullCardHeading({
  avatar,
  avatarAlt = 'Avatar',
  title,
  meta,
  timestamp,
  badges = [],
  onShare,
  className = ''
}: FullCardHeadingProps) {
  const badgeColors = {
    default: 'bg-gray-100 text-gray-700',
    success: 'bg-green-100 text-green-700',
    warning: 'bg-yellow-100 text-yellow-700',
    info: 'bg-blue-100 text-blue-700',
  };

  return (
    <div className={`bg-white px-4 py-5 sm:px-6 ${className}`}>
      <div className="flex items-start gap-4">
        {avatar && (
          <div className="shrink-0">
            <img
              alt={avatarAlt}
              src={avatar}
              className="size-12 rounded-full object-cover"
            />
          </div>
        )}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-base font-semibold text-gray-900 truncate">{title}</h3>
            {badges.map((badge, idx) => (
              <span
                key={idx}
                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${badgeColors[badge.variant || 'default']}`}
              >
                {badge.label}
              </span>
            ))}
          </div>
          {(meta || timestamp) && (
            <p className="text-sm text-gray-500">
              {meta && <span>{meta}</span>}
              {meta && timestamp && <span className="mx-1">·</span>}
              {timestamp && <span>{timestamp}</span>}
            </p>
          )}
        </div>
        {onShare && (
          <button
            type="button"
            onClick={onShare}
            className="shrink-0 p-2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <Icon icon="solar:share-bold" className="size-5" />
          </button>
        )}
      </div>
    </div>
  );
}

// ============================================
// DEFAULT EXPORT - Service Detail Card Header
// ============================================
interface ServiceCardHeaderProps {
  category?: string;
  title: string;
  excerpt?: string;
  image?: string;
  imageAlt?: string;
  durasi?: string;
  garansi?: string;
  harga?: string;
  onWhatsApp?: () => void;
  onMaps?: () => void;
  className?: string;
}

export default function ServiceCardHeader({
  category,
  title,
  excerpt,
  image,
  imageAlt = 'Service Image',
  durasi,
  garansi,
  harga,
  onWhatsApp,
  onMaps,
  className = ''
}: ServiceCardHeaderProps) {
  return (
    <div className={`bg-gradient-to-br from-[#224297] to-[#0f1d45] ${className}`}>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div>
            {category && (
              <span className="inline-flex items-center rounded-full bg-[#ffd900] px-3 py-1 text-xs font-black uppercase tracking-wider text-[#224297] mb-4">
                {category}
              </span>
            )}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
              {title}
            </h1>
            {excerpt && (
              <p className="text-lg text-white/80 font-medium leading-relaxed mb-6">
                {excerpt}
              </p>
            )}

            {/* Meta Pills */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              {durasi && (
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                  <Icon icon="solar:clock-circle-bold" width={18} />
                  <span>{durasi}</span>
                </div>
              )}
              {garansi && (
                <div className="flex items-center gap-2 px-4 py-2 bg-green-500/20 backdrop-blur-sm rounded-full text-green-300 text-sm font-medium border border-green-500/30">
                  <Icon icon="solar:shield-check-bold" width={18} />
                  <span>Garansi {garansi}</span>
                </div>
              )}
              {harga && (
                <div className="flex items-center gap-2 px-4 py-2 bg-[#ffd900] text-[#224297] rounded-full text-sm font-bold">
                  <Icon icon="solar:tag-price-bold" width={18} />
                  <span>{harga}</span>
                </div>
              )}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              {onWhatsApp && (
                <button
                  type="button"
                  onClick={onWhatsApp}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#ffd900] hover:bg-yellow-400 text-[#224297] font-bold rounded-xl transition-colors shadow-lg"
                >
                  <Icon icon="fa6-brands:whatsapp" width={20} />
                  Chat Minna
                </button>
              )}
              {onMaps && (
                <button
                  type="button"
                  onClick={onMaps}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-colors border border-white/20"
                >
                  <Icon icon="solar:map-point-bold" width={20} />
                  Lihat Lokasi
                </button>
              )}
            </div>
          </div>

          {/* Image */}
          {image && (
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={image}
                  alt={imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#ffd900]/30 rounded-full blur-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-white/10 rounded-full blur-xl -z-10" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
