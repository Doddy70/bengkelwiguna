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

const TopSellingCategories = ({ className, ...props }: Props) => {
  // REACT CHART DATA SERIES
  const chartSeries = [
    {
      name: "Sales",
      data: [30000, 20000, 45000, 40000, 48000, 25000, 40000],
    },
  ];

  // REACT CHART CATEGORIES LABEL
  const chartCategories = [
    "70% ECR",
    "FGI 50%",
    "EOQ 80%",
    "FMG 75%",
    "PLG 90%",
    "OLX 60%",
    "FCR 70%",
  ];

  // REACT CHART OPTIONS
  const chartOptions = merge(baseChartOptions(), {
    stroke: { width: 0 },
    colors: ["hsl(var(--icon-muted))", "hsl(var(--icon-active))"],
    grid: {
      show: true,
      strokeDashArray: 3,
      borderColor: "hsl(var(--border))",
    },
    xaxis: {
      crosshairs: { show: true },
      categories: chartCategories,
      labels: {
        show: true,
        style: { colors: "hsl(var(--secondary-foreground))" },
      },
    },
    yaxis: {
      min: 0,
      show: true,
      max: 50000,
      tickAmount: 5,
      labels: {
        formatter: (value) => format(value),
        style: { colors: "hsl(var(--secondary-foreground))" },
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 15,
        distributed: true,
        columnWidth: "30",
        borderRadiusApplication: "end",
      },
    },

    tooltip: {
      y: {
        formatter: function (val: number, { dataPointIndex, w }) {
          return `${w.globals.labels[dataPointIndex]} : $${format(val)}`;
        },
      },
    },

    responsive: [
      {
        // breakpoint: theme.breakpoints.values.sm,
        options: {
          plotOptions: { bar: { borderRadius: 10, horizontal: true } },
          xaxis: { labels: { formatter: (value: number) => format(value) } },
          yaxis: {
            show: true,
            labels: {
              style: {
                fontWeight: 500,
                colors: "hsl(var(--secondary-foreground))",
                // fontFamily: theme.typography.fontFamily,
              },
            },
          },
        },
      },
    ],
  } as ApexOptions);

  return (
    <Card className={cn("", className)} {...props}>
      <div className="p-6 flex items-center justify-between">
        <p className="text-lg font-medium">Top Categories</p>

        <Button variant="secondary" size="icon" className="w-8 h-8 rounded-md">
          <MoreHorizontal className="w-4 h-4 text-icon" />
        </Button>
      </div>

      <Chart
        type="bar"
        height={300}
        series={chartSeries}
        options={chartOptions}
      />
    </Card>
  );
};

export default TopSellingCategories;
