"use client";

import React, { useState } from "react";
import { Promosi } from "@/types/wordpress";
import UIMainSlider, { UIMainSlide } from "./UIMainSlider";
import { useDisclosure } from "@nextui-org/react";
import PromoModal from "@/components/heroui/PromoModal";
import { stripHtml } from "@/lib/wordpress";

interface WrapperProps {
  promos: Promosi[];
}

export default function UIMainSliderWrapper({ promos }: WrapperProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedPromo, setSelectedPromo] = useState<Promosi | null>(null);

  const slides: UIMainSlide[] = promos.map((promo, idx) => {
    const title = typeof promo.title === 'string' ? promo.title : promo.title?.rendered || '';
    const excerpt = typeof promo.excerpt === 'string' ? promo.excerpt : promo.excerpt?.rendered;
    const subtitle = excerpt 
      ? stripHtml(excerpt).slice(0, 100) + "..." 
      : "Promo Spesial Bengkel Wiguna";

    return {
      id: promo.id || idx,
      src: promo.featured_img || "/images/home-bg-3.svg",
      title: title,
      subtitle: subtitle,
      link: `/promosi/${promo.slug}`,
    };
  });

  const handleSlideClick = (idx: number) => {
    setSelectedPromo(promos[idx]);
    onOpen();
  };

  return (
    <>
      <UIMainSlider slides={slides} onSlideClick={handleSlideClick} />
      <PromoModal isOpen={isOpen} onOpenChange={onOpenChange} promo={selectedPromo} />
    </>
  );
}
