import { nanoid } from "nanoid";
import { cn } from "@/lib/utils";
import { ElementType, HTMLAttributes } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, Euro } from "lucide-react";
import ActionlessBarChart from "@/components/charts/actionless-bar-chart";

type Props = HTMLAttributes<HTMLDivElement>;

const CurrencyCard = ({ className, ...props }: Props) => {
  return (
    <Card
      className={cn(
        "flex flex-col lg:flex-row lg:items-center justify-between",
        className
      )}
      {...props}
    >
      <div className="p-6">
        <p className="text-lg font-medium mb-7">Current Currency</p>

        <div className="flex flex-col items-center gap-4">
          {currency.map((item) => (
            <div
              key={item.id}
              className="w-full lg:w-[160px] lg:w-[180px] xl:w-[240px] flex items-center justify-between"
            >
              <div className="flex items-center">
                <Button variant="secondary" size="icon">
                  <item.Icon className="w-4 h-4 text-muted-foreground" />
                </Button>
                <p className="ml-3 font-medium">{item.title}</p>
              </div>

              <div className="text-sm text-end">
                <p className="font-medium">{item.value1}%</p>
                <p
                  className={
                    item.value2 > 0 ? "text-red-500" : "text-emerald-500"
                  }
                >
                  {item.value2}%
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center pt-8 lg:pt-0">
        <ActionlessBarChart
          height={180}
          colors={["hsl(var(--primary))"]}
          chartCategories={["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"]}
          chartSeries={[{ name: "Tasks", data: [22, 30, 46, 50, 46, 30, 22] }]}
        />
      </div>
    </Card>
  );
};

interface currencyType {
  id: string;
  title: string;
  value1: number;
  value2: number;
  Icon: ElementType;
}
const currency: currencyType[] = [
  {
    id: nanoid(),
    title: "USD",
    Icon: DollarSign,
    value1: 94.65,
    value2: 2.5,
  },
  {
    id: nanoid(),
    title: "EURO",
    Icon: Euro,
    value1: 26.37,
    value2: -1.56,
  },
  {
    id: nanoid(),
    title: "GBP",
    Icon: DollarSign,
    value1: 55.24,
    value2: 3.23,
  },
];

export default CurrencyCard;
