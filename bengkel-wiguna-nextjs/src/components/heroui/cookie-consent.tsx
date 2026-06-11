"use client";

import React, { useState, useEffect } from "react";
import {Button, Link} from "@nextui-org/react";

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
  acceptLabel = "Setuju Semua",
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
    <div className="pointer-events-none fixed inset-x-0 bottom-0 px-6 pb-6 z-50">
      <div className="pointer-events-auto ml-auto max-w-xl brand-rounded border border-divider bg-background/80 px-6 py-5 shadow-lg backdrop-blur-md">
        <p className="text-small font-normal text-default-700 leading-relaxed">
          {description} Klik{" "}
          <span className="font-bold">&quot;{acceptLabel}&quot;</span> untuk menyetujui penggunaan cookie kami. 
          Anda juga dapat mengunjungi <span className="font-bold">&quot;{settingsLabel}&quot;</span> untuk pengaturan lebih lanjut. 
          Baca selengkapnya di{" "}
          <Link href={policyLink.href} size="sm" className="text-brand-blue font-medium underline-offset-4" underline="hover">
            {policyLink.label}.
          </Link>
        </p>
        <div className="mt-4 flex items-center gap-x-3">
          <Button
            onClick={handleAccept}
            className="px-6 bg-brand-blue text-white font-bold brand-rounded"
          >
            {acceptLabel}
          </Button>
          <Button 
            onClick={onSettings}
            className="font-medium brand-rounded" 
            variant="flat"
          >
            {settingsLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
