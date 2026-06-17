"use client";

import { nanoid } from "nanoid";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import DonutChart from "@/components/charts/donut-chart";
import { useTheme } from "next-themes";
import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement>;

const WalletSummary = ({ className, ...props }: Props) => {
  const { theme } = useTheme();
  const colors =
    theme === "dark" ? ["#94A3B8", "#CBD5E1"] : ["#CBD5E1", "#334155"];

  return (
    <Card className={cn("p-6", className)} {...props}>
      <div className="flex items-start justify-between mb-9">
        <div>
          <p className="text-lg font-medium">Your Card</p>
          <p className="text-sm font-medium text-secondary-foreground">
            Last 7 days report
          </p>
        </div>

        <Button variant="secondary" size="icon" className="w-8 h-8">
          <MoreHorizontal className="w-4 h-4 text-icon" />
        </Button>
      </div>

      <div className="px-5 py-3 flex items-center justify-between hover:bg-card rounded-2xl mb-6">
        <div>
          <p className="font-semibold mb-2">$2,160.36</p>
          <p className="text-sm font-medium text-secondary-foreground">
            Income
          </p>
        </div>

        <DonutChart
          width="110px"
          height={110}
          colors={colors}
          strokeWidth={0}
          donutSize="75%"
          labels={["EURO", "GBP"]}
          chartSeries={[30, 90]}
        />
      </div>

      <div className="px-5 py-3 flex items-center justify-between hover:bg-card rounded-2xl">
        <div>
          <p className="font-semibold mb-2">$850.65</p>
          <p className="text-sm font-medium text-secondary-foreground">
            Outcome
          </p>
        </div>

        <DonutChart
          width="110px"
          height={110}
          colors={colors}
          strokeWidth={0}
          donutSize="75%"
          labels={["EURO", "GBP"]}
          chartSeries={[30, 90]}
        />
      </div>
    </Card>
  );
};

const avatars = [
  { id: nanoid(), image: "https://github.com/shadcn.png" },
  { id: nanoid(), image: "https://github.com/shadcn.png" },
  { id: nanoid(), image: "https://github.com/shadcn.png" },
  { id: nanoid(), image: "https://github.com/shadcn.png" },
  { id: nanoid(), image: "https://github.com/shadcn.png" },
];

export default WalletSummary;
