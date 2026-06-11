/**
 * HeroUI Pricing Popular — Adapted for Bengkel Wiguna
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
  Chip,
  Divider,
  Link,
  Spacer,
} from "@nextui-org/react";

interface PricingTier {
  key: string;
  title: string;
  description?: string;
  price: string;
  priceSuffix?: string;
  features?: string[];
  mostPopular?: boolean;
  buttonText?: string;
  buttonHref?: string;
  buttonColor?: "primary" | "default" | "secondary" | "success" | "warning" | "danger";
}

interface PricingPopularProps {
  title?: string;
  subtitle?: string;
  tiers: PricingTier[];
}

export default function PricingPopular({
  title = "Pilih Paket Service",
  subtitle = "Solusi Hemat & Tuntas",
  tiers = []
}: PricingPopularProps) {
  return (
    <div className="flex w-full flex-col items-center py-12 sm:py-24 px-4 sm:px-6">
      <div className="flex max-w-xl flex-col text-center gap-2 mb-12">
        <span className="text-brand-blue font-semibold uppercase tracking-wider text-sm">
          {subtitle}
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl">
        {tiers.map((tier) => (
          <Card 
            key={tier.key} 
            className={`relative p-3 brand-rounded border-2 transition-all duration-300 ${
              tier.mostPopular 
                ? "border-brand-blue shadow-lg scale-105 z-10" 
                : "border-transparent shadow-md hover:border-brand-blue/30"
            }`} 
            shadow="none"
          >
            {tier.mostPopular ? (
              <Chip
                classNames={{
                  base: "absolute top-4 right-4 bg-brand-blue",
                  content: "font-medium text-white",
                }}
                variant="solid"
              >
                Terpopuler
              </Chip>
            ) : null}
            <CardHeader className="flex flex-col items-start gap-2 pb-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{tier.title}</h3>
              <p className="text-medium text-default-500 dark:text-gray-400 line-clamp-2">{tier.description}</p>
            </CardHeader>
            <Divider className="dark:bg-gray-700" />
            <CardBody className="gap-8 py-6">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-brand-blue">
                  {tier.price}
                </span>
                {tier.priceSuffix && (
                  <span className="text-small font-medium text-default-400 dark:text-gray-500">
                    {tier.priceSuffix}
                  </span>
                )}
              </div>
              <ul className="flex flex-col gap-3">
                {tier.features?.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Icon className="text-brand-blue mt-1" icon="ci:check" width={20} />
                    <p className="text-default-500 dark:text-gray-300 text-sm leading-relaxed">{feature}</p>
                  </li>
                ))}
              </ul>
            </CardBody>
            <CardFooter>
              <Button
                fullWidth
                as={Link}
                className={tier.mostPopular ? "bg-brand-blue text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"}
                href={tier.buttonHref || "#"}
                variant="flat"
                radius="lg"
              >
                {tier.buttonText || "Pesan Sekarang"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
