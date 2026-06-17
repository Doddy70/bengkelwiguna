import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import ActionlessBarChart from "@/components/charts/actionless-bar-chart";

const StatisticsCard2 = ({ className }: { className?: string }) => {
  return (
    <Card className={cn("h-[230px] flex flex-col justify-between", className)}>
      <div className="p-6 pb-0">
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

        <p className="text-sm text-secondary-foreground">Average Daily Sales</p>
      </div>

      <ActionlessBarChart
        height={120}
        colors={["hsl(var(--icon-muted))"]}
        chartCategories={["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"]}
        chartSeries={[{ name: "Tasks", data: [70, 60, 90, 80, 100, 70, 80] }]}
      />
    </Card>
  );
};

export default StatisticsCard2;
