"use client";

import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import { Card } from "@/components/ui/card";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import SingleDot from "@/components/icons/single-dot";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

type Props = HTMLAttributes<HTMLDivElement>;

const Goals = ({ className, ...props }: Props) => {
  const chartOptions = {
    chart: {
      type: "radialBar",
      offsetY: -20,
      sparkline: {
        enabled: true,
      },
    },
    colors: ["hsl(var(--card-hover))"],
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: "hsl(var(--card))",
          strokeWidth: "97%",
          margin: 5,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: -2,
            fontSize: "22px",
          },
        },
      },
    },
    grid: {
      padding: {
        top: -10,
      },
    },
    labels: ["Average Results"],
  } as ApexOptions;

  return (
    <Card className={cn("h-[356px] relative", className)} {...props}>
      <div className="p-6 pb-8 text-center">
        <h6 className="text-sm font-semibold">Goals</h6>
        <p className="text-sm text-secondary-foreground">
          Set your daily activity goal.
        </p>
      </div>

      <Chart
        width="100%"
        height={400}
        options={chartOptions}
        series={[76]}
        type="radialBar"
      />

      <div className="absolute bottom-6 left-6 w-[calc(100%-48px)] flex items-center justify-between">
        <p className="text-sm text-secondary-foreground flex items-center">
          <SingleDot className="w-2 h-2 mr-2 text-card-hover" />
          <span>Done</span>
        </p>
        <p className="text-sm text-secondary-foreground flex items-center">
          <SingleDot className="w-2 h-2 mr-2 text-card-hover" />
          <span>Remaining</span>
        </p>
      </div>
    </Card>
  );
};

export default Goals;
