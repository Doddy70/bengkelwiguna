"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

const Subscribe = () => {
    const waUrl = "https://wa.me/6287817773888?text=halo%20mon,%20saya%20ingin%20tanya%20seputar%20servis%20mobil%20saya%20di%20bengkel%20wiguna.%20(web)";

    return (
        <div
            className="p-8 bg-gradient-to-br from-brand-blue to-[#050b14] text-white rounded-2xl shadow-xl shadow-blue-900/20 relative overflow-hidden"
            data-aos="zoom-in"
        >
            {/* Background Decorative */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl" />
            
            <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-6 relative">
                    <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20 p-2">
                        <Image
                            src="/images/cs-support.avif"
                            alt="Customer Support Bengkel Wiguna"
                            width={80}
                            height={80}
                            className="w-full h-auto object-contain"
                        />
                    </div>
                    {/* Online Status Indicator */}
                    <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 border-4 border-[#1a3567] rounded-full"></div>
                </div>

                <h3 className="text-2xl font-black uppercase tracking-tighter italic mb-2">
                    Butuh Bantuan?
                </h3>
                <p className="text-white/80 font-medium mb-8 text-sm leading-relaxed">
                    Punya pertanyaan seputar servis mobil atau ingin booking? Chat Minna sekarang untuk respon cepat!
                </p>

                <Link
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 bg-brand-gold hover:bg-yellow-400 text-brand-blue font-black uppercase tracking-widest rounded-xl transition-all duration-300 shadow-lg shadow-yellow-900/20 flex items-center justify-center gap-2 group"
                >
                    <Icon icon="fa6-brands:whatsapp" width={20} />
                    Chat Minna Sekarang
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
                
                <p className="mt-4 text-[10px] text-white/40 uppercase font-bold tracking-widest">
                    Tersedia Setiap Hari Kerja
                </p>
            </div>
        </div>
    );
};

export default Subscribe;
