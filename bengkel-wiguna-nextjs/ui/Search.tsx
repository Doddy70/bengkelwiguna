"use client";

import { useState } from "react";
import { Search, X } from "react-feather";

export default function SearchBox() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Search Button */}
            <button
                aria-label="search"
                className="search-btn p-0 cursor-pointer"
                onClick={() => setIsOpen(true)}
            >
                <Search />
            </button>

            {/* Search Wrap */}
            <div
                className={`search-wrap w-full md:py-6 py-4 fixed top-0 left-0 z-40 bg-white border-b border-gray-300 shadow-[0_4px_80px_rgba(0,0,0,0.1)] transition-transform duration-500 ease-in-out ${isOpen
                        ? "translate-y-0 pointer-events-auto"
                        : "-translate-y-full pointer-events-none"
                    }`}
            >
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 pb-0">
                    <div className="flex flex-row w-full">
                        <input
                            type="text"
                            placeholder="Search everything..."
                            className="form-control-lg h-full border-0 shadow-none text-xl pl-0 flex-1 focus:outline-none"
                        />
                        <button
                            className="btn btn-lg text-gray-900 border-0 cursor-pointer"
                            aria-label="close search"
                            onClick={() => setIsOpen(false)}
                        >
                            <X className="text-gray-900 dark:text-gray-100" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
