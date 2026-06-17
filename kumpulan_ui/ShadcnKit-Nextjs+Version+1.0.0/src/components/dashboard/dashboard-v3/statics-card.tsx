import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import ActionlessAreaChart from "@/components/charts/actionless-area-chart";
import { Card } from "@/components/ui/card";
import { IndianRupee } from "lucide-react";

type Props = HTMLAttributes<HTMLDivElement>;

const StaticsCard = ({ className, ...props }: Props) => {
  return (
    <Card className={cn("p-6 h-44", className)} {...props}>
      <div className="flex items-center pr-2.5">
        <IndianRupee className="w-7 h-7 text-icon" />
        <p className="text-lg font-semibold">Revenue</p>
      </div>

      <div className="flex items-end justify-between">
        <div className="">
          <h6 className="text-sm font-semibold">$45k+</h6>
          <p className="text-sm text-secondary-foreground">20% Increase</p>
        </div>

        <div className="max-w-[150px] h-[100px] w-full">
          <ActionlessAreaChart
            height={110}
            colors={["hsl(var(--primary))"]}
            chartCategories={["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"]}
            chartSeries={[
              { name: "Tasks", data: [0, 60, 90, 80, 100, 70, 80] },
            ]}
          />
        </div>
      </div>
    </Card>
  );
};

export default StaticsCard;
