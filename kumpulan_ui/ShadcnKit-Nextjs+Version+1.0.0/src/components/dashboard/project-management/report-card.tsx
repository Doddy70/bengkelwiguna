import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import LineChart from "@/components/charts/line-chart";
import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement>;

const ReportCard = ({ className, ...props }: Props) => {
  return (
    <Card className={cn("relative pt-6", className)} {...props}>
      <p className="absolute left-6 top-6 text-lg font-medium">Reports</p>

      <div className="pl-1 pr-2">
        <LineChart
          height={300}
          legendHorizontalPosition="right"
          colors={["hsl(var(--icon-active))", "hsl(var(--icon-muted))"]}
          gridColor={"hsl(var(--border))"}
          chartCategories={[
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ]}
          chartSeries={[
            {
              name: "Income",
              data: [
                48000, 40000, 22000, 30000, 28000, 20000, 48000, 25000, 20000,
                44000, 25000, 15000,
              ],
            },
            {
              name: "Expense",
              data: [
                42000, 35000, 28000, 15000, 20000, 30000, 45000, 20000, 30000,
                41000, 35000, 15000,
              ],
            },
          ]}
        />
      </div>
    </Card>
  );
};

export default ReportCard;
