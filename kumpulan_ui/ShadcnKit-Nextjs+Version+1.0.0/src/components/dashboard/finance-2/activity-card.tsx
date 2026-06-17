import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import PieChart from "@/components/charts/pie-chart";

const ActivityCard = ({ className }: { className?: string }) => {
  return (
    <Card className={cn("pb-6", className)}>
      <div className="p-6 flex items-center justify-between">
        <p className="text-lg font-medium">Top Activity</p>

        <Button variant="secondary" size="icon" className="w-8 h-8 rounded-md">
          <MoreHorizontal className="w-4 h-4 text-icon" />
        </Button>
      </div>

      <PieChart
        height={290}
        colors={[
          "hsl(var(--secondary-foreground))",
          "hsl(var(--muted-foreground))",
          "hsl(var(--icon-muted))",
        ]}
        chartSeries={[55, 45, 33]}
        chartCategories={["Asia", "Europe", "Africa"]}
      />
    </Card>
  );
};

export default ActivityCard;
