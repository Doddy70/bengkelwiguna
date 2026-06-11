"use client";

import { useState, useEffect, useRef } from "react";
import { Search, X } from "react-feather";

export default function SearchBox() {
    const [isOpen, setIsOpen] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    // Handle ESC key to close
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, []);

    // Focus input when opened
    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    return (
        <>
            {/* Search Button */}
            <button
                aria-label="Buka pencarian"
                className="search-btn p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors cursor-pointer flex items-center justify-center"
                onClick={() => setIsOpen(true)}
            >
                <Search size={20} aria-hidden="true" />
            </button>

            {/* Search Wrap - Increased Z-index to 100 to be above header (z-60) */}
            <div
                className={`search-wrap w-full md:py-6 py-4 fixed top-0 left-0 z-[100] bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-[0_4px_30px_rgba(0,0,0,0.1)] transition-all duration-500 ease-in-out ${isOpen
                        ? "translate-y-0 opacity-100 pointer-events-auto"
                        : "-translate-y-full opacity-0 pointer-events-none"
                    }`}
                role="dialog"
                aria-modal="true"
                aria-label="Pencarian situs"
            >
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
                    <div className="flex flex-row w-full items-center gap-4">
                        <Search className="text-brand-blue" size={24} />
                        <label htmlFor="search-input" className="sr-only">Cari di situs ini</label>
                        <input
                            id="search-input"
                            ref={inputRef}
                            type="text"
                            placeholder="Ketik kata kunci pencarian..."
                            className="h-12 bg-transparent border-0 shadow-none text-xl w-full focus:outline-none dark:text-white"
                        />
                        <button
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
                            aria-label="Tutup pencarian"
                            onClick={() => setIsOpen(false)}
                        >
                            <X size={24} className="text-gray-900 dark:text-gray-100" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Backdrop for Search */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[90] transition-opacity duration-500"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
}
