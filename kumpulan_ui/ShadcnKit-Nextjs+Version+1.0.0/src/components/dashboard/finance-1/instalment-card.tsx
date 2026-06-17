import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const InstalmentCard = ({ className }: { className?: string }) => {
  return (
    <Card className={cn("p-6", className)}>
      <div className="flex items-center justify-between">
        <p className="text-lg font-medium">Instalment</p>
        <Button variant="link">View All</Button>
      </div>

      <div className="pt-2 pb-3">
        <p className="text-sm text-secondary-foreground">
          Electricity Instalments
        </p>

        <Progress
          value={65}
          className="w-full h-2 bg-icon-muted [&>div]:bg-icon-active"
        />
      </div>

      <div className="flex items-center justify-between text-sm">
        <p>Collected</p>
        <p>
          <span className="text-secondary-foreground">$200.00</span>/$300.00
        </p>
      </div>
    </Card>
  );
};

export default InstalmentCard;
