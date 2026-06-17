"use client";

import { cn } from "@/lib/utils";
import { nanoid } from "nanoid";
import merge from "lodash.merge";
import dynamic from "next/dynamic";
import { HTMLAttributes } from "react";
import { ApexOptions } from "apexcharts";
import { Card } from "@/components/ui/card";
import { baseChartOptions } from "@/lib/base-chart-options";
import { Progress } from "@/components/ui/progress";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

type Props = HTMLAttributes<HTMLDivElement>;

const StatisticsCard = ({ className, ...props }: Props) => {
  // REACT CHART CATEGORIES LABEL
  const chartCategories = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

  // REACT CHART DATA SERIES
  const chartSeries = [
    {
      name: "Tasks",
      data: [22, 30, 46, 50, 46, 30, 22],
    },
  ];

  // CAMPAIGN SENT REACT CHART OPTIONS
  const campaignChartOptions = merge(baseChartOptions(), {
    stroke: { show: false },
    xaxis: { categories: chartCategories },
    colors: ["hsl(var(--icon-active))", "hsl(var(--icon-muted))"],
    plotOptions: {
      bar: {
        borderRadius: 7,
        distributed: true,
        columnWidth: "40%",
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

  // AVERAGE DEALS REACT CHART OPTIONS
  const dealsChartOptions = merge(baseChartOptions(), {
    stroke: {
      width: 2,
      colors: ["hsl(var(--primary-foreground))"],
    },
    labels: ["Cloths", "Foods", "Others"],
    colors: [
      "hsl(var(--icon))",
      "hsl(var(--border-hover))",
      "hsl(var(--card))",
    ],
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: { size: "70%" },
      },
    },
    tooltip: {
      style: { fontSize: "14px" },
      y: { title: (name: string) => name, formatter: (val) => `${val}` },
    },
  } as ApexOptions);

  return (
    <Card
      className={cn(className, "grid grid-cols-1 lg:grid-cols-3 gap-7")}
      {...props}
    >
      <div className="w-full">
        <div className="p-6 pb-2">
          <div className="flex items-center gap-2 mb-1">
            <h6 className="font-semibold">1,352</h6>
            <span className="text-xs font-medium text-emerald-500 px-1 py-0.5 rounded-sm bg-card">
              +4.67%
            </span>
          </div>
          <p className="text-sm text-secondary-foreground text-start">
            Campaign Sent
          </p>
        </div>

        <Chart
          type="bar"
          height={130}
          series={chartSeries}
          options={campaignChartOptions}
        />
      </div>

      <div className="w-full p-6">
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-1">
            <h6 className="font-semibold">
              <span className="text-base font-medium text-muted-foreground">
                $
              </span>
              51,352
            </h6>
            <span className="text-xs font-medium text-emerald-500 px-1 py-0.5 rounded-sm bg-card">
              +12.5%
            </span>
          </div>

          <p className="text-sm text-secondary-foreground text-start">
            Average Deals
          </p>
        </div>

        <div className="flex items-center justify-between">
          <Chart
            type="donut"
            width={130}
            height={130}
            options={dealsChartOptions}
            series={averages.reduce(
              (prev: number[], curr) => [...prev, curr.amount],
              []
            )}
          />
          <ul className="w-[120px] flex flex-col gap-3 ">
            {averages.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between text-sm font-medium"
              >
                <p className="text-secondary-foreground">{item.title}</p>
                <p>${item.amount}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-full flex flex-col justify-between p-6">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-1">
            <h6 className="font-semibold">
              <span className="text-base font-medium text-muted-foreground">
                $
              </span>
              51,352
            </h6>
            <span className="text-xs font-medium text-emerald-500 px-1 py-0.5 rounded-sm bg-card">
              -2.65%
            </span>
          </div>

          <p className="text-sm text-secondary-foreground text-start">
            Annual Profit
          </p>
        </div>

        <div className="pt-2 pb-3">
          <div className="text-sm flex items-center justify-between mb-2">
            <p className="font-semibold">1,500 to Goal</p>
            <p className="font-medium text-secondary-foreground">75%</p>
          </div>

          <Progress
            value={65}
            className="w-full h-2 bg-icon-muted [&>div]:bg-emerald-500"
          />
        </div>
      </div>
    </Card>
  );
};

// CUSTOM DUMMY DATA LIST
const averages = [
  { id: nanoid(), title: "Cloths", amount: 2658 },
  { id: nanoid(), title: "Foods", amount: 6687 },
  { id: nanoid(), title: "Others", amount: 4348 },
];

export default StatisticsCard;
