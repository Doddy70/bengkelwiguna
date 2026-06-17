"use client";

import { cn } from "@/lib/utils";
import merge from "lodash.merge";
import dynamic from "next/dynamic";
import { HTMLAttributes } from "react";
import { ApexOptions } from "apexcharts";
import { Card } from "@/components/ui/card";
import { baseChartOptions } from "@/lib/base-chart-options";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

type Props = HTMLAttributes<HTMLDivElement>;

const TimeSpentExercising = ({ className, ...props }: Props) => {
  // REACT CHART CATEGORIES LABEL
  const chartCategories = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

  // REACT CHART DATA SERIES
  const chartSeries = [{ name: "Sales", data: [10, 0, 100, 50, 60, 70, 40] }];

  // REACT CHART OPTIONS
  const chartOptions = merge(baseChartOptions(), {
    colors: ["hsl(var(--icon-active))"],
    markers: { strokeColors: "hsl(var(--icon-active))" },
    grid: { show: false },
    yaxis: { show: false },
    xaxis: {
      categories: chartCategories,
      labels: { show: false },
      crosshairs: {
        show: true,
        fill: { color: "hsl(var(--icon-active))" },
        stroke: { color: "hsl(var(--icon-active))" },
      },
    },
  } as ApexOptions);
  return (
    <Card
      className={cn("px-4 flex flex-col justify-between h-[356px]", className)}
      {...props}
    >
      <div className="px-2 pt-6 pb-0">
        <h6 className="text-lg font-semibold">Time Spent Exercising</h6>
        <p className="text-sm text-secondary-foreground">
          You have completed more exercise time than usual.
        </p>
      </div>

      <Chart
        type="line"
        height={260}
        options={chartOptions}
        series={chartSeries}
        width="100%"
      />
    </Card>
  );
};

export default TimeSpentExercising;
