"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ServiceTabsProps {
  services: any[];
  activeServiceIndex: number;
  onSelectService: (index: number) => void;
  className?: string;
}

export function ServiceTabs({
  services,
  activeServiceIndex,
  onSelectService,
  className
}: ServiceTabsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to active tab
  useEffect(() => {
    if (scrollRef.current) {
      const activeBtn = scrollRef.current.querySelector('[data-active="true"]');
      if (activeBtn) {
        activeBtn.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center"
        });
      }
    }
  }, [activeServiceIndex]);

  return (
    <div className={cn("relative", className)}>
      {/* Scrollable Tabs Container */}
      <div
        ref={scrollRef}
        className="flex items-center gap-2 overflow-x-auto pb-1 px-4 lg:px-0 -mx-4 lg:mx-0
                   scrollbar-hide scroll-smooth snap-x snap-mandatory
                   [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {services.map((item, idx) => {
          const isActive = activeServiceIndex === idx;
          return (
            <button
              key={item.id || idx}
              data-active={isActive}
              onClick={() => onSelectService(idx)}
              className={cn(
                "snap-center shrink-0 px-4 py-2.5 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer",
                isActive
                  ? "bg-blue-600 text-white shadow-[0_4px_14px_rgba(37,99,235,0.35)]"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
              )}
            >
              {item.name}
            </button>
          );
        })}
      </div>

      {/* Fade edges for scroll indication */}
      <div className="absolute left-0 top-0 bottom-1 w-4 bg-gradient-to-r from-slate-50 dark:from-[#060b13] to-transparent pointer-events-none lg:hidden" />
      <div className="absolute right-0 top-0 bottom-1 w-4 bg-gradient-to-l from-slate-50 dark:from-[#060b13] to-transparent pointer-events-none lg:hidden" />
    </div>
  );
}
