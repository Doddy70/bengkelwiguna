"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import LineChart from "@/components/charts/line-chart";
import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement>;

const TransactionCard = ({ className, ...props }: Props) => {
  const { theme } = useTheme();
  const colors =
    theme === "dark" ? ["#334155", "#CBD5E1"] : ["#CBD5E1", "#334155"];

  return (
    <Card className={cn("relative pt-6", className)} {...props}>
      <div className="px-6 pt-6 absolute top-0 w-full flex items-start justify-between mb-6">
        <p className="text-lg font-medium">Transactions</p>

        <Button variant="secondary" size="icon" className="w-8 h-8">
          <MoreHorizontal className="w-4 h-4 text-icon" />
        </Button>
      </div>

      <div className="pl-1 pr-2">
        <LineChart
          height={300}
          colors={colors}
          gridColor={"hsl(var(--border))"}
          chartCategories={[
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ]}
          chartSeries={[
            {
              name: "Income",
              data: [
                48000, 40000, 22000, 30000, 28000, 20000, 48000, 25000, 20000,
                44000, 25000, 15000,
              ],
            },
            {
              name: "Expense",
              data: [
                42000, 35000, 28000, 15000, 20000, 30000, 45000, 20000, 30000,
                41000, 35000, 15000,
              ],
            },
          ]}
        />
      </div>
    </Card>
  );
};

export default TransactionCard;
