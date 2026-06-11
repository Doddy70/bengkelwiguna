/**
 * HeroUI FAQ Basic — Adapted for Bengkel Wiguna
 */

"use client";

import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { FaqItem } from "@/types/wordpress";

interface FaqBasicProps {
  title?: string;
  subtitle?: string;
  items: FaqItem[];
  selectionMode?: "single" | "multiple";
}

export default function FaqBasic({
  title = "Pertanyaan Sering Diajukan",
  subtitle = "FAQ",
  items = [],
  selectionMode = "multiple"
}: FaqBasicProps) {
  if (!items || items.length === 0) return null;

  return (
    <section className="mx-auto w-full max-w-6xl px-0 py-12 sm:py-24 md:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-6">
        <div className="flex flex-col gap-2 px-2">
          <span className="text-brand-blue font-semibold uppercase tracking-wider text-sm">
            {subtitle}
          </span>
          <h2 className="text-3xl font-bold leading-7 text-gray-900 dark:text-white">
            {title}
          </h2>
        </div>

        <Accordion
          fullWidth
          keepContentMounted
          className="gap-3"
          itemClasses={{
            base: "px-6 !bg-default-100 dark:!bg-gray-800 !shadow-none hover:!bg-default-200/50 brand-rounded border border-transparent hover:border-brand-blue/20 transition-all",
            title: "font-medium text-gray-900 dark:text-gray-100",
            trigger: "py-6",
            content: "pt-0 pb-6 text-base text-default-500 dark:text-gray-400",
          }}
          selectionMode={selectionMode}
          variant="splitted"
        >
          {items.map((item, i) => (
            <AccordionItem
              key={i}
              indicator={
                <Icon 
                  icon="lucide:plus" 
                  className="text-brand-blue" 
                  width={24} 
                />
              }
              title={item.q}
            >
              {item.a}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
