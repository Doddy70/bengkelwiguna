import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, MoreHorizontal } from "lucide-react";
import { nanoid } from "nanoid";
import Lightbulb from "@/components/icons/lightbulb";
import HealthCare from "@/components/icons/health-care";
import Hourglass from "@/components/icons/hourglass";
import Building2 from "@/components/icons/building-2";
import { SVGProps } from "react-html-props";

const MySavings = ({ className }: { className?: string }) => {
  return (
    <Card className={cn("p-6", className)}>
      <div className="flex items-center justify-between">
        <p className="text-lg font-medium">My Savings</p>

        <Button variant="secondary" size="icon" className="w-8 h-8 rounded-md">
          <MoreHorizontal className="w-4 h-4 text-icon" />
        </Button>
      </div>

      <div className="flex flex-col gap-3 mt-10">
        {savings.map(({ id, title, amount, Icon }) => (
          <div key={id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button variant="secondary" size="icon" className="h-12 w-12">
                <Icon className="w-4 h-4 text-icon" />
              </Button>
              <div>
                <p className="text-lg font-medium">${amount}</p>
                <p className="text-sm text-secondary-foreground">{title}</p>
              </div>
            </div>

            <ChevronRight className="w-4 h-4 text-icon cursor-pointer" />
          </div>
        ))}
      </div>
    </Card>
  );
};

interface savingType {
  id: string;
  title: string;
  amount: number;
  Icon: (props: SVGProps) => JSX.Element;
}

const savings: savingType[] = [
  {
    id: nanoid(),
    amount: 23560,
    Icon: Lightbulb,
    title: "Emergency",
  },
  {
    id: nanoid(),
    amount: 19489,
    Icon: HealthCare,
    title: "Health",
  },
  {
    id: nanoid(),
    amount: 18889,
    Icon: Hourglass,
    title: "Investment",
  },
  {
    id: nanoid(),
    amount: 21489,
    Icon: Building2,
    title: "Education",
  },
];

export default MySavings;
