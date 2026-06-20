"use client";

import { Tabs, Tab, Accordion, AccordionItem } from "@nextui-org/react";
import { Icon } from "@iconify/react";

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

export default function PromosiTabs({ contentHtml, syaratHtml, faq }: PromosiTabsProps) {
  return (
    <div className="flex w-full flex-col mt-8">
      {/* Mobile: Scrollable horizontal tabs */}
      <div className="relative overflow-x-auto scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
        <Tabs
          aria-label="Promo Details Tabs"
          color="primary"
          variant="underlined"
          classNames={{
            base: "max-w-full",
            tabList: "gap-2 sm:gap-4 md:gap-6 w-full min-w-[max-content] relative rounded-none p-0 border-b border-divider",
            cursor: "w-full bg-[#224297]",
            tab: "h-12 px-3 sm:px-4 min-w-[max-content]",
            tabContent: "group-data-[selected=true]:text-[#224297] group-data-[selected=true]:font-bold font-medium text-sm sm:text-base",
          }}
        >
          <Tab
            key="details"
            title={
              <div className="flex items-center gap-1.5">
                <Icon icon="solar:tag-price-linear" className="text-lg sm:text-xl" />
                <span>Detail</span>
              </div>
            }
          >
            <div className="py-6">
              <article
                className="prose prose-lg max-w-none dark:prose-invert
                prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-headings:mb-4
                prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-4
                prose-a:text-[#224297] dark:prose-a:text-[#ffd900] prose-a:no-underline hover:prose-a:underline
                prose-ul:list-disc prose-ul:pl-6 prose-li:text-gray-600 dark:prose-li:text-gray-300
                prose-img:rounded-xl prose-img:shadow-md"
                dangerouslySetInnerHTML={{ __html: contentHtml || '<p>Tidak ada detail untuk promo ini.</p>' }}
              />
            </div>
          </Tab>

          <Tab
            key="syarat"
            title={
              <div className="flex items-center gap-1.5">
                <Icon icon="solar:shield-check-linear" className="text-lg sm:text-xl" />
                <span className="hidden xs:inline">Syarat &</span> Ketentuan
              </div>
            }
          >
            <div className="py-6">
              {syaratHtml ? (
                <div
                  className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300 dark:prose-invert
                  prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white
                  prose-p:leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: syaratHtml }}
                />
              ) : (
                <div className="p-5 sm:p-6 bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded-xl sm:rounded-2xl flex items-start gap-4 text-gray-500">
                  <Icon icon="solar:info-circle-bold-duotone" className="w-6 h-6 sm:w-8 sm:h-8 text-[#224297] shrink-0" />
                  <p className="text-sm sm:text-base">Syarat dan ketentuan lebih lanjut dapat ditanyakan langsung melalui WhatsApp.</p>
                </div>
              )}
            </div>
          </Tab>

          <Tab
            key="faq"
            title={
              <div className="flex items-center gap-1.5">
                <Icon icon="solar:question-circle-linear" className="text-lg sm:text-xl" />
                <span>FAQ</span>
              </div>
            }
          >
            <div className="py-6">
              {faq && faq.length > 0 ? (
                <Accordion variant="splitted" className="px-0">
                  {faq.map((item, idx) => (
                    <AccordionItem
                      key={idx}
                      aria-label={item.pertanyaan || item.q || `FAQ ${idx + 1}`}
                      title={<span className="font-bold text-sm sm:text-base text-gray-900 dark:text-white">{item.pertanyaan || item.q}</span>}
                      className="mb-2 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm"
                    >
                      <div
                        className="text-gray-600 dark:text-gray-300 prose prose-sm max-w-none pb-4 text-sm sm:text-base"
                        dangerouslySetInnerHTML={{ __html: item.jawaban || item.a || '' }}
                      />
                    </AccordionItem>
                  ))}
                </Accordion>
              ) : (
                <div className="p-5 sm:p-6 bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded-xl sm:rounded-2xl flex items-start gap-4 text-gray-500">
                  <Icon icon="solar:question-circle-bold-duotone" className="w-6 h-6 sm:w-8 sm:h-8 text-[#224297] shrink-0" />
                  <p className="text-sm sm:text-base">Belum ada FAQ untuk promo ini. Silakan hubungi kami untuk pertanyaan lebih lanjut.</p>
                </div>
              )}
            </div>
          </Tab>
        </Tabs>
        {/* Gradient fade for scrollable tabs on mobile */}
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none sm:hidden dark:from-gray-900" />
      </div>
    </div>
  );
}
