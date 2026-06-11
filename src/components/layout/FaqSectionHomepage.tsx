/**
 * FaqSection — Bengkel Wiguna Homepage FAQ
 * Optimized for Indonesian automotive service context
 */

"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { ChevronDown } from "lucide-react";
import { defaultFaqs } from "@/const/faqData";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  title?: string;
  subtitle?: string;
  items?: FaqItem[];
}

export default function FaqSection({
  title = "Pertanyaan yang Sering Diajukan",
  subtitle = "Temukan jawaban untuk pertanyaan umum tentang layanan kami di Bengkel Wiguna",
  items = defaultFaqs,
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="lg:py-20 py-12 bg-gray-50" aria-labelledby="faq-heading">
      <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block py-2 px-4 rounded-full bg-brand-blue/10 text-brand-blue text-sm font-bold mb-4">
            ❓ FAQ
          </span>
          <h2 id="faq-heading" className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {items.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-6 text-left"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === index
                      ? "bg-brand-blue text-white rotate-180"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  <ChevronDown size={20} />
                </span>
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Masih ada pertanyaan?</p>
          <a
            href="https://wa.me/6287817773888?text=halo%20minna,%20saya%20ingin%20tanya%20tentang%20layanan%20di%20bengkel%20wiguna"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-blue text-white font-semibold rounded-full hover:bg-brand-blue/90 transition-colors"
          >
<Icon icon="logos:whatsapp" width={20} />
            Tanya via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
