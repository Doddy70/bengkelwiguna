import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import DonutChart from "@/components/charts/donut-chart";
import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement>;

const DealType = ({ className, ...props }: Props) => {
  return (
    <Card className={cn("", className)} {...props}>
      <div className="p-6 pb-3 flex items-center justify-between">
        <p className="text-lg font-medium">Deal Type</p>

        <Button variant="secondary" size="icon" className="w-8 h-8 rounded-md">
          <MoreHorizontal className="w-4 h-4 text-icon" />
        </Button>
      </div>

      <DonutChart
        height={280}
        legend={true}
        colors={[
          "hsl(var(--icon))",
          "hsl(var(--icon-muted))",
          "hsl(var(--icon-active))",
        ]}
        dataIndicator={false}
        labels={["Loss", "Won", "Pending"]}
        chartSeries={[30, 30, 40]}
      />
    </Card>
  );
};

export default DealType;
