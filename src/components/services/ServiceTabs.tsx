"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import BookingForm from "./BookingForm";

interface ServiceTabsProps {
  contentHtml: string;
  policies?: string;
  faqHtml?: string;
  serviceName?: string;
}

function classNames(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function ServiceTabs({ contentHtml, policies, faqHtml, serviceName }: ServiceTabsProps) {
  const [selectedTab, setSelectedTab] = useState("details");

  const tabs = [
    {
      key: "details",
      name: "Detail Layanan",
      icon: "solar:document-text-linear",
      content: (
        <div className="py-6">
          <article
            className="prose prose-lg max-w-none
            prose-headings:font-bold prose-headings:text-gray-900 prose-headings:mb-4 prose-headings:mt-8
            prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-4
            prose-a:text-[#224297] prose-a:no-underline hover:prose-a:underline
            prose-ul:list-disc prose-ul:pl-6 prose-li:text-gray-600
            prose-img:rounded-xl prose-img:shadow-md"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />

          {policies && (
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Icon icon="solar:shield-check-linear" className="size-5 text-[#224297]" />
                Syarat & Ketentuan
              </h3>
              <div
                className="prose prose-sm max-w-none text-gray-600
                prose-p:leading-relaxed"
                dangerouslySetInnerHTML={{ __html: policies }}
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
      content: <BookingForm serviceName={serviceName} compact />,
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
