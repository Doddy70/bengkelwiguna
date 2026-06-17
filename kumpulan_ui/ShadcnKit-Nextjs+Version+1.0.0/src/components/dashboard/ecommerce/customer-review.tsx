import { cn } from "@/lib/utils";
import { nanoid } from "nanoid";
import { Card } from "@/components/ui/card";
import StarFull from "@/components/icons/star-full";
import StarHalf from "@/components/icons/star-half";
import { Progress } from "@/components/ui/progress";

const CustomerReview = ({ className }: { className?: string }) => {
  return (
    <Card className={cn("p-6", className)}>
      <div className="p-5 bg-card rounded-lg flex flex-col gap-2 items-center">
        <div className="flex items-center justify-center text-yellow-500">
          <StarFull className="w-9 h-9" />
          <StarFull className="w-9 h-9" />
          <StarFull className="w-9 h-9" />
          <StarFull className="w-9 h-9" />
          <StarHalf className="w-9 h-9" />
        </div>
        <p className="text-xl font-extrabold">4.5/5</p>
        <p className="text-sm font-medium text-secondary-foreground">
          Total 650 customer review
        </p>
      </div>

      <div className="flex flex-col gap-4 mt-8">
        {reviews.map((item) => (
          <div key={item.id} className="flex items-center justify-between">
            <div className="max-w-[160px] w-full flex items-center">
              <span className="text-sm text-secondary-foreground whitespace-nowrap mr-0.5">
                {item.star} Star
              </span>
              <Progress
                value={item.star * 20}
                className="w-full h-2 bg-icon-muted [&>div]:bg-icon-active"
              />
            </div>

            <span className="text-sm text-secondary-foreground">
              {item.count}%
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
};

const reviews = [
  { id: nanoid(), star: 5, count: 50 },
  { id: nanoid(), star: 4, count: 40 },
  { id: nanoid(), star: 3, count: 30 },
  { id: nanoid(), star: 2, count: 20 },
  { id: nanoid(), star: 1, count: 10 },
];

export default CustomerReview;
