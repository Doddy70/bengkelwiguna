"use client";

import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, Euro } from "lucide-react";
import DonutChart from "@/components/charts/donut-chart";
import { useTheme } from "next-themes";
import { nanoid } from "nanoid";
import { ElementType, HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement>;

const CurrencyCard = ({ className, ...props }: Props) => {
  const { theme } = useTheme();
  const colors =
    theme === "dark"
      ? ["#334155", "#94A3B8", "#CBD5E1"]
      : ["#F8FAFC", "#CBD5E1", "#334155"];

  return (
    <Card
      className={cn(
        "flex flex-col lg:flex-row lg:items-center justify-between",
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-center pt-8 lg:pt-0">
        <DonutChart
          colors={colors}
          labels={["USD", "EURO", "GBP"]}
          chartSeries={[33, 33, 33]}
        />
      </div>

      <div className="p-6">
        <p className="text-lg font-medium mb-7">Current Currency</p>

        <div className="flex flex-col items-center gap-4">
          {currency.map((item) => (
            <div
              key={item.id}
              className="w-full lg:w-[160px] lg:w-[180px] xl:w-[240px] flex items-center justify-between"
            >
              <div className="flex items-center">
                <Button variant="secondary" size="icon">
                  <item.Icon className="w-4 h-4 text-muted-foreground" />
                </Button>
                <p className="ml-3 font-medium">{item.title}</p>
              </div>

              <div className="text-sm text-end">
                <p className="font-medium">{item.value1}%</p>
                <p
                  className={
                    item.value2 > 0 ? "text-red-500" : "text-emerald-500"
                  }
                >
                  {item.value2}%
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

interface currencyType {
  id: string;
  title: string;
  value1: number;
  value2: number;
  Icon: ElementType;
}
const currency: currencyType[] = [
  {
    id: nanoid(),
    title: "USD",
    Icon: DollarSign,
    value1: 94.65,
    value2: 2.5,
  },
  {
    id: nanoid(),
    title: "EURO",
    Icon: Euro,
    value1: 26.37,
    value2: -1.56,
  },
  {
    id: nanoid(),
    title: "GBP",
    Icon: DollarSign,
    value1: 55.24,
    value2: 3.23,
  },
];

export default CurrencyCard;
