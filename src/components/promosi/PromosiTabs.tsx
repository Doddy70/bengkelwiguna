"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import { Accordion, AccordionItem } from "@nextui-org/react";

interface FaqItem {
  q?: string;
  a?: string;
  pertanyaan?: string;
  jawaban?: string;
}

interface PromosiTabsProps {
  contentHtml: string;
  syaratHtml?: string;
  faq?: FaqItem[];
}

function classNames(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function PromosiTabs({ contentHtml, syaratHtml, faq }: PromosiTabsProps) {
  const [selectedTab, setSelectedTab] = useState("details");

  const tabs = [
    {
      key: "details",
      name: "Detail",
      icon: "solar:tag-price-linear",
      content: (
        <article
          className="prose prose-lg max-w-none dark:prose-invert
          prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-headings:mb-4
          prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-4
          prose-a:text-[#224297] dark:prose-a:text-[#ffd900] prose-a:no-underline hover:prose-a:underline
          prose-ul:list-disc prose-ul:pl-6 prose-li:text-gray-600 dark:prose-li:text-gray-300
          prose-img:rounded-xl prose-img:shadow-md"
          dangerouslySetInnerHTML={{ __html: contentHtml || "<p>Tidak ada detail untuk promo ini.</p>" }}
        />
      ),
    },
    {
      key: "syarat",
      name: "Syarat & Ketentuan",
      icon: "solar:shield-check-linear",
      content: syaratHtml ? (
        <div
          className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300 dark:prose-invert
          prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white
          prose-p:leading-relaxed"
          dangerouslySetInnerHTML={{ __html: syaratHtml }}
        />
      ) : (
        <div className="p-5 sm:p-6 bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded-xl sm:rounded-2xl flex items-start gap-4 text-gray-500">
          <Icon
            icon="solar:info-circle-bold-duotone"
            className="w-6 h-6 sm:w-8 sm:h-8 text-[#224297] shrink-0"
          />
          <p className="text-sm sm:text-base">
            Syarat dan ketentuan lebih lanjut dapat ditanyakan langsung melalui WhatsApp.
          </p>
        </div>
      ),
    },
    {
      key: "faq",
      name: "FAQ",
      icon: "solar:question-circle-linear",
      content:
        faq && faq.length > 0 ? (
          <Accordion variant="splitted" className="px-0">
            {faq.map((item, idx) => (
              <AccordionItem
                key={idx}
                aria-label={item.pertanyaan || item.q || `FAQ ${idx + 1}`}
                title={
                  <span className="font-bold text-sm sm:text-base text-gray-900 dark:text-white">
                    {item.pertanyaan || item.q}
                  </span>
                }
                className="mb-2 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm"
              >
                <div
                  className="text-gray-600 dark:text-gray-300 prose prose-sm max-w-none pb-4 text-sm sm:text-base"
                  dangerouslySetInnerHTML={{ __html: item.jawaban || item.a || "" }}
                />
              </AccordionItem>
            ))}
          </Accordion>
        ) : (
          <div className="p-5 sm:p-6 bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded-xl sm:rounded-2xl flex items-start gap-4 text-gray-500">
            <Icon
              icon="solar:question-circle-bold-duotone"
              className="w-6 h-6 sm:w-8 sm:h-8 text-[#224297] shrink-0"
            />
            <p className="text-sm sm:text-base">
              Belum ada FAQ untuk promo ini. Silakan hubungi kami untuk pertanyaan lebih lanjut.
            </p>
          </div>
        ),
    },
  ];

  const currentTab = tabs.find((t) => t.key === selectedTab) || tabs[0];

  return (
    <div>
      {/* Mobile: Dropdown select */}
      <div className="grid grid-cols-1 sm:hidden relative">
        <select
          value={selectedTab}
          onChange={(e) => setSelectedTab(e.target.value)}
          aria-label="Pilih tab"
          className="col-start-1 row-start-1 w-full appearance-none rounded-xl border border-gray-200 bg-white py-3 pl-4 pr-10 text-base font-medium text-gray-900 shadow-sm dark:bg-gray-800 dark:text-white dark:border-gray-700 focus:border-[#224297] focus:outline-2 focus:outline-[#224297]"
        >
          {tabs.map((tab) => (
            <option key={tab.key} value={tab.key}>
              {tab.name}
            </option>
          ))}
        </select>
        <Icon
          aria-hidden="true"
          icon="solar:alt-arrow-down-linear"
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 size-5 text-gray-400 dark:text-gray-500"
        />
      </div>

      {/* Desktop: Tab navigation */}
      <div className="hidden sm:block">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav aria-label="Tabs" className="-mb-px flex gap-1 lg:gap-4 overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setSelectedTab(tab.key)}
                aria-current={selectedTab === tab.key ? "page" : undefined}
                className={classNames(
                  selectedTab === tab.key
                    ? "border-[#224297] text-[#224297] dark:border-[#ffd900] dark:text-[#ffd900]"
                    : "border-transparent text-gray-500 dark:text-gray-400 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-200",
                  "group inline-flex items-center border-b-2 px-1 py-3 text-sm font-medium whitespace-nowrap focus:outline-none"
                )}
              >
                <Icon
                  icon={tab.icon}
                  className={classNames(
                    selectedTab === tab.key
                      ? "text-[#224297] dark:text-[#ffd900]"
                      : "text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-300",
                    "mr-1.5 -ml-0.5 size-5"
                  )}
                />
                <span className="hidden xs:inline">{tab.name}</span>
                <span className="xs:hidden">{tab.name.split(" ")[0]}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      <div className="py-6">{currentTab.content}</div>
    </div>
  );
}
