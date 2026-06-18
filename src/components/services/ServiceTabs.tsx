"use client";

import { Tabs, Tab } from "@nextui-org/react";

interface ServiceTabsProps {
  contentHtml: string;
  policies?: string;
  faqHtml?: string;
}

export default function ServiceTabs({ contentHtml, policies, faqHtml }: ServiceTabsProps) {
  return (
    <div className="flex w-full flex-col mt-8">
      <Tabs 
        aria-label="Service Details Tabs" 
        color="primary" 
        variant="underlined"
        classNames={{
          base: "max-w-full overflow-x-auto scrollbar-hide",
          tabList: "gap-4 md:gap-6 w-max min-w-full relative rounded-none p-0 border-b border-divider flex-nowrap",
          cursor: "w-full bg-[#224297]",
          tab: "max-w-fit px-2 md:px-0 h-12 whitespace-nowrap",
          tabContent: "group-data-[selected=true]:text-[#224297] font-semibold",
        }}
      >
        <Tab key="details" title="Detail Layanan">
          <div className="py-6">
            <article
              className="prose prose-lg max-w-none
              prose-headings:font-bold prose-headings:text-gray-900 prose-headings:mb-4
              prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-4
              prose-a:text-[#224297] prose-a:no-underline hover:prose-a:underline
              prose-ul:list-disc prose-ul:pl-6 prose-li:text-gray-600"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
          </div>
        </Tab>
        
        {policies && (
          <Tab key="policies" title="Syarat & Ketentuan">
            <div className="py-6">
              <div
                className="prose max-w-none text-gray-600"
                dangerouslySetInnerHTML={{ __html: policies }}
              />
            </div>
          </Tab>
        )}
        
        {/* Mock Review Tab for now until backend is ready */}
        <Tab key="reviews" title="Review">
          <div className="py-6">
             <div className="text-gray-600">
                <p>Belum ada ulasan untuk layanan ini.</p>
             </div>
          </div>
        </Tab>

        {faqHtml && (
          <Tab key="faq" title="FAQ">
            <div className="py-6">
               <div
                className="prose max-w-none text-gray-600"
                dangerouslySetInnerHTML={{ __html: faqHtml }}
              />
            </div>
          </Tab>
        )}
      </Tabs>
    </div>
  );
}
