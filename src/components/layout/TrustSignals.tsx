/**
 * TrustSignals — Bengkel Wiguna Trust Metrics
 * Shows key statistics to build trust with visitors
 */

"use client";

import React from "react";
import { Icon } from "@iconify/react";

interface TrustSignal {
  icon: string;
  value: string;
  label: string;
  description?: string;
}

interface TrustSignalsProps {
  title?: string;
  signals?: TrustSignal[];
}

const defaultSignals: TrustSignal[] = [
  {
    icon: "solar:calendar-bold-duotone",
    value: "30+",
    label: "Tahun Pengalaman",
    description: "Melayani ribuan kendaraan sejak 1990",
  },
  {
    icon: "solar:car-bold-duotone",
    value: "50.000+",
    label: "Mobil Dilayani",
    description: "Track record service yang terpercaya",
  },
  {
    icon: "solar:star-bold-duotone",
    value: "4.7",
    label: "Rating Google",
    description: "928+ review pelanggan",
  },
  {
    icon: "solar:shield-check-bold-duotone",
    value: "100%",
    label: "Garansi Service",
    description: "Jaminan kualitas pekerjaan kami",
  },
];

export default function TrustSignals({
  title = "Mengapa Memilih Bengkel Wiguna?",
  signals = defaultSignals,
}: TrustSignalsProps) {
  return (
    <section className="lg:py-16 py-12 bg-white border-y border-gray-100">
      <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
            {title}
          </h2>
        </div>

        {/* Trust Signals Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {signals.map((signal, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-gray-50 hover:bg-brand-blue/5 transition-colors duration-300"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-blue/10 text-brand-blue mb-4">
                <Icon icon={signal.icon} width={28} />
              </div>

              {/* Value */}
              <div className="text-3xl lg:text-4xl font-black text-brand-blue mb-2">
                {signal.value}
              </div>

              {/* Label */}
              <div className="text-lg font-bold text-gray-900 mb-1">
                {signal.label}
              </div>

              {/* Description */}
              {signal.description && (
                <p className="text-sm text-gray-500">
                  {signal.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
