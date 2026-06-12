/**
 * BexonStyle FAQ Section — Bengkel Wiguna
 * Accordion + Sidebar CTA
 */

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
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
    <section className="lg:py-24 py-12 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
        <div className="grid lg:grid-cols-2 gap-16 items-stretch">
          
          {/* Kolom Kiri: FAQ Accordion */}
          <div className="flex flex-col justify-center">
            <div className="mb-10">
                <span className="inline-block bg-brand-gold text-brand-blue px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-4 shadow-xl shadow-yellow-900/10">
                    Bantuan & FAQ
                </span>
                <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4 italic tracking-tighter uppercase">
                    Pertanyaan Umum
                </h2>
                <p className="text-gray-600 dark:text-gray-400 font-medium text-lg">
                    Temukan jawaban cepat seputar layanan kami.
                </p>
            </div>

            <div className="space-y-4">
              {items.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="text-lg font-black text-gray-900 dark:text-white pr-4 italic tracking-tighter">
                      {faq.question}
                    </span>
                    <span
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        openIndex === index
                          ? "bg-brand-blue text-white rotate-180"
                          : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                      }`}
                    >
                      <ChevronDown size={18} />
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Kolom Kanan: Image + CTA Overlay */}
          <div className="lg:sticky lg:top-32 h-full" data-aos="fade-left">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-full min-h-[400px]">
              <Image
                src="/images/faq-bg.jpg"
                alt="FAQ Bengkel Wiguna"
                fill
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-10">
                <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter mb-4">
                    Masih punya pertanyaan lain?
                </h3>
                <a
                    href="https://wa.me/6287817773888?text=halo%20mon,%20saya%20ingin%20tanya%20seputar%20servis%20mobil%20saya%20di%20bengkel%20wiguna.%20(web)"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 w-full py-4 bg-brand-gold hover:bg-yellow-400 text-brand-blue font-black uppercase tracking-widest rounded-xl transition-all duration-300 shadow-lg"
                >
                    <span className="text-xl">💬</span>
                    Chat Konsultasi Sekarang
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
