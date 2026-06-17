import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowUp } from "lucide-react";
import ThemeBasedImage from "@/components/theme-based-image";
import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement>;

const BalanceCard = ({ className, ...props }: Props) => {
  return (
    <Card
      className={cn(
        "p-6 flex flex-col lg:flex-row lg:items-center justify-between",
        className
      )}
      {...props}
    >
      <div>
        <div>
          <h6 className="font-semibold mb-1">$21,350.25</h6>
          <p className="text-sm text-secondary-foreground">My Balance</p>
        </div>

        <div className="flex items-center justify-center lg:justify-start gap-7 py-9">
          <div className="flex items-center">
            <Button variant="secondary" size="icon">
              <ArrowUp className="w-4 h-4 text-emerald-500" />
            </Button>
            <div className="ml-3">
              <p className="font-semibold">14,210.15</p>
              <p className="text-sm text-secondary-foreground">Income</p>
            </div>
          </div>

          <div className="flex items-center">
            <Button variant="secondary" size="icon">
              <ArrowDown className="w-4 h-4 text-red-500" />
            </Button>
            <div className="ml-3">
              <p className="font-semibold">7,352.17</p>
              <p className="text-sm text-secondary-foreground">Expance</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center lg:justify-start gap-4">
          <Button className="w-[100px]">Send</Button>
          <Button
            variant="secondary"
            className="w-[100px] text-muted-foreground"
          >
            Receive
          </Button>
        </div>
      </div>

      <div className="flex justify-center lg:justify-end pt-8 lg:pt-0">
        <ThemeBasedImage
          width={190}
          height={210}
          lightSrc="/assets/svg/balance-card-light.svg"
          darkSrc="/assets/svg/balance-card-dark.svg"
          alt="shadcnkit"
        />
      </div>
    </Card>
  );
};

export default BalanceCard;
