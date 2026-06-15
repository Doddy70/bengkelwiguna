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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 lg:py-24 bg-white dark:bg-neutral-950 font-dm overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#224297]/10 dark:bg-[#224297]/20 rounded-full text-xs font-bold uppercase tracking-wider text-[#224297] dark:text-[#ffd900] mb-4">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white tracking-tight uppercase mb-4">
            TANYA JAWAB
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Pertanyaan Umum tentang Bengkel Wiguna
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* Left Column: FAQ Accordions */}
          <div className="space-y-4">
            {items.slice(0, 5).map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`relative overflow-hidden rounded-2xl transition-all duration-500 ${
                    isOpen
                      ? "bg-white dark:bg-gray-800 shadow-xl shadow-[#224297]/10"
                      : "bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm shadow-lg hover:shadow-xl cursor-pointer border border-gray-100 dark:border-gray-800"
                  }`}
                  onClick={() => !isOpen && toggleFaq(index)}
                >
                  {/* Glassmorphism border effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/40 via-transparent to-white/20 dark:from-gray-800/40 dark:via-transparent dark:to-gray-800/20 pointer-events-none" />

                  <div className="relative p-6 lg:p-7">
                    <div className="flex items-start gap-5">
                      {/* Number Badge */}
                      <div className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-black text-lg transition-colors duration-300 ${
                        isOpen
                          ? "bg-[#224297] text-white"
                          : "bg-[#224297]/10 text-[#224297] dark:bg-[#ffd900]/10 dark:text-[#ffd900]"
                      }`}>
                        {String(index + 1).padStart(2, '0')}
                      </div>

                      <div className="flex-1">
                        {/* Question */}
                        <h3 className={`text-lg lg:text-xl font-bold tracking-tight transition-colors duration-300 mb-0 ${
                          isOpen
                            ? "text-[#224297] dark:text-white"
                            : "text-gray-900 dark:text-white"
                        }`}>
                          {faq.question}
                        </h3>

                        {/* Answer - Smooth expand/collapse */}
                        <div className={`transition-all duration-500 ease-out ${
                          isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0 overflow-hidden"
                        }`}>
                          <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                              {faq.answer}
                            </p>

                            {/* Quick Actions */}
                            <div className="mt-4 flex items-center gap-3">
                              <a
                                href="https://wa.me/6287817773888"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-medium text-[#224297] dark:text-[#ffd900] hover:underline"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <Icon icon="fa6-brands:whatsapp" className="w-4 h-4" />
                                Tanya via WhatsApp
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Expand Icon */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFaq(index);
                        }}
                        className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isOpen
                            ? "bg-[#ffd900] text-[#224297] rotate-180"
                            : "bg-gray-100 dark:bg-gray-800 text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700"
                        }`}
                        aria-label={isOpen ? "Collapse" : "Expand"}
                      >
                        <Icon icon="solar:alt-arrow-down-linear" width={18} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* CTA Card */}
            <div className="mt-8">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#224297] to-[#0f1d45] p-6 lg:p-8">
                {/* Decorative blobs */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#ffd900]/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#224297]/40 rounded-full blur-3xl" />

                <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="text-center sm:text-left">
                    <h4 className="text-xl font-bold text-white mb-2">
                      Still have questions?
                    </h4>
                    <p className="text-white/70 text-sm">
                      Chat with our team directly
                    </p>
                  </div>
                  <a
                    href="https://wa.me/6287817773888"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center gap-3 px-6 py-3 bg-[#ffd900] hover:bg-yellow-400 text-[#224297] font-bold rounded-full transition-all hover:shadow-lg hover:-translate-y-0.5"
                  >
                    <Icon icon="fa6-brands:whatsapp" className="w-5 h-5" />
                    Chat Minna
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Image with Glassmorphism */}
          <div className="relative lg:sticky lg:top-24">
            {/* Main Image Container */}
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
              <Image
                src="/images/faq-bg.jpg"
                alt="Tim Mekanik Bengkel Wiguna"
                fill
                className="object-cover"
              />

              {/* Glassmorphism Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent dark:from-gray-900/30 dark:via-gray-900/10 dark:to-transparent" />

              {/* Bottom gradient for text readability */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />

              {/* Floating Trust Card */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-xl dark:bg-gray-900/90 rounded-2xl p-5 shadow-2xl border border-white/20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-[#ffd900] ring-offset-2 ring-offset-white dark:ring-offset-gray-900">
                      <Image
                        src="/images/cs-support.png"
                        alt="Customer Support"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Online 24/7</p>
                      <p className="font-bold text-gray-900 dark:text-white">Asisten Wiguna</p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-black text-[#224297] dark:text-[#ffd900]">15+</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Tahun</p>
                    </div>
                    <div className="border-x border-gray-200 dark:border-gray-700">
                      <p className="text-2xl font-black text-[#224297] dark:text-[#ffd900]">10K+</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Pelanggan</p>
                    </div>
                    <div>
                      <p className="text-2xl font-black text-[#224297] dark:text-[#ffd900]">4.9</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Rating</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-8 -right-8 w-32 h-32 bg-[#ffd900]/20 rounded-full blur-3xl" />
            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-[#224297]/20 rounded-full blur-3xl" />
          </div>

        </div>
      </div>
    </section>
  );
}
