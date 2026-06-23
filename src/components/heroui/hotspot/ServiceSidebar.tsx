import React from "react";
import { motion } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { ChevronRight } from "lucide-react";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ServiceSidebarProps {
  services: any[];
  activeServiceIndex: number;
  onSelectService: (index: number) => void;
  className?: string;
}

export function ServiceSidebar({
  services,
  activeServiceIndex,
  onSelectService,
  className
}: ServiceSidebarProps) {
  const activeService = services[activeServiceIndex];

  return (
    <div className={cn("diag-sidebar flex flex-col", className)}>

      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 rounded bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
            <span className="text-blue-600 dark:text-blue-400 text-xs">⚙️</span>
          </div>
          <span className="text-[9px] font-bold text-blue-600 dark:text-blue-400 tracking-widest uppercase">Fasilitas Modern</span>
        </div>
        <h2 className="text-2xl lg:text-[26px] font-black tracking-tight leading-tight mb-2.5 text-gray-900 dark:text-white">
          {activeService?.name || "Layanan"}
        </h2>
        <p className="text-xs leading-relaxed text-gray-600 dark:text-gray-400">
          {activeService?.description || "Pilih layanan untuk melihat interaksi detail."}
        </p>
      </div>

      <div className="flex flex-col gap-2">
        {services.map((item, idx) => {
          const isActive = activeServiceIndex === idx;
          return (
            <button
              key={item.id || idx}
              onClick={() => onSelectService(idx)}
              className={cn(
                "w-full px-4 py-3 rounded-xl text-xs font-bold transition-all duration-300 text-left flex items-center justify-between border relative overflow-hidden group cursor-pointer",
                isActive
                  ? "bg-blue-500/10 text-blue-600 border-blue-500 dark:bg-blue-950/40 dark:text-white dark:border-blue-500/60 shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                  : "bg-white/60 hover:bg-white dark:bg-slate-950/30 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-white/5 hover:dark:bg-slate-900/40 hover:dark:text-white"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="sidebar-active-indicator"
                  className="absolute inset-0 bg-blue-500/5 dark:bg-blue-500/10"
                  initial={false}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <div className="flex items-center gap-3 relative z-10">
                <span 
                  className={cn(
                    "w-2 h-2 rounded-full transition-colors duration-300", 
                    isActive ? "bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" : "bg-gray-400 dark:bg-gray-700"
                  )} 
                />
                <span>{item.name}</span>
              </div>
              <ChevronRight 
                size={14} 
                className={cn(
                  "relative z-10 transition-all duration-300", 
                  isActive ? "text-blue-500 dark:text-white translate-x-0" : "text-gray-400 dark:text-gray-600 group-hover:translate-x-0.5"
                )} 
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
