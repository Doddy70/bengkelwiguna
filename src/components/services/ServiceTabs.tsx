"use client";

import { useState, Fragment } from "react";
import { Icon } from "@iconify/react";

interface ServiceTabsProps {
  contentHtml: string;
  policies?: string;
  faqHtml?: string;
}

function classNames(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function ServiceTabs({ contentHtml, policies, faqHtml }: ServiceTabsProps) {
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
    ...(policies
      ? [
          {
            key: "policies",
            name: "Syarat & Ketentuan",
            icon: "solar:shield-check-linear",
            content: (
              <div className="py-6">
                <div
                  className="prose max-w-none text-gray-600
                  prose-headings:font-bold prose-headings:text-gray-900
                  prose-p:text-gray-600 prose-p:leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: policies }}
                />
              </div>
            ),
          },
        ]
      : []),
    {
      key: "reviews",
      name: "Review",
      icon: "solar:star-linear",
      content: (
        <div className="py-8 space-y-6">
          {/* Rating Summary */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              {[0, 1, 2, 3, 4].map((i) => (
                <Icon
                  key={i}
                  icon="solar:star-bold"
                  className={classNames(
                    i < 4 ? "text-yellow-400" : "text-gray-300",
                    "size-5"
                  )}
                />
              ))}
            </div>
            <span className="text-sm font-medium text-gray-600">4.8 dari 5</span>
          </div>

          {/* Review placeholder */}
          <div className="rounded-xl border border-gray-200 p-6 text-center">
            <div className="flex justify-center mb-3">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white"></div>
              </div>
            </div>
            <p className="text-sm font-medium text-gray-900 mb-1">120 Ulasan</p>
            <p className="text-sm text-gray-500 italic">
              Fitur review dalam pengembangan.
            </p>
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
      {/* Tab Header - Full Width */}
      <div className="border-b border-gray-200">
        <nav aria-label="Tabs" className="-mb-px flex gap-x-8 overflow-x-auto scrollbar-hide">
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
              <span>{tab.name}</span>
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
