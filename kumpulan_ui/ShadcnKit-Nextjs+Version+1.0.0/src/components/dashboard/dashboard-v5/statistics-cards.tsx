import { nanoid } from "nanoid";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { DivProps } from "react-html-props";
import { FolderCheck, IndianRupee, LineChart, Package2 } from "lucide-react";

const StatisticsCards = ({ className, ...props }: DivProps) => {
  return (
    <div
      className={cn(className, "grid grid-cols-2 gap-7 px-12 pt-16 relative")}
      {...props}
    >
      <div className="absolute top-0 left-0 w-full h-64 rounded-lg bg-card"></div>
      {statistics.map(({ id, title, value, status, Icon }) => (
        <Card
          key={id}
          className="p-4 h-44 flex flex-col justify-between relative bg-primary-foreground z-10"
        >
          <div className="flex items-center gap-2.5">
            <Icon className="w-7 h-7 text-icon" />
            <p className="text-lg font-semibold">{title}</p>
          </div>

          <div>
            <h6 className="text-sm font-semibold">{value}</h6>
            <p className="text-sm text-secondary-foreground">{status}</p>
          </div>
        </Card>
      ))}
    </div>
  );
};

const statistics = [
  {
    id: nanoid(),
    title: "Revenue",
    value: "$45k+",
    status: "20% Increase",
    Icon: IndianRupee,
  },
  {
    id: nanoid(),
    title: "Approve",
    value: "561+",
    status: "Since last year",
    Icon: FolderCheck,
  },
  {
    id: nanoid(),
    title: "Monthly",
    value: "2.3k+",
    status: "17% Increase",
    Icon: LineChart,
  },
  {
    id: nanoid(),
    title: "Sales",
    value: "22.1k+",
    status: "12% Increase",
    Icon: Package2,
  },
];

export default StatisticsCards;
