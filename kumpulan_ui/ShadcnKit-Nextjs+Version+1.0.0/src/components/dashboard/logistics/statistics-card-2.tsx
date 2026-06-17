"use client";

import { cn } from "@/lib/utils";
import merge from "lodash.merge";
import dynamic from "next/dynamic";
import { HTMLAttributes } from "react";
import { Card } from "@/components/ui/card";
import { baseChartOptions } from "@/lib/base-chart-options";
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

type Props = HTMLAttributes<HTMLDivElement>;

const StatisticsCard2 = ({ className, ...props }: Props) => {
  // REACT CHART CATEGORIES LABEL
  const chartCategories = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

  // REACT CHART DATA SERIES
  const chartSeries = [{ name: "Sales", data: [6, 15, 10, 17, 12, 19, 10] }];

  // TOTAL SHIPMENTS REACT CHART OPTIONS
  const totalShipmentChartOptions = merge(baseChartOptions(), {
    stroke: { show: false },
    xaxis: { categories: chartCategories },
    colors: ["hsl(var(--icon-muted))", "hsl(var(--icon-active))"],
    plotOptions: {
      bar: {
        borderRadius: 5,
        distributed: true,
        columnWidth: "70%",
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
    <Card
      className={cn(
        "h-[204px] flex flex-col justify-between bg-primary-foreground",
        className
      )}
      {...props}
    >
      <div className="p-6 pb-0">
        <div className="flex items-center gap-2 mb-1">
          <h6 className="text-2xl font-semibold">12,650</h6>
          <span className="text-xs font-medium text-emerald-500 px-1 py-0.5 rounded-sm bg-card">
            +2.19%
          </span>
        </div>

        <p className="text-sm text-secondary-foreground">Total Shipments</p>
      </div>

      <Chart
        type="bar"
        height={100}
        series={chartSeries}
        options={totalShipmentChartOptions}
      />
    </Card>
  );
};

export default StatisticsCard2;
