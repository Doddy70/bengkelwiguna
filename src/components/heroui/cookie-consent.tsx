"use client";

import React, { useState, useEffect } from "react";
import { Link } from "@nextui-org/react";

interface CookieConsentProps {
  description?: React.ReactNode;
  policyLink?: {
    label: string;
    href: string;
  };
  acceptLabel?: string;
  settingsLabel?: string;
  onAccept?: () => void;
  onSettings?: () => void;
}

export default function CookieConsent({
  description = "Kami menggunakan cookie untuk meningkatkan pengalaman Anda di situs kami, mengingat preferensi Anda, dan kunjungan berulang.",
  policyLink = {
    label: "Kebijakan Privasi",
    href: "/privacy-policy"
  },
  acceptLabel = "Terima Semua",
  settingsLabel = "Pengaturan",
  onAccept,
  onSettings
}: CookieConsentProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "true");
    setIsVisible(false);
    if (onAccept) onAccept();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex flex-col justify-between gap-x-8 gap-y-4 bg-white p-6 ring-1 ring-gray-900/10 md:flex-row md:items-center lg:px-8">
      <p className="max-w-4xl text-sm text-gray-900">
        {description}{" "}
        Baca selengkapnya di{" "}
        <Link
          href={policyLink.href}
          className="font-semibold text-[#224297] hover:text-[#1a356d] transition-colors"
        >
          {policyLink.label}
        </Link>
        .
      </p>
      <div className="flex shrink-0 items-center gap-x-5">
        <button
          type="button"
          onClick={handleAccept}
          className="rounded-md bg-[#224297] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#1a356d] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#224297]"
        >
          {acceptLabel}
        </button>
        <button
          type="button"
          onClick={onSettings}
          className="text-sm font-semibold text-gray-900 hover:text-[#224297] transition-colors"
        >
          {settingsLabel}
        </button>
      </div>
    </div>
  );
}
