"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import BookingForm from "@/components/services/BookingForm";

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
  promoName?: string;
  cf7FormId?: string;
}

function classNames(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function PromosiTabs({ contentHtml, syaratHtml, faq, promoName, cf7FormId }: PromosiTabsProps) {
  const [selectedTab, setSelectedTab] = useState("details");

  const tabs = [
    {
      key: "details",
      name: "Detail Promo",
      icon: "solar:tag-price-linear",
      content: (
        <div className="py-6">
          <article
            className="prose prose-lg max-w-none dark:prose-invert
            prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-headings:mb-4 prose-headings:mt-6
            prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-4
            prose-a:text-[#224297] dark:prose-a:text-[#ffd900] prose-a:no-underline hover:prose-a:underline
            prose-ul:list-disc prose-ul:pl-6 prose-li:text-gray-600 dark:prose-li:text-gray-300
            prose-img:rounded-xl prose-img:shadow-md"
            dangerouslySetInnerHTML={{ __html: contentHtml || "<p>Tidak ada detail untuk promo ini.</p>" }}
          />

          {syaratHtml && (
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Icon icon="solar:shield-check-linear" className="size-5 text-[#224297] dark:text-[#ffd900]" />
                Syarat & Ketentuan
              </h3>
              <div
                className="prose prose-sm max-w-none text-gray-600 dark:text-gray-300
                prose-p:leading-relaxed"
                dangerouslySetInnerHTML={{ __html: syaratHtml }}
              />
            </div>
          )}
        </div>
      ),
    },
    {
      key: "booking",
      name: "Booking Form",
      icon: "solar:calendar-linear",
      content: <BookingForm serviceName={promoName} compact cf7FormId={cf7FormId} />,
    },
    {
      key: "faq",
      name: "FAQ",
      icon: "solar:question-circle-linear",
      content:
        faq && faq.length > 0 ? (
          <div className="py-6">
            <Accordion variant="splitted" className="px-0">
              {faq.map((item, idx) => (
                <AccordionItem
                  key={idx}
                  aria-label={item.pertanyaan || item.q || `FAQ ${idx + 1}`}
                  title={
                    <span className="font-medium text-sm sm:text-base text-gray-900 dark:text-white">
                      {item.pertanyaan || item.q}
                    </span>
                  }
                  className="mb-2 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm"
                >
                  <div
                    className="text-gray-600 dark:text-gray-300 prose prose-sm max-w-none pb-2 text-sm sm:text-base"
                    dangerouslySetInnerHTML={{ __html: item.jawaban || item.a || "" }}
                  />
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ) : (
          <div className="py-6">
            <div className="rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 p-6 flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#224297]/10">
                <Icon icon="solar:question-circle-bold-duotone" className="h-5 w-5 text-[#224297]" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">Belum ada FAQ</p>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Silakan hubungi kami untuk pertanyaan lebih lanjut.
                </p>
              </div>
            </div>
          </div>
        ),
    },
  ];

  return (
    <div className="mt-12">
      {/* Tab Header */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav aria-label="Tabs" className="-mb-px flex gap-x-6 sm:gap-x-8 overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setSelectedTab(tab.key)}
              className={classNames(
                selectedTab === tab.key
                  ? "border-[#224297] text-[#224297] dark:border-[#ffd900] dark:text-[#ffd900]"
                  : "border-transparent text-gray-500 dark:text-gray-400 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-200",
                "group inline-flex items-center gap-2 border-b-2 py-4 text-sm font-medium whitespace-nowrap focus:outline-none"
              )}
            >
              <Icon
                icon={tab.icon}
                className={classNames(
                  selectedTab === tab.key
                    ? "text-[#224297] dark:text-[#ffd900]"
                    : "text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-300",
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
