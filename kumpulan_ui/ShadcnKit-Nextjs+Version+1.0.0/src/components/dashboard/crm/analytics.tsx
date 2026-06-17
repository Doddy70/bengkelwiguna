import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AreaChart from "@/components/charts/area-chart";
import { MoreHorizontal } from "lucide-react";
import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement>;

const Analytics = ({ className, ...props }: Props) => {
  return (
    <Card className={cn("w-full", className)} {...props}>
      <div className="mb-4 pr-6 flex items-center justify-between">
        <div>
          {["Users", "Sessions", "Bounce Rate", "Session Duration"].map(
            (item) => (
              <Button
                key={item}
                variant="secondary"
                className="p-6 h-[68px] bg-transparent rounded-none"
              >
                {item}
              </Button>
            )
          )}
        </div>

        <Button variant="secondary" size="icon" className="w-8 h-8 rounded-md">
          <MoreHorizontal className="w-4 h-4 text-icon" />
        </Button>
      </div>

      <div className="p-6 pb-2">
        <div className="flex items-center gap-2 mb-1">
          <h6 className="font-semibold">22,356</h6>
          <span className="text-xs font-medium text-emerald-500 px-1 py-0.5 rounded-sm bg-card">
            +4.67%
          </span>
        </div>
        <p className="text-sm text-secondary-foreground text-start">
          Last month
        </p>
      </div>

      <div className="pr-3">
        <AreaChart
          height={260}
          colors={["hsl(var(--primary))"]}
          chartSeries={[
            {
              name: "Sales",
              data: [
                8000, 4000, 4500, 17000, 18000, 40000, 18000, 10000, 6000,
                20000,
              ],
            },
          ]}
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
        />
      </div>
    </Card>
  );
};

export default Analytics;
