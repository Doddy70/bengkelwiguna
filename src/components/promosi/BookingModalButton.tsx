"use client";

import { useState, useEffect } from "react";
import BookingForm from "@/components/services/BookingForm";

interface BookingModalButtonProps {
  promoName: string;
  cf7FormId?: string;
  className?: string;
}

export default function BookingModalButton({ promoName, cf7FormId, className }: BookingModalButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className={className || "bg-[#224297] hover:bg-blue-800 text-white w-full md:w-auto px-8 py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-md"}
      >
        Booking Now
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Modal Content */}
          <div className="relative w-full max-w-2xl bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-100 dark:border-gray-800">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white line-clamp-1">Booking: {promoName}</h3>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 flex items-center justify-center shrink-0 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
                aria-label="Tutup"
              >
                ✕
              </button>
            </div>
            
            <div className="overflow-y-auto p-4 sm:p-6">
              <BookingForm serviceName={promoName} cf7FormId={cf7FormId} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
