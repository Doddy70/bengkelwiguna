"use client";

/**
 * SEO-Optimized Breadcrumb Component
 * Features:
 * - JSON-LD Schema.org markup for search engines
 * - Multiple style variants
 * - Brand colors integration
 * - Accessible (ARIA labels)
 */

import Link from "next/link";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";

// ============================================
// TYPES
// ============================================

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  variant?: "default" | "minimal" | "card" | "file" | "location";
  showHome?: boolean;
  homeLabel?: string;
  className?: string;
  schemaData?: {
    name: string;
    url: string;
  }[];
}

// ============================================
// JSON-LD SCHEMA GENERATOR
// ============================================

const generateBreadcrumbSchema = (items: BreadcrumbItem[]) => {
  const schemaItems = items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.label,
    ...(item.href && { "item": `https://bengkelwiguna.com${item.href}` })
  }));

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": schemaItems
  };
};

// ============================================
// VARIANT STYLES
// ============================================

const variantStyles = {
  default: "inline-flex items-center space-x-1 md:space-x-2 bg-white/70 backdrop-blur-md border border-white/40 rounded-full px-4 py-2 shadow-sm",
  minimal: "inline-flex items-center space-x-1 md:space-x-2",
  card: "flex flex-col bg-white dark:bg-gray-900 rounded-2xl p-4 shadow-lg border border-gray-100 dark:border-gray-800",
  file: "inline-flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 rounded-lg px-4 py-2",
  location: "inline-flex items-center space-x-2 bg-brand-blue/5 dark:bg-brand-blue/10 rounded-full px-4 py-2 border border-brand-blue/10 dark:border-brand-blue/20"
};

const linkStyles = {
  default: "inline-flex items-center text-xs md:text-sm font-semibold text-gray-500 hover:text-brand-blue dark:hover:text-brand-gold transition-colors duration-200",
  minimal: "inline-flex items-center text-xs md:text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-brand-blue dark:hover:text-brand-gold transition-colors",
  card: "inline-flex items-center text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-brand-blue dark:hover:text-brand-gold transition-colors",
  file: "inline-flex items-center text-xs font-medium text-gray-500 hover:text-brand-blue transition-colors",
  location: "inline-flex items-center text-xs md:text-sm font-semibold text-brand-blue/70 dark:text-brand-gold/70 hover:text-brand-blue dark:hover:text-brand-gold transition-colors"
};

const activeStyles = {
  default: "inline-flex items-center text-xs md:text-sm font-bold text-gray-900 dark:text-white bg-brand-gold/20 px-2 py-0.5 rounded-full",
  minimal: "inline-flex items-center text-xs md:text-sm font-semibold text-gray-900 dark:text-white",
  card: "inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white",
  file: "inline-flex items-center text-xs font-semibold text-gray-900 dark:text-white bg-gray-200 dark:bg-gray-700 px-2 py-0.5 rounded",
  location: "inline-flex items-center text-xs md:text-sm font-bold text-brand-blue dark:text-brand-gold"
};

const separatorStyles = {
  default: "w-3 h-3 md:w-4 md:h-4 text-gray-400 mx-1 md:mx-2",
  minimal: "w-3 h-3 text-gray-300 dark:text-gray-600 mx-1",
  card: "w-4 h-4 text-gray-400 mx-2",
  file: "w-3 h-3 text-gray-400 mx-2",
  location: "w-3 h-3 md:w-4 md:h-4 text-brand-blue/40 dark:text-brand-gold/40 mx-1 md:mx-2"
};

// ============================================
// MAIN COMPONENT
// ============================================

export const Breadcrumb = ({
  items,
  variant = "default",
  showHome = true,
  homeLabel = "Home",
  className = "",
  schemaData
}: BreadcrumbProps) => {
  const pathname = usePathname();

  // Build full items list with Home
  const allItems: BreadcrumbItem[] = showHome
    ? [{ label: homeLabel, href: "/" }, ...items]
    : items;

  // Generate schema data if not provided
  const schema = schemaData || allItems.map(item => ({
    name: item.label,
    url: item.href || ""
  }));

  return (
    <>
      {/* JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(allItems))
        }}
      />

      {/* Breadcrumb Navigation */}
      <nav
        className={`${className}`}
        aria-label={`Breadcrumb: ${allItems.map(i => i.label).join(" → ")}`}
      >
        <ol className={variantStyles[variant]}>
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;
            const isFirst = index === 0;

            return (
              <li
                key={index}
                className={`inline-flex items-center ${
                  variant === "card" && !isLast ? "mb-2" : ""
                }`}
              >
                {/* Home Icon for first item */}
                {isFirst && showHome && variant === "location" && (
                  <Icon
                    icon="solar:home-2-linear"
                    className="w-4 h-4 mr-1 text-brand-blue/60 dark:text-brand-gold/60"
                  />
                )}

                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className={linkStyles[variant]}
                    aria-label={`Go to ${item.label}`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className={isLast ? activeStyles[variant] : linkStyles[variant]}
                    aria-current={isLast ? "page" : undefined}
                  >
                    {item.label}
                  </span>
                )}

                {/* Separator */}
                {!isLast && (
                  <Icon
                    icon={
                      variant === "file"
                        ? "solar:file-linear"
                        : variant === "location"
                        ? "solar:map-point-linear"
                        : "solar:alt-arrow-right-linear"
                    }
                    className={separatorStyles[variant]}
                    aria-hidden="true"
                  />
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};

// ============================================
// HELPER: Auto-generate from pathname
// ============================================

export const useBreadcrumb = () => {
  const pathname = usePathname();

  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    if (!pathname) return [];

    const paths = pathname.split("/").filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [];

    paths.forEach((path, index) => {
      const href = "/" + paths.slice(0, index + 1).join("/");
      const label = path
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());

      breadcrumbs.push({ label, href });
    });

    return breadcrumbs;
  };

  return generateBreadcrumbs();
};

// ============================================
// EXPORTS
// ============================================

export default Breadcrumb;
