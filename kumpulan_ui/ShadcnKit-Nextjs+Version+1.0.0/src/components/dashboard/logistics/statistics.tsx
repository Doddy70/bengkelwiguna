"use client";

import { cn } from "@/lib/utils";
import merge from "lodash.merge";
import dynamic from "next/dynamic";
import { HTMLAttributes } from "react";
import { ApexOptions } from "apexcharts";
import { Card } from "@/components/ui/card";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import StatisticsCard1 from "./statistics-card-1";
import StatisticsCard2 from "./statistics-card-2";
import StatisticsCard3 from "./statistics-card-3";
import StatisticsCard4 from "./statistics-card-4";
import { baseChartOptions } from "@/lib/base-chart-options";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

type Props = HTMLAttributes<HTMLDivElement>;

const Statistics = ({ className, ...props }: Props) => {
  // REACT CHART CATEGORIES LABEL
  const chartCategories = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

  // REACT CHART DATA SERIES
  const chartSeries = [{ name: "Sales", data: [6, 15, 10, 17, 12, 19, 10] }];

  // REACT CHART OPTIONS
  const chartOptions = merge(baseChartOptions(), {
    colors: ["hsl(var(--icon-active))"],
    markers: { strokeColors: "hsl(var(--icon-active))" },
    grid: {
      show: true,
      strokeDashArray: 3,
      borderColor: "hsl(var(--primary-foreground))",
    },

    xaxis: {
      categories: chartCategories,
      labels: { show: false },
      crosshairs: {
        show: true,
        fill: { color: "hsl(var(--icon-active))" },
        stroke: { color: "hsl(var(--icon-active))" },
      },
    },

    yaxis: {
      min: 0,
      max: 20,
      show: true,
      tickAmount: 2,
      labels: {
        style: { colors: "hsl(var(--icon-active))", fontWeight: 500 },
      },
    },
  } as ApexOptions);

  return (
    <Card className={cn("relative", className)} {...props}>
      <Card className="bg-icon-muted border-none absolute top-0 left-0 w-full h-56">
        <div className="p-6 pb-0 flex items-center justify-between">
          <p className="text-lg font-medium">Last Month Shipment</p>

          <Button
            size="icon"
            variant="secondary"
            className="w-8 h-8 rounded-md"
          >
            <MoreHorizontal className="w-4 h-4 text-icon" />
          </Button>
        </div>

        <Chart
          type="line"
          height={110}
          options={chartOptions}
          series={chartSeries}
          width="100%"
        />
      </Card>

      <div className="p-6 mt-[148px] grid grid-cols-2 gap-6 relative z-10">
        <StatisticsCard1 />
        <StatisticsCard2 />
        <StatisticsCard3 />
        <StatisticsCard4 />
      </div>
    </Card>
  );
};

export default Statistics;
