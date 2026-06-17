"use client";

import { cn } from "@/lib/utils";
import merge from "lodash.merge";
import { HTMLAttributes } from "react";
import { Card } from "@/components/ui/card";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { baseChartOptions } from "@/lib/base-chart-options";
import { ApexOptions } from "apexcharts";
import { format } from "@/lib/currency";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

type Props = HTMLAttributes<HTMLDivElement>;

const YouTubeCampaign = ({ className, ...props }: Props) => {
  // REACT CHART CATEGORIES LABEL
  const chartCategories = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

  // REACT CHART DATA SERIES
  const chartSeries = [{ name: "Tasks", data: [22, 30, 46, 50, 46, 30, 22] }];

  // REACT CHART OPTIONS
  const chartOptions = merge(baseChartOptions(), {
    stroke: { show: false },
    xaxis: { categories: chartCategories },
    colors: ["hsl(var(--icon-muted))", "hsl(var(--icon-active))"],
    plotOptions: {
      bar: {
        borderRadius: 10,
        distributed: true,
        columnWidth: "50%",
        borderRadiusApplication: "end",
      },
    },
    tooltip: {
      y: {
        formatter: (val: number, { dataPointIndex, w }) => {
          return `${w.globals.labels[dataPointIndex]} : ${val}`;
        },
      },
    },
  } as ApexOptions);

  return (
    <Card className={cn("", className)} {...props}>
      <div className="p-6 flex items-center justify-between">
        <p className="text-lg font-medium">YouTube Campaign</p>

        <Button variant="secondary" size="icon" className="w-8 h-8 rounded-md">
          <MoreHorizontal className="w-4 h-4 text-icon" />
        </Button>
      </div>

      <div className="px-6 pt-3 flex flex-wrap items-center gap-8">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h6 className="text-xl font-semibold">$18,469</h6>
            <span className="text-xs font-medium text-red-500 px-1 py-0.5 rounded-sm bg-card">
              -2.37%
            </span>
          </div>
          <p className="text-sm text-secondary-foreground text-start">
            This month
          </p>
        </div>

        <div>
          <h6 className="text-xl font-semibold mb-1">22,356</h6>

          <p className="text-sm text-secondary-foreground text-start">
            Last month
          </p>
        </div>
      </div>

      <Chart
        type="bar"
        height={260}
        series={chartSeries}
        options={chartOptions}
      />
    </Card>
  );
};

export default YouTubeCampaign;
