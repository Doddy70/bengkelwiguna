"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

interface ServiceTabsProps {
  contentHtml: string;
  policies?: string;
  faqHtml?: string;
  serviceName?: string;
}

function classNames(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function ServiceTabs({ contentHtml, policies, faqHtml, serviceName = "Layanan Ini" }: ServiceTabsProps) {
  const [selectedTab, setSelectedTab] = useState("details");

  const tabs = [
    {
      key: "details",
      name: "Detail Layanan",
      icon: "solar:document-text-linear",
      content: (
        <article
          className="prose prose-lg max-w-none
          prose-headings:font-bold prose-headings:text-gray-900 prose-headings:mb-4 prose-headings:mt-8
          prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-4
          prose-a:text-[#224297] prose-a:no-underline hover:prose-a:underline
          prose-ul:list-disc prose-ul:pl-6 prose-li:text-gray-600
          prose-img:rounded-xl prose-img:shadow-md"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      ),
    },
    {
      key: "booking",
      name: "Booking Form",
      icon: "solar:calendar-linear",
      content: (
        <div className="py-6">
          <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-[#224297]/5 to-[#224297]/10 p-6 sm:p-8">
            <div className="text-center mb-6">
              <div className="mx-auto w-14 h-14 rounded-full bg-[#224297]/10 flex items-center justify-center mb-4">
                <Icon icon="solar:calendar-mark" className="w-7 h-7 text-[#224297]" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Booking {serviceName}</h3>
              <p className="text-sm text-gray-600">Reservasi mudah via WhatsApp</p>
            </div>

            <div className="space-y-4">
              <a
                href={`https://wa.me/6287817773888?text=${encodeURIComponent(`Halo Minna, saya ingin booking "${serviceName}" di Bengkel Wiguna.\n\nMohon info ketersediaan jadwal, terima kasih.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-xl transition-all shadow-lg"
              >
                <Icon icon="fa6-brands:whatsapp" width={24} />
                Booking via WhatsApp
              </a>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-[#224297]/5 text-gray-500">atau</span>
                </div>
              </div>

              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-white hover:bg-gray-50 text-[#224297] font-bold rounded-xl border-2 border-[#224297]/20 transition-all"
              >
                <Icon icon="solar:phone-linear" width={20} />
                Hubungi Kami
              </Link>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-start gap-3">
                <Icon icon="solar:map-point-linear" className="w-5 h-5 text-gray-400 mt-0.5" />
                <div className="text-sm text-gray-600">
                  <p className="font-medium text-gray-900">Lokasi Bengkel</p>
                  <p>Jl. Margonda No.268, Kemiri Muka, Depok 16423</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    ...(faqHtml
      ? [
          {
            key: "faq",
            name: "FAQ",
            icon: "solar:question-circle-linear",
            content: (
              <div className="py-6">
                <div
                  className="prose max-w-none text-gray-600
                  prose-headings:font-bold prose-headings:text-gray-900
                  prose-p:text-gray-600 prose-p:leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: faqHtml }}
                />
              </div>
            ),
          },
        ]
      : []),
  ];

  return (
    <div className="mt-12">
      {/* Tab Header */}
      <div className="border-b border-gray-200">
        <nav aria-label="Tabs" className="-mb-px flex gap-x-6 sm:gap-x-8 overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setSelectedTab(tab.key)}
              className={classNames(
                selectedTab === tab.key
                  ? "border-[#224297] text-[#224297]"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                "group inline-flex items-center gap-2 border-b-2 py-4 text-sm font-medium whitespace-nowrap focus:outline-none"
              )}
            >
              <Icon
                icon={tab.icon}
                className={classNames(
                  selectedTab === tab.key ? "text-[#224297]" : "text-gray-400 group-hover:text-gray-500",
                  "size-5"
                )}
                aria-hidden="true"
              />
              <span className="hidden xs:inline">{tab.name}</span>
              <span className="xs:hidden">{tab.name.split(" ")[0]}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {tabs.find((t) => t.key === selectedTab)?.content}
      </div>
    </div>
  );
}
