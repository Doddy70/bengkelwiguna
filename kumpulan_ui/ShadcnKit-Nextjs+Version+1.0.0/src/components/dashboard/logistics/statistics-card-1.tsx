import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement>;

const StatisticsCard1 = ({ className, ...props }: Props) => {
  return (
    <Card
      className={cn(
        "p-6 h-[204px] flex flex-col justify-between bg-primary-foreground",
        className
      )}
      {...props}
    >
      <div>
        <div className="flex items-center gap-2 mb-1">
          <h6 className="text-2xl font-semibold">$50K</h6>
          <span className="text-xs font-medium text-emerald-500 px-1 py-0.5 rounded-sm bg-card">
            +4.67%
          </span>
        </div>

        <p className="text-sm text-secondary-foreground">Total Online Sales</p>
      </div>

      <div className="">
        <p className="text-xs font-semibold mb-2">$100K to Goal</p>

        <Progress
          value={65}
          className="w-full h-2 bg-icon-muted [&>div]:bg-icon-active"
        />
      </div>
    </Card>
  );
};

export default StatisticsCard1;
