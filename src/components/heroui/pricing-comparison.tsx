/**
 * HeroUI Pricing Comparison — Adapted for Bengkel Wiguna
 */

"use client";

import React from "react";
import { Icon } from "@iconify/react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Link,
  Spacer,
  Tooltip,
} from "@nextui-org/react";
import { cn } from "@nextui-org/react";

interface PricingTier {
  key: string;
  title: string;
  price: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

interface FeatureItem {
  title: string;
  helpText?: string;
  tiers: Record<string, boolean | string>;
}

interface FeatureCategory {
  title: string;
  items: FeatureItem[];
}

interface PricingComparisonProps {
  title?: string;
  subtitle?: string;
  tiers: PricingTier[];
  categories: FeatureCategory[];
}

export default function PricingComparison({
  title = "Perbandingan Paket Service",
  subtitle = "Pilih yang Sesuai Kebutuhan Anda",
  tiers = [],
  categories = []
}: PricingComparisonProps) {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col items-center py-12 sm:py-24 px-4 sm:px-6">
      <div className="flex max-w-xl flex-col text-center gap-2 mb-12">
        <span className="text-brand-blue font-semibold uppercase tracking-wider text-sm">
          {subtitle}
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h2>
      </div>

      {/* Mobile Version (Cards) */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:hidden w-full">
        {tiers.map((tier) => (
          <Card key={tier.key} className="p-3 brand-rounded border border-gray-100 shadow-md" shadow="none">
            <CardHeader className="flex flex-col items-start gap-2 pb-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{tier.title}</h3>
              <p className="text-medium text-default-500 dark:text-gray-400">{tier.description}</p>
            </CardHeader>
            <Divider />
            <CardBody className="gap-4 py-6">
              <p className="text-3xl font-bold text-brand-blue">{tier.price}</p>
              <ul className="flex flex-col gap-2">
                {categories.map(cat => 
                  cat.items.filter(item => item.tiers[tier.key] === true).map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Icon className="text-brand-blue" icon="ci:check" width={20} />
                      <p className="text-default-500 text-sm">{item.title}</p>
                    </li>
                  ))
                )}
              </ul>
            </CardBody>
            <CardFooter>
              <Button
                fullWidth
                as={Link}
                className="bg-brand-blue text-white font-medium"
                href={tier.buttonHref}
                radius="lg"
              >
                {tier.buttonText}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Desktop Version (Table) */}
      <div className="isolate hidden lg:block w-full overflow-x-auto">
        <table className="w-full table-fixed border-separate border-spacing-x-4 text-left">
          <thead>
            <tr>
              <td className="w-1/4" />
              {tiers.map((tier) => (
                <th key={tier.key} className="px-6 pt-6" scope="col">
                  <div className="text-xl font-bold text-gray-900 dark:text-white">{tier.title}</div>
                  <div className="mt-2 text-2xl font-bold text-brand-blue">{tier.price}</div>
                  <Button
                    fullWidth
                    as={Link}
                    className="mt-6 bg-brand-blue text-white font-medium shadow-md"
                    href={tier.buttonHref}
                    radius="lg"
                  >
                    {tier.buttonText}
                  </Button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {categories.map((cat, catIdx) => (
              <React.Fragment key={cat.title}>
                <tr>
                  <th
                    className={cn("pb-4 pt-12 text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wider", {
                      "pt-16": catIdx === 0,
                    })}
                    colSpan={tiers.length + 1}
                    scope="colgroup"
                  >
                    {cat.title}
                    <Divider className="mt-2 bg-gray-200 dark:bg-gray-700" />
                  </th>
                </tr>
                {cat.items.map((item) => (
                  <tr key={item.title} className="group">
                    <th className="py-4 text-medium font-medium text-default-700 dark:text-gray-300 border-b border-gray-50 dark:border-gray-800" scope="row">
                      <div className="flex items-center gap-2">
                        <span>{item.title}</span>
                        {item.helpText && (
                          <Tooltip content={item.helpText} placement="right">
                            <Icon
                              className="text-default-400 cursor-help"
                              icon="solar:info-circle-linear"
                              width={18}
                            />
                          </Tooltip>
                        )}
                      </div>
                    </th>
                    {tiers.map((tier) => (
                      <td key={tier.key} className="px-6 py-4 border-b border-gray-50 dark:border-gray-800 text-center">
                        {typeof item.tiers[tier.key] === "string" ? (
                          <span className="text-sm font-medium text-default-500">{item.tiers[tier.key]}</span>
                        ) : item.tiers[tier.key] === true ? (
                          <Icon className="mx-auto text-brand-blue" icon="ci:check" width={24} />
                        ) : (
                          <Icon className="mx-auto text-default-300" icon="ci:close-sm" width={24} />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
