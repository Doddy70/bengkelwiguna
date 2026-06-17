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
  const chartCategories = [
    "Sat",
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];

  // REACT CHART DATA SERIES
  const chartSeries = [
    {
      name: "Tasks",
      data: [46, 50, 22, 30, 30, 22, 46, 28],
    },
  ];

  // CAMPAIGN SENT REACT CHART OPTIONS
  const campaignChartOptions = merge(baseChartOptions(), {
    stroke: { show: false },
    xaxis: { categories: chartCategories },
    colors: ["hsl(var(--primary))"],
    plotOptions: {
      bar: {
        borderRadius: 5,
        distributed: true,
        columnWidth: "30%",
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
      <div className="p-6 pb-0">
        <h6 className="text-sm font-semibold">Time Spent Exercising</h6>
        <p className="text-sm text-secondary-foreground">
          You have completed more exercise time than usual.
        </p>
      </div>

      <Chart
        type="bar"
        height={300}
        series={chartSeries}
        options={campaignChartOptions}
      />
    </Card>
  );
};

export default TimeSpentExercising;
