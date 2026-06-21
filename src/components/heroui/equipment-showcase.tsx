"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const EquipmentShowcaseDesktop = dynamic(
  () => import("./modern-equipment-desktop"),
  { ssr: true }
);
const EquipmentShowcaseMobile = dynamic(
  () => import("./equipment-showcase-mobile"),
  { ssr: false }
);

const DESKTOP_BREAKPOINT = 1024;

export default function EquipmentShowcase() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= DESKTOP_BREAKPOINT);
    };
    checkDesktop();
    window.addEventListener("resize", checkDesktop, { passive: true });
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full min-h-screen bg-gradient-to-b from-[#f0f4f8] to-[#eef2ff]" />
    );
  }

  return isDesktop ? (
    <EquipmentShowcaseDesktop />
  ) : (
    <EquipmentShowcaseMobile />
  );
}