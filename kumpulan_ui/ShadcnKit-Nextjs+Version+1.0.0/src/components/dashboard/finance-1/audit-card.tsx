import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import RadialBarChart from "@/components/charts/radial-bar-chart";
import { Progress } from "@/components/ui/progress";

const AuditCard = ({ className }: { className?: string }) => {
  return (
    <Card className={cn("p-6", className)}>
      <div className="flex items-center justify-between">
        <p className="text-lg font-medium">Audit</p>

        <Button variant="secondary" size="icon" className="w-8 h-8 rounded-md">
          <MoreHorizontal className="w-4 h-4 text-icon" />
        </Button>
      </div>

      <RadialBarChart
        bgColor="hsl(var(--icon-active))"
        colors={["hsl(var(--icon-active))"]}
        chartSeries={[70]}
      />

      <div>
        <p className="text-xl font-medium">50%</p>
        <p className="text-sm text-secondary-foreground mb-1">Access Grant</p>

        <Progress
          value={65}
          className="w-full h-2 bg-icon-muted [&>div]:bg-icon-active"
        />
      </div>
    </Card>
  );
};

export default AuditCard;
