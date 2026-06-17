import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FlyoutMenu() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div 
            className="relative" 
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <button className="flex items-center gap-1 px-4 py-2 text-white font-medium hover:text-brand-gold transition-colors">
                Menu Utama
                <svg className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 -translate-x-1/2 mt-2 w-screen max-w-md bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden"
                    >
                        <div className="p-4 grid gap-2">
                           // items here
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
