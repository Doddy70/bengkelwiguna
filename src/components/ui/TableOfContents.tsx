"use client";

import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

interface Heading {
  id: string;
  text: string;
  level: number;
}

export const TableOfContents = () => {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Select all H2 and H3 inside the article content area
    const elements = Array.from(document.querySelectorAll(".blog-content-area h2, .blog-content-area h3"));
    
    const parsedHeadings = elements.map((elem, index) => {
      // If the heading doesn't have an ID, generate one based on its text
      let id = elem.id;
      if (!id) {
        id = elem.textContent?.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "") || `heading-${index}`;
        elem.id = id;
      }
      return {
        id,
        text: elem.textContent || "",
        level: Number(elem.tagName.replace("H", ""))
      };
    });

    setHeadings(parsedHeadings);

    // Setup Intersection Observer for scroll spy
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" } // trigger active state when heading is in the upper middle
    );

    elements.forEach((elem) => observer.observe(elem));

    return () => {
      elements.forEach((elem) => observer.unobserve(elem));
      observer.disconnect();
    };
  }, []);

  if (headings.length === 0) {
    return null; // Don't render if no headings found
  }

  const scrollToHeading = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // scroll with offset for fixed headers
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 md:p-6 mb-10 shadow-sm relative overflow-hidden group">
      {/* Decorative accent */}
      <div className="absolute top-0 left-0 w-1 h-full bg-brand-blue rounded-l-2xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
      
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-brand-blue/10 p-2 rounded-xl text-brand-blue shadow-inner">
          <Icon icon="solar:list-check-bold-duotone" className="w-5 h-5" />
        </div>
        <h3 className="text-lg font-black text-gray-900 tracking-tight m-0">Daftar Isi</h3>
      </div>
      <nav className="flex flex-col gap-2.5">
        {headings.map((heading) => (
          <a
            key={heading.id}
            href={`#${heading.id}`}
            onClick={(e) => scrollToHeading(e, heading.id)}
            className={`flex items-start text-sm font-medium transition-all duration-300 ${
              heading.level === 3 ? "ml-5 md:ml-6" : ""
            } ${
              activeId === heading.id
                ? "text-brand-blue font-bold translate-x-1"
                : "text-gray-500 hover:text-brand-blue hover:translate-x-1"
            }`}
          >
            {activeId === heading.id ? (
              <Icon icon="solar:round-alt-arrow-right-bold" className="w-4 h-4 mr-1.5 mt-0.5 text-brand-gold shrink-0" />
            ) : (
              <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mr-2.5 mt-1.5 shrink-0 transition-colors group-hover:bg-gray-400"></span>
            )}
            <span className="leading-tight">{heading.text}</span>
          </a>
        ))}
      </nav>
    </div>
  );
};
