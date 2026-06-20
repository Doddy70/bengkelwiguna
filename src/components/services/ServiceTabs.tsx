"use client";

import { Tabs, Tab } from "@nextui-org/react";
import { Icon } from "@iconify/react";

interface ServiceTabsProps {
  contentHtml: string;
  policies?: string;
  faqHtml?: string;
}

export default function ServiceTabs({ contentHtml, policies, faqHtml }: ServiceTabsProps) {
  return (
    <div className="flex w-full flex-col mt-8">
      {/* Mobile: Scrollable horizontal tabs with better touch targets */}
      <div className="relative overflow-x-auto scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
        <Tabs
          aria-label="Service Details Tabs"
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
                <Icon icon="solar:document-text-linear" className="text-lg sm:text-xl" />
                <span>Detail</span>
              </div>
            }
          >
            <div className="py-6">
              <article
                className="prose prose-lg max-w-none
                prose-headings:font-bold prose-headings:text-gray-900 prose-headings:mb-4
                prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-4
                prose-a:text-[#224297] prose-a:no-underline hover:prose-a:underline
                prose-ul:list-disc prose-ul:pl-6 prose-li:text-gray-600
                prose-img:rounded-xl prose-img:shadow-md"
                dangerouslySetInnerHTML={{ __html: contentHtml }}
              />
            </div>
          </Tab>

          {policies && (
            <Tab
              key="policies"
              title={
                <div className="flex items-center gap-1.5">
                  <Icon icon="solar:shield-check-linear" className="text-lg sm:text-xl" />
                  <span className="hidden xs:inline">Syarat &</span> Ketentuan
                </div>
              }
            >
              <div className="py-6">
                <div
                  className="prose max-w-none text-gray-600
                  prose-headings:font-bold prose-headings:text-gray-900
                  prose-p:text-gray-600 prose-p:leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: policies }}
                />
              </div>
            </Tab>
          )}

          <Tab
            key="reviews"
            title={
              <div className="flex items-center gap-1.5">
                <Icon icon="solar:star-linear" className="text-lg sm:text-xl" />
                <span>Review</span>
              </div>
            }
          >
            <div className="py-6">
               <div className="text-gray-600">
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl mb-4">
                    <div className="flex -space-x-2">
                      <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white"></div>
                      <div className="w-10 h-10 rounded-full bg-gray-400 border-2 border-white"></div>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">4.8 / 5</p>
                      <p className="text-xs text-gray-500">120 ulasan</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 italic">Coming soon - review fitur dalam pengembangan.</p>
               </div>
            </div>
          </Tab>

          {faqHtml && (
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
                 <div
                  className="prose max-w-none text-gray-600
                  prose-headings:font-bold prose-headings:text-gray-900
                  prose-p:text-gray-600 prose-p:leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: faqHtml }}
                />
              </div>
            </Tab>
          )}
        </Tabs>
        {/* Gradient fade indicator for scrollable tabs on mobile */}
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none sm:hidden" />
      </div>
    </div>
  );
}
