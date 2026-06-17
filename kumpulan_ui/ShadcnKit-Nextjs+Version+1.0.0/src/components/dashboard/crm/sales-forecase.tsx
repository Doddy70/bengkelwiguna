"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { Card } from "@/components/ui/card";
import { HTMLAttributes } from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import { format } from "@/lib/currency";
import merge from "lodash.merge";
import { baseChartOptions } from "@/lib/base-chart-options";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

type Props = HTMLAttributes<HTMLDivElement>;

const SalesForecase = ({ className, ...props }: Props) => {
  // REACT CHART CATEGORIES LABEL
  const chartCategories = ["Goal", "Pending", "Profit"];

  // REACT CHART DATA SERIES
  const chartSeries = [{ name: "Sales", data: [50000, 28000, 40000] }];

  // REACT CHART OPTIONS
  const chartOptions = merge(baseChartOptions(), {
    stroke: { width: 0 },
    grid: {
      show: true,
      strokeDashArray: 3,
      borderColor: "hsl(var(--border))",
    },
    colors: [
      "hsl(var(--icon-active))",
      "hsl(var(--icon))",
      "hsl(var(--icon-muted))",
    ],
    xaxis: {
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
      tickAmount: 3,
      labels: {
        formatter: (value) => format(value),
        style: { colors: "hsl(var(--secondary-foreground))" },
      },
    },

    plotOptions: {
      bar: {
        borderRadius: 9,
        distributed: true,
        columnWidth: "17%",
        borderRadiusApplication: "end",
      },
    },

    tooltip: {
      y: {
        formatter: function (val: number, { dataPointIndex, w }) {
          return `${w.globals.labels[dataPointIndex]} : ${format(val)}`;
        },
      },
    },
  } as ApexOptions);

  return (
    <Card className={cn("overflow-hidden", className)} {...props}>
      <div className="p-6 flex items-center justify-between">
        <p className="text-lg font-medium">Sales Forecase</p>

        <Button variant="secondary" size="icon" className="w-8 h-8 rounded-md">
          <MoreHorizontal className="w-4 h-4 text-icon" />
        </Button>
      </div>

      <Chart
        type="bar"
        height={220}
        series={chartSeries}
        options={chartOptions}
      />
    </Card>
  );
};

export default SalesForecase;
