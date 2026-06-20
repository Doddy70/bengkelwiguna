"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";

interface ServiceTabsProps {
  contentHtml: string;
  policies?: string;
  faqHtml?: string;
}

function classNames(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function ServiceTabs({ contentHtml, policies, faqHtml }: ServiceTabsProps) {
  const [selectedTab, setSelectedTab] = useState("details");

  const tabs = [
    {
      key: "details",
      name: "Detail",
      icon: "solar:document-text-linear",
      content: (
        <article
          className="prose prose-lg max-w-none
          prose-headings:font-bold prose-headings:text-gray-900 prose-headings:mb-4
          prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-4
          prose-a:text-[#224297] prose-a:no-underline hover:prose-a:underline
          prose-ul:list-disc prose-ul:pl-6 prose-li:text-gray-600
          prose-img:rounded-xl prose-img:shadow-md"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      ),
    },
    ...(policies
      ? [
          {
            key: "policies",
            name: "Syarat & Ketentuan",
            icon: "solar:shield-check-linear",
            content: (
              <div
                className="prose max-w-none text-gray-600
                prose-headings:font-bold prose-headings:text-gray-900
                prose-p:text-gray-600 prose-p:leading-relaxed"
                dangerouslySetInnerHTML={{ __html: policies }}
              />
            ),
          },
        ]
      : []),
    {
      key: "reviews",
      name: "Review",
      icon: "solar:star-linear",
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white"></div>
              <div className="w-10 h-10 rounded-full bg-gray-400 border-2 border-white"></div>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">4.8 / 5</p>
              <p className="text-xs text-gray-500">120 ulasan</p>
            </div>
          </div>
          <p className="text-sm text-gray-500 italic">
            Coming soon - review fitur dalam pengembangan.
          </p>
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
              <div
                className="prose max-w-none text-gray-600
                prose-headings:font-bold prose-headings:text-gray-900
                prose-p:text-gray-600 prose-p:leading-relaxed"
                dangerouslySetInnerHTML={{ __html: faqHtml }}
              />
            ),
          },
        ]
      : []),
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
          className="col-start-1 row-start-1 w-full appearance-none rounded-xl border border-gray-200 bg-white py-3 pl-4 pr-10 text-base font-medium text-gray-900 shadow-sm focus:border-[#224297] focus:outline-2 focus:outline-[#224297]"
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
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 size-5 text-gray-400"
        />
      </div>

      {/* Desktop: Tab navigation */}
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav aria-label="Tabs" className="-mb-px flex gap-1 lg:gap-4 overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setSelectedTab(tab.key)}
                aria-current={selectedTab === tab.key ? "page" : undefined}
                className={classNames(
                  selectedTab === tab.key
                    ? "border-[#224297] text-[#224297]"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                  "group inline-flex items-center border-b-2 px-1 py-3 text-sm font-medium whitespace-nowrap focus:outline-none"
                )}
              >
                <Icon
                  icon={tab.icon}
                  className={classNames(
                    selectedTab === tab.key
                      ? "text-[#224297]"
                      : "text-gray-400 group-hover:text-gray-500",
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
