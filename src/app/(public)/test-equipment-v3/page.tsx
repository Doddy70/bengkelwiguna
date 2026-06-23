import React from "react";
import ModernEquipmentV3 from "@/components/heroui/ModernEquipmentV3";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "V3 Hotspot Concept Test",
  description: "Testing the new Interactive Vehicle Diagnostic Experience",
};

export default function TestEquipmentV3Page() {
  return (
    <main className="min-h-screen bg-black">
      <ModernEquipmentV3 />
    </main>
  );
}
