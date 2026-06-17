"use client";

import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import DonutChart from "@/components/charts/donut-chart";
import { useTheme } from "next-themes";

const Reports = ({ className }: { className?: string }) => {
  const { theme } = useTheme();
  const colors =
    theme === "dark" ? ["#94A3B8", "#CBD5E1"] : ["#CBD5E1", "#334155"];

  return (
    <Card className={className}>
      <div className="p-6 pb-3 flex items-center justify-between">
        <p className="text-lg font-medium">Reports</p>

        <Button variant="secondary" size="icon" className="w-8 h-8 rounded-md">
          <MoreHorizontal className="w-4 h-4 text-icon" />
        </Button>
      </div>

      <DonutChart
        height={280}
        legend={true}
        colors={colors}
        labels={["Expense", "Revenue"]}
        chartSeries={[10000, 15000]}
      />
    </Card>
  );
};

export default Reports;
