import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import BarChart from "@/components/charts/bar-chart";

const Sales = ({ className }: { className?: string }) => {
  return (
    <Card className={cn("", className)}>
      <div className="p-6 pb-0 flex items-center justify-between">
        <p className="text-lg font-medium">Sales</p>

        <Button variant="secondary" size="icon" className="w-8 h-8 rounded-md">
          <MoreHorizontal className="w-4 h-4 text-icon" />
        </Button>
      </div>

      <div className="pr-3">
        <BarChart
          height={320}
          columnRadius={10}
          columnWidth="30%"
          colors={["hsl(var(--icon-muted))", "hsl(var(--primary))"]}
          chartCategories={["SAT", "SUN", "MON", "TUE", "WED", "THU", "FRI"]}
          chartSeries={[
            {
              name: "Sales",
              data: [28000, 13000, 18000, 22000, 11000, 30000, 20000],
            },
          ]}
        />
      </div>
    </Card>
  );
};

export default Sales;
