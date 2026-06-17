import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";

const ActivityCard = ({ className }: { className?: string }) => {
  return (
    <Card className={cn("", className)}>
      <div className="p-6 flex items-center justify-between">
        <p className="text-lg font-medium">Top Activity</p>

        <Button variant="secondary" size="icon" className="w-8 h-8 rounded-md">
          <MoreHorizontal className="w-4 h-4 text-icon" />
        </Button>
      </div>

      <div className="max-w-[250px] h-[280px] w-full mx-auto relative py-1">
        <div className="absolute top-0 right-0 max-w-[186px] w-full max-h-[186px] h-full bg-secondary-foreground rounded-full flex flex-col items-center justify-center border border-border">
          <p className="font-medium">$17,25,258.69</p>
          <p className="text-xs">Asia</p>
        </div>

        <div className="absolute bottom-12 left-0 max-w-[124px] w-full max-h-[124px] h-full bg-icon-muted rounded-full flex flex-col items-center justify-center border border-border">
          <p className="font-medium">$2,525.25</p>
          <p className="text-xs text-secondary-foreground">Europe</p>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 max-w-[86px] w-full max-h-[86px] h-full bg-muted-foreground rounded-full flex flex-col items-center justify-center border border-border">
          <p className="font-medium">$525</p>
          <p className="text-xs">Africa</p>
        </div>
      </div>
    </Card>
  );
};

export default ActivityCard;
