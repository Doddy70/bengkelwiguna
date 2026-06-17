import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement>;

const StatisticsCard1 = ({ className, ...props }: Props) => {
  return (
    <Card
      className={cn("p-6 h-[230px] flex flex-col justify-between", className)}
      {...props}
    >
      <div>
        <div className="flex items-center gap-2 mb-1">
          <h6 className="text-3xl font-semibold">
            <span className="text-base text-muted-foreground">$</span>51,352
          </h6>
          <span className="text-xs font-medium text-red-500 px-1 py-0.5 rounded-sm bg-card">
            -2.67%
          </span>
        </div>

        <p className="text-sm text-secondary-foreground">Average Daily Sales</p>
      </div>

      <div className="pt-2">
        <div className="text-sm flex items-center justify-between mb-2">
          <p className="font-semibold">1,500 to Goal</p>
          <p className="font-medium text-secondary-foreground">75%</p>
        </div>

        <Progress
          value={65}
          className="w-full h-2 bg-icon-muted [&>div]:bg-icon-active"
        />
      </div>
    </Card>
  );
};

export default StatisticsCard1;
