"use client";

import React, { useState } from "react";
import {Button, Link} from "@nextui-org/react";
import {Icon} from "@iconify/react";

interface PromoBannerProps {
  text?: string;
  actionLabel?: string;
  actionHref?: string;
  isClosable?: boolean;
  onClose?: () => void;
}

export default function PromoBanner({
  text = "Dapatkan free voucher 50k untuk kedatangan Anda selanjutnya.",
  actionLabel = "Lihat Promo",
  actionHref = "/promo",
  isClosable = true,
  onClose
}: PromoBannerProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) onClose();
  };

  return (
    <div className="flex w-full items-center gap-x-3 border-b-1 border-divider bg-brand-blue px-6 py-2 sm:px-3.5 sm:before:flex-1">
      <p className="text-small text-white font-medium">
        <Link className="text-inherit" href={actionHref}>
          {text}&nbsp;
        </Link>
      </p>
      <Button
        as={Link}
        className="group relative h-8 overflow-hidden bg-white text-tiny font-bold text-brand-blue brand-rounded"
        endContent={
          <Icon
            className="flex-none outline-none transition-transform group-data-[hover=true]:translate-x-0.5 [&>path]:stroke-[2.5]"
            icon="solar:arrow-right-linear"
            width={14}
          />
        }
        href={actionHref}
      >
        {actionLabel}
      </Button>
      <div className="flex flex-1 justify-end">
        {isClosable && (
          <Button 
            isIconOnly 
            aria-label="Close Banner" 
            className="-m-1" 
            size="sm" 
            variant="light"
            onClick={handleClose}
          >
            <Icon aria-hidden="true" className="text-white/80" icon="lucide:x" width={18} />
          </Button>
        )}
      </div>
    </div>
  );
}
