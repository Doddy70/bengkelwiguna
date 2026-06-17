"use client";

import React from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';

interface PromoBentoCardProps {
  title: string;
  excerpt?: string;
  image: string;
  tag?: string;
  price?: string;
  oldPrice?: string;
  className?: string;
  onClick?: () => void;
  onWhatsAppClick?: (e: React.MouseEvent) => void;
}

export default function PromoBentoCard({
  title,
  excerpt,
  image,
  tag,
  price,
  oldPrice,
  className = "",
  onClick,
  onWhatsAppClick
}: PromoBentoCardProps) {
  return (
    <div 
      className={`group relative overflow-hidden rounded-[2rem] bg-white ring-1 ring-black/5 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer flex flex-col h-[420px] ${className}`}
      onClick={onClick}
    >
      {/* Top Image Container */}
      <div className="absolute top-0 left-0 right-0 h-[65%] z-0 overflow-hidden bg-slate-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Soft gradient to blend with the white content area */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent z-10" />
      </div>

      {/* Top Tag */}
      {tag && (
        <div className="absolute top-5 left-5 z-20">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/90 backdrop-blur-md ring-1 ring-black/5 rounded-full text-[10px] font-black uppercase tracking-widest text-green-700 shadow-sm">
            <Icon icon="solar:verified-check-bold" className="w-3 h-3 text-green-500" />
            {tag}
          </span>
        </div>
      )}

      {/* Content Area - Bottom frosted/white section */}
      <div className="relative z-20 flex flex-col flex-1 mt-auto pt-32 p-6 sm:p-7 bg-white/40 backdrop-blur-xl">
        <h3 className="text-2xl font-bold text-gray-900 tracking-tight leading-tight mb-2 group-hover:text-[#224297] transition-colors duration-300">
          {title}
        </h3>
        
        {excerpt && (
          <p className="text-[15px] text-gray-700 font-medium line-clamp-2 mb-6 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
            {excerpt}
          </p>
        )}

        {/* Pricing & Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 mt-auto">
          <div className="flex flex-col">
            {oldPrice && (
              <span className="text-xs text-gray-400 line-through font-bold">{oldPrice}</span>
            )}
            <span className="text-[15px] font-bold text-gray-900 flex items-center gap-1.5">
              <Icon icon="solar:user-bold" className="text-gray-400 w-4 h-4" />
              {price}
            </span>
          </div>
          
          <button 
            onClick={(e) => { e.stopPropagation(); onClick?.(); }}
            className="flex items-center justify-center px-5 py-2.5 rounded-full bg-gray-100 text-gray-900 hover:bg-gray-200 font-semibold text-[15px] transition-all duration-300 shadow-sm"
          >
            Klaim <span className="ml-1.5 text-lg font-light leading-none">+</span>
          </button>
        </div>
      </div>
    </div>
  );
}
