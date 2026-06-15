"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { defaultFaqs } from "@/const/faqData";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  items?: FaqItem[];
}

export default function FaqSectionHomepage({
  items = defaultFaqs,
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 lg:py-24 bg-white dark:bg-gray-950 font-dm">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        
        {/* Outer Wrapper with Light Background — full-width */}
        <div className="bg-[#f2f6ff] dark:bg-blue-900/10 rounded-[2.5rem] p-6 lg:p-12 min-h-[480px]">
          <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
            
            {/* Kolom Kiri: Header & FAQ Accordion */}
            <div className="flex flex-col justify-center h-full">
              
              <div className="mb-10 max-w-xl">
                  <h2 className="text-4xl md:text-5xl font-semibold text-[#1a2b5e] dark:text-white mb-6 tracking-tight leading-[1.1]">
                      Mekanik Ahli & Bersertifikat
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                      Lakukan konsultasi kendaraan Anda hari ini dan dapatkan perawatan terpercaya dari tenaga mekanik profesional dan berpengalaman kami.
                  </p>
              </div>

              {/* Accordion Container */}
              <div className="space-y-3 mb-8">
                {items.slice(0, 4).map((faq, index) => {
                  const isOpen = openIndex === index;
                  
                  return (
                    <div
                      key={index}
                      className={`overflow-hidden transition-all duration-500 rounded-2xl ${
                        isOpen 
                          ? "bg-gradient-to-r from-[#224297] to-[#162d6b] shadow-xl" 
                          : "bg-white dark:bg-gray-900 shadow-sm hover:shadow-md cursor-pointer"
                      }`}
                      onClick={() => !isOpen && toggleFaq(index)}
                    >
                      <div className="p-5 lg:p-6 flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className={`text-lg lg:text-xl font-medium tracking-tight transition-colors duration-300 ${
                            isOpen ? "text-white mb-4" : "text-gray-900 dark:text-white"
                          }`}>
                            {faq.question}
                          </h3>
                          
                          {/* Answer Content - Only visible when open */}
                          <div
                            className={`transition-all duration-500 overflow-hidden ${
                              isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                            }`}
                          >
                            <ul className="text-white/90 space-y-3 font-light text-sm lg:text-base">
                              <li className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#ffd900] shrink-0 mt-2"></span>
                                <span className="leading-relaxed">{faq.answer}</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        {/* Toggle Icon */}
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFaq(index);
                          }}
                          className={`shrink-0 transition-transform duration-300 flex items-center justify-center ${
                            isOpen ? "text-white rotate-0" : "text-gray-400 -rotate-90"
                          }`}
                          aria-label="Toggle FAQ"
                        >
                          <Icon 
                            icon={isOpen ? "material-symbols:arrow-outward-rounded" : "material-symbols:arrow-drop-down-rounded"} 
                            width={32} 
                          />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CTA Button */}
              <div>
                <a
                  href="https://wa.me/6287817773888"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 bg-[#224297] hover:bg-[#1a3478] text-white py-3.5 pl-8 pr-3.5 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 group"
                >
                  Konsultasi Sekarang
                  <span className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#224297] group-hover:bg-[#ffd900] group-hover:text-[#224297] transition-colors">
                    <Icon icon="material-symbols:arrow-outward-rounded" width={20} />
                  </span>
                </a>
              </div>

            </div>

            {/* Kolom Kanan: Image + Floating Card */}
            <div className="relative w-full h-[360px] lg:h-auto min-h-[420px] rounded-[2rem] overflow-hidden shadow-2xl">
              <Image
                src="/images/faq-bg.jpg"
                alt="Tim Mekanik Bengkel Wiguna"
                fill
                className="object-cover object-center"
              />
              
              {/* Floating Graph Card */}
              <div className="absolute bottom-6 left-6 lg:bottom-10 lg:left-[-3rem] bg-white dark:bg-gray-900 p-5 rounded-2xl shadow-2xl z-10 w-[240px] border border-gray-100 dark:border-gray-800 hidden md:block">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden relative shrink-0">
                    <Image src="/images/faq-bg.jpg" alt="Avatar" fill className="object-cover" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Layanan Wiguna</p>
                    <p className="text-sm font-bold text-gray-900 dark:text-white">Kepuasan Pelanggan</p>
                  </div>
                </div>

                {/* CSS Bar Chart */}
                <div className="flex items-end justify-between gap-1.5 h-20 w-full mt-2">
                  <div className="w-full bg-[#224297]/20 rounded-t-sm h-[30%]"></div>
                  <div className="w-full bg-[#224297]/30 rounded-t-sm h-[45%]"></div>
                  <div className="w-full bg-[#224297]/40 rounded-t-sm h-[60%]"></div>
                  <div className="w-full bg-[#224297]/50 rounded-t-sm h-[75%]"></div>
                  <div className="w-full bg-[#224297] rounded-t-sm h-[100%] shadow-[0_0_10px_rgba(34,66,151,0.5)]"></div>
                  <div className="w-full bg-[#ffd900] rounded-t-sm h-[85%]"></div>
                  <div className="w-full bg-[#224297]/60 rounded-t-sm h-[65%]"></div>
                  <div className="w-full bg-[#224297]/40 rounded-t-sm h-[50%]"></div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
