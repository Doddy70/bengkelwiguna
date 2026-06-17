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
      <Tabs 
        aria-label="Promo Details Tabs" 
        color="primary" 
        variant="underlined"
        classNames={{
          tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
          cursor: "w-full bg-[#224297]",
          tab: "max-w-fit px-0 h-12",
          tabContent: "group-data-[selected=true]:text-[#224297] font-semibold text-base",
        }}
      >
        <Tab key="details" title="Detail Promo">
          <div className="py-6">
            <article
              className="prose prose-lg max-w-none dark:prose-invert
              prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-headings:mb-4
              prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-4
              prose-a:text-[#224297] dark:prose-a:text-[#ffd900] prose-a:no-underline hover:prose-a:underline
              prose-ul:list-disc prose-ul:pl-6 prose-li:text-gray-600 dark:prose-li:text-gray-300"
              dangerouslySetInnerHTML={{ __html: contentHtml || '<p>Tidak ada detail untuk promo ini.</p>' }}
            />
          </div>
        </Tab>
        
        <Tab key="syarat" title="Syarat & Ketentuan">
          <div className="py-6">
            {syaratHtml ? (
              <div
                className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300 dark:prose-invert"
                dangerouslySetInnerHTML={{ __html: syaratHtml }}
              />
            ) : (
              <div className="p-6 bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded-2xl flex items-center gap-4 text-gray-500">
                <Icon icon="solar:info-circle-bold-duotone" className="w-8 h-8 text-[#224297]" />
                <p>Syarat dan ketentuan lebih lanjut dapat ditanyakan langsung melalui WhatsApp.</p>
              </div>
            )}
          </div>
        </Tab>

        <Tab key="faq" title="FAQ">
          <div className="py-6">
            {faq && faq.length > 0 ? (
              <Accordion variant="splitted" className="px-0">
                {faq.map((item, idx) => (
                  <AccordionItem
                    key={idx}
                    aria-label={item.pertanyaan || item.q || `FAQ ${idx + 1}`}
                    title={<span className="font-bold text-gray-900 dark:text-white">{item.pertanyaan || item.q}</span>}
                    className="mb-2 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm"
                  >
                    <div 
                      className="text-gray-600 dark:text-gray-300 prose prose-sm max-w-none pb-4"
                      dangerouslySetInnerHTML={{ __html: item.jawaban || item.a || '' }}
                    />
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <div className="p-6 bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded-2xl flex items-center gap-4 text-gray-500">
                <Icon icon="solar:question-circle-bold-duotone" className="w-8 h-8 text-[#224297]" />
                <p>Belum ada FAQ untuk promo ini. Silakan hubungi kami untuk pertanyaan lebih lanjut.</p>
              </div>
            )}
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}
